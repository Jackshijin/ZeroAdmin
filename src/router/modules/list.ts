import { list } from "@/router/enums";

export default {
  path: "/list",
  redirect: "/list/card",
  meta: {
    icon: "listCheck",
    title: "列表页",
    rank: list
  },
  children: [
    {
      path: "/list/card",
      name: "ListCard",
      component: () => import("@/views/lists/card/index.vue"),
      meta: {
        icon: "card",
        title: "卡片列表页",
        showParent: true
      }
    }
  ]
} as RouteConfigsTable;
