/*
 * @Description:
 * @Author: shrijin
 * @Date: 2023-07-26 10:28:30
 * @LastEditors: shrijin
 * @LastEditTime: 2023-07-26 10:28:52
 */
import { flowchart } from "@/router/enums";

export default {
  path: "/flowChart",
  redirect: "/flowChart/index",
  meta: {
    icon: "setUp",
    title: "流程图",
    rank: flowchart
  },
  children: [
    {
      path: "/flowChart/index",
      name: "FlowChart",
      component: () => import("@/views/flow-chart/index.vue"),
      meta: {
        title: "流程图"
      }
    }
  ]
} as RouteConfigsTable;
