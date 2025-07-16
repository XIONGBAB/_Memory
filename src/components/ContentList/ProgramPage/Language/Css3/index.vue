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
          fill="#30a6f5"
          p-id="9116"
        />
      </svg>
      <h1>Css3</h1>
    </template>
    <template #describe>
      <p>
        CSS3（Cascading Style Sheets
        3）是层叠样式表的第三个版本，它是一种用于描述文档样式的语言，是CSS（层叠样式表）技术的升级版本，其中增添了类选择器，盒子阴影、过渡、透视、渐变等技术更新
      </p>
    </template>
    <template #content>
      <el-card id="part1" shadow="hover">
        <h2>CSS3圆角边</h2>
        <p>代码</p>
        <pre><code class="language-css line-numbers">  div{ border-radius: 10px;}
  /* (想要圆角的效果就设置高度的一半就可以了) (盒子高度-上下边框) / 2
      圆可以写百分比 50%, 圆角矩形设置高度的一半
      10px 20px 30px 40px ;  也可以设置四个值
      10px 20px 30px; 10px 20px; (对角)  也可以设置三个和二个值 */</code></pre>
      </el-card>
      <el-card id="part2" shadow="hover">
        <h2>CSS3盒子阴影</h2>
        <p>代码</p>
        <pre><code class="language-css line-numbers">  div {box-shadow: 10px 10px 10px -4px rgba(0,0,0,.3);}
  /*
      h-shadow   水平阴影位置 必填 允许负值
      v-shadow   垂直阴影位置 必填 允许负值
      blur       模糊距离    可选
      spread     阴影尺寸    可选
      color      阴影颜色    可选
      inset      外部阴影默认,可改内部阴影(outset) 可选 */</code></pre>
      </el-card>
      <el-card id="part3" shadow="hover">
        <h2>CSS3文字阴影</h2>
        <p>代码</p>
        <pre><code class="language-css line-numbers">  div {text-shadow: (h-shadow v-shadow blur color);}
  /*
      h-shadow   水平阴影位置 必填 允许负值
      v-shadow   垂直阴影位置 必填 允许负值
      blur       模糊距离    可选
      color      阴影颜色    可选

  3D效果就是一直偏移
      text-shadow: 1px 1px rgba(123,123,123,0.8),
      2px 2px rgba(123,123,123,0.8),
      3px 3px rgba(123,123,123,0.8),
      5px 5px rgba(123,123,123,0.8);
      .... 达到想要的3D效果即可  */</code></pre>
      </el-card>
      <el-card id="part4" shadow="hover">
        <h2>CSS3三角</h2>
        <p>代码</p>
        <pre><code class="language-css line-numbers">  /* 等腰三角形 */
  div {
      width: 0;
      height: 0;
      line-height: 0;
      font-size: 0;
      border:50px solid transparent;
      border-left-color:pink; }

  /* 直角三角形 */
  div {
      width: 0;
      height: 0;
      border-color: transparent red transparent transparent;
      border-style: solid;
      border-width: 22px 8px 0 0;}

  /* 分解采用技术: 伪类  旋转  定位
      五角星:是用三个三角形合成的,两个锐角三角形 + 一个钝角三角形
      六角星:是用两个锐角三角形组成,采用伪元素方法,定位加旋转
      五边形:是用一个钝角三角形+ 梯形组成
      六边形:是由 两个钝角三角形+ 一个长方形组成
      画心形:两个长方形分别两个角设置为圆角,然后旋转拼接在一起
      画蛋型:一个长方形  上下左右四个角圆形像素不同
      画太极:三个部分组成 */  </code></pre>
      </el-card>
      <el-card id="part5" shadow="hover">
        <h2>CSS3盒子模型</h2>
        <p>前言</p>
        <ul>
          <li>
            CSS3中可以通过box-sizing来指定盒模型,有2个值:即可指定为
            content-box、border-box。
          </li>
          <li>这样我们计算盒子大小的方式就发生了改变。</li>
          <li>
            可以分成两种情况
            <ul>
              <li>
                box-sizing:content-box 盒子大小为width + padding +
                border(以前默认的)
              </li>
              <li>box-sizing:border-box 盒子大小为width</li>
            </ul>
          </li>
          <li>
            如果盒子模型我们改为了box-sizing:border-box,那padding和border就不会撑大盒子了(前提padding和border不会超过width宽度)
          </li>
          <li>
            注意,css3 的盒子模型是把边框算进去的,所以行高line-hight
            不等于盒子高,要减去盒子边框
          </li>
        </ul>
      </el-card>
      <el-card id="part6" shadow="hover">
        <h2>CSS3函数</h2>
        <p>滤镜函数filter</p>
        <ul>
          <li>filter: CSS属性将模糊或颜色偏移等图形效果应用于元素。</li>
          <li>
            filter: 函数(); 例如:filter:blur(5px); blur模糊处理 数值越大越模糊
          </li>
        </ul>
        <p>计算函数calc</p>
        <ul>
          <li>calc(): 此CSS函数让你在声明CSS属性值时执行一些计算。</li>
          <li>width: calc(100%-80px); 括号里面可以使用 + - * / 来进行计算。</li>
        </ul>
        <p>attr()</p>
        <ul>
          <li>
            图标上通知徽标
            可以使用attr()函数来做，目前兼容性只支持伪元素的content
            <pre><code class="language-css line-numbers">  content:attr(data-count)
  &lt;div data-count="1"&gt;&lt;/div&gt;</code></pre>
          </li>
        </ul>
      </el-card>
      <el-card id="part7" shadow="hover">
        <h2>选择器</h2>
        <p>nth-child(n)选择某个父元素的一个或多个特定的子元素</p>
        <ul>
          <li>n可以是数字,关键字和公式</li>
          <li>n如果是数字,就是选择第n个子元素,里面数字从1开始…</li>
          <li>n可以是关键字:even偶数,odd奇数</li>
          <li>
            n可以是公式:常见的公式如下(如果n是公式,则从0开始计算,但是第0个元素或者超出了元素的个数会被忽略)
          </li>
        </ul>
        <p>公式</p>
        <ul>
          <li>2n 偶数</li>
          <li>2n+1 奇数</li>
          <li>5n 5的倍数,5 10 15...</li>
          <li>n+5 从第5个开始</li>
          <li>-n+5 前5个,包含5</li>
        </ul>
      </el-card>
      <el-card id="part8" shadow="hover">
        <h2>过渡(重点)</h2>
        <p>transition: 要过渡的属性 花费时间 运动曲线 何时开始</p>
        <ul>
          <li>
            过渡属性:想要变化的css属性,宽 高 背景色
            内外边距都行。如果想要所有的属性都变化过渡,写一个 all 就可以。
          </li>
          <li>花费时间:单位是秒(必须写单位)比如0.5s</li>
          <li>运动曲线:默认是 ease(可以省略)</li>
          <li>
            何时开始:单位是秒(必须写单位)可以设置延迟触发时间默认是0s(可以省略)
          </li>
          <li>
            过渡效果：谁用给谁加,多个效果用逗号隔开
            <ul>
              <li>
                linear匀速 ease逐渐慢下来 ease-in加速 ease-out减速
                ease-in-out快入慢出
              </li>
            </ul>
          </li>
        </ul>
        <p>代码</p>
        <pre><code class="language-css line-numbers">  .video-slide {
      position: absolute;
      width: 100%;
      clip-path: circle(0% at 0 50%);
  }
  .video-slide.active {
      clip-path: circle(150% at 0 50%);
      transition: 2s ease;
      /* 将鼠标悬停在一个元素上,逐步改变表格的某个属性,宽度 高度等其他: */
      transition-property: clip-path;
  }</code></pre>
      </el-card>
      <el-card id="part9" shadow="hover">
        <h2>转换transform (重点)</h2>
        <p>前言</p>
        <ul>
          <li>
            是CSS3中具有颠覆性的特征之一,可以实现元素的位移、旋转、缩放等效果。转换(transform)你可以简单理解为变形
            <ul>
              <li>移动: translate</li>
              <li>旋转: rotate</li>
              <li>缩放: scale</li>
              <li>倾斜: skew(x ,y 跟角度,单位deg )</li>
            </ul>
          </li>
          <li>
            2D转换之 移动 translate
            <pre><code class="language-css line-numbers">  /* 2D移动是2D转换里面的一种功能,可以改变元素在页面中的位置,类似定位。 */
      transform:translate(x,y);  /* 可以复合写法 或者分开写 */
      transform: translateX(n);
      transform: translateY(n);

  /*  1、 定义2D转换中的移动,沿着X和Y轴移动元素
      2、translate最大的优点:不会影响到其他元素的位置
      3、translate中的百分比单位是相对于自身元素的translate:(50%,50%);
      4、对行内标签没有效果
      5、如果要用像素,需要更单位(px) */

  /* 居中代码 */
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);</code></pre>
          </li>
          <li>
            2D转换之 旋转 rotate
            <pre><code class="language-css line-numbers">  /* 2D旋转指的是让元素在2维平面内顺时针旋转或者逆时针旋转。 */
  transform: rotate(90deg);

  /*  1、rotate里面跟度数,单位是deg 比如 rotate(45deg)
      2、角度为正时,顺时针,负时,为逆时针
      3、默认旋转的中心点是元素的中心点
      4、可以使用伪元素,三角,旋转,hover, 做出鼠标经过,三角形旋转的动画  */</code></pre>
          </li>
          <li>
            2D转换之 中心点 transform-origin
            <pre><code class="language-css line-numbers">  transform-origin: 50% 50%;

/*  1、注意后面的参数 x 和 y 用空格隔开
    2、x y默认转换的中心点是元素的中心点(50% 50%)
    3、还可以给x y设置像素或者方位名词(top bottom left right center) */</code></pre>
          </li>
          <li>
            2D转换之 缩放 scale
            <pre><code class="language-css line-numbers">  /*  缩放,顾名思义,可以放大和缩小。只要给元素添加上了这个属性就能控制它放大还是缩小。 */
  transform:scale(x,y);

  /*  1、注意其中的x和y用逗号分隔
      2、transform:scale(1,1):宽和高都放大一倍,相对于没有放大
      3、transform:scale(2.2):宽和高都放大了2倍
      4、transform:scale(2):只写一个参数,第二个参数则和第一个参数一样,相当于scale(2,2)
      5、transform:scale(0.5.0.5):缩小
      6、scale缩放最大的优势:可以设置转换中心点缩放,默认以中心点缩放的,而且不影响其他盒子 */</code></pre>
          </li>
          <li>
            2D综合写法：
            <ul>
              <li>
                同时使用多个转换,其格式为:transform: translate() rotate()
                scale()等,
              </li>
              <li>其顺序会影转换的效果。(先旋转会改变坐标轴方向)</li>
              <li>当我们同时有位移和其他属性的时候,记得要将位移放到最前</li>
            </ul>
          </li>
          <li>
            总结：
            <ul>
              <li>转换transform我们简单理解就是变形有2D和3D之分</li>
              <li>我们暂且学了三个分别是位移旋和缩放</li>
              <li>
                2D移动translate(xy)最大的优势足不影响其他盒子,里面参数用%,是相对于自身宽度和高度来计算的
              </li>
              <li>可以分开写比如translateX(x)和translateY(y)</li>
              <li>2D旋转rotate(度数)可以实现旋转元素废数的单位是deg</li>
              <li>
                2D缩放scale(x,y)里面参数是数字不跟单位可以是小数最大的优势不影响其他盒子
              </li>
              <li>
                设置转换中心点transform-origin:xy:参数可以百分比、像素或者是方位名词
              </li>
              <li>
                当我们进行综合写法,同时有位移和其他属性的时候,记得要将位移放到最前
              </li>
            </ul>
          </li>
        </ul>
      </el-card>
      <el-card id="part10" shadow="hover">
        <h2>动画</h2>
        <p>前言</p>
        <ul>
          <li>
            动画(animation)
            是CSS3中具有颠覆性的特征之一,可通过设置多个节点来精确控制一个或一组动画,常用来实现复杂的动画效果。
          </li>
          <li>相比较过渡,动画可以实现更多变化,更多控制,连续自动播放等效果。</li>
        </ul>
        <pre><code class="language-css line-numbers">  @keyframes animationName{
      0%{}
      20%{}
      60%{}
      100%{}
  }
  /* 0%是动画的开始,100%是动画的完成。这样的规则就是动画序列。 */
  /* 在@keyframes中规定巢项CSS样式,就能创建由当前样式逐渐改为新样式的动画效果。 */
  /* 动画是使元素从一种样式逐渐变化为另一种样式的效果。您可以改变任意多的样式任意多的次数。 */
  /* 请用百分比来规定变化发生的时间,或用关键词“from”和“to”,等同于0%和100%。 */

  div{
      width: 200px;height: 200px;
      animation: animationName;  /* 元素使用动画 动画名称 */
      animation-duration: 10s;   /* 持续时间 */
  }

  /* 常用属性
      @keyframes      规定动画。
      animation       所有动画属性的简写属性,除了animation-play-state属性。
      animation-name  规定@keyframes动画的名称。(必须的)
      animation-duration    规定动画完成一个周期所花费的秒或毫秒,默认是0.(必须的)
      animation-timing-function   规定动画的速度曲线,默认是“ease”。
      animation-delay       规定动画何时开始,默认是0。
      animation-iteration-count   规定动画被播放的次数,默认是1,还有infinite
      animation-direction        规定动画是否在下一周期逆向播放,默认是“normal",alternate逆播放
      animation-play-state  规定动画是否正在运行或暂停。默认是’running”,还有“pause”。
      animation-fill-mode  规定动画结束后状态,保持forwards回到起始backwards */

  /* 速度曲线细节
      animation-timing-function   默认是“ease”。
      linear      动画从头到尾的速度是相同的。匀速
      ease        默认。动画以低速开始,然后加快,在结束前变慢。
      ease-in     动画以低速开始。
      ease-out    动画以低速结束。
      ease-in-out 动画以低速开始和结束。
      steps()     指定了时间函数中的间隔数量(步长) */

  /* 简写属性  顺序不能乱,前两个属性不能省略
      animation:动画名称   持续时间   运动曲线   何时开始   播放次数    是否逆向     动画起始或者结束的状态；
      animation:myFirst    5s      linear    2s      infinite   alternate  backwards  */

  /* 简写属性里面不包含animation-play-state
      暂停动画:animation-play-state:paused; 经常和鼠标经过等其他配合使用
      想要动画走回来,而不是直接跳回来:animation-direction:alternate
      盒子动画结束后,停在结束位置:animation-fill-mode: forwards
      命名多个动画,元素可以调用多个动画,用逗号分隔,然后写另一个动态的属性

  可查看动画案例:案例代码在 《CSS3进阶素材-包含小熊动画》和 25-大数据热点图.html里 */ </code></pre>
      </el-card>
      <el-card id="part11" shadow="hover">
        <h2>3D</h2>
        <p>前言</p>
        <ul>
          <li>
            三维坐标系其实就是指立体空间,立体空间是由3个轴共同组成的
            <ul>
              <li>x轴：水平向右 注意:X右边是正值,左边是负值</li>
              <li>y轴：垂直向下 注意:y下面是正值,上面是负值</li>
              <li>z轴：重直屏幕 注意:往外面是正值,往里面是负值</li>
            </ul>
          </li>
          <li>3D转换我们主要学习工作中最常用的3D位移和3D旋转</li>
          <li>
            backface-visibility: hidden;
            开启3d后,翻转看不到后面盒子的需要加上这句
          </li>
          <li>
            3D移动 translate
            <pre><code class="language-css line-numbers">  /* X Y Z有不需要的数值就写0,但不能为空,不能省略 */
      transform:translateX(100px);    /* 仅仅是在x轴上移动 */
      transform:translateY(100px);    /* 仅仅是在y轴上移动 */
      transform:translateZ(100px);    /* 仅仅是在z轴上移动(注意:translateZ一般用px单位) */
      transform:translate3d(x,y,z);   /* 其中x、y、z分别指要移动的轴的方向的距离 */ </code></pre>
          </li>
          <li>
            3D旋转 rotate3d
            <pre><code class="language-css line-numbers">  /* 3D旋转指可以让元素在三维平面内沿着x轴,y轴,z或者自定义轴进行旋转。*/
      transform:rotateX(45deg);           /* 沿着x轴正方向旋转45度 */
      transform:rotateY(45deg);           /* 沿着y轴正方向旋转45deg */
      transform:rotateZ(45deg);           /* 沿着z轴正方向旋转45deg */
      transform:rotate3d(x,y,z,deg);      /* 沿着自定义轴旋转deg为角度(了解即可)

  /* xyz是表示旋转轴的矢量,是标示你是否希望沿着该轴旋转,最后一个标示旋转的角度。 */
      transform: rotate3d(1,0,0,45deg); /* 就是沿着轴旋转45deg */
      transform: rotate3d(1,1,0,45deg); /* 就是沿着对角线旋转45deg */ </code></pre>
          </li>
          <li>
            3D呈现 transform-style
            <pre><code class="language-css line-numbers">  /*  控制子元素是否开启三维立体环境,代码写给父级,但是影响的是子盒子,这个属性很重要,后面必用 */
      transform-style:flat;               /* 子元素不开启3d立体空间默认的 */
      transform-style:preserve-3d;        /* 子元素开启立体空间 */ </code></pre>
          </li>
          <li>
            案例，旋转的圆
            <pre><code class="language-html line-numbers">  &lt;style&gt;
      .box {position: relative;width: 300px;height: 300px;margin: 150px auto;
            transition: all 0.6s;transform-style: preserve-3d;}
      .box:hover {transform: rotateY(360deg)}
      .qian,
      .hou {position: absolute;top: 0;left: 0;width: 100%;height: 100%;border-radius: 50%;
            line-height: 300px;text-align: center;font-size: 30px;color: #fff;}
      .qian {background-color: skyblue;z-index: 1;}
      .hou {background-color: blue;transform: rotateY(100deg);}
  &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
      &lt;div class="box"&gt;
          &lt;div class="qian"&gt;我是第一个圆&lt;/div&gt;
          &lt;div class="hou"&gt;我是后面的圆&lt;/div&gt;
      &lt;/div&gt;

  &lt;!-- 注意:前后图片翻转代码,注意后面一张图片要旋转180°,要不然旋转后只能看到第一张图片的效果 --&gt;</code></pre>
          </li>
        </ul>
      </el-card>
      <el-card id="part12" shadow="hover">
        <h2>透视 perspective</h2>
        <p>在2D平面产生近大远小视觉立体,但是只是效果二维的</p>
        <ul>
          <li>
            如果想要在网页产生3D效果需要透视(理解成3D物体投影在2D平面内)。
          </li>
          <li>模拟人类的视觉位置,可认为安排一只眼睛去看</li>
          <li>透视我们也称为视距:视距就是人的眼睛到屏幕的距离</li>
          <li>距离视觉点越近的在电脑平面成像越大,越远成像越小</li>
          <li>
            透视的单位是像素px
            <ul>
              <li>例如：perspective: none | &lt;length&gt;</li>
            </ul>
          </li>
        </ul>
        <p>透视写在被观察元素的父盒子上面的</p>
        <pre class="pre">
    人眼                         屏幕                           物体
    &gt;-----------------------------|-----------------------------|

    |------------d----------------|------------z----------------|
    D就是视距,视距就是个距离人的眼睛到屏幕的距离。
    Z就是z轴,物体距离屏幕的距离,z轴越大(正值)我们看到的物体就越大。
          </pre
        >
      </el-card>
      <el-card id="part13" shadow="hover">
        <h2>背景线性渐变</h2>
        <p>背景线渐变</p>
        <pre><code class="language-css line-numbers">  /* background:linear-gradient(起始方向,颜色1,颜色2,…)  可以设置多个颜色 */
      background:-webkit-linear-gradient(left,red,blue);
      background:-webkit-linear-gradient(left,top,red,blue);
      background:-webkit-linear-gradient(to top,red,blue);
      background:-webkit-linear-gradient(45deg,red,blue);
      background:-webkit-linear-gradient(red 50px, blue 70px);      /* 可以按颜色起始开始50px*/

  /* 背景渐变必须添加浏览器私有前缀.起始方向可以是:方位名词 或者 度数,如果省略默认就是top */ </code></pre>
        <p>线性渐变</p>
        <pre><code class="language-css line-numbers">  linear-gradient(direction, color-stop1, color-stop2, ...);
  background-image: linear-gradient(to right, red , yellow);                /* 从左到右 */
  background-image: linear-gradient(to bottom right, red, yellow);          /* 对角渐变 */
  background-image: linear-gradient(-90deg, red, yellow);                   /* 用角度angle */

  background-color: red;                                                      /* 加上后让浏览器不支持的时候显示 */
  /*  &lt;angle&gt;:       用角度值指定渐变的方向(或角度)。
      to left:       设置渐变为从右到左。相当于:270deg
      to right:      设置渐变从左到右。相当于:90deg
      to top:        设置渐变从下到上。相当于:0deg
      to bottom:     设置渐变从上到下。相当于:180deg。

      &lt;color-stop&gt;   用于指定渐变的起止颜色:
      &lt;color&gt;:       指定颜色。
      &lt;length&gt;:      用长度值指定起止色位置。不允许负值
      &lt;percentage&gt;:  用百分比指定起止色位置。 */ </code></pre>
        <p>径向渐变</p>
        <pre><code class="language-css line-numbers">  linear-gradient(direction, color-stop1, color-stop2, ...);
  background-image: radial-gradient(circle at center,blue);     /* circle  正方形 => 正圆 */
  background-image: radial-gradient(circle at right,blue);
  ...
  background-image: radial-gradient(ellipse at top left,blue);  /* ellipse 长方形 => 椭圆 */
  background-image: radial-gradient(ellipse at top right,blue);
  ...
  background-image: radial-gradient(20px circle at center,blue);
  ...
  background-image: radial-gradient(20px 30px circle at center,blue);
  ...
  background-image: radial-gradient(20px 30px circle at center,blue,yellow);
  ...
  /* 省略代表还有其他方向可以设置  left  right  top bottom
     radial-gradient(大小 at 位置 ,颜色 位置,颜色 位置,颜色 位置) */ </code></pre>
        <p>重复渐变</p>
        <pre><code class="language-css line-numbers">   background-image: repeating-linear-gradient(red 30px,green 40px,yellow 30px);

   /* 重复性渐变色标值一定要添加,还有兼容性需要加上 */</code></pre>
      </el-card>
      <el-card id="part14" shadow="hover">
        <h2>common.less</h2>
        <p>前言</p>
        <ul>
          <li>
            新建common.less设置好最常见的屏幕尺寸,利用媒体查询设置不同的htm字体大小,因为除了首页其他页面也需要
          </li>
          <li>
            我们关心的尺寸有320px、360px、375px、384px、400px、414px、424px、480px、540px、720px、750px
          </li>
          <li>划分的份数我们定为15等份</li>
          <li>
            因为我们pc端也可以打开我们苏宁移动端首页,我们默认html字体大小为50px,
            注意这句话写到最上面
          </li>
        </ul>
      </el-card>
      <el-card id="part15" shadow="hover">
        <h2>swiper插件使用</h2>
        <p>前言</p>
        <ul>
          <li>
            官网地址:
            <el-link
              type="primary"
              icon="Link"
              target="_blank"
              href="https://www.swiper.com.cn/"
            >
              https://www.swiper.com.cn/
            </el-link>
            <ul>
              <li>下载需要的css和js文件件</li>
              <li>官网找到类似案例,复制html结构,css样式js语法</li>
              <li>根据需求定制修改模块</li>
            </ul>
          </li>
          <li>
            图标字体上传下载 上传步骤
            <ul>
              <li>让美工准备好图标字体(必须是svg格式)</li>
              <li>点上传按钮(保留颜色并提交)</li>
            </ul>
          </li>
          <li>
            不懂可以点击 API文档进行swiper查询代码
            <ul>
              <li>
                &gt;&gt; 点击获取Swiper &gt;&gt; 下载Swiper &gt;&gt;
                点击版本自动会下载 &gt;&gt; 得到swiper-6.6.2
              </li>
              <li>
                &gt;&gt; 解压压缩包 &gt;&gt; package &gt;&gt; 复制
                swiper-bundle.min.js + swiper-bundle.min.css 到项目下
              </li>
              <li>
                &gt;&gt; 然后点击 &gt;&gt; 在线演示 &gt;&gt; 选择想要的样式
                &gt;&gt; 点击在新窗口打开 &gt;&gt; F12拷贝代码
              </li>
              <li>
                注意:在项目里面先引入css文件,然后在尾部引入js文件，最后拷贝代码
                和 css样式代码
              </li>
            </ul>
          </li>
        </ul>
      </el-card>
      <el-card id="part16" shadow="hover">
        <h2>网页一屏一屏滚动</h2>
        <p>代码</p>
        <pre><code class="language-html line-numbers">  &lt;style&gt;
    /* 核心样式 */
    * { margin: 0;padding: 0;font-family: sans-serif; }
    main {
        place-items: center;display: grid;scroll-snap-type: y mandatory;
        /* 需要把滚动条设置到直接父容器上,才会生效,默认是body,现在设置main */
        /* 两个值,一个是滚动的方向 第二个为贴合方式,mandatory表示强制滚动  另一个值为proximity 表示离近时贴合*/
        /* 如果是水平方向的话,定位改成 flex type值改为x */
        overflow: scroll;/* 溢出 滚动条  也可以直接去掉滚动条*/
        height: 100vh;
        scroll-padding: 80px;        /* 当导航栏遮挡了,可以设置这个属性 */
    }
    main div {
        width: 100vh;height: 100vh;
        scroll-snap-align: start;    /* 贴合的对齐方式  start  center end */
    }
  &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;main&gt;
      &lt;div&gt;内容一&lt;/div&gt;
      &lt;div&gt;内容二&lt;/div&gt;
    &lt;/main&gt;
  &lt;/body&gt;</code></pre>
      </el-card>
      <el-card id="part17" shadow="hover">
        <h2>图片裁切,保留原始比例</h2>
        <p>代码</p>
        <pre><code class="language-css line-numbers">  video {
  z-index: 000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /*  fill        默认值
      contain     保留原有尺寸比例,内容被缩放
      cover       保持原有尺寸比例。但部分内容可能被剪切。
      none        保留原有元素内容的长度和宽度,也就是说内容不会被重置。
      scale-down  保持原有尺寸比例。内容的尺寸与 none 或 contain 中的一个相同,取决于它们两个之间谁得到的对象尺寸会更小一些
      initial     设置为默认值,
      inherit     从该元素的父元素继承属性 }

      object-position属性的作用类似于CSS的background-position属性。大多数情况下，使用默认值（例如，"center "或 "50% 50%")。
  */</code></pre>
        <ul>
          <li>属性指定元素的内容应该如何去适应指定容器的高度与宽度</li>
          <li>
            一般用于 img 和 video
            标签,一般可以对这些元素进行保留原始比例的剪切、缩放或者直接进行拉伸等
          </li>
        </ul>
      </el-card>
      <el-card id="part18" shadow="hover">
        <h2>移动端vw适配公式</h2>
        <p>代码</p>
        <pre><code class="language-css line-numbers">  @total-width:750;
  html{
    font-size:100vw / @total-width * 40 ;    /* = 5.333333333vw  1rem = 40px */
  }
  /*
      vh  开发中不需要混用，只用vw，让网页元素尺寸等比例
      vw 和 1% 有 没有 区 别 :
          1. vw 永远 是 以 视 口 的 宽度 为 准 。. 在 375 设 计 稿 下 ， 到 交 永 远 是 375 区
          2. 百 分 比 以 父 盒子 为 准 。 假如 父 盒子 是 200px， 则 1% 是 2px

      flex有个特点，内容装不下 文字会竖向排列，用white-space:nowrap;

      vmin  /  vmax  是为了了照顾手机端横屏和竖屏
      vmin 和 vmax 是 与 当下 屏幕 的 宽 度 和 高 度 的 最 大 值 或 最 小 值 有 关 取决 于 哪个 更 大 和 更 小 “

      方法一：不是用插件做法：sass定义一个变量
      $baseSize:3.75vw;
      .box {
        padding: 0 (12 / $baseSize) 0 (18 / $baseSize);
      }

      方法二：插件，px2vw
      设置里面把设计稿设置大小，一般750，然后开发的时候，输入正常px值，让转换成vw
  */</code></pre>
      </el-card>
      <el-card id="part19" shadow="hover">
        <h2>grid布局 (弹性盒模型)</h2>
        <p>前言</p>
        <ul>
          <li>pc考虑兼容性,移动端可以使用</li>
          <li>
            声明布局
            <pre><code class="language-css line-numbers">  display: grid;              /* 属于块级元素 */
  display: -ms-inline-grid;   /* 兼容性写法,行内栅格 */</code></pre>
          </li>
          <li>
            给父容器设置好宽高,然后设置排列模式,根据子元素,设置对应的排列方式,不设置,默认列铺满,每列独占一行
          </li>
          <li>
            实例
            <pre><code class="language-html line-numbers"> &lt;!-- div父盒子宽度300px,高度300px。底下有9个子div,但没有设置宽高,那么进行九宫格排列 --&gt;
  &lt;style&gt;
      .father { display: grid;width: 300px;height: 300px;background-color: bisque;}
      .son {background-color: blueviolet;padding: 1px;background-clip: content-box;}
  &lt;/style&gt;
  &lt;div class="father"&gt;
      &lt;div class="son"&gt;&lt;/div&gt;
      &lt;div class="son"&gt;&lt;/div&gt;
      &lt;div class="son"&gt;&lt;/div&gt;
      &lt;div class="son"&gt;&lt;/div&gt;
      &lt;div class="son"&gt;&lt;/div&gt;
      &lt;div class="son"&gt;&lt;/div&gt;
      &lt;div class="son"&gt;&lt;/div&gt;
      &lt;div class="son"&gt;&lt;/div&gt;
      &lt;div class="son"&gt;&lt;/div&gt;
  &lt;/div&gt;</code></pre>
          </li>
          <li>
            Css样式
            <pre><code class="language-css line-numbers">  grid-template-rows: 100px 100px 100px;  /* 3行 */
  grid-template-columns: 100px 100px 100px;  /* 3列 */

  /* 使用函数重复方法,简写形式 */
      grid-template-rows: repeat(3, 1fr);
      grid-template-columns: repeat(3, 1fr);
  /* 使用百分比 当不是偶数时,可以用1fr,占一份的意思*/
      grid-template-rows: repeat(3, 33.33%);
      grid-template-columns: repeat(3,33.33%);
  /* 自动分配1 以100px为一个单位自动填充全部,不够宽度会自动换行*/
      grid-template-rows: repeat(auto-fill, 100px);
      grid-template-columns: repeat(auto-fill, 100px);
  /* 自动分配2  设置左右固定像素,中间自动 ,列*/
      grid-template-columns: 100px auto 80px;
      grid-template-rows: 100px auto 80px;
  /* 按份数划分 把页面划分成4份,第一个占1份,第二个占2分,第三1份 */
      grid-template-rows: 1fr 2fr 1fr;
      grid-template-columns: 1fr 2fr 1fr;
  /* 固定范围值 划分了四行,那么元素最小宽度到最大宽度不能超过这个值内进行划分份数 */
      grid-template-rows: repeat(4, minmax(50px, 100px));
      grid-template-columns: 1fr 1fr 1fr;
  /* 使用这个参数的前提下是 父盒子不要有宽度,这样才会自适应屏幕
      三个参数  第一个参数列占一份,第二个参数,第二列最小宽度80,也是占一份,第三列最小50px,后面还能写参数,*/
      grid-template-columns: 1fr minmax(80px, 1fr) minmax(50px, 1fr)

  /* 注意,如果son盒子设置了宽高, 依然还会在划分好的9宫格区域内,进行对应设置好div的宽,划分的网格不变 */
  .son {
    background-color: blueviolet;
    padding: 2px;
    background-clip: content-box;
    width: 30px;
    height: 30px;
  }</code></pre>
          </li>
          <li>
            控制间距,gap方法,或者也可以使用margin 来控制
            <pre><code class="language-css line-numbers">  margin: 10px;                                /* 给子元素添加margin */
  row-gap: 10px;    || grid-row-gap: 10px;     /* 每行相距10px 后一个为兼容性写法 */
  column-gap: 10px; || grid-column-gap: 10px   /* 列间距10px 后一个为兼容性写法 */
  gap: 20px 10px;    </code></pre>
          </li>
          <li>
            所占位置,占位之前,先要画好网格,这样才能算出坐标.例如
            <ul>
              <li>四宫格,横向2条线3个编号,纵向2条线3个编号</li>
              <li>九宫格,横向3条线4个编号,纵向3条线4个编号</li>
            </ul>
            <pre><code class="language-css line-numbers">  .box {                         /* 父盒子先画好布局 */
      border: 1px solid red;
      display: grid;
      width: 300px;
      height: 300px;
      grid-template-rows: repeat(3, 1fr);
      grid-template-columns: repeat(3, 1fr);
  }
  .box div {                     /* 子盒计算占的位置 */
      grid-row-start: 1;
      grid-row-end: 3;
      grid-column-start: 2;
      grid-column-end: 4;

      grid-row: 1 / 3;           /* 简写形式 行 */
      grid-column: 2 / 4;        /* 简写形式 列 */

      grid-row: 1 / span 2;      /* 简写形式 也可以配合偏移 */
      grid-column: 2 / span 2;   /* 简写形式 也可以配合偏移 */
  }</code></pre>
          </li>
          <li>
            图示
            <pre class="pre">
                      r1-start       r1-end
                        &lt;---------------&gt;
                                          r2-start        r2-end
  c1-start                                 &lt;-----------------&gt;
    ^                   ———————————————————
    |                   |                  |                 |
    |                   |                  |                 |
    |                   |                  |                 |
    | c1-end            |                  |                 |
    ^       ^           |——————————————————|
            | c2-start  |                  |                 |
            |           |                  |                 |
            |           |                  |                 |
            |           |                  |                 |
            ^ c2-end    ———————————————————
              </pre
            >
          </li>
          <li>
            使用偏移,用关键字 span
            <pre><code class="language-css line-numbers">  grid-column-end: span 3;
  grid-row-end: span 1;

  grid-row-start: 2;
  grid-row-end: span 1;
  grid-column-start: 1;
  grid-column-end: span 3;</code></pre>
          </li>
          <li>
            使用栅格区域
            <pre><code class="language-css line-numbers">  grid-area: 1/1/2/4; /* row-S column-S row-E column-E S代表开始 E代表结束 */</code></pre>
          </li>
          <li>
            使用命名方式,使用点 . 占位符
            <pre><code class="language-css line-numbers">  .box {
      display: grid;width: 300px;height: 300px;grid-template-rows: repeat(3, 1fr);
      grid-template-columns: repeat(3, 1fr);
      color: rgba(128, 255, 0, 0.541);
      gap: 10px 5px;
      /* 定区域写法 */
      grid-template-areas: "a b c"    // 先要划分区域,然后再命名
          "d e f"
          "g h i";
      grid-template-areas: ". . ."    // 可以使用 . 占位符
          ". . ."
          "g h i";
  }

  .box div:nth-child(1) {
      background-color: rosybrown;
      grid-area: i;    // 注意写区域时候不要带引号,命名时需要加
  }

  .box div:nth-child(2) {
      background-color: rgb(204, 21, 21);
      grid-area: a;
  }
  /* html
      &lt;div class="box"&gt;
          &lt;div&gt;1&lt;/div&gt;
          &lt;div&gt;2&lt;/div&gt;
      &lt;/div&gt; */ </code></pre>
          </li>
          <li>
            改变排列方向,默认 row ,且使用 dense
            可以自动填满出现的元素占位后的空隙
            <pre><code class="language-css line-numbers">  grid-auto-flow: row dense;
  || grid-auto-flow: column dense; /* 改变排列方向 为列 */
  /* 例如1 和 2 号都设置了占位,那么使用  dense 属性 就可以让3 和 4 自动填满上来,相当于按顺序浮动上来 */

  ------------    --------
  |     1*   |    |  3   |
  ------------    --------
  -----   -----
  | 4 |   | 2 |
  -----   ----- </code></pre>
          </li>
          <li>
            对齐方式水平+垂直 ,可以对整体或者单个元素控制
            <pre><code class="language-css line-numbers">  /* 水平 */
      justify-content: center;        /* 参数: start center end  默认拉伸:stretch */
      justify-content:space-around;   /* 向内分布 */
      justify-content:space-between;  /* 向外分布 */
      justify-content:space-evenly;   /* 均匀排列每个元素 */

  /* 垂直 */
      align-content: center;          /* 参数可查文档 */

  /* 每个子元素的横轴排列 */
      justify-items: center;          /* 参数参数可查文档 */

  /* 每个子元素的纵轴排列 */
      align-items: center;            /* 参数可查文档 */

  /* 单独控制简写方式 */
      justify-self: center;           /* 参数可查文档 */
      align-self: center;             /* 参数可查文档 */

  /* 组合控制简写方式 */
      place-content: center center;   /* 第一个参数align-content  第二个参数 justify-content;  */
      place-items: center center;     /* 第一个参数align-item  第二个参数 justify-item;  */
      place-content: center;          /* 两个参数一样写一个就可以了 */
      place-items: center;            /* 两个参数一样写一个就可以了 */
      place-self: center;             /* 第一个参数align-self  第二个参数 justify-self */</code></pre>
          </li>
        </ul>
      </el-card>
      <el-card id="part20" shadow="hover">
        <h2>flex布局 (弹性盒模型)</h2>
        <p>代码</p>
        <ul>
          <li>
            结构
            <pre><code class="language-html line-numbers">  &lt;style&gt;
      .box { width: 400px;height: 400px;border: 1px solid red;display: flex;flex-direction: column-reverse;}
      .box&gt;div {width: 100px;height: 100px;border: 1px solid red;border: 1px solid blue;}
  &lt;/style&gt;
  &lt;!-- 结构 --&gt;
  &lt;div class="box"&gt;
      &lt;div class="main1"&gt;1&lt;/div&gt;&lt;div class="main2"&gt;2&lt;/div&gt;
      &lt;div class="main3"&gt;3&lt;/div&gt;&lt;div class="main4"&gt;4&lt;/div&gt;
  &lt;/div&gt;</code></pre>
          </li>
          <li>
            声明
            <pre><code class="language-css line-numbers">  display: flex;
  display: inline-flex;            /* 少用 */ </code></pre>
          </li>
          <li>
            排列方式
            <pre><code class="language-css line-numbers">  flex-direction: column;          /* 竖轴 */
  flex-direction: column-reverse;  /* 翻转 */
  flex-direction: row;             /* 默认横轴 */
  flex-direction: row-reverse;     /* 翻转 */</code></pre>
          </li>
          <li>
            元素溢出 换行
            <pre><code class="language-css line-numbers">  flex-wrap: wrap;
  flex-wrap: wrap-reverse;         /* 反向换行 */</code></pre>
          </li>
          <li>
            flex-wrap 和 flex-direction 综合写法
            <pre><code class="language-css line-numbers">  flex-flow: row wrap;             /* 第一个 direction 参数 第二个是是否换行的参数 */
  flex-flow: column wrap-reverse; </code></pre>
          </li>
          <li>
            分布方式,主轴 交叉轴写法,要看谁是主轴,justify 控制主轴
            <pre><code class="language-css line-numbers">  /* 主轴对齐方式:*/
  justify-content: flex-start;     /* 参数: flex-start flex-end center */
  justify-content: space-around;   /* 参数: space-around space-between space-evenly */

  /* 交叉轴元素对齐方式: */
  align-items: flex-start;         /* 参数: flex-start flex-end center */
  align-content: space-around;     /* 参数: space-around space-between space-evenly */

  /* stretch 拉伸: */
  justify-content: stretch;        /* 这个拉伸属性值 必须要在元素没有指定大小的时候才能使用 */
  align-content: stretch;          /* align-content 用于多行的时候,溢出换行时,来控制元素 */
  height: auto;                    /* 当元素有高度时候,想拉伸,需要把高度改为自动,注意层级 */</code></pre>
          </li>
          <li>
            水平 垂直都居中
            <pre><code class="language-css line-numbers">  justify-content: center;
  align-content: center;</code></pre>
          </li>
          <li>
            子元素控制对齐方式,就是对自己控制,写在自己的样式里,对单个元素交叉轴的控制
            <pre><code class="language-css line-numbers">  align-self: center;              /* 参数: flex-start flex-end center */</code></pre>
          </li>
          <li>
            设置在盒子自身上,对盒子未占满空间时,分配空间,记得是给元素上设置,哪个元素要就给哪个添加
            <pre><code class="language-css line-numbers">  flex-grow: 1;                    /* 平均分配 */
  flex-grow: 0;                    /* 设置为0 就表示不进行分配,原来有多大就有多大 */ </code></pre>
          </li>
          <li>
            缩放比例
            <pre><code class="language-css line-numbers">  flex-shrink: 0;                  /* 不缩放 */
  flex-shrink: 1;                  /* 一比一缩放 */

  /* 例子: */
  div {width: 200px;}              /*  3个div总共宽度为600
      &lt;div&gt;元素1缩小比例为0&lt;/div&gt;   flex-shrink: 0;
      &lt;div&gt;元素2缩小比例为1&lt;/div&gt;   flex-shrink: 1;
      &lt;div&gt;元素3缩小比例为3&lt;/div&gt;   flex-shrink: 3; */

  /* 公式:
      元素缩小值 /(元素2宽度 * 元素2的比例 + 元素2宽度 * 元素3的比例) * 元素的个数;
      元素自身宽度 - (算出来的值 * 元素本身的宽度) = 就是缩小的后的宽度 */

  /* 假设:
      元素有3个div,元素宽度都是200px, 元素1缩小比例0,元素2缩小比例1,元素3缩小比例3
      总元素宽度 200*3 = 600px 因为第一个不缩放 就是600 - 400 = 200px 得出要缩小值
      200 /(200 * 1 + 200 * 3)*3 = 0.75
      元素2: 200-(0.75 * 200)
      元素3: 200- (0.75 * 600) */</code></pre>
          </li>
          <li>
            基准 尺寸
            <pre><code class="language-css line-numbers">  flex-basis: 100px;               /* 优先级: min-width > flex-basis > width > */
  width: 50px; </code></pre>
          </li>
          <li>
            占的份数,跟缩放的性质一样 可以跟参数。也会跟grid
            布局里面占分数一样,写多个参数
            <pre><code class="language-css line-numbers">  flex: 1;                         /* 分别对应三个值 flex-grow flex-shrink flex-basis*/</code></pre>
          </li>
          <li>
            控制元素的排序
            <pre><code class="language-css line-numbers">  order: 1;                        /* 数值越大,元素就会越靠后 */ </code></pre>
          </li>
          <li>文本节点可以使用弹性布局对其操作</li>
          <li>定位元素 position 中的表现不会影响</li>
          <li>
            使用 margin-right:auto; 可以在导航中撑开 铺满右侧的元素
            <ul>
              <li>|元素1| |元素2| |元素3| -------- |元素4|</li>
              <li>
                元素三设置 margin-right:auto 会自动撑满剩余空间,把元素4挤到最后
              </li>
            </ul>
          </li>
          <li>
            总结
            <pre><code class="language-css line-numbers">  /* 用于父盒子的属性 */

  display: flex ;
  flex-direction: row;             /* row ||column ; */
  flex-wrap: wrap;                 /*  wrap || nowrap ; */
  justify-content: center;         /* center || flex-start flex-end space-..... */
  align-items: center;             /* center || flex-start flex-end space-..... */

  /* 用于子盒子的属性 */

  flex-grow:0;                     /* 扩展比率优先级从 max-width min-width grow shrink basis */
  flex-shrink:0;                   /* 缩小比例,可压缩值 0为不可压缩 */
  flex-basis:100px;                /* 盒子的起始大小如果有设置grow,那么会先用grow */
  flex: 0 0 100px;                 /* 可以写一个值,也可以写多个值 */
  align-self:center;               /* 子元素自身控制对齐方式 */
  order:1;                         /* 相当于层级,控制元素排列顺序 */</code></pre>
          </li>
          <li>
            flex-shrink
            定义项目缩小比例,默认为1,如果有一个项目flex-shrink为0,其他项目都为1,空间不足时前者不缩小
          </li>
        </ul>
      </el-card>
    </template>
  </card-container>
</template>

<script setup lang="ts" name="Css3Page ">
import { ref } from "vue";

const data = ref([
  { id: 1, h2: "CSS3 圆角边" },
  { id: 2, h2: "CSS3盒子阴影" },
  { id: 3, h2: "CSS3文字阴影" },
  { id: 4, h2: "CSS3三角" },
  { id: 5, h2: "CSS3盒子模型" },
  { id: 6, h2: "CSS3函数" },
  { id: 7, h2: "选择器" },
  { id: 8, h2: "过渡(重点)" },
  { id: 9, h2: "转换transform (重点)" },
  { id: 10, h2: "动画" },
  { id: 11, h2: "3D" },
  { id: 12, h2: "透视 perspective" },
  { id: 13, h2: "背景线性渐变" },
  { id: 14, h2: "common.less" },
  { id: 15, h2: "swiper插件使用" },
  { id: 16, h2: "网页一屏一屏滚动" },
  { id: 17, h2: "图片裁切,保留原始比例" },
  { id: 18, h2: "移动端vw适配公式" },
  { id: 19, h2: "grid布局 (弹性盒模型)" },
  { id: 20, h2: "flex布局 (弹性盒模型)" },
]);
</script>

<style scoped lang="scss"></style>
