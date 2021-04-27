
<template>
  <pre ref="markdown" v-show="false">

# FluentWiz UI

FluentWiz UI为一款Vue插件，可以通过npm下载并安装到Vue应用实例。

# 通过npm安装

使用 npm 的方式安装，并与 webpack 等打包工具配合使用。

    npm install fluent-wiz-ui --save

# 为Vue app应用FluentWiz UI插件

在 Vue 入口文件中引入FluentWiz UI，并作为插件应用到Vue实例上。

    import fluentWizUi from 'fluent-wiz-ui'
    const app = createApp(App);
    app.use(fluentWizUi)
    app.mount('#app');

然后，即可在所有组件内，使用FluentWiz UI组件。
  </pre>
  <el-main v-html="markedContent"></el-main>
</template>

<script>
import * as marked from 'marked'
import { ref,onMounted,nextTick } from 'vue'
import hljs from 'highlight.js/lib/core';

export default {
  name: "install-page",
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
h1,h2,h3,h4,h5,h6 {
  color: #3a8ee6;
}
h1,h2 {
  margin-top: 1em;
}
h2::before {
  content: '#'
}
h2:hover {
  color: #9999ee;
  cursor: pointer;
}
p {
  margin: 1em 0;
}
code {
  display: block;
  padding: 1em;
  border-radius: .4em;
  overflow: scroll;
  width: 100%;
  background: lightgrey;
}
</style>
