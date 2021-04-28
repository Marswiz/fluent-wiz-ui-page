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

- cols, rows

设置网格的行、列定义。其中cols用于设置网格的列属性，rows用于设置网格的行属性。（默认值均为1）

可以传入一个整数值n，代表将行高、列宽等分为n等份。

也可以传入字符串，格式等同于`grid-template-columns和grid-template-rows。

    cols: number | string
    rows: number | string
    
- width, height

设置flex box的宽度和高度。（默认均为auto）

    width: String
    height: String
    
- gap

设置网格的间隙宽度值，等同于为grid设置gap css属性。（默认值为1em）

    gap: number | string

- inline

如果为True，则网格属性为inline-grid。（默认值为false）

    inline: boolean

## grid-item组件

- x-from, x-to, y-from, y-to

设置grid-item在水平方向(x)和竖直方向(y)的起止位置。(默认均为空字符串)

可以传入整数值，也可以传入字符串。整数值代表起止网格线的索引。

传入字符串相当于传入了网格线的名称，与分别设置grid-column和grid-row CSS属性相同。

    x-from: number | string
    x-to: number | string
    y-from: number | string
    y-to: number | string

# 按钮组件:fluent-button

基础按钮组件，包含常规、警告、成功、危险、信息等，可选圆角与扁平化按钮。

# 效果实例

-  size = small / normal / large

<fluent-button size="small">Button</fluent-button>
<fluent-button size="">Button</fluent-button>
<fluent-button size="large">Button</fluent-button>

-  type = normal / warn / succeed / danger / unimportant

<fluent-button type="normal">Button</fluent-button>
<fluent-button type="warn">Button</fluent-button>
<fluent-button type="danger">Button</fluent-button>
<fluent-button type="succeed">Button</fluent-button>
<fluent-button type="unimportant">Button</fluent-button>

- plain = true

<fluent-button type="normal" plain>Button</fluent-button>
<fluent-button type="warn" plain>Button</fluent-button>
<fluent-button type="danger" plain>Button</fluent-button>
<fluent-button type="succeed" plain>Button</fluent-button>
<fluent-button type="unimportant" plain>Button</fluent-button>

- no-round = true

<fluent-button type="normal" no-round>Button</fluent-button>

- bordered = true

<fluent-button type="normal" bordered>Button</fluent-button>

# 用法

    // size = small / normal / large
    
    <fluent-button size="small">Button</fluent-button>
    <fluent-button size="">Button</fluent-button>
    <fluent-button size="large">Button</fluent-button>
    
    // type = normal / warn / succeed / danger / unimportant
    
    <fluent-button type="normal">Button</fluent-button>
    <fluent-button type="warn">Button</fluent-button>
    <fluent-button type="danger">Button</fluent-button>
    <fluent-button type="succeed">Button</fluent-button>
    <fluent-button type="unimportant">Button</fluent-button>
    
    // plain = true
    
    <fluent-button type="normal" plain>Button</fluent-button>
    <fluent-button type="warn" plain>Button</fluent-button>
    <fluent-button type="danger" plain>Button</fluent-button>
    <fluent-button type="succeed" plain>Button</fluent-button>
    <fluent-button type="unimportant" plain>Button</fluent-button>
    
    // no-round = true
    
    <fluent-button type="normal" no-round>Button</fluent-button>
    
    // bordered = true
    
    <fluent-button type="normal" bordered>Button</fluent-button>

# 属性配置

- size

设置按钮的尺寸。可选large/normal/small（默认值为normal）

    size: 'large' | 'normal' | 'small'

- type

设置按钮的类型，具有不同的显示形式。可选normal / succeed / warn / danger / unimportant（默认值为normal）

    type: 'normal' | 'succeed' | 'warn' | 'danger' | 'unimportant'

- plain

设置按钮是否扁平。（默认值为false）

    size: Boolean
    
- no-round

如果为true,则按钮没有圆角。（默认值为false）

    size: Boolean
    
- bordered

如果为true,则按钮带有白色边框。（默认值为false）

    size: Boolean

# 抖音故障效果: tiktok-glitch

为文字添加模仿抖音LOGO的故障效果

目前效果很差，后续还得改。

# 效果实例

- animate = false

<tiktok-glitch style="font-size: 3em;">FluentWiz UI</tiktok-glitch>

- animate, speed = 'slow' | 'normal' | 'fast'

<tiktok-glitch speed="slow" animate style="font-size: 3em;">FluentWiz UI</tiktok-glitch>
<tiktok-glitch speed="normal" animate style="font-size: 3em;">FluentWiz UI</tiktok-glitch>
<tiktok-glitch speed="fast" animate style="font-size: 3em;">FluentWiz UI</tiktok-glitch>

- 传入img

<tiktok-glitch speed="slow" img="./fluentWizLogo.svg" animate style="font-size: 3em;">FluentWiz UI</tiktok-glitch>
<tiktok-glitch speed="normal" animate style="font-size: 3em;">FluentWiz UI</tiktok-glitch>
<tiktok-glitch speed="fast" animate style="font-size: 3em;">FluentWiz UI</tiktok-glitch>

# 用法

    // animate = false
    
    <tiktok-glitch v-pre style="font-size: 3em;">FluentWiz UI</tiktok-glitch>
    
    // animate, speed = 'slow' | 'normal' | 'fast'
    
    <tiktok-glitch v-pre  speed="slow" animate style="font-size: 3em;">FluentWiz UI</tiktok-glitch>
    <tiktok-glitch v-pre  speed="normal" animate style="font-size: 3em;">FluentWiz UI</tiktok-glitch>
    <tiktok-glitch v-pre  speed="fast" animate style="font-size: 3em;">FluentWiz UI</tiktok-glitch>
    
    // 传入img
    
    <tiktok-glitch v-pre speed="slow" img="./fluentWizLogo.svg" animate style="font-size: 3em;">FluentWiz UI</tiktok-glitch>
    <tiktok-glitch v-pre speed="normal" animate style="font-size: 3em;">FluentWiz UI</tiktok-glitch>
    <tiktok-glitch v-pre speed="fast" animate style="font-size: 3em;">FluentWiz UI</tiktok-glitch>

# 属性配置

- animate

如果为True，则带有动画效果。动画速率用speed进行设置。(默认为false)
    
    animate: Boolean
    
- speed

用来设置动画的速率。(默认为normal)    
    
    speed: 'slow' | 'normal' | 'fast'
    
- img

用来为组件传入一个图片地址，会覆盖组件内的文字。(默认为空字符串)
    
    img: String
    
- imgInfo

用来为组件图片设置信息值，相当于设置图片的alt attribute.(默认为空字符串)
    
    imgInfo: String

