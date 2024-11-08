import { useEffect, useState } from "react";

interface FetchState<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
}

export default function useFetch<T>(fetchFunction: () => Promise<T>): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    error: null,
    isLoading: true,
  })

  async function fetchData(): Promise<void> {
    try {
      if (import.meta.env.MODE == 'development') {
        await new Promise((resolve, _reject) => setTimeout(resolve, 2000));
      }
      const result = await fetchFunction();

      setState({ data: result, error: null, isLoading: false })

    } catch (err) {
      if (err instanceof Error) {
        setState({ data: null, error: err.message, isLoading: false })
      } else {
        setState({ data: null, error: 'ERROR', isLoading: false })
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return state;
}