<!--
 * @Description: 图片剪裁
 * @Author: shrijin
 * @Date: 2023-07-18 10:42:03
 * @LastEditors: shrijin
 * @LastEditTime: 2023-07-18 13:45:34
-->

<script setup lang="ts">
import { ref } from "vue";
import avatar from "./avatar.png";
import Cropper from "@/components/ReCropper";
import { formatBytes } from "@pureadmin/utils";

defineOptions({
  name: "Cropper"
});

const infos = ref();
const refCropper = ref();
const showPopover = ref(false);
const cropperImg = ref<string>("");

function onCropper({ base64, blob, info }) {
  console.log(blob);
  infos.value = info;
  cropperImg.value = base64;
}
</script>

<template>
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <span class="font-medium">
          图片裁剪组件，基于开源的
          <el-link
            href="https://fengyuanchen.gtihub.io/cropperjs/"
            target="_blank"
            style="margin: 0 4px 5px; font-size: 16px"
          >
            cropperjs
          </el-link>
          进行二次封装（右键下面左侧裁剪区可开启功能菜单）
        </span>
      </div>
    </template>
    <el-popover
      :visible="showPopover"
      placement="right"
      width="300px"
      :teleported="false"
    >
      <template #reference>
        <Cropper
          ref="refCropper"
          class="w-[30vw]"
          :src="avatar"
          circled
          @cropper="onCropper"
          @readied="showPopover = true"
        />
      </template>
      <div class="flex flex-wrap justify-center items-center text-center">
        <el-image
          v-if="cropperImg"
          :src="cropperImg"
          :preview-src-list="Array.of(cropperImg)"
          fit="cover"
        />
        <div v-if="infos" class="mt-1">
          <p>
            图像大小：{{ parseInt(infos.width) }} x
            {{ parseInt(infos.height) }}像素
          </p>
          <p>文件大小：{{ formatBytes(infos.size) }} ({{ infos.size }}字节)</p>
        </div>
      </div>
    </el-popover>
  </el-card>
</template>
