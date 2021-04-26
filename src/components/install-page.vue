<template>
  <el-main>
    <h2>npm安装</h2>
    <p>使用 npm 的方式安装，并与 webpack 等打包工具配合使用。</p>
    <pre class="prettyprint">npm install fluent-wiz-ui --save</pre>
    <p>在入口文件中引入FluentWiz UI，并作为插件应用到Vue实例上。</p>
    <pre class="prettyprint">import fluentWizUi from 'fluent-wiz-ui'
    const app = createApp(App);
    app.use(fluentWizUi)
    app.mount('#app');</pre>
  </el-main>
</template>

<script>
export default {
  name: "install-page"
}
</script>

<style scoped>
h1,h2,h3,h4,h5,h6 {
  color: #3a8ee6;
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
