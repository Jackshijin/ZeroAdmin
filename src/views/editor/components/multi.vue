<!--
 * @Description: 多个编辑器
 * @Author: shrijin
 * @Date: 2023-07-21 16:30:20
 * @LastEditors: shrijin
 * @LastEditTime: 2023-07-21 17:13:39
-->

<script setup lang="ts">
import ReCol from "@/components/ReCol";
import { onBeforeUnmount, ref, shallowRef } from "vue";
import "@wangeditor/editor/dist/css/style.css";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";

defineOptions({
  name: "MultiEditor"
});

// 模拟后端返回多个编辑器的数据
const endEditorList = [
  {
    value: "<p>测试一</p>"
  },
  {
    value: "<p>测试二</p>"
  },
  {
    value: "<p>测试三</p>"
  },
  {
    value: "<p>测试四</p>"
  }
];

// 多个编辑器
const editorList = ref<Array<any>>([]);
endEditorList.forEach(edit => {
  editorList.value.push({
    value: edit.value,
    editorRef: shallowRef()
  });
});
const mode = "default";

const toolbarConfig: any = { excludeKeys: "fullScreen" };
const editorConfig = { placeholder: "请输入内容..." };

const handleCreated = (editor, index) => {
  // 记录editor实例
  editorList.value[index].editorRef = editor;
};

// 销毁编辑器组件
onBeforeUnmount(() => {
  return editorList.value.map(edit => {
    if (edit.editorRef === null) return;
    edit.editorRef.destroy();
  });
});
</script>

<template>
  <el-row :gutter="30" justify="space-around">
    <re-col :value="11" v-for="(edit, index) in editorList" :key="index">
      <div class="wangeditor">
        <Toolbar
          :editor="edit.editorRef"
          :defaultConfig="toolbarConfig"
          :mode="mode"
          style="border-bottom: 1px solid #ccc"
        />
        <Editor
          v-model="edit.value"
          :defaultConfig="editorConfig"
          :mode="mode"
          style="height: 400px; overflow-y: hidden"
          @onCreated="editor => handleCreated(editor, index)"
        />
      </div>
    </re-col>
  </el-row>
</template>
