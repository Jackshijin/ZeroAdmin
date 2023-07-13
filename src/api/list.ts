import { http } from "@/utils/http";

type Result = {
  success: boolean;
  data?: {
    list: Array<any>;
  };
};

export const getCardList = (data?: object) => {
  return http.request<Result>("post", "/getCardList", { data });
};

export const getReleases = () => {
  return http.request<Result>("get", "/releases");
};
