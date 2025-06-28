<template>
  <card-container :data="data">
    <template #svg>
      <svg
        t="1737876832933"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="9565"
        width="48"
        height="48"
      >
        <path
          d="M677.51 832.176c38.208-26.807 68.586-56.069 90.437-86.758 35.718-50.166 47.645-98.505 47.645-156.851V336.314v-97.658c-6.678 0.222-13.534 0.33-20.912 0.33-83.331 0-153.093-16.431-208.98-42.941-19.755-9.371-36.85-19.594-51.336-30.089-9.671-7.007-16.867-13.153-21.619-17.845-5.658 4.577-13.201 11.109-23.48 18.559-15.546 11.269-34.026 22.144-55.513 31.949-59.748 27.265-134.82 42.913-225.03 40.036v349.913c0 58.346 11.926 106.685 47.645 156.851 21.85 30.688 52.229 59.951 90.436 86.758 43.929 30.821 99.587 59.373 165.353 84.612 65.755-25.234 121.42-53.788 165.354-84.612v-0.001zM592.777 85.337c9.637 6.983 21.483 14.067 35.589 20.758 42.842 20.322 98.09 33.335 166.313 33.335 6.713 0 12.804-0.102 18.763-0.315l101.705-3.457v452.909c0 77.323-16.775 145.317-66.101 214.595-28.738 40.361-67.262 77.47-114.356 110.512-51.148 35.886-114.101 68.163-187.181 96.183l-35.354 13.579-35.337-13.573c-73.097-28.026-136.048-60.303-187.194-96.188-47.094-33.041-85.619-70.152-114.356-110.512C125.942 733.886 109.167 665.892 109.167 588.569V135.662l101.655 3.454c75.118 2.537 135.355-9.964 181.601-31.067 15.336-6.998 28.113-14.517 38.413-21.983 5.179-3.754 8.469-6.531 9.871-7.857L512.22 0.657l71.07 77.178c1.564 1.435 4.727 4.055 9.487 7.504v-0.002zM354.784 298.708h46.876v81.01h47.787v45.966H401.66v27.307c20.935 20.935 42.325 44.146 64.171 69.632l-26.852 40.505c-14.108-22.756-26.396-41.87-37.319-57.344v212.992h-46.876V520.803c-12.743 33.678-27.762 65.536-45.056 94.663l-20.48-51.883c29.582-40.505 51.428-86.471 65.081-137.899h-50.062v-45.966h50.517v-81.01z m134.713 207.076l43.236 9.557c-14.108 63.716-34.133 118.329-60.53 164.75l-41.415-26.396c27.762-46.421 47.332-95.573 58.709-147.911z m179.314-4.096c17.294 50.972 32.768 105.586 45.511 163.84l-43.691 19.57c-13.653-63.716-28.217-119.694-44.146-168.846l42.325-14.564h0.001zM558.674 713.77h-45.966l-10.012-44.146c14.108 1.82 27.307 2.731 40.05 2.731 10.468 0 15.929-6.372 15.929-18.204V474.837H453.089v-45.511h259.413v45.511H606.006v191.147c0 31.858-15.929 47.787-47.332 47.787v-0.001z m-81.92-393.671v45.056h212.082v-45.056H476.754z"
          fill="#1296db"
          p-id="9566"
        />
      </svg>
      <h1>Standard</h1>
    </template>
    <template #describe>
      <p>
        代码规范的主要目的包括提高代码的可读性、增强代码的可维护性，以及提升团队协作效率。通过遵循代码规范，开发者可以编写出更加清晰、易于理解和维护的代码，从而降低后期维护工作的难度。
      </p>
    </template>
    <template #content>
      <el-card id="part1" shadow="hover">
        <h2>规范</h2>
        <p>命名</p>
        <ul>
          <li>引文件统一使用index.htm index.html index.asp文件名</li>
        </ul>
        <p>标签</p>
        <ul>
          <li>&lt;header&gt;：头部标签</li>
          <li>&lt;nav&gt;：导航标签</li>
          <li>&lt;article&gt;：内容标签</li>
          <li>&lt;section&gt;：定义文档某个区域</li>
          <li>&lt;aside&gt;：侧边栏标签</li>
          <li>&lt;footer&gt;：尾部标签</li>
        </ul>
        <p>Class类名</p>
        <table>
          <tbody>
            <tr>
              <th>类名</th>
              <th>描述</th>
              <th>类名</th>
              <th>描述</th>
            </tr>
            <tr>
              <td>aboutUs</td>
              <td>关于我们</td>
              <td>feedback</td>
              <td>信息反馈</td>
            </tr>
            <tr>
              <td>product</td>
              <td>产 品</td>
              <td>banner</td>
              <td>顶部的广告、装饰图案等长方形的图片取名</td>
            </tr>
            <tr>
              <td>logo</td>
              <td>标志性的图片取名为</td>
              <td>button</td>
              <td>在页面上位置不固定并且带有链接的小图片我们取名为</td>
            </tr>
            <tr>
              <td>menu</td>
              <td>链接栏目的图片我们取名</td>
              <td>pic</td>
              <td>装饰用的照片我们取名</td>
            </tr>
            <tr>
              <td>header</td>
              <td>头</td>
              <td>content/container</td>
              <td>内容</td>
            </tr>
            <tr>
              <td>footer</td>
              <td>尾</td>
              <td>nav</td>
              <td>导航</td>
            </tr>
            <tr>
              <td>sidebar</td>
              <td>侧栏</td>
              <td>column</td>
              <td>栏目</td>
            </tr>
            <tr>
              <td>wrapper</td>
              <td>页面外围控制整体布局宽度</td>
              <td>left right center</td>
              <td>左右中</td>
            </tr>
            <tr>
              <td>loginBar</td>
              <td>登录条</td>
              <td>logo</td>
              <td>标志</td>
            </tr>
            <tr>
              <td>banner</td>
              <td>广告</td>
              <td>main</td>
              <td>页面主体</td>
            </tr>
            <tr>
              <td>hot</td>
              <td>热点</td>
              <td>news</td>
              <td>新闻</td>
            </tr>
            <tr>
              <td>download</td>
              <td>下载</td>
              <td>subnav</td>
              <td>子导航</td>
            </tr>
            <tr>
              <td>menu</td>
              <td>菜单</td>
              <td>submenu</td>
              <td>子菜单</td>
            </tr>
            <tr>
              <td>search</td>
              <td>搜索</td>
              <td>friendLink</td>
              <td>友情链接</td>
            </tr>
            <tr>
              <td>footer</td>
              <td>页脚</td>
              <td>copyright</td>
              <td>版权</td>
            </tr>
            <tr>
              <td>scroll</td>
              <td>滚动</td>
              <td>content</td>
              <td>内容</td>
            </tr>
            <tr>
              <td>tab</td>
              <td>标签页</td>
              <td>list</td>
              <td>文章列表</td>
            </tr>
            <tr>
              <td>msg</td>
              <td>提示信息</td>
              <td>tips</td>
              <td>小技巧</td>
            </tr>
            <tr>
              <td>title</td>
              <td>栏目标题</td>
              <td>joinUs</td>
              <td>加入</td>
            </tr>
            <tr>
              <td>guild</td>
              <td>指南</td>
              <td>service</td>
              <td>服务</td>
            </tr>
            <tr>
              <td>register</td>
              <td>注册</td>
              <td>status</td>
              <td>状态</td>
            </tr>
            <tr>
              <td>vote</td>
              <td>投票</td>
              <td>partner</td>
              <td>合作伙伴</td>
            </tr>
          </tbody>
        </table>
        <p>_Root 文件</p>
        <ul>
          <li>cn 存放中文HTML文件</li>
          <li>en 存放英文HTML文件</li>
          <li>flash 存放Flash文件</li>
          <li>images 存放图片文件</li>
          <li>imageStudio 存放PSD源文件</li>
          <li>flashStudio 存放flash源文件</li>
          <li>inc 存放include文件</li>
          <li>library 存放DW库文件</li>
          <li>media 存放多媒体文件</li>
          <li>project 存放工程项目资料</li>
          <li>temp 存放客户原始资料</li>
          <li>js 存放Javascript脚本</li>
          <li>css 存放CSS文件</li>
        </ul>
        <p>书写规范</p>
        <pre><code class="language-html line-numbers">  1. 公司版权注释  &lt;!--- The site is designed by EHM,Inc 07/2005 ---&gt;

  &lt;!-- 网页制作细节: head区代码规范 --&gt;
  1. head区是指HTML代码的&lt;head&gt;和&lt;/head&gt;之间的内容。必须加入的标签
  2. 网页显示字符集
     简体中文：      &lt;meta http-equiv="content-type" content="text/html; charset=gb2312"&gt;
     繁体中文：      &lt;meta http-equiv="content-type" content="text/html; charset=utf-8"&gt;
     英   语：       &lt;meta http-equiv="content-type" content="text/html; charset=utf-8"&gt;
  3. 网页制作者信息   &lt;meta name="author" content="webmaster@maketown.com"&gt;
  4. 网站简介        &lt;meta NAME="DEscriptION" content="xxx"&gt;
  5. 搜索关键字      &lt;meta NAME="keywords" content="xxxx,xxxx,xxx,xxxxx,xxxx,"&gt;
  6. 网页的css规范   &lt;link href="../css/style.css" rel="stylesheet" type="text/css"&gt;
  7. 网页标题        &lt;title&gt;xxx&lt;/title&gt;

  &lt;!-- 可以选择加入的标签  --&gt;
  1. 设定网页的到期时间。一旦网页过期，必须到服务器上重新调阅。
      &lt;meta http-equiv="expires" content="Wed, 26 Feb 1997 08：21：57 GMT"&gt;
  2. 禁止浏览器从本地机的缓存中调阅页面内容。
      &lt;meta http-equiv="Pragma" content="no-cache"&gt;
  3. 用来防止别人在框架里调用你的页面。
      &lt;meta http-equiv="window-target" content="_top"&gt;
  4. 自动跳转。5指时间停留5秒
      &lt;meta http-equiv="Refresh" content="5;URL=http：//www.yahoo.com"&gt;
  5. 网页搜索机器人向导。用来告诉搜索机器人哪些页面需要索引，哪些页面不需要索引。 content的参数有all,none,index,noindex,follow,nofollow。默认是all。
      &lt;meta NAME="robots" content="none"&gt;
  6. 收藏夹图标
      &lt;link rel = "Shortcut Icon" href="favicon.ico"&gt;
  7. 所有的javascript的调用尽量采取外部调用.
      &lt;script&gt; language="Javascript" SRC="script/xxxxx.js"&gt;&lt;/script&gt;

  &lt;!-- 网页制作细节:  1px表格(style="border-collapse: collapse")   --&gt;
  1. 实例如下：
      &lt;table border="1" cellspacing="0" width="32" height="32" style="border-collapse: collapse" bordercolor="#000000" cellpadding="0"&gt;
          &lt;tr&gt; &lt;td&gt;&lt;/td&gt;&lt;/tr&gt;
      &lt;/table&gt;
  2. 设置亮、暗边框颜色:表格有亮边框（bordercolorlight）和暗边框（bordercolordark）两个属性可以对表格样式设置。
      &lt;table border="1" width="500" bordercolorlight="#000000" bordercolordark="#FFFFFF"&gt;
  3. 在写 &lt;table&gt; 互相嵌套时，严格按照的规范，对于单独的一个&lt;table&gt;来说，&lt;table&gt;&lt;tr&gt;对齐，&lt;td&gt; 缩进两个半角空格，
      &lt;td&gt; 中如果还有嵌套的表格，&lt;table&gt;也缩进两个半角空格，如果&lt;td&gt;中没有任何嵌套的表格，&lt;/td&gt; 结束标记应该与 &lt;td&gt; 处于同一行，不要换行，
  4. 如我们注意在源代码中不应有这样的代码：
      &lt;td&gt;&lt;img src=”../images/sample.gif”&gt;
      &lt;/td&gt;
      而应该是这样的 (这是因为浏览器认为换行相当于一个半角空格，以上不规范的写法相当于无意中增加一个半角空格):
      &lt;td&gt;&lt;img src=”../images/sample.gif”&gt;&lt;/td&gt;
      如果确实有必要增加一个半角空格，也应该这样写：
      &lt;td&gt;&lt;img src=”../images/sample.gif”&gt; &lt;/td&gt;
  5. 一个网页要尽量避免用整个一张大表格，所有的内容都嵌套在这个大表格之内，因为浏览器在解释页面的元素时，是以表格为单位逐一显示，
      如果一张网页是嵌套在一个大表格之内，那么很可能造成的后果就是，当浏览者敲入网址，他要先面对一片空白很长时间，然后所有的网页
      内容同时出现。如果必须这样做，请使用 &lt;tbody&gt;标记，以便能够使这个大表格分块显示</code></pre>
        <p>Body标签</p>
        <ul>
          <li>
            &lt;body&gt;标签:
            &lt;body&gt;标签不属于head区，这里强调一下，为了保证浏览器的兼容性，必须设置页面背景&lt;body
            bgcolor="#FFFFFF"&gt;
            <ul>
              <li>
                在设定字体样式时对于文字字号样式和行间距应必须使用CSS样式表。禁止在页面中出现
                &lt;font size=?&gt; 标记。
              </li>
              <li>
                在网页中中文应首选使用宋体。英文和数字首选使用verdana 和arial
                两种字体。
              </li>
              <li>
                一般使用中文宋体的9pt 和11pt 或12px 和14.7px
                这是经过优化的字号，黑体字或者宋体字加粗时，一般选用11pt
                和14.7px 的字号比较合适。
              </li>
              <li>
                为了最大程度的发挥浏览器自动排版的功能，在一段完整的文字中请尽量不要使用&lt;br&gt;
                来人工干预分段。
              </li>
              <li>
                行距建议用百分比来定义，常用的两个行距的值是line-height:120%/150%.
              </li>
              <li>
                网站中的链接路径全部采用相对路径，一般链接到某一目录下的缺省文件的链接路径不必写全名如我们不必这样：&lt;a
                href=”aboutus/index.htm”&gt; 而应该这样：&lt;a
                href=”aboutus/”&gt;，所有内页指向首页的链接写成&lt;a
                href=”/”&gt;
              </li>
              <li>
                在浏览器里，当我们点击空链接时，它会自动将当前页面重置到首端，从而影响用户正常的阅读内容
                我们用代码 "javascript:void(null)" 代替原来的 "#" 标记
              </li>
            </ul>
          </li>
        </ul>
        <p>下载速度</p>
        <ul>
          <li>
            网页制作细节: 下载速度
            <ul>
              <li>
                首页Flash 网页大小应限定在 200K
                以下，尽可能的使用矢量图形和Action来减小动画大小
              </li>
              <li>
                非首页静态页面含图片大小应限定在 70K
                左右，尽可能的使用背景颜色替换大块同色图片。
              </li>
            </ul>
          </li>
        </ul>
        <p>include处理</p>
        <ul>
          <li>
            网页制作细节: include
            <ul>
              <li>
                asp标准写法 &lt;!-- #include file="inc/index_top.asp" --&gt;
              </li>
              <li>
                jsp 标准写法 &lt;%@ include file="../inc/index_top..jsp" %&gt;
              </li>
            </ul>
          </li>
        </ul>
        <p>banner处理</p>
        <ul>
          <li>
            图片处理细节: banner
            <ul>
              <li>
                全尺寸banner为468X60px，半尺寸banner为234X60px，小banner为88X31px。
              </li>
              <li>
                另外120X90，120X60也是小图标的标准尺寸。全尺寸banner不超过14K。
              </li>
            </ul>
          </li>
        </ul>
        <p>logo处理</p>
        <ul>
          <li>
            图片处理细节: LOGO的国际标准规范
            <ul>
              <li>
                为了便于INTERNET上信息的传播，一个统一的国际标准是需要的。实际上已经有了这样的一整套标准。其中关于网站的LOGO，目前有三种规格：
                <ul>
                  <li>88*31 这是互联网上最普遍的LOGO规格。</li>
                  <li>120*60 这种规格用于一般大小的LOGO。</li>
                  <li>120*90 这种规格用于大型LOGO。</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p>js规范</p>
        <ul>
          <li>
            书写过程中, 每行代码结束必须有分号;
            原则上所有功能均根据XXX项目需求原生开发, 以避免网上down下来的代码
            造成的代码污染(沉冗代码 || 与现有代码冲突 || ...);
          </li>
          <li>
            库引入: 原则上仅引入jQuery库, 若需引入第三方库,
            须与团队其他人员讨论决定;
          </li>
          <li>
            变量命名: 驼峰式命名. 原生Javascript变量要求是纯英文字母,
            首字母须小写, 如iTaoLun; jQuery变量要求首字符为'_',
            其他与原生Javascript 规则相同, 如: _iTaoLun; 另, 要求变量集中声明,
            避免全局变量.
          </li>
          <li>类命名: 首字母大写, 驼峰式命名. 如 ITaoLun;</li>
          <li>函数命名: 首字母小写驼峰式命名. 如iTaoLun();</li>
          <li>命名语义化, 尽可能利用英文单词或其缩写;</li>
          <li>
            尽量避免使用存在兼容性及消耗资源的方法或属性, 比如eval() &
            innerText;
          </li>
          <li>
            后期优化中, Javascript非注释类中文字符须转换成unicode编码使用,
            以避免编码错误时乱码显示;
          </li>
          <li>代码结构明了, 加适量注释. 提高函数重用率;</li>
          <li>注重与html分离, 减小reflow, 注重性能.</li>
        </ul>
        <p>图片规范</p>
        <ul>
          <li>
            所有页面元素类图片均放入img文件夹, 测试用图片放于img/demoimg文件夹;
          </li>
          <li>图片格式仅限于gif || png || jpg;</li>
          <li>
            命名全部用小写英文字母 || 数字 || _ 的组合，其中不得包含汉字 || 空格
            || 特殊字符；尽量用易懂的词汇, 便于团队其他成员理解; 另,
            命名分头尾两部分, 用下划线隔开, 比如ad_left01.gif || btn_submit.gif;
          </li>
          <li>
            在保证视觉效果的情况下选择最小的图片格式与图片质量, 以减少加载时间;
          </li>
          <li>尽量避免使用半透明的png图片(若使用, 请参考css规范相关说明);</li>
          <li>
            运用css sprite技术集中小的背景图或图标, 减小页面http请求, 但注意,
            请务必在对应的sprite psd源图中划参考线, 并保存至img目录下.
          </li>
        </ul>
      </el-card>
    </template>
  </card-container>
</template>

<script setup lang="ts" name="Standard">
import { ref } from "vue";

const data = ref([{ id: 1, h2: "规范" }]);
</script>

<style scoped lang="scss"></style>
