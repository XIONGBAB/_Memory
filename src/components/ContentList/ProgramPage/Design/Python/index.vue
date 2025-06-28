<template>
  <card-container :data="data">
    <template #svg>
      <svg
        t="1737718400630"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4768"
        width="48"
        height="48"
      >
        <path
          d="M366.635375 495.627875c8.93024999-1.488375 17.8605-2.480625 26.79075-2.48062499h-7.44187499 241.61287499c10.418625 0 20.341125-1.488375 30.26362501-3.969 44.65124999-12.403125 77.3955-52.093125 77.3955-101.20950002V185.053625c0-57.5505-49.116375-101.2095-107.65912501-110.63587501-37.209375-5.9535-91.287-8.93024999-128.00025-8.93024999-36.71325001 0-71.938125 3.472875-103.194 8.93024999C305.115875 90.29374999 288.74374999 123.534125 288.74374999 185.053625v66.48075h223.25625001V288.74374999H216.3095C133.456625 288.74374999 65.983625 387.96874999 65.4875 510.0155v1.9845c0 22.325625 1.9845 43.659 6.449625 63.504C90.29374999 667.78325001 147.84424999 735.25625001 216.3095 735.25625001h35.224875v-106.66687501c0-62.51174999 46.63574999-120.558375 115.101-132.9615z m23.814-283.7835c-22.325625 0-40.68225001-18.356625-40.18612499-40.68225 0-22.325625 17.8605-40.68225001 40.18612499-40.68225s40.68225001 18.356625 40.68225 40.68225c-0.496125 22.82175001-18.356625 40.68225001-40.68225 40.68225z"
          fill="#0075AA"
          p-id="4769"
        />
        <path
          d="M949.086125 434.108375C927.75275001 349.271 872.682875 288.74374999 807.6905 288.74374999h-35.224875v94.75987501c0 78.883875-51.597 135.93825001-115.101 145.86075-6.449625 0.99224999-12.89925001 1.488375-19.34887499 1.48837501H396.402875c-10.418625 0-20.341125 1.488375-30.26362499 3.969-44.65124999 11.907-77.3955 48.62025001-77.3955 96.74437499V834.48125001c0 57.5505 58.046625 91.783125 115.10099998 108.15524999 67.969125 19.845 142.387875 23.317875 224.24850002 0 54.077625-15.379875 107.163-46.63574999 107.16299998-108.15525001v-61.5195h-223.25624999V735.25625001h295.6905c58.54275001 0 109.643625-49.6125 134.449875-122.04675001 10.418625-30.263625 16.372125-64.49625001 16.372125-101.2095 0-27.286875-3.472875-53.5815-9.426375-77.891625z m-316.52775 372.58987501c22.325625 0 40.186125 18.356625 40.186125 40.68224999 0 22.325625-18.356625 40.68225001-40.186125 40.68225001-22.325625 0-40.68225001-18.356625-40.68225-40.68225001 0.496125-22.325625 18.356625-40.68225001 40.68225-40.68225001z"
          fill="#FFD400"
          p-id="4770"
        />
      </svg>
      <h1>Python</h1>
    </template>
    <template #describe>
      <p>
        Python是一种高级、解释型、交互式和面向对象的脚本语言。Python是一种功能强大且易于学习的编程语言，具有广泛的应用领域和丰富的生态系统。无论是对于初学者还是资深开发者来说，Python都是一个值得学习和掌握的语言
      </p>
    </template>
    <template #content>
      <el-card id="part1" shadow="hover">
        <h2>前言</h2>
        <p>安装Python解释器</p>
        <ul>
          <li>
            3.10版本: 一款用于执行Python代码的应用程序，官网
            <el-link
              type="primary"
              icon="Link"
              target="_blank"
              href="https://www.python.org/downloads/"
            >
              https://www.python.org/downloads/
            </el-link>
            <ul>
              <li>双击安装</li>
              <li>
                第一个默认安装，第二个为自定义安装，都要勾选Add
                环境变量PATH的选项
              </li>
              <li>自定义安装选择安装路径即可，安装完点close..</li>
              <li>
                测试 => 点击开始 => 选择 3.10（64.bit）=>
                打开文件夹位置，把exe发送到桌面快捷放松，并双击打开
              </li>
              <li>输入print(20) 出现20及安装成功</li>
              <li>卸载 => 应用里控制面板 => 卸载即可</li>
              <li>
                PyCharm2021.1.2下载，以下的才能安装，1.3以上的不要装，官网选择其他版本，选2021以下的
                <ul>
                  <li>
                    安装官网：
                    <el-link
                      type="primary"
                      icon="Link"
                      target="_blank"
                      href="https://www.jetbrains.com/"
                    >
                      https://www.jetbrains.com/
                    </el-link>
                  </li>
                  <li>点击 Choose your tool</li>
                  <li>点击Pycharm 的buy => 再点击右上角的 download</li>
                  <li>
                    Professional 专业版 试用期30天 点击下载 || Community
                    社区免费版本，功能缺失也可以下载
                  </li>
                  <li>下载专业版进行安装</li>
                  <li>
                    双击默认安装，修改安装默认路径，全部勾选选项后进行默认安装。
                  </li>
                  <li>双击打开后，弹窗选择 Do not import settings</li>
                  <li>
                    选择Evaluate for free
                    免费验证的选项，或者用下列的方法使用激活码
                  </li>
                  <li>
                    输入网上找的激活码或者U盘里的文件夹。激活重启后再激活，直到激活成功
                  </li>
                  <li>
                    进入开发界面，file => settings => plugins => 右上齿轮
                    选第一个Mange Plugin Repositionise..... => 把自定义库导入
                    输入 https://plugins.zhile.io => 重启
                  </li>
                  <li>重新打开插件，输入IDE Eval Reset，进行安装，</li>
                  <li>如果许可证失效，就重新导入U盘里的许可证</li>
                  <li>安装好后，点了 apply 应用新装的插件</li>
                  <li>
                    菜单栏点 Help = > 点击最后一个插件，Eval Reset =>
                    点击右下角刷新按钮=> 退出重新进软件
                  </li>
                  <li>对其他软件也有效，记得勾选自动刷新选项</li>
                  <li>
                    使用，创建新项目
                    <ul>
                      <li>=> 选择创建项目位置</li>
                      <li>
                        => 选择python解释器的安装环境，默认安装位置选python.exe
                      </li>
                      <li>
                        => 勾选 Previously configured interpreter
                        三个点选择python解释器的安装位置exe程序，完成后关闭
                      </li>
                    </ul>
                  </li>
                  <li>
                    技巧
                    <ul>
                      <li>
                        鼠标放在代码上，按ctrl
                        可以看到语法格式，点击可以看到语法结构
                      </li>
                      <li>
                        模板注释 => file => setting => file and code Templates
                        => python script => 添加# coding:utf-8
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>
                        => 拷贝python.exe 安装目录的路径 D:\Software\Python3.10
                      </li>
                      <li>
                        => 系统高级属性，环境变量， Path 新增 新建这个路径即可
                        D:\Software\Python3.10
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>=> python 完整路径 + 文件名</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p>设置</p>
        <ul>
          <li>file => settings => Appearance 主题设置 light高亮的。</li>
          <li>file => settings => 搜font => 改变字体大小，便于编写</li>
          <li>
            安装ipython ：进入 python安装目录 D:\Software\Python3.10\Scripts
            地址栏输出cmd, 然后 输入 pip install ipython
            <ul>
              <li>使用： cmd => 输入 ipython => 即可使用了</li>
            </ul>
          </li>
          <li>
            file => settings => 搜索 keys => Smart Keys => 勾选 Surround
            selection on typing quote or brace => 选中变量输入“”
          </li>
          <li>
            输出的文件出现中文乱码：file => settings => Editor => File Encodings
            => 把IDE和project... 都改成UTF-8
          </li>
          <li>
            PyCharm会对项目进行索引创建，对于爬取图片的项目，可以不需要进行索引创建，因为会对pyCharm卡顿
            <ul>
              <li>
                解决方法：可以在存放图片的文件夹上右键 => Mark Directory as =>
                Excluded
              </li>
            </ul>
          </li>
        </ul>
        <p>理解</p>
        <ul>
          <li>
            什么是程序设计语言？
            <ul>
              <li>
                是计算机能够理解和识别用户操作意图的一种交互体系，它按照特定规则组织计算机指令，使计算机能够
                自动进行各种运算处理。程序设计语言又称为编程语言
              </li>
            </ul>
          </li>
          <li>
            什么是计算机程序？
            <ul>
              <li>
                是按照程序设计语言规则组织起来的一组计算机指令称为计算机程序
              </li>
            </ul>
          </li>
          <li>
            什么是计算机指令
            <ul>
              <li>计算机指令就是指挥机器工作的指示和命令</li>
            </ul>
          </li>
          <li>
            机器语言
            <ul>
              <li>
                是一种二进制语言，它直接使用二进制代码表达指令，是计算机硬件可以直接识别和执行的程序设计语言
              </li>
            </ul>
          </li>
          <li>
            汇编语言
            <ul>
              <li>使用方便助记符与机器语言中的指令一一对应</li>
            </ul>
          </li>
          <li>
            高级语言
            <ul>
              <li>是接近自然语言语言的一种计算机程序设计语言</li>
            </ul>
          </li>
          <li>
            编译
            <ul>
              <li>
                将源代码转换成目标代码的过程，通常，源代码是高级语言代码，目标代码是机器语言代码，执行编译的计算机程序
                称为编译器（Compiler）
              </li>
            </ul>
          </li>
          <li>
            解释
            <ul>
              <li>
                将源代码逐条转换成目标代码同时逐条运行目标代码的过程，执行解释的计算机程序称为解释器（Interpreter）
              </li>
            </ul>
          </li>
          <li>
            IPO程序编写方法
            <ul>
              <li>
                每个计算机程序都用来解决特定计算问题。每个程序都有统一的运算模式：输入数据、处理数据和输出数据
              </li>
              <li>IPO: Input，Process，Output 输入 => 过程 => 输出</li>
            </ul>
          </li>
          <li>python 是一种解释类型的编程语言</li>
          <li>python 语言通过 缩进 来体现语句之间的逻辑关系</li>
          <li>python 可以用任何文本编辑器编写，后缀 .py</li>
          <li>
            Python2.0用的是ASCII编码，不支持中文，如果要用，需要加 #
            encoding:utf-8，Python3.0支持 # conding:utf-8
          </li>
          <li>
            代码缩进（注意，不能随便缩进，会报错 非法空格）
            <ul>
              <li>
                Python语言采用严格的“缩进”来表示程序逻辑缩进是指每行语句开始前的空白区域，用来表示Python程序间的包含和层次关系
                一般代码不需要缩进，顶行编写且不留空白类定义、函数定义、流程控制语句，以及异常处理语句等，行尾的冒号和下一行
                的缩进表示一个代码块的开始，而缩进结束，则表示一个代码块的结束缩进可以使用空格或Tab键实现，通常情况下采用4个
                空格作为一个缩进量
              </li>
            </ul>
          </li>
        </ul>
        <p>案例</p>
        <ul>
          <li>
            网易云网页版 F12 开发者工具 => Network(网络) => 播放后会有选中
            .m4a音频文件=> Chrome会双击自动下载
          </li>
        </ul>
      </el-card>
      <el-card id="part2" shadow="hover">
        <h2>语法</h2>
        <p>注释</p>
        <ul>
          <li>单行注释： 以 ‘ # ’ 开始 到换行为止 都会被注释，且不会被解析</li>
          <li>
            多行注释： ''' 三个单引号开始三个单引号结束，里面的内容会被注释 '''
            """ 双引号也可以 """
          </li>
          <li>
            中文声明注释： # coding: utf-8 === #coding=utf-8 === # -*-
            coding:utf-8 -*-
          </li>
        </ul>
        <p>变量全小写常量全大写</p>
        <ul>
          <li>
            变量是保存和表示数据值的一种语法元素，可以简单的理解为“名字”变量的值是可以改变的，可以通过赋值方式被修改
          </li>
          <li>语法： 变量名 = value</li>
          <li>
            Python是一种动态类型的语言，变量的类型可以随时变化
            <ul>
              <li>
                使用内置函数type（）可以查看变量的数据类型允许多个变量指向同一个值
                print(type(myName)) // &lt;class 'str'&gt;
              </li>
              <li>
                使用内置函数 id（）可以返回变量所指的内存地址 print(id(myName))
                // 2225158012192
              </li>
            </ul>
          </li>
          <li>
            变量命名应遵循以下几条规则
            <ul>
              <li>变量名必须是一个有效的标识符</li>
              <li>变量名不能使用Python中的保留字</li>
              <li>慎用小写字母L l i I 和大写字母O</li>
              <li>应选择有意义的单词作为变量名</li>
            </ul>
          </li>
          <li>
            常量
            <ul>
              <li>常量就是在程序运行过程中，值不能改变的量</li>
              <li>Python中没有定义常量的保留字</li>
              <li>
                常量规定使用大写字母和下划线组成一常量首次赋值后，还是可以被其他代码修改的
              </li>
            </ul>
          </li>
          <li>
            保留字是Python已经被赋予特定意义的一些单词，在开发程序时，不可以把这些保留字作为变量、函数、类、模块和其他对象的名称来使用
            <table>
              <tbody>
                <tr>
                  <td>and</td>
                  <td>as</td>
                  <td>assert</td>
                  <td>break</td>
                  <td>class</td>
                  <td>continue</td>
                </tr>
                <tr>
                  <td>def</td>
                  <td>del</td>
                  <td>elif</td>
                  <td>else</td>
                  <td>except</td>
                  <td>finally</td>
                </tr>
                <tr>
                  <td>for</td>
                  <td>from</td>
                  <td>False</td>
                  <td>global</td>
                  <td>if</td>
                  <td>Import</td>
                </tr>
                <tr>
                  <td>in</td>
                  <td>is</td>
                  <td>lambda</td>
                  <td>nonlocal</td>
                  <td>not</td>
                  <td>None</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            标识符可以简单地理解为什一个名字，它主要用来标识变量、函数、类、模块和其他对象的名称Python
          </li>
          <li>
            标识符的命名规则
            <ul>
              <li>可以是字母、下划线“”和数字，并且第一个字符不能是数字</li>
              <li>不能使用Python中的保留字</li>
              <li>标识符严格区分大小写</li>
              <li>
                以下划线开头的标识符有特殊意义，一般应避免使用相似的标识符
              </li>
              <li>允许使用中文作为标识符，但不建议使用</li>
            </ul>
          </li>
          <li>
            模块名尽量短小，并且全部使用小写字母，可以使用下划线分隔多个字母。例如：gram_main
          </li>
          <li>
            包名尽量短小，并且全部使用小写字母，不推荐使用方下划线。例如：com.bjmsb，不推荐使用com
            bjmsb
          </li>
          <li>类名采用单词首字母大写形式（Pascal风格）。例如：MyClass</li>
          <li>
            模块内部的类采用“”+Pascal风格的类名组成，例如：在MyClass中的内部类_InnerMyClass
          </li>
          <li>
            函数、类的属性和方法的命名，全部使用小写字母，多个字母之间使用下划线分隔
          </li>
          <li>常量命名时采用全部大写字母，可以使用下划线</li>
          <li>
            使用单下划线“_”开头的模块变量或函数是受保护的，在使用“fromxxx
            import*”语句从模块中导入时，这些模块变量或函数不能被导入
          </li>
          <li>
            使用双下划线“”开头的实例变量或方法是类私有的以双下划线开头和结尾的是Python的专用标识，例如：_init_（）表示初始化函数
          </li>
        </ul>
        <p>4种基本数据类型</p>
        <ul>
          <li>
            整数类型 默认十进制 int
            <ul>
              <li>表示整数数值，即没有小数部分的数值</li>
              <li>正整数、负数和0</li>
              <li>理论上的取值范围内[负无穷，正无穷]</li>
              <li>整数的表示形式不可变数据类型</li>
              <li>十进制 无引导符号 默认情况，例如：365，786 满十进一</li>
              <li>
                二进制 0b 或 0B 由字符0和1组成，例如0b10101，0B10101 满二进一
              </li>
              <li>
                八进制 0o 或者 0O 由字符0到7组成，例如00763，00765 满八进一
              </li>
              <li>
                十六进制 0x或者 0X 由字符0到9，a到f或A到F组成，例如0x987A.0X987A
                满十六进一
              </li>
              <li>
                程序员计算机： BIN(二进制) OCT(八进制) DEC(十进制) HEX(十六进制)
              </li>
            </ul>
          </li>
          <li>
            浮点数类型 float
            <ul>
              <li>表示带有小数点的数值</li>
              <li>浮点数由整数部分和小数部分组成</li>
              <li>Python中浮点数类型必须带有小数部分，小数部分可以是0</li>
              <li>浮点数可以使用科学记数法表示</li>
              <li>
                两个浮点数运算，有一定概率运算结果后增加一些“不确定的”尾数
              </li>
              <li>使用内置函数 round（）限定运算结果需要保留的小数位数</li>
              <li>不可变数据类型</li>
              <li>round（0.1 + 0.2, 1） 浮点数 + 浮点数 ， 保留位数</li>
            </ul>
          </li>
          <li>
            复数类型
            <ul>
              <li>Python中的复数与数学中的复数形式完全一致</li>
              <li>复数与实部和虚部组成</li>
              <li>
                j是复数的一个基本单位，被定义为j="开方" -1，又称“虚数单位”
              </li>
              <li>.real 获取实数部分，.imag 获取虚数部分</li>
              <li>不可变数据类型</li>
              <li>复数类型在科学计算中十分常见</li>
              <li>x = 123 +456j</li>
              <li>print( '实数部分'，x.real ) // 123.0</li>
              <li>print( '虚数部分'，x.imag ) // 456.0</li>
            </ul>
          </li>
          <li>
            字符串类型
            <ul>
              <li>
                字符串就是连续的字符序列，可以表示计算机所能识别的一切字符
              </li>
              <li>不可变数据类型，即不可变字符序列</li>
              <li>单行字符串使用 '……' 或 "..….”</li>
              <li>多行字符串使用 '''…….''' 或 """…...."""</li>
            </ul>
          </li>
          <li>
            转义字符
            <ul>
              <li>\n (换行) \" (输出双引号) \' (输出单引号) \\ (输出反斜杠)</li>
              <li>
                \t
                (跳到下一个制表位，一个制表位占8个空格，如果没满就占剩余空格，如果占满则输出8个空格，相当于8个空格)
              </li>
              <li>
                R 或者 r 是原字符，例如：print( R' 北京\t欢迎\t您')
                加上r就会原封不动输出 北京\t\欢迎\您
              </li>
            </ul>
          </li>
          <li>
            字符串的索引
            <ul>
              <li>
                对字符串中某个字符的检索称为索引
                <ul>
                  <li>
                    语法：字符串或字符串变量[序号]
                    <ul>
                      <li>
                        有分正向递增序号和反向递减序号 0 1 2 3 4 5 6 -6 -5 -4 -3
                        -2 -1
                      </li>
                    </ul>
                  </li>
                  <li>
                    写法：myStr = '北京欢迎你' print( myStr[-5]) 或者 print(
                    '北京欢迎你'[1] )
                  </li>
                  <li>循环：for s in myStr: print(c);</li>
                </ul>
              </li>
              <li>
                字符串的切片·对字符串中某个子串或区间的检索称为切片
                <ul>
                  <li>
                    语法：字符串或字符串变量[N:M]，含头不含尾
                    <ul>
                      <li>切片获取字符串中从 N到M（不包含M）的子字符串</li>
                    </ul>
                  </li>
                  <li>
                    写法：myStr = '我的天啊啊天的我' print( myStr[2:5]) 或者
                    print( '我的天啊啊天的我[-6:-3] )
                    <ul>
                      <li>
                        print( myStr[:5]) 前面不写代表从开头截取 print(
                        myStr[2:]) 结束不写代表截取到尾
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            字符串方法：
            <table>
              <tbody>
                <tr>
                  <th>字符串方法</th>
                  <th>字符串方法</th>
                  <th>字符串方法</th>
                  <th>字符串方法</th>
                </tr>
                <tr>
                  <td>str.capitalize</td>
                  <td>str.isidentifier</td>
                  <td>str.rindex</td>
                  <td>str.casefold</td>
                </tr>
                <tr>
                  <td>str.islower</td>
                  <td>str.rjust</td>
                  <td>str.center</td>
                  <td>str.isnumeric</td>
                </tr>
                <tr>
                  <td>str.rpartition</td>
                  <td>str.count</td>
                  <td>str.isprintable</td>
                  <td>str.rsplit</td>
                </tr>
                <tr>
                  <td>str.encode</td>
                  <td>str.isspace</td>
                  <td>str.rstrip</td>
                  <td>str.endswith</td>
                </tr>
                <tr>
                  <td>str.isupper</td>
                  <td>str.split</td>
                  <td>str.expandtabs</td>
                  <td>str.join</td>
                </tr>
                <tr>
                  <td>str.splitlines</td>
                  <td>str.find</td>
                  <td>str.ljust</td>
                  <td>str.startswith</td>
                </tr>
                <tr>
                  <td>str.format</td>
                  <td>str.lower</td>
                  <td>str.strip</td>
                  <td>str.format_map</td>
                </tr>
                <tr>
                  <td>str.lstrip</td>
                  <td>str.swapcase</td>
                  <td>str.index</td>
                  <td>str.maketrans</td>
                </tr>
                <tr>
                  <td>str.title</td>
                  <td>str.isalnum</td>
                  <td>str.partition</td>
                  <td>str.translate</td>
                </tr>
                <tr>
                  <td>str.isalpha</td>
                  <td>str.replace</td>
                  <td>str.upper</td>
                  <td>str.isdeciaml</td>
                </tr>
                <tr>
                  <td>str.rfind</td>
                  <td>str.zfill</td>
                  <td>str.isdigit</td>
                  <td>str.istitle</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            字符串判断类型：
            <table>
              <tbody>
                <tr>
                  <th>判断类型 方法</th>
                  <th>说明</th>
                </tr>
                <tr>
                  <td>string.isspace（）</td>
                  <td>如果string中只包含空格，则返回True</td>
                </tr>
                <tr>
                  <td>string.isalnum（）</td>
                  <td>
                    如果string至少有一个字符并且所有字符都是字母或数字则返回True
                  </td>
                </tr>
                <tr>
                  <td>string.isalpha（）</td>
                  <td>
                    如果string 至少有一个字符并且所有字符都是字母则返回True
                  </td>
                </tr>
                <tr>
                  <td>string.isdecimal（）</td>
                  <td>如果string 只包含数字则返回True，全角数字</td>
                </tr>
                <tr>
                  <td>string.isdigit（）</td>
                  <td>
                    如果string 只包含数字则返回True，全角数字、（1）、\u0ob2
                  </td>
                </tr>
                <tr>
                  <td>string.isnumeric（）</td>
                  <td>如果string 只包含数字则返回True，全角数字，汉字数字</td>
                </tr>
                <tr>
                  <td>string.istitle（）</td>
                  <td>
                    如果string是标题化的（每个单词的首字母大写）则返回True
                  </td>
                </tr>
                <tr>
                  <td>string.islower（）</td>
                  <td>
                    如果string中包含至少一个区分大小写的字符，并且所有这些（区分大小写的）字符都是小写，则返回True
                  </td>
                </tr>
                <tr>
                  <td>string.isupper（）</td>
                  <td>
                    如果
                    string中包含至少一个区分大小写的字符，并且所有这些（区分大小写的）字符都是大写，则返回True
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            字符串类型的操作
            <ul>
              <li>操作符 描述</li>
              <li>X+y 连接两个字符串x与y</li>
              <li>x*n或n*x 复制n次字符串</li>
              <li>x in s 如果x是s的子串，结果为True，否则结果为False</li>
              <li>
                例子：
                <ul>
                  <li>
                    x = '2020年' y= '北京冬奥会' print(x+y) print(10*x)
                    print('北京' in y) true
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            布尔类型
            <ul>
              <li>用来表示真值或假值</li>
              <li>在Python中使用标识符True和False表示布尔类型的值</li>
              <li>布尔类型可转换化为数值，True表示1 False表示0</li>
              <li>所有对象都有一个布尔值，使用内置函数 bool（）进行测试</li>
              <li>
                布尔值为假的情况
                <ul>
                  <li>False 或者是 None</li>
                  <li>数值中的0，包含0，0.0，虚数0</li>
                  <li>空序列，包含空字符串、空元组、空列表、空字典</li>
                  <li>
                    自定义对象的实例，该对象的_bool（）方法返回False
                    或__len_()方法返回0
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p>输入、输出</p>
        <ul>
          <li>
            输出
            <ul>
              <li>print( )输出函数的功能</li>
              <li>print( 输出内容 字符串用引号 )</li>
              <li>
                print( ' ' ) print( " " ) print( """ """ ) print( ''' ''' )
                print( a + b ) print( a, b, '多输出用逗号')
              </li>
              <li>
                输出内容可以是数字和字符串（字符串需要使用引号括起来），此类内容将直接输出，也可以是包含运算符
              </li>
              <li>
                的表达式，此类内容将计算结果输出，也可以出示ASCII
                显示字符，使用内置函数 chr()
              </li>
              <li>
                如果想要一次输出多个内容，而且不换行，则可以使用英文半角的逗号将要输出的内容分隔
              </li>
              <li>
                Python3.0以Unicode为内部字符编码。Unicode采用双字节16位来进行编号，可编65536个字符，采用十六进制4位表示一个编码
              </li>
              <li>
                u4e00- u9fa5（中文） -X3130-×318F（韩文） -XAC00-XD7A3（韩文）
                -u0800-u4e00（日文）
              </li>
              <li>
                print( chr( 100 ) ) ; // d 输 使用 chr（） 内置函数，可以把
                ASCII码 转换成 字符
              </li>
              <li>
                print( ord( '北' ) ); // 21271 使用
                ord（内置函数，可以把字符转换成
                ASCII码，再将值输到程序员计算机得到HEX值,并转义
              </li>
              <li>print( '\u5317') ; // 北</li>
              <li>
                用python写txt文件
                <ul>
                  <li>fp=open('doc.txt','w') # 打开文件 w 代表 write写</li>
                  <li>print('写文字到文件里', file=fp) # 输出刀文件中</li>
                  <li>fp.close(); # 关闭文件</li>
                </ul>
              </li>
              <li>
                print( )函数的完整语法格式
                <ul>
                  <li>
                    print( value, ..., sep=‘’‘’, end='\n',file=None ) //
                    使用print函数进行复杂输出
                  </li>
                  <li>print( 1314 ) print( 3.14 ) print( 1,3,4,7 )</li>
                  <li>
                    print( 192,168,1,1, sep='.' ) //
                    改变输出类型，使用间隔符.进行连接
                  </li>
                  <li>
                    print( ‘文字不能和数值拼接会报错’ + 100) //
                    这样会报错，需要把 100加上引号来拼接 ‘ 100 ’
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            输入
            <ul>
              <li>input()输入函数的功能</li>
              <li>variable = input( 输入内容 字符串用引号 )</li>
              <li>
                print( ‘输入你的名字’ , variable ) // 提示，类似js的 prompt()
                函数
              </li>
              <li>
                num = int（input( ‘输入你的名字’ ) //
                需要接收的是数值类型就需要使用 int( ) 函数
              </li>
              <li>
                print( ‘输入你的名字’ , variable ) //
                这里数字不能和字符拼接，所以改用 逗号 ，
              </li>
            </ul>
          </li>
          <li>
            综合练习：
            <pre><code class="language-python line-numbers">  # 输入输出内容
  name = input('请输入您的姓名：')
  age = int(input("请输入您的年龄:"))
  author = input("请输入作者:")
  print('----------自我介绍------')
  print('姓名:'+name)
  print("年龄:",age)
  print('作者:'+author)

  # 创建记事本并输入内容
  ad=open('text.txt','w')
  print('人生苦短，我用python',file=ad)
  fp.close();</code></pre>
          </li>
        </ul>
        <p>变量格式化，格式化字符</p>
        <ul>
          <li>
            表格
            <table>
              <tbody>
                <tr>
                  <th>格式化字符</th>
                  <th>含义</th>
                </tr>
                <tr>
                  <td>%s</td>
                  <td>字符串，使用%s , % 变量 即可赋值给%s</td>
                </tr>
                <tr>
                  <td>%d</td>
                  <td>
                    有符号十进制整数，06d表示输出的整数显示位数，不足的地方使用0补全
                  </td>
                </tr>
                <tr>
                  <td>%f</td>
                  <td>浮点数，%.2f表示小数点后只显示两位</td>
                </tr>
                <tr>
                  <td>%%</td>
                  <td>输出%</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            代码
            <pre><code class="language-python line-numbers">  name = "小明"
  weight = 75
  height = 170
  print('我的名字叫%s,我的体重为%.2f公斤,我的身高为%.2fcm,请关照' % (name,weight,height))
  # 这里会引用变量 进行输出

  a = 321
  b = 123
  print('%d * %d = %d' % (a,b,a * b))    # 321 *123 = 39483
  # 可以用字符串的方法来处理
  print('{0} * {1} = {2}'.format(a,b,a * b))  # 321 *123 = 39483
  # 用f打头，来格式化字符串 注意，只支持 Python 3.6 版本
  print(f'{a} * {b} = {a * b}')   # 321 *123 = 39483  </code></pre>
          </li>
          <li>
            表格
            <table>
              <tbody>
                <tr>
                  <th>变量值</th>
                  <th>占位符</th>
                  <th>格式化结果</th>
                  <th>说明</th>
                </tr>
                <tr>
                  <td>3.1415926</td>
                  <td>｛：.2f｝</td>
                  <td>'3.14'</td>
                  <td>保留小数点后两位</td>
                </tr>
                <tr>
                  <td>3.1415926</td>
                  <td>｛：+.2f｝</td>
                  <td>'+3.14'</td>
                  <td>带符号保留小数点后两位</td>
                </tr>
                <tr>
                  <td>-1</td>
                  <td>｛：+.2f｝</td>
                  <td>'-1.00'</td>
                  <td>带符号保留小数点后两位</td>
                </tr>
                <tr>
                  <td>3.1415926</td>
                  <td>｛：.0f｝</td>
                  <td>'3'</td>
                  <td>不带小数</td>
                </tr>
                <tr>
                  <td>123</td>
                  <td>｛：0>10d｝</td>
                  <td>'0000000123'</td>
                  <td>左边补0，补够10位</td>
                </tr>
                <tr>
                  <td>123</td>
                  <td>｛：x&lt;10d｝</td>
                  <td>'123xxxxxxx'</td>
                  <td>右边补x，补够10位</td>
                </tr>
                <tr>
                  <td>123</td>
                  <td>｛：&gt;10d｝</td>
                  <td>'123'</td>
                  <td>左边补空格，补够10位</td>
                </tr>
                <tr>
                  <td>123</td>
                  <td>｛：&lt;10d｝</td>
                  <td>'123'</td>
                  <td>右边补空格，补够10位</td>
                </tr>
                <tr>
                  <td>123456789</td>
                  <td>｛：,｝</td>
                  <td>'123,456,789'</td>
                  <td>逗号分隔格式</td>
                </tr>
                <tr>
                  <td>0.123</td>
                  <td>｛：.2%｝</td>
                  <td>'12.30%'</td>
                  <td>百分比格式</td>
                </tr>
                <tr>
                  <td>123456789</td>
                  <td>｛：.2e｝</td>
                  <td>'1.23e+08'</td>
                  <td>科学计数法格式</td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
        <p>条件判断、 逻辑运算</p>
        <ul>
          <li>判断语句 if elif else</li>
          <li>
            语法：
            <pre><code class="language-python line-numbers">  if 要判断的条件：
      条件成立时，要做的事情     # 语法：注意4个空格，缩进 Tab，但不要混用
      .....

  # 例子：
  age = 25
  if age >= 30:
      print("大于30")
  elif age >= 18:           # 相当于else if(){ }
      print("大于18")
  else:                     # 所有条件不成立才会进入到 else
      print("小于18")

  age = int(input('请出入年龄：'))
  if age&lt;=0 or age>=120:
      age1 = int(input('请重新输入年龄:'))
      if not age1 &lt;= 0 or not age1 >= 120:
          print("您的年龄是%s岁" % age1)
      else:
          print("输入错误，结束程序")
  else:
      print("您的年龄是%s岁" % age)

  # 案例：石头 剪刀 布
  # 随机数导入包
  import random
  # 从控制台输入要出的拳 —石头（1）/剪刀（2）/布（3）
  player = int(input("请出拳石头（1）/剪刀（2）/布（3）："))
  # 电脑随机出拳 - 假定电脑永远出石头
  computer= random.randint(1,3)
  if computer == 1:
      print("石头")
  elif computer == 2:
      print("剪刀")
  else:
      print("布")
  # 比较胜负,如果条件判断的内容太长，可以在最外侧的条件增加一对大括号
  # 再在每一个条件之间，使用回车，PyCharm可以自动增加8个空格
  if ((player == 1 and computer == 2) or
      (player == 2 and computer == 3) or
      (player == 3 and computer   == 1)):
          print ("电脑输了...")
  elif player == computer:
      print("心有灵犀，再来一盘...")
  else:
      print("人输了...")</code></pre>
          </li>
        </ul>
        <p>运算符</p>
        <ul>
          <li>
            算术运算符是处理四则运算的符号，在数字的处理中应用得最多
            ，注意事项：除数不能为0
            <table>
              <tbody>
                <tr>
                  <th>运算符</th>
                  <th>说明</th>
                  <th>示例</th>
                  <th>结果</th>
                  <th>说明</th>
                </tr>
                <tr>
                  <td>+</td>
                  <td>加</td>
                  <td>1+1</td>
                  <td>2</td>
                  <td></td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>减</td>
                  <td>1-1</td>
                  <td>0</td>
                  <td></td>
                </tr>
                <tr>
                  <td>*</td>
                  <td>乘</td>
                  <td>1*3</td>
                  <td>3</td>
                  <td>print('-1' * 5) 输出5次-1</td>
                </tr>
                <tr>
                  <td>/</td>
                  <td>除</td>
                  <td>6/3</td>
                  <td>2.0</td>
                  <td>会转化 输出浮点数</td>
                </tr>
                <tr>
                  <td>//</td>
                  <td>整除</td>
                  <td>10//3</td>
                  <td>3</td>
                  <td>10/20 取整 0</td>
                </tr>
                <tr>
                  <td>%</td>
                  <td>取余</td>
                  <td>5/2</td>
                  <td>1</td>
                  <td></td>
                </tr>
                <tr>
                  <td>**</td>
                  <td>幂运算</td>
                  <td>2**4</td>
                  <td>16</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <ul>
              <li>
                算术运算符的优先级
                <ul>
                  <li>
                    先乘除后加减，同级运算符从左到右进行计算，可以使用（）调整计算的优先级
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            比较运算符也称关系运算符，用于对变量或表达式的结果进行大小、真假等比较，结果真，值为True，结果假，值为False
            <table>
              <tbody>
                <tr>
                  <th>运算符</th>
                  <th>作用</th>
                  <th>举例</th>
                  <th>结果</th>
                </tr>
                <tr>
                  <td>&gt;</td>
                  <td>大于</td>
                  <td>3 &gt; 6</td>
                  <td>False</td>
                </tr>
                <tr>
                  <td>&lt;</td>
                  <td>小于</td>
                  <td>5 &lt; 10</td>
                  <td>True</td>
                </tr>
                <tr>
                  <td>==</td>
                  <td>等于</td>
                  <td>3 == 3</td>
                  <td>True</td>
                </tr>
                <tr>
                  <td>!=</td>
                  <td>不等于</td>
                  <td>6 != 8</td>
                  <td>True</td>
                </tr>
                <tr>
                  <td>&gt;=</td>
                  <td>大于或等于</td>
                  <td>10 &gt;= 3</td>
                  <td>False</td>
                </tr>
                <tr>
                  <td>&lt;=</td>
                  <td>小于或等于</td>
                  <td>5 &lt;= 5</td>
                  <td>True</td>
                </tr>
              </tbody>
            </table>
            <ul>
              <li>Python 2.x 中判断不等于还可以使用 &lt;> 运算符</li>
              <li>!= 在Python2.x 中同样可以用来判断 不等于</li>
            </ul>
          </li>
          <li>
            逻辑运算符
            <table>
              <tbody>
                <tr>
                  <th>运算符</th>
                  <th>逻辑表达式</th>
                  <th>描述</th>
                  <th>说明</th>
                </tr>
                <tr>
                  <td>and</td>
                  <td>x and y</td>
                  <td>
                    只有x和y的值都为True，才会返回True，否则只要x或者y有一个值为False，就返回False
                  </td>
                  <td>逻辑与 && 逻辑中断符 且</td>
                </tr>
                <tr>
                  <td>or</td>
                  <td>x or y</td>
                  <td>
                    只要x或者y有一个值为True，就返回True，只有x和y的值都为False，才会返回False
                  </td>
                  <td>相当于逻辑或</td>
                </tr>
                <tr>
                  <td>not</td>
                  <td>not x</td>
                  <td>取反操作，True 返回 False , False 返回 True</td>
                  <td>逻辑非 !! 取反</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            赋值运算符主要用于为变量进行赋值，直接把赋值运算符 “=”
            右边的值赋给左边的变量
            <table>
              <tbody>
                <tr>
                  <th>运算符</th>
                  <th>描述</th>
                  <th>实例</th>
                </tr>
                <tr>
                  <td>(=)</td>
                  <td>简单的赋值</td>
                  <td>x = y == x = y</td>
                </tr>
                <tr>
                  <td>+=</td>
                  <td>加赋值</td>
                  <td>x += y == x = x + y</td>
                </tr>
                <tr>
                  <td>-=</td>
                  <td>减赋值</td>
                  <td>x -= y == x = x - y</td>
                </tr>
                <tr>
                  <td>*=</td>
                  <td>乘赋值</td>
                  <td>x *= y == x = x * y</td>
                </tr>
                <tr>
                  <td>/=</td>
                  <td>除赋值</td>
                  <td>x /= y == x = x / y</td>
                </tr>
                <tr>
                  <td>%=</td>
                  <td>取余赋值</td>
                  <td>x %= y == x = x % y</td>
                </tr>
                <tr>
                  <td>**=</td>
                  <td>幂赋值</td>
                  <td>x **= y == x = x *'' y</td>
                </tr>
                <tr>
                  <td>//=</td>
                  <td>整除赋值</td>
                  <td>x //= y == x = x // y</td>
                </tr>
              </tbody>
            </table>
            <ul>
              <li>python支持链式赋值： a=b=c=100 // a=100 b=100 c=100</li>
              <li>python支持系列解包： a,b =10 ,20 // a=10 b=20</li>
              <li>
                其他语言交换变量:
                <ul>
                  <li>a= 10 b= 20 c=None</li>
                  <li>c = a a =b b=c print(a,b,c) // a=20 b=10</li>
                </ul>
              </li>
              <li>Python语言交换变量: a,b = b,a print(a,b) // a=20 b=10</li>
            </ul>
          </li>
          <li>
            优先级，不确定的用 （）也能提升优先级
            <table>
              <tbody>
                <tr>
                  <th>运算符</th>
                  <th>描述</th>
                </tr>
                <tr>
                  <td>**</td>
                  <td>幂（最高优先级）</td>
                </tr>
                <tr>
                  <td>* / % //</td>
                  <td>乘、除、取余数、取整除</td>
                </tr>
                <tr>
                  <td>+ -</td>
                  <td>加法、减法</td>
                </tr>
                <tr>
                  <td>&lt;= &lt; &gt; &gt;=</td>
                  <td>比较运算符</td>
                </tr>
                <tr>
                  <td>(== !=)</td>
                  <td>等于运算符</td>
                </tr>
                <tr>
                  <td>(= %= /= //= -= += *= **=)</td>
                  <td>赋值运算符</td>
                </tr>
                <tr>
                  <td>not or and</td>
                  <td>逻辑运算符</td>
                </tr>
              </tbody>
            </table>
            <ul>
              <li>** 幂</li>
              <li>~、+、- 取反、正号和负号(不是加减)</li>
              <li>*、/、%、// 算术运算符</li>
              <li>+、- 算术运算符</li>
              <li>&lt;&lt;、>> 位运算符的左右移</li>
              <li>& 位运算符的位与</li>
              <li>^ 位运算符的异或</li>
              <li>| 位运算符的位或</li>
              <li>&lt;、&lt;=、>、>=、!=、== 比较运算符</li>
            </ul>
          </li>
        </ul>
        <p>循环</p>
        <ul>
          <li>while break continue</li>
          <li>
            while 循环的作用
            <ul>
              <li>循环的作用就是让指定的代码重复的执行</li>
              <li>
                while循环最常用的应用场景就是让执行的代码按照指定的次数重复执行
              </li>
              <li>
                语法：
                <pre><code class="language-python line-numbers">  while 条件（判断 计数器 是否达到 目标次数）：
    满足条件，做的事情1
    满足条件，做的事情2
    满足条件，做的事情3
    ...
    处理条件（计数器 + 1）

  i = 1
  while i &lt;= 5:
      print('hello')
      i += 1

  自然计数法： 从1开始
  程序计数法： 从0开始

  result = 0  # 定义一个最终结果的变量
  i = 0       # 定义一个计数器
  while i &lt;= 100:    # 循环 100次
      result += i    # 循环一次 加给 结果变量
      i += 1         # 处理计数器
  print('0~100之间的数字合为%d' % result)

  result = 0  # 定义一个最终结果的变量
  i = 0       # 定义一个计数器
  while i &lt;= 100:    # 循环 100次
      if not i % 2:
          result += i
      i += 1         # 处理计数器
  print('0~100之间的偶数合为%d' % result)</code></pre>
              </li>
            </ul>
          </li>
          <li>
            break 和 continue
            <ul>
              <li>break和continue是专门在循环中使用的关键字</li>
              <li>break某一条件满足时，退出循环，不再执行后续重复的代码</li>
              <li>continue某一条件满足时，跳出当前循环，中断这一次</li>
              <li>break 和continue只针对当前所在循环有效</li>
            </ul>
          </li>
          <li>
            循环嵌套
            <pre><code class="language-python line-numbers">  row = 1
  while row &lt;= 5:
      col = 1
      while col &lt;= row:
          print("*",end = "")
          col += 1
      print("")
      row += 1

  九九乘法表  16j
      row = 1          # 定义起始行
      while row &lt;= 9:  # 最大打印9行
          col = 1      # 定义起始列
          while col &lt;= row:       # 循环 列如果小于等于 行
              print("%d * %d = %d" % (col,row,row*col),end="\t") # 输出* end=""表示输出结束后不换行
              col += 1 # 列数
          print("")    # 一行打印完成后换行
          row += 1     # 行数加1</code></pre>
          </li>
        </ul>
        <p>列表（类似数组）</p>
        <ul>
          <li>
            List（列表）是python中使用最频繁的数据类型，在其他语言中通常叫做数组，专门用于存储一串信息
            列表用[]定义，数据之间使用，分隔。列表的索引从0开始
          </li>
          <li>
            索引就是数据在列表中的位置编号，索引又可以被称为下标注意：从列表中取值时，如果超出索引范围，程序会报错
          </li>
          <li>
            支持 for variable in list 循环
            <ul>
              <li>name_list = ['张三','李四','王五']</li>
            </ul>
            <table>
              <tbody>
                <tr>
                  <th>序列</th>
                  <th>分类</th>
                  <th>关键字/函数/方法</th>
                  <th>说明</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>增加</td>
                  <td>列表.insert( 索引，数据)</td>
                  <td>在指定位置插入数据</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>列表.append(数据)</td>
                  <td>在未尾追加数据</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>列表.extend(列表2)</td>
                  <td>将列表2的数据追加到列表</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>修改</td>
                  <td>列表[索引]=数据</td>
                  <td>修改指定索引的数据</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>删除</td>
                  <td>del 列表[索引]</td>
                  <td>删除指定索引的数据</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>列表.remove[数据]</td>
                  <td>删除第一个出现的指定数据</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>列表.pop</td>
                  <td>删除末尾数据</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>列表.pop（索引值）</td>
                  <td>删除指定索引数据</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>列表.clear</td>
                  <td>清空列表</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>统计</td>
                  <td>len（列表）</td>
                  <td>列表长度</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>列表.count（数据）</td>
                  <td>数据在列表中出现的次数</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>排序</td>
                  <td>列表.sort（）</td>
                  <td>升序排序</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>列表.sort（reverse=True）</td>
                  <td>降序排序</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>列表.reverse（）</td>
                  <td>逆序、反转</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            循环取值
            <pre><code class="language-python line-numbers">  name = [1,2,5,84,2,82,35,1]
  for i in name:
      print(i)     // 1 2 5 84 .....</code></pre>
          </li>
          <li>用 type( i ) 来打印数据类型</li>
        </ul>
        <p>高级变量 -- 元组</p>
        <ul>
          <li>
            Tuple（元组）与列表类似，不同之处在于元组的 元素不能修改
            <ul>
              <li>元组表示多个元素组成的序列</li>
              <li>元组在Python开发中，有特定的应用场景</li>
            </ul>
          </li>
          <li>用于存储一串信息，数据之间使用，分隔</li>
          <li>元组用（）定义</li>
          <li>
            元组的索引从0开始
            <ul>
              <li>索引就是数据在元组中的位置编号</li>
            </ul>
          </li>
          <li>
            支持 for variable in list 循环
            <pre><code class="language-python line-numbers">  info_tuple =()        # 创建空元祖,元组的索引值是从0开始的
  info_tuple = (50,)    # 元祖中，只包含一个元素时，需要在元素后面添加逗号
  info_tuple = (50,'任何数据类型',1.43)    # 元祖中，只包含一个元素时，需要在元素后面添加逗号
  len(info_tuple)       # 获取元祖的长度 n + 1
  info_tuple.count(50)  # 数据在元祖中出现的次数,统计
  info1 =(1,2,3,6,4)
  print(info1.index(2)) # 获取数据的索引下标   // 1

  转换：

  tuple1 =(1,2,3,6,4)
  print(type(list(tuple1)))   # 转换成列表类型
  print(type(tuple(tuple1)))  # 转换成元组类型</code></pre>
          </li>
        </ul>
        <p>字典的定义 -- 类似对象</p>
        <ul>
          <li>
            dictionary（字典）是除列表以外python之中最灵活的数据类型。字典同样可以用来存储多个数据
          </li>
          <li>通常用于存储描述一个物体的相关信息</li>
          <li>
            和列表的区别
            <ul>
              <li>列表是有序的对象集合</li>
              <li>字典是无序的对象集合</li>
            </ul>
          </li>
          <li>
            字典用｛｝定义。字典使用键值对存储数据，键值对之间使用，分隔
            <ul>
              <li>键 key 是索引</li>
              <li>值 value 是数据</li>
              <li>键和值之间使用：分隔</li>
              <li>键必须是唯一的</li>
              <li>值可以取任何数据类型，但键只能使用字符串、数字或元组</li>
            </ul>
          </li>
          <li>
            支持 for variable in list 循环
            <pre><code class="language-python line-numbers">  # 语法：
    liSi = {"name": '李四',
            "age": 18,
            "sex": '男'}

  # 方法：
    len(liSi)                    # 获取字典的 键值对数量
    liSi.keys()                  # 获取所有的key  键
    liSi.values()                # 获取所有value  值
    liSi.items()                 # 获取所有key value 元祖的列表
    liSi[key]                    # 可以从字典中取值，key不存在会报错
    liSi.get(key)                # 可以从字典中取值，key不存在时并不会报错，会返回 None
    del liSi[key]                # 删除指定键值对，key不存在会报错,会打印删除的值，需要拿变量接收
    liSi.pop(key)                # 删除指定键值对，key不存在会报错
    liSi.popitem()               # 随机删除一个键值对
    liSi.clear()                 # 清空字典
    liSi[key] = value            # 键有就代表修改，没有就代表新建
    liSi.setdefault(key,value)   # 如果key存在，不会修改数据，不存在会新建键值对
    liSi.updata(字典2)            # 将字典2数据合并到字典 中

  # 常用：
    .clear     .items    .setdefault     .copy     .keys    .updata     .fromkeys   .pop   .values  .get   .popitem

  # 迭代循环：
    for k, v in liSi.items():
        print(k,v)

    liSi = {"name": '李四',
            "age": 18,
            "sex": '男'}
    for k in liSi:
        print("%s: %s" % (k,liSi[k]))</code></pre>
          </li>
        </ul>
        <p>集合 set</p>
        <pre><code class="language-python line-numbers">  set1 = {1,3,5,1,5,4,2,41,1,1}
  print(set1)       # {1, 2, 3, 4, 5, 41}  有去重性

  set1 = set('hello')
  print(set1)       # {'h', 'l', 'e', 'o'}   构造器语法

  set1 = set([1,2,5,2,1])
  print(set1)       # {1, 2, 5}  可以将列表转换成集合，并去重

  set1 = {num for num in range(1,20)}
  range(a,b)        # 函数会生成a - b 之间的数，包含a 不包含b
  print(set1)       # {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19}

  set1 = {num for num in range(1,20) if num % 3 ==0 or num % 5==0 }
  print(set1)       # {3, 5, 6, 9, 10, 12, 15, 18}   加判断条件，  输出能被3或5整除的添加到集合里

  #集合的运算
    # 1. 成员运算
        set1 = {3, 5, 6, 9, 10, 12, 15, 18}
        print( 7 in set1)               # False  7 在set1集合里面吗？  在就返回True 不在返回False
    # 2. 交并差运算
        set1 = {3, 5, 6, 9, 10, 12, 15, 18}
        set2 = { 5, 7, 1, 2, 6, 15, 18}
        print( set1 & set2)             # {18, 5, 6, 15} 交集运算  把相同的数取出来
        print(set1.intersection(set2))  # 方法2 等同于  set1 & set2

        # 并集
        set1 = {3, 5, 6, 9, 10, 12, 15, 18}
        set2 = {5, 7, 1, 2, 6, 15, 18}
        print(set1 | set2)              # {1, 2, 3, 5, 6, 7, 9, 10, 12, 15, 18}  并集运算  把所有数合并
        print(set1.union(set2))         # 方法2 等同于  set1 | set2

    # 3. 对称差
        set1 = {3, 5, 6, 9, 10, 12, 15, 18}
        set2 = {5, 7, 1, 2, 6, 15, 18}
        print(set1 ^ set2)                        # {1, 2, 3, 7, 9, 10, 12}  把set1中没有的数取出来
        print(set1.symmetric_difference(set2))    # 方法2 等同于  set1 ^ set2
        print((set1 | set2) - (set1 & set2 ))     # 方法3 等同于  set1 ^ set2

    # 4. 比较运算
        set1 = {1,3,5,7}
        set2 = {1,3,5,6,7,8}
        set3 = set2
        print(set1 &lt; set2 , set1 &lt;= set2) # 假如set1里的所有数都在set2出现，那么 set1是set2的真子集，子集
        print(set2 &lt; set3 , set2 &lt;= set3) # 两个重复，则谁也不是谁的真子集，只能是子集，set3也可以是set2的子集
        print(set1.issubset(set2)) # True set1是set2的真子集，用 .issubset()  判断

        print(set2.issuperset(set1)) # True set2是set1的超集，用 .issuperset()  判断
        print(set2 > set1)           # True set2是set1的超集</code></pre>
        <p>set 方法</p>
        <pre><code class="language-python line-numbers">  set1 = set()                   # 创建空集合
  # set2 = set({1,2,3})            此写法会弹出警告
  set1.add(33)                   # 添加元素
  set1.update({1,10,100})        # 添加元素
  print(set1)                    # {33, 10, 100, 1}
  set1.discard(33)               # 删除元素,如果删除没有的数 是不会报错的
  if 1 in set1:                  # 判断是否存在
      set1.remove(1)             # 删除元素，如果不进行潘判断会引发KeyError异常
  print(set1.pop())              # 随机删除一个元素，并返回被删除的该元素  10
  print(set1)                    # {100}
  set1.clear()                   # 删除整个集合
  print(set1)                    # set()

  set1 = {'A','B','C','D'}
  set2 = {'a','b','c','d'}
  set3 = {'c','V','M','t'}
  set4 = {'A','f','g','h'}
  print(set1.isdisjoint(set2))   # True 会区分大小写 如果两个合集没有相同元素就会返回True
  print(set1.isdisjoint(set3))   # True 没有相同就会返回True,有相同的就会返回False
  print(set1.isdisjoint(set4))   # False 区分大小写 没有相同就会返回True,有相同的就会返回False

  不可变集合，没有删除和增加的功能，其他跟set 合集 没差别
      set1 = frozenset({1,3,5,7})
      set2 = frozenset(range(1,7))
      print(set2)                # frozenset({1, 2, 3, 4, 5})
      print(set1 & set2)         # 交集 frozenset({1, 3, 5})
      print(set1 | set2)         # 并集 frozenset({1, 2, 3, 4, 5, 7})
      print(set1 - set2)         # 差集 frozenset({7})
      print(set1 &lt; set2)         # False set1 不是 set2 的真子集和子集，如果是1，8则为true</code></pre>
        <p>函数</p>
        <ul>
          <li>
            语法
            <pre><code class="language-python line-numbers">  def function():    # def 是 define的缩写  定义
      函数封装的代码
      ...
  """
      注意：跟js 不同，不会函数提升，所以不能调用写在函数前
          def 是英文define的缩写
          函数名称应该能够表达函数封装代码的功能，方便后续的调用
          函数名称的命名应该符合标识符的命名规则
          可以由穿母、下划线和数字组成， 不能以数字开头，不能与关键字重名
  """

    </code></pre>
          </li>
          <li>
            调用：函数名（）
            <pre><code class="language-python line-numbers">  def function():    # def 是 define的缩写
      '''
        函数的注释，选中调用函数，按下ctrl + Q  可以看到此注释
        :return:
      '''
        print('函数执行代码1')
        print('函数执行代码2')
        print('函数执行代码2')
  function()</code></pre>
          </li>
          <li>
            函数的参数，跟 JS 相同
            <pre><code class="language-python line-numbers">  # 语法：
  def sum(num1,num2):                                # 函数形参
      result = num1 * num2
      print('%d * %d = %d' % (num1,num2,result))     # 输出结果 10 * 20 = 200
  sum(10,20)                                         # 函数传参</code></pre>
          </li>
          <li>
            函数的返回值 return
            <ul>
              <li>
                在程序开发中，有时候，会希望一个函数执行结束后，告诉调用者一个结果，以便调用者针对具体的结果做后续的处理
              </li>
              <li>返回值是函数完成工作后，最后给调用者的一个结果</li>
              <li>在函数中使用return关键字可以返回结果</li>
              <li>
                调用函数一方，可以使用变量来接收函数的返回结果
                <pre><code class="language-python line-numbers">  def sum(num1,num2):
      '''对两个数求和'''
      return num1 * num2  # 执行返回结果,如果后面还有代码，是不会执行的

  result = sum(10,20)   # 拿变量接收函数的返回值
  print(result)         # 输出结果  200</code></pre>
              </li>
            </ul>
          </li>
          <li>
            函数的嵌套调用
            <ul>
              <li>一个函数里面又调用了另外一个函数</li>
              <li>
                这就是函数嵌套调用，如果函数test2中，调用了另外一个函数 test1
              </li>
              <li>
                那么执行到调用test
                函数时，会先把函数test1中的任务都执行完，才会回到test2中调用函数test1的位置，继续执行后续的代码
              </li>
            </ul>
            <pre><code class="language-python line-numbers">  def test1():
      print('我是函数1')
  def test2():
      print('我是函数2')
      test1()
      print('函数执行完毕')

  test1()      # 输出 我是函数1
  test2()      # 按顺序执行，先执行print  然后再执行test1的调用，再执行print</code></pre>
          </li>
          <li>
            使用模块中的函数
            <ul>
              <li>模块是Python程序架构的一个核心概念</li>
              <li>
                模块就好比是工具包，要想使用这个工具包中的工具，就需要导入import
                这个模块
              </li>
              <li>每一个以扩展名 py 结尾的 Python 源代码文件都是一个模块</li>
              <li>
                在模块中定义的全局变量、函数都是模块能够提供给外界直接使用的工具
              </li>
              <li>
                步骤：
                <ul>
                  <li>1. 定义一个 tool.py 的python文件</li>
                  <li>2. 导入模块：import tool # 模块文件的名称</li>
                  <li>3. 使用模块：tool.test2() # 模块名称 .方法（）</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p>面向对象</p>
        <ul>
          <li>
            类和对象 ：
            如果要用一句话来概括面向对象编程，我认为下面的说法是相当精辟和准确的。
          </li>
          <li>
            面向对象编程：把一组数据和处理数据的方法组成对象，把行为相同的对象归纳为类，通过封装隐藏对象的内部细节，通过继承实现类的特化和泛化，通过多态实现基于对象类型的动态分派。
          </li>
          <li>
            这句话对初学者来说可能不那么容易理解，但是我可以先为大家圈出几个关键词：
            <ul>
              <li>
                对象（object）、类（class）、封装（encapsulation）、继承（inheritance）、多态（polymorphism）
              </li>
            </ul>
          </li>
          <li>
            定义类（相当于js的构造函数）：
            <pre><code class="language-python line-numbers">  class People:                     # 定义类
      def sum(self,num1):           # 类下面的函数称为 类方法
          print(f'幸运数字｛num1｝')
      def sum2(self,num2):
          print(f'幸运数字｛num2｝')

  peo1 = People()                   # 当前输出的值为实例在内存中的地址，，是一个十六进制的值
  print(peo1)                       # &lt;__main__.People object at 0x0000024129486920&gt; 当前输出的值为实例在内存中的地址
  print(hex(id(peo1)))              # id()会转成10进制， 用hex()可以转成16进制，查看地址值 0x2143ced6920

  peo1.sum1(10)                     # 调用类方法1
  People().sum2(20)                 # 调用类方法2
  People.sum2(20)                   # 错误写法，因为需要对当前的类进行实例化</code></pre>
          </li>
        </ul>
        <p>初始化方法</p>
        <pre><code class="language-python line-numbers">  class People:                                 # 定义类
      def __init__(self,name,age):              # 初始化方法，给对象创建属性
          self.name = name                      # 给当前类添加属性
          self.age = age                        # 给当前类添加属性
      def peo(self,peo_age):
          print(f'{self.name}今年{peo_age}岁')   # 属性使用self进行调用，参数可以直接调用

  peo1 = People('小明','18')                     # 实例化对象，传入初始值
  peo1.peo("18")                                # 调用类方法

  打印对象
      上面我们通过_init方法在创建对象时为对象绑定了属性并赋予了初始值。在Python中，以两个下划线（读作“dunder"）开头
  和结尾的方法通常都是有特殊用途和意义的方法，我们一般称之为魔术方法或魔法方法。如果我们在打印对象的时候不希望看
  到对象的地址而是看到我们自定义的信息，可以通过在类中放置__repr_魔术方法来做到，该方法返回的字符串就是用print函数
  打印对象的时候会显示的内容，代码如下所示。

  ....
  # 使用类中内置的魔术方法来是显示内容
  def __repr__(self):
      return f'{self.name}:{self.age}'
  peo1 = People('小明','18')
  print(peo1)     # 小明:18</code></pre>
        <p>可见性和属性装饰器</p>
        <ul>
          <li>
            在很多面向对象编程语言中，对象的属性通常会被设置为私有（private）或受保护（protected）的成员，简单的说就是不允许直
            接访问这些属性；对象的方法通常都是公开的（public），因为公开的方法是对象能够接受的消息，也是对象暴露给外界的调用接口
            ，这就是所谓的访问可见性。在Python中，可以通过给对象属性名添加前缀下划线的方式来说明属性的访问可见性，例如，可以用
            __name表示一个私有属性，_name表示一个受保护属性，代码如下所示。
            <pre><code class="language-python line-numbers">  class People:                                   # 定义类
      def __init__(self,name,age):                # 初始化方法，给对象创建属性
          self.__name = name                      # 创建私有属性
          self.__age = age                        # 创建私有属性
      def peo(self,peo_age):                      # 创建类方法
          print(f'{self.__name}今年{peo_age}岁')   # 属性使用self进行调用，参数可以直接调用

  peo1 = People('小明','18')
  peo1.peo('19')                                  # 输出 小明今年19岁
  print(peo1.__name)                              # 报错，只能在类里面调用，外面无法调用
  print(peo1._People__name)                       # 这样写可以访问到私有属性，但会有警告</code></pre>
          </li>
          <li>
            上面代码的最后一行会引发AttributeError（属性错误）异常，异常消息为：‘student'object
            has no
            attribute'_name'。由此可见，以__开头的属性_name是私有的，在类的外面无法直接访问，但是类里面的peo方法中可以
            通过se1f._name访问该属性。需要提醒大家的是，Python并没有从语法上严格保证私有属性的私密性，它只是给私有的属性和
            方法换了一个名字来阻挠对它们的访问，事实上如果你知道更换名字的规则仍然可以访问到它们，我们可以对上面的代码稍作修改
            就可以访问到私有的属性。
          </li>
          <li>
            Python中有一句名言："We are all consenting adults
            here”（大家都是成年人）。Python语言的设计者认为程序员要为自己的行为负责
            ，而不是由Python语言本身来严格限制访问可见性，而大多数的程序员都认为开放比封闭要好，把对象的属性私有化并不是编程语
            言必须的东西，所以Python并没有从语法上做出最严格的限定。Python中可以通过property装饰器为“私有“属性提供读取和修改的方
            法，之前我们提到过，装饰器通常会放在类、函数或方法的声明之前，通过一个e符号表示将装饰器应用于类、函数或方法。
          </li>
          <li>
            装饰器，是函数的高阶应用
            <pre><code class="language-python line-numbers">  class People:                       # 定义类
      def __init__(self,name,age):    # 初始化方法，给对象创建属性
          self.__name = name          # 创建私有属性
          self.__age = age            # 创建私有属性
      @property                       # 获取私有属性
      def name(self):
          return self.__name

      @name.setter                    # 修改私有属性
      def name(self,name):
          self.__name = name or '为空'
      def peo(self,peo_age):
          print(f'{self.__name}今年{peo_age}岁')  # 属性使用self进行调用，参数可以直接调用

  peo1 = People('小明','18')
  print(peo1.name)   # 输出 小明，因为没有获取age的私有属性，所以写peo1.age会报错</code></pre>
          </li>
        </ul>
        <p>静态方法和类方法</p>
        <pre><code class="language-python line-numbers">  class Triangle(object):
      """三角形类"""
      def __init__(self,a,b,c):
          """初始化方法"""
          self.a = a
          self.b = b
          self.c = c
      @staticmethod               # 语法糖装饰器  @classmethod 也是
      def is_valid(a,b,c):
          """判断三条边长能否构成三角形（静态方法）"""
          return a + b > c and b + c > a and a + c > b
      def perimeter(self):
          """ 计算周长 """
          return self.a + self.b + self.c
      def area(self):
          """计算面积"""
          p = self.perimeter() / 2
          return (p * (p - self.a) * (p - self.b) * (p - self.c)) ** 0.5

  a = Triangle(5,6,7)              # 通过调用类计算三角形的周长
  print(a.perimeter())             # 18
  Triangle.is_valid(5,6,7)         # 调用静态方法时，可以不对类实例化， 直接使用类名.方法，
                                      静态方法和类方法的区别：静态方法传入的参数都是普通参数，类方法参数第一位必须class</code></pre>
        <p>动态属性</p>
        <pre><code class="language-python line-numbers">  class People:  # 定义类
      def __init__(self,name,age): # 初始化方法，给对象创建属性
          self.name = name         # 创建私有属性
          self.age = age           # 创建私有属性
  peo1 = People('小明',18)
  peo1.sex = '男'                  # 在不修改类的情况下 添加属性  类似js
  print(peo1.name,peo1.sex)        # 小明 男

  ''' 如果不希望在使用对象时动态的为对象添加属性，可以使用Python的__s1ots__魔法。对于student类来说，
  可以在类中指定      slots=（“name'，‘age'），这样student类的对象只能有name和age属性，
  如果想动态添加其他属性将会引发异常 '''

  # 代码如下 :
  class People:  # 定义类
      __slots__ = ('name','age')   # 使用slots 来限定不能冬天为对象添加属性
      def __init__(self,name,age): # 初始化方法，给对象创建属性
          self.name = name         # 创建私有属性
          self.age = age           # 创建私有属性
  peo1 = People('小明',18)
  peo1.sex = '男'                  # 报错 AttributeError: 'People' object has no attribute 'sex'</code></pre>
        <p>单继承</p>
        <ul>
          <li>
            面向对象三大特性
            <ul>
              <li>封装根据职责将属性和方法封装到一个抽象的类中</li>
              <li>继承实现代码的重用，相同的代码不需要重复的编写</li>
              <li>
                多态不同的对象调用相同的方法，产生不同的执行结果，增加代码的灵活度
              </li>
            </ul>
          </li>
          <li>
            单继承 类似js的原型对象，往原型里填方法，继承
            <pre><code class="language-python line-numbers">  class A:              # 定义A类，有两个类方法，说话唱歌
      def say(self):
          print('说话')
      def sing(self):
          print('唱歌')

  class B(A):           # 继承谁，（）里面就写继承的类名
      def dump(self):
          print('B独有的跳方法')

  me = B()               # 实例化
  me.say()               # 没继承前，会报错，如果没有继承，那么无法调用A里面的say方法
  me.say()               # 继承后，就可以调用 A的方法

  # B类是A类的子类，A类是B类的父类，B类从A类继承
  # B类是A类的派生类，A类是B类的基类，B类从A类派生

  继承的传递性
  A  =>  B(A)  => C(B)        # C继承 B ， B 继承 A。  A一直传递下去，就是继承的传递性

  注意事项：分清楚类的关系，绑定关系，

  方法的重写：父亲的类方法满足不了子的需求，可以在子类下重新写同名方法，但是不会影响父亲类方法
  A  =>  B(A)  => C(B)          B:  def fly(self):            C:  def fly(self):
                                    print('我是B的类方法')          print('在C类方法里，重写B类的方法，但不影响B类')

  对父类的方法进行扩展：
      使用 super() 方法，可以在子类中调用父类方法，在子类方法中写上   super().sing()
      或者 父类名.方法(self)     B.fly(self)      必须使用参数 ( self )，2.0推荐，3.0版本不推荐
      当前类中的，当前子类名.方法(self)  会出现递归，死循环

  父类的私有属性和私有方法
      1.子类对象不能在自己的方法内部，直接访问父类的私有属性或私有方法
      2.子类对象可以通过父类的公有方法间接访问到私有属性或私有方法
        私有属性、方法是对象的隐私，不对外公开，外界以及子类都不能直接访问
        私有属性、方法通常用于做一些内部的事倩

  class A:
      def say(self):
          self.name1 = 100
          self.__name1 = 200

      def __sing(self,name):
          print('私有方法')

  class B(A):
      pass</code></pre>
            <ul>
              <li>
                注意：打印父类中的私有属性会报错，不可以直接打印父类的私有属性。也不可以调用父类的私有方法
              </li>
              <li>
                在子类中使用父类的私有属性和私有方法：
                <ul>
                  <li>
                    必须在父类创建一个公有类方法，类方法中去调用私有方法和私有属性
                  </li>
                  <li>
                    因为父类方法是能调用私有的方法和属性，等于开放接口来给子类调用
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p>多继承</p>
        <ul>
          <li>子类可以拥有多个父类，并且具有所有父类的属性和方法</li>
          <li>例如：孩子会继承自己父亲和母亲的特性</li>
          <li>
            语法：
            <pre><code class="language-python line-numbers">  class  子类名（父类1 ， 父类2）
      pass</code></pre>
          </li>
          <li>
            多继承的使用注意事项
            <ul>
              <li>
                如果不同的父类中存在同名的方法，子类对象在调用方法时，会调用哪一个父类中的方法呢？
              </li>
            </ul>
          </li>
          <li>
            提示：开发时，应该尽量避免这种容易产生混满的情况！--如果父类之间存在同名的属性或者方法，应该尽量避免使用多继承
          </li>
          <li>
            结果：多继承顺序，类继承时写的顺序就决定了调用重名类方法的顺序，应尽量避免，
            父类1 父类2 || 父类2 父类1
          </li>
          <li>Python中的MRO--方法搜索顺序（知道）</li>
          <li>
            Python中针对类提供了一个内置属性__mro__可以查看方法搜索顺序: print(
            A.__mor__ )
            <ul>
              <li>
                MRO是method resolution
                order，主要用于在多继承时判断方法、属性的调用路径
              </li>
              <li>
                查询顺序： leiB => leiA => object => 报错
                会一直往上查，最终没查到会报错
              </li>
            </ul>
          </li>
        </ul>
        <p>新式类与旧式</p>
        <ul>
          <li>
            object
            是Python为所有对象提供的基类，提供有一些内置的属性和方法，可以使展
            dir( ) 函数查看
            <ul>
              <li>新式类：以 object 为基类的类，推荐使用</li>
              <li>经典类：不以 object 为基类的类，不推荐使用</li>
            </ul>
          </li>
          <li>
            在Python
            3.x中定义类时，如果没有指定父类，会默认使用object作为该类的基类 --
            Python 3.x中定义的类都是新式类
          </li>
          <li>
            在Python 2.x中定义类时，如果没有指定父类，则不会以object 作为基类
          </li>
          <li>新式类和经典类在多继承时--会影响到方法的搜索顺序</li>
          <li>为了保证编写的代码能够同时在Python 2.x和Python 3.x运行！</li>
          <li>注意：今后在定义类时，如果没有父类，建议统一继承自object</li>
        </ul>
        <p>多态 (面向对象三大特性)</p>
        <ul>
          <li>
            封装根据职责将属性和方法封装到一个抽象的类中
            <ul>
              <li>定义类的准则</li>
            </ul>
          </li>
          <li>
            继承实现代码的重用，相同的代码不需要重复的编写
            <ul>
              <li>设计类的技巧</li>
              <li>子类针对自己特有的需求，编写特定的代码</li>
            </ul>
          </li>
          <li>
            多态不同的子类对象调用相同的父类方法，产生不同的执行结果
            <ul>
              <li>多态可以增加代码的灵活度</li>
              <li>以继承和重写父类方法为前提</li>
              <li>是调用方法的技巧，不会影响到类的内部设计</li>
            </ul>
          </li>
        </ul>
        <p>实例</p>
        <ul>
          <li>使用面相对象开发，第1步是设计类</li>
          <li>
            使用类名0创建对象，创建对象的动作有两步
            <ul>
              <li>在内存中为对象分配空间</li>
              <li>
                调用初始化方法init为对象初始化3.对象创建后，内存中就有了一个对象的实实在在的存在--实例
              </li>
            </ul>
          </li>
          <li>
            因此，通常也会把
            <ul>
              <li>1. 创建出来的对象叫做类的实例</li>
              <li>2. 创建对象的动作叫做实例化</li>
              <li>3. 对象的属性叫做实例属性</li>
              <li>4. 对象调用的方法叫做实例方法</li>
            </ul>
          </li>
          <li>
            在程序执行时
            <ul>
              <li>对象各自拥有自己的实例属性</li>
              <li>
                调用对象方法，可以通过self.
                <ul>
                  <li>访问自己的属性</li>
                  <li>调用自己的方法</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p>数据类型之间的转换</p>
        <ul>
          <li>隐式类型转换： 通过数学运算可以隐式将 int类型 转成 float类型</li>
          <li>
            显示类型转换:
            <table>
              <tbody>
                <tr>
                  <th>函数</th>
                  <th>说明</th>
                </tr>
                <tr>
                  <td>int（x）</td>
                  <td>将x转换为整数类型 ，不会四舍五入，只保留整数</td>
                </tr>
                <tr>
                  <td>float（x）</td>
                  <td>将x转换为浮点数类型</td>
                </tr>
                <tr>
                  <td>str（x）</td>
                  <td>将x转成字符串</td>
                </tr>
                <tr>
                  <td>chr（x）</td>
                  <td>将整数x转换为一个字符，将ASCII转换为字</td>
                </tr>
                <tr>
                  <td>ord（x）</td>
                  <td>将一个字符x转换为其对应的整数值，ASCII码</td>
                </tr>
                <tr>
                  <td>hex（x）</td>
                  <td>将一个整数x转换为一个十六进制字符串</td>
                </tr>
                <tr>
                  <td>oct（x）</td>
                  <td>将一个整数x转换为一个八进制字符串</td>
                </tr>
                <tr>
                  <td>bin（x）</td>
                  <td>将一个整数x转换为一个八进制字符串</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>eval()函数</li>
          <li>
            eval（s）函数将去掉字符串s最外侧的引号，并按照Python语句方式执行去掉引号后的字符串
            <ul>
              <li>
                语法：变量= eval (字符串)
                <ul>
                  <li>
                    eval（）函数经常和
                    input（）函数一起使用，用来获取用户输入的数值型
                  </li>
                </ul>
              </li>
              <li>
                写法：
                <ul>
                  <li>
                    myStr =eval（ '3.14+3' ） // 6.140000000000001
                    去掉引号执行加法运算，去字符串并执行里面的内容
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            进制之间的转换
            <pre><code class="language-python line-numbers">  # (5) 10    10进制的5  转换二进制 ：              (0101)2    二进制的0101  转换十进制 ：
    2  |_5_    1    5 / 2  上2 余 1                 0    1    0    1                  二进制
    2  |_2_    0    2 / 2  上1 余 0                 3    2    1    0                  序号
    2  |_1_    1    1 / 2  上0 余 1                 0*2^3 + 1*2^2 + 0*2^1 +  1*2^0    公式
         0                                          0 + 4 + 0 + 1 =  5                结果

  # 二进制从下往上： (0101) 2     10进制的5转成二进制 0101

  (13) 10   10进制的13  转换八进制 ：              (15)8     八进制的15 转换成  10               进制
    8  |_13_    5    13 / 8  上1 余 5               1     5                           八进制
    8  |_1_     1    13 / 2  上0 余 1               1     0                           序号
         0                                          1*8^1  + 5*8^0                    公式
                                                    8 + 5 =  13                       结果

  # 八进制从下往上： (15)8         10进制的13转成八进制 15

  (37) 10   十进制的37   转换16进制 ：             (25)16    十六进制的25 转换成 十进制
    16  |_37_   5    13 / 8  上2 余 5               2    5                            十六进制
    16  |_2_    2    13 / 2  上0 余 2               1    0                            序号
          0                                         2*16^1  + 5*16^0                  公式
                                                    32 + 5 =  37                      结果

  # 十六进制从下往上： (25)16   10进制的37转成十六进制 25（不是二十五，是二五）</code></pre>
          </li>
        </ul>
        <p>位运算（了解即可）</p>
        <pre><code class="language-python line-numbers">  位运算是把数字看作二进制数来进行计算的，所以需要先将要执行运算的数据转换为二讲制，然后才能进行执行运算
  “位与”运算（&） 两个操作数据的二进制表示，只有对应数位都是1时，结果数位才是1，否则为0
          0000   0000   0000   1100
        & 0000   0000   0000   1000
        ------------------------------
          0000   0000   0000   1000

  “位或”运算（|） 两个操作数据的二进制表示，只有对应数位都是0时，结果数位才是0，否则为1
          0000   0000   0000   0100
        | 0000   0000   0000   1000
        ------------------------------
          0000   0000   0000   1100

  “位异或”运算（^）两个操作数据的二进制相同（同时为0或同时为1），结果这为0，否则为1
          0000   0000   0001   1111
        ^ 0000   0000   0001   0110
        ------------------------------
          0000   0000   0000   1001

  “位取反”运算（~）操作数中对应的二进制数1修改为0，0修改为1
        ~ 0000   0000   0111   1011
        ------------------------------
          1111   1111   1000   0100

  “左移位”运算（&lt;&lt;）将一个二进制数向左移动指定的位数，左边（高位端）溢出的位被丢弃，右边（低位端）
      的空位用0补充。左移位运算相当于乘以2的N次幂，比如：   2&lt;&lt;3   2向左移动3位
        &lt;&lt; |   0 0 0 0 0 0 1 0
        ----------------------
        0 0 |   0 0 0 0 1 0 0 0       | 前面代表移位溢出的部分，且不要了，  左移后补0，写法   2 &lt;&lt;2 ，2向左移动2位

  “右移位”运算（&gt;&gt;）将一个二进制数向右移动指定的位数，右边（低位端）溢出的位被丢弃，左边（高位端）的空位端，
      如果最高位是0（正数）左侧空位填0，如果最高位是1（负数），左侧空位填1。右移位运算相当于除以2的N次幂
        0 0 0 0 0 0 1 0  | &gt;&gt;
        ----------------------
        0 0 0 0 0 0 1 0  | 0 0        | 后面代表移位溢出的部分，且不要了，  右移前面补0，写法   3 &gt;&gt;2 ，3向右移动2位

        1 0 0 0 0 0 1 0  | &gt;&gt;
        ----------------------
        1 1 0 0 0 0 1 0  | 0 0        | 最高位是1（负数），左侧空位填1，相反最高位为0（正数），左侧空位填0</code></pre>
      </el-card>
      <el-card id="part3" shadow="hover">
        <h2>其他</h2>

        <p>C / S 架构 （客户端client / 服务端Server）</p>
        <ul>
          <li>
            C/S架构软件有一个特点，就是如果用户要使用的话，需要下载一个客户端，安装后就可以使用。比如QQ.OFFICE软件等
          </li>
          <li>
            C/S架构的优点：
            <ul>
              <li>
                C/5架构的界面和操作可以很丰富。（客户端操作界面可以随意排列，满足客户的需要）
              </li>
              <li>
                安全性能可以很容易保证。（因为只有两层的传输，而不是中间有很多层。
              </li>
              <li>由于只有一层交互，因此响应速度较快。</li>
            </ul>
          </li>
          <li>
            C/S架构的缺点：
            <ul>
              <li>适用面窄，通常用于局域网中。</li>
              <li>
                用户群固定。由于程序需要安装才可使用，因此不适合面向一些不可知的用户。
              </li>
              <li>维护成本高，发生一次升级，则所有客户端的程序都需要改变。</li>
            </ul>
          </li>
        </ul>
        <p>B / S 架构 （浏览器Browser / 服务端Server）</p>
        <ul>
          <li>
            B/S架构的优点：
            <ul>
              <li>客户端无需安装，有Web浏览器即可。</li>
              <li>
                BS架构可以直接放在广域网上，通过一定的权限控制实现多客户访问的目的，交互性较强。
              </li>
              <li>
                BS架构无需升级多个客户端，升级服务器即可。可以随时更新版本，无需用户重新下载。
              </li>
            </ul>
          </li>
          <li>
            B/S架构的缺点：
            <ul>
              <li>表现要达到CS程序的程度需要花费不少精力。</li>
              <li>在速度和安全性上需要花费巨大的设计成本。</li>
            </ul>
          </li>
        </ul>
        <p>协议与OSI七层模型</p>
        <ul>
          <li>
            OSI七层模型与TCP/IP协议
            <ul>
              <li>应用层：各种应用程序，使用网络的第一层环节</li>
              <li>表示层：数据的格式化，加密解密，压缩解压缩</li>
              <li>会话层：建立，管理，终止应用之间的会话连接</li>
              <li>传输层：提供端到端的数据服务，可靠不可靠</li>
              <li>网络层：逻辑寻址，路由选择</li>
              <li>数据链路层：将分组数据封装成帧，打包</li>
              <li>物理层：在介质上传输比特，提供物理规约，网线</li>
            </ul>
          </li>
          <li>
            优点：
            <ul>
              <li>建立统一通信标准。</li>
              <li>降低开发难度，明确各层分工</li>
            </ul>
          </li>
        </ul>
        <p>协议 IP</p>
        <ul>
          <li>
            Inter + net ， 任何私有网络，只要支持这个协议，就可以链入互联网
          </li>
          <li>IP 就是地址，IPv4 IP版本4 ， 0 ~ 255取值范围</li>
          <li>通信地址</li>
          <li>
            IP地址
            <ul>
              <li>一台计算机在网络当中的地址编号标识</li>
            </ul>
          </li>
          <li>
            IPV4
            <ul>
              <li>
                由4个部分构成，每个部分都是整数，取值范围为0~255
                例如：192.168.5.1，IPv4 IP版本4
              </li>
            </ul>
          </li>
          <li>
            IPv6（了解）
            <ul>
              <li>由8个部分构成，每部分为4个16进制数字</li>
            </ul>
          </li>
          <li>
            公网IP/内网IP
            <ul>
              <li>公网ip：连接到互联网上的公共ip地址，大家都能访问</li>
              <li>内网ip：局域网范围由网络设备分配的地址，不能被主动访问</li>
            </ul>
          </li>
          <li>Windows查看ip: ipconfig</li>
          <li>Linux查看ip: ifconfig</li>
          <li>查看网络连通命令：ping (IP / 网址)</li>
        </ul>
        <p>端口</p>
        <ul>
          <li>
            端口是网络地址的一部分，在一台计算机上，每个网络程序对应一端口，比如MySQL端口号：3306
          </li>
          <li>端口取值范围：0~65535之间的整数</li>
          <li>一台计算机上的端口号不会重复</li>
          <li>
            通常0~1023的端口会被系统服务或者使用广泛的程序占据，个人应用的端口应该配置>1024
          </li>
          <li>客户端端口由操作系统分配，服务器端应用端口由开发人员指定</li>
          <li>
            如果把一台服务器比作一栋楼，端口可以看作是每间房的门牌号，每个应用占据一个房间。
          </li>
        </ul>
        <p>Socket套接字概念</p>
        <ul>
          <li>
            Socket是应用层与TCP/IP协议族通信的中间软件抽象层，它是一组接口。在设计模式中，Socket其实就是一个门面模式，它把复杂
            的TCP/IP协议族隐藏在Socket接口后面，对用户来说，一组简单的接口就是全部，让socket去组织数据，以符合指定的协议。
            <ul>
              <li>
                UDP套接字 UDP套接字应用层的一种编程方法。
                <ul>
                  <li>socket（） // 创建套接字</li>
                  <li>bind（） // 绑定IP端口</li>
                  <li>sendto（） // 发送消息</li>
                  <li>recvfrom（） // 接受消息</li>
                  <li>close（） // 关闭套接字</li>
                </ul>
                <pre><code class="language-python line-numbers">  #示例代码 -- 客户端 通信 服务端
  # udp 服务端套接字示例代码
  from socket import *                    # 模块导入
  ADDR = ("0.0.0.0", 8888)                # 声明服务器IP，端口 ,大写变量
  udp_socket = socket(AF_INET,SOCK_DGRAM) # 创建udp套接字,SOCK_DGRAM表示选择的是UDP套接字
  udp_socket.bind(ADDR)                   # 调用bind 绑定地址端口
  msg,addr = udp_socket.recvfrom(1024)    # 接受消息   1024 一次能接受的最大字节数
  print('RECV:',addr,msg.decode())        # 打印消息跟地址  decode（） 解码
  udp_socket.close()                      # 关闭套接字

  # udp 客户端套接字示例代码
  from socket import *                    # 导入模块
  ADDR = ('127.0.0.1',8888)               # 确定服务器的地址 127.0.0.1 跟 localhost 默认是本机的IP
                                          # 客户端默认由操作系统自动分配，绑定就是固定了，所以不需要绑定
  udp_socket = socket(AF_INET, SOCK_DGRAM)# 创建udp套接字,SOCK_DGRAM表示选择的是UDP套接字
  msg = input('>>:')                      # 接受信息
  udp_socket.sendto(msg.encode(), ADDR)   # 发送给服务器
  udp_socket.close()                      # 关闭套接字

  udp循环发送
  # udp 服务端套接字示例代码
  from socket import *                        # 模块导入
  ADDR = ("0.0.0.0", 8888)                    # 声明服务器IP，端口 ,大写变量
  udp_socket = socket(AF_INET,SOCK_DGRAM)     # 创建udp套接字,SOCK_DGRAM表示选择的是UDP套接字
  udp_socket.bind(ADDR)                       # 调用bind 绑定地址端口
  while True:                                 # 循环接受信息
      msg, addr = udp_socket.recvfrom(1024)   # 接受消息   1024 一次能接受的最大字节数
      print('RECV:', addr, msg.decode())      # 打印消息跟地址  decode（） 解码
      udp_socket.sendto('收到'.encode(),addr)  # 回应消息给客户端
      if msg == b'bye':                       # 约定断开通信的条件
          break                               # 退出循环
  udp_socket.close()                          # 关闭套接字

  # udp 客户端套接字示例代码
  from socket import *                        # 导入模块
  ADDR = ('127.0.0.1',8888)                   # 确定服务器的地址 127.0.0.1 跟 localhost 默认是本机的IP
  udp_socket = socket(AF_INET, SOCK_DGRAM)    # 创建udp套接字,SOCK_DGRAM表示选择的是UDP套接字
  # 客户端默认由操作系统自动分配，绑定就是固定了，所以不需要绑定
  while True:                                 # 循环发送信息
      msg = input('>>:')                      # 接受信息
      udp_socket.sendto(msg.encode(), ADDR)   # 发送给服务器
      data,addr = udp_socket.recvfrom(1024)   # 接受服务器的消息
      print('来自服务器的消息',data.decode())
      if msg == 'bye':                        # 终止通信
      break                                   # 退出
  udp_socket.close()                          # 关闭套接字</code></pre>
              </li>
              <li>
                UDP套接字特点
                <ul>
                  <li>可能会出现数据丢失</li>
                  <li>传输过程简单，实现容易</li>
                  <li>数据以数据包的形式传输</li>
                  <li>数据传输效率高</li>
                </ul>
              </li>
              <li>
                TCP套接字
                <ul>
                  <li>
                    面向连接的传输服务
                    <ul>
                      <li>
                        提供了可靠的数据传递，传输过程中无丢失，无失序，无差错，无重复
                      </li>
                      <li>可靠性保障机制（自动完成）</li>
                      <li>在通信之前需要建立数据连接</li>
                      <li>确认应答机制</li>
                      <li>通信结束后正常断开连接</li>
                    </ul>
                  </li>
                  <li>
                    三次握手
                    <ul>
                      <li>客户端向服务器发送报文请求连接</li>
                      <li>服务收到请求回复报文可以连接</li>
                      <li>客户端收到回复再次发送报文建立连接</li>
                    </ul>
                  </li>
                  <li>
                    四次挥手
                    <ul>
                      <li>发起方发送报文请求断开</li>
                      <li>接收方收到请求回复信息收到，并准备断开</li>
                      <li>接收方准备完成，再次发送表示可以断开</li>
                      <li>发送方收到确定，发送最终消息完成断开</li>
                    </ul>
                  </li>
                  <li>
                    tcp套接字细节
                    <ul>
                      <li>
                        tcp连接中一端退出，另一端依然阻塞在recv，此时recv会马上返回一个空字符串
                      </li>
                      <li>
                        如果一端已经不存在，任然通过send向其发送数据则会产生BrokenPipeError
                      </li>
                      <li>
                        一个服务端可以同时连接多个客户端，也能够被重复连接
                      </li>
                    </ul>
                  </li>
                  <li>
                    TCP传输
                    <ul>
                      <li>socket（） // 创建套接字</li>
                      <li>bind（） // 绑定地址</li>
                      <li>listen（） // 设置监听</li>
                      <li>accept（） // 等待处理连接</li>
                      <li>send / recv // 发送 / 接受消息</li>
                      <li>close（） // 关闭</li>
                    </ul>
                    <pre><code class="language-python line-numbers">  # 服务端TCP 1示例代码
  from socket import *                       # 模块导入
  tcp_socket = socket(AF_INET,SOCK_STREAM)   # 创建udp套接字,不传SOCK_STREAM 会默认是TCP，流式套接字
  tcp_socket.bind(("0.0.0.0", 8888))         # 调用bind 绑定地址端口
  tcp_socket.listen(5)                       # 设置监听 ,最多设置1024 ，linux自动配置，具备了监听的属性，被客户端连接的属性
  print('等待客户端连接....')                   # 等待处理客户端的连接
  connfd,addr = tcp_socket.accept()          # accept 阻塞函数处理客户端  连接请求没有连接则阻塞
                                              # connfd 处理该连接的专门套接字    addr 客户端地址

  print('连接的客户端是：',addr)
  data = connfd.recv(1024)                    # 接受处理客户端的信息
  print('消息：',data.decode())
  tcp_socket.close()                          # 关闭连接
  connfd.close()                              # 关闭连接

  # tcp 客户端套接字示例代码
  from socket import *                        # 导入模块
  tcp_socket = socket()                       # 创建udp套接字
  tcp_socket.connect(('127.0.0.1',8888))      # 连接服务端
  msg = input('>>:')                          # 发送消息
  tcp_socket.send(msg.encode())
  tcp_socket.close()                          # 关闭连接

  循环处理
  # 服务端TCP 1示例代码
  from socket import *                        # 模块导入
  tcp_socket = socket(AF_INET,SOCK_STREAM)    # 创建udp套接字,不传SOCK_STREAM 会默认是TCP，流式套接字
  tcp_socket.bind(("0.0.0.0", 8888))          # 调用bind 绑定地址端口
  tcp_socket.listen(5)  # 设置监听 ,最多设置1024 ，linux自动配置，具备了监听的属性，被客户端连接的属性
  print('等待客户端连接....')                    # 等待处理客户端的连接
  while True:
      connfd, addr = tcp_socket.accept()      # accept 阻塞函数处理客户端  连接请求没有连接则阻塞
      print('连接的客户端是：', addr)
      data = connfd.recv(1024)                # 接受处理客户端的信息
      print('消息：', data.decode())
      connfd.send('收到:'.encode())
      connfd.close()                          # 关闭连接
  tcp_socket.close()                          # 关闭连接

  # tcp 客户端套接字示例代码
  from socket import *                        # 导入模块
  tcp_socket = socket()                       # 创建udp套接字
  tcp_socket.connect(('127.0.0.1',8888))      # 连接服务端
  while True:
      msg = input('>>:')                      # 发送消息
      tcp_socket.send(msg.encode())
      data = tcp_socket.recv(1024)            # 接收服务端的消息
      print('服务端',data.decode())
  tcp_socket.close()                          # 关闭连接</code></pre>
                  </li>
                  <li>
                    文件传输客户端/服务端
                    <pre><code class="language-python line-numbers">  """
      顺序：
      文件传输 服务端示例代码
          1 建立TCP套接字
          2 等待客户端内连接
          3 接收图片内容
          4 保存图片
          5 终止连接
  """

    from socket import *             # 导入套接字模块
    import time                      # 导入时间模块
    socket = socket()                # 创建套接字
    socket.bind(('0.0.0.0',8888))    # 绑定ip
    socket.listen(5)                 # 设置监听
    connfd,addr = socket.accept()    # 创建connfd 阻塞
    data = connfd.recv(1680 * 1680)  # 接收客户端的数据
    fileName = '%d-%d-%d.jpg' % time.localtime()[:3]
    f = open(fileName,'wb')
    f.write(data)
    f.close()

    connfd.close()                   # 关闭连接
    socket.close()

  """
      文件传输 客户端示例代码
          1 建立TCP套接字
          2 连接服务端
          3 读取文件内容
          4 发送文件内容
          5 关闭连接
  """
  from socket import *                # 导入模块
  socket = socket()                   # 创建套接字
  socket.connect(('127.0.0.1',8888))  # 连接服务端
  f = open('2.jpg','rb')              # 读取文件内容
  data = f.read()
  socket.send(data)                   # 发送内容
  f.close()                           # 关闭
  socket.close()                      # 关闭连接</code></pre>
                  </li>
                </ul>
              </li>
              <li>
                粘包问题产生原因
                <ul>
                  <li>
                    为了解决数据传输中的速率不协调问题，操作系统设置了缓冲区
                  </li>
                  <li>实际网络工作过程比较复杂，导致消息收发不一致</li>
                  <li>
                    tcp以字节流方式进行数据传输，在接受的时候不区分消息边界
                  </li>
                </ul>
              </li>
              <li>
                带来问题
                <ul>
                  <li>
                    如果发送的消息每次都是独立的，需要接收端去独立解析消息时回带来消息误解问题
                  </li>
                </ul>
              </li>
              <li>
                解决方式
                <ul>
                  <li>人工设置消息边界</li>
                  <li>减缓消息发送速度</li>
                </ul>
              </li>
              <li>
                解释
                <ul>
                  <li>
                    0.0.0.0 : 默认表示一个无效的地址，默认会寻找到本机的一个地址
                  </li>
                  <li>127.0.0.1 : 回环测试，回环地址，指向的也是本机 地址</li>
                  <li>localhost： 其实就是一个域名，默认是指向本机</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p>多任务编程</p>
        <ul>
          <li>i5 i7 i9 英特尔/AMD/三星/海思</li>
          <li>ARM -> 移动端X86 -> 服务端 / pc端</li>
          <li>cpu</li>
          <li>
            轮询：cpu在多个任务之间快速的切换执行，因为切换的速度在微妙级别，所以看起来就像同时在执
          </li>
          <li>
            并发与并行
            <ul>
              <li>
                并发：多个任务同时分配给一个CPU核心切换执行，这种情况就是并发，但是多个任务并不真正的同时执行
              </li>
              <li>
                并行：多个任务同时分配给不同的CPU核心同时执行，这种情况是并行，并行是多个任务真正的同时执行
              </li>
            </ul>
          </li>
          <li>
            多任务编程
            <ul>
              <li>
                多任务编程：在一个程序中编写多个任务，在程序运行中让多个任务同时执行。
              </li>
              <li>实现方法：多进程编程，多线程编程</li>
              <li>
                多任务编程好处
                <ul>
                  <li>提高程序任务之间的配合</li>
                  <li>充分利用计算机资源，提高了程序任务执行效率</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            进程 process
            <ul>
              <li>程序是一个可执行文件，静态的存放在磁盘。</li>
              <li>
                进程是一个动态的过程描述，会占有计算机运行资源，有自己的生命周期。
              </li>
            </ul>
          </li>
          <li>
            进程三态
            <ul>
              <li>就绪：进程具备执行条件，等待系统调度分配资源</li>
              <li>运行：进程占用cpu执行</li>
              <li>等待：进程阻塞等待，让出cpu资源</li>
            </ul>
          </li>
        </ul>
        <p>主要类跟函数的使用</p>
        <ul>
          <li>Process：创建进程对象</li>
          <li>target：绑定执行的目标函数</li>
          <li>args（元组）：给target函数位置传参</li>
          <li>kwargs（字典）：给target函数键值传参</li>
          <li>start（）：启动进程</li>
          <li>使用进程 模块：multiprocessing</li>
          <li>
            创建步骤：
            <ul>
              <li>1. 将需要新进程执行的事件封装成函数</li>
              <li>2. 通过模块的Process类创建进程对象，关联函数</li>
              <li>3. 通过进程对象设置进程信息与属性</li>
              <li>4. 通过进程对象调用start启动进程</li>
              <li>5. 通过进程对象调用join回收资源</li>
              <li>
                6. 注意：
                <pre><code class="language-python line-numbers">  # windows系统下必须把子进程相关代码放入if，要不然会报错 linux 不需要
  import multiprocessing                      # 导入模块
  from time import  sleep

  def fun():                                  # 创建进程执行的函数
      print('子进程函数开始执行....')
      sleep(2)                                # 睡眠模拟程序执行
      print('子进程函数执行结束....')

  # windows系统下必须把子进程相关代码放入if，要不然会报错   linux 不需要
  if __name__ == '__main__':
  p = multiprocessing.Process(target = fun)   # 创建子进程对象
      p.start()                               # 启动子进程，进程诞生并执行fun函数
      print('主进程开始执行...')                 # 主进程执行
      sleep(5)                                # 3秒后执行
      print('主进程执行完毕...')
      p.join()                                # 回收

  # 传参写法
  from multiprocessing import Process          # 导入模块
  from time import sleep
  def emp(sec,name):                           # 创建包含参数的进程函数
      for i in range(3):
          sleep(sec)
          print('说明：%s' % name)
  if __name__ == '__main__':
      p = Process(target=emp,args=(2,'传入参数'))              # 按位置传参
      p.start()                                               # 执行
      p.join()                                                # 回收

  # 关键字传参写法
  from multiprocessing import Process  # 导入模块
  from time import sleep
  def emp(sec,name):   # 创建包含参数的进程函数
      for i in range(3):
          sleep(sec)
          print('说明：%s' % name)

  if __name__ == '__main__':
  p = Process(target=emp,kwargs={'name':'传入参数','sec':4})   # 关键字传参
  p.start()                                                   # 执行
  p.join()                                                    # 回收

  # 进程属性
  import time
  from multiprocessing import Process                         # 导入模块

  def fun():                                                  # 创建函数
      for i in range(3):
          print(time.ctime())                                 # 打印时间
          time.sleep(2)

  if __name__ == '__main__':
      p = Process(target=fun)
      p.daemon = True       # 设置True子进程随父进程的退出而退出  在start前设置,
                              因为父进程没有任何操作，所以直接退出了，把此行注释就会打印时间了

      p.start()

      print(p.name)         # 查看进程的名字
      print(p.pid)          # ID
      print(p.is_alive())   # 存活状态

  """
      import os, sys        # 需要导入模块
      os.getpid             # 获取子进程
      os.getippid           # 获取父进程
      sys.exit              # 退出进程
  """</code></pre>
              </li>
            </ul>
          </li>
        </ul>
      </el-card>
      <el-card id="part4" shadow="hover">
        <h2>爬虫</h2>

        <p>前言</p>
        <ul>
          <li>
            爬虫概述
            <ul>
              <li>
                简单来说，爬虫就是获取网页并提取和保存信息的自动化程序，下面概要介绍一下。
              </li>
            </ul>
          </li>
          <li>
            获取网页
            <ul>
              <li>
                爬虫首先要做的工作就是获取网页，这里就是获取网页的源代码。源代码里包含了网页的部分有用信息，所以只要把源代码
                获取下未，就可以从中提取想要的信息了。
              </li>
            </ul>
          </li>
          <li>
            提取信息
            <ul>
              <li>
                获取网页源代码后，接下来就是分析网页源代码，从中提取我们想要的数据。首先，最通用的方法便是采用正则表达式提取，
                这是一个万能的方法，但是在构造正则表达式时比较复杂且容易出错。
                另外，由于网页的结构有一定的规则，所以还有一些根据网页节点属性、Css选择器或xPath未提取网页信息的库，
                如Beautiful
                soup、pyquery、1xml等。使用这些库，我们可以高效快速地从中提取网页信息，如节点的属性、文本值等。
                提取信息是爬虫非常重要的部分，它可以使杂乱的数据变得条理清晰，以便我们后续处理和分析数据。
              </li>
            </ul>
          </li>
          <li>
            保存数据
            <ul>
              <li>
                提取信息后，我们一般会将提取到的数据保存到某处以便后续使用。这里保存形式有多种多样，如可以简单保存为TXT文本或
                JSON文本，也可以保存到数据库，如MysQL和MongoDB等，也可保存至远程服务器，如借助SFTP进行操作等。
              </li>
            </ul>
          </li>
          <li>
            案例
            <pre><code class="language-python line-numbers">  import requests                      # 需要安装   pip install requests
  url = 'https://www.baidu.com/'       # 待提取的URL地址
  res = requests.get(url)              # 模拟浏览器发请求
  res.encoding = 'utf-8'               # 对数据编码
  with open('百度.html','wb') as f:     # 保存数据
      f.write(res.content)</code></pre>
          </li>
          <li>
            HTTP请求过程
            <ul>
              <li>
                我们在浏览器中输入一个URL，回车之后便会在浏览器中观察到页面内容。实际上，这个过程是浏览器向网站所在的服务器发送
                了一个请求，网站服务器接收到这个请求后进行处理和解析，然后返回对应的响应，接着传回给浏览器。响应里包含了页面的
                源代码等内容，浏览器再对其进行解析，便将网页呈现了出来，模型如图所示
              </li>
            </ul>
          </li>
          <li>
            控制面板 Network
            <ul>
              <li>控制器</li>
              <li>过滤器： 可以输入想要查找的数据，比如.jpg .png</li>
              <li>概览</li>
              <li>请求列表: 数据的大小，请求的信息</li>
              <li>概要</li>
            </ul>
          </li>
          <li>
            请求方法
            <table>
              <tbody>
                <tr>
                  <th>方法</th>
                  <th>描述</th>
                </tr>
                <tr>
                  <td>GET</td>
                  <td>请求页面，并返回页面内容</td>
                </tr>
                <tr>
                  <td>HEAD</td>
                  <td>
                    类似于GET请求，只不过返回的响应中没有具体的内容，用于获取报头
                  </td>
                </tr>
                <tr>
                  <td>POST</td>
                  <td>大多用于提交表单或上传文件，数据包含在请求体中</td>
                </tr>
                <tr>
                  <td>PUT</td>
                  <td>从客户端向服务器传送的数据取代指定文档中的内容</td>
                </tr>
                <tr>
                  <td>DELETE</td>
                  <td>请求服务器删除指定的页面</td>
                </tr>
                <tr>
                  <td>CONNECT</td>
                  <td>把服务器当作跳板，让腋务器代替客户端访问其他网页</td>
                </tr>
                <tr>
                  <td>OPTIONS</td>
                  <td>允许客户端查看服务器的性能</td>
                </tr>
                <tr>
                  <td>TRACE</td>
                  <td>回显服务器收到的请求，主要用于测试或诊断</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            请求的网址
            <ul>
              <li>
                请求的网址，即统一资源定位符URL，它可以唯一确定我们想请求的资源。
              </li>
            </ul>
          </li>
          <li>
            请求头
            <ul>
              <li>
                参考：
                <el-link
                  type="primary"
                  icon="Link"
                  target="_blank"
                  href="https://byvoid.com/zhs/blog/http-keep-alive-header/"
                >
                  https://byvoid.com/zhs/blog/http-keep-alive-header/
                </el-link>
              </li>
              <li>Accept</li>
              <li>Accept-Language</li>
              <li>Accept-Encoding</li>
              <li>Host 主机</li>
              <li>Cookie 会话信息身份</li>
              <li>Referer 记录来源</li>
              <li>User-Agent 浏览器得指纹信息</li>
              <li>Content-Type 类型</li>
            </ul>
          </li>
          <li>
            请求体
            <ul>
              <li>
                请求体一般承载的内容是POST请求中的表单数据，而对于GET请求，请求体则为空。
              </li>
            </ul>
          </li>
          <li>
            响应
            <ul>
              <li>
                响应，由很务端返回给客户端，可以分为三部分：响应状态码（Response
                Status Code）、响应头（Response Headers）和 响应体（Response
                Body）
              </li>
            </ul>
          </li>
          <li>
            响应状态码表示服务器的响应状态，如200代表服务器正常响应，404代表页面未找到，500代表服务器内部发生错误。在爬虫中，
            我们可以根据状态码来判断服务器响应状态，如状态码为200，则证明成功返回数据，再进行进一步的处理，否则直接忽略。
            表2-3列出了常见的错误代码及错误原因。
            <table>
              <tbody>
                <tr>
                  <th>状态码</th>
                  <th>说明</th>
                  <th>详情</th>
                </tr>
                <tr>
                  <td>100</td>
                  <td>继续</td>
                  <td>
                    请求者应当继续提出请求。服务器已收到请求的一部分，正在等待其余部分
                  </td>
                </tr>
                <tr>
                  <td>101</td>
                  <td>切换协议</td>
                  <td>请求者已要求服务器切换协议，服务器已确认并准备切换</td>
                </tr>
                <tr>
                  <td>200</td>
                  <td>成功</td>
                  <td>服务器已成功处理了请求</td>
                </tr>
                <tr>
                  <td>201</td>
                  <td>已创建</td>
                  <td>请求成功并且服务器创建了新的资源</td>
                </tr>
                <tr>
                  <td>202</td>
                  <td>已接收</td>
                  <td>服务器已接受请求，但尚未处理</td>
                </tr>
                <tr>
                  <td>203</td>
                  <td>非授权信息</td>
                  <td>服务器已成功处理了请求，但返回的信息可能来自另一个源</td>
                </tr>
                <tr>
                  <td>204</td>
                  <td>无内容</td>
                  <td>服务器成功处理了请求，但没有返回任何内容</td>
                </tr>
                <tr>
                  <td>205</td>
                  <td>重置内容</td>
                  <td>服务器成功处理了请求，内容被重置</td>
                </tr>
                <tr>
                  <td>206</td>
                  <td>部分内容</td>
                  <td>服务器成功处理了部分请求</td>
                </tr>
                <tr>
                  <td>300</td>
                  <td>多种选择</td>
                  <td>针对请求，服务器可执行多种操作</td>
                </tr>
                <tr>
                  <td>301</td>
                  <td>永久联动</td>
                  <td>请求的网页已永久移动到新位置，即永久重定向</td>
                </tr>
                <tr>
                  <td>302</td>
                  <td>临时移动</td>
                  <td>向请求的网页暂时跳转到其他页面，即暂时重定向</td>
                </tr>
                <tr>
                  <td>303</td>
                  <td>查看其他位置</td>
                  <td>如果原来的请求是POST，重定向目标文档应该通过GET提取</td>
                </tr>
                <tr>
                  <td>304</td>
                  <td>未修改</td>
                  <td>此次请求返回的网页未修改，继续使用上次的资源</td>
                </tr>
                <tr>
                  <td>305</td>
                  <td>使用代理</td>
                  <td>请求者应该使用代理访问该网页</td>
                </tr>
                <tr>
                  <td>307</td>
                  <td>临时重定向</td>
                  <td>请求的资源临时从其他位置响应</td>
                </tr>
                <tr>
                  <td>400</td>
                  <td>错误请求</td>
                  <td>服务器无法解析该请求</td>
                </tr>
                <tr>
                  <td>401</td>
                  <td>未授权</td>
                  <td>请求没有进行身份验证或验证未通过</td>
                </tr>
                <tr>
                  <td>403</td>
                  <td>禁止访问</td>
                  <td>服务器拒绝此请求</td>
                </tr>
                <tr>
                  <td>404</td>
                  <td>未找到</td>
                  <td>服务器找不到请求的网页</td>
                </tr>
                <tr>
                  <td>405</td>
                  <td>方法禁用</td>
                  <td>服务器禁用了请求中指定的方法</td>
                </tr>
                <tr>
                  <td>406</td>
                  <td>不接受</td>
                  <td>无法使用请求的内容响应请求的网页</td>
                </tr>
                <tr>
                  <td>407</td>
                  <td>需要代理授权</td>
                  <td>请求者需要使用代理授权</td>
                </tr>
                <tr>
                  <td>408</td>
                  <td>请求超时</td>
                  <td>服务器请求超时</td>
                </tr>
                <tr>
                  <td>409</td>
                  <td>冲突</td>
                  <td>务器在完成请求时发生冲突</td>
                </tr>
                <tr>
                  <td>410</td>
                  <td>已删除</td>
                  <td>请求的资源已永久删除</td>
                </tr>
                <tr>
                  <td>411</td>
                  <td>需要有效长度</td>
                  <td>服务器不接受不含有效内容长度标头字段的请求</td>
                </tr>
                <tr>
                  <td>412</td>
                  <td>为满足前提条件</td>
                  <td>服务器未满足请求者在请求中设置的其中一个前提条件</td>
                </tr>
                <tr>
                  <td>413</td>
                  <td>请求实体过大</td>
                  <td>请求实体过大，超出服务器的处理能力</td>
                </tr>
                <tr>
                  <td>414</td>
                  <td>请求URL过长</td>
                  <td>请求网址过长，服务器无法处理</td>
                </tr>
                <tr>
                  <td>415</td>
                  <td>不支持类型</td>
                  <td>请求格式不被请求页面支持</td>
                </tr>
                <tr>
                  <td>416</td>
                  <td>请求范围不符</td>
                  <td>页面无法提供请求的范围</td>
                </tr>
                <tr>
                  <td>417</td>
                  <td>未满足期望值</td>
                  <td>服务器未满足期望请求标头字段的要求</td>
                </tr>
                <tr>
                  <td>500</td>
                  <td>服务器内部错误</td>
                  <td>服务器遇到错误，无法完成请求</td>
                </tr>
                <tr>
                  <td>501</td>
                  <td>未实现</td>
                  <td>服务器不具备完成请求的功能</td>
                </tr>
                <tr>
                  <td>502</td>
                  <td>错误网关</td>
                  <td>服务器作为网关或代理，从上游服务器收到无效响应</td>
                </tr>
                <tr>
                  <td>503</td>
                  <td>服务不可用</td>
                  <td>服务器目前无法使用</td>
                </tr>
                <tr>
                  <td>504</td>
                  <td>网关超时</td>
                  <td>
                    服务器作为网关或代理，但是没有及时从上游服务器收到请求
                  </td>
                </tr>
                <tr>
                  <td>505</td>
                  <td>HTTP版本不支持</td>
                  <td>服务器不支持请求中所用的HTTP协议版本</td>
                </tr>
              </tbody>
            </table>
            <ul>
              <li>
                总结：
                <ul>
                  <li>100~ 信息状态码</li>
                  <li>200~ 成功状态码</li>
                  <li>300~ 重定向状态码</li>
                  <li>400~ 客户端错误状态码</li>
                  <li>500~ 服务端错误代码状态</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            响应头
            响应头包含了服务器对请求的应答信息，如Content-Type、Server.Ser-Cooke等。下面简要说明一些常用的头信息。
            <ul>
              <li>Date：标识响应产生的时间。</li>
              <li>Last-Modified：指定资源的最后修改时间。</li>
              <li>Content-Encoding：指定响应内容的编码。</li>
              <li>Server：包含服务器的信息，比如名称、版本号等。</li>
              <li>
                Content-Type：文档类型，指定返回的数据类型是什么，如text/html代表返回HTML文档，application/x-javascript则代表返回JavaScript文件，image/ipeg则代表返回图片。
              </li>
              <li>
                Set-Cookie：设置Cookies。响应头中的Set-Cookie
                告诉浏览器需要将此内容放在Cookies中，下次请求携带Cookies请求。
              </li>
              <li>
                Expires：指定响应的过期时间，可以便代理服务器或浏览器将加载的内容更新到缓存中。如果再次访问时，就可以直接从缓存中加载，降低服务器负载，缩短加载时间。
              </li>
            </ul>
          </li>
          <li>
            响应体
            最重要的当属响应体的内容了。响应的正文数据都在响应体中，比如请求网页时，它的响应体就是网页的HTML代码；请求一张图片时，它的响应体就是图片的二进制数据。我们做爬虫请求网页后，要
            解析的内容就是响应体，如图2-8所示。
          </li>
          <li>
            图示、响应体内容
            <ul>
              <li>
                在浏览器开发者工具中点击Preview、就可以看到网页的源代码，也就是响应体的内容，它是解析的目标。
              </li>
              <li>
                在做爬虫时，我们主要通过响应体得到网页的源代码、JSON数据等，然后从中做相应内容的提取
              </li>
            </ul>
          </li>
          <li>
            requests库使用
            <ul>
              <li>
                Requests 唯一的一个非转基因的Python HTTP库，从类可以安全享用。
              </li>
              <li>
                警告：
                <ul>
                  <li>
                    非专业使用其他HTTP库会导致危险的副作用，包括：安全缺陷症、元余代码症、重新发明轮子症、啃文档症、抑郁、头疼、
                    甚至死亡。
                  </li>
                </ul>
              </li>
              <li>环境搭建：pip install requests</li>
              <li>
                基本使用
                <ul>
                  <li>import requests</li>
                  <li>r=requests.get（'https://www.baidu.com/"）</li>
                  <li>print（type（r））</li>
                  <li>print（r.status_code）</li>
                  <li>print（type（r.text））</li>
                  <li>print（r.text）</li>
                  <li>print（r.cookies）</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            get 方法
            <pre><code class="language-python line-numbers">  import requests
  r = requests.get('https://wwwbaidu.com/')
  res = requests.request('GET','https://www.baidu.com/')
  print(res.status_code)
  data = {
    'name':'wang',
    'age': 22
  }
  res1 = requests.get("http://httpbin.org/get",params = data)
  headers = {
    # 'User-Agent':''
  }
  url = 'https://www.jianshu.com/p/8346143aba53'
  res2 = requests.get(url,headers=headers)</code></pre>
          </li>
          <li>
            post 请求
            <ul>
              <li>
                前面我们了解了最基本的GET清求，另外一种比较常见的请求方式是POST。使用requests实现POST请求同样非常简单，示例如下
              </li>
            </ul>
            <pre><code class="language-python line-numbers">  import requests data={'name'：'germey'，‘age'：122'}
  r = requests.post（"http://httpbin.org/post"，data=data）
  print（r.text）</code></pre>
          </li>
        </ul>
        <p>xpath工具使用</p>
        <ul>
          <li>
            工具简介：Xpath使用路径表达式来选取XML文档中的节点或节点集。节点是通过沿着路径（path）或者步（steps）来选取的。
          </li>
          <li>安装：pip install lxml 解析器</li>
          <li>使用：from lxml import etree</li>
          <li>
            插件：极简插件 => Xpath Helper =>
            <pre><code class="language-python line-numbers">  """
      步骤
          1 找地址
          2 发送请求
          3 提取相应
          4 数据入库
  """

  text = '''
      &lt;div&gt;
        &lt;ul&gt;
          &lt;li class="item-0"&gt;&lt;a&gt; href="link1.html"&gt;1 item&lt;/a&gt;&lt;/li&gt;
          &lt;li class="item-1"&gt;&lt;a&gt; href="link1.html"&gt;2 item&lt;/a&gt;&lt;/li&gt;
          &lt;li class="item-2"&gt;&lt;a&gt; href="link1.html"&gt;3 item&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
  '''

  from lxml import etree
  obj = etree.HTML(text)
  # print(obj)   # &lt;Element html at 0x1e817c202c0&gt;
  print(obj.xpath('//li/a/text()'))  # text()表示拿去里面的文本  ['1 item', '2 item', '3 item']

  # 子点提取
  result = html.xpath("//li/a")
  result = html.xpath("//li/a/text（）")      # 提取数据
  result = html.xpath('//li/a/chref')        # 属性值

  # 指定节点获取
  result = html.xpath('//li[@class="item-0"]/a/text()')
  print(result)</code></pre>
          </li>
        </ul>
        <p>爬虫</p>
        <ul>
          <li>
            服务器渲染：在服务器那边直接把数据和htm1整合在一起。统一返回给浏览器，在页面源代码中能看到数据
          </li>
          <li>
            客户端演染：第一次请求只要众t最架：第一次违求拿到数据进行数据展示、在页面源代码中，看不到数据
          </li>
          <li>熟练掌握抓包工具</li>
          <li>
            请求头中最常见的一些重要内容（爬虫需要）：
            <ul>
              <li>User-Agent：请求载体的身份标识（用啥发送的请求）</li>
              <li>Referer：防盗链（这次请求是从哪个页面来的？反爬会用到）</li>
              <li>cookie：本地字符串数据信息（用户登录信息，反爬的token）；</li>
            </ul>
          </li>
          <li>
            响应头中一些重要的内容：
            <ul>
              <li>cookie：本地字符串数据信息（用户登录信息，反爬的token）</li>
              <li>
                各种神奇的莫名其妙的字符串（这个需要经验了，一般都是token字样，防止各种攻击和反爬）
              </li>
            </ul>
          </li>
        </ul>
        <p>Requests</p>
        <ul>
          <li>
            安装
            <ul>
              <li>
                pycharm = > 最底下Terminal 会打开电脑终端 => pip install
                requests
              </li>
              <li>
                或 百度输入 pip清华源 => 打开官方网站 => 使用临时 => pip install
                -i https://pypi.tuna.tsinghua.edu.cn/simple + 需要安装的名字
              </li>
            </ul>
          </li>
          <li>
            使用
            <pre><code class="language-python line-numbers">  import requests                      # 导入模块
  url = 'https://mail.qq.com/'
  resp = requests.get(url)             # 用变量接收响应
  print(resp.text)                     # 拿到页面源代码

  伪装
  import requests  # 导入模块
  url = 'https://mail.qq.com/'
  # 网站会校验使用什么来打开网站，所以会出现 您访问出错了，那么解决办法就是要伪装成浏览器打开
  dic = {
    "User-Agent":""
  }
  resp = requests.get(url,header=dic)  # 用变量接收响应,请求头里伪装写好自己的设备
  print(resp.text)                     # 拿到页面源代码</code></pre>
          </li>
          <li>
            在上一章中，我们基本上掌握了抓取整个网页的基本技能.但是呢，大多数情况下，我们并不需要整个网页的内容，只是需要那么
            一小部分.怎么办呢？这就涉及到了数据提取的问题.
          </li>
          <li>
            本课程中，提供三种解析方式：
            <ul>
              <li>
                re解析：正则表达式
                <table>
                  <tbody>
                    <tr>
                      <th>常用原字符</th>
                      <th>说明</th>
                    </tr>
                    <tr>
                      <td>.</td>
                      <td>匹配除换行符以外的任意字符</td>
                    </tr>
                    <tr>
                      <td>\w</td>
                      <td>匹配字母或数字或下划线</td>
                    </tr>
                    <tr>
                      <td>\s</td>
                      <td>匹配任意的空白符</td>
                    </tr>
                    <tr>
                      <td>\d</td>
                      <td>匹配数字</td>
                    </tr>
                    <tr>
                      <td>\n</td>
                      <td>匹配一个换行符</td>
                    </tr>
                    <tr>
                      <td>\t</td>
                      <td>匹配一个制表符</td>
                    </tr>
                    <tr>
                      <td>^</td>
                      <td>匹配字符串的开始</td>
                    </tr>
                    <tr>
                      <td>$</td>
                      <td>匹配字符串的结尾</td>
                    </tr>
                    <tr>
                      <td>\W</td>
                      <td>匹配非字母或数字或下划线</td>
                    </tr>
                    <tr>
                      <td>\D</td>
                      <td>匹配非数字</td>
                    </tr>
                    <tr>
                      <td>\S</td>
                      <td>匹配非空白符</td>
                    </tr>
                    <tr>
                      <td>a|b</td>
                      <td>匹配字符a或字符b</td>
                    </tr>
                    <tr>
                      <td>()</td>
                      <td>匹配括号内的表达式，也表示一个组</td>
                    </tr>
                    <tr>
                      <td>[...]</td>
                      <td>匹配字符组中的字符</td>
                    </tr>
                    <tr>
                      <td>[^...]</td>
                      <td>匹配除了字符组中字符的所有字符</td>
                    </tr>
                  </tbody>
                </table>
                <ul>
                  <li>
                    量词：控制前面的元字符出现的次数
                    <table>
                      <tbody>
                        <tr>
                          <th>量词</th>
                          <th>说明</th>
                        </tr>
                        <tr>
                          <td>*</td>
                          <td>重复零次或更多次</td>
                        </tr>
                        <tr>
                          <td>+</td>
                          <td>重复一次或更多次</td>
                        </tr>
                        <tr>
                          <td>？</td>
                          <td>重复零次或一次</td>
                        </tr>
                        <tr>
                          <td>{n }</td>
                          <td>重复n次</td>
                        </tr>
                        <tr>
                          <td>{n, }</td>
                          <td>重复n次或更多次</td>
                        </tr>
                        <tr>
                          <td>{n , m}</td>
                          <td>重复n到m次</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                  <li>
                    贪婪匹配和惰性匹配
                    这两个要着重的说一下.因为我们写爬虫用的最多的就是这个惰性匹配.
                    <table>
                      <tbody>
                        <tr>
                          <td>.*</td>
                          <td>贪婪匹配</td>
                        </tr>
                        <tr>
                          <td>.*?</td>
                          <td>惰性匹配</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                </ul>
              </li>
              <li>bs4解析</li>
              <li>xpath解析</li>
            </ul>
          </li>
          <li>
            这三种方式可以混合进行使用，完全以结果做导向，只要能拿到你想要的数据.用什么方案并不重要。当你掌握了这些之后.再考虑
            性能的问题.
          </li>
        </ul>
        <p>re 模块</p>
        <pre><code class="language-python line-numbers">  import re                # 导入re模块
                           # findall 匹配字符串中所有的符合正则的内容
  list = re.findall(r"\d+","正则表达式，匹配电话号10086，10010")
  print(list)              # ['10086', '10010']

  import re                # 导入re模块
  it = re.finditer(r"\d+","正则表达式，匹配电话号10086，10010")
  # finditer: 匹配字符串中所有的内容【返回的是迭代器】,从迭代器中拿到内容需要用 。group()函数
  for i in it:
      print(i.group())     # 10086  10010

  import re  # 导入re模块
  s = re.search(r"\d+","正则表达式，匹配电话号10086，10010")
  # search: 返回的结果是match对象，拿数据需要 。group() ,只检索第一个结果
  print(s.group())         # 10086

  import re                # 导入re模块
  m = re.match(r"\d+","正则表达式，匹配电话号10086，10010")
  # match: 是从头进行匹配，开头没有匹配到就报错 ，'NoneType' object has no attribute 'group'
  print(m.group())         # 必须开头支持正则表达式的结果

  import re  # 导入re模块
  obj = re.compile(r'\d+') # 预加载正则表达式, 一个正则多个使用
  ret = obj.finditer("电话：10086，电话2：10010")  # 调用
  for i in ret:            # 迭代获取内容
      print(i.group())

  # 案例：
  import re  # 导入re模块
  s = """
      &lt;div class="jay"&gt;&lt;span id="1"&gt;张三&lt;/span&gt;&lt;/div&gt;
  """
  # （？P&lt;分组名字&gt;正则） 可以单独从正则匹配的内容中进一步提取内容
  # re.S 让.能匹配换行符
  obj = re.compile(r'&lt;div class=".*?"&gt;&lt;span id="\d+"&gt;(?P&lt;variable&gt;.*?)&lt;/span&gt;&lt;/div&gt;',re.S)
  result = obj.finditer(s)
  for it in result:
      print(it.group('variable'))</code></pre>
        <p>案例</p>
        <ul>
          <li>
            爬取豆瓣https://movie.douban.com/top250
            <ul>
              <li>
                先要看数据在哪里，如果在源代码，就可以直接拿正则表达式抓取，如果是其他地方来的数据，需要去分析查找，提取数据
              </li>
              <li>
                start=25
                代表获取到第二页https://movie.douban.com/top250?start=25&filter=
              </li>
              <li>
                start=0
                代表获取到第一页https://movie.douban.com/top250?start=0&filter=
              </li>
              <li>
                需要自己调整url 里面的参数，用变量和增加算法，进行爬取数据
              </li>
            </ul>
            <pre><code class="language-python line-numbers">  import requests                            # 拿到页面源代码
  import re                                  # 通过re来提取想要的有效信息
  import csv                                 # 为了存储数据 ，a,b,c,d 格式存储数据，数据分析
  url = "https://movie.douban.com/top250"    # 网页地址
  headers = {                                # 伪造成浏览器
      "User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko)
      Chrome/80.0.3987.87 Safari/537.36 SE 2.X MetaSr 1.0"
  }
  resp = requests.get(url,headers = headers) # 模拟浏览器发请求
  content = resp.text                        # 拿到页面源代码

  # 解析数据  源代码分析，拿到数据
  obj = re.compile(r'&lt;li&gt;.*?&lt;div class="item"&gt;.*?&lt;span class="title"&gt;(?P&lt;name&gt;.*?)'
                    r'&lt;/span&gt;.*?&lt;p class=""&gt;.*?'
                    r'&lt;br&gt;(?P&lt;year&gt;.*?)&nbsp;.*?&lt;span class="rating_num" property="v'
                    r':average"&gt;(?P&lt;score&gt;.*?)&lt;/span&gt;.*?'
                    r'&lt;span&gt;(?P&lt;evaluate&gt;.*?)人评价&lt;/span&gt;',re.S)

  # 开始匹配
  result = obj.finditer(content)              # 迭代查找
  f = open("data.csv",mode="w")               # 写数据到data文件里
  csvWrite = csv.writer(f)                    # 往文件里写
  for it in result:
      print(it.group("name"))                 # 拿到名字
      print(it.group("year").strip())         # 拿到年份，但是空白需要单独处理
      print(it.group("score"))                # 得到评分
      print(it.group("evaluate"))             # 得到评价
      dic = it.groupdict()                    # 把数据添加到字典里
      dic['year'] = dic['year'].strip()       # 年份因为有空格，需要单独处理
      csvWrite.writerow(dic.values())         # 往字典里写数据,key只是标识name,year ,要的是结果，用value

  f.close()                                   # 写好后关闭文件
  print("关闭文件结束")

  # 2、电影天堂 https://www.dytt89.com/
  # coding:utf-8
    # 1.定位到2020必看片
    # 2.从2020必看片中提取到子页面的链接地址
    # 3.请求子页面的链接地址。拿到我们想要的下载地址...
  import requests
  import re
  url = "https://www.dytt89.com/"              # 存储url
  # 发送请求,因为有加密校验，request也会校验，解决办法就是用verify=False,去掉安全验证
  resp = requests.get(url,verify=False)
  resp.encoding = 'gbk'                        # 指定字符集
      # print(request.text)                    # 拿到页面源代码
      obj1 = re.compile(r'2022必看热片.*?&lt;ul&gt;(?P&lt;ul&gt;.*?)&lt;/ul&gt;',re.S)    # 写正则匹配，先取到ul里的内容
      obj2 = re.compile(r"&lt;a href='(?P&lt;href&gt;.*?)'",re.S)
      obj3 = re.compile(r'@片名(?P&lt;movie&gt;.*?)&lt;br /&gt;.*?&lt;td '
                        r'style="WORD-WRAP: break-word" bgcolor="#fdfddf"&gt;&lt;a '
                        r'href="(?P&lt;downl&gt;.*?)"&gt;',re.S)
  result1 = obj1.finditer(resp.text) # 将源代码存在result1里
  childHrefList= []# 定义一个列表来存放新的url地址
  for it in result1:
      ul = it.group('ul')     # 拿到ul里面的li
      # 提取子页面链接：
      result2 = obj2.finditer(ul)  # 将源代码存在result1里
      for itt in result2:
          # 拼接子页面的url地址： 域名 + 子页面
          child_href = url + itt.group("href").strip("/")
          childHrefList.append(child_href)  # 把拼接的链接添加到列表里

  # 提取子页面内容
  for href in childHrefList:
      child_resp = requests.get(href,verify=False)
      child_resp.encoding = 'gbk'
      result3 = obj3.search(child_resp.text)
      print(result3.group("movie"))
      print(result3.group("downl"))
      break  # 测试用，得到第一个结果就跳出循环，解开则获取所有数据

  # 2、bs4解析
  # bs4解析比较简单，但是呢，首先你需要了解一丢丢的html知识.然后再去使用bs4去提取，逻辑和编写难度就会非常简单和清晰
    # 安装：
        pip install bs4 -i

    # 实例：http://www.xinfadi.com.cn/priceDetail.html
        # 安装 pip install bs4 -i
        # 1.拿到页面源代码
        # 2.使用bs4进行解析。拿到数据
        import requests
        from bs4 import BeautifulSoup       # 从bs4中把BeautifulSoup 导入进来
        url = 'http://xinfadi.com.cn/priceDetail.html'
        resp = requests.get(url)
        print(resp.text)

        # 解析数据
        # 1.把页面源代码交给BeautifukSoup进行处理，生成bs对象
            page = BeautifulSoup(resp.text,'html.parser') # 实际出的警告不影响，也可以告诉解析器这是html
        # 2.从bs对象中查找数据  find（标签，属性=值）     find_all（标签，属性=值）
            table = page.find("table",class_="hq_table") # class是python中的关键字,可以在后面加一个下划线 _
        # table = page.find("table",attrs={"class_":"hq_table"})   或者用字典来解决关键字
        # 拿到所有数据行
        trs = table.find_all("tr")[1:]
        for tr in trs:                     # 每一行
            tds = tr.find_all("td")        # 拿到每行中的所有td
            var = tds[0].text              # 表示拿到被标签标记的内容
            var2 = tds[1].text             # 表示拿到被标签标记的内容

  # 3、案例https://www.umei.cc/bizhitupian/weimeibizhi/
      # 1.拿到主页面源代码，然后提取到子页面的链接地址，href
      # 2.通过href拿到子页面的内容。从子页面中找到图片的下载地址  img =&gt; src
      # 3.下载图片
      import requests
      from bs4 import  BeautifulSoup
      import time                          # 一直去访问，防止锁IP，利用time对爬虫进行休息间隔爬取
      url = "https://www.umei.cc/bizhitupian/weimeibizhi/"
      resp = requests.get(url)             # 获取链接
      resp.encoding = 'utf-8'              # 指定字符集
      print(resp.text)                     # 把源码交给bs
      main_page = BeautifulSoup(resp.text,'html.parser')
      alist = main_page.find("div",class_="TypeList").find_all("a")
      for a in alist:
          href = a.get("href")             # 直接通过get就可以拿到链接
          # 拿到子页面的源代码
          child_page_resp = requests.get(href)
          child_page_resp.encoding = "utf-8"
          child_page_text = child_page_resp.text
          # 从子页面中拿到图片的下载路径
          child_page = BeautifulSoup("","html.parser")
          p = child_page.find('p',align="center") # 一般用class 或者 ID 来找，更准确
          img = p.find("img")
          src = img.get("src")              # 拿到下载路径 ,标签的属性
          # 下载图片
          img_resp = requests.get(src)
          img_resp.content                  # 这里拿到的是字节
          img_name = src.split("/")[-1]     # 拿到url的最后一个/以后的内容，来命名
          with open("img/"+img_name,mode="wb") as f:  # 创建一个img文件夹，并让下载到img文件夹下
              f.write(img_resp.content)     # 图片内容写入文件
          print("完成下载",img_name)
          time.sleep(1)                     # 进行睡眠1秒，然后再爬取</code></pre>
          </li>
          <li></li>
          <li></li>
        </ul>
        <p>xpath解析入门</p>
        <ul>
          <li>xpath 是在XML文档中搜索内容的一门语言</li>
          <li>html是xml的一个子集</li>
          <li>pip install lxml</li>
          <li>
            实例
            <pre><code class="language-python line-numbers">  from lxml import etree  # 因为etree才包含了xpath的功能
  xml = """
    &lt;book&gt;
      &lt;id&gt;1&lt;/id&gt;
      &lt;name&gt;野花遍地香&lt;/name&gt;
      &lt;price&gt;1.23&lt;/price&gt;
      &lt;nick&gt;臭豆腐&lt;/nick&gt;
      &lt;author&gt;
        &lt;nick id="10086"&gt;周大强&lt;/nick&gt;
        &lt;nick id="10010"&gt;周芷若&lt;/nick&gt;
        &lt;nick class="joy"&gt;周杰伦&lt;/nick&gt;
        &lt;nick class="jolin"&gt;蔡依林&lt;/nick&gt;
        &lt;div&gt;
          &lt;nick&gt;惹了&lt;/nick&gt;
        &lt;/div&gt;
      &lt;/author&gt;
      &lt;partner&gt;
        &lt;nick id="ppc"&gt;胖胖陈&lt;/nick&gt;
        &lt;nick id="ppbc"&gt;胖胖不陈&lt;/nick&gt;
      &lt;/partner&gt;
    &lt;/book&gt;
  """
    tree = etree.XML(xml)                                              # 把xml加载成etree对象
    result1 = tree.xpath("/book")                                      # 这样才能正常使用xpath的功能,表示从根节点找东西
    result2 = tree.xpath("/book/name")                                 # 从book下找name
    result3 = tree.xpath("/book/name/text()")                          # 从book下找name中用text()拿文本
    result4 = tree.xpath("/book/author//nick/text()")                  # // 表示后代全部找出来
    result5 = tree.xpath("/book/author/*/nick/text()")                 # * 表示通配符，任意节点
    result6 = tree.xpath("/book/author[1]/nick/text()")                # [1]表示取第一个结果，xpath顺序是从1开始
    result7 = tree.xpath("/book/author/nick[@href="属性选择"]/text()")   # [里面写属性名和属性值]
    result8 = tree.xpath("/book/name/li")                              # 先获取所有li元素
        for li in result8:
            result9 = li.xpath("./a/text()")     # 再从每个li中提取到文字信息,再li中继续去寻找，相对查找
            result10 = li.xpath("./a/@href")     # 想拿到属性就用@
    print(result1)          # [&lt;Element book at 0x1e224518d40&gt;]
    print(result2)          # [&lt;Element name at 0x1f665b847c0&gt;]
    print(result3)          # ['野花遍地香']
    print(result4)          # ['周大强', '周芷若', '周杰伦', '蔡依林', '惹了']</code></pre>
          </li>
          <li>
            技巧：想拿xpath ，直接网页审查元素，在代码行上右键 => copy => copy
            XPath
          </li>
          <li>
            案例，猪八戒网：
            <el-link
              type="primary"
              icon="Link"
              target="_blank"
              href="https://sanming.zbj.com/search/f/?kw=saas"
            >
              https://sanming.zbj.com/search/f/?kw=saas
            </el-link>
          </li>
          <li>
            需求：
            <ul>
              <li>提取网站关于saas相关信息</li>
              <li>比如需要多少钱，这家公司能做哪些东西，在哪，哪家公司</li>
            </ul>
          </li>
          <li>
            步骤：
            <ul>
              <li>
                先确定要的信息是否在源代码里面，拿名字在源码里面ctrl + f
                搜素关键词
              </li>
            </ul>
            <pre><code class="language-python line-numbers">  # 拿到页面源代码
  # 提取和解析数据
  import requests
  from lxml import etree

  url = "https://sanming.zbj.com/search/f/?kw=saas"
  resp = requests.get(url)
  print(resp.text)                 # 获取源码
  html = etree.HTML(resp.text)     # 把html加载成etree对象，并且不能混用，是什么语言就用什么语言，
                                   # xml就写xml()
  # /html/body/div[6]/div/div/div[2]/div[5]/div[1]/div[1]
    先要在网页确定第一个信息盒子，因为盒子都一样，用循环区值
  divs = html.xpath("/html/body/div[6]/div/div/div[2]/div[5]/div[1]/div") # 复制的xpath是第一个，
                                                                            直接去掉[1]就是获取所有
  # 再写循环来获取所有
  for div in divs:                 # 拿到每一个服务商信息
      # 再拿到想要的数据，这里拿的是价格,拿完价格后从列表中取出数据，并且去除¥ 符号
      price = div.xpath("./div/div/a[2]/div[2]/div[1]/span[1]/text()")[0].strip("¥")
      # 因为标题里面会有&lt;h1&gt;SaaS&lt;/h1&gt;进行分割，所用利用这个进行拼接
      title = "saas".join(div.xpath("./div/div/a[2]/div[2]/div[2]/p/text()"))
      """... 一直写需要拿到的数据"""
      print(price)
      print(title)</code></pre>
          </li>
        </ul>
        <p>requests进阶</p>
        <ul>
          <li>
            cookie
            <pre><code class="language-python line-numbers">  # 登录 -> 得到cookie
  # 带着cookie  去请求到书架urL -> 书架上的内容
  # 必须得把上面的两个操作连起来
  # 我们可以使用session进行请求 -> session你可以认为是一连串的请求。在这个过程中的cookie不会丢失\

  import requests
  session = requests.session()  # 等于会话，并记录说话的过程

  # 1.登录
    url = "https://passport.17k.com/ck/user/login"
    data = {
      "loginName":"18614075987",
      "password":"q6035945"
    }
    session.post(url,data=data)
    # print(resp.text)
    # print(resp.cookies) # 看cookie的数据
  # 2.拿书架上的数据
    # 干才的那个session中是有cookie的
    resp = session.get('https://user.17k.com/ck/author/sheLf?page=1&appKey=2406394919')
    print(resp.json())

    """
      如果没有用session,需要先登录,然后找到cookie复制出来，再写在请求里,其实session也是这种原理，是正规拿到cookie
      resp = session.get('https://user.17k.com/ck/author/sheLf?page=1&appKey=2406394919'，
      headers={
        "Cookie":"......"
      })
    """</code></pre>
          </li>
          <li>
            防盗链
            <ul>
              <li>
                有些&lt;video&gt;
                标签是二次加载的数据，就需要进入谷歌开发者工具的Network =&gt;
                选中XHR =&gt; 刷新后看到访问的视频地址 =&gt; 在Preview
                中可以找到 VideoInfo信息 =&gt; 但是srcUrl
                中的地址是错误的，所以需要处理
              </li>
            </ul>
            <pre><code class="language-python line-numbers">  # 防盗链
  # 1、先拿到原始url，并拿到contID
  # 2、拿到videoStatus返回的json.->srcURL
  # 3.srcURL里面的内容进行修整
  # 4.下载视频
  import requests

  url = "https://www.pearvideo.com/video_1764233"
  contId = url.split("_")[1]   # 分割，并拿到后面的 1764233 数据

  # 这是在开发者工具中Netword => XHR => Headers 中拿到的  Request URL
  videoStatusUrl = f"https://www.pearvideo.com/videoStatus.jsp?contId={contId}&mrd=0.1914366
                    9352323123"

  headers = {
      "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML,
      like Gecko) Chrome/102.0.5005.63 Safari/537.36",
      # 防盗链会找到溯源， 1 => 2 => 3 是顺序查找，当你直接用2时，向上查找1查不到，说明2有问题
      # 解决办法，在headers 里，把防盗链地址添加上去即可，
      "Referer":url
  }

  resp = requests.get(videoStatusUrl,headers=headers)   # 获取url地址
  print(resp.text)
      # 打印时当出现文章已下线，但是文章还是存在，就要考虑是不是加了反爬
      # 先伪造成浏览器headers ，再处理防盗链  Referer:https://www.pearvideo.com/video_1764233
  dic = resp.json()
  srcUrl = dic["videoInfo"]["videos"]["srcUrl"]         # 拿到字典中找videInfo下的videos下的srcUrl
  systemTime = dic["systemTime"]                        # 拿到错误信息
  srcUrl = srcUrl.replace(systemTime,f"cont-{contId}")  # 替换systemTime,做正确视频地址的拼接
  print(srcUrl)

  # 下载视频
  with open("a.mp4",mode="wb") as f:
      f.write(requests.get(srcUrl).content)             # 直接把内容拿出来</code></pre>
          </li>
          <li>
            代理
            <pre><code class="language-python line-numbers">  # 原理 。通过第三方的一个机器去发送请求，可以多个代理
  import requests
  # 先要找到能做中间代理的IP，https://www.zdaye.com/，拿到IP和端口号：218.60.8.83:3129
  proxies = {
    # "http":"" 支持什么就用什么协议
    "https":"https://218.60.8.83:3129"
  }
  url = "https://www.baidu.com"
  resp = requests.get(url,proxies=proxies)  # 使用代理，先把访问请求发给代理，然后让代理去访问url,
                                              再返回给你结果
  resp.encoding = "utf-8"
  print(resp.text)</code></pre>
          </li>
        </ul>
        <p>抓取网易云热评案例 51</p>
        <ul>
          <li>
            难题：
            <ul>
              <li>评论是没有出现在源代码里面的</li>
              <li>
                当在Network里发现评论全在get?csrf_token= 里面，且在Payload
                里有From Data ,两个参数是加密参数
              </li>
              <li>
                在Initiator 中可以看到 Request call stack
                意思是调用的站，点进去之后，左下角点下 ｛｝ 图标进行格式化
              </li>
              <li>
                this.sX3x.send(gz8r.data)
                在发送的代码行中下断点，就能看到右侧的函数信息，找到e6c:下的request
                , 注意看url
                <pre><code class="language-python line-numbers">  request:
  cookie: true
  data: "params=pCzQ16YVz0m6bavCVsmWHQhp14DmYSv1ApouUX8YbE%%2FR6pWwYvrf9BD0jj4KtRYNg%2BJFf%noescape: false...
  sync: false
  timeout: 60000
  type: "json"
  url: https://music.163.com/weapi/comment/resource/comments/get?csrf_token=</code></pre>
              </li>
              <li>
                左上角|> 图标点击，一直执行下一步，直到url的链接是get：
                <ul>
                  <li>
                    url:
                    https://music.163.com/weapi/comment/resource/comments/get?csrf_token=
                  </li>
                </ul>
              </li>
              <li>也就是一直找请求时未加密处理的请求</li>
            </ul>
          </li>
        </ul>
      </el-card>
      <el-card id="part5" shadow="hover">
        <h2>多线程、进程池</h2>

        <p>多线程 和 多进程</p>
        <ul>
          <li>
            进程就是资源单位，每个进程至少要有一个线程，主线程，进程好比公司，线程好比员工
          </li>
          <li>线程就是执行单位</li>
          <li>
            需要导入threading 包
            <pre><code class="language-python line-numbers">  # 多线程
  from threading import Thread
  def func(name):            # 传参，用来区分多个线程
      for i in range(1000):
      print("func",i)

  if __name__ == "__main__":
  t1 = Thread(target=func，args=("名字1"，))   # 安排func的任务给线程，传递的参数必须是元组
  t1.start()                                  # 并且要求开始执行,就是给个状态，多线程状态为可以开始工作，执行时间由CPU决定
  t2 = Thread(target=func，args=("名字2"，))   # 安排func的任务给线程，如果要多个线程就再写一个
  t2.start()                                  # 并且要求开始执行,就是给个状态，多线程状态为可以开始工作，执行时间由CPU决定
  for i in range(1000):                       # 主线程和子线程分别一起执行自己的工作
      print("main",i)

  # 另一种写法
  class MyThread(Thread):
      def run(self):
          for i in range(1000):
              print("子线程", i)

  if __name__ == "__main__":
      t = Thread(target=func)  # 安排func的任务给线程，如果要多个线程就再写一个
      t.start()   # 开启线程
      for i in range(1000):
          print("主线程",i)</code></pre>
          </li>
          <li>
            多进程
            <pre><code class="language-python line-numbers">  from multiprocessing import Process
  def func():
      for i in range(1000):
          print("子进程",i)

  if __name__ == '__main__':
      p = Process(target=func)
      p.start()
      for i in range(1000):
          print("主进程", i)</code></pre>
          </li>
          <li>class 和 线程一样</li>
        </ul>
        <p>线程池 和 进程池</p>
        <pre><code class="language-python line-numbers">  #线程池：一次性开辟一些线程。我们用户直接给线程池子提交任务。线程任务的调度交给线程池来完成
  from concurrent.futures import ThreadPoolExecutor,ProcessPoolExecutor
  # 进程就是ProcessPoolExecutor，两个都写，想用哪个用哪个

  def fnc(name):
      for i in range(1000):
      print(name,i)

  if __name__ == '__main__':
      # 创建50个线程池
      with ThreadPoolExecutor(50) as t:
          for i in range(100):
              t.submit(fnc,name=f"线程{i}")
      # 等待线程池中的任务全部执行完毕。才继续执行（守护）
      print("123")</code></pre>
      </el-card>
    </template>
  </card-container>
</template>

<script setup lang="ts" name="Python">
import { ref } from "vue";

const data = ref([
  { id: 1, h2: "前言" },
  { id: 2, h2: "语法" },
  { id: 3, h2: "其他" },
  { id: 4, h2: "爬虫" },
  { id: 5, h2: "多线程、进程池" },
]);
</script>

<style scoped lang="scss"></style>
