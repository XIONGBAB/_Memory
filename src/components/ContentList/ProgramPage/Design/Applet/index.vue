<template>
  <card-container :data="data">
    <template #svg>
      <svg
        t="1737705187916"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1485"
        width="48"
        height="48"
      >
        <path
          d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z m256.717 460.186a151.962 151.962 0 0 1-87.347 65.74 83.251 83.251 0 0 1-24.474 4.096 29.082 29.082 0 0 1 0-58.163 15.667 15.667 0 0 0 6.451-1.229 91.443 91.443 0 0 0 55.91-40.96 75.264 75.264 0 0 0 11.06-39.628c0-45.978-42.496-83.866-94.31-83.866a105.267 105.267 0 0 0-51.2 13.414 81.92 81.92 0 0 0-43.725 70.452v244.224a138.445 138.445 0 0 1-72.704 120.422 159.642 159.642 0 0 1-79.77 20.48c-84.378 0-153.6-63.488-153.6-142.029a136.192 136.192 0 0 1 19.763-69.837 151.962 151.962 0 0 1 87.347-65.74 85.914 85.914 0 0 1 24.474-4.096 29.082 29.082 0 1 1 0 58.163 15.667 15.667 0 0 0-6.451 1.229 95.949 95.949 0 0 0-55.91 40.96 75.264 75.264 0 0 0-11.06 39.628c0 45.978 42.496 83.866 94.925 83.866a105.267 105.267 0 0 0 51.2-13.414 81.92 81.92 0 0 0 43.622-70.452V390.35a138.752 138.752 0 0 1 72.807-120.525 151.245 151.245 0 0 1 79.155-21.504c84.378 0 153.6 63.488 153.6 142.029a136.192 136.192 0 0 1-19.763 69.837z"
          fill="#00B240"
          p-id="1486"
        />
      </svg>
      <h1>Applet</h1>
    </template>
    <template #describe>
      <p>
        小程序是一种轻量级的应用程序，它可以在手机等移动设备上运行，且无需用户下载安装即可使用。特点与优势有即用即走、快速加载、无缝切换、跨平台复用、多入口接入、节省空间。
      </p>
    </template>
    <template #content>
      <el-card id="part1" shadow="hover">
        <h2>小程序</h2>
        <p>小程序与普通网页开发的区别</p>
        <ul>
          <li>
            运行环境不同
            <ul>
              <li>网页运行在浏览器环境中</li>
              <li>小程序运行在微信环境中</li>
            </ul>
          </li>
          <li>
            API不同
            <ul>
              <li>由于运行环境的不同，所以小程序中，无法调用DOM和BOM的API。</li>
              <li>
                但是，小程序中可以调用微信环境提供的各种API，例如：地理定位、扫码、支付
              </li>
            </ul>
          </li>
          <li>
            开发模式不同
            <ul>
              <li>网页的开发模式：浏览器+代码编辑器</li>
              <li>
                小程序有自己的一套标准开发模式：申请小程序开发账号、安装小程序开发者工具、创建和配置小程序项目
              </li>
            </ul>
          </li>
        </ul>
        <p>体验小程序</p>
        <ul>
          <li>微信添加：小程序官方组件展示，可以看到相关组件的说明</li>
        </ul>
        <p>小程序实操</p>
        <ul>
          <li>
            微信添加：小程序官方组件展示，可以看到相关组件的说明
            <ul>
              <li>
                使用浏览器打开 https://mp.weixin.qq.com/
                网址，点击右上角的“立即注册”即可进入到小程序开发账号的注册流程
              </li>
              <li>获取小程序的AppID: AppID(小程序ID)wx82ae3692392a70a</li>
            </ul>
          </li>
          <li>
            安装开发者工具
            <ul>
              <li>
                微信开发者工具是官方推荐使用的小程序开发工具，它提供的主要功能如下：
              </li>
              <li>
                下载：推荐下载和安装最新的稳定版（Stable
                Build）的微信开发者工具，下载页面的链接如下：
                <el-link
                  type="primary"
                  icon="Link"
                  target="_blank"
                  href="https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html"
                >
                  https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html
                </el-link>
                默认安装即可，打开后登录
              </li>
            </ul>
          </li>
          <li>
            开发者工具设置
            <ul>
              <li>主题色在设置里面，调成浅色</li>
              <li>代理方式调整为 不使用任何代理选项</li>
            </ul>
          </li>
          <li>
            创建小程序
            <ul>
              <li>
                小程序 =&gt; 加号 =&gt; 新建项目 =&gt; 输入项目名称，输入ID
                不是用云服务，语言选js
              </li>
              <li>
                需要预览可以在模拟器上预览，点击编译后即可，如果需要真机上显示，则点击预览后扫二维码
              </li>
            </ul>
          </li>
        </ul>
        <p>主界面5个组成部分</p>
        <ul>
          <li>
            菜单栏常用
            <ul>
              <li>帮助 =&gt; 开发者文档</li>
              <li>设置 =&gt; 通用设置</li>
              <li>工具 =&gt; 构建npm</li>
            </ul>
          </li>
          <li>
            工具栏常用
            <ul>
              <li>编译</li>
              <li>预览</li>
              <li>常用iphone 6 7 8 机型，不建议使用 5</li>
            </ul>
          </li>
          <li>模拟器</li>
          <li>代码编辑区</li>
          <li>调试区</li>
        </ul>
        <p>项目结构</p>
        <ul>
          <li>pages用来存放所有小程序的页面</li>
          <li>utils用来存放工具性质的模块（例如：格式化时间的自定义模块）</li>
          <li>app.js小程序项目的入口文件</li>
          <li>app.json小程序项目的全局配置文件</li>
          <li>app.wxss小程序项目的全局样式文件</li>
          <li>project.config.json项目的配置文件</li>
          <li>sitemap.json 用来配置小程序及其页面是否允许被微信索引</li>
        </ul>
        <p>页面的组成部分</p>
        <ul>
          <li>
            小程序官方建议把所有小程序的页面，都存放在pages目录中，以单独的文件夹存在
            其中，每个页面由4个基本文件组成，它们分别是：
            <ul>
              <li>
                .js文件（页面的脚本文件，存放页面的数据、事件处理函数等），处理业务逻辑
              </li>
              <li>.json文件（当前页面的配置文件，配置窗口的外观、表现等）</li>
              <li>.wxml文件（页面的模板结构文件），写标签，UI</li>
              <li>.wxss文件（当前页面的样式表文件）</li>
            </ul>
          </li>
        </ul>
      </el-card>
      <el-card id="part2" shadow="hover">
        <h2>小程序步骤</h2>

        <p>json配置文件的作用</p>
        <ul>
          <li>
            JSON是一种数据格式，在实际开发中，JSON总是以配置文件的形式出现。小程序项目中也不例外,通过不同的.json配置文件，可以对小程序项目进行不同级别的配置
          </li>
          <li>
            小程序项目中有4种json配置文件，分别是：
            <ul>
              <li>
                项目根目录中的app.json配置文件
                <ul>
                  <li>
                    app.json
                    是当前小程序的全局配置，包括了小程序的所有页面路径、窗口外观、界面表现、底部tab等
                  </li>
                  <li>
                    Demo项目里边的app.json配置内容如下：
                    <pre><code class="language-js line-numbers">  {
    "pages": [     // 用来记录当前小程序所有页面的路径
        "pages/index/index",
        "pages/logs/logs"
    ],
    "window": {    // 全局定义小程序所有页面的背景色、文字颜色等，窗口表现
        "backgroundTextStyle": "light",
        "navigationBarBackgroundColor": "#fff",
        "navigationBarTitleText": "Weixin",
        "navigationBarTextStyle": "black"
    },
    "style": "v2", // 全局定义小程序组件所使用的样式版本
    "sitemapLocation": "sitemap.json"   // 用来指明 sitemap.json的位置
  }</code></pre>
                  </li>
                </ul>
              </li>
              <li>
                项目根目录中的project.config.json配置文件
                <ul>
                  <li>
                    project.config.json是项目配置文件，用来记录我们对小程序开发工具所做的个性化配置，例如：
                  </li>
                </ul>
                <pre><code class="language-js line-numbers">  {
    "description": "项目配置文件",
    "packOptions": {
        "ignore": [{
            "type": "file",
            "value": ".eslintrc.js"
        }]
    },
    "setting": {    // setting 中保存了编译相关的配置
        "bundle": false,
        "userConfirmedBundleSwitch": false,
        "urlCheck": true,
        "scopeDataCheck": false,
        "coverView": true,
        "es6": true,
        "postcss": true,
        "compileHotReLoad": true,
        "lazyloadPlaceholderEnable": false,
        "preloadBackgroundData": false,
        "minified": true,
        "autoAudits": false,
        "newFeature": false,
        "uglifyFileName": false,
        "uploadWithSourceMap": true,
        "useIsolateContext": true,
        "nodeModules": false,
        "enhance": true,
        "useMultiFrameRuntime": true,
        "useApiHook": true,
        "useApiHostProcess": true,
        "showShadowRootInWxmlPanel": true,
        "packNpmManually": false,
        "enableEngineNative": false,
        "packNpmRelationList": [],
        "minifyWXSS": true,
        "showES6CompileOption": false,
        "minifyWXML": true
    },
    "compileType": "miniprogram",
    "libVersion": "2.19.4",
    "appid": "wx82ae3692392a70af",  // appid中保存的是小程序的帐号ID
    "projectname": "mp_01",   // projectname中保存的是项目名称
    "debugOptions": {
        "hidedInDevtools": []
    },
    "scripts": {},
    "staticServerOptions": {
        "baseURL": "",
        "servePath": ""
    },
    "isGameTourist": false,
    "condition": {
        "search": {
            "list": []
        },
        "conversation": {
            "list": []
        },
        "game": {
            "list": []
        },
        "plugin": {
            "list": []
        },
        "gamePlugin": {
            "list": []
        },
        "miniprogram": {
            "list": []
        }
    }
  }</code></pre>
              </li>
              <li>
                项目根目录中的sitemap.json配置文件
                <ul>
                  <li>
                    微信现已开放小程序内搜索，效果类似于PC网页的SEO。sitemap.json文件用来配置小程序页面是否允许微信索引。
                  </li>
                  <li>
                    当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面内容建立索引。
                  </li>
                  <li>
                    当用户的搜索关键字和页面的索引匹配成功的时候，小程序的页面将可能展示在搜索结果中
                    <pre><code class="language-js line-numbers">  {
    "desc": "关于本文件的更多信息，请参考文档 <el-link type="primary" icon="Link" target="_blank" href="https://developers.weixin.qq.com/miniprogram/dev/framework/sitemap.html">https://developers.weixin.qq.com/miniprogram/dev/framework/sitemap.html</el-link>",
    "rules": [{
        "action": "allow",   // 都允许被索引，如果不允许则改成 disallow
        "page": "*"   // 代表所有的界面都会被搜索
    }]
  }</code></pre>
                  </li>
                  <li>
                    注意：sitemap的索引提示是默认开启的，如需要关闭
                    sitemap的索引提示，可在小程序项目配置文件
                  </li>
                  <li>
                    project.config.json的 setting 中配置字段
                    checkSiteMap为false，这样输出的地方就不会有这个黄色警告
                  </li>
                </ul>
              </li>
              <li>
                每个页面文件夹中的.json 配置文件
                <ul>
                  <li>
                    小程序中的每一个页面，可以使用.json
                    文件来对本页面的窗口外观进行配置，页面中的配置项会覆盖
                  </li>
                  <li>
                    app.json的window中相同的配置项。页面会覆盖全局，就近原则
                    <pre><code class="language-js line-numbers">  {
    "usingComponents": {},
    "navigationBarBackgroundColor": "#ccc"   // 改变顶部区域颜色
  }</code></pre>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p>新建小程序页面</p>
        <pre><code class="language-js line-numbers">  // 只需要在 app.json -> pages 中新增页面的存放路径，小程序开发者工具即可帮我们自动创建对应的页面文件，如：
  {
    "pages": [
        "pages/index/index",
        "pages/logs/logs",
        "pages/list/list"   // 新增
    ],
    "window": {
        "backgroundTextStyle": "light",
        "navigationBarBackgroundColor": "#fff",
        "navigationBarTitleText": "Weixin",
        "navigationBarTextStyle": "black"
    },
    "style": "v2",
    "sitemapLocation": "sitemap.json"
  }
          </code></pre>
        <p>修改项目首页</p>
        <ul>
          <li>
            只需要调整 app.json -> pages
            数组中页面路径的前后顺序，即可修改项目的首页。小程序会把排在第一位的页面，
          </li>
          <li>
            当作项目首页进行渲染，如图所示：
            <pre><code class="language-js line-numbers">  {
  "pages": [
      "pages/list/list",    // 默认第一个为首页
      "pages/index/index",
      "pages/logs/logs"
  ],
  "window": {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTitleText": "Weixin",
      "navigationBarTextStyle": "black"
  },
  "style": "v2",
  "sitemapLocation": "sitemap.json"
  }</code></pre>
          </li>
        </ul>
      </el-card>
      <el-card id="part3" shadow="hover">
        <h2>语法</h2>

        <p>WXML</p>
        <ul>
          <li>
            WXML（Weixin Markup
            Language）是小程序框架设计的一套标签语言，用来构建小程序页面的结构，其作用类似于网页开发中的HTML。
          </li>
          <li>
            与HTML的不同之处：
            <ul>
              <li>
                标签名称不同
                <ul>
                  <li>HTML( div, span, img, a )</li>
                  <li>WXML(view, text, image, navigator)</li>
                </ul>
              </li>
              <li>
                属性节点不同
                <ul>
                  <li>&lt;a&gt; href="#"&gt;超链接&lt;/a&gt;</li>
                  <li>
                    &lt;navigator&gt;
                    url="/pages/home/home"&gt;&lt;/navigator&gt;
                  </li>
                </ul>
              </li>
              <li>
                提供了类似于Vue中的模版语法
                <ul>
                  <li>数据绑定</li>
                  <li>列表渲染</li>
                  <li>条件渲染</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p>WXSS</p>
        <ul>
          <li>
            WXSS（Weixin Style
            Sheets）是一套样式语言，用于描述WXML的组件样式，类似于网页开发中的CSS。
          </li>
          <li>
            与CSS的不同之处：
            <ul>
              <li>
                新增了 rpx 尺寸单位
                <ul>
                  <li>
                    CSS中需要手动进行像素单位换算，例如rem
                    WXSS在底层支持新的尺寸单位rpx，在不同大小的屏幕上小程序会自动进行换算
                  </li>
                </ul>
              </li>
              <li>
                提供了全局的样式和局部样式
                <ul>
                  <li>项目根目录中的 app.wxss 会作用于所有小程序页面</li>
                  <li>局部页面的.wxss样式仅对当前页面生效</li>
                </ul>
              </li>
              <li>
                WXSS仅支持部分CSS选择器
                <ul>
                  <li>.class 和#id</li>
                  <li>element</li>
                  <li>并集选择器、后代选择器</li>
                  <li>：after和：：before等伪类选择器</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p>js</p>
        <ul>
          <li>
            一个项目仅仅提供界面展示是不够的，在小程序中，我们通过，js文件来处理用户的操作。
          </li>
          <li>
            例如：响应用户的点击、获取用户的位置等等
            <ul>
              <li>
                app.js
                <ul>
                  <li>
                    是整个小程序项目的入口文件，通过调用App（）函数来启动整个小程序
                  </li>
                </ul>
              </li>
              <li>
                页面的.js 文件
                <ul>
                  <li>
                    是页面的入口文件，通过调用Page（）函数来创建并运行页面通的.js文件
                  </li>
                </ul>
              </li>
              <li>
                普通的 js
                <ul>
                  <li>
                    是普通的功能模块文件，用来封装公共的函数或属性供页面使用
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p>宿主环境</p>
        <ul>
          <li>
            宿主环境（host environment）指的是程序运行所必须的依赖环境。例如：
            <ul>
              <li>
                Android
                系统和iOS系统是两个不同的宿主环境。安卓版的微信App是不能在iOS环境下运行的，所以，
                Android是安卓软件的宿主环境，脱离了宿主环境的软件是没有任何意义的！
              </li>
              <li>
                手机微信是小程序的宿主环境。
                <ul>
                  <li>
                    小程序借助宿主环境提供的能力，可以完成许多普通网页无法完成的功能，例如：微信扫码、微信支付、微信登录、地理定位、etc...
                  </li>
                </ul>
              </li>
              <li>
                小程序宿主环境包含的内容
                <ul>
                  <li>通信模型</li>
                  <li>运行机制</li>
                  <li>组件</li>
                  <li>API</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p>通信主体</p>
        <ul>
          <li>
            小程序中通信的主体是渲染层和逻辑层，其中：
            <ul>
              <li>WXML模板和WXSS样式工作在渲染层</li>
              <li>JS脚本工作在逻辑层</li>
            </ul>
          </li>
          <li>
            小程序中通信模型氛围两部分
            <ul>
              <li>
                渲染层和逻辑层之间的通信
                <ul>
                  <li>由微信客户端进行转发</li>
                </ul>
              </li>
              <li>
                逻辑层和第三方服务器之间的通信
                <ul>
                  <li>由微信客户端进行转发</li>
                </ul>
              </li>
              <li>JS脚本工作在逻辑层</li>
            </ul>
          </li>
        </ul>
        <p>js运行机制</p>
        <ul>
          <li>
            小程序启动的过程
            <ul>
              <li>把小程序的代码包下载到本地</li>
              <li>解析 app.json 全局配置文件</li>
              <li>执行app.js小程序入口文件，调用App（）创建小程序实例</li>
              <li>渲染小程序首页</li>
              <li>小程序启动完成</li>
            </ul>
          </li>
        </ul>
        <p>页面渲染的过程</p>
        <ul>
          <li>加载解析页面的.json配置文件</li>
          <li>加载页面的.wxml模板和.wxss样式</li>
          <li>执行页面的.js文件，调用Page（）创建页面实例</li>
          <li>页面渲染完成</li>
        </ul>
        <p>小程序中的组件分类</p>
        <ul>
          <li>
            小程序中的组件也是由宿主环境提供的，开发者可以基于组件快速搭建出漂亮的页面结构。
          </li>
          <li>
            官方把小程序的件分为了9大类，分别是：
            <ul>
              <li>
                视图容器
                <ul>
                  <li>
                    view：
                    <ul>
                      <li>普通视图区域</li>
                      <li>类似于HTML中的div，是一个块级元素</li>
                      <li>常用来实现页面的布局效果</li>
                      <li>使用：</li>
                    </ul>
                    <pre><code class="language-html line-numbers">  &lt;!--pages/list/list.wxml--&gt;
  &lt;view class="container"&gt;
      &lt;view&gt;A&lt;/view&gt;
      &lt;view&gt;B&lt;/view&gt;
      &lt;view&gt;C&lt;/view&gt;
  &lt;/view&gt;

  /* pages/list/list.wxss */
  .container view{width: 100px;height: 100px;text-align: center;line-height: 100px;}
  .container view:nth-child(1){background-color: aquamarine;}
  .container view:nth-child(2){background-color: rgb(148, 255, 127);}
  .container view:nth-child(3){background-color: rgb(255, 236, 127);}
  .container {display: flex;}</code></pre>
                  </li>
                  <li>
                    scroll-view：
                    <ul>
                      <li>可滚动的视图区域</li>
                      <li>常用来实现滚动列表效果</li>
                      <li>使用：</li>
                    </ul>
                    <pre><code class="language-html line-numbers">  &lt;!--pages/list/list.wxml--&gt;
  &lt;scroll-view class="container" scroll-y&gt;
      &lt;view&gt;A&lt;/view&gt;
      &lt;view&gt;B&lt;/view&gt;
      &lt;view&gt;C&lt;/view&gt;
  &lt;/scroll-view&gt;

  /* pages/list/list.wxss */
  .container view{ width: 100px;height: 100px;text-align: center;line-height: 100px;}
  .container view:nth-child(1){background-color: aquamarine;}
  .container view:nth-child(2){background-color: rgb(148, 255, 127);}
  .container view:nth-child(3){background-color: rgb(255, 236, 127);}
  .container {border: 1px solid red;width: 100px;height: 100px;}</code></pre>
                  </li>
                  <li>
                    swiper 和 swiper-item：
                    <ul>
                      <li>轮播图容器组件和轮播图item组件</li>
                    </ul>
                    <pre><code class="language-html line-numbers">  &lt;!--pages/list/list.wxml--&gt;
  &lt;swiper class="swiper-wrap" indicator-dots&gt;
      &lt;swiper-item&gt;  &lt;!-- 轮播图项目 --&gt;
        &lt;view&gt; class="item"&gt;A&lt;/view&gt;   &lt;!-- 一般是用图片，演示用的是文字和背景 --&gt;
      &lt;/swiper-item&gt;
      &lt;swiper-item&gt;
        &lt;view&gt; class="item"&gt;B&lt;/view&gt;
      &lt;/swiper-item&gt;
      &lt;swiper-item&gt;
        &lt;view&gt; class="item"&gt;C&lt;/view&gt;
      &lt;/swiper-item&gt;
  &lt;/swiper&gt;

  /* pages/list/list.wxss */
  .swiper-wrap {height: 150px;}
  .item {height: 100%;line-height: 150px;text-align: center;}
  swiper-item:nth-child(1) view {background-color: aquamarine;}
  swiper-item:nth-child(2) view {background-color: rgb(223, 206, 57);}
  swiper-item:nth-child(3) view {background-color: rgb(90, 48, 241);}</code></pre>
                  </li>
                  <li>
                    swiper组件的额常用属性：
                    <table>
                      <tbody>
                        <tr>
                          <th>属性</th>
                          <th>类型</th>
                          <th>默认值</th>
                          <th>说明</th>
                        </tr>
                        <tr>
                          <td>indicator-dots</td>
                          <td>boolean</td>
                          <td>false</td>
                          <td>是否显示面板指示点</td>
                        </tr>
                        <tr>
                          <td>indicator-color</td>
                          <td>color</td>
                          <td>rgba</td>
                          <td>指示点颜色</td>
                        </tr>
                        <tr>
                          <td>indicator-active-color</td>
                          <td>color</td>
                          <td>#000000</td>
                          <td>当前选中的指示点颜色</td>
                        </tr>
                        <tr>
                          <td>autoplay</td>
                          <td>boolean</td>
                          <td>false</td>
                          <td>是否自动切换</td>
                        </tr>

                        <tr>
                          <td>interval</td>
                          <td>number</td>
                          <td>5000毫秒</td>
                          <td>自动切换时间间隔</td>
                        </tr>
                        <tr>
                          <td>circular</td>
                          <td>boolean</td>
                          <td>false</td>
                          <td>是否采用衔接滑动</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                </ul>
              </li>
              <li>
                基础内容
                <ul>
                  <li>
                    text：
                    <ul>
                      <li>文本组件</li>
                      <li>类似于HTML中的span标签，是一个行内元素</li>
                      <li>
                        通过text组件的selectable属性，实现长按选中文本内容的效果(只有text才支持长按复制)：
                      </li>
                    </ul>
                    <pre><code class="language-html line-numbers">  &lt;!--pages/list/list.wxml--&gt;
  &lt;view&gt;手机号为：&lt;text selectable&gt;13850984526&lt;/text&gt;&lt;/view&gt;</code></pre>
                  </li>
                  <li>
                    rich-text：
                    <ul>
                      <li>富文本组件</li>
                      <li>支持把HTML字符串渲染为WXML结构</li>
                      <li>
                        通过rich-text组件的nodes属性节点，把HTML字符串渲染为对应的Ul结构（常用于服务器传过来详情页标签）：
                      </li>
                    </ul>
                    <pre><code class="language-html line-numbers">  &lt;rich-text nodes="&lt;div&gt; style='font-size:30px'&gt;我被转化换了&lt;/div&gt;"&gt;&lt;/rich-text&gt;</code></pre>
                  </li>
                  <li>
                    button：
                    <ul>
                      <li>按钮组件</li>
                      <li>功能比HTML中的button按钮丰富</li>
                      <li>
                        通过open-type属性可以调用微信提供的各种功能（客服、转发、获取用户授权、获取用户信息等）
                      </li>
                    </ul>
                    <pre><code class="language-html line-numbers">  &lt;!--pages/list/list.wxml--&gt;
  &lt;button&gt;普通按钮&lt;/button&gt;
  &lt;button type="primary"&gt;主色调按钮&lt;/button&gt;
  &lt;button type="warn"&gt;警告按钮&lt;/button&gt;
  &lt;button disabled&gt;禁用按钮&lt;/button&gt;

  &lt;button type="primary" size="mini"&gt;较小按钮&lt;/button&gt;
  &lt;button type="warn" size="mini" plain&gt;镂空按钮&lt;/button&gt;</code></pre>
                  </li>
                  <li>
                    image：
                    <ul>
                      <li>图片组件</li>
                      <li>image组件默认宽度约300px、高度约240px</li>
                      <li>
                        image
                        组件的mode属性用来指定图片的裁剪和缩放模式，常用的mode属性值如下：
                      </li>
                    </ul>
                    <table>
                      <tbody>
                        <tr>
                          <th>mode值</th>
                          <th>说明</th>
                        </tr>
                        <tr>
                          <td>scaleToFill</td>
                          <td>
                            （默认值）缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满image元素
                          </td>
                        </tr>
                        <tr>
                          <td>aspectFit</td>
                          <td>
                            缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。
                          </td>
                        </tr>
                        <tr>
                          <td>aspectFill</td>
                          <td>
                            缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。
                          </td>
                        </tr>
                        <tr>
                          <td>widthFix</td>
                          <td>缩放模式，宽度不变，高度自动变化，保持原图宽</td>
                        </tr>
                        <tr>
                          <td>heighFix</td>
                          <td>
                            缩放模式，高度不变，宽度自动变化，保持原图宽高比不变
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <pre><code class="language-html line-numbers">  &lt;!--pages/list/list.wxml--&gt;
  &lt;image&gt;&lt;/image&gt;
  &lt;image&gt; src="/images/banner.jpg" mode="aspectFill"&gt;&lt;/image&gt;</code></pre>
                  </li>
                  <li>
                    navigator( 常用，后续会讲)：
                    <ul>
                      <li>页面导航组件</li>
                      <li>类似于HTML中的a链接</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>表单组件</li>
              <li>导航组件</li>
              <li>媒体组件</li>
              <li>map地图组件</li>
              <li>canvas 画布组件</li>
              <li>开放能力</li>
              <li>无障碍访问</li>
            </ul>
          </li>
        </ul>
        <p>小程序API概述</p>
        <ul>
          <li>
            小程序中的API是由宿主环境提供的，通过这些丰富的小程序APl，开发者可以方便的调用微信提
            供的能力，例如：获取用户信息、本地存储、支付功能等。
          </li>
          <li>
            小程序官方把API分为了如下3大类：
            <ul>
              <li>
                事件监听API
                <ul>
                  <li>特点：以on开头，用来 监听某些事件的触发</li>
                  <li>
                    举例：wx.onWindowResize（function
                    callback）监听窗口尺寸变化的事件 wx相当于于window 顶级对象
                  </li>
                </ul>
              </li>
              <li>
                同步API
                <ul>
                  <li>特点1：以Sync结尾的API都是同步API</li>
                  <li>
                    特点2：同步APl的执行结果，可以通过函数返回值直接获取，如果执行出错会抛出异常
                  </li>
                  <li>
                    举例：wx.setStorageSync（'key'，value'）向本地存储中写入内容
                  </li>
                </ul>
              </li>
              <li>
                异步API
                <ul>
                  <li>
                    特点：类似于jQuery中的$.ajax（options）函数，需要通过
                    success、fail、complete 接收调用的结果
                  </li>
                  <li>
                    举例：wx.request（）发起网络数据请求，通过success
                    回调函数接收数据
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p>协同工作</p>
        <ul>
          <li>
            在中大型的公司里，人员的分工非常仔细：同一个小程序项目，一般会有不同岗位、不同角色的员工
            同时参与设计与开发。
          </li>
          <li>
            此时出于管理需要，我们迫切需要对不同岗位、不同角色的员工的权限进行边界的划分，使他们能够
            高效的进行协同工作。
          </li>
          <li>
            提出需求-产品组 =&gt; 设计-设计组 =&gt; 开发-开发组 =&gt;
            体验-产品组-设计组 =&gt; 测试-测试组 =&gt; 发布
          </li>
          <li>
            小程序成员管理体现在管理员对小程序项目成员及体验成员的管理：
            <ul>
              <li>管理员权限最高，可以添加成员和删除成员</li>
              <li>
                项目成员：
                <ul>
                  <li>表示参与小程序开发、运营的成员</li>
                  <li>可登录小程序管理后台</li>
                  <li>管理员可以添加、删除项目成员，并设置项目成员的角色</li>
                </ul>
              </li>
              <li>
                体验成员：
                <ul>
                  <li>表示参与小程序内测体验的成员</li>
                  <li>可使用体验版小程序，但不属于项目成员</li>
                  <li>管理员及项目成员均可添加、删除体验成员</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            不同项目成员对应的权限
            <table>
              <tbody>
                <tr>
                  <th>权限</th>
                  <th>运营者</th>
                  <th>开发者</th>
                  <th>数据分析者</th>
                </tr>
                <tr>
                  <td>开发权限</td>
                  <td></td>
                  <td>√</td>
                  <td></td>
                </tr>
                <tr>
                  <td>体验者权限</td>
                  <td>√</td>
                  <td>√</td>
                  <td>√</td>
                </tr>
                <tr>
                  <td>登录权限</td>
                  <td>√</td>
                  <td>√</td>
                  <td>√</td>
                </tr>
                <tr>
                  <td>数据分析</td>
                  <td></td>
                  <td></td>
                  <td>√</td>
                </tr>
                <tr>
                  <td>微信支付</td>
                  <td>√</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>推广</td>
                  <td>√</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>开发管理</td>
                  <td>√</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>开发设置</td>
                  <td></td>
                  <td>√</td>
                  <td></td>
                </tr>
                <tr>
                  <td>暂停服务</td>
                  <td>√</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>解除关联公众号</td>
                  <td>√</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>腾讯云管理</td>
                  <td></td>
                  <td>√</td>
                  <td></td>
                </tr>
                <tr>
                  <td>小程序插件</td>
                  <td>√</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>游戏运营管理</td>
                  <td>√</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <ul>
              <li>
                不同项目成员对应的权限 说明
                <ul>
                  <li>
                    开发者权限：可使用小程序开发者工具及对小程序的功能进行代码开发
                  </li>
                  <li>体验者权限：可使用体验版小程序</li>
                  <li>登录权限：可登录小程序管理后台，无需管理员确认</li>
                  <li>
                    开发设置：设置小程序服务器域名、消息推送及扫描普通链接二维码打开小程序
                  </li>
                  <li>腾讯云管理：云开发相关设置</li>
                </ul>
              </li>
              <li>
                添加项目成员和体验成员:
                <ul>
                  <li>登录小程序 => 里面的管理有个成员管理</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p>小程序的版本</p>
        <ul>
          <li>
            在软件开发过程中，根据时间节点的不同，会产出不同的软件版本，例如：
            <ul>
              <li>开发者编写代码的同时，对项目代码进行自测（开发版本）</li>
              <li>
                直到程序达到一个稳定可体验的状态时，开发者把体验版本给到产品经理和测试人员进行体验测试
              </li>
              <li>最后修复完程序的Bug后，发布正式版供外部用户使用</li>
            </ul>
            <table>
              <tbody>
                <tr>
                  <th>版本阶段</th>
                  <th>说明</th>
                </tr>
                <tr>
                  <td>开发版本</td>
                  <td>
                    使用开发者工具，可将代码上传到开发版本中。开发版本只保留每人最新的一份上传的代码。点击提交审核，可将代码提交审核。开发版本可删除，不影响线上版本和审核中版本的代码。
                  </td>
                </tr>
                <tr>
                  <td>体验版本</td>
                  <td>可以选择某个开发版本作为体验版，并且选取一份体验版。</td>
                </tr>
                <tr>
                  <td>审核中的版本</td>
                  <td>
                    只能有一份代码处于审核中。有审核结果后可以发布到线上，也可直接重新提交审核，覆盖原审核版本。
                  </td>
                </tr>
                <tr>
                  <td>线上版本</td>
                  <td>
                    线上所有用户使用的代码版本，该版本代码在新版本代码发布后被覆盖更新。
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            小程序的发布上线，一般要经过 上传代码 -> 提交审核 ->
            发布这三个步骤。
            <ul>
              <li>1. 点击开发者工具顶部工具栏中的“上传”按钮</li>
              <li>2. 填写版本号以及项目备注</li>
              <li>
                3. 在后台查看上传之后的版本
                <ul>
                  <li>
                    登录小程序 管理后台 -> 管理 -> 版本管理 ->
                    开发版本，即可查看刚才提交上传的版本了
                  </li>
                </ul>
              </li>
              <li>
                4.
                为什么需要提交审核：为了保证小程序的质量，以及符合相关的规范，小程序的发布是需要经过腾讯官方审核的。
                <ul>
                  <li>
                    提交审核的方式：在开发版本的列表中，点击“提交审核”按钮之后，按照页面提示填写相关的信息，就能把小程
                    序提交到腾讯官方进行审核。
                  </li>
                </ul>
              </li>
              <li>
                5、审核通过之后，管理员的微信中会收到小程序通过审核的通知，此时在审核版本的列表中，点击“发布”按钮
                之后，即可把“审核通过”的版本发布为“线上版本”，供所有小程序用户访问和使用。
              </li>
              <li>
                6、推广：相对于普通二维码来说，小程序码的优势如下：
                <ul>
                  <li>在样式上更具辨识度和视觉冲击力</li>
                  <li>能够更加清晰地树立小程序的品牌形象</li>
                  <li>
                    可以帮助开发者更好地推广小程序
                    <ul>
                      <li>获取小程序码的5个步骤：</li>
                      <li>
                        登录小程序管理后台->设置->基本设置->基本信息->小程序码及线下物料下载
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p>运营数据</p>
        <ul>
          <li>
            1. 在“小程序后台”查看运营数据
            <ul>
              <li>登录小程序管理后台</li>
              <li>点击侧边栏的“统计"</li>
              <li>点击相应的tab可以看到相关的数据</li>
            </ul>
          </li>
          <li>
            2. 使用“小程序数据助手”查看运营数据
            <ul>
              <li>打开微信</li>
              <li>搜索“小程序数据助手”</li>
              <li>查看已发布的小程序相关的数据</li>
            </ul>
          </li>
        </ul>
        <p>小程序的模板与配置</p>
        <ul>
          <li>能够使用WXML模板语法渲染页面结构</li>
          <li>能够使用WXSS样式美化页面结构</li>
          <li>能够使用app.json 对小程序进行全局性配置</li>
          <li>能够使用page.json 对小程序页面进行个性化配置</li>
          <li>能够知道如何发起网络数据请求</li>
        </ul>
        <p>WXML模板语法</p>
        <ul>
          <li>
            数据绑定的基本原则:
            <ul>
              <li>
                1. 在data中定义数据
                <ul>
                  <li>在页面对应的，js文件中，把数据定义到data对象中即可：</li>
                </ul>
                <pre><code class="language-js line-numbers">  // pages/list/list.js
  Page(｛
    /* 页面的初始数据*/
    data: {
        info:'hello'
    },)｝</code></pre>
              </li>
              <li>
                2. 在WXML中使用数据
                <ul>
                  <li>
                    Mustache 语法的格式：
                    <ul>
                      <li>
                        把data中的数据绑定到页面中渲染，使用Mustache
                        语法（双大括号）将变量包起来即可。语法格式为：
                      </li>
                    </ul>
                    <pre><code class="language-js line-numbers">  &lt;!--pages/list/list.wxml--&gt;
  &lt;view&gt;｛｛ info ｝｝&lt;/view&gt;   // Vue中的插值表达式 就是Mustache 语法</code></pre>
                  </li>
                  <li>
                    Mustache 语法的应用场景： 绑定内容
                    <ul>
                      <li>上面1 2 中演示的就是动态绑定内容</li>
                    </ul>
                  </li>
                  <li>
                    绑定属性
                    <pre><code class="language-js line-numbers">  &lt;!--pages/list/list.wxml--&gt;
  &lt;view&gt;｛｛ info ｝｝&lt;/view&gt;
  &lt;image&gt; src="｛｛ imgSrc ｝｝" mode="widthFix"&gt;&lt;/image&gt;

  // pages/list/list.js
  Page（｛
      /* 页面的初始数据 */
      data: {
          info:'hello',
          imgSrc: '/images/banner.jpg'
      },</code></pre>
                  </li>
                  <li>
                    运算（三元运算、算术运算等）
                    <pre><code class="language-js line-numbers">  &lt;!--pages/list/list.wxml--&gt;
  &lt;view&gt;｛｛ info ｝｝&lt;/view&gt;
  &lt;view&gt;｛｛ randomNum1 &gt;= 5 ? '随机数大于5' : '随机数小于5' ｝｝&lt;/view&gt;    // 三元运算符
  &lt;view&gt;生成100以内的随机｛｛ randomNum2 * 100 ｝｝&lt;/view&gt;                // 算术运算

  // pages/list/list.js
  Page（｛
      /* 页面的初始数据*/
      data: {
          randomNum1: Math.random() * 10,   //  生成一个 0 - 10 的随机数
          randomNum2: Math.random().toFixed(2) // 生成一个带两位小数的随机数
      },</code></pre>
                  </li>
                  <li>
                    注意，如果需要看变量的数据，可以在调试器（F12控制台），AppData中查看
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            事件绑定：
            <ul>
              <li>
                事件是渲染层到逻辑层的通讯方式。通过事件可以将用户在渲染层产生的行为，反馈到逻辑层进行业务的处理。
                <table>
                  <tbody>
                    <tr>
                      <th>常用事件类型</th>
                      <th>绑定</th>
                      <th>事件描述</th>
                    </tr>
                    <tr>
                      <td>tap</td>
                      <td>bindTap 或 bind:tap</td>
                      <td>手触摸后马上离开，类似click事件</td>
                    </tr>
                    <tr>
                      <td>input</td>
                      <td>bindInput 或 bind:input</td>
                      <td>文本框的输入事件</td>
                    </tr>
                    <tr>
                      <td>change</td>
                      <td>bindChange 或 bind:change</td>
                      <td>状态改变时触发</td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>
                bindTap的语法格式：
                <ul>
                  <li>
                    在小程序中，不存在HTML中的onclick鼠标点击事件，而是通过tap事件来响应用户的触摸行为。
                  </li>
                  <li>
                    通过bindTap，可以为组件绑定tap触摸事件，语法如下：
                    <pre><code class="language-html line-numbers">  &lt;!--pages/list/list.wxml--&gt;
  &lt;button&gt; type="primary" bindtap="btnTapHandler"&gt;按钮&lt;/button&gt;</code></pre>
                  </li>
                  <li>
                    在页面的js文件中定义对应的事件处理函数，事件参数通过形参event（一般简写成e）来接收：
                    <pre><code class="language-js line-numbers">  // pages/list/list.js
  Page（｛
    /* 页面的初始数据 */
    data: {
    },
    btnTapHandler(e){    // 与data同级，定义事件处理函数，自定义处理函数名
        console.log(e);
    },</code></pre>
                  </li>
                </ul>
              </li>
              <li>
                在事件处理函数中为data中的数据赋值
                <ul>
                  <li>
                    通过调用this.setData(dataObject)
                    方法，可以给页面data中的数据重新赋值，示例如下：
                  </li>
                </ul>
                <pre><code class="language-js line-numbers">  &lt;!--pages/list/list.wxml--&gt;
  &lt;button type="primary" bindtap="countChange"&gt;+1&lt;/button&gt;

  // pages/list/list.js
  Page（｛
      /* 页面的初始数据 */
      data: {
          count: 0
      },
      countChange() {
          this.setData({
              count: this.data.count + 1  // 需要给谁赋值，就把data数据里的变量拿过来，调用this.setData()方法
          })
      },</code></pre>
              </li>
            </ul>
          </li>
          <li>
            事件对象的属性列表：
            <ul>
              <li>
                当事件回调触发的时候，会收到一个事件对象event，它的详细属性如下表所示：
                <table>
                  <tbody>
                    <tr>
                      <th>属性</th>
                      <th>类型</th>
                      <th>说明</th>
                    </tr>
                    <tr>
                      <td>type</td>
                      <td>string</td>
                      <td>事件类型</td>
                    </tr>
                    <tr>
                      <td>timeStamp</td>
                      <td>integer</td>
                      <td>页面打开到触发事件所经过的毫秒数</td>
                    </tr>
                    <tr>
                      <td>target</td>
                      <td>Object</td>
                      <td>触发事件的组件的一些属性值集合</td>
                    </tr>
                    <tr>
                      <td>currentTarget</td>
                      <td>Object</td>
                      <td>当前组件的一些属性值集合</td>
                    </tr>
                    <tr>
                      <td>detail</td>
                      <td>Object</td>
                      <td>额外的信息</td>
                    </tr>
                    <tr>
                      <td>touches</td>
                      <td>Array</td>
                      <td>触摸事件，当前停留在屏幕中的触摸点信息的数组</td>
                    </tr>
                    <tr>
                      <td>changedTouches</td>
                      <td>Array</td>
                      <td>触摸事件，当前变化的触摸点信息的数组</td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>
                target (常用)和 currentTarget的区别
                <ul>
                  <li>
                    target是触发该事件的源头组件，而currentTarget则是当前事件所绑定的组件。举例如下：
                  </li>
                  <li>
                    点击内部的按钮时，点击事件以冒泡的方式向外扩散，也会触发外层view的tap事件处理函数。
                  </li>
                  <li>
                    此时，对于外层的view来说：
                    <ul>
                      <li>
                        e.target指向的是触发事件的源头组件，因此，e.target是内部的按钮组件
                        button
                      </li>
                      <li>
                        e.currentTarget
                        指向的是当前正在触发事件的那个组件，因此，e.currentTarget是当前的view组件
                      </li>
                    </ul>
                    <pre><code class="language-html line-numbers">  &lt;view class="outer-view" bindtap="outerHandler"&gt;
      &lt;button&gt; type="primary"&gt;按钮&lt;/button&gt;
  &lt;/view&gt;</code></pre>
                  </li>
                </ul>
              </li>
              <li>
                事件传参
                <ul>
                  <li>
                    小程序中的事件传参比较特殊，不能在绑定事件的同时为事件处理函数传递参数。
                  </li>
                  <li>
                    例如，下面的代码将不能正常工祚：
                    <pre><code class="language-html line-numbers">  &lt;button type="primary" bindtap="countChange(123)"&gt;+1&lt;/button&gt;  &lt;!-- 这种是错误的写法 --&gt;

  // 因为小程序会把bindtap的属性值，统一当作事件名称来处理，相当于要调用一个名称为btnHandler(123)的事件处理函数。</code></pre>
                  </li>
                </ul>
              </li>
              <li>
                解决方法：
                <ul>
                  <li>
                    可以为组件提供data-*自定义属性传参，其中*代表的是参数的名字，示例代码如下：
                  </li>
                </ul>
                <pre><code class="language-js line-numbers">  &lt;!--pages/list/list.wxml--&gt;
  &lt;button&gt; bindtap="countChange" data-info="｛｛ 123 ｝｝"&gt;+1&lt;/button&gt; </code></pre>
              </li>
              <li>
                最终：
                <ul>
                  <li>info 会被解析为参数的名字</li>
                  <li>数值123会被解析为参数的值</li>
                  <li>
                    在事件处理函数中，通过event.target.dataset.参数名即可获取到具体参数的值，示例代码如下：
                    <pre><code class="language-js line-numbers">  &lt;!--pages/list/list.wxml--&gt;
  &lt;button&gt; bindtap="countChange" data-info="｛｛ 123 ｝｝"&gt;+1&lt;/button&gt;   // ｛｛ 里面是转换为数字，如果不这样写是字符串｝｝

  // pages/list/list.js
  Page（｛
      data: {
          count: 0
      },
      countChange(e) {
          console.log(e.target.dataset);
          console.log(e.target.dataset.info);
          this.setData({
            count: this.data.count + e.target.dataset.info // 这里就会按传递的参数进行增加，前面写法固定，名字自取
          });
      },</code></pre>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            bindInput的语法格式：
            <ul>
              <li>
                在小程序中，通过input事件来响应文本框的输入事件，语法格式如下：
                <ul>
                  <li>
                    通过bindInput，可以为文本框绑定输入事件：
                    <pre><code class="language-html line-numbers">  &lt;!--pages/list/list.wxml--&gt;
  &lt;input bindinput="inputFunction"&gt;+1&lt;/input&gt;   </code></pre>
                  </li>
                  <li>
                    在页面的.js文件中定义事件处理函数：
                    <pre><code class="language-js line-numbers">  // pages/list/list.js
Page（｛
    data: {
    },
    inputFunction(e){
       console.log(e.detail.value);  // e.detail.value 是文本框变化过后，最新的值
    },</code></pre>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            实现文本框和data之间的数据同步实现步骤：
            <pre><code class="language-js line-numbers">  // 1、定义数据
  // pages/list/list.js
  Page（｛
      data: {
          msg: '定义数据'
      },

  // 2、渲染结构
  &lt;!--pages/list/list.wxml--&gt;
  &lt;input value="｛｛ msg ｝｝" bindinput="inputFunction"&gt;&lt;/input&gt;

  //3、美化样式
  /* pages/list/list.wxss */
  input{
      border: 1px solid #eee;
      padding: 5px;
      margin: 5px;
      border-radius: 3px;
  }

  // 4、绑定input事件处理函数
  // pages/list/list.js
  Page（｛
      data: {
          msg: '定义数据'
      },
      inputFunction(e){
          this.setData({
            msg: e.detail.value  // 通过e.detail.value 获取到文本框最新的值
          })
      },</code></pre>
          </li>
          <li>
            条件渲染：
            <ul>
              <li>
                wx:if
                <ul>
                  <li>
                    在小程序中，使用wx:if="｛｛ condition
                    ｝｝"来判断是否需要渲染该代码块：
                    <pre><code class="language-js line-numbers">  &lt;!--pages/list/list.wxml--&gt;
  &lt;view wx:if="｛｛ condition ｝｝"&gt; 如果插值为真，则会被渲染 &lt;/view&gt;

  // pages/list/list.js
  Page（｛
      data: {
          condition: false
      },</code></pre>
                  </li>
                  <li>
                    也可以用wx:elif 和wx:else来添加else判断：
                    <pre><code class="language-html line-numbers">  &lt;!--pages/list/list.wxml--&gt;
  &lt;view wx:if="｛｛ type === 1 ｝｝"&gt; 男 &lt;/view&gt;
  &lt;view wx:elif="｛｛ type === 2 ｝｝"&gt; 女 &lt;/view&gt;
  &lt;view wx:else="｛｛ type === 2 ｝｝"&gt; 保密 &lt;/view&gt;

  // pages/list/list.js
  Page（｛
      data: {
          type: 1   // 此处为判断值
      },</code></pre>
                  </li>
                </ul>
              </li>
              <li>
                结合&lt;block&gt;使用wx:if
                <ul>
                  <li>
                    如果要一次性控制多个组件的展示与隐藏，可以使用一个 &lt;block
                    /&gt; 标签将多个组件包装起来，
                  </li>
                  <li>
                    并在block>标签上使用wx:if控制属性，示例如下：
                    <pre><code class="language-html line-numbers">  &lt;!--pages/list/list.wxml--&gt;
  &lt;block wx:if="｛｛ true ｝｝"&gt;  &lt;!-- true 会显示， false会隐藏 --&gt;
      &lt;view&gt;view 1&lt;/view&gt;
      &lt;view&gt;view 2&lt;/view&gt;
      &lt;view&gt;view 3&lt;/view&gt;
  &lt;/block&gt;</code></pre>
                  </li>
                  <li>
                    注意：&lt;block&gt;并不是一个组件，它只是一个包裹性质的容器，不会在页面中做任何渲染。
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            hidden的使用：
            <ul>
              <li>
                在小程序中，直接使用hidden="{condition}"也能控制元素的显示与隐藏：
                <pre><code class="language-html line-numbers">  &lt;!--pages/list/list.wxml--&gt;
  &lt;view&gt; hidden="｛｛ false ｝｝"&gt; 条件为true 会隐藏，条件为false 会显示&lt;/view&gt;</code></pre>
              </li>
            </ul>
          </li>
          <li>
            wx:if 和hidden 的对比：
            <ul>
              <li>
                运行方式不同
                <ul>
                  <li>wx:if以动态创建和移除元素的方式，控制元素的展示与隐藏</li>
                  <li>
                    hidden
                    以切换样式的方式（display:none/block；），控制元素的显示与隐藏
                  </li>
                </ul>
              </li>
              <li>
                使用建议
                <ul>
                  <li>频繁切换时，建议使用hidden</li>
                  <li>
                    控制条件复杂时，建议使用wx:if
                    搭配wx:elif、wx:else进行展示与隐藏的切换
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            列表渲染：
            <ul>
              <li>
                wx:for
                <ul>
                  <li>
                    通过wx:for可以根据指定的数组，循环渲染重复的组件结构，语法示例如下：
                    <pre><code class="language-html line-numbers">  &lt;!--pages/list/list.wxml--&gt;
  &lt;view wx:for="｛｛ array ｝｝"&gt;
      索引是：｛｛ index ｝｝ 当前项是｛｛ item ｝｝  &lt;/view&gt;

  // pages/list/list.js
  Page({
      data: {
          array: [1,2,3,4,5,6]
      },</code></pre>
                  </li>
                  <li>
                    默认情况下，当前循环项的索引用index表示；当前循环项用item表示。
                  </li>
                  <li>
                    手动指定索引和当前项的变量名*（了解即可，可使用默认名）：
                    <ul>
                      <li>
                        使用wx:for-index可以指定当前循环项的索引的变量名（默认是用index为索引名，这里可以在for后面
                        - 改名）
                      </li>
                      <li>
                        使用wx:for-item可以指定当前项的变量名
                        <pre><code class="language-html line-numbers">  &lt;!--pages/list/list.wxml--&gt;
  &lt;view&gt; wx:for="（｛ array ｝｝"  wx:for-index="idx123" wx:for-item="itm123"&gt;
      索引是：（｛ idx123 ｝｝ 当前项是（｛ itm123 ｝｝
  &lt;/view&gt;</code></pre>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                wx:Key 的使用
                <ul>
                  <li>
                    类似于Vue列表渲染中的：key，小程序在实现列表渲染时，也建议为渲染出来的列表项指定唯一的
                  </li>
                  <li>
                    key值，从而提高渲染的效率，示例代码如下：
                    <pre><code class="language-html line-numbers">  &lt;!--pages/list/list.wxml--&gt;
  &lt;view&gt; wx:for="｛｛ userList ｝｝" wx:key="id"&gt;｛｛ item.name ｝｝&lt;/view&gt;

  // pages/list/list.js
  Page（｛
      data: {
          userList:[{id:1, name: '小白'},
              {id:2, name: '小红'},
              {id:3, name: '小莲'}]
      },</code></pre>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p>WXSS模板样式</p>
        <ul>
          <li>
            WXSS（WeiXin Style
            Sheets）是一套样式语言，用于美化WXML的组件样式，类似于网页开发中的CSS。
          </li>
          <li>
            WXSS和CSS的关系
            <ul>
              <li>
                WXSS具有CSS大部分特性，同时，WXSS还对CSS进行了扩充以及修改，以适应微信小程序的开发。
              </li>
              <li>
                与CSS相比，WXSS扩展的特性有：
                <ul>
                  <li>
                    rpx尺寸单位
                    <ul>
                      <li>
                        rpx（responsive
                        pixel）是微信小程序独有的，用来解决屏适配的尺寸单位。
                      </li>
                      <li>
                        rpx的实现原理非常简单：鉴于不同设备屏幕的大小不同，为了实现屏幕的自动适配，
                        rpx把所有设备的屏幕，在宽度上等分为750份（即：当前屏幕的总宽度为750rpx）。
                      </li>
                      <li>在较小的设备上，1rpx所代表的宽度较小</li>
                      <li>在较大的设备上，1rpx所代表的宽度较大</li>
                      <li>
                        小程序在不同设备上运行的时候，会自动把rpx的样式单位换算成对应的像素单位来渲染，
                        从而实现屏幕适配。
                      </li>
                    </ul>
                  </li>
                  <li>
                    rpx与px之间的单位换算*
                    <ul>
                      <li>
                        在iPhone6上，屏幕宽度为375px，共有750个物理像素，等分为750rpx。则：
                        750rpx=375px=750物理像素 （两倍关系，1px = 2rpx
                        2个物理像素点） 1rpx=0.5px=1物理像素
                      </li>
                      <li>
                        官方建议：开发微信小程序时，设计师可以用iPhone6作为视觉稿的标准。
                      </li>
                      <li>
                        开发举例：在iPhone6上如果要绘制宽100px，高20px的盒子，换算成rpx单位，宽高分别为200rpx和40rpx。
                      </li>
                    </ul>
                    <table>
                      <tbody>
                        <tr>
                          <th>设备</th>
                          <th>rpx换算px (屏幕宽度 / 750)</th>
                          <th>px换算rpx (750 / 屏幕宽度)</th>
                        </tr>
                        <tr>
                          <td>iphone5</td>
                          <td>1rpx = 0.42px</td>
                          <td>1px = 2.34rpx</td>
                        </tr>
                        <tr>
                          <td>iphone6</td>
                          <td>1rpx = 0.5px</td>
                          <td>1px = 2rpx</td>
                        </tr>
                        <tr>
                          <td>iphone6 Plus</td>
                          <td>1rpx = 0.552px</td>
                          <td>1px = 1.81rpx</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                </ul>
              </li>
              <li>
                @import样式导入：
                <ul>
                  <li>使用WXSS提供的@import 语法，可以导入外联的样式表。</li>
                  <li>
                    @import后跟需要导入的外联样式表的相对路径，用；表示语句结束。示例如下：
                    <pre><code class="language-js line-numbers">  &lt;!--pages/list/list.wxml--&gt;
  &lt;view class="small-p"&gt;我采用了公共样式@import导入放松&lt;/view&gt;

  /**common.wxsss**/
  .small-p{padding: 5px;}

  /**app.wxss**/
  @import '/common/common.wxss';
  .middle-p{padding: 15px;}</code></pre>
                  </li>
                </ul>
              </li>
              <li>
                全局样式：
                <ul>
                  <li>定义在app.wxss中的样式为全局样式，作用于每一个页面。</li>
                </ul>
                <pre><code class="language-js line-numbers">  /**app.wxss**/
  view {padding: 10rpx;margin: 10rpx;}</code></pre>
              </li>
              <li>
                <ul>
                  <li>
                    在页面的.WXSS文件中定义的样式为局部样式，只作用于当前页面。
                  </li>
                  <li>
                    当局部样式和全局样式冲突时，根据就近原则，局部样式会覆盖全局样式
                  </li>
                  <li>
                    当局部样式的权重大于或等于全局样式的权重时，才会覆盖全局的样式，（鼠标放上会提示权重）
                  </li>
                </ul>
                <pre><code class="language-js line-numbers">  /* pages/list/list.wxss */
  input{padding: 5px;margin: 5px;border-radius: 3px;}</code></pre>
              </li>
            </ul>
          </li>
        </ul>
      </el-card>
      <el-card id="part4" shadow="hover">
        <h2>全局配置</h2>

        <p>全局配置文件及常用的配置项</p>
        <ul>
          <li>
            小程序根目录下的app.json文件是小程序的全局配置文件。常用的配置项如下：
            <ul>
              <li>
                pages（数组）
                <ul>
                  <li>记录当前小程序所有页面的存放路径</li>
                </ul>
              </li>
              <li>
                window
                <ul>
                  <li>全局设置小程序窗口的外观</li>
                </ul>
              </li>
              <li>
                tabBar
                <ul>
                  <li>设置小程序底部的tabBar效果</li>
                </ul>
              </li>
              <li>
                style（如果使用旧版就把v2删掉）
                <ul>
                  <li>是否启用新版的组件样式</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p>window 小程序窗口的组成部分</p>
        <ul>
          <li>
            navigationBar 导航栏区域
            （显示信号、时间、电量、标题、关闭和三个小点区域）
          </li>
          <li>background 背景区域（默认不可见，下拉后才显示的区域）</li>
          <li>
            页面的主体区域
            （用来显示wxml中的布局，window节点无法配置的区域，以上两个是Window节点可以配置的区域）
          </li>
          <li>
            了解window节点常用的配置项:
            <ul>
              <li>以navigationBar 都是控制导航栏选项的</li>
              <li>以background 都是配置背景的</li>
            </ul>
            <table>
              <tbody>
                <tr>
                  <th>属性名</th>
                  <th>类型</th>
                  <th>默认值</th>
                  <th>说明</th>
                </tr>
                <tr>
                  <td>navigationBarTitleText</td>
                  <td>String</td>
                  <td>字符串</td>
                  <td>导航栏标题文字内容</td>
                </tr>
                <tr>
                  <td>navigationBarBackgroundColor</td>
                  <td>HexColor</td>
                  <td>#000000</td>
                  <td>导航栏背景颜色，如#000000</td>
                </tr>
                <tr>
                  <td>navigationBarTextstyle</td>
                  <td>String</td>
                  <td>white</td>
                  <td>导航栏标题颜色，仅支持black / white</td>
                </tr>
                <tr>
                  <td>backgroundColor</td>
                  <td>HexColor</td>
                  <td>#ffffff</td>
                  <td>窗口的背景色</td>
                </tr>
                <tr>
                  <td>backgroundTextstyle</td>
                  <td>String</td>
                  <td>dark</td>
                  <td>下拉loading的样式，仅支持dark/light</td>
                </tr>
                <tr>
                  <td>enablePullDownRefresh</td>
                  <td>Boolean</td>
                  <td>false</td>
                  <td>是否全局开启下拉刷新</td>
                </tr>
                <tr>
                  <td>onReachBottomDistance</td>
                  <td>Number</td>
                  <td>50</td>
                  <td>页面上拉触底事件触发时距页面底部距离，单位为px</td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
        <p>设置导航栏的标题文本内容</p>
        <pre><code class="language-js line-numbers">  // 设置步骤：app.json -> window -> navigationBarTitleText
  {
    "pages":[
    ],
    "window":{
      "navigationBarTitleText": "小程序",
    },
  }</code></pre>
        <p>设置导航栏的背景色（只支持16进制）</p>
        <pre><code class="language-js line-numbers">  // 设置步骤：app.json -> window -> navigationBarBackgroundColor
  {
    "window":{
      "navigationBarBackgroundColor": "#fff",
    },
  }</code></pre>
        <p>设置导航栏的标题颜色（值只有两个，一个black 和 white）</p>
        <pre><code class="language-js line-numbers">  // 设置步骤：app.json -> window -> navigationBarTextStyle
  {
    "window":{
      "navigationBarTextStyle": "white"
    },
  }</code></pre>
        <p>全局开启下拉刷新功能</p>
        <ul>
          <li>
            概念：下拉刷新是移动端的专有名词，指的是通过手指在屏幕上的下拉滑动操作，从而重新加载页面数据的行为。
          </li>
          <li>
            设置步骤：app.json -&gt; window -&gt;
            把enablePullDownRefresh的值设置为true
          </li>
          <li>
            注意：在app.json中启用下拉刷新功能，会作用于每个小程序页面，因为app.json是全局配置！
            <pre><code class="language-js line-numbers">  {
    "pages":[
    ],
    "window":{
      "enablePullDownRefresh": true  // 默认值为false,不写就是false ,需要下拉刷新，必须写true,其它值不支持
    },
  }</code></pre>
          </li>
          <li>
            模拟器并不能100%还原真机上的操作，不能太依赖，还是要用真机上测试
          </li>
        </ul>
        <p>设置下拉刷新时窗口的背景色</p>
        <ul>
          <li>
            当全局开启下拉刷新功能之后，默认的窗口背景为白色。如果自定义下拉刷新窗口背景色，
          </li>
          <li>
            设置步骤为：app.json -&gt; window -&gt; 为backgroundColor
            指定16进制的颜色值#efefef。效果如下：
            <pre><code class="language-js line-numbers">  {
    "window":{
      "backgroundColor": "#efefef"
    },
  }</code></pre>
          </li>
        </ul>
        <p>设置下拉刷新时loading的样式</p>
        <pre><code class="language-js line-numbers">  // 步骤为app.json -> window -> 为backgroundTextStyle 指定dark值。效果如下：
  {
    "window":{
      "backgroundTextStyle": "dark" // 注意，值只有两个，light 和 dark
    },
  }</code></pre>
        <p>设置上拉触底的距离</p>
        <ul>
          <li>
            概念：上拉触底是移动端的专有名词，通过手指在屏幕上的上拉滑动操作，从而加载更多数据的行为。
          </li>
          <li>
            例如：在购物的时候，一直往上拉来加载数据，当快触碰到底的时候，会执行加载其它数据的动作
          </li>
          <li>
            设置步骤：app.json -> window -> 为onReachBottomDistance 设置新的数值
          </li>
          <li>
            注意：默认距离为50px，如果没有特殊需求，建议使用默认值即可。
            <pre><code class="language-js line-numbers">  {
    "window":{
      "onReachBottomDistance": 100  // 开发中不建议修改值，除非特殊需要
    },
  }</code></pre>
          </li>
        </ul>
        <p>tabBar （相当于导航按钮）</p>
        <ul>
          <li>
            tabBar是移动端应用常见的页面效果，用于实现多页面的快速切换。小程席中通常将其分为：
            <ul>
              <li>
                底部 tabBar( tabBar 的6个组成部分 )
                <ul>
                  <li>backgroundColor 导航栏的背景颜色</li>
                  <li>selectIconPath 导航栏选中时的图片路径</li>
                  <li>borderStyle 导航栏的上边框颜色</li>
                  <li>IconPath 未选中时的图片路径</li>
                  <li>selectedColor 导航栏上的文字未选中时的颜色</li>
                  <li>color 导航栏上的文字选中时的颜色</li>
                </ul>
              </li>
              <li>
                顶部 tabBar
                <ul>
                  <li>tabBar中只能配置最少2个、最多5个tab页签</li>
                  <li>
                    当渲染顶部
                    tabBar时，不显示icon，只显示文本(顶部不支持icon图标，底部才支持)
                  </li>
                  <li>
                    tabBar节点的配置项
                    <table>
                      <tbody>
                        <tr>
                          <th>属性名</th>
                          <th>类型</th>
                          <th>必填</th>
                          <th>默认值</th>
                          <th>描述</th>
                        </tr>
                        <tr>
                          <td>position</td>
                          <td>String</td>
                          <td>否</td>
                          <td>bottom</td>
                          <td>tabBar的位置，仅支持bottom / top</td>
                        </tr>
                        <tr>
                          <td>borderStyle</td>
                          <td>String</td>
                          <td>否</td>
                          <td>black</td>
                          <td>tabBar上边框的颜色，仅支持black/white</td>
                        </tr>
                        <tr>
                          <td>color</td>
                          <td>HexColor</td>
                          <td>否</td>
                          <td></td>
                          <td>tab上文字的默认（未选中）颜色</td>
                        </tr>
                        <tr>
                          <td>selectedColor</td>
                          <td>HexColor</td>
                          <td>否</td>
                          <td></td>
                          <td>tab上的文字选中时的颜色</td>
                        </tr>
                        <tr>
                          <td>backgroundColor</td>
                          <td>HexColor</td>
                          <td>否</td>
                          <td></td>
                          <td>tabBar的背景色</td>
                        </tr>
                        <tr>
                          <td>list</td>
                          <td>Array</td>
                          <td>是</td>
                          <td></td>
                          <td>tab页面的列表 最少2个、最多5个tab</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                  <li>
                    list数组 下tab项的配置选项，最多5个tab
                    <table>
                      <tbody>
                        <tr>
                          <th>属性名</th>
                          <th>类型</th>
                          <th>必填</th>
                          <th>描述</th>
                        </tr>
                        <tr>
                          <td>pagePath /td></td>
                          <td>String/td></td>
                          <td>是 /td></td>
                          <td>页面路径，页面必须在pages中预先定义 /td></td>
                        </tr>
                        <tr>
                          <td>text</td>
                          <td>String</td>
                          <td>是</td>
                          <td>tab上显示的文字</td>
                        </tr>
                        <tr>
                          <td>conPath</td>
                          <td>String</td>
                          <td>否</td>
                          <td>
                            未选中时的图标路径；当position为top时，不显示icon
                          </td>
                        </tr>
                        <tr>
                          <td>selectedColor</td>
                          <td>HexColor</td>
                          <td>否</td>
                          <td>tab上的文字选中时的颜色</td>
                        </tr>
                        <tr>
                          <td>selectedIconPath</td>
                          <td>String</td>
                          <td>否</td>
                          <td>
                            选中时的图标路径；当position为top时，不显示icon
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <pre><code class="language-js line-numbers">  {
    "pages":[
      "pages/list/list",
      "pages/index/index",
    ],
    "window":{
    },
    "tabBar": {  // 与window 同级 ，设置底部导航栏
      "list": [{
        "pagePath": "pages/list/list",
        "text": "尾页"
      },{
        "pagePath": "pages/index/index",
        "text": "首页"
        }]
    },
  }</code></pre>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p>页面配置</p>
        <ul>
          <li>
            小程序中，每个页面都有自己的.json配置文件，用来对当前页面的窗口外观、页面效果等进行配置。
          </li>
          <li>
            页面配置和全局配置的关系
            <ul>
              <li>
                小程序中，app.json中的window节点，可以全局配置小程序中每个页面的窗口表现。
              </li>
              <li>
                如果某些小程序页面想要拥有特殊的窗口表现，此时，“页面级别的.json
                配置文件”就可以实现这种需求。
              </li>
              <li>
                注意：当页面配置与全局配置冲突时，根据就近原则，最终的效果以页面配置为准。
              </li>
            </ul>
            <pre><code class="language-js line-numbers">  {
    "usingComponents": {},
    "navigationBarBackgroundColor": "#23bec0"
  }</code></pre>
            <table>
              <tbody>
                <tr>
                  <th>属性名</th>
                  <th>类型</th>
                  <th>默认值</th>
                  <th>描述</th>
                </tr>
                <tr>
                  <td>navigationBarBackgroundColor</td>
                  <td>HexColor</td>
                  <td>#000000</td>
                  <td>当前页面导航栏背景颜色，如#000000</td>
                </tr>
                <tr>
                  <td>navigationBarTextStyle</td>
                  <td>String</td>
                  <td>white</td>
                  <td>当前页面导航栏标题颜色，仅支持black/white</td>
                </tr>
                <tr>
                  <td>navigationBarTitleText</td>
                  <td>String</td>
                  <td></td>
                  <td>当前页面导航栏标题文字内容</td>
                </tr>
                <tr>
                  <td>backgroundColor</td>
                  <td>HexColor</td>
                  <td>#ffffff</td>
                  <td>当前页面窗口的背景色</td>
                </tr>
                <tr>
                  <td>backgroundTextStyle</td>
                  <td>String</td>
                  <td>dark</td>
                  <td>当前页面下拉loading的样式，仅支持dark/light</td>
                </tr>
                <tr>
                  <td>enablePullDownRefresh</td>
                  <td>Boolean</td>
                  <td>false</td>
                  <td>是否为当前页面开启下拉刷新的效果，单独设置</td>
                </tr>
                <tr>
                  <td>onReachBottomDistance</td>
                  <td>Number</td>
                  <td>50</td>
                  <td>页面上拉触底事件触发时距页面底部距离，单位为px</td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
      </el-card>
      <el-card id="part5" shadow="hover">
        <h2>其他</h2>

        <p>网络数据请求</p>
        <ul>
          <li>
            小程序中网络数据请求的限制
            <ul>
              <li>
                出于安全性方面的考虑，小程序官方对数据接口的请求做出了如下两个限制：
                <ul>
                  <li>只能请求HTTPS类型的接口</li>
                  <li>
                    必须将接口的域名添加到信任列表中
                    <ul>
                      <li>
                        点击小程序开发工具中右上角的详情 => 项目配置 =>
                        域名信息填写
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            配置request合法域名列表
            <ul>
              <li>
                需求描述：假设在自己的微信小程序中，希望请求
                https://www.escook.cn/域名下的接口
              </li>
              <li>
                配置步骤：登录微信小程序管理后台->开发->开发设置->服务器域名->修改request合法域名
              </li>
              <li>
                注意事项：
                <ul>
                  <li>域名只支持https协议</li>
                  <li>域名不能使用IP地址或localhost</li>
                  <li>域名必须经过ICP备案</li>
                  <li>服务器域名一个月内最多可申请5次修改</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            发起Get请求
            <ul>
              <li>
                调用微信小程序提供的
                wx.request（）方法，可以发起GET数据请求，示例代码如下：
                <pre><code class="language-js line-numbers">  &lt;!--pases/home/home.wxml--&gt;
  &lt;button&gt; bindtap="getInfo"&gt; 发起GET请求&lt;/button&gt;

  // pases/home/home.js
  Page（｛
      data: {
      },
      getInfo(){  // 发起get数据
          wx.request({
              url: 'https://www.escook.cn/api/get', // 请求的接口地址，必须https协议
              method: 'GET', // 请求方式
              data: { // 发送到服务器的数据
                name: 'zs',
                age: 22
              },
              success: (res) =&gt;{console.log(res)} // 请求成功之后的回调函数
            })
      },</code></pre>
              </li>
            </ul>
          </li>
          <li>
            发起Post请求
            <pre><code class="language-js line-numbers">  &lt;!--pases/home/home.wxml--&gt;
  &lt;button&gt; bindtap="postInfo"&gt; 发起Post请求&lt;/button&gt;

  // pases/home/home.js
  Page（｛
      data: {
      },
      getInfo(){  // 发起get数据
          wx.request({
              url: 'https://www.escook.cn/api/get', // 请求的接口地址，必须https协议
              method: 'POST', // 请求方式
              data: { // 发送到服务器的数据
                name: 'zs',
                age: 22
              },
              success: (res) =&gt;{console.log(res)} // 请求成功之后的回调函数
            })
      },</code></pre>
          </li>
          <li>
            在页面刚加载时请求数据
            <ul>
              <li>
                在很多情况下，我们需要在页面刚加载的时候，自动请求一些初始化的数据。
              </li>
              <li>
                此时需要在页面的onLoad事件中调用获取数据的函数，示例代码如下：
                <pre><code class="language-js line-numbers">  // pases/home/home.js
  Page（｛
    data: {
    },
    getInfo(){  // 发起get数据
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getSwiperList();
        this.getGridList();
    },

    // 获取轮播图的数据
    getSwiperList(){},
    // 获取九宫格的数据
    getGridList(){},</code></pre>
              </li>
            </ul>
          </li>
          <li>
            跳过request合法域名校验
            <ul>
              <li>
                如果后端程序员仅仅提供了http协议的接口、暂时没有提供https协议的接口。
              </li>
              <li>
                此时为了不耽误开发的进度，我们可以在微信开发者工具中详情 =>
                本地设置，临时开启勾选【开发环境不校验请求域名、
                TLS版本及HTTPS证书】选项，跳过request合法域名的校验。
              </li>
              <li>
                注意：跳过request合法域名校验的选项，仅限在开发与调试阶段使用！
              </li>
            </ul>
          </li>
          <li>
            关于跨域和Ajax的说明
            <ul>
              <li>
                跨域问题只存在于基于浏览器的Web开发中。由于小程序的宿主环境不是浏览器，而是微信客户端，所以小程序中不存在
                跨域的问题。
              </li>
              <li>
                Ajax技术的核心是依赖于浏览器中的XMLHttpRequest这个对象，由于小程序的宿主环境是微信客户端，所以小程序中不能
                叫做“发起Ajax请求”，而是叫做“发起网络数据请求”。
              </li>
            </ul>
          </li>
        </ul>
        <p>案例 - 本地生活</p>
        <pre><code class="language-js line-numbers">  // 1. 新建项目并梳理项目结构
  // project.config.json   添加关闭提示选项
  "checkSiteMap": false

  {  // app.json 中添加首页文件
    "pages":[
      "pages/home/home",
      "pages/message/message",
      "pages/contact/contact"
    ],
  }

  // 2. 配置导航栏效果
  {   // app.json 中修改导航栏背景色和文字色和标题
    "pages":[
    ],
    "window":{
      "navigationBarBackgroundColor": "#2b4b6b",
      "navigationBarTitleText": "本地生活",
    },
  }

  // 3. 配置tabBar效果
  ,
    "tabBar": {
      "list": [{
        "pagePath": "pages/home/home",
        "text": "首页",
        "iconPath": "/images/home.png",
        "selectedIconPath": "/images/home-active.png"
      },{
        "pagePath": "pages/message/message",
        "text": "消息",
        "iconPath": "/images/message.png",
        "selectedIconPath": "/images/message-active.png"
      },{
        "pagePath": "pages/contact/contact",
        "text": "联系我们",
        "iconPath": "/images/contact.png",
        "selectedIconPath": "/images/contact-active.png"
      }]
    },

  // 4. 实现轮播图效果
  &lt;!--pages/home/home.wxml--&gt;
  &lt;!-- 轮播图区 --&gt;
  &lt;swiper indicator-dots circular&gt;
      &lt;swiper-item wx:for="｛｛ swiperList ｝｝" wx.key="id"&gt;
          &lt;image src="｛｛ item.image ｝｝"&gt;&lt;/image&gt;
      &lt;/swiper-item&gt;
  &lt;/swiper&gt;

  // pages/home/home.js
  Page（｛
      data: {
          swiperList: []  // 定义一个空数组来存放轮播
      },

      /* 生命周期函数--监听页面加载 */
      onLoad: function (options) {
          this.getSwiperList();
      },
      getSwiperList(){
          wx.request({
              url:'https://www.escook.cn/slides',
              method: 'GET',
              success: (res) =&gt;{
                  console.log(res);
                  this.setData({
                      swiperList: res.data
                  })
              }
          });
      },

  /* 5. 实现九宫格效果
        接口地址
          获取轮播图数据列表的接口【GET】https://www.escook.cn/slides
          获取九宫格数据列表的接口【GET】https://www.escook.cn/categories */

  // 6. 实现图片布局 </code></pre>
        <p>总结</p>
        <ul>
          <li>
            能够使用WXML模板语法渲染页面结构
            <ul>
              <li>wx:if、wx:elif、wx:else、hidden、wx:for、wx:key / index</li>
            </ul>
          </li>
          <li>
            能够使用WXSS样式美化页面结构
            <ul>
              <li>
                rpx尺寸单位(2px = 1rpx)、@import样式导入、全局样式和局部样式
              </li>
            </ul>
          </li>
          <li>
            能够使用app.json 对小程序进行全局性配置
            <ul>
              <li>pages、window、tabBar、style</li>
            </ul>
          </li>
          <li>
            能够使用page.json对小程序页面进行个性化配置
            <ul>
              <li>对单个页面进行个性化配置、就近原则</li>
            </ul>
          </li>
          <li>
            能够知道如何发起网络数据请求
            <ul>
              <li>wx.request（）方法、onLoad（）事件</li>
            </ul>
          </li>
        </ul>
        <p>视图与逻辑</p>
        <ul>
          <li>能够知道如何实现页面之间的导航跳转</li>
          <li>能够知道如何实现下拉刷新效果</li>
          <li>能够知道如何实现上拉加载更多效果</li>
          <li>能够知道小程序中常用的生命周期函数</li>
          <li>
            页面导航
            <ul>
              <li>
                页面导航指的是页面之间的相互跳转。例如，浏览器中实现页面导航的方式有如下两种：
                <ul>
                  <li>&lt;a&gt; 链接</li>
                  <li>location.href</li>
                </ul>
              </li>
              <li>
                小程序中实现页面导航的两种方式
                <ul>
                  <li>
                    声明式导航
                    <ul>
                      <li>
                        在页面上声明一个&lt;navigator&gt;导航组件,
                        通过点击&lt;navigator&gt;组件实现页面跳转
                      </li>
                    </ul>
                  </li>
                  <li>
                    导航到tabBar页面，tabBar页面指的是被配置为tabBar的页面
                  </li>
                  <li>
                    在使用&lt;navigator&gt;组件跳转到指定的tabBar页面时，需要指定url属性和open-type属性，其中：
                    <ul>
                      <li>url表示要跳转的页面的地址，必须以/开头</li>
                      <li>open-type 表示跳转的方式，必须为switchTab</li>
                    </ul>
                    <pre><code class="language-html line-numbers">  &lt;!--pages/home/home.wxml--&gt;
  &lt;navigator&gt; url="/pages/message/message" open-type="switchTab"&gt;导航到消息页面&lt;/navigator&gt;</code></pre>
                  </li>
                  <li>
                    导航到非
                    tabBar页面，非tabBar页面指的是没有被配置为tabBar的页面。
                  </li>
                  <li>
                    在使用&lt;navigator&gt;组件跳转到普通的非tabBar页面时，则需要指定
                    url属性和open-type属性，其中：
                    <ul>
                      <li>url表示要跳转的页面的地址，必须以/开头</li>
                      <li>
                        open-type
                        表示跳转的方式，必须为navigate，如果省略也是可以跳转非tabBar页面
                      </li>
                    </ul>
                    <pre><code class="language-html line-numbers">  &lt;!--pages/home/home.wxml--&gt;
  &lt;navigator&gt; url="/pages/fTabBar/fTabBar" open-type="navigate"&gt;非tabbar页面&lt;/navigator&gt;</code></pre>
                  </li>
                  <li>
                    后退导航，如果要后退到上一页面或多级页面，则需要指定open-type
                    属性和 delta属性，其中：
                    <ul>
                      <li>
                        open-type的值必须是navigateBack，表示要进行后退导航
                      </li>
                      <li>delta的值必须是数字，表示要后退的层级</li>
                      <li>
                        注意：为了简便，如果只是后退到上一页面，则可以省略
                        delta属性，因为其默认值就是1。
                      </li>
                    </ul>
                    <pre><code class="language-html line-numbers">  &lt;!--pages/message/message.wxml--&gt;
  &lt;text&gt;pages/message/message.wxml&lt;/text&gt;
  &lt;navigator open-type="navigateBack" delta="1"&gt;后退&lt;/navigator&gt;
  &lt;navigator open-type="navigateBack" &gt;后退默认是1，所以可以简写&lt;/navigator&gt;</code></pre>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            编程式导航-跳转到非tabBar页面
            <ul>
              <li>
                调用wx.navigateTo（Object
                object）方法，可以跳转到非tabBar的页面。其中Object参数对象的属性列表如下：
                <table>
                  <tbody>
                    <tr>
                      <th>属性</th>
                      <th>类型</th>
                      <th>是否必选</th>
                      <th>说明</th>
                    </tr>
                    <tr>
                      <td>url</td>
                      <td>string</td>
                      <td>是</td>
                      <td>需要跳转的tabBar页面的路径，路径后不能带参数</td>
                    </tr>
                    <tr>
                      <td>success</td>
                      <td>function</td>
                      <td>否</td>
                      <td>接口调用成功的回调函数</td>
                    </tr>
                    <tr>
                      <td>fail</td>
                      <td>function</td>
                      <td>否</td>
                      <td>接口调用失败的回调函数</td>
                    </tr>
                    <tr>
                      <td>complete</td>
                      <td>function</td>
                      <td>否</td>
                      <td>接口调用结束的回调函数（调用成功、失败都会执行）</td>
                    </tr>
                  </tbody>
                </table>
                <pre><code class="language-html line-numbers">  &lt;!--pages/fTabBar/fTabBar.wxml--&gt;
  &lt;button&gt; bindtap="gotoMessage"&gt;跳转页面&lt;/button&gt;

  // pages/contact/contact.js
  Page（｛
      data: {
      },
      gotoMessage(){
        wx.switchTab({
          url: '/pages/home/home',
        })
      },</code></pre>
              </li>
            </ul>
          </li>
          <li>
            编程式导航-后退导航
            <ul>
              <li>
                调用wx.navigateBack（Object
                object）方法，可以返回上一页面或多级页面。其中Object参数对象可选的属性
                <table>
                  <tbody>
                    <tr>
                      <th>属性</th>
                      <th>类型</th>
                      <th>是否必选</th>
                      <th>说明</th>
                    </tr>
                    <tr>
                      <td>url</td>
                      <td>string</td>
                      <td>是</td>
                      <td>需要跳转的tabBar页面的路径，路径后不能带参数</td>
                    </tr>
                    <tr>
                      <td>success</td>
                      <td>function</td>
                      <td>否</td>
                      <td>接口调用成功的回调函数</td>
                    </tr>
                    <tr>
                      <td>fail</td>
                      <td>function</td>
                      <td>否</td>
                      <td>接口调用失败的回调函数</td>
                    </tr>
                    <tr>
                      <td>complete</td>
                      <td>function</td>
                      <td>否</td>
                      <td>接口调用结束的回调函数（调用成功、失败都会执行）</td>
                    </tr>
                  </tbody>
                </table>
                <pre><code class="language-html line-numbers">  &lt;!--pages/fTabBar/fTabBar.wxml--&gt;
  &lt;button bindtap="gotoInfo"&gt;跳转页面&lt;/button&gt;

  // pages/contact/contact.js
  Page（｛
      data: {
      },
      gotoInfo(){
        wx.navigateTo({
          url: '/pages/info/info',
        })
      },</code></pre>
              </li>
            </ul>
          </li>
          <li>
            导航传参-声明式导航传参
            <ul>
              <li>
                navigator组件的url属性用来指定将要跳转到的页面的路径。同时，路径的后面还可以携带参数：
                <ul>
                  <li>参数与路径之间使用？分隔</li>
                  <li>参数键与参数值用=相连</li>
                  <li>不同参数用&分隔</li>
                </ul>
                <pre><code class="language-js line-numbers">  &lt;navigator url="/pages/info/info?name=zs&age=20" &gt;&lt;/navigator&gt;</code></pre>
              </li>
            </ul>
          </li>
          <li>
            导航传参-编程式导航传参
            <ul>
              <li>
                调用wx.navigateTo（Object
                object）方法跳转页面时，也可以携带参数，代码示例如下：
                <pre><code class="language-html line-numbers">  &lt;!--pages/fTabBar/fTabBar.wxml--&gt;
  &lt;button bindtap="gotoInfo2"&gt;跳转页面&lt;/button&gt;

  // pages/contact/contact.js
  Page（｛
      data: {
      },
      gotoInfo2(){
        wx.navigateTo({
          url: '/pages/info/info?name=zs&age=20',
        })
      },</code></pre>
              </li>
            </ul>
          </li>
          <li>
            在onLoad中接收导航参数
            <ul>
              <li>
                通过声明式导航传参或编程式导航传参所携带的参数，可以直接在onLoad事件中直接获取到，示例代码如下：
                <pre><code class="language-js line-numbers">  // pages/contact/contact.js
  Page（｛
    data: {
        // 导航传过来的参数
        query: {}
    },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
      // options 就是导航传过来的参数对象,将参数转存到data里面公用
      console.log(options);
      this.setData({
          query: options
      })
  },</code></pre>
              </li>
            </ul>
          </li>
          <li>
            页面事件--下拉刷新
            <ul>
              <li>
                下拉刷新是移动端的专有名词，指的是通过手指在屏幕上的下拉滑动操作，从而重新加载页面数据的行为。
              </li>
              <li>
                启用下拉刷新（启用下拉刷新有两种方式）：
                <ul>
                  <li>
                    全局开启下拉刷新
                    <ul>
                      <li>
                        在app.json的window节点中，将enablePullDownRefresh
                        设置为true
                      </li>
                    </ul>
                  </li>
                  <li>
                    局部开启下拉刷新（推荐）
                    <ul>
                      <li>
                        在页面的.json配置文件中，将enablePullDownRefresh设置为true
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                配置下拉刷新窗口的样式
                <ul>
                  <li>
                    在全局或页面的.json
                    配置文件中，通过backgroundColor和backgroundTextStyle来配置下拉刷新窗口的样式，其中：
                    <ul>
                      <li>
                        backgroundColor用来配置下拉刷新窗口的背景颜色，仅支持16进制的颜色值
                      </li>
                      <li>
                        backgroundTextStyle
                        用来配置下拉刷新loading的样式，仅支持dark和light
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                监听页面的下拉刷新事件
                <ul>
                  <li>
                    在页面的，js文件中，通过onPullDownRefresh（）函数即可监听当前页面的下拉刷新事件。
                    <pre><code class="language-js line-numbers">  /* 页面相关事件处理函数--监听用户下拉动作 */
  onPullDownRefresh: function () {

  },</code></pre>
                  </li>
                  <li>
                    例如，在页面的wxml中有如下的UI结构，点击按钮可以让count值自增+1：
                  </li>
                  <li>
                    在触发页面的下拉刷新事件的时候，如果要把count的值重置为0，示例代码如下：
                    <pre><code class="language-html line-numbers">  &lt;!--pages/message/message.wxml--&gt;
  &lt;view&gt;count值是：｛｛ count ｝｝&lt;/view&gt;

  // pages/message/message.js
  Page（｛
      data: {
          count: 0
      },
      addCount(){
          this.setData({
              count: this.data.count + 1
          });
      },

    /**
       * 页面相关事件处理函数--监听用户下拉动作
       */
      onPullDownRefresh: function () {
          this.setData({
              count: 0   // 下拉后重置count为0
          });
      },</code></pre>
                  </li>
                </ul>
              </li>
              <li>
                停止下拉刷新的效果
                <ul>
                  <li>
                    当处理完下拉刷新后，下拉刷新的loading效果会一直显示，不会主动消失，所以需要手动隐藏loading
                    效果。
                  </li>
                  <li>
                    此时，调用wx.stopPullDownRefresh（）可以停止当前页面的下拉刷新。示例
                  </li>
                </ul>
                <pre><code class="language-js line-numbers">  /* 页面相关事件处理函数--监听用户下拉动作 */
  onPullDownRefresh: function () {
      this.setData({
          count: 0
      })；
      wx.stopPullDownRefresh();  // 停止下拉刷新
  },</code></pre>
              </li>
              <li>
                上拉触底
                <ul>
                  <li>
                    上拉触底是移动端的专有名词，通过手指在屏幕上的上拉滑动操作，从而加载更多数据的行为。
                  </li>
                  <li>更多实现的是分页效果</li>
                </ul>
              </li>
              <li>
                监听页面的上拉触底事件
                <ul>
                  <li>
                    在页面的js文件中，通过onReachBottom（）函数即可监听当前页面的上拉触底事件。示例代码如下：
                  </li>
                </ul>
                <pre><code class="language-js line-numbers">  /* 页面上拉触底事件的处理函数 */
  onReachBottom: function () {
      console.log("触发上拉触底");
  },</code></pre>
              </li>
              <li>
                配置上拉触底距离
                <ul>
                  <li>
                    上拉触底距离指的是触发上拉触底事件时，滚动条距离页面底部的距离。
                  </li>
                  <li>
                    上拉触底距离指的是触发上拉触底事件时，滚动条距离页面底部的距离。
                  </li>
                  <li>
                    可以在全局或页面的，json配置文件中，通过onReachBottomDistance
                    属性来配置上拉触底的距离。
                  </li>
                  <li>
                    小程序默认的触底距离是50px，在实际开发中可以根据自己的需求修改这个默认值。
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            上拉触底案例
            <pre><code class="language-js line-numbers">  // 1. 定义获取随机颜色的方法
  // pages/contact/contact.js
  Page（｛
    /**
     * 页面的初始数据
     */
    data: {
        colorList: []
    },
    getColor(){
        wx.request({
          url: 'https://www.escook.cn/api/color',
          method:'GET',
          success: ({data:res}) =>{
            console.log(res); // 里面包含了服务器颜色的数据
          }
        })
    },

  // 2. 在页面加载时获取初始数据
  /* 生命周期函数--监听页面加载 */
  onLoad: function (options) {
      this.getColor();
  },

  // 3. 渲染UI结构并美化页面效果
  &lt;!--pages/message/message.wxml--&gt;
  &lt;view wx:for="｛｛ colorList ｝｝" wx:key="index" class="num-item" style="background-color: rgba｛｛ item ｝｝;"&gt;&lt;/view&gt;

  /* pages/contact/contact.wxss */
  .num-item{
      border: 1rpx solid #efefef;
      border-radius: 8rpx;
      line-height: 200rpx;
      margin: 15rpx;
      text-align: center;
      text-shadow: 0rpx 0rpx 5rpx #fff;
      box-shadow: 1rpx 1rpx 6rpx #aaa;
  }

  // 4. 在上拉触底时调用获取随机颜色的方法
  /* 页面上拉触底事件的处理函数 */
  onReachBottom: function () {
      this.getColor();
  },

  // 5. 添加loading提示效果
      小程序开发文档中，API => 界面 => wx.showLoading 和 wx.hideLoading
      getColor(){
        wx.showLoading({
          title: '数据加载中',
        }),
        wx.request({
          url: 'https://www.escook.cn/api/color',
          method:'GET',
          success: ({data:res}) =>{
            console.log(res);  // 里面包含了服务器颜色的数据
          },
          // 无论成功与否都要调用一次隐藏loading效果
          complete: () =>{
            wx.hideLoading();
          }
        });
      },

  // 6. 对上拉触底进行节流处理
        在data中定义isLoading 节流阀
          false表示当前没有进行任何数据请求
          true表示当前正在进行数据请求
        在getColors（）方法中修改isLoading节流阀的值
          在刚调用getColors 时将节流阀设置 true
          在网络请求的complete回调函数中，将节流阀重置为false
        在onReachBottom中判断节流阀的值，从而对数据请求进行节流控制
          如果节流阀的值为true，则阻止当前请求
          如果节流阀的值为false，则发起数据请求

        // pages/contact/contact.js
        Page（｛
          data: {
            colorList: [],
            isLoading: false
          },
          getColor(){
              this.setData({
                  isLoading: true
              })
              wx.showLoading({
                title: '数据加载中',
              }),
              wx.request({
                url: 'https://www.escook.cn/api/color',
                method:'GET',
                success: ({data:res}) =>{
                  console.log(res);  // 里面包含了服务器颜色的数据
                },
                // 无论成功与否都要调用一次隐藏loading效果
                complete: () =>{
                  wx.hideLoading();
                  this.setData({
                      isLoading: false
                  })
                }
              });
          },
        /* 生命周期函数--监听页面加载 */
        onLoad: function (options) {this.getColor();},

        /* 页面上拉触底事件的处理函数 */
        onReachBottom: function () {
            if(this.data.isLoading) return
            this.getColor();
        },

  // 7. 自定义编译模式：每次重新编译代码可以指定访问tabBar页面，而不是每次都在主页
        点击开发工具栏上的普通编译 => 添加编译模式 => 填写参数（启动页面，启动参数，模式名称默认）
        当不需要的时候，点击编辑然后删除该模式即可，作用是大大提高了开发效率 </code></pre>
          </li>
          <li>
            生命周期
            <ul>
              <li>
                生命周期（Life
                Cycle）是指一个对象从创建->运行->销毁的整个阶段，强调的是一个时间段。例如：
                <ul>
                  <li>张三出生，表示这个人生命周期的开始</li>
                  <li>
                    张三离世，表示这个人生命周期的结束·中间张三的一生，就是张三的生命周期
                  </li>
                  <li>
                    我们可以把每个小程序运行的过程，也概括为生命周期：
                    <ul>
                      <li>小程序的启动，表示生命周期的开始</li>
                      <li>小程序的关闭，表示生命周期的结束</li>
                      <li>中间小程序运行的过程，就是小程序的生命周期</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                生命周期的分类，在小程序中，分别是：
                <ul>
                  <li>
                    应用生命周期
                    <ul>
                      <li>特指小程序从启动 -> 运行 -> 销毁的过程</li>
                    </ul>
                  </li>
                  <li>
                    页面生命周期
                    <ul>
                      <li>
                        特指小程序中，每个页面的加载 -> 渲染 -> 销毁的过程
                      </li>
                    </ul>
                  </li>
                  <li>
                    其中，页面的生命周期范围较小，应用程序的生命周期范围较大
                  </li>
                </ul>
              </li>
              <li>
                什么是生命周期函数
                <ul>
                  <li>
                    生命周期函数：是由小程序框架提供的内置函数，会伴随着生命周期，自动按次序执行。
                  </li>
                  <li>
                    生命周期函数的作用：允许程序员在特定的时间点，执行某些特定的操作。例如，页面刚加载的时候，
                    可以在onLoad 生命周期函数中初始化页面的数据。
                  </li>
                </ul>
              </li>
              <li>
                生命周期函数的分类小程序中的生命周期函数分为两类，分别是：
                <ul>
                  <li>
                    应用的生命周期函数
                    <ul>
                      <li>
                        特指小程序从启动 -> 运行 -> 销毁期间依次调用的那些函数
                      </li>
                      <li>
                        小程序的应用生命周期函数需要在app.js中进行声明，示例代码如下：
                      </li>
                    </ul>
                    <pre><code class="language-js line-numbers">  // app.js
  App（｛
    /**
     * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
     */
    onLaunch: function () {   // 作用对小程序打开的时候进行数据初始化
    },
    /**
     * 当小程序启动，或从后台进入前台显示，会触发 onShow
     */
    onShow: function (options) {

    },
    /**
     * 当小程序从前台进入后台，会触发 onHide
     */
    onHide: function () {

    },</code></pre>
                  </li>
                  <li>
                    页面的生命周期函数
                    <ul>
                      <li>
                        特指小程序中，每个页面从加载 -> 渲染 ->
                        销毁期间依次调用的那些函数
                      </li>
                      <li>
                        小程序的页面生命周期函数需要在页面的.js文件中进行声明，示例代码如下：
                      </li>
                    </ul>
                    <pre><code class="language-js line-numbers">  Page({
    onLoad: function (options) { }, // 监听页面加载，一个页面只调用1次
    onReady: function () { },       // 监听页面显示，可以修改页面的标题等

    onShow: function () { },        // 监听页面初次渲染完成，一个页面只调用1次
    onHide: function () { },        // 监听页面隐藏
    onUnload: function () { }       // 监听页面卸载，一个页面只调用1次
  })</code></pre>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            WXS脚本
            <ul>
              <li>
                WXS（Weixin
                Script）是小程序独有的一套脚本语言，结合WXML，可以构建出页面的结构。wxml中无法调用在页面的，js中定义的函数，但是，wxml中可以调用wxs中定义的函数。
              </li>
              <li>小程序中Wxs的典型应用场景就是“过滤器”。</li>
              <li>
                wxs和JavaScript的关系*
                <ul>
                  <li>
                    虽然wxs的语法类似于JavaScript，但是wxs和JavaScript是完全不同的两种语言：
                  </li>
                  <li>
                    Wxs有自己的数据类型
                    <ul>
                      <li>
                        number
                        数值类型、string字符串类型、boolean布尔类型、object对象类型、
                        function函数类型、array数组类型、 date日期类型、
                        regexp正则
                      </li>
                    </ul>
                  </li>
                  <li>
                    Wxs不支持类似于ES6及以上的语法形式
                    <ul>
                      <li>
                        不支持：let、const、解构赋值、展开运算符、箭头函数、对象属性简写、etc.
                      </li>
                      <li>
                        支持：var定义变量、普通function函数等类似于ES5的语法
                      </li>
                    </ul>
                  </li>
                  <li>
                    Wxs遵循CommonJS规范
                    <ul>
                      <li>module 对象</li>
                      <li>require（），函数</li>
                      <li>module.exports 对象</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                基础语法：
                <ul>
                  <li>
                    内嵌wxs脚本
                    <ul>
                      <li>
                        wxs代码可以编写在wxml文件中的&lt;wxs&gt;标签内，就像Javascript代码可以编写在html文件中的&lt;script&gt;
                      </li>
                      <li>
                        wxml文件中的每个&lt;wxs&gt;&lt;/wxs&gt;标签，必须提供module属性，用来指定当前WXs的模块名称，方便在wxml中访问模
                      </li>
                      <li>块中的成员：</li>
                    </ul>
                    <pre><code class="language-js line-numbers">  // pages/home/home.js
  Page（｛
    data: ｛
        username: "wx",

  &lt;!--pages/home/home.wxml--&gt;
  &lt;view&gt;｛｛ m1.toUpper(username) ｝｝&lt;/view&gt;

  &lt;wxs module="m1"&gt;
    // 将文本转为大写形式 zs =&gt;  ZS
    module.exports.toUpper = function (str){
        return str.toUpperCase()
    }
  &lt;/wxs&gt;</code></pre>
                  </li>
                  <li>
                    外联wxs脚本
                    <ul>
                      <li>
                        wxs代码还可以编写在以.wxs为后缀名的文件内，就像
                        javascript代码可以编写在以.js为后缀名的
                      </li>
                      <li>文件中一样。示例代码如下：</li>
                    </ul>
                    <pre><code class="language-js line-numbers">  // tools.wxs
  function toLower(str){
    return str.toLowerCase();
  };

  module.exports = {
    toLower: toLower   // 不支持简写形式，一定要写全
  }</code></pre>
                  </li>
                  <li>
                    使用外联wxs脚本，在wxml中引入外联的wxs脚本时，必须为&lt;wxs&gt;标签添加module和src属性，其中：
                    <ul>
                      <li>module用来指定模块的名称</li>
                      <li>src用来指定要引入的脚本的路径，且必须是相对路径</li>
                    </ul>
                    <pre><code class="language-js line-numbers">  &lt;!--pages/message/message.wxml--&gt;
  &lt;view&gt;｛｛ m2.toLower(country) ｝｝&lt;/view&gt;

  &lt;wxs src="../../utils/tools.wxs" module="m2"&gt;&lt;/wxs&gt;</code></pre>
                  </li>
                  <li>
                    WXS的特点
                    <ul>
                      <li>
                        与JavaScript不同，为了降低wxs（Weixin
                        Script）的学习成本，wXs语言在设计时借大量鉴了JavaScript的语法。但是本质上，wxs和JavaScript是完全不同的两种语言！
                      </li>
                      <li>
                        不能作为组件的事件回调。wxs典型的应用场景就是“过滤器”，经常配合Mustache
                        语法进行使用，例如：
                        <pre><code class="language-js line-numbers">  &lt;view&gt;｛｛ m2.toLower(country) ｝｝ &lt;/view&gt;</code></pre>
                      </li>
                      <li>
                        但是，在WXs中定义的函数不能作为组件的事件回调函数。例如，下面的用法是错误的：
                        <pre><code class="language-js line-numbers">  &lt;button bindtap="m2.toLower"&gt;&lt;/button&gt;</code></pre>
                      </li>
                      <li>
                        不能作为组件的事件回调。
                        隔离性指的是wxs的运行环境和其他JavaScript代码是隔离的。体现在如下两方面：1.
                        Wxs不能调用js中定义的函数 2. wxs不能调用小程序提供的API
                      </li>
                      <li>
                        性能好。
                        在iOS设备上，小程序内的WXS会比JavaScript代码快2~20倍，在安卓设备上无差异
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p>基础加强</p>
        <ul>
          <li>能够知道如何自定义小程序组件</li>
          <li>能够知道小程序组件中behaviors的作用</li>
          <li>能够知道如何安装和配置vant-weapp组件库</li>
          <li>能够知道如何使用MobX实现全局数据共享</li>
          <li>
            能够知道如何对小程序的API进行Promise化
            <ul>
              <li>
                自定义组件
                <ul>
                  <li>
                    创建组件：三步
                    <ul>
                      <li>
                        在项目的根目录中，鼠标右键，创建 components文件夹 ->
                        test文件夹
                      </li>
                      <li>
                        在新建的components -> test文件夹上，鼠标右键，点击“新建
                        Component"
                      </li>
                      <li>
                        键入组件的名称之后回，会自动生成组件对应的4个文件，后缀名分别为.js，.json，.wxml和.wxss
                      </li>
                      <li>
                        注意：为了保证目录结构的清晰，建议把不同的组件，存放到单独目录中，例如
                      </li>
                    </ul>
                  </li>
                  <li>
                    引用组件
                    <ul>
                      <li>
                        组件的引用方式分为“局部引用”和“全局引用”，顾名思义：
                      </li>
                      <li>
                        局部引用：组件只能在当前被引用的页面内使用，在页面的json配置文件中引用组件的方式，
                      </li>
                      <li>叫做“局部引用”。示例代码如下：</li>
                    </ul>
                    <pre><code class="language-js line-numbers">  {
    "component": true,
    "usingComponents": {
        "my-test1" : "/components/test1/test"
    }
  }</code></pre>
                  </li>
                  <li>
                    全局引用：组件可以在每个小程序页面中使用
                    <ul>
                      <li>
                        在app.json全局配置文件中引用组件的方式，叫做“全局引用”。示例代码如下：
                      </li>
                    </ul>
                  </li>
                  <li>组件样式隔离</li>
                  <li>
                    默认情况下，自定义组件的样式只对当前组件生效，不会影响到组件之外的UI结构，如图所示：
                    <ul>
                      <li>组件A的样式不会影响组件C的样式</li>
                      <li>组件A的样式不会影响小程序页面的样式</li>
                      <li>小程序页面的样式不会影响组件A和C的样式</li>
                    </ul>
                  </li>
                  <li>
                    组件样式隔离的注意点
                    <ul>
                      <li>app.Wxss中的全局样式对组件无效</li>
                      <li>
                        只有class选择器会有样式隔离效果，id
                        选择器、属性选择器、标签选择器不受样式隔离的影响
                      </li>
                      <li>
                        建议：在组件和引用组件的页面中建议使用Class
                        选择器，不要使用id、属性、标签选择器！
                      </li>
                    </ul>
                  </li>
                  <li>
                    修改组件的样式隔离选项
                    <ul>
                      <li>
                        默认情况下，自定义组件的样式隔离特性能够防止组件内外样式互相干扰的问题。
                      </li>
                      <li>
                        但有时我们希望在外界能够控制组件内部的样式，此时，可以通过stylelsolation修改组件的样式隔离选项
                      </li>
                    </ul>
                    <table>
                      <tbody>
                        <tr>
                          <th>可选值</th>
                          <th>默认值</th>
                          <th>描述</th>
                        </tr>
                        <tr>
                          <td>isolated</td>
                          <td>是</td>
                          <td>
                            表示启用样式隔离，在自定义组件内外，使用class指定的样式将不会相互影响
                          </td>
                        </tr>
                        <tr>
                          <td>apply-shared</td>
                          <td>否</td>
                          <td>
                            表示页面wxss样式将影响到自定义组件，但自定义组件wxss中指定的样式不会影响页面
                          </td>
                        </tr>
                        <tr>
                          <td>shared</td>
                          <td>否</td>
                          <td>
                            表示页面wxss样式将影响到自定义组件，自定义组件WXss中指定的样式也会影响页面和其他设置了apply
                            shared 或 sharea的自定义组件
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <pre><code class="language-js line-numbers">  // components/test1/test.js
  Component（｛
    options:{
        styleIsolation: 'isolated'
    }</code></pre>
                  </li>
                  <li>
                    data数据 、 methods方法 、 properties属性
                    <ul>
                      <li>
                        在小程序组件中，用于组件模板渲染的私有数据，需要定义到data节点中，示例如下：
                        <pre><code class="language-js line-numbers">  /* 组件的初始数据 */
  data: {
      count: 0
  },</code></pre>
                      </li>
                      <li>
                        在小程序组件中，事件处理函数和自定义方法需要定义到methods节点中，示例代码如下：
                        <pre><code class="language-js line-numbers">  Component({
    methods:{                // 组件的方法列表【包含事件处理函数和自定义方法】
      addCount(){            // 事件处理函数
          this.setData({count: this.data.count + 1})
          this._showCount()  // 通过this 直接调用自定义方法
      },
      _showCount(){          // 自定义方法建议以开头
          wx.showToast({
              title:"count值为：" + this.data.count,
              icon: 'none'
          })
      }
    }
  })</code></pre>
                      </li>
                      <li>
                        在小程序组件中，properties是组件的对外属性，用来接收外界传递到组件中的数据，示例代码如下：
                        <pre><code class="language-js line-numbers">  // components/test1/test.js
  Component({
    //属性定义
    properties:{
       max: {    //完整定义属性的方式【当需要指定属性默认值时，建议使用此方式】
           type: Number,   //属性值的数据类型
           value: 10       //属性默认值
        },
        max: Number  //简化定义属性的方式【不需指定属性默认值时，可以使用简化方式】
    }
  })

  &lt;!--components/test1/test.wxml--&gt;
  &lt;my-test1&gt; max="10"&gt;&lt;/my-test1&gt;</code></pre>
                      </li>
                    </ul>
                  </li>
                  <li>
                    data和properties的区别。在小程序的组件中，properties
                    属性和data数据的用法相同，它们都是可读可写的，只不过：
                    <ul>
                      <li>data 更倾向于存储组件的私有数据</li>
                      <li>properties更倾向于存储外界传递到组件中的数据</li>
                    </ul>
                  </li>
                  <li>
                    使用setData 修改 properties的值
                    <ul>
                      <li>
                        由于data数据和properties属性在本质上没有任何区别，因此properties属性的值也可以用于页面渲染
                        <pre><code class="language-js line-numbers">  Component({
    methods:{
        showInfo(){
          console.log(this.data)        // 输出结果：{count：0，max：10}
          console.log(this.properties)  // 输出结果：{count：0，max：10}
          // 结果为true，证明 data数据和properties属性【在本质上是一样的、都是可读可写的】
          console.log(this.data===this.properties)
        }
    }
  })</code></pre>
                      </li>
                      <li>
                        或使用setData为properties中的属性重新赋值，示例代码如下：
                        <pre><code class="language-js line-numbers">  &lt;!--components/test1/test.wxml--&gt;
  &lt;text&gt;components/test1/test.wxml&lt;/text&gt;
  &lt;view&gt; max属性的值为：｛｛ max ｝｝&lt;/view&gt;

  // components/test1/test.js
  Component({
      properties: { max: Number},                            // 定义属性
      methods: {
          addCount(){
              this.setData({ max: this.properties.max + 1})  // 用setData修改属性值
          }
      }
  })</code></pre>
                      </li>
                    </ul>
                  </li>
                  <li>
                    数据监听器
                    <ul>
                      <li>
                        数据监听器用于监听和响应任何属性和数据字段的变化，从而执行特定的操作。它的作用类似于vue中
                        的watch侦听器。在小程序组件中，数据监听器的基本语法格式如下：
                        <pre><code class="language-js line-numbers">  Component({
    observers: {
        '字段A，字段B':function(字段A的新值，字段B的新值){
            // code
        }
    }
  })</code></pre>
                      </li>
                      <li>
                        用法（组件的UI结构如下）：
                        <pre><code class="language-js line-numbers">  // components/test1/test.js
  Component({
    options:{styleIsolation: 'isolated'},
    /* 组件的属性列表 */
    properties: {},

    /* 组件的初始数据 */
    data: { n1: 0, n2: 0, sum: 0 },
    /* 组件的方法列表*/
    methods: {
        addN1(){ this.setData({n1: this.data.n1 + 1})},
        addN2(){ this.setData({n2: this.data.n2 + 1})}
    },
    observers: {
        'n1, n2':function(n1,n2){ this.setData({sum: n1 + n2})}
    }
  })</code></pre>
                      </li>
                    </ul>
                  </li>
                  <li>
                    监听对象属性的变化
                    <ul>
                      <li>
                        数据监听器支持监听对象中单个或多个属性的变化，示例语法如下：
                        <pre><code class="language-js line-numbers">  Component({
    observers: {
        '对象.属性A，对象.属性B':function(属性A的新值，属性B的新值){
            /* code  触发此监听器的3种情况：
            1、为属性A赋值：使用setData设置this.data.对象.属性A 时触发
            2、为属性B赋值：使用setData设置this.data.对象.属性B 时触发
            3、直接为对象赋值：使用setData设置this.data.对象 时触发 */
        }
    }
  })</code></pre>
                      </li>
                    </ul>
                  </li>
                  <li>
                    监听案例
                    <pre><code class="language-js line-numbers">  // app.json
  {
    "pages":["pages/home/home", ],
    "window":{
      "backgroundTextStyle":"light","navigationBarBackgroundColor": "#2b4b6b",
      "navigationBarTitleText": "本地生活","navigationBarTextStyle":"white"
    },
    "tabBar": {
      "list": [{ "pagePath": "pages/home/home","text": "首页","iconPath": "/images/home.png",
        "selectedIconPath": "/images/home-active.png"},{"pagePath": "pages/message/message",
        "text": "消息","iconPath": "/images/message.png","selectedIconPath": "/images/message-active.png"
      },{"pagePath": "pages/contact/contact","text": "联系我们","iconPath": "/images/contact.png",
        "selectedIconPath": "/images/contact-active.png"}]
    },
    "style": "v2",
    "sitemapLocation": "sitemap.json",
    "usingComponents": {
      "my-test": "/components/test/test"
    }
  }

  &lt;!--pages/home/home.wxml--&gt;
  &lt;my-test&gt;&lt;/my-test&gt;

  // components/test/test.js
      /* 组件的初始数据*/
      data: {
          rgb:{r: 0,g: 0, b: 0
          },
          fullColor: '0,0,0'
      },

  渲染UI结构
  &lt;!--components/test/test.wxml--&gt;
  &lt;view&gt; style="background-color: rgb(｛｛ fullColor ｝｝);" class="colorBox"&gt;
  颜色值为: ｛｛ fullColor ｝｝&lt;/view&gt;
  &lt;button&gt; size="mini" bindtap="changeR" type="default"&gt;R&lt;/button&gt;
  &lt;button&gt; size="mini" bindtap="changeG" type="primary"&gt;G&lt;/button&gt;
  &lt;button&gt; size="mini" bindtap="changeB" type="warn"&gt;B&lt;/button&gt;

  // components/test/test.js
  Component({
      /* 组件的属性列表 */
      properties: {

      },

      /* 组件的初始数据 */
      data: {
          rgb:{
              r: 0,
              g: 0,
              b: 0
          },
          fullColor: '0, 0, 0'
      },

      /* 组件的方法列表 */
      methods: {
          changeR(){ // 修改 rgb 对象上的 r 属性值
              this.setData({
                  'rgb.r': this.data.rgb.r+5&gt;255?255:this.data.rgb.r+5
              });
          },
          changeG(){ // 修改 rgb 对象上的 g 属性值
              this.setData({
                  'rgb.g': this.data.rgb.r+5&gt;255?255:this.data.rgb.g+5
              });
          },
          changeB(){ // 修改 rgb 对象上的 b 属性值
              this.setData({
                  'rgb.b': this.data.rgb.b+5&gt;255?255:this.data.rgb.b+5
              });
          }
      },
      observers: {
          // 监听rgb对象上 r, g, b 三个子属性的变化
          'rgb.r, rgb.g, rgb.b': function(r,g,b){
              this.setData({
                  // 为data中的fullColor 重新赋值
                  fullColor: `${r},${g},${b}`
              })
          }
      }
  })</code></pre>
                  </li>
                  <li>
                    监听对象中所有属性的变化
                    <ul>
                      <li>
                        如果某个对象中需要被监听的属性太多，为了方便，可以使用通配符**来监听对象中所有属性的变化，
                        示例代码如下：
                        <pre><code class="language-js line-numbers">  observers: {
      // 监听rgb对象上 r, g, b 三个子属性的变化
      'rgb.**': function(obj){
          this.setData({
              // 为data中的fullColor 重新赋值
              fullColor: `${obj.r},${obj.g},${obj.b}`
          })
      }
  }</code></pre>
                      </li>
                    </ul>
                  </li>
                  <li>
                    纯数据字段
                    <ul>
                      <li>
                        概念：纯数据字段指的是那些不用于界面渲染的 data字段。
                      </li>
                      <li>
                        应用场景：例如有些情况下，某些data中的字段既不会展示在界面上，也不会传递给其他组件，
                        仅仅在当前组件内部使用。带有这种特性的 data
                        字段适合被设置为纯数据字段。
                      </li>
                      <li>好处：纯数据字段有助于提升页面更新的性能。</li>
                    </ul>
                  </li>
                  <li>
                    使用规则
                    <ul>
                      <li>
                        在Component构造器的options
                        节点中，指定pureDataPattern为一个正则表达式，字段名符合这个
                      </li>
                      <li>正则表达式的字段将成为纯数据字段，示例代码如下：</li>
                    </ul>
                    <pre><code class="language-js line-numbers">  Component({
    options:{
       //指定所有开头的数据字段为纯数据字段
      pureDataPattern: /A_/
    },
    data:{
        a:true,   //普通数据字段
        b:true    //纯数据字段
    }
  })</code></pre>
                  </li>
                </ul>
              </li>
              <li>使用npm包</li>
              <li>全局数据共享</li>
              <li>分包</li>
              <li>案例-自定义tabBar</li>
            </ul>
          </li>
        </ul>
      </el-card>
    </template>
  </card-container>
</template>

<script setup lang="ts" name="Applet">
import { ref } from "vue";

const data = ref([
  { id: 1, h2: "小程序" },
  { id: 2, h2: "小程序步骤" },
  { id: 3, h2: "语法" },
  { id: 4, h2: "全局配置" },
  { id: 5, h2: "其他" },
]);
</script>

<style scoped lang="scss"></style>
