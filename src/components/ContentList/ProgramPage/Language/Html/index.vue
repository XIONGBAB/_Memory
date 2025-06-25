<template>
  <card-container :data="data">
    <template #svg>
      <svg
        width="48"
        height="48"
        t="1699148091125"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3528"
      >
        <path
          d="M116.7 63.8l71.9 806.9 322.8 89.6 323.7-89.8 72.1-806.7H116.7z m634 263.9H372l9 101.3h360.7l-27.2 303.8-203 56.3-202.7-56.3-13.9-155.4h99.4l7.1 79 110.2 29.7 0.3-0.1L622 656.3 633.5 528h-343l-26.7-299.2h495.7l-8.8 98.9z"
          fill="#E44D26"
          p-id="3529"
        />
      </svg>
      <h1>Html</h1>
    </template>
    <template #describe>
      <p>
        HTML（HyperText Markup
        Language）全称为超文本标记语言，是一种用于创建和组织网页结构及内容的描述性标记语言。HTML不是一种编程语言，它使用标签来描述网页中的元素，如文本、图片、链接、表格等，并定义这些元素的显示方式。
      </p>
    </template>
    <template #content>
      <el-card id="part1" shadow="hover">
        <h2>制作项目步骤</h2>
        <p>一、创建好对应的文件夹</p>
        <ul>
          <li>主页 index.html</li>
          <li>样式 css</li>
          <li>文件 js</li>
          <li>图片 images</li>
          <li>视频 videos</li>
          <li>插件 libs</li>
        </ul>
        <p>二、引入相关js css libs(库文件)</p>
        <ul>
          <li>书写规范代码，初始化css， load加载js</li>
          <li>二倍图使用Fireworks制作精灵图，Ps插件Cutterman panel切图</li>
          <li>规划好布局思路，然后再书写代码</li>
        </ul>
        <p>
          兼容性网站查询：
          <el-link
            type="primary"
            icon="Link"
            target="_blank"
            href="https://developer.mozilla.org/zh-CN/"
          >
            https://developer.mozilla.org/zh-CN/
          </el-link>
        </p>
      </el-card>
      <el-card id="part2" shadow="hover">
        <h2>WEB服务器</h2>
        <p>什么是web服务器?</p>
        <ol>
          <li>
            服务器（我们也会称之为主机）是提供计算服务的设备，它也是一台计算机。在网络环境下，根据服务器提供的服务类型不同，服务器又分为文件服务器、数据库服务器、应用程序服务器、Web服务器等。
          </li>
          <li>
            Web服务器一般指网站服务器，是指驻留于因特网上某种类型计算机的程序，可以向浏览器等Web客户端提供文档，也可以放置网站文件，
            让全世界浏览；可以放置数据文件，让全世界下载。
          </li>
          <li>
            以下服务器我们主要指的是Web服务器。根据服务器在网络中所在的位置不同，又可分为
            本地服务器 和 远程服务器 。
          </li>
          <li>
            本地服务器
            主要在局域网中访问，如果想要在互联网中访问，可以把品优购网站上传到为远程服务器
          </li>
          <li>
            远程服务器。是通常是别的公司为我们提供的一台电脑（主机），我们只要把网站项目上传到这台电脑上，任何人都可以利用域名访问我们的网站了。
          </li>
          <li>
            将自己的网站上传到远程服务器。注意：一般稳定的服务器都是需要收费的。比如：阿里云这里给大家推荐一个免费的远程服务器（免费空间）
            <ul>
              <li>
                <el-link
                  type="primary"
                  icon="Link"
                  target="_blank"
                  href="https://free.3v.do/"
                >
                  https://free.3v.do/
                </el-link>
              </li>
              <li>去免费空间网站注册账号。百度搜索</li>
              <li>记录下主机名、用户名、密码、域名。</li>
              <li>利用CutFtp软件上传网站到远程服务器。</li>
              <li>
                在浏览器中输入域名，即可访问我们的品优购网站了。
                以上做法要认证要10元，Gitdub免费
              </li>
            </ul>
          </li>
          <li>
            全球有13个根（root）服务器，简写"." 。10台在美国，另外3台分别在英国
            瑞士 日本。DNS根域下面是顶级域，也由Internet
            域名注册授权机构管理。共有3种类型的顶级域。
            <ul>
              <li>
                组织域：
                <ul>
                  <li>
                    采用3个字符的代号，表示DNS域中所包含的组织的主要功能或活动。比如
                    <ul>
                      <li>com 为商业机构组织</li>
                      <li>edu 为教育机构组织</li>
                      <li>gov 为政府机构组织</li>
                      <li>mil 为军事机构组织</li>
                      <li>net 为网络机构组织</li>
                      <li>org 为非营利机构组织</li>
                      <li>int 为国际机构组织</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                地址域：
                <ul>
                  <li>
                    采用两个字符的国家或地区代号。如
                    <ul>
                      <li>cn 为中国</li>
                      <li>kr 为韩国</li>
                      <li>us 为美国</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                反向域：
                <ul>
                  <li>
                    这是个特殊域，名字为in-addr.arpa，用于将IP地址映射到名字（反向查询）
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            架构
            <ul>
              <li>B/S架构 browser server</li>
              <li>C/S 架构 client server</li>
            </ul>
          </li>
        </ol>
      </el-card>
      <el-card id="part3" shadow="hover">
        <h2>HTML</h2>
        <p>前言</p>
        <ul>
          <li>
            HTML指的是 超文本标记语言（Hyper Text Markup
            Language），它是用来描述网页的一种语言。
          </li>
          <li>
            国际通用浏览器：
            浏览器是网页显示运行的平台。常用浏览器有IE、火狐（Firefox）、谷歌（Chrome）、Safari和Opera等。称为五大浏览器。
          </li>
        </ul>
      </el-card>
      <el-card id="part4" shadow="hover">
        <h2>内核</h2>
        <p>
          浏览器内核（渲染引擎）：负责读取网页内容，整理讯息，计算网页的显示方式并显示页面。
        </p>
        <table>
          <tbody>
            <tr>
              <th>浏览器</th>
              <th>内核</th>
              <th>在用的浏览器</th>
            </tr>
            <tr>
              <td>IE</td>
              <td>Trident</td>
              <td>IE、猎豹安全、360极速浏览器、百度浏览器</td>
            </tr>
            <tr>
              <td>Firefox</td>
              <td>Gecko</td>
              <td>火狐浏览器内核</td>
            </tr>
            <tr>
              <td>Safari</td>
              <td>Webkit</td>
              <td>苹果浏览器内核</td>
            </tr>
            <tr>
              <td>chrome / opera</td>
              <td>Blink</td>
              <td>chrome/opera浏览器内核。Blink其实是WebKit的分支。</td>
            </tr>
          </tbody>
        </table>
      </el-card>
      <el-card id="part5" shadow="hover">
        <h2>Web标准的构成</h2>
        <p>前言</p>
        <ul>
          <li>
            主要包括 结构（Structure） 、表现（Presentation） 和
            行为（Behavior） 三个方面。
          </li>
          <li>结构用于对网页元素进行整理和分类，现阶段主要学的是HTML。</li>
          <li>
            表现用于设置网页元素的版式、颜色、大小等外观样式，主要指的是CSS
          </li>
          <li>
            行为是指网页模型的定义及交互的编写，现阶段主要学的是Javascript
          </li>
        </ul>
      </el-card>
      <el-card id="part6" shadow="hover">
        <h2>html的文档结构</h2>
        <p>结构</p>
        <pre><code class="language-html line-numbers">  &lt;!DOCTYPE html&gt;   &lt;!-- 声明文档类型,告诉浏览器我的当前页面是那个版本的html H5 --&gt;
  &lt;html lang="en"&gt;  &lt;!-- 告诉浏览器后面的代码是html代码 --&gt;
  &lt;html lang="zh"&gt;  &lt;!-- 告诉浏览器这是中文网站 这样就不会弹出需要翻译的窗口--&gt;
  &lt;head&gt;            &lt;!-- 告诉浏览器，这是网页的头部，包括了定义网页的一些内容的标签，如：标题、字符集等 --&gt;
                    &lt;!-- &lt;meta&gt; 标签就是定义网页字符集、描述、关键词等内容的。 --&gt;
      &lt;meta charset="UTF-8"&gt;  &lt;!-- 字符集-功能：告诉浏览器，如何翻译汉字。 utf-8 gb2312等--&gt;
      &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;             &lt;!-- 告诉浏览器如果是IE浏览器，用最高版本执行 --&gt;
      &lt;meta name="author" content=""&gt;                                   &lt;!-- 作者 --&gt;
      &lt;meta name="description" content=""&gt;                              &lt;!-- 简介，网页定义描述内容 --&gt;
      &lt;meta name="keywords" content=""&gt;                                 &lt;!-- 关键字 --&gt;
      &lt;meta http-equiv="pragma" content="no-cache"&gt;                     &lt;!-- 禁止浏览器从本地机的缓存中调阅页面内容 --&gt;
      &lt;meta http-equiv="window-target" content="_top"&gt;                  &lt;!-- 用来防止别人在框架里调用你的页面 --&gt;
      &lt;meta http-equiv="Refresh" content="5;URL=http://www.baidu.com"&gt;  &lt;!-- 自动跳转 5指5秒 url不写就是刷新--&gt;
      &lt;!-- 网页搜索机器人向导。用来告诉搜索机器人哪些页面需要索引，哪些页面不需要索引。
          CONTENT的参数有all,none,index,noindex,follow,nofollow。默认是all。 --&gt;
      &lt;meta name="robots" content="none"&gt;
      &lt;meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0"&gt;
      &lt;link rel="Shortcut Icon" href=""&gt;    &lt;!-- 收藏夹图标 --&gt;
      &lt;title&gt;&lt;/title&gt;                       &lt;!-- 网页标题，参考SEO优化 --&gt;
  &lt;/head&gt;
  &lt;body bgcolor="#fff"&gt;&lt;/body&gt;              &lt;!-- 网页的主体部分,网页中主要内容都要写到body里。 --&gt;
  &lt;/html&gt;</code></pre>
        <ul>
          <li>
            http-equiv：模拟http协议的文件头原信息，主要目的是服务器向客户端返回时，用什么格式显示。
          </li>
          <li>Content-type：内容类型。</li>
          <li>Content：详细内容类型介绍。</li>
          <li>Text/html：网页是text格式，html是文本中的小格式。</li>
          <li>Charset：字符集，主要控制汉字如何显示。</li>
          <li>Utf-8：多国语言编码，什么国家的语言都可以正常显示。</li>
        </ul>
      </el-card>
      <el-card id="part7" shadow="hover">
        <h2>常用标签</h2>
        <p>表格</p>
        <table>
          <tbody>
            <tr>
              <th>标签</th>
              <th>解释</th>
            </tr>
            <tr>
              <td>&lt;h1&gt;&lt;/h1&gt;</td>
              <td>1-6，1最大标题，是行内块元素</td>
            </tr>
            <tr>
              <td>&lt;p&gt;&lt;/p&gt;</td>
              <td>段落标签</td>
            </tr>
            <tr>
              <td>&lt;br /&gt;</td>
              <td>单标签 换行</td>
            </tr>
            <tr>
              <td>&lt;pre&gt;&lt;/pre&gt;</td>
              <td>保存代码样式</td>
            </tr>
            <tr>
              <td>&lt;strong&gt;&lt;/strong&gt;或者&lt;b&gt;&lt;/b&gt;</td>
              <td>加粗 更推荐使用&lt;strong&gt;标签加粗语义更强烈</td>
            </tr>
            <tr>
              <td>&lt;em&gt;&lt;/em&gt;或者&lt;i&gt;&lt;/i&gt;</td>
              <td>倾斜 更推荐使用&lt;em&gt;标签加租语义更强烈</td>
            </tr>
            <tr>
              <td>&lt;del&gt;&lt;/del&gt;或者&lt;s&gt;&lt;/s&gt;</td>
              <td>删除线 更推荐使用&lt;del&gt;标签加粗语义更强烈</td>
            </tr>
            <tr>
              <td>&lt;ins&gt;&lt;/ins&gt;或者&lt;u&gt;&lt;/u&gt;</td>
              <td>下划线更推荐使用&lt;ins&gt;标签加租语义更强烈</td>
            </tr>
            <tr>
              <td>&lt;sub&gt;&lt;/sub&gt;</td>
              <td>上标</td>
            </tr>
            <tr>
              <td>&lt;sup&gt;&lt;/sup&gt;</td>
              <td>下标</td>
            </tr>
            <tr>
              <td>&lt;div&gt;&lt;/div&gt;</td>
              <td>无语义盒子 一行只能放一个，css后可以浮动，块元素</td>
            </tr>
            <tr>
              <td>&lt;span&gt;&lt;/span&gt;</td>
              <td>无语义盒子 一行可以多放 用来布局 ， 行内元素</td>
            </tr>
            <tr>
              <td>&lt;!-- content --&gt;</td>
              <td>注释</td>
            </tr>
            <tr>
              <td>&amp;nbsp;</td>
              <td>空格，一个字符</td>
            </tr>
            <tr>
              <td>&lt;font&gt;&lt;/font&gt;</td>
              <td>文本的修饰 ，例：&lt;font&gt;文本&lt;/font&gt;</td>
            </tr>
            <tr>
              <td>&lt;blink&gt;&lt;/blink&gt;</td>
              <td>里面的文字会闪烁 ，被废弃</td>
            </tr>
            <tr>
              <td>UTF-8常用符号</td>
              <td>
                参考文档
                <el-link
                  type="primary"
                  icon="Link"
                  target="_blank"
                  href="https://www.runoob.com/charsets/ref-utf-punctuation.html"
                >
                  https://www.runoob.com/charsets/ref-utf-punctuation.html
                </el-link>
              </td>
            </tr>
          </tbody>
        </table>
      </el-card>
      <el-card id="part8" shadow="hover">
        <h2>img标签</h2>
        <p>样式用css控制，样式与结构分离，更好控制</p>
        <pre><code class="language-html line-numbers">  &lt;img src="./img/jpg|png|gif" alt="替换文本，当图像不存在" title="鼠标放上显示文字" width="" height="" border="边框"
  align="left|center|right 直接给图片是不起作用，需要块元素包裹，方法用于图文混排" hspace="左右边距 值为数字" vspace="上下边距 值为数字" &gt;</code></pre>
        <p>图片热点-功能：在图片中添加可以点击的链接</p>
        <pre><code class="language-html line-numbers">  &lt;img src="url路径" usemap="#图片名称"&gt;
  &lt;map name="图片名称"&gt;
      &lt;area shape="rect" coords="251,413,413,467" href="www.baidu.com" target="_blank"&gt;
      &lt;area shape="circle" coords="230,304,45" href="拖动到一个文件以创建链接"&gt;
      &lt;area shape="poly" coords="552,548,646,507,597,460,554,448,524,450,524,522" href="#"&gt;
      &lt;!-- &lt;area shape="热区形状" coords="热区坐标" href="链接的地址"&gt;
      如果shape="rect"时，那么，coords=x1，y1，x2，y2"   例如1：coords="50，50，200，150"
      如果shape="circle"时，那么，coords="x,y,r"   其中（x）为圆心半径，r为半径
      rect：矩形，坐标：左上角和右下角
      circle：圆形，坐标：中心点和半径
      poly：多边形，坐标：每两个数字为一个点
      href：跳转链接的地址
      target：打开新链接的方式 值：_blank（新窗口）、_self（原窗口--默认）、_parent（父窗口-框架）、_top（顶级窗口--框架）--&gt;
  &lt;/map&gt;</code></pre>
      </el-card>
      <el-card id="part9" shadow="hover">
        <h2>滚动标记</h2>
        <div class="ls-cot">
          <p>废弃，建议用css3动画来做</p>
          <pre><code class="language-html line-numbers">  &lt;marquee&gt;要滚动的元素&lt;/marquee&gt;
  &lt;!-- 常用的属性：
  direction：滚动方向 值：up、down、left、right
  width：滚动的宽度
  height：滚动的高度
  bgcolor：背景颜色
  scrollamount：滚动步长值，值越大，滚动越快
  scrolldelay：两步的停留时间，以毫秒为单位，1秒=1000毫秒
  loop：滚动次数--&gt;</code></pre>
        </div>
      </el-card>
      <el-card id="part10" shadow="hover">
        <h2>多媒体标记</h2>
        <p>代码</p>
        <pre><code class="language-html line-numbers">  &lt;embed src="./img/j.png|mp4|mp3|swf" width="712" height="429"&gt;&lt;/embed&gt;
  &lt;!-- 语法常用的属性：
  src：多媒体的地址                值：路径
  width：调整多媒体宽度            值：数字
  height：调整高度                值：数字 --&gt;</code></pre>
      </el-card>
      <el-card id="part11" shadow="hover">
        <h2>超链接标签与锚点链接</h2>
        <p>代码</p>
        <pre><code class="language-html line-numbers">  &lt;a href="#" target="_blank" alt="图片" this="img" name="锚点名称"&gt;&lt;/a&gt;
  &lt;a href="#锚点名称"&gt;返回顶部&lt;/a&gt;
  &lt;!-- 常用的属性：
      href：  链接的网址或ip或地址 值：就是具体的地址
      target：打开新链接方式值：_blank(新窗口)、_self(当前页面)、_parent(父窗口)、_top(顶级-框架)、content(跳转链接页面内容)
      alt:    当图片不加载的时候出现文字
      title： 鼠标放上会显示文字
      name：  锚点链接(当点击链接时进行的跳转--回到顶部)  值：锚点的名称--&gt;

  &lt;a href="文件名#锚点名称"&gt;。。。。。。&lt;/a&gt;
  &lt;!-- 文件名：可有可无，如果是同一个网页的不同部分跳转，不需要文件名,如果是跳到另一个网页的不同部分，这时必须要有文件名 --&gt;

  &lt;a href=#top2&gt;返回顶部&lt;/a&gt;                    &lt;!-- 例1：跳转到同一个网页的不同部分 --&gt;
  &lt;a href="news.html#bottom"&gt;返回底部&lt;/a&gt;       &lt;!-- 例2：跳转到news.html文件的底部 --&gt;
  &lt;a name="bottom"&gt;&lt;/a&gt;                        &lt;!-- 例3：在另一个文档添加跳转锚点标记 --&gt;

  //  锚点  --------------------------------------------------------------------
  &lt;a href="#" name="here"&gt;头部&lt;/a&gt;
  &lt;!-- 内容区域 --&gt;
  &lt;div&gt;&lt;a href="#here"&gt;点我回头部&lt;/a&gt;&lt;/div&gt;

  &lt;!-- 但是注意：以上方法 html5去掉了name，只有在a标签上才能使用name ,其他标签使用id作为标识 --&gt;
  &lt;div id="abc" name="abc"&gt;&lt;/div&gt; &lt;!-- 非a标签，使用name="锚点名称" 是不起作用的  --&gt;
  &lt;!-- 内容区域 --&gt;
  &lt;a href="#abc"&gt;返回&lt;/a&gt;</code></pre>
        <p>路径</p>
        <ul>
          <li>
            绝对路径：
            <ul>
              <li>
                有一个具体的地址（位置），某个盘某个文件夹某个文件
                如：d:/xx/xxxx/xxx.xx
              </li>
              <li>
                本地的绝对路径显示：
                file://D:/xx/lesson/PHP07/day02/code/01.超链接.html
              </li>
              <li>远程的绝对路径： http://www.baidu.com</li>
            </ul>
          </li>
          <li>相对路径：就是要访问的文件相对于当前的文件的位置</li>
          <li>
            注意事项：
            <ul>
              <li>
                当前文件与目标文件在同一个目录（文件夹）中，直接写文件名就可以了，建议写
                ./ (表示当前目录)
              </li>
              <li>
                目标文件所在的文件夹与当前文件同一个目录中，当前文件直接找到文件夹名下再找文件
                ./news/01.news.html
              </li>
              <li>
                目标文件在当前的文件的上级，最高3级，上级表示方式：../
                (表示当期那目录的上一级目录)
              </li>
            </ul>
          </li>
        </ul>
      </el-card>
      <el-card id="part12" shadow="hover">
        <h2>表格</h2>
        <p>代码</p>
        <pre><code class="language-html line-numbers">  &lt;table border="1"&gt;               &lt;!-- 表格标签 --&gt;
    &lt;caption&gt;&lt;/caption&gt;            &lt;!-- 表格标题&lt;caption&gt;标记是table的子标记，放在table开始标记之后 --&gt;
    &lt;thead&gt;                        &lt;!-- 表格头部 用来放标题之类的东西 --&gt;
        &lt;tr&gt;
            &lt;th&gt;Head&lt;/th&gt;          &lt;!-- th会居中 加粗 --&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tfoot&gt;                        &lt;!-- 表格尾部 不管写在哪里都会在表格最后一行 放表格脚注之类 --&gt;
        &lt;tr&gt;&lt;td&gt;Footer&lt;/td&gt;&lt;/tr&gt;   &lt;!-- th标题   tr行   td列--&gt;
    &lt;/tfoot&gt;
    &lt;tbody&gt;                        &lt;!-- 表格身体 放数据本体 --&gt;
        &lt;tr&gt;&lt;td&gt;Body&lt;/td&gt;&lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/table&gt;

  &lt;!--
  //  表格属性 学完css会用css样式来控制 html则用行内样式
  合并单元格方式：
    跨行合并：rowspan="合并单元格的个数"
    跨列合并：colspan="合并单元格的个数"
  Table标记的属性：
    border：表格边框                 值：数字
    align：表格在网页中的水平方向      值：left|center|right
    bordercolor：边框颜色            值：颜色
    width：表格宽度                  值：数字
    height：表格高度                 值：数字
    bgcolor：表格背景颜色             值：颜色
    background：背景图片             值：图片的地址
    cellpadding：内填充（边框到内容的距离）        值：数字
    cellspacing：间距（单元格到单元格之间的距离）   值：数字
  Tr的属性：
    align：行内的内容水平对齐          值：left|center|right
    valign：上下对齐方式              值：top|middle|bottom
    height：行的高度
    bgcolor：行的背景颜色
  Td的属性：
    align：单元格的水平对齐方式        值：left|center|right
    height：单元格的高度              值：数字，影响的整个行
    valign：垂直对齐方式              值：top|middle|bottom
    bgcolor：单元格背景颜色
    background：单元格的背景图片       值：图片的地址
    rowspan：跨行合并                 值：要合并的数量 注意把原来被合并的单元格删除
    colspan：跨列合并                 值：要合并的列数 注意把原来被合并的单元格删除
  --&gt;</code></pre>
      </el-card>
      <el-card id="part13" shadow="hover">
        <h2>普通框架(已废弃)</h2>
        <p>
          使用html框架网站：
          <el-link
            type="primary"
            icon="Link"
            target="_blank"
            href="https://www.runoob.com/w3cnote/16-best-free-responsive-html5-frameworks.html"
          >
            https://www.runoob.com/w3cnote/16-best-free-responsive-html5-frameworks.html
          </el-link>
        </p>
        <pre><code class="language-html line-numbers">  &lt;frameset&gt;  &lt;!-- 划分用的 --&gt;
    &lt;frame /&gt; &lt;!-- 显示用的 --&gt;
    &lt;frame /&gt;
    ..................
    &lt;noframe&gt;您的浏览器不支持框架，请炸了重买！&lt;/noframe&gt;
  &lt;/frameset&gt;

  &lt;!--
    注意：划分遵循先上下再左右。如果是框架结构的网页，不能有body，而且它的文档头是frameset的，而不是普通的
    划分窗口的嵌套，需要在那个位置上在次划分窗口，就把原来的frame换成一个新的frameset。
    目的：框架就是对当前页面进行分割，划分成每个小窗口，每个小窗口显示不同的页面
    作用：用于后台的制作，前台不再推荐使用，兼容性不好（浏览器显示效果不同）。
    框架技术：将一个浏览器窗口划分成若干个小窗口，每个小窗口显示一个独立的网页
    &lt;! DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd"&gt;
    &lt;html xmlns="http://www.w3. org/1999/xhtml"xml: lang="zh-cn"&gt;
    frameset的属性：
    rows：跨行划分 值：划分窗口的方式
    rows：10,* //上面是10，其他的都给下面了
    rows：10,20,* //上面10，中间20，其他给下面
    rows：10,*,20 //上面10，下面20，其他中间
    rows：20%,* //上面百分之20，其他下面
    cols：左右划分 值：划分窗口的方式
    cols：10,* //左边10，其他右边
    cols：20%,*,10 //左边百分之20，右边10，其他中间
    border：边框 值：数字
    bordercolor：边框颜色
    frame的属性：
    src：要显示页面的路径
    scorlling：取消滚动条 值：yes或no
    noresize:不能滑动 值：yes或no
    name：要把显示页面显示到那个窗口，给这个窗口起一个名称
    target：打开方式 值：_blank,_self,_top,_parent
  --&gt;</code></pre>
        <p>内嵌框架</p>
        <pre><code class="language-html line-numbers">  &lt;iframe loading="lazy" src="other.html" width="200" height="200"&gt;&lt;/iframe&gt;
  &lt;!--
  常用的属性：
      align：水平对齐方式           值：left|center|right
      给外层块元素使用align可以对iframe进行位置的移动
      Scrolling：滚动条            值：yes或no
      src：要显示到窗口的页面的路径
      width：窗口的宽度             值：数字
      height：窗口的高度            值：数字
      frameborder：框架边框         值：0或1，yes或no
  --&gt;

  &lt;iframe src="text.html" name="iframe_a"&gt;&lt;/iframe&gt;
  &lt;p&gt;&lt;a href="https://www.bilibili.com/" target="iframe_a"&gt;点我之后框架内容就会跳转到其他网页&lt;/a&gt;&lt;/p&gt;</code></pre>
      </el-card>
      <el-card id="part14" shadow="hover">
        <h2>列表</h2>
        <div class="ls-cot">
          <p>代码</p>
          <pre><code class="language-html line-numbers">  &lt;ul type="disc|square|circle"&gt;
    &lt;li&gt;无序列表1&lt;/li&gt;
  &lt;/ul&gt;

  &lt;ol type="i I 1 A a " start="5"&gt;
    &lt;li&gt;y有序列表1&lt;/li&gt;
  &lt;/ol&gt;

  &lt;dl&gt;
    &lt;dt&gt;自定义列表项目&lt;/dt&gt;
    &lt;dd&gt;自定义列表项目描述&lt;/dd&gt;
  &lt;/dl&gt;</code></pre>
        </div>
      </el-card>
      <el-card id="part15" shadow="hover">
        <h2>表单</h2>
        <p>代码</p>
        <pre><code class="language-html line-numbers">  &lt;form action="url服务器地址" method="get|post提交方式" name="表单域名称区多个表单域"&gt;
    文本框：    &lt;input type="text" name="名称" value="不写默认为空" id="" readonly autocomplete="off"&gt;
               &lt;!-- readonly表示只读，填写不了内容 autocomplete="off" 关闭自动补全 disabled 只读，禁用的意思autofocus 自动获取焦点--&gt;
    密码框：    &lt;input type="password" name="" id="" value="" &gt;
    单选按钮：  &lt;input type="radio" name="单选一组名称" id="" checked&gt; &lt;!-- 默认单选 checked="checked" --&gt;
    复选框：    &lt;input type="checkbox" name="多选一组名称" id="" value=""&gt;
    上传：      &lt;input type="file" name="" id=""&gt;                    &lt;!-- 上传必须在form属性中设置，而且必须是post方式--&gt;
    提交：      &lt;input type="submit" value="显示到按钮上名称" /&gt;
    图片提交：  &lt;input type="image" src="图片的地址" value="" /&gt;
    普通按钮：  &lt;input type="button" /&gt;                              &lt;!-- 没有任何意义的按钮，和js关联使用 --&gt;
    重置按钮：  &lt;input type="reset" name="值" value="名称" /&gt;
    隐藏域：    &lt;input type="hidden" name="值" value="值" /&gt;         &lt;!-- 在浏览器中看不到的传递数据表单 --&gt;
    多行文本域：&lt;textarea rows="行" cols="列" value="值" name="名称"&gt;&lt;/textarea&gt;
    &lt;style&gt;
        textarea { width: 500px;height: 100px;resize: none; /* 控制多行文本域不能拖动大小 */}
    &lt;/style&gt;

    &lt;select name="" id="" multiple size="2"&gt;                   &lt;!-- select 可以用multiple进行显示内容并多选 size显示行数 --&gt;
        &lt;option value=""&gt;下拉列表1&lt;/option&gt;                     &lt;!-- select中至少包含一对标签 --&gt;
        &lt;option value="" selected="selected"&gt;下拉列表2&lt;/option&gt; &lt;!-- 默认显示用selected --&gt;
        &lt;option value=""&gt;下拉列表2&lt;/option&gt;                     &lt;!-- 默认显示用selected --&gt;
        &lt;option value=""&gt;下拉列表2&lt;/option&gt;                     &lt;!-- 默认显示用selected --&gt;
        &lt;option value=""&gt;下拉列表2&lt;/option&gt;                     &lt;!-- 默认显示用selected --&gt;
    &lt;/select&gt;
  &lt;/form&gt;

  &lt;!--
    Form标记，是表单域的显示，需要用form标记把表单内容括起来，这个时候才可以提交
    原因是form的属性中有：提交方式(get和post)、提交地址(具体提交页面)、上传文件的设置(如果不设置无法上传)
    提交地址：action="具体提交地址"
    提交方式method 值： get 和 post （在网站中数据直接的传递，只有get和post方式）
    D:/xx/xxx.php?user_name=xx&pass_word=123456789
    &lt;a href="d:/xx/xxx.php?"&gt;你好 &lt;/a&gt;
    Get方式传递数据有表单和超链接,表单是用户自己添写的数据。超链接是管理员规定要传递的数据。
    get方式：数据以浏览器地址栏的方式（明文）提交到另一个页面中。
              要提交到的页面路径和名称?参数名称=值&参数名称=值&参数名称=值.......
    Post方式：数据隐藏方式传递，post现在是有表单传递
              数据传递的信息方式：有文本，有图片、视频等
    Enctype：指定表单的编码方式（解密方式），这个属性只能用在method=’post”方式中

  属性：
    name        由用户自定义定义        input元素的名称。
    value       由用户自定义规定        input元素的值。
    checked     checked              规定此input元素首次加载时应当被选中。
    maxlength   正整数                规定输入字段中的字符的最大长度。

    1、name 和value是每个表单元素都有的属性值，主要给后台人员使用
    2、name 表单元素的名字，要求单选按钮和复选框要有相同的name值
  --&gt;</code></pre>
        <p>label标签</p>
        <pre><code class="language-html line-numbers">  &lt;input type="radio" name="sex" value="男" id="nan"&gt;&lt;label for="nan"&gt; 男&lt;/label&gt;
  &lt;input type="radio" name="sex" value="女" id="nv"&gt;&lt;label for="nv"&gt;女 &lt;/label&gt;
  &lt;!--
      &lt;label&gt;标签为input元素定义标注（标签）。
      &lt;label&gt;标签用于绑定一个表单元素当点击&lt;label&gt;
      标签内的文本时，浏览器就会自动将焦点（光标转到或者选择对应的表单元素上，用来增加用户体验。
      注意：for不能一样，否则会只能点中第一个，后面的则选不中
  --&gt;</code></pre>
      </el-card>
      <el-card id="part16" shadow="hover">
        <h2>HTML5新增语义化标签</h2>
        <p>标签</p>
        <pre><code class="language-html line-numbers">  &lt;header&gt;            &lt;!-- 头部标签 --&gt;
  &lt;nav&gt;               &lt;!-- 导航标签 --&gt;
  &lt;article&gt;           &lt;!-- 内容标签 --&gt;
  &lt;section&gt;           &lt;!-- 定义文档某个区域 --&gt;
  &lt;aside&gt;             &lt;!-- 侧边栏标签 --&gt;
  &lt;footer&gt;            &lt;!-- 尾部标签 --&gt;</code></pre>
        <p>注意</p>
        <ul>
          <li>这种语义化标准主要是针对搜索引擎的</li>
          <li>这些新标签页面中可以使用多次</li>
          <li>在IE9中,需要把这些元素转换为块级元素</li>
          <li>其实,我们移动端更喜欢使用这些标签</li>
          <li>HTML5还增加了很多其他标签,我们后面再慢慢学</li>
        </ul>
      </el-card>
      <el-card id="part17" shadow="hover">
        <h2>HTML5新增多媒体标签</h2>
        <div class="ls-cot">
          <p>前言</p>
          <ul>
            <li>
              简介
              <ul>
                <li>
                  使用它们可以很方便的在页面中嵌入音频和视频,而不再去使用flash和其他浏览器插件
                </li>
                <li>
                  HTML5在不使用插件的情况下,也可以原生的支持音频格式文件的播放,当然,支持的格式是有限的。
                </li>
                <li>谷歌浏览器把音频和视频自动播放禁止了</li>
              </ul>
            </li>
            <li>
              音频标签
              <ul>
                <li>
                  语法: 当前元素支持三种音频格式( WAV Ogg MP3 (IE Safari
                  不支持Ogg , IE 不支持WAV))
                  <pre><code class="language-html line-numbers">  &lt;!-- 语法1： --&gt;
  &lt;audio&gt; src="./videos/v.mp3" controls="controls"&gt;&lt;/audio&gt;

  &lt;!-- 语法2： --&gt;
  &lt;audio controls="controls"&gt;
      &lt;source src="music.ogg" type="audio/ogg"&gt;
      &lt;source src="music.mp3" type="audio/mpeg"&gt;
      您的浏览器暂不支持&gt;audio&gt;&lt;标签   &lt;!-- 这段如果支撑是不会显示,不支持则会出现 --&gt;
  &lt;/audio&gt; </code></pre>
                </li>
                <li>
                  属性
                  <table>
                    <tbody>
                      <tr>
                        <th>属性</th>
                        <th>值</th>
                        <th>描述</th>
                      </tr>
                      <tr>
                        <td>autoplay</td>
                        <td>controls</td>
                        <td>如果出现该属性,则音频在就绪后马上播放</td>
                      </tr>
                      <tr>
                        <td>controls</td>
                        <td>controls</td>
                        <td>如果出现该属性,则向用户显示控件,比如播放按钮</td>
                      </tr>
                      <tr>
                        <td>loop</td>
                        <td>loop</td>
                        <td>如果出现该属性,音频结束时会重复播放</td>
                      </tr>
                      <tr>
                        <td>src</td>
                        <td>url</td>
                        <td>音频url地址</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
              </ul>
            </li>
            <li>
              视频标签
              <ul>
                <li>
                  语法: 当前元素支持三种视频格式（WebM Ogg MP4
                  (尽量使用mp4格式,其它考虑兼容性)）
                  <pre><code class="language-html line-numbers">  &lt;!-- 语法1： --&gt;
  &lt;video src="./videos/v.mp4" controls="controls"&gt;&lt;/video&gt;

  &lt;!-- 语法2： --&gt;
  &lt;video width="300" controls="controls"&gt;
      &lt;source src="move.ogg" type="video/ogg"&gt;
      &lt;source src="move.mp4" type="video/mp4"&gt;
      您的浏览器暂不支持&gt;video&gt;&lt;视频标签   &lt;!-- 这段如果支撑是不会显示,不支持则会出现 --&gt;
  &lt;/video&gt; </code></pre>
                </li>
                <li>
                  属性
                  <table>
                    <tbody>
                      <tr>
                        <th>属性</th>
                        <th>值</th>
                        <th>描述</th>
                      </tr>
                      <tr>
                        <td>autoplay</td>
                        <td>autoplay</td>
                        <td>
                          视频就绪自动播放(谷歌浏览器需要添加muted来解决自动播放问题)
                        </td>
                      </tr>
                      <tr>
                        <td>controls</td>
                        <td>controls</td>
                        <td>向用户显示播放控件</td>
                      </tr>
                      <tr>
                        <td>width</td>
                        <td>pixels(像素)</td>
                        <td>设置播放器宽度</td>
                      </tr>
                      <tr>
                        <td>height</td>
                        <td>pixels(像素)</td>
                        <td>设置播放器高度</td>
                      </tr>
                      <tr>
                        <td>loop</td>
                        <td>loop</td>
                        <td>播放完是否继续插放该视频,循环播放</td>
                      </tr>
                      <tr>
                        <td>preload</td>
                        <td>auto/none</td>
                        <td>
                          规定是否预加载视频(如果有了autoplay
                          就忽略该属性,none为不加载)
                        </td>
                      </tr>
                      <tr>
                        <td>src</td>
                        <td>url</td>
                        <td>视频url地址</td>
                      </tr>
                      <tr>
                        <td>poster</td>
                        <td>imgUrl</td>
                        <td>加载等待的画面图片</td>
                      </tr>
                      <tr>
                        <td>muted</td>
                        <td>muted</td>
                        <td>静音插放,部分浏览器需要加上此属性</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
              </ul>
            </li>
            <li>
              配合js
              <pre><code class="language-js line-numbers">  &lt;audio src="./sound/game_music.mp3" id="startMusic"&gt;&lt;/audio&gt;  // 路径
  &lt;audio src="./sound/bullet.mp3" id="bulletMusic"&gt;&lt;/audio&gt;     // 路径

  let startMusic = document.getElementById("startMusic");       // 获取音频元素
  let bulletMusic = document.getElementById("bulletMusic");     // 获取元素
  startMusic.play();                                            // 调用音频播放方法
  bulletMusic.play();                                           // 调用音频播放方法
  startMusic.pause();                                           // 调用音频暂停播放方法

  /* audio不仅是一个标签,也是window下的一个对象,作为对象,具有一些对象属性和对象方法：
  对象属性：
      currentTime：获取当前播放时间
      duration：获取歌曲的总时间
      pause：是否暂停,返回布尔值
  对象方法：
      play()：播放
      pause()：暂停
      load()：重新加载 */ </code></pre>
            </li>
          </ul>
        </div>
      </el-card>
      <el-card id="part18" shadow="hover">
        <h2>HTML5新增input类型</h2>
        <p>前言</p>
        <ul>
          <li>
            标签：我们验证的时候必须添加form表单域
            <pre><code class="language-html line-numbers">  &lt;li&gt;邮箱： &lt;input type="email"&gt;&lt;/li&gt;          &lt;!-- 限制用户输入必须为 Email 类型 --&gt;
  &lt;li&gt;网址：&lt;input type="url"&gt;&lt;/li&gt;             &lt;!-- 限制用户输入必须为 URL 类型 --&gt;
  &lt;li&gt;日期：&lt;input type="date"&gt;&lt;/li&gt;            &lt;!-- 限制用户输入必须为 日期 类型 --&gt;
  &lt;li&gt;月：&lt;input type="month"&gt;&lt;/li&gt;             &lt;!-- 限制用户输入必须为 月 类型 --&gt;
  &lt;li&gt;周：&lt;input type="week"&gt;&lt;/li&gt;              &lt;!-- 限制用户输入必须为 周 类型 --&gt;
  &lt;li&gt;时间：&lt;input type="time"&gt;&lt;/li&gt;            &lt;!-- 限制用户输入必须为 时间 类型 --&gt;
  &lt;li&gt;数量：&lt;input type="number"&gt;&lt;/li&gt;          &lt;!-- 限制用户输入必须为 数字 类型 --&gt;
  &lt;li&gt;手机号码：&lt;input type="tel"&gt;&lt;/li&gt;          &lt;!-- 手机号码 --&gt;
  &lt;li&gt;搜索：&lt;input type="search"&gt;&lt;/li&gt;          &lt;!-- 搜索框 --&gt;
  &lt;li&gt;颜色：&lt;input type="color"&gt;&lt;/li&gt;           &lt;!-- 生成颜色选择表单--&gt;
  &lt;li&gt;&lt;input type="submit" value="提交"&gt;&lt;/li&gt;   &lt;!-- 提交--&gt;  </code></pre>
          </li>
          <li>
            属性
            <table>
              <tbody>
                <tr>
                  <th>属性</th>
                  <th>值</th>
                  <th>描述</th>
                </tr>
                <tr>
                  <td>required</td>
                  <td>required</td>
                  <td>表单拥有该属性表示其内容不能为空,必填</td>
                </tr>
                <tr>
                  <td>placeholder</td>
                  <td>placeholder</td>
                  <td>表单的提示信息,存在默认值将不显示</td>
                </tr>
                <tr>
                  <td>autofocus</td>
                  <td>autofocus</td>
                  <td>自动聚焦属性,页面加载完成自动聚焦到指定表单</td>
                </tr>
                <tr>
                  <td>autocomplete</td>
                  <td>off/on</td>
                  <td>
                    当用户在字段开始键入时,浏览器基于之前键入过的值,应该显示出在字段中填写的选项。
                    默认已经打开,如autocomplete="on",关闭 autocomplete
                    ="off",需要放在表单内,同时加上name属性,同时成功提交
                  </td>
                </tr>
                <tr>
                  <td>multiple</td>
                  <td>multiple</td>
                  <td>可以多选文件提交</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            样式
            <pre><code class="language-css line-numbers">  input::placeholder{color: pink;}    /* 可以通过伪类修改提示信息的字体颜色 */
  outline: none;                      /* 去除鼠标点后的轮廓线 */ </code></pre>
          </li>
        </ul>
      </el-card>
      <el-card id="part19" shadow="hover">
        <h2>插件地址</h2>
        <p>链接</p>
        <ul>
          <li>
            swiper网站：
            <el-link
              type="primary"
              icon="Link"
              target="_blank"
              href="https://www.swiper.com.cn/"
            >
              https://www.swiper.com.cn/
            </el-link>
          </li>
          <li>
            lib-flexible.js：
            <el-link
              type="primary"
              icon="Link"
              target="_blank"
              href="https://github.com/amfe/lib-flexible"
            >
              https://github.com/amfe/lib-flexible
            </el-link>
          </li>
          <li>
            bootstrap：
            <el-link
              type="primary"
              icon="Link"
              target="_blank"
              href="https://bootstrap.css88.com/"
            >
              https://bootstrap.css88.com/
            </el-link>
          </li>
          <li>
            amazeui：
            <el-link
              type="primary"
              icon="Link"
              target="_blank"
              href="amazeui.shopxo.net"
            >
              amazeui.shopxo.net
            </el-link>
          </li>
        </ul>
      </el-card>
      <el-card id="part20" shadow="hover">
        <h2>小结</h2>
        <p>代码</p>
        <pre><code class="language-html line-numbers">  &lt;!--迭代
  网页的版本
      HTML4
      XHTML2.0
      HTML5

  文档声明（doctype）
          文档声明用来告诉浏览器当前网页的版本
          html5的文档声明
          &lt;！doctype html&gt;
          &lt;！Doctype HTML&gt;

  进制（计算机可以进行转换）:
      十进制（日常使用）
          - 特点：满10进1
          - 计数：0 1 2 3 4 5 6 7 8 9 10 11 12 13...19 20
          - 单位数字：10个（0-9）
      二进制（计算机底层的进制）
          - 特点：满2进1
          - 计数：011011100101110111
          - 单位数字：2个（0-1）
          - 扩展：
          - 所有数据在计算机底层都会以二进制的形式保存可以将内存想象为一个有多个小格子组成的容器，每一个小格子中可以存储一个1或一个0
            这一个小格子在内存中被称为1位（bit）
              8bit = 1byte（字节）
              1024byte = 1kb（千字节）
              1024kb = 1mb（兆字节）
              1024mb = 1gb(吉字节)
              1024gb = 1tb(特字节)
              1024tp = 1pb(拍字节)
      八进制（很少用）
          - 特点：满8进1
          - 计数：0 1 2 3 4 5 6 7 10 11 12...17 20
          - 单位数字：8个（0-7）
      十六进制（一般显示一个二进制数字时，都会转换为十六进制）
          - 特点：满16进1
          - 计数：0 1 2 3 4 5 6 7 8 9 a b c d e f 10 11 12...1a 1b 1c 1d 1e 1f 20..
          - 单位数字：16个（0-f）
      字符编码
          - 所有的数据在计算机中存储时都是以二进制形式存储的，文字也不例外。
          - 所以一段文字在存储到内存中时，都需要转换为二进制编码
          - 当我们读联这段文字时，计算机会将编码转换为字符，供我们阅读
          - 编码
            - 将字符转换为二进制码的过程称为编码
          - 解码
            - 将二进制码转换为字符的过程称为解码
          - 字符集
            - 编码和解码所采用的规则称为字符集
          - 常见字符集：
            - ASCII      美国
            - IS088591   欧洲
            - GB2312     国标
            - GBK        国标
            - UTF-8      万国（包含世界所有语言）
      实体（转义符）
          - &nbsp;  &gt;  &lt;  ......

  标签
      - &lt;!DOCTYPE html&gt; 声明文档
      - &lt;html&gt;     :root  根标签
      - &lt;head&gt;     头部
      - &lt;meta&gt;     charset   name  content
      - &lt;body&gt;     身体
      - &lt;h1&gt;       h4-h6 很少用
      - &lt;p&gt;        段落
      - &lt;hgroup&gt;   双标签，用来为标题分组。可以将一组相关的标题同事放入到hgroup里面
      - &lt;em&gt;       斜体
      - &lt;strong&gt;   加粗
      - &lt;blockquote&gt;   双标签  标示一个长引用，块元素
      - &lt;q&gt;        双标签，标示一个短引用
      - &lt;br&gt;       换行
      - &lt;hr&gt;       分行
  布局标签
      - &lt;header&gt;   头部
      - &lt;main&gt;     主体，一个页面只有一个
      - &lt;footer&gt;   底部
      - &lt;nav&gt;      导航
      - &lt;aside&gt;    侧边栏
      - &lt;article&gt;  文章
      - &lt;section&gt;  独立的区块
      - &lt;div&gt;      块元素
      - &lt;span&gt;     行内元素
  列表list
      - &lt;ul&gt;       无序列表
        &lt;li&gt;       列表
      - &lt;ol&gt;       有序列表
      - &lt;dl&gt;       定义列表
        &lt;dt&gt;       定义的内容
        &lt;dd&gt;       描述
  超链接
      - &lt;a&gt;        href   alt  target="_blank | _parent | _top"
  图片
      - &lt;img&gt;      src  title  alt
  内联框架
      - &lt;iframe&gt;   双标签  src  frameborder   很少用，SEO
  媒体标签
      - &lt;audio&gt;    双标器  src  controls  autoplay  loop
        &lt;source&gt;   这里填写 src路径，可避免支持的浏览器显示播放控件，不支持的显示audi标签下的文字，可指定多个
      - &lt;video&gt;
  --&gt;</code></pre>
      </el-card>
    </template>
  </card-container>
</template>

<script setup lang="ts" name="DataPage">
import { ref } from "vue";

const data = ref([
  {
    id: 1,
    h2: "制作项目步骤",
  },
  {
    id: 2,
    h2: "web服务器",
  },
  {
    id: 3,
    h2: "HTML",
  },
  {
    id: 4,
    h2: "内核",
  },
  {
    id: 5,
    h2: "Web标准的构成",
  },
  {
    id: 6,
    h2: "html的文档结构",
  },
  {
    id: 7,
    h2: "常用标签",
  },
  {
    id: 8,
    h2: "img标签",
  },
  {
    id: 9,
    h2: "滚动标记",
  },
  {
    id: 10,
    h2: "多媒体标记",
  },
  {
    id: 11,
    h2: "超链接标签与锚点链接",
  },
  {
    id: 12,
    h2: "表格",
  },
  {
    id: 13,
    h2: "普通框架(已废弃)",
  },
  {
    id: 14,
    h2: "列表",
  },
  {
    id: 15,
    h2: "表单",
  },
  {
    id: 16,
    h2: "HTML5新增语义化标签",
  },
  {
    id: 17,
    h2: "HTML5新增多媒体标签",
  },
  {
    id: 18,
    h2: "HTML5新增input类型",
  },
  {
    id: 19,
    h2: "插件地址",
  },
  {
    id: 20,
    h2: "小结",
  },
]);
</script>

<style scoped lang="scss"></style>
