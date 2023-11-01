<script setup lang="ts">
import vueEsign from "vue-esign";
import { ref, onMounted } from "vue";
import { fileDownload } from "@/utils/download.ts";
import {
  getBrowserInfo,
  nameHyphenate,
  getPerformance,
  getQueryMap
} from "@/utils/browser.ts";

defineOptions({
  name: "ReSign"
});

const isCrop = ref<boolean>(false);
const lineWidth = ref<number>(6);
const lineColor = ref<string>("#000000");
const bgColor = ref<string>("");
const resImg = ref<string>("");
const esign = ref();

const handleReset = () => {
  esign.value?.reset();
  resImg.value = "";
};

const handleGenerate = async () => {
  //  esign.value?.generate()
  try {
    const res = await esign.value?.generate();
    resImg.value = res;
  } catch (err) {
    console.log(err);
  }
};

const onDonwloadEsign = () => {
  const fileName = `电子签名${Date.now()}`;
  fileDownload(resImg.value, fileName);
};

onMounted(() => {
  console.log(getBrowserInfo());
  console.log(nameHyphenate("getBrowserListData"));
  console.table(getPerformance());
  console.warn(
    getQueryMap(
      "https://oms-api.chali.tech/budgetActivity/detailList?pageSize=10&pageCurrent=1"
    )
  );
});
</script>

<template>
  <div class="esign">
    <div class="esign-des">
      <span class="font-medium">
        电子签名组件,基于
        <el-link
          href="https://github.com/JaimeCheng/vue-esign"
          target="_blank"
          style="margin: 0 4px 5px; font-size: 16px"
        >
          vue-esign
        </el-link>
        进行二次封装,更多功能请看文档
      </span>
    </div>
    <div class="esign-box">
      <vue-esign
        ref="esign"
        :width="800"
        :height="300"
        :isCrop="isCrop"
        :lineWidth="lineWidth"
        :lineColor="lineColor"
        v-model:bgColor="bgColor"
      />
    </div>
    <div class="esign-btn">
      <el-button type="primary" @click="handleReset">清空画布</el-button>
      <el-button type="success" @click="handleGenerate">生成图片</el-button>
    </div>
    <span>生成的签名图片</span>
    <div v-if="resImg">
      <div class="esign-res">
        <el-image :src="resImg" lazy />
      </div>
      <div class="flex justify-center items-center my-5">
        <el-button type="success" @click="onDonwloadEsign">下载签名</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.esign {
  max-width: 1000px;
  padding: 20px 40px 40px;
  margin: auto;
  background: #fff;

  &-box {
    border: 1px solid #ececee;
  }

  &-btn {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }

  &-des {
    margin-bottom: 20px;
  }
}

.esign-res {
  display: block;
  max-width: 100%;
  height: auto;
  border: 1px solid #ececee;
}

.download-btn {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // margin: 20px 0;
}

.esignature {
  margin: 10px 0;
  border: 2px solid #ccc;
}
</style>
