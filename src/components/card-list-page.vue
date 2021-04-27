<template>
  <pre ref="markdown" v-show="false">
# Header1

this is your job!

<card-list style="margin: 2em 0;" :cards="cards">1231231</card-list>

i lvoe you!
  </pre>
  <el-main v-html="markedContent"></el-main>
</template>

<script>
import * as marked from 'marked'
import { ref,onMounted } from 'vue'
export default {
name: "card-list-page",
  setup(){
  const markdown = ref(null)
  let markedContent = ref('')
    onMounted(()=>{
    console.log(markdown)
    markedContent.value = marked(markdown.value.innerHTML)
      console.log(markdown.value.innerHTML)
      console.log(markedContent.value)
  })
  return {
    cards: [{
      category: 'Main',
      date: '2020-12-08',
      title: 'Title 1',
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

<style scoped>

</style>
