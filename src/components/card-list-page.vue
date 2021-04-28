<template>
  <pre ref="markdown" v-show="false">
# 抽取效果的卡片列表组件:card-list

hover时带有抽取效果的卡片列表组件，可以设置多种类型，

# 效果实例

- default

<card-list style="margin: 2em 0;" :cards="cards"></card-list>

- background-color = ‘#9dd6eb’ text-color = 'white'

<card-list style="margin: 2em 0;" background-color="#9dd6eb" text-color='white' :cards="cards"></card-list>

- background-color = "#fff" text-color = '#555' width = '400px'

<card-list style="margin: 2em 0;" background-color="#fff" text-color='#555' width='400px'  :cards="cards"></card-list>

# 用法

    <card-list v-pre :cards="cards"></card-list>

# 属性配置

- cards:

对象数组，每一个对象代表一个卡片，元素TS接口如下：

      {
        category: String,
        date: String,
        title: String,
        content: String,
        tags: string[],
        link: String
      }

- background-color:

设置卡片的基本背景颜色，接受CSS Color值。(默认值为'#aaa')

    background-color : String

- text-color:

设置卡片文字的颜色，接受CSS Color值。(默认值为 'rgba(255,255,255,0.8)')

    text-color : String

- width:

设置每个卡片的宽度。(默认值'200px')

    width : String

</pre>
  <el-main v-html="markedContent"></el-main>
</template>

<script>
import * as marked from 'marked'
import { ref,onMounted,nextTick } from 'vue'
import hljs from 'highlight.js/lib/core';

export default {
name: "card-list-page",
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
    cards: [{
      category: 'Main',
      date: '2020-12-08',
      title: 'It\'s only a fairy tale',
      content: 'Stars on the Sky.',
      tags: ['tag1', 'tag2'],
      link: '#'
    }, {
      category: 'News',
      date: '2022-12-23',
      title: 'Card 2',
      content: 'Are you OK?',
      tags: ['tag1', 'tag2'],
      link: '#'
    }, {
      category: 'News',
      date: '2020-09-08',
      title: 'Card 3',
      content: '美丽的错误往往最接近真实。',
      tags: ['tag1', 'tag2'],
      link: '#'
    }, {
      category: 'News',
      date: '2021-09-23',
      title: 'Card 4',
      content: 'No content here.',
      tags: ['tag1', 'tag2'],
      link: '#'
    }],
    markdown,
    markedContent,
  }
  }
}
</script>

<style>

</style>
