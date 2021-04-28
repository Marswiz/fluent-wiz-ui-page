<template>
  <pre ref="markdown" v-show="false">
# 按钮组件:fluent-button

基础按钮组件，包含常规、警告、成功、危险、信息等，可选圆角与扁平化按钮。

# 效果实例

-  size = small / normal / large

<fluent-button size="small">Button</fluent-button>
<fluent-button size="">Button</fluent-button>
<fluent-button size="large">Button</fluent-button>

-  type = normal / warn / succeed / danger / unimportant

<fluent-button type="normal">Button</fluent-button>
<fluent-button type="warn">Button</fluent-button>
<fluent-button type="danger">Button</fluent-button>
<fluent-button type="succeed">Button</fluent-button>
<fluent-button type="unimportant">Button</fluent-button>

- plain = true

<fluent-button type="normal" plain>Button</fluent-button>
<fluent-button type="warn" plain>Button</fluent-button>
<fluent-button type="danger" plain>Button</fluent-button>
<fluent-button type="succeed" plain>Button</fluent-button>
<fluent-button type="unimportant" plain>Button</fluent-button>

- no-round = true

<fluent-button type="normal" no-round>Button</fluent-button>

- bordered = true

<fluent-button type="normal" bordered>Button</fluent-button>

# 用法

    // size = small / normal / large

    <fluent-button v-pre size="small">Button</fluent-button>
    <fluent-button v-pre size="">Button</fluent-button>
    <fluent-button v-pre size="large">Button</fluent-button>

    // type = normal / warn / succeed / danger / unimportant

    <fluent-button v-pre  type="normal">Button</fluent-button>
    <fluent-button v-pre  type="warn">Button</fluent-button>
    <fluent-button v-pre  type="danger">Button</fluent-button>
    <fluent-button v-pre  type="succeed">Button</fluent-button>
    <fluent-button v-pre  type="unimportant">Button</fluent-button>

    // plain = true

    <fluent-button v-pre  type="normal" plain>Button</fluent-button>
    <fluent-button v-pre  type="warn" plain>Button</fluent-button>
    <fluent-button v-pre  type="danger" plain>Button</fluent-button>
    <fluent-button v-pre  type="succeed" plain>Button</fluent-button>
    <fluent-button v-pre  type="unimportant" plain>Button</fluent-button>

    // no-round = true

    <fluent-button v-pre  type="normal" no-round>Button</fluent-button>

    // bordered = true

    <fluent-button v-pre  type="normal" bordered>Button</fluent-button>

# 属性配置

- size

设置按钮的尺寸。可选large/normal/small（默认值为normal）

    size: 'large' | 'normal' | 'small'

- type

设置按钮的类型，具有不同的显示形式。可选normal / succeed / warn / danger / unimportant（默认值为normal）

    type: 'normal' | 'succeed' | 'warn' | 'danger' | 'unimportant'

- plain

设置按钮是否扁平。（默认值为false）

    size: Boolean

- no-round

如果为true,则按钮没有圆角。（默认值为false）

    size: Boolean

- bordered

如果为true,则按钮带有白色边框。（默认值为false）

    size: Boolean

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
