<template>
  <card-container :data="data">
    <template #svg>
      <svg
        t="1737946347677"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="19581"
        width="48"
        height="48"
      >
        <path
          d="M882.23288889 749.45422222L526.90488889 950.38577778V793.94133333l221.41155556-121.856 133.91644444 77.36888889z m24.34844444-22.07288889V307.08622222l-129.93422222 75.09333333v270.22222223l129.93422222 74.97955555z m-766.17955555 22.07288889l355.328 201.04533333V793.94133333L274.20444445 672.08533333l-133.80266667 77.36888889zM116.05333333 727.38133333V307.08622222l129.93422222 75.09333333v270.22222223L116.05333333 727.38133333z m15.24622222-447.60177778l364.43022223-206.16533333v151.32444445L262.144 353.39377778l-1.82044445 1.024c0 0.11377778-129.024-74.63822222-129.024-74.63822223z m760.03555556 0L526.90488889 73.728v151.32444445l233.472 128.34133333 1.82044444 1.024 129.13777778-74.63822223z"
          fill="#8ED6FB"
          p-id="19582"
        />
        <path
          d="M495.72977778 758.21511111l-218.45333333-120.14933333V400.15644445l218.45333333 126.17955555v231.87911111z m31.17511111 0l218.45333333-120.03555556V400.15644445l-218.45333333 126.17955555v231.87911111zM291.95377778 372.62222222l219.24977777-120.49066667L730.45333333 372.62222222 511.31733333 499.25688889 291.95377778 372.62222222z"
          fill="#1C78C0"
          p-id="19583"
        />
      </svg>
      <h1>Webpack</h1>
    </template>
    <template #describe>
      <p>
        Webpack是一个现代JavaScript应用程序的静态模块打包器（module
        bundler）。Webpack支持多种模块化规范（如CommonJS、AMD、ES6模块），并能将这些模块打包成一个或多个bundle文件。
      </p>
    </template>
    <template #content>
      <el-card id="part1" shadow="hover">
        <h2>使用步骤</h2>
        <p>下载</p>
        <ul>
          <li>
            官网：
            <el-link
              type="primary"
              icon="Link"
              target="_blank"
              href="https://webpack.docschina.org/loaders"
            >
              https://webpack.docschina.org/loaders
            </el-link>
          </li>
          <li>如果代码没错的前提下打包出错，可以参考出错代码后重新下载依赖</li>
          <li>
            注意，所有图片资源，要么js导入，要么背景图片，包括link里的 icon图标
          </li>
          <li>
            资源目录
            <pre><code class="language-js line-numbers">  webpack_code                  # 项目根目录（所有指令必须在这个目录运行）
  └── config                    # webpack 配置文件
      ├── webpack.dev.js        # webpack 开发配置
      ├── webpack.prod.js       # webpack 生产配置
  └── dist                      # 输出文件
  └── node_modules              # 存放安装的包文件夹
  └── public                    # 网页存放文件
      ├── index.html
  └── src                       # 项目源码目录
      ├── css                   # css文件目录
      │   ├── index.css
      ├── fonts                 # font文件目录
      ├── images                # images文件目录
      │   ├── img.jpg
      │   ├── img.png
      ├── js                    # js文件目录
      │   ├── count.js
      │   └── sum.js
      ├── sass                  # sass文件目录
      │   ├── index.sass
      └── main.js # 项目主文件
  └── .eslintignore             # eslintrc 忽略检查文件
  └── .eslintrc.js              # eslintrc 文件
  └── babel.config.js           # babel 配置文件
  └── package-lock.json         # 用于告诉npm项目运行需要哪些包
  └── package.json              # 项目的配置文件</code></pre>
          </li>
        </ul>
        <p>创建文件</p>
        <pre><code class="language-js line-numbers">  // count.js
  export default function count(x, y) {
      return x - y;
  }

  // sum.js
  export default function sum(...args) {
      return args.reduce((p, c) => p + c, 0);
  }

  // main.js
  import count from "./js/count";
  import sum from "./js/sum";

  console.log(count(2, 1));
  console.log(sum(1, 2, 3, 4));</code></pre>
        <p>下载依赖（打开终端，来到项目根目录。运行以下指令：）</p>
        <pre><code class="language-js line-numbers"> /* 初始化package.json（此时会生成一个基础的 package.json 文件。
  需要注意的是 package.json 中 name 字段不 能叫做 webpack, 否则下一步会报错） */
  npm install -g yarn    // 安装yarn，也选择性安装
  npm init -y

  // 下载依赖
  npm i webpack webpack-cli -D

  // 启用 Webpack
  npx webpack ./src/main.js --mode=development    // -----开发模式
  npx webpack ./src/main.js --mode=production     // -----生产模式

  npx                    // 这个指令会将node_modules下.bin临时添加为环境变量这样可以访问环境变量下的应用程序
  npx webpack

  /* 注意：npx webpack: 是用来运行本地安装 Webpack 包的。
     ./src/main.js: 指定 Webpack 从 main.js 文件开始打包，不但会打包 main.js，还会将其依赖也一起打包进来。
     --mode=xxx：指定模式（环境）。 */

  // 观察输出文件：默认 Webpack 会将文件打包输出到 dist 目录下，我们查看 dist 目录下文件情况就好了
</code></pre>
      </el-card>
      <el-card id="part2" shadow="hover">
        <h2>开发模式</h2>
        <p>基本配置</p>
        <ul>
          <li>
            5大核心概念
            <ul>
              <li>entry（入口）： 指示 Webpack 从哪个文件开始打包</li>
              <li>
                output（输出）： 指示 Webpack
                打包完的文件输出到哪里去，如何命名等
              </li>
              <li>
                loader（加载器）：webpack 本身只能处理 js、json
                等资源，其他资源需要借助 loader，Webpack 才能解析
              </li>
              <li>plugins（插件）： 扩展 Webpack 的功能</li>
              <li>
                mode（模式）： 主要由两种模式：开发模式：development
                生产模式：production
              </li>
            </ul>
          </li>
          <li>
            项目根目录下新建文件：webpack.config.js （Webpack 是基于 Node.js
            运行的，所以采用 Common.js 模块化规范）
            <pre><code class="language-js line-numbers">  ** 配置 config/webpack.dev.js
  const path = require("path");   // Node.js的核心模块，专门用来处理文件路径

  module.exports = {
      entry: "./src/main.js",     // 入口，相对路径和绝对路径都行
      output: {                   // 输出
          path: path.resolve(__dirname, "dist"),
                                  // path: 文件输出目录，必须是绝对路径
                                  // path.resolve()方法返回一个绝对路径
                                  // __dirname 当前文件的文件夹绝对路径
          filename: "main.js",    // filename: 输出文件名
      },
      module: {                   // 加载器
          rules: [],
      },
      plugins: [],                // 插件
      mode: "development",        // 开发模式
  };

  // 执行测试
  npx webpack      // (因为写了webpack.config.js)，注意，如果根目录下没有webpack.config.js 是不能使用 npx webpack</code></pre>
          </li>
          <li>
            处理css 资源
            <pre><code class="language-js line-numbers">  npm i css-loader style-loader -D
  // css-loader：负责将 Css 文件编译成 Webpack 能识别的模块
  // style-loader：会动态创建一个 Style 标签，里面放置 Webpack 中 Css 模块内容
  // 此时样式就会以 Style 标签的形式在页面上生效

  **配置 project/webpack.config.js
  module: {
    rules: [
        ...
        { test: /\.css$/,                         // 用来匹配 .css 结尾的文件
          use: ["style-loader", "css-loader"],    // use 数组里面 Loader 执行顺序是从右到左
        },
  ],},

  **添加 Css 资源  src/css/index.css
  .box1 {
      width: 100px;
      height: 100px;
      background-color: pink;
  }

  **引入 src/main.js
  import "./css/index.css";                      // 引入 Css 资源，Webpack才会对其打包

  **引用 public/index.html
  &lt;body&gt;
      &lt;h1&gt;Hello Webpack5&lt;/h1&gt;
      &lt;div class="box1"&gt;&lt;/div&gt;                   // 准备一个使用样式的 DOM 容器
      &lt;script src="../dist/main.js"&gt;&lt;/script&gt;    // 引入打包后的js文件，才能看到效果
  &lt;/body&gt;

  运行指令    npx webpack                         // 打开 index.html 页面查看效果</code></pre>
          </li>
          <li>
            处理less 资源
            <pre><code class="language-js line-numbers">  npm i less-loader -D

** 配置 project/webpack.config.js
module: {
    rules: [
        ...                                    // loader: xxx,  用loader只能加载一个，用use可以加载多个
        { test: /\.less$/,
            use: ["style-loader", "css-loader", "less-loader"],
        },
],},
// 其他参数参照配置css处理器一样，需要main.js引入才会被打包</code></pre>
          </li>
          <li>
            处理sass 资源
            <pre><code class="language-js line-numbers">  npm i sass-loader sass -D

**配置 project/webpack.config.js
module: {
  rules: [
      ...
      { test: /\.s[ac]ss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
      },
],},

// 注意：如果不是在根目录下的sass文件夹，那么就可能不会输出.css文件，需要用监视
npm install -g sass                            // 全局安装 sass
sass --watch src/sass:src/css                  // 监听目录的变化,src目录下sass  :  输出到 src/css 文件夹里 </code></pre>
          </li>
          <li>
            以上资源都需要引入到入口文件的 main.js
            <pre><code class="language-js line-numbers">  **配置 project/src/main.js
  import "./css/index.css";
  import "./less/index.less";
  import "./sass/index.sass";
  import "./sass/index.scss";
  import "./styles/index.styl";
  // 下载  npm i stylus-loader -D ,并和其他一样配置</code></pre>
          </li>
          <li>
            (0)展示图片的三种方式：
            <ul>
              <li>使用背景图片</li>
              <li>
                使用js导入
                <ul>
                  <li>const imgUrl = require（‘图片的路径’）；</li>
                  <li>图片的dom对象.src = imgUrl</li>
                </ul>
              </li>
              <li>使用img 标签</li>
            </ul>
          </li>
          <li>
            (1)处理图片资源,已经内置,不需要下载loader,浏览器安装FeHelper插件，也可以安装转换base64的工具
            <pre><code class="language-js line-numbers">  **指定图片大小来转换base64 的配置
  module: {
      rules: [
          ...
          { test: /\.(png|jpe?g|gif|webp|svg|ico)$/, type: "asset",
              parser: {
                  dataUrlCondition: {
                      maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
                  },},},
  ],},
  /* 资源模块类型（aset module type），通过添加4种新的模块类型，来替换所有这些loader:
    ·asset/resource 发送一个单独的文件并导出URL。之前通过使用file-Loader实现。
    ·asset/intine 导出一个资源的data URI。之前通过使用url-loader实现。
    ·asset/source 导出资源的源代码。之前通过使用raw-loader实现。
    ·asset 在导出一个data URI和发送一个单独的文件之间自动选择。之前通过使用urt-loader，并且配置资源体积限制实现。 */

  // 使用图片     project /src/css/index.css
  .box{
      background:url(../images/1.png);
  }</code></pre>
          </li>
          <li>
            (2)推荐使用此方法
            <pre><code class="language-js line-numbers">  const imgUrl = require("../images/upload/dh_img1");
  let box = document.createElement("div");
  box.src = imgUrl;

  // 简写形式
  document.querySelector(".navLogo img").src = require("../images/navLogo.png");</code></pre>
          </li>
          <li>
            (3)处理图片资源,解决img标签不被服务器识别（开发生产一样配置）
            <pre><code class="language-js line-numbers">  npm i html-withimg-loader -D

  ** 配置 project/webpack.prod.js
  module.exports = {
      ...
      { test: /\.(htm|html)$/, loader: "html-withimg-loader",},
  }</code></pre>
          </li>
          <li>
            (4)百度查询下处理HTML中的 &lt;img /&gt; 标签问题（生产模式下使用）
            <pre><code class="language-js line-numbers">  npm i url-loader file-loader html-loader -D</code></pre>
          </li>
          <li>
            (5)chatGPT 推荐方法
            <pre><code class="language-js line-numbers">  npm install --save-dev html-loader file-loader
  npm install --save-dev copy-webpack-plugin

  **配置 webpack.dev.js
  const CopyWebpackPlugin = require('copy-webpack-plugin');

  module.exports = {
      rules: [
          { oneOf: [
              {test: /\.html$/,use: [{ loader: "html-loader",options: { esModule: false, }, },],},
              { test: /\.(png|jpe?g|gif)$/i,use: [ { loader: "url-loader", options: { limit: 8192,
                  name: "images/[name].[hash:8].[ext]", }, }, ],},
          ]}
      ],
      plugins: [
          new CopyWebpackPlugin({
              patterns: [
                  {from: 'src/images', to: 'images' }
              ]
          })
      ]
  }</code></pre>
          </li>
          <li>
            修改打包路径
            <pre><code class="language-js line-numbers">  **配置 project/webpack.config.js
  output: {
      path: path.resolve(__dirname, "dist"),   // 所有文件的输出路径
      filename: "static/js/main.js",           // 将入口js文件文件输出到 static/js 目录中
  },

  **修改输出图片文件目录
  module: {
      rules: [
          ...
          { test: /\.(png|svg|jpe?g|gif|webp)$/i,
            type: "asset",
              parser: { dataUrlCondition: {maxSize: 10 * 1024,},},
              generator: {filename: "static/imgs/[hash:8][ext][query]", },
              // 将图片文件输出到 static/imgs 目录中, 图片文件命名 [hash:8][ext][query]
              // [hash:8]: hash值取8位
              // [ext]: 使用之前的文件扩展名
              // [query]: 添加之前的query参数
          },
      ],},

  **配置 project/webpack.config.js
  &lt;script src="../dist/static/js/main.js"&gt;&lt;/script&gt;      // 修改 js 资源路径</code></pre>
          </li>
          <li>
            自动清空上一次打包文件
            <pre><code class="language-js line-numbers">  **配置 project/webpack.config.js
  output: {
      ...
      clean:true, // 自动清空上一次打包结果,将path整个目录内容清空，重新打包  || clear:true
  },</code></pre>
          </li>
          <li>
            处理字体图标资源
            <ul>
              <li>到阿里巴巴下载字体图标到本地 https://www.iconfont.cn/</li>
              <li>
                素材库=> 官方图标库 => 添加想要的字体图标（点击购物车按钮） =>
                右上角购物车
              </li>
              <li>
                => 添加至项目 => 点击下载到本地 => 解压 => 复制 iconfont.css
                到项目的css文件夹下
              </li>
              <li>
                => 在src下创建fonts文件夹 => 将解压出来的ttf
                woff文件拷贝进来，且url()路径需要修改下
              </li>
              <li>
                => src:url(../fonts/iconfont.woff?t=16516536..........)
                (因为和css文件不同目录)
                <pre><code class="language-js line-numbers">  **配置 project/webpack.config.js

  module: {
      rules: [
          .....
          { test: /\.(ttf|woff2?)$/,
            type: "asset/resource",
            generator: { filename: "static/media/[hash:8][ext][query]",},
          },
      ],},

  **配置   project/src/main.js
  import "./css/iconfont.css"

  **使用   project/public/index.html
  &lt;div class="iconfont icon-up"&gt;&lt;/div&gt;               // 必须加上iconfont类名 后写图标名
  &lt;script src="../dist/static/js/main.js"&gt;&lt;/script&gt;  // 目前还要修改，之后会动态创建</code></pre>
              </li>
            </ul>
          </li>
          <li>
            处理其他资源
            <pre><code class="language-js line-numbers">  module: {
    rules: [
        ....
        { test: /\.(ttf|woff2?|map4|map3|avi)$/,     // 处理视频等其他资源，其他有的话再加
          type: "asset/resource",
          generator: { filename: "static/media/[hash:10][ext][query]",},},
    ],},

  **压缩资源
  npm install --save-dev compression-webpack-plugin

  **配置webpack.prod.js
  new CompressionPlugin({
      test: /\.(woff|woff2|ttf|eot|mp4|webm|ogg|mp3|wav|flac|aac)$/i,
  }),</code></pre>
          </li>
          <li>
            处理js
            <pre><code class="language-js line-numbers">  npm i eslint-webpack-plugin eslint -D
  // 我们先完成 Eslint，检测代码格式无误后，在由Babel 做代码编译 兼容性处理

  **配置  project/webpack.config.js
  const ESLintWebpackPlugin = require("eslint-webpack-plugin");  // 引入
  module.exports = {
  ...
  plugins: [                                                     // 指定检查文件的根目录
      new ESLintWebpackPlugin({ context: path.resolve(__dirname, "src"),}),
  ],};

  **在项目根目录创建规则文件   project/.eslintrc.js
  module.exports = {
  extends: ["eslint:recommended"],                               // 继承 Eslint 规则
  env: { node: true,browser: true,},                             // 启用node中全局变量 // 启用浏览器中全局变量
  parserOptions: { ecmaVersion: 6, sourceType: "module", },      // es6   es module
  rules: {"no-var": 2,},                                         // 不能使用 var 定义变量
  };

  **如果不需要检查其他路径，需要增加一个 .eslintignore   配置忽略文件 (安装Eslint插件来提示代码出错的问题)
  # 忽略dist目录下所有文件
  dist

  // eslint官网：https://eslint.bootcss.com/docs/rules/</code></pre>
          </li>
          <li>
            babel 转换兼容性的代码，编译向后兼容 es6 => es5 以便在旧版本中预览
            <pre><code class="language-js line-numbers">  npm i babel-loader @babel/core @babel/preset-env -D

  **预设理解：
  // 就是一组 Babel 插件, 扩展 Babel 功能
  // @babel/preset-env: 一个智能预设，允许您使用最新的 JavaScript。
  // @babel/preset-react：一个用来编译 React jsx 语法的预设
  // @babel/preset-typescript：一个用来编译 TypeScript 语法的预设

  **配置方法1 project/webpack.config.js
  module: {                                                   // 加载器
      rules: [
          ....
          { test: /\.js$/,
            exclude: /node_modules/,                          // 排除node_modules代码不编译
            loader: "babel-loader",
            options: { presets:["@babel/preset-env"],} },     // （二选一，可写在这，也可以用方法2）
  ],},

  **配置方法2  project/babel.config.js                         // （二选一，写babel.config.js 好维护一些）
  module.exports = {presets: ["@babel/preset-env"],};</code></pre>
          </li>
          <li>
            处理html 资源
            <pre><code class="language-js line-numbers">  npm i html-webpack-plugin -D

  **配置  project/webpack.config.js
  const HtmlWebpackPlugin = require("html-webpack-plugin");
  module.exports = {
  ...
  plugins: [
      ...
      new HtmlWebpackPlugin({template: path.resolve(__dirname, "public/index.html"),}),
      // 以 public/index.html 为模板创建文件
      // 新的html文件有两个特点：1. 内容和源文件一致    2. 自动引入打包生成的js等资源
  ],};

  **配置  project/public/index.html
  // 那么手动引入js就不需要了，通过插件自动生成
  // &lt;script&gt; src="../dist/static/js/main.js"&gt;&lt;/script&gt;</code></pre>
          </li>
          <li>
            处理html 标题
            <pre><code class="language-js line-numbers">  **配置  project/webpack.config.js
  const HtmlWebpackPlugin = require("html-webpack-plugin");
  module.exports = {
      ...
      plugins: [
          ...
          new HtmlWebpackPlugin({
              title:'测试',                                    // 直接可以配置标题
              template: path.resolve(__dirname, "public/index.html"),
      }),
  ],};

  **配置 project/public/index.html
  &lt;title&gt;&lt;%=htmlWebpackPlugin.options.title%&gt;&lt;/title&gt;</code></pre>
          </li>
          <li>
            搭建开发服务器 自动化
            <pre><code class="language-js line-numbers">  npm i webpack-dev-server -D

  **配置  project/webpack.config.js
  module.exports = ｛
      ...
      // 开发服务器：不会输入出资源，是在内存中编译打包的
      devServer: ｛
          host: "localhost",     // 启动服务器域名
          port: "3000",          // 启动服务器端口号
          open: true,            // 是否自动打开浏览器
  ｝｝;

  // 执行运行 服务器命令          npx webpack serve
  // 终止运行                    ctrl + c
  // 内存中编译，随意改
  // 项目完成，重新打包           npx webpack</code></pre>
          </li>
          <li>
            忽略上传文件,不想上传的文件右键复制相对路径，添加/ + 把 "\" 修改成
            "/"
            <pre><code class="language-js line-numbers">  **配置  project/.gitignore
  /node_modules
  /package-lock.json</code></pre>
          </li>
        </ul>
      </el-card>
      <el-card id="part3" shadow="hover">
        <h2>生产模式</h2>

        <p>基本配置</p>
        <ul>
          <li>
            生产模式配置
            <ul>
              <li>
                在根目录下新建一个config的配置文件夹，放置不同模式的配置文件
              </li>
              <li>
                将webpack.config.js 复制一份，移到config目录下，改名为 =>
                webpack.dev.js
              </li>
              <li>将webpack.config.js 改名为 => webpack.prod.js</li>
            </ul>
            <pre><code class="language-js line-numbers">  webpack_code                  # 项目根目录（所有指令必须在这个目录运行）
  └── config                    # webpack 配置文件
      ├── webpack.dev.js        # webpack 开发配置
      ├── webpack.prod.js       # webpack 生产配置
  └── dist                      # 输出文件
  └── node_modules              # 存放安装的包文件夹
  └── public                    # 网页存放文件
      ├── index.html
  └── src                       # 项目源码目录
      ├── css                   # css文件目录
      │   ├── index.css
      ├── fonts                 # font文件目录
      ├── images                # images文件目录
      │   ├── img.jpg
      │   ├── img.png
      ├── js                    # js文件目录
      │   ├── count.js
      │   └── sum.js
      ├── sass                  # sass文件目录
      │   ├── index.sass
      └── main.js # 项目主文件
  └── .eslintignore             # eslintrc 忽略检查文件
  └── .eslintrc.js              # eslintrc 文件
  └── babel.config.js           # babel 配置文件
  └── package-lock.json         # 用于告诉npm项目运行需要哪些包
  └── package.json              # 项目的配置文件</code></pre>
          </li>
          <li>
            配置开发模式 project/webpack.dev.js
            <pre><code class="language-js line-numbers">  module.exports = {
      entry: "./src/main.js",                 // 相对路径和绝对路径都行
      output: {
          path: undefined,                    // 开发模式没有输出，不需要指定输出目录
          filename: "static/js/main.js",      // 将 js 文件输出到 static/js 目录中
          // clean: true,                        开发模式没有输出，不需要清空输出结果
      },
      ....
      plugins: [
          new ESLintWebpackPlugin({ context: path.resolve(__dirname, "../src"), }),// 使用，指定检查文件的根目录
          new HtmlWebpackPlugin({ template: path.resolve(__dirname, "../public/index.html"),}),
      ],
      mode: "development",
  };

  // 注意：1.开发没有输出，不需要输出路径
  //      2.绝对路径都要回退一层目录 "../src"
  //      3.模式改成开发

  // 执行运行命令    npx webpack serve --config ./config/webpack.dev.js</code></pre>
          </li>
          <li>
            配置生产模式 project/webpack.prod.js
            <pre><code class="language-js line-numbers">  module.exports = {
      entry: "./src/main.js",             // 相对路径和绝对路径都行
      output: {
          path: path.resolve(__dirname, "../dist"),   // 要回退一层目录
          filename: "static/js/main.js",  // 将 js 文件输出到 static/js 目录中
          clear: true,                    // 自动清空上一次打包结果
      },
      // devServer: {                     // 生产模式不需要服务器
      //   host: "localhost",
      //   port: "3000",
      //   open: true,
      // },
      plugins: [
          new ESLintWebpackPlugin({context: path.resolve(__dirname, "../src"),}),
          new HtmlWebpackPlugin({template: path.resolve(__dirname, "../public/index.html") }),
      ],
      mode: "production",
  };
  // 注意：1.生产模式是需要路径的，且生产不需要开发服务器
  //      2.绝对路径都要回退一层目录 "../src"
  //      3.模式改成生产production

  // 执行运行命令     npx webpack --config ./config/webpack.prod.js</code></pre>
          </li>
          <li>
            为了方便运行不同模式的指令，我们将指令定义在 package.json 中 scripts
            里面
            <pre><code class="language-js line-numbers">  {   ...
    "scripts": {
      "start": "npm run dev",
      "dev": "npx webpack serve --config ./config/webpack.dev.js",
      "build": "npx webpack --config ./config/webpack.prod.js"
    },
  }

  // 开发模式：npm start 或 npm run dev
  // 生产模式：npm run build</code></pre>
          </li>
          <li>
            生产模式下处理 css
            <pre><code class="language-js line-numbers">  npm i mini-css-extract-plugin -D
  // 1.Css 文件目前被打包到 js 文件中，当 js 文件加载时，会创建一个 style 标签来生成样式
  // 2.这样对于网站来说，会出现闪屏现象，用户体验不好
  // 3.我们应该是单独的 Css 文件，通过 link 标签加载性能才好

  **配置  project/webpack.prod.js
  const MiniCssExtractPlugin = require("mini-css-extract-plugin");
  ...
  module.exports = {
      module: {
          ...
          rules: [
                 // 修改 style-loader成 MiniCss....    use 数组里面 Loader 执行顺序是从右到左
              { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"]},
              { test: /\.s[ac]ss$/, use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],},
          ],
      },
      ...
      plugins: [ // 提取css成单独文件    定义输出文件名和目录
          new MiniCssExtractPlugin({filename: "static/css/main.css",}),
      ],
      ...
      mode: "production",
  };</code></pre>
          </li>
          <li>
            样式兼容性处理
            <pre><code class="language-js line-numbers">  npm i postcss-loader postcss postcss-preset-env -D
  // 位置不能写错，在css-loader后面，less-loader前面，其他也一样，夹在中间配置

  **配置  project/webpack.prod.js
  module.exports = ｛
      ...
      module: ｛
        rules: [
            {test: /\.css$/,  use: [ MiniCssExtractPlugin.loader,"css-loader"]},
            // 》--- 能解决大多数样式兼容性问题
            ｛loader: "postcss-loader",options: ｛postcssOptions: {plugins: ["postcss-preset-env" ]｝｝,
            // 加以上代码，如果后面还有处理，参考sass写法 ---《
            },
            {test: /\.s[ac]ss$/,use: [MiniCssExtractPlugin.loader,"css-loader"]},
            // 能解决大多数样式兼容性问题
            {loader: "postcss-loader",options: {postcssOptions: {plugins: ["postcss-preset-env","sass-loader"],},｝｝
          ]
      },
      mode: "production",
  };

  ** 配置  project/package.json    兼容性什么版本
  {    ...
  "browserslist": ["ie >= 8"]
  }   // 实际开发中不会考虑ie8  直接会考虑ie11,所以写成下面三个参数的形式

  {    ...  （推荐写法）
  "browserslist": ["last 2 version", "> 1%", "not dead"]
  // 参数（交集关系）：所有浏览器最近的两个版本 ， 覆盖99%的浏览器   ，  有些浏览器已经没了也不要了
  }</code></pre>
          </li>
          <li>
            封装样式loader函数，合并配置
            <pre><code class="language-js line-numbers">  **配置  project/config/webpack.prod.js
  const path = require("path");
  ...
  // 获取处理样式的Loaders
  const getStyleLoaders = (preProcessor) => {
    return [
      MiniCssExtractPlugin.loader,
      "css-loader",
      {loader: "postcss-loader",options: {postcssOptions: {plugins: ["postcss-preset-env",],},},},
      preProcessor,
    ].filter(Boolean);              // 会把undefined过滤掉
  };
  module.exports = {
      ...
      module: {
          rules: [
              { test: /\.css$/,use: getStyleLoaders(),},
              { test: /\.s[ac]ss$/,use: getStyleLoaders("sass-loader")},
          ],
      },
      ...
      mode: "production",
  };

  // 执行  npm run build  看下有没有出错，以及样式有没有问题，防止写错代码</code></pre>
          </li>
          <li>
            压缩css
            <pre><code class="language-js line-numbers">  npm i css-minimizer-webpack-plugin -D

  **配置  project/config/webpack.prod.js
  const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
  ...
  module.exports = {
  ...
  plugins: [
    ...
    new CssMinimizerPlugin(),      // css压缩
  ],
  ...
  mode: "production",
  };

  // 执行  npm run build 检查有没有出错，出错了看提示进行解决</code></pre>
          </li>
          <li>html js 压缩因为打包会自动压缩，所有不需要配置</li>
        </ul>
      </el-card>
      <el-card id="part4" shadow="hover">
        <h2>优化</h2>

        <p>高级配置</p>
        <ul>
          <li>
            提升开发体验（能找到出错代码位置）
            <ul>
              <li>
                SourceMap（源代码映射）是一个用来生成源代码与构建后代码一一映射的文件的方案。当出现代码错误时，
                能生成文件来映射到对应的出错行，F12 => sources 进行查看
              </li>
              <li>
                开发模式：cheap-module-source-map
                <ul>
                  <li>优点：打包编译速度快，只包含行映射</li>
                  <li>缺点：没有列映射</li>
                </ul>
                <pre><code class="language-js line-numbers">  module.exports = {
      ...
      mode: "development",
      devtool: "cheap-module-source-map",
  };</code></pre>
              </li>
              <li>
                生产模式：source-map
                <ul>
                  <li>优点：包含行/列映射</li>
                  <li>缺点：打包编译速度更慢</li>
                </ul>
                <pre><code class="language-js line-numbers">  module.exports = {
      // 其他省略
      mode: "production",
      devtool: "source-map",
  };</code></pre>
              </li>
            </ul>
          </li>
          <li>提升打包构建速度（只有开发模式下才能使用）</li>
          <li>
            HotModuleReplacement（HMR/热模块替换），在程序运行中替换添加或删除模块，而无需重新加载整个页面
            <pre><code class="language-js line-numbers">  // 方式1：自己配置（麻烦）
  **配置：webpack.dev.js
  module.exports = {
                           // 其他省略
  devServer: {
    host: "localhost",     // 启动服务器域名
    port: "3000",          // 启动服务器端口号
    open: true,            // 是否自动打开浏览器
    hot: true,             // 开启HMR功能（只能用于开发环境，生产环境不需要了），默认是开启的
  },
  };

  // 此时 css 样式经过 style-loader 处理，已经具备 HMR 功能了。但是js 还不行，js需要加以下判断条件

  **配置 project/src/main.js
  // 判断是否支持HMR功能
  if (module.hot) {
      module.hot.accept("./js/count.js", function(count){const result1 = count(2,1);console.log(result1);});
      module.hot.accept("./js/sum.js", function(sum){const result2 = sum(1,2,3,4);console.log(result2);});
  }
  // 简写模式，如果有其他处理，可以再写后面的函数
  if (module.hot) {
      module.hot.accept("./js/count.js");
      module.hot.accept("./js/sum.js");
  }

  **方式2：实际开发会使用其他loader来解决，比如vue-loader react-hot-loader</code></pre>
          </li>
          <li>
            OneOf 每个文件只能被其中一个loader配置处理
            <pre><code class="language-js line-numbers">  ....
  module.exports = {
      ...
      module: {
          rules: [
              {
                  oneOf: [       // 每个文件只能被其中一个loader配置处理
                      { test: /\.less$/,
                        use: ["style-loader", "css-loader", "less-loader"],
                      },
                      ...        // 其他loader也写在 oneOf:[] 里面
                  ],
              },
          ],}
  };

  // 生产模式也是如此配置。</code></pre>
          </li>
          <li>
            Include/Exclude
            <pre><code class="language-js line-numbers">  // 开发时我们需要使用第三方的库或插件，所有文件都下载到 node_modules 中了。
  // 而这些文件是不需要编译可以直接使用的。所以我们在对 js 文件处理时，要排除 node_modules 下面的文件。
  // include ------包含，只处理 xxx 文件
  // exclude ------排除，除了 xxx 文件以外其他文件都处理

  **配置：webpack.dev.js
  module.exports = {
      module: {
          ...
          rules: [
              {oneOf: [{test: /\.js$/,
                        // exclude: /node_modules/,   排除node_modules代码不编译
                        include: path.resolve(__dirname, "../src"), // 也可以用包含,只能用一种，两种用会报错
                        loader: "babel-loader",
                      },],},],
      },
      ...
      plugins: [
          new ESLintWebpackPlugin({
              context: path.resolve(__dirname, "../src"),
              exclude: "node_modules",    // 默认值，不写也会排除，但是只能用一种，两种用会报错，最好写一样的
          }),
      ],};

  //生产模式也是如此配置</code></pre>
          </li>
          <li>
            Cache 缓存
            <pre><code class="language-js line-numbers">  // 我们可以缓存之前的 Eslint 检查 和 Babel 编译结果，这样第二次打包时速度就会更快了。

  **配置：webpack.prod.js
  module.exports = {
  ...
  module: {
    rules: [
        { oneOf: [
                ...
                { test: /\.js$/,
                    include: path.resolve(__dirname, "../src"),
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,    // 开启babel编译缓存
                        cacheCompression: false, // 缓存文件不要压缩
                    },},],},],
  },
  ...
  plugins: [
    new ESLintWebpackPlugin({
        context: path.resolve(__dirname, "../src"),
        exclude: "node_modules",
        cache: true, // 开启缓存
        cacheLocation: path.resolve(__dirname,"../node_modules/.cache/.eslintcache"), // 缓存目录
    }),
  ],};

  // 开发模式也是一样</code></pre>
          </li>
          <li>
            Thead
            <pre><code class="language-js line-numbers">  npm i thread-loader -D
  // 多进程打包：开启电脑的多个进程同时干一件事，速度更快。
  // 需要注意：请仅在特别耗时的操作中使用，因为每个进程启动就有大约为 600ms 左右开销。

  **配置  project/webpack.prod.js
  const os = require("os");                                     // nodejs核心模块，直接使用
  ...
  const TerserPlugin = require("terser-webpack-plugin");        // 引入插件 压缩js
  const threads = os.cpus().length;                             // cpu核数
  ...
  module.exports = {
  ...
  module: {
      rules: [
          {
              oneOf: [
                  ...
                  {   test: /\.js$/,
                      exclude: /node_modules/,
                      use: [{ loader: "thread-loader",         // 开启多进程
                              options: { workers: threads },    // 数量
                            },
                            { loader: "babel-loader",
                              options: { cacheDirectory: true}, // 开启babel编译缓存
                            },
                      ],
                  },],},],
  },
  plugins: [
      new ESLintWebpackPlugin({
          ...
          threads,                                              // 开启多进程
      }),
      // new CssMinimizerPlugin(),  css压缩写在optimization配置下
  ],
  optimization: {
      minimizer: [
          // css压缩也可以写到optimization.minimizer里面，效果一样的
          new CssMinimizerPlugin(),
          // 当生产模式会默认开启TerserPlugin，但是我们需要进行其他配置，就要重新写了
          new TerserPlugin({
              parallel: threads,                               // 开启多进程
          }),
      ],
  },
  ...
  };

  // 开发模式也是一样的配置  ，但是开发模式不需要压缩，去掉optimization的配置</code></pre>
          </li>
          <li>
            减少代码体积
            <pre><code class="language-js line-numbers">  npm i @babel/plugin-transform-runtime -D
  // Tree Shaking 是一个术语，通常用于描述移除 JavaScript 中的没有使用上的代码。
  // Webpack 已经默认开启了这个功能，无需其他配置

  **配置  project/webpack.prod.js
  module.exports = {
  ...
  module: {
      rules: [
          { oneOf: [
                  ...
                  { test: /\.js$/,
                    include: path.resolve(__dirname, "../src"),
                    use: [
                        {
                            loader: "thread-loader",
                            options: {
                                works: threads,
                            },
                        },
                        {
                            loader: "babel-loader",
                            options: {
                               cacheDirectory: true,                         // 开启babel编译缓存
                               cacheCompression: false,                      // 缓存文件不要压缩
                               plugins: ["@babel/plugin-transform-runtime"], // 减少代码体积
                        }, },],},],},],
  },
  ...
  };

  // 生产开发都一样配置

  **配置 project/src/js/math.js
  export function add(x, y) {
      return x + y;
  }
  export function mul(x, y) {
      return x * y;
  }

  **配置 project/src/main.js
  import { mul } from "./js/math";
  console.log(mul(1, 2)); </code></pre>
          </li>
          <li>
            压缩图片
            <pre><code class="language-js line-numbers">  // 注意：如果项目中图片都是在线链接，那么就不需要了。本地项目静态图片才需要进行压缩。
  npm i image-minimizer-webpack-plugin imagemin -D

  // 无损压缩（下载慢出错的开翻墙，或者重复下载，推荐，有损无损二选一）
  npm install imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo -D

  // 有损压缩（下载慢出错的开翻墙，或者重复下载）
  npm install imagemin-gifsicle imagemin-mozjpeg imagemin-pngquant imagemin-svgo -D

  **配置  project/webpack.prod.js
  ...
  const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
  ...
  module.exports = {
      ...
      optimization: {
          minimizer: [
              ...
              // 压缩图片
              new ImageMinimizerPlugin({
                minimizer: {
                  implementation: ImageMinimizerPlugin.imageminGenerate,
                  options: {
                    plugins: [
                      ["gifsicle", { interlaced: true }],
                      ["jpegtran", { progressive: true }],
                      ["optipng", { optimizationLevel: 5 }],
                      ["svgo", { plugins: ["preset-default","prefixIds",
                            { name: "sortAttrs",params: { xmlnsOrder: "alphabetical"},
                            }, ], }, ], ],},},}),
          ], },
      ...
  };

  // 打包会出错，因为在node_modules\jpegtran-bin\vendor 下少了 jpegtran.exe和 optipng.exe,
  // 在课件中复制粘贴下 或者 开启科学上网正常下载，多下几次

  // 只需要配置生产模式，开发模式不需要</code></pre>
          </li>
          <li>
            优化代码运行性能
            <pre><code class="language-js line-numbers">  npm i webpack webpack-cli html-webpack-plugin -D
  /* Code Split（代码分割）主要做了两件事：
        分割文件：将打包生成的文件进行分割，生成多个 js 文件。
        按需加载：需要哪个文件就加载哪个文件。 */

  **多入口
      ├── public
      ├── src
      |   ├── app.js
      |   └── main.js
      ├── package.json
      └── webpack.config.js

  **新建文件,内容无所谓，只做测试
      app.js  { console.log("hello app"); }
      main.js { console.log("hello main");}

  **配置 project/webpack.config.js   修改的地方用/+-/ 提示
  module.exports = {
      // 单入口
      // entry: './src/main.js',
      // 多入口,就是在入口文件用对象形式写多个入口，main app 代表入口名称，值为路径
  /+/ entry: {
  /+/    main: "./src/main.js",
  /+/    app: "./src/app.js",
      },
      output: {
          path: path.resolve(__dirname, "./dist"),
          // [name]是webpack命名规则，使用chunk的name作为输出的文件名。
          // 什么是chunk？打包的资源就是chunk，输出出去叫bundle。
          // chunk的name是啥呢？ 比如： entry中xxx: "./src/xxx.js", name就是xxx。注意是前面的xxx，和文件名无关。
          // 为什么需要这样命名呢？如果还是之前写法main.js，那么打包生成两个js文件都会叫做main.js会发生覆盖。(实际上会直接报错的)
  /+/     filename: "js/[name].js",
          clear: true,
      },
      plugins: [new HtmlWebpackPlugin({ template: "./public/index.html", }),],
      mode: "production",
  };

  **多入口提取公共模块 ，新建一个公共的js,在其他js中都需要引入
  **配置：project/src/js/math.js
  export function sum(...arg) {
  return arg.reduce((p, c) => p + c, 0);
  }

  **配置：project/src/js/main.js
  import { sum } from "./math";
  console.log(sum(1, 2, 3, 4));

  **配置：project/src/js/home.js
  import { sum } from "./math";
  console.log(sum(1, 2, 3, 4));

  **配置 project/webpack.config.js
  ...
  module.exports = {
  ...
  mode: "production",
  /+/  optimization: {
          // 代码分割配置
  /+/      splitChunks: {
  /+/          chunks: "all", // 对所有模块都进行分割
               // 以下是默认值
               // minSize: 20000, // 分割代码最小的大小  20kb
               // minRemainingSize: 0, // 类似于minSize，最后确保提取的文件大小不能为0
               // minChunks: 1, // 至少被引用的次数，满足条件才会代码分割
               // maxAsyncRequests: 30, // 按需加载时并行加载的文件的最大数量
               // maxInitialRequests: 30, // 入口js文件最大并行请求数量
               // enforceSizeThreshold: 50000,
               // 超过50kb一定会单独打包（此时会忽略minRemainingSize、maxAsyncRequests、maxInitialRequests）
               // cacheGroups: { // 组，哪些模块要打包到一个组
               //   defaultVendors: { // 组名
               //     test: /[\\/]node_modules[\\/]/, // 需要打包到一起的模块
               //     priority: -10, // 权重（越大越高）
               //     reuseExistingChunk: true,
               // 如果当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用，而不是生成新的模块
               //   },
               //   default: { // 其他没有写的配置会使用上面的默认值
               //     minChunks: 2, // 这里的minChunks权重更大
               //     priority: -20,
               //     reuseExistingChunk: true,
               //   },
               // },

               // 修改配置，    这里是改写了配置，实际不需要修改配置，因为测试时体积太小了，不能打包
  /+/          cacheGroups: {
                  // 组，哪些模块要打包到一个组
                  // defaultVendors: { // 组名
                  //   test: /[\\/]node_modules[\\/]/, // 需要打包到一起的模块
                  //   priority: -10, // 权重（越大越高）
                  //   reuseExistingChunk: true,
                  // 如果当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用，而不是生成新的模块
                  // },
  /+/             default: {
                  // 其他没有写的配置会使用上面的默认值
  /+/                  minSize: 0, // 我们定义的文件体积太小了，所以要改打包的最小文件体积
  /+/                  minChunks: 2,
  /+/                  priority: -20,
  /+/                  reuseExistingChunk: true,
              },},},},
  };

  //会输出一个公共模块js文件    587.js   写引用的js中就会剔除重复相关js，打包到587.js里，最后调用

  **多入口按需加载
  **配置：project/src/js/count.js
  export default function count(x, y) {
      return x - y;
  }

  **配置：project/src/main.js   会生成一个新js文件，因为是默认暴露，所以需要调用res.default(实参)
  document.getElementById("btn").onclick = function () {
  import("./count")
      .then((res) => {
          console.log("模块加载成功", res.default(2, 1));
      })
      .catch((err) => {
          console.log("模块加载失败", err);
      });
  };

  **单入口：开发时我们可能是单页面应用（SPA），只有一个入口（单入口）。那么我们需要这样配置：
  **配置  project/config/webpack.prod.js
  const path = require("path");
  const HtmlWebpackPlugin = require("html-webpack-plugin");

  module.exports = {
        // 单入口
  /+/   entry: "./src/main.js",
        // 多入口
        // entry: {
        //   main: "./src/main.js",
        //   app: "./src/app.js",
        // },
        output: {
            path: path.resolve(__dirname, "./dist"),
            // [name]是webpack命名规则，使用chunk的name作为输出的文件名。
            // 什么是chunk？打包的资源就是chunk，输出出去叫bundle。
            // chunk的name是啥呢？ 比如： entry中xxx: "./src/xxx.js", name就是xxx。注意是前面的xxx，和文件名无关。
            // 为什么需要这样命名呢？如果还是之前写法main.js，那么打包生成两个js文件都会叫做main.js会发生覆盖。(实际上会直接报错的)
  /+/       filename: "js/[name].js",
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html",
            }),
        ],
        mode: "production",
        optimization: {
            // 代码分割配置
  /+/       splitChunks: {
  /+/           chunks: "all", // 对所有模块都进行分割
                // 以下是默认值
                // minSize: 20000, // 分割代码最小的大小
                // minRemainingSize: 0, // 类似于minSize，最后确保提取的文件大小不能为0
                // minChunks: 1, // 至少被引用的次数，满足条件才会代码分割
                // maxAsyncRequests: 30, // 按需加载时并行加载的文件的最大数量
                // maxInitialRequests: 30, // 入口js文件最大并行请求数量
                // enforceSizeThreshold: 50000,
                // 超过50kb一定会单独打包（此时会忽略minRemainingSize、maxAsyncRequests、maxInitialRequests）
                // cacheGroups: { // 组，哪些模块要打包到一个组
                //   defaultVendors: { // 组名
                //     test: /[\\/]node_modules[\\/]/, // 需要打包到一起的模块
                //     priority: -10, // 权重（越大越高）
                //     reuseExistingChunk: true,
                // 如果当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用，而不是生成新的模块
                //   },
                //   default: { // 其他没有写的配置会使用上面的默认值
                //     minChunks: 2, // 这里的minChunks权重更大
                //     priority: -20,
                //     reuseExistingChunk: true,
                //   },
                // },
            },},
  };

  **eslint会对动态导入语法报错，需要修改eslintrc配置文件
  **配置  project/.eslintrc.js
  module.exports = {
      ....
      plugins:["import"]
  }</code></pre>
          </li>
          <li>
            多入口给模块命名
            <pre><code class="language-js line-numbers">  **配置  project/src/main.js
  document.getElementById("btn").onClick = function () {
      // eslint会对动态导入语法报错，需要修改eslint配置文件
      // webpackChunkName: "math"：这是webpack动态导入模块命名的方式
      // "math"将来就会作为[name]的值显示。
      import(/* webpackChunkName: "math" */ "./common.js").then(({ count }) => {
          console.log(count(2, 1));
      });
  };

  **配置  project/src/main.js
  import(/* webpackChunkName: "common" */ "./common");
  // 引入模块，给模块命名，这样就会生成带 “命名”.chunk.js 的文件

  **配置  project/config/webpack.prod.js
  module.exports = {
      ...
      output: {
          chunkFilename:'static/js/[name].js',   // 给打包输出的其他文件命名
          assetModuleFilename: "static/media/[name].[hash][ext]",
      }
      ...
  }

  **多页面配置完整流程：配置  project/public
        ├── webpack-test (项目根目录)
            ├── config (Webpack配置文件目录)
                  └── webpack.dev.js(开发模式配置文件)
                  └── webpack.prod.js(生产模式配置文件)
            ├── node_modules (依赖包下载存放目录)
            ├── public
                    └── home.html
                    └── index.html
            ├── src (项目源码目录，除了html其他都在src里面)
                    └── fonts
                          └── iconfont.ttf
                    └── images
                          └── img.png
                    └──|| css  ||  less    (使用什么资源就写什么文件夹)
                          └── index.css
                          └── index.less    (使用什么资源文件夹就写什么文件)
                    └── sass
                          └── index.scss
                          └── style.scss
                    └── js
                          └── count.js
                          └── home.js
                          └── main.js
                          └── math.js

  **配置  project/config/webpack.prod.js
  ...
  module.exports = {
      entry: {
  1        home: "./src/js/home.js",
  1        main: "./src/js/main.js",
      },
      output: {
          path: path.resolve(__dirname, "../dist"),
  1        filename: "static/js/[name].js",
          chunkFilename: "static/js/[name].chunk.js",
          assetModuleFilename: "static/media/[hash:10][ext][query]",
          clean: true,
      },
      ...
      plugins: [
          ...
          new HtmlWebpackPlugin({
              title: "首页",
              template: path.resolve(__dirname, "../public/index.html"),
              filename: "index.html",
              chunks: ["main"],
          }),
          new HtmlWebpackPlugin({
              title: "首页2", // &lt;title&gt;&lt;/title&gt; 标签里的内容
              template: path.resolve(__dirname, "../public/home.html"),
              filename: "home.html",
              chunks: ["home"], // 按需加载,入口必须有配置
              // hash: true, //引入产出的资源时加上哈希避免缓存
              // inject: true, // 默认是false,如果是true的话会引入所有js
              // publicPath: "http://www.b.com/", 使用外链
          }),
          new MiniCssExtractPlugin({ filename: "static/css/[name].css",
              chunkFilename: "static/css/[name].chunk.css" }),
          ...
      ],
      optimization: {
          minimizer: [
              new CssMinimizerPlugin(),
              new TerserPlugin({
                  parallel: threads,
              }),
              new ImageMinimizerPlugin({
                  minimizer: {
                      implementation: ImageMinimizerPlugin.imageminGenerate,
                      options: {
                          plugins: [
                              ["gifsicle", { interlaced: true }],
                              ["jpegtran", { progressive: true }],
                              ["optipng", { optimizationLevel: 5 }],
                              ["svgo",{
                                      plugins: [
                                          "preset-default",
                                          "prefixIds",
                                          {
                                              name: "sortAttrs",
                                              params: {
                                                  xmlnsOrder: "alphabetical",
                                              },},],}, ],], }, },}),
          ],
          runtimeChunk: {name: (entrypoint) => `runtime~${entrypoint.name}`,},
          splitChunks: {chunks: "all",// 默认是公共部分代码必须超过20kb才会被打包进来，可以通过修改默认配置来解决
          },
      },
      mode: "production",
      devtool: "source-map",
  };
  // 如果有多个html则再new ,写好配置输出的  filename

  **配置  project/src/js/math.js
  export function sum(...args) {
      return args.reduce((p, c) => p + c, 0);
  }

  **配置  project/src/js/main.js
  import "../css/index.css";
  import "../sass/index.scss";
  import "../css/iconfont.css";
  // import(/* webpackChunkName: "common" */ "./common");

  import { sum } from "./math";
  console.log(sum(1, 2, 3));

  document.getElementById("btn").onclick = function () {
      import(/* webpackChunkName: "math"*/ "./math").then(({ sum }) => {
          console.log(sum(3, 3));
      });
  };

  **配置  project/src/js/home.js
  import "../css/style.css";
  // import(/* webpackChunkName: "common" */ "./common");

  import { sum } from "./math";
  console.log(sum(1, 2, 3, 4));
  // import count from "./count";
  // document.getElementById("btn").onclick = function () {
  //     console.log(count(2, 1));
  // };

  // 引入
  document.getElementById("btn").onclick = function () {
      import(/* webpackChunkName: "math"*/ "./math").then(({ sum }) => {
          console.log(sum(3, 3));
      });
      // import(/* webpackChunkName: "math", webpackPrefetch: true */ "./math").then(({ sum }) => {
      //     console.log(mul(3, 3));
      // });
  };

  **配置  project/src/js/count.js
  export default function count(x, y) {
      return x - y;
  }</code></pre>
          </li>
          <li>
            统一命名
            <pre><code class="language-js line-numbers">  **配置  project/config/webpack.prod.js
  ...
  module.exports = {
      ...
      output: {
          path: path.resolve(__dirname, "../dist"), // 生产模式需要输出
          filename: "static/js/[name].js", // 入口文件打包输出资源命名方式
  /+/     chunkFilename: "static/js/[name].chunk.js", // 动态导入输出资源命名方式
  /+/     assetModuleFilename: "static/media/[hash:10][ext][query]", // 图片、字体等资源命名方式（注意用hash）
          clean: true,
      },
      module: {
          rules: [
              {
                  oneOf: [
                      ...
                      { test: /\.(png|jpe?g|gif|svg)$/, type: "asset",
                          parser: {dataUrlCondition: {
                                  maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
                              },},
  /+/                     // generator: {
  /+/                     //   // 将图片文件输出到 static/imgs 目录中
  /+/                     //   // 将图片文件命名 [hash:8][ext][query]
  /+/                     //   // [hash:8]: hash值取8位
  /+/                     //   // [ext]: 使用之前的文件扩展名
  /+/                     //   // [query]: 添加之前的query参数
  /+/                     //   filename: "static/imgs/[hash:8][ext][query]",
  /+/                     // },
                      },{test: /\.(ttf|woff2?|map3|map4|avi)$/,type: "asset/resource",
  /+/                     // generator: {
  /+/                     //   filename: "static/media/[hash:8][ext][query]",
  /+/                     // },
                      },],},],},
      plugins: [
          ...
          // 提取css成单独文件
          new MiniCssExtractPlugin({
              // 定义输出文件名和目录
  /+/         filename: "static/css/[name].css",
  /+/         chunkFilename: "static/css/[name].chunk.css", // 动态导入的话会生成chunk.css
          }),
      ],
      ...
  };

  // 开发一样的配置,没有用到的就不用写</code></pre>
          </li>
          <li>
            Preload Prefetch
            <pre><code class="language-js line-numbers">  npm i @vue/preload-webpack-plugin -D
  // Preload：告诉浏览器立即加载资源。     Prefetch：告诉浏览器在空闲时才开始加载资源。
  // 注意：Preload 相对于 Prefetch 兼容性好一点。

  **配置  project/webpack.prod.js
  const PreloadWebpackPlugin = require("@vue/preload-webpack-plugin");
  ...
  module.exports = {
          entry: "./src/main.js",
          output: {
              path: path.resolve(__dirname, "../dist"), // 生产模式需要输出
              filename: "static/js/[name].js", // 入口文件打包输出资源命名方式
              chunkFilename: "static/js/[name].chunk.js", // 动态导入输出资源命名方式
              assetModuleFilename: "static/media/[hash:10][ext][query]", // 图片、字体等资源命名方式（注意用hash）
              clean: true,
      },
      module: {
            ...
            plugins: [
                new PreloadWebpackPlugin({
                    rel: "preload", // preload兼容性更好
                    as: "script",
                    // rel: 'prefetch' // prefetch兼容性更差,且没有as配置和标签，直接写rel就可以了
                }),
            ],
          ...
      }
  }</code></pre>
          </li>
          <li>
            解决缓存问题 NetWork Cache
            <pre><code class="language-js line-numbers">  **配置  project/config/webpack.prod.js
  module.exports = {
      ...
      output: {
        path: path.resolve(__dirname, "../dist"), // 生产模式需要输出
        // [contenthash:8]使用contenthash，取8位长度
        filename: "static/js/[name].[contenthash:8].js", // 入口文件打包输出资源命名方式
        chunkFilename: "static/js/[name].[contenthash:8].chunk.js", // 动态导入输出资源命名方式
        assetModuleFilename: "static/media/[name].[hash][ext]", // 图片、字体等资源命名方式（注意用hash）
        clean: true,
      },
      plugins: [
          new MiniCssExtractPlugin({
              filename: "static/css/[name].[contenthash:8].css",
              chunkFilename: "static/css/[name].[contenthash:8].chunk.css",
          }),
      ],
      optimization: {
          ...
          runtimeChunk: {
              name: (entrypoint) => `runtime~${entrypoint.name}.js`, // runtime命名规则
          }
      }
  }</code></pre>
          </li>
          <li>
            解决js兼容性问题
            <pre><code class="language-js line-numbers">  npm i @babel/eslint-parser -D

**编写  project/src/main.js
...
// 添加promise代码
const promise = Promise.resolve();
    promise.then(() => {
    console.log("hello promise");
});

**配置  project/.eslintrc.js
module.exports = {
    ...
    parser: "@babel/eslint-parser", // 支持最新的最终 ECMAScript 标准
    ...
};

// 执行打包命令 npm run build</code></pre>
          </li>
          <li>
            安装core
            <pre><code class="language-js line-numbers">  npm i core-js

  **手动全部引入   project/src/main.js
  import "core-js";
  // 这样引入会将所有兼容性代码全部引入，体积太大了。我们只想引入 promise 的 polyfill

  **手动按需引入   project/src/main.js
  import "core-js/es/promise";
  // 只引入打包 promise 的 polyfill，打包体积更小。但是将来如果还想使用其他语法，我需要手动引入库很麻烦。

  **自动按需引入   project/src/main.js  不添加引入
  **配置          babel.config.js
  module.exports = {
      presets: [                    // 智能预设：能够编译ES6语法
          [
              "@babel/preset-env",  // 按需加载core-js的polyfill
              { useBuiltIns: "usage", corejs: { version: "3", proposals: true } },
          ],
      ],
  };</code></pre>
          </li>
          <li>
            PWA（只配置在生产环境，开发环境不配置）
            <pre><code class="language-js line-numbers">  npm i workbox-webpack-plugin -D
  // 渐进式网络应用程序(progressive web application - PWA)：
  // 是一种可以提供类似于 native app(原生应用程序) 体验的 Web App 的技术。
  // 其中最重要的是，在 离线(offline) 时应用程序能够继续运行功能。

  **配置  project/webpack.prod.js
  ...
  const WorkboxPlugin = require("workbox-webpack-plugin");
  ...
  module.exports = {
      ...
      plugins: [
          ...
          new WorkboxPlugin.GenerateSW({
              clientsClaim: true,  // 这些选项帮助快速启用 ServiceWorkers
              skipWaiting: true,   // 不允许遗留任何“旧的” ServiceWorkers
          }),
      ],
      ...
      mode: "production",
  };

  **配置  project/src/main.js
  if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
      navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
              console.log("SW registered: ", registration);
          })
          .catch((registrationError) => {
              console.log("SW registration failed: ", registrationError);
          });
  });
  }

  **执行打包命令 npm run build
  // 此时如果直接通过 VSCode 访问打包后页面，在浏览器控制台会发现 SW registration failed。
  // 因为我们打开的访问路径是：http://127.0.0.1:5500/dist/index.html。
  // 此时页面会去请求 service-worker.js 文件，请求路径是：http://127.0.0.1:5500/service-worker.js，这样找不到会 404。
  // 实际 service-worker.js 文件路径是：http://127.0.0.1:5500/dist/service-worker.js。
  // 解决路径问题：

  **安装      npm i serve -g  serve   （也是用来启动开发服务器来部署代码查看效果的。）
  **运行指令   serve dist              （此时通过 serve 启动的服务器我们 service-worker 就能注册成功了。）</code></pre>
          </li>
          <li>
            总结:从 4 个角度对 webpack 和代码进行了优化
            <ul>
              <li>
                1. 提升开发体验： 使用 Source Map
                让开发或上线时代码报错能有更加准确的错误提示
              </li>
              <li>
                2. 提升 webpack 提升打包构建速度，使用 HotModuleReplacement
                让开发时只重新编译打包更新变化了的代码，不变的代码使用缓存，从而使更新速度更快
                <ul>
                  <li>
                    使用 OneOf 让资源文件一旦被某个 loader
                    处理了，就不会继续遍历了，打包速度更快。
                  </li>
                  <li>
                    使用 Include/Exclude
                    排除或只检测某些文件，处理的文件更少，速度更快。
                  </li>
                  <li>
                    使用 Cache 对 eslint 和 babel
                    处理的结果进行缓存，让第二次打包速度更快。
                  </li>
                  <li>
                    使用 Thead 多进程处理 eslint 和 babel
                    任务，速度更快。（需要注意的是，进程启动通信都有开销的，要在比较多代码处理时使用才有效果）
                  </li>
                </ul>
              </li>
              <li>
                3. 减少代码体积
                <ul>
                  <li>
                    使用 Tree Shaking 剔除了没有使用的多余代码，让代码体积更小。
                  </li>
                  <li>
                    使用 @babel/plugin-transform-runtime 插件对 babel
                    进行处理，让辅助代码从中引入，而不是每个文
                  </li>
                  <li>件都生成辅助代码，从而体积更小。</li>
                  <li>
                    使用 Image Minimizer
                    对项目中图片进行压缩，体积更小，请求速度更快。
                  </li>
                  <li>
                    （需要注意的是，如果项目中图片都是在线链接，那么就不需要了。本地项目静态图片才需要进行压缩。）
                  </li>
                </ul>
              </li>
              <li>
                4. 优化代码运行性能
                <ul>
                  <li>
                    使用 Code Split 对代码进行分割成多个 js
                    文件，从而使单个文件体积更小，并行加载 js 速度更快。
                  </li>
                  <li>
                    并通过 import
                    动态导入语法进行按需加载，从而达到需要使用时才加载该资源，不用时不加载资源。
                  </li>
                  <li>
                    使用 Preload / Prefetch
                    对代码进行提前加载，等未来需要使用时就能直接使用，从而用户体验更好。
                  </li>
                  <li>
                    使用 Network Cache
                    能对输出资源文件进行更好的命名，将来好做缓存，从而用户体验更好。
                  </li>
                  <li>
                    使用 Core-js 对 js
                    进行兼容性处理，让我们代码能运行在低版本浏览器。
                  </li>
                  <li>使用 PWA 能让代码离线也能访问，从而提升用户体验。</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            其他可选优化
            <pre><code class="language-js line-numbers">  **分析打包路径哪个文件比较大
  npm add --dev webpack-bundle-analyzer

  **在webpack.config.js中配置
  const BundleAnalyzerPlugin = require("Webpack-bundle-analyzer");  // 引入插件

  module.exports = {
      plugins: [
          new HtmlWebpackPlugin({
              title: "Hello word", // 传递title 标题参数
          }),
          new BundleAnalyzerPlugin.BundleAnalyzerPlugin(),   // 使用插件
      ],
  };

  // npx webpack  运行后会打开网页后有一个可视化的界面，看到文件那个大</code></pre>
          </li>
        </ul>
      </el-card>
      <el-card id="part5" shadow="hover">
        <h2>其他</h2>
        <p>案例：隔行变色</p>
        <ul>
          <li>
            1. 新建项目空白目录，并运行npm init-y命令，初始化包管理配置文件
            package.json
          </li>
          <li>2. 新建src源代码目录</li>
          <li>3. 新建src->index.html首页和src->index.js脚本文件</li>
          <li>4. 初始化首页基本的结构</li>
          <li>5. 运行npm install jquery -S命令，安装jQuery</li>
          <li>
            6. 通过ES6模块化的方式导入jQuery，实现列表隔行变色效果
            <pre><code class="language-js line-numbers">  // 1、使用ES6导入语法，导入jQuery
  import $ from 'jquery'
  // 2、定义jQuery的入口函数
  $(function () {
      $('li:odd').css('background-color','red')
      $('li:even').css('background-color','blue')
  })</code></pre>
          </li>
        </ul>
        <p>技巧</p>
        <pre><code class="language-js line-numbers">  // 技巧1
  // 每个页面都需要flexible.js 文件，需以下配置
  // 安装lib-flexible：npm i lib-flexible --save-dev
  // 在webpack配置文件中引入lib-flexible：import 'lib-flexible/flexible.js'
  // 在webpack配置文件中添加px2rem-loader，如下所示：
  {
      test: /\.css$/,
      use: [
          'style-loader',
          'css-loader',
          {
                loader: 'px2rem-loader',
                options: {
                    remUnit: 75
                }
          }
      ]
  }

  // 技巧2
  **使用了框架iframe,把public/iframeFile文件夹也输出需要的配置
  npm install glob --save-dev

  const glob = require("glob");
  const htmlFiles = glob.sync("./public/iframeFile/*.html");
  plugin:[
      ...htmlFiles.map(file => {
          const filename = path.basename(file);
          return new HtmlWebpackPlugin({
              template: file,
              filename: path.join("iframeFile", filename),
              chunks: ["iframeJs"],          // 指定使用的入口文件
          });
      }),
  ]

  /*
    报错 WARNING in asset size limit: The following asset(s) exceed the recommended s 原因：
        使用webpack4打包时，运行npm run build:结果报错，提示npm run build: WARNING in asset size limit: The following asset(s) exceed the recommended size limit。
        提示入口文件过大，超过了默认值，查找原因后找到如下的解决方案：
            webpack打包后的生成文件和入口文件体积过大，超过了默认值。
            将入口文件和资源文件最大值调大就不会报错了，或者使用：
            将hints设为false，为关闭性能提示
  */
  // 方式1
  performance: { hints:false }

  // 方式2
  performance:{
      hints: "warning",                  // 枚举
      maxAssetSize: 30000000,            // 整数类型（以字节为单位）
      maxEntrypointSize: 50000000,       // 整数类型（以字节为单位）
      assetFilter: function (assetFilename) {
          // 提供资源文件名的断言函数
          return assetFilename.endsWith(".css") || assetFilename.endsWith(".js");
      }
  },

  /* 技巧3
      每个页面都需要flexible.js 文件，需以下配置
          安装lib-flexible：npm i lib-flexible --save-dev
          在webpack配置文件中引入lib-flexible：import 'lib-flexible/flexible.js'
          在webpack配置文件中添加px2rem-loader，如下所示： */
  {
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'px2rem-loader',
        options: {
          remUnit: 75
        }
      }
    ]
  }

  // 技巧4 使用了框架iframe,把public/iframeFile文件夹也输出需要的配置
  npm install glob --save-dev

  const glob = require("glob");
  const htmlFiles = glob.sync("./public/iframeFile/*.html");
  plugin:[
      ...htmlFiles.map(file => {
          const filename = path.basename(file);
          return new HtmlWebpackPlugin({
              template: file,
              filename: path.join("iframeFile", filename),
              chunks: ["iframeJs"], // 指定使用的入口文件
          });
      }),
  ]</code></pre>
      </el-card>
    </template>
  </card-container>
</template>

<script setup lang="ts" name="Webpack">
import { ref } from "vue";

const data = ref([
  { id: 1, h2: "使用步骤" },
  { id: 2, h2: "开发模式" },
  { id: 3, h2: "生产模式" },
  { id: 4, h2: "优化" },
  { id: 3, h2: "其他" },
]);
</script>

<style scoped lang="scss"></style>
