<!--
 * @Description: 手机登录
 * @Author: shrijin
 * @Date: 2023-07-10 09:06:25
 * @LastEditors: shrijin
 * @LastEditTime: 2023-07-10 09:32:15
-->

<script setup lang="ts">
import { ref, reactive } from "vue";
import Motion from "../utils/motion";
import { message } from "@/utils/message";
import { phoneRules } from "../utils/rule";
import type { FormInstance } from "element-plus";
import { useVerifyCode } from "../utils/verifyCode";
import { useUserStoreHook } from "@/store/modules/user";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import Iphone from "@iconify-icons/ep/iphone";

const loading = ref(false);
const ruleForm = reactive({
  phone: "",
  verifyCode: ""
});
const ruleFormRef = ref<FormInstance>();
const { isDisabled, text } = useVerifyCode();

const onLogin = async (formEl: FormInstance | undefined) => {
  loading.value = true;
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      // 模拟登录请求
      setTimeout(() => {
        message("登陆成功", { type: "success" });
      }, 2000);
    } else {
      loading.value = false;
      return fields;
    }
  });
};

function onBack() {
  useVerifyCode().end();
  useUserStoreHook().SET_CURRENTPAGE(0);
}
</script>

<template>
  <el-form ref="ruleFormRef" :model="ruleForm" :rules="phoneRules" size="large">
    <Motion>
      <el-form-item prop="phone">
        <el-input
          clearable
          v-model="ruleForm.phone"
          placeholder="手机号"
          :prefix-icon="useRenderIcon(Iphone)"
        />
      </el-form-item>
    </Motion>

    <Motion :delay="100">
      <el-form-item prop="verifyCode">
        <div class="w-full flex justify-between">
          <el-input
            clearable
            v-model="ruleForm.verifyCode"
            placeholder="验证码"
            :prefix-icon="useRenderIcon('ri:shield-folder-keyhole-line')"
          />
          <el-button
            :disaled="isDisabled"
            class="ml-2"
            @click="useVerifyCode().start(ruleFormRef, 'phone')"
          >
            {{ text.length > 0 ? text + "登录" : "获取验证码" }}
          </el-button>
        </div>
      </el-form-item>
    </Motion>

    <Motion :delay="150">
      <el-form-item>
        <el-button
          class="w-full"
          size="default"
          type="primary"
          :loading="loading"
          @click="onLogin(ruleFormRef)"
        >
          {{ "登录" }}
        </el-button>
      </el-form-item>
    </Motion>

    <Motion :delay="200">
      <el-form-item>
        <el-button class="w-full" size="default" @click="onBack">
          {{ "返回" }}
        </el-button>
      </el-form-item>
    </Motion>
  </el-form>
</template>
