<template>
  <pre ref="markdown" v-show="false">
# 弹性盒组件:flex-box

封装的flex布局组件，可以以更容易理解的方式配置。

# 用法

    <flex-box v-pre direction="row" x-align="start" y-align="center" width="12em" height="4em">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </flex-box>

# 属性配置

- direction

设置flex的方向，row为水平，column为竖直。（默认值为row）

    direction: 'row' | 'column'

- x-align, y-align

分别设置水平、垂直的对齐方式，无论direction如何配置。（默认值为start）

    x-align: 'start' | 'center' | 'end'
    y-align: 'start' | 'center' | 'end'

- width, height

设置flex box的宽度和高度。（默认均为auto）

    width: String
    height: String

# 效果实例

- direction="row" x-align="start" y-align="start"

<flex-box direction="row" x-align="start" y-align="start" width="20em" height="4em" style="border: 1px solid rgba(20,192,210); border-radius: 0em;background: rgba(20,192,210,0.2)">
<div style="height: 2em;border: 1px solid gray;">Item1</div>
  <div style="height: 2em;border: 1px solid gray;">Item2</div>
  <div style="height: 2em;border: 1px solid gray;">Item3</div>
</flex-box>

- direction="row" x-align="start" y-align="center"

<flex-box direction="row" x-align="start" y-align="center" width="20em" height="4em" style="border: 1px solid rgba(20,192,210); border-radius: 0em;background: rgba(20,192,210,0.2)">
<div style="height: 2em;border: 1px solid gray;">Item1</div>
  <div style="height: 2em;border: 1px solid gray;">Item2</div>
  <div style="height: 2em;border: 1px solid gray;">Item3</div>
</flex-box>

- direction="row" x-align="start" y-align="end"

<flex-box direction="row" x-align="start" y-align="end" width="20em" height="4em" style="border: 1px solid rgba(20,192,210); border-radius: 0em;background: rgba(20,192,210,0.2)">
<div style="height: 2em;border: 1px solid gray;">Item1</div>
  <div style="height: 2em;border: 1px solid gray;">Item2</div>
  <div style="height: 2em;border: 1px solid gray;">Item3</div>
</flex-box>

- direction="row" x-align="center" y-align="start"

<flex-box direction="row" x-align="center" y-align="start" width="20em" height="4em" style="border: 1px solid rgba(20,192,210); border-radius: 0em;background: rgba(20,192,210,0.2)">
<div style="height: 2em;border: 1px solid gray;">Item1</div>
  <div style="height: 2em;border: 1px solid gray;">Item2</div>
  <div style="height: 2em;border: 1px solid gray;">Item3</div>
</flex-box>

- direction="row" x-align="center" y-align="center"

<flex-box direction="row" x-align="center" y-align="center" width="20em" height="4em" style="border: 1px solid rgba(20,192,210); border-radius: 0em;background: rgba(20,192,210,0.2)">
<div style="height: 2em;border: 1px solid gray;">Item1</div>
  <div style="height: 2em;border: 1px solid gray;">Item2</div>
  <div style="height: 2em;border: 1px solid gray;">Item3</div>
</flex-box>

- direction="row" x-align="center" y-align="end"

<flex-box direction="row" x-align="center" y-align="end" width="20em" height="4em" style="border: 1px solid rgba(20,192,210); border-radius: 0em;background: rgba(20,192,210,0.2)">
<div style="height: 2em;border: 1px solid gray;">Item1</div>
  <div style="height: 2em;border: 1px solid gray;">Item2</div>
  <div style="height: 2em;border: 1px solid gray;">Item3</div>
</flex-box>

- direction="row" x-align="end" y-align="start"

<flex-box direction="row" x-align="end" y-align="start" width="20em" height="4em" style="border: 1px solid rgba(20,192,210); border-radius: 0em;background: rgba(20,192,210,0.2)">
<div style="height: 2em;border: 1px solid gray;">Item1</div>
  <div style="height: 2em;border: 1px solid gray;">Item2</div>
  <div style="height: 2em;border: 1px solid gray;">Item3</div>
</flex-box>

- direction="row" x-align="end" y-align="center"

<flex-box direction="row" x-align="end" y-align="center" width="20em" height="4em" style="border: 1px solid rgba(20,192,210); border-radius: 0em;background: rgba(20,192,210,0.2)">
<div style="height: 2em;border: 1px solid gray;">Item1</div>
  <div style="height: 2em;border: 1px solid gray;">Item2</div>
  <div style="height: 2em;border: 1px solid gray;">Item3</div>
</flex-box>

- direction="row" x-align="end" y-align="end"

<flex-box direction="row" x-align="end" y-align="end" width="20em" height="4em" style="border: 1px solid rgba(20,192,210); border-radius: 0em;background: rgba(20,192,210,0.2)">
<div style="height: 2em;border: 1px solid gray;">Item1</div>
  <div style="height: 2em;border: 1px solid gray;">Item2</div>
  <div style="height: 2em;border: 1px solid gray;">Item3</div>
</flex-box>

- direction="column" x-align="start" y-align="start"

<flex-box direction="column" x-align="start" y-align="start" width="20em" height="10em" style="border: 1px solid rgba(20,192,210); border-radius: 0em;background: rgba(20,192,210,0.2)">
<div style="height: 2em;border: 1px solid gray;">Item1</div>
  <div style="height: 2em;border: 1px solid gray;">Item2</div>
  <div style="height: 2em;border: 1px solid gray;">Item3</div>
</flex-box>

- direction="column" x-align="start" y-align="center"

<flex-box direction="column" x-align="start" y-align="center" width="20em" height="10em" style="border: 1px solid rgba(20,192,210); border-radius: 0em;background: rgba(20,192,210,0.2)">
<div style="height: 2em;border: 1px solid gray;">Item1</div>
  <div style="height: 2em;border: 1px solid gray;">Item2</div>
  <div style="height: 2em;border: 1px solid gray;">Item3</div>
</flex-box>

- direction="column" x-align="start" y-align="end"

<flex-box direction="column" x-align="start" y-align="end" width="20em" height="10em" style="border: 1px solid rgba(20,192,210); border-radius: 0em;background: rgba(20,192,210,0.2)">
<div style="height: 2em;border: 1px solid gray;">Item1</div>
  <div style="height: 2em;border: 1px solid gray;">Item2</div>
  <div style="height: 2em;border: 1px solid gray;">Item3</div>
</flex-box>

- direction="column" x-align="center" y-align="start"

<flex-box direction="column" x-align="center" y-align="start" width="20em" height="10em" style="border: 1px solid rgba(20,192,210); border-radius: 0em;background: rgba(20,192,210,0.2)">
<div style="height: 2em;border: 1px solid gray;">Item1</div>
  <div style="height: 2em;border: 1px solid gray;">Item2</div>
  <div style="height: 2em;border: 1px solid gray;">Item3</div>
</flex-box>

- direction="column" x-align="center" y-align="center"

<flex-box direction="column" x-align="center" y-align="center" width="20em" height="10em" style="border: 1px solid rgba(20,192,210); border-radius: 0em;background: rgba(20,192,210,0.2)">
<div style="height: 2em;border: 1px solid gray;">Item1</div>
  <div style="height: 2em;border: 1px solid gray;">Item2</div>
  <div style="height: 2em;border: 1px solid gray;">Item3</div>
</flex-box>

- direction="column" x-align="center" y-align="end"

<flex-box direction="column" x-align="center" y-align="end" width="20em" height="10em" style="border: 1px solid rgba(20,192,210); border-radius: 0em;background: rgba(20,192,210,0.2)">
<div style="height: 2em;border: 1px solid gray;">Item1</div>
  <div style="height: 2em;border: 1px solid gray;">Item2</div>
  <div style="height: 2em;border: 1px solid gray;">Item3</div>
</flex-box>

- direction="column" x-align="end" y-align="start"

<flex-box direction="column" x-align="end" y-align="start" width="20em" height="10em" style="border: 1px solid rgba(20,192,210); border-radius: 0em;background: rgba(20,192,210,0.2)">
<div style="height: 2em;border: 1px solid gray;">Item1</div>
  <div style="height: 2em;border: 1px solid gray;">Item2</div>
  <div style="height: 2em;border: 1px solid gray;">Item3</div>
</flex-box>

- direction="column" x-align="end" y-align="center"

<flex-box direction="column" x-align="end" y-align="center" width="20em" height="10em" style="border: 1px solid rgba(20,192,210); border-radius: 0em;background: rgba(20,192,210,0.2)">
<div style="height: 2em;border: 1px solid gray;">Item1</div>
  <div style="height: 2em;border: 1px solid gray;">Item2</div>
  <div style="height: 2em;border: 1px solid gray;">Item3</div>
</flex-box>

- direction="column" x-align="end" y-align="end"

<flex-box direction="column" x-align="end" y-align="end" width="20em" height="10em" style="border: 1px solid rgba(20,192,210); border-radius: 0em;background: rgba(20,192,210,0.2)">
<div style="height: 2em;border: 1px solid gray;">Item1</div>
  <div style="height: 2em;border: 1px solid gray;">Item2</div>
  <div style="height: 2em;border: 1px solid gray;">Item3</div>
</flex-box>

  </pre>
  <el-main v-html="markedContent"></el-main>
</template>

<script>
import * as marked from 'marked'
import { ref,onMounted,nextTick } from 'vue'
import hljs from 'highlight.js/lib/core';

export default {
  name: "flex-box-page",
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
