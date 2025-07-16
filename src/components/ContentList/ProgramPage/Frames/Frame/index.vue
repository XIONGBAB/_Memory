<template>
  <card-container :data="data">
    <template #svg>
      <svg
        t="1737872171417"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3325"
        width="48"
        height="48"
      >
        <path
          d="M764.8 333.856L901.44 249.6a468.96 468.96 0 0 0-370.688-206.496v160a309.344 309.344 0 0 1 234.016 130.752z"
          fill="#23B8BA"
          p-id="3326"
        />
        <path
          d="M541.44 54.304a458.208 458.208 0 0 1 344.512 192l-118.336 73.28a318.624 318.624 0 0 0-226.208-126.208V54.304z m-10.688-11.2v160a309.344 309.344 0 0 1 234.016 130.752L901.44 249.6a468.96 468.96 0 0 0-370.656-206.496z"
          fill="#14A59E"
          p-id="3327"
        />
        <path
          d="M720.736 740.128l100.928 124.64a469.344 469.344 0 0 0 99.072-583.424l-136.32 84.256a308.704 308.704 0 0 1-63.68 374.528z"
          fill="#FFA800"
          p-id="3328"
        />
        <path
          d="M916.8 296.32a458.688 458.688 0 0 1-93.984 552.96l-87.552-107.936a319.264 319.264 0 0 0 63.2-371.84L916.8 296.32z m3.936-14.976l-136.32 84.256a308.704 308.704 0 0 1-63.68 374.528l100.928 124.64a469.344 469.344 0 0 0 99.072-583.424z"
          fill="#E29103"
          p-id="3329"
        />
        <path
          d="M691.712 763.552a309.344 309.344 0 1 1-198.272-560v-160a469.344 469.344 0 1 0 299.232 845.184l-100.96-125.184z"
          fill="#0985F6"
          p-id="3330"
        />
        <path
          d="M482.752 54.304v139.072a320 320 0 1 0 206.944 584.608l87.616 108.256a458.656 458.656 0 0 1-595.52-692.48 456.16 456.16 0 0 1 300.96-139.456z m10.688-11.2a469.344 469.344 0 1 0 299.232 845.152l-100.96-124.672a309.344 309.344 0 1 1-198.272-560V43.104z"
          fill="#006FC1"
          p-id="3331"
        />
      </svg>
      <h1>Frame</h1>
    </template>
    <template #describe>
      <p>
        框架特别适合那些需要固定某些部分内容，而其他部分需要经常更新的网页设计。例如，一个固定的导航栏和一个主内容区域，导航栏在一个框架中保持不变，而主内容区域在另一个框架中根据用户的操作或时间更新。
      </p>
    </template>
    <template #content>
      <el-card id="part1" shadow="hover">
        <h2>Responsive</h2>
        <p>技巧</p>
        <ul>
          <li>
            网页开发中，用rem做适配方案时，html根字体设置10px，是为了更好的计算
          </li>
        </ul>
        <p>响应式布局灵感网址</p>
        <ul>
          <li>
            框架：
            <ul>
              <li>
                <el-link
                  type="primary"
                  icon="Link"
                  target="_blank"
                  href="getbootstrap.com"
                >
                  getbootstrap.com
                </el-link>
              </li>
              <li>
                <el-link
                  type="primary"
                  icon="Link"
                  target="_blank"
                  href="foundation.zurb.com"
                >
                  foundation.zurb.com
                </el-link>
              </li>
            </ul>
          </li>
          <li>
            灵感：
            <ul>
              <li>
                <el-link
                  type="primary"
                  icon="Link"
                  target="_blank"
                  href="mediaqueri.es"
                >
                  mediaqueri.es
                </el-link>
              </li>
              <li>
                <el-link
                  type="primary"
                  icon="Link"
                  target="_blank"
                  href="responsive.cn"
                >
                  responsive.cn
                </el-link>
              </li>
              <li>
                <el-link
                  type="primary"
                  icon="Link"
                  target="_blank"
                  href="https://dribbble.com/"
                >
                  https://dribbble.com/
                </el-link>
              </li>
              <li>
                <el-link
                  type="primary"
                  icon="Link"
                  target="_blank"
                  href="https://behance.net"
                >
                  https://behance.net
                </el-link>
              </li>
              <li>
                <el-link
                  type="primary"
                  icon="Link"
                  target="_blank"
                  href="https://themeforest.net"
                >
                  https://themeforest.net
                </el-link>
              </li>
              <li>
                <el-link
                  type="primary"
                  icon="Link"
                  target="_blank"
                  href="https://colorlib.com"
                >
                  https://colorlib.com
                </el-link>
              </li>
              <li>
                <el-link
                  type="primary"
                  icon="Link"
                  target="_blank"
                  href="https://www.webdesign-inspiration.com/"
                >
                  https://www.webdesign-inspiration.com/
                </el-link>
              </li>
            </ul>
          </li>
        </ul>
        <p>响应式开发原理</p>
        <ul>
          <li>
            就是使用媒体查询针对不同宽度的设备进行布局和样式的设置，从而适配不同设备的目的
          </li>
          <li>
            表格
            <table>
              <tbody>
                <tr>
                  <th>屏幕</th>
                  <th>像素</th>
                </tr>
                <tr>
                  <td>超小屏幕（手机）</td>
                  <td>&lt; 768px</td>
                </tr>
                <tr>
                  <td>小屏设备（平板）</td>
                  <td>&gt;= 768px ~ &lt; 992px</td>
                </tr>
                <tr>
                  <td>中等屏幕（桌面显示器）</td>
                  <td>&gt;= 992px ~ &lt; 1200px</td>
                </tr>
                <tr>
                  <td>宽屏设备（大桌面显示器）</td>
                  <td>&gt;= 1200px</td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
        <p>响应式布局容器</p>
        <ul>
          <li>
            响应式需要一个父级做为布局容器，来配合子级元素来实现变化效果。原理就是在不同屏幕下，通过媒体查询来改变这个布局容器的大小，再改变里面子元素的排列方式和大小，从而实现不同屏幕下，看到不同的页面布局和样式变化。
          </li>
          <li>
            就是使用媒体查询针对不同宽度的设备进行布局和样式的设置，从而适配不同设备的目的
          </li>
          <li>
            表格
            <table>
              <tbody>
                <tr>
                  <th>浏屏幕</th>
                  <th>像素</th>
                </tr>
                <tr>
                  <td>超小屏幕（手机，小于768px）：</td>
                  <td>设置宽度为100%</td>
                </tr>
                <tr>
                  <td>小屏幕（平板，大于等于768px）：</td>
                  <td>设置宽度为750px</td>
                </tr>
                <tr>
                  <td>中等屏幕（桌面显示器，关于等于992px）：</td>
                  <td>设置宽度为970px</td>
                </tr>
                <tr>
                  <td>大屏幕（大桌面显示器，大于等于1200px）：</td>
                  <td>设置宽度为1170px</td>
                </tr>
                <tr>
                  <td>其他（大于等于1280px）：</td>
                  <td>设置宽度为1280px</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            代码
            <pre><code class="language-css line-numbers">  @media screen and(max-width:767px)｛.container｛ width: 100%;｝｝
  @media screen and(min-width:768px)｛.container｛ width: 750px;｝｝
  @media screen and(min-width:992px)｛.container｛ width: 970px;｝｝
  @media screen and(min-width:1200px)｛.container｛ width: 1170px;｝｝</code></pre>
          </li>
        </ul>
        <p>案例</p>
        <ul>
          <li>
            当我们屏幕大于等于768像素，我们给布局容器container宽度为750px。
          </li>
          <li>
            container里面包含8个小i盒子，每个盒子的宽度定为93.75px（750/8），高度为30px，浮动一行显示
          </li>
          <li>
            当我们屏幕缩放，宽度小于768像素的时候，container盒子宽度修改为100%宽度。
          </li>
          <li>
            此时里面的8个小i，宽度修改33.33%，这样一行就只能显示3个i，剩余下行显示
          </li>
          <li>
            代码
            <pre><code class="language-html line-numbers">  &lt;style&gt;
      * {margin: 0;padding: 0;}
      ul {list-style: none;}
      .container {width: 750px;margin: 0 auto;}
      ul li {float: left;width: 93.75px;height: 30px;background-color: skyblue;}
      @media screen and (max-width: 767px) {
        .container {width: 100%;}
        .container ul li {width: 33.33%;}
      }
  &lt;/style&gt;

  &lt;div class="container"&gt;
      &lt;ul &gt;
          &lt;li&gt;导航1&lt;/li&gt;
          &lt;li&gt;导航2&lt;/li&gt;
          &lt;li&gt;导航3&lt;/li&gt;
          &lt;li&gt;导航4&lt;/li&gt;
          ...
      &lt;/ul&gt;
  &lt;/div&gt;</code></pre>
          </li>
        </ul>
        <p>bootstrap</p>
        <ul>
          <li>
            Bootstrap来自Twitter（推特），是目前最受欢迎的前端框架。Bootstrap是基于HTML、CSS和JAVASCRIPT的，
            它简洁灵活，使得 Web开发更加快捷
            <ul>
              <li>
                中文官网：
                <el-link
                  type="primary"
                  icon="Link"
                  target="_blank"
                  href="http://www.bootcss.com/"
                >
                  http://www.bootcss.com/
                </el-link>
              </li>
              <li>
                官网：
                <el-link
                  type="primary"
                  icon="Link"
                  target="_blank"
                  href="http://getbootstrap.com/"
                >
                  http://getbootstrap.com/
                </el-link>
              </li>
              <li>
                推荐使用：
                <el-link
                  type="primary"
                  icon="Link"
                  target="_blank"
                  href="http://bootstrap.css88.com/"
                >
                  http://bootstrap.css88.com/
                </el-link>
              </li>
              <li>
                <el-link
                  type="primary"
                  icon="Link"
                  target="_blank"
                  href="https://bootstrap.css88.com/"
                >
                  https://bootstrap.css88.com/
                </el-link>
                (点开网址后，点击下载，往下翻可以看到说明)
              </li>
            </ul>
          </li>
          <li>
            框架
            <ul>
              <li>
                顾名思义就是一套架构，它有一套比较完整的网页功能解决方案，而且控制权在框架本身，有预制样式库、
                组件和插件。
              </li>
              <li>使用者要按照框架所规定的某种规范进行开发</li>
            </ul>
          </li>
          <li>
            Bootstrap简介:优点
            <ul>
              <li>标准化的html+css编码规范·提供了一套简洁、直观、强悍的组件</li>
              <li>
                有自己的生态圈，不断的更新迭代·让开发更简单，提高了开发的效率
              </li>
            </ul>
          </li>
          <li>
            Bootstrap简介:版本
            <ul>
              <li>2.x.x：停止维护，兼容性好代码不够简洁，功能不够完善。</li>
              <li>
                3.xx：目前使用最多，稳定，但是放弃了IE6-IE7。对IE8支持但是界面效果不好，偏向用于开发响应式布局、
                移动设备优先的WEB项目。
              </li>
              <li>4.x.x：最新版，目前还不是很流行</li>
            </ul>
          </li>
          <li>
            Bootstrap使用 查官方文档
            <ul>
              <li>
                在现阶段我们还没有接触JS相关课程，所以我们只考虑使用它的样式库。
              </li>
              <li>
                控制权在框架本身，使用者要按照框架所规定的某种规范进行开发。
              </li>
            </ul>
          </li>
          <li>
            Bootstrap使用四步曲
            <ul>
              <li>1. 创建文件夹结构</li>
              <li>2. 创建html骨架结构</li>
              <li>3. 引入相关样式文件</li>
              <li>4. 书写内容</li>
            </ul>
          </li>
        </ul>
        <p>响应式</p>
        <pre><code class="language-html line-numbers">  &lt;!-- 常用设备屏幕和打印设备  screen    print （网页按下快捷键 ctrl + p 可调出打印页面） --&gt;
  &lt;style media=""&gt; &lt;/style&gt;                                      &lt;!-- 不写代表所有设备 --&gt;
  &lt;style media="screen , print"&gt; &lt;/style&gt;                        &lt;!-- 多个用 ， 分割 --&gt;
  &lt;style media="screen and (orientation: landscape)"&gt; &lt;/style&gt;   &lt;!-- 横屏下变换的样式 --&gt;</code></pre>
        <p>媒体查询</p>
        <ul>
          <li>
            写法
            <pre><code class="language-css line-numbers">  @media (orientation : portrait ){....}     /* 媒体查询 （媒体的特性 ： 垂直方向）｛执行代码｝ */

/* 比如判断屏幕最大为480px */
@media ( max - device-width : 480px){...}  /* 如果屏幕小于480px 那么就会返回一个true */</code></pre>
          </li>
          <li>
            属性和属性值
            <table>
              <tbody>
                <tr>
                  <th>代码</th>
                  <th>描述</th>
                </tr>
                <tr>
                  <td>aspect-ratio：</td>
                  <td>3/2 可视窗口宽高比</td>
                </tr>
                <tr>
                  <td>device-aspect-ratio：</td>
                  <td>3/2 设备可视窗口宽高比</td>
                </tr>
                <tr>
                  <td>orientation：</td>
                  <td>portrait 垂直方向</td>
                </tr>
                <tr>
                  <td>orientation：</td>
                  <td>landscape 水平方向</td>
                </tr>
                <tr>
                  <td>maximum：</td>
                  <td>最大的，相当于小于或者等于</td>
                </tr>
                <tr>
                  <td>minimum：</td>
                  <td>最小的，相当于大于或者等于</td>
                </tr>
                <tr>
                  <td>max-height / width：480px</td>
                  <td>当网页可视窗口小于等于 480px 为true 时，触发后面代码</td>
                </tr>
                <tr>
                  <td>min-height / width：</td>
                  <td>当网页可视窗口大于等于</td>
                </tr>
                <tr>
                  <td>device-max-height / width： 480px</td>
                  <td>当设备小于等于 480px</td>
                </tr>
                <tr>
                  <td>device-min-height / width</td>
                  <td>当设备大于等于</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            多重写法 逗号隔开
            <pre><code class="language-css line-numbers">  @media (orientation : portrait)，@media screen and (max-widht:480px) {
      ....
  }

  @media screen and(min-device-width:200px) and(max-device-width:300px){
      /* 执行代码 */
  }</code></pre>
          </li>
          <li>
            not
            <pre><code class="language-css line-numbers">  @media not screen {
    /* 如果设备不是 screen 才执行{ }里面的代码 */
  } </code></pre>
          </li>
          <li>
            only
            <pre><code class="language-css line-numbers">  @media only screen {
     /* 如果设备支持媒体查询才会引用这里面的代码 */
  }</code></pre>
          </li>
          <li>
            图片
            <pre><code class="language-html line-numbers">  1、img 要响应式 设置宽度100%，如果不被拉伸 需要设置 max-width:100%，这样会跟着容器的宽度走
  2、背景图片设置：-webkit-background-size:100%; (兼容性) background-size:100%;
  3、造成问题，当缩小屏幕的时候，图片和上面区域会留下很多空白</code></pre>
          </li>
          <li>
            引入方式
            <pre><code class="language-html line-numbers">  1、外部引入
  &lt;!-- 当屏幕大于300 且小于500px 的时候，会引入index1.css的样式 --&gt;
  &lt;link rel="stylesheet" href="./css/index1.css" media="(min-device-width:300px) and (max-device-width:500px)"&gt;
  &lt;!-- 当屏幕大于100 且小于300px 的时候，会引入index2.css的样式 --&gt;
  &lt;link rel="stylesheet" href="./css/index2.css" media="(min-device-width:100px) and (max-device-width:300px)"&gt;

  2、内部样式
  &lt;style&gt; media="(min-device-width:300px) and (max-device-width:500px)"&gt; /* 代码 */ &lt;/style&gt;

  3、内联样式</code></pre>
          </li>
        </ul>
        <p>分辨率参考</p>
        <ul>
          <li>
            以下是最近（2020年）记录的当前全球顶级屏幕分辨率的列表
            <table>
              <tbody>
                <tr>
                  <th>分辨率</th>
                  <th>占比</th>
                </tr>
                <tr>
                  <td>1366×768</td>
                  <td>23.49％</td>
                </tr>
                <tr>
                  <td>1920×1080</td>
                  <td>19.91％</td>
                </tr>
                <tr>
                  <td>1536×864</td>
                  <td>8.65％</td>
                </tr>
                <tr>
                  <td>1440×900</td>
                  <td>7.38％</td>
                </tr>
                <tr>
                  <td>1280×720</td>
                  <td>4.89％</td>
                </tr>
                <tr>
                  <td>1600×900</td>
                  <td>4.01％</td>
                </tr>
                <tr>
                  <td>1280×800</td>
                  <td>3.33％</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            全球移动屏幕分辨率统计，2019年5月– 2020年5月
            <table>
              <tbody>
                <tr>
                  <th>分辨率</th>
                  <th>占比</th>
                </tr>
                <tr>
                  <td>360×640</td>
                  <td>17.91％</td>
                </tr>
                <tr>
                  <td>375×667</td>
                  <td>7.61％</td>
                </tr>
                <tr>
                  <td>414×896</td>
                  <td>6.52％</td>
                </tr>
                <tr>
                  <td>360×780</td>
                  <td>5.56％</td>
                </tr>
                <tr>
                  <td>360×760</td>
                  <td>5.06％</td>
                </tr>
                <tr>
                  <td>414×736</td>
                  <td>3.74％</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            全球平板电脑屏幕分辨率统计，2019年5月– 2020年5月
            <table>
              <tbody>
                <tr>
                  <th>分辨率</th>
                  <th>占比</th>
                </tr>
                <tr>
                  <td>768×1024</td>
                  <td>51.98％</td>
                </tr>
                <tr>
                  <td>1280×800</td>
                  <td>7.11％</td>
                </tr>
                <tr>
                  <td>800×1280</td>
                  <td>5.34％</td>
                </tr>
                <tr>
                  <td>601×962</td>
                  <td>4.47％</td>
                </tr>
                <tr>
                  <td>600×1024</td>
                  <td>2.85％</td>
                </tr>
                <tr>
                  <td>1024×1366</td>
                  <td>1.96％</td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
      </el-card>
      <el-card id="part2" shadow="hover">
        <h2>Bootstrap使用</h2>
        <p>框架使用前的准备</p>
        <ul>
          <li>使用前，下载好官网的文件</li>
          <li>
            引入相关文件
            <pre><code class="language-html line-numbers">  &lt;!-- css --&gt;
  &lt;link rel="stylesheet" href="./css/bootstrap.min.css" /&gt;

  &lt;!-- js --&gt;
  &lt;script&gt; src="./js/jQuery.min.js"&gt;&lt;/script&gt;
  &lt;script&gt; src="./js/bootstrap.min.js"&gt;&lt;/script&gt;
  &lt;script&gt; src="./js/index.js"&gt;&lt;/script&gt;</code></pre>
          </li>
        </ul>
        <p>流体容器</p>
        <pre><code class="language-html line-numbers">  // 流体布局 width： 100%
  &lt;div class="container-fluid"&gt;&lt;/div&gt;

  // 固定容器 width : 阈值 >=1200 ：1170px || >=992 : 970px || >=768 : 750px
  &lt;div class="container"&gt;&lt;/div&gt;
          </code></pre>
        <p>响应式显示影藏</p>
        <ul>
          <li>
            影藏 - 在特定的尺寸下会影藏
            <pre><code class="language-html line-numbers">  &lt;div class="hidden-xs"&gt;hidden-xs&lt;/div&gt;
  &lt;div class="hidden-sm"&gt;hidden-sm&lt;/div&gt;
  &lt;div class="hidden-md"&gt;hidden-md&lt;/div&gt;
  &lt;div class="hidden-lg"&gt;hidden-lg&lt;/div&gt;</code></pre>
          </li>
          <li>
            显示 - 在特定的尺寸下才会显示
            <pre><code class="language-html line-numbers">  &lt;div class="visible-xs"&gt;hidden-xs&lt;/div&gt;
  &lt;div class="visible-sm"&gt;hidden-sm&lt;/div&gt;
  &lt;div class="visible-md"&gt;hidden-md&lt;/div&gt;
  &lt;div class="visible-lg"&gt;hidden-lg&lt;/div&gt;</code></pre>
          </li>
        </ul>
        <p>基本模版</p>
        <pre><code class="language-html line-numbers">  &lt;!doctype html&gt;
  &lt;html lang="zh-CN"&gt;

  &lt;head&gt;
      &lt;meta charset="utf-8"&gt;
      &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
      &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
      &lt;!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ --&gt;
      &lt;title&gt;Bootstrap 101 Template&lt;/title&gt;

      &lt;!-- Bootstrap --&gt;
      &lt;link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
          integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous"&gt;
      &lt;!-- HTML5 shim 和 Respond.js 是为了让 IE8 支持 HTML5 元素和媒体查询（media queries）功能 --&gt;
      &lt;!-- 警告：通过 file:// 协议（就是直接将 html 页面拖拽到浏览器中）访问页面时 Respond.js 不起作用 --&gt;
      &lt;!--[if lt IE 9]&gt;
        &lt;script src="https://fastly.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"&gt;&lt;/script&gt;
        &lt;script src="https://fastly.jsdelivr.net/npm/respond.js@1.4.2/dest/respond.min.js"&gt;&lt;/script&gt;
      &lt;![endif]--&gt;
  &lt;/head&gt;
  &lt;body&gt;
      &lt;h1&gt;你好，世界！&lt;/h1&gt;

      &lt;!-- jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以必须放在前边) --&gt;
      &lt;script src="https://fastly.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"
          integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ" crossorigin="anonymous"&gt;
      &lt;/script&gt;
      &lt;!-- 加载 Bootstrap 的所有 JavaScript 插件。你也可以根据需要只加载单个插件。 --&gt;
      &lt;script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
          integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"&gt;
      &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt; </code></pre>
        <p>列偏移</p>
        <pre><code class="language-html line-numbers">  // col-md-offset-* ： *代表要偏移的份数，是往左偏移
  &lt;div class="col-lg-4 col-lg-offset-4"&gt;列偏移&lt;/div&gt;
          </code></pre>
        <p>列排序</p>
        <pre><code class="language-html line-numbers">  // 就是把左边的盒子位置替换到右边盒子的位置，实现位置交换的作用
  &lt;!-- 向右推 --&gt;
  &lt;div class="col-lg-4 col-lg-push-8"&gt;列偏移&lt;/div&gt;
  &lt;!-- 向左拉 --&gt;
  &lt;div class="col-lg-8 col-lg-pull-4"&gt;列偏移&lt;/div&gt;
          </code></pre>
        <p>列嵌套</p>
        <pre><code class="language-html line-numbers">  // row里面再套row
  &lt;div class="container"&gt;
      &lt;div class="row"&gt;
          &lt;div class="col-lg-4"&gt;
              &lt;div class="row"&gt;
                  &lt;div&gt; class="col-lg-4"&gt;&lt;/div&gt;
              &lt;/div&gt;
          &lt;/div&gt;
          &lt;div&gt; class="col-lg-4 col-lg-pull-1"&gt;列偏移&lt;/div&gt;
      &lt;/div&gt;
  &lt;/div&gt;

  &lt;!-- md使用的屏率最高，可以替代lg sm --&gt;
          </code></pre>
        <p>常用样式(排版)</p>
        <ul>
          <li>
            标题
            <ul>
              <li>
                对h1~h6的标题效果进行覆盖，提供劳务对应的类名，为非标题元素设置样式
              </li>
              <li>副标题 small标签 或 .small类名</li>
            </ul>
          </li>
          <li>段落</li>
          <li>
            强调: 定义了一套类名，强调类名，强调类都是通过颜色来表示强调
            <ul>
              <li>.text-muted：提示，使用浅灰色</li>
              <li>.text-primary：主要，使用蓝色</li>
              <li>.text-success：成功，使用浅绿色</li>
              <li>.text-info：通知信息，使用浅蓝色</li>
              <li>.text-warning：警告，使用黄色</li>
              <li>.text-danger：危险，使用褐色</li>
            </ul>
          </li>
          <li>
            对齐: 通过定义四个类名来控制文本的对齐风格
            <ul>
              <li>.text-left：左对齐</li>
              <li>.text-center：居中对齐</li>
              <li>.text-right：右对齐</li>
              <li>.text-justify：两端对齐</li>
            </ul>
          </li>
        </ul>
        <p>设置布局容器</p>
        <pre><code class="language-css line-numbers">  @media screen and(max-width:767px) {.container { width: 100%;}}
  @media screen and(min-width:768px) {.container { width: 750px;}}
  @media screen and(min-width:992px) {.container { width: 970px;}}
  @media screen and(min-width:1200px) {.container { width: 1170px;}}

  /* 注意，bootstrap设置了左右15边距，可以用padding 或 margin 相反负值 或 0消除 */</code></pre>
        <p>栅格系统</p>
        <ul>
          <li>
            栅格系统，页面划分12列 xs-extra small sm-small md-medium lg-large
          </li>
          <li>小于12 会留空白，大于12会自动换行</li>
          <li>列嵌套，盒子里套盒子，也会划分12等份</li>
          <li>
            原理是采用百分比%，浮动float来实现一行显示，如果想要间距，使用margin的话，宽度不够盒子会掉下来
            <ul>
              <li>解决办法：外层盒子给padding，内层再多一个盒子100%</li>
              <li>
                如果要用列嵌套，最好多加一个列row，这样可以取消padding，而且高度会和父级一样
              </li>
            </ul>
          </li>
          <li>
            当设计稿与container的1200px不一样的时候，可以修改container宽度来解决
          </li>
          <li>字体图标居中用 element : before{ vertical-align: middle;}</li>
        </ul>
      </el-card>
    </template>
  </card-container>
</template>

<script setup lang="ts" name="Frame">
import { ref } from "vue";

const data = ref([
  { id: 1, h2: "Responsive" },
  { id: 2, h2: "Bootstrap使用" },
]);
</script>

<style scoped lang="scss"></style>
