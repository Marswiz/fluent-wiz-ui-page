<template>
  <pre ref="markdown" v-show="false">
# 用法

    // 本身为块级元素，可以放置在其他块级或flex布局容器中
    <fluent-folder v-pre round key="first">
      <template v-slot:header>
        <div>Today's Header</div>
      </template>
      <template v-slot:fold-banner></template>
      <template v-slot:main>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, labore molestias natus porro possimus quae! Atque autem dolores excepturi expedita minus officia perferendis! Doloribus illum minus quis sed tempore, temporibus?</template>
    </fluent-folder>

# 属性配置

- round

设置是否有圆角。（默认值为false）

    direction: Boolean
  </pre>
  <el-main id="result" v-html="markedContent"></el-main>
</template>

<script>
import * as marked from 'marked'
import { ref,onMounted,nextTick } from 'vue'
import hljs from 'highlight.js/lib/core';

export default {
  name: "transfer-page",
  setup(){
    const markdown = ref(null)
    let markedContent = ref('')
    onMounted(()=>{
      markedContent.value = marked(markdown.value.innerHTML)
      nextTick(()=>{
        hljs.highlightAll();
        console.log(document.querySelector('#result').innerHTML);
      });
    })
    return {
      markdown,
      markedContent,
    }
  }
}
</script>

<style>

</style>
