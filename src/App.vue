<template>
  <el-container style="height: 100vh;">
    <el-aside width="300px" style=" box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);">
      <el-scrollbar height="100%">
        <flex-box x-align="center" y-align="center" height="4em" style="font-family: Helvetica;">FluentWiz UI</flex-box>
        <el-menu>
          <el-submenu index="1">
            <template #title>
              <span>Install 快速安装</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">npm包管理器</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu v-for="(item,index) in items" :key="index" :index="index+2">
            <template #title>
              <span>{{ item.category }}</span>
            </template>
            <el-menu-item-group v-for="(it,ind) in item.components" :key="ind">
              <el-menu-item  :index="index+2+'-'+ind">{{it}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-container>
<!-- Show Component Details  -->
      <component :is="shown"></component>
    </el-container>
  </el-container>
</template>

<script>
import installPage from './components/install-page.vue'
export default {
  name: 'App',
  setup(){
    return {
      items: [
        {
          category: 'Buttons 按钮',
          components: ['常规按钮Default Button','扁平按钮 Plain Button']
        },
        {
          category: 'Layout 布局',
          components: ['弹性盒组件FlexBox','网格组件Grid Box']
        },
        {
          category: 'Lists 列表效果',
          components: ['抽选卡片列表Card List']
        },
        {
          category: 'Glitch 故障效果',
          components: ['抖音Tiktok']
        },
      ],
      shown: installPage,
    }
  },
  components: {
    installPage,
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
