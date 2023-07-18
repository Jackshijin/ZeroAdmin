import { components } from "@/router/enums";
export default {
  path: "/components",
  redirect: "/components/dialog",
  meta: {
    icon: "menu",
    title: "各类组件",
    rank: components
  },
  children: [
    {
      path: "/components/button",
      name: "ButtonPage",
      component: () => import("@/views/components/button/index.vue"),
      meta: {
        title: "按钮"
      }
    },
    {
      path: "/components/count-to",
      name: "CountTo",
      component: () => import("@/views/components/count-to/index.vue"),
      meta: {
        title: "CountTo"
      }
    },
    {
      path: "/components/contextmenu",
      name: "ContextMenu",
      component: () => import("@/views/components/contextmenu/index.vue"),
      meta: {
        title: "右键菜单"
      }
    },
    {
      path: "/components/cropper",
      name: "Cropper",
      component: () => import("@/views/components/cropper/index.vue"),
      meta: {
        title: "图片裁剪"
      }
    }
  ]
};
