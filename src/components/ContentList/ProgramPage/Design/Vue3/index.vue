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
          fill="#41B883"
          p-id="6335"
        />
        <path
          d="M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"
          fill="#34495E"
          p-id="6336"
        />
      </svg>
      <h1>Vue3</h1>
    </template>
    <template #describe>
      <p>
        Vue 3是Vue.js的最新版本,Vue
        3采用了新的虚拟DOM算法，通过更好的内存管理和优化的diff算法，显著提升了渲染速度和内存使用效率。组合式API是Vue
        3的核心特性之一。Vue
        3适用于各种前端开发场景，特别是构建复杂的单页应用和组件库。
      </p>
    </template>
    <template #content>
      <el-card id="part1" shadow="hover">
        <h2>Vue3</h2>
        <p>简介</p>
        <ul>
          <li>2020年9月18日，Vue.js发布版3.0版本，代号：One Piece</li>
          <li>经历了：4800+次提交、40+个RFC、600+次PR、300+贡献者</li>
          <li>官方发版地址：Release v3.0.0 One Piece · vuejs/core</li>
          <li>截止2023年10月，最新的公开版本为：3.3.4</li>
        </ul>
        <p>性能的提升</p>
        <ul>
          <li>打包大小减少41%。</li>
          <li>初次渲染快55%, 更新渲染快133%。</li>
          <li>内存减少54%。</li>
        </ul>
        <p>源码的升级</p>
        <ul>
          <li>使用Proxy代替defineProperty实现响应式</li>
          <li>重写虚拟DOM的实现和Tree-Shaking</li>
        </ul>
        <p>拥抱TypeScript</p>
        <ul>
          <li>Vue3可以更好的支持TypeScript</li>
        </ul>
        <p>新的特性</p>
        <ul>
          <li>
            Composition API（组合API）ul>li*3
            <ul>
              <li>setup</li>
              <li>ref与reactive</li>
              <li>computed与watch</li>
              <li>......</li>
            </ul>
          </li>
          <li>
            新的内置组件
            <ul>
              <li>Fragment</li>
              <li>Teleport</li>
              <li>Suspense</li>
              <li>......</li>
            </ul>
          </li>
          <li>
            其他改变
            <ul>
              <li>新的生命周期钩子</li>
              <li>data 选项应始终被声明为一个函数</li>
              <li>移除keyCode支持作为v-on 的修饰符</li>
              <li>......</li>
            </ul>
          </li>
          <li></li>
        </ul>
      </el-card>
      <el-card id="part2" shadow="hover">
        <h2>创建Vue3工程</h2>
        <ul>
          <li>
            基于vue-cli 创建
            <ul>
              <li>目前vue-cli已处于维护模式，官方推荐基于 Vite 创建项目。</li>
            </ul>
          </li>
          <li>
            基于 vite 创建 (推荐)
            <ul>
              <li>
                vite
                是新一代前端构建工具，官网地址：https://vitejs.cn，vite的优势如下：
                <ul>
                  <li>轻量快速的热重载（HMR），能实现极速的服务启动。</li>
                  <li>对 TypeScript、JSX、CSS 等支持开箱即用。</li>
                  <li>真正的按需编译，不再等待整个应用编译完成。</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            具体操作如下
            <pre><code class="language-powershell line-numbers">  ## 1.创建命令
  npm create vue@latest

  ## 2.具体配置
  ## 配置项目名称
  √ Project name: vue3_test
  ## 是否添加TypeScript支持
  √ Add TypeScript?  Yes
  ## 是否添加JSX支持
  √ Add JSX Support?  No
  ## 是否添加路由环境
  √ Add Vue Router for Single Page Application development?  No
  ## 是否添加pinia环境
  √ Add Pinia for state management?  No
  ## 是否添加单元测试
  √ Add Vitest for Unit Testing?  No
  ## 是否添加端到端测试方案
  √ Add an End-to-End Testing Solution? » No
  ## 是否添加ESLint语法检查
  √ Add ESLint for code quality?  Yes
  ## 是否添加Prettiert代码格式化
  √ Add Prettier for code formatting?  No

  ## 安装node依赖
  npm i</code></pre>
          </li>
        </ul>
      </el-card>
      <el-card id="part3" shadow="hover">
        <h2>Vue3核心语法</h2>
        <p>OptionsAPI 与 CompositionAPI</p>
        <ul>
          <li>Vue2的API设计是Options（配置）风格的。</li>
          <li>Vue3的API设计是Composition（组合）风格的。</li>
          <li>
            Options API 的弊端
            <ul>
              <li>
                Options类型的
                API，数据、方法、计算属性等，是分散在：data、methods、computed中的，若想新增或者修改一个需求，就需要分别修改：data、methods、computed，不便于维护和复用。
              </li>
            </ul>
          </li>
          <p>Composition API 的优势</p>
          <ul>
            <li>
              可以用函数的方式，更加优雅的组织代码，让相关功能的代码更加有序的组织在一起。
            </li>
          </ul>
        </ul>
        <p>setup 概述</p>
        <ul>
          <li>
            setup是Vue3中一个新的配置项，值是一个函数，它是 Composition API
            “表演的舞台”，组件中所用到的：数据、方法、计算属性、监视......等等，均配置在setup中。
          </li>
          <li>
            特点如下：
            <ul>
              <li>setup函数返回的对象中的内容，可直接在模板中使用。</li>
              <li>setup中访问this是undefined。</li>
              <li>
                setup函数会在beforeCreate之前调用，它是“领先”所有钩子执行的。
              </li>
            </ul>
            <pre><code class="language-js line-numbers">  &lt;template&gt;
    &lt;div class="person"&gt;
      &lt;h2&gt;姓名：｛｛ name ｝｝&lt;/h2&gt;
      &lt;h2&gt;年龄：｛｛ age ｝｝&lt;/h2&gt;
      &lt;button @click="changeName"&gt;修改名字&lt;/button&gt;
      &lt;button @click="changeAge"&gt;年龄+1&lt;/button&gt;
      &lt;button @click="showTel"&gt;点我查看联系方式&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;script lang="ts"&gt;
    export default {
      name:'Person',
      setup(){
        // 数据，原来写在data中（注意：此时的name、age、tel数据都不是响应式数据）
        let name = '张三'
        let age = 18
        let tel = '13888888888'

        // 方法，原来写在methods中
        function changeName(){
          name = 'zhang-san' //注意：此时这么修改name页面是不变化的
          console.log(name)
        }
        function changeAge(){
          age += 1 //注意：此时这么修改age页面是不变化的
          console.log(age)
        }
        function showTel(){
          alert(tel)
        }

        // 返回一个对象，对象中的内容，模板中可以直接使用
        return {name,age,tel,changeName,changeAge,showTel}
      }
    }
  &lt;/script&gt;</code></pre>
          </li>
        </ul>
        <p>setup 的返回值</p>
        <ul>
          <li>
            若返回一个对象：则对象中的：属性、方法等，在模板中均可以直接使用（重点关注）。
          </li>
          <li>
            若返回一个函数：则可以自定义渲染内容，代码如下：
            <pre><code class="language-js line-numbers">  setup(){
    return ()=> '你好啊！'
  }</code></pre>
          </li>
        </ul>
        <p>setup 与 Options API 的关系</p>
        <ul>
          <li>
            Vue2 的配置（data、methos......）中可以访问到 setup`中的属性、方法。
          </li>
          <li>但在setup中不能访问到Vue2的配置（dat`、methos......）。</li>
          <li>如果与Vue2冲突，则setup优先。</li>
        </ul>
        <p>setup 语法糖</p>
        <pre><code class="language-js line-numbers">  // setup函数有一个语法糖，这个语法糖，可以让我们把setup独立出去，代码如下：
    &lt;div class="person"&gt;
      &lt;h2&gt;姓名：｛｛name｝｝&lt;/h2&gt;
      &lt;h2&gt;年龄：｛｛age｝｝&lt;/h2&gt;
      &lt;button @click="changName"&gt;修改名字&lt;/button&gt;
      &lt;button @click="changAge"&gt;年龄+1&lt;/button&gt;
      &lt;button @click="showTel"&gt;点我查看联系方式&lt;/button&gt;
    &lt;/div&gt;

    export default {
      name:'Person',
    }

  // 下面的写法是setup语法糖
    console.log(this) //undefined

    // 数据（注意：此时的name、age、tel都不是响应式数据）
    let name = '张三'
    let age = 18
    let tel = '13888888888'

    // 方法
    function changName(){
      name = '李四'    // 注意：此时这么修改name页面是不变化的
    }
    function changAge(){
      console.log(age)
      age += 1         // 注意：此时这么修改age页面是不变化的
    }
    function showTel(){
      alert(tel)
    }

  // 扩展：上述代码，还需要编写一个不写`setup`的`script`标签，去指定组件名字，比较麻烦，我们可以借助`vite`中的插件简化
  第一步：npm i vite-plugin-vue-setup-extend -D
  第二步：vite.config.ts

  import { defineConfig } from 'vite'
  import VueSetupExtend from 'vite-plugin-vue-setup-extend'
  export default defineConfig({
    plugins: [ VueSetupExtend() ]
  })

  第三步：&lt;script setup lang="ts" name="Person"&gt;</code></pre>
        <p>ref 创建：基本类型的响应式数据</p>
        <ul>
          <li>作用：定义响应式变量</li>
          <li>语法：let xxx = ref(初始值)</li>
          <li>
            返回值：一个RefImpl的实例对象，简称ref对象或ref，ref`对象的value属性是响应式的
          </li>
          <li>
            注意点：
            <ul>
              <li>
                JS中操作数据需要：xxx.value，但模板中不需要.value，直接使用即可。
              </li>
              <li>
                对于let name =
                ref('张三')来说，name不是响应式的，name.value是响应式的。
              </li>
            </ul>
          </li>
        </ul>
        <pre><code class="language-js line-numbers">  &lt;template&gt;
    &lt;div class="person"&gt;
      &lt;h2&gt;姓名：｛｛name｝｝&lt;/h2&gt;
      &lt;h2&gt;年龄：｛｛age｝｝&lt;/h2&gt;
      &lt;button&gt; @click="changeName"&gt;修改名字&lt;/button&gt;
      &lt;button&gt; @click="changeAge"&gt;年龄+1&lt;/button&gt;
      &lt;button&gt; @click="showTel"&gt;点我查看联系方式&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;script&gt; setup lang="ts" name="Person"&gt;
    import {ref} from 'vue'
    // name和age是一个RefImpl的实例对象，简称ref对象，它们的value属性是响应式的。
    let name = ref('张三')
    let age = ref(18)
    // tel就是一个普通的字符串，不是响应式的
    let tel = '13888888888'

    function changeName(){
      // JS中操作ref对象时候需要.value
      name.value = '李四'
      console.log(name.value)

      // 注意：name不是响应式的，name.value是响应式的，所以如下代码并不会引起页面的更新。
      // name = ref('zhang-san')
    }
    function changeAge(){
      // JS中操作ref对象时候需要.value
      age.value += 1
      console.log(age.value)
    }
    function showTel(){
      alert(tel)
    }
  &lt;/script&gt;</code></pre>
        <p>reactive 创建：对象类型的响应式数据</p>
        <ul>
          <li>
            作用：定义一个响应式对象（基本类型不要用它，要用ref，否则报错）
          </li>
          <li>语法：let 响应式对象= reactive(源对象)。</li>
          <li>返回值：一个Proxy的实例对象，简称：响应式对象。</li>
          <li>注意点：reactive定义的响应式数据是“深层次”的。</li>
        </ul>
        <pre><code class="language-js line-numbers">  &lt;template&gt;
    &lt;div class="person"&gt;
      &lt;h2&gt;汽车信息：一台｛｛ car.brand ｝｝汽车，价值｛｛ car.price ｝｝万&lt;/h2&gt;
      &lt;h2&gt;游戏列表：&lt;/h2&gt;
      &lt;ul&gt;
        &lt;li v-for="g in games" :key="g.id"&gt;｛｛ g.name ｝｝&lt;/li&gt;
      &lt;/ul&gt;
      &lt;h2&gt;测试：｛｛obj.a.b.c.d｝｝&lt;/h2&gt;
      &lt;button @click="changeCarPrice"&gt;修改汽车价格&lt;/button&gt;
      &lt;button @click="changeFirstGame"&gt;修改第一游戏&lt;/button&gt;
      &lt;button @click="test"&gt;测试&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;script lang="ts" setup name="Person"&gt;
  import { reactive } from 'vue'

  // 数据
  let car = reactive({ brand: '奔驰', price: 100 })
  let games = reactive([
    { id: 'ahsgdyfa01', name: '英雄联盟' },
    { id: 'ahsgdyfa02', name: '王者荣耀' },
    { id: 'ahsgdyfa03', name: '原神' }
  ])
  let obj = reactive({
    a:{
      b:{
        c:{
          d:666
        }
      }
    }
  })

  function changeCarPrice() {
    car.price += 10
  }
  function changeFirstGame() {
    games[0].name = '流星蝴蝶剑'
  }
  function test(){
    obj.a.b.c.d = 999
  }
  &lt;/script&gt;</code></pre>
        <p>ref 创建：对象类型的响应式数据</p>
        <ul>
          <li>其实ref接收的数据可以是：基本类型、对象类型。</li>
          <li>若ref接收的是对象类型，内部其实也是调用了reactive函数。</li>
        </ul>
        <pre><code class="language-js line-numbers">  &lt;template&gt;
    &lt;div class="person"&gt;
      &lt;h2&gt;汽车信息：一台｛｛ car.brand ｝｝汽车，价值｛｛ car.price ｝｝万&lt;/h2&gt;
      &lt;h2&gt;游戏列表：&lt;/h2&gt;
      &lt;ul&gt;
        &lt;li v-for="g in games" :key="g.id"&gt;｛｛ g.name ｝｝&lt;/li&gt;
      &lt;/ul&gt;
      &lt;h2&gt;测试：｛｛obj.a.b.c.d｝｝&lt;/h2&gt;
      &lt;button @click="changeCarPrice"&gt;修改汽车价格&lt;/button&gt;
      &lt;button @click="changeFirstGame"&gt;修改第一游戏&lt;/button&gt;
      &lt;button @click="test"&gt;测试&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;script lang="ts" setup name="Person"&gt;
  import { ref } from 'vue'

  // 数据
  let car = ref({ brand: '奔驰', price: 100 })
  let games = ref([
    { id: 'ahsgdyfa01', name: '英雄联盟' },
    { id: 'ahsgdyfa02', name: '王者荣耀' },
    { id: 'ahsgdyfa03', name: '原神' }
  ])
  let obj = ref({
    a:{
      b:{
        c:{
          d:666
        }
      }
    }
  })

  console.log(car)

  function changeCarPrice() {
    car.value.price += 10
  }
  function changeFirstGame() {
    games.value[0].name = '流星蝴蝶剑'
  }
  function test(){
    obj.value.a.b.c.d = 999
  }
  &lt;/script&gt;</code></pre>
        <p>ref 对比 reactive</p>
        <ul>
          <li>
            宏观角度看：
            <ul>
              <li>ref用来定义：基本类型数据、对象类型数据；</li>
              <li>reactive用来定义：对象类型数据。</li>
            </ul>
          </li>
          <li>
            区别：
            <ul>
              <li>
                ref创建的变量必须使用.value（可以使用volar插件自动添加.value）。
              </li>
              <li>
                reactive重新分配一个新对象，会失去响应式（可以使用Object.assign去整体替换）。
              </li>
            </ul>
          </li>
          <li>
            使用原则：
            <ul>
              <li>若需要一个基本类型的响应式数据，必须使用ref。</li>
              <li>若需要一个响应式对象，层级不深，ref、reactive都可以。</li>
              <li>若需要一个响应式对象，且层级较深，推荐使用reactive。</li>
            </ul>
          </li>
        </ul>
        <p>toRefs 与 toRef</p>
        <ul>
          <li>作用：将一个响应式对象中的每一个属性，转换为ref对象</li>
          <li>备注：toRefs与toRef功能一致，但toRefs可以批量转换</li>
          <li>
            语法如下：
            <pre><code class="language-js line-numbers">  &lt; template&gt;
    &lt; div class="person"&gt;
      &lt; h2&gt;姓名：｛｛person.name｝｝&lt; /h2&gt;
      &lt; h2&gt;年龄：｛｛person.age｝｝&lt; /h2&gt;
      &lt; h2&gt;性别：｛｛person.gender｝｝&lt; /h2&gt;
      &lt; button&gt; @click="changeName"&gt;修改名字&lt; /button&gt;
      &lt; button&gt; @click="changeAge"&gt;修改年龄&lt; /button&gt;
      &lt; button&gt; @click="changeGender"&gt;修改性别&lt; /button&gt;
    &lt; /div&gt;
  &lt; /template&gt;

  &lt; script&gt; lang="ts" setup name="Person"&gt;
    import {ref,reactive,toRefs,toRef} from 'vue'

    // 数据
    let person = reactive({name:'张三', age:18, gender:'男'})
    // 通过toRefs将person对象中的n个属性批量取出，且依然保持响应式的能力
    let {name,gender} =  toRefs(person)
    // 通过toRef将person对象中的gender属性取出，且依然保持响应式的能力
    let age = toRef(person,'age')

    // 方法
    function changeName(){
      name.value += '~'
    }
    function changeAge(){
      age.value += 1
    }
    function changeGender(){
      gender.value = '女'
    }
  &lt; /script&gt;</code></pre>
          </li>
        </ul>
        <p>computed</p>
        <pre><code class="language-js line-numbers">  // 作用：根据已有数据计算出新数据（和Vue2中的computed作用一致）。

  &lt;template&gt;
    &lt;div class="person"&gt;
      姓：&lt;input type="text" v-model="firstName"&gt; &lt;br&gt;
      名：&lt;input type="text" v-model="lastName"&gt; &lt;br&gt;
      全名：&lt;span&gt;｛｛fullName｝｝&lt;/span&gt; &lt;br&gt;
      &lt;button @click="changeFullName"&gt;全名改为：li-si&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;script setup lang="ts" name="App"&gt;
    import {ref,computed} from 'vue'

    let firstName = ref('zhang')
    let lastName = ref('san')

    // 计算属性——只读取，不修改
    /* let fullName = computed(()=&gt;{
      return firstName.value + '-' + lastName.value
    }) */

    // 计算属性——既读取又修改
    let fullName = computed({
      // 读取
      get(){
        return firstName.value + '-' + lastName.value
      },
      // 修改
      set(val){
        console.log('有人修改了fullName',val)
        firstName.value = val.split('-')[0]
        lastName.value = val.split('-')[1]
      }
    })

    function changeFullName(){
      fullName.value = 'li-si'
    }
  &lt;/script&gt;
        </code></pre>
        <p>watch</p>
        <ul>
          <li>作用：监视数据的变化（和Vue2中的watch作用一致）</li>
          <li>
            - 特点：Vue3中的watch只能监视以下四种数据：
            <ul>
              <li>1. ref定义的数据。</li>
              <li>2. reactive定义的数据。</li>
              <li>3. 函数返回一个值（getter函数）。</li>
              <li>4. 一个包含上述内容的数组。</li>
            </ul>
          </li>
          <li>
            我们在Vue3中使用watch的时候，通常会遇到以下几种情况：
            <pre><code class="language-js line-numbers">  // 情况一
    // 监视ref定义的【基本类型】数据：直接写数据名即可，监视的是其value值的改变。
  &lt;template&gt;
    &lt;div class="person"&gt;
      &lt;h1&gt;情况一：监视【ref】定义的【基本类型】数据&lt;/h1&gt;
      &lt;h2&gt;当前求和为：｛｛sum｝｝&lt;/h2&gt;
      &lt;button&gt; @click="changeSum"&gt;点我sum+1&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;script&gt; lang="ts" setup name="Person"&gt;
    import {ref,watch} from 'vue'
    // 数据
    let sum = ref(0)
    // 方法
    function changeSum(){
      sum.value += 1
    }
    // 监视，情况一：监视【ref】定义的【基本类型】数据
    const stopWatch = watch(sum,(newValue,oldValue)=&gt;{
      console.log('sum变化了',newValue,oldValue)
      if(newValue &gt;= 10){
        stopWatch()
      }
    })
  &lt;/script&gt;

  // 情况二
    /* 监视ref定义的【对象类型】数据：直接写数据名，监视的是对象的【地址值】，若想监视对象内部的数据，要手动开启深度监视。
       注意：
       - 若修改的是ref定义的对象中的属性，newValue 和 oldValue 都是新值，因为它们是同一个对象。
       - 若修改整个ref定义的对象，newValue 是新值， oldValue 是旧值，因为不是同一个对象了。 */

  &lt;template&gt;
    &lt;div class="person"&gt;
      &lt;h1&gt;情况二：监视【ref】定义的【对象类型】数据&lt;/h1&gt;
      &lt;h2&gt;姓名：｛｛ person.name ｝｝&lt;/h2&gt;
      &lt;h2&gt;年龄：｛｛ person.age ｝｝&lt;/h2&gt;
      &lt;button @click="changeName"&gt;修改名字&lt;/button&gt;
      &lt;button @click="changeAge"&gt;修改年龄&lt;/button&gt;
      &lt;button @click="changePerson"&gt;修改整个人&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;script lang="ts" setup name="Person"&gt;
    import {ref,watch} from 'vue'
    // 数据
    let person = ref({
      name:'张三',
      age:18
    })
    // 方法
    function changeName(){person.value.name += '~'}
    function changeAge(){person.value.age += 1}
    function changePerson(){ person.value = {name:'李四',age:90} }
    /*
      监视，情况一：监视【ref】定义的【对象类型】数据，监视的是对象的地址值，若想监视对象内部属性的变化，需要手动开启深度监视
      watch的第一个参数是：被监视的数据
      watch的第二个参数是：监视的回调
      watch的第三个参数是：配置对象（deep、immediate等等.....）
    */
    watch(person,(newValue,oldValue)=&gt;{
      console.log('person变化了',newValue,oldValue)
    },{deep:true})

  &lt;/script&gt;

  //  情况三
    // 监视reactive定义的【对象类型】数据，且默认开启了深度监视。

    &lt;template&gt;
    &lt;div class="person"&gt;
      &lt;h1&gt;情况三：监视【reactive】定义的【对象类型】数据&lt;/h1&gt;
      &lt;h2&gt;姓名：｛｛ person.name ｝｝&lt;/h2&gt;
      &lt;h2&gt;年龄：｛｛ person.age ｝｝&lt;/h2&gt;
      &lt;button&gt; @click="changeName"&gt;修改名字&lt;/button&gt;
      &lt;button&gt; @click="changeAge"&gt;修改年龄&lt;/button&gt;
      &lt;button&gt; @click="changePerson"&gt;修改整个人&lt;/button&gt;
      &lt;hr&gt;
      &lt;h2&gt;测试：｛｛obj.a.b.c｝｝&lt;/h2&gt;
      &lt;button&gt; @click="test"&gt;修改obj.a.b.c&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;script&gt; lang="ts" setup name="Person"&gt;
    import {reactive,watch} from 'vue'
    // 数据
    let person = reactive({
      name:'张三',
      age:18
    })
    let obj = reactive({
      a:{
        b:{
          c:666
        }
      }
    })
    // 方法
    function changeName(){person.name += '~'}
    function changeAge(){person.age += 1}
    function changePerson(){Object.assign(person,{name:'李四',age:80}) }
    function test(){obj.a.b.c = 888}

    // 监视，情况三：监视【reactive】定义的【对象类型】数据，且默认是开启深度监视的
    watch(person,(newValue,oldValue)=&gt;{
      console.log('person变化了',newValue,oldValue)
    })
    watch(obj,(newValue,oldValue)=&gt;{
      console.log('Obj变化了',newValue,oldValue)
    })
  &lt;/script&gt;

  // 情况四
    /* 监视ref或reactive定义的【对象类型】数据中的某个属性，注意点如下：
  1. 若该属性值不是【对象类型】，需要写成函数形式。
  2. 若该属性值是依然是【对象类型】，可直接编，也可写成函数，建议写成函数。

  结论：监视的要是对象里的属性，那么最好写函数式，注意点：若是对象监视的是地址值，需要关注对象内部，需要手动开启深度监视。*/

  &lt;template&gt;
    &lt;div class="person"&gt;
      &lt;h1&gt;情况四：监视【ref】或【reactive】定义的【对象类型】数据中的某个属性&lt;/h1&gt;
      &lt;h2&gt;姓名：｛｛ person.name ｝｝&lt;/h2&gt;
      &lt;h2&gt;年龄：｛｛ person.age ｝｝&lt;/h2&gt;
      &lt;h2&gt;汽车：｛｛ person.car.c1 ｝｝、｛｛ person.car.c2 ｝｝&lt;/h2&gt;
      &lt;button @click="changeName"&gt;修改名字&lt;/button&gt;
      &lt;button @click="changeAge"&gt;修改年龄&lt;/button&gt;
      &lt;button @click="changeC1"&gt;修改第一台车&lt;/button&gt;
      &lt;button @click="changeC2"&gt;修改第二台车&lt;/button&gt;
      &lt;button @click="changeCar"&gt;修改整个车&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;script lang="ts" setup name="Person"&gt;
    import {reactive,watch} from 'vue'

    // 数据
    let person = reactive({
      name:'张三',
      age:18,
      car:{
        c1:'奔驰',
        c2:'宝马'
      }
    })
    // 方法
    function changeName(){ person.name += '~' }
    function changeAge(){ person.age += 1}
    function changeC1(){ person.car.c1 = '奥迪'}
    function changeC2(){ person.car.c2 = '大众'}
    function changeCar(){ person.car = {c1:'雅迪',c2:'爱玛'} }

    // 监视，情况四：监视响应式对象中的某个属性，且该属性是基本类型的，要写成函数式
    /* watch(()=&gt; person.name,(newValue,oldValue)=&gt;{
      console.log('person.name变化了',newValue,oldValue)
    }) */

    // 监视，情况四：监视响应式对象中的某个属性，且该属性是对象类型的，可以直接写，也能写函数，更推荐写函数
    watch(()=&gt;person.car,(newValue,oldValue)=&gt;{
      console.log('person.car变化了',newValue,oldValue)
    },{deep:true})
  &lt;/script&gt;

  // 情况五
    // 监视上述的多个数据

  &lt;template&gt;
    &lt;div class="person"&gt;
      &lt;h1&gt;情况五：监视上述的多个数据&lt;/h1&gt;
      &lt;h2&gt;姓名：｛｛ person.name ｝｝&lt;/h2&gt;
      &lt;h2&gt;年龄：｛｛ person.age ｝｝&lt;/h2&gt;
      &lt;h2&gt;汽车：｛｛ person.car.c1 ｝｝、｛｛ person.car.c2 ｝｝&lt;/h2&gt;
      &lt;button&gt; @click="changeName"&gt;修改名字&lt;/button&gt;
      &lt;button&gt; @click="changeAge"&gt;修改年龄&lt;/button&gt;
      &lt;button&gt; @click="changeC1"&gt;修改第一台车&lt;/button&gt;
      &lt;button&gt; @click="changeC2"&gt;修改第二台车&lt;/button&gt;
      &lt;button&gt; @click="changeCar"&gt;修改整个车&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;script&gt; lang="ts" setup name="Person"&gt;
    import {reactive,watch} from 'vue'

    // 数据
    let person = reactive({
      name:'张三',
      age:18,
      car:{
        c1:'奔驰',
        c2:'宝马'
      }
    })
    // 方法
    function changeName(){ person.name += '~' }
    function changeAge(){ person.age += 1}
    function changeC1(){ person.car.c1 = '奥迪'}
    function changeC2(){person.car.c2 = '大众'}
    function changeCar(){person.car = {c1:'雅迪',c2:'爱玛'} }
    // 监视，情况五：监视上述的多个数据
    watch([()=&gt;person.name,person.car],(newValue,oldValue)=&gt;{
      console.log('person.car变化了',newValue,oldValue)
    },{deep:true})
  &lt;/script&gt;
  </code></pre>
            <p>watchEffect</p>
            <ul>
              <li>
                官网：立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行该函数。
              </li>
              <li>
                watch对比watchEffect
                <ul>
                  <li>
                    都能监听响应式数据的变化，不同的是监听数据变化的方式不同
                  </li>
                  <li>watch：要明确指出监视的数据</li>
                  <li>
                    watchEffect：不用明确指出监视的数据（函数中用到哪些属性，那就监视哪些属性）。
                  </li>
                  <li></li>
                </ul>
              </li>
              <li>示例代码：</li>
              <pre><code class="language-js line-numbers">  &lt;template&gt;
    &lt;div class="person"&gt;
      &lt;h1&gt;需求：水温达到50℃，或水位达到20cm，则联系服务器&lt;/h1&gt;
      &lt;h2 id="demo"&gt;水温：｛｛ temp｝｝&lt;/h2&gt;
      &lt;h2&gt;水位：｛｛ height｝｝&lt;/h2&gt;
      &lt;button @click="changePrice"&gt;水温+1&lt;/button&gt;
      &lt;button @click="changeSum"&gt;水位+10&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;script lang="ts" setup name="Person"&gt;
    import {ref,watch,watchEffect} from 'vue'
    // 数据
    let temp = ref(0)
    let height = ref(0)

    // 方法
    function changePrice(){
      temp.value += 10
    }
    function changeSum(){
      height.value += 1
    }

    // 用watch实现，需要明确的指出要监视：temp、height
    watch([temp,height],(value)=&gt;{
      // 从value中获取最新的temp值、height值
      const [newTemp,newHeight] = value
      // 室温达到50℃，或水位达到20cm，立刻联系服务器
      if(newTemp &gt;= 50 || newHeight &gt;= 20){
        console.log('联系服务器')
      }
    })

    // 用watchEffect实现，不用
    const stopWtach = watchEffect(()=&gt;{
      // 室温达到50℃，或水位达到20cm，立刻联系服务器
      if(temp.value &gt;= 50 || height.value &gt;= 20){
        console.log(document.getElementById('demo')?.innerText)
        console.log('联系服务器')
      }
      // 水温达到100，或水位达到50，取消监视
      if(temp.value === 100 || height.value === 50){
        console.log('清理了')
        stopWtach()
      }
    })
  &lt;/script&gt;</code></pre>
            </ul>
          </li>
        </ul>
        <p>标签的 ref 属性</p>
        <ul>
          <li>
            作用：用于注册模板引用。
            <ul>
              <li>用在普通DOM标签上，获取的是DOM节点。</li>
              <li>用在组件标签上，获取的是组件实例对象。</li>
            </ul>
          </li>
          <li>
            用在普通DOM标签上：
            <pre><code class="language-js line-numbers">  &lt;template&gt;
    &lt;div class="person"&gt;
      &lt;h1&gt; ref="title1"&gt;尚硅谷&lt;/h1&gt;
      &lt;h2&gt; ref="title2"&gt;前端&lt;/h2&gt;
      &lt;h3&gt; ref="title3"&gt;Vue&lt;/h3&gt;
      &lt;input type="text" ref="inpt"&gt; &lt;br&gt;&lt;br&gt;
      &lt;button&gt; @click="showLog"&gt;点我打印内容&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;script&gt; lang="ts" setup name="Person"&gt;
    import {ref} from 'vue'
    let title1 = ref()
    let title2 = ref()
    let title3 = ref()
    function showLog(){
      // 通过id获取元素
      const t1 = document.getElementById('title1')
      // 打印内容
      console.log((t1 as HTMLElement).innerText)
      console.log((&lt;HTMLElement&gt;t1).innerText)
      console.log(t1?.innerText)

      /************************************/
      // 通过ref获取元素
      console.log(title1.value)
      console.log(title2.value)
      console.log(title3.value)
    }
  &lt;/script&gt;

  // 用在组件标签上：
  &lt;!-- 父组件App.vue --&gt;
  &lt;template&gt;
    &lt;Person ref="ren"/&gt;
    &lt;button&gt; @click="test"&gt;测试&lt;/button&gt;
  &lt;/template&gt;

  &lt;script&gt; lang="ts" setup name="App"&gt;
    import Person from './components/Person.vue'
    import {ref} from 'vue'
    let ren = ref()
    function test(){
      console.log(ren.value.name)
      console.log(ren.value.age)
    }
  &lt;/script&gt;

  &lt;!-- 子组件Person.vue中要使用defineExpose暴露内容 --&gt;
  &lt;script&gt; lang="ts" setup name="Person"&gt;
    import {ref,defineExpose} from 'vue'
    // 数据
    let name = ref('张三')
    let age = ref(18)
    /****************************/
    /****************************/
    // 使用defineExpose将组件中的数据交给外部
    defineExpose({name,age})
  &lt;/script&gt;</code></pre>
          </li>
        </ul>
        <p>props</p>
        <pre><code class="language-js line-numbers">  // 定义一个接口，限制每个Person对象的格式
  export interface PersonInter {
  id:string,
  name:string,
    age:number
  }

  // 定义一个自定义类型Persons
  export type Persons = Array&lt;PersonInter&gt;&lt;/PersonInter&gt;

  // App.vue中代码：
  &lt;template&gt;
  &lt;Person :list="persons"/&gt;
  &lt;/template&gt;

  &lt;script lang="ts" setup name="App"&gt;
  import Person from './components/Person.vue'
  import {reactive} from 'vue'
  import {type Persons} from './types'

  let persons = reactive&lt;Persons&gt;([
      {id:'e98219e12',name:'张三',age:18},
      {id:'e98219e13',name:'李四',age:19},
      {id:'e98219e14',name:'王五',age:20}
    ])
  &lt;/script&gt;

  // Person.vue中代码：
  &lt;template&gt;
  &lt;div class="person"&gt;
  &lt;ul&gt;
    &lt;li v-for="item in list" :key="item.id"&gt;
        ｛｛ item.name｝｝--｛｛ item.age｝｝
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  &lt;/template&gt;

  &lt;script lang="ts" setup name="Person"&gt;
  import {defineProps} from 'vue'
  import {type PersonInter} from '@/types'

  // 第一种写法：仅接收
  // const props = defineProps(['list'])

  // 第二种写法：接收+限制类型
  // defineProps&lt;{list:Persons}&gt;()

  // 第三种写法：接收+限制类型+指定默认值+限制必要性
  let props = withDefaults(defineProps&lt;{list?:Persons}&gt;(),{
    list:()=&gt;[{id:'asdasg01',name:'小猪佩奇',age:18}]
  })
  console.log(props)
  &lt;/script&gt;</code></pre>
        <p>生命周期</p>
        <ul>
          <li>
            概念：Vue组件实例在创建时要经历一系列的初始化步骤，在此过程中Vue会在合适的时机，调用特定的函数，从而让开发者有机会在特定阶段运行自己的代码，这些特定的函数统称为：生命周期钩子
          </li>
          <li>
            规律：
            <ul>
              <li>
                生命周期整体分为四个阶段，分别是：创建、挂载、更新、销毁，每个阶段都有两个钩子，一前一后。
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>创建阶段：beforeCreate、created</li>
              <li>挂载阶段：beforeMount、mounted</li>
              <li>更新阶段：beforeUpdate、updated</li>
              <li>销毁阶段：beforeDestroy、destroyed</li>
            </ul>
          </li>
          <li>
            Vue3的生命周期
            <ul>
              <li>创建阶段：setup</li>
              <li>挂载阶段：onBeforeMount、onMounted</li>
              <li>更新阶段：onBeforeUpdate、onUpdated</li>
              <li>卸载阶段：onBeforeUnmount、onUnmounted</li>
            </ul>
          </li>
          <li>
            常用的钩子：onMounted(挂载完毕)、onUpdated(更新完毕)、onBeforeUnmount(卸载之前)
          </li>
          <li>
            示例代码：
            <pre><code class="language-js line-numbers">  &lt;template&gt;
    &lt;div class="person"&gt;
      &lt;h2&gt;当前求和为：｛｛  sum  ｝｝&lt;/h2&gt;
      &lt;button&gt; @click="changeSum"&gt;点我sum+1&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;!-- vue3写法 --&gt;
  &lt;script&gt; lang="ts" setup name="Person"&gt;
    import {
      ref,
      onBeforeMount,
      onMounted,
      onBeforeUpdate,
      onUpdated,
      onBeforeUnmount,
      onUnmounted
    } from 'vue'

    // 数据
    let sum = ref(0)
    // 方法
    function changeSum() {sum.value += 1}
    console.log('setup')
    // 生命周期钩子
    onBeforeMount(()=&gt;{console.log('挂载之前')})
    onMounted(()=&gt;{ console.log('挂载完毕') })
    onBeforeUpdate(()=&gt;{ console.log('更新之前') })
    onUpdated(()=&gt;{ console.log('更新完毕') })
    onBeforeUnmount(()=&gt;{ console.log('卸载之前') })
    onUnmounted(()=&gt;{ console.log('卸载完毕') })
  &lt;/script&gt;</code></pre>
          </li>
        </ul>
        <p>自定义hook</p>
        <ul>
          <li>
            什么是hook？—— 本质是一个函数，把setup函数中使用的Composition
            API进行了封装，类似于vue2.x中的mixin。
          </li>
          <li>自定义hook的优势：复用代码, 让setup中的逻辑更清楚易懂。</li>
          <li>
            示例代码：
            <pre><code class="language-js line-numbers">  // useSum.ts中内容如下：
  import {ref,onMounted} from 'vue'
  export default function(){
    let sum = ref(0)
    const increment = ()=&gt;{ sum.value += 1}
    const decrement = ()=&gt;{ sum.value -= 1}
    onMounted(()=&gt;{ increment()})

    //向外部暴露数据
    return {sum,increment,decrement}
  }

  // useDog.ts中内容如下：
  import {reactive,onMounted} from 'vue'
  import axios,{AxiosError} from 'axios'

  export default function(){
    let dogList = reactive&lt;string[]&gt;([])
    // 方法
    async function getDog(){
      try {
        // 发请求
        let {data} = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
        // 维护数据
        dogList.push(data.message)
      } catch (error) {
        // 处理错误
        const err = &lt;AxiosError&gt;error
        console.log(err.message)
      }
    }

    // 挂载钩子
    onMounted(()=&gt;{getDog()})
    //向外部暴露数据
    return {dogList,getDog}
  }

  // 组件中具体使用：
  &lt;template&gt;
    &lt;h2&gt;当前求和为：｛｛sum｝｝&lt;/h2&gt;
    &lt;button @click="increment"&gt;点我+1&lt;/button&gt;
    &lt;button @click="decrement"&gt;点我-1&lt;/button&gt;
    &lt;hr&gt;
    &lt;img v-for="(u,index) in dogList.urlList" :key="index" :src="(u as string)"&gt;
    &lt;span v-show="dogList.isLoading"&gt;加载中......&lt;/span&gt;&lt;br&gt;
    &lt;button @click="getDog"&gt;再来一只狗&lt;/button&gt;
  &lt;/template&gt;

  &lt;script lang="ts"&gt;
    import {defineComponent} from 'vue'
    export default defineComponent({ name:'App',})
  &lt;/script&gt;

  &lt;script setup lang="ts"&gt;
    import useSum from './hooks/useSum'
    import useDog from './hooks/useDog'
    let {sum,increment,decrement} = useSum()
    let {dogList,getDog} = useDog()
  &lt;/script&gt;</code></pre>
          </li>
        </ul>
      </el-card>
      <el-card id="part4" shadow="hover">
        <h2>Vue3路由</h2>
        <p>基本切换效果</p>
        <ul>
          <li>Vue3中要使用vue-router的最新版本，目前是4版本。</li>
          <li>终端安装： npm i vue-router</li>
          <li>
            路由配置文件代码如下：
            <pre><code class="language-js line-numbers">  import {createRouter,createWebHistory} from 'vue-router'
  import Home from '@/pages/Home.vue'
  import News from '@/pages/News.vue'
  import About from '@/pages/About.vue'

  const router = createRouter({
    history:createWebHistory(),
    routes:[
      {
        path:'/home',
        component:Home
      },
      {
        path:'/about',
        component:About
      }
    ]
  })
  export default router

  // main.ts代码如下：
  import router from './router/index'
  pp.use(router)
  pp.mount('#app')

  // App.vue代码如下
  &lt;template&gt;
    &lt;div class="app"&gt;
      &lt;h2 class="title"&gt;Vue路由测试&lt;/h2&gt;
      &lt;!-- 导航区 --&gt;
      &lt;div class="navigate"&gt;
        &lt;RouterLink to="/home" active-class="active"&gt;首页&lt;/RouterLink&gt;
        &lt;RouterLink to="/news" active-class="active"&gt;新闻&lt;/RouterLink&gt;
        &lt;RouterLink to="/about" active-class="active"&gt;关于&lt;/RouterLink&gt;
      &lt;/div&gt;
      &lt;!-- 展示区 --&gt;
      &lt;div class="main-content"&gt;
        &lt;RouterView&gt;&lt;/RouterView&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;script lang="ts" setup name="App"&gt;
    import {RouterLink,RouterView} from 'vue-router'
  &lt;/script&gt;

</code></pre>
          </li>
        </ul>
        <p>两个注意点</p>
        <ul>
          <li>
            路由组件通常存放在pages 或
            views文件夹，一般组件通常存放在components文件夹。
          </li>
          <li>
            通过点击导航，视觉效果上“消失”
            了的路由组件，默认是被卸载掉的，需要的时候再去挂载。
          </li>
        </ul>
        <p>路由器工作模式</p>
        <pre><code class="language-js line-numbers">  // history模式
  /* 优点：URL更加美观，不带有#，更接近传统的网站URL。
     缺点：后期项目上线，需要服务端配合处理路径问题，否则刷新会有404错误。 */
  const router = createRouter({
    history:createWebHistory(), //history模式
    /******/
  })

  // hash模式
  /* 优点：兼容性更好，因为不需要服务器端处理路径。
     缺点：URL带有#不太美观，且在SEO优化方面相对较差。
  const router = createRouter({
    history:createWebHashHistory(), //hash模式
    /******/
  })</code></pre>
        <p>to的两种写法</p>
        <pre><code class="language-js line-numbers">  &lt;!-- 第一种：to的字符串写法 --&gt;
  &lt;router-link&gt; active-class="active" to="/home"&gt;主页&lt;/router-link&gt;

  &lt;!-- 第二种：to的对象写法 --&gt;
  &lt;router-link&gt; active-class="active" :to="{path:'/home'}"&gt;Home&lt;/router-link&gt;</code></pre>
        <p>命名路由</p>
        <ul>
          <li>作用：可以简化路由跳转及传参（后面就讲）。</li>
        </ul>
        <pre><code class="language-js line-numbers">  // 给路由规则命名：
  routes:[
    {
      name:'zhuye',
      path:'/home',
      component:Home
    },
    {
      name:'xinwen',
      path:'/news',
      component:News,
    },
    {
      name:'guanyu',
      path:'/about',
      component:About
    }
  ]

  // 跳转路由：
  &lt;!--简化前：需要写完整的路径（to的字符串写法） --&gt;
  &lt;router-link to="/news/detail"&gt;跳转&lt;/router-link&gt;

  &lt;!--简化后：直接通过名字跳转（to的对象写法配合name属性） --&gt;
  &lt;router-link :to="{name:'guanyu'}"&gt;跳转&lt;/router-link&gt;</code></pre>
        <p>嵌套路由</p>
        <ul>
          <li>编写News的子路由：Detail.vue</li>
          <pre><code class="language-js line-numbers">  // 配置路由规则，使用children配置项：
  const router = createRouter({
    history:createWebHistory(),
    routes:[
      {
        name:'zhuye',
        path:'/home',
        component:Home
      },
      {
        name:'xinwen',
        path:'/news',
        component:News,
        children:[
          {
            name:'xiang',
            path:'detail',
            component:Detail
          }
        ]
      },
      {
        name:'guanyu',
        path:'/about',
        component:About
      }
    ]
  })
  export default router

  // 跳转路由（记得要加完整路径）：
  &lt;router-link&gt; to="/news/detail"&gt;xxxx&lt;/router-link&gt;
  &lt;!-- 或 --&gt;
  &lt;router-link&gt; :to="{path:'/news/detail'}"&gt;xxxx&lt;/router-link&gt;

  // 记得去Home组件中预留一个&lt;router-view&gt;
  &lt;template&gt;
    &lt;div class="news"&gt;
      &lt;nav class="news-list"&gt;
        &lt;RouterLink&gt; v-for="news in newsList" :key="news.id" :to="{path:'/news/detail'}"&gt;
          ｛｛news.name ｝｝
        &lt;/RouterLink&gt;
      &lt;/nav&gt;
      &lt;div class="news-detail"&gt;
        &lt;RouterView/&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;</code></pre>
        </ul>
        <p>路由传参</p>
        <ul>
          <li>
            query参数
            <pre><code class="language-js line-numbers">  // 1. 传递参数
  &lt;!-- 跳转并携带query参数（to的字符串写法） --&gt;
  &lt;router-link to="/news/detail?a=1&b=2&content=欢迎你"&gt;
    跳转
  &lt;/router-link&gt;

  &lt;!-- 跳转并携带query参数（to的对象写法） --&gt;
  &lt;RouterLink
    :to="{
      //name:'xiang', //用name也可以跳转
      path:'/news/detail',
      query:{
        id:news.id,
        title:news.title,
        content:news.content
      }
    }"
  &gt;
    ｛｛news.title｝｝
  &lt;/RouterLink&gt;

  // 2. 接收参数：
  import {useRoute} from 'vue-router'
  const route = useRoute()
  // 打印query参数
  console.log(route.query)</code></pre>
          </li>
          <li>
            params参数
            <pre><code class="language-js line-numbers">  // 1. 传递参数
  &lt;!-- 跳转并携带params参数（to的字符串写法） --&gt;
  &lt;RouterLink&gt; :to="`/news/detail/001/新闻001/内容001`"&gt;｛｛ news.title ｝｝&lt;/RouterLink&gt;

  &lt;!-- 跳转并携带params参数（to的对象写法） --&gt;
  &lt;RouterLink&gt;
    :to="{
      name:'xiang', //用name跳转
      params:{
        id:news.id,
        title:news.title,
        content:news.title
      }
    }"
  &gt;
    ｛｛news.title｝｝
  &lt;/RouterLink&gt;

  // 2. 接收参数：
  import {useRoute} from 'vue-router'
  const route = useRoute()
  // 打印params参数
  console.log(route.params)

  // 备注1：传递params参数时，若使用to的对象写法，必须使用name配置项，不能用path。
  // 备注2：传递params参数时，需要提前在router文件规则中占位。
  const router = createRouter({
    history:createWebHistory(),
    routes:[{
        name:'xinwen',
        path:'/news',
        component:News,
        children:[{
            name:'xiang',
            path:'/detail/new/:id/:title/:content?', // 加问号，参数可不传
            component:Detail
        }]
    }]
  })</code></pre>
          </li>
        </ul>
        <p>路由的props配置</p>
        <pre><code class="language-js line-numbers">  // 作用：让路由组件更方便的收到参数（可以将路由参数作为props传给组件）
  {
    name:'xiang',
    path:'detail/:id/:title/:content',
    component:Detail,

    // props的对象写法，作用：把对象中的每一组key-value作为props传给Detail组件
    // props:{a:1,b:2,c:3},

    // props的布尔值写法，作用：把收到了每一组params参数，作为props传给Detail组件
    // props:true

    // props的函数写法，作用：把返回的对象中每一组key-value作为props传给Detail组件
    props(route){
      return route.query
    }
  }</code></pre>
        <p>replace属性</p>
        <pre><code class="language-js line-numbers">  1. 作用：控制路由跳转时操作浏览器历史记录的模式。
  2. 浏览器的历史记录有两种写入方式：分别为push和replace：
     - push是追加历史记录（默认值）。
     - replace是替换当前记录。
  3. 开启replace模式：
     &lt;RouterLink replace .......&lt;News&gt;/RouterLink&gt;</code></pre>
        <p>编程式导航</p>
        <pre><code class="language-js line-numbers">  // 路由组件的两个重要的属性：$route和$router变成了两个hooks
  import {useRoute,useRouter} from 'vue-router'

  const route = useRoute()
  const router = useRouter()
  console.log(route.query)
  console.log(route.parmas)
  console.log(router.push)
  console.log(router.replace)</code></pre>
        <p>重定向</p>
        <pre><code class="language-js line-numbers">  // 作用：将特定的路径，重新定向到已有路由。
  // 具体编码：
  {
    path: '/:pathMatch(.*)*',   // 当没匹配到以上路由时，匹配这条路由
    redirect: '/404',
    name: 'any',
  },</code></pre>
        <p>路由别名</p>
        <pre><code class="language-js line-numbers">  // 定义别名，作用可以在浏览器上直接输入别名访问组件
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    // alias:'/home',
    alias:['/home','index'],    // 支持单个，或者多个的写法
    name: 'home',
  },</code></pre>
      </el-card>
      <el-card id="part5" shadow="hover">
        <h2>Pinia</h2>
        <p>搭建 pinia 环境</p>
        <pre><code class="language-js line-numbers">  // 第一步：npm install piniaonMounted
  // 第二步：操作src/main.ts

  /* 引入createPinia，用于创建pinia */
  import { createPinia } from 'pinia'

  /* 创建pinia */
  const pinia = createPinia()
  const app = createApp(App)

  /* 使用插件 */{}
  app.use(pinia)
  app.mount('#app')

  // 此时开发者工具中已经有了pinia选项
  // 或者新建一个仓库文件夹管理pinia数据，再入口文件安装：
  /* src/store/index.ts */
  import { createPinia } from "pinia";
  export default createPinia();

  /* src/main.ts */
  import pinia from "./store"; // 导入 Pinia 实例
  app.use(pinia); // 安装pinia仓库</code></pre>
        <p>存储+读取数据</p>
        <pre><code class="language-js line-numbers"> // 1. Store是一个保存：状态、业务逻辑 的实体，每个组件都可以读取、写入它。
  // 2. 它有三个概念：state、getter、action，相当于组件中的： data、 computed 和 methods。
  // 3. 具体编码：src/store/count.ts
      // 引入defineStore用于创建store
      import {defineStore} from 'pinia'

      // 定义并暴露一个store
      export const useCountStore = defineStore('count',{
        // 动作
        actions:{},
        // 状态
        state(){
          return {
            sum:6
          }
        },
        // 计算
        getters:{}
      })

  // 4. 具体编码：src/store/talk.ts
      // 引入defineStore用于创建store
      import {defineStore} from 'pinia'

      // 定义并暴露一个store
      export const useTalkStore = defineStore('talk',{
        // 动作
        actions:{},
        // 状态
        state(){
          return {
            talkList:[
              {id:'yuysada01',content:'你今天有点怪，哪里怪？怪好看的！'},
              {id:'yuysada02',content:'草莓、蓝莓、蔓越莓，你想我了没？'},
              {id:'yuysada03',content:'心里给你留了一块地，我的死心塌地'}
            ]
          }
        },
        // 计算
        getters:{}
      })

  // 5. 组件中使用state中的数据
      &lt;template&gt;
        &lt;h2&gt;当前求和为：｛｛ sumStore.sum ｝｝&lt;/h2&gt;
      &lt;/template&gt;
      &lt;script&gt; setup lang="ts" name="Count"&gt;
        // 引入对应的useXxxxxStore
        import {useSumStore} from '@/store/sum'
        // 调用useXxxxxStore得到对应的store
        const sumStore = useSumStore()
      &lt;/script&gt;

      &lt;template&gt;
        &lt;ul&gt;
          &lt;li&gt; v-for="talk in talkStore.talkList" :key="talk.id"&gt;
            ｛｛ talk.content ｝｝
          &lt;/li&gt;
        &lt;/ul&gt;
      &lt;/template&gt;
      &lt;script&gt; setup lang="ts" name="Count"&gt;
        import axios from 'axios'
        import {useTalkStore} from '@/store/talk'
        const talkStore = useTalkStore()
      &lt;/script&gt;

  // 6. 土味情话api：https://api.uomg.com/api/rand.qinghua?format=json</code></pre>
        <p>修改数据(三种方式)</p>
        <pre><code class="language-js line-numbers">  // 第一种修改方式，直接修改
  countStore.sum = 666

  // 第二种修改方式：批量修改（不太推荐，数据简单可以这样修改，推荐第三种）
  countStore.$patch({         // 不推荐对象写法，对数组不友好 如果简单也可以用
    sum:999,
    school:'atguigu'
    arr:[1,2,4]               // 需要先得到源数据[1,2,3]后，重新赋值新数据
  })
  countStore.$patch((state)=>{
    state.sum = 888           // 也不太推荐 用函数形式，这样可以直接修改
    state.obj.a = '改对象'
    state.arr[0] = '改数组'
    state.arr.push('1')       // 可以调用数组的方法
  })

  // 第三种修改方式：借助action修改（action中可以编写一些业务逻辑）
  import { defineStore } from 'pinia'
  export const useCountStore = defineStore('count', {
    /*************/
    actions: {
      //加
      increment(value:number) {
        if (this.sum &lt; 10) {
          //操作countStore中的sum
          this.sum += value
        }
      },
      //减
      decrement(value:number){
        if(this.sum > 1){
          this.sum -= value
        }
      }
    },
    /*************/
  })
  // 组件中调用action即可
      // 使用countStore
      const countStore = useCountStore()
      let n = ref(1)
      // 调用对应action
      countStore.increment(n.value)
  // 响应式数据可以解构，方法不需要响应式不用去解构
      const {increment, decrement} = countStore;
      const {sum,obj } = storeToRefs(countStore);</code></pre>
        <p>storeToRefs</p>
        <pre><code class="language-js line-numbers">  // 借助storeToRefs将store中的数据转为ref对象，方便在模板中使用。
  // 注意：pinia提供的storeToRefs只会将数据做转换，而Vue的toRefs会转换store中数据。
  &lt;template&gt;
    &lt;div class="count"&gt;
      &lt;h2&gt;当前求和为：｛｛sum｝｝&lt;/h2&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;script setup lang="ts" name="Count"&gt;
    import { useCountStore } from '@/store/count'
    /* 引入storeToRefs */
    import { storeToRefs } from 'pinia'

    /* 得到countStore */
    const countStore = useCountStore()
    /* 使用storeToRefs转换countStore，随后解构 */
    const {sum} = storeToRefs(countStore)
  &lt;/script&gt;</code></pre>
        <p>getters</p>
        <pre><code class="language-js line-numbers">  // 1. 概念：当state中的数据，需要经过处理后再使用时，可以使用getters配置。
  // 2. 追加getters配置。
  // 引入defineStore用于创建store
  import {defineStore} from 'pinia'

  // 定义并暴露一个store
  export const useCountStore = defineStore('count',{
    // 动作
    actions:{
      /************/
    },
    // 状态
    state(){
      return {
        sum:1,
        school:'atguigu'
      }
    },
    // 计算
    getters:{
      bigSum:(state):number => state.sum *10,
      upperSchool():string{
        return this. school.toUpperCase()
      }
    }
  })

  // 3. 组件中读取数据：
  const {increment,decrement} = countStore
  let {sum,school,bigSum,upperSchool} = storeToRefs(countStore)</code></pre>
        <p>$subscribe</p>
        <pre><code class="language-js line-numbers">  // 通过 store 的 $subscribe() 方法侦听 state 及其变化
  talkStore.$subscribe((mutate,state)=>{
    console.log('LoveTalk',mutate,state)
    localStorage.setItem('talk',JSON.stringify(talkList.value))
  })</code></pre>
        <p>store组合式写法</p>
        <pre><code class="language-js line-numbers">  import {defineStore} from 'pinia'
  import axios from 'axios'
  import {nanoid} from 'nanoid'
  import {reactive} from 'vue'

  export const useTalkStore = defineStore('talk',()=>{
    // talkList就是state
    const talkList = reactive(
      JSON.parse(localStorage.getItem('talkList') as string) || []
    )

    // getATalk函数相当于action
    async function getATalk(){
      // 发请求，下面这行的写法是：连续解构赋值+重命名
      let {data:{content:title} } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
      // 把请求回来的字符串，包装成一个对象
      let obj = {id:nanoid(),title}
      // 放到数组中
      talkList.unshift(obj)
    }
    return {talkList,getATalk}
  })
  </code></pre>
        <p>$reset 重置数据</p>
        <pre><code class="language-js line-numbers">  // 1. 当不想其他数据改变了仓库里的数据，可以调用$reset方法重置
  store.$reset()
  // 2. 注意：此方法不适合组合式写法的仓库，只能使用选项式
  // 3. 如果真的需要使用组合式的重置，需要自己去仓库里定义重置方法，再调用
  function $reset(){
  sum.value = 0;               // 源数据怎么写就怎么写
    obj.value = {xxx}          // 对象的话需要源数据是响应式的 ref
    arr.value = [xxx]
  }</code></pre>
        <p>辅助函数 （不常用）</p>
        <pre><code class="language-js line-numbers">  // 1. mapState  映射
  computed(() => {
    // mapState 映射 返回的是一个对象  用...拆分
    // 第一个参数是仓库的名字，第二个参数是你想映射哪个数据，写数组是因为仓库有很多数据
    ...mapState(useUserStore,['person','name']);
    // 等同于以下写法
    person(){
      return useUserStore().person
    }
  })
  // 2. mapActions，跟mapState 一样，只是mapActions取的是方法</code></pre>
      </el-card>
      <el-card id="part6" shadow="hover">
        <h2>组件通信</h2>
        <p>Vue3组件通信和Vue2的区别</p>
        <ul>
          <li>移出事件总线，使用mitt代替。</li>
          <li>vuex换成了pinia。</li>
          <li>把.sync优化到了v-model里面了。</li>
          <li>把$listeners所有的东西，合并到$attrs中了。</li>
          <li>$children被砍掉了。</li>
        </ul>
        <p>props</p>
        <ul>
          <li>概述：props是使用频率最高的一种通信方式，常用与 ：父 ↔ 子。</li>
          <li>注意：props数据还是只读的!!!</li>
          <li>
            若 父传子：属性值是非函数
            <ul>
              <li>
                直接在子组件上 &lt;Child :名字任意="参数"&gt; ，
                子用defineProps(['参数']) 接收
              </li>
            </ul>
          </li>
          <li>
            若 子传父：属性值是函数。
            <ul>
              <li>
                需要父亲传递一个函数给儿子，儿子拿到函数后穿实参给父亲
                <ul>
                  <li>
                    父组件：&lt;Child :任意名=“函数名”&gt; const 函数名(value)
                    => 变量接收 = value
                  </li>
                  <li>
                    子组件接收 defineProps(['函数名'])。
                    @click="函数名（参数）或其他
                  </li>
                </ul>
              </li>
              <li>注意： 父孙通信不要使用props</li>
            </ul>
          </li>
        </ul>
        <pre><code class="language-js line-numbers">  // 父组件：
  &lt;template&gt;
    &lt;div class="father"&gt;
      &lt;h3&gt;父组件，&lt;/h3&gt;
      &lt;h4&gt;我的车：｛｛ car ｝｝&lt;/h4&gt;
      &lt;h4&gt;儿子给的玩具：｛｛ toy ｝｝&lt;/h4&gt;
      &lt;Child :car="car" :getToy="getToy"/&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;script&gt; setup lang="ts" name="Father"&gt;
    import Child from './Child.vue'
    import { ref } from "vue";
    // 数据
    const car = ref('奔驰')
    const toy = ref()
    // 方法
    function getToy(value:string){
      toy.value = value
    }
  &lt;/script&gt;

  // 子组件
  &lt;template&gt;
    &lt;div class="child"&gt;
      &lt;h3&gt;子组件&lt;/h3&gt;
      &lt;h4&gt;我的玩具：｛｛ toy ｝｝&lt;/h4&gt;
      &lt;h4&gt;父给我的车：｛｛ car ｝｝&lt;/h4&gt;
      &lt;button&gt; @click="getToy(toy)"&gt;玩具给父亲&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;script&gt; setup lang="ts" name="Child"&gt;
    import { ref } from "vue";
    const toy = ref('奥特曼')

      defineProps(['car','getToy'])
    /*
        let props = defineProps(['car','getToy'])
        let props2 = defineProps({
            car: Obeject,
            getTOy: function
        })
        也可以这样接收参数，模版可以 ｛｛ props.car ｝｝  也可以省略 ｛｛ car｝｝
        但是在script 标签里是不能省略props.car的。接收可以是数组或者对象形式
      */
  &lt;/script&gt;

  // props传递的数据是只读的，不可以修改参数
  // 子组件
  &lt;button&gt; @click='updateProps'&gt;修改父亲传过来的参数&lt;/button&gt;
  let props = defineProps(['car','getToy'])
  const updateProps = ()=&gt;{
     props.car = '修改'       // 注意：这样写是不生效的
  } </code></pre>
        <p>自定义事件</p>
        <ul>
          <li>1. 概述：自定义事件常用于：子 => 父。</li>
          <li>2. 注意区分好：原生事件、自定义事件。</li>
          <li>
            原生事件：
            <ul>
              <li>事件名是特定的（click、mosueenter等等）</li>
              <li>
                事件对象$event:
                是包含事件相关信息的对象（pageX、pageY、target、keyCode）
              </li>
            </ul>
          </li>
          <li>
            自定义事件：
            <ul>
              <li>事件名是任意名称</li>
              <li>
                事件对象$event: 是调用emit时所提供的数据，可以是任意类型！！！
              </li>
            </ul>
          </li>
          <li>
            原生事件不管在组件上还是在标签上，都是原生事件，自定义事件只要用了
            defineEmits(['click'])，那么在触发时，这个原生事件就变成了自定义事件
          </li>
        </ul>
        <pre><code class="language-js line-numbers">  // 示例1：
  &lt;!--在父组件中，给子组件绑定自定义事件：--&gt;
  &lt;Child @send-toy="toy = $event"/&gt;
  &lt;!--注意区分原生事件与自定义事件中的$event--&gt;
  &lt;button&gt; @click="toy = $event"&gt;测试&lt;/button&gt;

  //子组件中，触发事件：
  this.$emit('send-toy', 具体数据)

  // 示例2：
  &lt;!--在父组件中，给子组件绑定自定义事件：--&gt;
  &lt;Child @haha="xyz"/&gt;
  &lt;script&gt;&gt;
  import Child from './Child.vue'
  const xyz = (value)=&gt;{
      console.log(value)      //  1
  }
  &lt;/script&gt;

  &lt;!--在子组件中，触发事件：--&gt;
  &lt;button&gt; @chick="$emit('haha',1)"&gt;&lt;/button&gt;
  &lt;script&gt;&gt;
  //声明事件，代表认可这个自定义事件
  const $emit = defineEmits(['haha'])
  &lt;/script&gt;</code></pre>
        <p>mitt 全局事件总线</p>
        <pre><code class="language-js line-numbers">  // 概述：与消息订阅与发布（pubsub）功能类似，可以实现任意组件间通信。
  // 安装mitt：npm install mitt
  // 第一步新建文件：src\utils\emitter.ts
      // 1. 引入mitt
      import mitt from "mitt";
      // 2. 创建emitter
      const emitter = mitt()
      /*
        emitter.all   拿到所有绑定事件
        emitter.emit  触发某一个事件
        emitter.off   解绑某一个时间
        emitter.on    绑定某一个事件，可以绑定多个
      */
      /*
        // 绑定事件
        emitter.on('abc',(value)=>{console.log('abc事件被触发',value)})
        emitter.on('xyz',(value)=>{console.log('xyz事件被触发',value)})
        setInterval(() => {
          // 触发事件
          emitter.emit('abc',666)
          emitter.emit('xyz',777)
        }, 1000);
        setTimeout(() => {
          // 清理所有事件
          emitter.all.clear()
        }, 3000);
      */
      // 3. 创建并暴露mitt
      export default emitter

  // 【第二步】接收数据的组件中：绑定事件、同时在销毁前解绑事件：
      import emitter from "@/utils/emitter";
      import { onUnmounted，onMounted } from "vue";
      // 绑定事件  组件挂载完毕的时候,当前组件绑定一个事件
      onMounted(()=>{
        // 第一个参数: 即为事件类型 第二个参数: 即为事件回调
        emitter.on('send-toy',(value)=>{
          console.log('send-toy事件被触发', value)
        })
      })
      onUnmounted(()=>{
        // 解绑事件 为了不浪费内存，占用资源，需要解绑
        emitter.off('send-toy')
      })

  // 【第三步】：提供数据的组件，在合适的时候触发事件
      // 引入事件对象 emitter
      import emitter from "@/utils/emitter";

      // 回调函数 触发事件
      function sendToy(){
        emitter.emit('send-toy',toy.value)
      }

  // 注意：这个重要的内置关系，总线依赖着这个内置关系
      // 注意：绑定事件的时候用的单引号或者双引号，调用的时候必须相同的符号，否则不生效</code></pre>
        <p>v-model（实际开发很少用）</p>
        <pre><code class="language-js line-numbers">  // 1. 概述：实现 父↔子 之间相互通信。实现父子组件数据同步
  // 2. 前序知识 —— v-model的本质，用来表单收集数据，实现数据双向绑定
  &lt;!-- 使用v-model指令 --&gt;
  &lt;input
    type="text"
    v-model="userName"&gt;
  &lt;!-- v-model的本质是下面这行代码   &lt;HTMLInputElement&gt;是ts断言 --&gt;
  &lt;input
    type="text"
    :value="userName"
    @input="userName =(&lt;HTMLInputElement&gt;$event.target).value"
  &gt;
  &lt;script&gt;
  import {ref} from 'vue'
  let userName = ref&lt;string&gt;('')
  &lt;/script&gt;

  // 3. 组件标签上的v-model的本质：:moldeValue ＋ update:modelValue事件。其实是用到了，v-mode + 自定义事件 + props 实现数据同步
  &lt;!-- 组件标签上使用v-model指令 --&gt;
  &lt;AtguiguInput v-model="userName"/&gt;
  &lt;!-- 组件标签上v-model的本质 --&gt;
  &lt;AtguiguInput :modelValue="userName" @update:model-value="userName = $event"/&gt;

  // AtguiguInput组件中：
  &lt;template&gt;
    &lt;div class="box"&gt;
      &lt;!--将接收的value值赋给input元素的value属性，目的是：为了呈现数据 --&gt;
    &lt;!--给input元素绑定原生input事件，触发input事件时，进而触发update:model-value事件--&gt;
      &lt;input  type="text" :value="modelValue"  @input="emit('update:model-value',$event.target.value)"&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;script setup lang="ts" name="AtguiguInput"&gt;
    // 接收props
    defineProps(['modelValue'])
    // 声明事件
    const emit = defineEmits(['update:model-value'])
  &lt;/script&gt;

  // 4. 也可以更换value，例如改成abc
  &lt;!-- 也可以更换value，例如改成abc--&gt;
  &lt;AtguiguInput v-model:abc="userName"/&gt;
  &lt;!-- 上面代码的本质如下 --&gt;
  &lt;AtguiguInput :abc="userName" @update:abc="userName = $event"/&gt;

  AtguiguInput组件中：
  &lt;template&gt;
    &lt;div class="box"&gt;
      &lt;input type="text"  :value="abc" @input="emit('update:abc',$event.target.value)"&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;script setup lang="ts" name="AtguiguInput"&gt;
    // 接收props
    defineProps(['abc'])
    // 声明事件
    const emit = defineEmits(['update:abc'])
  &lt;/script&gt;

  // 5. 如果value可以更换，那么就可以在组件标签上多次使用v-model
  &lt;template&gt;
    &lt;div&gt;
      名字：｛｛  userName ｝｝   密码：｛｛  password ｝｝
    &lt;/div&gt;
    &lt;Abc v-model:abc="userName" v-model:xyz="password" /&gt;
  &lt;/template&gt;
  &lt;script setup lang="ts" name="DataPage"&gt;
  import { ref } from 'vue';
  import Abc from './Abc.vue';
  let userName = ref('张三');
  let password = ref('123456');
  &lt;/script&gt;

  // 子组件中就可以这么用
  &lt;template&gt;
    &lt;div&gt;
      &lt;button @click="$emit('update:abc', abc + 1)"&gt;修改名字&lt;/button&gt;
      &lt;button @click="change"&gt;修改密码且数据同步&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;script setup lang="ts" name=""&gt;
  let props = defineProps(['abc', 'xyz']);
  let $emit = defineEmits(['update:abc', 'update:xyz']);
  const change = () =&gt; {
    $emit('update:xyz', props.xyz + '2');
  };
  &lt;/script&gt; </code></pre>
        <p>$attrs</p>
        <pre><code class="language-js line-numbers">  // 1. 概述：$attrs用于实现当前组件的父组件，向当前组件的子组件通信（祖→孙）
  // 2. 具体说明：$attrs是一个对象，包含所有父组件传入的标签属性。
      // 注意：$attrs会自动排除props中声明的属性(可以认为声明过的 props 被子组件自己“消费”了)
  // 3. vue3 框架提供一个方法 useAttrs方法, 它可以获取组件身上的属性与事件 !!!
  // 案例1
  // 父组件
  &lt;template&gt;
    &lt;div class="father"&gt;
      &lt;h3&gt;父组件&lt;/h3&gt;
      &lt;Child :a="a" :b="b" :c="c" :d="d" v-bind="{x:100,y:200}" :updateA="updateA"/&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;script&gt; setup lang="ts" name="Father"&gt;
    import Child from './Child.vue'
    import { ref } from "vue";
    let a = ref(1)
    let b = ref(2)
    let c = ref(3)
    let d = ref(4)
    function updateA(value){ a.value = value }
  &lt;/script&gt;

  // 子组件
  &lt;template&gt;
  &lt;div class="child"&gt;
    &lt;h3&gt;子组件&lt;/h3&gt;
    &lt;GrandChild v-bind="$attrs"/&gt;
  &lt;/div&gt;
  &lt;/template&gt;
  &lt;script&gt; setup lang="ts" name="Child"&gt;
    import GrandChild from './GrandChild.vue'
  &lt;/script&gt;

  // 孙组件
  &lt;template&gt;
    &lt;div class="grand-child"&gt;
      &lt;h3&gt;孙组件&lt;/h3&gt;
      &lt;h4&gt;a：｛｛  a  ｝｝&lt;/h4&gt;&lt;h4&gt;b：｛｛  b  ｝｝&lt;/h4&gt;&lt;h4&gt;c：｛｛  c  ｝｝&lt;/h4&gt;
      &lt;h4&gt;d：｛｛  d  ｝｝&lt;/h4&gt;&lt;h4&gt;x：｛｛  x  ｝｝&lt;/h4&gt;&lt;h4&gt;y：｛｛  y  ｝｝&lt;/h4&gt;
      &lt;button&gt; @click="updateA(666)"&gt;点我更新A&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;script&gt; setup lang="ts" name="GrandChild"&gt;
    defineProps(['a','b','c','d','x','y','updateA'])
  &lt;/script&gt;

  // 例子2 复杂写法，
  // 父组件
    &lt;template&gt;
    &lt;div&gt;
      &lt;h1&gt;useAttrs&lt;/h1&gt;
      &lt;el-button type="primary" icon="Edit" size="small"&gt;组件按钮&lt;/el-button&gt;
      &lt;br /&gt;
      &lt;Button type="primary" icon="Edit" size="small" title="123" @xxx="xxx"&gt;自定义按钮&lt;/Button&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;script setup lang="ts" name="DataPage"&gt;
  import Button from './Button.vue';
  const xxx = () =&gt; {
      console.log('abc');
  };
  &lt;/script&gt;

  // 子组件
  &lt;template&gt;
    &lt;div&gt;
      &lt;el-button :type="$attrs.type" :icon="$attrs.icon" :size="$attrs.size" :title="$attrs.title"&gt;按钮&lt;/el-button&gt;
      &lt;!-- icon: "Edit"  size: "small" title: "123" type: "primary" --&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;script setup lang="ts" name=""&gt;
  import { useAttrs } from 'vue';
  let $attrs = useAttrs();

  // 万一用 props 接收父组件传递过来的参数
  let props = defineProps(['title']);
  console.log(props);  // 能获取到{ title: "123" }
  console.log($attrs); // 此时获取到的是除了 props 以外的所有参数，会没有了title,因为 title 已经被 props 接收了，优先级props更高
  &lt;/script&gt;

  // 简写
  &lt;template&gt;
    &lt;div title="$attrs.type"&gt;
      &lt;el-button :="$attrs" @click="$emit('xxx')"&gt;按钮&lt;/el-button&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;script setup lang="ts" name=""&gt;&lt;/script&gt;

  // 以上方法也可实现 父传子，子不动，子传给孙
  // 父组件：
    &lt;儿子 type="primary" icon="Edit" size="small" title="756" @xxx="xxx"&gt;自定义按钮&lt;/儿子&gt;

  // 子组件：
    &lt;孙子 :="$attrs"&gt;按钮&lt;/孙子&gt;

  // 孙组件：
    &lt;div&gt; title="$attrs.type"&gt;｛｛ $attrs.icon ｝｝&lt;/div&gt;
        </code></pre>
        <p>$refs、$parent</p>
        <ul>
          <li>
            概述：
            <ul>
              <li>$refs用于 ：父→子</li>
              <li>$parent用于：子→父。</li>
            </ul>
          </li>
          <li>
            原理如下：
            <table>
              <tbody>
                <tr>
                  <th>属性</th>
                  <th>说明</th>
                </tr>
                <tr>
                  <td>$refs</td>
                  <td>值为对象，包含所有被ref属性标识的DOM元素或组件实例。</td>
                </tr>
                <tr>
                  <td>$parent</td>
                  <td>值为对象，当前组件的父组件实例对象。</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            父修改子实例1：
            <pre><code class="language-js line-numbers">  // 父组件
  &lt;template&gt;
      &lt;button @click="get($refs)"&gt;获取子组件&lt;/button&gt;
      &lt;Person ref="x"&gt;&lt;/Person&gt;
  &lt;/template&gt;
  &lt;script setup lang="ts" name="App"&gt;
      import Person from "@/components/index.vue";
      import { ref } from "vue";
      let x = ref();
      const get = (x: {[key:string]:any}) =&gt; { // 断言
          for (let key in x) {
              console.log(x[key]);
              x[key].x += 3;
          }
      };
  &lt;/script&gt;

  // 简写
  &lt;template&gt;
    &lt;h1&gt;父钱：｛｛  money ｝｝&lt;/h1&gt;
    &lt;button @click="get"&gt;获取子组件并修改子组件值&lt;/button&gt;
    &lt;Person ref="son"&gt;&lt;/Person&gt;
  &lt;/template&gt;
  &lt;script setup lang="ts" name="App"&gt;
  import Person from './Person.vue';
  let money = ref(120);
  let son = ref();
  const get = () =&gt; {
    money.value += 10;
    son.value.sonNum -= 10;
  };
  &lt;/script&gt;

  // 子组件
  &lt;template&gt;
      &lt;div class="person"&gt;｛｛  x ｝｝&lt;/div&gt;
  &lt;/template&gt;
  &lt;script setup lang="ts" name="Person4"&gt;
      import { ref } from "vue";
      let x = ref(1);
      defineExpose({ x }); // 组件内部的数据是关闭的，必须用此方法暴露出去
  &lt;/script&gt;

  // 简写
  &lt;template&gt;
    &lt;div class="person"&gt;子钱：｛｛  sonNum ｝｝&lt;/div&gt;
  &lt;/template&gt;
  &lt;script setup lang="ts" name="Person4"&gt;
  let sonNum = ref(80);
  defineExpose({ sonNum });
  &lt;/script&gt;

  // 子修改父实例：
  // 父组件
  &lt;template&gt;
      &lt;h2&gt;父:｛｛  father ｝｝&lt;/h2&gt;
      &lt;Person&gt;&lt;/Person&gt;
  &lt;/template&gt;
  &lt;script setup lang="ts" name="App"&gt;
      import Person from "@/components/index.vue";
      let father = ref(2);
      // 向外提供数据
      defineExpose({ father });
  &lt;/script&gt;

  // 子组件
  &lt;template&gt;
    &lt;h1&gt;子：｛｛  son ｝｝&lt;/h1&gt;
    &lt;button @click="get($parent)"&gt;修改父&lt;/button&gt;
  &lt;/template&gt;
  &lt;script setup lang="ts" name="Person4"&gt;
  let son = ref(8);
  const get = ($parent: any) =&gt; {
    $parent.father += 1;
    son.value -= 1;
  };
  &lt;/script&gt;</code></pre>
          </li>
          <li>ref: 可以获取真实的DOM节点,可以获取到子组件实例VC</li>
          <li>$parent: 可以在子组件内部获取到父组件的实例</li>
        </ul>
        <p>provide、inject</p>
        <ul>
          <li>概述：实现祖孙组件直接通信</li>
          <li>
            具体使用：
            <ul>
              <li>在祖先组件中通过provide配置向后代组件提供数据</li>
              <li>在后代组件中通过inject配置来声明接收注入数据</li>
            </ul>
          </li>
          <li>
            具体编码：
            <pre><code class="language-js line-numbers">  // 【第一步】父组件中，使用provide提供数据
  &lt;template&gt;
    &lt;div class="father"&gt;
      &lt;h3&gt;父组件&lt;/h3&gt;
      &lt;h4&gt;资产：｛｛ money ｝｝&lt;/h4&gt;
      &lt;h4&gt;汽车：｛｛ car ｝｝&lt;/h4&gt;
      &lt;button&gt; @click="money += 1"&gt;资产+1&lt;/button&gt;
      &lt;button&gt; @click="car.price += 1"&gt;汽车价格+1&lt;/button&gt;
      &lt;Child/&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;script setup lang="ts" name="Father"&gt;
    import Child from './Child.vue'
    import { ref,reactive,provide } from "vue";
    // 数据
    let money = ref(100)
    let car = reactive({
      brand:'奔驰',
      price:100
    })
    // 用于更新money的方法
    function updateMoney(value:number){
      money.value += value
    }
    // 提供数据 第一个参数为K且接收时要这个K，第二个参数是提供的数据
    provide('moneyContext',{money,updateMoney})
    provide('car',car)
  &lt;/script&gt;
  // 注意：子组件中不用编写任何东西，是不受到任何打扰的

  // 【第二步】孙组件中使用inject配置项接受数据。
  &lt;template&gt;
    &lt;div class="grand-child"&gt;
      &lt;h3&gt;我是孙组件&lt;/h3&gt;
      &lt;h4&gt;资产：｛｛ money ｝｝&lt;/h4&gt;
      &lt;h4&gt;汽车：｛｛ car ｝｝&lt;/h4&gt;
      &lt;button @click="updateMoney(6)"&gt;点我&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;script setup lang="ts" name="GrandChild"&gt;
    import { inject } from 'vue';
    // 注入数据
    let {money,updateMoney} = inject('moneyContext',{
        money:0,
        updateMoney:(_x:number)=&gt;{} })
    let car = inject('car')
  &lt;/script&gt;
</code></pre>
          </li>
        </ul>
        <p>总结</p>
        <ul>
          <li>1. 父传子：props , $attrs ，$ref</li>
          <li>2. 子传父：自定义事件，$parent</li>
          <li>3. 父传孙：$attrs，provide > inject</li>
          <li>4. 父子组件数据同步：v-model</li>
          <li>5. 任意：pinia</li>
        </ul>
      </el-card>
      <el-card id="part7" shadow="hover">
        <h2>Slot</h2>
        <ul>
          <li>
            默认插槽
            <pre><code class="language-js line-numbers">  // 父组件中：
  &lt;Category title="今日热门游戏"&gt;
    &lt;ul&gt;
      &lt;li v-for="g in games" :key="g.id"&gt;｛｛ g.name  ｝｝&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/Category&gt;

  // 子组件中：
  &lt;template&gt;
    &lt;div class="item"&gt;
      &lt;h3&gt;｛｛ title  ｝｝&lt;/h3&gt;
      &lt;!-- 默认插槽 --&gt;
      &lt;slot&gt;&lt;/slot&gt;
    &lt;/div&gt;
  &lt;/template&gt;</code></pre>
          </li>
          <li>
            具名插槽
            <pre><code class="language-js line-numbers">  // 父组件中：
  &lt;Category title="今日热门游戏"&gt;
    &lt;template v-slot:s1&gt;
      &lt;ul&gt;
        &lt;li v-for="g in games" :key="g.id"&gt;｛｛ g.name  ｝｝&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/template&gt;
    &lt;template #s2&gt;
      &lt;a href=""&gt;更多&lt;/a&gt;
    &lt;/template&gt;
  &lt;/Category&gt;

  // 子组件中：
  &lt;template&gt;
    &lt;div class="item"&gt;
      &lt;h3&gt;｛｛ title  ｝｝&lt;/h3&gt;
      &lt;slot name="s1"&gt;&lt;/slot&gt;
      &lt;slot name="s2"&gt;&lt;/slot&gt;
    &lt;/div&gt;
  &lt;/template&gt;</code></pre>
          </li>
          <li>
            作用域插槽
            <ul>
              <li>
                理解：数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。（新闻数据在News组件中，但使用数据所遍历出来的结构由App组件决定），像element-plus组件库大量使用作用域插槽
              </li>
              <li>
                具体编码：
                <pre><code class="language-js line-numbers">  // 父组件中：
  &lt;!-- &lt;Game v-slot:default="params"&gt; --&gt;
  &lt;!-- &lt;Game #default="params"&gt;    ui组件库常用--&gt;
  &lt;Game v-slot="params"&gt;   // v-slot接收到的就是子数据传递过来的props
    &lt;ul&gt;
      &lt;li&gt; v-for="g in params.games" :key="g.id"&gt;｛｛ g.name  ｝｝&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/Game&gt;

  &lt;Game v-slot:qwe="{games}"&gt;   // 复用，并结构，作用域带名字插槽写法
    &lt;a v-for="h in games" :key="h.id"&gt;｛｛ g.name  ｝｝&lt;/li&gt;
  &lt;/Game&gt;
  &lt;Game #qwe="{games}"&gt;   // 语法糖
    &lt;h3 v-for="h in games" :key="h.id"&gt;｛｛ g.name  ｝｝&lt;/li&gt;
  &lt;/Game&gt;

  // 子组件中（数据内容）：
  &lt;template&gt;
    &lt;div class="category"&gt;
      &lt;h2&gt;今日游戏榜单&lt;/h2&gt;
      &lt;slot&gt; :games="games" a="哈哈"&gt;&lt;/slot&gt;  // 传递props
      &lt;slot&gt; name='qwe' :games="games"&gt;&lt;/slot&gt;  // 作用域带名字插槽
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;script&gt; setup lang="ts" name="Category"&gt;
    import {reactive} from 'vue'
    let games = reactive([
      {id:'asgdytsa01',name:'英雄联盟'},
      {id:'asgdytsa02',name:'王者荣耀'},
      {id:'asgdytsa03',name:'红色警戒'},
      {id:'asgdytsa04',name:'斗罗大陆'}
    ])
  &lt;/script&gt;</code></pre>
              </li>
            </ul>
          </li>
          <li>
            传参案例
            <pre><code class="language-js line-numbers">  // 子组件：
  &lt;el-card  v-for="(item, index) in data" :key="item.id"&gt;
    &lt;slot :$row="item" :$index="index"&gt;&lt;/slot&gt;
  &lt;/el-card&gt;

  // 父组件：
  &lt;card-container :title="`html`" :data="data"&gt;
    &lt;!--  解构写法   &lt;template v-slot="{$row}"&gt; --&gt;
    &lt;template v-slot="item"&gt;
        &lt;h2&gt;｛｛ item  ｝｝&lt;/h2&gt;
    &lt;/template&gt;
  &lt;/card-container&gt;</code></pre>
          </li>
        </ul>
      </el-card>
      <el-card id="part8" shadow="hover">
        <h2>其它 API</h2>
        <ul>
          <li>
            shallowRef 与 shallowReactive
            <pre><code class="language-js line-numbers">  // shallowRef
      // 1. 作用：创建一个响应式数据，但只对顶层属性进行响应式处理。
      // 2. 用法: let myVar = shallowRef(initialValue);
      // 3. 特点：只跟踪引用值的变化，不关心值内部的属性变化。

      // 例如
      &lt;template&gt;
          &lt;p&gt;x= ｛｛ x ｝｝&lt;/p&gt;
          &lt;p&gt;b= ｛｛ b.a ｝｝&lt;/p&gt;
          &lt;button&gt; @click="editA"&gt;修改a&lt;/button&gt;   // 修改成功
          &lt;button&gt; @click="editB"&gt;修改b&lt;/button&gt;   // 修改失败
      &lt;/template&gt;
      &lt;script&gt; setup lang="ts" name="Person4"&gt;
          import { shallowRef } from "vue";
          let x = shallowRef(1);
          let b = shallowRef({ a: 1, b: 2 });

          const editA = () =&gt; {x.value += 2; };
          const editB = () =&gt; { b.value.a += 2; };
      &lt;/script&gt;

  // shallowReactive
      // 1. 作用：创建一个浅层响应式对象，只会使对象的最顶层属性变成响应式的，对象内部的嵌套属性则不会变成响应式的
      // 2. 用法：const myObj = shallowReactive({ ... });
      // 3. 特点：对象的顶层属性是响应式的，但嵌套对象的属性不是。

      // 例如
      &lt;template&gt;
          &lt;p&gt;b= ｛｛ x.a ｝｝&lt;/p&gt;
          &lt;p&gt;b= ｛｛ x.b ｝｝&lt;/p&gt;
          &lt;p&gt;b= ｛｛ x.b.c ｝｝&lt;/p&gt;
          &lt;button @click="editA"&gt;修改a&lt;/button&gt;    // 修改第一层成功
          &lt;button @click="editB"&gt;修改b&lt;/button&gt;    // 成功
          &lt;button @click="editC"&gt;修改C&lt;/button&gt;    // 失败
      &lt;/template&gt;
      &lt;script setup lang="ts" name="Person4"&gt;
          import { shallowReactive } from "vue";
          let x = shallowReactive({ a: 1,b: { c: 2, d: 1 },});
          const editA = () =&gt; {x.a += 1;};
          const editB = () =&gt; {x.b = { c: 3, d: 2 };};
          const editC = () =&gt; {x.b.c += 1;};
      &lt;/script&gt;

  // 总结
      // 通过使用 shallowRef() 和 shallowReactive() 来绕开深度响应。浅层式 API 创建的状态只在其顶层是响应式的，对所有深层的对象不会做任何处理，避免了对每一个内部属性做响应式所带来的性能成本，这使得属性的访问变得更快，可提升性能。</code></pre>
          </li>
          <li>
            readonly 与 shallowReadonly
            <pre><code class="language-js line-numbers">  // readonly
      // 1. 作用：用于创建一个对象的深只读副本。
      // 2. 用法：
          const original = reactive({ ... });
          const readOnlyCopy = readonly(original);  // 参数必须是响应式数据
      // 3. 特点：
          // 对象的所有嵌套属性都将变为只读。
          // 任何尝试修改这个对象的操作都会被阻止（在开发模式下，还会在控制台中发出警告）。
      // 4. 应用场景：
          // 创建不可变的状态快照。
          // 保护全局状态或配置不被修改。
      // 5. 案例：可修饰ref 和 reactive
      &lt;template&gt;
          &lt;p&gt;a= ｛｛ a ｝｝&lt;/p&gt;
          &lt;p&gt;b= ｛｛ b ｝｝&lt;/p&gt;
          &lt;button&gt; @click="editA"&gt;修改A&lt;/button&gt;
          &lt;button&gt; @click="editB"&gt;修改B&lt;/button&gt;
      &lt;/template&gt;
      &lt;script&gt; setup lang="ts" name="Person4"&gt;
          import { ref, readonly } from "vue";
          let a = ref(1);
          let b = readonly(a);
          function editA() {a.value += 1;}
          function editB() {
              // 不允许修改只读的响应式数据，控制台会报以下错误
              // Set operation on key "value" failed: target is readonly.
              b.value += 1;
          }
      &lt;/script&gt;

  // shallowReadonly
      // 1. 作用：与 readonly 类似，但只作用于对象的顶层属性。
      // 2. 用法：
      const original = reactive({ ... });
      const shallowReadOnlyCopy = shallowReadonly(original);
      // 3. 特点：
          // 只将对象的顶层属性设置为只读，对象内部的嵌套属性仍然是可变的。
          // 适用于只需保护对象顶层属性的场景。 </code></pre>
          </li>
          <li>
            toRaw 与 markRaw
            <pre><code class="language-js line-numbers">  // toRaw
      // 1. 作用：用于获取一个响应式对象的原始对象， toRaw 返回的对象不再是响应式的，不会触发视图更新。
          // 官网描述：这是一个可以用于临时读取而不引起代理访问/跟踪开销，或是写入而不触发更改的特殊方法。不建议保存对原始对象的持久引用，请谨慎使用。
          // 何时使用？ —— 在需要将响应式对象传递给非 Vue 的库或外部系统时，使用 toRaw 可以确保它们收到的是普通对象
      // 2. 具体编码：
      import { reactive,toRaw,markRaw,isReactive } from "vue";
      /* toRaw */
      // 响应式对象
      let person = reactive({name:'tony',age:18})
      // 原始对象
      let rawPerson = toRaw(person)

      /* markRaw */
      let citysd = markRaw([
        {id:'asdda01',name:'北京'},
        {id:'asdda02',name:'上海'},
        {id:'asdda03',name:'天津'},
        {id:'asdda04',name:'重庆'}
      ])
      // 根据原始对象citys去创建响应式对象citys2 —— 创建失败，因为citys被markRaw标记了
      let citys2 = reactive(citys)
      console.log(isReactive(person))
      console.log(isReactive(rawPerson))
      console.log(isReactive(citys))
      console.log(isReactive(citys2))

  // 作用：当自己的数据不想让其他库或其他人修改，可以把数据包装成一个普通数据传递给他人

  // markRaw
      // 1. 作用：标记一个对象，使其永远不会变成响应式的。
          // 例如使用mockjs时，为了防止误把mockjs变为响应式对象，可以使用 markRaw 去标记mockjs
      // 2. 编码：
      /* markRaw */
      let citys = markRaw([
        {id:'asdda01',name:'北京'},
        {id:'asdda02',name:'上海'},
        {id:'asdda03',name:'天津'},
        {id:'asdda04',name:'重庆'}
      ])
      // 根据原始对象citys去创建响应式对象citys2 —— 创建失败，因为citys被markRaw标记了
      let citys2 = reactive(citys)</code></pre>
          </li>
          <li>
            customRef
            <pre><code class="language-js line-numbers">  // 作用：创建一个自定义的ref，并对其依赖项跟踪和更新触发进行逻辑控制。
  // 实现防抖效果（useSumRef.ts）：
  import {customRef } from "vue";
  export default function(initValue:string,delay:number){
    let msg = customRef((track,trigger)=>{
      let timer:number
      return {
        get(){
          track() // 告诉Vue数据msg很重要，要对msg持续关注，一旦变化就更新
          return initValue
        },
        set(value){
          clearTimeout(timer)
          timer = setTimeout(() => {
            initValue = value
            trigger() // 通知Vue数据msg变化了
          }, delay);
        }
      }
    })
    return {msg}
  } </code></pre>
          </li>
        </ul>
      </el-card>
      <el-card id="part9" shadow="hover">
        <h2>Vue3新组件</h2>
        <pre><code class="language-js line-numbers">  // Teleport
      // 什么是Teleport？—— Teleport 是一种能够将我们的组件html结构移动到指定位置的技术。
      &lt;teleport to='body' &gt;
          &lt;div class="modal" v-show="isShow"&gt;
            &lt;h2&gt;我是一个弹窗&lt;/h2&gt;
            &lt;p&gt;我是弹窗中的一些内容&lt;/p&gt;
            &lt;button @click="isShow = false"&gt;关闭弹窗&lt;/button&gt;
          &lt;/div&gt;
      &lt;/teleport&gt;

  // Suspense
      // 等待异步组件时渲染一些额外内容，让应用有更好的用户体验
      // 使用步骤：
          // 异步引入组件
          // 使用Suspense包裹组件，并配置好default 与 fallback
          import { defineAsyncComponent,Suspense } from "vue";
          const Child = defineAsyncComponent(()=>import('./Child.vue'))
          &lt;template&gt;
            &lt;div class="app"&gt;
                &lt;h3&gt;我是App组件&lt;/h3&gt;
                &lt;Suspense&gt;
                  &lt;template v-slot:default&gt;
                    &lt;Child/&gt;
                  &lt;/template&gt;
                  &lt;template v-slot:fallback&gt;
                    &lt;h3&gt;加载中.......&lt;/h3&gt;
                  &lt;/template&gt;
                &lt;/Suspense&gt;
            &lt;/div&gt;
          &lt;/template&gt;</code></pre>
        <p>全局API转移到应用对象</p>
        <ul>
          <li>app.component</li>
          <li>app.config</li>
          <li>app.directive</li>
          <li>app.mount</li>
          <li>app.unmount</li>
          <li>app.use</li>
        </ul>
        <p>其他</p>
        <ul>
          <li>
            过渡类名 v-enter 修改为 v-enter-from、过渡类名 v-leave 修改为
            v-leave-from。
          </li>
          <li>keyCode 作为 v-on 修饰符的支持。</li>
          <li>
            v-model 指令在组件上的使用已经被重新设计，替换掉了 v-bind.sync。
          </li>
          <li>v-if 和 v-for 在同一个元素身上使用时的优先级发生了变化。</li>
          <li>移除了$on、$off 和 $once 实例方法。</li>
          <li>移除了过滤器 filter。</li>
          <li>移除了$children 实例 propert。</li>
        </ul>
        <p>其他语法</p>
        <pre><code class="language-js line-numbers">  // 文本插值(最基本的数据绑定形式是文本插值，它使用的是“Mustache”语法 (即双大括号))
      &lt;span&gt;Message: ｛｛  msg ｝｝&lt;/span&gt;
      // 支持完整的 JavaScript 表达式 不支持非表达式，条件控制语句
      ｛｛  number + 1 ｝｝
      ｛｛  ok ? 'YES' : 'NO' ｝｝
      ｛｛  message.split('').reverse().join('') ｝｝
      &lt;div :id="`list-${id}`"&gt;&lt;/div&gt;

      // v-html(若想插入 HTML，你需要使用 v-html 指令)
      &lt;span v-html="'&lt;i&gt;1&lt;/i&gt;'"&gt;&lt;/span&gt;

  // v-bind(响应式)
      // Attribute 绑定
      &lt;template&gt;
          &lt;div v-bind:id="dynamicId"&gt;app&lt;/div&gt;
          &lt;!-- 简写 --&gt;
          &lt;div :id="dynamicId"&gt;app&lt;/div&gt;
          &lt;div :id&gt;app&lt;/div&gt;     &lt;!-- 名称与绑定的值的名称相同，可简化语法 --&gt;
          &lt;div v-bind:id&gt;&lt;/div&gt;  &lt;!-- 这也同样有效 --&gt;
      &lt;/template&gt;
      &lt;script setup&gt;
          let dynamicId = null;  // 如果绑定的值是 null 或者 undefined，那么该 attribute 将会从渲染的元素上移除。  css样式就不生效
      &lt;/script&gt;
      &lt;style scoped lang="scss"&gt;
          #dynamicId {
              color: red;
          }
      &lt;/style&gt;

  // 布尔型 attribute 依据 true / false 值来决定 attribute 是否应该存在于该元素上。 disabled 就是最常见的例子之一。
  &lt;button&gt; :disabled="isButtonDisabled"&gt;Button&lt;/button&gt;

  // 动态绑定多个值
      const objectOfAttrs = {
        id: 'container',
        class: 'wrapper',
        style: 'background-color:green'
      }
      // 通过不带参数的 v-bind，你可以将它们绑定到单个元素上：
      &lt;div v-bind="objectOfAttrs"&gt;&lt;/div&gt;
      //源码展现
      &lt;div data-v-7a7a37b1 id="container" class="wrapper" style="background-color: green;"&gt;&lt;/div&gt;

  // ref()声明响应式状态
      // ref() 接收参数，并将其包裹在一个带有 .value 属性的 ref 对象中返回
      import { ref } from 'vue'
      const count = ref(0)
      console.log(count.value) // 0

      // 在模板中使用 ref 时，我们不需要附加 .value。当在模板中使用时，ref会自动解包
      &lt;div&gt;｛｛ count ｝｝&lt;/div&gt;

      // 也可以通过 shallowref() 来放弃深层响应性

  // reactive()（将使对象本身具有响应性）
      import { reactive } from 'vue'
      const state = reactive({ count: 0 })
      // shallowReactive()  API可以选择退出深层响应性
      const raw = {}
      const proxy = reactive(raw)
      // 代理对象和原始对象不是全等的 只有代理对象是响应式的，更改原始对象不会触发更新
      console.log(proxy === raw) // false
      // 建议使用 ref() 作为声明响应式状态的主要 API

  // nextTick() 全局 API (当你修改了响应式状态时，DOM 会被自动更新。但是需要注意的是，DOM 更新不是同步的。Vue 会在“next tick”更新周期中缓冲所有状态的修改，以确保不管你进行了多少次状态修改，每个组件都只会被更新一次。要等待 DOM 更新完成后再执行额外的代码)
      import { nextTick } from 'vue'
      async function increment() {
        count.value++
        await nextTick()
        // 现在 DOM 已经更新了
      }

  // computed(()=>{ return ...})  (计算属性)
      &lt;script setup&gt;
      import { reactive, computed } from 'vue'

      const author = reactive({
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      })
      // 一个计算属性 ref
      const publishedBooksMessage = computed(() =&gt; {
        return author.books.length &gt; 0 ? 'Yes' : 'No'
      })
      &lt;/script&gt;
      &lt;template&gt;
        &lt;p&gt;Has published books:&lt;/p&gt;
        &lt;span&gt;｛｛ publishedBooksMessage ｝｝&lt;/span&gt;
      &lt;/template&gt;
      // 计算属性缓存 vs 方法
      // 若我们将同样的函数定义为一个方法而不是计算属性，两种方式在结果上确实是完全相同的，
      // 然而，不同之处在于计算属性值会基于其响应式依赖被缓存。一个计算属性仅会在其响应式依赖更新时才重新计算。
      // 这意味着只要 author.books 不改变，无论多少次访问 publishedBooksMessage 都会立即返回先前的计算结果，
      // 而不用重复执行 getter 函数。这也解释了为什么下面的计算属性永远不会更新，因为 Date.now() 并不是一个响应式依赖
      const now = computed(() =&gt; Date.now())
      // 相比之下，方法调用总是会在重渲染发生时再次执行函数

      // 计算属性默认是只读的。当你尝试修改一个计算属性时，你会收到一个运行时警告，只在某些特殊场景中你可能才需要用到“可写”的属性，
      // 你可以通过同时提供 getter 和 setter 来创建
      &lt;script setup&gt;
      import { ref, computed } from 'vue'
      const firstName = ref('John')
      const lastName = ref('Doe')
      const fullName = computed({
        // getter
        get() {return firstName.value + ' ' + lastName.value},
        // setter
        set(newValue) {
          // 注意：我们这里使用的是解构赋值语法
          [firstName.value, lastName.value] = newValue.split(' ')
        }
      })
      &lt;/script&gt;

      // 注意1：Getter 不应有副作用，计算属性的 getter 应只做计算而没有任何其他的副作用
      // 注意2：避免直接修改计算属性值

  // :class 与 :style (类与样式绑定)
      &lt;div&gt; class="static" :class="{ active: isActive, 'text-danger': hasError }"&gt;&lt;/div&gt;
      // active 是否存在取决于数据属性 isActive 的真假值
      const isActive = ref(true)
      const hasError = ref(false)

      // 渲染结果
      &lt;div&gt; class="static active"&gt;&lt;/div&gt;

      // 绑定的对象并不一定需要写成内联字面量的形式，也可以直接绑定一个对象
      const classObject = reactive({
        active: true,
        'text-danger': false
      })
      &lt;div&gt; :class="classObject"&gt;&lt;/div&gt;

      // 我们也可以绑定一个返回对象的计算属性。这是一个常见且很有用的技巧：
      const isActive = ref(true)
      const error = ref(null)

      const classObject = computed(() =&gt; ({
        active: isActive.value && !error.value,
        'text-danger': error.value && error.value.type === 'fatal'
      }))
      &lt;div&gt; :class="classObject"&gt;&lt;/div&gt;

      // :class 绑定一个数组来渲染多个 CSS class
      const activeClass = ref('active')
      const errorClass = ref('text-danger')
      &lt;div&gt; :class="[activeClass, errorClass]"&gt;&lt;/div&gt;

      // 如果你也想在数组中有条件地渲染某个 class，你可以使用三元表达式
      &lt;div&gt; :class="[isActive ? activeClass : '', errorClass]"&gt;&lt;/div&gt;

      // 如果你的组件有多个根元素，你将需要指定哪个根元素来接收这个 class。你可以通过组件的 $attrs 属性来指定接收的元素
      &lt;!-- 模板使用 $attrs 时 --&gt;
      &lt;p :class="$attrs.class"&gt;Hi!&lt;/p&gt;
      &lt;span&gt;This is a child component&lt;/span&gt;

      &lt;MyComponent class="baz" /&gt;

      // 这将被渲染为
      &lt;p class="baz"&gt;Hi!&lt;/p&gt;
      &lt;span&gt;This is a child component&lt;/span&gt;

      // :style 支持绑定 JavaScript 对象值，对应的是 HTML 元素的 style 属性
      const activeColor = ref('red')
      const fontSize = ref(30)
      &lt;div :style="{ color: activeColor, fontSize: fontSize + 'px' }"&gt;&lt;/div&gt;

      // 尽管推荐使用 camelCase，但 :style 也支持 kebab-cased 形式的 CSS 属性 key (对应其 CSS 中的实际名称)，例如
      &lt;div :style="{ 'font-size': fontSize + 'px' }"&gt;&lt;/div&gt;

      // 可以直接绑定一个样式对象通常，这样可以使模板更加简洁
      const styleObject = reactive({color: 'red',fontSize: '30px' })
      &lt;div :style="styleObject"&gt;&lt;/div&gt;

      // 自动前缀：当你在 :style 中使用了需要浏览器特殊前缀的 CSS 属性时，Vue 会自动为他们加上相应的前缀
      // 样式多值：你可以对一个样式属性提供多个 (不同前缀的) 值，举例来说 数组仅会渲染浏览器支持的最后一个值。在这个示例中，在支持不需要特别前缀的浏览器中都会渲染为 display: flex
      &lt;div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"&gt;&lt;/div&gt;

  // 条件渲染：v-if 、v-else-if 、v-else   ( 内置指令 Directives )
      &lt;p&gt; v-if="seen==A"&gt;Now you see me&lt;/p&gt;
      &lt;p&gt; v-else-if="seen==B"&gt;show me&lt;/p&gt;
      &lt;p&gt; v-else&gt;me&lt;/p&gt;    // 当所有条件都不满足执行 v-else标签
      // 当 v-if 和 v-for 同时存在于一个元素上的时候，v-if 会首先被执行
      // 不建议同时使用 v-if v-for 在一个元素上

  // 条件渲染：v-show
      // 与v-if不同之处在于 v-show 会在 DOM 渲染中保留该元素
      // v-show 仅切换了该元素上名为 display 的 CSS 属性
      // v-show 不支持在 &lt;template&gt; 元素上使用，也不能和 v-else 搭配使用
      &lt;h1&gt; v-show="ok"&gt;Hello!&lt;/h1&gt;
      // 如果需要频繁切换，则使用 v-show 较好。因为 v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销

  // 列表渲染：v-for
      const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
      &lt;li&gt; v-for="(item, index) in items" :key=index&gt;
        ｛｛ item.message ｝｝
      &lt;/li&gt;

      // 也可以在定义 v-for 的变量别名时使用解构，和解构函数参数类似
      &lt;li&gt; v-for="({ message }, index) in items"&gt;
        ｛｛ message ｝｝ ｛｛ index ｝｝
      &lt;/li&gt;

      // 对于多层嵌套的 v-for，作用域的工作方式和函数的作用域很类似。每个 v-for 作用域都可以访问到父级作用域：
      &lt;li v-for="item in items"&gt;
        &lt;span&gt; v-for="childItem in item.children"&gt;
          ｛｛ item.message ｝｝ ｛｛ childItem ｝｝
        &lt;/span&gt;
      &lt;/li&gt;

      // 也可以使用 of 作为分隔符来替代 in，这更接近 JavaScript 的迭代器语法
      &lt;div&gt; v-for="item of items"&gt;&lt;/div&gt;

      // 渲染对象
      const myObject = reactive({
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      })
      &lt;li&gt; v-for="(value, key, index) in myObject"&gt; // value值，key名
        ｛｛ index ｝｝. ｛｛ key ｝｝: ｛｛ value ｝｝
      &lt;/li&gt;

      // 输出结果
      0. title: How to do lists in Vue
      1. author: Jane Doe
      2. publishedAt: 2016-04-10

      // v-for 可以直接接受一个整数值。在这种用例中，会将该模板基于 1...n 的取值范围重复多次。 注意此处 n 的初值是从 1 开始而非 0
      &lt;span&gt; v-for="n in 10"&gt;｛｛ n ｝｝&lt;/span&gt;

      // 可以在 &lt;template&gt; 标签上使用 v-for 来渲染一个包含多个元素的块
      &lt;ul&gt;
        &lt;template v-for="item in items"&gt;
          &lt;li&gt;｛｛ item.msg ｝｝&lt;/li&gt;
          &lt;li&gt; class="divider" role="presentation"&gt;&lt;/li&gt;
        &lt;/template&gt;
      &lt;/ul&gt;

  // 数组变化
      push()    // 用于向数组的末尾添加一个或多个元素，并返回新的长度。会修改原数组
      pop()     // 用于删除数组的最后一个元素，并返回该元素的值。会修改原数组，数组长度减1
      shift()   // 用于删除数组的第一个元素，并返回该元素的值。会修改原数组，数组长度减1
      unshift() // 用于向数组的开头添加一个或多个元素，并返回新的长度。会修改原数组
      splice()  // 用于通过删除或替换现有元素或者添加新元素来修改数组，并以数组形式返回被删除的元素。会改变原数组。
      sort()    // 用于对数组的元素进行排序并返回数组本身。默认排序顺序是将元素转换为字符串，然后比较它们的UTF-16代码单元值序列
      reverse() // 用于将数组（或列表）中的元素顺序颠倒。该方法会修改原始数组（或列表），而不会创建新的数组（或列表）

  // v-on  (监听)
      &lt;a&gt; v-on:click="doSomething"&gt; ... &lt;/a&gt;
      &lt;!-- 简写 @ --&gt;
      &lt;a&gt; @click="doSomething"&gt; ... &lt;/a&gt;

      &lt;!-- 可以使用一个 JavaScript 表达式 , 注意，参数表达式有一些约束--&gt;
      &lt;a&gt; v-bind:[attributeName]="url"&gt; ... &lt;/a&gt;
      &lt;!-- 在此示例中，当 eventName 的值是 "focus" 时，v-on:[eventName] 就等价于 v-on:focus--&gt;
      &lt;a&gt; v-on:[eventName]="doSomething"&gt; ... &lt;/a&gt;

      &lt;!-- 动态参数值的限制与语法限制：
         1、值应当是一个字符串，或者是 null
         2、比如空格和引号，是不合法的，这会触发一个编译器警告
         3、避免在名称中使用大写字母，因为浏览器会强制将其转换为小写
      --&gt;
      &lt;a&gt; :['foo' + bar]="value"&gt; ... &lt;/a&gt;
      &lt;a&gt; :[someAttr]="value"&gt; ... &lt;/a&gt;

  // 修饰符Modifiers ( 修饰符是以点开头的特殊后缀，表明指令需要以一些特殊的方式被绑定)
      &lt;form&gt; @submit.prevent="onSubmit"&gt;...&lt;/form&gt;

  // 事件修饰符
      &lt;!-- 单击事件将停止传递 --&gt;
      &lt;a&gt; @click.stop="doThis"&gt;&lt;/a&gt;

      &lt;!-- 提交事件将不再重新加载页面 --&gt;
      &lt;form&gt; @submit.prevent="onSubmit"&gt;&lt;/form&gt;

      &lt;!-- 修饰语可以使用链式书写 --&gt;
      &lt;a&gt; @click.stop.prevent="doThat"&gt;&lt;/a&gt;

      &lt;!-- 也可以只有修饰符 --&gt;
      &lt;form&gt; @submit.prevent&gt;&lt;/form&gt;

      &lt;!-- 仅当 event.target 是元素本身时才会触发事件处理器 --&gt;
      &lt;!-- 例如：事件处理器不来自子元素 --&gt;
      &lt;div&gt; @click.self="doThat"&gt;...&lt;/div&gt;

      &lt;!-- 添加事件监听器时，使用 `capture` 捕获模式 --&gt;
      &lt;!-- 例如：指向内部元素的事件，在被内部元素处理前，先被外部处理 --&gt;
      &lt;div&gt; @click.capture="doThis"&gt;...&lt;/div&gt;

      &lt;!-- 点击事件最多被触发一次 --&gt;
      &lt;a&gt; @click.once="doThis"&gt;&lt;/a&gt;

      &lt;!-- 滚动事件的默认行为 (scrolling) 将立即发生而非等待 `onScroll` 完成 --&gt;
      &lt;!-- 以防其中包含 `event.preventDefault()` --&gt;
      &lt;div&gt; @scroll.passive="onScroll"&gt;...&lt;/div&gt;

  // 按键修饰符
      &lt;input @keyup.enter="submit" /&gt;
      &lt;input @keyup.page-down="onPageDown" /&gt;

      .enter
      .tab
      .delete (捕获“Delete”和“Backspace”两个按键)
      .esc
      .space
      .up
      .down
      .left
      .right

  // 系统按键修饰符
      .ctrl
      .alt
      .shift
      .meta

  /* 注意：在 Mac 键盘上，meta 是 Command 键 (⌘)。在 Windows 键盘上，meta 键是 Windows 键 (⊞)。
      在 Sun 微机系统键盘上，meta 是钻石键 (◆)。在某些键盘上，特别是 MIT 和 Lisp 机器的键盘及其后代版本的键盘，
      如 Knight 键盘，space-cadet 键盘，meta 都被标记为“META”。在 Symbolics 键盘上，meta
      也被标识为“META”或“Meta”  */
      &lt;!-- Alt + Enter --&gt;
      &lt;input @keyup.alt.enter="clear" /&gt;

      &lt;!-- Ctrl + 点击 --&gt;
      &lt;div&gt; @click.ctrl="doSomething"&gt;Do something&lt;/div&gt;

  // .exact 修饰符允许精确控制触发事件所需的系统修饰符的组合
      &lt;!-- 当按下 Ctrl 时，即使同时按下 Alt 或 Shift 也会触发 --&gt;
      &lt;button&gt; @click.ctrl="onClick"&gt;A&lt;/button&gt;

      &lt;!-- 仅当按下 Ctrl 且未按任何其他键时才会触发 --&gt;
      &lt;button&gt; @click.ctrl.exact="onCtrlClick"&gt;A&lt;/button&gt;

      &lt;!-- 仅当没有按下任何系统按键时触发 --&gt;
      &lt;button&gt; @click.exact="onClick"&gt;A&lt;/button&gt;

  // 鼠标修饰符
      .left
      .right
      .middle

  // v-model表单输入绑定
      // 手动
      &lt;input
        :value="text"
        @input="event =&gt; text = event.target.value"&gt;

      // v-model指令
      &lt;input v-model="text"&gt;

      // 例如
      &lt;template&gt;
          &lt;p&gt;Message is: ｝｝ message ｝｝&lt;/p&gt;
          &lt;input v-model="message" placeholder="edit me" /&gt;
      &lt;/template&gt;
      &lt;script&gt; setup&gt;
          import { ref } from "vue";
          let message = ref("hello");
      &lt;/script&gt;

      // 多行文本
      &lt;span&gt;Multiline message is:&lt;/span&gt;
      &lt;p&gt; style="white-space: pre-line;"&gt;｝｝ message ｝｝&lt;/p&gt;
      &lt;textarea&gt; v-model="message" placeholder="add multiple lines"&gt;&lt;/textarea&gt;

      // 注意在 &lt;textarea&gt; 中是不支持插值表达式的。请使用 v-model 来替代
      &lt;!-- 错误 --&gt;
      &lt;textarea&gt;｝｝ text ｝｝&lt;/textarea&gt;
      &lt;!-- 正确 --&gt;
      &lt;textarea&gt; v-model="text"&gt;&lt;/textarea&gt;

       // 可以将多个复选框绑定到同一个数组或集合的值
      const checkedNames = ref([])

      &lt;div&gt;Checked names: ｝｝ checkedNames ｝｝&lt;/div&gt;
      &lt;input type="checkbox" id="jack" value="Jack" v-model="checkedNames" /&gt;
      &lt;label&gt; for="jack"&gt;Jack&lt;/label&gt;
      &lt;input type="checkbox" id="john" value="John" v-model="checkedNames" /&gt;
      &lt;label&gt; for="john"&gt;John&lt;/label&gt;
      &lt;input type="checkbox" id="mike" value="Mike" v-model="checkedNames" /&gt;
      &lt;label&gt; for="mike"&gt;Mike&lt;/label&gt;

  // 修饰符
      .lazy
      // 默认情况下，v-model 会在每次 input 事件后更新数据 (IME 拼字阶段的状态例外)。你可以添加 lazy 修饰符来改为在每次 change 事件后更新数据：
      &lt;input v-model.lazy="msg" /&gt;

      .number
      // 如果你想让用户输入自动转换为数字，你可以在 v-model 后添加 .number 修饰符来管理输入
      &lt;input v-model.number="age" /&gt;

      .trim
      // 如果你想要默认自动去除用户输入内容中两端的空格，你可以在 v-model 后添加 .trim 修饰符：
      &lt;input v-model.trim="msg" /&gt;

  // 生命周期钩子
      onMounted()         // 钩子可以用来在组件完成初始渲染并创建 DOM 节点后运行代码
      onUpdated()         // 在组件因为响应式状态变更而更新其 DOM 树之后调用
      onUnmounted()       // 在组件实例被卸载之后调用
      onBeforeMount()     // 注册一个钩子，在组件被挂载之前被调用。
      onBeforeUpdate()    // 在组件即将因为响应式状态变更而更新其 DOM 树之前调用。
      onBeforeUnmount()   // 在组件实例被卸载之前调用。
      onErrorCaptured()   // 在捕获了后代组件传递的错误时调用。
      onRenderTracked()   // 注册一个调试钩子,当组件渲染过程中追踪到响应式依赖时调用。
      onRenderTriggered() // 注册一个调试钩子，当响应式依赖的变更触发了组件渲染时调用。
      onActivated()       // 若组件实例是&lt;KeepAlive&gt;缓存树的一部分，当组件插入到DOM中调用。
      onDeactivated()     // 若组件实例是&lt;KeepAlive&gt;缓存树的一部分,从DOM中被移除时调用。
      onServerPrefetch()  // 注册一个异步函数，在组件实例在服务器上被渲染之前调用。

  /* watch侦听器(计算属性允许我们声明性地计算衍生值。然而在有些情况下，我们需要在状态变化时执行一些“副作用”：
      例如更改 DOM，或是根据异步操作的结果去修改另一处的状态,组合式 API 中，我们可以使用 watch 函数在每次响应
      式状态发生变化时触发回调函数) */
      import { ref, watch } from 'vue'
      const question = ref('')
      watch(question =&gt; {})

  // ref 模板引用
      &lt;input ref="input"&gt;

      // 要在组合式 API 中获取引用，我们可以使用辅助函数 useTemplateRef()
      &lt;script&gt; setup&gt;
      import { useTemplateRef, onMounted } from 'vue'

      // 第一个参数必须与模板中的 ref 值匹配
      const input = useTemplateRef('my-input')

      onMounted(() =&gt; {input.value.focus()})
      &lt;/script&gt;

      &lt;template&gt;
        &lt;input ref="my-input" /&gt;
      &lt;/template&gt; </code></pre>
      </el-card>
      <el-card id="part10" shadow="hover">
        <h2>其他技巧</h2>
        <p>配置镜像</p>
        <pre><code class="language-js line-numbers">  npm config get registry
  npm config set registry https://registry.npmmirror.com</code></pre>
        <p>组件深度选择器</p>
        <ul>
          <li>1. 当加载element-plus 组件时想修改样式，添加类名也无效</li>
          <li>2. 先网页中F12查看组件的类名，后修改</li>
          <li>
            3. 三种深度选择器 方式：
            <pre><code class="language-js line-numbers">  /deep/   ::v-deep   >>>

  >>> .el-input__inner{ width:330px}

  ::v-deep .el-autocomplete {width: 600px; margin-right: 20px;}
  // 简写
  :deep(.el-input__wrapper) { height: 40px;}</code></pre>
          </li>
        </ul>
        <p>原生js的滚动函数</p>
        <pre><code class="language-js line-numbers">  element.scrollIntoView({
  behavior:'smooth'  // 动画效果
  block:'start'      // 滚动位置
      ...            // 其他参数查询mdn文档
  })</code></pre>
        <p>过渡动画</p>
        <pre><code class="language-js line-numbers">  &lt;template&gt;
    &lt;router-view v-slot="{ Component }"&gt;
      &lt;transition name="fade"&gt;
        &lt;component :is="Component" /&gt;
      &lt;/transition&gt;
    &lt;/router-view&gt;
  &lt;script&gt; setup lang="ts" name="Main"&gt;&lt;/script&gt;

  &lt;style&gt; scoped lang="scss"&gt;
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease-in-out;  /* 进入离开添加过渡 */
  }

  .fade-leave-active {
    transition-delay: 0.25s;           /* 延迟0.25秒离开 */
  }

  .fade-enter-from,
  .fade-leave-to {
    transform: translateY(1.0667rem);
    opacity: 0;
  }

  /* 结构为
  .name-enter-from{opacity:0;}
  .name-enter-active{transition:all 0.3s;}
  .name-enter-to{opacity:1;}  */
  &lt;/style&gt;</code></pre>
        <p>获取dom</p>
        <pre><code class="language-js line-numbers">  // 1. ts 获取div则用HTMLDivElement, 例如input 则用 HTMLInputElement 等对应
  &lt;div class="breadcrumb  ref="breadcrumb"&gt;
  let breadcrumb = ref&lt;HTMLDivElement| null &gt;(null);
    onMounted(() => {
    console.log(breadcrumb.value);
  });

  // 2. 获取组件
  type MainInstanceType = InstanceType&lt;typeof Main&gt;;
  const mainRef = ref&lt;MainInstanceType | null&gt;(null);
  const handleScroll = () => {
    if (mainRef.value) {mainRef.value.handleScroll();}
  };
  &lt;Main ref="mainRef"&gt;&lt;/Main&gt;</code></pre>
        <p>头顶进度条html</p>
        <pre><code class="language-js line-numbers">  &lt;!DOCTYPE html&gt;
  &lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8" /&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;style&gt;
      .progress {position: fixed;top: 0;left: 0;height: 20px;background: #ccc;}
      .big_box {width: 800px;height: 3000px;border: 1px solid red;}
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div class="progress"&gt;&lt;/div&gt;
    &lt;div&gt;&lt;div class="big_box"&gt;&lt;/div&gt;&lt;/div&gt;
    &lt;script&gt;
        let flag = true;
        window.addEventListener("scroll", () =&gt; {
            if (flag) {
                flag = false;
                window.requestAnimationFrame(scrollWork);
                setTimeout(() =&gt; (flag = true), 40);
            }
        });
        function scrollWork() {
            let pageHeight = document.body.scrollHeight||document.documentElement.scrollHeight;
            let screenHeight = document.documentElement.clientHeight || document.body.clientHeight;
            let scrollHight = pageHeight - screenHeight;
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            let progress = document.querySelector(".progress");
            progress.style.width = (scrollTop / scrollHight) * 100 + "%";
        }
    &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;</code></pre>
        <p>使用prismjs 代码高亮</p>
        <pre><code class="language-js line-numbers">  // 1. 安装
  pnpm i prismjs -S

  # vite
  npm install vite-plugin-prismjs -D

  // 2. 配置vite.config.ts
  import { prismjsPlugin } from 'vite-plugin-prismjs'
  export default defineConfig({
    plugins: [
        prismjsPlugin({
            languages: 'all', // 语言
            plugins: ['line-numbers','show-language','copy-to-clipboard','inline-color'],
            theme: 'okaidia',// 主题
            css: true,
        })
    ]
  })
  /* 主题分别有
    Default   Dark  Funky   Okaidia  Twilight  Coy  Solarized Light
    Tomorrow
  */

  // 3. 配置index.vue
  import Prism from 'prismjs';
  onMounted(() => {
    Prism.highlightAll();
  });

  onUpdated(() => {
    Prism.highlightAll();
  });

  // 4. 和mac 一样的风格
  pre {
    overflow: hidden;
    font-size: 0.4267rem;
    code {
      display: inline-block;
      padding-bottom: 0.5333rem;
      position: relative;
      top: 0.5333rem;
    }
    &::before {
      content: '';
      position: absolute;
      background: red;
      width: 0.2667rem;
      height: 0.2667rem;
      border-radius: 50%;
      top: 0.2667rem;
      left: 0.4rem;
      transform: translate(-50%);
    }
    &::after {
      content: '';
      position: absolute;
      background: sandybrown;
      width: 0.2667rem;
      height: 0.2667rem;
      border-radius: 50%;
      top: 0.2667rem;
      left: 0.8rem;
      transform: translate(-50%);
    }
    code:first-child {
      &::after {
        content: '';
        position: absolute;
        background: limegreen;
        width: 0.2667rem;
        height: 0.2667rem;
        border-radius: 50%;
        top: -0.6933rem;
        left: -0.4267rem;
        transform: translate(-50%);
      }
    }
  }
  div.code-toolbar > .toolbar > .toolbar-item {
      font-size: 0.48rem;
      color: #fff;
      margin: 0 0.1333rem;
  }

  // 5. 使用
  &lt;pre&gt;&lt;code&gt; class="language-html line-numbers"&gt;print("Hello world")&lt;/code&gt;&lt;/pre&gt;</code></pre>

        <p>技巧</p>
        <pre><code class="language-js line-numbers">  // 使用_前缀：在默认函数的参数前加上_前缀来表示这个参数是故意未使用的
  import { inject } from 'vue';
  const { money, updateMoney } = inject('moneyContext', {
    money: 0,
    updateMoney: (_value: number) => {},  这样就不会提示已声明但未使用了
  });</code></pre>
      </el-card>
      <el-card id="part11" shadow="hover">
        <h2>项目配置参数</h2>
      </el-card>
    </template>
  </card-container>
</template>

<script setup lang="ts" name="vue3">
import { ref } from "vue";

const data = ref([
  { id: 1, h2: "Vue3" },
  { id: 2, h2: "创建Vue3工程" },
  { id: 3, h2: "Vue3核心语法" },
  { id: 4, h2: "路由" },
  { id: 5, h2: "Pinia" },
  { id: 6, h2: "组件通信" },
  { id: 7, h2: "Slot" },
  { id: 8, h2: "其它 API" },
  { id: 9, h2: "Vue3新组件" },
  { id: 10, h2: "其他技巧" },
  { id: 11, h2: "目配置参数" },
]);
</script>

<style scoped lang="scss"></style>
