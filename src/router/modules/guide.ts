/*
 * @Description:
 * @Author: shrijin
 * @Date: 2023-07-26 11:19:18
 * @LastEditors: shrijin
 * @LastEditTime: 2023-07-26 11:23:53
 */

import { guide } from "@/router/enums";

export default {
  path: "/guide",
  redirect: "/guide/index",
  meta: {
    icon: "guide",
    title: "引导",
    rank: guide
  },
  children: [
    {
      path: "/guide/index",
      name: "Guide",
      component: () => import("@/views/guide/index.vue"),
      meta: {
        title: "引导页"
      }
    }
  ]
} as RouteConfigsTable;
