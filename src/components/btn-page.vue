<template>
  <el-main>
    <flex-box y-align="center" x-align="start" style="margin: 1em 0;">
      <fluent-button type="normal">Button</fluent-button>
      <fluent-button type="warn">Button</fluent-button>
      <fluent-button type="danger">Button</fluent-button>
      <fluent-button type="succeed">Button</fluent-button>
      <fluent-button type="unimportant">Button</fluent-button>
    </flex-box>
    <flex-box y-align="center" x-align="start" style="margin: 1em 0;">
      <fluent-button type="normal" plain>Button</fluent-button>
      <fluent-button type="warn" plain>Button</fluent-button>
      <fluent-button type="danger" plain>Button</fluent-button>
      <fluent-button type="succeed" plain>Button</fluent-button>
      <fluent-button type="unimportant" plain>Button</fluent-button>
    </flex-box>
  </el-main>
</template>

<script>
export default {
name: "btn-page"
}
</script>

<style scoped>

</style>
