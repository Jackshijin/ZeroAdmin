/*
 * @Description: 封装打字机效果
 * @Author: shrijin
 * @Date: 2023-07-10 15:53:46
 * @LastEditors: shrijin
 * @LastEditTime: 2023-07-10 16:05:10
 */

import { h, defineComponent } from "vue";
import TypeIt from "typeit";

export default defineComponent({
  name: "TypeIt",
  props: {
    // 打字速度
    speed: {
      type: Number,
      default: 200
    },
    values: {
      type: Array,
      default: () => []
    },
    className: {
      type: String,
      default: "type-it"
    },
    cursor: {
      type: Boolean,
      default: true
    }
  },
  render() {
    return h(
      "span",
      {
        class: this.className
      },
      {
        default: () => []
      }
    );
  },
  mounted() {
    new TypeIt(`.${this.className}`, {
      strings: this.values,
      speed: this.speed,
      cursor: this.cursor
    }).go();
  }
});
