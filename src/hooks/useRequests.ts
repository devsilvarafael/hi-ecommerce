import useSWR from "swr";
import api from "../services/api";

const fetcher = (url: string) => api.get(url).then((res) => res.data);

const useRequests = (url: string) => {
  const { data } = useSWR(`${url}`, fetcher);

  return data;
};

export default useRequests;
