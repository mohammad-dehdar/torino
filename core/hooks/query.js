import { useRouter, useSearchParams } from "next/navigation";

const useQuery = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const addQuery = (key, value) => {
    value = String(value);
    params.set(key, value);
    router.replace({ pathname: router.pathname, search: params.toString() });
  };

  const removeQuery = (key) => {
    params.delete(key);
    router.replace(`?${params}`);
  };

  const getQuery = (key) => {
    return params.get(key);
  };

  const clearQuery = () => {
    router.replace({ pathname: router.pathname });
  };

  return { addQuery, removeQuery, getQuery, clearQuery };
};


export default useQuery;