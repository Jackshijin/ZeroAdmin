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
    },
    {
      path: "/components/danmu",
      name: "Danmu",
      component: () => import("@/views/components/danmu/index.vue"),
      meta: {
        title: "弹幕组件"
      }
    },
    {
      path: "/components/draggable",
      name: "Draggable",
      component: () => import("@/views/components/draggable/index.vue"),
      meta: {
        title: "列表拖拽"
      }
    },
    {
      path: "/components/json-editor",
      name: "JsonEditor",
      component: () => import("@/views/components/json-editor/index.vue"),
      meta: {
        title: "json编辑器"
      }
    },
    {
      path: "/components/map",
      name: "AMap",
      component: () => import("@/views/components/map/index.vue"),
      meta: {
        title: "地图"
      }
    },
    {
      path: "/components/segmented",
      name: "Segmented",
      component: () => import("@/views/components/segmented/index.vue"),
      meta: {
        title: "Segmented"
      }
    },
    {
      path: "/components/splitpane",
      name: "SplitPane",
      component: () => import("@/views/components/splitpane/index.vue"),
      meta: {
        title: "切割面板"
      }
    },
    {
      path: "/components/video",
      name: "Video",
      component: () => import("@/views/components/video/index.vue"),
      meta: {
        title: "视频播放"
      }
    },
    {
      path: "/components/waterfall",
      name: "Waterfall",
      component: () => import("@/views/components/waterfall/index.vue"),
      meta: {
        title: "瀑布流"
      }
    }
  ]
};
