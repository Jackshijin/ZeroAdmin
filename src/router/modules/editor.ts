import { editor } from "../enums";
export default {
  path: "/editor",
  redirect: "/editor/index",
  meta: {
    icon: "edit",
    title: "编辑器",
    rank: editor
  },
  children: [
    {
      path: "/editor/index",
      name: "Editor",
      component: () => import("@/views/editor/index.vue"),
      meta: {
        title: "wangeditor",
        keepAlive: true
      }
    }
  ]
} as RouteConfigsTable;
