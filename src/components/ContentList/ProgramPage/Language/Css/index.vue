<template>
  <card-container :data="data">
    <template #svg>
      <svg
        width="48"
        height="48"
        t="1699148624812"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="9115"
      >
        <path
          d="M512 512zM128.3 64.3l69.8 805.8 313.4 89.5L825.8 870l69.9-805.7H128.3z m580.9 669.3l-197.1 56.2-196.8-56.5L301.9 578h96.4l6.9 79.1 107.1 30.3 0.3 0.5h0.1l106.9-29.7L630.7 530H406.1l-8-99.9h241.1l8.8-101.9H280.2l-8-97.9H753l-43.8 503.3z"
          fill="#264DE4"
          p-id="9116"
        />
      </svg>
      <h1>Css</h1>
    </template>
    <template #describe>
      <p>
        CSS（Cascading Style
        Sheets，层叠样式表）是一种用于描述HTML或XML（包括XML的各种子集如SVG、MathML和XHTML）文档外观和样式的语言。CSS是一种标记语言，用于设置HTML结构的样式.通过CSS，可以控制网页的布局、字体、颜色、间距、边框、背景等视觉效果，使网页更加美观和用户友好。同时它将样式与HTML内容分离
      </p>
    </template>
    <template #content>
      <el-card id="part1" shadow="hover">
        <h2>基本样式</h2>
        <p>代码</p>
        <pre><code class="language-css line-numbers"> div{
      opacity:1;                       /* 透明度,0-1之间取值 */
      filter: alpha(opacity=50);       /* 兼容IE的透明度 */

    字体:
      font-style: normal;              /* normal(默认)、italic(倾斜) normal可以去掉标签的效果 */
      font-weight: normal;             /* normal(默认) 、bold(加粗)、lighter(细)/ 还可以写数字,但不要加单位 px */
      font-size: 10px;                 /* 像素(px)、em(倍数)、百分比(%) */
      font-family:serif;               /* serif衬线字体  sans-serif非衬线字体 monospace 等宽字体 */
      @font-face{                      /* 自定义 */
         font-family:'xxx';            /* 指定字体的名字 */
         src:url('./font/xxxx.ttf');   /* 写路径 */
      }
      font: font-style font-weight font-size/line-height font-family;
      /* 复合写法,不能更换顺序,属性空格隔开,不写可省略取默认值,但必须写 size和family属性 */

    文本:
      color: red;                    /* 字体颜色:可以写英文、16进制、RGB */
      text-align: center;              /* 只能水平对齐方式,必须在块元素中, Left|center|right */
      text-align-last: justify;        /* 多行时最后一行被调整为两端对齐,也就是居中了,单行的话,会两端对齐,相当于平铺 */
      word-break: break-all;           /* 适应英文或数字换行用 */
      text-decoration: none;           /* 取值范围: none(无)、underline(下划线)、overline(上划线)、x(删除线) */
      text-indent: 10em;               /* 首行缩进,数值 1em=1个文字大小 */
      list-style: none;                /* 去除无序列表前面的小圆点 */
      outline: none;                   /* input表单光标点后轮廓去除,可以设置的属性是(按顺序) 相关值参考菜鸟编程
                                          outline-color,outline-style,outline-width */
      letter-spacing:10px;             /* 字符间距 数值(px) */
      word-spacing:10px;               /* 单词间距 数值(px)  */
      direction:left;                  /* 文本方向 */
      text-transform:capitalize;       /* 控制元素中的每个首字母大写,none无变化 uppercase转大写 lowercase转小写 */
      white-space:nowrap;              /* 取消文本换行,设置元素中空白的处理方式 */
      user-select: none;               /* 文本不能选中 CSS3 */
      resize: none;                    /* 用于文本域textarea   防止拖拽文本域 */
      line-height: 10px;               /* 行间距 上间距+文字高度+下间距(上下间距一样大)=总行高 */
                                       /* 注意,css3 的盒子模型是把边框算进去的,所以行高不等于盒子高,要减去盒子边框 */
      line-height: 2;                  /* 可以写倍数,字体行高的两倍,可以写整数,也可以写小数5.3333 */
      -webkit-font-smoothing: antialiased; /* CSS3 抗锯齿形 让文字显示的更加清晰 */

    背景:
      background-color: transparent;             /* 背景颜色 transparent(透明)/other(其他颜色) */
      background-size: 500px 500px;                /* 大小 移动端内容 50%(盒子的一半) cover(铺满) contain(宽或高铺满) */
      background-image: url(images/img.png);       /* 背景图片 */
      background-repeat:no-repeat;                 /* 平铺方式 repeat(平铺)/(不平铺) /repeat-x | -y/;(x和Y轴平铺) */
      background-position:center;                  /* 背景图片定位 (x y坐标)  单词 center left 、像素px 、百分比% */
      background-attachment: scroll;               /* 背景固定 scroll(滚动) / fixed(固定); */
      background-clip:content-box;                 /* 背景裁切,置顶背景图像的绘画区域 内容区 border-box默认 padding-box内边距 */
      background-origin:;                          /* 背景图像的定位区域,偏移量,内容区 border-box默认 padding-box内边距*/
      background: rgba(0,0,0,0.3);               /* 半透明背景 前面是rgb颜色值(0-255),最后一位是透明值,取值是0-1 */
      background:hsl(hue, saturation, lightness)   /*  HSL值:H色相(0-360)  S饱和度(0%-100%)  L亮度(0%-100%) */
      background:hsla(hue, saturation, lightness, alpha)  /*  HSL值:H色相  S饱和度  L亮度  A透明度 */
      background:;                                 /* 背景颜色 背景图片地址 背景平铺 背景图像滚动 背景图片位置   复合写法 */

    居中定位:
      position: absolute ;                         /* 九宫格单词定位方式                                */
      left: 0;                                     /* left top        center top         right top    */
      top: 0;                                      /* left center     center center      right center */
      bottom: 0;                                   /* left bottom     center bottom      right bottom */
      right: 0;
      margin: auto;

    列表:
      list-style-image:url(./li01.jpg);            /* 列表图片 */
      list-style-position:Inside;                  /* 列表符号的位置,只对li用,Inside(内)、outside(外) */
      list-style: none url(./li01.jpg) inside;     /* 把三个属性的值都写到一个属性中 */
      /* 如果三个属性都没有,那就单个单个写,如果其中有一个没有,可以不写,如:none url
         常用属性none 去掉小圆点, disc  circle  square  decimal .... 其他样式可以查文档 */

    表格:
      border-collapse:collapse;                           /* 边框是否折叠 */
      border: 1px solid black;                          /* 设置边框 */
      text-align:right;                                   /* 文字对齐 */
      vertical-align: baseline | top | middle | bottom;   /* 对齐方式 */
      pointer-events:none;                                /* 禁止长按图片保存 */

    图片:
      vertical-align: top;                         /* 图片与文字垂直对齐方式 */
      filter: gray;                              /* 使用滤镜让图片全部变黑白照 */
      a:link img{filter: gray;}                  /* 可以做的小效果,默认的是灰白照 ,当鼠标放上的时候 是彩色 */
      a:hover img{filter: "";}

    鼠标:
      cursor: url(images/activity01-image.jpg);    /* 用值 或者 也可以使用url */
      cursor:pointer;                              /* default默认 auto默认 pointer手 ,move移动 可查文档*/

    边框:
      border-width: 1px;                           /* 边框粗细 */
      border-style: solid;                         /* 边框样式 solid(实线) dashed(虚线) dotted(点线) double(双线) */
      border-color: red;                         /* 边框颜色 */
      border: 1px solid red;                     /* 复合写法,没有顺序要求 */
      border-collapse: collapse;                   /* 控制相邻单元格的边框  collapse合并 */
      border-radius: 10px;                         /* 设置圆角 (盒子高 + 上下边框) / 2 */
      outline: none;                               /* 一般用于表单的蓝色边框线 */
      border-left-width: 1px;                      /* 左边框粗细,上下左右用-拼接 */

    轮廓:
      outline: none;                               /* input表单光标点后轮廓去除,可以设置的属性是(按顺序) 相关值参考菜鸟编程
                                                      不影响页面布局  outline-color,outline-style,outline-width     */
  }</code></pre>
      </el-card>
      <el-card id="part2" shadow="hover">
        <h2>技巧</h2>
        <p>代码</p>
        <pre><code class="language-css line-numbers">  A
      :root {                               /* :root 相当于 html 定义颜色变量 */
          --primary-color: #ff434f;
          --secondary-color: #e3e3e3;
      }
      .logo {color: var(--primary-color);   /* 使用颜色变量用 var()函数;  */}

  B
      initial                   /* 默认值 */
      inherit                   /* 继承 */
      unset                     /* 不设置的意思, 如果属性中有继承就inherit,如果不能继承就按initial */
      revert                    /* 未列入规范,所有不要使用  */
      cover                     /* 跟父容器一样大 进行宽高铺满,虽然是等比例放大,但是会裁剪掉超出部分 */
      contain                   /* 是会以宽度进行放大 */
      center/cover
      background: url(images2/background.png) no-repeat center/cover;  /* 从中间等比例放大 */

  C
      scroll-padding-top: 6rem; /* 网页滚轮滑动式上面预留几个像素的意思 */
      scroll-behavior: auto;    /* 兼容性不好,用于滚动条滚动效果,smooth 是缓动平稳的 */
      overflow-x: hidden;       /* 对于x轴超出部分影藏 考虑兼容性 */

  D
      /* ~ 与 + 的使用  */
      /* 1）需要更改的兄弟元素是当前元素的相邻元素,也就是说紧挨着当前元素。那么写法如下:
            注意hover后面一般都是控制子元素,hover更改同级(兄弟)元素属性:更改兄弟元素又分两种情况: */
            .item-1:hover+.item-2 {background-color: #50ff00;}
      /* 2）需要改变的兄弟元素不是当前元素的邻接元素,就是不紧挨着
            这种情况就需要改一下写法,用上面的 “+” 就行不通了,得用 “~”。写法如下: */
            .item-1:hover~.item-3>.item-3-child {background-color: #50ff00;}

  E
      background-clip: content-box;            /* 背景裁切 */
      z-index: 1                               /* 有时候使用  z-index 配合js 也可以做出层叠关系的动态样式  */

  F
      @import url(index.less);                 /* .index.css  => 文件下 可以使用ES6语法   @import */
      @import url(bootstrap.min.css);          /* 不要加路径 因为会参考当前的css路径 */
      @import url(index.less) screen;          /* 可以指定到设备使用样式  使用到屏幕设备 */
      @import url(bootstrap.min.css)  print;   /* 使用到打印机设备 */
      @import url(style.css) all;              /* 不写代表全局使用 */

      &lt;style&gt; &lt;/style&gt;                                              /* 不写代表所有设备 */
      &lt;style&gt; media="screen , print"&gt;&lt;/style&gt;                       /* 多个用,分割 */
      &lt;style&gt; media="screen and (orientation: landscape)"&gt;&lt;/style&gt;  /* 横屏下变换的样式 */

  E
      .div{                                    /* 英文字体的大小写可以用css控制 */
        font-variant: small-caps;              /* 小型大写 all-small-caps 所有字母小型大写 */
        font-variant: normal;                  /* 默认值 */
        font-variant: inherit;                 /* 继承 */
        text-transform:none | capitalize | uppercase | lowercase | inherit;
                                               /* 默认 | 大写字母开头 | 仅有大写 | 仅小写 | 继承*/
      }

  F
      .div{ white-space: pre;}                 /* 文字的空白处理,详细看菜鸟文档 */
      .div{ writing-mode: vertical-lr};        /* 从左到右 竖向排  排版模式 */

  G
      /* 定义变量css定义变量可分多种情况: */
      :root {--borderColor: #ccc;}           /* 1、定义全局变量 */
      .look{--borderColor: #ccc;}            /* 2、定义某元素下的变量 */
      @media screen and (min-width: 1025px) {  /* 3、定义媒体查询下的变量  */
          :root {--borderColor: #ccc;}
      }
      /* 使用:*/
      .has-border-table>tr>td {border-right: 1px solid var(--borderColor);}

  H
      html {font-size: (320px / @num);}        /* less 在做除法运算时,需要用()包裹,@num是less定义变量的写法 @num: 10;*/

  I
      div{
        box-sizing: border-box;                /* css3 盒子模型 */
        -webkit-box-sizing: border-box;
        -webkit-tap-highlight-color: transparent; /* 点击高亮我们需要清除  完全透明 */
        -webkit-appearance: none;              /* 在移动端浏览器默认的外观在ios上加上这个属性才能给按钮和输入框自定义样式 */
      }
      img,a{-webkit-touch-callout: none;}      /*禁用长按页面时的弹出菜单*/

  J
      /* margin负值运用
      每个盒子都有一个1px边框,当两个边框浮动重叠的时候就会出现2px边框,合理运用margin-left:-1px;
      让后面一个盒子向左移动1px的距离,重叠后就会覆盖前一个的1px

      1.让每个盒子margin往左侧移动-1px正好压住相邻盒子边框
      2.鼠标经过某个盒子的时候,提高当前盒子的层级即可(如果没有有定位,则加相对定位(保留位置),如果有定位,则加z-index)
      3.巧妙运用浮动元素不会压住文字的特性,可以让文字围绕  */

  K
      img{ pointer-events:none;}              /* 禁止长按出现保存图片 ,但是也会阻止点击链接 */

  L
      /* -moz-:代表firefox 浏览器私有属性 */
      /* -ms-:代表ie浏览器私有属性 */
      /* -webkit-:代表safari、chrome私有属性 */
      /* -o-:代表Opera私有属性  */

      -moz-border-radius:10px;                /* 私有前缀提倡写法: */
      -webkit-border-radius:10px;</code></pre>
      </el-card>
      <el-card id="part3" shadow="hover">
        <h2>Unicode编码字体</h2>
        <p>前言</p>
        <ul>
          <li>
            把中文字体的名称用相应的Unicode编码来代替,这样就可以有效的避免浏览器解释CSS代码时候出现乱码的问题
            <ul>
              <li>黑体 \9ED1\4F53</li>
              <li>宋体 \5B88\4F53</li>
              <li>微软雅黑 5FAE\8F6F\96C59ED1</li>
            </ul>
          </li>
          <li>Unicode编码需要用转义符 "\" 来转义</li>
        </ul>
      </el-card>
      <el-card id="part4" shadow="hover">
        <h2>浏览器中可以看到部分</h2>
        <p>前言</p>
        <ul>
          <li>
            HTML(结构):“超文本标记语言”,主要作用把内容(文字、图片、视频等)放入网页中
          </li>
          <li>
            CSS(样式):“层叠样式表”,主要作用给HTML进行样式的显示,如何的布局
          </li>
          <li>
            Javascript(行为):“浏览器的脚本语言”,主要作用给HTML加动态效果(特效)
          </li>
          <li>
            CSS特点:可以非常精准的定位,定位某个或某些标记,给这些标记加样式。HTML和CSS代码分离,减少后期工作量(单独写css文件)
          </li>
        </ul>
      </el-card>
      <el-card id="part5" shadow="hover">
        <h2>CSS引入方式</h2>
        <p>代码</p>
        <pre><code class="language-html line-numbers">  &lt;link rel="stylesheet" href="style.css"&gt;    &lt;!-- head标签里引入css文件 --&gt;
  @import url("other.css");                   &lt;!-- @import:可以在一个css文件中再次引入一个css文件 --&gt;
  &lt;div style="color: bisque">&lt;/div&gt;         &lt;!-- 行内样式, 把CSS样式当成HTML的一个属性来写 --&gt;
  &lt;style&gt; &lt;/style&gt;                            &lt;!-- style标签内写入样式,style可以插入到任意位置,规范是写在head标签里  --&gt;</code></pre>
      </el-card>
      <el-card id="part6" shadow="hover">
        <h2>选择器</h2>
        <div class="ls-cot">
          <p>代码</p>
          <pre><code class="language-css line-numbers">  .div{color: red!important;} /* 无穷大 不推荐使用 */
  style=""                      /* 行内样式 权重   1000 */
  #id{}                         /* ID选择器 权重   100 */
  .div{}                        /* 类选择器 权重    10 */
  p{}                           /* 标签选择器 权重   1 */
  *{}                           /* 通配符选择器 权重  0 */
                                /* 注意:类选择器、属性选择器、伪类选择器,权重为10 */

  div ul{}                      /* 后代选择器 */
  div>p{}                       /* 子选择器 选择所有父级是div元素的p元素  */
  div~div{}                     /* 兄弟选择器,兄弟选择器,只会选择兄元素之后的标签,之前的无效 */
  div+div{}                     /* 紧挨选择器,紧挨选择器,只会选择兄元素之后紧挨的标签,之前的无效 */
  a,p,i{}                       /* 并集选择器 */

  div[title]                    /* 属性选择器,两个条件,一个是div,必须有title,选择所有带有title属性的div元素 */
  div[title="c"]                /* 属性选择器 选择具有title属性名。且属性值等于c的div元素 */
  div[target=-blank]            /* 属性选择器 选择所有使用target="-blank"的元素 */
  div[title~=flower]            /* 属性选择器 选择标题属性包含单词"flower"的所有元素 */
  div[lang=en]                  /* 属性选择器 选择 lang 属性等于en,[lang|=en]或者以 en 为开头的所有元素 */
  div[title^="zz.zz"]           /* 属性选择器 代表以指定的第一个单词开头的元素 */
  div[title$="zz"]              /* 属性选择器 代表以第一个单词的结尾 */
  div[title*="zz"]              /* 属性选择器 代表值在元素中任意位置出现都可以 */

  a:link{}                      /* 选择所有未访问链接 */
  a:visited{}                   /* 选择所有访问过的链接 ,只能改颜色,其他因为隐私不允许修改,不建议修改*/
  a:active{}                    /* 选择活动链接,鼠标点击状态 */
  a:hover{}                     /* 选择鼠标在链接上面时,鼠标移入时 */
  p:first-letter{}              /* 选择每一个&lt;p&gt;元素的第一个字母 */
  p:first-line{}                /* 选择每一个&lt;p&gt;元素的第一行 */
  ::selection                   /* 匹配元素中被用户选中或处于高亮状态的部分 */
  p:first-child{}               /* 指定只有当&lt;p&gt;元素是其父级的第一个子级的样式。也就是理解成指定子元素的为第一个元素 */
  p:last-child                  /* 选择每个&lt;p&gt;元素是其父级的最后一个子级。 */
  p:before{}                    /* 在每个&lt;p&gt;元素之前插入内容 */
  p:after{}                     /* 在每个&lt;p&gt;元素之后插入内容 */
  p:lang(it){}                  /* 选择一个lang属性的起始值="it"的所有&lt;p&gt;元素 */
  p~ul{}                        /* 选择p元素之后的每一个ul元素 */
  a[src^="https"]               /* 选择每一个src属性的值以"https"开头的元素 */
  a[src$=".pdf"]                /* 选择每一个src属性的值以".pdf"结尾的元素 */
  a[src*="run"]                 /* 选择每一个src属性的值包含子字符串"run"的元素 */
  p:first-of-type               /* 选择每个p元素是其父级的第一个p元素,同类型排序 */
  p:last-of-type                /* 选择每个p元素是其父级的最后一个p元素 */
  p:only-of-type                /* 选择每个p元素是其父级的唯一p元素 */
  p:only-child                  /* 选择每个p元素是其父级的唯一子元素 */
  p:nth-child(n)                /* 选择每个p元素是其父级的第二个子元素,理解为,一群p标签中,选中第n个p 可填数字,数字几就是第几*/
  p:nth-last-child(2)           /* 选择每个p元素的是其父级的第二个子元素,从最后一个子项计数  n  2n  2n+1 n-5* odd even */
  p:nth-of-type(2)              /* 选择每个p元素是其父级的第二个p元素 */
  p:nth-last-of-type(2)         /* 选择每个p元素的是其父级的第二个p元素,从最后一个子项计数 */
  p:empty                       /* 选择每个没有任何子级的p元素(包括文本节点) */
  input:enabled                 /* 选择每一个已启用的输入元素 */
  input:disabled                /* 选择每一个禁用的输入元素 */
  input:checked                 /* 选择每个选中的输入元素 */
  input:checked+label           /* 对有checked表单元素紧挨着的label标签控制样式 */
  input:focus                   /* 焦点就是光标,一般表单元素才能获取 */
  input:required                /* 必填表单的样式控制 */
  input:valid{}                 /* 验证有效的时候的样式 */
  input:invalid{}               /* 验证无效的时候的样式 */
  :not(p)                       /* 选择每个并非p元素的元素   :not{}排除选择器 */
  :out-of-range                 /* 匹配值在指定区间之外的input元素 */
  :in-range                     /* 匹配值在指定区间之内的input元素 */
  :read-write                   /* 用于匹配可读及可写的元素 */
  :read-only                    /* 用于匹配设置 "readonly"(只读) 属性的元素 */
  :optional                     /* 用于匹配可选的输入元素 */
  :required                     /* 用于匹配设置了 "required" 属性的元素 */
  :valid                        /* 用于匹配输入值为合法的元素 */
  :invalid                      /* 用于匹配输入值为非法的元素 */
  :root                         /* 选择文档的根元素 */
  :target                       /* 对到达的目标伪类选择器 */
  :empty{display: none}         /* 空元素选择器 相对于使用的少,一般在没有内容的元素上 让其影藏 */
  :nth-child(-n+3) :not(:nth-child(2)){} /* 可以接着用,然后排除不要的元素,可以连着写多个 */
  p::first-letter{}             /* 对文本操作,每个段落第一个字的控制 */
  p::first-line{}               /* 每个段落第一行的控制 */
  div>input[type="text"]+span:after{}

  /* nth-child 与 nth-of-type的区别: nth-child 是在父亲元素下进行遍历
    例子:这样的情况下都不会选择,因为nth-child 会从第一个标签开始计算,显然,div:nth-child(1)是选择不到的,条件不满足
    &lt;style&gt;
        section div:nth-of-type(1) { color: yellow;}     这种情况下才会指定元素的盒子排序
        section div:nth-child(1) { color: red;}          这种情况不会选择到div元素的第一个,指定了div也不会
    &lt;/style&gt;
    &lt;section&gt;
        &lt;p&gt;不同标签&lt;/p&gt;
        &lt;div&gt;同标签1&lt;/div&gt;
        &lt;div&gt;同标签2&lt;/div&gt;
    &lt;section&gt;
  */</code></pre>
        </div>
      </el-card>
      <el-card id="part7" shadow="hover">
        <h2>文字代替</h2>
        <p>代码</p>
        <pre><code class="language-html line-numbers">  &lt;!-- 当图片加载不了时可以用文字代替 --&gt;
  &lt;head&gt;
  &lt;style&gt;
      a {
        display: inline-block;text-decoration: none;color: #424242;width: 190px;
        height: 90px;border: 1px solid black;background-image: url(./images/logo.jpg);
        background-size: 190px 90px;text-indent: 200px;white-space: nowrap; overflow: hidden;
      }
  &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt; &lt;a&gt; href="http://www.taobao.com" target="_blank"&gt;淘宝网&lt;/a&gt;&lt;/body&gt;

  &lt;style&gt; /* 淘宝写法 */
      a {
        display: inline-block;text-decoration: none;color: #424242; width: 190px;
        height: 0px;padding-top: 90px;overflow: hidden;border: 1px solid black;
        background-image: url(./images/logo.jpg);background-size: 190px 90px;
        /* text-indent:200px;white-space: nowrap;overflow: hidden; */
      }
  &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt; &lt;a&gt; href="http://www.taobao.com" target="_blank"&gt;淘宝网&lt;/a&gt; &lt;/body&gt;</code></pre>
      </el-card>
      <el-card id="part8" shadow="hover">
        <h2>行元素、块元素、转换</h2>
        <p>
          常见的块元素有&lt;h1&gt;~&lt;h6&gt;、&lt;p&gt;、&lt;div&gt;、&lt;ul&gt;、&lt;ol&gt;、&lt;li&gt;等,其中&lt;div&gt;标签是最典型的块元素。
        </p>
        <ul>
          <li>
            块级元素的特点:
            <ul>
              <li>比较霸道,自己独占一行。</li>
              <li>高度,宽度、外边距以及内边距都可以控制。</li>
              <li>宽度默认是容器(父级宽度)的100%</li>
              <li>是一个容器及盒子,里面可以放行内或者块级元素。</li>
            </ul>
          </li>
          <li>
            注意：
            <ul>
              <li>文字类的元素内不能使用块级元素</li>
              <li>
                &lt;p&gt;标签主要用于存放文字,因此&lt;p&gt;里面不能放块级元素,特别是不能放&lt;div&gt;
              </li>
              <li>
                同理,&lt;h1&gt;~&lt;h6&gt;等都是文字类块级标签,里面也不能放其他块级元素
              </li>
            </ul>
          </li>
        </ul>
        <p>
          常见的行内元素有&lt;a&gt;、&lt;strong&gt;、&lt;b&gt;、&lt;em&gt;、&lt;i&gt;、&lt;del&gt;、&lt;s&gt;、&lt;ins&gt;、&lt;u&gt;、&lt;span&gt;等,行内元素也称为联元素
        </p>
        <ul>
          <li>
            行内元素的特点:
            <ul>
              <li>相邻行内元素在一行上,一行可以显示多个。</li>
              <li>高、宽直接设置是无效的。 必须转换</li>
              <li>默认宽度就是它本身内容的宽度。</li>
              <li>行内元素只能容纳文本或其他行内元素。</li>
            </ul>
          </li>
        </ul>
        <p>
          在行内元素中有几个特殊的标签—&lt;img/&gt;、&lt;input/&gt;、&lt;td&gt;,它们同时具有块元素和行内元素的特点,称为行内块元素
        </p>
        <ul>
          <li>
            行内块元素的特点:
            <ul>
              <li>
                相邻行内元素(行内块)在一行上,但是他们之间会有空白缝隙,一行可以显示多个(行内元素特点)。
              </li>
              <li>默认宽度就是它本身内容的宽度(行内元素特点)。</li>
              <li>高度,行高、外边距以及内边距都可以控制(块级元素特点)。</li>
            </ul>
          </li>
        </ul>
        <p>转换:</p>
        <ul>
          <li>转换为块元素: display: block;</li>
          <li>转换为行内元素: display: inline;</li>
          <li>转换为行内块: display: inline-block;</li>
        </ul>
      </el-card>
      <el-card id="part9" shadow="hover">
        <h2>层级</h2>
        <p>前言</p>
        <ul>
          <li>
            CSS有三个非常重要的三个特性:层叠性、继承性、优先级。(相当于覆盖)
          </li>
          <li>
            层叠性：相同选择器给设置相同的样式,此时一个样式就会覆盖另一个冲突的样式。层叠性主要解决样式冲突的问题
            <ul>
              <li>
                层叠性原则：
                <ul>
                  <li>
                    样式冲突,遵循的原则是就近原则,哪个样式离结构近,就执行哪个样式
                  </li>
                  <li>样式不冲突,不会层叠</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            继承性：CSS中的继承,子标签会继承父标签的某些样式,如文本颜色和字号。简单的理解就是:子承父业。
            <ul>
              <li>恰当地使用继承可以简化代码,降低CSS样式的复杂性</li>
              <li>
                子元素可以继承父元素的样式(text-,font-,line-这些元素开头的可以继承,以及color属性),
              </li>
            </ul>
          </li>
          <li>
            行高的继承：
            <ul>
              <li>body{font:12px/1.5 Microsoft YaHei;}</li>
              <li>行高可以跟单位也可以不跟单位</li>
              <li>
                如果子元素没有设置行高，则会继承父元素的行高为1.5，此时子元素的行高是:当前子元素的文字大小*1.5
              </li>
              <li>
                body行高1.5这样写法最大的优势就是里面子元素可以根据自己文字大小自动调整行高
              </li>
            </ul>
          </li>
          <li>
            优先级：
            <pre class="pre">
0,0,0,0           * 继承的权重为null *号权重为0
0,0,0,1           元素选择器
0,0,1,0           类选择器,伪类选择器
0,1,0,0           ID选择器
1,0,0,0           行内样式 style=""
!important        重要的 无穷大</pre
            >
          </li>
        </ul>
      </el-card>
      <el-card id="part10" shadow="hover">
        <h2>盒子模型</h2>
        <p>代码</p>
        <pre><code class="language-css line-numbers">  /* 内边距 padding 外边距 margin */
  border-width: 1px;           /* 边框粗细 */
  border-style: solid;         /* 边框样式 solid(实线) dashed(虚线) dotted(点线) */
  border-color: red;         /* 边框颜色 */
  border: 1px solid red;     /* 复合写法 */
  border-collapse: collapse;   /* 控制相邻单元格的边框  collapse合并 */

  /* padding 属性用于设置内边距，即边框与内容之间的距离。及简写方式*/
  padding-top: ;               /* 上 */   /* 5px;              代表上下左右都有内边框 */
  padding-right: ;             /* 右 */   /* 5px 6px;          代表上下5px   左右5px */
  padding-bottom: ;            /* 下 */   /* 5px 6px 7px;      代表上5px     左右6px    下7px */
  padding-left:;               /* 左 */   /* 1px 2px 3px 4px;  代表上1px     右2px      下3px   左4px */

  /* 当我们给盒子指定padding值之后:
      1、内容和边框有了距离,添加了内边距。
      2、padding会影响了盒子实际大小。
      3、如果盒子已经有了宽度和高度,此时再指定内边框,会撑大盒子
      4、css3 会有一个 box-sizing:border-box; 属性可以让盒子不改变大小   */

  /* margin 属性用于设置外边距,即控制盒子与盒子之间的距离 */
  margin-top: ;                /* 上 */
  margin-right: ;              /* 右 */
  margin-bottom: ;             /* 下 */
  margin-left:;                /* 左 */
  /* 如果要块级元素居中,必须要给块级设置宽度,然后 margin: 0 auto ;   垂直居中
     注意:以上方法是让块级元素水平居中,行内元素或者行内块元素水平居中给其父元素添加 text-align: center;即可。 */

  /* Margin 塌陷解决方案(BFC,是CSS中一个隐含的属性,也称块级格式化)  可开启BFC:
     1、float                  可以为父元素定义上边框。
     2、display                可以为父元素定义上内边距。
     3、overflow:hidden(推荐)  可以为父元素添加overflow: hidden; */

  /* 网页元素很多都带有默认的内外边距,而且不同浏览器默认的也不一致。因此我们在布局前,首先要清除下网页元素的内外边距。*/
  padding: 0;                  /* 清除内边距 */
  margin: 0;                   /* 清除外边距 */

  /* 注意:行内元素为了照顾兼容性,尽量只设置左右内外边距,不要设置上下内外边距。
     但是转换为块级和行内块元素就可以了 为了满足等式,只有width  margin-left  margin-right  可以设置 auto
  公式(必须满足其元素内容区的宽度):
  margin-left+border-left+padding-left+width+padding-right+border-right+margin-right = 其元素内容区的宽度 */</code></pre>
      </el-card>
      <el-card id="part11" shadow="hover">
        <h2>清除浮动</h2>
        <p>代码</p>
        <pre><code class="language-css line-numbers">  float: left|right;            /* 左浮动 右浮动 */
  clear: left|right|both;       /* 清除浮动 一般用both */

  /* :after 伪元素法,给父级添加clearfix这个类名 */
    .clearfix:after{ content:"";display: block;height: 0;clear: both;visibility: hidden;}
    .clearfix {*zoom: 1;}       /* *zoom是兼容低版本浏览器 */

  /* 双伪元素法 */
    .clearfix::before, .clearfix::after {content: "";display: table;}.clearfix::after {clear: both;}
    .clearfix {*zoom: 1;}       /* *zoom是兼容低版本浏览器 */

  /* 总结
    1.额外标签法也称为隔墙法,是W3C推荐的做法。(用伪元素来做),必须用在块元素身上,行内元素不起作用
    2.父级添加overflow属性  hidden(推荐)、auto或scroll
    3.父级添加after伪元素
    4.父级添加双伪元素 */

  /* 技巧
    1.做浮动的时候 一行必须排四个,但是浮动了只排下三个,那么必须排四个的情况下,可以把父盒子改大一点,前提不影响美观
      然后超出部分可以用 overflow: hidden; 影藏
    2.浮动元素和文本的关系
      文本是不会钻入到浮动元素下面的。
    3.浮动和标准流的父盒子搭配。
      先用标准流的父元素排列上下位置,之后内部子元素采取浮动排列左右位置
    4.一个元素浮动了,理论上其余的兄弟元素也要浮动。
      一个盒子里面有多个子盒子,如果其中一个盒子浮动了,那么其他兄弟也应该浮动,以防止引起问题。
      浮动的盒子只会影响浮动盒子后面的标准流,不会影响前面的标准流
    5.双伪元素记得是display: table  table是表格的意思,一行显示,如果值是block,是上下显示,不要混淆了 */</code></pre>
      </el-card>
      <el-card id="part12" shadow="hover">
        <h2>定位</h2>
        <p>代码</p>
        <pre><code class="language-css line-numbers">  /* 定位模式决定元素的定位方式,它通过CSS的position属性来设置,其值可以分为四个: */
  position: static;            /* 静态定位 标准文档流,元素的top  bottom  left  right 不会受影响 */
  position: relative;          /* 相对定位元素的定位是相对其正常位置 移动后 位置保留 */
  position: absolute;          /* 绝对定位,子绝父相,就近原则,父元素有相对定位,位置就取决于父亲,没有就到顶级html */
  position: fixed;             /* 元素的位置对于浏览器窗口是固定的,及时窗口滚动,元素也不会动 */
  position: sticky;            /* 粘性定位 可以做页面滚动效果 top值 IE/Edge 15 及更早 IE 版本不支持  */
  position: -webkit-sticky;    /* 相当于 fixed 和 relative 的结合 参数依然是 上下左右设置

  static                       不脱标         不能偏移
  relative                     不脱标、占位    相对一自身偏移
  absolute                     脱标、不占位    相对于带定位的父级
  fixed                        脱标、不占位    浏览器可视区
  sticky                       不脱标、占位    浏览器可视区   有兼容性问题,用js实现即可 */

  /* 边偏移: top:1px;   bottom:2px;   left:3px;    right:4px; */

  /* 注意:
      1. 绝对定位是元素在移动位置的时候,是相对于它祖先元素来说的(拼爹型)。子绝父相
      2. 固定定位
         * 以浏览器的可视窗口为参照点移动元素。它以屏幕为准
         * 跟父元素没有任何关系
         * 不随滚动条滚动。
         * 固定定位不在占有原先的位置 */

  .search-wrap {
      position: fixed;
      width: 100%;
      min-width: 320px;       /* 移动端要给一个最大宽度 和最小宽度,记得宽度不要忘记添加  */
      max-width: 640px;
      height: 44px;
      overflow: hidden;
  }

  /* 在移动端,让固定定位的盒子居中对齐用以下代码 */
  .div {position: fixed;top: 0;}            /* 默认的话就是在中间 */
  /* 保险做法: 先走屏幕的一半,然后自身移动一半   先写兼容老版本的 */
  .div {position: fixed;top: 0;left: 50%;   /* 先走屏幕的一半 */
       -webkit-transform: translateX(-50%); /* 先写兼容老版本的 */
       transform: translateX(-50%);         /* 然后再移动自身的负50% */
  }
  /* 让绝对定位的盒子居中
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -盒子自身的宽一半px;
    margin-top: -盒子自身的高一半px;  */

  /* 固定定位小技巧:固定在版心右侧位置。小算法:
    1.让固定定位的盒子left:50%.走到浏览器可视区(也可以看做版心)的一半位置。
    2.让固定定位的盒子margin-left:版心宽度的一半距离。
    3.多走版心宽度的一半位置就可以让固定定位的盒子贴着版心右侧对齐了。 */

  /* 粘性定位的特点:
    1.以浏览器的可视窗口为参照点移动元素(固定定位特点)
    2.粘性定位占有原先的位置(相对定位特点)
    3.必须添加top、left、right、bottom其中一个才有效 */</code></pre>
        <p>层级</p>
        <ul>
          <li>z-index: 999;</li>
          <li>
            在使用定位布局时,可能会出现盒子重叠的情况。此时,可以使用z-index来控制盒子的前后次序(z轴)
            <ul>
              <li>
                数值可以是正整数、负整数或0,默认是auto,数值越大,盒子越靠上
              </li>
              <li>如果属性值相同,则按照书写顺序,后来居上</li>
              <li>数字后面不能加单位</li>
              <li>只有定位的盒子才有z-index属性</li>
            </ul>
          </li>
        </ul>
        <p>总结</p>
        <ul>
          <li>
            标准流:
            可以让盒子上下排列或者左右排列,垂直的块级盒子显示就用标准流布局。
          </li>
          <li>
            浮动:
            可以让多个块级元素一行显示或者左右对齐盒子,多个块级盒子水平显示就用浮动布局。
          </li>
          <li>
            定位:
            定位最大的特点是有层叠的概念,就是可以让多个盒子前后叠压来显示。如果元素自由在某个盒子内移动就用定位布局。
          </li>
        </ul>
      </el-card>
      <el-card id="part13" shadow="hover">
        <h2>元素的显示与隐藏</h2>
        <p>代码</p>
        <pre><code class="language-css line-numbers">  display: none | block;                        /* 影藏元素后,不再占有原来的位置 */
  visibility: visible | hidden;                 /* 影藏元素后,继续占有原来的位置 */
  overflow: hidden | visible | scroll | auto ;  /* 参数:影藏 | 溢出不剪切也不添加滚动条 | 不管超不超出都显示滚动条 | 自动 */

  /* 切记不要在body上加overflow:hidden;这样加上,如果内容超出屏幕会直接裁切掉,导致不出现滑动条 */</code></pre>
      </el-card>
      <el-card id="part14" shadow="hover">
        <h2>精灵图</h2>
        <div class="ls-cot">
          <p>前言</p>
          <ul>
            <li>
              使用精灵图核心总结
              <ul>
                <li>精灵图主要针对于小的背景图片使用。</li>
                <li>
                  主要借助于背景位置来实现 background-position: -5px -6px 。 //
                  background-position-y: ; background-position-x :;
                </li>
                <li>
                  一般情况下精灵图都是负值。(千万注意网页中的坐标:x轴右边走是正值,左边走是负值,y轴同理。)
                </li>
              </ul>
            </li>
            <li>
              使用方法:
              软件用FW精确测量精灵图的坐标,精灵图坐标不要加逗号,鼠标对着图片上的左上角
              <ul>
                <li>
                  FW打开图片(千万不要移动图片),然后在图层面板,锁住图片,让图片不能移动
                </li>
                <li>
                  使用切片工具,切出要的图片框起来,左下角有坐标和宽高,宽高可以修改值,XY可以修改
                </li>
                <li>写css样式</li>
                <pre><code class="language-css line-numbers">  .box {
      width: 60px;
      height: 60px;
      background: url(...) no-repeat -100px 0;
  }</code></pre>
              </ul>
            </li>
            <li>用ps工具 F8打开信息 也可以看到xy的坐标</li>
          </ul>
        </div>
      </el-card>
      <el-card id="part15" shadow="hover">
        <h2>制作favicon图标</h2>
        <div class="ls-cot">
          <p>前言</p>
          <ul>
            <li>把logo切成png图片</li>
            <li>
              把png 图片转换为ico 图标,这需要借助于第三方转换网站,例如比特虫:
              http://www.bitbug.net/
            </li>
            <li>转换成Ico图片后放入制作网页的根目录下(跟index.html同级)</li>
            <li>
              在html页面里面的 &lt;head&gt;&lt;/head&gt;元素之间引入代码
              <pre><code class="language-html line-numbers">  &lt;link rel="shortcut icon" href="favicon.ico" type="images/x-icon"&gt;</code></pre>
            </li>
            <li>这样标题旁边就会有自己想要的图标了</li>
          </ul>
        </div>
      </el-card>
      <el-card id="part16" shadow="hover">
        <h2>字体图标</h2>
        <p>前言</p>
        <ul>
          <li>
            下载
            <ul>
              <li>
                icomoon宇库：
                <el-link
                  type="primary"
                  icon="Link"
                  target="_blank"
                  href="http://icomoon.io"
                >
                  http://icomoon.io
                </el-link>
                国外服务器,打开慢
              </li>
              <li>
                阿里iconFont字库：
                <el-link
                  type="primary"
                  icon="Link"
                  target="_blank"
                  href="http://www.iconfontcn/"
                >
                  http://www.iconfontcn/
                </el-link>
                国内免费可制作上传
              </li>
              <li>
                <el-link
                  type="primary"
                  icon="Link"
                  target="_blank"
                  href="fontawesome.com"
                >
                  fontawesome.com
                </el-link>
              </li>
            </ul>
          </li>
          <li>
            引入
            <ul>
              <li>把下载包里面的 fonts文件 夹放入页面根目录下</li>
              <li>
                在CSS样式中全局声明字体:简单理解把这些字体文件通过css引入到我们页面中。
              </li>
              <li>引入的时候一定要注意src路径的问题,是否同级./还是上一级../</li>
              <li>可查看帮助文档</li>
            </ul>
          </li>
        </ul>
      </el-card>
      <el-card id="part17" shadow="hover">
        <h2>文字溢出三个点</h2>
        <p>代码</p>
        <pre><code class="language-css line-numbers">  /* 单行文本溢出 */
  white-space: nowrap;             /* 1.强制一行内显示文本,默认是normal自动 */
  overflow: hidden;                /* 2.溢出的部分影藏 */
  text-overflow: ellipsis;         /* 3.文字用省略号代替超出的部分 */

  /* 多行文本溢出 */
  display: -webkit-box;            /* 弹性伸缩盒子模型显示 */
  overflow: hidden;                /* 溢出的部分影藏 */
  text-overflow: ellipsis;         /* 文字用省略号代替超出的部分 */
  -webkit-box-orient: vertical;    /* 设置或检索伸缩盒子对象的子元素排列方式 */
  -webkit-line-clamp: 2;           /* 限制在一个块元素显示的文本的行数 */</code></pre>
      </el-card>
      <el-card id="part18" shadow="hover">
        <h2>解决图片底部空白缝隙</h2>
        <p>
          bug：图片底侧会有一个空白缝隙,原因是行内块元素会和文字的基线对齐。
        </p>
        <ul>
          <li>
            解决方法1：给图片添加vertical-align:middle | top |
            bottom等。(提倡使用的)
          </li>
          <li>解决方法2：把图片转换为块级元素 display:block;</li>
        </ul>
      </el-card>
      <el-card id="part19" shadow="hover">
        <h2>滚动条</h2>
        <p>给固定定位的盒子添加滚动条,需要添加一个最大高度和一个Y轴滚动条</p>
        <pre><code class="language-css line-numbers">  max-height: 100%;                     /* 给个最大高度 */
  overflow-y: scroll;                   /* 添加y轴的滚动条 */

  div::-webkit-scrollbar:;              /* 滚动条整体部分,其中的属性: width,height,background,border等 */
  div::-webkit-scrollbar-button:;       /* 滚动条两端的按钮。可以用display:none不显示,也可以添加背景图片,颜色改变显示效果。 */
  div::-webkit-scrollbar-track:;        /* 外层轨道。可以用display:none让其不显示,也可以添加背景图片,颜色改变显示效果。 */
  div::-webkit-scrollbar-track-piece:;  /* 内层轨道,具体区别看下面gif图,需要注意的就是它会覆盖第三个属性的样式。 */
  div::-webkit-scrollbar-thumb:;        /* 滚动条里面可以拖动的那部分 */
  div::-webkit-scrollbar-corner:;       /* 边角,两个滚动条交汇处 */
  div::-webkit-resizer:;                /* 两个滚动条交汇处用于拖动调整元素大小的小控件(基本用不上) */
</code></pre>
        <p>样式1：只有在webkit内核的浏览器才支持修改滚动条</p>
        <pre><code class="language-css line-numbers">  &::-webkit-scrollbar { width: 10px;}
  &::-webkit-scrollbar-thumb {
      background: linear-gradient(rgb(17, 157, 212), rgb(17, 212, 105)); border-radius: 5px;
      transition: 1s;}

  &::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(rgb(17, 212, 105), rgb(17, 157, 212));}</code></pre>
        <p>样式2</p>
        <pre><code class="language-css line-numbers">  .beauty-scroll
      scrollbar-color: #1890FF #91D5FF; /* 第一个方块颜色,第二个轨道颜色(用于更改火狐浏览器样式) */
      scrollbar-width: thin;                /* 火狐滚动条无法自定义宽度,只能通过此属性使滚动条宽度变细 */
      -ms-overflow-style:none;              /* 隐藏滚动条(在IE和Edge两个浏览器中很难更改样式,固采取隐藏方式) */

  /* 以下是chrome浏览器自定义滚动条样式方式 */
      &::-webkit-scrollbar {                /* 滚动条整体样式,高宽分别对应横竖滚动条的尺寸 */
          width: 3px;height: 1px;}
      &::-webkit-scrollbar-thumb {          /*滚动条里面小方块*/
          border-radius: 3px;-webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0);
          background: #1890FF;}
      &::-webkit-scrollbar-track {          /*滚动条里面轨道*/
          -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0);
          border-radius: 3px;
          background: #91D5FF;}</code></pre>
        <p>盒子超出部分溢出自动</p>
        <pre><code class="language-css line-numbers">  /* 超出内容加滚动条 */
      div{width: 300px;height: 500px;border: 1px solid red;overflow: scroll;}
  /* 方式一:去除滚动条显示 */
      div::-webkit-scrollbar{display:none}
  /* 方式二:设置滚动条样式,滚动条整体样式,高宽分别对应横竖滚动条的尺寸 */
      div::-webkit-scrollbar {width: 10px;height: 10px;}
  /* 滚动条里面小方块 */
      div::-webkit-scrollbar-thumb {border-radius: 5px;background: #cecece;}
  /* 滚动条里面轨道 */
      div::-webkit-scrollbar-track {background: #fff;}</code></pre>
      </el-card>
      <el-card id="part20" shadow="hover">
        <h2>label 冲突</h2>
        <p>label 中用了A标签不起作用解决办法</p>
        <pre><code class="language-html line-numbers">  &lt;!-- 给A标签添加这个样式 ,取消A的行为,否则使用  el:checked ~ .navSecondLabel 点击后不生效 --&gt;
  &lt;style&gt;.navSubMenuATag { pointer-events: none}&lt;/style&gt;
  &lt;li class="secondSubMenuLiTag"&gt;
      &lt;input type="checkbox" name="" id="navSecond1" /&gt;
      &lt;label class="navSecondLabel" for="navSecond1"&gt;
          &lt;a class="navSubMenuATag" href="#"&gt;
              &lt;em&gt; class="navSubMenuEmTag"&gt;&lt;/em&gt;
              &lt;span&gt; class="navSubMenuSpanTag"&gt;Programming&lt;/span&gt;
          &lt;/a&gt;
      &lt;/label&gt;
  &lt;/li&gt;</code></pre>
      </el-card>
      <el-card id="part21" shadow="hover">
        <h2>prism主题样式</h2>
        <p>代码</p>
        <pre><code class="language-html line-numbers">  &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism.min.css" /&gt;
  &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism-coy.min.css" /&gt;
  &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism-dark.min.css" /&gt;
  &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism-funky.min.css" /&gt;
  &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism-okaidia.min.css" /&gt;
  &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism-solarizedlight.min.css" /&gt;
  &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism-tomorrow.min.css" /&gt;

  &lt;pre&gt;
      &lt;code class="language-html"&gt;&lt;!-- 在这里放置您的 HTML 代码,且class更改语言 --&gt;&lt;/code&gt;
  &lt;/pre&gt;

  &lt;script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/prism.min.js"&gt;&lt;/script&gt;
  &lt;script&gt;
      document.addEventListener("DOMContentLoaded", function (event) {Prism.highlightAll();});
  &lt;/script&gt;</code></pre>
      </el-card>
      <el-card id="part22" shadow="hover">
        <h2>规范</h2>
        <p>前言</p>
        <ul>
          <li>
            目录命名
            <ul>
              <li>项目文件夹:shopping</li>
              <li>样式文件夹:css</li>
              <li>脚本文件夹:js</li>
              <li>样式类图片文件夹:img</li>
              <li>产品类图片文件夹:upload</li>
              <li>字体类文件夹:fonts</li>
            </ul>
          </li>
          <li>
            ClassName命名
            <ul>
              <li>
                ClassName的命名应该尽量精短、明确,必须以字母开头命名,且全部字母为小写,单词之间统一使用下划线连接nav_top
              </li>
              <li>
                注意:ad、banner、gg、guanggao等有机会和广告挂勾的不建议直接用来做ClassName,因为有些浏览器插件(Chrome的广告拦截插件等)会直接过滤这些类名
              </li>
              <li>另外,敏感不和谐字眼也不应该出现</li>
              <li>
                参考
                <ol>
                  <li>
                    about关于、 account账户、 arrow箭头图标、 article文章、
                    aside边栏、 audio音频
                  </li>
                  <li>
                    avatar头像、 bg,background背景、 bar工具栏、 branding品牌
                    ...
                  </li>
                  <li>等等 用英文代替,不懂的用翻译软件</li>
                </ol>
              </li>
            </ul>
          </li>
          <li>
            用以下来规范类名
            <ul>
              <li>快捷导航栏 shortcut</li>
              <li>头部 header</li>
              <li>标志 logo</li>
              <li>购物车 shopcar</li>
              <li>搜素 search</li>
              <li>热点词 hotwords</li>
              <li>导航左侧 dropdown包含dd dt</li>
              <li>导航右侧 navItems</li>
              <li>页面底部 footer</li>
              <li>页面底部服务模块 mod service</li>
              <li>页面底部帮助模块 mod help</li>
              <li>页面底部版权模块 mod.copyright</li>
            </ul>
          </li>
          <li>
            Css书写顺序
            <ul>
              <li>
                布局定位属性:display/position/float/clear/visibility/overflow(建议display第一个写,毕竟关系到模式)
              </li>
              <li>自身属性:width/height/margin/padding/border/background</li>
              <li>
                文本属性:color/font/text-decoration/text-align/vertical-align/white-space/break-word
              </li>
              <li>
                其他属性(CSS3):content/cursor/border-radius/box-shadow/text-shadow/background:linear-gradient...
              </li>
            </ul>
          </li>
          <li>
            创建文件
            <ul>
              <li>
                index.html 首页、 base.css 初始化样式、 common.css 公共样式
                (写首页 列表页 详情页等)
              </li>
            </ul>
          </li>
        </ul>
      </el-card>
      <el-card id="part23" shadow="hover">
        <h2>seo优化网站TDK标签</h2>
        <div class="ls-cot">
          <p>前言</p>
          <ul>
            <li>
              作用
              <ul>
                <li>
                  SEO(Search Engine Optimization)汉译为搜索引擎优化
                  是一种利用搜索引攀的规则提高网站在有关搜索引擎内自然排名的方式。
                </li>
                <li>
                  SEO的目的是对网站进行深度的优化,从而帮助网站获取免费的流量,进而在搜索引擎上提升网站的排名,提高网站的知名度。
                </li>
                <li>
                  页面必须有三个标签用来符合SEO优化
                  <pre><code class="language-html line-numbers">  &lt;meta name="description" content=""&gt;   &lt;!-- 简介 --&gt;
  &lt;meta name="keywords" content=""&gt;      &lt;!-- 关键字 --&gt;
  &lt;title&gt;Document&lt;/title&gt;                &lt;!-- 标题 --&gt;</code></pre>
                </li>
              </ul>
            </li>
            <li>
              优化
              <ul>
                <li>
                  title网站标题
                  <ul>
                    <li>
                      title具有不可替代性,是我们内页的第一个重要标签,是搜索引擎了解网页的入口和对网页主题归属的最佳判断点。
                    </li>
                    <li>
                      建议: 网站名(产品名)-网站的介绍(尽量不要超过30个汉字)
                    </li>
                    <li>
                      例如:京东JD.COM综合网购首选正品低价、品质保障、配送及时、轻松购物！小米商城一小米5s、红米Note4、小米MIX、小米笔记本官方网站
                    </li>
                  </ul>
                </li>
                <li>
                  description网站说明
                  <ul>
                    <li>简要说明我们网站主要是做什么的。</li>
                    <li>
                      我们提倡,description作为网站的总体业务和主题概括,多采用“我们是..”、“我们提供…”、“xxx网作为…”、“电话:010..”之类语句。
                    </li>
                    <li>
                      例如:&lt;meta
                      name="description"content=“京东JD.COM-专业的综合网上购物商城销售家电、数码通讯、电脑、家居百货、服装服饰、母婴、图书、食品等数万个品牌优质商品.便捷、诚信的服务,为您提供愉悦的网上购物体验！"/&gt;
                    </li>
                  </ul>
                </li>
                <li>
                  logo标题优化,让搜索引擎更好搜索
                  <pre><code class="language-css line-numbers">  .h2 {
    text-indent: -999px;                /* 属性是首行缩进,这里负值是为了隐藏 */
    overflow: hidden;                   /* 溢出影藏 */
  }</code></pre>
                </li>
                <li>
                  网站关键词排名的流程
                  <ul>
                    <li>放出蜘蛛 (百度叫蜘蛛,就是代码)</li>
                    <li>蜘蛛来访抓取 数据</li>
                    <li>页面的收录</li>
                    <li>算法计算得分</li>
                    <li>排名</li>
                  </ul>
                </li>
                <li>
                  网站爬虫的管理规则:如果爬虫到你的网页获取数据,认为对百度没用,就不会浪费资源再来爬取
                  <ul>
                    <li>链接长度 ,长度越长蜘蛛就是少去,不允许出现中文</li>
                    <li>网站识别回访, 打开速度快,识别难度</li>
                    <li>有效收录,有价值</li>
                    <li>
                      爬虫越多,越容易收录,一个页面起码要20-30个链接才是合格的页面
                    </li>
                    <li>访问日志 ,可以百度搜素怎么访问百度爬虫来站日志</li>
                  </ul>
                </li>
                <li>
                  怎么提高收录
                  <ul>
                    <li>
                      在网站搜索不出来。百度提示:很抱歉,没有找到与" url "
                      相关的网页时,可以点击提交网站给我们
                    </li>
                    <li>
                      <el-link
                        type="primary"
                        icon="Link"
                        target="_blank"
                        href="https://ziyuan.baidu.com/linksubmit/index"
                      >
                        https://ziyuan.baidu.com/linksubmit/index
                      </el-link>
                      ,点网页,数据提交
                    </li>
                    <li>站长工具</li>
                    <li>收录越多,排名不一定越大,取决于质量和概率</li>
                  </ul>
                </li>
                <li>数据来提升权重:大量排名,追求高质量关键词</li>
                <li>百度运营排名的核心思维:SMP 竞价</li>
                <li>
                  高级SEO的核心数据计算
                  <ul>
                    <li>展现量</li>
                    <li>点击量</li>
                    <li>点击率 = 点击次数 / 展现量</li>
                    <li>访问量,跳出率 = 访问后立刻关闭 / 访问总人数</li>
                    <li>停留时间:让用户喜欢</li>
                  </ul>
                </li>
                <li>
                  关键词选择的4大技巧
                  <ul>
                    <li>指数</li>
                    <li>相关结果</li>
                    <li>广告位</li>
                    <li>首页数量</li>
                  </ul>
                </li>
                <li>
                  网站TDK优化
                  <ul>
                    <li>书写格式: 关键词1-关键词2-关键词3-品牌词 32字符</li>
                    <li>描述: 字符60-80 ,用处,行业优势,包含关键词</li>
                  </ul>
                </li>
                <li>
                  网站高阶栏目打造： 导航栏
                  <ul>
                    <li>引导用户点击</li>
                    <li>栏目数量不超过9,不少于6,吸引用户点击</li>
                    <li>栏目的顺序</li>
                  </ul>
                </li>
                <li>
                  利用锚本提升网站的收录
                  <ul>
                    <li>锚本就是可以点击跳转的文字(链接)</li>
                    <li>作用:增加网页点击率,增加用户停留时间</li>
                    <li>
                      增加蜘蛛的爬行率,当爬虫进入网页爬取数据,看到链接会进去再爬取,一层一层
                    </li>
                  </ul>
                </li>
                <li>
                  高质量文本的书写要求
                  <ul>
                    <li>文字于链接内容匹配</li>
                    <li>文字最好为排名关键字</li>
                    <li>文本的设置密度不能超过1% 1000数字文章 4个,不能多</li>
                    <li>不能多个链接指向一篇文章 回链</li>
                    <li>站在用户需求(百度检测)</li>
                  </ul>
                </li>
                <li>
                  网站的文章书写技巧
                  <ul>
                    <li>
                      虽然鼓励原创,但写伪原创更受喜欢,将原创获取进行修改,达到用户需求
                    </li>
                    <li>
                      文章的写作技巧,图文结合 1-3张,字符800字,不能乱写,有效收录
                    </li>
                  </ul>
                </li>
                <li>
                  外链算法
                  <ul>
                    <li>别人的网站放置自己的链接</li>
                    <li>文章引用法则</li>
                  </ul>
                </li>
                <li>
                  外链发布技巧
                  <ul>
                    <li>文字,链接,图片</li>
                    <li>选择高质量外链平台,对链接有文字描速(引导点击)</li>
                    <li>一段文字不要发布多个平台,知乎</li>
                  </ul>
                </li>
                <li>
                  利用友情链接带动网站数据
                  <ul>
                    <li>30个,同行业或周边</li>
                    <li>权重高,选择优质站点</li>
                    <li>友情链接写在网页最底下,内页和首页换是比较亏的</li>
                  </ul>
                </li>
                <li>
                  闪电算法:秒排的数据要求
                  <ul>
                    <li>
                      网页打开速度 大于3秒减分,2-3秒不加分不减分 小于2秒 加分
                    </li>
                    <li>css js文件少,图片,文件太大,影响打开速度</li>
                    <li>服务器</li>
                  </ul>
                </li>
                <li>
                  第一印象规则
                  <ul>
                    <li>发布的时候先优化,再上线</li>
                    <li>域名、服务器</li>
                  </ul>
                </li>
                <li>
                  选择一个符合SEO的网站域名:主题 域名好记,关键词,后缀 好记
                </li>
                <li>网站链接的权重划分:链接越长,越难排名</li>
                <li>网站布局:F形布局</li>
                <li>标签的细节优化:标题H标签,关键词</li>
                <li>
                  nofollow
                  <ul>
                    <li>
                      a 标签 里设置属性 rel="nofollow"
                      标签设置上了之后,爬虫不会爬取
                    </li>
                    <li>
                      不需要的外连接挂上 nofollow , 比如
                      广告,QQ客服链接,其他平台链接
                    </li>
                  </ul>
                </li>
                <li>
                  网站图片: alt 属性的优化:对图片做说明,alt 和 title
                  需要描述相关的内容,不能随便写,详细的描述即可
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </el-card>
    </template>
  </card-container>
</template>

<script setup lang="ts" name="CssPage">
import { ref } from "vue";

const data = ref([
  { id: 1, h2: "基本样式" },
  { id: 2, h2: "技巧" },
  { id: 3, h2: "Unicode编码字体" },
  { id: 4, h2: "浏览器中可以看到部分" },
  { id: 5, h2: "CSS引入方式" },
  { id: 6, h2: "选择器" },
  { id: 7, h2: "文字代替" },
  { id: 8, h2: "行元素、块元素、转换" },
  { id: 9, h2: "层级" },
  { id: 10, h2: "盒子模型" },
  { id: 11, h2: "清除浮动" },
  { id: 12, h2: "定位" },
  { id: 13, h2: "元素的显示与隐藏" },
  { id: 14, h2: "精灵图" },
  { id: 15, h2: "制作favicon图标" },
  { id: 16, h2: "字体图标" },
  { id: 17, h2: "文字溢出 三个点" },
  { id: 18, h2: "解决图片底部空白缝隙" },
  { id: 19, h2: "滚动条" },
  { id: 20, h2: "label 冲突" },
  { id: 21, h2: "prism主题样式" },
  { id: 22, h2: "规范" },
  { id: 23, h2: "seo优化网站TDK标签" },
]);
</script>

<style scoped lang="scss"></style>
