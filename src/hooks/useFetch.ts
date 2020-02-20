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

export const useFetch = <T>(url: string): [T[], boolean] => {
    const [results, setResults] = useState<T[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchData<T>(url)
            .then(data => setResults(data))
            .finally(() => {
                setIsLoading(false);
            });
    }, [url]);

    return [results, isLoading];
};
