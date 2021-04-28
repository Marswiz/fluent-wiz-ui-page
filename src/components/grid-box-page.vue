<template>
  <pre ref="markdown" v-show="false">
# 网格组件：grid-box、grid-item

封装的grid布局组件，可以以更easy的方式配置。

# 效果实例

<grid-box cols="3" rows="5" style="border: 1px solid rgba(20,192,210); border-radius: 0em;background: rgba(20,192,210,0.2)">
<grid-item x-from="1" x-to="3" y-from="2" y-to="5" style="border: 1px solid gray;">1</grid-item>
<grid-item style="border: 1px solid gray;">2</grid-item>
<grid-item style="border: 1px solid gray;">3</grid-item>
<grid-item x-from="1" x-to="3" y-from="5" y-to="6" style="border: 1px solid gray;">4</grid-item>
<grid-item x-from="3" x-to="4" y-from="1" y-to="6" style="border: 1px solid gray;">5</grid-item>
</grid-box>

# 用法

      <grid-box v-pre cols="3" rows="5">
        <grid-item x-from="1" x-to="3" y-from="2" y-to="5" gap="4px">1</grid-item>
        <grid-item>2</grid-item>
        <grid-item>3</grid-item>
        <grid-item x-from="1" x-to="3" y-from="5" y-to="6" style="border: 1px solid gray;">4</grid-item>
        <grid-item x-from="3" x-to="4" y-from="1" y-to="6" style="border: 1px solid gray;">5</grid-item>
      </grid-box>

# 属性配置


## grid-box组件

- cols, rows

设置网格的行、列定义。其中cols用于设置网格的列属性，rows用于设置网格的行属性。（默认值均为1）

可以传入一个整数值n，代表将行高、列宽等分为n等份。

也可以传入字符串，格式等同于`grid-template-columns和grid-template-rows。

    cols: number | string
    rows: number | string

- width, height

设置flex box的宽度和高度。（默认均为空字符串）

    width: String
    height: String

- gap

设置网格的间隙宽度值，等同于为grid设置gap css属性。（默认值为1em）

    gap: number | string

- inline

如果为True，则网格属性为inline-grid。（默认值为false）

    inline: boolean

## grid-item组件

- x-from, x-to, y-from, y-to

设置grid-item在水平方向(x)和竖直方向(y)的起止位置。(默认均为空字符串)

可以传入整数值，也可以传入字符串。整数值代表起止网格线的索引。

传入字符串相当于传入了网格线的名称，与分别设置grid-column和grid-row CSS属性相同。

    x-from: number | string
    x-to: number | string
    y-from: number | string
    y-to: number | string

  </pre>
  <el-main v-html="markedContent"></el-main>
</template>

<script>
import * as marked from 'marked'
import { ref,onMounted,nextTick } from 'vue'
import hljs from 'highlight.js/lib/core';

export default {
  name: "grid-box-page",
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
