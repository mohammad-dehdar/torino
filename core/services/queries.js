import { useQuery } from "@tanstack/react-query";

import api from "../config/api";
import queryString from "query-string";


const useGetUserData = () => {
  const queryFn = () => api.get("user/profile");
  const queryKey = ["user-data"];

  return useQuery({ queryFn, queryKey });
};

const useGetTours = (query) => {
  const url = "tour?" + queryString.stringify(query);

  const queryFn = () => api.get(url);
  const queryKey = ["tour", query];

  return useQuery({ queryFn, queryKey, enabled: false });
};



export { useGetUserData, useGetTours };