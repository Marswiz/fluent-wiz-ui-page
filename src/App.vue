<template>
  <el-container style="height: 100vh;">
    <el-aside width="300px" style=" box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);">
      <el-scrollbar height="100%">
        <flex-box x-align="center" y-align="center" height="3em" style="padding: 1em 1em;cursor:pointer;" @click="changeShown('default-page')">
          <img src="../public/fluentWizLogo.svg" alt="fluentWizLogo" style="max-width: 100%; width: 100%; height: auto;">
        </flex-box>
        <el-menu style="padding-top: 1em;" id="menu">
          <el-submenu index="1">
            <template #title>
              <span>○ Install 快速安装</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="changeShown('install-page')">○ npm包管理器</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu v-for="(item,index) in items" :key="index" :index="index+2">
            <template #title>
              <span>○ {{ item.category }}</span>
            </template>
            <el-menu-item-group v-for="(it,ind) in item.components" :key="ind">
              <el-menu-item @click="changeShown(it.comp)"  :index="index+2+'-'+ind">○ {{it.title}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-container id="content">
        <!-- Show Component Details  -->
        <keep-alive>
          <component :is="compShown"></component>
        </keep-alive>
    </el-container>
    <el-aside width="100px" style="background: transparent;">
      <flex-box direction="column" x-align="center" id="authorInfo">
        <a class="linkItem" target="_blank" href="https://marswiz.com">Blog</a>
        <a class="linkItem" target="_blank" href="https://github.com/Marswiz">Git</a>
        <a class="linkItem" target="_blank" href="https://cookwiz.marswiz.com">Cook</a>
        <a class="linkItem" target="_blank" href="#">CV</a>
      </flex-box>
    </el-aside>
  </el-container>
</template>

<script>
import { ref } from 'vue'
import defaultPage from './components/default-page.vue'
import btnPage from './components/btn-page.vue'
import installPage from './components/install-page.vue'
import cardListPage from './components/card-list-page.vue'
import flexBoxPage from './components/flex-box-page.vue'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

export default {
  name: 'App',
  setup(){
    let compShown = ref('default-page')
    return {
      compShown,
      changeShown(comp){
        compShown.value = comp
        console.log(compShown.value);
      },
      items: [
        {
          category: 'Lists 列表效果',
          components: [
            {title: '抽选卡片列表Card List', comp: 'card-list-page'}
          ]
        },
        {
          category: 'Layout 布局',
          components: [
            {title: '弹性盒组件Flex Box', comp: 'flex-box-page'},
            {title: '网格组件Grid Box', comp:''}
          ]
        },
        {
          category: 'Buttons 按钮',
          components: [
            {title: '常规按钮Default Button', comp: 'btn-page'},
            {title: '扁平按钮 Plain Button', comp:'btn-page'}
          ]
        },
        {
          category: 'Glitch 故障效果',
          components: [
            {title: '抖音Tiktok', comp: ''}
          ]
        },
      ]
    }
  },
  components: {
    installPage,
    cardListPage,
    btnPage,
    flexBoxPage,
    defaultPage,
  }
}
</script>
<style lang="scss">
@property --my-first-color{
  syntax: '<color>';
  inherits: false;
  initial-value: #c0ffee;
}
@property --my-second-color{
  syntax: '<color>';
  inherits: false;
  initial-value: #ff8c00;
}

  body {
    margin: 0;
    padding: 0;
  }
  #logo {
    display: flex;
  }
  #menu {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
  .linkItem {
    --my-first-color: #eae5c9;
    --my-second-color: #6cc6cb;
    $shadow: .4em;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    background: linear-gradient(to right bottom, var(--my-first-color) 0, var(--my-second-color) 100%);
    text-decoration: none;
    transition-property: --my-first-color,--my-second-color,margin,transform;
    transition-duration: .5s;
    margin-top: 1em;
    box-shadow:$shadow $shadow $shadow -1*$shadow gray;
    &:hover {
      --my-first-color: #c973ff;
      --my-second-color: #ff8c00;
      margin: 2em;
      transform: scale(1.5);
    }
  }
  #content{
    padding-left: 2em;
    h1,h2,h3,h4,h5,h6{
      &:not(:first-child){
        margin-top: 2em;
      }
      $color: #3a8ee6;
      color: $color;
      &:hover {
        cursor: pointer;
        color: lighten($color, 30%);
      }
      &:before {
        content: '# ';
      }
    }
    p {
      font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    }
    pre code{
      font-family: Menlo,Monaco,Consolas,Courier,monospace;
      line-height: 2em;
      padding: 1em 1em;
      border-radius: 5px;
      background: #eee;
      border: 2px solid gray;
    }
    img {
      width: 800px;
      margin: 1em 0;
    }
    blockquote {
      $bgColor: rgba(20,192,210);
      background: transparentize($bgColor,.8);
      border-left: .5em solid $bgColor;
      border-radius: .2em;
      margin: 1em 0;
      padding: 1em 1em;
      color: #555;
      p {
        margin: 0;
      }
    }
    ul li {
      color: rgb(20,192,210);
      font-weight: bold;
    }
  }
</style>
