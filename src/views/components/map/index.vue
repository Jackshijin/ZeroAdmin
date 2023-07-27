<!--
 * @Description:
 * @Author: shrijin
 * @Date: 2023-07-19 16:05:09
 * @LastEditors: shrijin
 * @LastEditTime: 2023-07-19 16:05:14
-->
<script setup lang="ts">
import { Amap } from "@/components/AMap";

defineOptions({
  name: "MapPage"
});
</script>

<template>
  <Amap />
</template>

<style scoped>
.main-content {
  margin: 2px 0 0 !important;
}
</style>
