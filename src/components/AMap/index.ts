/*
 * @Description:
 * @Author: shrijin
 * @Date: 2023-07-19 15:36:29
 * @LastEditors: shrijin
 * @LastEditTime: 2023-07-19 16:05:55
 */
import amap from "./src/Amap.vue";
import { withInstall } from "@pureadmin/utils";

/** 高德地图组件 */
export const Amap = withInstall(amap);

export default Amap;
