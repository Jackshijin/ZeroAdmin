/*
 * @Description:
 * @Author: shrijin
 * @Date: 2023-07-19 17:03:27
 * @LastEditors: shrijin
 * @LastEditTime: 2023-07-20 11:08:36
 */

import segmented from "./src/index";
import { withInstall } from "@pureadmin/utils";

/** 分段控制器组件 */
export const Segmented = withInstall(segmented);

export default Segmented;
export type { OptionsType } from "./src/type";
