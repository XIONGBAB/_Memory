<template>
  <card-container :title="`javascript`" :data="data">
    <template #svg>
      <svg width="40" height="40" t="1699148574627" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8149">
        <path d="M64 64h896v896H64z" fill="#F5DE19" p-id="8150"></path>
        <path d="M665.888 764a91.712 91.712 0 0 0 83.2 51.2c34.88 0 57.184-17.44 57.184-41.6 0-28.8-22.912-39.104-61.312-55.904l-21.056-9.024c-60.8-25.888-101.12-58.304-101.12-126.848 0-63.136 48-111.232 123.296-111.232a124.448 124.448 0 0 1 119.744 67.424L800 580.096A57.248 57.248 0 0 0 745.952 544a36.64 36.64 0 0 0-40.288 36.096c0 25.248 15.648 35.488 51.776 51.2l21.056 9.024c71.552 30.688 112 61.952 112 132.256 0 75.808-59.552 117.344-139.52 117.344a161.76 161.76 0 0 1-153.44-86.112z m-297.44 7.296c13.216 23.456 25.248 43.296 54.176 43.296 27.648 0 45.12-10.816 45.12-52.896v-286.304h84.192v287.424c0 87.168-51.2 126.848-125.728 126.848a130.72 130.72 0 0 1-126.304-76.8z" fill="" p-id="8151"></path>
      </svg>
    </template>
    <template #describe>
      <p>JavaScript最初是由Netscape的工程师布兰登·艾奇（Brendan Eich）在1995年设计的，最初命名为LiveScript，但为了利用当时流行的Java语言的市场效应，它被改名为JavaScript。</p>
    </template>
    <template #content>
      <el-card shadow="hover" id="part1">
        <h2>数组</h2>
        <div class="ls-cot">
          <p>前言</p>
          <ul>
            <li>
              问：之前学习的变量，只能存储一个值。如果我们想存储班级中所有学生的姓名，那么该如何存储呢？
              <ol>
                <li>答：可以使用数组（Array）。数组可以把一组相关的数据一起存放，并提供方便的访问（获取）方式。</li>
              </ol>
            </li>
            <li>
              问：什么是数组呢？
              <ol>
                <li>答：数组是指一组数据的集合，其中的每个数据被称作元素，在数组中可以存放任意类型的元素。数组是一种，将一组数据存储在单个变量名下的优雅方式。</li>
              </ol>
            </li>
          </ul>
          <p>创建数组的方法</p>
          <ul>
            <li>
              利用 new创建数组
              <pre><code class="language-js line-numbers">  var 数组名 = new Array();
  var arr = new Array(10,20,30,40); //创建一个新的数组，并传入参数 zzz

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
            <li>数组的索引（下标）：用来访问数组元素的序号（数组下标从0开始）。</li>
            <li>
              例如： var arr = ['小白' , 1, '大黄' ,true]；
              <ol>
                <li>下标号为： 0 , 1, 2 , 3</li>
              </ol>
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
              <ol>
                <li>先声明一个保存最大值的变量 max</li>
                <li>默认最大值可以取数组中的第一个元素。</li>
                <li>遍历这个数组，把里面每个数组元素和max相比较。</li>
                <li>如果这个数组元素大于max就把这个数组元素存到max里面，否则继续下一轮比较。</li>
                <li>
                  最后输出最大值 max
                  <pre><code class="language-js line-numbers">  var arr = [2, 6, 1, 7, 4]
  var max = arr[0];
  for (var i = 1; i &lt; arr.length; i++) {
      if (arr[i] > max) {     //相反，取最小值就是  arr[i] &lt; max;
          max = arr[i]
      }
  }
  console.log(max);</code></pre>
                </li>
              </ol>
            </li>
            <li>
              案例：数组转换为分割字符串
              <ol>
                <li>要求：将数组[red，'green，'blue，'pink']转换为字符串，并且用|或其他符号分割，输出为：red|green|...</li>
              </ol>
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
              重点：不要给数组赋值，否则数组等于所赋的值，之前的数组元素都会消失 例如：
              <pre><code class="language-js line-numbers">  var arr = [1,2,3,4,5,1,2,5,];
  arr = '123456';               // 此时 arr 输出时会直接输出 123456</code></pre>
            </li>
          </ul>
          <p>使用循环增加数组的案例</p>
          <pre><code class="language-js line-numbers">  // 声明一个空数组arr。
  // 循环中的计数器i可以作为数组元素存入。
  var arr = [];
  for (var i = 0; i &lt; 10; i++) {
      arr[i] = i + 1; //因为是1- 10，所以从1开始，要加1
      //  arr = i + 1；    //不能写arr =i,这样每次循环都会覆盖数组
  }
  console.log(arr);

  // 将数组[2，0，6，1，77，0，52，0，25，7]中大于等于10的元素选出来，放入新数组。
  // 1、声明一个新的数组用于存放新数据newArr。
  // 2、遍历原来的旧数组，找出大于等于10的元素。
  // 3、依次追加给新数组 newArr
      var newArr = [];
      var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
      var max = arr[0];
      var j = 0; //用来存储数组索引号，当判断的时候，第一个索引是0，判断完j++，索引就是1，以此类推
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
      //刚开始的newArr.length 的长度是为0
      for (var i = 0; i &lt; arr.length; i++) {
          if (arr[i] > 10) {
              //新数组的索引号是从0开始，依次递增，length会自动检测长度
              newArr[newArr.length] = arr[i];
          }
      }
      console.log(newArr);</code></pre>
          <p>删除指定数组元素 (去重)</p>
          <ul>
            <li>需要一个新数组用于存放筛选之后的数据。</li>
            <li>遍历原来的数组，把不是0的数据添加到新数组里面（此时要注意采用数组名+索引的格式接收数据）。</li>
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
              <ol>
                <li>1、声明一个新数组 newArr</li>
                <li>2、把旧数组索引号最后一个取过来（arr.length - 1），给新数组索引号第一个元素（newArr.length）</li>
                <li>3、我们采取递减的方式 i --</li>
              </ol>
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
              <ol>
                <li>是一种算法，把一系列的数据按照一定的顺序进行排列显示（从小到大或从大到小）。冒泡排序是一种简单的排序算法，它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。.这个算法的名字由来是因为越小的元素会经由交换慢偿“浮“到数列的顶端。</li>
              </ol>
            </li>
            <li>数组长度 - 索引号 - 1 = 交换次数</li>
            <li>数组是从0开始 第一趟交换四次， 5 - 0 - 1=4</li>
            <li>第二趟交换三次， 5 - 1 - 1=3</li>
            <li>第三趟交换二次， 5 - 2 - 1=2</li>
            <li>
              第四趟交换一次， 5 - 3 - 1=1
              <pre><code class="language-js line-numbers">  var arr = [5, 4, 3, 2, 1];
  for (var i = 1; i &lt;= arr.length - 1; i++) { // 外层循环管躺数
      for (var j = 0; j &lt;= arr.length - i - 1; j++) { // 里层循环次数
          if (arr[j] > arr[j + 1]) {   // 取反的话 就看大于 还是小于
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
          if (arr[i] > arr[j]) {                     // 如果选择的那个数 大于了当前数，就进行位置调换 假设9大于8， 那么8排在前面，9就在后面
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
  //获取数组中的每一个元素
  function deleArr() {
      for (var i = 0; i &lt; arr.length; i++) {
          console.log(arr[i]);
          //获取当前元素后的所有元素。 j=i的话 ,因为i就是第一位，没必要第一位和第一位相比,所以+1
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
          <p>for-of 可迭代对象进行遍历。循环体执行语句,每次执行时都会将一个数组里的元素，赋值给变量</p>
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

  // 案例3：数组练习 --- 双色球  // 随机生成一组双色球号码，存放到数组中
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
        </div>
      </el-card>
      <el-card shadow="hover" id="part2">
        <h2>函数</h2>
        <div class="ls-cot">
          <p>函数概念</p>
          <ol>
            <li>在JS里面，可能会定义非常多的相同代码或者功能相似的代码，这些代码可能需要大量重复使用。 虽然for循环语句 也能实现一些简单的重复操作，但是比较具有局限性，此时我们就可以使用JS中的函数。</li>
            <li>函数：就是封装了一段可被重复调用执行的代码块。通过此代码块可以实现大量代码的重复使用。 比如document.write(); console.log(); prompt(); alert();</li>
            <li>函数的封装： 是把一个或者多个功能通过函数的方式封装起来，对外只提供一个简单的函数接口</li>
            <li>简单理解：封装类似于将电脑配件整合组装到机箱中（类似快递打包），函数对象拥有所有对象的属性功能</li>
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
                  <ol>
                    <li>function 声明函数的关键字全部小写</li>
                    <li>函数是做某件事情，函数名一般是动词sayHi</li>
                    <li>函数不调用自己，是不会执行</li>
                  </ol>
                </li>
                <li>
                  匿名函数
                  <pre><code class="language-js line-numbers">  const a = function () {     // 不写函数名的函数称为匿名函数,但是可以创建一个变量来接收匿名函数
    alert(' 我是一个匿名函数');
  };
  a();                      // 调用的时候就可以直接用变量名来调用</code></pre>
                </li>
                <li>
                  new Function() 记得要大写 与 new 关键字 不常用。所有函数都是Function 的实例（对象），函数也属于对象 instanceof
                  <pre><code class="language-js line-numbers">  var a = new Function('参数1', '参数2', 'alert(参数1+参数2)');
  a(1, 2);</code></pre>
                </li>
                <li>
                  调用函数
                  <ol>
                    <li>普通函数： 函数名() 函数名.call() a(); a.call();</li>
                    <li>对象方法： 函数名()() || 函数名.方法名() a()(); a.eat();</li>
                    <li>构造函数： new 构造函数名() new a()</li>
                    <li>绑定事件函数： 点击或者其他操作事件就可以直接调用</li>
                    <li>定时器函数： 定时器自动调用</li>
                    <li>立即执行函数： ( function() {} ()) (function(){})();</li>
                  </ol>
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
          </ol>
          <p>形参，实参</p>
          <ul>
            <li>形参： 形式上的参数函数定义的时候传递的参数当前并不知道是什么</li>
            <li>实参： 实际上的参数函数调用的时候传递的参数实参是传递给形参的</li>
            <li>参数的作用：在函数内部某些值不能固定，我们可以通过参数在调用函数时传递不同的值进去。</li>
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
              <ol>
                <li>函数可以带参数也可以不带参数</li>
                <li>声明函数的时候，函数名括号里面的是形参，形参的默认值为undefined</li>
                <li>调用函数的时候，函数名括号里面的是实参</li>
                <li>形参的个数可以和实参个数不匹配，但是结果不可预计，我们尽量要配对</li>
              </ol>
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
              <ol>
                <li>有的时候，我们会希望函数将值返回给调用者，此时通过使用return语句就可以实现。</li>
                <li>只要函数遇到return就把后面的结果返回给函数的调用者</li>
              </ol>
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
              <ol>
                <li>如果有return则返回return后面的值</li>
                <li>如果没有return则返回undefined</li>
                <li>return 可以返回任何数据类型，可以是对象也可以返回函数</li>
              </ol>
            </li>
            <li>
              break，continue，return的区别
              <ol>
                <li>break：结束当前的循环体（如for、while）</li>
                <li>continue：跳出本次循环，继续执行下次循环（如for、while）</li>
                <li>return：不仅可以退出循环，还能够返回return语句中的值，同时还可以结束当前的函数体内的代码</li>
              </ol>
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
            <li>当我们不确定有多少个参数传递的时候，可以用arguments来获取。在JavaScript中，arguments实际上它是当前函数的一个内置对象。</li>
            <li>所有函数都内置了一个arguments对象，arguments对象中存储了传递的所有实参</li>
            <li>
              arguments展示形式是一个伪数组，因此可以进行遍历。伪数组具有以下特点：
              <ol>
                <li>具有length属性</li>
                <li>按索引方式储存数据</li>
                <li>不具有数组的 push ， pop 等方法</li>
              </ol>
            </li>
            <li>
              注意：
              <ol>
                <li>只有函数才有arguments对象，而且是每个函数都内置好的了这个arguments</li>
                <li>即使不写形参，也可以通过arguments 来获取到实参</li>
                <li>arguments还有一个属性 是 callee, 这个属性对应一个函数对象，就是当前正在执行函数对象</li>
              </ol>
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
            <li>通常来说，一段程序代码中所用到的名字并不总是有效和可用的，而限定这个名字的可用性的代码范围就是这个名字的作用域。 作用域的使用提高了程序逻辑的局部性，增强了程序的可靠性，减少了命名名字的冲突。</li>
            <li>
              js的作用域（es6）之前：分为 全局作用域 局部作用域
              <ol>
                <li>全局作用域：整个script标签，或者单独的一个js文件</li>
                <li>局部作用域：在函数内部就是局部作用域（函数作用域），这个代码的名字只在函数内部起效果</li>
              </ol>
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
              <ol>
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
                  局部变量：在局部作用域下的变量，或者在函数内部的变量（注意： 函数中的形参是一个局部变量！！！）
                  <pre><code class="language-js line-numbers">  function fn() {
    var num1 = 10;      // num1就是局部变量 只能在函数内部使用
    num2 = 20;
  }
  fn();
  console.log(num1);    // 报错，num is not defined
  console.log(num2);    // 注意，num2是未声明的变量，但是在函数中可以被调用</code></pre>
                </li>
              </ol>
            </li>
            <li>
              特性：
              <ol>
                <li>全局变量只有浏览器关闭的时候才会销毁，比较占内存资源</li>
                <li>局部变量，当我们程序执行完毕就会销毁。比较节约内存资源</li>
              </ol>
            </li>
          </ul>
          <p>块级作用域</p>
          <ul>
            <li>
              JS 现阶段没有块级作用域，es6的时候新增块级作用域
              <ol>
                <li>块级作用域 { } if { } for { }</li>
              </ol>
            </li>
          </ul>
          <p>作用域链</p>
          <ul>
            <li>只要是代码，就至少有一个作用域</li>
            <li>写在函数内部的局部作用域</li>
            <li>如果函数中还有函数，那么在这个作用域中就又可以诞生一个作用域</li>
            <li>根据在内部函数可以访问外部函数变量的这种机制，用链式查找决定哪些数据能被内部函数访问，</li>
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
          <ol>
            <li>JavaScript代码是由浏览器中的JavaScript解析器来执行的。JavaScript解析器在运行JavaScript代码的时候分为两步：预解析，然后再代码执行。</li>
            <li>预解析：js引擎会把js 里面所以的 var 还有 function 提升到当前作用域的最前面，然后开执行代码。代码书写的顺序从上往下执行</li>
            <li>
              预解析可以分为变量预解析（变量提升） 和 函数预解析 （函数提升）
              <ul>
                <li>变量提升：把所有的变量声明提升到当前的作用域最前面。但是不提升赋值操作</li>
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
          </ol>
          <p>重点</p>
          <ul>
            <li>
              函数的方法 call () 和apply () 和 bind() : // 在调用方法时，通过call（对象，实参），来改变调用的方法里面的this 指向
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
              <ol>
                <li>bind 可以为新函数绑定this 且不被改变</li>
                <li>bind 也可以为新函数绑定实数，且会固定，不可改变，且不影响原函数</li>
              </ol>
            </li>
            <li>
              *补充 递归算法（所谓递归就是在方法内部的某一个地方，再次调用了方法本身）
              <ol>
                <li>使用递归算法，计算1-20之间所数之和，这是一道经典面试题</li>
                <li>什么是递归：就是一个方法，自己调用自己</li>
                <li>注意：递归方法，一定要控制好合适跳出，否则就是死循环。</li>
              </ol>
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
              <ol>
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
                  深拷贝拷贝多层，每一级别的数据都会拷贝. 对于复杂引用数据类型且不是拷贝地址，而是新开辟空间
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
              </ol>
            </li>
            <li>
              *高阶函数
              <ol>
                <li>什么是高阶函数：就是一个函数的参数是函数，或者返回值是函数，满足其中一个就是高阶函数</li>
                <li>开闭原则：对于扩展是开放的，但是对于修改是封闭的</li>
              </ol>
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
              <ol>
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
              </ol>
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
              <ol>
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
              </ol>
            </li>
            <li>
              *数组的高阶函数 filter()
              <ol>
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
              </ol>
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
              <ol>
                <li>
                  用于表示数组中是否有满足指定规则的元素，返回结果，有： true || 一个都没有：false
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
              </ol>
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
              *数组的高阶函数：闭包函数 当一个嵌套函数中，子函数调用了父函数的变量，就产生了闭包
              <ol>
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
            if (n <= 3) {                      // 如果没有超过3公里
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
              </ol>
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
              *this 指向问题 （一百五十一项有说明）
              <ol>
                <li>
                  函数中，谁调用，this就指向谁，fun1是window的方法，所以this 指向 window
                  <pre><code class="language-js line-numbers">  // 采用var 关键字声明的变量，都会成为Window对象的属性或者方法
    var a = 'asdasdasdasasasasasasda';
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
        /*   fun1:function(){
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
              </ol>
            </li>
            <li>
              *rest参数 使用 ...+自定义名称 组成
              <ol>
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
                  展开对象 扩展运算符复杂数据类型是浅拷贝，还可以将非数组转换为数组
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
  console.log(name, age1, sex); <</code></pre>
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
              </ol>
            </li>
          </ul>
        </div>
      </el-card>
      <el-card shadow="hover" id="part3">
        <h2>对象</h2>
        <div class="ls-cot">
          <p>对象是由属性和方法组成的。</p>
          <ol>
            <li>现实生活中：万物皆对象，对象一个具体的事物，看得见摸得着的实物。</li>
            <li>例如，一本书、一辆汽车、一个人可以是“对象”，一个数据库、网页、一个与远程服务器的连接也可以是“对象"。</li>
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
                <li>保存一个值时，可以使用变量，保存多个值（一组值）时，可以使用数组。如果要保存一个人的完整信息呢？</li>
                <li>
                  例如，将“张三疯”的个人的信息保存在数组中的方式为：
                  <ol>
                    <li>var arr=[‘张三疯’，‘男’，128，154]；</li>
                  </ol>
                </li>
                <li>
                  JS中的对象表达结构更清晰，更强大。张三疯的个人信息在对象中的表达结构如下：
                  <ol>
                    <li>张三疯.姓名 = '张三疯'； == person.name = ' 张三疯'；</li>
                    <li>张三疯.性别 = '男'； == person.sex = ' 男' ；</li>
                    <li>张三疯.年龄 = 128； == person.age = 128;</li>
                    <li>张三疯.身高 = 154； == person.height = 154;</li>
                  </ol>
                </li>
              </ul>
            </li>
          </ol>
          <p>创建对象的三种方式</p>
          <ol>
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
                  构造函数 （推荐使用class 或者 把构造函数放到立即执行函数代码块里）
                  <ol>
                    <li>是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，</li>
                    <li>它总与new运算符一起使用。我们可以把对象中一些公共的属性和方法抽取出来然后封装到这个函数里面。</li>
                    <li>因为我们一次创建一个对象，里面很多的属性和方法是大量相同的我们只能复制，因此我们可以利用函数的方法</li>
                    <li>重复这些相同的代码，我们就把这个函数称为构造函数。又因为这个函数不一样，里面封装的不是普通代码，而是对象。</li>
                    <li>构造函数就是把我们对象里面一些相同的属性和方法抽象出来封装到函数里面</li>
                  </ol>
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
                  <ol>
                    <li>立即创建一个新的对象</li>
                    <li>将新建的对象设置为函数中的this</li>
                    <li>逐行执行函数中的代码</li>
                    <li>将新建的对象作为返回值返回</li>
                  </ol>
                </li>
                <li>
                  使用instanceof 可以检查一个对象是否是一个类的实例
                  <ol>
                    <li>instanceof检查的是对象的原型链上是否有该类实例,只要原型链上有该类实例，就会返回true</li>
                    <li>语法: 对象 instanceof 构造函数</li>
                  </ol>
                </li>
                <li>
                  使用原型 prototype，创建每一个函数时，解析器都会向函数内添加一个 prototype 属性
                  <ol>
                    <li>语法: 函数名.prototype</li>
                    <li>如果函数作为普通函数调用prototype，是没有任何作用</li>
                    <li>当函数以构造函数的形式调用时，它所创建的对象中都有一个隐含的属性</li>
                    <li>指向构造函数的原型对象，我们可以通过 __proto__(前后都是两个下划线)来访问该属性</li>
                    <li>原型对象就相当于一个公共的区域，所有同一个类的实例都可以访问到这个原型对象</li>
                    <li>我们就可以将对象汇总的共有的内容，统一设置到原型对象中</li>
                    <li>当我们访问对象的一个属性和方法时，它会先在对象中寻找，如果有则直接调用</li>
                    <li>如果没有则会去原型对象中寻找，如果找到了就直接使用</li>
                  </ol>
                </li>
                <li>
                  作用
                  <ol>
                    <li>以后在创建构造函数时，可以将这些对象共有的属性和方法，统一添加到构造函数的原型对象中</li>
                    <li>这样不用分别为每一个对象添加，也不会影响到全局作用域</li>
                    <li>语法： 函数名 . prototype . 属性名 = ‘属性值’；</li>
                    <li>prototype（A.prototype是访问构造函数实例的原型） __proto__（不推荐使用，因为可以重新赋值造成问题） Object.getPrototypeOf(obj)（建议使用，=后不可赋值） Object.create(obj) Object.getOwnPropertyName(obj) toString Object.setPrototypeOf( )</li>
                  </ol>
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
                <li>原型对象中还有原型对象, 原型的原型就是直接找到 Object 对象的原型</li>
                <li>Object 对象的原型没有原型，如果Object中依然没有找到，则会返回 undefined</li>
                <li>使用同一个构造函数创建的对象，我们成为一类对象，也将一个构造函数称为一类</li>
                <li>我们将通过一个构造函数创建的对象，称为是该类的实例</li>
                <li>
                  this 的情况
                  <ol>
                    <li>当以函数的形式调用时，this 是window对象</li>
                    <li>当以方法的形式调用时，谁调用方法this ，就是谁</li>
                    <li>当以构造函数的形式调用时，this就是新创建的那个对象</li>
                  </ol>
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
                  <ol>
                    <li>构造函数名字首字母要大写</li>
                    <li>我们构造函数不需要return就可以返回结果</li>
                    <li>我们调用构造函数必须使用new</li>
                    <li>我们只要new Star() 调用函数就创建一个对象</li>
                  </ol>
                </li>
                <li>构造函数，如Stars()，抽象了对象的公其部分，封装到了函数里面，它泛指某一大类（class）</li>
                <li>创建对象，如new Stars0，特指某一个，通过new关键字创建对象的过程我们也称为对象实例化</li>
                <li>检查 obj中是否含有某个 属性名 语法： ‘属性名’ in 对象</li>
              </ul>
            </li>
          </ol>
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
  class Person {         // 创建一个构造函数
    #name;             // 必须封闭类中声明私有字段“#name”
    #age;              // 必须封闭类中声明私有字段“#gae”
    #sex;              // 必须封闭类中声明私有字段“#sex”
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
              class 静态成员只能通过构造函数来访问 ，实例成员只能通过实例化对象访问
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
              constructor 构造函数 主要用于记录该对象引用于哪个构造函数，它可以让原型对象重新指向原来的构造函数
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
              <ol>
                <li>当访问一个对象的属性包括方法时，首先查找这个对象自身有没有该属性或者方法</li>
                <li>如果没有就查找它的原型，也就是__proto__指向的prototype原型对象</li>
                <li>如果还没有就查找原型对象的原型，Object的原型对象，记住 O要大写</li>
                <li>以此类推一直找到Object为止（null）,因为Object 后面已经没有原型对象了</li>
                <li>__proto__对象原型的意义就在于对象成员查找机制提供一个方向，或者说是一路线</li>
                <li>就近原则，自身有则先采用自身上的属性和方法，没有才往原型链路上查找</li>
              </ol>
            </li>
            <li>
              原型对象this的指向
              <ol>
                <li>构造函数中，this的指向是对象实例，就是创建出来实例化对象</li>
                <li>构造函数原型对象中的this 指向的是创建出来的实例对象，谁调用this就指向谁</li>
                <li>普通函数的this指向的是window</li>
              </ol>
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
            <li>变量： 每次执行都会把对象的属性名 赋值给变量 对象[变量]，这样可以找到属性值</li>
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
            <li>程序运行一段时间后也会产生垃圾,和生活一样，生活时间长了以后会产生生活垃圾</li>
            <li>
              理解：如果一个对象没有任何的变量对其进行引用，那么这个对象就是一个垃圾
              <ol>
                <li>创建一个对象，给对象赋值null,断开引用地址后，这个对象就是垃圾，除非有其他变量引用这个对象</li>
                <li>垃圾对象的存在，会严重的影响程序的性能</li>
                <li>在JS中有自动的垃圾回收机制，这些垃圾对象会被解释器自动回收，我们无需手动处理</li>
              </ol>
            </li>
          </ul>
          <p>New 关键字</p>
          <ul>
            <li>
              new关键字执行过程
              <ol>
                <li>new构造函数可以在内存中创建了一个空的对象 (等同于：他们两个生了个宝宝)</li>
                <li>this就会指向刚才创建的空对象 (等同于： 这个宝宝必须是亲生的this指向)</li>
                <li>执行构造函数里面的代码给这个空对象添加属性和方法 (等同于：教孩子读书，一肚子墨水)</li>
                <li>返回这个对象 (所以构造函数中不需要 return) (等同于长大挣钱回报父母)</li>
              </ol>
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
            <li>属性：对象里面的变量称为属性，不需要声明，用来描述该对象的特征</li>
            <li>函数：单独存在的，通过“函数名（）”的方式就可以调用</li>
            <li>方法：对象里面的函数称为方法，方法不需要声明，使用“对象.方法名（）"的方式就可以调用， 方法用来描述该对象的行为和功能。</li>
          </ul>
          <p>小结</p>
          <ul>
            <li>对象可以让代码结构更清晰</li>
            <li>对象复杂数据类型object。</li>
            <li>本质：对象就是一组无序的相关属性和方法的集合。</li>
            <li>构造函数泛指某一大类，比如苹果，不管是红色苹果还是绿色苹果，都统称为苹果。</li>
            <li>对象实例特指一个事物，比如这个苹果、正在给你们讲课的老师等。</li>
            <li>for..in 语句用于对对象的属性进行循环操作。</li>
          </ul>
          <p>内置对象</p>
          <ul>
            <li>JavaScript中的对象分为3种：自定义对象、内置对象、浏览器对象</li>
            <li>前面两种对象是JS基础内容，属于ECMAScript；第三个浏览器对象属于我们JS独有的，我们JS API讲解</li>
            <li>内置对象就是指JS语言自带的一些对象，这些对象供开发者使用，并提供了一些常用的或是最基本而必要的功能（属性和方法）</li>
            <li>内置对象最大的优点就是帮助我们快速开发</li>
            <li>JavaScript提供了多个内置对象：Math、Date、Array、string等</li>
          </ul>
          <p>查文档</p>
          <ul>
            <li>
              MDN网址：
              <el-link type="primary" icon="Link" target="_blank" href="https://developer.mozilla.org/zh-CN/">https://developer.mozilla.org/zh-CN/</el-link>
            </li>
            <li>学习一个内置对象的使用，只要学会其常用成员的使用即可，我们可以通过查文档学习，可以通过MDN/W3C来查询。</li>
            <li>Mozilla开发者网络（MDN）提供了有关开放网络技术（Open Web）的信息，包括HTML、CSS和万维网及HTML5应用的API。</li>
          </ul>
          <p>如何学习对象中的方法</p>
          <ul>
            <li>查阅该方法的功能 比如输入 math.max() , 功能就会显示出来：函数返回一组数中的最大值</li>
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
              <ol>
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
              </ol>
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
            <li>Date对象是基于格林威治标准时间 1970年1月1日 00：00：00（世界标准时间）起的毫秒数，调用时，中国时间和外国时间差8小时， -28800000</li>
            <li>
              为什么计算机起始时间从1970年开始？ 我们经常利用总的毫秒数来计算时间，因为它更精确 两种方法，一种通过 valueOf () 一种通过 getTime ()
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
              <ol>
                <li>输入的时间减去现在的时间就是剩余的时间，即倒计时，但是不能拿着时分秒相减， 比如05分减去25分，结果会是负数的。</li>
                <li>用时间戳来做。用户输入时间总的毫秒数 减去 现在时间的总毫秒数，得到的就是 剩余时间的毫秒数</li>
                <li>把剩余时间总的毫秒数转换为天、时、分、秒（时间戳转换为时分秒）转换公式如下：</li>
              </ol>
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
              <ol>
                <li>目标：把旧数组里面不重复的元素选取出来放到新数组中，重复的元素只保留一个，放到新数组中去重。</li>
                <li>核心算法：我们遍历旧数组，然后拿着旧数组元素去查询新数组，如果该元素在新数组里面没有出现过，我们就添加，否则不添加。</li>
                <li>我们怎么知道该元素没有存在？利用新数组.indexOf（数组元素）如果返回时-1就说明新数组里面没有改元素</li>
              </ol>
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
              <ol>
                <li>指的是里面的值不可变，虽然看上去可以改变内容，但其实是地址变了，内存中新开辟了一个内存空间。</li>
              </ol>
              <pre><code class="language-js line-numbers">  var num1 = 10;
  console.log (num1) ;   // 此时肯定会输出 10 
  num1 = 20;             // 给num1 赋值一个 20，替换原来的数据
  console.log (num1) ;   // 此时输出的肯定是 20 ， 但是 10 的地址值在内存不会销毁，而是 num1的指向 到 20 地址

  // 所以，我们字符串的不可变，所以不要大量的拼接字符串</code></pre>
            </li>
            <li>
              根据字符返回位置 . indexOf('要查找的字符' , 起始位置)
              <ol>
                <li>字符串所有的方法，都不会修改字符串本身（字符串是不可变的），操作完成会返回一个新的字符串。</li>
              </ol>
              <pre><code class="language-js line-numbers">  indexOf("要查找的字符",开始位置)    返回指定内容在元字符串中的位置，如果找不到就返回-1，开始的位置是index索引号
  lastIndexOf()                   从后往前找，只找第一个匹配的

  var str = '猜猜字是第几位，猜猜字是第几位';
  console.log(str.indexOf('字'));        // 2
  console.log(str.indexOf('是', 4));     // 11   查找的字符，从第四位开始查找</code></pre>
            </li>
            <li>
              案例：查找字符串”abcoefoxyozzopp”中所有0出现的位置以及次数
              <ol>
                <li>核心算法：先查找第一个o出现的位置</li>
                <li>然后只要indexOf返回的结果不是-1就继续往后查找</li>
                <li>因为indexOf只能查找到第一个，所以后面的查找，利用第二个参数，当前索引加1，从而继续查找</li>
              </ol>
              <pre><code class="language-js line-numbers">  var str = 'abcoefoxyozzopp';
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
              <ol>
                <li>判断一个字符串abcoefoxyozzopp'中出现次数最多的字符，并统计其次数。</li>
              </ol>
              <pre><code class="language-js line-numbers">  /* 核心算法：
      利用charAt（）遍历这个字符串
      把每个字符都存储给对象，如果对象没有该属性，就为1，如果存在了就+1
      遍历对象，得到最大值和该字符 */
  var str = 'abcdefgqcfgseaeaa';
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
              <pre><code class="language-js line-numbers">  var str = 'abcdefgqcfgseaeaa';
  console.log(str.replace('c', 'x'));       // 只会替换第一个满足条件的
  while (str.indexOf('c') != -1) {          // 使用循环，遍历字符串，如果找到不等于 -1
      str = str.replace('c', 'x');          // 则替换
  }
  console.log(str);</code></pre>
            </li>
            <li>
              把字符串转换成数组 split（'分隔符‘）
              <pre><code class="language-js line-numbers">  var str = 'abcd,efgqc,fgseae,aa';
  console.log(str.split(','));              // 用对应的分隔符来划分数组
  var str = 'abcd&efgqc&fgseae&aa';
  console.log(str.split('&'));              // 用对应的分隔符来划分数组</code></pre>
            </li>
            <li>
              转换成大写 toUpperCase () ; 和 小写 toLowerCase () ;
              <pre><code class="language-js line-numbers">  var str = 'abcd,efgqc,fgseae,aa';
  console.log(str.toUpperCase());            // 转换成 大写
  console.log(str.toLowerCase());            // 转换成 小写</code></pre>
            </li>
            <li>
              案例
              <pre><code class="language-js line-numbers">  var str = 'abaasdffggghhjkkgfddsssss3444343';

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
  var str = 'abaasdffggghhjkkgfddsssss3444343';
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
              <ol>
                <li>Math 和其他对象不同，它不是一个构造函数，它属于一个工具类，不用创建对象，它里面封装了数学数学的相关属性和方法</li>
              </ol>
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
        </div>
      </el-card>
      <el-card shadow="hover" id="part4">
        <h2>正则表达式</h2>
        <div class="ls-cot">
          <p>前言</p>
          <ul>
            <li>做验证用的，比如邮箱，定义规则，不仅人能看懂，机器也能看的懂，所以定一个规则，就叫正则表达式</li>
            <li>正则表达式用于定义一些字符串的规则</li>
            <li>计算机可以根据正则表达式，检查一个字符串是否符合规则，获取讲字符串中符合规则的内容提取出来</li>
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
  [adgk]                      // 查找给定集合内的任何字符。
  [^adgk]                     // 查找给定集合外的任何字符。
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
              <ol>
                <li>可以将一个字符串拆分为一个数组</li>
                <li>方法中可以传递一个正则表达式作为参数，这样方法将会根据正则表达式去拆分字符串</li>
                <li>
                  例如
                  <pre><code class="language-js line-numbers">  var phoneReg = / ^1[3|4|5|7|8]\d{9}$/;</code></pre>
                </li>
              </ol>
            </li>
            <li>
              手机规则（11位）
              <ol>
                <li>以1开头</li>
                <li>3 - 9任意数字</li>
                <li>以后任意数字，长度只能9位</li>
                <li>正则表达式写法： ^1 [3 - 9] [0-9]{9}&</li>
              </ol>
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
        </div>
      </el-card>
      <el-card shadow="hover" id="part5">
        <h2>其他</h2>
        <div class="ls-cot">
          <p>简单类型和复杂类型</p>
          <ul>
            <li>简单类型又叫做基本数据类型或者值类型，复杂类型又叫做引用类型。</li>
            <li>
              值类型：
              <ol>
                <li>简单数据类型/基本数据类型，在存储时变量中存储的是值本身，</li>
                <li>因此叫做值类型string，number，boolean，undefined，</li>
                <li>null ( typeof(返回的是一个空的对象))</li>
                <li>// 如果有个变量我们以后打算存储为对象，暂时没想好放啥，这个时候就给null</li>
              </ol>
            </li>
            <li>
              引用类型：
              <ol>
                <li>复杂数据类型，在存储时变量中存储的仅仅是地址（引用），因此叫做引用数据类型</li>
                <li>通过new关键字创建的对象（系统对象、自定义对象），如Object、Array、Date等</li>
              </ol>
            </li>
          </ul>
          <p>堆和栈</p>
          <ul>
            <li>堆栈空间分配区别：</li>
            <li>
              栈（操作系统）：
              <ol>
                <li>由操作系统自动分配释放存放函数的参数值、局部变量的值等。其操作方式类似于数据结构中的栈；</li>
                <li>简单数据类型存放到栈面</li>
              </ol>
            </li>
            <li>
              堆（操作系统）：
              <ol>
                <li>存储复杂类型（对象），一般由程序员分配释放，若程序员不释放，由垃圾回收机制回收。</li>
                <li>复杂数据类型存放到堆里面</li>
              </ol>
            </li>
            <li>注意：JavaScript中没有堆栈的概念，通过堆栈的方式，可以让大家更容易理解代码的一些执行方式，便于将来学习其它语言</li>
          </ul>
          <p>简单类型的内存分配</p>
          <ul>
            <li>值类型（简单数据类型）：string，number，boolean，undefined，null</li>
            <li>
              值类型变量的数据直接存放在变量（栈空间）中
              <ol>
                <li>简单数据类型是存放在栈里面里面直接开辟一个空间存放的是值</li>
                <li>复杂数据类型首先在栈里面存放 地址 十六进制表示 然后这个地址指向堆里面的数据</li>
              </ol>
            </li>
            <li>
              简单类型传参
              <ol>
                <li>函数的形参也可以看做是一个变量，当我们把一个值类型变量作为参数传给函数的形参时，其实是把变量在栈空间里的值</li>
                <li>复制了一份给形参，那么在方法内部对形参做任何修改，都不会影响到的外部变量。</li>
              </ol>
            </li>
          </ul>
          <p>总结</p>
          <ul>
            <li>
              JS基础阶段
              <ol>
                <li>我们学习的是ECMAScript标准规定的基本语法</li>
                <li>要求同学们掌握Js基础语法</li>
                <li>只学习基本语法，做不了常用的网页交互效果</li>
                <li>目的是为了Js后面的课程打基础、做铺垫</li>
              </ol>
            </li>
            <li>
              Web APIs阶段
              <ol>
                <li>Web APIs是W3C组织的标准</li>
                <li>Web APIs我们主要学习DOM和BoM</li>
                <li>Web APIs是我们Js所独有的部分</li>
                <li>我们主要学习页面交互功能</li>
                <li>需要使用Js基础的课程内容做基础</li>
              </ol>
            </li>
            <li>Js基础学习EcMAScript基础语法为后面作铺垫，Web APIs是Js的应用，大量使用Js基础语法做交互效果</li>
          </ul>
          <p>API 和 Web API</p>
          <ul>
            <li>
              API（Application Programming Interface，应用程序编程接口）是一些预先定义的函数，目的是提供应用程序与开发人员 基于某软件或硬件得以访问一组例程的能力，又无需访问源码，或理解内部工作机制的细节。
              <ol>
                <li>简单理解：API是给程序员提供的一种工具，以便能更轻松的实现想要完成的功能。</li>
              </ol>
            </li>
            <li>
              Web API是浏览器提供的一套操作浏览器功能和页面元素的API（BOM和DOM）
              <ol>
                <li>现阶段我们主要针对于浏览器讲解常用的API，主要针对浏览器做交互效果。</li>
                <li>比如我们想要浏览器弹出一个警示框，直接使用alert（‘弹出’）</li>
              </ol>
            </li>
            <li>
              MDN详细 API: https://developer.mozilla.org/zh-CN/docs/Web/API
              <ol>
                <li>因为WebAPI很多，所以我们将这个阶段称为Web APIs</li>
              </ol>
            </li>
            <li>
              总结：
              <ol>
                <li>APl是为我们程序员提供的一个接口，帮助我们实现某种功能，我们会使用就可以了，不必纠结内部如何实现</li>
                <li>WebAPI主要是针对于浏览器提供的接口，主要针对于浏览器做交互效果。</li>
                <li>WebAPI一般都有输入和输出（函数的传参和返回值），WebAPl很多都是方法（函数）</li>
                <li>学习Web APl可以结合前面学习内置对象方法的思路学习</li>
              </ol>
            </li>
          </ul>
        </div>
      </el-card>
      <el-card shadow="hover" id="part6">
        <h2>DOM</h2>
        <div class="ls-cot">
          <p>简介</p>
          <ol>
            <li>文档对象模型（Document Object Model，简称DOM），是W3C组织推荐的处理可扩展标记语言（HTML或者XML） 的标准编程接口，W3C已经定义了一系列的DOM接口，通过这些DOM接口可以改变网页的内容、结构和样式。</li>
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
                <li>节点：网页中的所有内容都是节点（标签、属性、文本、注释等），DOM中使用node表示</li>
                <li>DOM 把以上内容都看做是对象</li>
              </ul>
            </li>
            <li>
              节点
              <ul>
                <li>Node —— 构成HTML文档最基本的单元。</li>
                <li>
                  常用节点分为四类
                  <ol>
                    <li>文档节点：整个HTML文档</li>
                    <li>元素节点：HTML文档中的HTML标签</li>
                    <li>属性节点：元素的属性</li>
                    <li>文本节点：HTL标签中的文本内容</li>
                  </ol>
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
                  <ol>
                    <li>HTMLDocument ==&gt; Document ==&gt; Node ==&gt; EventTarget ==&gt; Object.prototype ==&gt; null</li>
                    <li>
                      查询文档：
                      <el-link type="primary" icon="Link" target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document">https://developer.mozilla.org/zh-CN/docs/Web/API/Document</el-link>
                    </li>
                  </ol>
                </li>
              </ul>
            </li>
          </ol>
          <p>获取元素</p>
          <ol>
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
          </ol>
          <p>事件基础 (是由三部分组成)</p>
          <ol>
            <li>JavaScript使我们有能力创建动态页面，而事件是可以被JavaScript侦测到的行为。 简单理解：触发---响应机制。 网页中的每个元素 都可以产生某些可以触发JavaScript的事件，例如，我们可以在用户点击某按钮时产生一个事件</li>
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
                <li>click事件：单击事件，类似于PC端的click，但在移动端中，连续click的触发有200ms ~ 300ms的延迟</li>
                <li>
                  touch类触摸事件
                  <ol>
                    <li>touchstart： 手指触摸到屏幕会触发</li>
                    <li>touchmove： 当手指在屏幕上移动时，会触发</li>
                    <li>touchend： 当手指离开屏幕时，会触发</li>
                    <li>touchcancel： 可由系统进行的触发，比如手指触摸屏幕的时候，突然alert一下，或者系统中其他打断了touch的行为，可以触发</li>
                  </ol>
                </li>
                <li>
                  tap类事件: 触碰事件，我目前还不知道它和touch的区别，一般用于代替click事件，
                  <ol>
                    <li>tap: 手指碰一下屏幕会触发</li>
                    <li>longTap: 手指长按屏幕会触发</li>
                    <li>singleTap: 手指碰一下屏幕会触发</li>
                    <li>doubleTap: 手指双击屏幕会触发</li>
                  </ol>
                </li>
                <li>
                  swipe类事件:
                  <ol>
                    <li>swipe： 手指在屏幕上滑动时会触发</li>
                    <li>swipeLeft： 手指在屏幕上向左滑动时会触发</li>
                    <li>swipeRight： 手指在屏幕上向右滑动时会触发</li>
                    <li>swipeUp： 手指在屏幕上向上滑动时会触发</li>
                    <li>swipeDown： 手指在屏幕上向下滑动时会触发</li>
                  </ol>
                </li>
              </ul>
            </li>
          </ol>
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
              return '今天是：' + Year + '年' + Month + '月' + mDate + '日，' + arr[day] + '' + Hours + ':' + Minutes + ':' + Senconds;;
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
              <ol>
                <li>innerText、innerHTML改变元素内容</li>
                <li>src、href</li>
                <li>id、alt、title</li>
              </ol>
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
              <ol>
                <li>
                  利用DOM可以操作如下表单元素的属性： type、value、checked、selected、disabled
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
              </ol>
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
              <ol>
                <li>element.style 行内样式操作</li>
                <li>element.className 类名样式操作</li>
                <li>注意里面的属性采取驼峰命名法，如 background-color = backgroundColor</li>
                <li>权重问题：js 修改了样式是相当于行内样式，比css 样式内嵌样式都要权重高</li>
              </ol>
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
                  // 判断，取反，如果j_tbs里的复选框没有被选中，那么变量为flase
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
          <ol>
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
                  <ol>
                    <li>利用父子兄节点关系获取元素</li>
                    <li>逻辑性强，但是兼容性稍差</li>
                  </ol>
                </li>
                <li>这两种方式都可以获取元素节点，我们后面都会使用，但是节点操作更简单</li>
              </ul>
            </li>
            <li>网页中的所有内容都是节点（标签、属性、文本、注释等），在DOM中，节点使用node来表示。</li>
            <li>
              HTML DOM树中的所有节点均可通过JavaScript进行访问，所有HTML元素（节点）均可被修改，也可以创建或删除。
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
                  实际开发中，firstChild 和 lastChild 包含其他节点，操作不方便，而 firstElementChild 和 lastElementChi1d 又有兼容性问题，那么我们如何获取第一个子元素节点或最后一个子元素节点呢？
                  <pre><code class="language-js line-numbers">  // 解决方案: 实际开发的写法既没有兼容性问题又返回第一个子元素
  console.log(ul.children[0]);                       // 因为是伪数组，所以想拿第几个 []里写索引号
  console.log(ul.children[ul.children.length - 1]);  // 取最后一个<</code></pre>
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
          </ol>
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
      3、阻止链接跳转需要添加javascrip：tvoid（0）；或者 javascript：； 用后面一个更简单 */
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
              <ol>
                <li>如果cloneNode ( ) 中括号参数为空或者为false，则是浅拷贝，即只克隆复制节点本身，不克隆里面的子节点。</li>
                <li>如果cloneNode (true) 中括号参数为true，则是深拷贝，复制标签，复制里面的内容</li>
                <li>如果是数值类型的拷贝都是深拷贝</li>
                <li>引用数据类型才有深拷贝和浅拷贝</li>
              </ol>
            </li>
            <li>
              动态生成表格 239集
              <ol>
                <li>因为里面的学生数据都是动态的，我们需要js动态生成。这里我们模拟数据，自己定义好数据。数据我们采取对象形式存储。</li>
                <li>所有的数据都是放到tbody里面的行里面。</li>
                <li>因为行很多，我们需要循环创建多个行（对应多少人）</li>
                <li>每个行里面又有很多单元格（对应里面的数据），我们还继续使用循环创建多个单元格，并且把数据存入里面（双重for循环）</li>
                <li>最后一列单元格是删除，需要单独创建单元格。</li>
              </ol>
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
          <ol>
            <li>文档对象模型（DocumentObject Model，简称 DOM），是W3C组织推荐的处理可扩展标记语言（HTML或者XML）的标准编程接口。</li>
            <li>
              W3C已经定义了一系列的DOM接口，通过这些DOM接口可以改变网页的内容、结构和样式。
              <ul>
                <li>对于JavaScript，为了能够使JavaScript操作HTML，JavaScript就有了一套自己的dom编程接口。</li>
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
            <li>我们获取过来的DOM元素是一个对象（object），所以称为文档象模型，关于dom操作，我们主要针对于元素的操作。</li>
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
          </ol>
          <p>事件操作 (给元素注册事件，采取事件源事件类型 = 事件处理程序)</p>
          <ul>
            <li>
              事件高级 - 注册事件概述
              <ol>
                <li>给元素添加事件，称为注册事件或者绑定事件。</li>
                <li>注册事件有两种方式：传统方式和方法监听注册方式</li>
                <li>特点：注册事件的唯一性，同一个元素同一个事件只能设置一个处理函数，最后注册的处理函数将会覆盖前面注册的处理函数</li>
              </ol>
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
              <ol>
                <li>w3c标准 推荐方式 addEventListener（）它是一个方法 IE9之前的IE不支持此方法，可使用 attachEvent（）代替</li>
                <li>特点：同一个元素同一个事件可以注册多个监听器 按注册顺序依次执行</li>
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
                  注册事件兼容性解决方案和处理的原则：首先照顾大多数浏览器，再处理特殊浏览器， 作为了解就可以了
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
              </ol>
            </li>
            <li>
              删除事件
              <ol>
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
                  删除事件兼容性解决方案和处理的原则：首先照顾大多数浏览器，再处理特殊浏览器， 作为了解就可以了
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
              </ol>
            </li>
          </ul>
          <p>DOM事件流</p>
          <ol>
            <li>事件流描述的是从页面中接收事件的顺序。</li>
            <li>事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程即DOM事件流。</li>
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
                  <ol>
                    <li>当document 没有绑定事件，那么会顺着下一个element html ，如果没有接着下一个查询</li>
                  </ol>
                </li>
                <li>
                  当前目标阶段
                  <ol>
                    <li>当找到element div 时发现有绑定事件，此时称为目标阶段</li>
                  </ol>
                </li>
                <li>
                  冒泡阶段
                  <ol>
                    <li>事件冒泡： IE最早提出，事件开始时由最具体的元素接收，然后逐级向上传播到到DOM最顶层节点的过程。</li>
                    <li>事件捕获： 网景最早提出，由DOM最顶层节点开始，然后逐级向下传播到到最具体的元素接收的过程</li>
                  </ol>
                </li>
              </ul>
            </li>
            <li>理解： 我们向水里面扔一块石头，首先它会有一个下降的过程，这个过程就可以理解为从最顶层向事件发生的最具体元素 （目标点）的捕获过程；之后会产生泡泡，会在最低点（最具体元素）之后漂到水面上，这个过程相当于事件冒泡。</li>
            <li>
              DOM事件流2
              <ul>
                <li>
                  事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程即DOM事件流。
                  <ol>
                    <li>JS代码中只能 执行捕获 或者 冒泡 其中的一个阶段。</li>
                    <li>onclick 和 attachEvent 只能得到冒泡阶段。</li>
                    <li>addEventListener（type，listener[，useCapture]）第三个参数如果是true，表示在事件捕获阶段调用事件处理程序；如果是false（不写默认就是false），表示在事件冒泡阶段调用事件处理程序。</li>
                    <li>实际开发中我们很少使用事件捕获，我们更关注事件冒泡。</li>
                    <li>有些事件是没有冒泡的，比如onblur、onfocus、onmouseenter、onmouseleave</li>
                    <li>事件冒泡有时候会带来麻烦，有时候又会帮助很巧妙的做某些事件，我们后面讲解。</li>
                  </ol>
                  <pre><code class="language-js line-numbers">  var divs = document.querySelectorAll('div');
  // 如果是true,表示事件获取阶段     如果为false,表示事件冒泡阶段
  divs[1].addEventListener('onclick', function() {}, true);  // true   或者  false(默认)</code></pre>
                </li>
                <li>false 执行顺序 ： son -&gt; father -&gt; body -&gt; html -&gt; document</li>
                <li>true 执行顺序 ： document -&gt; html -> body -&gt; father -&gt; son</li>
              </ul>
            </li>
          </ol>
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
              <ol>
                <li>标准浏览器中是浏览器给方法传递的参数，只需要定义形参e就可以获取到。</li>
                <li>在IE6～8中，浏览器不会给方法传递参数，如果需要的话，需要到window.event中获取查找。</li>
              </ol>
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
              长按press事件会导致浏览器弹出菜单，苹果的可以用-webkit-touch-callout: none;来禁止，但是安卓的不行。禁止弹出只能用js来控制:
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
              <ol>
                <li>开始时由最具体的元素接收，然后逐级向上传播到，到DOM最顶层节点。</li>
                <li>事件冒泡本身的特性，会带来的坏处，也会带来的好处，需要我们灵活掌握。</li>
              </ol>
            </li>
            <li>
              阻止事件冒泡
              <ol>
                <li>标准写法：利用事件对象里面的 el.stopPropagation（）方法</li>
                <li>非标准写法： IE6 - 8 利用事件对象 cancelBubble 属性 cancel 取消 Bubble 泡泡 ，取消冒泡</li>
              </ol>
            </li>
          </ul>
          <p>事件委托</p>
          <ol>
            <li>
              事件冒泡本身的特性，会带来的坏处，也会带来的好处，需要我们灵活掌握。生活中有如下场景：
              <ul>
                <li>
                  咱们班有100个学生，快递员有100个快递，如果一个个的送花费时间较长。同时每个学生领取的时候， 也需要排队领取，也花费时间较长，例如？
                  <ol>
                    <li>解决方案： 快递员把100个快递，委托给班主任，班主任把这些快递放到办公室，同学们下课自行领取即可。</li>
                    <li>优势： 快递员省事，委托给班主任就可以走了。同学们领取也方便，因为相信班主任。</li>
                  </ol>
                </li>
              </ul>
            </li>
            <li>
              事件委托
              <ul>
                <li>事件委托也称为事件代理，在jQuery里面称为事件委派。</li>
                <li>不是每个子节点单独设置事件监听器，而是事件监听器设置在其父节点上，然后利用冒泡原理影响设置每个子节点。</li>
                <li>
                  案例
                  <ol>
                    <li>给ul注册点击事件，然后利用事件对象的target来找到当前点击的 li ，因为点击 li，事件会冒泡到ul上， ul 上有注册事件，就会触发事件监听器。</li>
                  </ol>
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
          </ol>
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
              <ol>
                <li>event对象代表事件的状态，跟事件相关的一系列信息的集合。现阶段我们主要是用鼠标事件对象</li>
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
              </ol>
            </li>
            <li>
              鼠标移动
              <ol>
                <li>鼠标不断的移动，使用鼠标移动事件：mousemove</li>
                <li>在页面中移动，给document注册事件</li>
                <li>图片要移动距离，而且不占位置，我们使用绝对定位即可</li>
                <li>核心原理：每次鼠标移动，我们都会获得最新的鼠标坐标，把这个x和y坐标做为图片的top和left值就可以移动图片</li>
              </ol>
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
      // 快递单号输入内容时， 上面的大号字体盒子（con）显示(这里面的字号更大）
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
        </div>
      </el-card>
      <el-card shadow="hover" id="part7">
        <h2>BOM</h2>
        <div class="ls-cot">
          <p>概述</p>
          <ul>
            <li>
              BOM（Browser Object Model）即浏览器对象模型，它提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是window。BOM由一系列相关的对象构成，并且每个对象都提供了很多方法与属性。 BOM缺乏标准，JavaScript语法的标准化组织是ECMA，DOM的标准化组织是W3C，BOM最初是Netscape浏览器标准的一部分。
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
              <ol>
                <li>它是JS访问浏览器窗口的一个接口。</li>
                <li>是一个全局对象。定义在全局作用域中的变量、函数都会变成window对象的属性和方法。 在调用的时候可以省略window，前面学习的对话框都属于window对象方法，如alert（）、prompt（）等。</li>
              </ol>
            </li>
            <li>注意：window下的一个特殊属性window.name</li>
          </ul>
          <p>window对象常见事件</p>
          <ol>
            <li>
              窗口加载事件1
              <ul>
                <li>注意1: 有了window.onload就可以把JS代码写到页面元素的上方，因为onload是等页面内容全部加载完毕，再去执行处理函数。</li>
                <li>注意2: window.onload传统注册事件方式只能写一次，如果有多个，会以最后一个window.onload为准。 如果使用addEventListener则没有限制。</li>
              </ul>
              <pre><code class="language-js line-numbers">  window.onload=function（）{}   或者   window.addEventListener（"load"，function（）{}）； 
  
  // window.onload是窗口（页面）加载事件，当文档内容完全加载完成才会触发该事件（包括图像、脚本文件、CSS文件等，就调用的处理函数。</code></pre>
            </li>
            <li>
              窗口加载事件2
              <pre><code class="language-js line-numbers">  document.addEventListener('DOMContentLoaded'，function(){})</code></pre>
            </li>
            <li>DOMContentLoaded 事件触发时，仅当DOM加载完成，不包括样式表，图片，flash等等。</li>
            <li>ie 9 以上才支持</li>
            <li>如果页面的图片很多的话，从用户访问到onload触发可能需要较长的时间，交互效果就不能实现， 必然影响用户的体验，此时用DOMContentLoaded事件比较合适。</li>
            <li>总结</li>
            <li>load等页面内容全部加载完毕，包含页面dom元素图片flash css等等</li>
            <li>DOMContentLoaded 是DOM加载完毕，不包含图片flash css等就可以执行,加载速度比 load 更快一些</li>
            <li>
              调整窗口大小事件
              <ul>
                <li>注意1：只要窗口大小发生像素变化，就会触发这个事件。</li>
                <li>注意2：我们经常利用这个事件完成响应式布局。window.innerWidth当前屏幕的宽度</li>
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
                  <ol>
                    <li>window.setTimeout（调用函数（或者函数名），[延迟的毫秒数]）；</li>
                    <li>setTimeout() 方法用于设置一个定时器，该定时器在定时器到期后执行调用函数。</li>
                    <li>setTimeout() 这个调用函数我们也称为 回调函数callback</li>
                    <li>因为：普通函数是按照代码顺序直接调用。而这个函数，需要等待时间， 时间到了才去调用这个函数，因此称为回调函数。</li>
                    <li>简单理解：回调，就是回头调用的意思。上一件事干完，再回头再调用这个函数。以前我们讲的element.onclick=function）{} 或者element.addEventListener（"click"，fn）；里面的函数也是回调函数。</li>
                  </ol>
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
                  <ol>
                    <li>window.setInterval（回调函数，[间隔的毫秒数]）；</li>
                    <li>setInterval()方法重复调用一个函数，每隔这个时间，就去调用一次回调函数。</li>
                    <li>区别1：setTimeout () 和 setInterval () 参数类型、写法、作用都是一样的</li>
                    <li>区别2：setTimeout延时时间到了，就去调用这个回调函数，只调用一次就结束了这个定时器</li>
                    <li>区别3：setInterval每隔这个延时间，就去调用这个回调函数，会调用很多次，重复调用这个函数</li>
                  </ol>
                </li>
              </ul>
            </li>
            <li>
              停止定时器
              <ul>
                <li>在做轮播图的时候，同一个元素时，开启定时器之前先关闭上一个定时器，跟节流阀的作用相同，不同元素就需要使用节流阀</li>
                <li>window.clearTimeout(timeoutID)</li>
                <li>clearTimeout（）方法取消了先前通过调用 setTimeout（）建立的定时器。</li>
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
                  <ol>
                    <li>这个倒计时是不断变化的，因此需要定时器来自动变化（setInterval）</li>
                    <li>三个黑色盒子里面分别存放时分秒</li>
                    <li>三个黑色盒子利用innerHTML放入计算的小时分钟秒数</li>
                    <li>第一次执行也是间隔毫秒数，因此刚刷新页面会有空白</li>
                    <li>最好采取封装函数的方式，这样可以先调用一次这个函数，防止刚开始刷新页面有空白问题</li>
                  </ol>
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
                <li>同时按钮里面的内容会变化，注意button里面的内容通过innerHTML修改</li>
                <li>里面秒数是有变化的，因此需要用到定时器</li>
                <li>定义一个变量，在定时器里面，不断递减</li>
                <li>如果变量为0说明到了时间，我们需要停止定时器，并且复原按钮初始状态。</li>
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
          </ol>
          <p>this 指向问题</p>
          <ul>
            <li>this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁， 一般情况下this的最终指向的是那个调用它的对象.</li>
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
              <ol>
                <li>当以函数的形式调用时，this 是window对象</li>
                <li>当以方法的形式调用时，谁调用方法this ，就是谁</li>
                <li>当以构造函数的形式调用时，this就是新创建的那个对象</li>
              </ol>
            </li>
          </ul>
          <p>JS 的执行队列</p>
          <ol>
            <li>
              JavaScript语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。这是因为Javascript这门脚本语言诞生的使命所致
              <ul>
                <li>JavaScript是为处理页面中用户的交互，以及操作DOM而诞生的。比如我们对某个DOM元素进行添加和删除操作，不能同时进行。</li>
                <li>应该先进行添加，之后再删除。</li>
              </ul>
            </li>
            <li>单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。这样所导致的问题是：如果JS执行的时间过长，这样 就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。</li>
            <li>
              为了解决这个问题，利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程。于是JS中出现了同步和异步。
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
                <li>一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取任务队列中的异步任务，于是被读取的异步任务结束等待状态，进入执行钱，开始执行。</li>
              </ul>
            </li>
            <li>
              理解：把执行栈看做为主车道，任务队列看做为应急车道，当有坏车时（回调函数），开往应急车道，修好时再回到主车道最后一台 车的后面，这样执行不影响主车道的畅通
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
          </ol>
          <p>location 对象</p>
          <ul>
            <li>window对象给我们提供了一个location属性用于获取或设置窗体的URL，并且可以用于解析URL。因为这个属性返回的是一个对象， 所以我们将这个属性也称为location对象。</li>
            <li>
              统一资源定位符（Uniform Resource Locator，URL）是互联网上标准资源的地址。互联网上的每个文件都有一个唯一的URL，它 包含的信息指出文件的位置以及浏器应该怎么处理它。
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
              <ol>
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
              </ol>
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
        </div>
      </el-card>
    </template>
  </card-container>
</template>
<script setup lang="ts" name="Javascript2Page">
import { ref } from 'vue';
let data = ref([
  { id: 1, h2: '数组' },
  { id: 2, h2: '函数' },
  { id: 3, h2: '对象' },
  { id: 4, h2: '正则表达式' },
  { id: 5, h2: '其他' },
  { id: 6, h2: 'DOM' },
  { id: 7, h2: 'BOM' },
]);
</script>
<style scoped lang="scss"></style>
