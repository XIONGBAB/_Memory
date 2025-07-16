<template>
  <card-container :data="data">
    <template #svg>
      <svg
        width="48"
        height="48"
        t="1699148478737"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="6334"
      >
        <path
          d="M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"
          fill="#acef65"
          p-id="6335"
        />
        <path
          d="M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"
          fill="#34495E"
          p-id="6336"
        />
      </svg>
      <h2>Vue2</h2>
    </template>
    <template #describe>
      <p>
        Vue基于标准HTML、CSS和JavaScript构建，提供了一套声明式的、组件化的编程模型，用于高效地开发用户界面。Vue是一个框架，也是一个生态，功能覆盖大部分前端开发常见的需求。
      </p>
    </template>
    <template #content>
      <el-card id="part1" shadow="hover">
        <h2>Webpack</h2>
        <p>vue中使用</p>
        <ul>
          <li>
            实际前端开发
            <ul>
              <li>模块化（js的模块化、css的模块化、资源的模块化）</li>
              <li>组件化（复用现有的UI结构、样式、行为）</li>
              <li>
                规范化（目录结构的划分、编码规范化、接口规范化、文档规范化、Git分支管理）
              </li>
              <li>自动化（自动化构建、自动部署、自动化测试）</li>
            </ul>
          </li>
          <li>
            前端工程化的解决方案:
            <ul>
              <li>
                早期的前端工程化解决方案：
                <ul>
                  <li>
                    grunt
                    <el-link
                      type="primary"
                      icon="Link"
                      target="_blank"
                      href="https://www.gruntjs.net/"
                    >
                      https://www.gruntjs.net/
                    </el-link>
                  </li>
                  <li>
                    gulp
                    <el-link
                      type="primary"
                      icon="Link"
                      target="_blank"
                      href="https://www.gulpjs.com.cn/"
                    >
                      https://www.gulpjs.com.cn/
                    </el-link>
                  </li>
                </ul>
              </li>
              <li>目前主流的前端工程化解决方案：</li>
              <li>
                webpack
                <el-link
                  type="primary"
                  icon="Link"
                  target="_blank"
                  href="https://www.webpackjs.com/"
                >
                  https://www.webpackjs.com/
                </el-link>
              </li>
              <li>
                parcel
                <el-link
                  type="primary"
                  icon="Link"
                  target="_blank"
                  href="https://zh.parceljs.org/"
                >
                  https://zh.parceljs.org/
                </el-link>
              </li>
            </ul>
          </li>
          <li>
            什么是webpack
            <ul>
              <li>概念：webpack是前端项目工程化的具体解决方案。</li>
              <li>
                主要功能：它提供了友好的前端模块化开发支持，以及代码压缩混淆、处理浏览器端JavaScript的兼容性、性能优化等强大的功能。
              </li>
            </ul>
          </li>
          <li>
            安装node.js并配置
            <ul>
              <li>
                新建项目空白目录，并运行npm init-y命令，初始化包管理配置文件
                package.json
              </li>
              <li>
                需要安装node.js
                <ul>
                  <li>
                    旧版本网址
                    <el-link
                      type="primary"
                      icon="Link"
                      target="_blank"
                      href="https://nodejs.org/zh-cn/download/releases/"
                    >
                      https://nodejs.org/zh-cn/download/releases/
                    </el-link>
                  </li>
                  <li>
                    新版本网址
                    <el-link
                      type="primary"
                      icon="Link"
                      target="_blank"
                      href="https://nodejs.org/zh-cn/download/"
                    >
                      https://nodejs.org/zh-cn/download/
                    </el-link>
                  </li>
                </ul>
              </li>
              <li>
                win7默认安装后配置（注：因为nodejs版本太高了，v12.16.2以上版本不支持win7系统，win10直接新版本下载默认安装）
                <ul>
                  <li>
                    cmd => node -v 看版本 12.22.6 => npm -v 看npm版本6.14.15
                  </li>
                  <li>
                    安装过程四个选项：
                    <ul>
                      <li>Node.js runtime 表示运行环境</li>
                      <li>npm package manager表示npm包管理器</li>
                      <li>online documentation shortcuts 在线文档快捷方式</li>
                      <li>Add to PATH添加到环境变量</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                修改包路径
                <ul>
                  <li>
                    默认情况下，我们在执行npm install -g
                    XXXX时，下载了一个全局包，这个包的默认存放路径位
                    <ul>
                      <li>
                        C:\Users\Administrator\AppData\Roaming\npm\node_modules下
                      </li>
                      <li>2. 可以通过CMD指令 npm root -g 查看</li>
                    </ul>
                  </li>
                  <li>
                    但是有时候我们不想让全局包放在这里，我们想放在node的安装目录下
                    <ul>
                      <li>在node安装目录下下新建两个文件夹</li>
                      <li>node_global 全局包下载存放</li>
                      <li>node_cache node缓存</li>
                    </ul>
                  </li>
                  <li>
                    修改路径
                    <ul>
                      <li>在CMD窗口执行以下两条命令：</li>
                      <li>
                        npm config set prefix "？:\？\nodejs\node_global"
                        //自己的创建目录
                      </li>
                      <li>
                        npm config set cache "？:\？\nodejs\node_cache"
                        //自己的创建目录
                      </li>
                      <li>
                        或者在nodejs的安装目录中找到node_modules\npm.npmrc文件，修改如下：
                      </li>
                      <li>prefix =C:\node\node_global</li>
                      <li>cache = C:\node\node_cache</li>
                      <li>
                        下载一个全局包，执行命令npm install -g vue，可以发现，
                      </li>
                      <li>下载的全局包vue已经放在了我们设置的目录中</li>
                    </ul>
                  </li>
                  <li>
                    修改用户变量path为：E:\java\nodejs\node_global
                    <ul>
                      <li>
                        我们更改了npm全局模块的存放路径和cache路径，此时使用module时将会出现上述错误，
                      </li>
                      <li>
                        因为电脑系统现在还不知道你把默认路径给改了，所以需要修改系统环境变量。
                      </li>
                    </ul>
                  </li>
                  <li>
                    接下来设置环境变量，关闭cmd窗口，“我的电脑”-右键-“属性”-“高级系统设置”-“高级”-环境变量”
                    <ul>
                      <li>
                        新增系统变量NODE_PATH,变量值为E:\java\nodejs\node_global\node_modules
                        或者默认路径的进入环境变量对话框，在【系统变量】下新建【NODE_PATH】
                      </li>
                      <li>
                        输入【D:\Develop\nodejs\node_global\node_modules】，将【用户变量】下的【Path】修改为【D:\Develop\nodejs\node_global】
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p>案例隔行变色</p>
        <ul>
          <li>
            新建项目空白目录，并运行npm init-y命令，初始化包管理配置文件
            package.json
          </li>
          <li>新建src源代码目录</li>
          <li>新建src -&gt; index.html首页和src -&gt; index.js脚本文件</li>
          <li>
            初始化首页基本的结构 ⑤运行npm install jquery -S命令，安装jQuery
          </li>
          <li>
            通过ES6模块化的方式导入jQuery，实现列表隔行变色效果
            <pre><code class="language-js line-numbers">  // 1、使用ES6导入语法，导入jQuery
  import $ from 'jquery'

  // 2、定义jQuery的入口函数
  $(function () {
      $('li:odd').css('background-color','red')
      $('li:even').css('background-color','blue')
  })</code></pre>
          </li>
          <li>
            在终端运行如下的命令，安装webpack相关的两个包
            <ul>
              <li>
                npm install webpack@5.42.1 webpack-cli@4.7.2 -D
                <ul>
                  <li>
                    -D（--save-dev） 参数表示明确告诉npm
                    ，装上两个包要对应版本的包，装在devDependencies下
                    devDependencies 表示只在开发阶段时包记录在这里面
                  </li>
                  <li>
                    -S（--save） 装在dependencies下
                    dependencies表示是在项目开发阶段和上线，这个包都需要使用https://www.npmjs.com/package/webpack
                    网址install中，有介绍什么时候用- D ,什么时候用- S
                  </li>
                </ul>
              </li>
              <li>
                配置webpack：
                <ul>
                  <li>
                    在项目根目录中，创建名为webpack.config.js的webpack配置文件，并初始化如下的基本配置：
                    <pre><code class="language-js line-numbers">  // 使用Node.js 中的导出语法，向外导出一个webpack的配置对象
  module.exports = {
      // 代表 webpack 运行模式，可选值有两个 development（开发模式） 和 production (上线模式)
      // 开发时候一定要用development,因为追求的是打包速度，而不是体积
      // 在发布上线的时候一定要用production，因为上线追求的是体积小，而不是打包速度
      mode: 'development'
  }</code></pre>
                  </li>
                  <li>
                    如果要上线了，也可以利用webpack 进行代码压缩，更改 mode:
                    'production' ,然后 命令行 npm run dev
                  </li>
                </ul>
              </li>
              <li>
                在package.json的scripts节点下，新增 dev 脚本如下：
                <pre><code class="language-js line-numbers">  "scripts": {
      "dev": "webpack" //script 节点下的脚本，可以通过npm run 执行，例如 npm run dev，dev是自定义的
  },</code></pre>
              </li>
              <li>
                在终端中运行npm run dev命令，启动webpack进行项目的打包构建
                <ul>
                  <li>在 M&ensp;VVM 概念中:</li>
                  <li>
                    Model表示当前页面渲染时所依赖的数据源。表示当前页面所渲染的
                    DOM 结构。
                  </li>
                  <li>View</li>
                  <li>ViewModel表示 vue 的实例，它是 M&ensp;VVM 的核心。</li>
                  <li>
                    代码意思：创建一个了main.js放入了dist下，同时将index.js和jQuery.js打包到了main.js下，KiB代表了文件大小
                  </li>
                </ul>
              </li>
              <li>
                js引入
                <pre><code class="language-html line-numbers">  &lt;script src="../dist/main.js"&gt;&lt;/script&gt;</code></pre>
              </li>
            </ul>
          </li>
        </ul>
        <p>webpack中的默认约定</p>
        <ul>
          <li>
            在webpack 4.x 和 5.x 的版本中，有如下的默认约定：
            <ul>
              <li>默认的打包入口文件为 src => index.js</li>
              <li>默认输出的文件路径为 dist=> main.js</li>
            </ul>
          </li>
          <li>
            注意：可以在webpack.config.js 中修改打包的默认约定
            <ul>
              <li>
                在webpack.config.js 配置文件中，通过entry节点指定打包的入口。
              </li>
              <li>通过output节点指定打包的出口。示例代码如下：</li>
            </ul>
            <pre><code class="language-js line-numbers">  const path = require('path')
  // 使用Node.js 中的导出语法，向外导出一个webpack的配置对象
  module.exports = {
      // 代表 webpack 运行模式，可选值有两个 development（开发模式） 和 production (上线模式)
      mode: 'development',
      // entry :'指定要处理的js文件'
      entry: path.join(__dirname, './src/index1.js'), // ，后的路径文件index1.js就是自定义的js文件名
      //  output :指定要生成的文件存放在哪里
      output: {
          // 存放到目录
          path: path.join(__dirname, 'main'), // 'main' 是文件名  等于修改了dist的文件名字，_ _就代表下根目录
          filename: 'bundle.js' // 'bundle.js' 是要修改后的js文件名，等于修改main.js的名字
      }
  }

  // 注意：改完后记得html文件的引入js也要修改相对应的文件名</code></pre>
          </li>
        </ul>
        <p>webpack中的插件</p>
        <ul>
          <li>
            作用：通过安装和配置第三方的插件，可以拓展
            webpack的能力，从而让webpack用起来更方便。最常用的webpack 插件
          </li>
          <li>
            webpack-devServer
            <ul>
              <li>类似于node.js阶段用到的nodeMon工具</li>
              <li>每当修改了源代码，webpack会自动进行项目的打包和构建</li>
              <li>安装运行命令: npm install webpack-dev-server@3.11.2 -D</li>
              <li>
                配置修改
                <pre><code class="language-js line-numbers">  // package.json => script 中的dev命令如下
  "scripts": {
      "dev": "webpack serve"    // script 节点下的脚本，可以通过 npm run 执行
  },

  // 再次运行 npm run dev 命令，重新进行项目的打包
  [webpack-cli] Unable to load '@webpack-cli/serve' command
  [webpack-cli] TypeError: options.forEach is not a function
  // 如果出现以上错误提示， 看报错表面意思 "[webpack cli]无法加载“@webpack cli/serve”命令",
  // 感觉应该是加载不到 webpack-cli 就安装一下

  npm install webpack-cli --save-dev

  // 在浏览器中访问 http://localhost:8080 地 址，查看自动打包效果
  /* 当窗口一直在监听的时候，不需要再npm run了，如果想停掉终端，按两下 ctrl + c 就可以了
      但同时监听结束，修改后保存不起作用
      进入8080端口的网页中src点进去就可以实现同步效果，注意html也要修改引入的内存中js文件
      &lt;script&gt; src="/main.js"&gt;&lt;/script&gt;       &lt;!-- 这里是加载内存中的main.js,html页面是需要修改成内存中的js  --&gt; */
                  </code></pre>
              </li>
            </ul>
          </li>
          <li>
            html-webpack-plugin
            <ul>
              <li>webpack中的HTML 插件（类似于一个模板引擎插件）</li>
              <li>可以通过此插件自定制index.html页面的内容</li>
              <li>安装运行命令： npm install html-webpack-plugin@5.3.2 -D</li>
              <li>
                配置
                <pre><code class="language-js line-numbers">  const path = require('path')
  // 1、导入HTML 插件，得到一个构造函数
  const HtmlPlugin = require('html-webpack-plugin')
  // 2、创建HTML插件的实例对象
  const htmlPlugin = new HtmlPlugin({
      template: './src/index.html', // 指定原文件的存放路径
      filename: './index.html'      // 指定生成的文件的存放路径
  });

  // 使用Node.js 中的导出语法，向外导出一个webpack的配置对象
  module.exports = {
      // 代表 webpack 运行模式，可选值有两个 development（开发模式） 和 production (上线模式)
      mode: 'development',
      // entry :'指定要处理的js文件'
      entry: path.join(__dirname, './src/index.js'), // ，后的路径文件index1.js就是自定义的js文件名
      //  output :指定要生成的文件存放在哪里
      output: {
          // 存放到目录
          path: path.join(__dirname, 'dist'), // 'main' 是文件名  等于修改了dist的文件名字
          filename: 'main.js' // 'bundle.js' 是要修改后的js文件名，等于修改main.js名字
      },
      plugins: [htmlPlugin]  // 3.通过plugins节点，使htmlPlugin插件生效
  }

  /* html-webpack-plugin 还会做一件事，就是自动注入打包好的main.js放在html页面中
      通过HTML插件复制到项目根目录中的index.html页面，也被放到了内存中
      HTML 插件在生成的index.html页面，自动注入了打包的main.js文件 </code></pre>
              </li>
            </ul>
          </li>
        </ul>
        <p>devServer节点</p>
        <ul>
          <li>
            在webpack.config.js配置文件中，可以通过devserver节点对webpack-dev-server插件进行更多的配置
          </li>
          <li>
            实例代码如下：
            <pre><code class="language-js line-numbers">  const path = require('path')
  const HtmlPlugin = require('html-webpack-plugin')
  const htmlPlugin = new HtmlPlugin({
      template: './src/index.html',
      filename: './index.html'
  });
  // 使用Node.js 中的导出语法，向外导出一个webpack的配置对象
  module.exports = {
      // 代表 webpack 运行模式，可选值有两个 development（开发模式） 和 production (上线模式)
      mode: 'development',
      // entry :'指定要处理的js文件'
      entry: path.join(__dirname, './src/index.js'),  // ，后的路径文件index1.js就是自定义的js文件名
      //  output :指定要生成的文件存放在哪里
      output: {
          // 存放到目录
          path: path.join(__dirname, 'dist'),         // 'main' 是文件名  等于修改了dist的文件名字
          filename: 'main.js'                         // 'bundle.js' 是要修改后的js文件名，等于修改main.js名字
      },
      plugins: [htmlPlugin],
      devServer: {
          open: true,                                 // 初次打包完成后，自动打开浏览器
          port: 80,                                   // （自定义端口号） 在http协议中，如果端口号为 80 ，则会被省略
          host: '127.0.0.1'                           // 实时打包所使用的主机地址   注意：地址之间不能有空格，必须连着
      }
  }</code></pre>
          </li>
          <li>
            注意：凡是修改了webpack.config.js配置文件，或修改了package.json配置文件，必须重启实时打包的服务器，
            否则最新的配置文件无法生效！
          </li>
          <li>
            如果想修改打开指定浏览器，需要在package .json 文件修改 script 的
            dev代码，如下
            <pre><code class="language-js line-numbers">  "scripts": {
      "dev": "webpack serve --open chrome"
  },</code></pre>
          </li>
        </ul>
        <p>loader概述</p>
        <ul>
          <li>
            在实际开发过程中，webpack
            默认只能打包处理以.js后缀名结尾的模块。其他非 .js后缀名结尾的模块，
          </li>
          <li>
            webpack
            默认处理不了，需要调用loader加载器才可以正常打包，否则会报错！
          </li>
          <li>
            loader 加载器的作用：协助webpack打包处理特定的文件模块。比如：
            <ul>
              <li>css-loader可以打包处理.cs5相关的文件</li>
              <li>less-loader 可以打包处理.less相关的文件</li>
              <li>babel-loader 可以打包处理 webpack无法处理的高级J5语法</li>
            </ul>
          </li>
        </ul>
        <p>打包处理css文件</p>
        <ul>
          <li>
            运行npm i style-loader@3.0.0 css-loader@5.2.6 -D
            命令，安装处理css文件的loader
          </li>
          <li>在src目录下创建css</li>
          <li>
            在 index.js 下用ES6导入css样式
            <pre><code class="language-js line-numbers">  // 1、 使用ES6导入语法，导入jQuery
  import $ from 'jquery'
  // 导入样式（在webpack中，一切皆模块，都可以通过ES6导入语法进行导入和使用）
  import './css/index.css'

  // 2、 定义jQuery的入口函数
  $(function() {
      // 3、实现奇偶行变色
      // 奇数行为红色
      $('li:odd').css('background-color', 'red')
      $('li:even').css('background-color', 'yellow')
  })</code></pre>
          </li>
          <li>
            在webpack.config.js 的 module => rules 数组中，添加loader规则如下：
            <pre><code class="language-js line-numbers">  const path = require('path')
  const HtmlPlugin = require('html-webpack-plugin')
  const htmlPlugin = new HtmlPlugin({
      template: './src/index.html',
      filename: './index.html'
  });
  module.exports = {
      mode: 'development',
      entry: path.join(__dirname, './src/index.js'),
      output: {
          path: path.join(__dirname, 'dist'),
          filename: 'main.js'
      },
      plugins: [htmlPlugin],
      devServer: {
          open: true,
          port: 80,
          host: '127.0.0.1'
      },
      module: {       // 所有第三方文件模块的匹配规则
          rules: [    // 文件后缀名的匹配规则
              // 定义不同的拨快的loader
              { test: /\.css$/, use: ['style-loader', 'css-loader'] }
          ]
      }
  }</code></pre>
          </li>
        </ul>
        <p>打包处理Less文件</p>
        <ul>
          <li>
            运行npm i less-loader@10.0.1 less@4.1.1 -D
            命令，安装处理css文件的loader
          </li>
          <li>在src目录下创建less</li>
          <li>
            在 index.js 下用ES6导入css样式
            <pre><code class="language-js line-numbers">  import './css/index.less'</code></pre>
          </li>
          <li>
            在webpack.config.js 的 module => rules 数组中，添加loader规则如下：
            <pre><code class="language-js line-numbers">  // 处理 .less文件的loader
  { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },</code></pre>
          </li>
        </ul>
        <p>处理Url (打包处理样式表中的Url路径相关的文件)</p>
        <ul>
          <li>运行npm i url-loader@4.1.1 file-loader@6.2.0 -D 命令</li>
          <li>在src目录下创建images，添加图片</li>
          <li>
            在 index.js 下用ES6导入css样式
            <pre><code class="language-js line-numbers">  // 1.导入图片，得到图片文件
  import logo from './images/star1.png'</code></pre>
          </li>
          <li>
            在webpack.config.js 的 module => rules 数组中，添加loader规则如下：
            <pre><code class="language-js line-numbers">  // 处理 .less文件的loader
  // { test: /\.jpg|png|gif$/, use: 'url-loader' }
  { test: /\.jpg|png|gif$/, use: 'url-loader?limit=22229' }  // 这里22229代表的是图片字节</code></pre>
            <ul>
              <li>其中？之后的是loader 的参数项：</li>
              <li>limit用来指定图片的大小，单位是字节（byte）</li>
              <li>只有小于等于limit大小的图片，才会被转为base64格式的图片</li>
            </ul>
          </li>
          <li>
            html的url需要安装
            <ul>
              <li>npm install html-withImg-loader --save-dev</li>
              <li>webpack.config.js 添加配置</li>
            </ul>
            <pre><code class="language-js line-numbers">  module: {
    loaders: [{
        test: /\.html$/,
        loader: 'html-withimg-loader'
    }]
  }</code></pre>
          </li>
        </ul>
        <p>处理js (loader打包处理js文件中的高级语法)</p>
        <ul>
          <li>
            webpack 只能打包处理一部分高级的JavaScript
            语法I对于那些webpack无法处理的高级js语法，需要借助于babel-loader
            进行打包处理。例如 webpack无法处理下面的JavaScript代码：
          </li>
          <li>
            运行npm i babel-loader@8.2.2 @babel/core@7.14.6
            @babel/plugin-proposal-decorators@7.14.5 -D 命令
          </li>
          <li>在src目录下创建images，添加图片</li>
          <li>在 index.js 下用ES6导入css样式</li>
          <li>
            在webpack.config.js 的 module => rules 数组中，添加loader规则如下：
            <pre><code class="language-js line-numbers">  // 使用babel-loader 处理高级的JS 语法
  // 注意：必须使用exclude 指定拍出项 ； 因为node_ modules目录下的第三方包不需要被打包
  // 在配置 babel-loader 的时候，程序员只需要把自己的代码进行转换即可，一定要排除node_ modules
  // 应为第三方包中的JS 兼容性，不需要程序员关心
  { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }</code></pre>
          </li>
          <li>
            配置 babel-loader
            <ul>
              <li>
                在项目根目录下，创建名为
                babel.config.js的配置文件，定义Babel的配置项如下：
              </li>
            </ul>
            <pre><code class="language-js line-numbers">  module: {
    loaders: [{
        test: /\.html$/,
        loader: 'html-withimg-loader'
    }]
  }</code></pre>
          </li>
        </ul>
        <p>打包发布</p>
        <ul>
          <li>
            在package.json 文件的 scripts 节点下，新增build命令如下：
            <pre><code class="language-js line-numbers">  "scripts": {
      "dev": "webpack serve --open chrome",
      "build": "webpack --mode production"   // 项目发布时，运行 build命令 ，'build'可以自定义属性名
  },</code></pre>
          </li>
          <li>
            --model 是一个参数选项，用来指定webpack的运行模式。production
            代表生产环境，会对打包生成的文件
          </li>
          <li>进行代码压缩和性能优化</li>
          <li>
            注意：通过 --model的参数项优先级更高，会覆盖webpack.config.js 中的
            model选项
          </li>
          <li>发布直接使用 npm run build 命令即可</li>
        </ul>
        <p>优化 (把javascript文件统一生成到js目录中，图片放在images下)</p>
        <pre><code class="language-js line-numbers">  // 1. 在webpack.config.js 配置文件的 output节点，进行如下配置：
  output: {
      // 存放到目录
      path: path.join(__dirname, 'dist'),           // 'main' 是文件名  等于修改了dist的文件名字
      filename: 'js/main.js'                        // 在前面加上一个 js 表示，在js文件夹根目录下创建 main.js
  },

  /* 2. 修改webpack.config.js 中的 url-loader 配置项，新增outputPath选项即可指定图片文件的输出路径
      在配置 url-loader的时候，多个参数之间，使用 & 符号进行分隔 limit 如果小于等于 值 就会转换base64格式 */
  { test: /\.jpg|png|gif$/, use: 'url-loader?limit=470&outputPath=images' },

  /* 3. 自动清理dist 目录下的旧文件
      为了在每次打包发布时自动清理掉dist目录中的旧文件，可以安装并配置clean-webpack-plugin插件
        安装清理dist 目录的webpack插件 ，输入命令如下：    */
        npm install clean-webpack-plugin@3.0.0 -D   // 官网命令  npm install --save-dev clean-webpack-plugin

        在webpack.config.js 配置文件的 output节点，进行如下配置：
        // clean-webpack-plugin 插件 创建常亮构造函数
        const { CleanWebpackPlugin } = require('clean-webpack-plugin')

        // 插件数组，将来webpack 在运行时，会加载并调用这些插件，添加插件
        plugins: [htmlPlugin, new CleanWebpackPlugin()], </code></pre>
        <p>什么是Source Map</p>
        <ul>
          <li>
            Source Map就是一个信息文件，里面储存着位置信息。也就是说，Source
            Map文件中存储着压缩混淆后的代码，所对应的转换前的位置。
          </li>
          <li>
            有了它，出错的时候，除错工具将直接显示原始代码，而不是转换后的代码，能够极大的方便后期的调试。
          </li>
          <li>
            解决默认 Source Map 的问题
            <ul>
              <li>
                开发环境下，推荐在 webpack.config.js中 添加如下配置，即可保证
                运行时报错行数与源码行数一致
                <pre><code class="language-js line-numbers">  // 代表 webpack 运行模式，可选值有两个 development（开发模式） 和 production (上线模式)
  mode: 'development',
  // eval-source-map 仅限在 “开发模式” 下使用，不建议在 “生产模式” 下使用
  // 此选项生成的 Source Map 能够保持 运行错误行数与源代码行数一致
  devtool: 'eval-source-map',</code></pre>
              </li>
              <li>
                生产环境下，如果省略了devtool
                选项，则最终生成的文件中不包含Source Map
                ，这样能防止源码暴露，提高安全性
                <pre><code class="language-js line-numbers">  // 在发布时，直接注释掉即可，关闭 Spirce Map
  // devtool: 'eval-source-map',</code></pre>
              </li>
            </ul>
          </li>
          <li>
            为了方便代码修改。只定位行数不暴露代码
            <ul>
              <li>
                在生产环境下，如果只想定位报错的具体行数，
                且不想暴露源码。此时可以将devtool 的值设置为
                nosources-source-map
              </li>
            </ul>
          </li>
          <li>
            总结：
            <ul>
              <li>
                开发环境 : 建议把 devtool 的值设置为 eval-source-map
                //好处是可以精准定位到具体的错误行 source-map 跟eval-source-map
                效果一样，但是不建议使用
              </li>
              <li>
                生产环境 : 建议关闭 Source Map （直接注释掉） 或者
                将devtool的值设置为 nosources-source-map
              </li>
            </ul>
          </li>
        </ul>
        <p>拓展 (讲解在 webpack 中 @ 好处和原理)</p>
        <ul>
          <li>如果使用 ../../../ 会比较繁琐，</li>
          <li>如果书写错误时就会报错</li>
          <li>
            好处：使用 @ 示在项目的目录下进行查找，则不需要使用../ ./
            来表示层级关系
          </li>
          <li>
            在webpack.config.js 配置文件的设置如下：
            <pre><code class="language-js line-numbers">  module.exports = {
      resolve: {
          alias: {
               // 告诉 webpack 程序员写的代码中，@ 符号表示 src 这一层目录
              '@': path.join(__dirname, './src/')
          }
      }
  }</code></pre>
          </li>
          <li>
            然后在js 中引入的ES6语法就可以写成如下：
            <pre><code class="language-js line-numbers">  // 导入样式（在webpack中，一切皆模块，都可以通过ES6导入语法进行导入和使用）
  import '@/css/index.css'
  import '@/css/index.less'

  // 导入图片，得到图片文件
  import logo from '@/images/star1.png'</code></pre>
          </li>
        </ul>
        <p>拓展 (安装 chrome 的 vue_devtools_chrome .crx 插件)</p>
        <ul>
          <li>
            在\Vue\工具\vue-google-plugin
            下的crx文件，打开谷歌浏览器，开发者模式下，直接拖入安装
          </li>
          <li>
            安装完后进行配置
            <ul>
              <li>安装完点击插件的详细信息 => 开启 > 允许访问文件网址</li>
            </ul>
          </li>
        </ul>
      </el-card>
      <el-card id="part2" shadow="hover">
        <h2>vue简介</h2>
        <p>什么是vue</p>
        <ul>
          <li>
            官方给出的概念：Vue（读音/vju:/，类似于view）是一套用于构建用户界面的前端框架。
          </li>
          <li>
            构建用户界面
            <ul>
              <li>用vue往html页面中填充数据，非常的方便</li>
            </ul>
          </li>
          <li>
            框架
            <ul>
              <li>
                框架是一套现成的解决方案，程序员只能遵守框架的规范，去编写自己的业务功能！
              </li>
              <li>要学习vue，就是在学习vue框架中规定的用法！</li>
              <li>
                vue的指令、组件（是对UI结构的复用）、路由、VueX、vue组件库
              </li>
            </ul>
          </li>
        </ul>
        <p>vue的两个特性</p>
        <ul>
          <li>
            数据>驱动>视图
            <ul>
              <li>
                在使用了vue的页面中，vue会监听数据的变化，从而自动重新渲染页面的结构。
                结构如下
                <pre><code class="language-js line-numbers">            自动渲染                      变化

  页面结构    &lt;==&gt;    vue监听数据的变化    &lt;==&gt;    页面所依赖的数据

  --------------------------- 数据驱动视图 ---------------------------</code></pre>
              </li>
              <li>好处：当页面数据发生变化时，页面会自动重新渲染！</li>
              <li>注意：数据驱动视图是单向的数据绑定。</li>
            </ul>
          </li>
          <li>
            双向数据绑定
            <ul>
              <li>
                在填写表单时，双向数据绑定可以辅助开发者在不操作DOM的前提下，自动把用户填写的内容同步到数据源中
              </li>
              <li>
                好处：开发者不再需要手动操作DOM元素，来获取表单元素最新的值！
              </li>
              <li>在网页中，form 表单负责采集数据， Ajax负责提交数据</li>
              <li>js数据变化，会被自动渲染到页面上</li>
              <li>
                页面上表单采集的数据发生变化时，会被vue自动获取，并更新到js数据中
              </li>
              <li>
                注意：数据驱动视图和双向数据绑定的底层原理是MVVM （Model
                数据源、View 视图、ViewModel vue实例）
              </li>
            </ul>
          </li>
        </ul>
        <p>MVVM的工作原理</p>
        <ul>
          <li>
            MVVM是vue
            实现数据驱动视图和双向数据绑定的核心原理。MVVM指的是Model、View和ViewModel，它把每个HTML页面都
          </li>
          <li>拆分成了这三个部分</li>
          <li>
            当数据源发生变化时，会被ViewModel监听到，VM会根据最新的数据源自动更新页面的结构
            <ul>
              <li>Model 表示当前页面渲染时所依赖的数据源。</li>
              <li>View 表示当前页面所渲染的 DOM 结构。</li>
              <li>ViewModel表示vue 的实例，它是 MVVM 的核心。</li>
            </ul>
          </li>
          <li>
            当表单元素的值发生变化时，也会被VM监听到，VM会把变化过后最新的值自动同步到Model数据源中
          </li>
        </ul>
        <p>Vue的版本</p>
        <ul>
          <li>作者：尤雨溪</li>
          <li>
            目前，vue共有三个大版本，其中
            <ul>
              <li>2.x 版本的vue是目前企业级项目开发中的主流版本</li>
              <li>
                3.x
                版本的vue于2020-09-19发布，生态还不完善，尚未在企业级项目开发中普及和推广
              </li>
              <li>1.x 版本的vue几乎被淘汰，不再建议学习与使用</li>
            </ul>
          </li>
          <li>
            总结：
            <ul>
              <li>3.x 版本的vue是未来企业级项目开发的趋势</li>
              <li>2.x 版本的vue在未来（1~2年内）会被逐渐淘汰</li>
            </ul>
          </li>
        </ul>
      </el-card>
      <el-card id="part3" shadow="hover">
        <h2>基本使用</h2>
        <p>步骤</p>
        <ul>
          <li>导入vue.js的 script 脚本文件</li>
          <li>在页面中声明一个将要被vue所控制的DOM区域</li>
          <li>
            创建VM实例对象（vue实例对象）
            <pre><code class="language-html line-numbers">  &lt;body&gt;
    &lt;!-- 希望Vue 能控制下面的这个div，帮我们在把数据填充到div内部 --&gt;
    &lt;div&gt; id="app"&gt;｛｛ username ｝｝&lt;/div&gt;
    &lt;!-- 导入vue 的库文件 --&gt;
    &lt;script&gt; src="lib/vue-2.6.12.js"&gt;&lt;/script&gt;
    &lt;!-- 创建Vue 的实例对象 --&gt;
    &lt;script&gt;
        // 创建Vue的实例对象
        const vm = new Vue({
            // el 属性是固定的写法，表示当前vm实例要控制页面上的哪个区域，接受的值是一个选择器
            el: '#app',
            // data对象就是要渲染页面上的数据
            data: {
                username: 'zs'
            }
        })
    &lt;/script&gt;
  &lt;/body&gt;</code></pre>
          </li>
        </ul>
        <p>调试</p>
        <ul>
          <li>谷歌插件商店和 Firefox商店 都可以下载</li>
          <li>导入vue的 .js 文件</li>
          <li>F12可以查看 Vue 调试</li>
        </ul>
        <p>指令的概念</p>
        <ul>
          <li>
            指令（Directives）是vue为开发者提供的模板语法，用于辅助开发者渲染页面的基本结构。
          </li>
          <li>
            vue中的指令按照不同的用途，可以分为如下6大类：
            <ul>
              <li>
                内容渲染指令用来辅助开发者渲染DOM元素的文本内容。常用的内容渲染指令有如下3个：
                <ul>
                  <li>
                    v-text: // 缺点：会覆盖元素内部原有的内容，在开发中基本不用
                    <pre><code class="language-html line-numbers">  &lt;p v-text="username"&gt;&lt;/p&gt;
  &lt;!-- 把 gender 对应的值，渲染到第二个p标签中 --&gt;
  &lt;!-- 注意： 第二个p标签，默认的文本 “性别” 会被gender的值覆盖掉--&gt;
  &lt;p v-text="gender"&gt;性别&lt;/p&gt;

  //------------------------------------------
  data: {
      username: 'zs',
      gender: '女'
  }</code></pre>
                  </li>
                  <li>
                    ｛｛ ｝｝：vue 提供的｛｛ ｝｝语法，专门用来解决 v-text
                    会覆盖默认文本内容的问题。
                    <pre><code class="language-html line-numbers">  /* 这种｛｛ ｝｝语法的专业名称是插值表达式（英文名为：Mustache）。
  在开发中用的最多，只是内容的占位符，不会覆盖原有的内容  */
  &lt;p&gt;姓名：｛｛ username ｝｝&lt;/p&gt;
  &lt;p&gt;性别: ｛｛ gender ｝｝&lt;/p&gt;</code></pre>
                  </li>
                  <li>
                    v-html
                    ：v-text指令和插值表达式只能渲染纯文本内容。如果要把包含HTML标签的字符串渲染为页面的HTML元素，
                    则需要用到V-html这个指令，相当于原生js的 innerHTML：
                    <pre><code class="language-html line-numbers">  &lt;p v-html="info"&gt;&lt;/p&gt;
  //--------------------------------
  data: {
      username: 'zs',
      gender: '女',
      info: '&lt;div style="background:red;width:200px;heigh:300px"&gt;1&lt;/div&gt;'
  }</code></pre>
                  </li>
                </ul>
              </li>
              <li>
                属性绑定指令
                <ul>
                  <li>
                    注意：差值表达式只能用在元素的内容节点，不能用在元素的属性节点中
                    ，所以需要属性绑定指令
                  </li>
                  <li>功能：为元素的属性动态绑定值</li>
                  <li>
                    写法： （可简写: ）
                    <pre><code class="language-html line-numbers">  &lt;div&gt; id="app"&gt;
      &lt;input type="text" v-bind:placeholder="tips"&gt;   // 在属性前面前面加上一个 v-bind:
      // vue规定中 v-bind: 指令可以简写只要在属性名前面加个 ：
      &lt;img :src="photo" alt=""&gt;
  &lt;/div&gt;
  //--------------------------------------------
  data: {
      tips: '请输入用户名'，
      photo: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
  }</code></pre>
                  </li>
                  <li>
                    使用 javascript 表达式
                    <pre><code class="language-html line-numbers">  /* 在vue提供的模版渲染语法中，除了支持绑定简单的数据值之外，还支持javascript 表达式运算
  注意：在使用 v-bind属性绑定期间，如果绑定内容需要进行动态拼接，则字符串的外面应该包裹单引号，如下面例子
  ｛｛ ｝｝ 和 v-bind: 都支持简单的运算操作 */
  &lt;div&gt;1+2的结果：｛｛ 1 + 2 ｝｝&lt;/div&gt;
  &lt;div&gt;｛｛ tips ｝｝反转的结果是：｛｛ tips.split('').reverse().join('')｝｝&lt;/div&gt;
  &lt;!-- 这样的写法就要用 js 的逻辑来写，不能看成只是一个字符串，vue会进行转换 --&gt;
  &lt;!-- 如果 box 没有加上单引号，则会被认为是一个 变量，如果没找到则会报错 --&gt;

  &lt;div :title="'box' + index"&gt;这是一个 div&lt;/div&gt;
  //--------------------------------------------
  data: {
    index: 3
  }</code></pre>
                  </li>
                </ul>
              </li>
              <li>
                事件绑定指令
                <ul>
                  <li>
                    vue提供了v-on事件绑定指令，用来辅助程序员为DOM元素绑定事件监听。
                  </li>
                  <li>
                    语法格式： （可简写 @）
                    <pre><code class="language-html line-numbers">  &lt;div id="app"&gt;
    &lt;div&gt;当前的数值为 ｛｛ count ｝｝&lt;/div&gt;
    &lt;button&gt; v-on:click="add"&gt;+1&lt;/button&gt;
    &lt;button&gt; v-on:click="sub"&gt;-1&lt;/button&gt;
  &lt;/div&gt;
  //------------------------------------------------
  // methods 的作用，就是定义事件的处理函数
  methods: {
     // add: function() {
     //     console.log(1);
     // }
     //实际开发中会省略 ：function  简写形式
      add() {
          vm.count++ // vm 不推荐写法，因为 vm === this
          this.count++
      },
      sub() {
          this.count--
      }
  },

  // 注意：在绑定事件处理函数的时候，可以使用（）传递参数
  &lt;div id="app"&gt;
      &lt;div&gt;当前的数值为 ｛｛ count ｝｝&lt;/div&gt;
      &lt;button&gt; v-on:click="add(3)"&gt;+3&lt;/button&gt;
      &lt;button&gt; v-on:click="sub(5)"&gt;-5&lt;/button&gt;
  &lt;/div&gt;
  //-----------------------------------------------
  methods: {
      add(n) {
          this.count += n
      },
      sub() {
          this.count -= n
      }
  },

  // 简写形式
  &lt;div id="app"&gt;
    &lt;div&gt;当前的数值为 ｛｛ count ｝｝&lt;/div&gt;
    &lt;button&gt; @click="add(3)"&gt;+1&lt;/button&gt;   // v-on: 可以简写  @
    &lt;button&gt; @click="sub(5)"&gt;-1&lt;/button&gt;
  &lt;/div&gt;
  //----------------------------------------------
  methods: {
      add(n) {
          this.count += n
      },
      sub(n) {
          this.count -= n
      }
  },</code></pre>
                  </li>
                  <li>
                    注意：原生DOM对象有onclick、oninput、onkeyup等原生事件，替换为vue的事件绑定形式后，
                  </li>
                  <li>
                    分别为：v-on:click、v-on:input、v-on:keyup // 简写 成 @click
                    @input @keyup
                  </li>
                  <li>
                    事件对象：
                    <pre><code class="language-html line-numbers">  /* 当调用函数没有传参时，可以使用事件对象 event
  如果有传参,需要使用事件对象 e. 如果只写 e，则会被当做实参，防止拿不到事件对象 e
  那么vue 提供一个 &event 来解决 ,实参是固定写法 ,不带实参也可以默认当做事件对象 */

  &lt;div&gt;count的值为： ｛｛ count ｝｝ &lt;/div&gt;
  &lt;button @click="add(1 , $event)"&gt;-N&lt;/button&gt;
  //------------------------------------------------
  methods: {
      add(n , e) {
          this.count += n;
          if (this.count % 2 == 0) {
              e.target.style.backgroundColor = 'red'
          } else {
              e.target.style.backgroundColor = 'blue'
          }
      }
  },
                      </code></pre>
                  </li>
                  <li>
                    事件修饰符：.prevent .stop .capture .once .self
                    <pre><code class="language-html line-numbers">  // 在事件处理函数中调用event.preventDefault（）或 event.stopPropagation（）是非常常见的需求。因此， vue提供了事件修饰符的概念，来辅助程序员更方便的对事件的触发进行控制。常用的5个事件修饰符
  &lt;a href="http://www.baidu.com" @click.prevent="show"&gt;跳转链接，阻止默认行为&lt;/a&gt;
  //----------------------------------------------------------------
  methods: {
      show(e) {
          // e.preventDefault()  DOM标准写法
          console.log('输出1')
      }
  },</code></pre>
                  </li>
                  <li>
                    键盘修饰符：.esc .enter
                    <pre><code class="language-html line-numbers">  // 在监听键盘事件时，我们经常需要判断详细的按键。此时，可以为键盘相关的事件添加按键修饰符
  &lt;input type="text" @keyup.esc="clearInput"&gt;  // .esc代表是按下了 esc键，如果是其它的，则修改成相应按键
  &lt;input type="text" @keyup.esc="clearInput" @keyup.enter="commitAjax"&gt;
  //----------------------------------------
  methods: {
      clearInput(e) {
          e.target.value = ''
      }
  },
                      </code></pre>
                  </li>
                </ul>
              </li>
              <li>
                双向绑定指令
                <ul>
                  <li>
                    vue
                    提供了v-model双向数据绑定指令，用来辅助开发者在不操作DOM的前提下，快速获取表单的数据。
                  </li>
                </ul>
                <pre><code class="language-html line-numbers">  &lt;div id="app"&gt;
      &lt;p&gt;您的名字是 ｛｛ username ｝｝&lt;/p&gt;
      &lt;input type="text" v-model="username"&gt;  // 双向绑定
      &lt;br&gt;
      &lt;input type="text" v-bind:value="username"&gt;  // 单向绑定
  &lt;/div&gt;
  //--------------------------------------------------
  data: {
      username: '张三'
  },</code></pre>
              </li>
              <li>
                input 输入框 textarea select v-model 常用于表单元素
                <ul>
                  <li>
                    type = 'radio' type = 'checkbox' type = 'xxx'
                    <pre><code class="language-html line-numbers">  &lt;input type="text" v-model="n1"&gt; + &lt;input type="text" v-model="n2"&gt; = &lt;span&gt; ｛｛ n1 + n2 ｝｝&lt;/span&gt;
  //----------------------------------------------------
  data: {
        n1: 1,
        n2: 2
  },</code></pre>
                  </li>
                  <li>
                    v-model指令的修饰符：
                    <pre><code class="language-js line-numbers">  .number              自动将用户的输入值转为数值类型               &lt;input v-model.number="age"/&gt;
  .trim                自动过滤用户输入的首尾空白字符               &lt;input v-model.trim="msg"/&gt;
  .lazy                在"change"时而非“input”时更新               &lt;input v-model.lazy="msg"/&gt;</code></pre>
                  </li>
                </ul>
              </li>
              <li>
                条件渲染指令
                <ul>
                  <li>
                    条件渲染指令用来辅助开发者按需控制DOM的显示与隐藏。条件渲染指令有如下两个，分别是
                    <pre><code class="language-html line-numbers">  /* v-if： 作为判断条件，动态创建添加 移除 开发时 if 用的更多, 初始不需要展示，而且后期这个元素也不需要被展示，才使用 if 性能才会更好
  v-show： 动态为元素添加 style=“display: none” ，如果频繁切换，使用 show 性能更好 */

  &lt;div id="app"&gt;
     &lt;p v-if="flag"&gt;我是被v-if控制的&lt;/p&gt;       // if是作为判断条件 动态
     &lt;p v-show="flag"&gt;我是被v-show控制的&lt;/p&gt;   // 而show  是作为内联样式，display：none 显示的
  &lt;/div&gt;
  //-----------------------------------------------------------
  data: {
      flag: true
  },</code></pre>
                  </li>
                  <li>
                    v-else : 跟 v-if 配套的指令 v-if
                    可以单独使用，或配合v-else指令一起使用
                    <pre><code class="language-html line-numbers">  &lt;div id="app"&gt;
      &lt;div&gt; v-if="type === 'A'"&gt;优秀&lt;/div&gt;
      &lt;div&gt; v-else-if="type ==='B'"&gt;良好&lt;/div&gt;
      &lt;div&gt; v-else&gt;一般&lt;/div&gt;
  &lt;/div&gt;
  //----------------------------------------------------
  data: {
      flag: true,
      type: 'A'
  },</code></pre>
                  </li>
                </ul>
              </li>
              <li>
                列表渲染指令
                <ul>
                  <li>
                    vue提供了 v-for
                    列表渲染指令，用来辅助开发者基于一个数组来循环渲染一个列表结构。V-for
                    指令需要
                  </li>
                  <li>
                    使用 item in items （item in 数组） 形式的特殊语法，其中：
                    <pre><code class="language-html line-numbers">  /* items 是待循环的数组
  item 是被循环的每一项 */

  &lt;link rel="stylesheet" href="./lib/bootstrap.css"&gt;
  //--------------------------------------
  &lt;div id="app"&gt;
      &lt;table class="table table-bordered table-hover table-striped"&gt;
          &lt;thead&gt;
              &lt;th&gt;索引&lt;/th&gt;
              &lt;th&gt;ID&lt;/th&gt;
              &lt;th&gt;姓名&lt;/th&gt;
          &lt;/thead&gt;
          &lt;tbody&gt;
              &lt;tr v-for="item in list"&gt;
                  &lt;td&gt;｛｛ 0 ｝｝&lt;/td&gt;
                  &lt;td&gt;｛｛ item.id ｝｝&lt;/td&gt;
                  &lt;td&gt;｛｛ item.name ｝｝&lt;/td&gt;
              &lt;/tr&gt;
          &lt;/tbody&gt;
      &lt;/table&gt;
  &lt;/div&gt;
  //-----------------------------------------------------------
  data: {
      list: [
          { id: 1, name: '张三'},
          { id: 2, name: '李四'},
          { id: 3, name: '王五' }
      ]
  },</code></pre>
                  </li>
                  <li>
                    V-for
                    指令还支持一个可选的第二个参数，即当前项的索引。语法格式为（item，index）in
                    items
                    <pre><code class="language-html line-numbers">  &lt;tbody&gt;
      &lt;tr v-for="(item, index) in list"&gt;
          &lt;td&gt;｛｛ index ｝｝&lt;/td&gt;
          //这样 索引号就可以使用了
          &lt;td&gt;｛｛ item.id ｝｝&lt;/td&gt;
          &lt;td&gt;｛｛ item.name ｝｝&lt;/td&gt;
      &lt;/tr&gt;
  &lt;/tbody&gt;</code></pre>
                  </li>
                  <li>
                    注意： 官方建议，只要用到 v-for指令，那么一定要绑定一个
                    ：key 属性，并且尽量把id作为key 的值,
                    html中忘记加不会报错，但是在 .vue 的文件中忘记加，则会报错
                    <pre><code class="language-js line-numbers">  &lt;!-- 官网对key 的值类型 是有要求的： 数字或者字符串 --&gt;
  &lt;!-- key值不允许使用name ,因为字符串会出现有相同的字符串。重复就报错，id不会，id是唯一的 --&gt;
  &lt;tr v-for="(item, index) in list" :key="item.id"&gt;
      &lt;td&gt;｛｛ index ｝｝&lt;/td&gt;
      &lt;td&gt;｛｛ item.id ｝｝&lt;/td&gt;
      &lt;td&gt;｛｛ item.name ｝｝&lt;/td&gt;
  &lt;/tr&gt;</code></pre>
                  </li>
                  <li>
                    key 值的注意事项
                    <ul>
                      <li>key的值只能是字符串或数字类型</li>
                      <li>key的值必须具有唯一性（即：key的值不能重复）</li>
                      <li>
                        建议把数据项id属性的值作为key的值（因为id属性的值具有唯一性）不建议用name
                        来当做key 的值，因为name 会有重复，终端会报错
                      </li>
                      <li>
                        使用index的值当作key的值没有任何意义（因为index的值不具有唯一性）因为当往数据前添加一个数据，那么索引号会重新排序，这样导致数据紊乱，造成错误
                      </li>
                      <li>
                        建议使用V-for指令时一定要指定key的值（既提升性能、又防止列表状态紊乱）
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                案例中label 的for 属性
                <pre><code class="language-html line-numbers">  &lt;div class="custom-control custom-switch"&gt;
      &lt;input type="checkbox" class="custom-control-input" :id="'customSwitch'+ item.id" v-model="item.status" /&gt;
      &lt;label&gt; class="custom-control-label" :for="'customSwitch'+ item.id" v-if="item.status"&gt;已启用&lt;/label&gt;
      &lt;label&gt; class="custom-control-label" :for="'customSwitch'+ item.id" v-else&gt;已禁用&lt;/label&gt;
  &lt;/div&gt;</code></pre>
              </li>
            </ul>
          </li>
          <li>
            总结:
            <ul>
              <li>
                vue的使用步骤
                <ul>
                  <li>导入vue.js 文件</li>
                  <li>new Vue() 构造函数，得到vm实例对象</li>
                  <li>声明 el 和 data 数据节点</li>
                  <li>MVVM 的对应关系</li>
                </ul>
              </li>
              <li>
                掌握vue中的常用指令的基本用法
                <ul>
                  <li>
                    差值表达式｛｛ ｝｝ 、 v-bind ( 数据到视图，单向，简写 : )
                    、v-on ( @ )、 v-if 和 v-else 、 很少用的有：
                    v-show(display:none) 、 v-text 、 v-html
                  </li>
                  <li>私有过滤器 filters 节点</li>
                </ul>
              </li>
              <li>
                掌握vue中过滤器的基本用法
                <ul>
                  <li>全局过滤器 Vue .filter ( '过滤器名称'，function)</li>
                  <li>私有过滤器 filters 节点</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p>过滤器 (仅限用在2.0的项目上，3.0已经不支持了)</p>
        <ul>
          <li>
            过滤器（Filters）是vue为开发者提供的功能，常用于文本的格式化。Filters
            本身就是一个函数 function
          </li>
          <li>过滤器可以用在两个地方：插值表达式 和 V-bind属性绑定。</li>
          <li>
            过滤器应该被添加在JavaScript表达式的尾部，由“管道符”进行调用，示例代码如下：
            <pre><code class="language-html line-numbers">  &lt;!-- 在差值表达式里面通过 “管道符 ”调用 capitalize 过滤器，对message的值进行格式化--&gt;
  &lt;p&gt;｛｛ message | capitalize ｝｝&lt;/p&gt;   //  capitalize 过滤器名称可以自定义

  &lt;!-- 在 v-bind 中通过 “管道符”调用， formatId 过滤器， 对rawId的值进行格式化 --&gt;
  &lt;div v-bind:id="rawId | formatId"&gt;&lt;/div&gt;
  //----------------------------------------------------------------------------------
  const vm = new Vue({
      el: '#app',
      data: {
      },
      methods: {
      },
      // 过滤器函数，必须被定义到filters节点下
      filters:{
          capitalize(val){  // val是 | 前面的那个原值
              const first = val.charAt(0).toUpperCase();
              const other = val.slice(1);
              // 过滤器函数中一定要有返回值
              return first + other;
          }
      }
  });</code></pre>
          </li>
          <li>
            注意过滤器的注意点：
            <ul>
              <li>要定义到filters节点下，本质是一个函数</li>
              <li>在过滤器函数中，一定要有return值</li>
              <li>在过滤器的形参中，就可以获取到“管道符”前面待处理的那个值</li>
              <li>
                如果全局过滤器和私有过滤器名字一致，此时按照“就近原则”，调用的是“私有过滤器
              </li>
            </ul>
          </li>
        </ul>
        <p>私有和全局 过滤器</p>
        <ul>
          <li>
            在filters
            节点下定义的过滤器，称为“私有过滤器”，因为它只能在当前vm实例所控制的el区域内使用。
          </li>
          <li>
            如果希望在多个vue实例之间共享过滤器，则可以按照如下的格式定义全局过滤器：
            <pre><code class="language-js line-numbers">  // 全局过滤器-独立于每个vm实例之外
  // Vue.filter（）方法接收两个参数： 第1个参数，是全局过滤器的”名字"   第2个参数，是全局过滤器的”处理函数"
  Vue.filter('capitalize', (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1)
  })</code></pre>
          </li>
          <li>
            可以连续调用多个过滤器，用 | 分割，最后return最后一个过滤结果，
          </li>
          <li>
            并且可以传参，第一个参数永远是"管道符"前面待处理的值，第二个参数才是过滤器时传递的过来的num1,num2参数
            <pre><code class="language-html line-numbers">  &lt;div id="app"&gt;
      &lt;div&gt;｛｛username | capitalize（num1，num2） | time | xxx | yyy｝｝&lt;/div&gt;
  &lt;/div&gt;
  //----------------------------------------------------------------------------------------
  Vue.filter('capitalize', (username, num1, num2) =&gt; {
  })</code></pre>
          </li>
          <li>
            过滤器的兼容性：
            <ul>
              <li>
                过滤器仅在vue2.x和1.X中受支持，在vue3.x的版本中剔除了过滤器相关的功能。
              </li>
              <li>
                在企业级项目开发中：
                <ul>
                  <li>
                    如果使用的是2.x版本的vue，则依然可以使用过滤器相关的功能
                  </li>
                  <li>
                    如果项目已经升级到了3.x版本的vue，官方建议使用计算属性或方法代替被剔除的过滤器功能具体的迁移指南，
                  </li>
                  <li>
                    请参考vue3.x的官方文档给出的说明：
                    <el-link
                      type="primary"
                      icon="Link"
                      target="_blank"
                      href="https://v3.vuejs.org/guide/migration/filters.html#migration-strategy"
                    >
                      https://v3.vuejs.org/guide/migration/filters.html#migration-strategy
                    </el-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p>侦听器</p>
        <ul>
          <li>
            什么是watch侦听器：
            <ul>
              <li>
                watch
                侦听器允许开发者监视数据的变化，从而针对数据的变化做特定的操作。语法格式如下：
              </li>
            </ul>
            <pre><code class="language-js line-numbers">  data: {
    username: 'zs',
  },
  watch:{
    // 监听username 值的变化
    // newVal 是“变化后的新值”，oldVal 是“变化之前的旧值”，新值在前，旧值在后
    username(newVal,oldVal){
        // ·调用·jQuery·中的·Ajax·发起请求，判断·newVa1·是否被占用！！！
        $.get('https://www.url/' + newVal, function(result){
            console.log(result); // 判断用户名是否被注册
        })
    }
  }</code></pre>
          </li>
          <li>
            方法格式的侦听器
            <ul>
              <li>
                缺点1：无法在刚进入页面的时候，自动触发！！！，但是推荐，如果一进来就要触发，则采用对象格式
              </li>
              <li>
                缺点2：如果侦听的是一个对象，如果对象中的属性发生了变化，不会触发侦听器！！
              </li>
            </ul>
          </li>
          <li>
            对象格式的侦听器
            <pre><code class="language-js line-numbers">  // 好处1：可以通过immediate 选项，让侦听器自动触发
  watch:{
    // 监听username 值的变化
    // newVal 是“变化后的新值”，oldVal 是“变化之前的旧值”
    username:{
        handler(nweVal,oldVal){
            console.log(newVal,oldVal);
        },
        immediate:false   // 默认值就是false,改为true就是一进来就触发监听
    }
  }

  // 好处2：可以通过deep选项，让侦听器深度监听对象中每个属性的变化
  watch:{
    info:{
        username(newVal){
            console.log(newVal);
        },
        deep:true        // 开启深度监听，只要对象中任何一个属性变化了，都会触发“对象的侦听器”
    }
  } </code></pre>
          </li>
          <li>
            如果要侦听的是对象的子属性的变化，则必须包裹一层单引号
            <pre><code class="language-js line-numbers">  watch:{
    'info.username'(newVal){
        console.log(newVal);
    }
  }</code></pre>
          </li>
        </ul>
        <p>计算属性</p>
        <ul>
          <li>计算属性指的是通过一系列运算之后，最终得到一个属性值。</li>
          <li>
            这个动态计算出来的属性值可以被模板结构或methods方法使用。示例代码如下：
            <pre><code class="language-js line-numbers">  // 所有的计算属性，都要定义到computed节点之下
  // 计算属性在定义的时候，要定义成“方法格式”
  computed:{
      // rgb作为一个计算属性，被定义成了方法格式，最终这个方法中，要返回一个生成好的rgb(x,x,x)字符串
      rgb:function(){
          return ` rgb(${this.r},${this.g},${this.b})`
      }
  }</code></pre>
          </li>
          <li>
            特点：
            <ul>
              <li>定义的时候，要被定义为“方法”</li>
              <li>在使用计算属性的时候，当普通的属性使用即可</li>
            </ul>
          </li>
          <li>
            好处：
            <ul>
              <li>实现了代码的复用</li>
              <li>
                只要计算属性中依赖的数据源变化了，则计算属性会自动重新求值！
              </li>
            </ul>
          </li>
        </ul>
      </el-card>
      <el-card id="part4" shadow="hover">
        <h2>Axios</h2>
        <p>一个专注于网络请求的库</p>
        <ul>
          <li>axios（发音：艾克C奥斯）是前端圈最火的、专注于数据请求的库。</li>
          <li>
            中文官网地址：
            <el-link
              type="primary"
              icon="Link"
              target="_blank"
              href="http://www.axios-js.com/"
            >
              http://www.axios-js.com/
            </el-link>
          </li>
          <li>
            英文官网地址：
            <el-link
              type="primary"
              icon="Link"
              target="_blank"
              href="https://www.npmjs.com/package/axios"
            >
              https://www.npmjs.com/package/axios
            </el-link>
          </li>
          <li>
            先引入axiosjs
            <pre><code class="language-js line-numbers">  &lt;script src="./lib/vue-2.6.12.js"&gt;&lt;/script&gt;</code></pre>
          </li>
          <li>
            语法结构
            <pre><code class="language-js line-numbers">  // 1、调用axios方法得到的返回值是Promise对象
  axios({
      method:"GET",
      url:"http://www.liulongbin.top:3006/api/getbooks",
      // URL 中的查询参数  GET  或者下面POST请求
      params:{},

      // 请求体参数   POST
      data:{}
  }).then(function(books){
      console.log(books.data);
  });

  // 2. 结合async和 await 调用 axios
  document.querySelector('#btnPost').addEventListener( 'click', async function(){
    // 如果调用某个方法的返回值是Promise实例，则前面可以添加await
    // await 能用在被async“修饰”的方法中
    const result = await axios ({
        method: 'POsT ',
        url:'http: //ww.liulongbin.top:3006/api/post',
        data:{
            name: 'zs',
            age: 20
        }
    });
    console.log(result);
  })

  // 3. 解构赋值的时候，使用 ：进行重命名
  document.querySelector('#btnPost').addEventListener( 'click', async function(){
    const {data: res}= await axios ({
        method: 'POST ',
        url:'http: //www.liulongbin.top:3006/api/post',
    });
  })

  // 4.axios.get() 和 axios.post() 语法
  document.querySelector('#btnPost').addEventListener( 'click', async function(){
    // axios.get('url地址',{
    //     // GET参数
    //     params:{}
    // })
    const {data: res} = await axios.get('http: //www.liulongbin.top:3006/api/getBooks'，{});
  });

  document.querySelector('#btnPost').addEventListener( 'click', async function(){
    const {data: res} = await axios.post('http: //www.liulongbin.top:3006/api/getBooks',{});
  });</code></pre>
          </li>
        </ul>
      </el-card>
      <el-card id="part5" shadow="hover">
        <h2>其他</h2>
        <p>Vue-cli</p>
        <ul>
          <li>
            什么是单页面应用程序 (难度比较大，比如杏仁雕刻，一个html里)
            <ul>
              <li>
                单页面应用程序（英文名：Single Page
                Application）简称SPA，顾名思义，指的是一个Web网站中只有唯一的一个HTML页面，
                所有的功能与交互都在这唯一的一个页面内完成。
              </li>
            </ul>
          </li>
          <li>
            什么是vue-cli
            <ul>
              <li>
                vue-cli是Vue.js开发的标准工具。它简化了程序员基于webpack创建工程化的Vue项目的过程。
              </li>
              <li>
                引用自vue-cli官网上的一句话：
                <ul>
                  <li>
                    程序员可以专注在撰写应用上，而不必花好几天去纠结webpack配置的问题。
                  </li>
                  <li>
                    中文官网：
                    <el-link
                      type="primary"
                      icon="Link"
                      target="_blank"
                      href="https://cli.vuejs.org/zh/"
                    >
                      https://cli.vuejs.org/zh/
                    </el-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            安装和使用
            <ul>
              <li>
                vue-cli是npm上的一个全局包，使用npm
                install命令，即可方便的把它安装到自己的电脑上：
                <pre><code class="language-js line-numbers">  npm install -g @vue/cli
  // 先要安装nodejs,然后再执行上面的安装命令，安装好后，cmd => vue -V  可查看版本，出现版本号则安装成功</code></pre>
              </li>
              <li>
                基于vue-cli快速生成工程化的Vue项目：
                <ul>
                  <li>
                    vue create 项目的名称：
                    红色代表固定的vue项目，后面的名称随意，用英文
                  </li>
                </ul>
              </li>
              <li>
                使用方法：
                <pre><code class="language-js line-numbers">  // 第一步创建一个文件夹，在地址栏上输入cmd ，输出： vue create + 项目名称
  Vue CLI v4.5.15
  ? Please pick a preset:(Use arrow keys)
  > Default([Vue 2] babel, eslint)
    Default(vue 3)([Vue 3l babel, eslint)
    Manually select features
  /* 解释：选择项目是Vue2  还是Vue3，初学者应该选择第三选项，手动选择
      Please pick a preset:(Use arrow keys)             请选择预设：（使用箭头键）
      Default ([Vue 2] babel,eslint)                    默认值（[Vue 2]babel，eslint）
      Default (Vue 3)([Vue 3] babel,eslint)             默认值（Vue 3）（[Vue 3]巴别塔，eslint）
      Manually select features                          手动选择要安装的功能 */

  // 第二步
  Vue CLI v4.5.15
  ? Please pick a preset:Manually select featuresCheck the features needed for your project:(Press&lt;space&gt; to select,
  ? (*) Choose Vue version
    (*) Babe1
    ( ) TypeScript
    ( ) Progressive Web App(PWA)Support
    ( ) Router
    ( ) VueX
    ( ) CSS Pre-processors
    ( ) Linter/ Formatter
    ( ) Unit Testing
    ( ) E2E Testing
  /* 解释： * 号代表需要安装，用空格进行选择
    第一项：要选择安装Vue的版本
    第二项：Babel 是用来解决js兼容性的
    第三项：微软的js语言，没学建议不要选
    第四项：渐进式的web框架
    第五项：路由
    第六项：vueX
    第七项：CSS 预处理器
    第八项：代码风格，前期先去掉，要不然会报错
    第九十项：单元组件测试 先不安装 */

  // 第三步
  Vue CLI v4.5.15
  ? Please pick a preset: Manually select features
  ? Check the features needed for your project: Choose Vue version, Babel, CSS Pre-processors
  ? Choose a version of Vue.js that you want to start the project with (Use arrow keys)
  > 2.x
    3.x
  /* 解释： 选择vue版本，先用2 */

  // 第四步
  Vue CLI y4.5.15
  ? Please pick a preset:Manually select features
  ? check the features needed for your project: Choose Vue version, Babel, CSS Pre-proc
  ? Choose a version of Vue.js that you want to start the project with 2.x
  ? Pick a CSS pre-processor (PostCSS,Autoprefixer and CSS Module are supported by de)
  > Sass/SCSS (with dart-sass)
    Sass/SCSS (with node-sass)
    Less
    Stylus
  /* 解释： 选择css预处理器，less */

  // 第五步
  Vue CLI y4.5.15
  ? Please pick a preset: Manually select features
  ? Check the features needed for your project: Choose Vue version, Babel,
  ? Choose a version of Vue.js that you want to start the project with 2. x
  ? Pick a CSS pre-processor （PostCSS,Where do you prefer placing config for Babel, ESLint, etc.?(Use arrow keys)
  > In dedicated config filesIn
    In package.json
  /*  解释： 是否独立创建文件还是跟package.json放在一起，选默认第一个 */

  /* 最后一步
      是否存储以上选择的预设，供下次创建相同配置时选择此次预设，yes / no 都可以
  注意：
    如果暂停了，需要选中窗口，按ctrl +c 解冻，然后鼠标不要点，静静等就可以了
    如果出错，重新执行多遍就可以了，直到出现 cd ‘项目名’ npm run serve 即可  */</code></pre>
              </li>
            </ul>
          </li>
          <li>
            安装完后：
            <ul>
              <li>
                根据提示，先cd到项目，然后再跑起来，输入cd item 按tab
                则会自动输入全名
              </li>
              <li>npm run serve</li>
              <li>
                Local: 本机访问的地址，在浏览器输入即可打开项目
                Network：局域网访问地址
              </li>
              <li>终端端口不要关，关了就项目不运行了，如果关了就重新启用</li>
            </ul>
          </li>
          <li>
            vue项目中的src目录的构成：
            <ul>
              <li>
                assets
                文件夹：存放项目中用到的静态资源文件，例如：css样式表、图片资源
              </li>
              <li>
                components 文件夹：
                程序员封装的、可复用的组件，都要放到components目录下
              </li>
              <li>App.vue：是项目的根组件</li>
              <li>
                main.js：是项目的入口文件。整个项目的运行，要先执行main.js
              </li>
            </ul>
          </li>
        </ul>
        <p>Vue项目的运行流程</p>
        <ul>
          <li>
            在工程化的项目中，vue要做的事情很单纯：通过main.js把App.vue渲染到index.html的指定区域中。
            <pre><code class="language-js line-numbers">  // 导入vue这个包，得到Vue构造函数
  import Vue from 'vue'
  // 导入App.vue根组件，将来要把App.vue中的模板结构，渲染到HTML页面中
  // import App from './App.vue'
  import test from './test.vue'

  Vue.config.productionTip = false

  // 创建Vue的实例对象
  new Vue({
    // 把render 函数指定的组件，渲染到HTML页面中
    // render函数中，渲染的是哪个.vue组件，那么这个组件就叫做“根组件”
    render: h => h(test),
  }).$mount('#app')   // $mount函数   相当于  el:'要控制区域'</code></pre>
          </li>
          <li>
            如果把自己创建的Vue文件渲染到页面中
            <ul>
              <li>创建文件 test.vue，写一些模版结构</li>
              <li>
                打开main.js 导入文件，修改render函数里的形参，再 .$mount(
                "文件名" )
              </li>
            </ul>
          </li>
        </ul>
        <p>什么是组件化开发</p>
        <ul>
          <li>
            组件化开发指的是：根据封装的思想，把页面上可重用的UI结构封装为组件，从而方便项目的开发和维护。
          </li>
          <li>
            vue中的组件化开发
            <ul>
              <li>vue是一个支持组件化开发的前端框架。</li>
              <li>
                vue中规定：组件的后缀名是vue。之前接触到的App.vue文件本质上就是一个vue的组件。
              </li>
            </ul>
          </li>
          <li>
            vue 组件的三个组成部分每个.vue组件都由3部分构成，分别是：
            <ul>
              <li>template -> 组件的模板结构</li>
              <li>script -> 组件的JavaScript行为</li>
              <li>style -> 组件的样式</li>
            </ul>
          </li>
          <li>
            什么是组件，组件就是对UI的复用
            <pre><code class="language-html line-numbers">  &lt;template&gt;   &lt;!-- 模版 --&gt;
    &lt;div&gt;
        &lt;h1&gt;这里是用户自定义的test.vue----｛｛ username ｝｝&lt;/h1&gt;
        &lt;button @click="changeName"&gt;+1&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;script&gt;
    export default { // 固定写法，默认导出
      // data 数据源
      // 注意：.vue组件中的data不能像值钱一样，不能指向对象
      // 主键中的data必须是一个函数
      data(){
          // 这个return出去的｛｝中，可以定义数据
          return {
              username:'zs'
          }
      },
      methods:{
          changeName(){
              // 在组件中，this就表示当前组件的实例对象
              this.username = "whh"
          }
      },
      watch:{ },     // 当前组件的侦听器
      filters:{ },   // 当前组件的过滤器，一般用全局
      computed:{ }   // 当前组件的计算属性
    }
  &lt;/script&gt;

  &lt;style lang="less"&gt; &lt;/style&gt;   /* 样式 如果要用less语法，则需要写语言，默认css，可以不写 */</code></pre>
          </li>
        </ul>
        <p>组件之间的父子关系</p>
        <ul>
          <li>组件在被封装好之后，彼此之间是相互独立的，不存在父子关系</li>
          <li>
            在使用组件的时候，根据彼此的嵌套关系，形成了父子关系、兄弟关系
          </li>
        </ul>
        <p>组件使用的三个步骤</p>
        <pre><code class="language-js line-numbers">  // 使用import语法导入需要的组件
  import Left from '@/components/Left.vue'
  import Left from '@/components/right.vue'

  // 使用components节点注册组件，多个组件用，号分割
  export default {
    components: {
      Left，
      Right
    }
  }

  // 在模版中使用组件
  &lt;Left&gt;使用组件标签&lt;/Left&gt;

  /* 安装Vue路径提示工具 Path Autocomplete : Vue项目中提示文件路径的插件
      需要设置：设置 => 输入settings找到 setting.json 文件 => 在头部添加代码  */
      // 导入文件时是否携带文件的扩展名
      "path-autocomplete.extensionOnImport": true,
      // 配置@的路径提示
      "path-autocomplete.pathMappings": {
        "@":"${folder}/src"
      },

  /* 通过components注册的是私有子组件. 例如:
      在组件A的components节点下，注册了组件F。
      则组件F只能用在组件A中；不能被用在组件C中。 */

  /* 注册全局组件
      在vue项目的main.js入口文件中，通过Vue.component（）方法，可以注册全局组件。示例代码如下： */
      // 1、先在main.js中 导入需要被全局注册的那个组件
      import Count from "@/components/Count.vue"
      Vue.component('MyCount', Count);

      // 2、在需要使用的Vue中使用
      &lt;MyCount&gt;Count组件&lt;/MyCount&gt;

  /* 组件的props
      props是组件的自定义属性，在封装通用组件的时候，合理地使用props可以极大的提高组件的复用性 */
      &lt;template&gt;
        &lt;div&gt;
            &lt;p&gt;｛｛ init ｝｝&lt;/p&gt;  // 要渲染的页面应该放上初始值init
            &lt;MyCount&gt; init="9"&gt;&lt;/MyCount&gt;  // 将init值传给自定义属性props
        &lt;/div&gt;
      &lt;/template&gt;

      &lt;script&gt;&gt;
      export default {
        // props 是‘自定义属性’，允许使用者通过自定义属性，为当前组件指定初始化值
        // 自定义属性的名字，是封装者自定义的（只要名称合法即可）
        props:['init'],
        data(){
            return {
                count: 0
            }
        }
      }
      &lt;/script&gt; </code></pre>
      </el-card>
    </template>
  </card-container>
</template>

<script setup lang="ts" name="vue2">
import { ref } from "vue";

const data = ref([
  { id: 1, h2: "Webpack" },
  { id: 2, h2: "vue简介" },
  { id: 3, h2: "基本使用" },
  { id: 4, h2: "Axios" },
  { id: 5, h2: "其他" },
]);
</script>

<style scoped lang="scss"></style>
