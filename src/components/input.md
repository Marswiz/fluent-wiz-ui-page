# 网格组件：grid-box、grid-item

封装的grid布局组件，可以以更easy的方式配置。

# 效果实例

<grid-box cols="3" rows="5">
<grid-item x-from="1" x-to="3" y-from="2" y-to="5" style="background: tomato;">1</grid-item>
<grid-item>2</grid-item>
<grid-item>3</grid-item>
</grid-box>

# 用法

      <grid-box cols="3" rows="5">
        <grid-item x-from="1" x-to="3" y-from="2" y-to="5" gap="4px">1</grid-item>
        <grid-item>2</grid-item>
        <grid-item>3</grid-item>
      </grid-box>

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
