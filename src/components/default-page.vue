<template>
  <pre ref="markdown" v-show="false">
# FluentWiz UI

![FluentWizUI](./fluentWizLogo.svg)

Vue3 UI组件库，由MarsWiz 创建，提供各种更方便使用的组件。

需要不断丰富功能，目前主要用来练习并记录，当然也很实用。

# 主要技术栈

Vue3 / TypeScript / SCSS / Vue-CLI

本页面由 ElementUI + marked + highlight.js 生成。

<blockquote>
2021.03.21 在北京丰台云岗 <br>

2021.03.21 At YunGang ,FengTai Dist ,Beijing.
</blockquote>

  </pre>
  <el-main v-html="markedContent"></el-main>
</template>

<script>
import * as marked from 'marked'
import { ref,onMounted,nextTick } from 'vue'
import hljs from 'highlight.js/lib/core';

export default {
  name: "default-page",
  setup(){
    const markdown = ref(null)
    let markedContent = ref('')
    onMounted(()=>{
      markedContent.value = marked(markdown.value.innerHTML)
      nextTick(()=>{
        hljs.highlightAll();
      });
    })
    return {
      markdown,
      markedContent,
    }
  }
}
</script>

<style scoped>

</style>
