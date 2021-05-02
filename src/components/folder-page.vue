<template>
<h1>折叠组件&lt;fluent-folder&gt;</h1>

  <p>由首部(Header)和主体(Main)组成的组件，点击首部可以切换折叠隐藏主体的内容。</p>

  <P>带有平滑的过渡效果。</P>

  <h1>效果实例</h1>
  <flex-box style="margin: 1em 0;justify-content: space-between;" x-align="start" y-align="start">
    <flex-box x-align="center" y-align="start" width="300px">
      <fluent-folder type="normal">
        <template #header>
          <div>Example Header</div>
        </template>
        <template #fold-banner></template>
        <template #main>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aliquam aspernatur blanditiis consequatur eligendi id, illum iusto mollitia odio quibusdam repudiandae rerum similique sint soluta sunt tempore, unde voluptate!</template>
      </fluent-folder>
    </flex-box>
    <flex-box x-align="center" y-align="start" width="300px">
      <fluent-folder type="warn">
        <template #header>
          <div>Example Header</div>
        </template>
        <template #fold-banner></template>
        <template #main>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aliquam aspernatur blanditiis consequatur eligendi id, illum iusto mollitia odio quibusdam repudiandae rerum similique sint soluta sunt tempore, unde voluptate!</template>
      </fluent-folder>
    </flex-box>
    <flex-box x-align="center" y-align="start" width="300px">
      <fluent-folder type="danger">
        <template #header>
          <div>Example Header</div>
        </template>
        <template #fold-banner></template>
        <template #main>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aliquam aspernatur blanditiis consequatur eligendi id, illum iusto mollitia odio quibusdam repudiandae rerum similique sint soluta sunt tempore, unde voluptate!</template>
      </fluent-folder>
    </flex-box>
    <flex-box x-align="center" yy-align="start" width="300px">
      <fluent-folder type="info">
        <template #header>
          <div>Example Header</div>
        </template>
        <template #fold-banner></template>
        <template #main>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aliquam aspernatur blanditiis consequatur eligendi id, illum iusto mollitia odio quibusdam repudiandae rerum similique sint soluta sunt tempore, unde voluptate!</template>
      </fluent-folder>
    </flex-box>
    <flex-box x-align="center" y-align="start" width="300px">
      <fluent-folder type="succeed">
        <template #header>
          <div>Example Header</div>
        </template>
        <template #fold-banner></template>
        <template #main>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aliquam aspernatur blanditiis consequatur eligendi id, illum iusto mollitia odio quibusdam repudiandae rerum similique sint soluta sunt tempore, unde voluptate!</template>
      </fluent-folder>
    </flex-box>
  </flex-box>
  <flex-box style="margin: 1em 0;justify-content: space-between;" x-align="start" y-align="start">
    <flex-box x-align="center" y-align="start" width="300px">
      <fluent-folder round type="normal">
        <template #header>
          <div>Example Header</div>
        </template>
        <template #fold-banner></template>
        <template #main>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aliquam aspernatur blanditiis consequatur eligendi id, illum iusto mollitia odio quibusdam repudiandae rerum similique sint soluta sunt tempore, unde voluptate!</template>
      </fluent-folder>
    </flex-box>
    <flex-box x-align="center" y-align="start" width="300px">
      <fluent-folder round type="warn">
        <template #header>
          <div>Example Header</div>
        </template>
        <template #fold-banner></template>
        <template #main>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aliquam aspernatur blanditiis consequatur eligendi id, illum iusto mollitia odio quibusdam repudiandae rerum similique sint soluta sunt tempore, unde voluptate!</template>
      </fluent-folder>
    </flex-box>
    <flex-box x-align="center" y-align="start" width="300px">
      <fluent-folder round type="danger">
        <template #header>
          <div>Example Header</div>
        </template>
        <template #fold-banner></template>
        <template #main>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aliquam aspernatur blanditiis consequatur eligendi id, illum iusto mollitia odio quibusdam repudiandae rerum similique sint soluta sunt tempore, unde voluptate!</template>
      </fluent-folder>
    </flex-box>
    <flex-box x-align="center" yy-align="start" width="300px">
      <fluent-folder round type="info">
        <template #header>
          <div>Example Header</div>
        </template>
        <template #fold-banner></template>
        <template #main>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aliquam aspernatur blanditiis consequatur eligendi id, illum iusto mollitia odio quibusdam repudiandae rerum similique sint soluta sunt tempore, unde voluptate!</template>
      </fluent-folder>
    </flex-box>
    <flex-box x-align="center" y-align="start" width="300px">
      <fluent-folder round type="succeed">
        <template #header>
          <div>Example Header</div>
        </template>
        <template #fold-banner></template>
        <template #main>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aliquam aspernatur blanditiis consequatur eligendi id, illum iusto mollitia odio quibusdam repudiandae rerum similique sint soluta sunt tempore, unde voluptate!</template>
      </fluent-folder>
    </flex-box>
  </flex-box>

  <h1 id="用法">用法</h1>
  <pre><code class="hljs javascript"><span class="hljs-comment">// 本身为块级元素，可以放置在其他块级或flex布局容器中</span>
&lt;fluent-folder round type="normal" &gt;
  &lt;template #header&gt;  Header  &lt;/template&gt;
  &lt;template #fold-banner&gt;  Fold Banner  &lt;/template&gt;
  &lt;template #main&gt;  Main Content Here  &lt;/template&gt;
&lt;/fluent-folder&gt;
</code></pre>
  <h1 id="属性配置">属性配置</h1>
  <ul>
    <li>round</li>
  </ul>
  <p>设置是否有圆角。（默认值为false）</p>
  <pre><code class="hljs javascript">direction: <span class="hljs-built_in">Boolean</span>
</code></pre>
  <ul>
    <li>type</li>
  </ul>
  <p>设置类型。（默认值为'info'）</p>
  <pre><code class="hljs javascript">direction: <span class="hljs-built_in">'normal' | 'warn' | 'danger' | 'info' | 'succeed'</span>
</code></pre>

</template>

<script>

export default {
  name: "folder-page",
  setup(){
  }
}
</script>

<style>

</style>
