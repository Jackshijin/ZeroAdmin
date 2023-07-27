/*
 * @Description:
 * @Author: shrijin
 * @Date: 2023-07-19 16:01:59
 * @LastEditors: shrijin
 * @LastEditTime: 2023-07-19 16:02:08
 */
import { http } from "@/utils/http";

type Result = {
  success: boolean;
  data: Array<any>;
};

/** 地图数据 */
export const mapJson = (params?: object) => {
  return http.request<Result>("get", "/getMapInfo", { params });
};
