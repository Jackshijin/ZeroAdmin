import type { VNode, Component } from "vue";

export interface OptionsType {
  // 文字
  label?: string | (() => VNode | Component);
  icon?: string | Component;
  value?: string | number;
  disabled?: boolean;
}
