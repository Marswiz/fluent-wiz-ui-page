<template>
  <el-container style="height: 100vh;">
    <el-aside width="300px" style=" box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);">
      <el-scrollbar height="100%">
        <flex-box x-align="center" y-align="center" height="4em" style="font-family: Helvetica;">
          <tiktok-glitch style="font-size: 2em;">FluentWiz UI</tiktok-glitch>
        </flex-box>
        <el-menu>
          <el-submenu index="1">
            <template #title>
              <span>Install 快速安装</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="changeShown('install-page')">npm包管理器</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu v-for="(item,index) in items" :key="index" :index="index+2">
            <template #title>
              <span>{{ item.category }}</span>
            </template>
            <el-menu-item-group v-for="(it,ind) in item.components" :key="ind">
              <el-menu-item @click="changeShown(it.comp)"  :index="index+2+'-'+ind">{{it.title}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-container>
<!-- Show Component Details  -->
      <keep-alive>
        <component :is="compShown" @change="console.log(compShown)"></component>
      </keep-alive>
    </el-container>
  </el-container>
</template>

<script>
import { ref } from 'vue'
import btnPage from './components/btn-page.vue'
import installPage from './components/install-page.vue'
import cardListPage from './components/card-list-page.vue'
export default {
  name: 'App',
  setup(){
    let compShown = ref('')
    return {
      compShown,
      changeShown(comp){
        compShown.value = comp
        console.log(compShown.value);
      },
      items: [
        {
          category: 'Buttons 按钮',
          components: [
            {title: '常规按钮Default Button', comp: 'btn-page'},
            {title: '扁平按钮 Plain Button', comp:'btn-page'}
          ]
        },
        {
          category: 'Layout 布局',
          components: [
            {title: '弹性盒组件Flex Box', comp: ''},
            {title: '网格组件Grid Box', comp:''}
          ]
        },
        {
          category: 'Lists 列表效果',
          components: [
            {title: '抽选卡片列表Card List', comp: 'card-list-page'}
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
  }
}
</script>
<style>
  body {
    margin: 0;
    padding: 0;
  }
  #logo {
    display: flex;
  }
</style>
