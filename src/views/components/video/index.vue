<!--
 * @Description:
 * @Author: shrijin
 * @Date: 2023-07-20 15:54:18
 * @LastEditors: shrijin
 * @LastEditTime: 2023-07-21 11:07:51
-->

<script setup lang="ts">
import { onMounted } from "vue";
import { deviceDetection } from "@pureadmin/utils";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import VideoPlay from "@iconify-icons/ep/video-play";

import Player from "xgplayer";
import "xgplayer/dist/index.min.css";

defineOptions({
  name: "VideoPage"
});

onMounted(() => {
  new Player({
    id: "mse",
    lang: "zh",
    // 默认静音
    volume: 0,
    autoplay: false,
    screenShot: true,
    videoAttributes: {
      crossOrigin: "anonymous"
    },
    url: "https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4",
    poster:
      "https://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg",
    fluid: deviceDetection(),
    // 倍速可选数组
    playbackRate: [0.5, 0.75, 1, 1.5, 2]
  });
});
</script>

<template>
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <span class="font-medium">
          视频组件，采用开源的
          <el-link
            href="https://v3.h5player.bytedance.com/"
            target="_blank"
            :icon="useRenderIcon(VideoPlay)"
            style="margin: 0 4px 5px; font-size: 16px"
          >
            西瓜播放器
          </el-link>
        </span>
      </div>
    </template>
    <div id="mse" />
  </el-card>
</template>

<style lang="scss" scoped>
#mse {
  flex: auto;
}
</style>
