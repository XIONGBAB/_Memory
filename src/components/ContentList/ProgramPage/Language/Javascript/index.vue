<template>
  <card-container title="javascript" :data="data">
    <template #svg>
      <svg
        width="40"
        height="40"
        t="1699148574627"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="8149"
      >
        <path d="M64 64h896v896H64z" fill="#F5DE19" p-id="8150" />
        <path
          d="M665.888 764a91.712 91.712 0 0 0 83.2 51.2c34.88 0 57.184-17.44 57.184-41.6 0-28.8-22.912-39.104-61.312-55.904l-21.056-9.024c-60.8-25.888-101.12-58.304-101.12-126.848 0-63.136 48-111.232 123.296-111.232a124.448 124.448 0 0 1 119.744 67.424L800 580.096A57.248 57.248 0 0 0 745.952 544a36.64 36.64 0 0 0-40.288 36.096c0 25.248 15.648 35.488 51.776 51.2l21.056 9.024c71.552 30.688 112 61.952 112 132.256 0 75.808-59.552 117.344-139.52 117.344a161.76 161.76 0 0 1-153.44-86.112z m-297.44 7.296c13.216 23.456 25.248 43.296 54.176 43.296 27.648 0 45.12-10.816 45.12-52.896v-286.304h84.192v287.424c0 87.168-51.2 126.848-125.728 126.848a130.72 130.72 0 0 1-126.304-76.8z"
          fill=""
          p-id="8151"
        />
      </svg>
    </template>
    <template #describe>
      <p>
        JavaScript最初是由Netscape的工程师布兰登·艾奇（Brendan
        Eich）在1995年设计的，最初命名为LiveScript，但为了利用当时流行的Java语言的市场效应，它被改名为JavaScript。
      </p>
    </template>
    <template #content>
      <el-card id="part1" shadow="hover">
        <h2>前言</h2>
        <div class="ls-cot">
          <p>注意事项</p>
          <ul>
            <li>js尽量用 '单引号' ，和 css 区分开。</li>
            <li>JS-CSS-HTML Formatter： vscode 自动格式化代码插件</li>
            <li>
              js写代码，全部写在末尾，因为文档页面从上往下加载，如果需要在上面，需要加个load事件，等页面加载完了再加载js
            </li>
            <li>
              写代码的时候，注意 大小写 否则程序不执行，有些不报错，有些会报错
            </li>
            <li>数据采用 数组对象形式存储会比较好管理</li>
            <li>菜鸟网址查询 ：https://www.runoob.com/ 也可以使用菜鸟工具</li>
            <li>检查元素</li>
          </ul>
          <pre><code class="language-js line-numbers">  const element = document.querySelector('#my-element');

  if (element) {
    element.style.color = 'red';
  } else {
    console.error('Element not found');
  }</code></pre>
          <p>JavaScript 历史</p>
          <ul>
            <li>发明人：布兰登-艾奇（brendan Eich ，1961年~）</li>
            <li>神奇的大哥在1995年利用10天完成JavaScript设计。</li>
            <li>
              网景公司最初命名为LiveScript，后来在与Sun合作之后将其改名为JavaScript。
            </li>
          </ul>
          <p>JavaScript是什么</p>
          <ul>
            <li>
              JavaScript是世界上最流行的语言之一，是一种运行在客户端的脚本语言（Script是脚本的意思）
            </li>
            <li>
              脚本语言：不需要编译，运行过程中由js解释器（js引擎）逐行来进行解释并执行
            </li>
            <li>现在也可以基于Nodejs 技术进行服务器端编程</li>
            <li>js是一种解释型语言，面向对象语言</li>
            <li>小知识点： 最早有 56k猫: 28k上传 28k下载</li>
          </ul>
          <p>Js的用处</p>
          <ul>
            <li>表单动校验（密码强度检测）（JS产生最初的目的）</li>
            <li>网页特效</li>
            <li>服务端开发（Nodejs）</li>
            <li>桌面程序（Electron）</li>
            <li>App（Cordova）</li>
            <li>控制硬件-物联网（Ruf）</li>
            <li>游戏开发（cocos2d-js）</li>
          </ul>
          <p>浏览器分成两部分 (渲染引擎 和 js引擎)</p>
          <ul>
            <li>
              渲染引擎：
              用来解析HTML与CSS，俗称内核，比如chrome浏览器的blink，老版本的webkit
            </li>
            <li>
              JS引擎：
              也称为JS解释器。用来读取网页中的JavaScript代码，对其处理后运行，比如chrome浏览器的V8
            </li>
            <li>
              浏览器本身并不会执行JS代码，而是通过内置JavaScript引擎（解释器）来执行JS代码。
            </li>
            <li>
              JS引擎执行代码时逐行解释。每一句源码（转换为机器语言），然后由计算机去执行，所以JavaScript
              语言归为脚本语言，会逐行解释执行。
            </li>
            <li>
              ECMAScript是一个标准，而这个标准需要由各个厂商去实现。不同的浏览器厂商对该标准会有不同的实现。
            </li>
          </ul>
          <table>
            <tbody>
              <tr>
                <th>浏览器</th>
                <th>实现方式</th>
              </tr>
              <tr>
                <td>FireFox</td>
                <td>SpiderMonkey</td>
              </tr>
              <tr>
                <td>IE</td>
                <td>JScript / Chakra</td>
              </tr>
              <tr>
                <td>Safari</td>
                <td>JavaScriptCore</td>
              </tr>
              <tr>
                <td>Chrome</td>
                <td>V8 速度最快</td>
              </tr>
              <tr>
                <td>Carakan</td>
                <td>Carakan</td>
              </tr>
            </tbody>
          </table>
          <p>js组成</p>
          <pre class="pre">
                  ---javaScript---
  ECMAScript            DOM                   BOM
  js语法           页面文档对象模型      浏览器对象模型
          </pre>
          <ul>
            <li>
              ECMAScript是由ECMA国际（ECMA（Europe Computer Manufacure
              Association
              ）原欧洲计算机制造商联盟）进行标准化的一门编程语言，这种语言在万维网上应用广泛，它往往被称为JavaScript或JScript，但实际上后两者是ECMAScript语言的实现和扩展。，使用最多的是ECMAScript5（ES5），最新版本：ES6采用类似强类型。（因为javascript的网景公司捐献出来，由ECMA来统一标准，所以现在遵循的是ECMAS的语法规则，也简称
              ES）ECMAScript:
              ECMAScript规定了JS的编程语法和基础核心知识，是所有浏览器厂商共同遵守的一套JS语法工业标准。
            </li>
            <li>
              DOM 文档对象模型（DocumentObject
              Model），是W3C组织推荐的处理可扩展标记语言的标准编程接口。通过DOM提供的接口可以对页面上的各种元素进行操作（大小、位置、颜色等）。
            </li>
            <li>
              BOM 浏览器对象模型（Browser Object
              Model，）是指浏览器对象模型，它提供了独立于内容的、可以与浏览器窗口进行互动的对象结构。通过BOM可以操作浏览器窗口，比如弹出框、控制浏览器跳转、获取分辨率等
            </li>
          </ul>
          <p>js书写方式(双标签)</p>
          <pre><code class="language-html line-numbers">  // 行内：
    &lt;input type="button" value="按钮" onclick="alert('弹窗')"&gt;&lt;/script&gt;          // 不推荐使用，要做到结构 样式 行为 分离
    &lt;a href=" javascript:;"&gt;/* 可以写在href里面来阻止跳转 */ &lt;/a&gt;                  // javascript:void(null)

  // 内嵌：
    &lt;script type='text/javascript'&gt;/* 写入想要的代码 */  &lt;/script&gt;                // type 可以省略

  // 外部：
     &lt;script src="url"&gt;/* 里面不能再写js代码， 否则不执行这里面的js代码 */&lt;/script&gt;  // 推荐使用

  // 引入时加上 defer 属性，表示延迟执行，等到整个页面全部加载完成，再执行js代码，这样页面加载速度会更快。相当于调了onload监听
  &lt;script defer src="url"&gt;&lt;/script&gt;</code></pre>
          <ul>
            <li>
              必须嵌套在html文件中运行，可以嵌套在head标签里面，也可以嵌套在
              body
            </li>
            <li>
              JavaScript的代码必须嵌套在&lt;script&gt;标签里面，由于现在的主流浏览器默认的脚本语言就是JavaScript，所以不写type类型也是可以的
            </li>
          </ul>
          <p>注释</p>
          <pre><code class="language-js line-numbers">  1.单行   //注释内容                      快捷键 ctrl + ？
  2.多行   /*注释内容*/                    快捷键  shift + alt + a    vscode 可以修改快捷键
  3.解释型文档注释，先写好代码               输入：  /** 然后回车就会生成对应的说明

  /**
  * 说明：对两个操作数进行加法运算
  * @param {number} a 第一个操作数 {}里 写的是类型
  * @param {number} b 第二个操作数 {}里 写的是类型
  * @returns 返回两个操作数的和
  */
      function add(a, b) {
          return a + b;
      }</code></pre>
          <p>js输入输出语句</p>
          <ul>
            <li>
              为了方便信息的输入输出，JS中提供了一些输入输出语句，其常用的语句如下：
            </li>
          </ul>
          <pre><code class="language-js line-numbers">  alert("msg");              /* 浏览器警告弹窗 */
  confirm('提示信息');        /* 确认框 确认为true 取消为 false */
  prompt("请输入内容");       /* 弹出输入框，用户可以输入内容，取出来的值是字符型 */
  document.title = "";       /* 向html文档的title部分写入内容 */
  document.write()           /* 向body里面写入内容 */
  console.table(window);     /* 输出表格信息 */
  console.log("11");         /* 控制台打印 */
  console.time('a');         /* 计时器，（）里传入一个自定义的字符串，作为标识符， */
  console.timeEnd('a');      /* 结束计数器 （）里传入自定义的标识符名，作用在于起始行到结束行代码运行的时间 */
  console.warn('');          /* 输出警告信息 */
  console.error('a');        /* 输出错误信息 */</code></pre>
          <p>规范</p>
          <ul>
            <li>
              开启严格模式： "use strict"
              <ol>
                <li>全局使用：直接在script标签的第一行写上即可</li>
                <li>局部使用：在块级作用域的第一行写上即可</li>
              </ol>
            </li>
            <li>js严格区分大小写</li>
            <li>
              每条语句以分号结尾，不添加的话，浏览器会自动添加，但是会消耗浏览器的资源，有时会加错。
            </li>
            <li>js会忽略多个空格和换行</li>
          </ul>
          <p>控制台错误解释</p>
          <ul>
            <li>
              Uncaught ReferenceError: Alert is not defined // 引用错误，Alert
              未定义
            </li>
            <li>$ is not defined</li>
          </ul>
        </div>
      </el-card>
      <el-card id="part2" shadow="hover">
        <h2>变量</h2>
        <div class="ls-cot">
          <p>字面量和变量</p>
          <ul>
            <li>
              字面量，都是一些不可改变的值，常亮，比如1 2 3 4 5
              6，1不可能变为2，是不可变的
              <ol>
                <li>本质：可以直接使用，但是一般不会直接使用字面量</li>
              </ol>
            </li>
            <li>
              变量，就是装数据的容器，变量可以装字面量，而且值是可以任意改变的
              <ol>
                <li>本质：变量是程序在内存中申请的一块用来存放数据的空间。</li>
                <li>变量存储的是内存地址。</li>
              </ol>
            </li>
          </ul>
          <p>变量的使用</p>
          <ul>
            <li>
              声明变量： var age;
              <ol>
                <li>
                  var: 是一个JS关键字，用来声明变量（variable 是变量的意思）。
                  使用该关键字声明变量后，计算机会自动为变量分配内存空间，不需要程序员管理
                </li>
                <li>
                  age:
                  是程序员定义的变量名，我们要通过变量名来访问内存中分配的空间
                </li>
              </ol>
            </li>
            <li>
              赋值 : age = 10 ;
              <ol>
                <li>
                  =: 用来把右边的值赋给左边的变量空间中，此处代表赋值的意思
                </li>
                <li>10: 变量值是程序员保存到变量空间里的值</li>
              </ol>
            </li>
            <li>变量的初始化： var age = 10; // 直接简写</li>
          </ul>
          <p>更新变量</p>
          <ul>
            <li>
              一个变量被重新复赋值后，它原有的值就会被覆盖，变量值将以最后一次赋的值为准。
            </li>
          </ul>
          <pre><code class="language-js line-numbers">  var age = 18;     // var一个变量赋值18
  age = 28;         // 变量 赋值 28，会覆盖前面的18</code></pre>
          <p>赋值多个变量 (用逗号隔开)</p>
          <pre><code class="language-js line-numbers">  var age = 18, name = ' 小强', address= 上海;
  /* 注意：
      var age;  console.log(age);       只声明不赋值            undefined
      console.log(age)                  不声明不赋值直接使用     报错
      age =10; console.log(age);        不声明只赋值            10   变量函数会提升，不声明，为全局变量，log 后还是能拿到
  */
  &lt;script&gt;
      age = 10;
      function getAge() {console.log(age);}
      getAge();                          // 10
  &lt;/script&gt;</code></pre>
          <p>ES6增加声明方式</p>
          <pre><code class="language-js line-numbers">  let a;
  let a,b,c;
  let e = 100;

  /* 好处：
       1、变量不能重复声明，和 var 不一样，不用担心被污染
       2、块级作用域 全局 函数 eval ，不止{} ,还有if else while for 里的作用域有效 */
      {
        let a = '块级作用域 ';
      }
        console.log('这里是访问不到块级作用域中 let 声明的变量');  // 如果使用var声明则可以访问
    // 3、不存在变量提升
        console.log(a);                                       // error : a is not defined
        var a = 1;
        let a = 1;                                            // 会直接报错，不存在变量声明之前去使用，会直接报错
    // 4、不影响作用域链接
      {
        let c = '123'
        function fn() {
            console.log(c);                                   // 不会影响作用域链 ，此层作用域没有，还是会往上一级查找
        }
        fn();                                                 // 输出 123
      }</code></pre>
          <p>值不能修改的量 称之为常量，const</p>
          <pre><code class="language-js line-numbers">  const Arr = ['1', '2', '3'];
  Arr.push('4');
  console.log(Arr);                    // 常量修改数组 不会报错

  // 1、一定要赋初始值 ，不能const a;会报错 // index.html:27 Uncaught SyntaxError: Missing initializer in const declaration
  // 2、常量使用大写（潜规则） const A = '常量名称大写';
  // 3、常量不能修改
      const B = '值为A';
      const B = '修改A值' ;             // 会报错 Uncaught SyntaxError: Identifier 'A' has already been declared
  // 4、块级作用域
  // 5、对于数组和对象的元素修改，不算做对常量的修改，不会报错</code></pre>
          <p>总结1</p>
          <ul>
            <li>var： 会变量提升，可以重复声明</li>
            <li>
              let：
              不会变量提升，不能重复声明，且块级作用域下可以重复声明，不影响外部let
              声明的变量
            </li>
            <li>
              const：
              不会提升，不可重复声明，不可赋值，常量在定义的时候必须要赋值，之后不可修改
            </li>
          </ul>
          <p>命名的规范</p>
          <ul>
            <li>
              由字母（A-Z
              a-z）、数字（0-9）、下划线（_）、美元符号（$）组成，如：usrAge，num01，name_1
            </li>
            <li>严格区分大小写。var app；和 var App；是两个变量</li>
            <li>不能以数字开头。18age是错误的</li>
            <li>
              不能是关键字、保留字。例如：var、for、while，this、name、string、number，
              注意name是系统关键字，要避免使用
            </li>
            <li>变量名必须有意义。MMD BBD nl → age</li>
            <li>
              遵守驼峰命名法。首字母小写，后面单词的首字母需要大写。myFirstName
            </li>
            <li>推荐翻译网站：有道 爱词霸</li>
            <li>
              允许使用特殊符号开头的 ： $变量名（ $name ） _变量名( _name )
            </li>
          </ul>
          <p>数据交换</p>
          <pre><code class="language-js line-numbers">  var temp;                 // 先声明一个临时空变量
  var apple1 = '青苹果',     // 右边值赋予给左边的变量
      apple2 = '红苹果';
  temp = apple1;            // 把apple1的值赋予给 temp
  apple1 = apple2;          // 此时再把apple2的值赋予给apple
  apple2 = temp;            // 最后把temp的值赋予给apple 2</code></pre>
          <p>总结2</p>
          <ul>
            <li>
              为什么需要变量？
              <ol>
                <li>因为我们一些数据需要保存，所以需要变量</li>
              </ol>
            </li>
            <li>
              变量是什么？
              <ol>
                <li>
                  变量就是一个容器，用来存放数据的。方便我们以后使用里面的数据
                </li>
              </ol>
            </li>
            <li>
              变量的本质是什么？
              <ol>
                <li>变量是内存里的一块空间，用来存储数据。</li>
              </ol>
            </li>
            <li>
              变量怎么使用的？
              <ol>
                <li>
                  我们使用变量的时候，一定要声明变量，然后赋值，声明变量本质是去内存申请空间。
                </li>
              </ol>
            </li>
            <li>
              什么是变量的初始化？
              <ol>
                <li>声明变量并赋值我们称之为变量的初始化</li>
              </ol>
            </li>
            <li>
              变量命名规范有哪些？
              <ol>
                <li>看命名规范文档</li>
              </ol>
            </li>
            <li>
              交换2个变量值的思路？
              <ol>
                <li>看变量文档</li>
              </ol>
            </li>
          </ul>
        </div>
      </el-card>
      <el-card id="part3" shadow="hover">
        <h2>数据类型</h2>
        <div class="ls-cot">
          <p>
            js的变量数据类型是只有程序在运行过程中，根据等号右边的值来确定的
          </p>
          <ol>
            <li>
              js是动态语言变量的数据类型是可以变化的
              <pre><code class="language-js line-numbers">  var x = 10;
  x = '字符串';

  /*
    检查数据类型可以使用  typeof   变量   console.log ( typeof a )       //  typeof (a )
    JS把数据类型分为两类（基本数据类型[前五中都是] 和 引用数据类型[object]）：
      Number      数字型，       包含整型值和浮点型值，如21、0.21
      Boolean     布尔值类型      如true、false，等价于1和0
      String      字符串类型      如张三”注意咱们js里面，字符串都带引号
      Undefined   Undefined     var a;声明了变量a但是没有给值，此时a=undefined
      Null        Null          var a = null;  声明了变量a为空值null
      object      对象
      *Symbol()   Symbol()      ES6增加的新对象数据类型，作用是用于确定一个唯一的数据，通常给对象添加唯一的属性或方法
   */</code></pre>
            </li>
            <li>
              数字型 Number：
              JavaScript数字类型既可以用来保存整数值，也可以保存小数（浮点数）。
              <pre><code class="language-js line-numbers">  var age = 21;        // 整数
                var Age = 21.3777;   // 小数，也称为浮点数</code></pre>
              <ul>
                <li>
                  数字型范围 （注意大小写）
                  <pre><code class="language-js line-numbers">  alert(Number.MAX_VALUE);    // 最大值 1.7976931348623157e+308 科学计数法10的308次方
  alert(Number.MIN_VALUE);    // 最小值 大于0，最小的正值 5e-3
  alert(Infinity);            // 无穷大 Infinity alert(Number.MIN_VALUE * 2);
  alert(-Infinity);           // 负无穷大 -Infinity alert(-Number.MIN_VALUE * 2);
  alert(NaN);                 // 非数字 Not a Number  ，表示非法的数字，不是一个数字
  alert(01 + 0.3);            // 对于金钱类的计算，精度要求比较大的时候不要用js计算，要在服务器上计算， 结果等于0.300...4
  let a = ...9n               // BigInt类型，表示任意精度的整数 ,尾巴加个n就能显示大整数，表示数字范围是无限大，取决于内存</code></pre>
                </li>
              </ul>
            </li>
            <li>
              字符串 String
              （在底层字符串是以字符数组的形式保存的，有索引号，也有长度属性length）
              <pre><code class="language-js line-numbers">  str = 'hello';
  var result = str[2];

  // 字符串型可以是引号中的任意文本，其语法为"双引号' '和 '单引号'，不加引号会报错
  // 注意: JS可以用单引号嵌套双引号，或者用双引号嵌套单引号（外双内单，外单内双）</code></pre>
              <ul>
                <li>*ES6 模版字符串: 使用 ` $(变量名)`</li>
                <li>
                  字符串转义符：
                  <ol>
                    <li>
                      要写到引号里面类似HTML里面的特殊字符，字符串中也有特殊字符，我们称之为转义符。
                    </li>
                    <li>转义符都是\开头的，常用的转义符及其说明如下：</li>
                  </ol>
                  <pre><code class="language-js line-numbers">  \n       换行符，n是newline的意思
  \\       斜杠\,多个斜杠就写多对  \\\\
  \'       单引号
  \"       双引号
  \t       tab缩进
  \b       空格，b是blank的意思</code></pre>
                </li>
                <li>
                  字符串长度：字符串是由若干字符组成的，这些字符的数呈就是字符串的长度。通过字符串的length属性可以获取整个字符串的长度。
                  <pre><code class="language-js line-numbers">  var strMSg = '123 456 758 595';
  alert(strMsg.length);             // 显示15， 因为空格也算一个字符</code></pre>
                </li>
                <li>
                  字符串的拼接 ： 数值相加，字符相连
                  <ol>
                    <li>
                      多个字符串之间可以使用 +
                      进行拼接，其拼接方式为字符+任何类型=拼接之后的新字符串
                    </li>
                    <li>
                      拼接前会把与字符串相加的任何类型转成字符串，再拼接成一个新的字符串
                    </li>
                  </ol>
                  <pre><code class="language-js line-numbers">  var string = '我是文字' + 15;
  alert(string);                    // 输出结果 我是文字15</code></pre>
                </li>
                <li>
                  字符串相连： 引引加加
                  <pre><code class="language-js line-numbers">  var myAge = prompt('请输入年龄: ');
  alert('您今年' + myAge + '岁')</code></pre>
                </li>
              </ul>
            </li>
            <li>
              布尔型 Boolean true = 1 false = 0
              <ul>
                <li>
                  布尔类型有两个值：true和false，其中true表示真（对），而false表示假（错）。
                  <pre><code class="language-js line-numbers">  var flag1 = true;
  var flag2 = false;
  console.log(flay1 + 1);           // 输出结果 2，布尔型可以做 加减运算
  console.log(flay2 + 1);           // 输出结果 1，布尔型可以做 加减运算</code></pre>
                </li>
                <li>
                  布尔类型用来保存一些状态，或者对立的一对数据，例如：
                  <ol>
                    <li>开、关</li>
                    <li>是、否</li>
                    <li>对、错</li>
                  </ol>
                </li>
                <li>
                  而且布尔类型通常是用来作为条件判断的
                  <ol>
                    <li>在PHP中 ’0’ 、[ ] 被转换成false</li>
                    <li>在JavaScript中，’0’、[ ] 会被转换成true</li>
                  </ol>
                </li>
                <li>
                  如何将数据类型进行强制转换呢？ Boolean()函数
                  <pre><code class="language-js line-numbers">  var str = "0";
  var arr = [];

  var res1 = Boolean(str);   /* true */
  var res2 = Boolean(arr);   /* true */</code></pre>
                </li>
              </ul>
            </li>
            <li>
              Undefined 和 Null
              <ul>
                <li>
                  一个声明后没有被赋值的变量会有一个默认值undefined（如果进行相连
                  或者 相加时，注意结果）
                </li>
                <li>null和undefined进行相等比较时会返回true</li>
                <li>
                  NaN不和任何值相等，包括它自身
                  <pre><code class="language-js line-numbers">  var variable;
  console.log(variable);           /* undefined */
  console.log("你好" +variable);    /* 你好undefined */
  console.log(11 + variable);      /* NaN */
  console.log(true + variable);    /* NaN */</code></pre>
                </li>
                <li>
                  一个声明变量给null值，里面存的值为空（学习对象时，我们继续研究null）
                  <pre><code class="language-js line-numbers">  var nu = null;
  console.log("你好" + nu);         /* 你好null */
  console.log(11 + nu);            /* 11 */
  console.log(true + variable);    /* 1 */</code></pre>
                </li>
              </ul>
            </li>
            <li>
              isNaN()
              这个方法用来判断非数字并且返回一个值如果是数字返回的是false，如果不是数字返回的是true
              <pre><code class="language-js line-numbers">  var a = 10;
  var b = '我';
  console.log(isNaN(a));           // false     isNaN(): is not a number
  console.log(isNaN(b));           // true</code></pre>
            </li>
          </ol>
          <p>进制</p>
          <pre><code class="language-js line-numbers">  // 1.八进制 0~7 我们程序里面数字前面加0 表示八进制   数字的前面加 0x 就代表十六进制
      var num = 010;

  // 2.十六进制 0 ～ 9 剩下的六位是 a ~ f
      var num = 0x9;    // log 输出为9
      num = 0xa;        // log 输出为10

  // 3.二进制以0b开头，只是了解，兼容性差，不建议使用
      var num = 0b10;</code></pre>
          <p>获取检测变量的数据类型</p>
          <ul>
            <li>
              typeof
              可用来获取检测变量的数据类型，返回的结果是一个字符串。最后一个
              null 是对象
            </li>
            <li>
              prompt( ); 中取出来的值是字符型
              <pre><code class="language-js line-numbers">  var num = 0x9;                  // log 输出为9
  console.log(typeof num);        // number
  var str = '你好';
  console.log(typeof str);        // string</code></pre>
            </li>
            <li>
              控制台输出的结果：
              <pre><code class="language-js line-numbers">  console.log(18);                // 18          绿色代表数字型
  console.log('18');              // 18          黑色代表字符型
  console.log(true);              // true        绿色代表数字类型
  console.log(undefined);         // undefined
  console.log(null);              // null</code></pre>
            </li>
            <li>
              字面量是在源代码中一个固定值的表示法，通俗来说，就是字面量表示如何表达这个值。
              <ol>
                <li>数字字面量： 8，9，10</li>
                <li>字符串字面量： 黑马程序员，”大前端”</li>
                <li>布尔字面量： true，false</li>
              </ol>
            </li>
          </ul>
          <p>数据类型转换</p>
          <ul>
            <li>
              使用表单、prompt获取过来的数据默认是字符串类型的，此时就不能直接简单的进行加法运算，
              而需要转换变量的数据类型。通俗来说，就是把一种数据类型的变量转换成另外一种数据类型。
            </li>
            <li>
              转换为字符串类型： 注意大小写，重点记住拼接方法，num1 和
              num2注意方式
              <pre><code class="language-js line-numbers">  var num1 = 1;
  console.log(num1.toString());         /* 调用谁谁的方法：转成字符串调方法 */
  num1 = num1.toString()                /* 转换后不会改变原变量，会在内存地址新增一个为1的字符串。重新赋值才会得到字符串1 */

  var num2 = 1;
  console.log(String(num2));            /* 字符串函数：强制转换字符串 */

  var num3 = 1;
  console.log(num3 + "我是字符串");       /* 拼接方法转换 */

  // 注意：NaN 和 undefined  是没有  toString 方法的</code></pre>
            </li>
            <li>
              转换为布尔型
              <pre><code class="language-js line-numbers">  // 代表空、否定的值会被转换为false， 如"、0、NaN、null、undefined  其余值都会被转换为true
  console.log(Boolean(""));                  // false
  console.log(Boolean(" "));                 // true 加了空格表示有字符
  console.log(Boolean(0));                   // false
  console.log(Boolean(NaN));                 // false
  console.log(Boolean(null));                // false
  console.log(Boolean(undefined));           // false
  console.log(Boolean("小白"));               // true
  console.log(Boolean(12));                  // true
  console.log(Boolean(Infinity));            // true
  console.log(Boolean(Object));              // true </code></pre>
            </li>
            <li>
              强制类型转换：通过JavaScript函数，强制将某种类型转换，类型转换的函数有如下：（注意大小写）
              <pre><code class="language-js line-numbers">  /* 强制类型转换：通过JavaScript函数，强制将某种类型转换，类型转换的函数有如下：（注意大小写） */

  Number();                /* 强制将其他类型的数据转换成数值 */
  parseInt();              /* 强制将其他类型的数据转换成整数 */
  parseFloat();            /* 强制将其他类型的数据转换成小数 */
  String();                /* 将其他类型的数据转换成字符串 */
  Boolean();               /* 将其他类型的数据转换成布尔类型 */</code></pre>
            </li>
            <li>
              案例：输入年份，求出年龄
              <pre><code class="language-js line-numbers">  var age = prompt('请输入您的出生年份');
  var year = 2021 - parseInt(age);           // prompt取值是字符串，但是 -号 是js的隐式转换，不用parseInt也可以计算
  alert(year);</code></pre>
            </li>
            <li>
              两数相加
              <pre><code class="language-js line-numbers">  var num1 = prompt('请输入您的第一个数值');
  var num2 = prompt('请输入您的第二个数值');
  var sum = parseInt(num1) + parseInt(num2);
  alert('总数为：'+sum+'')</code></pre>
            </li>
          </ul>
        </div>
      </el-card>
      <el-card id="part4" shadow="hover">
        <h2>标识符 关键字 保留字</h2>
        <div class="ls-cot">
          <p>前言</p>
          <ul>
            <li>
              标识符
              <ol>
                <li>
                  标识（zhi）符：就是指开发人员为变量、属性、函数、参数取的名字。标识符不能是关键字或保留字。
                </li>
              </ol>
            </li>
            <li>
              关键字
              <ol>
                <li>
                  关键字：
                  是指JS本身已经使用了的字，不能再用它们充当变量名、方法名。
                </li>
                <li>
                  包括：
                  break、case、catch、continue、default、delete、do、else、finally、for、function、if、in、instanceof、new、return、switch、this、throw、try、typeof、var、void、while、with等。
                </li>
              </ol>
            </li>
            <li>
              保留字
              <ol>
                <li>
                  实际上就是预留的“关键字”，意思是现在虽然还不是关键字，但是未来可能会成为关键字，
                  同样不能使用它们当变量名或方法名。
                </li>
                <li>
                  包括：
                  boolean、byte、char、class、const、debugger、double、enum、export、extends、fimal、float、
                  goto、implements、import、int、interface、long、mative、package、private、protected、public、
                  short、static、super、synchronized、throws、transient、volatile等。
                </li>
              </ol>
            </li>
          </ul>
        </div>
      </el-card>
      <el-card id="part5" shadow="hover">
        <h2>运算符</h2>
        <div class="ls-cot">
          <p>前言</p>
          <ol>
            <li>
              运算符（operator）也被称为操作符，是用于实现赋值、比较和执行算数运算等功能的符号。
              <ul>
                <li>
                  注意：
                  <ol>
                    <li>
                      运算符 + ： 任何值和NaN 相加，都为NaN
                      。不是number值的数字会转换为数字，和字符串+则会拼接
                    </li>
                    <li>
                      运算符 - ： 数字和任何相减，都会被转为数字，与 运算符 +
                      不同
                    </li>
                  </ol>
                </li>
              </ul>
            </li>
            <li>
              JavaScript中常用的运算符有：
              <pre><code class="language-js line-numbers">  10 + 10 = 20;  /* 加 */
  10 - 20 = -10; /* 减 */
  10 * 20 = 200; /* 乘 */
  10 / 20 = 0.5; /* 除 */
  9 %  2  = 1;   /* 取余 取模就是 除数 / 被除数 = 商 余 几 ， 如果 除数 小于 被除数 ，取模的值为除数本身 */
  5 ** 5 = 3125  /* ** 幂运算，5的5次方 */
  var a = 8;
  var b = 5;
  console.log(a % b); //3 如果 a > b ,值等于b</code></pre>
              <ul>
                <li>
                  浮点数值的最高精度是17位小数，但在进行算术计算时其精确度远远不如整数。不要直接判断两个浮点数是否相等！
                </li>
                <li>
                  1 + 2 *3
                  结果是7，注意算术运算符优先级，先乘除，后加减，有小括号先算小括号里面的
                </li>
                <li>闰年：能被400整除的 就可以用取模运算符</li>
                <li>
                  浮点数进行加减运算的时候要注意，避免用浮点数进行运算，后面会用取整
                </li>
              </ul>
            </li>
            <li>以上这些都属于二元运算符 例如： 1+2</li>
            <li>一元运算符只需要一个操作数 + - 例如： -1 + 123</li>
            <li>三元运算符需要三个操作数 例如： 1>2 ？1 ：2</li>
            <li>
              递增和递减运算符：
              ++在前等于原值，++在后等于新值，说的是表达式的值
              <pre><code class="language-js line-numbers">  var a = 10;
  console.log(a++);  // a++ = 10   a = a+1
  console.log(a);    // a = 11
  console.log(++a);  // a= a+1   a=a++  a++ = 11
  console.log(a);    // a=11

  a 和 a++   两个是不同的，一个是变量，一个是表达式，所以值是两个

  如果需要反复给数字变量添加或减去1，可以使用递增（++）和递减（--）运算符来完成。
  在JavaScript中，递增（++）和递减（--）既可以放在变量前面，也可以放在变量后面。
  放在变量前面时，我们可以称为前置递增（递减）运算符!
  放在变量后面时，我们可以称为后置递增（递减）运算符。
  (注意：递增和递减运算符必须和变量配合使用。)

  a       是变量，当后++或前++，马上增加1
  a++     是表达式，a++等于原变量的值
  ++a     是表达式，++a等于原变量自增后的新值
  a - -   是表达式，a- - 是等于自减前的值
  - -a    是表达式，- -a 是自减后的新值

  var a = 10;
  a++;
  console.log(a++);  //这里是调用了两次a++,所以   a++会等于 自增前的值  11</code></pre>
            </li>
            <li>
              前置递增运算符： 先加1，后返回原值
              <pre><code class="language-js line-numbers">  var  num = 10;
  // ++num前置递增，类似于num=num+1   num++=num</code></pre>
            </li>
            <li>
              后置递增运算符： 先返回原值，后加1
              <pre><code class="language-js line-numbers">  var  num = 10;
  // num++后置递增，类似于num=num++ , num=num+1</code></pre>
            </li>
            <li>
              练习--47集 错误的思路：
              <pre><code class="language-js line-numbers">  var a = 10;                //++在前，先加1 后赋值
  ++a;                       //a= 10+1=11  ，返回值等于 11+10 = 21
  var b = ++a + 2;           //b = 11+1=12  12 + 21 =23  23 + 2
  console.log(a);            // a=12
  console.log(b);            // b=25

  var c = 10;                //++在后，先赋值 后+1
  c++;                       //c= 10   ,c++返回值为 11
  var d = c++ + 2;           //d= 11+2
  console.log(d);            //d= 13
  console.log(c);            //c=10

  var e = 10;
  var f = e++ + ++e;         // 11 + 21
  console.log(f);            // f =32
  console.log(e);            // 10</code></pre>
            </li>
            <li>
              正确思路：
              <pre><code class="language-js line-numbers">  var a = 10;                // a=10
  ++a;                       // ++在前，先加1(a= (a+1)=11 ) 后赋值 ++a = a ,所以a++值是11 ;
  var b = ++a + 2;           // b= (a先加1,之前a是11，所以现在+1了，a =12 ), 再赋值 ++a =12(a),那么  12 + 2
  console.log(a);            // a=12
  console.log(b);            // b=12+2  b=14

  var c = 10;                // c = 10
  c++;                       // 独的话，值是一样的  c++ =11   c=11
  var d = c++ + 2;           // 表达式的话就不一样，先赋值， c++ =11(c), 然后自加1， c+1= 12
  console.log(d);            // 13
  console.log(c);            // 12

  var e = 10;                // e = 10
  var f = e++ + ++e;         // 先赋值 e++ =10  （e = e+1= 11）   +    先加1(e = e+1= 12)   ++e =12
  console.log(f);            // f = e++ + ++e =   10 +12
  console.log(e);            // 12</code></pre>
            </li>
            <li>
              案例
              <pre><code class="language-js line-numbers">  var n1 = 10,
      n2 = 20;
  var n = n1++;                         // n1++ = 10   n1 = 11
  console.log('1、n=' + n);             // 10
  console.log('2、n1=' + n1);           // 11
  n = ++n1;
  console.log('3、n=' + n);             // 12
  console.log('4、n=' + n1);            // 12
  n = n2--;                             // n2-- =20   n2= 19
  console.log('5、n=' + n);             // 20
  console.log('6、n2=' + n2);           // 19
  n = --n2;
  console.log('7、n=' + n);             // 18
  console.log('8、n2=' + n2);           // 18</code></pre>
            </li>
            <li>
              总结
              <ul>
                <li>
                  前置递增和后置递增运算符可以简化代码的编写，让变量的值+1比以前写法更简单
                </li>
                <li>单独使用时，运行结果相同</li>
                <li>与其他代码联用时，执行结果会不同</li>
                <li>后置：先原值运算，后自加（先人后己）</li>
                <li>前置：先自加，后运算（先已后人）</li>
                <li>
                  开发时，大多使用后置递增/减，并且代码独占一行，例如：num++；或者num--；
                </li>
              </ul>
            </li>
          </ol>
          <p>表达式和返回值</p>
          <ul>
            <li>
              表达式：是由数字、运算符、变量等以能求得数值的有意义排列方法所得的组合卡
            </li>
            <li>简单理解：是由数字、运算符、变量等组成的式子</li>
            <li>表达式最终都会有一个结果，返回给我们，我们称为返回值</li>
            <li>正常算式： 1 + 2 = 3 // 3就是返回的结果，也称为返回值</li>
            <li>
              程序表达式： 3 = 1 + 2 // 右边的表达式算出来的值，赋给左边
              ，3就是返回值
            </li>
          </ul>
          <p>比较运算符</p>
          <ul>
            <li>
              比较运算符（关系运算符）是两个数据进行比较时所使用的运算符，
            </li>
            <li>
              比较运算后，会返回一个布尔值（true/false）作为比较运算的结果。
            </li>
            <li>
              &gt;= 和 &lt;= 例如： 10 &gt;= 5 只要10大于了5 ，那么也会返回true
              ，大于或者等于，就会true
            </li>
            <li>任何值和 NaN 做比较，都是false</li>
            <li>
              如果两侧都是字符串，则会比较 字符串的 Unicode
              编码大小，如果字符串数量不一样，则会一位一位比
            </li>
            <li>
              例如
              <ol>
                <li>
                  “abc” &lt; “b”
                  此时会第一位相比较，因为没有第二位，如果两侧都有三位，则一位一位比
                  第一位都一样，则比较下一位
                </li>
              </ol>
            </li>
            <li>
              小知识
              <pre><code class="language-js line-numbers">  // 如果想输出Unicode编码，需要转义符     \u +编码            16进制
  // 如果在网页中使用，                   & # + 编码；        10进制

  &lt; 小于号                           1&lt;2           true
  &gt; 大于号                           1&gt;2           false
  &gt;=大于等于号（大于或者等于）         2&gt;=2          true
  &lt;=小于等于号（小于或者等于）         3&lt;=2          false
  ==判等号（会转型）                  37==37        true
  !=不等号                           37!=37        false
  === !==全等要求值和数据类型都一致    37===37       false

  注意：== 会默认转换数据类型          // 数字型（10）和字符型（' 10 '）数字比较，会把字符型数字转化成数字型

  console.log(18 == '18');           // true       字符串型数据会被转换
  console.log(18 != 18);             // false
  console.log(18 != '18');           // false      等于,值相等就可以
  console.log(18 === '18');          // false      全等：两侧的值，还有数据类型要完全相等才会true

  =                                  // 赋值把右边给左边
  ==                                 // 判断判断两边信是否相等（注意此时有隐式转换）
  ===                                // 全等判断两边的值和数据类型是否完全相同</code></pre>
            </li>
          </ul>
          <p>逻辑运算符概述</p>
          <ul>
            <li>
              *补充
              <ol>
                <li>如果写两个&， && ，左边遇到false就不会执行右边！</li>
                <li>
                  如果 &写一个，&左边false后，右边还会执行，但依然返回false
                </li>
              </ol>
            </li>
            <li>
              概念：逻辑运算符是用来进行布尔值运算的运算符，其返回值也是布尔值。后面开发中经常用于多个条件的判断
              <pre><code class="language-js line-numbers">  &&  "逻辑与"      简称  "与"     and true && false
  11  "逻辑或"      简称  "或"     or true || false
  !   "逻辑非"      简称  "非"     not ！ true</code></pre>
            </li>
            <li>
              && ：二个结果，也称为逻辑中断符，短路
              <ol>
                <li>两侧条件都为true，则结果为true，返回值为第二个true</li>
                <li>第一个为false。第二个直接不看，返回第一个false</li>
                <li>
                  第一个为true，此时会看第二个结果，如果为true，返回第二个true，如果为false，则返回false
                </li>
              </ol>
              <pre><code class="language-js line-numbers">  var res = 2 &gt; 1 && 3 &gt; 1;          var res = 2 &gt; 1 && 3 &gt; 1;
  //        true     true                      true     false
  result:true                        result:false</code></pre>
            </li>
            <li>
              || ：
              <ol>
                <li>
                  两侧条件判断，只要有一个判断为true，则结果为true
                  ，两侧为false，则返回false
                </li>
                <li>第一个为true，就不会看第二个值，直接返回第一个结果</li>
                <li>第一个为false，则返回第二个结果，不管true还是false</li>
              </ol>
              <pre><code class="language-js line-numbers">  var res = 2 &gt; 3 || 1 &lt; 2;          var res = 2 &gt; 1 || 3 &gt; 1;
  //        false    true                      false    false
  result:true                        result:false</code></pre>
            </li>
            <li>
              ！：
              <ol>
                <li>
                  如果不是true，则结果为false，如果不是false，则结果为true
                </li>
                <li>
                  逻辑非（！）也叫作取反符，用来取一个布尔值相反的值，如true的相反值是false
                </li>
                <li>！！ 可以取反两次</li>
              </ol>
            </li>
            <li>
              练习
              <pre><code class="language-js line-numbers">  var num = 7;
  var str = '我是文字七个字';
  console.log(num &gt; 5 && str.length &gt;= num);     // true &&   7 &gt;= 7(true)    结果 true
  console.log(num &lt; 5 && str.length &gt;= num);     // false &&  false    结果 false
  console.log(!(num &lt; 10));                      // false （true）  取反
  console.log(!(num &gt; 10 || str.length == num)); // ?(false || true)，!（true）  结果 false</code></pre>
            </li>
          </ul>
          <p>短路运算 （逻辑中断）</p>
          <ol>
            <li>
              短路运算的原理：当有多个表达式（值）时左边的表达式值可以确定结果时，就不再继续运算右边的表达式的；
              <ul>
                <li>
                  逻辑与 语法：
                  <ol>
                    <li>表达式1 && 表达式2</li>
                    <li>
                      如果第一个表达式的值为真，第二个表达式也为真，则返回表达式2
                    </li>
                    <li>
                      如果第一个表达式的值为假，第二个表达式就不看了，直接返回表达式1
                    </li>
                    <li>例子</li>
                  </ol>
                  <pre><code class="language-js line-numbers">  console.log(123 && 456);    // 左边的表达式，除了0，其余的数字都是true，所以这里返回右边的结果 456
  console.log(0 && 456);      // 左边的表达式，0是false，如果表达式1为false，则逻辑中断，返回第一个结果 0</code></pre>
                </li>
                <li>
                  逻辑或 语法：
                  <ol>
                    <li>表达式1 || 表达式2</li>
                    <li>
                      如果第一个表达式的值为真，第二个表达式就不看了，则返回表达式1
                    </li>
                    <li>
                      如果第一个表达式的值为假，第二个表达式为真，则返回表达式2
                    </li>
                    <li>例子</li>
                  </ol>
                  <pre><code class="language-js line-numbers">  console.log(123 || 456);                // 左边的表达式，除了0，其余的数字都是true，所以这里返回左边的结果 123
  console.log(0 || 456);                  // 左边的表达式，0是false，则返回表达式2，返回第二个结果   456
  console.log(0 || 456 || 123+456);       // 左边的表达式，0是false，则返回表达式2，表达式2和表达式3比较，表达式2为true，则中断，结果直接返回表达式2   456
  console.log(0 || null || undefined);    // 三个表达式，全部为false，则返回第三个表达式</code></pre>
                </li>
              </ul>
            </li>
            <li>
              重要：逻辑中断会影响后面的输出结果
              <pre><code class="language-js line-numbers">  var num = 0;
  console.log(123 || num++);    // 返回结果 123，因为逻辑中断，不执行第二句 num++
  console.log(num);             // 返回结果 0

  var num = 0;
  console.log(123 && num++);    // 返回结果 0，123为true,但是 num++ num=0，false，所以返回表达式2 , num++,  num = 1
  console.log(num);             // 返回结果 1</code></pre>
            </li>
          </ol>
          <p>赋值运算符</p>
          <pre><code class="language-js line-numbers">  /* 概念：用来把数据赋值给变量的运算符。 */

  var usrName = "我是值";
  var age = 10;            // 直接赋值
  age += 5;                // 15   +=  -=   相当于  age = age + 5;
  var age = 2;
  age *= 5;                // 10   *= /= %= 相当于  age = age * 5;
  age ??= 5;               // ??=  空值合并运算符，当左侧为null或者undefined时，返回右侧的值，否则返回左侧的值</code></pre>
          <p>优先级</p>
          <pre><code class="language-js line-numbers">  1    小括号        （）
  2    一元运算符     ++ -- ！
  3    算术运算符     顺序 *  / %   +  -
  4    关系运算符     &gt;   &gt;=    &lt;    &lt;=
  5    相等运算符     ==    !=    ===    !==
  6    逻辑运算符     顺序  &&   ||
  7    赋值运算符     =
  8    逗号运算符     ，</code></pre>
          <ul>
            <li>
              注意：
              一元运算符里面的逻辑非的优先级比或和非高，逻辑与比逻辑或优先级高，如果实在不知道优先级，直接拿括号（）
              括起来要先算的值
            </li>
            <li>
              练习1
              <pre><code class="language-js line-numbers">  // 3、结果为  true
  // 2、                true            &&          true    &&  true
  // 1、        false    或    true      与    取反 !(false) 与 true     与要比或大，先算与，再对比或
  console.log(4 &gt;= 6 || '人' != '阿凡达' && !(12 * 2 == 144) && true);  // true
  var num = 10;
  // 3、          true     与     true       结果肯定返回true
  // 2、          true     与     '22'                 === '22'
  // 1、         5 ==  5   与     '22'                 === '22'
  console.log(5 == num / 2 && (2 + 2 * num).toString() === '22');        // true</code></pre>
            </li>
            <li>
              练习2
              <pre><code class="language-js line-numbers">  //       F    &&   T   &&   F
  var a = 3 &gt; 5 && 2 &lt; 7 && 3 == 4;           // 大于号(开口向左)  &gt;  小于号（开口向右） &lt;
  console.log(a);                             // a= false
  //      F      ||   T   ||   T
  var b = 3 &lt;= 4 || 3 &gt; 1 || 3 != 2;
  console.log(b);                             // b = true
  var c = 2 === "2";
  console.log(c);                             // c = false
  var d = !c || b && a;                       // d = !(F) ||  T && F
  console.log(d);                             // d = true ||  F    d= T    </code></pre>
            </li>
          </ul>
        </div>
      </el-card>
      <el-card id="part6" shadow="hover">
        <h2>代码块</h2>
        <div class="ls-cot">
          <p>前言</p>
          <ul>
            <li>在JS中可以使用{}来为语句进行分组</li>
            <li>同一个{}中的语句我们称为是一组语句</li>
            <li>它们要么都执行，要么都不执行</li>
            <li>一个{}中的语句我们也称为叫一个代码块</li>
            <li>在代码块的后边就不用再写 分号 ;</li>
            <li>代码块只有分组作用，没有其他用途，不会隔离里面的代码</li>
          </ul>
          <pre><code class="language-js line-numbers">  {
      alert('第一条语句');
      console.log('第二条语句');
      console.log('第三条语句');
  }</code></pre>
        </div>
      </el-card>
      <el-card id="part7" shadow="hover">
        <h2>流程控制 -分支</h2>
        <div class="ls-cot">
          <p>前言</p>
          <ul>
            <li>
              在一个程序执行的过程中，各条代码的执行顺序对程序的结果是有直接影响的。
            </li>
            <li>
              很多时候我们要通过控制代码的执行顺序来实现我们要完成的功能。
            </li>
            <li>
              简单理解：
              <ol>
                <li>
                  流程控制就是来控制我们的代码按照什么结构顺序来执行。流程控制主要有三种结构，分别是
                </li>
                <li>
                  顺序结构、分支结构和循环结构，这三种结构代表三种代码执行的顺序。
                </li>
              </ol>
              <pre><code class="language-js line-numbers">  顺序结构       分支结构         循环结构
  顺序执行       条件执行         循环执行
    A           --判断--          A &lt;-------
    |           |     |           |        |
    B           A     B          判断------|    条件成立 yes，继续循环
                                  |   no
                                  |
                                跳出循环</code></pre>
            </li>
            <li>
              顺序结构：是程序中最简单、最基本的流程控制，它没有特定的语法结构
              程序会按照代码的先后顺序，依次执行，程序中大多数的代码都是这样执行的。
            </li>
            <li>
              分支结构：由上到下执行代码的过程中，根据不同的条件，执行不同的路径代码（执行代码多选一的过程），从而得到不同的结果。
              JS语言提供了两种分支结构语句，if switch
              <ol>
                <li>
                  if 双分支语句：
                  如果条件表达式结果为true，则执行代码1，如果为false，则跳过执行代码1，执行else后面的执行代码2。
                  <pre><code class="language-js line-numbers">  if(条件表达式){           // 如果成立执行下面代码1
      执行代码1
  }else{                  // 否则进入执行代码2
      执行代码2
  }</code></pre>
                </li>
                <li>
                  if 多分支语句: else if 可以写多个
                  <pre><code class="language-js line-numbers">  if(条件表达式1){          // 如果成立执行下面代码1
      执行代码1
  }else if(条件表达式2){    // 否则进入执行代码2
      执行代码2
  }else{
      以上条件都不成立时 执行最后这条代码
  }</code></pre>
                </li>
              </ol>
            </li>
            <li>
              switch 语句:
              <ol>
                <li>
                  switch 语句也是多分支语句也可以实现多选1，语法结构switch
                  转换、开关 case 小例子或者选项的意思
                  <pre><code class="language-js line-numbers">  switch (表达式) {
    case value1:
        执行语句1;
        break;     // 退出语句
    case value2:
        执行语句2;
        break;     // 退出语句
        ...        // 可以写很多个case
    default:
        执行最后一条语句;
  }

  // 省略写法
  switch (表达式) {
      case value1:
      case value2:
          console.log(1);
          break;
      case value3:
      case value4:
          console.log(2);
          break;
      default:
          console.log(3);
  }
  // 当代码相同时候，可以省略重复代码，因为碰到break才会跳出循环，所以会执行下一个case</code></pre>
                </li>
              </ol>
            </li>
            <li>
              执行思路：
              <ol>
                <li>
                  让表达式的值和case 的 value
                  相匹配，全等了，执行语句，如果都不全等，则执行default：
                </li>
                <li>
                  switch语句也是多分支语句，它用于基于不同的条件来执行不同的代码。
                </li>
                <li>
                  当要针对变量设置一系列的特定值的选项时，就可以使用switch。
                </li>
              </ol>
            </li>
            <li>
              注意
              <ol>
                <li>我们开发里面 表达式 我们经常写成 变量</li>
                <li>
                  我们num的值 和 case里面的值相匹配的时候是 全等
                  必须是值和数据类型一致才可以， num === 1
                </li>
                <li>
                  如果不写 break;
                  来退出循环语句，则会执行下面的代码。执行完所有没带 break 的
                  case 和最后的 default：
                </li>
              </ol>
            </li>
            <li>
              总结：switch 语句和if else if 语句的区别
              <ol>
                <li>一般情况下，它们两个语句可以相互替换</li>
                <li>
                  switch..case
                  语句通常处理case为比较确定值的情况，而if..else..语句更加灵活，常用于范围判断（大于、等于某个范围）
                </li>
                <li>
                  switch
                  语句进行条件判断后直接执行到程序的条件语句，效率更高。而if..else语句有几种条件，就得判断多
                </li>
                <li>当分支比较少时，if..else语句的执行效率比switch语句高。</li>
                <li>
                  当分支比较多时，switch语句的执行效率比较高，而且结构更清晰。
                </li>
              </ol>
            </li>
            <li>
              案例
              <pre><code class="language-js line-numbers">  // 练习1
  var age = prompt('请输入您的年龄');
  var age2 = 18;
  if (age &gt;= age2) {
      // 推荐写法， age &gt;= age2  因为这里不需要parseIbt转型，因为等号会转换数据类型
      // 复杂写法： parseInt(age) &gt; age2  这里需要parseInt转型，因为输出的是字符串
      alert('您已经满18岁，可以进入网吧了');
  } else {
      alert('您当前年龄为' + age + '岁，未满18岁，不允许进入网吧');
  }

  // 练习2: 检测输入的年份是否是闰年
  var year = prompt('请输入需要检测的年份');
  if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
      alert('' + year + ' 是闰年');
  } else {
      alert('' + year + ' 是平年');
  }

  // 练习3
  var num1 = prompt('请输入您的分数');
  if (num1 &gt;= 90) {
      alert('A');
  } else if (num1 &gt;= 80) {
      alert('B');
  } else if (num1 &gt;= 70) {
      alert('C');
  } else if (num1 &gt;= 60) {
      alert('D');
  } else {
      alert('E');
  }

  // 练习4
  var fruit = prompt('请输入您查询的水果');
  switch (fruit) {
      case '榴莲':
          console.log('35元/斤');
          break;
      case '苹果':
          console.log('10元/斤');
          break;
      case '臭豆腐':
          console.log('没有此水果');
          break;
      default:
          console.log('停售');
  }

  // 练习5
  var num1 = prompt('请输入第一个数值');
  var num2 = prompt('请输入第二个数值');
  if (num1 &gt; num2) {
      alert(num1 + '大于' + num2);
  } else if (num1 == num2) {
      alert(num1 + '等于' + num2);
  } else {
      alert(num1 + '小于' + num2);
  }

  // 练习6
  var num1 = prompt('请输入一个数值');
  if (num1 % 2 == 0) {
      alert(num1 + '是偶数');
  } else {
      alert(num1 + '是奇数');
  }

  // 练习7: 排序
  var num1 = parseInt(prompt('num1 ='));          // 3
  var num2 = parseInt(prompt('num2 ='));          // 5
  var num3 = parseInt(prompt('num3 ='));          // 1

  if (num1 &lt; num2 & num1 &lt; num3) {                // num1 最小
      if (num2 &lt; num3) {                          // num2 最小
          alert(num3 + ',' + num2 + ',' + num1);
      } else
          alert(num2 + ',' + num3 + ',' + num1);
  } else if (num2 &lt; num1 && num2 &lt; num3) {        // num2 最小
      if (num1 &lt; num3) {                          // num1 最小
          alert(num3 + ',' + num1 + ',' + num2);
      } else {
          alert(num1 + ',' + num3 + ',' + num2);
      }
  } else {
      if (num1 &lt; num2) {
          alert(num2 + ',' + num1 + ',' + num3);
      } else {
          alert(num1 + ',' + num2 + ',' + num3);
      }
  }

  /* 练习8：判断月份有多少天
      输入年月输出该月份有多少天
      闰年公式：年份能4整除，但不能被100整除；或者年份能被400整除。闰年的2月份是29天，平年前2月份是28天。*/
  var year = parseInt(prompt('请输入年份：'));
  var month = parseInt(prompt('请输入月份：'));
  var days = 0;          // 表示天数
  // 算出days是多少
  // 判断哪些月份是31天
  if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
      days = 31;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
      // 判断哪些月份是30天
      days = 30;
  } else {
      // 进入else，就表示是2月份
      // 要别断当前年份是否是闰年
      if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
          days = 29;     // 闰余，2月是29天
      } else {
          days = 28;     // 平年，2月是28天
      }
  }
  console.log(year + '年' + month + '月有' + days + '天');

  /* 练习9: 判断输入年份得出当天是全年的第几天
      输入年月日，第出该日期是金年的着多少天 */
  let year = parseInt(prompt('请输入年份：'));
  let month = parseInt(prompt('请输入月份：'));
  let day = parseInt(prompt('请输入日期：'));
  let sum = 0;                // 用于表示总天数
  // 第出sum的具体值
  // 比如输入的日期是：2021-8-8。
  // 01.累加整月的天数   整月指的是1月到7月
  let i = 1;                  // 表示从1月开始循环
  while (i &lt; month) {         // 如装month是8，i可以取值为7
      //判i是几，从而确定都个月份有多少天
      switch (i) {
          case 1:
          case 3:
          case 5:
          case 7:
          case 8:
          case 10:
              sum += 31;
              break;
          case 4:
          case 6:
          case 9:
          case 11:
              sum += 30;
              break;
          default:
              if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                  sum += 29;   // 闰余，2月是29天
              } else {
                  sum += 28;   // 平年，2月是28天
              }
      }
      i++;                     // 每循环一次，i加1
  }
  // 02.再加上当前月份的天数   当前月份的天数是8
  sum += day;
  console.log(`${year}-${month}-${day}是全年的第${sum}天`);</code></pre>
            </li>
          </ul>
          <p>三元表达式</p>
          <ul>
            <li>
              三元表达式也能做一些简单的条件选择。有三元运算符组成的式子称为三元表达式
            </li>
            <li>
              如果条件表达式结果为真，则返回 表达式1
              的值，如果条件表达式为假，则返回 表达式2 的值， 语法结构
              条件表达式 ？ 表达式1：表达式2
              <pre><code class="language-js line-numbers">  var num = 10 ;
  var result = num > 5 ? ' true ' : ' false'        // 表达式是有返回值的，所以初始化一个变量接收</code></pre>
            </li>
            <li>
              练习
              <pre><code class="language-js line-numbers">  var num1 = prompt('请输入您的数字');
  var result = num1 &lt; 10 ? '0' + num1 : num1;    // 需要接收值，给个变量
  alert(result);</code></pre>
            </li>
          </ul>
        </div>
      </el-card>
      <el-card id="part8" shadow="hover">
        <h2>循环</h2>
        <div class="ls-cot">
          <p>可以重复执行某些代码</p>
          <ol>
            <li>
              在程序中，一组被重复执行的语句被称之为循环体，能否继续重复执行，取决于循环的终止条件。
            </li>
            <li>
              由循环体及循环的终止条件组成的语句，被称之为循环语句
              <pre><code class="language-js line-numbers">  for （初始化变量；条件表达式；操作表达式）{
      // 放入循环体
  }
  for (var num1 = 1; num1 &lt;= 1000; num1++) {console.log('1开始');}</code></pre>
            </li>
            <li>
              for循环:
              <ul>
                <li>
                  for 循环主要用于把某些代码循环若干次，通常跟计数有关系。
                </li>
                <li>
                  初始化变量就是用var声明的一个普通变量，通常用于作为计数器使用
                </li>
                <li>
                  条件表达式就是用来决定每一次循环是否继续执行就是终止的条件
                </li>
                <li>
                  操作表达式是每次循环最后执行的代码经常用于我们计数器变量进行更新（递增或者递减）
                </li>
                <li>代码体验我们重复打印100句你好</li>
                <li>
                  注意：循环执行代码顺序
                  <ol>
                    <li>
                      先执行计数器变量 var num1 =1；
                      只执行一次，然后条件判断，num1 <=100；
                    </li>
                    <li>条件判断为true，执行console.log</li>
                    <li>执行log</li>
                    <li>最后执行 num1++，此时的 num1++ 之后，num1 为 2</li>
                    <li>
                      那么num1 会不会小于等于 100，如果为真，则继续
                      ++，如果为假，则循环结束
                    </li>
                    <li>++ 是最后执行的</li>
                    <li>如果for( ; ; ) 里只写两个分号，则会成为死循环</li>
                  </ol>
                </li>
                <li>
                  练习1
                  <pre><code class="language-js line-numbers">  // 100-1000之间的水仙花数 例如 1^3 +5^3 +3^3 =153,个十百分别乘以3次幂，的和为本数，则是水仙数

for (var i = 100; i &lt; 1000; i++) {
    // 求百位数， /100
    var bai = parseInt(i / 100);
    // 求十位数   每个数 减去百位数 乘以100的和 除以 10
    var shi = parseInt((i - bai * 100) / 10);
    // 求个位数   每个数 % 10 余的就是个位数
    var ge = i % 10;
    // 判断是否是水仙花数
    if ((bai * bai * bai) + (shi * shi * shi) + (ge * ge * ge) === i) {
        console.log(i);
    }
}

// 简化 ，利用字符串的索引值
for (let i = 100; i &lt;1000; i++) {
  let str = String(i);
  if (str[0] ** 3 + str[1] ** 3 + str[2] ** 3 == i) {
      console.log(i);
  }
}</code></pre>
                </li>
                <li>
                  练习2
                  <pre><code class="language-js line-numbers">  // 100-1000之间的水仙数 例如 1^3 +5^3 +3^3 =153,个十百分别乘以3次幂，的和为本数，则是水仙数
  let i = 100;
  while (i &lt; 1000) {
      let bai = parseInt(i / 100);
      let shi = parseInt(i % 100 / 10);
      let ge = parseInt(i % 10);
      //判断是否是水仙数
      if ((bai * bai * bai) + (shi * shi * shi) + (ge * ge * ge) === i) {
          console.log(i);
      }
      i++;
  }</code></pre>
                </li>
              </ul>
            </li>
            <li>
              双重for循环
              <ul>
                <li>重点：外层循环控制高度，内层循环控制宽度</li>
                <li>
                  很多情况下，单层for循环并不能满足我们的需求，比如我们要打印一个5行5列的图形、打印一个倒直角三角形等，
                  此时就可以通过循环嵌套来实现。
                </li>
                <li>
                  循环嵌套是指在一个循环语句中再定义一个循环语句的语法结构，例如在for循环语句中，可以再嵌套一个for
                  循环， 这样的for循环语句我们称之为双重for循环。
                  <ol>
                    <li>
                      语法结构如下:
                      <pre><code class="language-js line-numbers">  for （外层初始化变量；外层条件表达式；外层操作表达式）{
      for （里层初始化变量；里层条件表达式；里层操作表达式）{
          // 执行语句
      }
  }
  var str = '';
  for (var i = 1; i <= 5; i++) {  //外层控制高度，也就是行数
      str = str + '⭐';
      for (var j = 1; j <= 5; j++) { //内层控制个数
          str = str + '⭐';
      }
     str = str + '\n'; // 如果一行打印完5个星星，就另起一行
  }
  console.log(str);</code></pre>
                    </li>
                  </ol>
                </li>
                <li>
                  小结
                  <ol>
                    <li>for 循环可以重复执行某些相同代码</li>
                    <li>
                      for 循环可以重复执行些许不同的代码，因为我们有计数器
                    </li>
                    <li>
                      for 循环可以重复执行某些操作，比如算术运算符加法操作
                    </li>
                    <li>随着需求增加，双重for循环可以做更多、更好看的效果</li>
                    <li>双重for循环，外层循环一次，内层for循环全部执行</li>
                    <li>for 循环是循环条件和数字直接相关的循环</li>
                    <li>分析要比写代码更重要</li>
                    <li>一些核心算法想不到，但是要学会，分析它执行过程</li>
                  </ol>
                </li>
              </ul>
            </li>
            <li>
              while 循环: 当条件表达式结果为true 则执行循环体否则退出循环
              <pre><code class="language-js line-numbers">  while （条件表达式）{
      // 循环体
  }
  var num = 1;
  while (num &lt;= 100){
      console.log('循环');
      num++;
  }</code></pre>
            </li>
            <li>
              do..while循环:执行思路跟while不同的地方在于do
              while先执行一次循环体在判断条件，
              如果条件表达式结果为真，则继续执行循环体，否则退出循环
              <pre><code class="language-js line-numbers">  do{
     // 执行代码
  } while （条件表达式）{
     // 循环体
  }
  var age = 1;
  do {
      console.log('今年已经 ' + age + ' 岁了');
      age++;
  } while (age &lt;= 100)</code></pre>
              <ul>
                <li>
                  循环小结
                  <ol>
                    <li>JS中循环有for、while、do while</li>
                    <li>三个循环很多情况下都可以相互替代使用</li>
                    <li>
                      如果是用来计次数，跟数字相关的，三者使用基本相同，但是我们更喜欢用for
                    </li>
                    <li>
                      while和do..while可以做更复杂的判断条件，比for 循环灵活一些
                    </li>
                    <li>
                      while和do..while执行顺序不一样，while先判断后执行，do..while先执行一次，再判断执行
                    </li>
                    <li>
                      实际工作中，我们更常用for循环语句，它写法更简洁直观，所以这个要重点学习
                    </li>
                  </ol>
                </li>
                <li>
                  循环
                  <pre><code class="language-js line-numbers">  for(){}：             // 计数循环，循环数组（索引数组）
  for...in()           // 循环，既可以遍历数组，又可以遍历对象的成员
  while()
  do...while()</code></pre>
                </li>
                <li>
                  循环案例
                  <pre><code class="language-js line-numbers">  /* 案例1：求1-100之间所有整数的累加和 案例分析
    需要循环100次，我们需要一个计数器i
    我们需要一个存储结果的变量sum，但是初始值一定是0
    核心算法：1+2+3+4...，sum = sum + i； */
    1+2+3+4+5
        3+3
            6+4
                10+5
                sum + i
                sum = sum + i

  var sum = 0;
  for (var i = 1; i &lt;= 100; i++) {
      sum += i;                                    // sum = sum + i;
  }
  console.log(sum);

  // 案例2：求1-100之间的奇数之和
  for (var i = 0, num1 = 0; i &lt; 100; i++) {        // var num1 = 0  也可以写在for里面
    if (i % 2 != 0) { num1 += i; }
  }
  console.log(num1);

  //案例3：求1-100之间所有平均值
  var sum = 0;
  for (var i = 1; i &lt;= 100; i++) {
      sum = sum + i;
  }
  num1 = sum / 100;
  console.log(num1);

  // 案例4：求3的倍数,在自增时可以直接写倍数
  for (let i = 3; i &lt;= 100; i += 3) {
      console.log(i);
  }

  // 案例5：求1-100之间所有奇数 和 偶数的 和
  var even = 0;
  var odd = 0;
  for (var i = 1; i &lt;= 100; i++) {
      if (i % 2 == 0) {even += i;} else {odd += i;}
  }
  console.log(even);
  console.log(odd);

  // 案例6：输入人数，几个人出几个分数，然后求平均值
  var num = prompt('请输入班级人数');
  var sum = 0;            // 求和的变量
  var average = 0;        // 求平均值的变量
  for (var i = 1; i &lt;= num; i++) {
      var score = prompt('请输入' + i + '名的分数')
      sum = sum + parseInt(score);
  }
  average = sum / num;
  console.log(sum);       // 总成绩
  console.log(average);   // 平均分

  // 案例7：一行输出五个小星星
  var str = '';
  for (var i = 1; i &lt;= 5; i++) {
      str = str + '⭐';
  }
  console.log(str);

  // 案例8：用户输入几行和几列，就打印出来几行和几列的星星
  var hang = prompt('请输入几行');
  var lie = prompt('请输入几列');
  var str = '';
  for (var i = 1; i &lt;= hang; i++) {
      for (var j = 2; j &lt;= lie; j++) {
          str += '⭐'
      }
      str += '\n';
  }
  console.log(str);

  // 案例9：每行减少一颗星星，倒着打印
  var str = '';
  for (var i = 1; i &lt;= 10; i++) {
      for (var j = i; j &lt;= 10; j++) {
          str += '⭐'
      }
      str += '\n';
  }
  console.log(str);

  // 案例10：每行加一颗星星，正着打印
  var str = '';
  for (var i = 1; i &lt;= 10; i++) {
      for (var j = 1; j &lt;= i; j++) {
          str += '⭐'
      }
      str += '\n';
  }
  console.log(str);
  /* 思路：
        先执行代码 i=1 i<=10
        进入for里层代码
        j=1 j<=i 1<=1 true 执行一句 str 打印出来了一个星星
        j++，此时的j=2 j<=i false 跳出循环，执行换行，
        执行 i++
        i=2 i<=10 开始进入循环 */

  // 案例11：99乘法表
  var str = '';
  for (var i = 1; i &lt;= 9; i++) {
      for (var j = 1; j &lt;= i; j++) {
          str += i + 'x' + j + '=' + i * j;     // str += j + 'x' + i + '=' + i * j;  列先开始
          // 空格方法1：   str += ' ';
          // 空格方法2：   str += i + 'x' + j + '=' + i * j + '\t';
      }
      str += '\n';
  }
  console.log(str);

  // 用模版字符串简写
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= i; j++) {
        num += `${i} x ${j} = ${i * j} \t`;
    }
    num += "\n";
  }
  console.log(num);

  // 案例12：while 循环体，打印出来 1-100的所以整数和
  var j = 1;
  var num = 1;
  while (j &lt;= 100) {
      num += j
      j++;
  }
  // 案例13： while 循环体，当输入我爱你的时候程序为true,跳出循环，如果为false,则一直提示你爱我吗？
  var text1 = prompt('你爱我吗？');
  while (text1 !== '我爱你') {
      text1 = prompt('你爱我吗?');
  }
  // 案例14：判断用户输入密码和用户名。如果为admin ,密码为123456，则显示登录成功，否则，请重新输入
  var userName = prompt('请输入用户名');
  var password = prompt('请输入密码');
  while (userName != 'admin' || password != '123456') {
      userName = prompt('请重新输入用户名');
      password = prompt('请重新输入密码');
  }
  alert('登录成功');

  // 案例15：简易ATM，
  var money = 100;              // 初始钱数
  var option;                   // 操作选项
  do {
      option = prompt('请输入您要的操作：' + '\n' + '1.存钱' + '\n' + '2.取钱' + '\n' + '3.显示余额' + '\n' + '4.退出');
      switch (option) {
          case '1':             // 存钱
              var save = prompt('请您输入存入的钱数：');
              money += parseFloat(save);
              alert('您的余额为' + money + '元');
              break;
          case '2':             // 取钱
              var draw = prompt('请您输入要取的钱数：');
              money -= parseFloat(draw);
              alert('您的余额为 ' + money + '元');
              break;
          case '3':             // 显示余额
              alert('您的余额为' + money + '元');
              break;
          case '4':             // 退出
              alert('正在退出...');
              break;
          default:              // 其它情况
              alert('您的输入有误，请重新输入');
      }
  } while (option != 4)
  /* 思路：
        里面现存有100块钱
        如果存钱，就用输入钱数加现存的钱数，之后弹出余额提示
        如果取钱，就减去取钱的数，显示余额
        如果显示余额，就输出余额
        如果退出，弹出退出信息提醒 */

  // 案例16：输出1到100之间的数字,如果是3的倍数输出'3的倍数',如果是5的倍数输出'5的倍数',如果既是3的倍数又是5的倍数输出'3和5的倍数'
  for (var i = 1; i &lt;= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        document.write(i + ":是3和5的倍数&lt;br&gt;");
    } else if (i % 3 == 0) {
        document.write(i + ":是3的倍数&lt;br&gt;");
    } else if (i % 5 == 0) {
        document.write(i + ":是5的倍数&lt;br&gt;");
    } else {
        document.write(i + "&lt;br&gt;")
    }
  }

  // 案例17：有红白黑3种球若干个,其中红白球25个，白黑球共31个，红黑球共28个,求这三种球各有多少个？
  // 红白黑球
  // red+ bai = 25
  // bai +hei = 31
  // red +hei = 28
  for (var red = 0; red &lt;= 25; red++) {
      //拿到红球
      var bai = 25 - red;
      var hei = 31 - bai;
      if (red + hei == 28) {
          document.write("红球：" + red + "&lt;br&gt;");
          document.write("白球：" + bai + "&lt;br&gt;");
          document.write("黑球：" + hei + "&lt;br&gt;");
      }
  }

  // 案例18：鸡翁一值钱五，鸡母一值钱三，鸡雏三值钱一。百钱买百鸡，问鸡翁、鸡母、鸡雏各几何?
  /* 百钱白鸡
        1公鸡 = 5元
        1母鸡 = 3元
        3小鸡 = 1元
      问：100元买了100只鸡，请问公鸡、母鸡、小鸡买多少只
        公鸡 1 2 3： 85
        母鸡 1 2 3“： 87
        小鸡 ： 240  */
  for (var gong = 0; gong &lt; 20; gong++) {    // 获取公鸡的数量
      for (var mu = 0; mu &lt;= 33; mu++) {     // 获取母鸡的数量
           let xiao = 100 - gong - mu;          // 获取小鸡的数量
           if (gong * 3 + mu * 3 + xiao / 3 == 100) {
                document.write("公鸡：" + gong + "&lt;br&gt;");
                document.write("母鸡：" + mu + "&lt;br&gt;");
                document.write("小鸡：" + xiao + "&lt;br&gt;");
           }
      }
  }

  /* 百钱买百鸡：公鸡5文钱一只，母鸡3文钱一只，小鸡1文钱3只，请问公鸡母鸡小鸡各多少只
     假设会是公鸡：一共有20只
     假设全是母鸡：一共有33只
     假设会是小鸡：一共是100只 */
  for (let i = 0; i &lt;= 20; i++) {              // 公鸡
      for (let j = 0; j &lt;= 33; j++) {          // 母鸡
          for (let k = 0; k &lt;= 100; k += 3) {  // 小鸡
              if (i * 5 + j * 3 + k / 3 === 100 && i + j + k === 100) {
                  console.log(i, j, k);
              }
          }
      }
  }

  // 案例19：判断是否是质数
  var num = +prompt('输入数值');
  if (num &lt;= 1) {
      alert('请重新输入一个合法的新值');
  } else {
      var flag = true; // 默认当前num是质数，然后下面进行判断
      for (var i = 2; i &lt; num; i++) {
          if (num % i == 0) {
              // 判断，如果num能被i整除，说明这个数不是质数
              flag = false;
          }
      }
  }
  if (flag) {
      alert(num + '这个数是质数');
  } else {
      alert('这个数不是质数');
  }

  // 案例20：输入班级成绩，输出平均分
  /* 有三个班级，每个班级有四名学生，
     输入所有学生的成绩，并计算出每个班级的平均分
     外层循环表示班级 */
  for (let i = 1; i <= 3; i++) {
      console.log(`*************第${i}个班级 *************`);
      let sum = 0; // 表示每个班级的总分
      // 内层新环表示每个班级的学生
      for (let j = 1; j <= 4; j++) {
          // 接收每个学生的成绩
          let score = parseInt(prompt(`请输入第${i}个班级第${j}位学生成绩：`));
          // 将营个学生的成绩，员加到他对应的班级总分中
          sum += score; // sum = sum + score
          // 在内层for循环结束后，计算该班级的平均分
          let avg = sum / j;
          console.log(`第${i}个班级的平均分是：${avg}`);
      }
  }
  // 在二重循环中， 外层循环变量变化一次， 内层循环变量变化整个循环。

  // 案例21：鸡兔同笼 ，上数有35头，下数有94只脚，求笼中几只鸡，几只兔子
  /*
    解：假设兔子有X只，鸡有（35-X）只
        4x+2(35-x) = 94
          4x+70-2x = 94
             4x-2x = 94-70
                2x = 24
                 x = 12
        鸡的数量：（35-x）= 35 - 12 = 23
    答：兔子有12只，鸡有23只

    1、（兔的脚数×总只数－总脚数）÷（兔的脚数－鸡的脚数）=鸡的只数： ( 4 * 35 - 94)  / ( 4- 2 ) = 23
          总只数－鸡的只数=兔的只数： 35 - 23 = 12
    2、（总脚数－鸡的脚数×总只数）÷（兔的脚数－鸡的脚数）=兔的只数： （ 94 - 2 * 35） / ( 4- 2 ) = 12
          总只数－兔的只数=鸡的只数： 35-12 = 23
    3、总脚数÷2—总头数=兔的只数    ： 94 / 2 - 35 = 12
          总只数—兔的只数=鸡的只数 ： 35 - 12 = 23

    此题目中存在的相等关系有：鸡头数+兔头数=总头数；鸡脚数+兔脚数=总脚数。*/

  /* 代码计算方式
     35头  94只脚
     假设全部是鸡 一共有35只
     假设全部是兔子 一共有23只，因为不可能有35只，兔子4条腿，94 / 4 会等于23.5，不符合
     23只的话 23*4 = 92 比较合理，还剩两只脚
     1、第一层表示鸡的数量   */
  for (let i = 1; i &lt;= 35; i++) {
      for (let t = 1; t &lt;= 23; t++) {
          if (i + t == 35 && i * 2 + t * 4 === 94) {
              console.log(`鸡有${i}只，兔子有${t}只`);
          }
      }
  }

  // 案例22：打印等腰三角形
  //        *
  //       ***
  //      *****
  //     *******
  //    *********
  // 外层控制行
  for (let i = 1; i &lt;= 5; i++) {     // 倒三角  i=5 i>=1 i--   正和倒加起来就是菱形
    let str = ""; // 定义每行内容
    // 控制每行的空格数量
    for (let k = 5 - i; k > 0; k--) {
        str += " ";
    }
    //内层控制列
    for (let j = 1; j &lt;= i * 2 - 1; j++) { // 母鸡
        str += "*"
    }
    console.log(str);
  }

  // 案例23：镜像
  //    1
  //   121
  //  12321
  // 1234321
  // 123454321
  for (let i = 1; i &lt;= 5; i++) {       /* 定义每行打印的内容 */
    let str = "";
    for (let j = 5 - i; j > 0; j--) {  /* 拼接空格 */
        str += " ";
    };
    for (let j = 1 ; j &lt;= i; j++) {    /* 拼接每行数字的左侧 */
        str += j;
    };
    for (let j = i - 1; j > 0; j--) {  /* 拼接每行数字的右侧 */
        str += j;
    };
    console.log(str);
  } </code></pre>
                </li>
              </ul>
            </li>
          </ol>
          <p>断点调试</p>
          <ul>
            <li>
              浏览器 F12 &gt;&gt; 在Sources &gt;&gt; 代码页面，想看哪里执行过程
              就在行号点下，下断点，然后在控制里面执行下一步或者上一步
            </li>
            <li>可以在右侧添加变量进行观察</li>
            <li>
              还可以使用debugger关键字进行代码断点，直接在需要断点的代码行后添加debugger关键字即可;
            </li>
          </ul>
          <p>continue 、break (跟循环搭配使用)</p>
          <ul>
            <li>
              continue
              关键字用于立即跳出本次循环，继续下一次循环（本次循环体中，遇到continue后立马退出不执行，直接
              i++
            </li>
            <li>
              例1，吃5个包子，第3个有虫子，就扔掉第3个，继续吃第4个第5个包子，其代码实现如下：
              <pre><code class="language-js line-numbers">  // continue关键字退出本次（当前次的循环）继续执行剩余次数循环
  for (var i = 1; i &lt;= 5; i++) {
      if (i == 3) {
          continue; //只要遇见continue就退出本次循环直接跳到i++
      }
      console.log('我正在吃第' + i + '个包子');        //这里除了3不显示
  }</code></pre>
            </li>
            <li>
              例2
              <pre><code class="language-js line-numbers">  var sum = 0;
  for (var i = 1; i &lt;= 100; i++) {
      if (i % 7 == 0) {
          continue;           // 只要遇见continue就退出本次循环直接跳到i++
      }
      sum = sum + i;
  }
  console.log(sum);</code></pre>
            </li>
            <li>
              break 关键字 ,break 关键字用于立即跳出整个循环（循环结束）。
            </li>
            <li>
              例如，吃5个包子，吃到第3个发现里面有半个虫子，其余的不吃了，其代码实现如下：
              <pre><code class="language-js line-numbers">  var sum = 0;
  for (var i = 1; i &lt;= 100; i++) {
      if (i % 7 == 0) {
          break;      //只要遇见break 就退出循环
      }
      sum = sum + i;
  }
  console.log('我正在吃第' + i + '个包子');        // 这里只能显示吃到第7个包子，7后面的包子不执行</code></pre>
            </li>
            <li>
              使用break语句时，可以在break后面跟着一个label,这样break将会结束指定的循环，而不是最近的
              <pre><code class="language-js line-numbers">  // 循环名称可以自定义
  label:
  for (var i = 1; i &lt; 100; i++) {
      for(var j = 1; j&lt;=i;j++){
          break label;               // 结束哪个循环就写哪个循环名称，这样就不会结束离最近的循环了
      }
  }</code></pre>
            </li>
            <li>小知识：Math.sqrt ( ) 可以对一个数进行开方</li>
          </ul>
          <p>JavaScript命名规范</p>
          <ul>
            <li>
              标识符命名规范
              <ol>
                <li>
                  变量、函数的命名必须要有意义，
                  变量的名称一般用名词，函数的名称一般用动词
                </li>
              </ol>
            </li>
            <li>
              操作符命名规范：
              <ol>
                <li>操作符的左右两侧各保留一个空格</li>
              </ol>
            </li>
            <li>
              单行注释规范：
              <ol>
                <li>// 单行注释，前面注意有个空格</li>
              </ol>
            </li>
            <li>
              其他规范：
              <ol>
                <li>注意标签之间有空格， 结束花括号与开头标签对齐</li>
              </ol>
            </li>
          </ul>
        </div>
      </el-card>
    </template>
  </card-container>
</template>

<script setup lang="ts" name="JavascriptPage">
import { ref } from "vue";

const data = ref([
  { id: 1, h2: "前言" },
  { id: 2, h2: "变量" },
  { id: 3, h2: "数据类型" },
  { id: 4, h2: "标识符 关键字 保留字" },
  { id: 5, h2: "运算符" },
  { id: 6, h2: "代码块" },
  { id: 7, h2: "流程控制 -分支" },
  { id: 8, h2: "循环" },
]);
</script>

<style scoped lang="scss"></style>
