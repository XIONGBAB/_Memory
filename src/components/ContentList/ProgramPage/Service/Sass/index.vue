<template>
  <card-container :data="data">
    <template #svg>
      <svg
        t="1737886263985"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="14901"
        width="48"
        height="48"
      >
        <path
          d="M512 64c247.3 0 447.8 200.5 447.8 447.8S759.3 959.6 512 959.6 64.2 759.1 64.2 511.8 264.7 64 512 64z m-89 597c6.5 24.1 5.8 46.6-0.9 66.9l-2.4 6.7c-0.9 2.3-1.9 4.5-2.9 6.6-5.2 10.8-12.2 20.9-20.7 30.2-26 28.3-62.4 39.1-78 30-16.8-9.8-8.4-49.8 21.8-81.7 32.5-34.3 79.1-56.3 79.1-56.3v-0.1l4-2.3z m369.8-405.3c-20.2-79.6-152.1-105.8-277-61.4-74.2 26.4-154.6 67.8-212.4 121.9-68.8 64.2-79.7 120.2-75.2 143.6 15.9 82.5 129 136.5 175.5 176.5v0.2c-13.7 6.7-114 57.1-137.5 109.2-25.2 54.9 3.9 94.1 22.9 99.1 58.8 16.3 119.2-13.4 151.7-61.5 31.3-47.1 28.6-107.5 15.1-137.2 18.5-5 40.3-7.3 68.3-3.9 78.4 9 94.1 58.2 90.7 78.4-3.4 20.1-19.5 31.9-25.2 35.2-5.6 3.4-7.3 4.5-6.8 6.8 0.6 3.4 3.4 3.4 7.8 2.8 6.2-1.1 40.9-16.8 42.6-54.9 1.7-48.1-44.3-101.8-125.9-100.8-33.6 0.6-54.9 3.4-70 9.6-1-1.6-2.4-2.9-3.9-3.9-50.4-54.3-143.9-92.4-139.9-164.6 1.1-26.3 10.6-95.7 179.1-179.6 138.3-68.9 248.6-49.8 267.6-7.8 27.4 59.9-58.8 171.3-202.7 187.5-54.9 6.2-83.4-15.1-90.7-22.9-7.8-8.4-8.9-9-11.7-7.2-4.5 2.2-1.7 9.5 0 14 4.5 11.2 21.8 30.8 52.1 40.9 26.3 8.4 90.7 13.4 167.9-16.8C742 425 809.7 331.5 790.1 253.2l2.7 2.5z"
          fill="#CF649A"
          p-id="14902"
        />
      </svg>
      <h1>Sass</h1>
    </template>
    <template #describe>
      <p>
        Sass（Syntactically Awesome
        Stylesheets）是一种强大的CSS预处理器，它扩展了CSS的功能，使其更加强大和灵活。Sass允许开发者使用变量、嵌套规则、混合（Mixins）、继承等高级特性，从而编写更简洁、更可维护的样式表。
      </p>
    </template>
    <template #content>
      <el-card id="part1" shadow="hover">
        <h2>使用</h2>
        <p>安装</p>
        <ul>
          <li>
            方法1
            <ul>
              <li>
                官网： sass-lang.com , 中文文档
                <el-link
                  type="primary"
                  icon="Link"
                  target="_blank"
                  href="https://www.sass.hk/docs/"
                >
                  https://www.sass.hk/docs/
                </el-link>
              </li>
              <li>
                win / mac => 打开官网 => Install => 使用NPM在命令行输入 => npm
                install -g sass => 输入npm sass -v 检查版本
              </li>
            </ul>
          </li>
          <li>
            方法2(推荐)
            <ul>
              <li>
                Vscode 安装插件 EasySass
                在配置里settings.json中配置，默认会输出两个文件，一个压缩和一个未压缩，
              </li>
              <li>文件命名为 index.scss</li>
              <li>配置路径，到settings设置</li>
              <li>
                如果不是在根目录下的sass文件夹，那么就可能不会输出.css文件，需要用监视
              </li>
            </ul>
            <table>
              <tbody>
                <tr>
                  <th>说明</th>
                  <th>描述</th>
                </tr>
                <tr>
                  <td>全局安装 sass</td>
                  <td>npm install -g sass</td>
                </tr>
                <tr>
                  <td>将sass文件转换为css文件</td>
                  <td>
                    sass --watch test.scss output.css
                    执行上面语句会监听scss文件变化，一旦文件变化并保存后将立即输出到css文件上
                  </td>
                </tr>
                <tr>
                  <td>监听目录的变化</td>
                  <td>
                    sass --watch app/sass:public/stylesheets
                    <br />
                    sass将会监听src/sass目录下所有文件的变动，并编译css到public/stylesheets目录。
                    <br />
                    其中以冒号进行分割，前面是sass目录，后面是css目录。
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li></li>
        </ul>
        <p>Easy Sass插件</p>
        <pre><code class="language-js line-numbers">  /* 配置 */
  "easysass.formats": [
    {
      "format": "expanded",          /* 格式为 扩展*/
      "extension": ".css"            /* 扩展名为.css */
    },
    {
      "format": "compressed",        /* 格式为 压缩*/
      "extension": ".min.css"        /* 扩展名为.min.css */
    }
  ],
  "easysass.targetDir": "./css/",    /* 自定义输出位置 ,这样写的话你在创建Sass文件夹后，输出会到css文件夹下*/ </code></pre>
      </el-card>
      <el-card id="part2" shadow="hover">
        <h2>语法</h2>
        <p>代码</p>
        <pre><code class="language-css line-numbers">  /* nested嵌套： */
  div {
    width: 10px; }
    div ul {
      width: 20px; }
      div ul li {
        width: 30px; }

  /* compact紧凑： */
  div { width: 10px; }
  div ul { width: 20px; }
  div ul li { width: 30px; }

  /* expanded扩展： */
  div {width: 10px;}
  div ul {width: 20px;}

  div ul li {width: 30px;}

  /* compressed压缩：  */
  div{width:10px}
  div ul{width:20px}
  div ul li{width:30px}</code></pre>
        <p>两种语法区别</p>
        <ul>
          <li>
            原始缩进式： .sass
            <ul>
              <li>/* 多行注释 sass写法</li>
              <li>// 单行写法 其他内容sass只需要缩进下就可以达到注释效果</li>
            </ul>
            <pre><code class="language-css line-numbers">  @import base
  =alert
      color:#333
  .alert-warning
      +alert
  ul
      font-size: 15px
      li
          list-style:non</code></pre>
          </li>
          <li>
            sassy css: .scss
            <pre><code class="language-css line-numbers">  /* 多行写法
      多行要写尾部
  */

  // 单行 且 每行都要加反斜杠

  @import "base";
  @mixin alert {color: #333;}
  .alert-warning {@include alert;}
  ul {
      font-size: 15px;
      li {
          list-style: none;
      }
  }</code></pre>
          </li>
        </ul>
        <p>语法</p>
        <ul>
          <li>
            变量
            <pre><code class="language-css line-numbers">  $color-red: #333;
  $border: 1px solid $color-red;
  div{color:$color-red;}
  h1{border:$border;}   /* 可以变量中引用变量 */</code></pre>
          </li>
          <li>
            嵌套
            <pre><code class="language-css line-numbers">  div {
      color:$color-red;
      h1 {border: $border;}
      &:hover { color: #333;}
      & &-text{ color: #444;}
  }

  /* 可以使用根来嵌套 */
  body{font-size: 12px;font-weight: 600;font-family: 'Courier New', Courier, monospace;}

  /* 使用嵌套简写 */
  body{
      font: {   /* 注意font: 加上空格 再写{} */
          size: 12px;weight: 600;family: 'Courier New', Courier, monospace;
      }
  }</code></pre>
          </li>
          <li>
            混合
            <pre><code class="language-css line-numbers">  @mixin alert {                               /* 定义mixin */
      color: #444;
      background-color: #666;
      a {color: #666;}                         /* 可以使用嵌套 */

  }

  .alert-warning {                             /* 类使用mixin */
      @include alert;                          /* 使用关键字  @include */
  }

  /* 高级用法 */
  @mixin alert($color-red, $border) {          /* 定义mixin  （）里添加变量参数 */
      color: $color-red;background-color: $border;
      a {color: darken($color-red, 10%); }     /* 可以使用嵌套,darken是颜色加深的函数，后面是加深值 */
  }

  .alert-warning {                             /* 类使用mixin */
      @include alert(#666,#777);               /* 使用关键字  @include，可以不传参，也可以传入实参 */
  }
  .alert-info {                                /* 类使用mixin */
      @include alert($color-red:#fff,$border:#ccc); /* 可以定义变量初始值 */
  }

  /* 注意：混合形参可以给默认值，或者给null ,除掉某些样式，不会生成到最终的CSS样式中，除非我们调用混合宏时为其赋值。*/

  /* sass mixin variable fun start */
  @mixin displayStyle($display: null, $justifyContent: null, $alignItems: null) {
      display: $display;justify-content: $justifyContent;align-items: $alignItems;
  }
  @mixin widthStyle($width: null, $height: null, $color: null) {
      width: $width;height: $height;color: $color;
  }
  @mixin fontStyle($fontSize: null, $color: null, $fontWeight: null) {
      font-size: $fontSize;color: $color;font-weight: $fontWeight;
  }
  @mixin positionStyle($position: null, $top: null, $left: null) {
      position: $position;top: $top;left: $left;
  }
  @mixin borderStyle($size: null, $style, $color) {
      border: $size $style $color;
  }
  @mixin borderRadius($top: null, $right: null, $bottom: null, $left: null) {
      border-radius: $top $right $bottom $left;
  }
  @mixin imgStyle($address: null, $style: null, $width: null, $height: null) {
      $url: url; background: #{$url }($address) $style;background-size: $width $height;
  }
  @mixin spacingStyle($margin: null, $padding: null) {
      margin: $margin;padding: $padding;
  }
  @mixin pseudoClass($width: null, $height: null) {
      content: "";display: block;width: $width;height: $height;}

  /* sass mixin variable fun ebd */
  /* 当不确定形参个数时，可用...代替 @mixin box-shadow($shadows...) */
  @mixin box-shadow($shadows...) {
    -moz-box-shadow: $shadows;
    -webkit-box-shadow: $shadows;
    box-shadow: $shadows;
  }
  .shadows {
    @include box-shadow(0px 4px 5px #666, 2px 6px 10px #999);
  }</code></pre>
          </li>
          <li>
            继承extend
            <pre><code class="language-css line-numbers">  .alert{padding: 15px;}
  .alert a{font-weight: bold;}
  .alert-info{   /* 继承 */
      @extend .alert;    /* 关键字  extend */
      background-color: #ccc;
  }

  /* 输出css结果为 */
  .alert, .alert-info{padding: 15px;}
  .alert a, .alert-info a{font-weight: bold;}
  .alert-info{background-color: #ccc;}</code></pre>
          </li>
          <li>
            导入import， 导入partials文件
            <ul>
              <li>sass/_base.css</li>
              <li>sass/style.scss</li>
              <li>
                partials文件要以下划线命名开头
                _base.scss，这种文件不会被编译，而是等待@import导入
              </li>
              <li>
                在@import 导入 _base.scss ， @import “base”;
                不需要加后缀，会自动解析
              </li>
            </ul>
          </li>
          <li>
            注释
            <ul>
              <li>
                /* 我写一个多行注释
                <br />
                * 这种会生成在css文件里面 */
              </li>
              <li>
                /*! 强制输出的注释内容，压缩的css中也会出现,就是在前面加个！号*/
              </li>
              <li>// 单行注释不会出现在Css文件里面</li>
            </ul>
          </li>
          <li>查看类型 type-of()</li>
          <li>运算加括号（1 x 2）</li>
          <li>
            函数：数学
            <table>
              <tbody>
                <tr>
                  <th>函数</th>
                  <th>描述</th>
                  <th>函数</th>
                  <th>描述</th>
                </tr>
                <tr>
                  <td>abs(10px)</td>
                  <td>处理数字函数取绝对值</td>
                  <td>round(3.5)</td>
                  <td>保留整数</td>
                </tr>
                <tr>
                  <td>ceil(3)</td>
                  <td>保留整数 进位，输出4，不会四舍五入</td>
                  <td>floor(3.6)</td>
                  <td>保留整数，向下取整</td>
                </tr>
                <tr>
                  <td>percentage(650px / 1000px)</td>
                  <td>百分比 65%</td>
                  <td>min(1,2,3)</td>
                  <td>取最小值 1</td>
                </tr>
                <tr>
                  <td>max(1,2,3)</td>
                  <td>取最大值 3</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            函数：字符串
            <table>
              <tbody>
                <tr>
                  <th>函数</th>
                  <th>描述</th>
                  <th>函数</th>
                  <th>描述</th>
                </tr>
                <tr>
                  <td>to-upper-case(变量)</td>
                  <td>全部转大写</td>
                  <td>to-lower-case(变量)</td>
                  <td>全部转小写</td>
                </tr>
                <tr>
                  <td>str-length(变量)</td>
                  <td>获取字符长度</td>
                  <td>str-index(检查字符串，判断位置)</td>
                  <td>获取位置</td>
                </tr>
                <tr>
                  <td>str-insert(变量，“插入值”，位置)</td>
                  <td>插入</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            函数：color
            <table>
              <tbody>
                <tr>
                  <th>函数</th>
                  <th>描述</th>
                  <th>函数</th>
                  <th>描述</th>
                </tr>
                <tr>
                  <td>rgb()</td>
                  <td>红，绿，蓝数量来改变颜色</td>
                  <td>rgba()</td>
                  <td>红，绿，蓝数量，alpha通道0-1 来改变颜色</td>
                </tr>
                <tr>
                  <td>hsl()</td>
                  <td>色相0，饱和度%，明度% ，会转换成rgb()</td>
                  <td>hsla()</td>
                  <td>色相0，饱和度%，明度%，alpha通道0-1，会转换成rgba()</td>
                </tr>
                <tr>
                  <td>adjust-hue()</td>
                  <td>
                    颜色，度数deg，调整颜色，会转换成十六进制颜色，相当ps中颜色的滑块
                  </td>
                  <td>lighten()</td>
                  <td>处理的颜色，增加的明度%，调整颜色</td>
                </tr>
                <tr>
                  <td>dorken()</td>
                  <td>颜色，减少明度%，调整颜色</td>
                  <td>saturate()</td>
                  <td>颜色，增加饱和度%， 改变纯度</td>
                </tr>
                <tr>
                  <td>desaturate()</td>
                  <td>颜色，减少饱和度% ， 改变纯度</td>
                  <td>transparent()</td>
                  <td>颜色，减少的透明度0-1，转换成rgba</td>
                </tr>
                <tr>
                  <td>opacify()</td>
                  <td>颜色，0-1增加颜色的不透明度,转换成rgba</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            列表函数：list 列表函数，可用（）或者，分割
            <table>
              <tbody>
                <tr>
                  <th>函数</th>
                  <th>描述</th>
                  <th>函数</th>
                  <th>描述</th>
                </tr>
                <tr>
                  <td>length()</td>
                  <td>列表，获取长度，里面的位置是index索引值</td>
                  <td>nth()</td>
                  <td>列表，获取第几个项</td>
                </tr>
                <tr>
                  <td>index()</td>
                  <td>列表，指定值，输出指定值的位置</td>
                  <td>append()</td>
                  <td>列表，插入值，增加</td>
                </tr>
                <tr>
                  <td>join()</td>
                  <td>列表，列表，组合</td>
                  <td>map</td>
                  <td>map名/变量：(键：值，键：值)</td>
                </tr>
                <tr>
                  <td>map-get()</td>
                  <td>map名,键 ， 返回键的值</td>
                  <td>map-key()</td>
                  <td>map名，返回列表里所有的键</td>
                </tr>
                <tr>
                  <td>map-valuese()</td>
                  <td>map名，返回列表里所有的值</td>
                  <td>map-has-key()</td>
                  <td>map名，值。判断map里面有没有这个值，返回布尔值</td>
                </tr>
                <tr>
                  <td>map-remove()</td>
                  <td>map名，键，键 ，移除多个用逗号分隔</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            布尔值 true / false
            <ul>
              <li>ont</li>
            </ul>
          </li>
          <li>
            interpolation 类似模版字符串
            <pre><code class="language-css line-numbers">  $version: "0.0.1";
  /* 项目当前的版本是： #{$version} */

  $name: "info";
  $attr: "border";

  .alert-#{$name} {#{$attr}-color: #ccc;}

  输出结果：
  /* 项目当前的版本是： 0.0.1
  .alert-info {
      border-color: #ccc;
  } */</code></pre>
          </li>
          <li>
            @echo 循环输出
            <pre><code class="language-css line-numbers">  /* @each $var in $list{} */
  $icons: a b c;
  @each $icon in $icons ｛.icon-#{$icon} ｛background-image: url(../img/icons/#{$icon}.svg);｝｝
  $list: (1: hb_img52,2: hb_img51,3: hb_img53);
  @each $key, $var in $list ｛
      .rotationImg:nth-child(#{$key}) {
          @include imgStyle("../images/upload/#{$var}.jpg", no-repeat, 100%, 100%);}</code></pre>
          </li>
          <li>
            @while 循环输出,条件为真一直输出，条件为假则中断
            <pre><code class="language-css line-numbers">  $condition: 6;
  @while $condition>0 {
      .item-#{$condition} {width: 5px * $condition;}
      $condition: $condition - 2;
  }
  /* 输出结果
      .item-6 {width: 30px;}
      .item-4 {width: 20px;}
      .item-2 { width: 10px;} */</code></pre>
          </li>
          <li>
            @if 判断:变量值是真是假 { 然后才输出这里的代码} else if {} else{}
            <pre><code class="language-css line-numbers">  @if $use-prefixes: true;    /* true会输出  false不会输出  */
  .rounded {
      @if $use-prefixes {
          -webkit-border-radius: 5px;
          -moz-border-radius: 8px;
          -ms-border-radius: 8px;
          -o-border-radius: 8px;
      }
      border-radius: 8px;
  }

  /* 多条件判断 */
  $theme: dark;  /* 输出black */
  body {
      @if $theme == dark {
          background-color: black;
      } @else if $theme == light {
          background-color: white;
      } @else {
          background-color: pink;
      }
  }</code></pre>
          </li>
          <li>
            @for 变化重复：
            <ul>
              <li>
                @for $var from &lt;开始值&gt; through &lt;结束值&gt; 包含结束值
              </li>
              <li>
                @for $var from &lt;开始值&gt; to &lt;结束值&gt; 不包含结束值
              </li>
            </ul>
            <pre><code class="language-css line-numbers">  $columns: 4;
  @for $i from 1 through $columns {
    .col-#{$i}-#{$columns} {
      width: (100% / $columns) * $i;
    }
  } </code></pre>
          </li>
          <li>
            自定义函数
            <pre><code class="language-css line-numbers">  $colors: (light:#fff, dark:#000);
  @function color($key) {@return map-get($colors, $key);}

  body {background-color: color(light); }  /* 输出为#fff */</code></pre>
          </li>
          <li>
            显示错误/正确 提示
            <pre><code class="language-css line-numbers">  $colors: (light:#fff, dark:#000);
  @function color($key) {
      @if not map-has-key($colors, $key) {
          @error "在输出下会有错误提示，提示#{$key}不存在";
      }
      @return map-get($colors, $key);
  }

  body {background-color: color(red); } /* 给错的值 */</code></pre>
          </li>
        </ul>
      </el-card>
    </template>
  </card-container>
</template>

<script setup lang="ts" name="Sass">
import { ref } from "vue";

const data = ref([
  { id: 1, h2: "使用" },
  { id: 2, h2: "语法" },
]);
</script>

<style scoped lang="scss"></style>
