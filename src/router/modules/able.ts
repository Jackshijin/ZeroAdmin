/*
 * @Description:
 * @Author: shrijin
 * @Date: 2023-07-12 09:21:03
 * @LastEditors: shrijin
 * @LastEditTime: 2023-07-13 11:04:48
 */

import { able } from "@/router/enums";

export default {
  path: "/able",
  redirect: "/able/watermark",
  meta: {
    icon: "ubuntuFill",
    title: "功能",
    rank: able
  },
  children: [
    {
      path: "/able/barcode",
      name: "BarCode",
      component: () => import("@/views/able/barcode.vue"),
      meta: {
        title: "条形码"
      }
    },
    {
      path: "/able/debounce",
      name: "Debounce",
      component: () => import("@/views/able/debounce.vue"),
      meta: {
        title: "节流与防抖"
      }
    },
    {
      path: "/able/download",
      name: "Download",
      component: () => import("@/views/able/download.vue"),
      meta: {
        title: "下载"
      }
    },
    {
      path: "/able/excel",
      name: "Excel",
      component: () => import("@/views/able/excel.vue"),
      meta: {
        title: "Excel"
      }
    },
    {
      path: "/able/iconselect",
      name: "Icon",
      component: () => import("@/views/able/icon-select.vue"),
      meta: {
        title: "图标选择"
      }
    },
    {
      path: "/able/infinite-scroll",
      name: "InfiniteScroll",
      component: () => import("@/views/able/infinite-scroll.vue"),
      meta: {
        title: "无限滚动"
      }
    },
    {
      path: "/able/tree",
      name: "Tree",
      component: () => import("@/views/able/line-tree.vue"),
      meta: {
        title: "树组件"
      }
    },
    {
      path: "/able/menu-tree",
      name: "MenuTree",
      component: () => import("@/views/able/menu-tree.vue"),
      meta: {
        title: "菜单树"
      }
    },
    {
      path: "/able/pdf",
      name: "Pdf",
      component: () => import("@/views/able/pdf.vue"),
      meta: {
        title: "PDF预览"
      }
    },
    {
      path: "/able/pinyin",
      name: "Pinyin",
      component: () => import("@/views/able/pinyin.vue"),
      meta: {
        title: "汉语拼音"
      }
    },
    {
      path: "/able/print",
      name: "Print",
      component: () => import("@/views/able/print.vue"),
      meta: {
        title: "打印"
      }
    }
  ]
};
