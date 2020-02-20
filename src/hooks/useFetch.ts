import { useEffect, useState } from 'react';

const fetchData = <T>(url: string, results: T[] = []): Promise<T[]> =>
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data?.next) {
                return fetchData(data.next, [...results, ...data?.results]);
            }

            return [...results, ...data?.results];
        });

export const useFetch = <T>(url: string): T[] => {
    const [results, setResults] = useState<T[]>([]);

    useEffect(() => {
        fetchData<T>(url).then(data => setResults(data));
    }, [url]);

    return results;
};
