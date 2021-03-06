import useSWR from "swr";
import api from "../services/api";

const fetcher = (url: string) => api.get(url).then((res) => res.data);

function useFetch(url: string) {
  const { data } = useSWR(`${url}`, fetcher);

  return data;
}

export default useFetch;
