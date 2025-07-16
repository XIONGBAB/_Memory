<template>
  <card-container :data="data">
    <template #svg>
      <svg
        width="48"
        height="48"
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
      <h1>Javascript</h1>
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
            渲染引擎：用来解析HTML与CSS，俗称内核，比如chrome浏览器的blink，老版本的webkit
          </li>
          <li>
            JS引擎：也称为JS解释器。用来读取网页中的JavaScript代码，对其处理后运行，比如chrome浏览器的V8
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
          </pre
        >
        <ul>
          <li>
            ECMAScript是由ECMA国际（ECMA（Europe Computer Manufacure Association
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
        <pre><code class="language-javascript line-numbers">  // 行内：
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
            必须嵌套在html文件中运行，可以嵌套在head标签里面，也可以嵌套在body
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
            <ul>
              <li>全局使用：直接在script标签的第一行写上即可</li>
              <li>局部使用：在块级作用域的第一行写上即可</li>
            </ul>
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
      </el-card>
      <el-card id="part2" shadow="hover">
        <h2>变量</h2>
        <p>字面量和变量</p>
        <ul>
          <li>
            字面量，都是一些不可改变的值，常亮，比如1 2 3 4 5
            6，1不可能变为2，是不可变的
            <ul>
              <li>本质：可以直接使用，但是一般不会直接使用字面量</li>
            </ul>
          </li>
          <li>
            变量，就是装数据的容器，变量可以装字面量，而且值是可以任意改变的
            <ul>
              <li>本质：变量是程序在内存中申请的一块用来存放数据的空间。</li>
              <li>变量存储的是内存地址。</li>
            </ul>
          </li>
        </ul>
        <p>变量的使用</p>
        <ul>
          <li>
            声明变量： var age;
            <ul>
              <li>
                var: 是一个JS关键字，用来声明变量（variable 是变量的意思）。
                使用该关键字声明变量后，计算机会自动为变量分配内存空间，不需要程序员管理
              </li>
              <li>
                age:
                是程序员定义的变量名，我们要通过变量名来访问内存中分配的空间
              </li>
            </ul>
          </li>
          <li>
            赋值 : age = 10 ;
            <ul>
              <li>=: 用来把右边的值赋给左边的变量空间中，此处代表赋值的意思</li>
              <li>10: 变量值是程序员保存到变量空间里的值</li>
            </ul>
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
      getAge();                         // 10
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
        console.log(a);                                         // error : a is not defined
        var a = 1;
        let a = 1;                                              // 会直接报错，不存在变量声明之前去使用，会直接报错
    // 4、不影响作用域链接
      {
        let c = '123'
        function fn() {
            console.log(c);                                     // 不会影响作用域链 ，此层作用域没有，还是会往上一级查找
        }
        fn();                                                   // 输出 123
      }</code></pre>
        <p>值不能修改的量 称之为常量，const</p>
        <pre><code class="language-js line-numbers">  const Arr = ['1', '2', '3'];
  Arr.push('4');
  console.log(Arr);                     // 常量修改数组 不会报错

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
          <li>允许使用特殊符号开头的 ： $变量名（ $name ） _变量名( _name )</li>
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
            <ul>
              <li>因为我们一些数据需要保存，所以需要变量</li>
            </ul>
          </li>
          <li>
            变量是什么？
            <ul>
              <li>
                变量就是一个容器，用来存放数据的。方便我们以后使用里面的数据
              </li>
            </ul>
          </li>
          <li>
            变量的本质是什么？
            <ul>
              <li>变量是内存里的一块空间，用来存储数据。</li>
            </ul>
          </li>
          <li>
            变量怎么使用的？
            <ul>
              <li>
                我们使用变量的时候，一定要声明变量，然后赋值，声明变量本质是去内存申请空间。
              </li>
            </ul>
          </li>
          <li>
            什么是变量的初始化？
            <ul>
              <li>声明变量并赋值我们称之为变量的初始化</li>
            </ul>
          </li>
          <li>
            变量命名规范有哪些？
            <ul>
              <li>看命名规范文档</li>
            </ul>
          </li>
          <li>
            交换2个变量值的思路？
            <ul>
              <li>看变量文档</li>
            </ul>
          </li>
        </ul>
      </el-card>
      <el-card id="part3" shadow="hover">
        <h2>数据类型</h2>
        <p>js的变量数据类型是只有程序在运行过程中，根据等号右边的值来确定的</p>
        <ul>
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
  var Age = 21.3777;   // 小数，也称为浮点数

  // 数字型范围 （注意大小写）
  alert(Number.MAX_VALUE);    // 最大值 1.7976931348623157e+308 科学计数法10的308次方
  alert(Number.MIN_VALUE);    // 最小值 大于0，最小的正值 5e-3
  alert(Infinity);            // 无穷大 Infinity alert(Number.MIN_VALUE * 2);
  alert(-Infinity);           // 负无穷大 -Infinity alert(-Number.MIN_VALUE * 2);
  alert(NaN);                 // 非数字 Not a Number  ，表示非法的数字，不是一个数字
  alert(01 + 0.3);            // 对于金钱类的计算，精度要求比较大的时候不要用js计算，要在服务器上计算， 结果等于0.300...4
  let a = ...9n               // BigInt类型，表示任意精度的整数 ,尾巴加个n就能显示大整数，表示数字范围是无限大，取决于内存 </code></pre>
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
                <ul>
                  <li>
                    要写到引号里面类似HTML里面的特殊字符，字符串中也有特殊字符，我们称之为转义符。
                  </li>
                  <li>转义符都是\开头的，常用的转义符及其说明如下：</li>
                </ul>
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
                <ul>
                  <li>
                    多个字符串之间可以使用 +
                    进行拼接，其拼接方式为字符+任何类型=拼接之后的新字符串
                  </li>
                  <li>
                    拼接前会把与字符串相加的任何类型转成字符串，再拼接成一个新的字符串
                  </li>
                </ul>
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
                <ul>
                  <li>开、关</li>
                  <li>是、否</li>
                  <li>对、错</li>
                </ul>
              </li>
              <li>
                而且布尔类型通常是用来作为条件判断的
                <ul>
                  <li>在PHP中 ’0’ 、[ ] 被转换成false</li>
                  <li>在JavaScript中，’0’、[ ] 会被转换成true</li>
                </ul>
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
  console.log("你好" + variable);  /* 你好undefined */
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
        </ul>
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
            可用来获取检测变量的数据类型，返回的结果是一个字符串。最后一个 null
            是对象
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
            <ul>
              <li>数字字面量： 8，9，10</li>
              <li>字符串字面量： 黑马程序员，”大前端”</li>
              <li>布尔字面量： true，false</li>
            </ul>
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
  console.log(num3 + "我是字符串");      /* 拼接方法转换 */

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
      </el-card>
      <el-card id="part4" shadow="hover">
        <h2>标识符 关键字 保留字</h2>
        <p>前言</p>
        <ul>
          <li>
            标识符
            <ul>
              <li>
                标识（zhi）符：就是指开发人员为变量、属性、函数、参数取的名字。标识符不能是关键字或保留字。
              </li>
            </ul>
          </li>
          <li>
            关键字
            <ul>
              <li>
                关键字：
                是指JS本身已经使用了的字，不能再用它们充当变量名、方法名。
              </li>
              <li>
                包括：
                break、case、catch、continue、default、delete、do、else、finally、for、function、if、in、instanceof、new、return、switch、this、throw、try、typeof、var、void、while、with等。
              </li>
            </ul>
          </li>
          <li>
            保留字
            <ul>
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
            </ul>
          </li>
        </ul>
      </el-card>
      <el-card id="part5" shadow="hover">
        <h2>运算符</h2>
        <p>前言</p>
        <ul>
          <li>
            运算符（operator）也被称为操作符，是用于实现赋值、比较和执行算数运算等功能的符号。
            <ul>
              <li>
                注意：
                <ul>
                  <li>
                    运算符 + ： 任何值和NaN 相加，都为NaN
                    。不是number值的数字会转换为数字，和字符串+则会拼接
                  </li>
                  <li>
                    运算符 - ： 数字和任何相减，都会被转为数字，与 运算符 + 不同
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            JavaScript中常用的运算符有：
            <pre><code class="language-js line-numbers">  10 + 10 = 20;       // 加
  10 - 20 = -10;      // 减
  10 * 20 = 200;      // 乘
  10 / 20 = 0.5;      // 除
  9 %  2  = 1;        // 取余 取模就是 除数 / 被除数 = 商 余 几 ， 如果 除数 小于 被除数 ，取模的值为除数本身
  5 ** 5 = 3125       // ** 幂运算，5的5次方
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
          <li>三元运算符需要三个操作数 例如： 1&gt;2 ？1 ：2</li>
          <li>
            递增和递减运算符： ++在前等于原值，++在后等于新值，说的是表达式的值
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
                开发时，大多使用后置递增/减，并且代码独占一行，例如：num++;
                或者num--;
              </li>
            </ul>
          </li>
        </ul>
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
          <li>比较运算符（关系运算符）是两个数据进行比较时所使用的运算符，</li>
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
            例如: “abc” &lt; “b”
            此时会第一位相比较，因为没有第二位，如果两侧都有三位，则一位一位比第一位都一样，则比较下一位
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
            <ul>
              <li>如果写两个&， && ，左边遇到false就不会执行右边！</li>
              <li>如果 &写一个，&左边false后，右边还会执行，但依然返回false</li>
            </ul>
          </li>
          <li>
            概念：逻辑运算符是用来进行布尔值运算的运算符，其返回值也是布尔值。后面开发中经常用于多个条件的判断
            <pre><code class="language-js line-numbers">  &&  "逻辑与"      简称  "与"     and true && false
  11  "逻辑或"      简称  "或"     or true || false
  !   "逻辑非"      简称  "非"     not ！ true</code></pre>
          </li>
          <li>
            && ：二个结果，也称为逻辑中断符，短路
            <ul>
              <li>两侧条件都为true，则结果为true，返回值为第二个true</li>
              <li>第一个为false。第二个直接不看，返回第一个false</li>
              <li>
                第一个为true，此时会看第二个结果，如果为true，返回第二个true，如果为false，则返回false
              </li>
            </ul>
            <pre><code class="language-js line-numbers">  var res = 2 &gt; 1 && 3 &gt; 1;          var res = 2 &gt; 1 && 3 &gt; 1;
  //        true     true                      true     false
  result:true                        result:false</code></pre>
          </li>
          <li>
            || ：
            <ul>
              <li>
                两侧条件判断，只要有一个判断为true，则结果为true，两侧为false，则返回false
              </li>
              <li>第一个为true，就不会看第二个值，直接返回第一个结果</li>
              <li>第一个为false，则返回第二个结果，不管true还是false</li>
            </ul>
            <pre><code class="language-js line-numbers">  var res = 2 &gt; 3 || 1 &lt; 2;          var res = 2 &gt; 1 || 3 &gt; 1;
  //        false    true                      false    false
  result:true                        result:false</code></pre>
          </li>
          <li>
            ！：
            <ul>
              <li>如果不是true，则结果为false，如果不是false，则结果为true</li>
              <li>
                逻辑非（！）也叫作取反符，用来取一个布尔值相反的值，如true的相反值是false
              </li>
              <li>！！ 可以取反两次</li>
            </ul>
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
        <ul>
          <li>
            短路运算的原理：当有多个表达式（值）时左边的表达式值可以确定结果时，就不再继续运算右边的表达式的；
            <ul>
              <li>
                逻辑与 语法：
                <ul>
                  <li>表达式1 && 表达式2</li>
                  <li>
                    如果第一个表达式的值为真，第二个表达式也为真，则返回表达式2
                  </li>
                  <li>
                    如果第一个表达式的值为假，第二个表达式就不看了，直接返回表达式1
                  </li>
                  <li>例子</li>
                </ul>
                <pre><code class="language-js line-numbers">  console.log(123 && 456);    // 左边的表达式，除了0，其余的数字都是true，所以这里返回右边的结果 456
  console.log(0 && 456);      // 左边的表达式，0是false，如果表达式1为false，则逻辑中断，返回第一个结果 0</code></pre>
              </li>
              <li>
                逻辑或 语法：
                <ul>
                  <li>表达式1 || 表达式2</li>
                  <li>
                    如果第一个表达式的值为真，第二个表达式就不看了，则返回表达式1
                  </li>
                  <li>
                    如果第一个表达式的值为假，第二个表达式为真，则返回表达式2
                  </li>
                  <li>例子</li>
                </ul>
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
        </ul>
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
      </el-card>
      <el-card id="part6" shadow="hover">
        <h2>代码块</h2>
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
      </el-card>
      <el-card id="part7" shadow="hover">
        <h2>流程控制 -分支</h2>
        <p>前言</p>
        <ul>
          <li>
            在一个程序执行的过程中，各条代码的执行顺序对程序的结果是有直接影响的。
          </li>
          <li>很多时候我们要通过控制代码的执行顺序来实现我们要完成的功能。</li>
          <li>
            简单理解：
            <ul>
              <li>
                流程控制就是来控制我们的代码按照什么结构顺序来执行。流程控制主要有三种结构，分别是
              </li>
              <li>
                顺序结构、分支结构和循环结构，这三种结构代表三种代码执行的顺序。
              </li>
            </ul>
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
            <ul>
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
            </ul>
          </li>
          <li>
            switch 语句:
            <ul>
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
            </ul>
          </li>
          <li>
            执行思路：
            <ul>
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
            </ul>
          </li>
          <li>
            注意
            <ul>
              <li>我们开发里面 表达式 我们经常写成 变量</li>
              <li>
                我们num的值 和 case里面的值相匹配的时候是 全等
                必须是值和数据类型一致才可以， num === 1
              </li>
              <li>
                如果不写 break;
                来退出循环语句，则会执行下面的代码。执行完所有没带 break 的 case
                和最后的 default：
              </li>
            </ul>
          </li>
          <li>
            总结：switch 语句和if else if 语句的区别
            <ul>
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
            </ul>
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
            的值，如果条件表达式为假，则返回 表达式2 的值， 语法结构 条件表达式
            ？ 表达式1：表达式2
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
      </el-card>
      <el-card id="part8" shadow="hover">
        <h2>循环</h2>
        <p>可以重复执行某些代码</p>
        <ul>
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
              <li>for 循环主要用于把某些代码循环若干次，通常跟计数有关系。</li>
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
                <ul>
                  <li>
                    先执行计数器变量 var num1 =1；
                    只执行一次，然后条件判断，num1 &lt;=100；
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
                </ul>
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
                <ul>
                  <li>
                    语法结构如下:
                    <pre><code class="language-js line-numbers">  for （外层初始化变量；外层条件表达式；外层操作表达式）{
      for （里层初始化变量；里层条件表达式；里层操作表达式）{
          // 执行语句
      }
  }
  var str = '';
  for (var i = 1; i &lt;= 5; i++) {  //外层控制高度，也就是行数
      str = str + '⭐';
      for (var j = 1; j &lt;= 5; j++) { //内层控制个数
          str = str + '⭐';
      }
     str = str + '\n'; // 如果一行打印完5个星星，就另起一行
  }
  console.log(str);</code></pre>
                  </li>
                </ul>
              </li>
              <li>
                小结
                <ul>
                  <li>for 循环可以重复执行某些相同代码</li>
                  <li>for 循环可以重复执行些许不同的代码，因为我们有计数器</li>
                  <li>for 循环可以重复执行某些操作，比如算术运算符加法操作</li>
                  <li>随着需求增加，双重for循环可以做更多、更好看的效果</li>
                  <li>双重for循环，外层循环一次，内层for循环全部执行</li>
                  <li>for 循环是循环条件和数字直接相关的循环</li>
                  <li>分析要比写代码更重要</li>
                  <li>一些核心算法想不到，但是要学会，分析它执行过程</li>
                </ul>
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
                <ul>
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
                </ul>
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
        先执行代码 i=1 i&lt;=10
        进入for里层代码
        j=1 j&lt;=i 1&lt;=1 true 执行一句 str 打印出来了一个星星
        j++，此时的j=2 j&lt;=i false 跳出循环，执行换行，
        执行 i++
        i=2 i&lt;=10 开始进入循环 */

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
  for (let i = 1; i &lt;= 9; i++) {
    for (let j = 1; j &lt;= i; j++) {
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
  for (let i = 1; i &lt;= 3; i++) {
      console.log(`*************第${i}个班级 *************`);
      let sum = 0; // 表示每个班级的总分
      // 内层新环表示每个班级的学生
      for (let j = 1; j &lt;= 4; j++) {
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
        </ul>
      </el-card>
      <el-card id="part9" shadow="hover">
        <h2>小结</h2>
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
          continue; // 只要遇见continue就退出本次循环直接跳到i++
      }
      console.log('我正在吃第' + i + '个包子');        // 这里除了3不显示
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
          <li>break 关键字 ,break 关键字用于立即跳出整个循环（循环结束）。</li>
          <li>
            例如，吃5个包子，吃到第3个发现里面有半个虫子，其余的不吃了，其代码实现如下：
            <pre><code class="language-js line-numbers">  var sum = 0;
  for (var i = 1; i &lt;= 100; i++) {
      if (i % 7 == 0) {
          break;      // 只要遇见break 就退出循环
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
            <ul>
              <li>
                变量、函数的命名必须要有意义，
                变量的名称一般用名词，函数的名称一般用动词
              </li>
            </ul>
          </li>
          <li>
            操作符命名规范：
            <ul>
              <li>操作符的左右两侧各保留一个空格</li>
            </ul>
          </li>
          <li>
            单行注释规范：
            <ul>
              <li>// 单行注释，前面注意有个空格</li>
            </ul>
          </li>
          <li>
            其他规范：
            <ul>
              <li>注意标签之间有空格， 结束花括号与开头标签对齐</li>
            </ul>
          </li>
        </ul>
      </el-card>
      <el-card id="part10" shadow="hover">
        <h2>数组</h2>
        <p>前言</p>
        <ul>
          <li>
            问：之前学习的变量，只能存储一个值。如果我们想存储班级中所有学生的姓名，那么该如何存储呢？
            <ul>
              <li>
                答：可以使用数组（Array）。数组可以把一组相关的数据一起存放，并提供方便的访问（获取）方式。
              </li>
            </ul>
          </li>
          <li>
            问：什么是数组呢？
            <ul>
              <li>
                答：数组是指一组数据的集合，其中的每个数据被称作元素，在数组中可以存放任意类型的元素。数组是一种，将一组数据存储在单个变量名下的优雅方式。
              </li>
            </ul>
          </li>
        </ul>
        <p>创建数组的方法</p>
        <ul>
          <li>
            利用 new创建数组
            <pre><code class="language-js line-numbers">  var 数组名 = new Array();
  var arr = new Array(10,20,30,40); // 创建一个新的数组，并传入参数

  // 这种方式暂且了解，等学完对象再看。  注意Array(), A要大写
  // 我们数组里面的数据一定用逗号分隔
  // 数组里面的数据比如1，2，我们称为数组元素
  // 数组中还能放数组，用的比较少，称为二维数组
  // 数组中可以放任意类型</code></pre>
          </li>
          <li>
            利用数组字面量创建数组, 常用
            <pre><code class="language-js line-numbers">  var 数组名= []; </code></pre>
          </li>
          <li>
            使用数组字面量方式创建带初始值的数组
            <pre><code class="language-js line-numbers">  var 数组名=['小白' , 1, '大黄' ,true];</code></pre>
          </li>
        </ul>
        <p>获取数组中的元素</p>
        <ul>
          <li>
            数组的索引（下标）：用来访问数组元素的序号（数组下标从0开始）。
          </li>
          <li>
            例如： var arr = ['小白' , 1, '大黄' ,true]；
            <ul>
              <li>下标号为： 0 , 1, 2 , 3</li>
            </ul>
          </li>
          <li>数组可以通过索引来访问（获取）、设置、修改对应的数组元素，</li>
          <li>
            我们可以通过“数组名[索引]”的形式来获取数组中的元素
            <pre><code class="language-js line-numbers">  var arr = ['第一位', '2', '4', 12345]
  console.log(arr[0]);                  // 获取数组中的第1数据   也就是 '第一位'
  console.log(arr[2]);                  // 获取数组中的第2数据   也就是 '4'
  console.log(arr[3]);                  // 获取数组中的第3数据   也就是 '12345'
  console.log(arr[4]);                  // undefined,因为数组里面没有第四个元素</code></pre>
          </li>
        </ul>
        <p>遍历数组</p>
        <pre><code class="language-js line-numbers">  // 使用for循环遍历数组，for里面的 i 是计数器，当索引号来使用，arr[i]是数组元素的第 i 个数组元素
  // 遍历：就是把数组中的每个元素从头到尾都访问一次（类似我们每天早上学生的点名）。

  var arr = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
  for (var i = 0; i &lt; 7; i++) {
      console.log(arr[i]);
  }</code></pre>
        <p>数组长度</p>
        <pre><code class="language-js line-numbers">  // 使用 “数组名.length” 可以访问数组元素的数量（数组长度）。
  var arr = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
  for (var i = 0; i &lt; arr.length; i++) {
    console.log(arr[i]);
  }
  console.log(arr.length);

  // 案例：求数组中的和，以及平均值
  var arr = [2, 6, 1, 7, 4]
  var num = 0;
  var average = 0;
  for (var i = 0; i &lt; arr.length; i++) {
      num += arr[i]           // 我们加的是数组中的元素，而不是计数器 ‘i’
  }
  average = num / arr.length;
  console.log(num,average);   // 想要输出多个变量，用逗号隔开  20 5

</code></pre>
        <p>遍历数组，筛选数据</p>
        <ul>
          <li>
            步骤：
            <ul>
              <li>先声明一个保存最大值的变量 max</li>
              <li>默认最大值可以取数组中的第一个元素。</li>
              <li>遍历这个数组，把里面每个数组元素和max相比较。</li>
              <li>
                如果这个数组元素大于max就把这个数组元素存到max里面，否则继续下一轮比较。
              </li>
              <li>
                最后输出最大值 max
                <pre><code class="language-js line-numbers">  var arr = [2, 6, 1, 7, 4]
  var max = arr[0];
  for (var i = 1; i &lt; arr.length; i++) {
      if (arr[i] > max) {     // 相反，取最小值就是  arr[i] &lt; max;
          max = arr[i]
      }
  }
  console.log(max);</code></pre>
              </li>
            </ul>
          </li>
          <li>
            案例：数组转换为分割字符串
            <ul>
              <li>
                要求：将数组[red，'green，'blue，'pink']转换为字符串，并且用|或其他符号分割，输出为：red|green|...
              </li>
            </ul>
            <pre><code class="language-js line-numbers">  var arr = ['red', 'green', 'blue', 'pink']
  var arr1 = '';
  var sep = '|';
  for (var i = 0; i &lt; arr.length; i++) {
      arr1 += arr[i] + sep;
  }
  console.log(arr1);</code></pre>
          </li>
        </ul>
        <p>数组中的新增元素</p>
        <ul>
          <li>
            可以通过修改length长度
            <pre><code class="language-js line-numbers">  var arr = ['red', 'green', 'blue', 'pink']
  arr.length = 5;               // 把数组的长度修改为 5，但是后面增加的如果没定义，会是 undefined</code></pre>
          </li>
          <li>
            可以通过修改数组索引的方式追加数组元素， 索引号增加数组元素
            <pre><code class="language-js line-numbers">  var arr = ['red', 'green', 'blue', 'pink'];
  arr[4] = 'yellow';
  arr[0] = 'skyblue';           // 如果数组有了元素，通过索引号，相当于替换，此时red就被替换成了skyblue
                                // 可以增加索引号和数组元素来追加，也可以相应的索引号进行替换元素 </code></pre>
          </li>
          <li>
            可以通过数组长度， 向数组最后一位增加数组元素
            <pre><code class="language-js line-numbers">  var arr = ['red', 'green', 'blue', 'pink']
  arr[arr.length] = 'yellow';
  arr[arr.length]= 'skyblue';   // arr [数组长度] ,来在最后一位添加一个数组元素</code></pre>
          </li>
          <li>
            重点：不要给数组赋值，否则数组等于所赋的值，之前的数组元素都会消失
            例如：
            <pre><code class="language-js line-numbers">  var arr = [1,2,3,4,5,1,2,5,];
  arr = '123456';               // 此时 arr 输出时会直接输出 123456</code></pre>
          </li>
        </ul>
        <p>使用循环增加数组的案例</p>
        <pre><code class="language-js line-numbers">  // 声明一个空数组arr。
  // 循环中的计数器i可以作为数组元素存入。
  var arr = [];
  for (var i = 0; i &lt; 10; i++) {
      arr[i] = i + 1;      // 因为是1- 10，所以从1开始，要加1
      //  arr = i + 1；    // 不能写arr =i,这样每次循环都会覆盖数组
  }
  console.log(arr);

  // 将数组[2，0，6，1，77，0，52，0，25，7]中大于等于10的元素选出来，放入新数组。
  // 1、声明一个新的数组用于存放新数据newArr。
  // 2、遍历原来的旧数组，找出大于等于10的元素。
  // 3、依次追加给新数组 newArr
      var newArr = [];
      var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
      var max = arr[0];
      var j = 0;           // 用来存储数组索引号，当判断的时候，第一个索引是0，判断完j++，索引就是1，以此类推
      for (var i = 0; i &lt; arr.length; i++) {
          if (arr[i] > 10) {
              newArr[j] = arr[i];
              j++;
          }
      }
      console.log(newArr);

  // 方法2
      var newArr = [];
      var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
      // 刚开始的newArr.length 的长度是为0
      for (var i = 0; i &lt; arr.length; i++) {
          if (arr[i] > 10) {
              // 新数组的索引号是从0开始，依次递增，length会自动检测长度
              newArr[newArr.length] = arr[i];
          }
      }
      console.log(newArr);</code></pre>
        <p>删除指定数组元素 (去重)</p>
        <ul>
          <li>需要一个新数组用于存放筛选之后的数据。</li>
          <li>
            遍历原来的数组，把不是0的数据添加到新数组里面（此时要注意采用数组名+索引的格式接收数据）。
          </li>
          <li>
            新数组里面的个数，用length不断累加。
            <pre><code class="language-js line-numbers">  var newArr = [];
  var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
  for (var i = 0; i &lt; arr.length; i++) {
      if (arr[i] != 0) {
          newArr[newArr.length] = arr[i];
      }
  }
  console.log(newArr);</code></pre>
          </li>
        </ul>
        <p>翻转数组</p>
        <ul>
          <li>
            将数组['red'，'green'，'blue'，'pink'，'purple']的内容反过来存放
            <ul>
              <li>声明一个新数组 newArr</li>
              <li>
                把旧数组索引号最后一个取过来（arr.length -
                1），给新数组索引号第一个元素（newArr.length）
              </li>
              <li>我们采取递减的方式 i --</li>
            </ul>
            <pre><code class="language-js line-numbers">  var newArr = [];
  var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
  for (var i = arr.length - 1; i > 0; i--) {
      newArr[newArr.length] = arr[i];
  }
  console.log(newArr);</code></pre>
          </li>
        </ul>
        <p>数组排序 （冒泡排序133集）</p>
        <ul>
          <li>
            冒泡排序:
            <ul>
              <li>
                是一种算法，把一系列的数据按照一定的顺序进行排列显示（从小到大或从大到小）。冒泡排序是一种简单的排序算法，它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。.这个算法的名字由来是因为越小的元素会经由交换慢偿“浮“到数列的顶端。
              </li>
            </ul>
          </li>
          <li>数组长度 - 索引号 - 1 = 交换次数</li>
          <li>数组是从0开始 第一趟交换四次， 5 - 0 - 1=4</li>
          <li>第二趟交换三次， 5 - 1 - 1=3</li>
          <li>第三趟交换二次， 5 - 2 - 1=2</li>
          <li>
            第四趟交换一次， 5 - 3 - 1=1
            <pre><code class="language-js line-numbers">  var arr = [5, 4, 3, 2, 1];
  for (var i = 1; i &lt;= arr.length - 1; i++) {          // 外层循环管躺数
      for (var j = 0; j &lt;= arr.length - i - 1; j++) {  // 里层循环次数
          if (arr[j] > arr[j + 1]) {                      // 取反的话 就看大于 还是小于
              var temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
      }
  }
  console.log(arr);</code></pre>
          </li>
          <li>
            选择排序
            <pre><code class="language-js line-numbers">  let arr = [8, 9, 12, 18, 19, 60, 1, 3, 2];
  // 外层for 循环，表示选择的那个数组元素
  for (let i = 0; i &lt; arr.length - 1; i++) {      // 数组长度要减1，有一位被取出来做比较
      // 内层循环，表示参与比较的数组元素
      for (let j = i + 1; j &lt; arr.length; j++) {  // j=j+1 : 当前数需要和下一个数进行比较  所以i+1
                                                  // 当j=8 时，那么i+1 就是8的下一位 9来进行比较，依次（i++)+1
          // 参与比较的数，挨个跟选择的数进行比较
          if (arr[i] > arr[j]) {                  // 如果选择的那个数 大于了当前数，就进行位置调换 假设9大于8， 那么8排在前面，9就在后面
              let temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
          }
      }
  }
  console.log(arr);</code></pre>
          </li>
        </ul>
        <p>数组去重</p>
        <pre><code class="language-js line-numbers">  var arr = [1, 2, 3, 2, 2, 1, 3, 4, 2, 5]; // 去除数组中重复的数字
  // 获取数组中的每一个元素
  function deleArr() {
      for (var i = 0; i &lt; arr.length; i++) {
          console.log(arr[i]);
          // 获取当前元素后的所有元素。 j=i的话 ,因为i就是第一位，没必要第一位和第一位相比,所以+1
          for (var j = i + 1; j &lt; arr.length; j++) {
              // console.log('.........' + arr[j]);
              if (arr[i] == arr[j]) {   // 判断两个元素是否相等
                  arr.splice(j, 1);     //（从第几个开始删，删除几个）
                  j--;                  // 当有重复的时候，删除完，后面的元素会自动前进，此时需要再次检查当前删除位置的数值是否重复
                                        // 如果重复了，还需要删除，j--会和 j++抵消，j++是前进检查，而j--后，就会留在当前位置再检查一次
              }
          }
      }
      arr.sort();                       // 排序,默认会按照Unicode编码进行排序,会个位与个位相比排序，十位与十位相比排序
  };
  deleArr();</code></pre>
        <p>
          for-of
          可迭代对象进行遍历。循环体执行语句,每次执行时都会将一个数组里的元素，赋值给变量
        </p>
        <pre><code class="language-js line-numbers">  const arr = [18, 16, 15, 14];
  for (let i of arr) {
      console.log(i);
  }</code></pre>
        <p>forEach 是数组的一种方法(有兼容性问题，很少用，IE8以上才能用)</p>
        <pre><code class="language-js line-numbers">  // forEach() 方法需要一个函数作为参数，像这种函数，由我们创建，但是不由我们调用，我们称为回调函数
  var a = [1, 2, 3, 4, 5, 6, 7, 8];
  a.forEach(function(a, b, c) {     // 浏览器会以实参的方式传递三个实参，我们来定义形参
                                    // a : 元素 b : 索引号 c : 索引号和元素
  });</code></pre>
        <p>数组方法</p>
        <pre><code class="language-js line-numbers">  arr.concat();                      // 连接两个或更多的数组，并这回结果。不破坏原素组，会返回一个新数组
  arr.join();                        // 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔 .join(".")
  arr.pop();                         // 删除并返回裁组的最后一个元素,并返回删的是谁就返回是谁
  arr.shift();                       // 删除数组第一个元素，并返回数组的第一个元素
  arr.unshift();                     // 向数组的开头添加一个或多个元素，并返回新的长度
  arr.push();                        // 向数组的末尾添加一个或更多元素，并返回新的长度
  arr.reverse();                     // 颠倒数组中元素的顺序
  arr.slice();                       // 切片，不传参数等于浅拷贝。截取（0，2） （包括该参数，截取不包括该参数）从某个已有的数组返回选定的元素，不会破坏原数组，
  arr.sort();                        // 对数组的元素进行排序
  arr.splice();                      // 返回值为被删除的元素。删除、添加、插入、替换 功能。splice(1,2，"3"，"3") 传参:删除的起始位置，删除的数量，3是要插入的值
                                     // splice(1,0,"3") 从数组索引为1的位置，不删除，插入一个3
  arr.toSource();                    // 返回改对象的源代码
  arr.toString();                    // 把数组转换为字符串，并返回结果
  arr.toLocaleString();              // 把数组转换为本地数组，并返回结果
  arr.unshift();                     // 向数组的开头添加一个或更多元素，并返回新的长度
  arr.values();                      // 返回数组对象的原始值
  arr.at();                          // 返回指定索引处的元素，可以接收负索引作为参数 === arr[arr.length -1] 。不破坏原素组，会返回一个新数组
  arr.indexOf("元素"，起始位置);      // 从前往后查 获取元素在数组中第一次出现的位置 ，未找到返回 -1
  arr.lastIndexOf("元素"，起始位置);  // 从后往前查 获取元素在数组中第一次出现的位置 ，未找到返回 -1
  structuredClone(数组)              // 深拷贝，会返回一个新数组，原数组变化后，深拷贝的数组不变</code></pre>
        <p>案例</p>
        <pre><code class="language-js line-numbers">  // 案例1：
  var arr = [1, 2, 3, , , 27, 20];
  /* arr.sort();
      排序，默认会按照Unicode编码进行排序，会个位相比，十位相比
          所以对数字进行排序时，可能会得到错误的结果
      那么我们自己来指定排序的规则
          我们可以在sort()添加一个回调函数，来指定 排序规则
          回调函数中需要定义两个形参，
          浏览器将会分别使用数组中的元素作为实参去调用回调函数使用哪个元素调用不确定， 但是肯定的是在数组中a一定在b前边
      浏览器会根据回调函数的返回值来决定元素的顺序
          如果返回一个大于0的值， 则元素会交换位置
          如果返一个小于0的值， 则元素位置不变
          如果返回一个0， 则认为两个元素相等， 也不交换位置 */

  arr.sort(function(a, b) {    // 方法二选一
        // 方法1
        if (a > b) {
            return 1;          // 从大到小就是 a> b  return -1
        } else if (a &lt; b) {
            return -1;
        } else {
            return 0;
        }
        // 方法2
        return a-b;            // a-b 如果a=11 b=10，那么a-b 就会大于1，从小到大排序
        return b-a;            // 从大到小排序
    });

  // 案例2：数组练习 --- 七星彩
  let arr = [];
  for (let i = 0; i &lt;= 6; i++) {  // 随机生成一组七星彩号码，存放到数组中，七星彩号码的规则是：七组0-9之间的可重复的随机数。
      arr[i] = parseInt(Math.random() * 10);
  }
  console.log(arr);

  // 案例3：数组练习 --- 双色球   随机生成一组双色球号码，存放到数组中
  // 双色球号码的规则是：前六组号码是1-32之间不重复的随机数，第七组号码是1-16之间的随机数
  let arr = [];
  // 循环并生成前六组号码
  for (let i = 0; i &lt; 6; i++) {
      // 随机生成1-32之间的数
      let num = parseInt(Math.random() * 32 + 1)
      // 判断这个数，在数组中是否已经存在
      if (arr.includes(num)) {
          // 如果有相同的数存在，i--，就表示需要再次循环
          i--;
      } else {
          // 如果不存在， 添加到数组中
          arr.push(num);
      }
  }
  // 生成第七位号码
  arr[6] = parseInt(Math.random() * 16 + 1);
  console.log(arr);</code></pre>
      </el-card>
      <el-card id="part11" shadow="hover">
        <h2>函数</h2>
        <p>函数概念</p>
        <ul>
          <li>
            在JS里面，可能会定义非常多的相同代码或者功能相似的代码，这些代码可能需要大量重复使用。
            虽然for循环语句
            也能实现一些简单的重复操作，但是比较具有局限性，此时我们就可以使用JS中的函数。
          </li>
          <li>
            函数：就是封装了一段可被重复调用执行的代码块。通过此代码块可以实现大量代码的重复使用。
            比如document.write(); console.log(); prompt(); alert();
          </li>
          <li>
            函数的封装：
            是把一个或者多个功能通过函数的方式封装起来，对外只提供一个简单的函数接口
          </li>
          <li>
            简单理解：封装类似于将电脑配件整合组装到机箱中（类似快递打包），函数对象拥有所有对象的属性功能
          </li>
          <li>
            函数的使用：
            <ul>
              <li>
                声明函数 自定义函数（命名函数）
                <pre><code class="language-js line-numbers">  // function 函数名（[形参可省略]） {
      // 函数体
  // }
  function sayHi() {
      console.log('内容');
  }</code></pre>
                <ul>
                  <li>function 声明函数的关键字全部小写</li>
                  <li>函数是做某件事情，函数名一般是动词sayHi</li>
                  <li>函数不调用自己，是不会执行</li>
                </ul>
              </li>
              <li>
                匿名函数
                <pre><code class="language-js line-numbers">  const a = function () {     // 不写函数名的函数称为匿名函数,但是可以创建一个变量来接收匿名函数
    alert(' 我是一个匿名函数');
  };
  a();                        // 调用的时候就可以直接用变量名来调用</code></pre>
              </li>
              <li>
                new Function() 记得要大写 与 new 关键字
                不常用。所有函数都是Function 的实例（对象），函数也属于对象
                instanceof
                <pre><code class="language-js line-numbers">  var a = new Function('参数1', '参数2', 'alert(参数1+参数2)');
  a(1, 2);</code></pre>
              </li>
              <li>
                调用函数
                <ul>
                  <li>普通函数： 函数名() 函数名.call() a(); a.call();</li>
                  <li>
                    对象方法： 函数名()() || 函数名.方法名() a()(); a.eat();
                  </li>
                  <li>构造函数： new 构造函数名() new a()</li>
                  <li>绑定事件函数： 点击或者其他操作事件就可以直接调用</li>
                  <li>定时器函数： 定时器自动调用</li>
                  <li>立即执行函数： ( function() {} ()) (function(){})();</li>
                </ul>
              </li>
              <li>
                案例 ：用函数计算1 - 100之间的的累加和
                <pre><code class="language-js line-numbers">  function getSum(num1, num2) {
    var sum = 0;
    for (var i = num1; i &lt;= num2; i++) {
        sum += i;
    }
    console.log(sum);
  }
  getSum(1, 1000);</code></pre>
              </li>
            </ul>
          </li>
        </ul>
        <p>形参，实参</p>
        <ul>
          <li>形参： 形式上的参数函数定义的时候传递的参数当前并不知道是什么</li>
          <li>实参： 实际上的参数函数调用的时候传递的参数实参是传递给形参的</li>
          <li>
            参数的作用：在函数内部某些值不能固定，我们可以通过参数在调用函数时传递不同的值进去。
          </li>
          <li>
            实参：可以是任何一个数据类型
            <pre><code class="language-js line-numbers">  // 形参：function 函数名 ( 形参1， 形参2 ...){} 在声明函数的小括号里面是形参（形式上的参数）
  function 函数名 ( name,name, ...){
  }

  // 调用： 函数名 ( 实参1,实参2 ...); 在函数调用的小括号里面是实参（实际的参数）
  coke(123,465,789);

  // 在声明函数时，可以在函数名称后面的小括号中添加一些参数，这些参数被称为形参，而在调用该函数时，同样也需要传递相应的参数，这些参数被称为实参。</code></pre>
          </li>
          <li>
            形参和实参不匹配问题
            <ul>
              <li>函数可以带参数也可以不带参数</li>
              <li>
                声明函数的时候，函数名括号里面的是形参，形参的默认值为undefined
              </li>
              <li>调用函数的时候，函数名括号里面的是实参</li>
              <li>
                形参的个数可以和实参个数不匹配，但是结果不可预计，我们尽量要配对
              </li>
            </ul>
            <pre><code class="language-js line-numbers">  function getSum(num1, num2) {
    console.log(num1 + num2);
  }
  getSum(1, 2);                 // 如果实参的个数与形参一致，则正常输出结果
  getSum(1, 2, 3);              // 如果实参的个数多余形参，那么只会取到形参的个数
  getSum(2);                    // 如果实参的个数少于形参，则会出现NaN</code></pre>
          </li>
        </ul>
        <p>函数的返回值</p>
        <ul>
          <li>
            return 语句：
            <ul>
              <li>
                有的时候，我们会希望函数将值返回给调用者，此时通过使用return语句就可以实现。
              </li>
              <li>只要函数遇到return就把后面的结果返回给函数的调用者</li>
            </ul>
            <pre><code class="language-js line-numbers">  /* function 函数名（）{
        return 需要返回的结果；
        alert( ' 我在return后面，就不会执行' );    // 后面的代码，只要return完，后面代码就不会执行了，相当于break
    }
    函数名（）;
  */

  function getSum() {                            // 函数名
     return 666;                                 // 需要返回的结果
  }
  console.log(getSum());                         // 打印出来</code></pre>
          </li>
          <li>
            练习：
            <pre><code class="language-js line-numbers">  // 练习1：求出两个数中的最大值
  function getMax(num1, num2) {
      if (num1 > num2) {
          return num1;
      } else {
          return num2;
      }
  }
  console.log(getMax(1, 3));

  // 练习2：利用三元运算符 求出两个数的最大值
  function getMax(num1, num2) {
      return num1 > num2 ? num1 : num2;
  }
  console.log(getMax(88, 20));

  // 练习3：利用函数求数组[5,2,99,101,55,177]中最大的值
  function getArrMax(arr) {
      var max = arr[0];
      for (var i = 1; i &lt;= arr.length; i++) {   // 因为第一个值已经拿出来是做比较，所以i = 1;
          if (arr[i] > max) {
              max = arr[i];
          }
      }
      return max;
  }
  var res = getArrMax([5, 2, 99, 101, 55, 177]);
  console.log(res);</code></pre>
          </li>
        </ul>
        <p>return 终止函数</p>
        <pre><code class="language-js line-numbers">  // 遇到return ，后面的代码不会被执行，return会立即退出当前方法，后面语句永远不会执行
      function getMax(num1, num2) {
          return num1 > num2 ? num1 : num2;                // return 语句立即退出当前方法
          alert('遇到return，后面的代码不会被执行。');
      }
      console.log(getMax(88, 20));

  // return 只能返回一个值
      function getMax(num1, num2) {
          return num1, num2;                               // return 当出现两个值时，只会返回最后一个值
      }
      console.log(getMax(88, 20));

  // 如果需要多个值，可以用数组
      function getMax(num1, num2) {
          return [num1 + num2, num1 * num2, num1 / num2];  // return 当出现两个值时，只会返回最后一个值,但是可以用数组取多个值
      }
      console.log(getMax(88, 20));</code></pre>
        <p>函数的返回值 (函数没有return 返回 undefined)</p>
        <ul>
          <li>
            函数都是有返回值的
            <ul>
              <li>如果有return则返回return后面的值</li>
              <li>如果没有return则返回undefined</li>
              <li>return 可以返回任何数据类型，可以是对象也可以返回函数</li>
            </ul>
          </li>
          <li>
            break，continue，return的区别
            <ul>
              <li>break：结束当前的循环体（如for、while）</li>
              <li>continue：跳出本次循环，继续执行下次循环（如for、while）</li>
              <li>
                return：不仅可以退出循环，还能够返回return语句中的值，同时还可以结束当前的函数体内的代码
              </li>
            </ul>
          </li>
          <li>
            函数练习
            <pre><code class="language-js line-numbers"> // 案例1：写一个函数，用户输入任意两个数字的任意算术运算（简单的计算器小功能），并能弹出运算后的结果。
  var num1 = prompt('请输入第一个数');
  var num2 = prompt('请输入第二个数值')

  function getCompute(num1, num2) {
      return [num1 + num2, num1 - num2, num1 * num2, num1 / num2]
  }
  console.log(getCompute(parseInt(num1), parseInt(num2)));

  // 别人写的
  function getRes(num1, symbol, num2) {
    switch (symbol) {
        case '+':
            return parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            return num1 / num2;
            break;
        default:
            return ('运算符错误');
            break;
    }
  }
  getRes(num1 = +prompt('输入第一个数字'), symbol = prompt('输入运算符'), num2 = +prompt('输入第二个数字'));
  alert('运算结果为:' + getRes(num1, symbol, num2));

  // 案例2：写一个函数，用户输入任意两个数字的最大值，并能出弹运算后的结果。
  var num1 = prompt('请输入第一个数');
  var num2 = prompt('请输入第二个数值')

  function getResult(num1, num2) {
      return num1 > num2 ? num1 : num2;
  }
  console.log(getResult(parseInt(num1), parseInt(num2)));

  // 案例3：写一个函数，用户输入任意三个不同数字的最大值，并能算出运算后的结果。
  var num1 = prompt('请输入第一个数');
  var num2 = prompt('请输入第二个数')
  var num3 = prompt('请输入第三个数');

  function getResult(arr) {
      var max = arr;
      for (var i = 1; i &lt;= arr.length; i++) {
          if (arr[i] > max) {
              max = arr[i];
          }
      }
      return max;
  }
  var re = getResult([num1, num2, num3]);
  console.log(re);

  // 案例4：写一个函数，用户输入一个数判断是否是素数，并返弹出回值（又叫质数，只能被1和自身整数的数）
  var num = parseInt(prompt("输入一个数"));
  var sum = 0;
  for (var i = 1; i &lt;= num; i++) {
      if (num % i == 0) {
          sum += i;
      }
  }
  if (num + 1 == sum) {
      alert(num + "是素数");
  } else {
      alert(num + "不是素数");
  }

  // 案例5：案例判断是否是偶数，输入半径求圆面积
  function odd(a) {            // 判断是否是偶数
      return (a % 2 == 0);     // return 会直接返回结果
  }
  odd(2);
  function area(r) {
      return 3.14 * r * r;
  }
  area(14);                    // 输入半径求一个圆的面积

  // 案例6：面试题
  var a = 9; // 0 1 0 1 2
  function fn() {
      a = 0;
      return function (b) {
          return b + a++
      }
  }
  var f = fn();
  console.log(f(5));           // 5
  console.log(fn()(5));        // 5 这里调用是重新调fn方法，会重新开辟一个空间
  console.log(f(5));           // 6
  console.log(a);              // 因为函数内部有个全局变量 赋值，所以 会覆盖掉var a = 9;
              </code></pre>
          </li>
        </ul>
        <p>arguments 的使用</p>
        <ul>
          <li>
            当我们不确定有多少个参数传递的时候，可以用arguments来获取。在JavaScript中，arguments实际上它是当前函数的一个内置对象。
          </li>
          <li>
            所有函数都内置了一个arguments对象，arguments对象中存储了传递的所有实参
          </li>
          <li>
            arguments展示形式是一个伪数组，因此可以进行遍历。伪数组具有以下特点：
            <ul>
              <li>具有length属性</li>
              <li>按索引方式储存数据</li>
              <li>不具有数组的 push ， pop 等方法</li>
            </ul>
          </li>
          <li>
            注意：
            <ul>
              <li>
                只有函数才有arguments对象，而且是每个函数都内置好的了这个arguments
              </li>
              <li>即使不写形参，也可以通过arguments 来获取到实参</li>
              <li>
                arguments还有一个属性 是 callee,
                这个属性对应一个函数对象，就是当前正在执行函数对象
              </li>
            </ul>
          </li>
          <li>
            案例
            <pre><code class="language-js line-numbers">  // 案例1
  function sum() {
    var sum = 0;
    for (var i = 0; i &lt; arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
  }
  var result = sum(1, 2, 3, 4, 5, 6);
  document.write(result);

  // 案例2：利用函数求任意个数的最大值
  var max = arguments[0];
  for (var i = 1; i &lt;= arguments.length; i++) {
      if (arguments[i] > max) {
          max = arguments[i];
      }
  }
  return max;

  // 案例3：案例函数翻转任意数组
  function reverse(arr) {
      var newArr = [];
      for (var i = arr.length - 1; i >= 0; i--) {
          newArr[newArr.length] = arr[i];
      }
      return newArr;
  }
  var arr1 = reverse([1, 3, 6, 8, 4]);
  console.log(arr1);

  // 案例4：冒泡排序 sort()
  function sort(arr) {
      for (let i = 0; i &lt; arr.length - 1; i++) {
          for (var j = 0; j &lt; arr.length - i - 1; j++) {
              if (arr[j] > arr[j + 1]) {
                  var temp = arr[j];
                  arr[j] = arr[j + 1];
                  arr[j + 1] = temp;
              }
          }
      }
      return arr;
  }
  var arr1 = sort([1, 4, 2, 9]);
  console.log(arr1);

  // 案例5：判断闰年
  function isRunYear(year) {
      //如果是闰年我们返回true，否则返回false
      var flag = false;
      if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
          flag = true;
      }
      return flag;
  }
  console.log(isRunYear(2000));</code></pre>
          </li>
        </ul>
        <p>函数可以调用另一个函数</p>
        <ul>
          <li>
            案例
            <pre><code class="language-js line-numbers">  // 案例1
  function fn1() {
    console.log(111);
    fn2();
    console.log('fn1');
  }

  function fn2() {
      console.log(222);
      console.log('fn2');
  }
  fn1();    // 结果  111  222  fn2   fn1

  // 案例2
  function bakDay() {
    var year = prompt('请输入年份：');
    if (isRunYear(year)) {                    // 调用函数需要加小括号
        alert('' + year + '年是闰年2月份有29天');
    } else {
        alert('' + year + '年是平年2月份有28天');
    }
  }
  bakDay();
  // 利用函数判断闰年
  function isRunYear(year) {
      // 如果是闰年我们返回true，否则返回false
      var flag = false;
      if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
          flag = true;
      }
      return flag;
  }
  console.log(isRunYear(2000));</code></pre>
          </li>
        </ul>
        <p>匿名函数 (函数中另一种声明方式)</p>
        <pre><code class="language-js line-numbers">  var fun = function () {
    //执行语句
  };

  fun();</code></pre>
        <p>作用域</p>
        <ul>
          <li>
            通常来说，一段程序代码中所用到的名字并不总是有效和可用的，而限定这个名字的可用性的代码范围就是这个名字的作用域。
            作用域的使用提高了程序逻辑的局部性，增强了程序的可靠性，减少了命名名字的冲突。
          </li>
          <li>
            js的作用域（es6）之前：分为 全局作用域 局部作用域
            <ul>
              <li>全局作用域：整个script标签，或者单独的一个js文件</li>
              <li>
                局部作用域：在函数内部就是局部作用域（函数作用域），这个代码的名字只在函数内部起效果
              </li>
            </ul>
          </li>
          <li>
            如果在函数内部要访问全局变量，可以加个 window .
            <pre><code class="language-js line-numbers">  var a = '全局变量';
  function get() {
      var a = '局部变量';
      console.log('我要访问全局变量，但是就近原则，会访问到局部，所以我要用Window对象' + window.a);
  }</code></pre>
          </li>
        </ul>
        <p>变量作用域</p>
        <ul>
          <li>在JavaScript中，根据作用域的不同，变量可以分为两种:全局和局部</li>
          <li>
            注意：在函数中没有声明的变量也是全局变量！！！
            <ul>
              <li>
                全局变量：在全局作用域下的变量（注意：在函数中没有声明的变量也是全局变量！！！）
                <pre><code class="language-js line-numbers">  var num1 = 10;        // 全局变量

  function fn() {
      var num1 = 10;    // num1就是局部变量 只能在函数内部使用
      num2 = 20;
  }
  fn();
  console.log(num1);</code></pre>
              </li>
              <li>
                局部变量：在局部作用域下的变量，或者在函数内部的变量（注意：
                函数中的形参是一个局部变量！！！）
                <pre><code class="language-js line-numbers">  function fn() {
    var num1 = 10;      // num1就是局部变量 只能在函数内部使用
    num2 = 20;
  }
  fn();
  console.log(num1);    // 报错，num is not defined
  console.log(num2);    // 注意，num2是未声明的变量，但是在函数中可以被调用</code></pre>
              </li>
            </ul>
          </li>
          <li>
            特性：
            <ul>
              <li>全局变量只有浏览器关闭的时候才会销毁，比较占内存资源</li>
              <li>局部变量，当我们程序执行完毕就会销毁。比较节约内存资源</li>
            </ul>
          </li>
        </ul>
        <p>块级作用域</p>
        <ul>
          <li>
            JS 现阶段没有块级作用域，es6的时候新增块级作用域
            <ul>
              <li>块级作用域 { } if { } for { }</li>
            </ul>
          </li>
        </ul>
        <p>作用域链</p>
        <ul>
          <li>只要是代码，就至少有一个作用域</li>
          <li>写在函数内部的局部作用域</li>
          <li>如果函数中还有函数，那么在这个作用域中就又可以诞生一个作用域</li>
          <li>
            根据在内部函数可以访问外部函数变量的这种机制，用链式查找决定哪些数据能被内部函数访问，
          </li>
          <li>就称作 作用域链，一层一层往上访问，就近原则。</li>
          <li>
            案例
            <pre><code class="language-js line-numbers">  // 案例1
  function f1() {
    var num = 123;
    function f2() {
        console.log(num);
    }
    f2();
  }
  var num = 456;
  f1();

  // 案例2
  var a = 1;
  function fn1() {
      var a = 2;
      var b = '22';
      fn2();
      function fn2() {
          var a = 3;
          fn3();
          function fn3() {
              var a = 4;
              console.log(a);   // 调用谁就看谁，这里就近原则，a = 4
              console.log(b);   // fn3里没有b，往上，fn2也没有b,看fn1，‘22’
          }
      }
  }
  fn1();</code></pre>
          </li>
        </ul>
        <p>预解析</p>
        <ul>
          <li>
            JavaScript代码是由浏览器中的JavaScript解析器来执行的。JavaScript解析器在运行JavaScript代码的时候分为两步：预解析，然后再代码执行。
          </li>
          <li>
            预解析：js引擎会把js 里面所以的 var 还有 function
            提升到当前作用域的最前面，然后开执行代码。代码书写的顺序从上往下执行
          </li>
          <li>
            预解析可以分为变量预解析（变量提升） 和 函数预解析 （函数提升）
            <ul>
              <li>
                变量提升：把所有的变量声明提升到当前的作用域最前面。但是不提升赋值操作
              </li>
              <li>
                函数提升：
                <pre><code class="language-js line-numbers">  // 案例变量坑1：
  console.log(num1);
  var nmu1 = 10;
  /* 因为预解析 ，变量提升，但是不提升赋值操作
     所以 var num1；会被提前，这时log时，num1 就是 num1 not is defined */

  // 案例变量坑2：
  fun(); //此时调用会报错   fun is not a function
  var fun = function () {
      console.log(22);
      /* 预解析,先会把变量提升   var fun;
         然后依次执行           fun();
                               fun= function(){
                                   console.log(22);
                               }  */
  }

  // 案例3：
  var num = 10;
  fun();

  function fun() {
      console.log(num);
      var num = 20;
  }
  //执行步骤
  var num;            //  1、先提升变量
  function fun() {    //  2、函数提升
      var num;        //  3、函数局部作用域下 变量提升
      console.log(num);
      num = 20;
  }
  num = 10;
  fun();              //  4、最后调用函数，就近原则，num  = undefined

  // 案例4：
  var num = 10;

  function fn() {
      console.log(num);
      var num = 20;
      console.log(num);
  }
  fn();

  //  执行步骤，
  var num;
  function fn() {
      var num;
      console.log(num);
      nmu = 20;
      console.log(num);
  }
  num = 10;
  fn(); // log1 undefined   log2  20

  // 案例5：
  var a = 18;
  f1();

  function f1() {
      var b = 9;
      console.log(a);
      console.log(b);
      var a = '123';
  }

  //  执行步骤，
  var a;
  function f1() {
      var b;
      var a;
      b = 9;
      console.log(a);    // undefined
      console.log(b);    // 9
      a = '123';
  }
  f1();

  // 案例6：
  f1();
  console.log(c);
  console.log(b);
  console.log(a)

  function f1() {
      var a = b = c = 9;
      console.log(a);
      console.log(b);
      console.log(c);
  };

  // 执行如下
  function f1() {
      // 这样只是声明var a; b和c 没有声明，此时是全局变量
      var a = 9;
      b = 9;
      c = 9;
      // 想要集体声明写法：  var a=9, b=9, c =9;
      var a;
      a = b = c = 9;
      console.log(a);        // 9
      console.log(b);        // 9
      console.log(c);        // 9
  };
  f1();
  console.log(c);            // 9
  console.log(b);            // 9
  console.log(a)             // undefined</code></pre>
              </li>
            </ul>
          </li>
        </ul>
        <p>重点</p>
        <ul>
          <li>
            函数的方法 call () 和apply () 和 bind() : //
            在调用方法时，通过call（对象，实参），来改变调用的方法里面的this
            指向
            <pre><code class="language-js line-numbers">  let obj1 = {
    name: "吴亦凡",
    age: 30,
    movie: function (time, address) {
        console.log(`${this.name}今天${this.age}岁,在${address}看了${time}小时电影）`);
    },
  }
  obj1.movie('2', '福建');

  let obj2 = {
      name: "张三",
      age: 30
  };
  obj1.movie.call(obj2, '3', '北京'); // call 可以改变this的指向，第一个参数需要传一个对象，后面的参数依次传入方法的实参</code></pre>
          </li>
          <li>使用apply() apply(对象，数组实参)</li>
          <li>使用数学中 Math.max 最大值 和 apply 配合使用寻找数组中最大值</li>
          <li>
            使用bind() bind(对象,实参)()
            <ul>
              <li>bind 可以为新函数绑定this 且不被改变</li>
              <li>
                bind 也可以为新函数绑定实数，且会固定，不可改变，且不影响原函数
              </li>
            </ul>
          </li>
          <li>
            *补充
            递归算法（所谓递归就是在方法内部的某一个地方，再次调用了方法本身）
            <ul>
              <li>使用递归算法，计算1-20之间所数之和，这是一道经典面试题</li>
              <li>什么是递归：就是一个方法，自己调用自己</li>
              <li>注意：递归方法，一定要控制好合适跳出，否则就是死循环。</li>
            </ul>
            <pre><code class="language-js line-numbers">  function calc(num) {
    if (num === 1) {
        return num;
    }
    let sum = num + calc(num - 1);
    // 为了防止函数名更换，导致调用失败，一般会用arguments  ,arguments.callee就是指方法本身
    // let sum = num + arguments.callee(num - 1);

    return sum;
  }
  console.log(calc(4));     // 4+ 3+ 2 + 1</code></pre>
          </li>
          <li>
            案例
            <pre><code class="language-js line-numbers">  // 案例1：
  function menu() {
    let number = parseInt(prompt('1.添加学生，2.修改学生，3.删除学生，0.退出系统'));
    switch (number) {
        case 1:
            alert('执行添加学生');
            menu();
            break;
        case 2:
            alert('执行修改学生');
            menu();
            break;
        case 3:
            alert('执行删除学生');
            menu();
            break;
        default:
            return;
    }
  }
  menu();

  // 案例2
  let obj1 = {                                    // 创建一个对象
    "name": "张三",
    "age": 20,
    "gender": "男",
    "obj2": {                                     // 对象中的对象
        "a": "a",
        "b": "b",
        "c": {                                    // 对象中的对象的对象
            "c1": "c1",
            "c2": "c2",
        }
    }
  };

  function copyObject(obj) {                      // 创建一个深拷贝方法
      let newObj = {};                            // 创建一个新的对象，用来存储值
      Object.keys(obj).forEach(r => {             // 循环obj对象身上的所有属性名称
          if (typeof obj[r] === 'object') {       // 判断obj身上的每个属性
              newObj[r] = copyObject(obj[r]);     // 如果还有object类型再次调用方法
          } else {
              newObj[r] = obj[r];                 // 没有的话，将obj对象中的属性值拷贝给newObj的属性名
          }
      })
      return newObj;                              // 返回新对象
  }
  let obj2 = copyObject(obj1);
  console.log(obj2);
  console.log(obj2.name = '李四');                 // 修改obj2  的名字
  console.log(obj1.name);                         // 修改obj2 的名字，但是没有影响到obj1   这就是深拷贝

  /* 如果想用深拷贝，最好的办法就是用递归算法如果不会写函数，用JSON方法也可以达到递归效果，也是一种深拷贝 */
  let obj1 = {              // 创建一个对象
    "name": "张三",
    "age": 20,
    "gender": "男",
    "obj2": {               // 对象中的对象
        "a": "a",
        "b": "b",
        "c": {              // 对象中的对象的对象
            "c1": "c1",
            "c2": "c2",
        }
      }
  };
  // 先将obj1转换为JSON格式的字符串，再用parse方法将JSON转换为对象  就是深拷贝
  let obj2 = JSON.parse(JSON.stringify(obj1));
  console.log(obj2);

  // 案例3
  // 利用递归函数求 1 - n 的阶乘  1 * 2 * 3 * 4 *...m
  function fn(n) {
      if (n === 1) {
          return 1;
      }
      return n * fn(n - 1);
  }
  console.log(fn(3));  /* 执行过程 fn(3)
                          3 != 1
                          return 3 * (fn(3-1))
                          2 != 1
                          return 2 * (fn(2-1))
                          1 == 1
                          return 1

                          return 3 * 2 * 1
                          result 6     */

  // 案例4
  // 利用递归函数求斐波那契数列（兔子序列）1、1、2、3、5、8、13、21....
  function fn(n) {
      if (n === 1 || n === 2) {
          return 1;
      }
      return fn(n - 1) + fn(n - 2);
  }
  console.log(fn(3));

  // 案例5： 根据ID 返回数据对象
  let data = [{
    id: 1,
    name: "领导1",
    item: [{
        id: 3,
        name: "员工1"
    }, {
        id: 4,
        name: "员工2"
      }]
  }, {
      id: 2,
      name: "领导2"
  }]
  // 根据输入ID号，返回数据对象
  function getID(json, id) {
      var o = {};
      json.forEach(j => {
          if (j.id == id) {
              o = j;
              return j;
          } else if (j.item && j.item.length > 0) {
              o = getID(j.item, id);
          };
      });
      return o;
  };
  console.log(getID(data, 6));</code></pre>
          </li>
          <li>
            *深拷贝 和浅拷贝
            <ul>
              <li>
                浅拷贝只是拷贝一层，更深层次对象级别的只拷贝引用地址，别的数据修改了，那么拷贝的数据也会修改
                <pre><code class="language-js line-numbers">  let obj = {
    name: "张三",
    age: 20,
    sex: "男",
    adr: {
        address: "福建"
    }
  };
  let o = {};
  for (let k in obj) {       // 浅拷贝
      // k 代表属性名   obj[k]代表属性值
      o[k] = obj[k];
  }
  console.log(o);
  //------------------------------------------------------------------------------
  // 使用ES6方法进行浅拷贝，更简单，如果对象有自己的属性与浅拷贝的属性重复，则浅拷贝时会进行覆盖
  Object.assign(o, obj);     // 第一个参数是需要拷贝给谁，第二个参数是被拷贝的对象
  console.log(o);

  // 展开运算符 进行浅拷贝
  let c = {age:"18" ...obj }; // 浅拷贝时，后边的会覆盖前边的，如果obj里有age:20,则拷贝时会把18给覆盖成20
  console.log(c); </code></pre>
              </li>
              <li>
                深拷贝拷贝多层，每一级别的数据都会拷贝.
                对于复杂引用数据类型且不是拷贝地址，而是新开辟空间
                <pre><code class="language-js line-numbers">  let obj = {
    name: "张三",
    age: 20,
    sex: "男",
    adr: {
        address: "福建"
    }
  };
  let o = {};
  function deepCopy(newObj, oldObj) {          // 封装函数
      for (var k in oldObj) {
          // 判断我们的属性值属于哪种数据类型
          // 1、获取属性值  oldObj[k]
          var item = oldObj[k];
          if (item instanceof Array) {         // 2、判断是否是数组
              newObj[k] = [];
              deepCopy(newObj[k], item);       // 递归
          } else if (item instanceof Object) { // 3、判断啊是否是对象
              newObj[k] = {};
              deepCopy(newObj[k], item);       // 递归
          } else {                             // 4、其他都是简单数据类型
              newObj[k] = item;
          }
      }
  };
  deepCopy(o, obj);
  console.log(o);</code></pre>
              </li>
            </ul>
          </li>
          <li>
            *高阶函数
            <ul>
              <li>
                什么是高阶函数：就是一个函数的参数是函数，或者返回值是函数，满足其中一个就是高阶函数
              </li>
              <li>开闭原则：对于扩展是开放的，但是对于修改是封闭的</li>
            </ul>
            <pre><code class="language-js line-numbers">  // 定义两个方法
  function add(num1, num2) {
      console.log(num1 + num2);
  }

  function sub(num1, num2) {
      console.log(num1 - num2);
  }
  // callback 是一个回调函数，这样可以扩展，但是不会修改原来的函数
  function calc(num1, num2, callback) {
      callback(num1, num2);
  }
  // 可以新增一个方法 add, subtract, multiply   divide  加减乘除
  function mul(num1, num2) {
      console.log(num1 * num2);
  }

  function divide(num1, num2) {
      console
          .log(num1 / num2);
  }
  let num1 = 1000;
  let num2 = 200;
  calc(num1, num2, add);     // 1200
  calc(num1, num2, divide);  // 5</code></pre>
          </li>
          <li>
            *高阶函数：回调函数 （执行过程中 回过头来调用）
            <ul>
              <li>
                正常求数组中的数
                <pre><code class="language-js line-numbers">  let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
  for (let i = 0; i &lt; arr.length; i++) { // 输出数组中的偶数
      if (arr[i] % 2 === 0) {
          console.log(arr[i]);
      }
  }
  for (let i = 0; i &lt; arr.length; i++) { // 输出数组中的奇数
      if (arr[i] % 2 !== 0) {
          console.log(arr[i]);
      }
  }</code></pre>
              </li>
              <li>
                回调函数的作用
                <pre><code class="language-js line-numbers">  //------------------------------------------------------------------
  function sum(arr, callback) {
      for (let i = 0; i &lt; arr.length; i++) {
          if (callback(arr[i])) {
              console.log(arr[i]);
          }
      }
  }
  //----------------------------------------------------------------------
  function fun1(val) {
      return true;
  }
  sum(arr, fun1)
  // sum(arr,fun1) 的执行步骤
  /*
      function sum(arr,callback ) {                 // arr 和 fun1 是形参  [11, 22, 33, 44, 55, 66, 77, 88, 99], fun1
          for (let i = 0; i &lt; arr.length; i++) {    // 循环数组，i&lt; [11, 22, 33, 44, 55, 66, 77, 88, 99]数组的长度
              if (callback(arr[i])) {               // if(fun1(arr[i]))  ,这里调用fun1 方法   val = arr[i]  ,返回结果为true
                  console.log(arr[i]);              // 结果为true 的话 就直接打印 arr[i]
              }
          }
      }
  */
  function fun2(val) {
      return val % 2 === 0;
  }
  sum(arr, fun2);
  // sum(arr,fun2) 的执行步骤
  /*
    function sum(arr,callback ) {                    // arr 和 fun1 是形参 [11, 22, 33, 44, 55, 66, 77, 88, 99], fun2
          for (let i = 0; i &lt; arr.length; i++) {     // 循环数组，i&lt; [11, 22, 33, 44, 55, 66, 77, 88, 99]数组的长度
              if(callback(arr[i])) {                 // if(fun2(arr[i])) ,这里调用fun2 方法 val = arr[i]  返回结果  return  arr[i]的值 % 2 等于0 ;
                  console.log(arr[i]);               // 结果为true 的话 就直接打印 arr[i]
              }
          }
    }
  */

  // ES6简写形式
  function sum(arr, callback) {
      for (let i = 0; i &lt; arr.length; i++) {
          if (callback(arr[i])) {
              console.log(arr[i]);
          }
      }
  } //----------------------------------------------------------------------
  sum(arr, val=> true)
  console.log('-------------------------------------------');
  sum(arr, val => val % 2 === 0);</code></pre>
              </li>
            </ul>
          </li>
          <li>
            案例
            <pre><code class="language-js line-numbers">  let arr = [10, 20, 30, 22, 50, 60];
  function every(arr, fn) {
      let isOk = true;
      for (let i = 0; i &lt; arr.length; i++) {
          if (!fn(arr[i])) {
              isOk = false;
              break;
          }
      }
      return isOk;
  }
  console.log(every(arr, function (item) {
      return item % 2 === 0;
  }));</code></pre>
          </li>
          <li>
            *数组的高阶函数 forEach() 循环遍历数组
            <ul>
              <li>
                例子
                <pre><code class="language-js line-numbers">  let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
  // forEach（）方法，用于循环遍历整个数组
  // 该方法的参数是一个回调函数，回调函数可以传两个参数，第一个多数是数组中的每一项元素，
  // 第二个参数是每一项元素对应的下标。注意：第二个参数可以省路。还有第三个参数，就是数组本身，也可以省略
  arr.forEach(function (item, index，Array) {
      console.log(item, index, Array);
  })</code></pre>
              </li>
              <li>
                ES6简写
                <pre><code class="language-js line-numbers">  let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
  arr.forEach((item, index) => console.log(item, index));</code></pre>
              </li>
              <li>
                三个参数的写法
                <pre><code class="language-js line-numbers">  let arr = [1, 2, 3, 4, 5, 6];
  arr.forEach((item, index, Arr) => {
      console.log("每个元素" + item);     // 第一次打印的时候：每个元素1
      console.log("每个索引" + index);    // 第一次打印的时候：每个索引0
      console.log("数组" + Arr);         // 第一次打印的时候：数组1,2,3,4,5,6
      // 根据数组的长度 ，打印出次数
  })</code></pre>
              </li>
              <li>
                原理
                <pre><code class="language-js line-numbers">  let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
  function forEach(arr, calLback) {
      for (let i = 0; i &lt; arr.length; i++) {
          calLback(arr[i], i)
      }
  }
  forEach(arr, (item, index) => {
      console.log(item + ' ' + index);      // 这里就是调用 callback(item=arr[i] ,index=i)
  });</code></pre>
              </li>
            </ul>
          </li>
          <li>
            *数组的高阶函数 filter()
            <ul>
              <li>
                过滤数组中的元素，返回过滤后的结果，调用这个方法会返回全新的数组
                <pre><code class="language-js line-numbers">  // 第二个参数是每一项元素对应的下标。注意：第二个参数可以省略
  let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];

  let result = arr.filter(function (item) {
      return item % 2 === 0;
  })
  console.log(result);</code></pre>
              </li>
              <li>
                ES6简写
                <pre><code class="language-js line-numbers">  let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
  let result = arr.filter(item => item % 2 === 0);
  console.log(result);                             // 会返回全新的数组
  console.log(arr);                                // 原数组不变</code></pre>
              </li>
              <li>
                原理
                <pre><code class="language-js line-numbers">  let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
  function filter(arr, calLback) {
      let arr2 = [];            // 在循环外面定义一个空数组
      for (let i = 0; i &lt; arr.length; i++) {
          if (calLback(arr[i])) {
              arr2.push(arr[i]);
          }
      }
      return arr2; //返回结果arr2
  }
  /*
      let arr2 = filter(arr,function(item){
          return item %2===0;   // 回调函数中，如果值为真，则会push 到arr2里面，并返回结果
      })
  */
  /* 简写 */
  let arr2 = filter(arr, item => item % 2 === 0);
  console.log(arr2);</code></pre>
              </li>
            </ul>
          </li>
          <li>
            *数组的高阶函数 find() 获取数组中满足规则的第一个元素
            <pre><code class="language-js line-numbers">  let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
  let result = arr.find(item => item % 2 === 0);
  console.log(result);</code></pre>
          </li>
          <li>
            *数组的高阶函数 findindex() 获取数组中满足规则的第一个元素的下标
            <pre><code class="language-js line-numbers">  let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
  let result = arr.findIndex(item => item % 2 === 0);  // 输出结果为1，因为满足条件22的下标为 1
  console.log(result);</code></pre>
          </li>
          <li>
            *数组的高阶函数 some()
            <ul>
              <li>
                用于表示数组中是否有满足指定规则的元素，返回结果，有： true ||
                一个都没有：false
                <pre><code class="language-js line-numbers">  let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
  let result = arr.some(item => item % 2 === 0); //true
  console.log(result);</code></pre>
              </li>
              <li>
                用return true 会终止迭代，但forEach 即使添加了也不会终止循环
                <pre><code class="language-js line-numbers">  let arr = [1, 2, 3, 4, 5, 6];
  arr.some((item, index) => {
      if (item >= 3) {
          console.log("找到了");
          console.log(index);
          return true;         // 当找到了满足条件的第一个元素，会结束循环，提高性能  ,return true 代表找到了，就会终止
      }
      console.log(1);          // 如果没有遇到return true  会一直循环数组
  })</code></pre>
              </li>
            </ul>
          </li>
          <li>
            *数组的高阶函数 every() 用于表示数组中是否所有元素都满足指定的规则
            <pre><code class="language-js line-numbers">  let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100, 110];
  // 1、 let result = arr.every(item => item > 10);           // 所有元素都满足大于10,返回true
  // 2、 let result = arr.every(item => item > 100);          // 所有元素中有不大于100的，返回false
  console.log(result);</code></pre>
          </li>
          <li>
            *数组的高阶函数 map() 用于表示数组里面的数据,根据指定规则的返回数据
            <pre><code class="language-js line-numbers">  let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100, 110];
  1、let result = arr.map(item => item * 2);        // 所有元素都 *2 返回新数组结果
  2、let result = arr.map(item => item % 4);        // 所有元素都取余运算，返回新数组结果
  console.log(result);

  // map 原理
  let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];

  function map(arr, calLback) {
      let arr2 = []; // 在循环外面定义一个空数组
      for (let i = 0; i &lt; arr.length; i++) {
          arr2.push(calLback(arr[i]))
      }
      return arr2;
  }
  let arr2 = map(arr, function (item) {
      return item * 2;
  })
  // let arr2 = filter(arr, item => item % 2 === 0);
  console.log(arr2);</code></pre>
          </li>
          <li>
            *数组的高阶函数：闭包函数
            当一个嵌套函数中，子函数调用了父函数的变量，就产生了闭包
            <ul>
              <li>
                代码
                <pre><code class="language-js line-numbers">  function a() {            // 父函数
    let i = 100;
    console.log(i);

    return function b() {   // 子函数
        i += 100;           // 引用了外层函数的变量 i
        let j = 200;
        console.log(`${j},${i}`);
    }
   // 如果没有返回函数B ，那么a() 只会返回i=100的结果，
  }
  a();                      // 如果没有返回函数B ，那么a() 只会返回i=100的结果
  let c = a();              // 函数返回了一个b ,拿c来接这个结果，这里就是用到了高阶函数，返回值是函数
  c();                      // 此时c() 就等于调用了 函数a ,里面进行了赋值操作，i就会等会200，切i是全局变量，在内存空间不会消失
  c();                      // 再调用一次 i = 200+100 ,此时i就等于300</code></pre>
              </li>
              <li>
                案例
                <pre><code class="language-js line-numbers">  // 案例1
  function calc(n1, n2, type) {
    let num1 = n1;
    let num2 = n2;
    switch (type) {
        case '+':
            return function () {
                console.log(` ${num1}+${num2}=${num1+num2}`);
            }
        case '-':
            return function () {
                console.log(` ${num1}-${num2}=${num1-num2}`);
            }
    }
  }
  let add = calc(100, 200, '+');     // 定义个变量来接收函数返回值
  add();
  let sub = calc(300, 400, '-');
  sub();

  // 案例2 采用立即函数也能形成闭包
  &lt;ul&gt;
    &lt;li&gt;1&lt;/li&gt;
    &lt;li&gt;2&lt;/li&gt;
    &lt;li&gt;3&lt;/li&gt;
  &lt;/ul&gt;
  &lt;script&gt;
      let lis = document.querySelector("ul").querySelectorAll("li");
      for (let i = 0; i &lt; lis.length; i++) {    // 传统方式给li 添加索引号
          lis.index = i + 1;
          lis[i].onclick = function () {
              console.log(i);
          }
      };
      for (let i = 0; i &lt; lis.length; i++) {   // 采用闭包方式给li 添加索引号
          (function (i) {
              lis[i].onclick = function () {
                  console.log(i);
              }
          })(i); // 把i传进函数中，这样就为
      }
  &lt;/script&gt;

  // 案例3
  var car = (function () {                     // 用一个变量接收返回值
    var start = 7;                             // 起步价
    var total = 0;                             // 总价
    return {                                   // 返回一个对象，对象里面有两个计算方法
        price(n) {
            if (n &lt;= 3) {                      // 如果没有超过3公里
                total = start;                 // 那么总价就会等于起步价 7 元
            } else {
                total = start + (n - 3) * 5;   // 超过3公里，每公里加5元
            }
            return total;                      // 返回总价格
        },
        yongDu(flag) {
            return flag ? total + 10 : total;
        }
    }
  })();
  console.log(car.price(10));                  // (5*7) + 7
  console.log(car.yongDu(true));               // (5*7) + 7+10=52

  // 案例4 分页
  let arr = [];                               // 定义一个数组，里面初始化100条数据
  for(let i = 0;i&lt;100;i++){
      arr.push('数据' +(i+1))
  }
  function pageData(arr,pageIndex,pageSize){  // 定义一个分页方法，方法三个参数，原始数组，页码，每页数量
      // 思路：就是对原始数组中的数据，做截取
      //      定义截取数据的起始位置
      let start = (pageIndex - 1) * pageSize;
      let ent = start + pageSize;
      return arr.slice(start,end)
  }
  let arr2 = pageData(arr,3,10)
  let arr3 = pageData(arr,5,15)

  // 分页方法
  getPageData: function (arr, pageIndex, pageSize) {
    // 起始位置
    let start = (pageIndex - 1) * pageSize;
    // 结束位置
    let end = pageSize + start;
    // 获取分页数据
    let data = arr.slice(start, end);
    // 计算出总页数  向上取整
    let totalPage = Math.ceil(arr.length / pageSize);
    // 返回一个对象
    return {
        // 一份数据
        data: data,
        // 总页数
        totalPage: totalPage
    }
  },

  // 面试题
  var num = 10;                     // 3、此时this.num的值是60，num值也就变成60   // 7.2、 65
  var obj = {
      num: 20                       // 8.1后 this.num = 10 * 3
  };
  obj.fn = (function (num) {        // 2、num形参=20,因为obj.num作为实参传进来的   21
      // 1、立即执行函数，第一次调用，this是指向window，因为是自己调用自己
      this.num = num * 3;           // 60
      num++;                        // num++ = 20  num = 21   7.2、后 +1 =22
      return function (n) {         // 4、返回函数给  obj.fn
          this.num += n;
          num++;                    // 7.2、 num++ = 65 num++ = 21 num = 22    8.2后+1、 num++ = 22 num = 23
          console.log(num);         // 7.2、22
      }
  })(obj.num);
  var fn = obj.fn;                  // 5、将方法赋值给fn
  console.log(fn);                  // 6、这里打印的话就是打印方法
  fn(5);                            // 7、调fn方法，传值5  此时方法的this 指向的是window   window.fn（5）
                                    // 7.1、所以方法中，this.num+=n  就会是 60 + 5

  obj.fn(10);                       // 8、此时是obj在调用，那么this指向obj   23
  console.log(num, obj.num);        // 65   30
                  </code></pre>
              </li>
            </ul>
          </li>
          <li>
            *数组的高阶函数 reduce() ES6新增数组统计用
            <pre><code class="language-js line-numbers">  // 之前的方法是
      let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];
      let sum = 0;
      arr.forEach(a => {
          sum += a;
      })
      console.log(sum);

  // 使用 reduce() 方法
      let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];
      let sum = arr.reduce(function (a, b) {   // 回调函数，值要传两个 a 代表要返回计算结束的值
          return a + b                         // b 代表当前元素,如果循环第一次，那么就代表11，依次循环
      }, 0);                                   // 0 代表a的初始值，如果是5，会在总数的基础上加5 ，也可以不给初始值
                                               // 通常循环数组对象的时候 还是加上初始值 0  否则报错
      console.log(sum);</code></pre>
          </li>
          <li>
            *数组的高阶函数 includes() 表示某个数组是否包含给定的值，返回布尔值
            <pre><code class="language-js line-numbers">  let arr = [11, 22, 33, 44, 5];
  let a = arr.includes(5);          // true
  let b = arr.includes(510);        // false 因为数组中没有
  let c = arr.includes(33,3);       // false 因为数组中没有,第二个参数表示查询的起始位置
  console.log(a);</code></pre>
          </li>
          <li>
            *this 指向问题
            <ul>
              <li>
                函数中，谁调用，this就指向谁，fun1是window的方法，所以this 指向
                window
                <pre><code class="language-js line-numbers">  // 采用var 关键字声明的变量，都会成为Window对象的属性或者方法
    var a = 'abcdefg';
    var b = 20;
    var fun1 = function () {
        console.log(a, b);
        console.log(this.a, this.b);       // 谁调用 this就指向谁，此时是window 调用
        // 作用是一样的，因为var 关键字声明的函数会成为window的方法  而a和b都是window的属性
    }
    fun1();                                // 这里其实省略了 window.fun1()
    console.log(this);
  //------------------------------------------------------------------------------------
   // 此时创建一个对象
    let zs = {
        a: "张三",
        b: 30,
        // zs.fun1 = fun1   就是在zs里面添加了一个fun1方法
        /*  fun1:function(){
              console.log(this.a, this.b);
            }
        */
    }
    zs.fun1 = fun1;                         // 将fun1的方法赋值给zs对象，
    zs.fun1();                              // 此时调用者是 zs  this 指向的就是 zs 这个对象
  //-------------------------------------------------------------------------------------
    // 此时创建一个对象，对象中的方法返回的是两个方法
    let ls = {
        a: "李四",
        b: 40,
        fun2() {
            // console.log(this);  这里的this 指向的是 ls,因为ls 在调用
            return {
                fun3() {
                    // console.log(this);  这里的this 指向的是返回的对象fun3  fun4
                    console.log(this.a, this.b);
                },
                fun4() {
                    console.log(this.a, this.b);
                }
            }
        }
    };
    ls.fun2().fun3(); // this 没有备份 ls.fun2().fun3();则会undefined ，此时的this指向的是return
    ls.fun2().fun4(); // this 没有备份 ls.fun2().fun4()则会undefined
  //-------------------------------------------------------------------------------------------------
    let ls = {
        a: "李四",
        b: 40,
        fun2() {
            let _this = this;                       // 方法一，解决this指向问题，创建一个变量，将this指向备份到 _this
            return {
                fun3() {
                    console.log(_this.a, _this.b);  // 这里使用 _this.a 就可以访问到外层 a属性的值
                },
                fun4: () => {
                  // 方法二， 利用箭头函数，因为箭头函数中是没有this和arguments的，而this指向是找外层的
                  // 并且arguments 跟 this 一样是指向外层的arguments,如果没有也报错
                  console.log(this.a, this.b); // this指向的是返回值函数 fun3 fun4
                }
            }
        }
    };
    ls.fun2().fun3();                               // 李四 40
    ls.fun2().fun4();                               // 李四 40</code></pre>
              </li>
            </ul>
          </li>
          <li>
            *rest参数 使用 ...+自定义名称 组成
            <ul>
              <li>
                代码
                <pre><code class="language-js line-numbers">  //  ...args 就是 rest参数
  function say(a, b, ...args) {
      console.log(a);
      console.log(b);
      console.log(args);        // ...args 管理的就是实参传入的3 4 5 6 .会以数组对象形式管理,也可以使用数组的方法
  }
  say(1, 2, 3, 4, 5, 6); </code></pre>
              </li>
              <li>
                数组拼接
                <pre><code class="language-js line-numbers">  let a = [1, 2, 3];
  let b = [4, 5, 6];
  let c = [...a, ...b]
  console.log(c); // [1, 2, 3, 4, 5, 6]</code></pre>
              </li>
              <li>
                展开数组
                <pre><code class="language-js line-numbers">  console.log(...c);      // 1,3,4,5,6
  console.log(c[0]);      // 1 相当于这样的写法，但是...c不需要写很多次，只要写一次就可以展开所有</code></pre>
              </li>
              <li>
                展开对象
                扩展运算符复杂数据类型是浅拷贝，还可以将非数组转换为数组
                <pre><code class="language-js line-numbers">  let a = {
    name: "a",
    age: 20,
    sxe: "男"
    job: "工作人员"
  }
  let b = { ...a};          // 展开运算符，可以将一个对象成员，可以浅克隆（只拷一级，如果对象里还有一对象，则不会拷贝成功）给另一个对象
  console.log(b);           // {name: "a", age: 20, sxe: "男", job: "工作人员"}

  // ---------------------------------------------------------------------
  let c = {
      name: "c",
      age: 25,
      sxe: "女"
  }
  let ac = { ...a, ...c };  //  使用...拼接，没有的属性会合并，有的属性会后者覆盖前者
  console.log(ac);          // {name: "c", age: 25, sxe: "女", job: "工作人员"}</code></pre>
              </li>
              <li>
                解构赋值
                <pre><code class="language-js line-numbers">  let arr = [1, 2, 3];
  let a = arr[0];
  let b = arr[1];
  let c = arr[2];
  console.log(a, b, c);           // 之前的做法太繁琐 需要声明变量并赋值

  // ES6 方法   [变量名1，变量名2，...] = 数组
  let [a, b, c] = arr;
  console.log(a, b, c);</code></pre>
              </li>
              <li>
                对象
                <pre><code class="language-js line-numbers">  let a = {
    name: "a",
    age: 20,
    sex: "男"
  }
  let {name,age,sex} = a;          // 相当于  let name = a.name let age = a.age ....
  console.log(name, age, sex);
  //-----------------------------------------------------------------------------------
  let age = 30;
  let { name, age,sex } = a;       // 再赋值会报错  因为let 只能声明一次，相当于age let 两次了
  console.log(name, age, sex);     // 'age' has already been declared
  // 解决方法-------------------------------------------------------------------------------
  let age = 30;
  let { name, age:age1,sex } = a;  // 对象的属性名称叫什么，就定义什么名称的变量去接，如果出现了同名，可以修改名称
  console.log(name, age1, sex); </code></pre>
              </li>
              <li>
                对象中，左右表达式一样，可以省略右侧表达式
                <pre><code class="language-js line-numbers">  let name = "zs";
  let age = 18;
  let sex = "男";
  let fun1 = function () {
      console.log("function");
  }
  let a = {
      name: name,
      age: age,
      sex: sex,
      fun1: fun1
  }
  console.log(a.name);
  a.fun1();

  // ES6规定，对象中属性左右两边的表达式相同，可以省略右边的表达式
  // 该对象在定义的时候，会自动往父级作用域寻找同名属性对应的值
  let a = {
      name,
      age,
      sex,
      fun1
  }
  console.log(a.name);
  a.fun1();</code></pre>
              </li>
            </ul>
          </li>
        </ul>
      </el-card>
      <el-card id="part12" shadow="hover">
        <h2>对象</h2>
        <p>对象是由属性和方法组成的。</p>
        <ul>
          <li>
            现实生活中：万物皆对象，对象一个具体的事物，看得见摸得着的实物。
          </li>
          <li>
            例如，一本书、一辆汽车、一个人可以是“对象”，一个数据库、网页、一个与远程服务器的连接也可以是“对象"。
          </li>
          <li>
            在JavaScript中，对象是一组无序的相关属性和方法的集合，所有的事物都是对象，例如字符串、数值、数组
            <ul>
              <li>属性：事物的特征，在对象中用属性来表示（常用名词）</li>
              <li>方法：事物的行为，在对象中用方法来表示（常用动词）</li>
            </ul>
          </li>
          <li>
            为什么需要对象？
            <ul>
              <li>
                保存一个值时，可以使用变量，保存多个值（一组值）时，可以使用数组。如果要保存一个人的完整信息呢？
              </li>
              <li>
                例如，将“张三疯”的个人的信息保存在数组中的方式为：
                <ul>
                  <li>var arr=[‘张三疯’，‘男’，128，154]；</li>
                </ul>
              </li>
              <li>
                JS中的对象表达结构更清晰，更强大。张三疯的个人信息在对象中的表达结构如下：
                <ul>
                  <li>张三疯.姓名 = '张三疯'； == person.name = ' 张三疯'；</li>
                  <li>张三疯.性别 = '男'； == person.sex = ' 男' ；</li>
                  <li>张三疯.年龄 = 128； == person.age = 128;</li>
                  <li>张三疯.身高 = 154； == person.height = 154;</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p>创建对象的三种方式</p>
        <ul>
          <li>
            利用字面量创建对象
            <pre><code class="language-js line-numbers">  var obj = { };                 // 这样是创建了一个空对象
  var obj = {
      name: '张三丰',             // 对象里面属性，有多个属性或者方法用逗号隔开 ，属性名建议不加引号，特殊才加，
      age: 18,
      sayHi: function () {       // 方法后面跟的是一个匿名函数
          console.log('say hi');
      }                          // 如果是最后一个，不要写逗号
  };

  /* obj [ ' 123 ' ] = 789; 如果要采用特殊的属性名，用 [ ],调用 则用 obj[ ' ' ]
  调用对象的属性，我们可以采取 对象名.属性名
      console.log(obj.name);
  调用对象的属性，我们也可以采取 对象名['']; 注意 ，要加上' '
      console.log(obj['name']);
  调用对象的方法，我们采取 对象名.方法名();
      obj.sayHi();

  *、对象的增删改查
    1、增 语法： obj.属性名 = 属性值；
      obj.name = "张三";
    2、改 语法： obj.原属性名 = 新属性值；
      obj.name = "李四";
    3、删 语法： delete 对象.属性名；
      delete obj.name; */</code></pre>
          </li>
          <li>
            利用new Object创建对象
            <pre><code class="language-js line-numbers">  var obj = new Object();     // 创建了一个空对象， O 要大写
  obj.name = '张三丰';         // 因为已经创建了一个空对象，所以这里可以添加一个属性
  obj.saHi = function () {}   // 创建一个方法

  /* 注意： 1、用等号 赋值 的方法，添加对象的属性和方法
           2、每个属性和方法之间用 分号结束； */
            var obj = new Object;
            obj.name = '鸣人';
            obj.sex = '男';
            obj.age = '19岁';
            obj.skill = function() {
                console.log('影分身');
            }
            obj.skill();
            console.log(obj.name);
            console.log(obj['sex']);</code></pre>
          </li>
          <li>
            利用构造函数创建对象
            <ul>
              <li>
                构造函数 （推荐使用class 或者
                把构造函数放到立即执行函数代码块里）
                <ul>
                  <li>
                    是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，
                  </li>
                  <li>
                    它总与new运算符一起使用。我们可以把对象中一些公共的属性和方法抽取出来然后封装到这个函数里面。
                  </li>
                  <li>
                    因为我们一次创建一个对象，里面很多的属性和方法是大量相同的我们只能复制，因此我们可以利用函数的方法
                  </li>
                  <li>
                    重复这些相同的代码，我们就把这个函数称为构造函数。又因为这个函数不一样，里面封装的不是普通代码，而是对象。
                  </li>
                  <li>
                    构造函数就是把我们对象里面一些相同的属性和方法抽象出来封装到函数里面
                  </li>
                </ul>
                <pre><code class="language-js line-numbers">  /* 构造函数的语法格式：
    function 构造函数名() {        // 构造函数名 开头大写
        this . 属性 = 值；
        this . 方法 = function(){}
    }
     new 构造函数名 () ;           // 调用构造函数
  */
  function Person(name, age, sex) {
      this.name = name;
      this.age = age;
      this.sex = sex;
      this.fun = function (year) {
          console.log(this.name, this.age, this.sex);
      }
  }
  let a1 = new Person('张三', 18, "男");
  console.log(a1);
  a1.fun();

  // 添加静态属性 和添加静态方法
  a1.staticProperty = " 添加静态属性 "
  a1.staticMethod = function(){ }   // 添加静态方法

  // 继承 （熟悉 不一定要掌握，要知道构造函数有这种继承的方法）
    let A = (function () {
      function A() {}
      return A;
  })();
  let B = (function () {
      function B() {}

      // 继承 Person
      B.prototype = new A();
      return B;
  })();
  let c = new B();
  console.log(c);</code></pre>
              </li>
              <li>
                构造函数的执行步骤：
                <ul>
                  <li>立即创建一个新的对象</li>
                  <li>将新建的对象设置为函数中的this</li>
                  <li>逐行执行函数中的代码</li>
                  <li>将新建的对象作为返回值返回</li>
                </ul>
              </li>
              <li>
                使用instanceof 可以检查一个对象是否是一个类的实例
                <ul>
                  <li>
                    instanceof检查的是对象的原型链上是否有该类实例,只要原型链上有该类实例，就会返回true
                  </li>
                  <li>语法: 对象 instanceof 构造函数</li>
                </ul>
              </li>
              <li>
                使用原型 prototype，创建每一个函数时，解析器都会向函数内添加一个
                prototype 属性
                <ul>
                  <li>语法: 函数名.prototype</li>
                  <li>如果函数作为普通函数调用prototype，是没有任何作用</li>
                  <li>
                    当函数以构造函数的形式调用时，它所创建的对象中都有一个隐含的属性
                  </li>
                  <li>
                    指向构造函数的原型对象，我们可以通过
                    __proto__(前后都是两个下划线)来访问该属性
                  </li>
                  <li>
                    原型对象就相当于一个公共的区域，所有同一个类的实例都可以访问到这个原型对象
                  </li>
                  <li>
                    我们就可以将对象汇总的共有的内容，统一设置到原型对象中
                  </li>
                  <li>
                    当我们访问对象的一个属性和方法时，它会先在对象中寻找，如果有则直接调用
                  </li>
                  <li>如果没有则会去原型对象中寻找，如果找到了就直接使用</li>
                </ul>
              </li>
              <li>
                作用
                <ul>
                  <li>
                    以后在创建构造函数时，可以将这些对象共有的属性和方法，统一添加到构造函数的原型对象中
                  </li>
                  <li>这样不用分别为每一个对象添加，也不会影响到全局作用域</li>
                  <li>语法： 函数名 . prototype . 属性名 = ‘属性值’；</li>
                  <li>
                    prototype（A.prototype是访问构造函数实例的原型）
                    __proto__（不推荐使用，因为可以重新赋值造成问题）
                    Object.getPrototypeOf(obj)（建议使用，=后不可赋值）
                    Object.create(obj) Object.getOwnPropertyName(obj) toString
                    Object.setPrototypeOf( )
                  </li>
                </ul>
                <pre><code class="language-js line-numbers">  function MyClass() {

  }
  //向MyClass原型对象中添加一个name 属性
  a.prototype.name = '123';
  var a = new MyClass;
  console.log(a.name);      // 123

  //使用 in 检查对象中是否含有某个属性时，有就返回true，否则false,但是注意，这个方法也会检查原型对象中有没有
  console.log('name' in a);

  // 想要判断非原型中没有属性，需要使用 hasOwnProperty() 方法来检查  (官方不推荐使用)
  console.log(a.hasOwnProperty('name'));   false
  console.dir(MyClass);     // 可以查看对象信息

  // Object.hasOwn(对象，属性名)  新方法：同样用来检查一个对象自身是否有某个属性 静态方法，通过类调用 （官方推荐使用）
  Object.hasOwn(a,"name")   // 等同于 </code></pre>
              </li>
              <li>
                原型对象中还有原型对象, 原型的原型就是直接找到 Object 对象的原型
              </li>
              <li>
                Object 对象的原型没有原型，如果Object中依然没有找到，则会返回
                undefined
              </li>
              <li>
                使用同一个构造函数创建的对象，我们成为一类对象，也将一个构造函数称为一类
              </li>
              <li>我们将通过一个构造函数创建的对象，称为是该类的实例</li>
              <li>
                this 的情况
                <ul>
                  <li>当以函数的形式调用时，this 是window对象</li>
                  <li>当以方法的形式调用时，谁调用方法this ，就是谁</li>
                  <li>当以构造函数的形式调用时，this就是新创建的那个对象</li>
                </ul>
                <pre><code class="language-js line-numbers">  function Star(uname, sex, age) {           // 构造函数名首字母大写
    this.name = uname;
    this.sex = sex;
    this.age = age;                          // 在构造函数里面，不需要return 返回值
  }
  var person = new Star('张三', '男', 18);    // 创建变量接收值
  // console.log(person);
  console.log(typeof(person));               // Object
  console.log(person.name);                  // 张三
  var person2 = new Star('李四', '男', 30);

  创建一个方法，传入实参的方式
  function Star(uname, sex, age) {
    this.sing = function(sang){              // 创建一个方法
        console.log(sang);
    }
  }
  person.sing('冰雨');</code></pre>
              </li>
              <li>
                使用构造函数可以更简化代码，只需要传入实参，形参接收就可以了
                <ul>
                  <li>构造函数名字首字母要大写</li>
                  <li>我们构造函数不需要return就可以返回结果</li>
                  <li>我们调用构造函数必须使用new</li>
                  <li>我们只要new Star() 调用函数就创建一个对象</li>
                </ul>
              </li>
              <li>
                构造函数，如Stars()，抽象了对象的公其部分，封装到了函数里面，它泛指某一大类（class）
              </li>
              <li>
                创建对象，如new
                Stars0，特指某一个，通过new关键字创建对象的过程我们也称为对象实例化
              </li>
              <li>检查 obj中是否含有某个 属性名 语法： ‘属性名’ in 对象</li>
            </ul>
          </li>
        </ul>
        <p>基本数据类型和引用数据类型的区别</p>
        <ul>
          <li>当比较两个基本数据类型的值时，就是比较值</li>
          <li>
            当比较两个引用数据类型时，它比较的对象的内存地址，如果地址一样，则相等，地址不一样，则不相等
            <pre><code class="language-js line-numbers">  var a = 123;
  var b = a;
  a++;
  console.log(a); //124
  console.log(b); //123
  // a和b是完全独立的，一个值的变化，不会影响其他值 ，js变量都是存在栈内存的
  // 基本数据类型都是直接在栈内存中存储

  var obj = new Object();
  obj.name = '我是数据1';
  var obj2 = obj;
  obj.name = '我是修改的数据'

  // console.log(obj.name);   // '我是数据1'
  console.log(obj.name);      // '我是修改的数据'
  console.log(obj2.name);     // '我是修改的数据'</code></pre>
          </li>
        </ul>
        <p>*ES6 中定义类的新语法</p>
        <ul>
          <li>
            代码
            <pre><code class="language-js line-numbers">  function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.fun = function (year) {
        console.log(this.name, this.age, this.sex);
    }
  }
  let a1 = new Person('张三', 18, "男");
  console.log(a1);
  a1.fun();

  //  ES6 新语法
  // 定义一个person 类型
  class Person {
      // 创建一个构造函数
      constructor(name, age, sex) {
          this.name = name;
          this.age = age;
          this.sex = sex;
      };
      // 方法1 给类添加一个方法,下面写法是在原型对象中添加， prototype中添加
      fun() {
          console.log(this.name, this.age, this.sex);
      };
      // 方法2，给类添加一个方法,下面写法是在对象中添加
      fun = function () {
          console.log(this.name, this.age, this.sex);
      }
  }
  let a1 = new Person('张三', 18, "男");
  console.log(a1);

  // 私有属性
  class Person {             // 创建一个构造函数
    #name;                   // 必须封闭类中声明私有字段“#name”
    #age;                    // 必须封闭类中声明私有字段“#gae”
    #sex;                    // 必须封闭类中声明私有字段“#sex”
    constructor(name, age, sex,money) {
        this.#name = name;   // 私有属性，只能通过方法get获取和方法set设置
        this.#age = age;     // 私有属性
        this.#sex = sex;     // 私有属性
        this.money = money;  // Person 公共属性
    }
    fun() {
        console.log(this.#name, this.#age, this.#sex);
    }
    setName(name) {          // 私有属性，只能通过方法get获取
        this.#name = name;
    }
    getName() {              // 私有属性，只能通过方法set设置
        return this.#name;
    }
  }
  let p = new Person("张三", 18, "男",500);
  console.log(p.getName());    // 私有属性，只能通过方法get获取
  console.log(p.money);        // 公共属性可以直接获取</code></pre>
          </li>
          <li>
            class 静态成员只能通过构造函数来访问
            ，实例成员只能通过实例化对象访问
            <pre><code class="language-js line-numbers">  class Person{               // 使用大驼峰命名法,注意创建实例时 构造名也要大写
    name = 1;                 // person 实例属性name，调用方法 p.name
    age = 2;                  // 实例属性只能通过实例访问 p.age
    static fun = "静态属性";   // 静态属性只能通过构造函数 类去访问  Person.fun
  }
  let p = new Person(); </code></pre>
          </li>
          <li>
            静态成员只能通过构造函数来访问 ，实例成员只能通过实例化对象访问
            <pre><code class="language-js line-numbers">  function Students(name, age) {
    this.name = name;                              // 实例成员
    this.age = age;                                // 实例成员
    console.log(this.name + "今年" + age + "岁");   // 张三今年18岁
  };
  // 实例化对象
  let std1 = new Students("张三", 18);
  console.log(std1);                               // Students {name: "张三", age: 18}
  Students.gender = "男";                          // 通过构造函数新增的成员 gender  属于静态成员
  console.log(std1.gender);                        // undefined  静态成员只能通过构造函数来访问 : Students.gender</code></pre>
          </li>
          <li>
            constructor 构造函数
            主要用于记录该对象引用于哪个构造函数，它可以让原型对象重新指向原来的构造函数
            <pre><code class="language-js line-numbers">  function Students(name, age) {
    this.name = name;
    this.age = age;
  };
  /* Students.prototype.eat = function () { // 在构造函数原型中添加一个吃的方法
      console.log("我会吃");
  } */
  Students.prototype = {                    // 采用对象形式往Students原型对象里添加方法,这样的方法必须手动constructor指回原来的构造函数
      constructor:Students,                 // 因为采用对象形式，等于修改掉原来的原型对象，所以要constructor指回原来的构造函数
      eat: function () {},                  // 这样才知道对象是通过哪个构造函数创建出来的
      play: function () {}
  }
  let std1 = new Students("张三", 18);
  console.log(Students.prototype);</code></pre>
          </li>
        </ul>
        <p>构造函数、实例、原型对象三角的关系</p>
        <ul>
          <li>
            JS的成员查找机制(规则)
            <ul>
              <li>
                当访问一个对象的属性包括方法时，首先查找这个对象自身有没有该属性或者方法
              </li>
              <li>
                如果没有就查找它的原型，也就是__proto__指向的prototype原型对象
              </li>
              <li>
                如果还没有就查找原型对象的原型，Object的原型对象，记住 O要大写
              </li>
              <li>
                以此类推一直找到Object为止（null）,因为Object
                后面已经没有原型对象了
              </li>
              <li>
                __proto__对象原型的意义就在于对象成员查找机制提供一个方向，或者说是一路线
              </li>
              <li>
                就近原则，自身有则先采用自身上的属性和方法，没有才往原型链路上查找
              </li>
            </ul>
          </li>
          <li>
            原型对象this的指向
            <ul>
              <li>构造函数中，this的指向是对象实例，就是创建出来实例化对象</li>
              <li>
                构造函数原型对象中的this
                指向的是创建出来的实例对象，谁调用this就指向谁
              </li>
              <li>普通函数的this指向的是window</li>
            </ul>
            <pre><code class="language-js line-numbers">  function a() {
    var name = "b";
    console.log(this);      // window
    console.log(this.name); // 空，因为this指向的是window,window里面有一个保留关键字 name 为空
    console.log(name);      // b
  };
  a();</code></pre>
          </li>
          <li>
            原型对象扩展内置对象方法
            <pre><code class="language-js line-numbers">  console.log(Array.prototype);                     // 没有求和的方法，那么可以自己扩展内置对象方法，里面没有求和方法
  // [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
  Array.prototype.sum = function () {               // 往数组对象原型中添加一个 求和方法
      let sum = 0;
      for (let i = 0; i &lt; this.length; i++) {    // this谁调用就指向谁的长度
          sum += this[i];                           // 讲数组中的每个元素 与sum想加
      }
      return sum;                                   // 返回sum的结果
  };
  let a = [11, 22, 33];
  console.log(a.sum());                             // 调用数组的扩展内置方法  sum()
  console.log(Array.prototype);                     // 这样就可以看到新增 sum方法
                                                    // [sum: ƒ, constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]

  //-----------------------------------------------------------------------------------
  Array.prototype={sum:function() {} }              // 不能使用 = ，这样等于覆盖掉数组中的对象和方法，调用其他方法时会报错</code></pre>
          </li>
        </ul>
        <pre><code class="language-js line-numbers">                      Student.prototype  &gt;
  Student 构造函数      &lt;================&gt;          Student 原型对象prototype
                  &lt; Student.prototype.constructor

          指向 &gt;                   std1.__proto__ &gt;
  Student  ====&gt;  new实例对象 std1     =========&gt;   Student 原型对象
            &lt; std1.__proto__.constructor是通过Student原型对象指回Student构造函数的</code></pre>
        <p>*ES6 中的继承</p>
        <pre><code class="language-js line-numbers">  class Person {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    };
    fun() {
        console.log(this.name, this.age, this.sex);
    };
  }
  let a1 = new Person('张三', 18, "男");
  console.log(a1);

  // 使用 extends 关键字 进行继承
  class School extends Person {
      constructor(name, age, sex, gender) {
          super(name, age, sex);             // super()表示调用父类的构造函数
          this.gender = gender;              // 表示School 新增的属性,是 school 独有的属性
      }
      // 写一个自己的方法
      myFun() {
          console.log(this.name, this.age, this.sex, this.gender);
      }
  }

  // 继承构造函数属性
  function Father(name, age) {
      this.name = name;
      this.age = age;
  };
  function Son(name, age) {
      Father.call(this, name, age);          // this指向父类的对象实例成员 .继承父级的this
  };
  var son = new Son('张三', 10);
  console.log(son);

  // 继承父亲的方法
  Son.prototype = Father.prototype;          //  X  这样做虽然可以在Son中访问到父级的方法，但是子级创建的方法会一起给父级添加
  Son.prototype  = new Father();             // 这样的好处是，能访问父级的方法，不会让Son新增方法存到父级原型对象中
  Son.prototype.constructor = Son;           // 注意要添加这一步
                                             // 因为采用对象的形式修改了原型对象，需要让constructor指回原来的原型对象</code></pre>
        <p>for in 循环对象</p>
        <ul>
          <li>枚举对象中的属性： 对象中有几个属性，循环体就会执行几次</li>
          <li>需要使用 for... in 语句</li>
          <li>语法： for (var 变量 in 对象){}</li>
          <li>
            变量： 每次执行都会把对象的属性名 赋值给变量
            对象[变量]，这样可以找到属性值
          </li>
          <li>
            方法2： Object.keys(obj) 循环出对象中所有的属性名，并返回一个新数组
            <pre><code class="language-js line-numbers">  let obj1 = {
    name: "张三",
    "age": 20,
    "gender": "男"
  }
  for (let k in obj1) {
      console.log(k + ':' + obj1[k]);
  }

  let b = Object.keys(obj1);
  console.log(b);                       // ["name", "age", "gender"]
  let obj2 = {}
  b.forEach(c => {
      obj2[c] = obj1[c]
  })
  console.log(obj2);</code></pre>
          </li>
          <li>Object.新增的方法，可以定义对象中新属性或修改原有属性</li>
          <li>
            语法：
            <pre><code class="language-js line-numbers">  Object.defineProperty(obj , "prop" , {value:descriptor})

  /* descriptor 的参数说明
      value： 设置属性的值默认为undefined
      writable： 值是否可以重写。true l false ，默认为false
      enumerable： 目标属性是否可以被枚举，也就是可不可以被遍历出来，此属性不包含修改形式。true l false ，默认为false
      configurable： 目标属性是否可以被删除或是否可以再次修改特性true | false ，默认为false  */
              </code></pre>
          </li>
          <li>
            可以使用map() 高阶函数来获取属性值
            <pre><code class="language-js line-numbers">  let data = {
    "name": "张三",
    "age": 10,
    "gender": "男"
  };
  Object.keys(data).map((key) => {
      console.log(data[key]);          // 张三     10    男
  })</code></pre>
          </li>
        </ul>
        <p>ES6语法，将对象转换为字符串</p>
        <pre><code class="language-js line-numbers">  let a = {
    name: '张三',
    age: 18,
    gender: '男'
  }
  // Object.keys(指定的对象)，该方法可以获取指定对象的所有Key 返回值是一个数组
  let arr = [];
  Object.keys(a).forEach(key => {                 // 先获取，然后再遍历
      arr.push([key, a[key]].join("="));          // 空数组里添加 [获取的键，键值].用 =号拼接
  })
  console.log(arr);                               // 获取值
  let b = arr.join("&");                          // 用& 特定的格式转换字符串
  console.log(b);
  //-------------------------------------------------------------------
  // 简化：
  let b = Object.keys(a).map((key,split='&')=> {  // 方法可以传两个参数，一个是键名，一个是分割符号，默认写了&
      return [key, a[key]].join("=");
  }).join(split);
  console.log(b);
  //---------------------------------------------------------------------
  // ES6简化
  let b = Object.keys(a).map((key,split='&') => [key, a[key]].join("=")).join(split);
  console.log(b);</code></pre>
        <p>ES6语法，将字符串转换为对象</p>
        <pre><code class="language-js line-numbers">  let str = "name=张三&age=18&gender=男";
  let obj = {};                           // 1、定义一个空对象
  let arr = str.split("&");               // 2、使用&符号分割字符串成数组
  // console.log(arr); ["name=张三", "age=18", "gender=男"]
  // 3、遍历数组，用 = 分割
  arr.forEach(item => {
      let strFg = item.split("=");        // 4、用=号分割字符串  strFg = ["name", "张三"]   ["age", "18"]   ["gender", "男"]
      obj[strFg[0]] = strFg[1];           // {name: "张三", age: "18", gender: "男"} obj[strFg[0]] 就是属性名，strFg[1]就是属性值
      // 上面代码就相当于对象创建属性     obj.name = "张三"    等同于    obj[name] = "张三"
  })
  console.log(obj);/*   let obj = {
                            name: '张三',
                            age: 18,
                            gender: '男' }
                   */

  // 简化代码-----------------------------------------------------
  // 将字符串转换为对象 name=张三&age=18&gender=男
  let str = "name=张三&age=18&gender=男";
  let obj = {}; // 1、定义一个空对象
  str.split("&").forEach(item => {
      let strFg = item.split("=");
      obj[strFg[0]] = strFg[1];
  })
  console.log(obj);</code></pre>
        <p>统计字符串中的数量</p>
        <pre><code class="language-js line-numbers">  // 1.定义一个学校对象
  let school = {
      // 2里面有一个学生数组，数组里面有三个学生对象的信息
      student: [{
          name: "zs",
          age: 20,
          sex: "男"
      }, {
          name: "ls",
          age: 26,
          sex: "女"
      }, {
          name: "ww",
          age: 19,
          sex: "男"
      }],
      // 3添加学生的方法
      add() {
          let obj = {};                                         // 4.创建一个空对象用来存储用户输入进来的数据
          obj.name = Number.parseInt(prompt('请输入姓名'));
          obj.age = Number.parseInt(prompt('请输入年龄'));
          obj.sex = Number.parseInt(prompt('请输入性别'));
          this.student.push(obj);                               // 5.然后再添加到student数组里
      },
      // 6展示学生的方法
      show() {
          console.log('------显示学生信息------');
          console.log('姓名 \t年龄 \t性别');
          this.student.forEach(f => {                           // 7、循环遍历数组中的对象
              console.log(`${f.name}  \t${f.age}  \t${f.sex}`); // 打印出student 数组中第一个对象的的属性值
          })
      },
      // 8. 添加一个菜单方法
      menu() {
          let menus = Number.parseInt(prompt('1.添加学生 2.查询学生 0.退出系统'));
          switch (menus) {
              case 1:
                  this.add();                                   // 调用添加的方法
                  break;
              case 2:
                  this.show();
                  break;
              case 0:
                  return                                        // 因为使用递归，需要return  退出方法
              default:
                  alert('请输入正确的编号');
          }
          // this.menu();  使用此方法也可以，但是当函数名变更时，其他调用函数忘记改名就会报错，不严谨
          // arguments.callee();  这里不能直接使用callee,因为第一次this指向没有问题，this指向的是调用者school，里面有方法
          // 当递归重复调用menu方法时，this 指向的会是调用者arguments .callee，callee没有menu方法
          arguments.callee.call(this);                          // 使用递归，重新调用此方法，call 可以改变this的指向，使用方法后还是指向 school
      }
  };
  school.menu();</code></pre>
        <p>垃圾回收 （GC :Garbage collection）</p>
        <ul>
          <li>
            程序运行一段时间后也会产生垃圾,和生活一样，生活时间长了以后会产生生活垃圾
          </li>
          <li>
            理解：如果一个对象没有任何的变量对其进行引用，那么这个对象就是一个垃圾
            <ul>
              <li>
                创建一个对象，给对象赋值null,断开引用地址后，这个对象就是垃圾，除非有其他变量引用这个对象
              </li>
              <li>垃圾对象的存在，会严重的影响程序的性能</li>
              <li>
                在JS中有自动的垃圾回收机制，这些垃圾对象会被解释器自动回收，我们无需手动处理
              </li>
            </ul>
          </li>
        </ul>
        <p>New 关键字</p>
        <ul>
          <li>
            new关键字执行过程
            <ul>
              <li>
                new构造函数可以在内存中创建了一个空的对象
                (等同于：他们两个生了个宝宝)
              </li>
              <li>
                this就会指向刚才创建的空对象 (等同于：
                这个宝宝必须是亲生的this指向)
              </li>
              <li>
                执行构造函数里面的代码给这个空对象添加属性和方法
                (等同于：教孩子读书，一肚子墨水)
              </li>
              <li>
                返回这个对象 (所以构造函数中不需要 return)
                (等同于长大挣钱回报父母)
              </li>
            </ul>
          </li>
        </ul>
        <p>遍历对象</p>
        <pre><code class="language-js line-numbers">  // 语法：
  for (var 变量 in 对象 ){        // 变量 写 k 或者 key
     console.log( 变量 ) ;       // 此时会遍历打印出来属性名
     console.log( 对象[变量] ) ;  // 此时会遍历打印出来 属性值
  }

  var obj = {
      name: '廉颇',
      type: '力量型',
  }
  for (var k in obj) {
      console.log(k);
      console.log(obj[k]);
  }</code></pre>
        <p>方法总结 (变量、属性、函数)</p>
        <ul>
          <li>变量：单独声明赋值，单独存在</li>
          <li>
            属性：对象里面的变量称为属性，不需要声明，用来描述该对象的特征
          </li>
          <li>函数：单独存在的，通过“函数名（）”的方式就可以调用</li>
          <li>
            方法：对象里面的函数称为方法，方法不需要声明，使用“对象.方法名（）"的方式就可以调用，
            方法用来描述该对象的行为和功能。
          </li>
        </ul>
        <p>小结</p>
        <ul>
          <li>对象可以让代码结构更清晰</li>
          <li>对象复杂数据类型object。</li>
          <li>本质：对象就是一组无序的相关属性和方法的集合。</li>
          <li>
            构造函数泛指某一大类，比如苹果，不管是红色苹果还是绿色苹果，都统称为苹果。
          </li>
          <li>对象实例特指一个事物，比如这个苹果、正在给你们讲课的老师等。</li>
          <li>for..in 语句用于对对象的属性进行循环操作。</li>
        </ul>
        <p>内置对象</p>
        <ul>
          <li>JavaScript中的对象分为3种：自定义对象、内置对象、浏览器对象</li>
          <li>
            前面两种对象是JS基础内容，属于ECMAScript；第三个浏览器对象属于我们JS独有的，我们JS
            API讲解
          </li>
          <li>
            内置对象就是指JS语言自带的一些对象，这些对象供开发者使用，并提供了一些常用的或是最基本而必要的功能（属性和方法）
          </li>
          <li>内置对象最大的优点就是帮助我们快速开发</li>
          <li>JavaScript提供了多个内置对象：Math、Date、Array、string等</li>
        </ul>
        <p>查文档</p>
        <ul>
          <li>
            MDN网址：
            <el-link
              type="primary"
              icon="Link"
              target="_blank"
              href="https://developer.mozilla.org/zh-CN/"
            >
              https://developer.mozilla.org/zh-CN/
            </el-link>
          </li>
          <li>
            学习一个内置对象的使用，只要学会其常用成员的使用即可，我们可以通过查文档学习，可以通过MDN/W3C来查询。
          </li>
          <li>
            Mozilla开发者网络（MDN）提供了有关开放网络技术（Open
            Web）的信息，包括HTML、CSS和万维网及HTML5应用的API。
          </li>
        </ul>
        <p>如何学习对象中的方法</p>
        <ul>
          <li>
            查阅该方法的功能 比如输入 math.max() ,
            功能就会显示出来：函数返回一组数中的最大值
          </li>
          <li>查看里面参数的意义和类型</li>
          <li>查看返回值的意义和类型</li>
          <li>通过demo 进行测试</li>
          <li>
            案例
            <pre><code class="language-js line-numbers">  //利用对象封装自己的数学对象，里面有PI的最大值和最小值
  var myMath = {
      PI: 3.141596253,
      max: function() {
          var max = arguments[0];
          for (var i = 1; i &lt; arguments.length; i++) {
              if (arguments[i] > max) {
                  max = arguments[i];
              }
          }
          return max;
      },
      min: function() {
          var min = arguments[0];
          for (var i = 1; i &lt; arguments.length; i++) {
              if (arguments[i] &lt; min) {
                  min = arguments[i];
              }
          }
          return min;
      }
  }
  console.log(myMath.PI);
  console.log(myMath.max(1, 12, 8));
  console.log(myMath.min(1, 12, 8));</code></pre>
          </li>
        </ul>
        <p>数学对象</p>
        <ul>
          <li>
            绝对值 max.abs () ;
            <pre><code class="language-js line-numbers">  console.log(Math.abs(1));          // 1
  console.log(Math.abs(-1));         // 1
  console.log(Math.abs('-1'));       // 1   因为会隐式转换
  console.log(Math.abs('中文'));      // NaN   </code></pre>
          </li>
          <li>
            取整数的三个方法
            <pre><code class="language-js line-numbers">  Math.floor ();                     // 向下取整，往最小了取整，不考虑四舍五入，注意负数
    console.log(Math.floor(1.2));    // 1
    console.log(Math.floor(1.6));    // 1 不会四舍五入
    console.log(Math.floor(-4.1));   // -5 负值有带小数点的直接进 1( -5 &lt; -4.1)，所以向下取整
    console.log(Math.floor('中文'));  // NaN

  Math.ceil ();                      // 向上取整，往最大了取整，不考虑四舍五入，有小数点直接进1
    console.log(Math.ceil(1.2));     // 2
    console.log(Math.ceil(1.6));     // 2
    console.log(Math.ceil(-4.6));    //-4 只会取到整数，并不考虑四舍五入（ -4 > -4.6 ）
    console.log(Math.ceil('中文'));   // NaN

  Math.round ();                     // 四舍五入，取整，负值 .5 比较特殊， 因为谁大取值谁， - 5 -4.5 -4 ，-4比-5大
    console.log(Math.round(1.2));    // 1
    console.log(Math.round(1.6));    // 2
    console.log(Math.round(-4.5));   // -4   只会取到整数，不会四舍五入
    console.log(Math.round('中文'));  // NaN</code></pre>
          </li>
          <li>
            随机数方法 random () ;
            <ul>
              <li>返回一个随机的小数</li>
              <li>
                这个方法不跟参数
                <pre><code class="language-js line-numbers">  console.log(Math.random()); // 获取随机的小数，0 &lt;= x &lt; 1

  //  案例：得到一个两数之间的随机整数，包括两个数在内
  function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
       // 向下取整（随机数0-1之间的小数  * 最大 - 最小 + 1 ） + 最小
       // 向下取整（0.2222  * （10-1+1））+1
       // 向下取整（2.222）+ 1
       // 取整后   2 + 1   随机数为 3
  }    // 如果不要包含 最大和最小数，则 不需要(max - min + 1)的+1 即可
  console.log(getRandom(1, 10));
                  </code></pre>
              </li>
              <li>
                方法2： 生成 x- y 之间的数
                <pre><code class="language-js line-numbers">  // 生成一个 1- 10 之间的随机数           ( y-x) +x
     var result = Math.round((Math.random() * 9) + 1);    // 包含1 和 10
  // 生成一个 0 - 10 之间的随机数
     var result = Math.round(Math.random() * 10);         // 包含0 和 10
  // 生成一个 2 - 10 之间的随机数
     var result = Math.round((Math.random() * 8) + 2);    // 不包含0 和 1</code></pre>
              </li>
              <li>
                案例
                <pre><code class="language-js line-numbers">  // 案例1：得到1-10的随机整数，只能猜5次，猜对退出，猜错继续
  function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var num2 = getRandom(1, 10); //调用函数
  var j = 5;
  for (var i = 5; i &gt; 0; i--) { //循环 次数
      j--;
      var num = parseInt(prompt('请输入一个数值'));
      if (num &gt; num2) {
          alert('数字大了，您还剩下' + j + '  次');
      } else if (num &lt; num2) {
          alert('数字小了，您还剩下' + j + '次');
      } else if (num == num2) {
          alert('猜对了');
          break;
      } else {
          alert('请输入正确的数值，您还剩下' + j + '次');
      }
  }
  alert('游戏结束');

  // 案例2：得到一个两数之间的随机整数，包括两个数在内，如果输入数值正确，则退出循环，输入错误一直猜
  function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var num2 = getRandom(1, 10); //调用函数

  while (true) { //这是一个死循环，注意
      var num = parseInt(prompt('请输入一个数值'));
      if (num &gt; num2) {
          alert('数字大了');
      } else if (num &lt; num2) {
          alert('数字小了');
      } else if (num == num2) {
          alert('猜对了');
          break;
      } else {
          alert('请输入正确的数值');
      }
  }</code></pre>
              </li>
            </ul>
          </li>
        </ul>
        <p>日期对象 (是一个构造函数，必须使用New 来调用创建)</p>
        <pre><code class="language-js line-numbers">  // 1、如果没有参数，则返回系统当前时间
    var a = new Date();
    console.log(a);

  // 2、如果带参数： 参数常用写法数字型  2019，10，01  （逗号隔开）或者是 字符串 ' 2019-10-1  8:8:8'
    var a = new Date('2019-10-1 8:8:8');    // 字符串形式 . 年月日和日月年都可以，二选一
    var a = new Date('2019/10/1 8:8:8');    // 必须加 ' ' 和 ：    二选一
    console.log(a);

  // 3、将时间转换字符串
    let d = new Date();
    let result = d.toLocaleDateString()     // 将日期转换成刚本地时间格式字符串  xxxx/xx/xx
    let result2 = d.toLocaleTimeString()    // 将时间转换成本地时间格式字符串    xx:xx:xx
    let result3 = d.toLocaleString()        // 日期和时间都转换                xxxx/xx/xx xx:xx:xx
    let r4 = d.toLocaleString("zh-CN",{})   // 日期格式可以传参 （"语言代码-国家地区"） 参数可以百度搜索。第二个参数可以传配置对象，查文档

    Date对象和Math对象不一样，他是一个构造函数，所以我们需要实例化后才能使用
    Date实例用来处理日期和时间

  var dateObj = new Date();
      dateObj.getFullYear();        /* 获取当年 */
      dateObj.getMonth();           /* 获取当月 0 - 11 */
      dateObj.getDate();            /* 获取当天 */
      dateObj.getDay();             /* 获取星期 周日0 到 周六6 */
      dateObj.getHours();           /* 获取当前小时 */
      dateObj.getMinutes();         /* 获取当前分钟 */
      dateObj.getSeconds();         /* 获取当前秒 */

  注意：在getMonth(); 需要加1,因为获取的当前月 是0 到11 来表示的
        在getDay();   获取的当前日是索引号 0 到6 来表示的，周日是0，写在最前面，周一是1，周六是6

  // 案例
      var a = new Date();
      var Year = a.getFullYear();
      var Month = a.getMonth() + 1;  //要 +1
      var mDate = a.getDate();
      var day = a.getDay();
      var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
      // 这里注意，数组中第一个必须写星期日，因为获取是从 0  1 2 3 4 5 6来获取的，0是星期日
      var Hours = a.getHours();
      var Minutes = a.getMinutes();
      var Seconds = a.getSeconds();
      console.log('今天是：' + Year + '年' + Month + '月' + mDate + '日，' + arr[day] + '');
      console.log(Hours + ':' + Minutes + ':' + Seconds);

  // 用函数封装一个时分秒
      function getTimer() {
          var a = new Date();
          var Hours = a.getHours();
          var Minutes = a.getMinutes();
          var Seconds = a.getSeconds();
          return Hours + ':' + Minutes + ':' + Seconds;
      }
      console.log(getTimer());

  // 完善代码：当时间小于10的话，前面补一个 0
      function getTimer() {
          var a = new Date();
          var Hours = a.getHours();
          Hours = Hours &lt; 10 ? '0' + Hours : Hours;               // 小于10自动补0，更美观
          var Minutes = a.getMinutes();
          Minutes = Minutes &lt; 10 ? '0' + Minutes : Minutes;       // 小于10自动补0，更美观
          var Seconds = a.getSeconds();
          Seconds = Seconds &lt; 10 ? '0' + Seconds : Seconds;       // 小于10自动补0，更美观
          return Hours + ':' + Minutes + ':' + Seconds;
      }
      console.log(getTimer());</code></pre>
        <p>时间戳 (获取日期的总的毫秒形式)</p>
        <ul>
          <li>
            Date对象是基于格林威治标准时间 1970年1月1日
            00：00：00（世界标准时间）起的毫秒数，调用时，中国时间和外国时间差8小时，
            -28800000
          </li>
          <li>
            为什么计算机起始时间从1970年开始？
            我们经常利用总的毫秒数来计算时间，因为它更精确 两种方法，一种通过
            valueOf () 一种通过 getTime ()
            <pre><code class="language-js line-numbers">  var date = new Date();
  console.log(date.valueOf());     // 方法1  O 要大写
  console.log(date.getTime());     // 方法2  T 要大写

  简写方式， + new 返回的就是总的 毫秒数
  var date = +new Date();          // 如果值为空，返回的是当前的总毫秒数
  console.log(date);

  H5简写方式， Date.当前的（）;
  console.log(Date.now());</code></pre>
          </li>
          <li>
            倒计时案例核心算法：
            <ul>
              <li>
                输入的时间减去现在的时间就是剩余的时间，即倒计时，但是不能拿着时分秒相减，
                比如05分减去25分，结果会是负数的。
              </li>
              <li>
                用时间戳来做。用户输入时间总的毫秒数 减去
                现在时间的总毫秒数，得到的就是 剩余时间的毫秒数
              </li>
              <li>
                把剩余时间总的毫秒数转换为天、时、分、秒（时间戳转换为时分秒）转换公式如下：
              </li>
            </ul>
            <pre><code class="language-js line-numbers">  /* d = parseInt（总秒数/60/60/24）;                    计算天数
  h = parseInt（总秒数/60/60%24）;                       计算小时
  m= parseInt（总秒数/60%60）;                           计算分数
  s = parseInt（总秒数%60）;                             计算当前秒数 */

  function countDown(time) {
    var dayTime = +new Date();                           // 如果值为空，那么会获取当前的总毫秒数
    var inputTime = +new Date(time);                     // 如果有值，就是获取值到1970的总毫秒数
    var total = (inputTime - dayTime) / 1000;            // 现在dayTime就是秒数了
    var d = parseInt(total / 60 / 60 / 24);              // 计算天数
    d = d &lt; 10 ? '0' + d : d                             // 小于10自动补0
    var h = parseInt(total / 60 / 60 % 24);              // 计算小时
    h = h &lt; 10 ? '0' + h : h                             // 小于10自动补0
    var m = parseInt(total / 60 % 60);                   // 计算分数
    m = m &lt; 10 ? '0' + m : m                             // 小于10自动补0
    var s = parseInt(total % 60);                        // 计算当前秒数
    s = s &lt; 10 ? '0' + s : s                             // 小于10自动补0
    return d + '天 ' + h + '时 ' + m + '分 ' + s + '秒 ';
  }
  console.log(countDown('2021-6-24 0:0:0'));
              </code></pre>
          </li>
        </ul>
        <p>数组对象</p>
        <ul>
          <li>
            创建数组对象的两种方式
            <pre><code class="language-js line-numbers">  // 1、字面量方式
    var a = [] ;

  // 2、new Array（）;           // 创建空数组
    var a = new Array () ;
    var a = new Array (5) ;     // 这样写，代表创建了一个数组，里面存放了5个空元素
    var a = new Array (5,4) ;   // 这样写 ，代表数组里有两个元素， 5 和 4</code></pre>
          </li>
          <li>
            检测是否是数组的两种方法：
            <pre><code class="language-js line-numbers">  // instanceof 和 （ Array. isArray(参数); 优先级更高，H5新增 ie9以上才支持 ）
  var arr = [];
  console.log(arr instanceof Array);      // 返回 true  和  false
  console.log(Array.isArray(arr));        // 返回 true  和  false

  // 翻转数组案例
  function reverse(arr) {
      if (arr instanceof Array) {         // 检测传进来的是否是数组，如果不是则弹出请输入正确数组
          var newArr = [];
          for (var i = arr.length - 1; i >= 0; i--) {
              newArr[newArr.length] = arr[i];
          }
          return newArr;
      } else {
          alert('请输入正确的数组');
      }
  }
  console.log(reverse([1, 2, 3, 4, 5]));</code></pre>
          </li>
          <li>
            添加删除数组元素的方法
            <pre><code class="language-js line-numbers">  // push(参数1....)                末尾添加一个或多个元素，注意修改原数组                并返回新的长度
  // pop()                          除数组最后一个元素，把数组长度减1无参数、修改原数      返回它删除的元素的值
  // unshift(参数1..)               向数组的开头添加一个或更多元素，注意修改原数组          并返回新的长度
  // shift()                        删除数组的第一个元素，数组长度减1 无参数、修改原数组    并返回第一个元素的值

  var arr = [1, 2, 3];            // 在尾部增加元素
  arr.push(4, '也可以多个元素');    // 会在末尾增加一个 4 元素： 可单 可多
  console.log(arr);               // 1, 2, 3，4,'也可以多个元素'
  console.log(arr.push());        // 会有返回值，返回新数组的长度 5
  arr.unshift(7, 8);              // 在开头增加元素
  console.log(arr);               // 7，8，1，2，3
  console.log(arr.pop());         // 打印出 返回值 最后一个要删除的元素
  console.log(arr.shift());       // 打印出 返回值 开头一个要删除的元素
  console.log(arr);               // 打印出 结果

  // 案例：之前遍历数值，然后把小于10的放到新数组
      var arr = [20, 8, 7, 12, 1];
      var newArr = [];
      for (var i = 0; i &lt; arr.length; i++) {
          if (arr[i] &lt; 10) {
              newArr[newArr.length] = arr[i];
          }
      }
      console.log(newArr);

  // 现在用push方法，代码更不容易出错
      var arr = [20, 8, 7, 12, 1];
      var newArr = [];
      for (var i = 0; i &lt; arr.length; i++) {
          if (arr[i] > 10) {
              newArr.push(arr[i]);
          }
      }
      console.log(newArr);</code></pre>
          </li>
          <li>
            数组排序、冒泡排序
            <pre><code class="language-js line-numbers">  // reverse()                      颠倒数组中元素的顺序，无参数   该方法会改变原来的数组 返回新数组
  // sort()                         对数组的元素进行排序          该方法会改变原来的数组返回新数组

  var arr = [20, 8, 7, 12, 1];
  arr.reverse(); //翻转数组
  console.log(arr);

  // 冒泡排序，如果顺序不一样，则会按照个位先排序，所以需要用函数解决 a- b b-a
  // var arr = [20, 8, 7, 9, 11]; // 这样排序会出现  11 20   7 8 9  排序
  var arr = [20, 18, 15, 11, 9];  // 比大小 是先 第一位进行排序，然后再第二位比较
                                  // 返回结果  11 15 18 20 9

  arr.sort(function(a, b) {       // 冒泡排序，完整写法，在sort()；里写一个函数
      return a - b;               // 按照升序的排列
      return b - a;               // 按照降序的排列
  });
  console.log(arr);</code></pre>
          </li>
          <li>
            数组索引方法，记住O大写 lastIndexOf 简单了解下即可，常用 indexOf
            <pre><code class="language-js line-numbers">  indexOf()     数组中查找给定元素的第一个索引     如果存在返回素引号 如果不存在，则返回-1。
  lastIndexOf   在数组中的最后一个的素引          如果存在返回索引号 如果不存在，则返回-1。

  返回数组元素索引号方法 indexOf（数组元素）作用就是返回该数组元素的索引号
  如果数组中有两个相同的 数组元素，则返回满足条件的第一个数组元素，后面的将不再获取
  lastIndexOf , I 和 O 要大写

  var arr = [20, 18, 15, '猜我是第几', 9, 15]; // 比大小是在 10个之间 以内进行排序
  console.log(arr.indexOf('猜我是第几'));      // 返回值 3
  console.log(arr.indexOf(15, 15));          // 返回值 -1，只允许返回一个值 ，从头开始查找
  console.log(arr.lastIndexOf(15));          // 返回值 5，因为是从末尾往前查找，只返回满足条件的第一个值，注意 I O 要大写</code></pre>
          </li>
          <li>
            数组去重
            <ul>
              <li>
                目标：把旧数组里面不重复的元素选取出来放到新数组中，重复的元素只保留一个，放到新数组中去重。
              </li>
              <li>
                核心算法：我们遍历旧数组，然后拿着旧数组元素去查询新数组，如果该元素在新数组里面没有出现过，我们就添加，否则不添加。
              </li>
              <li>
                我们怎么知道该元素没有存在？利用新数组.indexOf（数组元素）如果返回时-1就说明新数组里面没有改元素
              </li>
            </ul>
            <pre><code class="language-js line-numbers">  function unique(arr) {                        // 函数封装
    var newArr = [];
    for (var i = 0; i &lt; arr.length; i++) {
        if (newArr.indexOf(arr[i]) == -1) {     // 核心数算法，如果索引号不存在
            newArr.push(arr[i]);                // 那么就把这个数值元素赋到新数组上
        }
    }
    return newArr;                              // 返回值
  }
  var demo = unique([1, 2, 3, 5, 6, 7, 8, 9, 4, 1, 2, 5, 6, 3, 4]);
  console.log(demo);</code></pre>
          </li>
          <li>
            数组转换为字符串
            <pre><code class="language-js line-numbers">  toString()       把数组转换成字符串，逗号分隔每一项          返回一个字符串
  join("分隔符")    方法用于把数组中的所有元素转换为一个字符串。  返回一个字符串

  var demo = [1, 2, 3, 5];
  console.log(demo.toString());        // 输出字符串的 1，2，3，5
  console.log(demo.join('&'));         // 输出带分隔符的  1 & 2 & 3 & 5   分隔符可以是任意，不写则是默认 逗号 ，</code></pre>
          </li>
          <li>
            数组其他方法
            <pre><code class="language-js line-numbers">  concat()      连接两个或多个数组  不影响原数组          返回一个新的数组
  slice()       数组截取slice（begin，end）            返回被截取项目的新数组数组
  splice        数组删除splice（第几个开始，要删除个数）   返回被删除项目的新数组注意，这个会影响原数组

  var demo = [1, 2, 3, 4];
  var demo2 = [5, 6, 7, 8];
  console.log(demo.concat(demo2));       // 合并两个数组

  // slice();
  var num1 = [[1]];
  var num2 = [2, [3]];
  var num3 = [5, [6]];
  var num4 = num1.concat(num2);
  console.log(num4);                   // results is [[1], 2, [3]]
  var num5 = num1.concat(4, num3);
  console.log(num5)                   // results is [[1], 4, 5,[6]]
  num1[0].push(4);
  console.log(num4);                   // results is [[1, 4], 2, [3]]

  // splice();
  const months = ['Jan', 'March', 'April', 'June'];
  months.splice(1, 0, 'Feb');          // inserts at index 1
  console.log(months);                 // expected output: Array ["Jan", "Feb", "March", "April", "June"]
  months.splice(4, 1, 'May');          // replaces 1 element at index 4
  console.log(months);                 // expected output: Array ["Jan", "Feb", "March", "April", "May"]

  // concat()原理：
  let arr = [11, 22, 33, 44, 55];
  function concat(arr2) {
      for (let i = 0; i &lt; arr2.length; i++) {
          arr.push(arr[i])
      }
  }

  // includes()原理：
  function includes(val) {
    let isCz = false;                  // 定义一个变量表示是否存在
    for (let i = 0; i &lt; arr.length; i++) {
        if(arr[i]===val){
            isCz=true;                 // 表示已经存在
            break;
        }
    }
    return isCz;
  };
  console.log(includes(100));</code></pre>
          </li>
        </ul>
        <p>字符串对象</p>
        <ul>
          <li>
            基本包装类型：就是把简单数据类型包装成为了复杂数据类型，这样这个基本数据类型就有了属性和方法
            <pre><code class="language-js line-numbers">  // 基本包装类型
  var str ='andy';
  console.log(str.length);
  // 对象 才有 属性和方法   复杂数据类型才有 属性和方法
  // 简单数据类型为什么会有length属性呢？
  // 基本包装类型：就是把简单数据类型包装成为了复杂数据类型
  // （1）把简单数据类型包装为复杂数据类型
  var temp=new String("andy");
  // （2）把临时变量的值给str
  str = temp;
  // （3）销毁这个临时变量
  temp= nul1;</code></pre>
          </li>
          <li>
            字符串的不可变
            <ul>
              <li>
                指的是里面的值不可变，虽然看上去可以改变内容，但其实是地址变了，内存中新开辟了一个内存空间。
              </li>
            </ul>
            <pre><code class="language-js line-numbers">  var num1 = 10;
  console.log (num1) ;   // 此时肯定会输出 10
  num1 = 20;             // 给num1 赋值一个 20，替换原来的数据
  console.log (num1) ;   // 此时输出的肯定是 20 ， 但是 10 的地址值在内存不会销毁，而是 num1的指向 到 20 地址

  // 所以，我们字符串的不可变，所以不要大量的拼接字符串</code></pre>
          </li>
          <li>
            根据字符返回位置 . indexOf('要查找的字符' , 起始位置)
            <ul>
              <li>
                字符串所有的方法，都不会修改字符串本身（字符串是不可变的），操作完成会返回一个新的字符串。
              </li>
            </ul>
            <pre><code class="language-js line-numbers">  indexOf("要查找的字符",开始位置)    返回指定内容在元字符串中的位置，如果找不到就返回-1，开始的位置是index索引号
  lastIndexOf()                   从后往前找，只找第一个匹配的

  var str = '猜猜字是第几位，猜猜字是第几位';
  console.log(str.indexOf('字'));        // 2
  console.log(str.indexOf('是', 4));     // 11   查找的字符，从第四位开始查找</code></pre>
          </li>
          <li>
            案例：查找字符串”abcdefg”中所有0出现的位置以及次数
            <ul>
              <li>核心算法：先查找第一个o出现的位置</li>
              <li>然后只要indexOf返回的结果不是-1就继续往后查找</li>
              <li>
                因为indexOf只能查找到第一个，所以后面的查找，利用第二个参数，当前索引加1，从而继续查找
              </li>
            </ul>
            <pre><code class="language-js line-numbers">  var str = 'abcdefg';
  var index = str.indexOf('o');
  var res = 0;
  while (index != -1) {
      console.log(index);
      res++;
      index = str.indexOf('o', index + 1);
  }
  console.log(res);</code></pre>
          </li>
          <li>
            数组也是一样的
            <pre><code class="language-js line-numbers">  var str = [1, 2, 3, 3];
  var index = str.indexOf(3);
  var res = 0;
  while (index != -1) {
      console.log(index);
      res++;
      index = str.indexOf(3, index + 1);
  }
  console.log(res);</code></pre>
          </li>
          <li>
            根据位置返回字符（重点） 注意大小写
            <pre><code class="language-js line-numbers">  charAt(index)        返回指定位置的字符（index字符串的索引号）     str.charAt（0）
  charCodeAt（index）   获取指定位置处字符的ASClI码（index索引号）   str.charCodeAt（0）
  str[index]           获取指定位置处字符                         HTML5，IE8+支持和charAt0等效</code></pre>
          </li>
          <li>
            判断对象里面是否有该属性： 对象[ '属性名' ]
            <ul>
              <li>
                判断一个字符串abcdefg'中出现次数最多的字符，并统计其次数。
              </li>
            </ul>
            <pre><code class="language-js line-numbers">  /* 核心算法：
      利用charAt（）遍历这个字符串
      把每个字符都存储给对象，如果对象没有该属性，就为1，如果存在了就+1
      遍历对象，得到最大值和该字符 */
  var str = 'abcdefg';
  var o = {};
  for (var i = 0; i &lt; str.length; i++) {
      var chars = str.charAt(i);      // 是字符串的每一个字符
      if (o[chars]) {                 // 得到的是属性值
          o[chars]++;
      } else {
          o[chars] = 1
      }
  }
  //第二步 开始遍历对象
  var max = 0;                         // 存的是最大值
  var ch = '';                         // 先用一个空的变量来接收 属性名
  for (var k in o) {                   // k 是得到属性名     o[k]得到的是属性值
      if (o[k] > max) {
          max = o[k];
          ch = k;
      }
  }
  console.log(o);
  console.log('字符出现最多次数是：' + max);
  console.log('最多的字符是：' + ch);
              </code></pre>
          </li>
          <li>
            字符串操作方法
            <pre><code class="language-js line-numbers">  // concat（str1，str2，str3...）  concat（）方法用于连接两个或多个字符串。拼接字符串，等效于+，+更常用
  // substr（start，length）       从start位置开始（索引号），length取的个数重点记住这个
  // slice（start，end）           从start位置开始，截取到end位置，end取不到（他们俩都是索引号）
  // subSting(start,end)          从start位置开始，截取到end位置，en取不到基本和slice 相同但是不接受负值

  console.log(str1.substr(2,2));            // 第一个2是索引号的2，从第几个开始，第二个2，是取几个字符</code></pre>
          </li>
          <li>
            替换字符串 replace（‘被替换的字符’，‘替换为的字符’）
            <pre><code class="language-js line-numbers">  var str = 'abcdefg';
  console.log(str.replace('c', 'x'));       // 只会替换第一个满足条件的
  while (str.indexOf('c') != -1) {          // 使用循环，遍历字符串，如果找到不等于 -1
      str = str.replace('c', 'x');          // 则替换
  }
  console.log(str);</code></pre>
          </li>
          <li>
            把字符串转换成数组 split（'分隔符‘）
            <pre><code class="language-js line-numbers">  var str = 'abcd,abcdefg,abcdefg,aa';
  console.log(str.split(','));              // 用对应的分隔符来划分数组
  var str = 'abcd&abcdefg&abcdefg&aa';
  console.log(str.split('&'));              // 用对应的分隔符来划分数组</code></pre>
          </li>
          <li>
            转换成大写 toUpperCase () ; 和 小写 toLowerCase () ;
            <pre><code class="language-js line-numbers">  var str = 'abcd,abcdefg,abcdefg,aa';
  console.log(str.toUpperCase());            // 转换成 大写
  console.log(str.toLowerCase());            // 转换成 小写</code></pre>
          </li>
          <li>
            案例
            <pre><code class="language-js line-numbers">  var str = 'abcdefg3444343';

// 1、字符串的长度
console.log(str.length); //32

// 2、取出指定位置的字符，如：0，3，5，9等
console.log(str.substr(0, 1) + str.substr(3, 1) + str.substr(5, 1) + str.substr(9, 1));

// 3、查找指定字符是否在以上字符串中存在，如：i，c，b等
    if (str.indexOf('s') == -1) {
        console.log('没有');
    } else {
        console.log('有');
    }

// 4、替换指定的字符，如：g替换为22，ss替换为b等操作方法
console.log(str.replace('g', '22'));
  while (str.indexOf('g') != -1) {
      str = str.replace('g', '22');
  }
console.log(str);

// 5、截取指定开始位置到结束位置的字符串，如：取得1-5的字符串
console.log(str.slice(0, 5));

// 6、找出以上字符串中出现次数最多的字符和出现的次数
  var str = 'abcdefg3444343';
  var o = {};
  for (var i = 0; i &lt; str.length; i++) {
      var chars = str.charAt(i);
      if (o[chars]) {
          o[chars]++;
      } else {
          o[chars] = 1;
      }
  }
  //第二步，遍历对象
  var max = 0;
  var ch = '';
  for (var k in o) {
      if (o[k] > max) {
          max = o[k];
          ch = k;
      }
  }
  console.log(o);
  console.log('出现最多次数是：' + max);
  console.log('出现最多次数的字符是：' + ch);</code></pre>
          </li>
          <li>
            数学对象
            <ul>
              <li>
                Math
                和其他对象不同，它不是一个构造函数，它属于一个工具类，不用创建对象，它里面封装了数学数学的相关属性和方法
              </li>
            </ul>
            <pre><code class="language-js line-numbers">  abs(x)                      // 返回数的绝对值
  Math.acos(x)                // 返回数的反余弦值
  Math.asin(x)                // 返回数的反正弦值
  Math.atan(x)                // 以介于 -pI/2 与PI/2 弧度之间的数值来 返回×的反正切值
  Math.atan2(y.x)             // 返回从x轴到点(x，y)的角度 (介于-PI/2与PI/2弧度之间)
  Math.ceil(x)                // 对数进行上舍入
  Math.trunc(x)               // 对数取整，返回整数部分
  Math.cos(x)                 // 返回教的余弦
  Math.exp(x1)                // 返回e的指数
  Math.floor(x)               // 对数进行下舍入， 负数的话取最小，-2.9 取值为 -3
  Math.loa(x)                 // 返回教的自然对数(底为e)
  Math.max(x,y)               // 返回x和y中的最高值
  Math.min(x.y)               // 返回x和y中的最低值
  Math.pow(x.y)               // 返回x的y次幂
  Math.random()               // 返回0~1之间的伪随机数，包括0，不包括1，浮点数时不包括0，整数时包括0
  Math.round(x)               // 把数四舍五入为最接近的整数
  Math.sin(x)                 // 返回教的正弦
  Math.sqrt(x)                // 返回数的平方根
  Math.tan(x)                 // 返回角的正切
  Math.toSource()             // 返回该对象的源代码
  Math.valueOf()              // 返回Math对象的原始值  </code></pre>
          </li>
        </ul>
      </el-card>
      <el-card id="part13" shadow="hover">
        <h2>正则表达式</h2>
        <p>前言</p>
        <ul>
          <li>
            做验证用的，比如邮箱，定义规则，不仅人能看懂，机器也能看的懂，所以定一个规则，就叫正则表达式
          </li>
          <li>正则表达式用于定义一些字符串的规则</li>
          <li>
            计算机可以根据正则表达式，检查一个字符串是否符合规则，获取讲字符串中符合规则的内容提取出来
          </li>
          <li>
            语法1 更灵活:
            <pre><code class="language-js line-numbers">  let regExp = new RegExp(/123/);
  console.log(typeof regExp);       // Object</code></pre>
          </li>
          <li>
            语法2 简单：
            <pre><code class="language-js line-numbers">  var 变量 = /正则表达式/ 匹配模式 i g ;     // 不用加引号

  // 创建正则表达式，检查一个字符串中是否有a 或 b 。
  var reg = / a | b /;        // 使用 | 表示或者的意思
  var reg = / [ab] /;         // 使用 [ ] 也表示或的关系，出现任意一个都行
  var reg = / [a - z] /;      // 使用 [ a - z ] 表示任意的小写字母 ，大写 [ A - Z] 表示任意的大写字母
  var reg = / [A - z] /;      // 使用 [ A - z] 表示任意字母
  var reg = / a [bde ] c /;   // 使用 a [ bde ] c 表示前后固定，中间或
  var reg = / ^ac /;          // 使用 / ^a c / 表示除了的意思
  var reg = / [0 - 9 ]/;      // 使用 / [ 0 - 9 ] / 表示数字
  var reg = / [0 - 9 ]/ig;    // 匹配模式中，两个都写，表示既忽略大小写也全局匹配
  var reg = / a {3}/;         // 使用{ }可以表示量词，数字代表出现连续几次 ，量词只对前边的一个内容起作用
                              // 例如 / ab{3} / 不会表示 ababab ,而是表示 abbb
  var reg = / (ab) {3}/;      // 用（）括起来表示一组的，这样才表示 abababa
  var reg = / b{1，3}/;       // {第一个参数和第二个参数表示从一到二出现的范围值}必须出现 1 - 3 次
                              // 出现1个为 true，2个为 true，3个为true ，4个为false,因为 1 - 3 次
  var reg = / ab+c/;          // 使用 + 号 表示至少出现一次才可以，相当于 {1, }
  var reg = / ab*c/;          // 使用 * 号 表示0或多个，表示有没有都行，相当于 {0, }
  var reg = / ab？c/;         // 使用？ 号 表示0或1个，表示没有或者只能出现一次，相当于 {0, 1}
  var reg = / ^a /;           // 使用^ 号 表示以a开头，与 [ ^a]不同，表示找除了a其他的字符
  var reg = / a$ /;           // 使用&号 表示以a结尾
  var reg = / ^a$/;           // 使用^开头 $结尾的 表示只能用 ^ 中间的字符 $ 出现，需要完全符合正则表达式
  var reg = / \. /;           // 特殊符号需要用 \作为转义字符

  [abc]                       // 查找方括号之间的任何字符。
  [^abc]                      // 查找任何不在方括号之间的字符。
  [0-9]                       // 查找任何从0至9的数字。
  [a-z]                       // 查找任何从小写a到小写z的字符。
  [A-Z]                       // 查找任何从大写A至到大写z的字符。
  [A-z]                       // 查找任何从大写A到小写z的字符。
  [abcd]                      // 查找给定集合内的任何字符。
  [^abcd]                     // 查找给定集合外的任何字符。
  (red|blue|green)            // 查找任何指定的选项。

  \w                          // 匹配字母或数字或下划线或汉字 等价于 '[^A-Za-z0-9_]'。 \W大写就是反过来
  \s                          // 匹配任意的空白符, \S大写就是反过来
  \d                          // 匹配数字, \D大写就是反过来
  \b                          // 匹配单词的开始或结束, \B大写就是反过来
  ^                           // 匹配字符串的开始
  $                           // 匹配字符串的结束
  []                          // 满足中括号中的任意一个规则就返回true，限定符，多选一
  -                           // 表示一个范围
  [^]                         // ^出现在括号中，表示取反，！
  *                           // 重复0次或n次
  +                           // 重复1次或n次
  ？                          // 重复0次或1次,多了为false
  {n}                         // 重复n次
  {n,}                        // 重复n次或者更多次
  {n,m}                       // 重复n 到 m次</code></pre>
          </li>
          <li>
            split ();
            <ul>
              <li>可以将一个字符串拆分为一个数组</li>
              <li>
                方法中可以传递一个正则表达式作为参数，这样方法将会根据正则表达式去拆分字符串
              </li>
              <li>
                例如
                <pre><code class="language-js line-numbers">  var phoneReg = / ^1[3|4|5|7|8]\d{9}$/;</code></pre>
              </li>
            </ul>
          </li>
          <li>
            手机规则（11位）
            <ul>
              <li>以1开头</li>
              <li>3 - 9任意数字</li>
              <li>以后任意数字，长度只能9位</li>
              <li>正则表达式写法： ^1 [3 - 9] [0-9]{9}&</li>
            </ul>
            <pre><code class="language-js line-numbers">  var phoneReg = / ^1[3|4|5|7|8]\d{9}$/;</code></pre>
          </li>
          <li>
            replace (); 可以替换字符串的内容，并返回一个新的字符串
            <pre><code class="language-js line-numbers">  str = str.replace ( /^\s* | \s*$ /g , '') ;   // 替换开头和结尾的空格为 空字符串
  str = str.replace ( /^\s+ | \s+$ /g , '') ;   // 替换开头和结尾的空格为 空字符串

  let str = "body and head";
  let newStr = str.replace('body', 'html');
  let newStr = str.replace(/body/, 'html');     // （）可以跟正则表达式
  console.log(newStr);                          // html and head</code></pre>
          </li>
          <li>
            exec(); 获取字符串中符合正则表达式的内容
            <pre><code class="language-js line-numbers">  let str = "abcaecadcafcacc";
  let reg = /a([a-z])c/g;                 // 加了括号可以分组，且不改变原意思
  let result = reg.exec(str);             // 返回一个数组，第一个元素是匹配到的字符串，第二个元素是正则表达式的分组匹配到的内容

  while (result) {
      console.log(result[0], result[1]);  // 输出结果为  abc b     aec c  ....
      result = reg.exec(str);
  }</code></pre>
          </li>
        </ul>
      </el-card>
      <el-card id="part14" shadow="hover">
        <h2>其他</h2>
        <p>简单类型和复杂类型</p>
        <ul>
          <li>
            简单类型又叫做基本数据类型或者值类型，复杂类型又叫做引用类型。
          </li>
          <li>
            值类型：
            <ul>
              <li>简单数据类型/基本数据类型，在存储时变量中存储的是值本身，</li>
              <li>因此叫做值类型string，number，boolean，undefined，</li>
              <li>null ( typeof(返回的是一个空的对象))</li>
              <li>
                如果有个变量我们以后打算存储为对象，暂时没想好放啥，这个时候就给null
              </li>
            </ul>
          </li>
          <li>
            引用类型：
            <ul>
              <li>
                复杂数据类型，在存储时变量中存储的仅仅是地址（引用），因此叫做引用数据类型
              </li>
              <li>
                通过new关键字创建的对象（系统对象、自定义对象），如Object、Array、Date等
              </li>
            </ul>
          </li>
        </ul>
        <p>堆和栈</p>
        <ul>
          <li>堆栈空间分配区别：</li>
          <li>
            栈（操作系统）：
            <ul>
              <li>
                由操作系统自动分配释放存放函数的参数值、局部变量的值等。其操作方式类似于数据结构中的栈；
              </li>
              <li>简单数据类型存放到栈面</li>
            </ul>
          </li>
          <li>
            堆（操作系统）：
            <ul>
              <li>
                存储复杂类型（对象），一般由程序员分配释放，若程序员不释放，由垃圾回收机制回收。
              </li>
              <li>复杂数据类型存放到堆里面</li>
            </ul>
          </li>
          <li>
            注意：JavaScript中没有堆栈的概念，通过堆栈的方式，可以让大家更容易理解代码的一些执行方式，便于将来学习其它语言
          </li>
        </ul>
        <p>简单类型的内存分配</p>
        <ul>
          <li>
            值类型（简单数据类型）：string，number，boolean，undefined，null
          </li>
          <li>
            值类型变量的数据直接存放在变量（栈空间）中
            <ul>
              <li>简单数据类型是存放在栈里面里面直接开辟一个空间存放的是值</li>
              <li>
                复杂数据类型首先在栈里面存放 地址 十六进制表示
                然后这个地址指向堆里面的数据
              </li>
            </ul>
          </li>
          <li>
            简单类型传参
            <ul>
              <li>
                函数的形参也可以看做是一个变量，当我们把一个值类型变量作为参数传给函数的形参时，其实是把变量在栈空间里的值
              </li>
              <li>
                复制了一份给形参，那么在方法内部对形参做任何修改，都不会影响到的外部变量。
              </li>
            </ul>
          </li>
        </ul>
        <p>总结</p>
        <ul>
          <li>
            JS基础阶段
            <ul>
              <li>我们学习的是ECMAScript标准规定的基本语法</li>
              <li>要求同学们掌握Js基础语法</li>
              <li>只学习基本语法，做不了常用的网页交互效果</li>
              <li>目的是为了Js后面的课程打基础、做铺垫</li>
            </ul>
          </li>
          <li>
            Web APIs阶段
            <ul>
              <li>Web APIs是W3C组织的标准</li>
              <li>Web APIs我们主要学习DOM和BoM</li>
              <li>Web APIs是我们Js所独有的部分</li>
              <li>我们主要学习页面交互功能</li>
              <li>需要使用Js基础的课程内容做基础</li>
            </ul>
          </li>
          <li>
            Js基础学习EcMAScript基础语法为后面作铺垫，Web
            APIs是Js的应用，大量使用Js基础语法做交互效果
          </li>
        </ul>
        <p>API 和 Web API</p>
        <ul>
          <li>
            API（Application Programming
            Interface，应用程序编程接口）是一些预先定义的函数，目的是提供应用程序与开发人员
            基于某软件或硬件得以访问一组例程的能力，又无需访问源码，或理解内部工作机制的细节。
            <ul>
              <li>
                简单理解：API是给程序员提供的一种工具，以便能更轻松的实现想要完成的功能。
              </li>
            </ul>
          </li>
          <li>
            Web API是浏览器提供的一套操作浏览器功能和页面元素的API（BOM和DOM）
            <ul>
              <li>
                现阶段我们主要针对于浏览器讲解常用的API，主要针对浏览器做交互效果。
              </li>
              <li>比如我们想要浏览器弹出一个警示框，直接使用alert（‘弹出’）</li>
            </ul>
          </li>
          <li>
            MDN详细 API: https://developer.mozilla.org/zh-CN/docs/Web/API
            <ul>
              <li>因为WebAPI很多，所以我们将这个阶段称为Web APIs</li>
            </ul>
          </li>
          <li>
            总结：
            <ul>
              <li>
                APl是为我们程序员提供的一个接口，帮助我们实现某种功能，我们会使用就可以了，不必纠结内部如何实现
              </li>
              <li>
                WebAPI主要是针对于浏览器提供的接口，主要针对于浏览器做交互效果。
              </li>
              <li>
                WebAPI一般都有输入和输出（函数的传参和返回值），WebAPl很多都是方法（函数）
              </li>
              <li>学习Web APl可以结合前面学习内置对象方法的思路学习</li>
            </ul>
          </li>
        </ul>
      </el-card>
      <el-card id="part15" shadow="hover">
        <h2>DOM</h2>
        <p>简介</p>
        <ul>
          <li>
            文档对象模型（Document Object
            Model，简称DOM），是W3C组织推荐的处理可扩展标记语言（HTML或者XML）
            的标准编程接口，W3C已经定义了一系列的DOM接口，通过这些DOM接口可以改变网页的内容、结构和样式。
          </li>
          <li>
            DOM树-层级关系图：
            <pre><code class="language-js line-numbers">                                  文档
                            根元素&lt;html&gt;
          |-------------------------|---------------------------|
    元素&lt;head&gt;                                              元素&lt;body&gt;
          |                                                     |
          |                         |---------------------------|-------------------|
    元素&lt;title&gt;                属性：href                     元素&lt;a&gt;              元素&lt;h1&gt;
          |                                                     |                   |
    文本：文档标题             文本：我的链接                文本：我的标题</code></pre>
            <ul>
              <li>文档：一个页面就是一个文档，DOM中使用 document表示</li>
              <li>元素：页面中的所有标签都是元素，DOM中使用element表示</li>
              <li>
                节点：网页中的所有内容都是节点（标签、属性、文本、注释等），DOM中使用node表示
              </li>
              <li>DOM 把以上内容都看做是对象</li>
            </ul>
          </li>
          <li>
            节点
            <ul>
              <li>Node —— 构成HTML文档最基本的单元。</li>
              <li>
                常用节点分为四类
                <ul>
                  <li>文档节点：整个HTML文档</li>
                  <li>元素节点：HTML文档中的HTML标签</li>
                  <li>属性节点：元素的属性</li>
                  <li>文本节点：HTL标签中的文本内容</li>
                </ul>
              </li>
              <li>
                例子：
                <pre><code class="language-html line-numbers">  &lt;a&gt; href="www.baidu.com"&gt; 我是一个跳转到百度的链接 &lt;/a&gt;
  // 属性节点：www.baidu.com
  // 文本节点: 我是一个跳转到百度的链接
  // 元素节点：&lt;a&gt;   &lt;/a&gt;</code></pre>
              </li>
            </ul>
          </li>
          <li>
            document 对象
            <ul>
              <li>document对象表示的是整个网页</li>
              <li>
                document对象的原型链，父类的所有方法document对象都能使用（__proto__）
                <ul>
                  <li>
                    HTMLDocument ==&gt; Document ==&gt; Node ==&gt; EventTarget
                    ==&gt; Object.prototype ==&gt; null
                  </li>
                  <li>
                    查询文档：
                    <el-link
                      type="primary"
                      icon="Link"
                      target="_blank"
                      href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document"
                    >
                      https://developer.mozilla.org/zh-CN/docs/Web/API/Document
                    </el-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p>获取元素</p>
        <ul>
          <li>
            （查）获取元素
            <pre><code class="language-js line-numbers">  document.getElementById();               // 获取ID
  document.getElementsByTagName()[索引号];  // 获取标签名,返回一个类数组对象，索引号
  document.getElementsByName();            // 表单 name属性获取一组元素节点对象
  document.body;                           // document中有一个属性body,它保存的就是body的引用
  document.documentElement;                // 它保存的就是html的引用,根标签
  document.all;                            // 它保存的是页面中所有元素 == document.getElementsByTagName(' * ');
  document.getElementsByClassName();       // 获取class 一组元素节点对象,IE9以上才支持
  document.querySelector();                // 需要一个选择器的字符串作为参数，只会返回第一个查到的 IE8以上才支持
  document.querySelectorAll();             // 返回所有查找到的，会返回一个集合对象，可以用展开运算符转换为数组 [...对象]
  element.tagName                          // 获取当前元素的标签名</code></pre>
            <ul>
              <li>
                子节点
                <pre><code class="language-js line-numbers">  element.childNodes;                      // 获取的是元素下的所有子节点，包括文本和换行，IE8以下结果有差异
  element.children;                        // 获取元素下的所有子元素，不包括文本和换行
  element.firstChild;                      // 包括文本和换行
  element.firstElementsChild;              // 不会包括文本和换行，不建议使用
  element.lastElementChild;                // 获取当前元素的最后一个子元素
  element.nextElementSibling               // 获取当前元素的下一个兄弟元素
  element.previousElementSibling           // 获取当前元素的前一个兄弟元素</code></pre>
              </li>
              <li>
                父节点和兄弟节点
                <pre><code class="language-js line-numbers">  element.parentNode;                      // 获取的是当前节点的父节点
  element.parentNode.parentNode;           // 获取的是当前节点的父节点的父节点，也就是爷爷
  element.previousSibling;                 // 获取的是当前节点的前一个兄弟节点
  element.nextSibling;                     // 获取的是当前节点的后一个兄弟节点</code></pre>
              </li>
            </ul>
          </li>
          <li>
            注册添加事件
            <pre><code class="language-js line-numbers">  window.onload = function(){};            // 回调函数等页面加载完毕后才执行，里面放执行代码
  btn.onclick = function(){};              // 回调函数，响应函数，当点击才会执行，on要加.
                                           // 在函数内部最尾部添加一个 return false，会阻止被绑定事件的其他行</code></pre>
          </li>
          <li>
            增删改
            <pre><code class="language-js line-numbers">  // 创建元素节点，文本节点
  document.createElement( '标签名' ) ;       // 元素
  document.createTextNode( ' 内容 ' );       // 文本
  // 把新的子节点添加到指定的节点
  element.appendChild ();                   // 向父节点中添加一个子节点
  element.insertAdjacentElement();          // 向父节点中添加一个子节点，功能更强大。("参数1：插入的位置"，参数2：要插入的元素)
  element.insertAdjacentHTML();             // 向父节点中添加一个子节点，功能更强大。("参数1：插入的位置"，"参数2：插入的元素可以直接写标签 跟innerHTML一样")
  element.insertBefore (li, bj);            // 向前插入一个子节点，两个参数，第一个为新节点，第二个旧节点
  element.replaceChild (li, bj);            // 可以指定的子节点替换已有的子节点，第一个新节点，第二旧节点
  // 删除节点
  element.removeChild ();                   // 向父节点中删除一个子节点 必须找到父节点
  子节点.parentNode.removeChild ();          // 子节点.parentNode 就相当于找到了父节点，然后删除，常用
  // 替换节点
  element.replaceWith();                    // 可以替换某个节点，参数:（li）
  // 综合增加顺序
  var li = document.createElement (' li '); // 创建：
  li.innerHTML('文本内容');                  // 添加内容
  父节点.appendChild(li);                    // 父节点添加子节点</code></pre>
          </li>
          <li>
            操作元素
            <ul>
              <li>
                根据ID获取
                <pre><code class="language-js line-numbers">  var div = document.getElementById('ID');   // 使用方法可以获取带有ID的元素对象。

  /* 1. 因为我们文档页面从上往下加载，所以先得有标签所以我们script写到标签的下面
     2. get获得，element元素，by通过驼峰命名法
     3. 参数id是大小写敏感的字符串
     4. 返回的是一个元素对象
     注意： getElementById ('必须是字符串，记得加引号'); */
                  </code></pre>
              </li>
              <li>
                根据标签名获取
                <pre><code class="language-js line-numbers">  var div = document.getElementsByTagName("p");  // 返回的是获取过来元素对象的集合以伪数组的形式存储
  console.log(div[0]);                           // 因为是数组存储，所以用数组方式查看元素
  for (var i = 0; i &lt; div.length; i++) {         // 一次查看一个 如果需要查看多个，可以用数组遍历
      console.log(div[i]);
  }

  /* 得到元素对象动态的，不管你删除还是增加都是可以的
     如果页面中只有一个元素，返回的还是伪数组的形式
     如果页面中没有元素，则返回空的 伪数组
     使用 element.getElementsByTagName (' 标签名'); 获取某个元素（父元素）内部所有指定标签名的子元素。
     注意：父元素必须是单个对象（必须指明是哪一个元素对象）.获取的时候不包括父元素自
     例如：                                                                */

      var ol= document.getElementByTagName ("ol");
      console.log (ol[0].getElementByTagName('li') ) ;   // 获取ol下的 li</code></pre>
              </li>
              <li>
                通过HTML5新增的方法获取，pc端需要考虑兼容性
                <pre><code class="language-js line-numbers">  document.getElementsByClassName(' 类名 ');    // 根据类名返回元素对象集合
  document.querySelector(' 选择器 ');           // 根据指定选择器返回第一个元素对象， 选择器要加符号，.box #box
  document.querySelectorAll(' 选择器 ');        // 根据指定选择器返回所有的元素对象集合</code></pre>
              </li>
              <li>
                特殊元素获取
                <pre><code class="language-js line-numbers">  var bodyEle = document.body;                 // 获取body 元素: 返回body 元素对象
  var bodyEle = document.documentElement;      // 获取html 元素： 返回html 元素对象</code></pre>
              </li>
            </ul>
          </li>
        </ul>
        <p>事件基础 (是由三部分组成)</p>
        <ul>
          <li>
            JavaScript使我们有能力创建动态页面，而事件是可以被JavaScript侦测到的行为。
            简单理解：触发---响应机制。 网页中的每个元素
            都可以产生某些可以触发JavaScript的事件，例如，我们可以在用户点击某按钮时产生一个事件
          </li>
          <li>
            事件是由三部分组成 事件源 事件类型 事件处理程序 我们也称为事件三要素
            <pre><code class="language-js line-numbers">  // 事件源：事件被触发的对象，谁？ 比如按钮
    var btn = document . getElementById ( ' btn ' ) ;

  // 事件类型： 如何触发 什么事件 比如鼠标点击onclick ，还是鼠标经过hover ，还是键盘按下
    var btn = document.getElementById(' btn ');
    btn.onclick = function () {}

  // 事件处理程序： 通过一个函数赋值的方式 完成
    btn.onclick = function () {
        alert(' 你好 ');
    }</code></pre>
          </li>
          <li>
            事件执行步骤
            <pre><code class="language-js line-numbers">  // 1. 获取事件源
    var div = document.querySelector(' div ');
  // 2. 注册事件（绑定事件）
    div.onclick
  // 3. 添加事件处理程序（采取函数赋值形式）
    div.onclick = function () {
        alert(' 我被选中了');
    }</code></pre>
          </li>
          <li>
            常用事件
            <pre><code class="language-js line-numbers">  div.onclick = function(){};                 // 鼠标点击左键触发
  div.onmouseover = function(){};             // 鼠标经过触发
  div.onmouseout = function(){};              // 鼠标离开触发
  div.onfocus = function(){};                 // 获得鼠标焦点触发
  div.onblur = function(){};                  // 失去鼠标焦点触发
  div.onmousemove = function(){};             // 鼠标移动触发
  div.onmouseup = function(){};               // 鼠标弹起触发
  div.onmousedown = function(){};             // 鼠标按下触发
  div.onmouseenter = function(){};            // 鼠标经过触发
  div.onmouseleave= function(){};             // 鼠标离开触发

  /*
    mouseenter 和 mouseover 的区别
        1. 当鼠标移动到元素上时就会触发mouseenter事件
        2. 类似mouseover，它们两者之间的差别是：
           mouseover 鼠标经过自身盒子会触发，经过子盒子还会触发。
           mouseenter 只会经过自身盒子触发。
        3. 之所以这样，就是因为 mouseenter 不会冒泡
        4. 跟mouseenter搭配鼠标离开mouseleave同样不会冒泡，常用
  */</code></pre>
          </li>
          <li>
            移动端包含
            <ul>
              <li>
                click事件：单击事件，类似于PC端的click，但在移动端中，连续click的触发有200ms
                ~ 300ms的延迟
              </li>
              <li>
                touch类触摸事件
                <ul>
                  <li>touchstart： 手指触摸到屏幕会触发</li>
                  <li>touchmove： 当手指在屏幕上移动时，会触发</li>
                  <li>touchend： 当手指离开屏幕时，会触发</li>
                  <li>
                    touchcancel：
                    可由系统进行的触发，比如手指触摸屏幕的时候，突然alert一下，或者系统中其他打断了touch的行为，可以触发
                  </li>
                </ul>
              </li>
              <li>
                tap类事件:
                触碰事件，我目前还不知道它和touch的区别，一般用于代替click事件，
                <ul>
                  <li>tap: 手指碰一下屏幕会触发</li>
                  <li>longTap: 手指长按屏幕会触发</li>
                  <li>singleTap: 手指碰一下屏幕会触发</li>
                  <li>doubleTap: 手指双击屏幕会触发</li>
                </ul>
              </li>
              <li>
                swipe类事件:
                <ul>
                  <li>swipe： 手指在屏幕上滑动时会触发</li>
                  <li>swipeLeft： 手指在屏幕上向左滑动时会触发</li>
                  <li>swipeRight： 手指在屏幕上向右滑动时会触发</li>
                  <li>swipeUp： 手指在屏幕上向上滑动时会触发</li>
                  <li>swipeDown： 手指在屏幕上向下滑动时会触发</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p>操作元素</p>
        <ul>
          <li>
            JavaScript的DOM操作可以改变网页内容、结构和样式，我们可以利用DOM操作元素来改变元素里面的内容、属性等。注意以下都是属性
            <pre><code class="language-js line-numbers">  var div = document.querySelector("div");
  // 改变元素内容：
     div.innerText = "";   // 不识别html标签 非标准 从起始位置到终止位置的内容，但它去除html标签，同时空格和换行也会去掉
     div.innerHTML = "";   // 识别 html标签  标准  起始位置到终止位置的全部内容，包括html标签，同时保留空格和换行
     div.textContent ="";  // 等同于innerText，但是会考虑标签的css样式，而innerText会考虑，不考虑css会提供性能。它能识别html标签，但是不添加代码，只显示代码字符串。包括html标签，同时保留空格和换行

  // 案例：
      &lt;!-- 当我们点击了按钮，文字会发生变化 --&gt;
      &lt;button&gt;显示当前系统时间&lt;/button&gt;
      &lt;div&gt;某个时间&lt;/div&gt;

      &lt;script&gt;
          // 获取元素
          var btn = document.querySelector('button');
          var div = document.querySelector('div');
          // 添加注册事件（绑定事件）
          btn.onclick = function() {
              // div.innerHTML = ('123');                    // 点击直接传入 一个参数
              div.innerText = getTime();                     // 调用封装好的时间函数
          }
          function getTime() {
              var a = new Date();
              var Year = a.getFullYear();
              var Month = a.getMonth() + 1;                  // 要 +1
              var mDate = a.getDate();
              var day = a.getDay();
              var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
              // 这里注意，数组中第一个必须写星期日，因为获取是从 0  1 2 3 4 5 6来获取的，0是星期日
              var Hours = a.getHours();
              var Minutes = a.getMinutes();
              var Seconds = a.getSeconds();
              return '今天是：' + Year + '年' + Month + '月' + mDate + '日，' + arr[day] + '' + Hours + ':' + Minutes + ':' + Seconds;;
              return
          }
      &lt;script&gt;

   // 我们元素可以不用添加事件，直接给函数调用
      // 1、首选还是要先获取当前元素
         var p = document.querySelector('p');                // 注意大小写
      // 2、直接赋值
         p.innerText = getTime();                            // 这样程序直接执行

  // innerText  和  innerHTML  区别：
      // 1、innerText 是不识别html 标签的 但是 innerHTML是会识别html标签的

      &lt;div&gt;某个时间&lt;/div&gt;
      &lt;p&gt;123&lt;/p&gt;
      &lt;script&gt;
          // 获取元素
          var div = document.querySelector('div');
          var p = document.querySelector('p');
          div.innerText = '&lt;strong&gt; 我想加粗 &lt;/strong&gt;';  // 输出   &lt;strong&gt; 我想加粗 &lt;/strong&gt;
          p.innerHTML = '&lt;strong&gt; 我想加粗 &lt;/strong&gt;';    // 输出   我想加粗
      &lt;/script&gt;

  // 2、 这两个属性是可读写的可以获取元素里面的内容，但是 innerText 会去掉空格和换行, innerHTML 会保留
      &lt;div&gt;
          某个时间
          &lt;span&gt;123&lt;/span&gt;
      &lt;/div&gt;
      &lt;p&gt;123&lt;/p&gt;
      &lt;script&gt;
          // 获取元素
          var div = document.querySelector('div');
          var p = document.querySelector('p');
          console.log(div.innerText);                         // 输出    某个时间 123
          console.log(div.innerHTML);                         // 输出    某个时间
      &lt;/script&gt;
                                                              // &lt;span&gt;123&lt;/span&gt; 会保留换行，标签和空格</code></pre>
          </li>
          <li>
            常用元素的属性操作
            <ul>
              <li>innerText、innerHTML改变元素内容</li>
              <li>src、href</li>
              <li>id、alt、title</li>
            </ul>
          </li>
          <li>
            操作 img 的src 和 title 属性：
            <pre><code class="language-html line-numbers">  &lt;button&gt; class="ldh"&gt;刘德华&lt;/button&gt;
  &lt;button&gt; class="zxy"&gt;张学友&lt;/button&gt;
  &lt;br&gt;
  &lt;img src="./images/img.gif" alt="" title="刘德华"&gt;
  &lt;script&gt;&gt;
      // 获取元素
      var ldhBtn = document.querySelector('.ldh');
      var zxyBtn = document.querySelector('.zxy');
      var img = document.querySelector('img');
      // 注册事件  并处理程序
      zxyBtn.onclick = function() {
          img.src = 'images/icons.png';       // 点击后谁的什么做出反应，是img的src变化
          img.title = '张学友';
      }
      ldhBtn.onclick = function() {
          img.src = 'images/img.gif';         // 解读为  元素自带的什么属性  进行操作
          img.title = '刘德华';
      }
  &lt;/script&gt;

  /*
  案例：
      根据不同时间，页面显示不同图片，同时显示不同的问候语。如果上午时间打开页面，显示上午好，显示上午的图片。
      如果下午时间打开页面，显示下午好，显示下午的图片。如果晚上时间打开页面，显示晚上好，显示晚上的图片。

  分析：
      1、根据系统不同时间来判断，所以需要用到日期内置对象
      2、利用多分支语句来设置不同的图片
      3、需要一个图片，并且根据时间修改图片，就需要用到操作元素src属性
  */
  &lt;img src="./images/img.gif" alt="" title="上午好"&gt;
  &lt;div&gt;上午好&lt;/div&gt;
  &lt;script&gt;&gt;
      var img = document.querySelector('img');
      var div = document.querySelector('div');
      // 得到当前的小时数
      var date = new Date();
      var h = date.getHours();                // 得到当前系统时间
      // 判断小时数来改变图片和文字信息
      if (h &lt; 12) {
          img.src = './images/img.gif';
          img.title = '上午好';
          div.innerHTML = '上午好';
      } else if (h &lt; 18) {
          img.src = './images/icons.png';
          img.title = '下午好';
          div.innerHTML = '下午好';
      } else {
          img.src = './images/img.gif';
          img.title = '晚上好';
          div.innerHTML = '晚上好';
      }
  &lt;/script&gt;</code></pre>
          </li>
          <li>
            表单元素的属性操作
            <ul>
              <li>
                利用DOM可以操作如下表单元素的属性：
                type、value、checked、selected、disabled
                <pre><code class="language-html line-numbers">  &lt;button&gt;按钮&lt;/button&gt;
  &lt;input type="text" value="1"&gt;
  &lt;script&gt;
      var btn = document.querySelector('button');
      var input = document.querySelector('input');
      // 绑定时间 处理程序
      btn.onclick = function() {
         *input.innerHTML = '这样写是不起作用的';          // 因为HTML是操作普通盒子，div标签里的内容
          input.value = '表单里面的value';               // 点击后修改value值
      }
  &lt;/script&gt;

  // 如果想要某个表单被禁用，不能被点击 disabled ，我们想要按钮 button禁用
    btn.onclick = function() {
       * input.innerHTML = '这样写是不起作用的';           // 因为HTML是操作普通盒子，div标签里的内容
         input.value = '表单里面的value';                // 点击后修改value值
         btn.disabled = true;                           // 关 ，此时按钮就是灰色不能点击的状态了
       * this.disabled = true;                          // 这个方法也可以达到同样效果 ，this 是指向事件函数的调用者
    }

  /* 案例：点击按钮将密码框切换为文本框，并可以查看密码明文
      1、核心思路：点击眼睛按钮，把密码框类型改为文本框就可以看见里面的密码
      2、一个按钮两个状态，点击一次，切换为文本框，继续点击一次切换为密码框
      3、算法：利用一个flag变量，来判断flag的值，如果是1就切换为文本框，flag设置为0，如果是0就切换为密码框，flag设置为1
  */
  &lt;style&gt;
      .box {position: relative; width: 400px;border-bottom: 1px solid red;margin: 100px auto;}
      .box input {width: 370px;height: 30px;border: 0;outline: none;}
      .box img {width: 24px;position: absolute;top: 0; right: 10px;}
  &lt;/style&gt;
  &lt;title&gt;Document&lt;/title&gt;

  &lt;body&gt;
    &lt;div class="box"&gt;
        &lt;label for=""&gt;
            &lt;img src="images/close.png" alt="" id='eye'&gt;
        &lt;/label&gt;
        &lt;input type="password" name="" id="pwd"&gt;
    &lt;/div&gt;
    &lt;!-- js --&gt;
    &lt;script&gt;
        1、 先获取元素
        var eye = document.getElementById('eye');
        var pwd = document.getElementById('pwd');
        2、绑定事件  处理程序
        var flag = 0;             // 定义一个变量
        eye.onclick = function() {
            if (flag == 0) {
                eye.src = 'images/open.png';
                pwd.type = 'text';
                flag = 1;         // 赋值操作
            } else {
                eye.src = 'images/close.png';
                pwd.type = 'password';
                flag = 0;         // 如果flag 不等于0，则进入次程序
            }
        }
    &lt;/script&gt;
  &lt;/body&gt;</code></pre>
              </li>
            </ul>
          </li>
          <li>
            样式属性操作，我们可以通过 JS 修改元素的大小、颜色、位置等样式
            <pre><code class="language-js line-numbers">  // 例子：
    var div = document.querySelector("div");
    div.currentStyle."style"
    var a = div.currentStyle.width;  // 只有IE浏览器有用，其他的浏览器都没用 ,只读，不能修改

  // 其他浏览器获取方式
  // 一般情况下传两个参数，第一个是要获取样式的元素，第二个传递伪元素 ，一般都传null，只读，不能修改
    var b = getComputedStyle ( element , null);
    var b = getComputedStyle ( div , null);
    console.log(b.width)             // 拿到的样式宽度都是当前显示的宽度，带单位的，不考虑内联样式

  // 兼容性写法
    // 封装一个兼容性函数，来解决不兼容问题，判断条件中也可以使用三元表达式来写
    function getStyle(obj, name) {
        if (window.getComputedStyle) {
            // 正常浏览器的方式，具有get....方法
            return getComputedStyle(boj, null)[name];
        } else {
            // IE8的方式，没有get...方法
            return currentStyle[name];
        }
    };
    getStyle(box, 'width');                             // 调用函数</code></pre>
            <ul>
              <li>element.style 行内样式操作</li>
              <li>element.className 类名样式操作</li>
              <li>
                注意里面的属性采取驼峰命名法，如 background-color =
                backgroundColor
              </li>
              <li>
                权重问题：js 修改了样式是相当于行内样式，比css
                样式内嵌样式都要权重高
              </li>
            </ul>
            <pre><code class="language-html line-numbers">  &lt;style&gt;
      .box {width: 400px;height: 400px;background-color: skyblue;margin: 100px auto;}
  &lt;/style&gt;

  //--------------------------------------------------------html + js
  &lt;div&gt; class="box"&gt; &lt;/div&gt;
  &lt;!-- js --&gt;
  &lt;script&gt;&gt;
  // 获取元素
  var div = document.querySelector('div');
  // 绑定事件  处理程序
  var flag = 0
  div.onclick = function() {
      if (flag == 0) {
          div.style.backgroundColor = 'red';      // 这个的样式，背景颜色改为 red
          div.style.width = '200px';              // 可以改变任何属性
          flag = 1;                               // 赋值操作 ,如果再点击一次，flag等于1 判断，则到 else
      } else {
          div.style.backgroundColor = 'skyblue';  // 这个的样式，背景图片改为 red
          flag = 0;                               // 点击后，重新赋值为 0，这样就可以实现切换效果
      }
  }
  &lt;/script&gt;</code></pre>
          </li>
          <li>
            案例
            <pre><code class="language-html line-numbers">  &lt;!-- 案例1：淘宝点击关闭二维码

      思路：
           当鼠标点击二维码关闭按钮的时候，则关闭整个二维码。（自己做了关闭打开两个按钮）
      核心思路：
        1. 利用样式的显示和隐藏完成，display: none隐藏元素, display: block 显示元素,
            visibility:hidden; 隐藏, visibility:initial; 显示。
        2. 先有一个大盒子装文字和图片，然后关闭按钮用定位，定到左上角
  --&gt;
  &lt;style&gt;
      .box { width: 400px;height: 400px;background-color: skyblue;margin: 100px auto;visibility: initial;          }
  &lt;/style&gt;
  //------------------------------------------------
  &lt;button id='close'&gt;关闭&lt;/button&gt;
  &lt;button id='open'&gt;打开&lt;/button&gt;
  &lt;div class="box"&gt; &lt;/div&gt;
  &lt;!-- js --&gt;
  &lt;script&gt;
      // 获取元素
      var div = document.querySelector('div');
      var btn1 = document.getElementById('close');
      var btn2 = document.getElementById('open');

      // 绑定事件  处理程序
      btn1.onclick = function() {
          div.style.visibility = 'hidden';
      }
      btn2.onclick = function() {
          div.style.visibility = 'initial';
      }
  &lt;/script&gt;

  &lt;!-- 案例2：循环精灵图背景- 可以利用for 循环设置一组元素的精灵图背景
      分析：
          首先精灵图图片排列有规律的
          核心思路： 利用for循环修改精灵图片的背景位置background-position
          精灵图记得做图的时候要一列竖图，每个图片与每个图片的的间距是一样的，好计算
  --&gt;
  &lt;div&gt;
    &lt;ul&gt;
      &lt;li&gt; &lt;/li&gt;&lt;li&gt; &lt;/li&gt;&lt;li&gt; &lt;/li&gt;&lt;li&gt; &lt;/li&gt;&lt;li&gt; &lt;/li&gt;&lt;li&gt; &lt;/li&gt;
      &lt;li&gt; &lt;/li&gt;&lt;li&gt; &lt;/li&gt;&lt;li&gt; &lt;/li&gt;&lt;li&gt; &lt;/li&gt;&lt;li&gt; &lt;/li&gt;&lt;li&gt; &lt;/li&gt;&lt;li&gt; &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  &lt;script&gt;
     // 获取元素 所有的li
     var lis = document.querySelectorAll('li');                    // 所有的li
     // 绑定事件  处理程序
     for (var i = 0; i &lt; lis.length; i++) {                     // 让索引号乘以44,(精灵图Y坐标,一列竖图)就是每个li的背景Y坐标
         var index = i * 44;                                       // index就是我们的Y坐标
         lis[i].style.backgroundPosition = '0 -' + index + 'px';   // 因为精灵图坐标是负值，所以字符串加上  - 不能漏，还有单位
     }
  &lt;/script&gt;</code></pre>
          </li>
        </ul>
        <p>显示隐藏文本框内容 (获得焦点onfocus 失去焦点onblur)</p>
        <pre><code class="language-js line-numbers">  /* 当鼠标点击文本框时，里面的默认文字隐藏，当鼠标离开文本框时，里面的文字显示。
      1、首先表单需要2个新事件，获得焦点onfocus 失去焦点onblur
      2、如果获得焦点，判断表单里面内容是否为默认文字，如果是默认文字，就清空表单内容
      3、如果失去焦点，判断表单内容是否为空，如果为空，则表单内容改为默认文字
  */
  &lt;input type="text" value="手机" name="" id=""&gt;

  // 获取元素
  var text = document.querySelector('input');
  // 注册事件，获取焦点事件，onfocus
  text.onfocus = function() {
          if (this.value === '手机') {         // 如果这个value =手机，
              this.value = '';                // 那么value为空
          }
          this.style.color = 'rgb(7, 7, 7)';  // 获得焦点，需要把文本框的文字变黑
      }
      // 注册事件，获取失去焦点事件，onblur
  text.onblur = function() {
      if (this.value === '') {                // 如果这个value = 空，
          this.value = '手机';                 // 那么value为‘手机’
      }
      this.style.color = '#ccc';              // 失去焦点，需要把文本框的文字变回原来颜色
  }</code></pre>
        <p>类名样式操作 (element.className)</p>
        <pre><code class="language-js line-numbers">  // 样式写成CSS，想变化就JS更改类名，使用方法：
  // 1、先建立一个要变化的类名和样式
      .classStyle {
          background-color: red;
          font-size: 16px;
          margin-top: 10px;
      }
  // 2、用js 来调用，先不需要使用，当点击后才开始使用，相当于让当前元素改了新样式的类名，把原来的类名更换成新的
      div.onclick = function () {
          this.className = ' classStyle';
      }
      // 这样就比element.style 方便多了，样式较多且复杂就可以使用 className，简单则用style

  // 注意：添加JS 修改的类名后，会覆盖原类名，如果想要增加且不覆盖，使用以下方法：
      this. className = ' 原先类名 新增类名';         // 就是把原先的保留，然后空格写修改的新类名</code></pre>
        <ul>
          <li>
            案例：
            <pre><code class="language-html line-numbers">  // 案例1：密码验证案例
  /* 1、首先判断的事件是表单失去焦点onblur
     2、如果输入正确则提示正确的信息颜色为绿色小图标变化
     3、如果输入不是6到16位，则提示错误信息颜色为红色小图标变化
     4、因为里面变化样式较多，我们采取className修改样式  */
      .message {
          display: inline-block;font-size: 12px; color: #999; background: url(images/mess.png) no-repeat left center;padding-left: 20px;
      }

      .wrong {
          color: red;background: url(images/wrong.png) no-repeat left center;
      }

      .right {
          color: green; background: url(images/mess.png) no-repeat left center;
      }
  //--------------------------------------------------------------------
    &lt;div&gt;
        &lt;input type="password" value="" name="" class='ipt'&gt;
        &lt;p class='message'&gt;请输入6~16位密码&lt;/p&gt;
    &lt;/div&gt;
    &lt;script&gt;
        var ipt = document.querySelector('.ipt');
        var message = document.querySelector('.message');
        //绑定事件  添加处理程序 失去焦点
        ipt.onblur = function() {
            // 如果ipt的长度小于6 或者 ipt的长度大于了16
            if (this.value.length &lt; 6 || this.value.length &gt; 16) {
                message.className = 'message wrong';     // 添加一个错误后的样式
                message.innerHTML = '输入的位置不对，要求6~16位'
            } else {
                message.className = 'message right';    // 添加一个正确后的样式
                message.innerHTML = '输入正确'
            }
        }
    &lt;/script&gt;

  /* 案例2：世纪佳缘用户名显示隐藏内容 ： https://www.jiayuan.com/  */
  &lt;style&gt;
    input {
        outline: none;border: 1px solid #ccc;
    }
    .input_box {
        font-size: 12px;
    }
    .ipt_text,
    .pwd {
        color: #999;
    }
  &lt;/style&gt;
  //-------------------------------------------------------------------
  &lt;div&gt; class="input_box"&gt;
      &lt;input type="text" class='ipt_text' value="邮箱/ID/手机"&gt;
      &lt;input type="text" name="" id="" class="pwd" value="密码"&gt;
  &lt;/div&gt;
  &lt;script&gt;&gt;
      //获取元素
      var ipt = document.querySelector('.ipt_text');
      var pwd = document.querySelector('.pwd');
      //绑定事件，添加处理程序
      ipt.onfocus = function() {
          if (this.value === '邮箱/ID/手机') {
              this.value = '';
          }
          this.style.color = 'black';           // 输入时文字变黑
          this.style.borderColor = 'pink';      // 当点击后，边框变为粉色
      }
      ipt.onblur = function() {
          if (this.value === '') {
              this.value = '邮箱/ID/手机';
              this.style.color = '#999';
          }
          this.style.borderColor = '#ccc'
      }
      pwd.onfocus = function() {
          if (this.value === '密码') {
              this.value = '';
          }
          this.style.color = 'black';
          this.type = 'password';               // 当获得焦点，类型转换成密码框
          this.style.borderColor = 'pink';      // 当点击后，边框变为粉色
      }
      pwd.onblur = function() {
          if (this.value === '') {
              this.value = '密码';
              this.type = 'text';               // 当失去焦点时，且内容为空，类型转换成文本框
              this.style.color = '#999';
          }
          this.style.borderColor = '#ccc'
      }
  &lt;/script&gt;

  /* 案例3：京东关闭广告（直接隐藏即可） */
  &lt;style&gt;
    * {margin: 0;padding: 0;}
    .adv {
        position: relative;
        width: 100%;
        height: 120px;
        background-color: skyblue;
    }
    button {
        width: 20px;
        height: 20px;
        color: lightcoral;
        border: 0;
        border-radius: 5px;
        position: absolute;
        top: 5px;
        right: 10px;
    }
  &lt;/style&gt;
  //-------------------------------------------------
  &lt;div class="adv"&gt;
      &lt;button&gt;X&lt;/button&gt;
  &lt;/div&gt;
  &lt;script&gt;
      // 获取元素
      var adv = document.querySelector('.adv');
      var btn = document.querySelector('button');
      // 绑定事件，添加处理程序
      btn.onclick = function() {
          adv.style.display = 'none';
      }
  &lt;/script&gt;

  /* 案例4：新浪下拉菜单（微博即可） */
  &lt;style&gt;
    * {padding: 0;margin: 0;
    }
    .nav li {margin-right: 30px;float: left;width: 100px;height: 20px;border: 1px solid red;list-style: none;
    }
    .nav li ul {display: none;list-style: none;
    }
    .nav li ul li {border: 1px solid rgb(143, 58, 241);
    }
  &lt;/style&gt;
  &lt;ul class="nav"&gt;
      &lt;li&gt;导航1
          &lt;ul&gt;
              &lt;li&gt;子菜单1&lt;/li&gt;
              &lt;li&gt;子菜单2&lt;/li&gt;
              &lt;li&gt;子菜单3&lt;/li&gt;
              &lt;li&gt;子菜单4&lt;/li&gt;
              &lt;li&gt;子菜单5&lt;/li&gt;
              &lt;li&gt;子菜单6&lt;/li&gt;
          &lt;/ul&gt;
      &lt;/li&gt;
      &lt;li&gt;导航2 ...
      &lt;/li&gt;
      &lt;li&gt;导航3 ...
      &lt;/li&gt;
  &lt;/ul&gt;
  &lt;script&gt;&gt;
      //获取元素
      var nav = document.querySelector('.nav');
      var lis = nav.children; //得到四个li
      //循环绑定事件
      for (var i = 0; i &lt; lis.length; i++) {
          lis[i].onmouseover = function() {
              this.children[0].style.display = 'block'; // li下的第几个孩子就写几
          }
          lis[i].onmouseout = function() {
              this.children[0].style.display = 'none';  // li下的第几个孩子就写几
          }
      }
  &lt;/script&gt;

  /* 案例5：开关灯案例（见素材）
  &lt;style&gt;
    body {background-color: black;}       // 这一步是可以省略的，多余了
  &lt;/style&gt;
  &lt;/head&gt;

  &lt;body&gt;
  &lt;button&gt;开关灯&lt;/button&gt;
  &lt;script&gt;
      // 获取元素
      var btn = document.querySelector('button');
      var body = document.querySelector('body');
      // 绑定事件  添加处理程序
      flag = 0;                          // 定义一个变量接收值
      btn.onclick = function() {
          if (flag == 0) {
              body.style.backgroundColor = '#fff';
              flag = 1;
          } else {
              body.style.backgroundColor = 'black';
              flag = 0;
          }
      }
  &lt;/script&gt;

  // 另一种写法，老师写的
  &lt;button id="btn"&gt;开关灯&lt;/button&gt;
  &lt;script&gt;
      var btn = document.getElementById('btn');
      var flag = 0;
      btn.onclick = function() {
          if (flag == 0) {
              document.body.style.backgroundColor = 'black';  // 意思为文档下的body的样式，背景颜色 改为黑色
              flag = 1;
          } else {
              document.body.style.backgroundColor = '#fff';
              flag = 0;
          }
      }
  &lt;/script&gt;

  /* 案例6：百度换肤 */
  // 1、这个案例练习的是给一组元素注册事件
  // 2、给4个小图片利用循环注册点击事件
  // 3、当我们点击了这个图片，让我们页面背景改为当前的图片
  // 4、核心算法：把当前图片的src路径取过来，给body做为背景即可
    body {
        background: url(images/img.gif)no-repeat center top;
    }
    ul li {
        display: block;float: left;width: 120px;height: 30px;
        border: 1px solid #999;text-align: center;line-height:
        30px;font-size: 12px;border-radius: 15px;margin: 0 10px;
    }
    ul li:hover {
        border-color: lightskyblue;
    }
//-------------------------------------------------------------------
    &lt;ul&gt;
        &lt;li&gt;&lt;img src="images/close.png" alt=""&gt;&lt;/li&gt;
        &lt;li&gt;&lt;img src="images/open.png" alt=""&gt;&lt;/li&gt;
        &lt;li&gt;&lt;img src="images/mess.png" alt=""&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;script&gt;
        // 获取元素 ul 下的 img
        var imgs = document.querySelector('ul').querySelectorAll('img');
        console.log(imgs);
        // 绑定事件，添加处理程序
        for (var i = 0; i &lt; imgs.length; i++) {
            imgs[i].onclick = function() {
                // this.src 就是我们点击图片的路径   images/2.jpg
                // this 获取当前src  的路径
                // 把这个路径this.src给body就可以了
                document.body.style.backgroundImage = 'url(' + this.src + ')';
                // 如果背景图片没有铺满，需要加个css 样式
            }
        }
    &lt;/script&gt;

  // 案例7：隔行变色
  /*
    用到新的鼠标事件 鼠标经过onmouseover  鼠标离开onmouseout
    核心思路：  鼠标经过tr行，当前的行变背景颜色，鼠标离开去掉当前的背景颜色
    注意：     第一行（thead里面的行）不需要变换颜色，因此我们获取的是tbody里面的行
  */
  &lt;style&gt;
      table {width: 800px;margin: 100px auto; text-align: center;border-collapse: collapse;font-size: 14px;}
      thead tr {height: 30px; background-color: skyblue;}
      tbody tr {height: 30px;}
      tbody td { border-bottom: 1px solid #d7d7d7; font-size: 12px; color: blue;}
      .bg { background-color: pink;}
  &lt;/style&gt;

  &lt;body&gt;
    &lt;table&gt;
        &lt;thead&gt;        // 表 头
            &lt;tr&gt;
                &lt;th&gt;代码&lt;/th&gt;
                &lt;th&gt;名称&lt;/th&gt;
                &lt;th&gt;最新公布净值&lt;/th&gt;
                &lt;th&gt;累计净值&lt;/th&gt;
                &lt;th&gt;前单位净值&lt;/th&gt;
                &lt;th&gt;净值增长率&lt;/th&gt;
            &lt;/tr&gt;
        &lt;/thead&gt;
        &lt;tbody&gt;        // 表 身体
            &lt;tr&gt;
                &lt;td&gt;003526&lt;/td&gt;
                &lt;td&gt;农银金穗3个月定期开放债券&lt;/td&gt;
                &lt;td&gt;1.075&lt;/td&gt;
                &lt;td&gt;1.079&lt;/td&gt;
                &lt;td&gt;1.074&lt;/td&gt;
                &lt;td&gt;+0.047%&lt;/td&gt;
            &lt;/tr&gt;
            &lt;tr&gt;...
            &lt;/tr&gt;
            &lt;tr&gt;...
            &lt;/tr&gt;
            &lt;tr&gt;...
            &lt;/tr&gt;
            &lt;tr&gt;...
            &lt;/tr&gt;
            &lt;tr&gt;...
            &lt;/tr&gt;
        &lt;/tbody&gt;
    &lt;/table&gt;
  &lt;/body&gt;
  //------------------------------------------------------------------------------
  &lt;script&gt;
      // 获取元素  获取的是tbody 里面的所有行
      var trs = document.querySelector('tbody').querySelectorAll('tr');
      // 绑定事件，添加处理程序
      for (i = 0; i &lt; trs.length; i++) {      //循环
          trs[i].onmouseover = function() {
              this.style.backgroundColor = 'red';
              // 另一种写法：添加一个样式的css 类名，然后调用
              // this.className = 'bg';      //当鼠标经过，添加 bg类名的css样式
          }
          trs[i].onmouseout = function() {
              this.style.backgroundColor = '';
              // 当鼠标离开的时候为空
              // this.className = '';
          }
      }
  &lt;/script&gt;

  /* 案例8：表单全选，取消全选 */
  // 1、全选和取消全选做法：让下面所有复选框的checked属性（选中状态）跟随全选按钮即可
  // 2、下面复选框需要全部选中，上面全选才能选中做法：给下面所有复选框绑定点击事件
  // 3、每次点击，都要循环查看下面所有的复选框是否有没选中的，如果有一个授选中的，上面全选就不选中。
  &lt;div class="wrap"&gt;
      &lt;table&gt;
          &lt;thead&gt;
              &lt;tr&gt;
                  &lt;th&gt;
                      &lt;input type="checkbox" id="j_cbAll" /&gt;
                  &lt;/th&gt;
                  &lt;th&gt;商品&lt;/th&gt;
                  &lt;th&gt;价钱&lt;/th&gt;
              &lt;/tr&gt;
          &lt;/thead&gt;
          &lt;tbody id="j_tb"&gt;
              &lt;tr&gt;
                  &lt;td&gt;
                      &lt;input type="checkbox" /&gt;
                  &lt;/td&gt;
                  &lt;td&gt;iPhone8&lt;/td&gt;
                  &lt;td&gt;8000&lt;/td&gt;
              &lt;/tr&gt;
              &lt;tr&gt;
                  &lt;td&gt;
                      &lt;input type="checkbox" /&gt;
                  &lt;/td&gt;
                  &lt;td&gt;iPad Pro&lt;/td&gt;
                  &lt;td&gt;5000&lt;/td&gt;
              &lt;/tr&gt;
              &lt;tr&gt;
                  &lt;td&gt;
                      &lt;input type="checkbox" /&gt;
                  &lt;/td&gt;
                  &lt;td&gt;iPad Air&lt;/td&gt;
                  &lt;td&gt;2000&lt;/td&gt;
              &lt;/tr&gt;
              &lt;tr&gt;
                  &lt;td&gt;
                      &lt;input type="checkbox" /&gt;
                  &lt;/td&gt;
                  &lt;td&gt;Apple Watch&lt;/td&gt;
                  &lt;td&gt;2000&lt;/td&gt;
              &lt;/tr&gt;
          &lt;/tbody&gt;
      &lt;/table&gt;
  &lt;/div&gt;
  &lt;script&gt;
      // 1、全选和取消全选做法：让下面所有复选框的checked属性（选中状态）跟随全选按钮即可
      // 获取元素
      var j_cbAll = document.getElementById('j_cbAll');
      // j_tb 下的所以按钮
      var j_tbs = document.getElementById('j_tb').getElementsByTagName('input');
      // 注册事件
      j_cbAll.onclick = function() {
              // this.checked 可以得到当前的复选框状态，当选中为true,没选中为false
              // 循环，遍历每个body下的复选框
              for (var i = 0; i &lt; j_tbs.length; i++) {
                  j_tbs[i].checked = this.checked;
              }
          }
          //2、下面复选框需要全部选中，上面全选才能选中
      for (var i = 0; i &lt; j_tbs.length; i++) {
          j_tbs[i].onclick = function() {
              var flag = true; //新建一个存储变量
              // 每次点击下面的复选框都要循环检查4个小按钮是否全被选中
              for (var i = 0; i &lt; j_tbs.length; i++) {
                  // 判断，取反，如果j_tbs里的复选框没有被选中，那么变量为false
                  if (!j_tbs[i].checked) {
                      flag = false;
                      break; // 如果有一个没有选中，则退出此循环，提高执行效率
                  }
              }
              j_cbAll.checked = flag;
          }
      }
  &lt;/script&gt;
  </code></pre>
          </li>
          <li>
            总结：操作元素就是DOM核心内容
            <ul>
              <li>操作元素内容 ： innerText innerHTML</li>
              <li>操作常见元素属性 ： src href title alt</li>
              <li>操作表单元素属性 ： type value disabled</li>
              <li>操作元素样式属性 ： element.style className</li>
            </ul>
          </li>
        </ul>
        <p>自定义属性的操作</p>
        <pre><code class="language-html line-numbers">  // 1、获取属性值   element.属性
  &lt;div style="font-size: 20px;" id="demo"&gt;123&lt;/div&gt;
  &lt;script&gt;
      var div = document.querySelector('div');
      console.log(div.style);
      console.log(div.id);
  &lt;/script&gt;

  // element.getAttribute (' 属性'); 解释：得到 某个的属性
  console.log(div.getAttribute('id'));
  console.log(div.getAttribute('style'));

  // 区别：
      element.属性 获取内置属性值（元素本身自带的属性）
      element.getAttribute（属性）; 主要获得自定义的属性（标准）我们程序员自定义的属性

  // 2、获取H5自定义属性
      *、兼容性获取 element.getAttribute（‘data-index'）； // 推荐使用
      *、H5新增 element.dataset.index 或者 element.dataset[index] ie 11才开始支持，还必须是获取 data - 开头的
  &lt;div getTime='20' data-index = '2' data-list-name="andy"&gt;123&lt;/div&gt;

  console.log(div.getAttribute('getTime'));
  console.log(div.dataset);                            // dataset是一个集合里面存放了所有以 data 开头的自定义属性
  console.log(div.dataset['index']);
  console.log(div.dataset.index);                      // 不用加data
  console.log(div.dataset('getTime'));

  // 注意，命名规范，如果有 - 分开的，使用dataset时，使用驼峰命名</code></pre>
        <ul>
          <li>
            设置属性
            <pre><code class="language-js line-numbers">  element.属性= ' 值 ';                // 设置内置属性值。
  element.setAttribute('属性','值');

  div.id = 'demo2';
  div.setAttribute('index', 2)
  div.setAttribute('class', 'nav')
  div.className = 'nav1';</code></pre>
          </li>
          <li>
            演示
            <pre><code class="language-html line-numbers">  &lt;a&gt; href="#" class="link" data-param1="value1" data-param2="value2"&gt;Link 1&lt;/a&gt;
  &lt;a&gt; href="#" class="link" data-param1="value3" data-param2="value4"&gt;Link 2&lt;/a&gt;
  &lt;a&gt; href="#" class="link" data-param1="value5" data-param2="value6"&gt;Link 3&lt;/a&gt;

  &lt;script&gt;
    const links = document.querySelectorAll('.link');

    links.forEach(link =&gt; {
      link.addEventListener('click', e =&gt; {
        e.preventDefault();
        const param1 = link.getAttribute('data-param1');
        const param2 = link.getAttribute('data-param2');
        console.log(param1, param2);
      });
    });
  &lt;/script&gt;</code></pre>
          </li>
        </ul>
        <p>节点操作</p>
        <ul>
          <li>
            获取元素通常使用两种方式
            <ul>
              <li>
                1. 利用DOM提供的方法获取元素 缺点：逻辑性不强、繁琐
                <pre><code class="language-js line-numbers">  document.getElementById();
  document.getElementsByTagName();
  document.querySelector();</code></pre>
              </li>
              <li>
                2. 利用节点层级关系获取元素
                <ul>
                  <li>利用父子兄节点关系获取元素</li>
                  <li>逻辑性强，但是兼容性稍差</li>
                </ul>
              </li>
              <li>
                这两种方式都可以获取元素节点，我们后面都会使用，但是节点操作更简单
              </li>
            </ul>
          </li>
          <li>
            网页中的所有内容都是节点（标签、属性、文本、注释等），在DOM中，节点使用node来表示。
          </li>
          <li>
            HTML
            DOM树中的所有节点均可通过JavaScript进行访问，所有HTML元素（节点）均可被修改，也可以创建或删除。
            <pre><code class="language-js line-numbers">                          文档
                      根元素&lt;html&gt;
  |-------------------------|---------------------------|
  元素&lt;head&gt;                                         元素&lt;body&gt;
  |                                                     |
  |                         |---------------------------|-------------------|
  元素&lt;title&gt;            属性：href                   元素&lt;a&gt;             元素&lt;h1&gt;
  |                                                     |                   |
  文本：文档标题                                   文本：我的链接        文本：我的标题

  /*
    一般地，节点至少拥有nodeType（节点类型）、nodeName（节点名称）和  nodeValue（节点值）这三个基本属性。
        元素节点   nodeType为1       nodeName: "div"
        属性节点   nodeType为2       nodeType: "1"
        文本节点   nodeType为3       nodeValue: null      （文本节点包含文字、空格、换行等）
    我们在实际开发中，节点操作主要操作的是元素节点
  */

  // 节点层级：     利用DOM树可以把节点划分为不同的层级关系，常见的是父子兄层级关系。

                          文档
                    根元素&lt;html&gt;
  |-------------------------|---------------------------|
  元素&lt;head&gt;                                         元素&lt;body&gt;
  |                                                     |
  |                         |---------------------------|-------------------|
  元素&lt;title&gt;            属性：href                   元素&lt;a&gt;             元素&lt;h1&gt;
  |                                                     |                   |
  文本：文档标题                                   文本：我的链接        文本：我的标题</code></pre>
          </li>
          <li>
            父节点
            <pre><code class="language-js line-numbers">  node.parentNode      // 注意：得到的是离元素最近的父亲，爷爷得不到

  // 以前做法，两个都获取
  var QRCode = document.querySelector('.QRCode');
  var box = document.querySelector('.bxo');

  // 现在做法，获取到   QRCode 的父亲  box
  QRCode.parentNode;

  // 注意： parentNode属性可返回某节点的父节点，注意是最近的一个父节点。如果指定的节点没有父节点则返回null</code></pre>
          </li>
          <li>
            子节点1 不常用
            <pre><code class="language-html line-numbers">  /* parentNode.Nodes  标准   注意：childNodes 是得到所有的子节点，包含元素节点，文本节点等，*/

&lt;ul&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;script&gt;
    // 1、子节点
    // 以前做法，两个都获取
    var ul = document.querySelector('ul');
    var lis = ul.querySelector('li');
    // 现在做法，获取到   QRCode 的父亲  box    var lis  可以用不用写
    ul.childNodes;
&lt;/script&gt;

// 注意：返回值里面包含了所有的子节点，包括元素节点，文本节点等。
        如果只想要获得里面的元素节点，则需要专门处理。所以我们一般不提倡使用childNodes
&lt;script&gt;
    var ul = document.querySelector('ul');
    for (var i = 0; i &lt; ul.childNodes.length; i++) {
        if (ul.childNodes[i].nodeType == 1) {
            //ul.childNodes[i] 是元素节点
            console.log(ul.childNodes[i]);
        }
    }
&lt;/script&gt; </code></pre>
          </li>
          <li>
            子节点2 常用
            <pre><code class="language-js line-numbers">  parentNode.children   (非标准)     // 获取所有的子元素节点，也是实际开发常用的

// 以前做法，两个都获取
var ul = document.querySelector('ul');
var lis = ul.querySelector('li');

// 现在做法，获取到   QRCode 的父亲  box    var lis  可以用 不用写
  console.log(ul.children);</code></pre>
          </li>
          <li>
            子节点3
            <pre><code class="language-js line-numbers">  parentNode.firstChild  // 返回第一个子节点，找不到则返回null。同样，也是包含所有的节点。跟parentNode.childNodes一样
  parentNode.lastChild   // 返回最后一个子节点，找不到则返回null。同样，也是包含所有的节点。跟parentNode.childNodes一样
                         // 所以又提供了 parentNode.firstElementChild   和   parentNode.lastElementChild
                         // 注意：这两个法有兼容性问题，IE9以上才支持。</code></pre>
          </li>
          <li>
            解决方案：
            <ul>
              <li>
                实际开发中，firstChild 和 lastChild 包含其他节点，操作不方便，而
                firstElementChild 和 lastElementChi1d
                又有兼容性问题，那么我们如何获取第一个子元素节点或最后一个子元素节点呢？
                <pre><code class="language-js line-numbers">  // 解决方案: 实际开发的写法既没有兼容性问题又返回第一个子元素
  console.log(ul.children[0]);                       // 因为是伪数组，所以想拿第几个 []里写索引号
  console.log(ul.children[ul.children.length - 1]);  // 取最后一个</code></pre>
              </li>
              <li>
                兄弟节点需要自己封装一个兼容性的函数
                <pre><code class="language-js line-numbers">  function getNextElementSibling(element) {
    var el = element;
    while (el = el.nextSibling) {
        if (el.nodeType === 1) {
            return el;
        }
    }
    return null;
  }</code></pre>
              </li>
            </ul>
          </li>
        </ul>
        <p>创建、添加、删除节点</p>
        <ul>
          <li>
            创建节点
            <pre><code class="language-js line-numbers">  document.createElement( 'tagName' )
  // 该方法创建由tagName指定的HTML元素。因为这些元素原先不存在，是根据我们的需求动态生成的，所以我们也称为动态创建元素节点。
  // 例如：
      var div = document.createElement('div');</code></pre>
          </li>
          <li>
            添加节点
            <pre><code class="language-js line-numbers">  node.appendChild(child)              // 在后面追加元素，相当于数组中的push
  // 该方法将一个节点添加到指定父节点的子节点列表未尾。类似于css里面的after伪元素。

  node.insertBefore(child,指定元素)     // 在前面追加元素
  // 该方法将一个节点添加到父节点的指定子节点前面。类似于css里面的 before伪元素。

  // 例子1
  &lt;ul&gt;&lt;li&gt;&lt;/li&gt;&lt;/ul&gt;
  &lt;script&gt;
      // 1、创建节点   元素节点
      var li = document.createElement('li');
      // 2、添加节点   node.appendChild(child)  node 是父级   child 是子级
      var ul = document.querySelector('ul');
      ul.appendChild(li);
      // var lis = document.createElement('li');  // 创建节点
      ul.insertBefore(li, ul.children[0])         // 括号解释，添加哪个孩子，添加到哪个的前面
  &lt;/script&gt;

  // 例子2
  /* 创建留言：
      1、核心思路：点击按钮之后，就动态创建一个li，添加到ul里面。
      2、创建i的同时，把文本域里面的值通过i.innerHTML赋值给li
      3、如果想要新的留言后面显示就用appendChild 如果想要前面显示就用 insertBefore */
  &lt;textarea&gt; name="" id="" cols="30" rows="10"&gt;&lt;/textarea&gt;
  &lt;button&gt;发布&lt;/button&gt;
  &lt;ul&gt;

  &lt;/ul&gt;
  &lt;script&gt;&gt;
    // 获取元素
    var text = document.querySelector('textarea');
    var btn = document.querySelector('button');
    var ul = document.querySelector('ul');
    // 绑定事件  添加处理事件
    btn.onclick = function() {
        // 需要添加判断，如果发布为空，则不创建
        if (text.value != '') {
            //创建节点
            var li = document.createElement('li');
            // 要先有元素，才能赋值，所以书写顺序不能写错了
            li.innerHTML = text.value;
            //添加节点
        1、  ul.appendChild(li); // 注意 添加里面不要单引号     在后面添加

        2、  ul.insertBefore(li, ul.children[0]);        // 在前面添加
        } else {
            alert('请输入内容');
            return false;
        }
    }
  &lt;/script&gt;

  /* 删除留言：
      1、当我们把文本域里面的值赋值给li的时候，多添加一个删除的链接
      2、需要把所有的链接获取过来，当我们点击当前的链接的时候，删除当前链接所在的li
      3、阻止链接跳转需要添加javascript：void（0）;或者 javascript：; 用后面一个更简单 */
  &lt;textarea&gt; name="" id="" cols="30" rows="10"&gt;&lt;/textarea&gt;
  &lt;button&gt;发布&lt;/button&gt;
  &lt;ul&gt;

  &lt;/ul&gt;
  &lt;script&gt;&gt;
    // 获取元素
    var text = document.querySelector('textarea');
    var btn = document.querySelector('button');
    var ul = document.querySelector('ul');
    // 绑定事件  添加处理事件
    btn.onclick = function() {
        // 需要添加判断，如果发布为空，则不创建
        if (text.value != '') {
            //创建节点
            var li = document.createElement('li');
            // 要先有元素，才能赋值，所以书写顺序不能写错了
            li.innerHTML = text.value + "&lt;a&gt; href='javascript:;'&gt;删除&lt;/a&gt;";
            // 添加节点
            ul.appendChild(li);                     // 注意 添加里面不要单引号     在后面添加
            // 删除节点    删除的是当前链接的1i它的父亲
            var as = document.querySelectorAll('a');
            for (var i = 0; i &lt; as.length; i++) {
                as[i].onclick = function() {
                    //node.removeChild（child）；删除的是 li 当前 a所在的li    this.parentNode；
                    ul.removeChild(this.parentNode);
                }
            }
        } else {
            alert('请输入内容');
            return false;
        }
    }
  &lt;/script&gt;</code></pre>
          </li>
          <li>
            删除节点
            <pre><code class="language-js line-numbers">  node.removeChild (child)                    // 该方法从DOM 中删除一个子节点，返回删除的节点。

&lt;button&gt;删除&lt;/button&gt;
&lt;ul&gt;
    &lt;li&gt;1&lt;/li&gt;
    &lt;li&gt;2&lt;/li&gt;
    &lt;li&gt;3&lt;/li&gt;
&lt;/ul&gt;
&lt;script&gt;
    // 获取元素
    var btn = document.querySelector('button');
    var ul = document.querySelector('ul');
    btn.onclick = function() {
        ul.removeChild(ul.children[0]);     // 第几个孩子就写索引号几
    }
&lt;/script&gt;

// 修改条件：  当ul 里面的li 没有的时候，添加判断条件，禁用button
&lt;button&gt;删除&lt;/button&gt;
&lt;ul&gt;
    &lt;li&gt;1&lt;/li&gt;
    &lt;li&gt;2&lt;/li&gt;
    &lt;li&gt;3&lt;/li&gt;
&lt;/ul&gt;
&lt;script&gt;
    // 获取元素
    var btn = document.querySelector('button');
    var ul = document.querySelector('ul');
    btn.onclick = function() {
        if (ul.children.length != 0) {
            ul.removeChild(ul.children[0]);  // 第几个孩子就写索引号几
        } else {
            this.disabled = true;
        }
    }
&lt;/script&gt;</code></pre>
          </li>
        </ul>
        <p>克隆节点</p>
        <ul>
          <li>
            代码
            <pre><code class="language-js line-numbers">  node.cloneNode ()

  // 该方法返回调用该方法的节点的一个副本。也称为克隆节点/拷贝节点
  &lt;ul&gt;
      &lt;li&gt;1&lt;/li&gt;
      &lt;li&gt;2&lt;/li&gt;
  &lt;/ul&gt;
  &lt;script&gt;&gt;
      var ul = document.querySelector('ul');
      var clones = ul.children[0].cloneNode(false);     // 空 或者 false 浅拷贝
      var clones = ul.children[0].cloneNode(true);      // true 深拷贝
      ul.appendChild(clones);
  &lt;/script&gt; </code></pre>
          </li>
          <li>
            注意：
            <ul>
              <li>
                如果cloneNode ( )
                中括号参数为空或者为false，则是浅拷贝，即只克隆复制节点本身，不克隆里面的子节点。
              </li>
              <li>
                如果cloneNode (true)
                中括号参数为true，则是深拷贝，复制标签，复制里面的内容
              </li>
              <li>如果是数值类型的拷贝都是深拷贝</li>
              <li>引用数据类型才有深拷贝和浅拷贝</li>
            </ul>
          </li>
          <li>
            动态生成表格 239集
            <ul>
              <li>
                因为里面的学生数据都是动态的，我们需要js动态生成。这里我们模拟数据，自己定义好数据。数据我们采取对象形式存储。
              </li>
              <li>所有的数据都是放到tbody里面的行里面。</li>
              <li>因为行很多，我们需要循环创建多个行（对应多少人）</li>
              <li>
                每个行里面又有很多单元格（对应里面的数据），我们还继续使用循环创建多个单元格，并且把数据存入里面（双重for循环）
              </li>
              <li>最后一列单元格是删除，需要单独创建单元格。</li>
            </ul>
            <pre><code class="language-js line-numbers">  // 1.先去准备好学生的数据
  var dataS = [{name: '魏璎珞',subject: 'JavaScript',score: 100
  }, {name: '弘历',subject: 'JavaScript',score: 98
  }, {name: '傅恒',subject: 'JavaScript',score: 99
  }, {name: '明玉',subject: 'JavaScript', score: 88
  }, {name: '大猪蹄子',subject: 'JavaScript',score: 0
  }];
  // 2. 往tbody 里面创建行： 有几个人（通过数组的长度）我们就创建几行
  var tbody = document.querySelector('tbody');
  for (var i = 0; i &lt; dataS.length; i++) { // 外面的for循环管行 tr
      // 1. 创建 tr行
      var tr = document.createElement('tr');
      tbody.appendChild(tr);
      // 2. 行里面创建单元格(跟数据有关系的3个单元格) td 单元格的数量取决于每个对象里面的属性个数  for循环遍历对象 datas[i]
      for (var k in dataS[i]) { // 里面的for循环管列 td
          // 创建单元格
          var td = document.createElement('td');
          // 把对象里面的属性值 dataS[i][k] 给 td
          // console.log(dataS[i][k]);
          td.innerHTML = dataS[i][k];
          tr.appendChild(td);
      }
      // 3. 创建有删除2个字的单元格
      var td = document.createElement('td');
      td.innerHTML = '&lt;a href="javascript:;"&gt;删除 &lt;/a&gt;';
      tr.appendChild(td);
  }
  // 4. 删除操作 开始
  var as = document.querySelectorAll('a');
  for (var i = 0; i &lt; as.length; i++) {
      as[i].onclick = function() {
          // 点击a 删除 当前a 所在的行(链接的爸爸的爸爸)  node.removeChild(child)
          tbody.removeChild(this.parentNode.parentNode)
      }
  }
  // for(var k in obj) {
  //     k 得到的是属性名
  //     obj[k] 得到是属性值
  // }</code></pre>
          </li>
          <li>
            for 循环 数组对象，for in对象，动态添加到元素里
            <pre><code class="language-html line-numbers">  &lt;table&gt;
    &lt;tbody&gt; id="demo"&gt;&lt;/tbody&gt;
  &lt;/table&gt;
  &lt;script&gt;
      // 假设发起了ajax请求，获得了一串数据
      let data = [{id: 1,name: '张三',age: 23,sex: "男"
      }, {id: 1,name: '李四',age: 20,sex: "女"
      }, {id: 1,name: '王五',age: 21,sex: "男"
      }];
      var tbody = document.getElementById("demo");
      for (var i = 0; i &lt; data.length; i++) {
          var tr = document.createElement('tr');
          tbody.appendChild(tr);
          for (var k in data[i]) {
              var td = document.createElement("td");
              td.innerHTML = data[i][k]
              tr.appendChild(td);
          }
      }
  &lt;/script&gt;</code></pre>
          </li>
          <li>
            使用forEach 循环数组对象，遍历数据动态添加
            <pre><code class="language-js line-numbers">  let study_content = $q(".study_content");
  let arr = [];
  data.forEach(d =&gt; {
      let link = `
                  &lt;div class="study_content"&gt;
                      &lt;div class="link"&gt;
                          &lt;div class="circular"&gt;&lt;/div&gt;
                          &lt;div class="text"&gt;
                              &lt;h4&gt;&lt;a href=""&gt;${d.name}&lt;/a&gt;   &lt;/h4&gt;
                              &lt;p&gt;${d.title}&lt;/p&gt;
                          &lt;/div&gt;
                          &lt;div class="date"&gt;
                              &lt;i&gt;2021年01月04日&lt;/i&gt;
                              &lt;i class="bi bi-heart"&gt;&nbsp;268&lt;/i&gt;
                          &lt;/div&gt;
                      &lt;/div&gt;
                  &lt;/div&gt;
      `;
      arr.push(link);
  });
  arr.forEach(a =&gt; {
      study_content.innerHTML += a;
  })

  // 推荐使用此方法，但方法也有很多，比如filter 但是注意forEach是不返回任何东西的，只会做遍历操作
    let study_content = $q(".study_content");
    let newData = data.map(e =&gt; {
        return ` &lt;div class="study_content"&gt;
                &lt;div class="link"&gt;
                            &lt;div class="circular"&gt;&lt;/div&gt;
                            &lt;div class="text"&gt;
                                &lt;h4&gt;&lt;a href=""&gt;${e.name}&lt;/a&gt;   &lt;/h4&gt;
                                &lt;p&gt;${e.title}&lt;/p&gt;
                            &lt;/div&gt;
                            &lt;div class="date"&gt;
                                &lt;i&gt;2021年01月04日&lt;/i&gt;
                                &lt;i class="bi bi-heart"&gt;&nbsp;268&lt;/i&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
        `;
    }).join(""); // 用空字符串拼接
    study_content.innerHTML = newData;</code></pre>
          </li>
          <li>
            三种动态创建元素的区别
            <pre><code class="language-js line-numbers">  document.write()
  element.innerHTML
  document.createElement()

  // 区别：
  //   1、document.write 是直接将内容写入页面的内容流，但是文档流执行完毕，则它会导致页面全部重绘
  //   2、innerHTML是将内容写入某个DOM节点，不会导致页面全部重绘
  //   3、innerHTML创建多个元素效率更高（不要拼接字符串，采取数组形式拼接），结构稍微复杂
  //   4、createElement() 创建多个元素效率稍低一点点，但是结构更清晰</code></pre>
          </li>
        </ul>
        <p>DOM 重点核心</p>
        <ul>
          <li>
            文档对象模型（DocumentObject Model，简称
            DOM），是W3C组织推荐的处理可扩展标记语言（HTML或者XML）的标准编程接口。
          </li>
          <li>
            W3C已经定义了一系列的DOM接口，通过这些DOM接口可以改变网页的内容、结构和样式。
            <ul>
              <li>
                对于JavaScript，为了能够使JavaScript操作HTML，JavaScript就有了一套自己的dom编程接口。
              </li>
              <li>对于HTML，dom使得html形成一棵dom树.包含文档、元素、节点</li>
            </ul>
            <pre><code class="language-js line-numbers">                           文档
                        根元素&lt;html&gt;
  |-------------------------|---------------------------|
  元素&lt;head&gt;                                       元素&lt;body&gt;
  |                                                     |
  |                         |---------------------------|-------------------|
  元素&lt;title&gt;            属性：href                  元素&lt;a&gt;              元素&lt;h1&gt;
  |                                                     |                   |
  文本：文档标题                                     文本：我的链接        文本：我的标题</code></pre>
          </li>
          <li>
            我们获取过来的DOM元素是一个对象（object），所以称为文档象模型，关于dom操作，我们主要针对于元素的操作。
          </li>
          <li>
            主要有创建、增、删、改、查、属性操作、事件操作。
            <pre><code class="language-js line-numbers">  // 创建
  document.write()
  element.innerHTML
  document.createElement()

  // 增
  element.appendChild
  element.insertBefore

  // 删
  element.removeChild

  /* 改 (主要修改dom的元素属性，dom元素的内容、属性，表单的值等)
      修改元素属性：src、href、title等
      修改普通元素内容：innerHTML、innerText
      修改表单元素：value、type、disabled等
      修改元素样式：style、className  */

  /* 查 （主要获取查询dom的元素）
      DOM提供的APl方法：getElementById、getElementsByTagName 古老用法不太推荐
      H5提供的新方法：querySelector、querySelectorAll 提倡
      利用节点操作获取元素：父（parentNode）、子（children）、兄（previousElementSibling、nextElementSibling）提倡 */

  // 属性操作 主要针对于自定义属性。
  el.setAttribute：设置dom的属性值
  el.getAttribute：得到dom的属性值
  el.removeAttribute 移除属性
              </code></pre>
          </li>
        </ul>
        <p>事件操作 (给元素注册事件，采取事件源事件类型 = 事件处理程序)</p>
        <ul>
          <li>
            事件高级 - 注册事件概述
            <ul>
              <li>给元素添加事件，称为注册事件或者绑定事件。</li>
              <li>注册事件有两种方式：传统方式和方法监听注册方式</li>
              <li>
                特点：注册事件的唯一性，同一个元素同一个事件只能设置一个处理函数，最后注册的处理函数将会覆盖前面注册的处理函数
              </li>
            </ul>
          </li>
          <li>
            传统注册方式
            <pre><code class="language-html line-numbers">  &lt;button&gt;传统注册事件&lt;/button&gt;
  &lt;button&gt;方法监听注册事件&lt;/button&gt;
  &lt;script&gt;
      var btns = document.querySelectorAll('button');
      btns[0].onclick = function(){}
      btns[0].onclick = function(){}      // 如果同一个元素添加两个处理函数，只会执行最后一个
  &lt;/script&gt;</code></pre>
          </li>
          <li>
            方法监听注册方式
            <ul>
              <li>
                w3c标准 推荐方式 addEventListener（）它是一个方法
                IE9之前的IE不支持此方法，可使用 attachEvent（）代替
              </li>
              <li>
                特点：同一个元素同一个事件可以注册多个监听器 按注册顺序依次执行
              </li>
              <li>
                监听
                <pre><code class="language-js line-numbers">  // 方式1
  eventTarget.addEventListener('type',listener[ ,useCapture])  // 逗号前一定是字符串，所以要加引号
  // 该方法将指定的监听器注册到eventTarget（目标对象）上，当该对象触发指定的事件时，
  // 就会执行事件处理函数。方法有兼容性问题，IE9 以上才能使用

  /*
  该方法接收三个参数：
      type：       事件类型字符串，比如click、mouseover，注意这里不要带on，只有传统处理函数方式注册时才需要带on
      listener：   事件处理函数，事件发生时，会调用该监听函数
      useCapture： 可选参数，是一个布尔值，默认是false。捕获阶段是否触发
  */

  &lt;button&gt;方法监听注册事件&lt;/button&gt;
  &lt;script&gt;
      var btns = document.querySelectorAll('button');
      btns[1].addEventListener('click', function() {    // 解释： 谁.监听（'事件类型'，处理程序），字符串里不带 on
          alert('事件侦听111');                          // addEventListener里事件类型是字符串。并且不要带 on
      })
      //同一个事件可以添加多个侦听器（事件处理程序）
      btns[1].addEventListener('click', function() {
          alert('事件侦听222');
      })
  &lt;/script&gt;

  // 方式2 (该特性是非标准的，请尽量不要在生产环境中使用它！)
  eventTarget.attachEvent(eventNameWithOn,callback)
  // 该方法将指定的监听器注册到eventTarget（目标对象）上，当该对象触发指定的事件时，指定的回调函数就会被执行。

  // 该方法接收两个参数：
     eventNameWithOn:      // 事件类型字符串，比如onclick、onmouseover，这里要带on
     callback:             // 事件处理函数，当目标触发事件时回调函数被调用
                           // 支持IE 9之前的版本，但是事件类型中 必须带 on

  btns[0].attachEvent('onclick', function() {
      alert('事件侦听333');
  })</code></pre>
              </li>
              <li>
                注册事件兼容性解决方案和处理的原则：首先照顾大多数浏览器，再处理特殊浏览器，
                作为了解就可以了
                <pre><code class="language-js line-numbers">  function.addEventListener(element, eventName, fn) {
      //判断当前浏览器是否支持addEventListener方法
      if (element.addEventListener) {
          element.addEventListener(eventName, fn) // 第三个参数 默认是false，可选参数，，默认是false。捕获阶段是否触发
      } else if (element, attachEvent) {
          element.attachEvent('on' + eventName, fn)
      } else {
          //相当于 element.onclick = fn
          element['on' + eventName] = fn
      }
  }
  addEventListener（element, eventName, fn）;     // 调用

  // 够用：            eventTarget.attachEvent(eventNameWithOn,callback)
  // 不兼容直接用传统：   btns[0].onclick = function(){}</code></pre>
              </li>
            </ul>
          </li>
          <li>
            删除事件
            <ul>
              <li>
                传统注册方式的删除方法
                <pre><code class="language-js line-numbers">  eventTarget.onclick= null;

  // 例子
  &lt;div&gt;1&lt;/div&gt;
  &lt;div&gt;2&lt;/div&gt;
  &lt;div&gt;3&lt;/div&gt;

  var divs = document.querySelectorAll('div');
  divs[0].onclick = function() {
      alert('只需要弹窗一次');
      // 使用eventTarget.onclick =null;
      divs[0].onclick = null;
  }</code></pre>
              </li>
              <li>
                方法监听注册方式
                <pre><code class="language-js line-numbers">  eventTarget.removeEventListener(type,listener[, useCapture]);     // 删除监听事件，取消监听事件

  // 例子
  &lt;div&gt; id="content"&gt;&lt;/div&gt;
  &lt;script&gt; type="text/javascript"&gt;
      var content = document.getElementById("content");
      //在添加处理函数的时候，直接用函数名，把函数写在里面，这样就可以很方便的删除监听事件
      content.addEventListener("mouseenter", add, false);//可选参数，是一个布尔值，默认是false。捕获阶段是否触发
      function add() {
          console.log("333");
      }
      content.removeEventListener("mouseenter", add, false);    // 删除监听事件
  &lt;/script&gt;</code></pre>
              </li>
              <li>
                detachEvent() 方法
                <pre><code class="language-js line-numbers">  eventTarget.detachEvent(eventNameWithon, callback);

  // 例子
      &lt;script&gt;
          var divs = document.querySelectorAll('div');
          divs[1].addEventListener('click', fn) //里面的函数调用 fn ，不用加小括号
          function fn() {
              alert(22);
              divs[1].removeEventListener('click', fn);
          }
      &lt;/script&gt;

  // 注意：因为addEventListener（）方法的第二个参数类型是函数，如果写成fn（）那么就会传入函数调用结果，
      也就是 return 的内容函数，fn中没写return，默认会传入undefined导致错误

  // eventTarget.detachEvent(eventNameWidthOn, callback);
  // 兼容性问题，只有在IE9以下才能使用
      divs[1].attachEvent('onclick', fn);

      function fn() {
          alert('1');
          divs[2].detachEvent('onclick',fn)
      }</code></pre>
              </li>
              <li>
                删除事件兼容性解决方案和处理的原则：首先照顾大多数浏览器，再处理特殊浏览器，
                作为了解就可以了
                <pre><code class="language-html line-numbers">  &lt;script&gt;
      function.removeEventListener(element, eventName, fn) {
          // 判断当前浏览器是否支持removeEventListener方法
          if (element.removeEventListener) {
              element.removeEventListener(eventName, fn) // 三个参数  默认是false
          } else if (element, detachEvent) {
              element.detachEvent('on' + eventName, fn)
          } else {
              element['on' + eventName] = fn
          }
      }
  &lt;/script&gt;

  // 够用： div[0].onclick = null ;
  // 不兼容直接用传统： div[0].removeEventListener( 'click' , fn )</code></pre>
              </li>
            </ul>
          </li>
        </ul>
        <p>DOM事件流</p>
        <ul>
          <li>事件流描述的是从页面中接收事件的顺序。</li>
          <li>
            事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程即DOM事件流。
          </li>
          <li>
            比如我们给一个div注册了点击事件：
            <pre><code class="language-js line-numbers">  按顺序执行：
      捕获阶段                               冒泡阶段

        1            Document                 7

        2            Element  html            6

        3            Element  body            5

                     Element  div             4

        ----------------------------------------&gt;

        1到2      2到3       3到4       属于捕获阶段
        4到5      5到6       6到7       属于冒泡阶段</code></pre>
          </li>
          <li>
            DOM事件流分为3个阶段
            <ul>
              <li>
                捕获阶段
                <ul>
                  <li>
                    当document 没有绑定事件，那么会顺着下一个element html
                    ，如果没有接着下一个查询
                  </li>
                </ul>
              </li>
              <li>
                当前目标阶段
                <ul>
                  <li>当找到element div 时发现有绑定事件，此时称为目标阶段</li>
                </ul>
              </li>
              <li>
                冒泡阶段
                <ul>
                  <li>
                    事件冒泡：
                    IE最早提出，事件开始时由最具体的元素接收，然后逐级向上传播到到DOM最顶层节点的过程。
                  </li>
                  <li>
                    事件捕获：
                    网景最早提出，由DOM最顶层节点开始，然后逐级向下传播到到最具体的元素接收的过程
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            理解：
            我们向水里面扔一块石头，首先它会有一个下降的过程，这个过程就可以理解为从最顶层向事件发生的最具体元素
            （目标点）的捕获过程；之后会产生泡泡，会在最低点（最具体元素）之后漂到水面上，这个过程相当于事件冒泡。
          </li>
          <li>
            DOM事件流2
            <ul>
              <li>
                事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程即DOM事件流。
                <ul>
                  <li>JS代码中只能 执行捕获 或者 冒泡 其中的一个阶段。</li>
                  <li>onclick 和 attachEvent 只能得到冒泡阶段。</li>
                  <li>
                    addEventListener（type，listener[，useCapture]）第三个参数如果是true，表示在事件捕获阶段调用事件处理程序；如果是false（不写默认就是false），表示在事件冒泡阶段调用事件处理程序。
                  </li>
                  <li>实际开发中我们很少使用事件捕获，我们更关注事件冒泡。</li>
                  <li>
                    有些事件是没有冒泡的，比如onblur、onfocus、onmouseenter、onmouseleave
                  </li>
                  <li>
                    事件冒泡有时候会带来麻烦，有时候又会帮助很巧妙的做某些事件，我们后面讲解。
                  </li>
                </ul>
                <pre><code class="language-js line-numbers">  var divs = document.querySelectorAll('div');
  // 如果是true,表示事件获取阶段     如果为false,表示事件冒泡阶段
  divs[1].addEventListener('onclick', function() {}, true);  // true   或者  false(默认)</code></pre>
              </li>
              <li>
                false 执行顺序 ： son -&gt; father -&gt; body -&gt; html -&gt;
                document
              </li>
              <li>
                true 执行顺序 ： document -&gt; html -> body -&gt; father -&gt;
                son
              </li>
            </ul>
          </li>
        </ul>
        <p>事件对象 event</p>
        <ul>
          <li>
            代码
            <pre><code class="language-js line-numbers">  var div = document.querySelector('div');
  // 1. event就是一个事件对象 写到侦听函数的小括号里面，当形参来看

  // 2.事件对象只有有了事件才会存在，它是系统给我们自动创建的，不需要传入参数
  // 3.事件对象是我们事件的一系列相关数据的集合跟事件相关的，比如鼠标点击里面就包含了鼠标的相关信息，鼠标坐标，键盘事件
        的信息，比如，鼠标 判断用户按下了哪个键
  // 4、这个事件对象我们可以自己命名，比如 event\ evt e
  // 5、事件对象也有兼容性问题，ie678  通过 window.event
  div.onclick = function (event){
      e = e || window.event   兼容性写法   如果浏览器认识，则执行e,如果不认识，则执行 window.event
  }</code></pre>
          </li>
          <li>
            什么是事件对象
            <pre><code class="language-js line-numbers">  eventTarget.onclick = function(event){}
  eventTarget.addEventListener('click',function(event){})

  /*
    这个event 就是事件对象，我们还喜欢的写成e或者 evt
    官方解释：event对象代表事件的状态，比如键盘按键的状态、鼠标的位置、鼠标按钮的状态。
    简单理解：事件发生后，跟事件相关的一系列信息数据的集合都放到这个对象里面，这个对象就是事件对象event，它有很多属性和方法。

    比如：
      1.谁绑定了这个事件。
      2.鼠标触发事件的话，会得到鼠标的相关信息，如鼠标位置。
      3.键盘触发事件的话，会得到健盘的相关信息，如按了哪个键。

    这个event是个形参，系统帮我们设定为事件对象，不需要传递实参过去。
    当我们注册事件时，event对象就会被系统自动创建，并依次传递给事件监听器（事件处理函数）。
  */</code></pre>
          </li>
          <li>
            事件对象的兼容性方案，事件对象本身的获取存在兼容问题：
            <ul>
              <li>
                标准浏览器中是浏览器给方法传递的参数，只需要定义形参e就可以获取到。
              </li>
              <li>
                在IE6～8中，浏览器不会给方法传递参数，如果需要的话，需要到window.event中获取查找。
              </li>
            </ul>
          </li>
          <li>解决代码示例： e = e || window.event</li>
          <li>
            事件对象的常用属性和方法
            <pre><code class="language-html line-numbers">  e.target            // 返回触发事件的对象标准
  e.srcElement        // 返回触发事件的对象非标准ie6-8使用
  e.type              // 返回事件类型比如click mouseover不带on
  e.cancelBubble      // 该属性阻止冒泡非标准ie6-8使用
  e.returnValue       // 该属性阻止默认事件（默认行为）非标准ie6-8使用比如不让链接跳转
  e.preventDefault()  // 该方法阻止默认事件（默认行为）标准比如不让链接跳转
  e.stopPropagation() // 阻止冒泡标准

  &lt;script&gt;
      var div = document.querySelector('div');
      div.addEventListener('click', function(e) {
          // e.target 返回的是触发事件对象（元素）   点击谁返回谁
          console.log(e.target);
          // this 返回的是绑定事件的对象，注册对象   点击返回绑定的谁
          console.log(this);
      })

  e.srcElement  兼容性问题解决( 了解兼容性 )
  div.onclick = function (e) {
      e = e || window.event ;
      var target = e.target || e.srcElement ;
  }

  &lt;a&gt; href="www.baidu.com"&gt;百度&lt;/a&gt;
  &lt;script&gt;
      var a = document.querySelector('a');
      a.addEventListener('click', function(e) {
         e.preventDefault(); // DOM  标准写法
      })
      // 传统写法
      a.onclick = function (e){
          // 1、普通浏览器
          e.preventDefault();
          // 2、低版本浏览器 returnValue
          e.returnValue;
          // 3、简单写法 我们可以利用return false 也能阻止默认行为，没有兼容性问题
          return false;
          // 缺点，如果后面有代码，则不执行，只限于传统方式，如果用 addEventListener 是不起作用的
          alert('后面不会被执行了');
      }
  &lt;/script&gt;</code></pre>
          </li>
          <li>
            长按press事件会导致浏览器弹出菜单，苹果的可以用-webkit-touch-callout:
            none;来禁止，但是安卓的不行。禁止弹出只能用js来控制:
            <pre><code class="language-js line-numbers">  // 1. 移动端禁止长按触发菜单
  window.addEventListener('contextmenu', function (e) {
      e.preventDefault();
  });

  // 2. 测试无效 / 或者还可以 放个透明absolute定位div遮盖住图片
  document.oncontextmenu=function(e){
    // 或者return false;
    e.preventDefault();
  };

  // 3. 关于长按的弹窗菜单怎么屏蔽，网上查了很多资料，都是设置e.preventDefault()，来实现，但是一直用的是
  obj.addEventListener("touchstart", function (e) {
      e.preventDefault();
  }, false);

  // 4. 这个设置的应该是屏蔽触屏的反应，设置屏蔽弹出菜单的应该是这样：
  document.oncontextmenu = function (e) {
      e.preventDefault();
  };

  // 5. 最后解决办法：用css，但是也会让链接失效，所以要用js来触发点击事件
  img {
      pointer-events:none;          // 禁止长按图片保存
  }

  // 6. 以下代码需要试验
  (function agent() {
    let unlock = false
    document.addEventListener('allow_copy', (event) => {
        unlock = event.detail.unlock
    })

    const copyEvents = [
        'copy',
        'cut',
        'contextmenu',
        'selectstart',
        'mousedown',
        'mouseup',
        'mousemove',
        'keydown',
        'keypress',
        'keyup',
    ]
    const rejectOtherHandlers = (e) => {
        if (unlock) {
            e.stopPropagation()
            if (e.stopImmediatePropagation) e.stopImmediatePropagation()
        }
    }
    copyEvents.forEach((evt) => {
        document.documentElement.addEventListener(evt, rejectOtherHandlers, {
            capture: true,
        })
    })
  })();

  // 7. 测试后，可以实现的：
  // 移动端长按事件
  body {
    user-select: none;
    -webkit-touch-callout: none;/* iOS Safari */
    -webkit-user-select: none;
  }

  // 右键菜单事件
  document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
  });

  // pc端事件，移动端还是会出
  document.ontouchend = function () {
      throw new Error("NO ERROR:禁止长按弹出的菜单");
  }

  // 复制事件
  document.addEventListener("copy", (e) => {
      e.preventDefault();
  })</code></pre>
          </li>
        </ul>
        <p>阻止事件冒泡的两种方式</p>
        <ul>
          <li>
            事件冒泡
            <ul>
              <li>
                开始时由最具体的元素接收，然后逐级向上传播到，到DOM最顶层节点。
              </li>
              <li>
                事件冒泡本身的特性，会带来的坏处，也会带来的好处，需要我们灵活掌握。
              </li>
            </ul>
          </li>
          <li>
            阻止事件冒泡
            <ul>
              <li>标准写法：利用事件对象里面的 el.stopPropagation（）方法</li>
              <li>
                非标准写法： IE6 - 8 利用事件对象 cancelBubble 属性 cancel 取消
                Bubble 泡泡 ，取消冒泡
              </li>
            </ul>
          </li>
        </ul>
        <p>事件委托</p>
        <ul>
          <li>
            事件冒泡本身的特性，会带来的坏处，也会带来的好处，需要我们灵活掌握。生活中有如下场景：
            <ul>
              <li>
                咱们班有100个学生，快递员有100个快递，如果一个个的送花费时间较长。同时每个学生领取的时候，
                也需要排队领取，也花费时间较长，例如？
                <ul>
                  <li>
                    解决方案：
                    快递员把100个快递，委托给班主任，班主任把这些快递放到办公室，同学们下课自行领取即可。
                  </li>
                  <li>
                    优势：
                    快递员省事，委托给班主任就可以走了。同学们领取也方便，因为相信班主任。
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            事件委托
            <ul>
              <li>事件委托也称为事件代理，在jQuery里面称为事件委派。</li>
              <li>
                不是每个子节点单独设置事件监听器，而是事件监听器设置在其父节点上，然后利用冒泡原理影响设置每个子节点。
              </li>
              <li>
                案例
                <ul>
                  <li>
                    给ul注册点击事件，然后利用事件对象的target来找到当前点击的
                    li ，因为点击 li，事件会冒泡到ul上， ul
                    上有注册事件，就会触发事件监听器。
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            事件委托的作用
            <ul>
              <li>
                我们只操作了一次DOM，提高了程序的性能。
                <pre><code class="language-html line-numbers">  &lt;ul&gt;
    &lt;li&gt;1&lt;/li&gt;
    &lt;li&gt;2&lt;/li&gt;
    &lt;li&gt;3&lt;/li&gt;
    &lt;li&gt;4&lt;/li&gt;
    &lt;li&gt;5&lt;/li&gt;
    &lt;li&gt;6&lt;/li&gt;
  &lt;/ul&gt;
  &lt;script&gt;
      // 时间委托的核心原理，给父亲节点添加侦听器。利用冒泡影响每个子节点
      var ul = document.querySelector('ul');
      ul.addEventListener('click', function(e) {
          // e.target 这个可以得到我们点击的对象
          e.target.style.backgroundColor = 'pink';
      })
  &lt;/script&gt;</code></pre>
              </li>
            </ul>
          </li>
        </ul>
        <p>鼠标事件和鼠标移动</p>
        <ul>
          <li>
            禁止鼠标右键菜单
            <pre><code class="language-js line-numbers">  // contextmenu 主要控制应该何时显示上下文菜单，主要用于程序员取消默认的上下文菜单

  document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
  })</code></pre>
          </li>
          <li>
            禁止鼠标选中 （selectstart 开始选中）
            <pre><code class="language-js line-numbers">  document.addEventListener('selectstart', function(e) {
    e.preventDefault();
  })</code></pre>
          </li>
          <li>
            鼠标事件对象
            <ul>
              <li>
                event对象代表事件的状态，跟事件相关的一系列信息的集合。现阶段我们主要是用鼠标事件对象
              </li>
              <li>
                MouseEvent 和键盘事件对象 Keyboardevent
                <pre><code class="language-js line-numbers">  div.addEventListener("mouseleave",function(e){
    e.clientX                   // 返回鼠标相对于浏览器窗口可视区的X坐标
    e.clientY                   // 返回鼠标相对于浏览器窗口可视区的Y坐标
    e.pageX                     // 返回鼠标相对于文档页面的X坐标IE9+支持
    e.pageY                     // 返回鼠标相对于文档页面的Y坐标IE9+支持
    e.screenX                   // 返回鼠标相对于电脑屏幕的X坐标
    e.screenY                   // 返回鼠标相对于电脑屏幕的Y坐标
  })

  // e.clientX 和 e.clientY 不管网页高多少，只会在当前可视区窗口返回坐标XY值，不会返回取决于高度的XY值
  // e.pageX 和 e.pageY 才是获取整个页面文档高度的X Y值，与e.client 的区别 ，实际开发常用

  document.addEventListener('click', function(e) {
    console.log(e.screenX);     // 兼容大部分
    console.log(e.screenY);     // 兼容大部分
  })

  // IE8 不支持事件对象event ,所以要在前面加上一个 window，因为IE8以下是将事件对象作为window对象的属性保存的
  // 兼容性解决方法：
  document.addEventListener('click', function(e) {
      // 第一个写法
      if (!event) { //兼容IE 8 以下
          event = window.event;
      }
      // 第二个写法
      event = event || window.event;

      console.log(e.screenX);
      console.log(e.screenY);
  })</code></pre>
              </li>
            </ul>
          </li>
          <li>
            鼠标移动
            <ul>
              <li>鼠标不断的移动，使用鼠标移动事件：mousemove</li>
              <li>在页面中移动，给document注册事件</li>
              <li>图片要移动距离，而且不占位置，我们使用绝对定位即可</li>
              <li>
                核心原理：每次鼠标移动，我们都会获得最新的鼠标坐标，把这个x和y坐标做为图片的top和left值就可以移动图片
              </li>
            </ul>
            <pre><code class="language-html line-numbers">
  img {position: absolute; }

  &lt;img src="images/open.png" alt=""&gt;
  &lt;script&gt;
      var img = document.querySelector('img');
      document.addEventListener('mousemove', function(e) {
          var x = e.pageX;
          var y = e.pageY;
          img.style.left = x - 20 + 'px'; //因为坐标带像素，不要忘记拼接字符串
          img.style.top = y - 20 + 'px';//减宽高的一半是为了定位到鼠标中心
      })
  &lt;/script&gt;</code></pre>
          </li>
        </ul>
        <p>键盘事件</p>
        <ul>
          <li>
            代码
            <pre><code class="language-js line-numbers">  div.onkeyup = function(){};          /* 某个按键被松开时触发 */
  div.onkeydown = function(){};        /* 某个按键被按下时触发 */
  div.onkeypress = function(){};       /* 被按下触发，但是不识别快捷键的  ctrl  shift 等 */

  // 执行顺序 ：   onkeydown      &gt;     onkeypress     &gt;     onkeyup
  document.addEventListener('keyup', function() { //在标准监听事件中，记住不用加 on，非标需要加on
      console.log('1');
  })</code></pre>
          </li>
          <li>
            键盘事件对象
            <pre><code class="language-js line-numbers">  // 键盘事件对象中的keyCode 属性可以得到相应键的ASCII码值
  document.addEventListener('keyup', function(e) { //记住不用加 on
      // 注意：keyup 和keydown 是不区分大小写
      console.log(e.keyCode);
      // 如果要区分大小写，使用 keypress
  })

  /*
  注意： onkeydown  和onkeyup  不区分字母大小写，onkeypress区分字母大小写。
        在我们实际开发中，我们更多的使用keydown 和 keyup，它能识别所有的键（包括功能键）
        Keypress不识别功能键，但是keyCode属性能区分大小写，返回不同的ASCII值 */</code></pre>
          </li>
          <li>
            案例
            <pre><code class="language-html line-numbers">  &lt;!-- 案例1 --&gt;
  &lt;style&gt;
    .box { width: 100px;height: 100px;background: crimson;position: absolute;top: 0;left: 0;}
  &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;div&gt; class="box"&gt;&lt;/div&gt;
  &lt;script&gt;
      var box = document.querySelector('.box');
      var speed = 10;
      document.addEventListener('keydown', function(e) {
           // 当用户按下了ctrl 以后，数度加快
          if(e.ctrlKey){
              speed = 50;
          }
          switch (e.keyCode) {
              case 37:
                  box.style.left = box.offsetLeft - speed + 'px';
                  break;
              case 38:
                  box.style.top = box.offsetTop - speed + 'px';
                  break;
              case 39:
                  box.style.left = box.offsetLeft + speed + 'px';
                  break;
              case 40:
                  box.style.top = box.offsetTop + speed + 'px';
                  break;
          };
      });
  &lt;/script&gt;

  &lt;!-- 案例仿京东按键 --&gt;
  /* 核心思路
      检测用户是否按下了s键，如果按下s键，就把光标定位到搜索框里面
      使用键盘事件对象里面的keyCode判断用户按下的是否是s键
      搜索框获得焦点：使用js里面的focus（）方法 */

  &lt;input type="text"&gt;
  &lt;script&gt;
      var input = document.querySelector('input');
      document.addEventListener('keyup', function(e) { // 不能用keydown，因为按下会一直触发，把s输入到文本框里
          if (e.keyCode === 83) {
              input.focus();                           // focus() 是获得焦点，重新获得焦点
          }
      })
  &lt;/script&gt;

  &lt;!-- 仿京东快递单号查询 --&gt;
  /* 核心思路
      快递单号输入内容时，上面的大号字体盒子（con）显示（这里面的字号更大）
      表单检测用户输入：给表单添加键盘事件
      同时把快递单号里面的值（value）获取过来赋值给con盒子（innerText）做为内容
      如果快递单号里面内容为空，则隐藏大号字体盒子（con）盒子
      注意：keydown和keypress在文本框里面的特点：他们两个事件触发的时候，文字还没有落入文本框中。
      keyup 事件触发的时候，文字已经落入文本框里面了
      当我们失去焦点，就隐藏这个con盒子
      当我们获得焦点，并且文本框内容不为空，就显示这个con盒子 */

  &lt;div class="search"&gt;
    &lt;div&gt; class="con"&gt;123&lt;/div&gt;
    &lt;input type="text" placeholder="请输入您的快递单号" class="jd"&gt;
  &lt;/div&gt;
  &lt;script&gt;
      // 快递单号输入内容时， 上面的大号字体盒子（con）显示（这里面的字号更大）
      // 表单检测用户输入： 给表单添加键盘事件
      // 同时把快递单号里面的值（value）获取过来赋值给 con盒子（innerText）做为内容
      // 如果快递单号里面内容为空，则隐藏大号字体盒子(con)盒子
      var con = document.querySelector('.con');
      var jd_input = document.querySelector('.jd');
      jd_input.addEventListener('keyup', function() {
              // console.log('输入内容啦');
              if (this.value == '') {
                  con.style.display = 'none';
              } else {
                  con.style.display = 'block';
                  con.innerText = this.value;
              }
          })
          // 当我们失去焦点，就隐藏这个con盒子
      jd_input.addEventListener('blur', function() {
              con.style.display = 'none';
          })
          // 当我们获得焦点，就显示这个con盒子
      jd_input.addEventListener('focus', function() {
          if (this.value !== '') {               //判断条件，如果值不为空，才显示
              con.style.display = 'block';
          }
      })
  &lt;/script&gt;</code></pre>
          </li>
        </ul>
      </el-card>
      <el-card id="part16" shadow="hover">
        <h2>BOM</h2>
        <p>概述</p>
        <ul>
          <li>
            BOM（Browser Object
            Model）即浏览器对象模型，它提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是window。BOM由一系列相关的对象构成，并且每个对象都提供了很多方法与属性。
            BOM缺乏标准，JavaScript语法的标准化组织是ECMA，DOM的标准化组织是W3C，BOM最初是Netscape浏览器标准的一部分。
            <pre><code class="language-js line-numbers">  DOM                                        BOM
    ·文档对象模型                                ·浏览器对象模型
    ·DOM就是把[文档]当做一个[对象]来看待           ·把[浏览器]当做一个[对象」来看待
    ·DOM的顶级对象是document                     ·BOM的顶级对象是window
    ·DOM主要学习的是操作页面元素                  ·BOM学习的是浏览器窗口交互的一些对象
    ·DOM是W3C标准规范                            ·BOM是浏览器厂商在各自浏览器上定义的，兼容性较差

  BOM 比 DOM 更大，它包含DOM。

                                  window
      -------------------------------|----------------------------
      |            |                 |            |              |
  document       location        navigation     screen       history</code></pre>
          </li>
          <li>
            window对象是浏览器的顶级对象，它具有双重角色。
            <ul>
              <li>它是JS访问浏览器窗口的一个接口。</li>
              <li>
                是一个全局对象。定义在全局作用域中的变量、函数都会变成window对象的属性和方法。
                在调用的时候可以省略window，前面学习的对话框都属于window对象方法，如alert（）、prompt（）等。
              </li>
            </ul>
          </li>
          <li>注意：window下的一个特殊属性window.name</li>
        </ul>
        <p>window对象常见事件</p>
        <ul>
          <li>
            窗口加载事件1
            <ul>
              <li>
                注意1:
                有了window.onload就可以把JS代码写到页面元素的上方，因为onload是等页面内容全部加载完毕，再去执行处理函数。
              </li>
              <li>
                注意2:
                window.onload传统注册事件方式只能写一次，如果有多个，会以最后一个window.onload为准。
                如果使用addEventListener则没有限制。
              </li>
            </ul>
            <pre><code class="language-js line-numbers">  window.onload=function（）{}   或者   window.addEventListener（"load"，function（）{}）；

  // window.onload是窗口（页面）加载事件，当文档内容完全加载完成才会触发该事件（包括图像、脚本文件、CSS文件等，就调用的处理函数。</code></pre>
          </li>
          <li>
            窗口加载事件2
            <pre><code class="language-js line-numbers">  document.addEventListener('DOMContentLoaded'，function(){})</code></pre>
          </li>
          <li>
            DOMContentLoaded
            事件触发时，仅当DOM加载完成，不包括样式表，图片，flash等等。
          </li>
          <li>ie 9 以上才支持</li>
          <li>
            如果页面的图片很多的话，从用户访问到onload触发可能需要较长的时间，交互效果就不能实现，
            必然影响用户的体验，此时用DOMContentLoaded事件比较合适。
          </li>
          <li>总结</li>
          <li>load等页面内容全部加载完毕，包含页面dom元素图片flash css等等</li>
          <li>
            DOMContentLoaded 是DOM加载完毕，不包含图片flash
            css等就可以执行,加载速度比 load 更快一些
          </li>
          <li>
            调整窗口大小事件
            <ul>
              <li>注意1：只要窗口大小发生像素变化，就会触发这个事件。</li>
              <li>
                注意2：我们经常利用这个事件完成响应式布局。window.innerWidth当前屏幕的宽度
              </li>
            </ul>
            <pre><code class="language-js line-numbers">  window.onresize=function(){};
  window.addEventListener("resize",function(){});

  // window.onresize是调整窗口大小加载事件，当触发时就调用的处理函数。 </code></pre>
          </li>
          <li>
            定时器(window对象给我们提供了2个非常好用的方法-定时器。)
            <ul>
              <li>
                setTimeout ()
                <ul>
                  <li>
                    window.setTimeout（调用函数（或者函数名），[延迟的毫秒数]）；
                  </li>
                  <li>
                    setTimeout()
                    方法用于设置一个定时器，该定时器在定时器到期后执行调用函数。
                  </li>
                  <li>setTimeout() 这个调用函数我们也称为 回调函数callback</li>
                  <li>
                    因为：普通函数是按照代码顺序直接调用。而这个函数，需要等待时间，
                    时间到了才去调用这个函数，因此称为回调函数。
                  </li>
                  <li>
                    简单理解：回调，就是回头调用的意思。上一件事干完，再回头再调用这个函数。以前我们讲的element.onclick=function）{}
                    或者element.addEventListener（"click"，fn）；里面的函数也是回调函数。
                  </li>
                </ul>
                <pre><code class="language-js line-numbers">  // window 在调用的时候可以省略     1秒 = 1000毫秒
  // 单位必须是毫秒，如果省略，默认是0   立马执行
  // 调用函数可以直接写函数，还可以写函数名

  function callback() {console.log('定时器');}
  // 如果多个需要多个定时效果，给定时器赋值一个标识符
  var time1 = setTimeout(callback, 3000);
  var time2 = setTimeout(callback, 5000);

  // 案例：五秒自动关闭广告
  // 1、核心思路：5秒之后，就把这个广告隐藏起来
  // 2、用定时器setTimeout
  &lt;div&gt;广告&lt;/div&gt;
  &lt;script&gt;
      var div = document.querySelector('div');
      setTimeout(function() {
          div.style.display = 'none';
      }, 5000);
  &lt;/script&gt;</code></pre>
              </li>
              <li>
                setInterval()
                <ul>
                  <li>window.setInterval（回调函数，[间隔的毫秒数]）；</li>
                  <li>
                    setInterval()方法重复调用一个函数，每隔这个时间，就去调用一次回调函数。
                  </li>
                  <li>
                    区别1：setTimeout () 和 setInterval ()
                    参数类型、写法、作用都是一样的
                  </li>
                  <li>
                    区别2：setTimeout延时时间到了，就去调用这个回调函数，只调用一次就结束了这个定时器
                  </li>
                  <li>
                    区别3：setInterval每隔这个延时间，就去调用这个回调函数，会调用很多次，重复调用这个函数
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            停止定时器
            <ul>
              <li>
                在做轮播图的时候，同一个元素时，开启定时器之前先关闭上一个定时器，跟节流阀的作用相同，不同元素就需要使用节流阀
              </li>
              <li>window.clearTimeout(timeoutID)</li>
              <li>
                clearTimeout（）方法取消了先前通过调用
                setTimeout（）建立的定时器。
              </li>
              <li>
                timeoutID） 里面参数跟的就是定时器的标识符
                <pre><code class="language-html line-numbers">  &lt;div&gt;广告&lt;/div&gt;
  &lt;button&gt;停止定时器&lt;/button&gt;
  &lt;script&gt;
      var div = document.querySelector('div');
      var btn = document.querySelector('button');
      var time1 = setTimeout(function() {
          div.style.display = 'none';
      }, 5000);
      btn.addEventListener('click', function() {
          clearTimeout(time1);
      });
  &lt;/script&gt;</code></pre>
              </li>
              <li>
                倒计时案例
                <ul>
                  <li>
                    这个倒计时是不断变化的，因此需要定时器来自动变化（setInterval）
                  </li>
                  <li>三个黑色盒子里面分别存放时分秒</li>
                  <li>三个黑色盒子利用innerHTML放入计算的小时分钟秒数</li>
                  <li>第一次执行也是间隔毫秒数，因此刚刷新页面会有空白</li>
                  <li>
                    最好采取封装函数的方式，这样可以先调用一次这个函数，防止刚开始刷新页面有空白问题
                  </li>
                </ul>
                <pre><code class="language-html line-numbers">  &lt;div&gt;
    &lt;span class="hour"&gt;1&lt;/span&gt;
    &lt;span class="minute"&gt; 2&lt;/span&gt;
    &lt;span class="second"&gt;3&lt;/span&gt;
  &lt;/div&gt;
  &lt;script&gt;
    var hour = document.querySelector('.hour');        // 小时的盒子
    var minute = document.querySelector('.minute');    // 分钟的盒子
    var second = document.querySelector('.second');    // 秒数的盒子
    var inputTime = +new Date('2021-7-3 11:30:00');    // 如果有值，就是获取填入数值到1970年的总毫秒数
    countDown();                                       // 先调用一次这个函数，防止第一次刷新页面有空白
    // 开启定时器
    setInterval(countDown, 1000);
    function countDown() {
        var dayTime = +new Date();                     // 如果值为空，那么会获取当前系统时间到1970年的总毫秒数
        var total = (inputTime - dayTime) / 1000;      // 现在total就是填入值 - 当前值 / 1000，1秒 = 1000毫秒。取到剩余时间
        // var d = parseInt(total / 60 / 60 / 24);     // 计算天数
        // d = d &lt; 10 ? '0' + d : d; //小于10自动补0
        var h = parseInt(total / 60 / 60 % 24);        // 计算小时
        h = h &lt; 10 ? '0' + h : h;
        hour.innerHTML = h;                            // 把剩余的小时数  赋值给 hour盒子
        var m = parseInt(total / 60 % 60);             // 计算分数
        m = m &lt; 10 ? '0' + m : m;
        minute.innerHTML = m;
        var s = parseInt(total % 60);                  // 计算当前秒数
        s = s &lt; 10 ? '0' + s : s;
        second.innerHTML = s;
    }
  &lt;/script&gt;</code></pre>
              </li>
            </ul>
          </li>
          <li>
            开启、停止定时器
            <pre><code class="language-html line-numbers">  &lt;button&gt; class="open"&gt;开启&lt;/button&gt;
  &lt;button&gt; class="close"&gt;停止&lt;/button&gt;
  &lt;script&gt;
      var open = document.querySelector('.open');
      var close = document.querySelector('.close');
      var timer = null;                             // 设置一个全局变量，null是一个空对象,全局变量可被调用
                                                    // 不要赋值，因为一赋值很容易出错， undefined
      var time = open.addEventListener('click', function() {
          timer = setInterval(function() {          // 将函数赋值给timer,然后传给全局变量
              console.log('开始');
          }, 1000);
      })
      close.addEventListener('click', function() {
          clearInterval(timer);
      })
  &lt;/script&gt;</code></pre>
          </li>
          <li>
            案例：短信定时器，60秒后才能发送
            <ul>
              <li>按钮点击之后，会禁用disabled为true</li>
              <li>
                同时按钮里面的内容会变化，注意button里面的内容通过innerHTML修改
              </li>
              <li>里面秒数是有变化的，因此需要用到定时器</li>
              <li>定义一个变量，在定时器里面，不断递减</li>
              <li>
                如果变量为0说明到了时间，我们需要停止定时器，并且复原按钮初始状态。
              </li>
            </ul>
            <pre><code class="language-html line-numbers">  手机号码：&lt;input type="number"&gt;
  &lt;button&gt;发送&lt;/button&gt;
  &lt;script&gt;
      var btn = document.querySelector('button');
      var time = 3;                               // 定义一个全局变量，剩余多少秒的变量，递减
      btn.addEventListener('click', function() {
          btn.disabled = true;                    // 点击后禁用按钮，进入倒计时
          var dingShi = setInterval(function() {  // 起一个定时器名
              if (time == 0) {                    // 判断，如果time等于0，那么清除定时器，解开按钮
                  clearInterval(dingShi);
                  btn.disabled = false;
                  btn.innerHTML = '发送';          // 记得修改解开后按钮的名称
                  time = 3;                       // 不能让时间一直 -- ，要让时间重新开始计算
              } else {                            // 如果不等于0，则倒计时
                  btn.innerHTML = '剩余' + time + '秒'; //改发送是通过innerHTML。不是value值
                  time--;                         // 递减
              }
          }, 1000);
      })
  &lt;/script&gt;

  // 根据取模的规律，当除数小于被除数，取模就是除数自己
  // index = index % img .length;   ===     if(index &gt;= img.length){ index = 0 }</code></pre>
          </li>
        </ul>
        <p>this 指向问题</p>
        <ul>
          <li>
            this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁，
            一般情况下this的最终指向的是那个调用它的对象.
          </li>
          <li>
            全局作用域或者普通函数中this指向全局对象window（注意定时器里面的this指向window）
            <pre><code class="language-js line-numbers">  console.log(this);             // 指向 window,顶级对象
  function fn(){
      console.log(this);
  }
  fn();                          // 这里也是指向window顶级对象，只是省略了  window .fn();</code></pre>
          </li>
          <li>
            方法调用中，谁调用this指向谁
            <pre><code class="language-js line-numbers">  var o = {
    sayHi: function() {
        console.log(this);       // this 指向的是o调用者 这个对象
    }
  }
  o.sayHi();</code></pre>
          </li>
          <li>
            构造函数中this指向构造函数的实例
            <ul>
              <li>当以函数的形式调用时，this 是window对象</li>
              <li>当以方法的形式调用时，谁调用方法this ，就是谁</li>
              <li>当以构造函数的形式调用时，this就是新创建的那个对象</li>
            </ul>
          </li>
        </ul>
        <p>JS 的执行队列</p>
        <ul>
          <li>
            JavaScript语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。这是因为Javascript这门脚本语言诞生的使命所致
            <ul>
              <li>
                JavaScript是为处理页面中用户的交互，以及操作DOM而诞生的。比如我们对某个DOM元素进行添加和删除操作，不能同时进行。
              </li>
              <li>应该先进行添加，之后再删除。</li>
            </ul>
          </li>
          <li>
            单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。这样所导致的问题是：如果JS执行的时间过长，这样
            就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。
          </li>
          <li>
            为了解决这个问题，利用多核CPU的计算能力，HTML5提出Web
            Worker标准，允许JavaScript脚本创建多个线程。于是JS中出现了同步和异步。
            <pre><code class="language-js line-numbers">  /*
  同步：
      前一个任务结束后再执行后一个任务，程序的执行顺序与任务的排列顺序是一致的、同步的。比如做饭的同步做法：
        我们要烧水煮饭，等水开了（10分钟之后），再去切菜，炒菜。

  异步：
      你在做一件事情时，因为这件事情会花费很长时间，在做这件事的同时，你还可以去处理其他事情。比如做饭的异步做法：
        我们在烧水的同时，利用这10分钟，去切菜，炒菜。

  同步任务：
      同步任务都在主线程上执行，形成一个执行栈。

  异步任务：
      JS的异步是通过回调函数实现的。
      一般而言，异步任务有以下三种类型
          1. 普通事件，如click、resize等
          2. 资源加载，如load、error等
          3. 定时器，包括setInterval、setTimeout等
      异步任务相关回调函数添加到任务队列中（任务队列也称为消息队列）。
      他们的本质区别：这条流水线上各个流程的执行顺序不同。  */
              </code></pre>
          </li>
          <li>
            执行机制：
            <ul>
              <li>先执行 执行栈中的同步任务。</li>
              <li>异步任务（回调函数）放入任务队列中。</li>
              <li>
                一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取任务队列中的异步任务，于是被读取的异步任务结束等待状态，进入执行钱，开始执行。
              </li>
            </ul>
          </li>
          <li>
            理解：把执行栈看做为主车道，任务队列看做为应急车道，当有坏车时（回调函数），开往应急车道，修好时再回到主车道最后一台
            车的后面，这样执行不影响主车道的畅通
            <pre><code class="language-js line-numbers">  console.log(1);
  setInterval(function(){
      console.log(3);
  },1000)
  console.log(2);  // 以上执行结果根据最新的H5 web  worker标准执行结果  1 2 3，实现异步效果
  // 无需等待

  console.log(1);
  setInterval(function(){
      console.log(3);
  },0)
  console.log(2);           // 1 2 3
  // 疑问：为什么不会是1 3 2
  // 因为 3 里面有回调函数，不属于同步任务，所以会后执行</code></pre>
          </li>
        </ul>
        <p>location 对象</p>
        <ul>
          <li>
            window对象给我们提供了一个location属性用于获取或设置窗体的URL，并且可以用于解析URL。因为这个属性返回的是一个对象，
            所以我们将这个属性也称为location对象。
          </li>
          <li>
            统一资源定位符（Uniform Resource
            Locator，URL）是互联网上标准资源的地址。互联网上的每个文件都有一个唯一的URL，它
            包含的信息指出文件的位置以及浏器应该怎么处理它。
            <pre><code class="language-js line-numbers">  URL的一般语法格式为：
  protocol：//host[：port]/path/[？query]#fragment http://www.itcast.cn/index.html？name=andysage=18#1ink

  /*
    组成
      protocol                    通信协议常用的http、ftp、WebSocket、TCP等
      host                        主机（域名）www.baidu.com
      port                        端口号可选，省略时使用方案的默认端口如http的默认端口为80
      path                        路径由零或多个”符号隔开的字符串，一般用来表示主机上的一个目录或文件地址
      query                       参数以键值对的形式，通过&符号分隔开来
      fragment                    片段#后面内容常见于链接锚点

    location对象的属性
      location.href               获取或者设置整个URL
      location.host               返回主机（域名）www.baidu.com
      location.port               返回端口号如果未写返回空字符串
      location.pathname           返回路径
      location.search             返回参数
      location.hash               返回片段#后面内容常见于链接锚点
  */</code></pre>
          </li>
          <li>
            重点记住location.href 和 location.hash
            <ul>
              <li>
                代码
                <pre><code class="language-html line-numbers">  &lt;button&gt;点击&lt;/button&gt;
  &lt;script&gt;
      var btn = document.querySelector('button');
      btn.addEventListener('click', function() {
          console.log(window.location.href);             // 点击按钮得到当前的url
          location.href = 'https://www.baidu.com';       // 点击后跳转新的链接
      })
  &lt;/script&gt;

  //  在主网页中分发到对应的页面中 test方法来检测
  window.location.href = /Android|webOS|iPhone|iPad|BlackBeery/i.test(navigator.userAgent) ? "phone.html" : "pc.html"</code></pre>
              </li>
              <li>
                案例：五秒钟跳转页面
                <pre><code class="language-html line-numbers">  // 利用定时器做倒计时效果
  // 时间到了，就跳转页面。使用 location.href
  &lt;div&gt;&lt;/div&gt;
  &lt;script&gt;
      var timer = 5;
      var div = document.querySelector('div');
      time1();                             // 点调用一次，防止刷新后页面空白
      setInterval(time1, 1000)             // 创建一个定时器，调用函数
      function time1() {                   // 封装一个跳转函数
          if (timer == 0) {
              location.href = 'https://www.baidu.com';
          } else {
              div.innerHTML = '还有' + timer + '秒跳转';
              timer--;
          }
      }
  &lt;/script&gt;</code></pre>
              </li>
            </ul>
          </li>
          <li>
            location 对象的方法
            <pre><code class="language-js line-numbers">  location.assign()                          /* 跟href一样，可以跳转页面（也称为重定向页面） */
  location.replace()                         /* 替换当前页面，因为不记录历史，所以不能后退页面 */
  location.reload()                          /* 重新加载页面，相当于刷新按钮或者f5如果参数为true 强制刷新ctrl+f5 */
  location.assign('https://www.baidu.com')   /* 有记录浏览历史，所以可以实现后退功能 */</code></pre>
          </li>
          <li>
            navigator 对象（了解就行，一般是服务端来做的）
            <pre><code class="language-js line-numbers">  /* navigator对象包含有关浏览器的信息，它有很多属性
  我们最常用的是userAgent, 该属性可以返回由客户机发送服务器的 user-agent 头部的值。
  下面前端代码可以判断用户那个终端打开页面，实现跳转 */

  if ((navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile
      |MOOBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    ))) {
    window.location.href = "phone.html";        // 手机
  } else {
    window.location.href = "index.html";        // 电脑
  }</code></pre>
          </li>
        </ul>
        <p>history 对象</p>
        <ul>
          <li>
            window对象给我们提供了一个history对象，与浏览器历史记录进行交互。该对象包含用户（在浏览器窗口中）
            <pre><code class="language-js line-numbers">  history.forward ();     // 前进功能
  history.back();         // 可以后退功能
  history.go(1);          // 前进后退功能参数如果是1前进1个页面如果是-1后退1个页面
                          // history对象一般在实际开发中比较少用，但是会在一些OA办公系统中见到。 </code></pre>
          </li>
        </ul>
      </el-card>
      <el-card id="part17" shadow="hover">
        <h2>网页效果</h2>
        <p>网页特效 （PC端网页特效 元素偏移量offset系列）</p>
        <ul>
          <li>
            offset概述：
            offset翻译过来就是偏移量，我们使用offset系列相关属性可以动态的得到该元素的位置（偏移）、大小等。
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
        </ul>
        <p>元素可视区 client</p>
        <ul>
          <li>
            client翻译过来就是客户端，我们使用client系列的相关属性来获取元素可视区的相关信息。通过client系列的相关属性
            可以动态的得到该元素的边框大小、元素小等。
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
          <li>
            立即执行函数 ( function () {} )() 或者 ( function() {} () )
            //第二个小括号可以看做调用函数，可以传值
          </li>
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
            <ul>
              <li>a标签的超链接</li>
              <li>F5或者刷新按钮（强制新）</li>
              <li>前进后退按钮</li>
            </ul>
          </li>
          <li>
            但是火狐中，有个特点，有个往返缓存”，这个缓存中不仅保存着页面数据，还保存了DOM和JavaScript的状态；
            实际上是将整个页面都保存在了内存里。 所以此时后退按钮不能刷新页面。
          </li>
          <li>
            此时可以使用pageshow事件来触发。，这个事件在页面显示时间触发，无论页面是否来自缓存。在重新加载页面中，
            pageshow会在load事件触发后触发；根据事件对象中的persisted来判断是否是缓存中的页面触发的pageshow事件，
            注意这个事件给window添加
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
            scroll
            翻译过来就是滚动的，我们使用scroll系列的相关属性可以动态的得到该元素的大小、滚动距离等。
            <pre><code class="language-js line-numbers">  div.scrollTop            /* 返回被卷去的上侧距离，返回数值不带单位 */
  div.scrollLeft           /* 返回被卷去的左侧距离，返回数值不带单位 */
  div.scrollWidth          /* 返回自身实际的宽度，不含边框，返回数值不带单位 */
  div.scrollHeight         /* 返回自身实际的高度，不含边框，返回数值不带单位 */</code></pre>
          </li>
          <li>
            案例：仿淘宝固定右侧侧边栏 330集
            <ul>
              <li>原先侧边栏是绝对定位</li>
              <li>当页面滚动到一定位置，侧边栏改为固定定位</li>
              <li>页面继续滚动，会让返回顶部显示出来</li>
              <li>
                需要用到页面滚动事件scroll 因为是页面滚动，所以事件源是document
              </li>
              <li>滚动到某个位置，就是判断页面被卷去的上部值。</li>
              <li>
                页面被卷去的头部：可以通过window.pageYOffset获得如果是被卷去的左侧
                window.pageXOffset
              </li>
              <li>
                注意，元素被卷去的头部是element.scrollTop，如果是页面被卷去的头部则是window.pageYoffset
              </li>
            </ul>
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
            <ul>
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
              <li>
                scrollHeight - scrollTop == clientHeight //
                满足这个条件，说明垂直滚动条已经拉到底了
              </li>
              <li>滚动事件 onscroll // 会在滚动条滚动的时候触发</li>
              <li>
                Chrome认为浏览器的滚动条属于body的，可以通过
                document.body.scrollTop来获取
              </li>
              <li>
                而火狐等浏览器认为浏览器的滚动条属于html的，可以通过document.documentElement.scrollTop
                来获取
              </li>
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
            </ul>
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
            <ul>
              <li>offset 系列经常用于获得元素位置 offsetLeft offsetTop</li>
              <li>client 经常用于获取元素大小 clientWidth clientHeight</li>
              <li>scroll 经常用于获取滚动距离 scrollTop scrollLeft</li>
            </ul>
          </li>
        </ul>
        <p>动画函数封装1</p>
        <ul>
          <li>动画实现核心原理：通过定时器setInterval（）不断移动盒子位置</li>
          <li>
            实现步骤：
            <ul>
              <li>获得盒子当前位置</li>
              <li>让盒子在当前位置加上1个移动距离</li>
              <li>利用定时器不断重复这个操作</li>
              <li>加一个结束定时器的条件</li>
              <li>注意：此元素需要添加定位，才能使用 element.style.left</li>
              <li>注意：停止动画，本质就是停止定时器，用clearInterval</li>
            </ul>
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
            <ul>
              <li>
                如果多个元素都使用这个动画函数，每次都要var声明定时器。我们可以给不同的元素使用不同的定时器
                （自己专门用自己的定时器）。
              </li>
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
            </ul>
          </li>
          <li>
            缓动动画：
            缓动动画就是让元素运动速度有所变化，最常见的是让速度慢慢停下来
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
            <ul>
              <li>
                因为以后经常使用这个动画函数，可以单独封装到一个 js
                文件里面，使用的时候引用这个 js 文件即可。
              </li>
              <li>新建一个 animate.js</li>
            </ul>
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
        <ul>
          <li>
            轮播图也称为焦点图，是网页中比较常见的网页特效。盒子已经固定大小了，如果此时加浮动，
            会没有效果，需要手动修改ul 的宽度 %
          </li>
          <li>
            框架
            <ul>
              <li>
                大盒子装着轮播图，里面有左箭头和右箭头，底下定位三个小圆点
              </li>
              <li>
                放个ul ，ul 下装了三个li ，ul宽度需要超过能装下li
                的宽度，才能浮动起来
              </li>
            </ul>
          </li>
          <li>
            需求
            <ul>
              <li>鼠标放上 才会显示左右箭头，鼠标离开，影藏左右箭头</li>
              <li>
                鼠标点击，切换（移动）图片
                ，小圆点也要进行切换，并且点击小圆点可以实现切换效果
              </li>
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
              <li>
                所以首先先得到ul 里面图片的张数（图片放入li 里面，所以就是 li
                的个数）
              </li>
              <li>利用循环动态生成小圆圈（这个小圆圈要放入ol里面）</li>
              <li>创建节点 createElement（' li '）</li>
              <li>插入节点ol.appendChild（ li ）</li>
              <li>第一个小圆圈需要添加current类</li>
              <li>小圆圈的排他思想</li>
              <li>点击当前小圆圈，就添加current类</li>
              <li>其余的小圆圈就移除这个current类</li>
              <li>点击小圆圈滚动图片</li>
              <li>
                此时用到animate动画函数，将s文件引入（注意，因为index.js依赖animate.js所以，animatejs要写到index.js上面）
              </li>
              <li>使用动画函数的前提，该元素必须有定位</li>
              <li>注意是u山移动而不是小li</li>
              <li>
                滚动图片的核心算法：点击某个小圆圈，就让图片滚动 小圆圈的索引号
                x 图片的宽度 = ul 移动负值距离
              </li>
              <li>
                此时需要知道小圆圈的索引号，我们可以在生成小圆圈的时候，给它设置一个自定义属性，点击的时候获取这个自定义属
              </li>
              <li>点击右侧按钮一次，就让图片滚动一张。</li>
              <li>
                声明一个变量num，点击一次，自增1，让这个变量乘以图片宽度，就是ul的滚动距离。
              </li>
              <li>
                因为li 加了定位，所以脱离文档流，左右箭头层级需要提高（z-index）
              </li>
              <li>图片无缝滚动原理</li>
              <li>把ul第一个li复制一份，放到ul的最后面</li>
              <li>
                当图片滚动到克隆的最后一张图片时，让u山快速的、不做动画的跳到最左侧：left为0
              </li>
              <li>同时num赋值为0，可以从新开始滚动图片了</li>
              <li>代码进行 克隆第一张图片</li>
              <li>
                克隆ul第一个li
                cloneNode（）加true深克隆复制里面的子节点false浅克隆
              </li>
              <li>添加到u山最后面appendChild</li>
              <li>点击右侧按钮，小圆圈跟随变化</li>
              <li>
                最简单的做法是再声明一个变量circle，每次点击自增1，注意，左侧按钮也需要这个变量，因此要声明全局变量。
              </li>
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
        </ul>
        <p>节流阀</p>
        <ul>
          <li>防止轮播图按钮连续点击造成播放过快</li>
          <li>
            节流阀目的：当上一个函数动画内容执行完毕，再去执行下一个函数动画，让事件无法连续触发。
          </li>
          <li>
            核心实现思路：利用回调函数，添加一个变量来控制，锁住函数和解锁函数。
          </li>
          <li>
            开始设置一个变量var flag=true；
            <ul>
              <li>if（flag）{flag=false；do something } 关闭水龙头</li>
              <li>利用回调函数动画执行完毕，flag=true 打开水龙头</li>
            </ul>
          </li>
          <li>
            返回顶部
            <ul>
              <li>Window. scroll (x , y) 要到达网页的坐标， X Y的值不跟单位</li>
              <li>带有动画的返回顶部</li>
              <li>此时可以继续使用我们封装的动画函数</li>
              <li>
                只需要把所有的left相关的值改为跟页面垂直滚动距离相关就可以了
              </li>
              <li>
                页面滚动了多少，可以通过window.pagerOffset得到 ，而不是
                offsetTop
              </li>
              <li>最后是页面滚动，使用window.scroll（x .y）</li>
            </ul>
          </li>
          <li>
            筋斗云案例
            <ul>
              <li>* 鼠标经过某个li，筋斗云跟这到当前 li 位置</li>
              <li>* 鼠标离开这个li，筋斗云复原为原来的位置</li>
              <li>* 鼠标点击了某个li，筋斗云就会留在点击这个 li 的位置</li>
              <li>利用动画函数做动画效果</li>
              <li>原先筋斗云的起始位置是0</li>
              <li>鼠标经过某个i，把当前i的offsetLeft位置做为目标值即可</li>
              <li>鼠标离开某个i，就把目标值设为0</li>
            </ul>
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
          <li>
            移动端浏览器兼容性较好，我们不需要考虑以前JS的兼容性问题，可以放心的使用原生JS书写效果，
            但是移动端也有自己独特的地方。比如触屏事件touch（也称触摸事件），Android和IOS都有。
          </li>
          <li>
            touch对象代表一个触摸点。触摸点可能是一根手指，也可能是一根触摸笔。角触屏事件可响应用户手指
            （或角触控笔）对屏幕或者触控板操作。
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
            <ul>
              <li>touchstart、touchmove、touchend可以实现拖动元素</li>
              <li>
                但是拖动元素需要当前手指的坐标值我们可以使用
                targetTouches[0]里面的pageX和pageY
              </li>
              <li>
                移动端拖动的原理：手指移动中，计算出手指移动的距离。然后用盒子原来的位置+手指移动的距离
              </li>
              <li>手指移动的距离：手指滑动中的位置减去手指刚开始触摸的位置</li>
            </ul>
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
      </el-card>
      <el-card id="part18" shadow="hover">
        <h2>其他拓展</h2>
        <p>classList 属性</p>
        <ul>
          <li>
            classList属性是HTML5新增的一个属性，返回元素的类名。但是ie10以上版本支持。
          </li>
          <li>
            该属性用于在元素中添加，移除及切换CSS类。有以下方法添加类：
            注意，类名不用加点 .
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
            <ul>
              <li>可以自动播放图片</li>
              <li>手指可以拖动播放轮播图</li>
              <li>
                结构： 和pc
                端不一样，因为左拉会显示最后一张也就是第三张图片所以需要克隆两张，
                1 和 3，3放在最前面，1放在最后面
              </li>
            </ul>
          </li>
          <li>
            注意轮播图中，最左边图片3如果不走自身宽度的负值，那么会直接显示第三张的图片，所以要先走自身的宽度，
            注意是负值，这样一打开才是正确的图1
          </li>
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
            <ul>
              <li>自动播放功能</li>
              <li>开启定时器</li>
              <li>移动端移动，可以使用translate移动</li>
              <li>想要图片优雅的移动，请添加过渡效果</li>
              <li>自动播放功能-无缝滚动</li>
              <li>
                注意，我们判断条件是要等到图片滚动完毕再去判断，就是过渡完成后判断
              </li>
              <li>此时需要添加检测过渡完成事件 transitionend</li>
              <li>
                判断条件：如果索引号等于3说明走到最后一张图片，此时索引号要复原为0
              </li>
              <li>此时图片，去掉过渡效果，然后移动</li>
              <li>如果索引号小于0，说明是倒着走，索引号等于2</li>
              <li>小圆点跟随变化效果</li>
              <li>把ol里面li带有current类名的选出来去掉类名 remove</li>
              <li>让当前索引号的 li 加上current add</li>
              <li>
                但是，是等着过渡结束之后变化，所以这个写到transitionend事件里面
              </li>
              <li>手指滑动轮播图</li>
              <li>本质就是u山跟随手指移动，简单说就是移动端拖动元素</li>
              <li>触摸元素touchstart：获取手指初始坐标</li>
              <li>移动手指touchmove：计算手指的滑动距离，并且移动盒子</li>
              <li>如果移动距离小于某个像素就回弹原来位置</li>
              <li>如果移动距离大于某个像素就上一张下一张滑动。</li>
            </ul>
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
                  ul.style.transform = 'translateX(' + translateX + 'px)'; // 12.1、加上CSS3移动效果
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
            这里 Window.scroll（X， Y） Y值可以自定义，做锚点用很方便 X Y
            是不跟单位的
            <pre><code class="language-js line-numbers">  goBack.addEventListener('click',function(){
    window.scroll(0,0);
  });</code></pre>
          </li>
          <li>
            也可以增加缓动效果：
            <ul>
              <li>带有动画的返回顶部</li>
              <li>此时可以继续使用我们封装的动画函数</li>
              <li>
                只需要把所有的left相关的值改为跟页面垂直滚动距离相关就可以了
              </li>
              <li>页面滚动了多少，可以通过 window.pageYOffset 得到</li>
            </ul>
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
        <ul>
          <li>
            动端click事件会有300ms的延时，原因是移动端屏幕双击会缩放（double tap
            to zoom）页面。
          </li>
          <li>
            解决方案1：
            <ul>
              <li>
                禁用缩放。浏览器禁用默认的双击缩放行为并且去掉300ms的点击延迟。
                <pre><code class="language-html line-numbers">  &lt;meta name="viewport" content=" user-scalable=no"&gt;</code></pre>
              </li>
              <li>
                利用touch事件自己封装这个事件解决300ms延迟。 原理就是：
                <ul>
                  <li>当我们手指触摸屏幕，记录当前角触摸时间</li>
                  <li>当我们手指离开屏幕，用离开的时间减去触摸的时间</li>
                  <li>
                    如果时间小于150ms，并且没有滑动过屏幕，那么我们就定义为点击
                  </li>
                </ul>
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
              <li>
                JS插件是js文件，它遵循一定规范编程，方便程序展示效果，拥有特定功能且方便调用。如轮播图和瀑布流插件。
              </li>
              <li>
                特点：它一般是为了解决某个问题而专门存在，其功能单一，并且比较小。我们以前写的
                animate.js 也算一个最简单的插件
              </li>
              <li>fastClick插件解决300ms延迟。使用延时</li>
              <li>
                GitHub官网地址：
                <el-link
                  type="primary"
                  icon="Link"
                  target="_blank"
                  href="https://github.com/ftlabs/fastclick/lib/fastclick.js"
                >
                  https://github.com/ftlabs/fastclick/lib/fastclick.js
                </el-link>
                <ul>
                  <li>打开网址，进入项目，找到文件，复制里面的封装函数代码</li>
                  <li>新建fastClick.js文件.粘贴代码</li>
                  <li>引入js 文件，调用</li>
                  <li>
                    因为多个立即函数，所以函数前面加个分号，确保其他函数没有加分号
                  </li>
                </ul>
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
                <el-link
                  type="primary"
                  icon="Link"
                  target="_blank"
                  href="https://www.swiper.com.cn/"
                >
                  https://www.swiper.com.cn/
                </el-link>
                <ul>
                  <li>
                    进入官网，导航栏上点击
                    获取Swiper里的下载，然后下载最新的文档就可以了
                  </li>
                  <li>
                    下载完Swiper，解压出来，打开
                    demos文件夹，找到你想要的轮播图名称，打开
                  </li>
                  <li>右键查看源码，复制:</li>
                </ul>
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
        </ul>
        <p>swiper插件使用，轮播图</p>
        <ul>
          <li>
            官网地址：
            <el-link
              type="primary"
              icon="Link"
              target="_blank"
              href="https://www.swiper.com.cn/"
            >
              https://www.swiper.com.cn/
            </el-link>
            <ul>
              <li>下载需要的swiper.min.css和swiper.min.js文件件</li>
              <li>官网找到类似案例，复制html结构，css样式js语法</li>
              <li>根据需求定制修改模块</li>
            </ul>
          </li>
          <li>
            图标字体上传下载 上传步骤：
            <ul>
              <li>让美工准备好图标字体（必须是svg格式）</li>
              <li>点上传按钮（保留颜色并提交）</li>
            </ul>
          </li>
          <li>
            不懂可以点击 API文档进行swiper查询代码
            <ul>
              <li>
                &gt; 点击获取Swiper &gt; 下载Swiper &gt; 点击版本自动会下载 &gt;
                得到swiper-6.6.2
              </li>
              <li>
                &gt; 解压压缩包 &gt; package &gt; 复制 swiper-bundle.min.js +
                swiper-bundle.min.css 到项目下
              </li>
              <li>
                &gt; 然后点击 &gt; 在线演示 &gt; 选择想要的样式 &gt;
                点击在新窗口打开 &gt; F12拷贝代码
              </li>
              <li>
                注意：在项目里面先引入css文件，然后在尾部引入js文件，最后拷贝代码
                和 css样式代码
              </li>
            </ul>
          </li>
        </ul>
        <p>其他移动端插件</p>
        <ul>
          <li>
            superSlide：
            <el-link
              type="primary"
              icon="Link"
              target="_blank"
              href="http://www.superslide2.com/"
            >
              http://www.superslide2.com/
            </el-link>
            // 移动端点击touchSlide
          </li>
          <li>
            iScroll：
            <el-link
              type="primary"
              icon="Link"
              target="_blank"
              href="https://github.com/cubiq/iscroll"
            >
              https://github.com/cubiq/iscroll
            </el-link>
            <ul>
              <li>
                插件使用步骤：
                <ul>
                  <li>确认插件实现的功能</li>
                  <li>去官网查看使用说明</li>
                  <li>下载插件</li>
                  <li>打开demo实例文件，查看需要引入的相关文件，并且引入</li>
                  <li>复制demo实例文件中的结构html，样式css以及s代码</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            移动端视频插件zy.media.js
            <ul>
              <li>
                H5给我们提供了video标签，但是浏览器的支持情况不同，不同的视频格式文件，我们可以通过source解决。
              </li>
              <li>
                但是外观样式，还有暂停，播放，全屏等功能我们只能自己写代码解决。这个时候我们可以使用插件方式来制作。
              </li>
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
        </ul>
        <p>框架概述</p>
        <ul>
          <li>
            框架，顾名思义就是一套架构，它会基于自身的特点向用户提供一套较为完整的解决方案。框架的控制权在框架本身，使用者要按照框架所规定的某种规范进行开发。插件一般是为了解决某个问题而专门存在，其功能单一，并且比较小。
          </li>
          <li>
            前端常用的框架有
            Bootstrap、Vue、Angular、React等。既能开发PC端，也能开发移动端
          </li>
          <li>前端常用的移动端插件有swiper、superSlide、iScroll等。</li>
          <li>框架：大而全，一整套解决方案</li>
          <li>
            插件：小而专一，某个功能的解决方案
            <ul>
              <li>Bootstrap</li>
              <li>
                BootCss3:
                <el-link
                  type="primary"
                  icon="Link"
                  target="_blank"
                  href="https://v3.bootcss.com/"
                >
                  https://v3.bootcss.com/
                </el-link>
                javascript 插件 依赖于jQuery，所以需要引入
                jQuery.min.js，再引入min.js文件
              </li>
            </ul>
          </li>
        </ul>
      </el-card>
      <el-card id="part19" shadow="hover">
        <h2>本地存储</h2>
        <p>重点</p>
        <ul>
          <li>
            随着互联网的快速发展，基于网页的应用越来越普遍，同时也变的越来越复杂，为了满足各种各样的需求，会经常性在本地存储大量的数据，HTML5规范提出了相关解决方案。
          </li>
          <li>
            特性:
            <ul>
              <li>数据存储在用户浏览器中</li>
              <li>设置、读取方便、甚至页面刷新不丢失数据</li>
              <li>容量较大，sessionStorage约5M、localStorage 约20M</li>
              <li>只能存储字符串，可以将对象JSON.stringify（）编码后存储</li>
            </ul>
          </li>
          <li>
            window.sessionStorage
            <ul>
              <li>生命周期为关闭浏览器窗口(数据什么时候没有了)</li>
              <li>在同一个窗口（页面面下数据可以共享</li>
              <li>以键值对的形式存储使用</li>
            </ul>
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
            <ul>
              <li>生命周期永久生效，除非手动删除，否则关闭页面也会存在</li>
              <li>可以多窗口（页面）共享（同一浏览器可以共享）</li>
              <li>以键值对的形式存储使用</li>
            </ul>
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
          <li>
            JSON和JS对象的格式一样，只不过JSON字符串中的属性名必须加双引号其他的和JS语法一致
          </li>
          <li>
            JSON分类：
            <ul>
              <li>对象{}</li>
              <li>数组[]</li>
            </ul>
          </li>
          <li>
            JSON中允许的值：
            <ul>
              <li>字符串</li>
              <li>数值</li>
              <li>布尔值</li>
              <li>null</li>
              <li>对象</li>
              <li>数组</li>
            </ul>
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
      </el-card>
      <el-card id="part20" shadow="hover">
        <h2>高级js</h2>
        <p>前言</p>
        <ul>
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
              <li>
                typeof ： 返回数据类型的字符串表达, 不能区别 null 与Object 和
                Object与Array
              </li>
              <li>instanceof： 判断对象的具体类型</li>
              <li>
                ===: 可以判断undefined ，null （全等的时候尽量用三个等号）
              </li>
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
                <ul>
                  <li>基本类型</li>
                  <li>对象类型</li>
                </ul>
              </li>
              <li>
                变量类型（变量内存值的类型，属于弱类型）
                <ul>
                  <li>基本类型：保存就是基本类型的数据</li>
                  <li>引用类型： 保存的是地址值</li>
                </ul>
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
                <ul>
                  <li>算术运算</li>
                  <li>逻辑运算</li>
                  <li>赋值</li>
                  <li>运行函数</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            什么是内存？
            <ul>
              <li>用来可存储数据的空间（临时的）</li>
              <li>
                内存产生和死亡 ：
                内存条（电路板）==&gt;通电==&gt;产生内存空间==&gt;存储数据==&gt;处理数据==&gt;断电==>数据消失
              </li>
              <li>
                一个小内存的2个数据
                <ul>
                  <li>内部存储数据</li>
                  <li>地址值</li>
                </ul>
              </li>
              <li>
                内存分类
                <ul>
                  <li>栈：全局变量/局部变量 函数名属于标识，应该在栈空间</li>
                  <li>堆：对象</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            什么是变量？
            <ul>
              <li>
                可变化的量（常亮是不可变化的），由变量名和变量值组成，作为标识，变量值就是内存中保存的数据
              </li>
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
              <li>
                2个引用变量指向同一个对象，通过一个变量修改对象内部数据，另一个变量看到的是修改之后的数据
              </li>
              <li>
                2个引用变量指向同一个对象，让其中一个引用变量指向另一个对象，另一个引用变量依然指向前一个对象
              </li>
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
                <ul>
                  <li>分配小内存空间，的刀它的使用权</li>
                  <li>存储数据，可以反复进行操作</li>
                  <li>释放小内存空间，</li>
                </ul>
              </li>
              <li>
                释放内存
                <ul>
                  <li>局部变量： 函数执行完自动释放</li>
                  <li>对象：成为垃圾对象 ==&gt; 垃圾回收器回收</li>
                </ul>
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
                <ul>
                  <li>代表现实事物中的状态数据</li>
                  <li>由属性名和属性值组成</li>
                  <li>属性名都是字符串类型，属性值是任意类型</li>
                </ul>
              </li>
              <li>
                方法
                <ul>
                  <li>代表现实事物中的行为数据</li>
                  <li>是特别的属性 ==&gt; 属性值是函数</li>
                </ul>
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
              <li>
                作用：匿名函数自调用 。 影藏实现不会污染外部（全局）命名空间
              </li>
            </ul>
          </li>
          <li>
            什么是this？
            <ul>
              <li>
                任何函数本质上都是通过某个对象来调用的，如果没有指定就是window
              </li>
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
                <ul>
                  <li>
                    每个函数都有一个prototype属性，它默认指向一个Object空对象（即称为：原型对象）
                  </li>
                  <li>原型对象中有一个constructor，它指向函数对象</li>
                </ul>
              </li>
              <li>
                给原型对象添加属性（一般都是方法）
                <ul>
                  <li>作用：函数的所有实例对象自动拥有原型中的属性（方法）</li>
                </ul>
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
              <li>
                当一个嵌套的内部（子）函数引用了嵌套的外部（父）函数的变量（函数）是，就产生了闭包
              </li>
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
        </ul>
        <p>补充知识点：不同设备打开不同页面</p>
        <ul>
          <li>
            会根据用户设备来进行页面跳转的参数
            <ul>
              <li>1、navigator.userAgent 包含浏览器信息</li>
              <li>2、navigator.appName 浏览版名称</li>
              <li>3、navigator.appVersion 浏览版本号</li>
              <li>4、navigator.language 浏览语言</li>
              <li>5、navigator.platform 浏览平台</li>
            </ul>
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
          <li>
            先说说防盗链的原理，http 协议中，如果从一个网页跳到另一个网页，http
            头字段里面会带个 Referer。这里的Referer是由于历史原因导致了拼写错误
            后来也就一直沿用。图片服务器通过检测 Referer
            是否来自规定域名，来进行防盗链。如果盗用网站是 https 的
            protocol，而图片链接是 http 的话，则从 https 向 http
            发起的请求会因为安全性的规定，而不带
            referer，从而实现防盗链的绕过。官方输出图片的时候，判断了来源(Referer)，就是从哪个网站访问这个图片，如果是你的网站去加载这个图片，那么Referer就是：你的网站地址；你网站地址，肯定没在官方的白名单内，所以就看不到图片了。因此，若不发送Referer，也就是没有来源。那么官方那边，就认为是从浏览器直接访问的，所以就能加载正常的图片了。
          </li>
          <li>
            解决方案：
            <pre><code class="language-js line-numbers">  &lt;meta name="referrer" content="never"&gt;</code></pre>
          </li>
        </ul>
      </el-card>
      <el-card id="part21" shadow="hover">
        <h2>ES6</h2>
        <p>ECMA</p>
        <ul>
          <li>
            ECMA （European Computer Manufacturers
            Association）中文名称为欧洲计算机制造商协会，这个组织的目标是评估、开发和认可电信和计算机标准。1994年后该组织改名为Ecma国际。
          </li>
          <li>ECMAScript 是由Ecma国际通过ECMA-262标准化的脚本程序设计语言。</li>
          <li>
            ECMA-262历史版本
            <el-link
              type="primary"
              icon="Link"
              target="_blank"
              href="http://www.ecma-international.org/publications/standards/Ecma-262-arch.htm"
            >
              http://www.ecma-international.org/publications/standards/Ecma-262-arch.htm
            </el-link>
          </li>
          <li>注：从ES6开始，每年发布一个版本，版本号比年份最后一位大1</li>
        </ul>
        <p>谁在维护ECMA-262</p>
        <ul>
          <li>
            TC39（Technical
            Committee39）是推进ECMAScript发展的员会。其会员都是公司（其中主要是浏览器厂商，有苹果、谷歌、微软、因特尔等）。TC39定期召开会议，会议由会员公司的代表与特邀专家出席
          </li>
        </ul>
        <p>ES6兼容性</p>
        <ul>
          <li>
            <el-link
              type="primary"
              icon="Link"
              target="_blank"
              href="http:/kangax.github.io/compat-table/es6/"
            >
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
            <ul>
              <li>变量不能重复声明，和var 不一样，不用担心被污染</li>
              <li>
                块级作用域 全局 函数 eval ，不止{} ,还有if else while for
                里的作用域有效
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
            </ul>
          </li>
          <li>
            值不能修改的量 称之为常量，const
            <ul>
              <li>
                一定要赋初始值 ，不能 const a; 会报错 // index.html:27 Uncaught
                SyntaxError: Missing initializer in const declaration
              </li>
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
            </ul>
          </li>
        </ul>
        <p>
          结构赋值
          (ES6允许按照一定模式从数组和对象中提取值，对变量进行赋值，这杯称为结构赋值)
        </p>
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
            ES6 引入新的声明字符串的方法 [ `` ] , ' ' , " "
            `(反引号，左上角数字1左边的符号)
            <ul>
              <li>例子 let a = `我是字符串，被反引号包裹着`;</li>
            </ul>
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
            <ul>
              <li>
                startsWith()：表示参数字符串是否在原字符串的头部，返回布尔值
              </li>
              <li>
                endsWith()：表示参数字符串是否在原字符串的尾部，返回布尔值
              </li>
            </ul>
            <pre><code class="language-js line-numbers">  let str = "start end!"
  let a = str.startsWith('s');     // 判断字符串中是否以s 开头
  let b = str.endsWith('!');       // 判断字符串中是否以！结尾
  console.log(a, b);               // true true</code></pre>
          </li>
          <li>
            repeat()
            <ul>
              <li>表示将原字符串重复N次，返回一个新字符串</li>
            </ul>
            <pre><code class="language-js line-numbers">  let str = "y".repeat(5);  // repeat()方法会返回新的字符串，所以需要用变量来接收
  console.log(str);</code></pre>
          </li>
        </ul>
        <p>简化对象写法</p>
        <ul>
          <li>
            ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法
          </li>
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
            <ul>
              <li>
                this 是静态的，不像之前一样是动态。this
                始终是指向函数声明时所在作用域下的this 的值
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
            </ul>
          </li>
          <li>
            总结：
            <ul>
              <li>箭头函数适合与this无关的回调函数，定时器，数组的方法回调</li>
              <li>箭头函数不适合与 this 有关的回调，事件回调，对象的方法</li>
            </ul>
          </li>
        </ul>
        <p>函数参数默认值</p>
        <ul>
          <li>
            ES6 允许给函数参数赋值初始值
            <ul>
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
            </ul>
          </li>
          <li>
            ES6 引入 rest 参数，用于获取函数的实参，用来代替 arguments，rest参数
            一定要放最后，否则报错
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
        </ul>
        <p>Symbol 基本使用</p>
        <ul>
          <li>
            ES6
            引入了一种新的原始数据类型Symbol，表示独一无二的值。它是JavaScript
            语言的第七种数据类型，是一种类似于字符串的数据类型。
          </li>
          <li>
            Symbol特点
            <ul>
              <li>Symbol的值是唯一的，用来解决命名冲突的问题</li>
              <li>Symbol值不能与其他数据进行运算</li>
              <li>
                Symbol定义的对象属性不能使用for..in循环遍历，但是可以使用Reflect.ownkeys来获取对象的所有键名
              </li>
            </ul>
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
            <ul>
              <li>Symbol.hasInstance</li>
              <li>Symbol.isConcatSpreadable</li>
            </ul>
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
          <li>
            迭代器（iterator）是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构
          </li>
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
            ES6创造了一种新的遍历命令for..of循环，iterator 接口主要供for..of
            消费
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
            <ul>
              <li>Array</li>
              <li>Arguments</li>
              <li>Set</li>
              <li>Map</li>
              <li>String</li>
              <li>TypedArray</li>
              <li>NodeList</li>
            </ul>
          </li>
          <li>
            工作原理
            <ul>
              <li>创建一个指针对象，指向当前数据结构的起始位置</li>
              <li>
                第一次调用对象的next方法，指针自动指向数据结构的第一个成员，并返回结果
                return next方法
              </li>
              <li>
                接下来不断调用next方法，指针一直往后移动，直到指向最后一个成员
              </li>
              <li>
                每调用next方法返回一个包含value和done属性的对象，done
                是一个完成时，true 代表遍历完成
              </li>
              <li>
                与for in 不同， for in 保存的是键名，而for of 保存的是健值
              </li>
              <li>注：需要自定义遍历数据的时候，要想到迭代器。</li>
            </ul>
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
          <li>
            生成器函数是ES6提供的一种异步编程解决方案，语法行为与传统函数完全不同
          </li>
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
            <ul>
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
            </ul>
          </li>
        </ul>
        <p>Promise</p>
        <ul>
          <li>
            Promise是E56引入的异步编程的新解决方案。语法上Promise是一个构造函数，用来封装异步操作并可以获取其成功或失败的结果。
            <ul>
              <li>Promise构造函数：Promise（Executor）</li>
              <li>Promise.prototype.then方法</li>
              <li>
                Promise.prototype.catch 方法
                <ul>
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
                </ul>
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
        </ul>
        <p>Set</p>
        <ul>
          <li>set 与map 是一样的，但是set存储的是唯一值，不允许重复</li>
          <li>
            ES6提供了新的数据结构Set（集合）。它类似于数组，但成员的值都是唯一的，集合实现了iterator接口，所以可以使用
            [扩展运算符] 和[for..of..]进行遍历，集合的属性和方法：
            <ul>
              <li>size 返回集合的元素个数 相当于 length</li>
              <li>add 增加一个新元素，返回当前集合 add(‘需要添加的元素’);</li>
              <li>delete 删除元素，返回boolean值 delete('想要删除的元素')</li>
              <li>has 检测集合中是否包含某个元素，返回boolean值</li>
              <li>set.entries() 返回键值对</li>
              <li>clear 清除数据</li>
            </ul>
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
            <ul>
              <li>set 中的数据不允许重复，添加不进去</li>
              <li>
                ES6提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
              </li>
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
            </ul>
          </li>
        </ul>
        <p>Map</p>
        <ul>
          <li>
            ES6提供了Map数据结构。它类似于对象，也是键值对的集合。但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。Map也实现了iterator接口，所以可以使用[扩展运算符]和for..of...进行遍历。Map的属性和方法：
          </li>
          <li>
            const m = new Map() 创建需要用new关键字
            <ul>
              <li>map.size() 返回Map的元素个数</li>
              <li>map.set() 增加一个新元素，返回当前Map</li>
              <li>map.get() 返回键名对象的键值</li>
              <li>map.has() 检测Map中是否包含某个元素，返回boolean值</li>
              <li>map.delete() 删除指定数据</li>
              <li>map.clear() 清空集合，返回undefined</li>
            </ul>
          </li>
        </ul>
        <p>class 类</p>
        <ul>
          <li>
            ES6提供了更接近传统语言的写法，引入了Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。基本上，ES6的class可以看作只是一个语法糖，它的绝大部分功能，ES5都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。
          </li>
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
            <ul>
              <li>没有变量提升，必须先创建好类，再实例化对象，才能调用</li>
              <li>共有的属性和方法一定要加 this</li>
            </ul>
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
        <ul>
          <li>
            模块化是指将一个大的程序文件，拆分成许多小的文件，然后将小文件组合起来。
          </li>
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
                为了兼容性，需要引入插件来把es6 转换成兼容性
                es5的代码，然后对打包好的js 文件进行引入就可以了
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
        </ul>
        <p>ECMAScript 7 新特性</p>
        <ul>
          <li>
            Array.prototype.includes
            <ul>
              <li>
                includes方法用来检测数组中是否包含某个元素，返回布尔类型值
              </li>
            </ul>
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
            <ul>
              <li>async函数的返回值为promise对象，</li>
              <li>promise对象的结果由async函数执行的返回值决定</li>
            </ul>
          </li>
          <li>
            await 表达式
            <ul>
              <li>await必须写在async函数中 ,但是async 里可以没有await</li>
              <li>await右侧的表达式一般为promise对象</li>
              <li>
                await返回的是promise成功的值4.await的promise失败了，就会抛出异常,需要通过try..catch捕获处理
              </li>
            </ul>
          </li>
        </ul>
        <p>对象扩展</p>
        <ul>
          <li>
            Rest参数与spread扩展运算符在ES6中已经引入，不过ES6中只针对于数组，在·ES9·中为对象提供了像数组一样的rest参数和扩展运算符
          </li>
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
            <ul>
              命名捕获分组：之前的方式，换行也要算上，\s
            </ul>
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
          <li>
            import 返回的结果是一个 Promise 对象，成功的值就是暴露出来的模块对象
          </li>
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
      </el-card>
      <el-card id="part22" shadow="hover">
        <h2>SVG</h2>
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
          <li>
            width属性和height属性，制定了SVG图像在HTML元素中所占据的宽度和高度。除了相对单位也可以采用绝对单位
          </li>
          <li>
            （单位：像素）。如果不指定这两个属性，
            SVG图像默认大小是300像素（宽）*150像素（高）。
          </li>
          <li>如果只想展示SVG图像的一部分I就要指定viewBox属性。</li>
          <li>
            viewBox属性的值有四个数字，分别是左上角的横坐标和纵坐标、视口的高魔和宽度。上面代码中，SVG图像是100像素宽*100像素高，
          </li>
          <li>
            viewBox属性指定视口从（50，50）这个点开始。所以，实际看到的是右下角的四分之一圆。
          </li>
          <li>
            注意，视口必须适配所在的空间。上面代码中，视口的大小是5050，由于SVG图像的大小是100100，所以视口会放大去适配SVG图像的
            大小，即放大了四倍。
          </li>
          <li>
            如果不指定width属性和height属性，只指定viewBox属性，则相当于只给到定SVG图像的长宽比。这时，SVG图像的默认大小将等于所在
            的HTML元素的大小。
          </li>
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
            <ul>
              <li>获取数据</li>
              <li>创建svg</li>
              <li>创建坐标</li>
              <li>绘制坐标文字</li>
              <li>依据数据绘制矩形（条形）</li>
            </ul>
          </li>
          <li>
            可以使用封装好的库:
            <el-link
              type="primary"
              icon="Link"
              target="_blank"
              href="https://echarts.apache.org/zh/index.html"
            >
              https://echarts.apache.org/zh/index.html
            </el-link>
            <ul>
              <li>
                引入JS文件或者下载好js文件，进行引入
                <ul>
                  <li>
                    Staticfile CDN（国内）:
                    <el-link
                      type="primary"
                      icon="Link"
                      target="_blank"
                      href="https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js"
                    >
                      https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js
                    </el-link>
                  </li>
                  <li>
                    jsDelivr：
                    <el-link
                      type="primary"
                      icon="Link"
                      target="_blank"
                      href="https://cdn.jsdelivr.net/npm/echarts@4.3.0/dist/echarts.min.js"
                    >
                      https://cdn.jsdelivr.net/npm/echarts@4.3.0/dist/echarts.min.js
                    </el-link>
                  </li>
                  <li>
                    cdnjs:
                    <el-link
                      type="primary"
                      icon="Link"
                      target="_blank"
                      href="https://cdnjs.cloudflare.com/ajax/libs/echarts/4.3.0/echarts.min.js"
                    >
                      https://cdnjs.cloudflare.com/ajax/libs/echarts/4.3.0/echarts.min.js
                    </el-link>
                  </li>
                </ul>
              </li>
              <li>
                使用之前，要准备一个DOM容器
                <pre><code class="language-html line-numbers">  &lt;body&gt;
      &lt;!-- 为 ECharts 准备一个定义了宽高的 DOM --&gt;
      &lt;div id="main" style="width: 600px;height:400px;"&gt;&lt;/div&gt;
  &lt;/body&gt;</code></pre>
              </li>
              <li>
                【完整写法】然后就可以通过 echarts.init 方法初始化一个 echarts
                实例并通过 setOption 方法生成一个简单的柱状图，下面是完整代码。
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
            </ul>
          </li>
          <li>
            模版引入方法
            <ul>
              <li>引入js 或者 cdn</li>
              <li>
                创建一个DOM容器 id= main
                并设置宽高，也可以用js来控制宽高，官方文档有写
              </li>
              <li>
                写script，
                初始化容器（官网下载模版，复制option配置项），并配置，最后 显示
              </li>
            </ul>
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
  { id: 9, h2: "小结" },
  { id: 10, h2: "数组" },
  { id: 11, h2: "函数" },
  { id: 12, h2: "对象" },
  { id: 13, h2: "正则表达式" },
  { id: 14, h2: "其他" },
  { id: 15, h2: "DOM" },
  { id: 16, h2: "BOM" },
  { id: 17, h2: "网页效果" },
  { id: 18, h2: "其他拓展" },
  { id: 19, h2: "本地存储" },
  { id: 20, h2: "高级js" },
  { id: 21, h2: "ES6" },
  { id: 22, h2: "SVG" },
]);
</script>

<style scoped lang="scss"></style>
