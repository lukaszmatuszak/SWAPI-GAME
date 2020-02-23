import { useEffect, useState } from 'react';

const fetchData = <T>(
    url: string,
    controller: AbortController,
    results: T[] = [],
): Promise<T[]> =>
    fetch(url, { signal: controller.signal })
        .then(res => res.json())
        .then(data => {
            if (data?.next) {
                return fetchData(data.next, controller, [
                    ...results,
                    ...data?.results,
                ]);
            }

            return [...results, ...data?.results];
        });

export const useFetch = <T>(url: string): [T[], boolean] => {
    const [results, setResults] = useState<T[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const controller = new AbortController();

    useEffect(() => {
        fetchData<T>(url, controller)
            .then(data => setResults(data))
            .finally(() => {
                setIsLoading(false);
            });

        return (): void => controller.abort();
    }, [url]);

    return [results, isLoading];
};
