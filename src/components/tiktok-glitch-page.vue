<template>
  <pre ref="markdown" v-show="false">
# 抖音故障效果: tiktok-glitch

为文字添加模仿抖音LOGO的故障效果

目前效果很差，后续还得改。

# 效果实例

- animate = false

<tiktok-glitch style="font-size: 3em;">FluentWiz UI</tiktok-glitch>

- animate, speed = 'slow' | 'normal' | 'fast'

<tiktok-glitch speed="slow" animate style="font-size: 3em;">FluentWiz UI</tiktok-glitch>
<tiktok-glitch speed="normal" animate style="font-size: 3em;">FluentWiz UI</tiktok-glitch>
<tiktok-glitch speed="fast" animate style="font-size: 3em;">FluentWiz UI</tiktok-glitch>

- 传入img

<tiktok-glitch speed="slow" img="./fluentWizLogo.svg" animate style="font-size: 3em;"></tiktok-glitch>
<tiktok-glitch speed="normal" img="./fluentWizLogo.svg" animate style="font-size: 3em;"></tiktok-glitch>
<tiktok-glitch speed="fast" img="./fluentWizLogo.svg" animate style="font-size: 3em;"></tiktok-glitch>

# 用法

    // animate = false

    <tiktok-glitch v-pre style="font-size: 3em;">FluentWiz UI</tiktok-glitch>

    // animate, speed = 'slow' | 'normal' | 'fast'

    <tiktok-glitch v-pre  speed="slow" animate style="font-size: 3em;">FluentWiz UI</tiktok-glitch>
    <tiktok-glitch v-pre  speed="normal" animate style="font-size: 3em;">FluentWiz UI</tiktok-glitch>
    <tiktok-glitch v-pre  speed="fast" animate style="font-size: 3em;">FluentWiz UI</tiktok-glitch>

    // 传入img

    <tiktok-glitch v-pre speed="slow" img="./fluentWizLogo.svg" animate style="font-size: 3em;">FluentWiz UI</tiktok-glitch>
    <tiktok-glitch v-pre speed="normal" img="./fluentWizLogo.svg" animate style="font-size: 3em;">FluentWiz UI</tiktok-glitch>
    <tiktok-glitch v-pre speed="fast" img="./fluentWizLogo.svg" animate style="font-size: 3em;">FluentWiz UI</tiktok-glitch>

# 属性配置

- animate

如果为True，则带有动画效果。动画速率用speed进行设置。(默认为false)

    animate: Boolean

- speed

用来设置动画的速率。(默认为normal)

    speed: 'slow' | 'normal' | 'fast'

- img

用来为组件传入一个图片地址，不会覆盖组件内的文字。(默认为空字符串)

    img: String

- imgInfo

用来为组件图片设置信息值，相当于设置图片的alt attribute.(默认为空字符串)

    imgInfo: String

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

<style>

</style>
