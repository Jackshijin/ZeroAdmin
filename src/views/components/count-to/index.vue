<script setup lang="ts">
import { NormalCountTo, ReboundCountTo } from "@/components/CountTo";

defineOptions({
  name: "CountTo"
});
</script>

<template>
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <span class="font-medium">数字动画组件</span>
      </div>
    </template>
    <div class="flex items-center">
      <NormalCountTo
        prefix="$"
        :duration="1000"
        :color="'#409EFF'"
        :fontSize="'2em'"
        :startVal="1"
        :endVal="1000"
      />
      <ul class="flex ml-8">
        <ReboundCountTo
          v-for="(num, inx) of [1, 6, 6, 6]"
          :key="inx"
          :i="num"
          :blur="inx"
          :delay="inx + 1"
        />
      </ul>
    </div>
  </el-card>
</template>
