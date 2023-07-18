<script setup lang="ts">
import { Ref, ref, onMounted, unref, toRefs } from "vue";

defineOptions({
  name: "Watermark"
});

interface WaterMarkInter {
  elRef: Ref<HTMLDivElement>;
  waterMark: string;
  color?: string;
  angle?: number;
  width?: number;
  height?: number;
  alpha?: number;
  size?: string;
}

const props = defineProps({
  width: {
    type: String,
    default: "600px"
  },
  height: {
    type: String,
    default: "300px"
  }
});

const { width, height } = toRefs(props);
const waterMarkRef = ref<HTMLDivElement | null>(null);

function waterMarker({
  elRef,
  waterMark = "水印",
  color = "#e9e9e9",
  angle = -15,
  size = "24",
  alpha = 0.5,
  width = 600,
  height = 300
}: WaterMarkInter) {
  if (!elRef) {
    return;
  }
  const element = unref(elRef) as HTMLDivElement;
  const canvasEle = document.createElement("canvas");
  element.appendChild(canvasEle);
  canvasEle.width = width;
  canvasEle.height = height;
  canvasEle.style.display = "none";
  canvasEle.style.zIndex = "9";
  const cans = canvasEle.getContext("2d") as CanvasRenderingContext2D;
  cans.rotate((angle * Math.PI) / 100);
  cans.font = "500 30px Mircrosoft JhengHei";
  cans.fillStyle = color;
  cans.textAlign = "center";
  cans.textBaseline = "middle";
  cans.globalAlpha = alpha;
  cans.font = "1000 " + size + "px " + " Microsoft JhengHei";

  for (let i = document.body.offsetHeight * 0.5 * -1; i < 800; i += 160) {
    for (let j = 0; j < document.body.offsetHeight * 1.5; j += 60) {
      cans.fillText(waterMark, i, j);
    }
  }
  element.style.backgroundImage =
    "url(" + canvasEle.toDataURL("image/png") + ")";
}

onMounted(() => {
  waterMarker({
    elRef: waterMarkRef as Ref<HTMLDivElement>,
    waterMark: "佚名小靓仔",
    color: "skyblue",
    size: "28"
  });
});
</script>

<template>
  <div ref="waterMarkRef" :style="{ height, width }" />
</template>
