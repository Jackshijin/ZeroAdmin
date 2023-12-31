/*
 * @Description:
 * @Author: shrijin
 * @Date: 2023-07-19 17:03:39
 * @LastEditors: shrijin
 * @LastEditTime: 2023-07-20 10:58:16
 */

import "./index.css";
import {
  h,
  ref,
  watch,
  nextTick,
  defineComponent,
  getCurrentInstance
} from "vue";
import type { OptionsType } from "./type";
import { isFunction, useDark } from "@pureadmin/utils";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";

const props = {
  options: {
    type: Array<OptionsType>,
    default: () => []
  },
  defaultValue: {
    type: Number,
    default: 0
  }
};

export default defineComponent({
  name: "Segmented",
  props,
  emits: ["change"],
  setup(props, { emit }) {
    const width = ref(0);
    const translateX = ref(0);
    const { isDark } = useDark();
    const initStatus = ref(false);
    const curMouseActive = ref(-1);
    const segmentedItembg = ref("");
    const instance = getCurrentInstance()!;
    const curIndex = ref(props.defaultValue);

    function handleChange({ option, index }, event: Event) {
      if (option.disabled) return;
      event.preventDefault();
      curIndex.value = index;
      segmentedItembg.value = "";
      emit("change", { index, option });
    }

    function handleMouseenter({ option, index }, event: Event) {
      event.preventDefault();
      curMouseActive.value = index;
      if (option.disabled || curIndex.value === index) {
        segmentedItembg.value = "";
      } else {
        segmentedItembg.value = isDark.value ? "#1f1f1f" : "rgba(0,0,0,0.05)";
      }
    }

    function handleMouseleave(_, event: Event) {
      event.preventDefault();
      curMouseActive.value = -1;
    }
    function handleInit(index = curIndex.value) {
      nextTick(() => {
        const curLabelRef = instance?.proxy?.$refs[`labelRef${index}`] as ElRef;
        width.value = curLabelRef.clientWidth;
        translateX.value = curLabelRef.offsetLeft;
        initStatus.value = true;
      });
    }

    watch(
      () => curIndex.value,
      index => {
        nextTick(() => {
          handleInit(index);
        });
      },
      {
        deep: true,
        immediate: true
      }
    );

    const rendLabel = () => {
      return props.options.map((option, index) => {
        return (
          <label
            ref={`labelRef${index}`}
            class={[
              "pure-segmented-item",
              option?.disabled && "pure-segmented-item-disabled"
            ]}
            style={{
              background:
                curMouseActive.value === index ? segmentedItembg.value : "",
              color:
                !option.disabled &&
                (curIndex.value === index || curMouseActive.value === index)
                  ? isDark.value
                    ? "rgba(255, 255, 255, 0.85)"
                    : "rgba(0,0,0,.88)"
                  : ""
            }}
            onMouseenter={event => handleMouseenter({ option, index }, event)}
            onMouseleave={event => handleMouseleave({ option, index }, event)}
            onClick={event => handleChange({ option, index }, event)}
          >
            <input type="radio" name="segmented" />
            <div class="pure-segmented-item-label">
              {option.icon && !isFunction(option.label) ? (
                <span
                  class="pure-segmented-item-icon"
                  style={{ marginRight: option.label ? "6px" : 0 }}
                >
                  {h(useRenderIcon(option.icon))}
                </span>
              ) : null}
              {option.label ? (
                isFunction(option.label) ? (
                  h(option.label)
                ) : (
                  <span>{option.label}</span>
                )
              ) : null}
            </div>
          </label>
        );
      });
    };

    return () => (
      <div class="pure-segmented">
        <div class="pure-segmented-group">
          <div
            class="pure-segmented-item-selected"
            style={{
              width: `${width.value}px`,
              transform: `translateX(${translateX.value}px)`,
              display: initStatus.value ? "block" : "none"
            }}
          ></div>
          {rendLabel()}
        </div>
      </div>
    );
  }
});
