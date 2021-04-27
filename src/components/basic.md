# 弹性盒组件 <flex-box>

封装的flex布局组件，可以以更容易理解的方式配置。

# 效果实例

<flex-box v-pre direction="row" x-align="start" y-align="center" width="12em" height="4em">
<div>1</div>
<div>2</div>
<div>3</div>
</flex-box>

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
