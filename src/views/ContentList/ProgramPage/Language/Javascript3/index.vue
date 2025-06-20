<template>
  <card-container title="javascript" :data="data">
    <template #svg>
      <svg
        width="40" height="40" t="1699148574627" class="icon" viewBox="0 0 1024 1024"
        version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8149"
      >
        <path d="M64 64h896v896H64z" fill="#F5DE19" p-id="8150" />
        <path d="M665.888 764a91.712 91.712 0 0 0 83.2 51.2c34.88 0 57.184-17.44 57.184-41.6 0-28.8-22.912-39.104-61.312-55.904l-21.056-9.024c-60.8-25.888-101.12-58.304-101.12-126.848 0-63.136 48-111.232 123.296-111.232a124.448 124.448 0 0 1 119.744 67.424L800 580.096A57.248 57.248 0 0 0 745.952 544a36.64 36.64 0 0 0-40.288 36.096c0 25.248 15.648 35.488 51.776 51.2l21.056 9.024c71.552 30.688 112 61.952 112 132.256 0 75.808-59.552 117.344-139.52 117.344a161.76 161.76 0 0 1-153.44-86.112z m-297.44 7.296c13.216 23.456 25.248 43.296 54.176 43.296 27.648 0 45.12-10.816 45.12-52.896v-286.304h84.192v287.424c0 87.168-51.2 126.848-125.728 126.848a130.72 130.72 0 0 1-126.304-76.8z" fill="" p-id="8151" />
      </svg>
    </template>
    <template #describe>
      <p>JavaScript最初是由Netscape的工程师布兰登·艾奇（Brendan Eich）在1995年设计的，最初命名为LiveScript，但为了利用当时流行的Java语言的市场效应，它被改名为JavaScript。</p>
    </template>
    <template #content>
      <el-card id="part1" shadow="hover">
        <h2>网页效果</h2>
        <div class="ls-cot">
          <p>网页特效 （PC端网页特效 元素偏移量offset系列）</p>
          <ol>
            <li>
              offset概述： offset翻译过来就是偏移量，我们使用offset系列相关属性可以动态的得到该元素的位置（偏移）、大小等。
              <ul>
                <li>获得元素距离带有定位父元素的位置</li>
                <li>获得元素自身的大小（宽度高度）</li>
                <li>注意：返回的数值都不带单位，注意单词大小写</li>
              </ul>
              <pre><code class="language-js line-numbers">  var div = document.querySelector("div");
  div.offsetParent                         /* 返回作为该元素带有定位的父级元素，如果父级都没有定位则返回body */
  div.offsetTop                            /* 返回元素相对带有定位父元素上方的偏移*/
  div.offsetLeft                           /* 返回元素相对带有定位父元素左边框的偏移 */
  div.offsetWidth                          /* 返回自身包括padding、边框、内容区的宽度，返回数值不带单位 */
  div.offsetHeight                         /* 返回自身包括padding、边框、内容区的高度，返回数值不带单位 */

  // 注意： offsetWidth和 可以得到元素的大小宽度和高度是包padding+border+width 但是没有margin值</code></pre>
            </li>
            <li>
              offset 和 style 的区别
              <pre><code class="language-js line-numbers">  offset  可以得到任意样式表中的样式值             |        style         只能得到行内样式表中的样式值
  offset  系列获得的数值是没有单位的               |        style.width   获得的是带有单位的字符串
  offsetWidth 包含padding+border+width           |        style.width   获得不包含padding和border的值
  offsetWidth 等属性是只读属性，只能获取不能赋值    |        style.width   是可读写属性，可以获取也可以赋值

  所以,我们想要获取元素大小位置，用offset更合适     |         所以，我们想要给元素更改值，则需要用style改变</code></pre>
            </li>
            <li>
              案例
              <pre><code class="language-js line-numbers">  //  案例1：点击后获取鼠标的坐标
  /* 思路：
      我们在盒子内点击，想要得到鼠标距离盒子左右的距离。
      首先得到鼠标在页面中的坐标（e.pageXe.pageY）
      其次得到盒子在页面中的距离（box.offsetLeft，box.offsetTop）
      用鼠标距离页面的坐标减去盒子在页面中的距离，得到鼠标在盒子内的坐标
      如果想要移动一下鼠标，就要获取最新的坐标，使用鼠标移动事件mousemove  */
  &lt;div&gt; class='box'&gt;&lt;/div&gt;        // 记得带定位

  var box = document.querySelector('.box');
  box.addEventListener('mousemove', function(e) {
      var x = e.pageX - this.offsetLeft;
      var y = e.pageY - this.offsetTop;
      this.innerHTML = x + ' ' + y;
  });

  // 案例2：模态框拖拽 弹出框，我们也称为模态框
  /* 思路：
      点击弹出层，会弹出模态框，并且显示灰色半透明的遮挡层。
      点击关闭按钮，可以关闭模态框，并且同时关闭灰色半透明遮挡层。
      鼠标放到模态框最上面一行，可以按住鼠标拖拽模态框在页面中移动。
      鼠标松开，可以停止拖动模态框移动。
      详细操作：
          点击弹出层，模态框和遮挡层就会显示出来display:block；
          点击关闭按钮，模态框和遮挡层就会隐藏起来display:none；
          在页面中拖拽的原理：鼠标按下并且移动，之后松开鼠标
          触发事件是鼠标按下mousedown，鼠标移动mousemove鼠标松开mouseup
          拖拽过程：鼠标移动过程中，获得最新的值赋值给模态框的left和top值，这样模态框可以跟着鼠标走了
          鼠标的坐标减去鼠标在盒子内的坐标，才是模态框真正的位置。
          鼠标按下，我们要得到鼠标在盒子的坐标。
          鼠标移动，就让模态框的坐标设置为：鼠标坐标减去盒子坐标即可，注意移动事件写到按下事件里面。
          鼠标松开，就停止拖拽，就是可以让鼠标移动事件解除  */
  &lt;div class="link"&gt;&lt;a id="links" href="javascript:;"&gt;点击，弹出登录框&lt;/a&gt;&lt;/div&gt;
  &lt;div id="login" class="box"&gt;
      &lt;div id="title" class="title"&gt;鼠标拖动区域&lt;/div&gt;
      &lt;span&gt;&lt;a id="closeBtn" href="javascript:;"&gt;关闭&lt;/a&gt;&lt;/span&gt;
  &lt;/div&gt;

  &lt;!-- 遮罩层 --&gt;
  &lt;div class="bg"&gt;&lt;/div&gt;
  &lt;script&gt;
      var link = document.querySelector('#links');
      var box = document.querySelector('.box');
      var bg = document.querySelector('.bg')
      var closeBtn = document.querySelector('#closeBtn');
      var title = document.querySelector('#title');
      // 点击后打开
      link.addEventListener('click', function() {
              box.style.display = 'block';            // 注意单词  display
              bg.style.display = 'block';
          })
          // 点击后关闭
      closeBtn.addEventListener('click', function() {
              box.style.display = 'none';             // 注意单词  display
              bg.style.display = 'none';
          })
          //拖动效果JS 1、 先获取要拖拽的区域， 当鼠标按下， 就获得的鼠标在盒子内的坐标
      title.addEventListener('mousedown', function(e) {
          var x = e.pageX - box.offsetLeft;
          var y = e.pageY - box.offsetTop;
          // 2、鼠标移动的时候，把鼠标在页面中的坐标减去鼠标在盒子的坐标就是模态框的left和top值
          document.addEventListener('mousemove', move)

          function move(e) {
              box.style.left = e.pageX - x + 'px';    // offset 只能获取不能赋值，所以这里用style
              box.style.top = e.pageY - y + 'px';     // 注意 要加单位
          }
          // 3、鼠标弹起，就让鼠标移动事件 移除
          document.addEventListener('mouseup', function() {
              this.removeEventListener('mousemove', move);
          })
      })
  &lt;/script&gt;

  // 案例3：仿京东放大镜效果
  /* 需求：
      整个案例可以分为三个功能模块
      鼠标经过小图片盒子，黄色的遮挡层和大图片盒子显示，离开隐藏2个盒子功能
      黄色的遮挡层跟随鼠标功能。
      * 移动黄色遮挡层，大图片跟随移动功能。
      公式：
            1        x                            1 * 4
            一   =   一          求x         x  =  一一一
            2        4                              2

      * 求大图片的移动距离
      公式：
            遮挡层移动距离                     大图片移动距离
            ----------------     =         ---------------       求大图片移动距离？
            遮挡层最大移动距离                 大图片最大移动距离

                                           遮挡层移动距离 * 大图片最大移动距离
            大图片移动距离          =        ------------------------------
                                                  遮挡层最大移动距离

      分析：
        黄色的遮挡层跟随鼠标功能。
        把鼠标坐标给遮挡层不合适。因为遮挡层坐标以父盒子为准。
        首先是获得鼠标在盒子的坐标。
        之后把数值给遮挡层做为left和top值。
        此时用到鼠标移动事件，但是还是在小图片盒子内移动。
        发现，遮挡层位置不对，需要再减去盒子自身高度和宽度的一半。
        遮挡层不能超出小图片盒子范围。
        如果小于零，就把坐标设置为0
        遮挡层的最大移动距离：小图片盒子宽度减去遮挡层盒子宽度  */

  &lt;style&gt;
      .preview_img {position: relative; width: 400px;height: 398px;border: 1px solid #ccc;}
      .mask {display: none;position: absolute;top: 0; left: 0;width: 300px;height: 300px;
          background: #FEDE4F;opacity: .5;border: 1px solid #ccc;cursor: move;z-index: 999;}
      .big {display: none;position: absolute;box-sizing: border-box;top: 0;left: 405px;width: 500px;
          height: 500px;border: 1px solid #ccc;z-index: 999;overflow: hidden;}
      .big .bigImg { position: absolute;top: 0;left: 0;}
  &lt;/style&gt;

  &lt;body&gt;
    &lt;!-- 预览区域 --&gt;
    &lt;div class="preview_img"&gt;
        &lt;img src="images/s3.png" alt=""&gt;
        &lt;div&gt; class="mask"&gt;&lt;/div&gt;
        &lt;div&gt; class="big"&gt;
            &lt;img src="images/big.jpg" alt="" class="bigImg"&gt;
        &lt;/div&gt;
    &lt;/div&gt;
  &lt;/body&gt;

  &lt;script"&gt;
    window.addEventListener('load', function() {
      var preview_img = document.querySelector('.preview_img');
      var mask = document.querySelector('.mask');
      var big = document.querySelector('.big');
      preview_img.addEventListener('mouseover', function() {
          mask.style.display = 'block';
          big.style.display = 'block';
      })
      preview_img.addEventListener('mouseout', function() {
          mask.style.display = 'none';
          big.style.display = 'none';
      })
      preview_img.addEventListener('mousemove', function(e) {
          // 先计算鼠标在盒子里面的坐标
          var x = e.pageX - this.offsetLeft;
          var y = e.pageY - this.offsetTop;
          //把得出来的鼠标坐标赋值给黄色盒子
          //赋值一个变量
          var maskX = x - mask.offsetWidth / 2;
          var maskY = y - mask.offsetHeight / 2;
          var maskMax = preview_img.offsetWidth - mask.offsetWidth; //把小盒子的宽度 - 黄色盒子的宽度
          //如果x坐标小于了0 就让他停在0的位置
          if (maskX &lt;= 0) {                // 如果黄色盒子的坐标小于了0，那么盒子X坐标就直接为0不能是负数了
              maskX = 0;
          } else if (maskX &gt;= maskMax) {   // 如果盒子的坐标大于了100，那么固定盒子坐标为100，不能超过这个值
              maskX = maskMax;
          }
          if (maskY &lt;= 0) {                // 如果黄色盒子的坐标小于了0，那么盒子Y坐标就直接为0不能是负数了
              maskY = 0;
          } else if (maskY &gt;= maskMax) {   // 如果盒子的坐标大于了100，那么固定盒子坐标为100，不能超过这个值
              maskY = maskMax;
          }
          mask.style.left = maskX + 'px';     // 盒子宽度/ 2 = 盒子的一半
          mask.style.top = maskY + 'px';
          // 大图片的移动距离 = 遮挡层移动距离*大图片最大移动距离 / 遮挡层的最大移动距离
          // 大图
          var bigIMg = document.querySelector('.bigImg');
          // 大图片最大移动距离
          var bigMax = bigIMg.offsetWidth - big.offsetWidth;
          // 大图片移动距离 X Y
          var bigX = maskX * bigMax / maskMax;
          var bigY = maskY * bigMax / maskMax;
          bigIMg.style.left = -bigX + 'px';
          bigIMg.style.top = -bigY + 'px';
      })
    })
  &lt;/script&gt;

  /* 拖拽问题： 当我们拖拽一个网页中的内容时，浏览器会默认去搜索引擎中搜索内容，比如ctrl +a 会全部拖拽 此时会导致拖拽功能的异常，这个是浏览器默认的行为。
     解决方案： 如果不希望发生这个行为，则通过 return false ; 取消这个行为，但是这个方法对IE 8不起作用  */
  steCapture &&  setCapture ();
  releaseCapture && releaseCapture() ;</code></pre>
            </li>
          </ol>
          <p>元素可视区 client</p>
          <ul>
            <li>
              client翻译过来就是客户端，我们使用client系列的相关属性来获取元素可视区的相关信息。通过client系列的相关属性 可以动态的得到该元素的边框大小、元素小等。
              <pre><code class="language-js line-numbers">  var div = document.querySelector(div);

  div.clientTop     /* 返回元素上边框的大小 */
  div.clientLeft    /* 返回元素左边框的大小 */
  div.clientWidth   /* 返回自身包括padding、内容区的宽度，不含边框，返回数值不带单位公 */
  div.clientHeight  /* 返回自身包括padding、内容区的高度，不含边框，返回数值不带单位 */

  // client 和 offset 最大的区别就是： offset 不包含边框</code></pre>
            </li>
          </ul>
          <p>淘宝flexible.js (源码分析)</p>
          <ul>
            <li>立即执行函数 ( function () {} )() 或者 ( function() {} () ) //第二个小括号可以看做调用函数，可以传值</li>
            <li>
              主要作用：创建一个独立的作用域 , 不需要调用，立马能够自己执行
              <pre><code class="language-js line-numbers">  (function(a, b) {
      console.log(a + b);
  }(3, 2));
  // 多个立即执行函数，需要用 ；来隔开
  (function sum(a, b) {           // 写函数名也是不会报错的
      console.log(a - b);
  })(3, 2);

  // 两种立即执行函数写法，包含ES6语法
    ((a, b) => {
        console.log(a + b)
    })(1, 3);

    (function say() {
        console.log(111);
    })();

    (function say2() {
        console.log(333);
    }());

  // 立即执行函数最大的作用就是独立创建了一个作用域，里面所有的变量都是局部变量不个命名冲突的</code></pre>
            </li>
            <li>
              下面三种情况都会刷新页面都会触发load事件
              <ol>
                <li>a标签的超链接</li>
                <li>F5或者刷新按钮（强制新）</li>
                <li>前进后退按钮</li>
              </ol>
            </li>
            <li>但是火狐中，有个特点，有个往返缓存”，这个缓存中不仅保存着页面数据，还保存了DOM和JavaScript的状态； 实际上是将整个页面都保存在了内存里。 所以此时后退按钮不能刷新页面。</li>
            <li>
              此时可以使用pageshow事件来触发。，这个事件在页面显示时间触发，无论页面是否来自缓存。在重新加载页面中， pageshow会在load事件触发后触发；根据事件对象中的persisted来判断是否是缓存中的页面触发的pageshow事件， 注意这个事件给window添加
              <pre><code class="language-js line-numbers">  (function flexible(window, document) {
    var docEl = document.documentElement
        // dpr 物理像素比，pc端是1 ，移动端是2
        // 意思是先看下当前浏览器的像素比，如果能拿到，就显示当前像素比，如果拿不到，就当1来看
    var dpr = window.devicePixelRatio || 1

    //   设置body 的字体大小
    function setBodyFontSize() {
        if (document.body) { //先看页面有没有body元素，有执行下面，没有执行否则代码
            document.body.style.fontSize = (12 * dpr) + 'px'
        } else { //否则添加一个事件，等页面主要元素加载完毕，再执行setBodyFontSize
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }
    setBodyFontSize();

    // set 1rem = viewWidth / 10  //开始设置HTML 的文字大小
    function setRemUnit() {
        // html的宽度 /10
        var rem = docEl.clientWidth / 10
        docEl.style.fontSize = rem + 'px'
    }
    setRemUnit();

    // reset rem unit on page resize  当我们页面尺寸大小发生变化时，要重新设置下rem的大小
    window.addEventListener('resize', setRemUnit)
        //pageshow 是我们重新加载页面触发的事件
    window.addEventListener('pageshow', function(e) {
        //e.persisted 返回的是true就是说如果这个页面是从缓存取过来的页面，也需要从新计算一下rem大小
        if (e.persisted) {
            setRemUnit();
        }
    })

    // detect 0.5px supports  //有些移动端的浏览器不支持0.5像素的写法
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
  }(window, document))</code></pre>
            </li>
          </ul>
          <p>元素scroll</p>
          <ul>
            <li>
              scroll 翻译过来就是滚动的，我们使用scroll系列的相关属性可以动态的得到该元素的大小、滚动距离等。
              <pre><code class="language-js line-numbers">  div.scrollTop            /* 返回被卷去的上侧距离，返回数值不带单位 */
  div.scrollLeft           /* 返回被卷去的左侧距离，返回数值不带单位 */
  div.scrollWidth          /* 返回自身实际的宽度，不含边框，返回数值不带单位 */
  div.scrollHeight         /* 返回自身实际的高度，不含边框，返回数值不带单位 */</code></pre>
            </li>
            <li>
              案例：仿淘宝固定右侧侧边栏 330集
              <ol>
                <li>原先侧边栏是绝对定位</li>
                <li>当页面滚动到一定位置，侧边栏改为固定定位</li>
                <li>页面继续滚动，会让返回顶部显示出来</li>
                <li>需要用到页面滚动事件scroll 因为是页面滚动，所以事件源是document</li>
                <li>滚动到某个位置，就是判断页面被卷去的上部值。</li>
                <li>页面被卷去的头部：可以通过window.pageYOffset获得如果是被卷去的左侧 window.pageXOffset</li>
                <li>注意，元素被卷去的头部是element.scrollTop，如果是页面被卷去的头部则是window.pageYoffset</li>
              </ol>
              <pre><code class="language-html line-numbers">  &lt;div class="slider-bar"&gt;
    &lt;span class="goBack"&gt;返回顶部&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="header w"&gt;头部区域&lt;/div&gt;
  &lt;div class="banner w"&gt;banner区域&lt;/div&gt;
  &lt;div class="main w"&gt;主体部分&lt;/div&gt;
  &lt;script&gt;
      // 1 获取元素
      var sliderBar = document.querySelector('.slider-bar');
      var banner = document.querySelector('.banner');
      // banner.offEstTop 就是被卷曲头部的大小 一定要写到滚动的外面
      var bannerTop = banner.offsetTop;
      // 当我们侧边栏固定定位置后应该变化的数值
      var sliderBarTop = sliderBar.offsetTop - bannerTop;
      // 获取main 元素
      var main = document.querySelector('.main');
      var mainTop = main.offsetTop;
      var goBack = document.querySelector('.goBack');
      // 2、页面滚动事件scroll
      document.addEventListener('scroll', function() {
          // window.pageYOffset 是页面被卷进去的头部
          // 3、当我们页面被卷去的头部大于等于了172 ，此时右侧栏变成了固定定位
          if (window.pageYOffset &gt;= bannerTop) {
              sliderBar.style.position = 'fixed';
              sliderBar.style.top = sliderBarTop + 'px';
          } else {
              sliderBar.style.position = 'absolute';
              sliderBar.style.top = '300px'; // 如果小于 则改回原来的绝对定位
          }
          // 当我们页面滚动到主题部分或，显示
          if (window.pageYOffset &gt;= mainTop) {
              goBack.style.display = 'block';
          } else {
              goBack.style.display = 'none';
          }
      })
      goBack.addEventListener('click', function() {
           window.scroll(0, 0);    // 返回顶部，Y值可以根据需要填写值，不要带单位
      })
  &lt;/script&gt;</code></pre>
            </li>
            <li>
              页面被卷去的头部兼容性解决方案
              <ol>
                <li>
                  需要注意的是，页面被卷去的头部，有兼容性问题，因此被卷去的头部通常有如下几种写法：
                  <pre><code class="language-js line-numbers">  /* 声明了DTD，使用document.documentElement.scrollTop
     未声明DTD，使用 document.body.scrollTop
     新方法window.pageOffset 和window.pageXOffset，IE9开始支持 */

  function getScroll() {
    return {
      left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
      top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };
  }
              </code></pre>
                </li>
                <li>scrollHeight - scrollTop == clientHeight // 满足这个条件，说明垂直滚动条已经拉到底了</li>
                <li>滚动事件 onscroll // 会在滚动条滚动的时候触发</li>
                <li>Chrome认为浏览器的滚动条属于body的，可以通过 document.body.scrollTop来获取</li>
                <li>而火狐等浏览器认为浏览器的滚动条属于html的，可以通过document.documentElement.scrollTop 来获取</li>
                <li>
                  处理兼容性 ：
                  <pre><code class="language-js line-numbers">  var a = document.body.scrollTop || document.documentElement.scrollTop </code></pre>
                </li>
                <li>
                  判断鼠标滚轮滚动的方向：
                  <pre><code class="language-js line-numbers">  box.onmouseWheel = function (event) {
    event = event || window.event;
    // event.wheelDelta 可以获取鼠标滚轮滚动的方向，向上滚120，向下滚-120，不看值只看正负，火狐不支持
    // event.detail 在火狐中支持使用，向上-3 向下3，一样只看正负，不看值，来判断滚轮向上还是向下
    if (event.wheelDelta &gt; 0 || event.detail &lt; 0) {
      alert(' 向上');
    } else {
      alert(' 向下');
    }
    return false // 取消浏览器默认行为
                 // 但是addEventLister里，此方法不管用，需要用 event .preventDefault (); 方法取消
                 // 兼容性写法 ：event .preventDefault && event.preventDefault();
                 // 如果第一个为false， 就直接不用
  }</code></pre>
                </li>
              </ol>
            </li>
          </ul>
          <p>总结</p>
          <ul>
            <li>
              代码：
              <pre><code class="language-js line-numbers">  element.offsetWidth      /* 返回自身包括padding、边框、内容区的宽度，返回数值不带单位 */
  element.clientWidth      /* 返回自身包括padding、内容区的宽度，不含边框，返回数值不带单位 */
  element.scrollWidth      /* 返回自身实际的宽度，不含边框，返回数值不带单位 */</code></pre>
            </li>
            <li>
              他们主要用法：
              <ol>
                <li>offset 系列经常用于获得元素位置 offsetLeft offsetTop</li>
                <li>client 经常用于获取元素大小 clientWidth clientHeight</li>
                <li>scroll 经常用于获取滚动距离 scrollTop scrollLeft</li>
              </ol>
            </li>
          </ul>
          <p>动画函数封装1</p>
          <ul>
            <li>动画实现核心原理：通过定时器setInterval（）不断移动盒子位置</li>
            <li>
              实现步骤：
              <ol>
                <li>获得盒子当前位置</li>
                <li>让盒子在当前位置加上1个移动距离</li>
                <li>利用定时器不断重复这个操作</li>
                <li>加一个结束定时器的条件</li>
                <li>注意：此元素需要添加定位，才能使用 element.style.left</li>
                <li>注意：停止动画，本质就是停止定时器，用clearInterval</li>
              </ol>
              <pre><code class="language-js line-numbers">  var div = document.querySelector('div');
  var stop = setInterval(function() {
      if (div.offsetLeft >= 400) {
          // 停止动画，本质就是停止定时器，用clearInterval
          clearInterval(stop);
      } else {
          div.style.left = div.offsetLeft + 20 + 'px';   //赋值用 style
      }
  }, 80);</code></pre>
            </li>
          </ul>
          <p>动画函数封装2</p>
          <ul>
            <li>注意函数需要传递2个参数，动画对象和移动到的距离。</li>
            <li>简单动画函数封装 obj 目标对象 target 目标位置</li>
            <li>
              function animate（obj，target）{}
              <pre><code class="language-html line-numbers">  div {
    position: absolute;left: 0;width: 100px;height: 100px;background-color: pink;
    color: snow;background: url(images/1.webp) no-repeat;background-size: 100%;
  }
  span {
      position: absolute;top: 0; width: 100px;height: 100px;background-color: skyblue;
  }

  &lt;script&gt;
      function animate1(obj, target, num) {
          var stop = setInterval(function() {
              if (obj.offsetLeft &gt;= target) {
                  // 停止动画，本质就是停止定时器，用clearInterval
                  clearInterval(stop);
              }
              obj.style.left = obj.offsetLeft + num + 'px';

          }, 1000);
      }
      function animate2(obj, target, num) {
          var stop = setInterval(function() {
              if (obj.offsetTop &gt;= target) {
                  // 停止动画，本质就是停止定时器，用clearInterval
                  clearInterval(stop);
              }
              obj.style.top = obj.offsetTop + num + 'px';

          }, 1000);
      }
      var div = document.querySelector('div');
      var span = document.querySelector('span');
      // 调用函数
      animate1(div, 100, 10); //传递对象，目标距离，一次走多少像素
      animate2(span, 100, 10);
  &lt;/script&gt;</code></pre>
            </li>
            <li>
              动画函数给不同元素记录不同定时器
              <ol>
                <li>如果多个元素都使用这个动画函数，每次都要var声明定时器。我们可以给不同的元素使用不同的定时器 （自己专门用自己的定时器）。</li>
                <li>
                  核心原理：利用JS是一门动态语言，可以很方便的给当前对象添加属性。
                  <pre><code class="language-html line-numbers">  &lt;div&gt;&lt;/div&gt;
  &lt;span&gt;&lt;/span&gt;
  &lt;script&gt;&gt;
      // var obj={ }；
      // obj.name='andy'；
      // 这里利用对象，
      function animate(obj, target, num) {
          obj.stop = setInterval(function() {
              if (obj.offsetLeft &gt;= target) {
                  // 停止动画，本质就是停止定时器，用clearInterval
                  clearInterval(obj.stop);
              }
              obj.style.left = obj.offsetLeft + num + 'px';
          }, 30);
      }
      var div = document.querySelector('div');
      var span = document.querySelector('span');
      //调用函数
      animate(div, 200, 10);          // 传递对象，目标距离，一次走多少像素
      animate(span, 100, 10);
  &lt;/script&gt;

  // 有一个bug:  当有一个按钮来控制这个动画时，一直按按钮，动画速度就越快，因为开启了太多的定时器
  // 解决方案：   让我们元素只有一个定时器执行, 就得当点击的时候先清除原先有的定时器，然后再执行新的定时器
  &lt;button&gt;开始&lt;/button&gt;
  &lt;div&gt;&lt;/div&gt;
  &lt;script&gt;&gt;
      // var obj={ }；
      // obj.name='andy'；
      // 这里利用对象，
      function animate(obj, target) {
          clearInterval(obj.stop);    // 当点击按钮调用动画的函数，就先清除一次原先的定时器，再去执行定时器
          obj.stop = setInterval(function() {
              if (obj.offsetLeft &gt;= target) {
                  // 停止动画，本质就是停止定时器，用clearInterval
                  clearInterval(obj.stop);
              }
              obj.style.left = obj.offsetLeft + 1 + 'px';
          }, 30);
      }
      var div = document.querySelector('div');
      var span = document.querySelector('span');
      // 调用函数
      var btn = document.querySelector('button');
      btn.addEventListener('click', function() {
          animate(div, 200);          // 传递对象，目标距离，一次走多少像素
      })
  &lt;/script&gt;</code></pre>
                </li>
              </ol>
            </li>
            <li>
              缓动动画： 缓动动画就是让元素运动速度有所变化，最常见的是让速度慢慢停下来
              <pre><code class="language-html line-numbers"> /* 匀速动画：
      匀速动画就是 盒子当前的位置 + 固定的值 10
    缓动动画：
      缓动动画就是 盒子当前的位置 + 变化的值 （（目标值 - 现在的位置）/ 10 ）
    思路：
      让盒子每次移动的距离慢慢变小，速度就会慢慢落下来。
      核心算法： （目标值 - 现在的位置）/ 10 做为每次移动的距离步长 ，步长可以改变
      停止的条件是：让当前盒子位置等于目标位置就停止定时器  */

  &lt;button&gt;开始&lt;/button&gt;
  &lt;div&gt;&lt;/div&gt;
  &lt;script&gt;
      // var obj={ }；
      // obj.name='andy'；
      // 这里利用对象，
      function animate(obj, target) {
          clearInterval(obj.stop); //当点击调用动画的函数，就先清除一次原先的定时器，再去执行定时器
          obj.stop = setInterval(function() {

           删  var step = (target - obj.offsetLeft) / 10;              // 1、 加一个变量 ，这里不取整会出现像素偏差问题
           删  var step = Math.ceil((target - obj.offsetLeft) / 10);   // 3、注意要取整  但是负值时 是会出错
               //所以以上代码  要改成  下面的代码
           *  var step = (target - obj.offsetLeft) / 10;
              //判断，step 大于0吗？如果大于执行ceil，否则执行floor
                step = step &gt; 0 ?  Math.ceil(step):Math.floor(step);

              if (obj.offsetLeft == target) {                         // 这里可以大于，但是一般写等于，没有必要大于
                  // 停止动画，本质就是停止定时器，用clearInterval
                  clearInterval(obj.stop);
              }
                  // 修改，把每次加 1 这个步长 改为缓动慢慢变小的值
                  // 也就是步长公式：（目标值 - 现在的位置）/ 10   步长值要写道定时器的里面
               删  obj.style.left = obj.offsetLeft + (target - obj.offsetLeft) / 10 + 'px';  //自己写的
               *   obj.style.left = obj.offsetLeft + step + 'px';     // 2、老师写的

          }, 30);                                                     // 推荐改成 15  然后步长大一些看到效果更好
      }
      var div = document.querySelector('div');
      var span = document.querySelector('span');
      // 调用函数
      var btn = document.querySelector('button');
      btn.addEventListener('click', function() {
          animate(div, 200);                                          // 传递对象，目标距离，一次走多少像素
      })
  &lt;/script&gt;</code></pre>
            </li>
            <li>
              动画函数添加 回调函数
              <pre><code class="language-js line-numbers">  /* 回调函数原理
      函数可以作为一个参数。将这个函数作为参数传到另一个函数里面，当那个函数执行完之后， 再执行传进去的这个函数，这个过程就叫做回调。
    回调函数写的位置
      定时器结束的位置。

  // var obj={ }；
  // obj.name='andy'；
  // 这里利用对象，
  function animate(obj, target, callback) {
      //这里callback是形参，等于  callback =  传入实参的function(){}
      clearInterval(obj.stop);                                  // 当点击调用动画的函数，就先清除一次原先的定时器，再去执行定时器
      obj.stop = setInterval(function() {
          var step = (target - obj.offsetLeft) / 10;
          step = step > 0 ? Math.ceil(step) : Math.floor(step); // 判断，step 大于0吗？如果大于执行ceil，否则执行floor
          if (obj.offsetLeft == target) {
              // 停止动画，本质就是停止定时器，用clearInterval
              clearInterval(obj.stop);
              //回调函数写到定时器结束里面
              if (callback) {                                   // 有callback这个回调函数参数吗
                  callback();                                   // 没有就不调用，有就调用
              }
          }
          // 修改，把每次加 1 这个步长改为缓动慢慢变小的值，
          // 也就是步长公式：（目标值 - 现在的位置）/ 10
          obj.style.left = obj.offsetLeft + step + 'px';
      }, 15);                                                   // 推荐改成 15
  }
  var div = document.querySelector('div');
  //调用函数
  var btn500 = document.querySelector('.btn500');
  var btn800 = document.querySelector('.btn800');
  btn500.addEventListener('click', function() {
      animate(div, 500, function() {                            // 传递对象，目标距离，一次走多少像素,回调函数
          div.style.backgroundColor = 'red';
      });
  })
  btn800.addEventListener('click', function() {
      animate(div, 800);                                        // 传递对象，目标距离，一次走多少像素，第三个实参可以为空
  })

    </code></pre>
            </li>
            <li>
              动画函数封装到单独JS 文件里面
              <ol>
                <li>因为以后经常使用这个动画函数，可以单独封装到一个 js 文件里面，使用的时候引用这个 js 文件即可。</li>
                <li>新建一个 animate.js</li>
              </ol>
              <pre><code class="language-js line-numbers">  function animate(obj, target, callback) {
    // console.log(callback);  callback = function() {}  调用的时候 callback()

    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        // 步长值写到定时器的里面
        // 把我们步长值改为整数 不要出现小数的问题
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            // 停止动画 本质是停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面
            // if (callback) {       // 如果有callback 传进来，那么我们就调用callback
            //     // 调用函数
            //     callback();
            // }
            callback && callback();  // 简单写法，callback 且 callback();  如果第一个表达式的值为真，则返回表达式2，&&也称为逻辑中断符
        }
        // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}</code></pre>
            </li>
            <li>
              案例：仿京东
              <pre><code class="language-html line-numbers">  &lt;style&gt;
    .sliderBar {position: fixed;right: 0;bottom: 100px;width: 40px;height: 40px;text-align: center;
      line-height: 40px;cursor: pointer;color: #fff;
    }
    .con {position: absolute;left: 0;top: 0;width: 200px;height: 40px;background-color: rgb(207, 47, 207);
        z-index: -199;
    }
  &lt;/style&gt;
  &lt;script src="js/animate.js"&gt;&lt;/script&gt;    // 注意要引入动画的js 文件
  &lt;/head&gt;
  &lt;body&gt;
  &lt;div class="sliderBar"&gt;
      &lt;span&gt;←&lt;/span&gt;
      &lt;div class="con"&gt;问题反馈&lt;/div&gt;
  &lt;/div&gt;
  &lt;script&gt;
      // 当鼠标离开sliderBar盒子就会让 con 这个盒子滑动到右侧
      var sliderBar = document.querySelector('.sliderBar');
      var con = document.querySelector('.con');
      // 当鼠标经过sliderBar盒子就会让 con 这个盒子滑动到左侧
      sliderBar.addEventListener('mouseenter', function() {
          animate(con, -160, function() {
              // 当动画执行完毕，把左箭头改为右键头
              sliderBar.children[0].innerHTML = '→';   // 当结束移动时，改变箭头
          });
      });
      sliderBar.addEventListener('mouseleave', function() {
          animate(con, 0);
          sliderBar.children[0].innerHTML = '←';       // 当鼠标离开，改会左箭头
      });
  &lt;/script&gt;</code></pre>
            </li>
          </ul>
          <p>网页轮播图</p>
          <ol>
            <li>轮播图也称为焦点图，是网页中比较常见的网页特效。盒子已经固定大小了，如果此时加浮动， 会没有效果，需要手动修改ul 的宽度 %</li>
            <li>
              框架
              <ul>
                <li>大盒子装着轮播图，里面有左箭头和右箭头，底下定位三个小圆点</li>
                <li>放个ul ，ul 下装了三个li ，ul宽度需要超过能装下li 的宽度，才能浮动起来</li>
              </ul>
            </li>
            <li>
              需求
              <ul>
                <li>鼠标放上 才会显示左右箭头，鼠标离开，影藏左右箭头</li>
                <li>鼠标点击，切换（移动）图片 ，小圆点也要进行切换，并且点击小圆点可以实现切换效果</li>
                <li>鼠标离开，轮播图会自动播放，鼠标经过，停止轮播，切换手动</li>
              </ul>
            </li>
            <li>
              分析
              <ul>
                <li>因为js较多，我们单独新建文件夹，再新建文件，引入页面中。</li>
                <li>
                  此时需要添加 load 事件。
                  <pre><code class="language-js line-numbers">  window.addEventListener('load', function() {})</code></pre>
                </li>
                <li>左右箭头 display显示影藏</li>
                <li>动态生成小圆圈</li>
                <li>核心思路：小圆圈的个数要跟图片张数一致</li>
                <li>所以首先先得到ul 里面图片的张数（图片放入li 里面，所以就是 li 的个数）</li>
                <li>利用循环动态生成小圆圈（这个小圆圈要放入ol里面）</li>
                <li>创建节点 createElement（' li '）</li>
                <li>插入节点ol.appendChild（ li ）</li>
                <li>第一个小圆圈需要添加current类</li>
                <li>小圆圈的排他思想</li>
                <li>点击当前小圆圈，就添加current类</li>
                <li>其余的小圆圈就移除这个current类</li>
                <li>点击小圆圈滚动图片</li>
                <li>此时用到animate动画函数，将s文件引入（注意，因为index.js依赖animate.js所以，animatejs要写到index.js上面）</li>
                <li>使用动画函数的前提，该元素必须有定位</li>
                <li>注意是u山移动而不是小li</li>
                <li>滚动图片的核心算法：点击某个小圆圈，就让图片滚动 小圆圈的索引号 x 图片的宽度 = ul 移动负值距离</li>
                <li>此时需要知道小圆圈的索引号，我们可以在生成小圆圈的时候，给它设置一个自定义属性，点击的时候获取这个自定义属</li>
                <li>点击右侧按钮一次，就让图片滚动一张。</li>
                <li>声明一个变量num，点击一次，自增1，让这个变量乘以图片宽度，就是ul的滚动距离。</li>
                <li>因为li 加了定位，所以脱离文档流，左右箭头层级需要提高（z-index）</li>
                <li>图片无缝滚动原理</li>
                <li>把ul第一个li复制一份，放到ul的最后面</li>
                <li>当图片滚动到克隆的最后一张图片时，让u山快速的、不做动画的跳到最左侧：left为0</li>
                <li>同时num赋值为0，可以从新开始滚动图片了</li>
                <li>代码进行 克隆第一张图片</li>
                <li>克隆ul第一个li cloneNode（）加true深克隆复制里面的子节点false浅克隆</li>
                <li>添加到u山最后面appendChild</li>
                <li>点击右侧按钮，小圆圈跟随变化</li>
                <li>最简单的做法是再声明一个变量circle，每次点击自增1，注意，左侧按钮也需要这个变量，因此要声明全局变量。</li>
                <li>自动播放功能</li>
                <li>添加一个定时器</li>
                <li>自动播放轮播图，实际就类似于点击了右侧按钮</li>
                <li>此时我们使用手动调用右侧按钮点击事件arrow_r.click（）</li>
              </ul>
              <pre><code class="language-js line-numbers">  // js animate动画代码
  function animate(obj, target, callback) {
    clearInterval(obj.stop);
    obj.stop = setInterval(function() {
        var step = (target - obj.offsetLeft) / 10;
        step = step &gt; 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.stop);
            callback && callback();
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
  }

  // js 动画代码
  &lt;!-- 因为index.js 依赖animate.js，所以要卸载index.js的上面 --&gt;
    &lt;script&gt; src="js/animate.js"&gt;&lt;/script&gt;
    &lt;script&gt; src="js/index.js"&gt;&lt;/script&gt;
    &lt;style&gt;
        * {margin: 0;padding: 0;box-sizing: border-box;}
        .focus {position: relative;width: 350px;height: 197px;border: 1px solid blue;margin: 0 auto;overflow: hidden;}
        .focus ul {position: absolute;top: 0;left: 0; width: 500%;
            /* 手动修改ul宽度，让里面的li能浮动起来，因为图片超出会换行 */
        }
        .focus ul li {float: left;/* 浮动图片*/}
        .btnL,
        .btnR {display: none;position: absolute;width: 30px;height: 30px;text-align: center;line-height: 30px;
            background-color: rgba(238, 255, 4, 0.801);text-decoration: none;color: black;
            /* ul加了定位,所以按钮因为层级不够,填2就可以了 */z-index: 2;}
        .btnL {top: 83.5px;left: 0;}
        .btnR {top: 83.5px;right: 0;}
        li {list-style: none;}
        .circle {position: absolute;bottom: 10px;left: 10px;}
        .circle li {display: inline-block;width: 7px;height: 7px;border: 1px solid rgb(248, 168, 168);border-radius: 7px;
            margin-right: 2px;}
        .current {background-color: rgb(255, 126, 126);}
    &lt;/style&gt;
  &lt;/head&gt;

  &lt;body&gt;
    &lt;div class="focus"&gt;
        &lt;!-- 按钮 --&gt;
        &lt;a&gt; href="javascript:;" class="btnL"&gt;&lt;&lt;/a&gt;
        &lt;a&gt; href="javascript:;" class="btnR"&gt;&gt;&lt;/a&gt;
        &lt;!-- 核心滚动区域 --&gt;
        &lt;ul&gt;&lt;li&gt;&lt;a&gt; href=""&gt;&lt;img src="images/img1.png" alt=""&gt;&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href=""&gt;&lt;img src="images/img2.png" alt=""&gt;&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a&gt; href=""&gt;&lt;img src="images/img3.png" alt=""&gt;&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
        &lt;!-- 小圆点 --&gt;
        &lt;ol&gt; class="circle"&gt;
        &lt;/ol&gt;
    &lt;/div&gt;
  //------------------------------------------------------------------------

  // js 代码
  window.addEventListener('load', function() {
    var focus = document.querySelector('.focus');
    var btnL = document.querySelector('.btnL');
    var btnR = document.querySelector('.btnR');
    var focusWidth = focus.offsetWidth;
    // 3、鼠标经过 离开 显示和影藏箭头
    focus.addEventListener('mouseenter', function() {
        btnL.style.display = 'block';
        btnR.style.display = 'block';
        clearInterval(timer);                         // 21、鼠标经过 停止定时器
        timer = null;                                 // 22、清空定时器变量
    });
    focus.addEventListener('mouseleave', function() {
        btnL.style.display = 'none';
        btnR.style.display = 'none';
        // 23 自动播放轮播图, 实际类似于点击了右侧按钮，此时我们使用手动调用右侧按钮点击事件
        timer = setInterval(function() {
            btnR.click();                             // 鼠标离开，触发手动点击事件
        }, 2000)
    });
    // 4、删掉小圆点，js动态添加 （ol里面的li  取决于 ul里li的个数）
    // 4.1因为页面太多的ul ，所以限制只能是focus里面的ul
    var ul = focus.querySelector('ul'); //获取ul
    var ol = focus.querySelector('.circle'); //获取ol
    // 4.2for 循环，i &lt; ul下li的个数
    for (var i = 0; i &lt; ul.children.length; i++) {
        // 4.3创建li
        var li = document.createElement('li');
        // 7.3 因为小圆点没有索引号，所以需要自定义属性来做,设置index属性，值是i,i根据循环来获取值 =ul&gt;li的个数
        li.setAttribute('index', i);
        // 4.4把li 插入ol
        ol.appendChild(li);
        // 6、ol 里面li 点击谁，谁就加上样式current类名，排他思想，生成的时候同时绑定点击事件
        li.addEventListener('click', function() {
            // 6.1干掉所有人把所有的li清除current类名
            // 6.1.1 for循环选出 ol下孩子的长度
            for (var i = 0; i &lt; ol.children.length; i++) {
                ol.children[i].className = '';
            }
            // 6.2留下我自己  当前li 设置类名(谁调用了，就给谁绑定)
            this.className = 'current';
            // 7、做动画必须要有定位，谁做给谁加定位,这里注意是ul装着li&gt;有img。这里给ul做动画
            // 7.1 animate(obj, target, callback)
            // 7.2 ul的移动距离公式： 小圆点索引号 * 图片宽度(注意宽度是负值)
            // 7.4 当点击某个ol下的li，就拿到当前li的自定义 index属性值 ，也就是索引号
            var index = this.getAttribute('index');
            // 12 当点击了某个ol下的li，就要把这个li的索引号给 num
            num = index;
            // 13 当点击了某个ol下的li，就要把这个li的索引号给 circle
            circle = index;
            // 12+13 可以合并写法： num = circle = index;
            // 7.5 var focusWidth = focus.offsetWidth; 方便后续按钮需要这个变量，所以拿到函数外，全局变量
            animate(ul, -index * focusWidth);
        })
    }
    // 5、让ol里面第一个小圆圈添加样式current类，这句话如果不写，那么刷新页面会没有样式，执行步骤6后才有
    ol.children[0].className = 'current';
    // 10 克隆第一张图片放到ul最后面
    // 10.2 因为是在创建小圆点后面 添加克隆的li，所以小圆点不会增加
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first); //10.1ul 添加一个 first（深克隆，克隆ul下的第一个li标签）
    // 8、 css层级先打开，然后点击右侧按钮，让图片滚动一张
    // 8.1 声明一个变量，每点击一个，进行++
    var num = 0;
    // 11 点击右侧按钮，小圆点跟随变化,控制小圆点的播放
    var circle = 0;
    var flag = true;                                   // 25、 flag  节流阀  旅馆房间门已经打开了
    btnR.addEventListener('click', function() {
        if (flag) {                                    // 25.1 判断，打开，那么我就住进去
            flag = false;                              // 25.2  关闭节流阀，仅能住一个人，所以关门
            // 9、图片无缝滚动
            // 9.1 如果走到了最后一张克隆出来的图片。此时ul要快速复原，left 值改为 0
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            // 8.2因为 步骤7.5操作了，让focusWidth拿到函数外面，作为全局变量，这里就可以直接拿来用
            // 8.3 注意点击后，图片是往左边移动，所以这里是负值
            animate(ul, -num * focusWidth, function() { // 利用回调函数
                flag = true;                           // 25.3打开节流阀。动画结束了，相当于已经睡醒了，打开门
            });
            //11.1 每次点击，circle就 ++
            circle++;
            // 11.4 添加判断条件，防止点击超过图片数量，如果circle==3 说明走道最后克隆的这张图片了
            // if (circle == ol.children.length) {
            //     circle = 0;                         // 11.5 我们就复原
            // }
            // 11.4 用三元表达式来写 优化代码
            // circle等于ol孩子的长度吗，如过等于，就把circle=0赋值给circle,如果不等于,就等于自身
            circle = circle == ol.children.length ? circle = 0 : circle;
            // // 11.2 先清除其余小圆点的current类名
            // for (var i = 0; i &lt; ol.children.length; i++) {
            //     ol.children[i].className = '';
            // }
            // // 11.3 留下当前小圆圈的current类名
            // ol.children[circle].className = 'current';
            // 12.2+12.3 已经被封装函数了，所以直接调用
            circleChange();
        }
    })
    // 14、左侧按钮，复制右侧按钮后，修改左侧功能
    btnL.addEventListener('click', function() {
            if (flag) { //同理步骤25 节流阀
                flag = false;
                // 16、判断，如果num ==0，点击后肯定是走到最后一张
                if (num == 0) {
                    // ul.style.left = (ul.children.length - 1) * focusWidth + 'px';
                    // num = ul.children.length - 1;
                    num = ul.children.length - 1;
                    ul.style.left = -num * focusWidth + 'px'; // 16.1 索引号 * 盒子的宽度 （不要忘记加单位）
                }
                num--;                                        // 15、因为反向，所以这里--
                animate(ul, -num * focusWidth);
                // 17、小圆点要--
                circle--;
                // 18 添加判断条件，如果circle &lt; 0 说明第一张图（2）
                // if (circle &lt; 0) {
                //     circle = ol.children.length - 1;
                // }
                // 18 优化代码：circle小于0吗，如过小于，就把ol.children赋值给circle,如果不大于,就等于自身
                circle = circle &lt; 0 ? ol.children.length - 1 : circle;
                circleChange();
            }
        })
        // 19 把重复代码封装函数，然后调用
    function circleChange() {
        // 11.2 先清除其余小圆点的current类名
        for (var i = 0; i &lt; ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 11.3 留下当前小圆圈的current类名
        ol.children[circle].className = 'current';
    }
    // 20 自动播放轮播图, 实际类似于点击了右侧按钮，此时我们使用手动调用右侧按钮点击事件
    var timer = this.setInterval(function() {
        btnR.click(); //触发手动点击事件
    }, 2000)
  })

  // 细节优化：装ul的宽度是js自动获取

  window.onload = function () {
    var imgList = document.getElementById("imgList");   // 获取imgList
    var imgArr = document.getElementsByTagName("img");  // 获取页面中所有的img标签
    imgList.style.width = 520 * imgArr.length + "px";   // 设置imgList的宽度
  }

  // 点击分页器js动态水平居中
  // 设置导航按钮居中
  var navDiv = document.getElementById("navDiv");       // 获取naVDiv
  var outer = document.getElementById("outer");         // 获取outer
  navDiv.style.left = (outer.offsetWidth - navDiv.offsetWidth) / 2 + "px"; // 设置navDiv的left值</code></pre>
            </li>
          </ol>
          <p>节流阀</p>
          <ul>
            <li>防止轮播图按钮连续点击造成播放过快</li>
            <li>节流阀目的：当上一个函数动画内容执行完毕，再去执行下一个函数动画，让事件无法连续触发。</li>
            <li>核心实现思路：利用回调函数，添加一个变量来控制，锁住函数和解锁函数。</li>
            <li>
              开始设置一个变量var flag=true；
              <ol>
                <li>if（flag）{flag=false；do something } 关闭水龙头</li>
                <li>利用回调函数动画执行完毕，flag=true 打开水龙头</li>
              </ol>
            </li>
            <li>
              返回顶部
              <ol>
                <li>Window. scroll (x , y) 要到达网页的坐标， X Y的值不跟单位</li>
                <li>带有动画的返回顶部</li>
                <li>此时可以继续使用我们封装的动画函数</li>
                <li>只需要把所有的left相关的值改为跟页面垂直滚动距离相关就可以了</li>
                <li>页面滚动了多少，可以通过window.pagerOffset得到 ，而不是 offsetTop</li>
                <li>最后是页面滚动，使用window.scroll（x .y）</li>
              </ol>
            </li>
            <li>
              筋斗云案例
              <ol>
                <li>* 鼠标经过某个li，筋斗云跟这到当前 li 位置</li>
                <li>* 鼠标离开这个li，筋斗云复原为原来的位置</li>
                <li>* 鼠标点击了某个li，筋斗云就会留在点击这个 li 的位置</li>
                <li>利用动画函数做动画效果</li>
                <li>原先筋斗云的起始位置是0</li>
                <li>鼠标经过某个i，把当前i的offsetLeft位置做为目标值即可</li>
                <li>鼠标离开某个i，就把目标值设为0</li>
              </ol>
              <pre><code class="language-html line-numbers">  &lt;style&gt;
    * {padding: 0;margin: 0;}
    ul {list-style: none;}
    .nav {position: relative;width: 600px;height: 50px; margin: 0 auto;}
    .nav ul {position: absolute;}
    .nav li a {color: #333;text-decoration: none;display: inline-block;height: 42px;}
    .nav ul li {float: left;width: 99px;height: 48px;text-align: center;line-height: 50px;}
    .style1 { position: absolute;top: 0;left: 0;width: 99px;height: 48px;
              background-color: rgba(228, 172, 172, 0.596);}
  &lt;/style&gt;
  &lt;script src="js/animate.js"&gt;&lt;/script&gt;   //动画函数自己引入就可以了
  &lt;script&gt;
      window.addEventListener('load', function() {
          var style1 = document.querySelector('.style1');
          var nav = document.querySelector('.nav');
          var lis = nav.querySelectorAll('li');
          var current = 0;
          //绑定事件
          for (var i = 0; i &lt; lis.length; i++) {
              // (1) 鼠标经过把当前小li 的位置做为目标值
              lis[i].addEventListener('mouseenter', function() {
                  animate(style1, this.offsetLeft);
              });
              // (2) 鼠标离开就回到起始的位置
              lis[i].addEventListener('mouseleave', function() {
                  animate(style1, current);
              });
              // (3) 当我们鼠标点击，就把当前位置做为目标值
              lis[i].addEventListener('click', function() {
                  current = this.offsetLeft;
              });
          }
      })
  &lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;div class="nav"&gt;
      &lt;span class="style1"&gt;&lt;/span&gt;
      &lt;ul&gt;
          &lt;li&gt;&lt;a href="#"&gt;效果1&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#"&gt;效果2&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#"&gt;效果3&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#"&gt;效果4&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#"&gt;效果5&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#"&gt;效果6&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
  &lt;/div&gt;
  &lt;/body&gt;</code></pre>
            </li>
          </ul>
          <p>移动端网页特效</p>
          <ul>
            <li>移动端浏览器兼容性较好，我们不需要考虑以前JS的兼容性问题，可以放心的使用原生JS书写效果， 但是移动端也有自己独特的地方。比如触屏事件touch（也称触摸事件），Android和IOS都有。</li>
            <li>
              touch对象代表一个触摸点。触摸点可能是一根手指，也可能是一根触摸笔。角触屏事件可响应用户手指 （或角触控笔）对屏幕或者触控板操作。
              <pre><code class="language-js line-numbers">  // touchstart           手指触摸到一个DOM元素时触发
  // touchmove            手指在一个DOM元素上滑动时触发
  // touchend             手指从一个DOM元素上移开时触发

  div.addEventLister(' touchstart / touchmove / touchend', function () {
    // 添加处理程序
  })</code></pre>
            </li>
            <li>
              触摸事件对象
              <pre><code class="language-js line-numbers">  /*
    TouchEvent 是一类描述手指在触莫平面（角触摸屏、触摸板等）的状态变化的事件。
    这类事件用于描述一个或多个触点，使开发者可以检测触点的移动，触点的增加和减少，等等
    touchstart、touchmove、touchend三个事件都会各自有事件对象。

    触摸事件对象重点我们看三个常见对象列表：
    touches          正在触摸屏幕的所有手指的一个列表协
    targetTouches    正在触摸当前DOM元素上的手指的一个列表
    changedTouches   手指状态发生了改变的列表，从无到有，从有到无变化
  */

  div.addEventLister(' touchstart / touchmove / touchend', function (e) {
    console.log(e);
  })

  // 当我们手指离开屏幕的时候，就没有了 touches 和 targetTouches 列表，但是changedTouches 还有
  // 因为经常触摸元素，所以 targetTouches 最常用</code></pre>
            </li>
            <li>
              移动端拖动元素
              <ol>
                <li>touchstart、touchmove、touchend可以实现拖动元素</li>
                <li>但是拖动元素需要当前手指的坐标值我们可以使用 targetTouches[0]里面的pageX和pageY</li>
                <li>移动端拖动的原理：手指移动中，计算出手指移动的距离。然后用盒子原来的位置+手指移动的距离</li>
                <li>手指移动的距离：手指滑动中的位置减去手指刚开始触摸的位置</li>
              </ol>
              <pre><code class="language-html line-numbers"> /* 拖动元素三步曲：
      触摸元素touchstart：获取手指初始坐标，同时获得盒子原来的位置
      移动手指touchmove：计算手指的滑动距离，并且移动盒子
      离开手指touchend：注意：手指移动也会触发滚动屏幕所以这里要阻止默认的屏幕滚动e.preventDefault(); */

      &lt;div&gt;&lt;/div&gt;
  &lt;script&gt;&gt;
      var div = document.querySelector('div');
      // 因为等会会用来计算，所以声明一个全局变量
      var startX = 0;                       // 获取手指初始坐标
      var startY = 0;
      var X = 0;                            // 获取盒子原来的位置
      var Y = 0;
      div.addEventListener('touchstart', function(e) {
          // 怎么获得，就是添加事件对象的第一个手指的 pageX和Y 手指点击的坐标
          startX = e.targetTouches[0].pageX;
          startY = e.targetTouches[0].pageY;
          X = this.offsetLeft;              // 获取盒子距离左右的距离
          Y = this.offsetTop;
      })
      div.addEventListener('touchmove', function(e) {
          // 计算手指的移动距离  = 手指滑动中的位置 -  手指刚开始触摸的位置
          // 声明内部计算变量
          var moveX = e.targetTouches[0].pageX - startX;
          var moveY = e.targetTouches[0].pageY - startY;
          // 移动盒子，盒子原来的位置 + 手指移动的距离
          this.style.left = X + moveX + 'px';
          this.style.top = Y + moveY + 'px';
          e.preventDefault();
      })
  &lt;/script&gt;</code></pre>
            </li>
          </ul>
        </div>
      </el-card>
      <el-card id="part2" shadow="hover">
        <h2>其他拓展</h2>
        <div class="ls-cot">
          <p>classList 属性</p>
          <ul>
            <li>classList属性是HTML5新增的一个属性，返回元素的类名。但是ie10以上版本支持。</li>
            <li>
              该属性用于在元素中添加，移除及切换CSS类。有以下方法添加类： 注意，类名不用加点 .
              <pre><code class="language-js line-numbers">  // 添加类：
  element.classlist.add('类名');

  // 删除类：
  element.classlist.remove('类名');

  // 切换类： 如果你有这个类名我就删除，没有这个类，我就给你添加上，相当于取反
  element.classlist.toggle('类名');

  // 检查类：
  element.classList.contains("检查元素是否包含此class类名")

  // 替换类：
  element.classList.replace("原有类名","需要替换的类名") </code></pre>
            </li>
          </ul>
          <p>移动端轮播图</p>
          <ul>
            <li>
              移动端轮播图功能和基本PC端一致。
              <ol>
                <li>可以自动播放图片</li>
                <li>手指可以拖动播放轮播图</li>
                <li>结构： 和pc 端不一样，因为左拉会显示最后一张也就是第三张图片所以需要克隆两张， 1 和 3，3放在最前面，1放在最后面</li>
              </ol>
            </li>
            <li>注意轮播图中，最左边图片3如果不走自身宽度的负值，那么会直接显示第三张的图片，所以要先走自身的宽度， 注意是负值，这样一打开才是正确的图1</li>
            <li>
              因为图片的宽度是铺满的，所以让ul走屏幕的宽度就可以了。-100%
              <pre><code class="language-css line-numbers">  .focus ul {
    /* overflow: hidden; */
    width: 500%;
    margin-left: -100%;  /* 不添加的话，会显示复制出来的第三张 */
  }</code></pre>
            </li>
            <li>
              分析：
              <ol>
                <li>自动播放功能</li>
                <li>开启定时器</li>
                <li>移动端移动，可以使用translate移动</li>
                <li>想要图片优雅的移动，请添加过渡效果</li>
                <li>自动播放功能-无缝滚动</li>
                <li>注意，我们判断条件是要等到图片滚动完毕再去判断，就是过渡完成后判断</li>
                <li>此时需要添加检测过渡完成事件 transitionend</li>
                <li>判断条件：如果索引号等于3说明走到最后一张图片，此时索引号要复原为0</li>
                <li>此时图片，去掉过渡效果，然后移动</li>
                <li>如果索引号小于0，说明是倒着走，索引号等于2</li>
                <li>小圆点跟随变化效果</li>
                <li>把ol里面li带有current类名的选出来去掉类名 remove</li>
                <li>让当前索引号的 li 加上current add</li>
                <li>但是，是等着过渡结束之后变化，所以这个写到transitionend事件里面</li>
                <li>手指滑动轮播图</li>
                <li>本质就是u山跟随手指移动，简单说就是移动端拖动元素</li>
                <li>触摸元素touchstart：获取手指初始坐标</li>
                <li>移动手指touchmove：计算手指的滑动距离，并且移动盒子</li>
                <li>如果移动距离小于某个像素就回弹原来位置</li>
                <li>如果移动距离大于某个像素就上一张下一张滑动。</li>
              </ol>
              <pre><code class="language-html line-numbers">  &lt;style&gt;
    * {padding: 0;margin: 0;}
    .clearfix::before,
    .clearfix::after {content: "";display: table;}
    .clearfix::after {clear: both;
    }
    li {list-style: none;}
    .focus {position: relative;overflow: hidden;}
    .focus img {width: 100%;}
    .focus ul { /* overflow: hidden; */width: 500%;margin-left: -100%; /*不添加的话，会显示复制出来的第三张*/}
    .focus ul li { float: left;width: 20%; }
    .focus .circle { position: absolute;bottom: 8px;right: 15px;}
    .focus .circle li {display: inline-block;width: 8px;height: 8px;background-color: rgb(255, 239, 16);
        list-style: none; border-radius: 8px;transition: all .3s; /* 加过渡效果需要两个颜色都一样才好看 */}
    .focus .circle li.current {width: 15px;background-color: rgb(255, 239, 16);}
  &lt;/style&gt;
  &lt;script src="js/index.js"&gt;&lt;/script&gt;

  &lt;div class="focus"&gt;
      &lt;ul class="clearfix"&gt;
          &lt;li&gt;&lt;img src="images/advertisement3.png" alt=""&gt;&lt;/li&gt;
          &lt;li&gt;&lt;img src="images/advertisement1.png" alt=""&gt;&lt;/li&gt;
          &lt;li&gt;&lt;img src="images/advertisement2.png" alt=""&gt;&lt;/li&gt;
          &lt;li&gt;&lt;img src="images/advertisement3.png" alt=""&gt;&lt;/li&gt;
          &lt;li&gt;&lt;img src="images/advertisement1.png" alt=""&gt;&lt;/li&gt;
      &lt;/ul&gt;
      &lt;ol class="circle"&gt;
          &lt;li class="current"&gt;&lt;/li&gt;
          &lt;li&gt;&lt;/li&gt;
          &lt;li&gt;&lt;/li&gt;
      &lt;/ol&gt;
  &lt;/div&gt;

  //----------------------------------------------------------------------
  &lt;script&gt;
  window.addEventListener('load', function() {
      // 1、获取元素
      var focus = document.querySelector('.focus');
      var ul = focus.children[0];                                     // 1.1、focus的第一个孩子 ul
      var w = focus.offsetWidth;                                      // 1.2 获取focus 的宽度
      var ol = focus.children[1];                                     // 7.1 获取focus下的第二个孩子 ol
      var index = 0;                                                  // 2、添加一个索引号变量
      var timer = setInterval(function() {
          index++;                                                    // 2.1 定时器开启，每隔两面，索引号+1
          var translateX = -index * w;                                // 3、让索引号 * 图片的宽度 ，会等于移动的距离，注意往左走是负值
          ul.style.transition = 'all .3s';                            // 4、添加css3 的过度效果
          ul.style.transform = 'translateX(' + translateX + 'px)';    // 3.1、加上CSS3移动效果
      }, 2000);
      // 5、等过渡完成之后，再去判断 ，监听过度完成的时间 transitionend，谁做判断，ul
      ul.addEventListener('transitionend', function() {
          // 6 无缝滚动，添加判断条件
          if (index &gt;= 3) {                                         // 6.1  如果滚动到了第三张
              index = 0;                                               // 6.2 索引号清零，回到第一张
              ul.style.transition = 'none';                            // 6.3 去掉过渡效果
              var translateX = -index * w;                             // 6.4 但是还是要移动图片，所以利用最新的索引号* 宽度
              ul.style.transform = 'translateX(' + translateX + 'px)'; // 6.5、加上CSS3移动效果
          } else if (index &lt; 0) {                                   // 6.5  如果索引号小于0，滚动到了最后一张，也就是克隆出来的第三张
              index = 2;                                               // 6.6 索引号就等于第三长，第三张的索引号是2
              ul.style.transition = 'none';                            // 6.7 去掉过渡效果
              var translateX = -index * w;                             // 6.8 但是还是要移动图片，所以利用最新的索引号* 宽度
              ul.style.transform = 'translateX(' + translateX + 'px)'; // 6.9、加上CSS3移动效果
          }
          // 7.2、小圆点跟随变化效果,把ol下li带有current类名给选出来,. 然后删除
          ol.querySelector('li.current').classList.remove('current');
          // 7.3 选出当前li，让当前li 添加上 current 类
          ol.children[index].classList.add('current');
      });
      // 8、手指滑动轮播图
      var startX = 0;                                                  // 8.2 声明一个变量接收 手指的坐标值
      var moveX = 0;                                                   // 8.5 声明一个全局变量，存储移动的距离
      // 15  添加节流阀
      var flag = false;
      // 8.1 触摸 touchstart获取手指初始坐标
      ul.addEventListener('touchstart', function(e) {
          startX = e.targetTouches[0].pageX;                           // 8.3 获取到事件对象的第一个手指的坐标
          clearInterval(timer);                                        // 9 手指触摸的时候就停止定时器
      });
      // 8.3 移动手指 touchmove 计算手指滑动的距离，并且移动盒子
      ul.addEventListener('touchmove', function(e) {
          // 8.4 计算移动的距离 用移动后的坐标 减去 初始的坐标
          moveX = e.targetTouches[0].pageX - startX;
          // 8.6 移动盒子 =  盒子原来的位置 加上 手指移动的距离，声明变量translateX
          var translateX = -index * w + moveX;
          // 8.7手指是一点一点的拖，所以不需要做过度效果
          ul.style.transition = 'none';                                // 去掉过渡效果
          ul.style.transform = 'translateX(' + translateX + 'px)'; //加上CSS3移动效果
          // 15.1
          flag = true;                                                 // 22、如果 用户手指移动过，我们再去判断
          e.preventDefault();                                          // 阻止滚动屏幕的行为
      });
      ul.addEventListener('touchend', function(e) {
          // 21
          if (flag) {
              //10 如果移动距离大于50像素，就播放下一张或者上一张
              if (Math.abs(moveX) &gt; 50) {                          // 10.1不管是正的还是负数，只要大于就播放下一张或者上一张，所以要取绝对值
                  // 10.2 如果是右滑， 是手指滑动结束后的坐标 - 手指点下的初始坐标，大值减小值，正数，播放上一张
                  // 10.3 如果是左滑，是手指滑动结束后的坐标 - 手指点下的初始坐标，小值减大值，负数，播放下一章
                  if (moveX &gt; 0) {
                      index--;
                  } else {
                      index++;
                  }
                  // 11、 移动图片 用最新的index 值 * 图片的宽度
                  var translateX = -index * w;
                  ul.style.transition = 'all .3s';                     // 11.2 加上过渡效果
                  ul.style.transform = 'translateX(' + translateX + 'px)'; // 11.1、加上CSS3移动效果
              } else {
                  // 12、 如果小于了50像素，则回弹
                  var translateX = -index * w;
                  ul.style.transition = 'all .3s';                     // 12.2 加上过渡效果
                  ul.style.transform = 'translateX(' + translatex + 'px)'; // 12.1、加上CSS3移动效果
              }
              //13、手指离开的时候就重新开启定时器
          }
          clearInterval(timer);
          //14、开启定时器
          timer = setInterval(function() {
              index++;                                                 // 14.1 定时器开启，每隔两面，索引号+1
              var translateX = -index * w;                             // 14.2、让索引号 * 图片的宽度 ，会等于移动的距离，注意往左走是负值
              ul.style.transition = 'all .3s';                         // 14.3、添加css3 的过度效果
              ul.style.transform = 'translateX(' + translateX + 'px)'; // 14.4、加上CSS3移动效果
          }, 2000);
      })
  })
  &lt;/script&gt;</code></pre>
            </li>
          </ul>
          <p>返回顶部</p>
          <ul>
            <li>
              这里 Window.scroll（X， Y） Y值可以自定义，做锚点用很方便 X Y 是不跟单位的
              <pre><code class="language-js line-numbers">  goBack.addEventListener('click',function(){
    window.scroll(0,0);
  });</code></pre>
            </li>
            <li>
              也可以增加缓动效果：
              <ol>
                <li>带有动画的返回顶部</li>
                <li>此时可以继续使用我们封装的动画函数</li>
                <li>只需要把所有的left相关的值改为跟页面垂直滚动距离相关就可以了</li>
                <li>页面滚动了多少，可以通过 window.pageYOffset 得到</li>
              </ol>
              <pre><code class="language-js line-numbers">  goBack.addEventListener('click',function(){
      // 因为是窗口做动画，所以obj 改成 window ,目标值因为是最顶端，所以这里是0，回调函数就不需要了
      animate(window, 0);
  });

  function animate(obj, target, callback) {
    clearInterval(obj.stop);
    obj.stop = setInterval(function() {
        var step = (target - window.pageYOffset) / 10;
        step = step &gt; 0 ? Math.ceil(step) : Math.floor(step);
        if (window.pageYOffset == target) {
            clearInterval(obj.stop);
            callback && callback();
        }
        window.scroll(0, window.pageYOffset + step);
    }, 15);
  }</code></pre>
            </li>
          </ul>
          <p>click 延时300mm 解决方案</p>
          <ol>
            <li>动端click事件会有300ms的延时，原因是移动端屏幕双击会缩放（double tap to zoom）页面。</li>
            <li>
              解决方案1：
              <ul>
                <li>
                  禁用缩放。浏览器禁用默认的双击缩放行为并且去掉300ms的点击延迟。
                  <pre><code class="language-html line-numbers">  &lt;meta name="viewport" content=" user-scalable=no"&gt;</code></pre>
                </li>
                <li>
                  利用touch事件自己封装这个事件解决300ms延迟。 原理就是：
                  <ol>
                    <li>当我们手指触摸屏幕，记录当前角触摸时间</li>
                    <li>当我们手指离开屏幕，用离开的时间减去触摸的时间</li>
                    <li>如果时间小于150ms，并且没有滑动过屏幕，那么我们就定义为点击</li>
                  </ol>
                  <pre><code class="language-js line-numbers">  // 封装tap,解决click 300ms延时
  function tap(obj, callback) {
    var isMove = false;
    var startTime = 0;                                    // 记录触摸时候的时间变量
    obj.addEventListener('touchstart', function (e) {
      startTime = Date.now();                             // 记录触摸时间
    });
    obj.addEventListener('touchmove', function (e) {
      isMove = true;                                      // 看看是否有滑动,有滑动算拖拽,不算点击
    });
    obj.addEventListener('touchend', function (e) {
      if (!isMove && (Date.now() - startTime) &lt; 150) { // 如果手指触摸和离开时间小于150ms算点击
        callbacks && callback();                          // 执行回调函数
      }
      isMove = false;                                     // 取反重置
      startTime = 0;
    });
  }
  // 调用
  tap(div, function () {/* 执行代码 */});</code></pre>
                </li>
                <li>使用插件。fastClick插件解决300ms延迟。</li>
                <li>JS插件是js文件，它遵循一定规范编程，方便程序展示效果，拥有特定功能且方便调用。如轮播图和瀑布流插件。</li>
                <li>特点：它一般是为了解决某个问题而专门存在，其功能单一，并且比较小。我们以前写的 animate.js 也算一个最简单的插件</li>
                <li>fastClick插件解决300ms延迟。使用延时</li>
                <li>
                  GitHub官网地址：
                  <el-link type="primary" icon="Link" target="_blank" href="https://github.com/ftlabs/fastclick/lib/fastclick.js">
                    https://github.com/ftlabs/fastclick/lib/fastclick.js
                  </el-link>
                  <ol>
                    <li>打开网址，进入项目，找到文件，复制里面的封装函数代码</li>
                    <li>新建fastClick.js文件.粘贴代码</li>
                    <li>引入js 文件，调用</li>
                    <li>因为多个立即函数，所以函数前面加个分号，确保其他函数没有加分号</li>
                  </ol>
                  <pre><code class="language-html line-numbers">  ;(function() { // 添加处理程序  });     // 结尾记得也加上

  &lt;!-- 使用代码如下：--&gt;
      &lt;div&gt;&lt;/div&gt;
      &lt;!-- 1 、先引入 js --&gt;
      &lt;script src="js/fastClick.js"&gt;&lt;/script&gt;
      &lt;script&gt;
          // 2 调用
          // 3.0  意思是 addEventListener 属不属于 document 这个对象 ，in 属于操作符
          // 3.1 简单理解，document有没有addEventListener这个事件，如果有，执行里面的代码
          if ('addEventListener' in document) {
              // document 添加侦听事件（等页面里面DOM元素加载完毕再执行）
              document.addEventListener('DOMContentLoaded', function() {
                  FastClick.attach(document.body);
              }, false);
          }   // 然后正常写代码就可以了
          var div = document.addEventListener('click', function() {
              alert(11);
          })
      &lt;/script&gt;</code></pre>
                </li>
              </ul>
            </li>
            <li>
              解决方案2：Swiper插件
              <ul>
                <li>
                  Swiper插件的使用 中文官网地址：
                  <el-link type="primary" icon="Link" target="_blank" href="https://www.swiper.com.cn/">
                    https://www.swiper.com.cn/
                  </el-link>
                  <ol>
                    <li>进入官网，导航栏上点击 获取Swiper里的下载，然后下载最新的文档就可以了</li>
                    <li>下载完Swiper，解压出来，打开 demos文件夹，找到你想要的轮播图名称，打开</li>
                    <li>右键查看源码，复制:</li>
                  </ol>
                  <pre><code class="language-js line-numbers">  // 引入css文件
  &lt;!-- Link Swiper's CSS --&gt;
  &lt;link rel="stylesheet" href="../package/swiper-bundle.min.css"&gt;

  // 引入js 文件
  &lt;!-- Swiper JS --&gt;
  &lt;script&gt; src="../package/swiper-bundle.min.js"&gt;&lt;/script&gt;

  /*
    打开解压出来的文件夹
      路径下： swiper-master / package / swiper-bundle.min.js + swiper-bundle.min.css 复制两个文件
    粘贴到自己的项目js 和 css文件下
    复制 swiper 相关的 css样式到自己的css 文件下
    复制 js 到自己的index.html 代码末尾，或则index.js 下，注意要等页面加载完执行， load 事件
  */</code></pre>
                </li>
              </ul>
            </li>
          </ol>
          <p>swiper插件使用，轮播图</p>
          <ul>
            <li>
              官网地址：
              <el-link type="primary" icon="Link" target="_blank" href="https://www.swiper.com.cn/">
                https://www.swiper.com.cn/
              </el-link>
              <ol>
                <li>下载需要的swiper.min.css和swiper.min.js文件件</li>
                <li>官网找到类似案例，复制html结构，css样式js语法</li>
                <li>根据需求定制修改模块</li>
              </ol>
            </li>
            <li>
              图标字体上传下载 上传步骤：
              <ol>
                <li>让美工准备好图标字体（必须是svg格式）</li>
                <li>点上传按钮（保留颜色并提交）</li>
              </ol>
            </li>
            <li>
              不懂可以点击 API文档进行swiper查询代码
              <ol>
                <li>&gt; 点击获取Swiper &gt; 下载Swiper &gt; 点击版本自动会下载 &gt; 得到swiper-6.6.2</li>
                <li>&gt; 解压压缩包 &gt; package &gt; 复制 swiper-bundle.min.js + swiper-bundle.min.css 到项目下</li>
                <li>&gt; 然后点击 &gt; 在线演示 &gt; 选择想要的样式 &gt; 点击在新窗口打开 &gt; F12拷贝代码</li>
                <li>注意：在项目里面先引入css文件，然后在尾部引入js文件，最后拷贝代码 和 css样式代码</li>
              </ol>
            </li>
          </ul>
          <p>其他移动端插件</p>
          <ol>
            <li>
              superSlide：
              <el-link type="primary" icon="Link" target="_blank" href="http://www.superslide2.com/">
                http://www.superslide2.com/
              </el-link>
              // 移动端点击touchSlide
            </li>
            <li>
              iScroll：
              <el-link type="primary" icon="Link" target="_blank" href="https://github.com/cubiq/iscroll">
                https://github.com/cubiq/iscroll
              </el-link>
              <ul>
                <li>
                  插件使用步骤：
                  <ol>
                    <li>确认插件实现的功能</li>
                    <li>去官网查看使用说明</li>
                    <li>下载插件</li>
                    <li>打开demo实例文件，查看需要引入的相关文件，并且引入</li>
                    <li>复制demo实例文件中的结构html，样式css以及s代码</li>
                  </ol>
                </li>
              </ul>
            </li>
            <li>
              移动端视频插件zy.media.js
              <ul>
                <li>H5给我们提供了video标签，但是浏览器的支持情况不同，不同的视频格式文件，我们可以通过source解决。</li>
                <li>但是外观样式，还有暂停，播放，全屏等功能我们只能自己写代码解决。这个时候我们可以使用插件方式来制作。</li>
              </ul>
              <pre><code class="language-html line-numbers">  // 1、先引入 zy.media.css  和 zy.media.js
  &lt;link rel="stylesheet" href="zy.media.min.css"&gt;
  &lt;script src="zy.media.min.js"&gt;&lt;/script&gt;

  // 2、写入H5 视频标签  引入js
  &lt;div class="playVideo"&gt;
      &lt;div class="zy_media"&gt;
          &lt;video data-config='{"mediaTitle": "小蝴蝶"}'&gt;
                  &lt;source src="mov.mp4" type="video/mp4"&gt;
                  您的浏览器不支持HTML5视频
              &lt;/video&gt;
      &lt;/div&gt;
      &lt;div id="modelView"&gt;&nbsp;&lt;/div&gt;
  &lt;/div&gt;

  // 3、引入js 文件
  &lt;script&gt;
      zyMedia('video', {
          autoplay: false               //  对象里 不需要加 ； 而是 ，
      });
  &lt;/script&gt;</code></pre>
            </li>
          </ol>
          <p>框架概述</p>
          <ul>
            <li>框架，顾名思义就是一套架构，它会基于自身的特点向用户提供一套较为完整的解决方案。框架的控制权在框架本身，使用者要按照框架所规定的某种规范进行开发。插件一般是为了解决某个问题而专门存在，其功能单一，并且比较小。</li>
            <li>前端常用的框架有 Bootstrap、Vue、Angular、React等。既能开发PC端，也能开发移动端</li>
            <li>前端常用的移动端插件有swiper、superSlide、iScroll等。</li>
            <li>框架：大而全，一整套解决方案</li>
            <li>
              插件：小而专一，某个功能的解决方案
              <ol>
                <li>Bootstrap</li>
                <li>
                  BootCss3:
                  <el-link type="primary" icon="Link" target="_blank" href="https://v3.bootcss.com/">
                    https://v3.bootcss.com/
                  </el-link>
                  javascript 插件 依赖于jQuery，所以需要引入 jQuery.min.js，再引入min.js文件
                </li>
              </ol>
            </li>
          </ul>
        </div>
      </el-card>
      <el-card id="part3" shadow="hover">
        <h2>本地存储</h2>
        <div class="ls-cot">
          <p>重点</p>
          <ul>
            <li>随着互联网的快速发展，基于网页的应用越来越普遍，同时也变的越来越复杂，为了满足各种各样的需求，会经常性在本地存储大量的数据，HTML5规范提出了相关解决方案。</li>
            <li>
              特性:
              <ol>
                <li>数据存储在用户浏览器中</li>
                <li>设置、读取方便、甚至页面刷新不丢失数据</li>
                <li>容量较大，sessionStorage约5M、localStorage 约20M</li>
                <li>只能存储字符串，可以将对象JSON.stringify（）编码后存储</li>
              </ol>
            </li>
            <li>
              window.sessionStorage
              <ol>
                <li>生命周期为关闭浏览器窗口(数据什么时候没有了)</li>
                <li>在同一个窗口（页面面下数据可以共享</li>
                <li>以键值对的形式存储使用</li>
              </ol>
              <pre><code class="language-js line-numbers">  // 存储数据：
  sessionStorage.setItem(key, value);

  // 获取数据：
  sessionStorage.getItem(key);

  // 删除数据：
  sessionStorage.removeItem(key);

  // 删除所有数据：(慎用)
  sessionStorage.clear();

  // 案例:
  var input = document.querySelector('input');
  var set = document.querySelector('.set');
  var get = document.querySelector('.get');
  set.addEventListener('click', function() {       // 当点击后就可以把表单里面的值存储起来
      var val = input.value;
      sessionStorage.setItem('uName', val);
  })
  get.addEventListener('click', function() {       // 获取表单数据
      sessionStorage.getItem('uName');
  })
  // 怎么查看数据，按F12，在Application 里面，左侧有个 Session Storage
  // key ：   键，相当于属性
  // Value：  值，相当于属性值</code></pre>
            </li>
            <li>
              window.localStorage
              <ol>
                <li>生命周期永久生效，除非手动删除，否则关闭页面也会存在</li>
                <li>可以多窗口（页面）共享（同一浏览器可以共享）</li>
                <li>以键值对的形式存储使用</li>
              </ol>
              <pre><code class="language-js line-numbers">  // 存储数据：
  localStorage.setItem(key, value);

  // 获取数据：
  localStorage.getItem(key);

  // 删除数据：
  localStorage.removeItem(key);

  // 删除所有数据：(慎用)
  localStorage.clear();

  /* 案例
      思路：
        类似于QQ的记住用户名，当勾选上，下次关闭的时候还会出现输入的用户名，当不勾选的时候，下次就不会出现这个用户名
        把数据存起来，用到本地存储
        关闭页面，也可以显示用户名，所以用到localStorage
        打开页面，先判断是否有这个用户名，如果有，就在表单里面显示用户名，并且勾选复选框
        当复选框发生改变的时候 change 事件
        如果勾选，就存储，否则就移除
  */

  &lt;input type="text" id="uname"&gt;
  &lt;input type="checkbox" id="remember"&gt;记住用户名
  &lt;script&gt;
      // 1、获取元素
      var uname = document.querySelector('#uname');
      var remember = document.querySelector('#remember');
      // 2、判断，获取数据，浏览器有没有uname这个数据，如果有就把这个数据拿过来，赋值给input的value值
      if (localStorage.getItem('uname')) {
          // 3、input的value值等于，获取到的uname的值
          uname.value = localStorage.getItem('uname');
          remember.checked = true;     // 4、然后复选框勾选起来
      }
      // 5、再进行一步判断，如果复选框发生了变化
      remember.addEventListener('change', function() {
          if (this.checked) {          // 6、判断复选框是不是被选中的，如果true,是选中状态，则执行存储数据，属性为uname,值为表单的value
              localStorage.setItem('uname', uname.value)
          } else {                     // 7、否则变化了则清除数据，记住是remove，而不是 clear
              localStorage.removeItem('uname');
          }
      })
  &lt;/script&gt;
              </code></pre>
            </li>
          </ul>
          <p>JSON</p>
          <ul>
            <li>JavaScript Object Notation JS对象表示法</li>
            <li>JSON和JS对象的格式一样，只不过JSON字符串中的属性名必须加双引号其他的和JS语法一致</li>
            <li>
              JSON分类：
              <ol>
                <li>对象{}</li>
                <li>数组[]</li>
              </ol>
            </li>
            <li>
              JSON中允许的值：
              <ol>
                <li>字符串</li>
                <li>数值</li>
                <li>布尔值</li>
                <li>null</li>
                <li>对象</li>
                <li>数组</li>
              </ol>
            </li>
            <li>
              方法：
              <pre><code class="language-js line-numbers">  JSON.parse(json);  // 可以将JSON字符串转换为js对象
  JSON.stringify();  // 可以将一个js对象转换为JSON字符串，需要一个js对象作为参数
  eval(str2);        // 可以将一个字符串形式的js代码执行，并返回结果。str2 = ‘alert('1');';

  var str = ' { "name":"孙悟空"，"age": 18 , "add" : "地址"}';
  var obj = eval ( "(" + str + ")" ); //这样就不会被认为是代码块，并执行起来不会报错。

  // 注意： eval（）这个函数的功能很强大，但是不要在开发中使用，执行性能差，然后具有安全隐患。 </code></pre>
            </li>
          </ul>
        </div>
      </el-card>
      <el-card id="part4" shadow="hover">
        <h2>高级js</h2>
        <div class="ls-cot">
          <p>前言</p>
          <ol>
            <li>
              基本（值）类型
              <ul>
                <li>string: 任意的字符串</li>
                <li>Number: 任意的数字</li>
                <li>boolean: false || true</li>
                <li>undefined: undefined</li>
                <li>null: null</li>
              </ul>
            </li>
            <li>
              对象（引用）类型
              <ul>
                <li>Object: 任意对象</li>
                <li>function: 一个特别的对象（可以执行）</li>
                <li>array: 一个特别的对象（数值下标，内部数据是有序的）</li>
              </ul>
            </li>
            <li>
              判断
              <ul>
                <li>typeof ： 返回数据类型的字符串表达, 不能区别 null 与Object 和 Object与Array</li>
                <li>instanceof： 判断对象的具体类型</li>
                <li>===: 可以判断undefined ，null （全等的时候尽量用三个等号）</li>
              </ul>
            </li>
            <li>
              undefined 与 null 的区别？
              <ul>
                <li>undefined 代表定义了未赋值。</li>
                <li>null 定义并赋值，但为空。</li>
              </ul>
            </li>
            <li>
              什么时候给变量赋值为null呢？
              <ul>
                <li>初始赋值，表明将要赋值为对象</li>
                <li>结束前，让对象称为垃圾对象（被垃圾回收器[浏览器]回收）</li>
              </ul>
            </li>
            <li>
              严格区别变量类型与数据类型？
              <ul>
                <li>
                  数据类型
                  <ol>
                    <li>基本类型</li>
                    <li>对象类型</li>
                  </ol>
                </li>
                <li>
                  变量类型（变量内存值的类型，属于弱类型）
                  <ol>
                    <li>基本类型：保存就是基本类型的数据</li>
                    <li>引用类型： 保存的是地址值</li>
                  </ol>
                </li>
              </ul>
            </li>
            <li>
              什么是数据？
              <ul>
                <li>存储在内存中代表特定信息的‘东东’，本质上是0101...</li>
                <li>数据的特点：可传递，可运算</li>
                <li>一切皆数据</li>
                <li>
                  内存中所有操作的目标：数据
                  <ol>
                    <li>算术运算</li>
                    <li>逻辑运算</li>
                    <li>赋值</li>
                    <li>运行函数</li>
                  </ol>
                </li>
              </ul>
            </li>
            <li>
              什么是内存？
              <ul>
                <li>用来可存储数据的空间（临时的）</li>
                <li>内存产生和死亡 ： 内存条（电路板）==&gt;通电==&gt;产生内存空间==&gt;存储数据==&gt;处理数据==&gt;断电==>数据消失</li>
                <li>
                  一个小内存的2个数据
                  <ol>
                    <li>内部存储数据</li>
                    <li>地址值</li>
                  </ol>
                </li>
                <li>
                  内存分类
                  <ol>
                    <li>栈：全局变量/局部变量 函数名属于标识，应该在栈空间</li>
                    <li>堆：对象</li>
                  </ol>
                </li>
              </ul>
            </li>
            <li>
              什么是变量？
              <ul>
                <li>可变化的量（常亮是不可变化的），由变量名和变量值组成，作为标识，变量值就是内存中保存的数据</li>
                <li>每个变量都对应的一块小内存，变量名用来查找对应的内存</li>
              </ul>
            </li>
            <li>
              内存，数据，变量三者之间的关系？
              <ul>
                <li>用来可存储数据的空间，</li>
                <li>变量是内存的标识</li>
              </ul>
            </li>
            <li>
              关于引用变量赋值问题？
              <ul>
                <li>2个引用变量指向同一个对象，通过一个变量修改对象内部数据，另一个变量看到的是修改之后的数据</li>
                <li>2个引用变量指向同一个对象，让其中一个引用变量指向另一个对象，另一个引用变量依然指向前一个对象</li>
              </ul>
            </li>
            <li>
              js调用函数时传递变量参数时，是值传递还是引用传递？
              <ul>
                <li>理解1：都是值（基本/地址指）</li>
                <li>理解2：可能是值传递，也可能是引用传递 （地址值）</li>
              </ul>
            </li>
            <li>
              js引擎如何管理内存？
              <ul>
                <li>
                  内存声明周期
                  <ol>
                    <li>分配小内存空间，的刀它的使用权</li>
                    <li>存储数据，可以反复进行操作</li>
                    <li>释放小内存空间，</li>
                  </ol>
                </li>
                <li>
                  释放内存
                  <ol>
                    <li>局部变量： 函数执行完自动释放</li>
                    <li>对象：成为垃圾对象 ==&gt; 垃圾回收器回收</li>
                  </ol>
                </li>
              </ul>
            </li>
            <li>
              什么是对象？
              <ul>
                <li>一个变量只能存一个数据，对象是 多个数据的封装体</li>
                <li>用来保存多个数据的容器</li>
                <li>一个对象代表现实中的一个事物</li>
              </ul>
            </li>
            <li>
              为什么要对象？
              <ul>
                <li>便于对多个数据进行统一管理</li>
              </ul>
            </li>
            <li>
              对象组成？
              <ul>
                <li>
                  属性
                  <ol>
                    <li>代表现实事物中的状态数据</li>
                    <li>由属性名和属性值组成</li>
                    <li>属性名都是字符串类型，属性值是任意类型</li>
                  </ol>
                </li>
                <li>
                  方法
                  <ol>
                    <li>代表现实事物中的行为数据</li>
                    <li>是特别的属性 ==&gt; 属性值是函数</li>
                  </ol>
                </li>
              </ul>
            </li>
            <li>
              如何访问对象内部数据？
              <ul>
                <li>属性名： 编码简单，但有时不可用</li>
                <li>[ ' 属性名' ] : 编码麻烦，但通用</li>
              </ul>
            </li>
            <li>
              什么时候必须使用 [ ' 属性名' ]的方式？
              <ul>
                <li>属性名不是合法的标识名</li>
                <li>属性名不确定</li>
              </ul>
            </li>
            <li>
              什么是函数？
              <ul>
                <li>实现特定功能的n条语句的封装体</li>
                <li>只有函数是可以执行的，其它类型的数据是不可执行的</li>
              </ul>
            </li>
            <li>
              为什么要用函数？
              <ul>
                <li>提高代码通用</li>
                <li>便于阅读交流</li>
              </ul>
            </li>
            <li>
              如何定义函数？
              <ul>
                <li>函数声明 function fn1 (){}'</li>
                <li>表达式 var fn2 = function (){};</li>
              </ul>
            </li>
            <li>
              如何调用（执行）函数？
              <ul>
                <li>test() ; 直接调用</li>
                <li>obj.test() ; 通过对象调用</li>
                <li>new test(); new调用</li>
                <li>test.call / apply ( obj ) ;</li>
              </ul>
            </li>
            <li>
              什么函数才是回调函数？
              <ul>
                <li>你定义的</li>
                <li>你没有调</li>
                <li>但最终它执行了(在某个时刻或某个条件下)</li>
              </ul>
            </li>
            <li>
              常见的回调函数？
              <ul>
                <li>dom事件回调函数</li>
                <li>定时器回调函数</li>
                <li>ajax请求回调函数 ，与后台交互</li>
                <li>生命周期回调函数</li>
              </ul>
            </li>
            <li>
              IIFE - immediately- Invoked Function Expression
              <ul>
                <li>理解：立即执行函数表达式</li>
                <li>作用：匿名函数自调用 。 影藏实现不会污染外部（全局）命名空间</li>
              </ul>
            </li>
            <li>
              什么是this？
              <ul>
                <li>任何函数本质上都是通过某个对象来调用的，如果没有指定就是window</li>
                <li>所有函数内部都有一个变量this</li>
                <li>它的值是调用函数的当前对象</li>
              </ul>
            </li>
            <li>
              如何确定this的值？
              <ul>
                <li>test() : window</li>
                <li>p.test(): p</li>
                <li>new test () : 新创建的对象</li>
                <li>p.call(obj): obj</li>
              </ul>
            </li>
            <li>
              原型prototype
              <ul>
                <li>
                  函数的prototype 属性
                  <ol>
                    <li>每个函数都有一个prototype属性，它默认指向一个Object空对象（即称为：原型对象）</li>
                    <li>原型对象中有一个constructor，它指向函数对象</li>
                  </ol>
                </li>
                <li>
                  给原型对象添加属性（一般都是方法）
                  <ol>
                    <li>作用：函数的所有实例对象自动拥有原型中的属性（方法）</li>
                  </ol>
                  <pre><code class="language-js line-numbers">  // 1 、每个函数function都有一个prototype，即显示原型属性，默认只想一个空的Object对象
  console.log ( Fn. prototype)
  // 2、 每个实例对象都有一个 __proto__, 成为隐式原型
  console。log （fn.__proto__ 即为隐式原型
  // 3、 对象的隐式原型的值为对应构造函数的显式原型的值</code></pre>
                </li>
              </ul>
            </li>
            <li>
              因为循环会执行多次，所以优化代码要在外面声明:
              <pre><code class="language-js line-numbers">  for (var i = 0 ; length = a.length; i&lt; length; i++){
    var a = a[ i ];
    a.index = i ;
    a.onclick = function() { alert( '第' + （this.index +1 ）+"个)}
  }</code></pre>
            </li>
            <li>
              利用闭包来实现(立即执行自调用)
              <pre><code class="language-js line-numbers">  for (var i = 0 ; length = a.length; i&lt; length; i++){
    ( function( i ){
    var a = a[ i ];
    a.onclick = function() { alert( '第' + （this.index +1 ）+"个)}
    })( i )
  }</code></pre>
            </li>
            <li>
              如何产生闭包？
              <ul>
                <li>当一个嵌套的内部（子）函数引用了嵌套的外部（父）函数的变量（函数）是，就产生了闭包</li>
              </ul>
            </li>
            <li>
              闭包到底是什么？
              <ul>
                <li>理解1、闭包是嵌套的内部函数 如例子中的 fn2</li>
                <li>理解2、包含被引用变量（函数）的对象 如 fn2中log（a）;</li>
                <li>注意：闭包存在于嵌套的内部函数中</li>
              </ul>
            </li>
            <li>
              产生闭包的条件？
              <ul>
                <li>函数嵌套</li>
                <li>内部函数引用了外部函数的数据（变量/函数）</li>
                <li>
                  例子：
                  <pre><code class="language-js line-numbers">  function fn1 (){
    var a = 2;
    var b = 'abc';
    function fn2 (){
        console.log( a );
    }
  }</code></pre>
                </li>
              </ul>
            </li>
            <li>
              常见的闭包
              <pre><code class="language-js line-numbers">  // 1、将函数作为另一个函数的返回值
  function fn1 (){
      var a = 2;
      function fn2 (){
        a++
        console.log ( a )
      }
        return fn2
  }
  fn1 ()  //3
  fn1 ()  //4

  // 2、将函数作为实参传递给另一个函数调用
  function a ( code , time ){
      setTimeout ( function(){
          alert(code)
      },time)
  }
  a( '代码' , 2000) ;</code></pre>
            </li>
          </ol>
          <p>补充知识点：不同设备打开不同页面</p>
          <ul>
            <li>
              会根据用户设备来进行页面跳转的参数
              <ol>
                <li>1、navigator.userAgent 包含浏览器信息</li>
                <li>2、navigator.appName 浏览版名称</li>
                <li>3、navigator.appVersion 浏览版本号</li>
                <li>4、navigator.language 浏览语言</li>
                <li>5、navigator.platform 浏览平台</li>
              </ol>
              <pre><code class="language-js line-numbers">  //  在主网页中分发到对应的页面中 test方法来检测，使用三元运算符来判断用户是pc还是手机
  window.location.href = /Android|webOS|iPhone|iPad|BlackBeery/i.test(navigator.userAgent) ? "phone.html" : "pc.html"

  // 函数
  (function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        window.location.href = "app.html";
    } else {
        window.location.href = "index.html";
    }
  })();

  // 嵌入
  var redirect = () =&gt; {
    let userAgent = navigator.userAgent.toLowerCase(); // 获取设备信息
    let device = /ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/;   // 判断设备
    if (device.test(userAgent)) {
        window.location.href = "move.html";
    } else {
        window.location.href = "pc.html";
    }
  };
  redirect();
</code></pre>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <p>双击禁止选中文字</p>
          <pre><code class="language-js line-numbers">  window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();</code></pre>
          <p>页面禁止文字选中</p>
          <pre><code class="language-js line-numbers">  document.onselectstart = function () {
    return false;
  };</code></pre>
          <p>原生js tab切换栏写法，伪类的操作方法</p>
          <ul>
            <li>
              方法1，只能读取，不能修改
              <pre><code class="language-js line-numbers">  // CSS代码
  #myId:before {
      content: "hello world!";display: block; width: 100px;height: 100px;background: red;
  }

  // HTML代码
  &lt;div&gt; id="myId"&gt;&lt;/div&gt;

  // JS代码
  var myIdElement = document.getElementById("myId");
  var beforeStyle = window.getComputedStyle(myIdElement, ":before");
  console.log(beforeStyle);                                // [CSSStyleDeclaration Object]
  console.log(beforeStyle.width);                          // 100px
  console.log(beforeStyle.getPropertyValue("width"));      // 100px
  console.log(beforeStyle.content);                        // "hello world!"</code></pre>
            </li>
            <li>
              方法2
              <pre><code class="language-js line-numbers">  function css(style_text) {
    var s = document.createElement('style');
    s.innerText = style_text;
    document.head.appendChild(s);
  }
  document.onclick = function() {
    // 添加新的style元素, 覆盖原来的属性, 从而达到修改的目的
    css("button:hover {color: red;}");
  };</code></pre>
            </li>
          </ul>
          <p>解决防盗链OOS</p>
          <ul>
            <li>先说说防盗链的原理，http 协议中，如果从一个网页跳到另一个网页，http 头字段里面会带个 Referer。这里的Referer是由于历史原因导致了拼写错误 后来也就一直沿用。图片服务器通过检测 Referer 是否来自规定域名，来进行防盗链。如果盗用网站是 https 的 protocol，而图片链接是 http 的话，则从 https 向 http 发起的请求会因为安全性的规定，而不带 referer，从而实现防盗链的绕过。官方输出图片的时候，判断了来源(Referer)，就是从哪个网站访问这个图片，如果是你的网站去加载这个图片，那么Referer就是：你的网站地址；你网站地址，肯定没在官方的白名单内，所以就看不到图片了。因此，若不发送Referer，也就是没有来源。那么官方那边，就认为是从浏览器直接访问的，所以就能加载正常的图片了。</li>
            <li>
              解决方案：
              <pre><code class="language-js line-numbers">  &lt;meta name="referrer" content="never"&gt;</code></pre>
            </li>
          </ul>
        </div>
      </el-card>
      <el-card id="part5" shadow="hover">
        <h2>ES6</h2>
        <div class="ls-cot">
          <p>ECMA</p>
          <ul>
            <li>ECMA （European Computer Manufacturers Association）中文名称为欧洲计算机制造商协会，这个组织的目标是评估、开发和认可电信和计算机标准。1994年后该组织改名为Ecma国际。</li>
            <li>ECMAScript 是由Ecma国际通过ECMA-262标准化的脚本程序设计语言。</li>
            <li>
              ECMA-262历史版本
              <el-link type="primary" icon="Link" target="_blank" href="http://www.ecma-international.org/publications/standards/Ecma-262-arch.htm">
                http://www.ecma-international.org/publications/standards/Ecma-262-arch.htm
              </el-link>
            </li>
            <li>注：从ES6开始，每年发布一个版本，版本号比年份最后一位大1</li>
          </ul>
          <p>谁在维护ECMA-262</p>
          <ul>
            <li>TC39（Technical Committee39）是推进ECMAScript发展的员会。其会员都是公司（其中主要是浏览器厂商，有苹果、谷歌、微软、因特尔等）。TC39定期召开会议，会议由会员公司的代表与特邀专家出席</li>
          </ul>
          <p>ES6兼容性</p>
          <ul>
            <li>
              <el-link type="primary" icon="Link" target="_blank" href="http:/kangax.github.io/compat-table/es6/">
                http:/kangax.github.io/compat-table/es6/
              </el-link>
              可查看兼容性
            </li>
          </ul>
          <p>关键字 声明变量</p>
          <ul>
            <li>
              代码
              <pre><code class="language-js line-numbers">  let a ;
  let a b c ;
  let e = 100;</code></pre>
            </li>
            <li>
              好处
              <ol>
                <li>变量不能重复声明，和var 不一样，不用担心被污染</li>
                <li>
                  块级作用域 全局 函数 eval ，不止{} ,还有if else while for 里的作用域有效
                  <pre><code class="language-js line-numbers">  {
    let a = '块级作用域 '
  }</code></pre>
                </li>
                <li>
                  不存在变量提升
                  <pre><code class="language-js line-numbers">  console.log(a);  // error :  a is not defined
  var a = 1;
  let a = 1;       // 会直接报错，不存在变量声明之前去使用，会直接报错</code></pre>
                </li>
                <li>
                  不影响作用域链接
                  <pre><code class="language-js line-numbers">  {
  let c = '123'
  function fn(){
       console.log(c);   // 不会影响作用域链  ，此层作用域没有，还是会往上一级查找
  }
  fn();                  // 输出 123
  }</code></pre>
                </li>
              </ol>
            </li>
            <li>
              值不能修改的量 称之为常量，const
              <ol>
                <li>一定要赋初始值 ，不能 const a; 会报错 // index.html:27 Uncaught SyntaxError: Missing initializer in const declaration</li>
                <li>常量使用大写（潜规则） const A = '大写';</li>
                <li>
                  常量不能修改
                  <pre><code class="language-js line-numbers">  const B = '值为A'；
  const B = '修改A值' ；  // 会报错 Uncaught SyntaxError: Identifier 'A' has already been declared</code></pre>
                </li>
                <li>块级作用域</li>
                <li>
                  对于数组和对象的元素修改，不算做对常量的修改，不会报错
                  <pre><code class="language-js line-numbers">  const Arr = ['1', '2', '3'];
  Arr.push('4');
  console.log(Arr);            // 常量修改数组 不会报错</code></pre>
                </li>
              </ol>
            </li>
          </ul>
          <p>结构赋值 (ES6允许按照一定模式从数组和对象中提取值，对变量进行赋值，这杯称为结构赋值)</p>
          <pre><code class="language-js line-numbers">  // 数组结构
  const A = ['小白', '小黑', '小黄'];
  let [bai, hei, huang] = A;   // 这样操作，相当于把数组对应的值传给变量 ，声明并赋值 bai hei huang

  // 对象结构
  const B = {
    name: '大白',
    sex: '男'
  }
  let {name,sex} = B;          // 这样就可以把对象中的值赋值给 变量，声明并赋值 name sex</code></pre>
          <p>模版字符串</p>
          <ul>
            <li>
              ES6 引入新的声明字符串的方法 [ `` ] , ' ' , " " `(反引号，左上角数字1左边的符号)
              <ol>
                <li>例子 let a = `我是字符串，被反引号包裹着`;</li>
              </ol>
            </li>
            <li>
              特性
              <pre><code class="language-js line-numbers">  // 1. 可以换行符
  var a = '&lt;li&gt;
            &lt;a&gt;&lt;/a&gt;
           &lt;/li&gt;';       // 普通字符串格式，换行会直接报错，语法错误

  var a = `&lt;li&gt;
              &lt;a&gt;&lt;/a&gt;
           &lt;/li&gt;`;       // 但是使用 ` ` 进行包裹的标签不会报错，类型还是字符串

  // 2. 变量拼接
  let a = '10+';
  let b = a + '10';
  console.log(b);      //  之前的拼接方式

  let a = '10+';
  let b = `${a}10`;    //  固定格式  ${ 里面放变量 }
  console.log(b);

  // 3. ${} 里面可以调用函数
  let arr = () => {
    return '我是我是我是.....';
  }
  let str = `我会说话: ${arr()}`;
  console.log(str);</code></pre>
            </li>
          </ul>
          <p>String 的扩展方法</p>
          <ul>
            <li>
              startsWith() endsWith()
              <ol>
                <li>startsWith()：表示参数字符串是否在原字符串的头部，返回布尔值</li>
                <li>endsWith()：表示参数字符串是否在原字符串的尾部，返回布尔值</li>
              </ol>
              <pre><code class="language-js line-numbers">  let str = "start end!"
  let a = str.startsWith('s');     // 判断字符串中是否以s 开头
  let b = str.endsWith('!');       // 判断字符串中是否以！结尾
  console.log(a, b);               // true true</code></pre>
            </li>
            <li>
              repeat()
              <ol>
                <li>表示将原字符串重复N次，返回一个新字符串</li>
              </ol>
              <pre><code class="language-js line-numbers">  let str = "y".repeat(5);  // repeat()方法会返回新的字符串，所以需要用变量来接收
  console.log(str);</code></pre>
            </li>
          </ul>
          <p>简化对象写法</p>
          <ul>
            <li>ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法</li>
            <li>
              例子：
              <pre><code class="language-js line-numbers">  let a = '1';
  let b = function () {
      console.log('b');
  }
  const AB = {
      a,
      b,
      // myFn: function(){
      //      之前写法
      // }
      myFn() {
          console.log('这也是对象的方法，省略每次都要写function 和 ：');
      }
  }</code></pre>
            </li>
          </ul>
          <p>箭头函数</p>
          <ul>
            <li>
              ES6 允许使用“箭头”（=>）定义函数
              <pre><code class="language-js line-numbers">  let fn = function () {
    console.log('之前写法');
  }
  let fn = (a，b) => {         // 小括号里写形参
    console.log('现在写法');
  }</code></pre>
            </li>
            <li>
              特性：
              <ol>
                <li>
                  this 是静态的，不像之前一样是动态。this 始终是指向函数声明时所在作用域下的this 的值
                  <pre><code class="language-js line-numbers">  function getName() {
    console.log(this.name);
  }
  let getName2 = () => {
    console.log(this.name);
  }
  window.name = 'windows';
  const Name = {
    name: '对象的name'
  }
  // 直接调用
  getName();                   // windows
  getName2();                  // windows

  // call 方法调用
  getName.call(Name);          // 对象的name
  getName2.call(Name);         //  windows</code></pre>
                </li>
                <li>
                  不能作为构造函数实例化对象
                  <pre><code class="language-js line-numbers">  let Person = (name, age) => {
    this.name = name,
    this.age = age
  }
  let me = new Person('a', 18);
  console.log(me);                // 报错 Uncaught TypeError: Person is not a constructor</code></pre>
                </li>
                <li>不能使用arguments 变量</li>
                <li>
                  简写：
                  <pre><code class="language-js line-numbers">  // 1. 省略小括号 ，当形参只有一个的时候
  let son = age => {
    return age + age;
  }
  console.log(son(10));

  // 2. 省略花括号，当代码体只有一条语句的时候，此时return 必须省略而且语句的执行结果就是函数的返回值
  let son = age => age + age;    // 省略了{ } 和 return
  console.log(son(15));
  let son = (a, b) => a + b;     // 多个形参时，需要加上（） ，要不然会报错
  console.log(son(15, 15));
                  </code></pre>
                </li>
                <li>
                  案例
                  <pre><code class="language-js line-numbers">  // 案例1：
  let box = document.querySelector('.box');
  box.addEventListener('click', function () {
      let _this = this; // 声明一个_this指向变量
      setTimeout(function () {
          this.style.backgroundColor = 'pink'; // 如果没有在外面声明一个this 赋值操作 会this指向错误
          _this.style.background = 'pink';     // 此时赋值过的 _this 变量指向的是调用者
      }, 500);
  });
  // 箭头函数
  box.addEventListener('click', function () {
      setTimeout(() => {
          this.style.background = 'pink';      // 箭头函数就可以使用this
                                               // 因为箭头函数始终是指向函数声明时所在作用域下的this值
                                               // 也就是 box 的点击事件函数，事件源box
      }, 500);
  })

  // 案例2：
  // const result = arr.filter(function (item) {
  //     if (item % 2 === 0) {
  //         //....
  //     } else {
  //         //....
  //     }
  // });
  const result = arr.filter(item => {
      if (item % 2 === 0) {
          return true;
      } else {
          return false;
      }
  })
  // 简写
  const result = arr.filter(item => item % 2 === 0);  // 如果为真 直接 return 保留结果

  console.log(result);</code></pre>
                </li>
              </ol>
            </li>
            <li>
              总结：
              <ol>
                <li>箭头函数适合与this无关的回调函数，定时器，数组的方法回调</li>
                <li>箭头函数不适合与 this 有关的回调，事件回调，对象的方法</li>
              </ol>
            </li>
          </ul>
          <p>函数参数默认值</p>
          <ul>
            <li>
              ES6 允许给函数参数赋值初始值
              <ol>
                <li>
                  形参初始值，具有默认值的参数，一般位置要靠后（潜规则）
                  <pre><code class="language-js line-numbers">  function result(a, b, c = 10) {    // ES6 允许形参赋初始值，赋值的形参必须放在最后
    return a + b + c;
  }
  console.log(result(10, 20));       // 实参只穿进去两个值，形参有值，但实参传入，则实参首选</code></pre>
                </li>
                <li>
                  与结构赋值结合
                  <pre><code class="language-js line-numbers">  // 传统方式
  function object(canShu) {
      let a = canShu.a;
      let b = canShu.b;
      console.log(a, b);  // v d
  }
  object({
      a: 'v',
      b: 'd'
  })
  // 使用结构赋值
  function object({ a,b }) {   // 使用 { } 包裹形参
      console.log(a);
      console.log(b);
  }
  object({
      a: 'v',
      b: 'd'
  })
  // 也可以赋值，如果传参，可以直接赋值，传了就直接用
  function object({ a="123", b }) {
      console.log(a);  // 123
      console.log(b);  // d
  }
  object({
      b: 'd'
  })</code></pre>
                </li>
              </ol>
            </li>
            <li>
              ES6 引入 rest 参数，用于获取函数的实参，用来代替 arguments，rest参数 一定要放最后，否则报错
              <pre><code class="language-js line-numbers">  function get() {
    console.log(arguments);         // 是以对象方式管理  1，2，3，4，5
  }
  get(1, 2, 3, 4, 5);

  function get2(a, b, ...args) {    // 以数组方式进行管理  rest 方法，在形参前加 ...
    console.log(a);                 // 1
    console.log(b);                 // 2
    console.log(...args); // 3 4 5
  }
  get2(1, 2, 3, 4, 5);</code></pre>
            </li>
          </ul>
          <p>扩展运算符</p>
          <ul>
            <li>
              ES6 ：[...] 扩展运算符能将[ 数组 ]转换为都好分隔的参数序列
              <pre><code class="language-js line-numbers">  const boy = ['x', 'b', 'c'];
  function get() {
      console.log(arguments);
  }
  get(boy);                     // 以数组参数传入，就一个参数  0['x', 'b', 'c']
  // 扩展运算符
  const boy = ['x', 'b', 'c'];
  function get() {
      console.log(arguments);   // 会输出三个参数  0['x']    1['b']    2['c']
  }
  get(...boy);                  // 与rest 参数不同，rest 参数写在形参上，扩展运算符写在实参上
                                // 等同于  get( 'x', 'b', 'c' ); 把数组当成实参传入</code></pre>
            </li>
            <li>
              运用场景：
              <pre><code class="language-js line-numbers">  // 1. 数组合并
  const boy = ['x', 'b', 'c'];
  const sun = ['1', '2', '3'];
  const result = boy.concat(sun);    // 之前的合并数组方法  concat();
  console.log(result);               // result['x', 'b', 'c','1', '2', '3']
  // ES6 使用扩展运算符数组合并
  const boy = ['x', 'b', 'c'];
  const sun = ['1', '2', '3'];
  const result = [...boy, ...sun];   // 数组之间用 ， 隔开， 数组名前面加 ...
  console.log(result);               // result['x', 'b', 'c','1', '2', '3']

  // 2. 数组的克隆
  const boy = ['x', 'b', 'c'];
  const result = [...boy];      // ...数组名 单个为克隆，如果数组里面有引用数据类型，是浅拷贝
  console.log(result);          // result['x', 'b', 'c','1', '2', '3']
  console.log(boy);             // boy['x', 'b', 'c']
  // 等同于
  const boy = ['x', 'b', 'c'];
  const result = boy;

  // 3. 将伪数组转换为真正的数组
  const boxS = document.querySelectorAll('.box');
  console.log(boxS);                                // 原型上 是一个对象
  // 转换
  const boxS = document.querySelectorAll('.box');
  const result = [...boxS];                         // 伪数组被转换成 数组Arr
  console.log(result);

  // 4. 使用Array.from() 也可以将伪数组转换成数组
  var obj = {
    "0": "zs",
    "1": 18,
    "2": "男",
    "length": 3                                // 必须写上长度和索引下标
  };
  var a = Array.from(obj);
  console.log(a);                              // ["zs", 18, "男"]
  // --------------------------------------------------------
  var obj = {
    "0": 15,
    "1": 18,
    "2": 30,
    "length": 3                                // 必须写上长度和索引下标
  };
  var a = Array.from(obj, item => item * 2);   // 第二个参数是一个回调函数，数组中元素有几个就会调用几次
  console.log(a);                              // [30, 36, 60]</code></pre>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <p>Symbol 基本使用</p>
          <ul>
            <li>ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。它是JavaScript 语言的第七种数据类型，是一种类似于字符串的数据类型。</li>
            <li>
              Symbol特点
              <ol>
                <li>Symbol的值是唯一的，用来解决命名冲突的问题</li>
                <li>Symbol值不能与其他数据进行运算</li>
                <li>Symbol定义的对象属性不能使用for..in循环遍历，但是可以使用Reflect.ownkeys来获取对象的所有键名</li>
              </ol>
            </li>
            <li>
              创建Symbol
              <pre><code class="language-js line-numbers">  let s = Symbol();
  console.log(s, typeof s);     // Symbol() "symbol"

  // 传参
  let s2 = Symbol('a');
  let s3 = Symbol('a');
  console.log(s2 === s3);       // false，虽然参数值相同，但是标识不同 ，false

  // for
  let s4 = Symbol.for('a');
  let s5 = Symbol.for('a');
  console.log(s4 === s5); // true
  // Symbol.for() 与 Symbol 都会生成Symbol.区别是前者被登记在全局环境中，后者不会，所以相等

  // 不能与其他数据进行运算
  let s = Symbol();
  let s4 = s + s;
  let s5 = s * s;
  console.log(s4, s5);          // Uncaught TypeError: Cannot convert a Symbol value to a number

  /* 总结：数据类型 USONB (you are so niubility)
      U -- undefined
      S -- string / symbol
      O -- Object
      N -- null / number
      B -- boolean
  */</code></pre>
            </li>
            <li>
              Symbol的使用
              <pre><code class="language-js line-numbers">  const youXi = {
    name: '坦克',
    [Symbol('up')]: function () {
        console.log('上');
    },
    [Symbol('down')]: function () {
        console.log('下');
    }
  }
  console.log(youXi);</code></pre>
            </li>
            <li>
              Symbol内置值 总共有11个 查文档
              <ol>
                <li>Symbol.hasInstance</li>
                <li>Symbol.isConcatSpreadable</li>
              </ol>
              <pre><code class="language-js line-numbers">  const arr = [1, 2, 3];
  const arr2 = [4, 5, 6];
  console.log(arr.concat(arr2));             // 1,2,3,4,5,6
  // 使用isConcatSpreadable 方法
  const arr = [1, 2, 3];
  const arr2 = [4, 5, 6];
  arr2[Symbol.isConcatSpreadable] = false;   // false 是不展开
  console.log(arr.concat(arr2));             // [1,2,3,Array(3)]</code></pre>
            </li>
          </ul>
          <p>迭代器</p>
          <ul>
            <li>迭代器（iterator）是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构</li>
            <li>只要部署iterator 接口，就可以完成遍历操作。</li>
            <li>iterator 接口就是对象里的一个属性</li>
            <li>
              例子：
              <pre><code class="language-js line-numbers">  const arr = ['a', 'b', 'c'];
  for (let v in arr) {
      console.log(v);         // 0,1,3  相当于数组索引号
  }
  // for of
  for (let v of arr) {
      console.log(v);         // a,b,c  数组索引值
  }</code></pre>
            </li>
            <li>
              ES6创造了一种新的遍历命令for..of循环，iterator 接口主要供for..of 消费
              <pre><code class="language-js line-numbers">  let arr = ['a', 'b', 'c']
  for (let v of arr) {       // 为什么数组能使用for of 遍历，因为其原型对象中有  Symbol()属性
      console.log(v);        // a b c  键值
  }
  // for of  与 for in 不同区别
  for (let v in arr) {
      console.log(v);        // 0 1 2  索引
  }</code></pre>
            </li>
            <li>
              原生具备iterator接口的数据（可用for of遍历）
              <ol>
                <li>Array</li>
                <li>Arguments</li>
                <li>Set</li>
                <li>Map</li>
                <li>String</li>
                <li>TypedArray</li>
                <li>NodeList</li>
              </ol>
            </li>
            <li>
              工作原理
              <ol>
                <li>创建一个指针对象，指向当前数据结构的起始位置</li>
                <li>第一次调用对象的next方法，指针自动指向数据结构的第一个成员，并返回结果 return next方法</li>
                <li>接下来不断调用next方法，指针一直往后移动，直到指向最后一个成员</li>
                <li>每调用next方法返回一个包含value和done属性的对象，done 是一个完成时，true 代表遍历完成</li>
                <li>与for in 不同， for in 保存的是键名，而for of 保存的是健值</li>
                <li>注：需要自定义遍历数据的时候，要想到迭代器。</li>
              </ol>
              <pre><code class="language-js line-numbers">  // 需求 ，循环遍历出  name的数组元素
  const people = {
      age: 18,
      name: [
          'a',
          'b',
          'c'
      ],
      [Symbol.iterator]() {
          let index = 0; // 1、先声明一个索引变量
          let _this = this;
          return {
              next: function () {
                  if (index &lt; _this.name.length) {
                      const result = {
                          value: _this.name[index],
                          done: false
                      }
                      index++;
                      return result;
                  } else {
                      return {
                          value: undefined,
                          done: true
                      }
                  }
              }
          }
      }
  }
  for (let v of people) {
      console.log(v); // a b c
  }</code></pre>
            </li>
          </ul>
          <p>生成器</p>
          <ul>
            <li>生成器函数是ES6提供的一种异步编程解决方案，语法行为与传统函数完全不同</li>
            <li>生成器其实就是一个特殊的函数</li>
            <li>
              异步编程，纯回调函数
              <pre><code class="language-js line-numbers">  function* get() {
    console.log('生成器');
  }
  let a = get();
  console.log(a);           // 这样打印不出log
  a.next();                 // 需要使用 next 方法来调用</code></pre>
            </li>
            <li>
              yield 是函数代码的分隔符
              <pre><code class="language-js line-numbers">  function* get() {
    console.log('1');
    yield 'a';            // 会根据next调用次数，打印几次'，这里会分隔代码
    console.log('2');
    yield 'b';
    console.log('3');
    yield 'c';
  }
  let a = get();
  a.next();               // 1  这里只调用一次，则只会输出 log 1 的内容
  a.next();               // 2  这里第二次调用，则会输出 log 2 的内容，以此类推</code></pre>
            </li>
            <li>
              生成器函数参数
              <pre><code class="language-js line-numbers">  function* get(arg) {
    console.log(arg);
    let one = yield 111;
    console.log(one);
    yield 222;
    yield 333;
  }
  let a = get('1');
  console.log(a.next());
  console.log(a.next('2'));</code></pre>
            </li>
            <li>每次输出都是作为上一个的返回结果</li>
            <li>
              异步编程
              <ol>
                <li>
                  1s后控制台输出111，2s 输出222 ，3s 输出333
                  <pre><code class="language-js line-numbers">  // 这种称为回调地狱
  setTimeout(() => {
      console.log(111);
      setTimeout(() => {
          console.log(222);
          setTimeout(() => {
              console.log(333);
          }, 3000);
      }, 2000);
  }, 1000);

  // 使用yield
  function one() {
      setTimeout(() => {
          console.log(111);
          a.next();            // 2、在定时器里面添加调用，这样就可以实现多次调用
      }, 1000);
  }
  function two() {
      setTimeout(() => {
          console.log(222);
          a.next();            // 2、在定时器里面添加调用，这样就可以实现多次调用
      }, 2000);
  }
  function three() {
      setTimeout(() => {
          console.log(333);
          a.next();            // 2、在定时器里面添加调用，这样就可以实现多次调用
      }, 3000);
  }
  function* get() {
      yield one();
      yield two();
      yield three();
  }
  // 调用生成器函数
  let a = get();
  a.next();                    // 1、这样调用只会执行one（）函数，后面的函数都不调用</code></pre>
                </li>
                <li>
                  案例2 依次输出数据
                  <pre><code class="language-js line-numbers">  function one() {
    setTimeout(() => {
        let data = '数据1';
        a.next(data);
    }, 1000);
  }

  function two() {
    setTimeout(() => {
        let data = '数据2';
        a.next(data);
    }, 1000);
  }

  function three() {
    setTimeout(() => {
        let data = '数据3';
        a.next(data);
    }, 1000);
  }

  function* get() {
    console.log(yield one());        // 简写调用
    console.log(yield two());        // 简写调用
    let three3 = yield three();
    console.log(three3);
  }

  let a = get();
  a.next();
  // one(); 这种调用不实际，要先拿到数据1 再去拿到数据2
  // two();
  // three();</code></pre>
                </li>
              </ol>
            </li>
          </ul>
          <p>Promise</p>
          <ol>
            <li>
              Promise是E56引入的异步编程的新解决方案。语法上Promise是一个构造函数，用来封装异步操作并可以获取其成功或失败的结果。
              <ul>
                <li>Promise构造函数：Promise（Executor）</li>
                <li>Promise.prototype.then方法</li>
                <li>
                  Promise.prototype.catch 方法
                  <ol>
                    <li>
                      Promise 封装读取文件
                      <pre><code class="language-js line-numbers">  // 实例化 Promise 对象
  const p = new Promise(function (resolve, reject) { // 两个参数，resolve成功，reject 失败
      setTimeout(() => {
          // let data = '数据库中的数据'
          // resolve(data);

          let err = '数据读取失败';
          reject(err);
      }, 1000);
  });
  // 调用 promise 对象的 then 方法,  是两个回调函数
  p.then(function (value) { // 成功进入这个函数
      console.log('1、' + value);
  }, function (reason) { // 失败进入这个函数
      console.log('2、' + reason);
  })</code></pre>
                    </li>
                    <li>
                      Promise 封装AJAX 请求
                      <pre><code class="language-js line-numbers">  // 实例化 Promise 对象
  const fs = require("fs");
  const p = new Promise(function (resolve, reject) {
      fs.readFile("./text/a.text", (err, data) => {
          // 判断失败
          if (err) reject(err);
          // 如果成功
          resolve(data);
      });
  });
  // 调用 promise 对象的 then 方法, 是两个回调函数
  p.then(function (value) { // 成功进入这个函数
      console.log(value.toString());
  }, function (reason) { // 失败进入这个函数
      console.error("读取失败2");
  });</code></pre>
                    </li>
                  </ol>
                </li>
              </ul>
            </li>
            <li>
              Promise 原型 prototype ..then 的方法
              <ul>
                <li>
                  代码：
                  <pre><code class="language-js line-numbers">  // 1
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('用户数据');   // 如果p成功了，调用resolve 出错了调用reject
        // reject('出错了');
    })
  });
  p.then(resolve => {
    console.log(resolve);
  }, reject => {
    console.warn(reject);
  })

  // 2
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('用户数据');
    })
  });
  // 调用 then 方法, then的返回结果是promise对象，对象的状态取决于回调函数的执行结果决定
  // 如果回调函数中的返回结果是  非promise 类型的属性，状态为成功，返回值为成功的值
  // 如果不写return 值，是undefined ,但也是返回成功的值
  let a = p.then(resolve => {
    console.log(value);
    // 非 promise 类型的属性
    return '123';                           // 返回值
    // 如果是promise 对象 ，内部返回的promise的状态就决定 p.then 方法的状态
    // 入下面代码，promise 是成功的，那么返回值就是 'ok'，如果失败，那么就是返回失败的值
    return new promise((resolve, reject) => {
        resolve('ok');                      // 输出promise  成功的 用户数据，
        /* 如果失败 */
        reject('ok');                       // 输出promise  失败的 用户数据，
    })
  }, reject => {
    console.warn(reject);
  })
  console.log(a);

  // 3
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('用户数据');
    })
  });

  // 链式调用
  p.then(value => {

  }, reason => {

  }).then(value => {

  }, reason => {})

  p.then(value => {}).then(value => {  // 可以直接写成功，省略失败 })
                  </code></pre>
                </li>
                <li>
                  读取拼接三个文件
                  <pre><code class="language-js line-numbers">  const fs = require("fs");
  fs.readFile("./text/a.text", (err, data1) => {
      fs.readFile("./text/b.text", (err, data2) => {
          fs.readFile("./text/c.text", (err, data3) => {
              let result = data1 + '\r\n' + data2 + '\r\n' + data3;
              console.log(result);
          });
      });
  });</code></pre>
                </li>
                <li>
                  Promise 方式拼接三个文件
                  <pre><code class="language-js line-numbers">  // 实例化 Promise 对象
  const fs = require("fs");
  const p = new Promise(function (resolve, reject) {
      fs.readFile("./text/a.text", (err, data) => {
          resolve(data);
      });
  });

  p.then(value => {
      return new Promise((resolve, reject) => {
          fs.readFile("./text/b.text", (err, data) => {
              resolve([value, data]);
          });
      });
  }).then(value => {
      return new Promise((resolve, reject) => {
          fs.readFile("./text/c.text", (err, data) => {
              value.push(data);
              resolve(value);
          });
      });
  }).then(value => {
      console.log(value.join('\r\n'));
  });</code></pre>
                </li>
              </ul>
            </li>
            <li>
              Promise catch方法
              <pre><code class="language-js line-numbers">  // 实例化 Promise 对象
  const p = new Promise(function (resolve, reject) {
      setTimeout(() => {
          reject('出错了');
      }, 1000);
  });

  p.catch(reason => { // catch 只需要定义一个回调，失败的回调函数就行
      console.warn(reason);
  })</code></pre>
            </li>
          </ol>
          <p>Set</p>
          <ul>
            <li>set 与map 是一样的，但是set存储的是唯一值，不允许重复</li>
            <li>
              ES6提供了新的数据结构Set（集合）。它类似于数组，但成员的值都是唯一的，集合实现了iterator接口，所以可以使用 [扩展运算符] 和[for..of..]进行遍历，集合的属性和方法：
              <ol>
                <li>size 返回集合的元素个数 相当于 length</li>
                <li>add 增加一个新元素，返回当前集合 add(‘需要添加的元素’);</li>
                <li>delete 删除元素，返回boolean值 delete('想要删除的元素')</li>
                <li>has 检测集合中是否包含某个元素，返回boolean值</li>
                <li>set.entries() 返回键值对</li>
                <li>clear 清除数据</li>
              </ol>
              <pre><code class="language-js line-numbers">  // 1
  let s = new Set();
  let s2 = new Set([1, 3, 4, 5, 7, 3, 4]);
  console.log(s2);                          // 输出结果，set[5]{ 1, 3, 4, 5, 7}  ，会自动去重
  console.log(s2.size);                     // 5
  console.log(s2.delete(1));                // true
  console.log(s2.add(2));                   // set[5]{ 3, 4, 5, 7, 2}
  console.log(s2.has(1));                   // false 因为前面删掉了
  console.log(s2.has(3));                   // 有则返回 true
  s2.clear();
  console.log(s2);                          // set[0]
  ------------------------------------
  for (let i of s2) {
      console.log(i);                       // 1  3 4 5 7
  }

  // 2
  let arr = [1, 3, 4, 5, 7, 3, 4];
  // 数组去重
  let result = [...new Set(arr)];
  console.log(result); // 变成一个数组  [1,3,4,5,7]

  // 交集
  let arr = [1, 3, 4, 5, 7, 3, 4];
  let arr2 = [4, 5, 3, 5, 6];
  let result = [...new Set(arr)].filter(item => {  // 过滤
      let s2 = new Set(arr2);                      //  给arr2 也做一个去重  4，5，3
      if (s2.has(item)) {
          return true;
      } else {
          return false;
      }
  })
  let result = [...new Set(arr)].filter(item=> new Set(arr2).has(item));  //简写
  console.log(result);                             // 3,4,5

  // 并集，就是两个的集合
  let arr = [1, 3, 4, 5, 7, 3, 4];
  let arr2 = [4, 5, 3, 5, 6];
  let result = [...new Set([...arr, ...arr2])];
  console.log(result);                             // 1,3,4,5,7,6

  // 差集，在两个数组中，谁是主体，那么就要判断副体中，没有重复的就是差集，案例中arr是主体，1和7没有
  let arr = [1, 3, 4, 5, 7, 3, 4];
  let arr2 = [4, 5, 3, 5, 6];
  let result = [...new Set(arr)].filter(item => {  // 过滤
      let s2 = new Set(arr2);                      // 给arr2 也做一个去重  4，5，3
      if (!s2.has(item)) {                         // 和并集一样，就是取反
          return true;
      } else {
          return false;
      }
  });
  // let result = [...new Set(arr)].filter(item => !new Set(arr2).has(item));
  console.log(result);                             // 3,4,5</code></pre>
            </li>
            <li>
              Set 数据结构
              <ol>
                <li>set 中的数据不允许重复，添加不进去</li>
                <li>ES6提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。</li>
                <li>
                  Set 本身是一个构造函数，用来生成set数据结构
                  <pre><code class="language-js line-numbers">  let data = new Set();
  console.log(data.size);                    // 0
  let data2 = new Set(["a", "b"]);           // 传入数组
  console.log(data2.size);                   // 2
  let data3 = new Set(["a", "b", "b", "a"]); // 传入数组 但是会过滤掉重复的值
  console.log(data3.size);                   // 2  </code></pre>
                </li>
                <li>
                  实例方法
                  <pre><code class="language-js line-numbers">  // 1. add（value）：添加媒个值，返回Set结构本身
  let data = new Set(['a', 'b']);
  data.add('a').add('b');              // 注意，在set数据中，如果有了数据，那么此次添加只会覆盖，不会添加
  console.log(data.size);              // 2

  // 2. delete（value）：删除某个值，返回一个布尔值，表示删除是否成功
  data.delete('a');                    // 并可以返回 布尔值，如果删除成功，则返回true ,可以拿变量来接收
  console.log(data.size);              // 1

  // 3.has（value）：返回一个布尔值，表示该值是否为Set的成员
  let a = data.has('a');               // false 因为前面删除了
  let b = data.has('b');               // true
  console.log(a);

  // 4.clear()：清除所有成员，没有返回值
  data.clear();
  console.log(data.size);              // 0

  // 5.遍历 Set 中的数据
  let data = new Set(['a', 'b']);
  data.add('c').add('d');
  data.forEach(d => console.log(d));   // 遍历出 a   b  c  d
                  </code></pre>
                </li>
              </ol>
            </li>
          </ul>
          <p>Map</p>
          <ul>
            <li>ES6提供了Map数据结构。它类似于对象，也是键值对的集合。但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。Map也实现了iterator接口，所以可以使用[扩展运算符]和for..of...进行遍历。Map的属性和方法：</li>
            <li>
              const m = new Map() 创建需要用new关键字
              <ol>
                <li>map.size() 返回Map的元素个数</li>
                <li>map.set() 增加一个新元素，返回当前Map</li>
                <li>map.get() 返回键名对象的键值</li>
                <li>map.has() 检测Map中是否包含某个元素，返回boolean值</li>
                <li>map.delete() 删除指定数据</li>
                <li>map.clear() 清空集合，返回undefined</li>
              </ol>
            </li>
          </ul>
          <p>class 类</p>
          <ul>
            <li>ES6提供了更接近传统语言的写法，引入了Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。基本上，ES6的class可以看作只是一个语法糖，它的绝大部分功能，ES5都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。</li>
            <li>
              代码：
              <pre><code class="language-js line-numbers">  // 1. class 声明类
  // 之前的实例化对象方法
  function Phone(brand, price) {
      this.brand = brand;
      this.price = price;
  }
  //添加方法
  Phone.prototype.call = function () {
      console.log('我是手机');
  }
  //实例化对象
  let iphone = new Phone('apple', '1000');
  iphone.call();
  console.log(iphone);

  // 使用ES6 class
  // ES6 class
  class Phone {
      constructor(brand, price) {         // 构造方法  固定名字，不能修改，不需要return 用这个名字会直接返回
          this.brand = brand;
          this.price = price;
      }                                   // 并且多个函数或方法之间不能加 ， 逗号
      call() {       // 方法必须使用该语法，不能使用ES5 的对象完整形式 例如 call : function(){}
          console.log('我是手机');
      }
  }
  // 实例化
  let iphone = new Phone('apple', 1200);  // 必须使用 new 来实例化对象
  iphone.call();
  console.log(iphone);

  // class 的静态成员
  class Phone {
      // 静态属性
      static name = '手机';                // 对于标注 static 的属性和方法，它属于类，不属于实例对象
      // 静态方法
      static get() {
          console.log('我是手机');
      }
  };
  let a = new Phone();
  console.log(a.name);                    // undefined
  console.log(Phone.name);                // 手机

  // 2. constructor 定义构造函数初始化
  constructor(brand, price) {
      this.brand = brand;
      this.price = price;
  }

  // 3. extends 继承父类
  class Father {
    // 父类
    eat() {
        console.log("吃方法");
    }
  }
  class Son extends Father {
                               // 使用 extends 关键字  进行继承
  }
  let a = new Son();
  a.eat();                     // 会继承父类的 eat的方法

  // 4. super 用于访问和调用父级构造方法，和普通函数
  class Father {
    constructor(x, y) {   //这里xy 是Son 中 super 传递过来的x y
        this.x = x;
        this.y = y;
    }
    sum() {
        console.log(this.x + this.y);
    }
  }
  class Son extends Father {
      constructor(x, y) {
          super(x, y);   // 调用父类中的构造函数
      }
  }
  let a = new Son(1, 2); // 如果没有使用 super() 方法，此时传参父类是接收不到的，只有使用super方法才能传给父类
  a.sum();

    /* 继承中，如果实例化自雷输出一个方法，先看子类有没有这个方法，如果有就先执行子类的
       继承中，如果子类里面没有，就去查找父类有没有这个方法，如果有，就执行父类的这个方法（就近原则）
       可以使用 super() 方法 改变就近原则，自己有方法，但通过super.sum() 去调用父级方法
       扩展自己的方法同时想调用父类方法，那么在子类 constructor中 先要声明 super ,不能在this之后声明 */

    class Father {
      constructor(x, y) {
          this.x = x;
          this.y = y;
      }
      add() {
          console.log(this.x + this.y);
      }
    }
    class Son extends Father {
        constructor(x, y) {
            super(x, y);         // 如果要调用父级，那么必须要在this之前声明好，强制要求
            this.x = x;
            this.y = y;
        }
        sub() {
            console.log(this.x - this.y);
        }
    }
    let a = new Son(7, 3);
    a.sub();
    a.add();

    //  super() 调用父类的构造函数
    class Father {
      constructor(x, y) {
          this.x = x;
          this.y = y;
      }
      add() {
          console.log(this.x + this.y);
      }
    }
    class Son extends Father {
        constructor(x, y) {
            super(x, y);     // 如果要调用父级，那么必须要在this之前声明好，强制要求
            super.add(x, y); // 调用父类的方法，注意用 点 来调用父类的方法
        }
    }
    let a = new Son(7, 3);
    a.sum();                // 得到两个结果，一个是sum() 和 add()的结果

    /* 类也可以直接调用方法 */
    class Father {
      constructor(x, y) {
          this.x = x;
          this.y = y;
          this.add();  // 加上 this. 方法
      }
      add() {
          console.log(this.x + this.y);
      }
    }

    /* 点击事件 也要加this，并且 btn点击了 this就指向了btn ，所以要创建一个变量来存储 constructor 里的 this */
    &lt;button id="btn"&gt;按钮&lt;/button&gt;
    &lt;script&gt;
        let _this = null;        // 创建一个 变量 来存储constructor 的 this
        class Father {
            constructor(x, y) {  // this 指向的是 实例化对象 a
                _this = this;
                this.x = x;
                this.y = y;
                this.btn = document.getElementById('btn');
                this.btn.onclick = this.add;
            }
            add() {              // 但是这里的this 指向的是 btn  因为谁调用，this就指向谁
                console.log(_this.x + _this.y);
            }
        }
        let a = new Father(7, 3);
    &lt;/script&gt;

    /* constructor里面的 this 指向的是创建实例化对象 */
    class Father {
      constructor(x, y) {
          this.x = x;   // this 就指向的是 实例化对象 a
          this.y = y;   // this 就指向的是 实例化对象 a
      }
    }
    let a = new Father(7, 3);

  // 4. static 定义静态方法和属性 37j
  class Phone {
    // 静态属性
    static name = '手机';    // 对于标注 static 的属性和方法，它属于类，不属于实例对象
    // 静态方法
    static get() {
        console.log('我是手机');
      }
  };
  let a = new Phone();
  console.log(a.name);      // undefined 实例成员是通过 实例化对象来访问，这里没有实例成员this.成员
  console.log(Phone.name);  // 手机

  // 5. 私有属性
  class Person {                      // 创建一个构造函数
        #name;                        // 必须封闭类中声明私有字段“#name”
        #age;                         // 必须封闭类中声明私有字段“#gae”
        #sex;                         // 必须封闭类中声明私有字段“#sex”
        constructor(name, age, sex,money) {
            this.#name = name;        // 私有属性，只能通过方法getter获取和方法setter设置
            this.#age = age;          // 私有属性，只能通过方法getter获取和方法setter设置
            this.#sex = sex;          // 私有属性，只能通过方法getter获取和方法setter设置
            this.money = money;       // Person 公共属性,不受限制调用
        }
        fun() {
            console.log(this.#name, this.#age, this.#sex);
        }
        set name(name) {               // 私有属性，js提供set 函数名 来设置私有属性
            this.#name = name;
        }
        get name() {                   // 私有属性，js提供get 函数名 来获取私有属性
            return this.#name;
        }
        /*
          setName(name) {              // 等同于上面的set方法  来设置私有属性
              this.#name = name;
          }
          getName() {                  // 等同于上面的get方法  来获取私有属性
              return this.#name;
          }
        */
    }
    let p = new Person("张三", 18, "男",500);
    p.setName("猪八戒")                // 只能通过方法set 设置私有属性
    p.getName()                       // 只能通过方法get 获取私有属性
    p.name = "猪八戒"                  // 当设置私有属性时，调用的是set方法
    console.log(p.name);              // 当获取私有属性时，调用的是get方法，调用时不要加括号
    console.log(p.money);             // 公共属性可以直接获取

  // 6. 父类方法可以重写 38j
              </code></pre>
            </li>
            <li>
              创建类注意点：
              <ol>
                <li>没有变量提升，必须先创建好类，再实例化对象，才能调用</li>
                <li>共有的属性和方法一定要加 this</li>
              </ol>
            </li>
          </ul>
          <p>数值扩展</p>
          <pre><code class="language-js line-numbers">  // 0.Number.EPSILON是Javascript表示的最小精度
  // EPSILON 属性的值接近于2.2204460492503130808472633361816E-16
  function equal(a, b) {
      if (Math.abs(a - b) &lt; Number.EPSILON) {
          return true;
      } else {
          return false;
      }
  }
  console.log(0.1 + 0.2); // 0.30000000000000004
  console.log(equal(0.1 + 0.2, 0.3)); // true

  // 1. 二进制和八进制
  let t = 0b1010;

  // 2. Number.isFinite 检测一个数值是否为有限数
  console.log(Number.isFinite(100)); // true
  console.log(Number.isFinite(100 / 0)); // false

  // 3. Number.isNaN() 检测一个数值是否为NaN

  // 4. Number.parseInt() Number.PaseFloat()  字符串转整数

  // 5. Number.isInteger() 判断一个数是否为整数

  // 6. Number.trunc() 将数字的小数部分抹掉

  // 7. Math.sign() 判断一个数到底为正数 负数 还是零  返回结果  1  -1   0</code></pre>
          <p>对象方法扩展</p>
          <pre><code class="language-js line-numbers">  // 1.Object.is() 判断两个值是否完全相等
  // 相当于 ===   但是 NaN 是个例外

  // 2.Object.assign 对象的合并
  const config1 = {
      name: '1',
      age: 2
  };
  const config2 = {
      name: '2',
      sex: '男'
  }
  console.log(Object.assign(config1, config2));  // 后面的对象会覆盖前面的，如果没有的属性会合并

  // 3.Object.setPrototypeof 设置原型对象   Object.getPrototypeof
  const school = {
      name: '尚硅谷'
  }
  const cities = {
      campus: ['北京', '上海', '深圳']
  }
  Object.setPrototypeof(school, cities);
  console.log(Object.getPrototypeof(school));
  console.log(school);</code></pre>
          <p>ES6模块化</p>
          <ol>
            <li>模块化是指将一个大的程序文件，拆分成许多小的文件，然后将小文件组合起来。</li>
            <li>
              ES6提模块化的优势有以下几点：
              <ul>
                <li>防止命名冲突</li>
                <li>代码复用</li>
                <li>高维护性</li>
              </ul>
            </li>
            <li>
              CommonJS =&gt; NodeJS、Browserify
              <ul>
                <li>AMD =&gt; requireJs</li>
                <li>CMD =&gt; seals</li>
              </ul>
            </li>
            <li>
              模块化语法，模块功能主要由两个命令构成： export 和 import
              <ul>
                <li>
                  export 命令用于规定模块的对外接口
                  <pre><code class="language-html line-numbers">  // 分别暴露
  export const fs = '1';
  export function get() {
      console.log('暴露数据');
  }
  // html 页面 script type属性必须写上   type ="module"
    &lt;script type="module"&gt;
       // html 页面引入 index.js 暴露的模块内容
        import * as index from "./js/index.js";
        console.log(index);
    &lt;/script&gt;
  &lt;/body&gt;

  // 统一暴露
  const fs = '1';
  function get() {
      console.log('暴露数据');
  }
  export { fs, get };   // 统一暴露  用 export{ } 格式

  // 默认暴露
  export default {
      aa: '1';
      fn: function() {
            console.log('暴露数据');
          }
  }
  // html页面调用方法，需要多加一个 default
  &lt;script type="module"&gt;
      // html 页面引入 index.js 模块内容
      import * as index from "./js/index.js"
      index.default.fn();
  &lt;/script</code></pre>
                </li>
                <li>
                  import 命令用于输入其它模块提供的功能
                  <pre><code class="language-js line-numbers">  // 通用 导入方式
  import * as index from "./js/index.js"

  // 结构赋值形式，
  export let a = 1;
  export function get() {
      console.log(111);
  }
  import {a,get} from "./js/index.js"; // 结构赋值形式  ｛里面跟着要暴露的名称｝
  console.log(a);
  console.log(get);

  //结构 统一暴露下的的结构赋值
  const a = 1;
  function get() {
      console.log('暴露数据');
  }
  export { a, get };   // 统一暴露  用 export{ } 格式
  html 页面下调用方式
  import {a as bm , get} from "./js/index.js"; // 因为a 和其他冲突了，所以用 as 取一个别名
  console.log(bm , get);

  // 默认暴露
  export default {
      a: 1,
      get: function () {
          console.log(111);
      }
  }
  html 页面下调用方式
  import {default as index} from "./js/index.js"; // 固定写法 ，必须要起一个别名
  console.log(index);

  // 简便形式，但只能针对默认暴露
  import index from "./js/index.js";</code></pre>
                </li>
              </ul>
            </li>
            <li>
              模块化引入：
              <ul>
                <li>
                  代码
                  <pre><code class="language-js line-numbers">  // 需要单独创建一个 All名字随便的 同级 js 入口文件
  import * as index1 from "./index.js"
  import * as index2 from "./common.js"
  import * as index3 from "./style.js"
  console.log(index1);
  console.log(index2);
  console.log(index3);

  // html 引入必须加一个  type="module"
  &lt;script&gt; src="./js/All.js" type="module"&gt;&lt;/script&gt;</code></pre>
                </li>
                <li>
                  为了兼容性，需要引入插件来把es6 转换成兼容性 es5的代码，然后对打包好的js 文件进行引入就可以了
                  <pre><code class="language-js line-numbers">  /* 安装工具
      abel-cli 命令行
      babel-preset-env 预设包，能够转换ES5语法
      browserify 打包工具，项目的话 会使用 webpack 打包
    vscode 打开终端，输入 :
      npm init --yes // --yes 是两个杠
      npm i babel-cli babel-preset-env browserify -D
    处理js 文件
      npx babel js -d dist/js --presets=babel-preset-env
      注：js 代表在哪里的目录下，配置同级就 js ，dist/js 代表要生成在哪个目录下
    打包
    html 页面引入即可
      npx browserify dist/js/All.js -o dist/bundle.js // -o 代表输出在哪里 js/All.js 代表 入口js
    html 页面引入即可  */

    &lt;script src="./dist/bundle.js" type="module"&gt;&lt;/script&gt;
                  </code></pre>
                </li>
              </ul>
            </li>
            <li>
              模块化引入 NPM 包
              <pre><code class="language-js line-numbers">  // 安装jQuery npm i jquery
  // 页面引入
  import $ from 'jquery';        // 注意jquery 全小写  import 变量名 from 'npm 包的名字'
  $(function () {
      $('body').css('background', 'pink');
  })

  // 执行 npx babel js -d dist/js --presets=babel-preset-env
  // 重新打包 npx browserify dist/js/All.js -o dist/bundle.js
              </code></pre>
            </li>
          </ol>
          <p>ECMAScript 7 新特性</p>
          <ul>
            <li>
              Array.prototype.includes
              <ol>
                <li>includes方法用来检测数组中是否包含某个元素，返回布尔类型值</li>
              </ol>
              <pre><code class="language-js line-numbers">  const arr = [1, 2, 3, 4, 5, 6];
  console.log(arr.includes(0));     // false  indexOf 只会返回1 -1 ，这个则会判断有没有

  console.log(2 ** 3);              // 次方 等同于 Math.pow() 求x的y 次幂的值
  console.log(Math.pow(2, 3));      // 求次方</code></pre>
            </li>
          </ul>
          <p>ECMAScript 8 新特性</p>
          <ul>
            <li>
              async和await两种语法结合可以让异步代码像同步代码一样
              <ol>
                <li>async函数的返回值为promise对象，</li>
                <li>promise对象的结果由async函数执行的返回值决定</li>
              </ol>
            </li>
            <li>
              await 表达式
              <ol>
                <li>await必须写在async函数中 ,但是async 里可以没有await</li>
                <li>await右侧的表达式一般为promise对象</li>
                <li>await返回的是promise成功的值4.await的promise失败了，就会抛出异常,需要通过try..catch捕获处理</li>
              </ol>
            </li>
          </ul>
          <p>对象扩展</p>
          <ul>
            <li>Rest参数与spread扩展运算符在ES6中已经引入，不过ES6中只针对于数组，在·ES9·中为对象提供了像数组一样的rest参数和扩展运算符</li>
          </ul>
          <p>正则扩展</p>
          <ul>
            <li>
              命名捕获分组
              <pre><code class="language-js line-numbers">  // 1. 命名捕获分组
  let str = '&lt;a href="http://www.baidu.com"&gt;百度&lt;/a&gt;';
  const reg = /&lt;a href="(.*)"&gt;(.*)&lt;\/a&gt;/;   // 第一个（.*） 代表第一个数据
  const result = reg.exec(str);
  console.log(result[1]);
  console.log(result[2]);
  // 分组
  let str = '&lt;a href="http://www.baidu.com"&gt;百度&lt;/a&gt;';
  const reg = /&lt;a href="(?&lt;url&gt;.*)"&gt;(?&lt;text&gt;.*)&lt;\/a&gt;/; // 第一个（?&lt;标识名&gt;.*）
  const result = reg.exec(str);
  console.log(result);                                  // 输出有 个  groups  属性

  // 2. 正向断言
  let str = '122313213一二三四五6666不知道';
  const reg = /\d+(?=不)/;      // 匹配前面的数字
  const result = reg.exec(str);
  console.log(result);          // 输出结果  取不字前面的数字
  console.log(result[0]);       // 6666

  // 3. 反向断言
  let str = '122313213一二三四五6666不知道';
  const reg = /(?&lt;=五)\d+/;      // 匹配后面的数字
  const result = reg.exec(str);
  console.log(result);              // 输出结果  取不字前面的数字
  console.log(result[0]);           // 6666
          </code></pre>
            </li>
            <li>
              dotAll 模式
              <ol>
                命名捕获分组：之前的方式，换行也要算上，\s
              </ol>
            </li>
          </ul>
          <p>Object.fromEntries</p>
          <ul>
            <li>用来创建一个对象</li>
          </ul>
          <p>TrimStart 与 trimEnd</p>
          <pre><code class="language-js line-numbers">  let str = '    abc     ';
  console.log(str.trim());       // 清除左右的空字符串
  console.log(str.trimStart());  // 清除字符串前面的空格
  console.log(str.trimEnd());    // 清除字符串后面的空格
          </code></pre>
          <p>flat 与 flatMap</p>
          <ul>
            <li>用来创建一个对象</li>
          </ul>
          <p>Symbol.prototype.description</p>
          <pre><code class="language-js line-numbers">  // 用来得到 Symbol 的字符串
  let str = Symbol('字符串');
  console.log(str.description);  // 输出 字符串 三个字 </code></pre>
          <p>私有属性</p>
          <pre><code class="language-js line-numbers">  class Person {
    //公有属性
    name;
    //私有属性
    #age;#weight;
    constructor(name, age, weight) {
        this.name = name;
        this.#age = age;
        this.#weight=weight;
    }
    // 使用intro方法来调用
    intro() {
        console.log(this.name);
        console.log(this.#age);
        console.log(this.#weight);
      }
  }
  const girl = new Person('ming', 18, '50kg');
  girl.intro();</code></pre>
          <p>String.prototype.matchAll</p>
          <p>可选链操作符</p>
          <p>动态import</p>
          <ul>
            <li>import 返回的结果是一个 Promise 对象，成功的值就是暴露出来的模块对象</li>
          </ul>
          <p>BigInt</p>
          <pre><code class="language-js line-numbers">  // 大整形，但是BigInt（'转换对象不能是浮点数'）
  let n = 123n;
  console.log(n, typeof n);

  // 函数
  console.log(BigInt(n));
  // console.log(BigInt(1.2));    // 不能使用浮点数进行转换

  // 作用是大数值运算
  let max = Number.MAX_SAFE_INTEGER;
  console.log(max);
  console.log(max + 1);
  console.log(max + 2);
  console.log('-------------------------');
  console.log(BigInt(max));
  // console.log(BigInt(max) + 1); // 报错
  console.log(BigInt(max) + BigInt(1));
  console.log(BigInt(max) + BigInt(2));</code></pre>
        </div>
      </el-card>
      <el-card id="part6" shadow="hover">
        <h2>SVG</h2>
        <div class="ls-cot">
          <p>js库</p>
          <ul>
            <li>JavaScript 操作 SVG 推荐使用 D3.js 库</li>
          </ul>
          <p>svg 四种引入格式</p>
          <pre><code class="language-html line-numbers">  &lt;img src=""&gt;
  &lt;iframe src="" frameborder="0"&gt;&lt;/iframe&gt;
  &lt;object data="" type=""&gt;&lt;/object&gt;
  &lt;embed src="" type=""&gt;
  &lt;!-- 以上引用图片路径，下面svg标签是用数据画出来的 --&gt;

  &lt;svg&gt;&lt;/svg&gt;  </code></pre>
          <p>svg 底层语法</p>
          <ul>
            <li>width属性和height属性，制定了SVG图像在HTML元素中所占据的宽度和高度。除了相对单位也可以采用绝对单位</li>
            <li>（单位：像素）。如果不指定这两个属性， SVG图像默认大小是300像素（宽）*150像素（高）。</li>
            <li>如果只想展示SVG图像的一部分I就要指定viewBox属性。</li>
            <li>viewBox属性的值有四个数字，分别是左上角的横坐标和纵坐标、视口的高魔和宽度。上面代码中，SVG图像是100像素宽*100像素高，</li>
            <li>viewBox属性指定视口从（50，50）这个点开始。所以，实际看到的是右下角的四分之一圆。</li>
            <li>注意，视口必须适配所在的空间。上面代码中，视口的大小是5050，由于SVG图像的大小是100100，所以视口会放大去适配SVG图像的 大小，即放大了四倍。</li>
            <li>如果不指定width属性和height属性，只指定viewBox属性，则相当于只给到定SVG图像的长宽比。这时，SVG图像的默认大小将等于所在 的HTML元素的大小。</li>
            <li>
              代码
              <pre><code class="language-html line-numbers">  &lt;!-- 设置矢量图的宽高 填充颜色 切出大小 --&gt;
  &lt;svg width="200px" height="200px" fill="white" viewBox="50 50 50 50"&gt;
      &lt;!-- 画圆标签 id 相对父元素的坐标X 坐标Y 半径 --&gt;
      &lt;circle&gt; id="myCircle" cx="50" cy="50" r="50"&gt;&lt;/circle&gt;
  &lt;/svg&gt;   </code></pre>
            </li>
          </ul>
          <p>动画过渡变换</p>
          <pre><code class="language-html line-numbers">  &lt;!--  &lt;circle&gt; 圆形，三个属性,cx代表相对父元素x起点坐标,cy代表相对父元素y起点坐标,r表示圆半径 --&gt;
  &lt;circle id="mycircle" class="red" fill="white" cx="50" cy="100" r="50"&gt;&lt;/circle&gt;

  &lt;!-- &lt;line&gt; 直线x1和y1代表线段起始点的横坐标和纵坐标，x2和y2代表结束点的坐标，style代表样式，颜色和宽度 --&gt;
  &lt;line&gt; x1="50" y1="50" x2="50" y2="600" style="stroke: white; stroke-width: 5px"&gt;&lt;/line&gt;

  &lt;!-- &lt;polyline&gt; 折线 --&gt;
  &lt;style&gt;
      svg {transition: all 2s;}  .line {stroke: white;stroke-width: 50px;fill: none;}  svg:hover {transform: rotate(90deg);}
  &lt;/style&gt;
  &lt;polyline points="50,100 50,300 350,300" class="line"&gt;&lt;/polyline&gt;

  &lt;!-- &lt;rect&gt;矩形，  x起始坐标   y起始坐标    width宽度    height高度  --&gt;
  &lt;rect&gt; x="50" y="50" width="200" height="200" class="line"&gt;&lt;/rect&gt;

  &lt;!-- &lt;ellipse&gt;  椭圆，  cx横坐标   cy纵坐标    rx指定椭圆的横向坐标    ry指定椭圆的纵向坐标 --&gt;
  &lt;ellipse cx="150" cy="150" rx="50" ry="20" class="line"&gt;&lt;/ellipse&gt;

  &lt;!-- &lt;polygon&gt;  多边形，  points指定坐标，第一点x,y  第二个点x,y  第三个........ --&gt;
  &lt;polyline&gt; points="0,0 50,100 50,300 350,300" class="line"&gt;&lt;/polyline&gt;

  &lt;!--
      &lt;path&gt;    路径， 按顺序书写：d = " M移动到    L画直线到........    Z闭合路径"
      M x    y      移动到（x，y）（小写表示相对于上个坐标的位移，下同
      L x    y      画一条直线到x，y）
      H x        水平画一条直线到x
      V y        竖直画一条直线到y
      A rx   ry  x-axis-rotation large-arc    sweep  x   y
        画一段到x，y的椭圆弧，椭圆弧的x，y轴半径分别为rx，ry.椭圆相对于x轴旋转x-axis-rotation度，
        large-arc=0表明弧线小于180，large-arc=1表示弧线大于180度，sweep=0表明弧线逆时针旋转，
        sweep=1表明现线顺时间旋转.具体解释看如何绘制椭圆弧
      Q cx   cy   x  y
      T x    y
      C cx2  cy2  x  y
      S cx2  cy2  x  y
  --&gt;
  &lt;path d="M 18,3 L 46,3 L 80,4 L108,150 L200,50 Z" class="line"&gt;&lt;/path&gt;

  &lt;!-- &lt;text&gt;  文本， x起始坐标   y起始坐标，必须y欧诺个fill改变颜色，其他class改变 --&gt;
  &lt;text&gt; x="200" y="200" class="line" fill="red"&gt;这是绘制路径&lt;/text&gt;

  &lt;!-- &lt;use&gt;  复制， 给需要复制的形状ID，X Y是复制位置的起始坐标，相对需要复制的那个元素，不能超出svg位置 --&gt;
  &lt;circle id="mycircle" class="red" fill="white" cx="50" cy="100" r="50"&gt;&lt;/circle&gt;
  &lt;use href="#mycircle" x="150" y="150"&gt;&lt;/use&gt;

  &lt;!-- &lt;g&gt;  组   相当于ps 的  ctrl + g 形成一个组合 ，方便复用 --&gt;
  &lt;g id="mycircle"&gt;
      &lt;circle&gt; class="red" fill="white" cx="100" cy="100" r="50"&gt;&lt;/circle&gt;
      &lt;circle&gt; class="red" fill="green" cx="50" cy="100" r="50"&gt;&lt;/circle&gt;
  &lt;/g&gt;
  &lt;use&gt; href="#mycircle" x="150" y="150"&gt;&lt;/use&gt;

  &lt;!-- &lt;dfs&gt;  相当于函数，当有其它来调用内容时才会显示 --&gt;
  &lt;defs&gt;
      &lt;g id="mycircle"&gt;
          &lt;circle class="red" fill="white" cx="100" cy="100" r="50"&gt;&lt;/circle&gt;
          &lt;circle class="red" fill="green" cx="50" cy="100" r="50"&gt;&lt;/circle&gt;
      &lt;/g&gt;
  &lt;/defs&gt;
  &lt;use href="#mycircle" x="150" y="150"&gt;&lt;/use&gt;

  &lt;!-- &lt;pattern&gt;  用于自定义一个形状，该形状可以被引用来平铺一个区域。 --&gt;
  &lt;!-- &lt;image&gt;   用于插入图片文件 但不使用这种方式，因为放大会失真 --&gt;
  &lt;image&gt; xlink:href="img/0.png" width="50%" height="50%"&gt;&lt;/image&gt;

  &lt;!-- &lt;animate&gt; 用于产生动画效果 , animate的属性含义如下。
        attributeName：发生动画效果的属性名。
        from；单次动画的初始值。
        to：单次动画的结束值。
        dur：单次动画的持续时间。
        repeatCount：动画的循环模式。  --&gt;
  &lt;svg width="300" height="300"&gt;
      &lt;circle cx="50" cy="50" r="30"&gt;
          &lt;animate attributeName="cx" from="0" to="500" dur="2s" repeatCount="indefinite" /&gt;
          &lt;animate attributeName="cy" from="0" to="500" dur="2s" repeatCount="indefinite" /&gt;
      &lt;/circle&gt;
  &lt;/svg&gt;

  &lt;!-- &lt;animateTransform&gt;   对于animate标签transform不起作用时采用的
      上面代码中，&lt;animateTransform&gt;的效果为旋转（rotate），这from和to属性值有三个数字，第一个数字是角度值，第二个值和第三个值是旋转
      中心的坐标。from="0200200"表示开始时，角度为0，围绕（200，200）开始旋转；to="360400400"表示结束时，角度为360，围绕（400，400）旋转。
  --&gt;
  &lt;animateTransform attributeName="transform" type="rotate" begin="0s" dur="10s" form="0 200 200" to="360 400 400" repeatCount="indefinite" /&gt;
</code></pre>
          <p>写class类</p>
          <ul>
            <li>svg标签属性与网页元素的css不同</li>
            <li>
              表格
              <table>
                <tbody>
                  <tr>
                    <th>属性</th>
                    <th>描述</th>
                    <th>属性</th>
                    <th>描述</th>
                  </tr>
                  <tr>
                    <td>fill</td>
                    <td>填充色</td>
                    <td>stroke</td>
                    <td>描边色</td>
                  </tr>
                  <tr>
                    <td>stroke-width</td>
                    <td>边框宽度</td>
                    <td>stroke-linecap</td>
                    <td>边框角圆弧</td>
                  </tr>
                  <tr>
                    <td>stroke-dasharray</td>
                    <td>边框间隔</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>
          <p>JS操作</p>
          <pre><code class="language-html line-numbers">  &lt;svg width="200px" height="200px" fill="black"&gt;
  &lt;circle&gt; id="mycircle" cx="100" cy="100" r="50"&gt;&lt;/circle&gt;
  &lt;/svg&gt;
  &lt;button&gt;点击放大&lt;/button&gt;
  &lt;script&gt;&gt;
    let btn = document.querySelector("button");
    btn.addEventListener("click", function () {
        let svg = document.querySelector("svg");
        let circle = document.querySelector("#mycircle");
        svg.setAttribute("width", "300px");     // 通过setAttribute来修改属性
        svg.setAttribute("height", "300px");
        circle.setAttribute("r", "100px");
        svg.style.fill = "red";                 // 通过style来修改样式
        let num = 10;
        let timer = setInterval(function () {   // 也可以做动画
            num += 10;
            circle.setAttribute("cx", num);
        }, 100);
        console.log([svg]);                     // 获取元素里的属性
    });
  &lt;/script&gt;</code></pre>
          <p>绘制条形图</p>
          <ul>
            <li>
              流程
              <ol>
                <li>获取数据</li>
                <li>创建svg</li>
                <li>创建坐标</li>
                <li>绘制坐标文字</li>
                <li>依据数据绘制矩形（条形）</li>
              </ol>
            </li>
            <li>
              可以使用封装好的库:
              <el-link type="primary" icon="Link" target="_blank" href="https://echarts.apache.org/zh/index.html">
                https://echarts.apache.org/zh/index.html
              </el-link>
              <ol>
                <li>
                  引入JS文件或者下载好js文件，进行引入
                  <ol>
                    <li>
                      Staticfile CDN（国内）:
                      <el-link type="primary" icon="Link" target="_blank" href="https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js">
                        https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js
                      </el-link>
                    </li>
                    <li>
                      jsDelivr：
                      <el-link type="primary" icon="Link" target="_blank" href="https://cdn.jsdelivr.net/npm/echarts@4.3.0/dist/echarts.min.js">
                        https://cdn.jsdelivr.net/npm/echarts@4.3.0/dist/echarts.min.js
                      </el-link>
                    </li>
                    <li>
                      cdnjs:
                      <el-link type="primary" icon="Link" target="_blank" href="https://cdnjs.cloudflare.com/ajax/libs/echarts/4.3.0/echarts.min.js">
                        https://cdnjs.cloudflare.com/ajax/libs/echarts/4.3.0/echarts.min.js
                      </el-link>
                    </li>
                  </ol>
                </li>
                <li>
                  使用之前，要准备一个DOM容器
                  <pre><code class="language-html line-numbers">  &lt;body&gt;
      &lt;!-- 为 ECharts 准备一个定义了宽高的 DOM --&gt;
      &lt;div id="main" style="width: 600px;height:400px;"&gt;&lt;/div&gt;
  &lt;/body&gt;</code></pre>
                </li>
                <li>
                  【完整写法】然后就可以通过 echarts.init 方法初始化一个 echarts 实例并通过 setOption 方法生成一个简单的柱状图，下面是完整代码。
                  <pre><code class="language-html line-numbers">  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
    &lt;head&gt;
      &lt;meta charset="utf-8" /&gt;
      &lt;title&gt;ECharts&lt;/title&gt;
      &lt;!-- 引入刚刚下载的 ECharts 文件 或者 直接引入CDN --&gt;
      &lt;script&gt; src="echarts.js"&gt;&lt;/script&gt;
    &lt;/head&gt;
    &lt;body&gt;
      &lt;!-- 为 ECharts 准备一个定义了宽高的 DOM --&gt;
      &lt;div&gt; id="main" style="width: 600px;height:400px;"&gt;&lt;/div&gt;
      &lt;script&gt; type="text/javascript"&gt;
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 指定图表的配置项和数据
        var option = {
          title: {text: 'ECharts 入门示例'},
          tooltip: {},
          legend: {data: ['销量']},
          xAxis: {data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']},
          yAxis: {},
          series: [
            {name: '销量',type: 'bar',data: [5, 20, 36, 10, 10, 20]}
          ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      &lt;/script&gt;
    &lt;/body&gt;
  &lt;/html&gt;</code></pre>
                </li>
              </ol>
            </li>
            <li>
              模版引入方法
              <ol>
                <li>引入js 或者 cdn</li>
                <li>创建一个DOM容器 id= main 并设置宽高，也可以用js来控制宽高，官方文档有写</li>
                <li>写script， 初始化容器（官网下载模版，复制option配置项），并配置，最后 显示</li>
              </ol>
              <pre><code class="language-html line-numbers">  &lt;!DOCTYPE html&gt;
  &lt;html lang="en"&gt;
  &lt;head&gt;
      &lt;meta charset="UTF-8"&gt;
      &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
      &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
      &lt;title&gt;Document&lt;/title&gt;
      &lt;!-- 第一步 --&gt;
      &lt;script src="https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js"&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
      &lt;!-- 第二步 --&gt;
      &lt;div id="main" style="width: 600px;height:400px;"&gt;&lt;/div&gt;
      &lt;script type="text/javascript"&gt;
          var myChart = echarts.init(document.getElementById('main'));  // 第三步1
          var option = ｛                                                // 第三步2
              xAxis: {type: 'category',boundaryGap: false, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']},
              yAxis: { type: 'value'},
              series: [｛ data: [820, 932, 901, 934, 1290, 1330, 1320],type: 'line',areaStyle: {｝｝]
          };
          myChart.setOption(option);                                    // 第三步3
      &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;</code></pre>
            </li>
          </ul>
        </div>
      </el-card>
    </template>
  </card-container>
</template>

<script setup lang="ts" name="Javascript3Page">
import { ref } from 'vue';

const data = ref([
  { id: 1, h2: '网页效果' },
  { id: 2, h2: '其他拓展' },
  { id: 3, h2: '本地存储' },
  { id: 4, h2: '高级js' },
  { id: 5, h2: 'ES6' },
  { id: 6, h2: 'SVG' }
]);
</script>

<style scoped lang="scss"></style>
