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
        </ul>
        <p>Composition API 的优势</p>
        <ul>
          <li>
            可以用函数的方式，更加优雅的组织代码，让相关功能的代码更加有序的组织在一起。
          </li>
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
            <pre><code class="language-javascript line-numbers">  &lt;template&gt;
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
            特点：Vue3中的watch只能监视以下四种数据：
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
        <p>项目初始化</p>
        <pre><code class="language-powershell line-numbers">  npm i -g pnpm                // 采用pnpm包管理 如果有全局安装则省略
  pnpm create vite             // 创建项目
      > 项目名称
      > Vue
      > TypeScript
  cd 项目名称
  pnpm install
  npm run dev

  // 或者采用模版指定命令 快捷
  pnpm create vite@latest 项目名称 --template vue-ts

  // 新版出现找不到node:path时执行命令行
  import path from 'path';
  pnpm install --save-dev @types/node</code></pre>
        <p>配置package.json</p>
        <pre><code class="language-js line-numbers">  // 项目运行后自动打开浏览器，无需手动
  "scripts": {
      "dev": "vite --open",
  },

  // 或者 配置 vite.config.ts  二选一，建议配置vite
  export default defineConfig({
    plugins: [vue()],
    server: { open: true, host: '0.0.0.0' }
  });

  // 2024.10.31配置版本(参考)
  {
    "name": "memory","private": true,"version": "0.0.0","type": "module",
    "scripts": {
      "dev": "vite",
      "build": "vue-tsc -b && vite build",
      "preview": "vite preview"
    },
    "dependencies": {"vue": "^3.5.12"},
    "devDependencies": {
      "@vitejs/plugin-vue": "^5.1.4",
      "typescript": "~5.6.2",
      "vite": "^5.4.9",
      "vue-tsc": "^2.1.6"
    }
  }</code></pre>
        <p>Eslint新配置</p>
        <pre><code class="language-js line-numbers">  // Anthony Fu作者通用配置方案
  // 注意，使用eslint配置后，可以不使用prettier来格式化代码，但是css需要

  ## 项目地址https://github.com/antfu/eslint-config
  ## 安装anthfu的eslint
  pnpm i -D eslint @antfu/eslint-config

  ## 添加 package.json
    "scripts": {
      "lint": "eslint",
      "lint:fix": "eslint --fix"
    }

  ## 创建eslint.config.mjs
  import antfu from '@antfu/eslint-config'
  export default antfu()

  ## VS Code 自动修复配置 安装 ESLint 插件，然后在 .vscode/settings.json 添加以下配置：
    // Disable the default formatter, use eslint instead
    "prettier.enable": false,         ## 禁用默认格式化程序，使用 ESLint 替代
    "editor.formatOnSave": false,
    "editor.codeActionsOnSave": {     ## Auto fix 自动修复
      "source.fixAll.eslint": "explicit",
      "source.organizeImports": "never"
    },

  ## 在 IDE 中静默样式规则，但仍然自动修复
    // Silent the stylistic rules in you IDE, but still auto fix them
    "eslint.rules.customizations": [
      { "rule": "style/*", "severity": "off", "fixable": true },
      { "rule": "format/*", "severity": "off", "fixable": true },
      { "rule": "*-indent", "severity": "off", "fixable": true },
      { "rule": "*-spacing", "severity": "off", "fixable": true },
      { "rule": "*-spaces", "severity": "off", "fixable": true },
      { "rule": "*-order", "severity": "off", "fixable": true },
      { "rule": "*-dangle", "severity": "off", "fixable": true },
      { "rule": "*-newline", "severity": "off", "fixable": true },
      { "rule": "*quotes", "severity": "off", "fixable": true },
      { "rule": "*semi", "severity": "off", "fixable": true }
    ],

  ## 为所有支持的语言启用 ESLint
   // Enable eslint for all supported languages
    "eslint.validate": [
      "javascript","javascriptreact","typescript","typescriptreact","vue",
      "html","markdown","json","jsonc","yaml","toml","xml","gql","graphql",
      "astro","svelte","css","less","scss","pcss","postcss"
    ]

  ## 执行命令 检查 和 修复
  pnpm run lint
  pnpm run lint:fix

  ## 在使用ts校验忽略的时候需要加上注解就不会报错了
  // @ts-expect-error

  ## 后语法，可以转化
  to-function：将箭头函数转换为普通函数
  to-arrow：将普通函数转换为箭头函数
  to-for-each：将 for-in/for-of 循环转换为 .forEach（）
  to-for-of：将 .forEach（） 转换为 for-of 循环
  keep-sorted： 对对象/数组/接口进行排序

  ## 配置完ctrl + shift + p 重置下
  &gt; ESLint:Restart Eslint Server

  ## 只需运行以下命令，即可快速查看当前项目中启用的规则,会生成一个窗口看自己的配置
  ## 里面可以选择以及配置需要的参数
  npx @eslint/config-inspector

  ############################################
  ## 以上代码已经可以正常使用，以下代码是定制代码 ##
  ############################################

  ##  导入 Antfu 的 ESLint 配置 eslint.config.mjs
  // 导出配置对象，通过 antfu() 函数生成最终配置
  import antfu from '@antfu/eslint-config';
  export default antfu(
    {
      // 配置需要忽略的文件和目录
      ignores: [
        '.vscode',               // 忽略 VS Code 配置目录
        '**/.vscode/**',         // 递归忽略所有 .vscode 目录下的文件
        'build/*.js',            // 忽略 build 目录下的所有 JS 文件
        'build/*.js/**',         // 递归忽略 build 目录下 JS 文件的子目录
        'src/assets',            // 忽略 src/assets 目录
        'src/assets/**',         // 递归忽略 src/assets 目录下的所有文件
        'public',                // 忽略 public 目录
        '**/public/**',          // 递归忽略所有 public 目录下的文件
        'dist',                  // 忽略打包输出目录
        '**/dist/**',            // 递归忽略所有 dist 目录下的文件
        'node_modules',          // 忽略依赖包目录
        '**/node_modules/**',    // 递归忽略所有 node_modules 目录下的文件
        'pnpm-lock.yaml',        // 忽略 pnpm 锁文件
        '**/pnpm-lock.yaml/**',  // 递归忽略所有 pnpm-lock.yaml 目录下的文件
        '**/*.d.ts'              // 忽略所有类型声明文件
      ],
      // 启用代码格式化（在eslint处理不了情况下如 Prettier来处理）
      formatters: { css: true, html: true },
      // 启用 Vue 支持
      vue: true,
      // 启用 TypeScript 支持
      typescript: true,
      // 代码风格配置
      stylistic: {
        indent: 2,              // 使用 2 个空格缩进（可选值：4 或 'tab'）
        quotes: 'single',       // 使用单引号（可选值：'double'）
        semi: true              // 强制使用分号结尾（可选值：false）
      },
      // 自定义 ESLint 规则
      rules: {
        'no-unused-vars': 'error',  // 未使用的变量视为错误
        'no-undef': 'off',          // 关闭未定义变量检查（通常由 TypeScript 处理）
        'no-console': 'warn',       // 生产环境中警告 console 语句
        'antfu/if-newline': 'off',  // 关闭 Antfu 自定义的 if 语句换行规则
        'style/comma-dangle': ['error', 'never'],  // 禁止尾随逗号
        'vue/attribute-hyphenation': 'off',  // 禁用连字符修改传参
        'vue/max-attributes-per-line': ['error', {  // 强制每行最大属性数
          singleline: {   // 单行情况下最大10个属性
            max: 5
          },
          multiline: {    // 多行情况下每行最大10个属性
            max: 5
          }
        }],
        'vue/block-order': ['error', { // 标签的排序问题
          order: ['docs', 'template', 'script', 'style']
        }],
        'vue/html-self-closing': ['error', {  // 标签自闭合  div svg 组件等
          html: {
            normal: 'never',
            void: 'always',
            component: 'always'
          },
          svg: 'always',
          math: 'always'
        }],
        // 可以处理html标签内容换行问题，忽略div
        'vue/singleline-html-element-content-newline': ['error',
          {
            externalIgnores: ['div,span'],
          }
        ]
      }
    }
  );

  ## 注意，顶级的箭头函数会强制转换成用函数关键字声明
  ## 当变量被分配类型时，规则将忽略它。
  interface MyFunction {(...args: any[]): any;}
  const onSearch: MyFunction = (v: string | number) => {
    console.log('====search', v);
  };
  ## 这样就不会被强制转成这种了
  function onSearch(v: string | number) {
    console.log('====search', v);
  }

        </code></pre>
        <p>vite插件配置组件name</p>
        <pre><code class="language-js line-numbers">  // 1. 代码中，需要编写一个不写setup的script标签，去指定组件名字，比较麻烦，我们可以借助vite中的插件简化
  // 2. 第一步：pnpm i vite-plugin-vue-setup-extend -D
  // 3. 第二步：vite.config.ts
  import VueSetupExtend from 'vite-plugin-vue-setup-extend'
  export default defineConfig({
    plugins: [ VueSetupExtend() ]
  })

  // 4. 第三步：&lt;script setup lang="ts" name="Person"&gt;&lt;/script&gt;

  // 5. Vite组件名自动注册插件 (未测试)
  import { defineConfig } from 'vite'
  import vue from '@vitejs/plugin-vue'
  export default defineConfig({
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => tag.startsWith('swiper-')
          }
        }
      })
    ]
  })</code></pre>
        <p>配置 stylelint</p>
        <pre><code class="language-js line-numbers">  // 不推荐但适合不喜欢用原子化的人可以配置 (因为没必要使用，自己书写正确，浪费资源，采用原子化css)
  // 1. 老配置 需要安装prettier插件
  // 2. stylelint为css的lint工具。可格式化css代码，检査css语法错误与不合理的写法，指定css书写顺序等。
  // 3. 官网:https://stylelint.bootcss.com/
  // 4. 安装
  ## 旧版本
  pnpm add sass sass-loader stylelint postcss postcss-scss postcss-html stylelint-config-prettier stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-vue stylelint-scss stylelint-order stylelint-config-standard-scss -D

  ## 2025.06.10 优化  (推荐)
  pnpm add -D stylelint postcss postcss-scss postcss-html stylelint-config-standard-scss stylelint-order stylelint-config-recommended-vue postcss-html postcss-scss stylelint-config-recess-order stylelint-config-prettier stylelint-config-standard
  ## 安装prettier
  pnpm add -D prettier

  // 5. 创建.stylelintrc.cjs配置文件  官网 @see https://stylelint.bootcss.com/
  module.exports = {
    extends: [
     'stylelint-config-standard', // 配置stylelint拓展插件
     'stylelint-config-html/vue', // 配置 vue 中 template 样式格式化
     'stylelint-config-standard-scss', // 配置stylelint scss插件
     'stylelint-config-recommended-vue/scss', // 配置vue中 scss 样式格式化
     'stylelint-config-recess-order', // 配置stylelint css属性书写顺序插件,
     'stylelint-config-prettier', // 配置stylelint和prettier兼容
    ],
    overrides: [
      {files: ['**/*.(scss|css|vue|html)'],customSyntax: 'postcss-scss',},
      {files: ['**/*.(html|vue)'],customSyntax: 'postcss-html',},
    ],
    ignoreFiles: ['**/*.js','**/*.jsx','**/*.tsx','**/*.ts','**/*.json','**/*.md','**/*.yaml',],
    /**
     * null  => 关闭该规则
     * always => 必须
     */
    rules: {
      'value-keyword-case': null, // 在 css 中使用 v-bind，不报错
      // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
      'no-descending-specificity': null,
      // 要求或禁止 URL 的引号 "always(必须加上引号)"|"never(没有引号)"
      'function-url-quotes': 'always',
      'no-empty-source': null, // 关闭禁止空源码
      'selector-class-pattern': null, // 关闭强制选择器类名的格式
      'property-no-unknown': null, // 禁止未知的属性(true 为不允许)
      //大括号之前必须有一个空格或不能有空白符
      'block-opening-brace-space-before': 'always',
      'value-no-vendor-prefix': null, // 关闭 属性值前缀 --webkit-box
      'property-no-vendor-prefix': null, // 关闭 属性前缀 -webkit-mask
      'selector-pseudo-class-no-unknown': [  // 不允许未知的选择器
        true,
        { // 忽略属性，修改element默认样式的时候能使用到
          ignorePseudoClasses: ['global', 'v-deep', 'deep'],
        },
      ],
    },
  }

  // 6. 创建.stylelintignore忽略文件
  /node_modules/*
  /dist/*
  /html/*
  /public/*
  /vite.config.ts
  /tsconfig.json
  /tsconfig.app.json
  /tsconfig.node.json
  /README.md
  /.prettierrc.json
  /package.json
  /README.md
  /vite-env.d.ts

  /.github/*
  /.vscode/*
  *.config.*

  // 7. 运行脚本
  "scripts": {
    "format": "prettier --write \"./**/*.{html,vue,ts,js,json,md}\"",
    "lint:eslint": "eslint src/**/*.{ts,vue} --cache --fix",
    "lint:style": "stylelint src/**/*.{css,scss,vue} --cache --fix"
  },

  // 8. 当我们运行的时候，会把代码直接格式化
  ##  最后需要执行
  pnpm run lint:style
  pnpm run lint:eslint
  pnpm run format

  // 9. 警告：Deprecation Warning: The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0.
  /* 原因是 sass提供的某些 js api 即将在 v2.0.0 的新版本中废弃了，提醒你及时更新
  解决办法：
  1、降级sass到1.32.13
  pnpm uninstall sass -D
  pnpm install sass@1.78 -D
  2、在vite.config.ts 中关闭警告
  export default defineConfig({
    css:{
      preprocessorOptions:{
        scss:{
          // quietDeps:true  此方法在高版本中不起作用
          silenceDeprecations:['legacy-js-api'],
        }
      }
    }
  })
  3.解决办法(实测降级最为有效)
  css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // or 'modern
        },
      },
  },  */</code></pre>
        <p>配置husky</p>
        <pre><code class="language-js line-numbers">  /* 1. 项目已经集成好了代码校验工具，但需要每次手动的去执行命令才会格式化代码。
  如果有人没有格式化就提交了远程仓库中，那这个规范就没什么用。
  所以我们需要强制让开发人员按照代码规范来提交。要做到这件事情，
  就需要利用husky在代码提交之前触发git hook(git在客户端的钩子)，
  然后执行pnpm run format 来自动的格式化我们的代码。 */

  // 2. 安装husky
  pnpm install -D husky
  // 3. 先要初始化git 仓库，后执行
  npx husky-init
  // 4. 在.husky/pre-commit文件添加如下命令：
  #!/usr/bin/env sh
  . "$(dirname -- "$0")/_/husky.sh"

  pnpm run format                       // 删除 test 添加此行</code></pre>
        <p>配置commitlint</p>
        <pre><code class="language-js line-numbers">  // 1. 对于我们的commit信息，也是有统一规范的，不能随便写,要让每个人都按照统一的标准来执行，我们可以利用commitlint来实现。
  // 2. 安装包
  pnpm add @commitlint/config-conventional @commitlint/cli -D
  // 3. 创建 commitlint.config.cjs ，并添加配置代码
  module.exports = {
    extends: ['@commitlint/config-conventional'],
    // 校验规则
    rules: {
      'type-enum': [2,'always',
        ['feat','fix','docs','style','refactor','perf','test','chore','revert','build',],
      ],
      'type-case': [0],
      'type-empty': [0],
      'scope-empty': [0],
      'scope-case': [0],
      'subject-full-stop': [0, 'never'],
      'subject-case': [0, 'never'],
      'header-max-length': [0, 'always', 72],
    },
  }

  // 4. 配置 package.json
  # 在scrips中添加下面的代码
  {
    "scripts": {
      "commitlint": "commitlint --config commitlint.config.cjs -e -V"
    },
  }
      // 1. 配置结束后，提交代码前面就需要带着下面的subject
      'feat',    // 新特性、新功能
      'fix',     // 修改bug
      'docs',    // 文档修改
      'style',   // 代码格式修改, 注意不是 css 修改
      'refactor',// 代码重构
      'perf',    // 优化相关，比如提升性能、体验
      'test',    // 测试用例修改
      'chore',   // 其他修改, 比如改变构建流程、或者增加依赖库、工具等
      'revert',  // 回滚到上一个版本
      'build',   // 编译相关的修改，例如发布版本、对项目构建或者依赖的改动

      // 2. 配置husky
      npx husky add .husky/commit-msg

      // 3. 在生成的commit-msg文件中添加下面的命令
      #!/usr/bin/env sh
      . "$(dirname -- "$0")/_/husky.sh"
      pnpm commitlint

      /* 当我们 commit 提交信息时，就不能再随意写了，必须是 git commit -m 'fix: xxx' 符合类型的才可以，
      (需要注意的是类型的后面需要用英文的 :，并且冒号后面是需要空一格的，这个是不能省略的) */

      // 4. 提交示例
      // 没配置前
      git add .
      git commit -m xxxxx
      git push                     // 提交失败，需要引用commitlint关键字

      // 配置后
      git add .
      git commit -m 'feat: 新增功能提交'
      git push</code></pre>
        <p>强制使用pnpm包管理器工具</p>
        <pre><code class="language-js line-numbers">  // 1. 在根目录创建scripts/preinstall.js文件，添加下面的内容
  /*
  if (!/pnpm/.test(process.env.npm_execpath || '')) {
    console.warn(
      `\u001b[33mThis repository must using pnpm as the package manager ` +
      ` for scripts to work properly.\u001b[39m\n`,
    )
    process.exit(1)
  }
  */

  //  如果不允许未声明而使用变量可以使用下面
  const process = require('node:process');
  if (!/pnpm/.test(process.env.npm_execpath || '')) {
    console.warn(
      `\u001B[33mThis repository must using pnpm as the package manager `
      + ` for scripts to work properly.\u001B[39m\n`
    );
    process.exit(1);
  }

  // 2. 配置package.json
  "scripts": {
    "preinstall": "node ./scripts/preinstall.js"
  }</code></pre>
        <p>src别名的配置</p>
        <pre><code class="language-js line-numbers">  // 在开发项目的时候文件与文件关系可能很复杂，因此我们需要给src文件夹配置一个别名
  // 1.1 方式一：配置 vite.config.ts
  import path from 'path'
  export default defineConfig({
      plugins: [vue()],
      resolve: {
          alias: {
              "@": path.resolve(__dirname, "./src"), // 相对路径别名配置，使用 @ 代替 src
          }
      }
  })
  // 1.2 配置 tsconfig.json中添加，如果是最新Ts，直接写在tsconfig.app.json里
  {
    "compilerOptions": {
      "baseUrl": "./", // 解析非相对模块的基地址，默认是当前目录
      "paths": {
        // 路径映射，相对于baseUrl
        "@/*": ["src/*"]
      }
    }
  }
  // 1.3 vetur插件卸载（检测代码插件，可禁用，禁用后 '@/components/Test.vue' 不会有红色波浪线提示了）

  // 2.1 方式二： vite.config.ts
  import path from "path";
  export default defineConfig({
      plugins: [vue()],
      resolve: {
          alias: {
              "@": path.resolve(__dirname, "src"),
          },
      },
  });
  // 2.2 如果红色语法提示请安装@types/node 是Typescript 的一个声明文件包，用于描述 Node.js 核心模块和常用 。终端输入
  pnpm i @types/node --save-dev
  // 2.3 配置 tsconfig.app.json中添加
  {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/*": ["src/*"]
      }
    }
  }</code></pre>
        <p>集成element-plus</p>
        <pre><code class="language-js line-numbers">  // 1. 完整导入（不推荐） 官网地址:https://element-plus.gitee.io/zh-CN/
  // 不推荐
  pnpm i element-plus

  // 入口文件配置 `main.ts`
  import ElementPlus from 'element-plus';
  import 'element-plus/dist/index.css';
  const app = createApp(App);
  app.use(ElementPlus);

  // 配置国际化 `main.ts`
  app.use(ElementPlus, {
    // 添加一个locale
    locale: zhCn,
  });

  // 2. 可采用完整导入和按需导入（推荐）
  // 安装插件  按需插件  icon图标
  pnpm install element-plus
  pnpm install -D unplugin-vue-components unplugin-auto-import
  pnpm install @element-plus/icons-vue

  // 配置 vite.config.ts
  import AutoImport from 'unplugin-auto-import/vite';
  import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
  import Components from 'unplugin-vue-components/vite';
  export default defineConfig({
    // ...
    plugins: [
      // ...
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  });

  // icon 图标 全局注册 main.ts`
  // element plus ui icon
  import * as ElementPlusIconsVue from '@element-plus/icons-vue';
  import 'element-plus/dist/index.css'; // 样式
  const app = createApp(App);
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
  app.mount('#app');

  // 重启项目，加载组件即可

  // 按需引入如果需要用到 warning alert 提示组件时，需要在当前vue文件下按需加载
  import { ElMessage } from 'element-plus'</code></pre>
        <p>注册全局组件</p>
        <pre><code class="language-js line-numbers">  // 前提：使用自定义插件 注册成全局组件 （推荐，因为如果大量使用全局组件需要写很多次）
  // 1. main.ts 引入自定义插件对象：注册整个项目全局组件
  import globalComponent from '@/components';
  app.use(globalComponent);
  // 2. src/components/index.ts 创建
  import SvgIcon from './SvgIcon/index.vue';
  import Xxx from './Xxx/index.vue';
  import type { App, Component } from 'vue';
  const components: { [name: string]: Component } = { SvgIcon,Xxx };   // 有几个需要注册的引入几个
  export default {
    install(app: App) {
      Object.keys(components).forEach((key: string) => {
        app.component(key, components[key]);
      });
    },
  };
  // 3. 注册完，在任意组件中都可以使用全局组件
  // 4. 解决报错
  单行忽略
  // @ts-ignore

  忽略全文
  // @ts-nocheck

  取消忽略全文
  // @ts-check

  eslint+ts 忽略
  /* eslint-disable */
  // @ts-igonre
  const a = 1;
  /* eslint-enable */

  import 'virtual:svg-icons-register';
  // 提示找不到模块“virtual:svg-icons-register”或其相应的类型声明

  解决方法 eslint + ts 忽略：
  /* eslint-disable */
  // @ts-ignore
  import 'virtual:svg-icons-register';
  /* eslint-enable */</code></pre>
        <p>环境变量的配置（按需）</p>
        <pre><code class="language-js line-numbers">  /* 1. 项目开发过程中，至少会经历开发环境、测试环境和生产环境(即正式环境)三个阶段。
  不同阶段请求的状态(如接口地址等)不尽相同，若手动切换接口地址是相当繁琐且易出错的。
  于是环境变量配置的需求就应运而生，我们只需做简单的配置，把环境状态切换的工作交给代码。 */

  // 2. 根目录下新建 相对应文件
  .env.development                 // 开发环境（development）
  .env.production                  // 生产环境（production）
  .env.test                        // 测试环境（testing）
  // 3. 相对应文件的内容
  # 变量必须以 VITE_ 为前缀才能暴露给外部读取
  NODE_ENV = 'development'
  VITE_APP_TITLE = '硅谷甄选运营平台'
  VITE_APP_BASE_API = '/dev-api'
  VITE_SERVE="HTTP://XXX.com"

  NODE_ENV = 'production'
  VITE_APP_TITLE = '硅谷甄选运营平台'
  VITE_APP_BASE_API = '/prod-api'

  NODE_ENV = 'test'
  VITE_APP_TITLE = '硅谷甄选运营平台'
  VITE_APP_BASE_API = '/test-api'

  // 4. 配置package.json
  "scripts": {
      "dev": "vite --open",
      "build": "vue-tsc && vite build",
      "build:test": "vue-tsc && vite build --mode test",
      "build:pro": "vue-tsc && vite build --mode production",
    },

  // 5. 可以通过 import.meta.env 获取环境变量
  console.log(import.meta.env);
  // 会得到一个对象，对象里面有之前定义好的变量</code></pre>
        <p>SVG集成图标配置（按需）</p>
        <pre><code class="language-js line-numbers">  // 1. 安装
  pnpm install vite-plugin-svg-icons -D
  // 2. 在vite.config.ts中配置插件
  import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
  export default () => {
    return {
      plugins: [
        createSvgIconsPlugin({
          // Specify the icon folder to be cached
          iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
          // Specify symbolId format
          symbolId: 'icon-[dir]-[name]',
        }),
      ],
    }
  }
  // 3. 在入口文件导入配置项 main.ts 中配置
  import 'virtual:svg-icons-register'
  // 4. 使用
  // 先把下好的book svg图标放在指定了路径（src/assets/icons），然后在组件中使用
  &lt;svg style="width: 50px; height: 50px"&gt;
     &lt;use&gt; xlink:href="#icon-book"&gt;&lt;/use&gt;   // 路径用 #icon- svg图标文件名
  &lt;/svg&gt;

  // use 参数
     xlink:href= "#icon- "  // svg图标名
     fill="yellow"          // 填充颜色

  // 5. 将svg 封装为全局组件
  // 5.1 src/components/SvgIcon/index.vue 创建
  &lt;template&gt;
    &lt;div&gt;
      &lt;svg :style="{ width: width, height: height }"&gt;
        &lt;use :xlink:href="prefix + name" :fill="color"&gt;&lt;/use&gt;
      &lt;/svg&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;script setup lang="ts"&gt;
  defineProps({
    // xlink:href属性值的前缀
    prefix: {type: String,default: '#icon-'},
    // svg矢量图的名字
    name: String,
    //svg图标的颜色
    color: {type: String,default: ""},
    // svg宽度
    width: {type: String,default: '16px'},
    // svg高度
    height: {type: String,default: '16px'}
  })
  &lt;/script&gt;
  // 5.2 使用 src/App.vue
  &lt;template&gt;
    &lt;div&gt;
      &lt;SvgIcon name="book" color="red" width="50px" height="50px" /&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;script&gt; setup lang="ts"&gt;
  import SvgIcon from '@/components/SvgIcon/index.vue';
  &lt;/script&gt;

  &lt;style&gt; scoped&gt;&lt;/style&gt;</code></pre>
        <p>样式初始化</p>
        <pre><code class="language-js line-numbers">  // 1. 样式用normalize.css + 集成sass(源)
  // 1.1 步骤
  ## 安装normalize.css
  pnpm install normalize.css
  pnpm install sass -D

  ## scr/App.vue
  @import 'normalize.css';
  #app {
    /** 让字体可以抗锯齿，字体更清晰 */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  // 2. 样式用sanitize.css+ 集成sass（改良normalize.css）
  // 2.1 使用
  pnpm install sanitize.css

  ## 在main.js 引入、
  import 'sanitize.css';</code></pre>
        <p>mock server 模拟数据接口（推荐使用）</p>
        <pre><code class="language-js line-numbers">  // 1. 使用json-server：https://github.com/typicode/json-server
  // 2. 操作步骤
  ## 创建文件夹
  mkdir 项目名-server
  cd 项目名-server
  pnpm init

  ## 安装包
  pnpm install json-server -S
  ##报错就降级
  pnpm add json-server@0.17.4 --save

  ## 用编辑器打开 并创建目录
  # data > test.js
      module.exports = () => {
        return {name: 'test', desc: '测试数据'};
      };

  # public

  # src > controller (文件夹) > test.js
      const test = require('../../data/test');
      module.exports = (req, res, next) => {
        const testData = test();
        testData.desc = '自定义测试数据';
        res.success(testData);
      };

  # src > service (文件夹)

  # src > app.js
      const path = require('path');
      const jsonServer = require('json-server');
      const router = require('./router');
      const db= require('./db')()
      const server = jsonServer.create();
      const middlewares = jsonServer.defaults({
        static: path.join(__dirname, '../public')
      });
      server.use(middlewares);
      // req.body
      server.use(jsonServer.bodyParser);
      server.use((req, res, next) => {
        const json =res.json.bind(res);
        res.success =(data)=>{
          return json({
            code: 0,
            msg: 'success',
            data
          })
        }
        res.fail =(msg,code= -1,data) =>{
          return json({
            code,
            msg,
            data
          })
        }
        next();
      })
      router(server);
      const jsonRouter = jsonServer.router(db);
      server.use('/api',jsonRouter);
      server.listen(8000, () => {
        console.log('JSON Server is running on port 8000');
      });

  # src > db.js
      const test = require('../data/test');
      module.exports = () => {
        return {
          testJson: test()
        };
      };
  # src > router.js
      const test = require('./controller/test');
      module.exports = (app) => {
        app.use('/api/test', test);
      };

  ## 配置完后启动
  node ./src/app.js
  地址栏：http://localhost:8000/api/test

  ## 自动保存工具
  pnpm install nodemon -D -S

  ## 修改packgaes.json
    "scripts": {
      "server": "nodemon --delay 1000ms ./src/app.js"
    },

  ## 执行
  pnpm run server

  ## vite.config.ts  代理服务器，然后配置axios发送前端请求
  server: {
      open: true,
      host: '0.0.0.0',
    port: 3000, // 端口号
    proxy: {
        '/api': 'http://localhost:8000',
      '/imgs': 'http://localhost:8000'
    }
  }

  // 3. axios配置
  ## 安装
  pnpm install axios -S
  pnpm install vant --save

  ## 创建src/api/base.ts
  import axios from 'axios';
  import { Dialog } from 'vant'

  const instance = axios.create({
    baseURL: '/api'
  });

  instance.interceptors.response.use((response) => {
    const { data: _data } = response;
    const { code, data, msg } = _data;
    if (code !== 0) {
      Dialog.alert({
        message: msg
      }).then(() => {
        // 关闭弹窗的逻辑
      });
      return Promise.reject(msg);
    }
    return data;
  });
  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  export default instance;

  ## 创建src/api/test.ts
  import axios from './base';
  export function fetchTest() {
    return axios.get('test');
  }

  // 4. 后续需要接口时配置，详细看_Elm-server 项目
  // 项目-search/data/home_search.js
  module.exports = () => {
    return {
      list: [
        {/**
          type: number,             1为查询结果，2为店铺
          label: string,            关键字
          resultCount：string       为搜索出来多少个结果
        */type: 1,label: '披萨',resultCount: 453},
        {type: 2,label: '必胜客',resultCount: 2},
        {type: 2,label: '必胜客2',resultCount: 2},
        ...
      ]
    };
  };

  // 项目-search/src/controller/home_search.js
  const getHomeSearchData = require('../../data/home_search');
  module.exports = (req,res) => {
    const { _label_like } = req.query
    const allData = getHomeSearchData()
    const list = allData.list.filter((v)=>v.label.includes(_label_like))

    setTimeout(() => {
        return res.success({
            list,
        });
    }, 1000);
  };

  // 项目-search/src/router.js
  const home_search = require('./controller/home_search');
  module.exports = (app) => {
    app.use('/api/home_search',home_search)
  };</code></pre>
        <p>axios（按需）</p>
        <pre><code class="language-js line-numbers">  // 1. 安装
  pnpm i axios
  // 2. 测试mock接口，入口文件main.ts，看network 看返回的login 参数是否有显示 200
  import axios from 'axios';
  axios({
    url: '/api/user/login',
    method: 'post',
    data: {
      username: 'admin',
      password: '111211',
    },
  });
  // 3. src/utils/request.ts 创建 ，进行 axios 二次封装
  /*
  目的:
    1:使用请求拦截器，可以在请求拦截器中处理一些业务(开始进度条、请求头携带公共参数:token)
    2:使用响应拦截器，可以在响应拦截器中处理一些业务(进度条结束、简化服务器返回的数据、 处理http网络错误)

  */
  import axios from 'axios';
  import { ElMessage } from 'element-plus';
  const request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000,
  });
  // 添加请求拦截器
  request.interceptors.request.use(
    function (config) {    //config:请求拦截器回调注入的对象(配置对象)
      return config;
    },
    function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    },
  );
  // 添加响应拦截器
  request.interceptors.response.use(
    function (response) {
      // 2xx 范围内的状态码都会触发该函数。
      // 对响应数据做点什么
      return response.data;
    },
    function (error) {
      // 超出 2xx 范围的状态码都会触发该函数。
      // 对响应错误做点什么
      let msg = '';
      const status = error.response.status;
      switch (status) {
        case 401:
          msg = 'token过期';
          break;
        case 403:
          msg = '无权访问';
          break;
        case 404:
          msg = '请求地址错误';
          break;
        case 500:
          msg = '服务器异常';
          break;
        default:
          msg = '网络异常';
          break;
      }
      ElMessage.error(msg);
      return Promise.reject(error);
    },
  );
  export default request;

  // 箭头函数写法
      // 添加请求拦截器
      request.interceptors.request.use((config)=>{
          return config
      })

      // 响应拦截器
      request.interceptors.response.use((response) => {
          return response.data;      // 成功回调
      }, (error) => {
          // 处理网络错误
          return Promise.reject(error);
      });
      export default request;

  // 其他写法
      import axios from "axios";
      let baseURL = "/api";
      const service = axios.create({baseURL,timeout: 10000,});

      // 请求拦截器
      service.interceptors.request.use(
          config => {
              const token = localStorage.getItem("token");
              if (token) {config.headers["x-acess-token"] = token;}
              return config;
          },
          error => {return Promise.reject(error);}
      );

      // 响应拦截器
      service.interceptors.response.use(
          response => {
              const res = response.data;
              if (response.status !== 200) {
                  return Promise.reject(new Error(res.success || "error"));
              } else {
                  if (res.code == 200) { return res.result;} else { alert(res.success);}
              }
          },
          error => {return Promise.reject(error);}
      );
      export default service;
      // 创建src/api文件夹
      user.ts                     // 用户接口</code></pre>
        <p>跨域代理 （按需）</p>
        <pre><code class="language-js line-numbers">  // vite.config.js
  export default defineConfig({
      plugins: [vue()],
      // 线上接口，跨域代理
      server: {
          port: 8002,
          open: true,
          proxy: {
              "/api": "http://xx.com",
          },
          cors: true,
      },
      // 本地接口  或者使用线上接口，二选一
      // server: {
      //     proxy: {
      //         "/api": "http://localhost:5080/",
      //     },
      // },
  });</code></pre>
        <p>安装api 插件</p>
        <pre><code class="language-js line-numbers">  // 安装
  pnpm i @vueuse/core -S   // -S生产环境下会使用，-D只在开发过程中是必需的
  pnpm i axios -s
    &gt; src/utils/require.ts
          </code></pre>
        <p>API接口统一管理</p>
        <pre><code class="language-js line-numbers">  // 1. 在开发项目的时候,接口可能很多需要统一管理。在src目录下去创建api文件夹去统一管理项目的接口；
  // 2. 在src 目录下，创建 api文件夹
  api/alc
  api/product
  api/user
      &gt; type.ts
      &gt; index.ts
  // 2.1 api/user/index.ts 创建
  import request from '@/utils/request'
  import type { loginFormData, loginResponseData, userInfoResponseData } from './type'

  // 定义枚举类统一管理接口
  enum API {
    LOGIN_URL = '/admin/acl/index/login',
    USERINFO_URL = '/admin/acl/index/info',
    LOGOUT_URL = '/admin/acl/index/logout'
  }
  // 暴露请求函数
  // 登录接口方法
  export const reqLogin = (data: loginFormData) =&gt; request.post&lt;any, loginResponseData&gt;(API.LOGIN_URL, data)
  // 获取用户信息接口方法
  export const reqUserInfo = () =&gt; request.get&lt;any, userInfoResponseData&gt;(API.USERINFO_URL)
  // 退出登录
  export const reqLogout = () =&gt; request.post&lt;any, any&gt;(API.LOGOUT_URL)

  // 2.2 api/user/type.ts 创建
  //登录携带参数类型
  export interface loginFormData {
    username: string,
    password: string
  }
  //全部接口返回数据都拥有的ts类型
  export interface responseData {
    code: number,
    message: string,
    ok: string
  }
  //登录接口返回数据类型
  export interface loginResponseData extends responseData {
    data: string
  }
  //获取用户信息返回数据类型
  export interface userInfoResponseData extends responseData {
    data: {
      routes: string[],
      buttons: string[],
      roles: string[],
      name: string,
      avatar: string
    }
  } </code></pre>
        <p>路由</p>
        <pre><code class="language-js line-numbers">  // 1. 安装
  pnpm install vue-router

  // 2. 引用
  // 2.1 src/router/index.ts 创建
  import { createRouter, createWebHashHistory } from 'vue-router';
  import { constantRoute } from './router';
  const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoute, // 创建router.ts 统一管理
    scrollBehavior() {
      // 滚动行为
      return {
        left: 0,
        top: 0,
      };
    },
  });
  export default router;

  // 2.2 src/router/router.ts 创建。箭头函数为懒加载模式
  import { RouteRecordRaw } from 'vue-router';
  export const constantRoute: Array&lt;RouteRecordRaw&gt;  = [
    {
      path: '/login',
      component: () => import('@/views/login/index.vue'),
      name: 'login',
    },
    {
      path: '/',
      component: () => import('@/views/home/index.vue'),
      name: 'layout',
    },
    {
      path: '/404',
      component: () => import('@/views/404/index.vue'),
      name: '404',
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
      name: 'Any',
    },
  ];
  /* 或者 修改router.ts
     createRouter 是创建vue-router实例对象
     RouteRecordRaw  用于规范，路由规则，增加路由对象类型限制
     createWebHashHistory 路由工作模式，路由规则 Hash  */
  import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
  // 引入store的user仓库
  import { useUserStore } from "../store/modules/user.ts";
  // 创建路由规则
  const routes: Array&lt;RouteRecordRaw&gt; = [
      {
          path: "/",
          component: () => import("../components/HelloWorld.vue"),
      },
  ];
  // 创建 路由的示例对象
  const router = createRouter({
      history: createWebHashHistory(),
      routes: routes,
  });
  // 路由导航守卫
  router.beforeEach((to, from, next) => {
      const store = useUserStore();
      if (store.token) {
          next();
      } else {
          if (to.path) {
              console.log(to.path);
          }
      }
  });
  export default router;

  // 3. 入口文件注册 main.ts
  import router from './router';
  app.use(router);

  // 4. 使用路由
  &lt;template&gt;
    &lt;div class="app"&gt;
      &lt;h1&gt;标题&lt;/h1&gt;
      &lt;div class="nav"&gt;
        &lt;h2&gt;导航区&lt;/h2&gt;
        &lt;RouterLink to="/login" active-class="此处是被激活时的类名"&gt;去登录页面&lt;/RouterLink&gt;
        &lt;RouterLink to="/404" active-class="此处是被激活时的类名"&gt;去404页面&lt;/RouterLink&gt;
      &lt;/div&gt;
      &lt;div class="show"&gt;
        &lt;h2&gt;展示区&lt;/h2&gt;
        &lt;RouterView /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;script setup lang="ts"&gt;
  import { RouterView, RouterLink } from 'vue-router';
  &lt;/script&gt;</code></pre>
        <p>pinia 仓库</p>
        <pre><code class="language-js line-numbers">  // 1. 安装
  pnpm i pinia

  // 2. src/store/index.ts 创建
  // 引入仓库
  import { createPinia } from 'pinia';
  // 创建仓库
  const pinia = createPinia();
  // 对外暴露
  export default pinia;

  // 3. 引入 main.ts
  import pinia from './store';
  app.use(pinia);

  // 4. 创建小仓库 src/store/modules/user.ts
  import { defineStore } from 'pinia';
  let useUserStore = defineStore('User', {
    state: () => {
      return {};
    },
    actions: {},
    getters: {},
  });
  export default useUserStore;

  // 或者定义好用户仓库
  import { defineStore } from 'pinia';
  interface UserInfo {
    token: string;
    user_info: string;
  }
  export const useUserStore = defineStore('user', {
    state: () => {
      // 数据
      return {
        token: localStorage.getItem('token') || '',
        userInfo: localStorage.getItem('userInfo') || ''
      };
    },
    actions: {
      // 方法
      setUserInfo(data: UserInfo) {
        this.token = data.token;
        this.userInfo = data.user_info;
        localStorage.setItem('token', this.token);
        localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
      }
    }
  });
  export default useUserStore;</code></pre>
        <p>进度条插件</p>
        <pre><code class="language-js line-numbers">  // 1. 安装
pnpm i nprogress -s

// 2. 使用，可以npm上查询方法 src/utils/permission.ts
// 在鉴权文件里处理
import router from  '@/router'
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
router.beforeEach((to: any, from: any, next: any) => {
  nprogress.start();
  next();
});
//全局后置守卫
router.afterEach((to: any, from: any, next: any) => {
  nprogress.done();
});

// 3. 调样式可以到源码里面修改
// 4. 'nprogress' 会飘红 报错
pnpm i --save-dev @types/nprogress
// 5. 在main.ts 中引入
import ‘@/utils/permission.ts’</code></pre>
        <p>接口文档</p>
        <pre><code class="language-js line-numbers">  // 1. 服务器域名： http://sph-api.atguigu.cn

  // 2. swgger文档
      2.1 http://39.98.123.211:8510/swagger-ui.html
      2.2 http://139.198.104.58:8212/swagger-ui.html
      2.3 新http://139.198.104.58:8209/swagger-ui.html

  // 3. 使用服务器要解决代理跨域问题
  // 3.1 引入loadEnv方法
  import { loadEnv } from 'vite';

  // 3.2 配置 vite.config.ts
  export default defineConfig(({ command, mode }) => {
    // 1. 获取各种环境下的对应变量， .env.development .env.production .env.text 下的变量
    // 2. vite提供的loadEnv方法
    let env = loadEnv(mode, process.cwd());
    return {
      ...
      // 代理跨域 可查询vite官网服务器文档
      server: {
        proxy: {
          [env.VITE_APP_BASE_API]: {
            // 服务器地址
            target: env.VITE_SERVE,
            // 是否代理跨域
            changeOrigin: true,
            // 路径重写
            rewrite: (path) => path.replace(/^\/api/, ''),
          },
        },
      },
    }
  });

  // 3.3 注意；如果路径上需要带api就不要写路径重写
  server: {
      proxy: {
          "/api": {
              // 服务器地址
              target: "http://jsonplaceholder.typicode.com",
              // 是否代理跨域
              changeOrigin: true,
          },
      },
  },</code></pre>
        <p>时间插件</p>
        <pre><code class="language-js line-numbers">  // 1. 安装
  pnpm i  moment

  // 2. 使用
  &lt;span&gt; class="time"&gt;当前时间:｛｛ time ｝｝&lt;/span&gt;

  &lt;script&gt; setup lang="ts"&gt;
  import moment from 'moment'
  let time = ref(moment().format('YYYY年MM月DD日 hh:mm:ss'))
  let timer = ref(0)
  timer.value = setInterval(() =&gt; {
      time.value = moment().format('YYYY年MM月DD日 hh:mm:ss')
  }, 1000)

  onBeforeUnmount(() =&gt; {
    clearInterval(timer.value)
  })
  &lt;/script&gt;</code></pre>
        <p>echarts 图形</p>
        <pre><code class="language-js line-numbers">  // 1. 国内镜像地址：isqqw.com/echarts-doc

  // 2. 安装
  pnpm i echarts
  pnpm i echarts-liquidfill

  // 3. npmjs 搜索可以使用扩展水球图和地图 组件

  // 4. 使用
  &lt;!-- 盒子将来echarts展示图形图标的节点 --&gt;
  &lt;div class="charts" ref="charts"&gt;123&lt;/div&gt;

  &lt;script setup lang="ts"&gt;
  import { ref, onMounted } from 'vue'
  import * as echarts from 'echarts'
  import 'echarts-liquidfill'

  //获取节点
  let charts = ref()
  onMounted(() =&gt; {
    //获取echarts类的实例
    let mycharts = echarts.init(charts.value)
    //设置实例的配置项
    mycharts.setOption({
      //标题组件
      title: {
        text: '水球图',
      },
      //x|y轴组件
      xAxis: {},
      yAxis: {},
      //系列:决定你展示什么样的图形图标
      series: {
        type: 'liquidFill', //系列
        data: [0.6, 0.4, 0.2], //展示的数据
        waveAnimation: true, //动画
        animationDuration: 3,
        animationDurationUpdate: 0,
        radius: '100%', //半径
        outline: {
          //外层边框颜色设置
          show: true,
          borderDistance: 8,
          itemStyle: {
            color: 'skyblue',
            borderColor: '#294D99',
            borderWidth: 8,
            shadowBlur: 20,
            shadowColor: 'rgba(0, 0, 0, 0.25)',
          },
        },
      },
      //布局组件
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    })
  })
  &lt;/script&gt;

  // 中国地图json
  http://datav.aliyun.com/portal/school/atlas/area_selector </code></pre>
        <p>菜单权限</p>
        <pre><code class="language-js line-numbers">  // 1. 拆分路由
      /* 1. 1. 静态(常量)路由： 大家都可以拥有的路由
            1. 如：login 、 首页、数据大屏、404
         2. 异步路由：不同身份拥有不同的路由
            1. 如：权限管理 、 商品管理
         3. 任意路由： 任意路由
            1. 如：404  */
  // 2. 代码
      // 静态路由
      export const constantRoute = []
      // 异步路由
      export const asyncRoute = []
      // 任意路由
      // export const anyRoute = []</code></pre>
        <p>lodash</p>
        <pre><code class="language-js line-numbers">  // 1. js库，有很多方法，包括深拷贝
  // 2. 安装
  pnpm i lodash
  // 3. 使用
  //@ts-ignore
  import cloneDeep from 'lodash/cloneDeep';   // 需要忽略ts校验
  // 调用
  cloneDeep(xxx)</code></pre>
        <p>发布前校验</p>
        <pre><code class="language-js line-numbers">  // 执行命令行
  pnpm run lint
  pnpm run format
  pnpm run fix</code></pre>
        <p>打包流程 并优化</p>
        <pre><code class="language-js line-numbers">  // 1. 执行
  npm run build

  // 2. vite.config.js 配置路径
  export default defineConfig((command) => {
    return {
      base: './',
      ...
    }
  })

  // 3. 到2就配置完成了，发给后端就可以了，如果本地运行，需要配置本地服务器
  报错请先执行这段 pnpm setup ，执行完后关闭终端重新打开终端

  pnpm install -g live-server
  # 或者
  pnpm install -g http-server

  // 启动服务器.在 dist 文件夹中打开终端，并运行以下命令之一来启动服务器：
  live-server
  # 或者
  http-server

  // 方法2 使用node.js创建简单的服务器
  // 在 dist 文件夹中运行以下命令来安装 Express：
  pnpm install express

  // 创建服务器脚本  server.js
  const express = require('express');
  const { exec } = require('child_process');  // 新增
  const app = express();
  const port = 3000;

  app.use(express.static('./'));

  app.listen(port, () => {
    const url = `http://localhost:${port}`;
    console.log(`Server is running at ${url}`);
    const cmd = process.platform === 'win32' ? 'start' : process.platform === 'darwin' ? 'open' : 'xdg-open';
    exec(`${cmd} ${url}`);
  });

  // 在 dist 文件夹中运行以下命令来启动服务器：node server.js
  // 在浏览器中打开 http://localhost:3000。
  node server.js

  // 4. 打包优化
  // 可视化模块加载
  pnpm install rollup-plugin-visualizer -D

  // 配置：vite.config.js 打包后，会在根目录下生成一个 stats.html文件，用浏览器打开

  import { defineConfig } from 'vite'
  import {visualizer} from 'rollip-plugin-visualizer';

  export default defineConfig({
    plugins: [
      visualizer({   // 配置项
        open: true, // 是否在分析完成后自动打开报告
        gzipSize: true, // 是否显示gzip大小
        brotliSize: true, // 是否显示brotli大小

        // 其他参数
        emitFile: false,
        file:"stats.html",
        open:true
      }),
    ],
  });
  // 配置文件中引入插件并配置后，运行Vite构建命令（例如npm run build），构建完成后，插件会生成一个包含打包大小可视化报告的HTML文件。你可以根据这个报告来优化你的项目，减少包的大小。
  // 蓝色代表资金写下的js文件项
  // 绿色表示依赖的文件项
  // 其他颜色可以根据文件名进行判断</code></pre>
        <p>发布</p>
        <ul>
          <li>
            发布到github上的参考说明地址：https://blog.csdn.net/Lil_y1/article/details/140348430
          </li>
          <li>
            本项目视频教程：
            <ul>
              <li>
                https://www.bilibili.com/video/BV1Xh411V7b5/?p=144&spm_id_from=pageDriver&vd_source=6561c812c04b13e391c4f22fc92fc077
              </li>
            </ul>
          </li>
          <li>
            运行dist文件，会发现一片空白，什么也显示不出来。打开文件发现引入地址是错的。应该用"."开头而不是/
            开头。
          </li>
          <li>
            此时我们只需要在和package.json同级的地方新增一个vue.config.ts文件，将路径修改为相对路径’./’。
            <pre><code class="language-js line-numbers">  // vue.config.ts
  module.exports ={
      publicPath:'./,
  }</code></pre>
          </li>
          <li>
            然后此时打包会发现文件的路由还是出问题，现在我们只需要改一下路由模式，找到router/index.js文件,将history修改hash,再进行打包!
          </li>
          <li>
            如果你想将该项目发布到aithub的page服务上，此时的dist文件看似没问题，当你创建paae并进入github给你page地址时，会发现axios发送的api接口全都没用了。控制台弹出一些htp
            ur之类的错误，具体原因自行搜索。所以在推送之前要在dist文件的lIndex.html上添加如下代码
            <pre><code class="language-js line-numbers">  &lt;meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"&gt;&lt;/meta&gt;</code></pre>
          </li>
          <li>
            现在项目已经推送完毕，要使用page服务的话。还需建立一条hb-page分支
            <pre><code class="language-js line-numbers">  git subtree push --prefix dist origin gh-pages</code></pre>
          </li>
        </ul>
      </el-card>
      <el-card id="part12" shadow="hover">
        <h2>其他配置</h2>
        <p>超大屏适配方案</p>
        <pre><code class="language-js line-numbers">  // 使用了scale方案
  // 1. 是利用transform 的 scale 属性
  // 2. 问题1：因为是根据 ui 稿等比缩放，当大屏跟 ui 稿的比例不一样时会出现周边留白情况
  // 3. 问题2：当缩放比例过大时候，字体会有一点点模糊，就一点点
  // 4. 问题3：当缩放比例过大时候，事件热区会偏移
  &lt;!doctype html&gt;
  &lt;html lang="en"&gt;
    &lt;head&gt;
      &lt;meta charset="UTF-8" /&gt;
      &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
      &lt;title&gt;Document&lt;/title&gt;
      &lt;style&gt;&gt;
        * {margin: 0;padding: 0;}
        .container {width: 100vw;height: 100vh;background: url(./src/assets/images/bg.png) no-repeat;background-size: cover;}
        .box {position: fixed;left: 50%;top: 50%;width: 1920px;height: 1080px;background-color: #eec6c6;transform-origin: left top;}
        .top {width: 100px;height: 100px;background-color: #b14646;margin-left: 50px;}
        .bottom {width: 100px;height: 100px;background-color: #256aeb;margin-left: 50px;margin-top: 100px;}
      &lt;/style&gt;
    &lt;/head&gt;
    &lt;body&gt;
      &lt;div class="container"&gt;
        &lt;div class="box"&gt;
          &lt;div&gt; class="top"&gt;&lt;/div&gt;
          &lt;div&gt; class="bottom"&gt;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;script&gt;&gt;
        let box = document.querySelector('.box');
        box.style.transform = `scale(${getScale()}) translate(-50%,-50%)`;
        function getScale(w = 1920, h = 1080) {
          const ww = window.innerWidth / w;
          const wh = window.innerHeight / h;
          return ww &lt; wh ? ww : wh;
        }
        window.onresize = () =&gt; {
          box.style.transform = `scale(${getScale()}) translate(-50%,-50%)`;
        };
      &lt;/script&gt;
    &lt;/body&gt;
  &lt;/html&gt;

  // vw 和 vh 适配
  // 1. 按照设计稿的尺寸，将px按比例计算转为vw和vh
  // 2. 转换公式如下
  /*
      1. 假设设计稿尺寸为1920*1080(做之前一定问清楚UI设计稿的尺寸)即:
          网页宽度 = 1920px
          网页高度 = 1080pX
          网页宽度 = 100vw
          网页高度 = 100vh

      2. 所以，在1920x * 1080px 的屏幕分辨率下
          1920pX = 100vw
          1080px = 100vh

      2. 这样一来，以一个宽300px和200px的div来说，其作所占的宽高以vw和vh为单位，计算方式为：
          vw = (300px / 1920px) * 100VW
          vh = (200px / 1080px) * 100vh

      4. 所以，就在1920*1080的屏幕分辨率下，计算出了单个div的宽高
      5.当屏幕放大或者缩小时，div还是以vw和vh作为宽高的，就会自动适应不同分辨率的屏幕

      6. 定义函数来计算
        Sass的math模块提供了一系列的数学函数，比如加法（add）、减法（subtract）、乘法（multiply）、除法（divide）、取模（mod）、取幂（pow）、取平方根（sqrt）、最大值（max）、最小值（min）等
  */

  // 1、 styles/computed.scss
  @use 'sass:math'
  // 屏幕宽高 分辨率  4k: 5200*1976    8k: 7680*4320
  $designWidth: 5200;
  $designHeight: 1976;

  @function vw($px) { @return math.div($px, $designWidth) * 100vw; }       // 宽度
  @function vh($px) { @return math.div($px, $designHeight) * 100vh; }      // 高度
  @function px2font($px) { @return math.div($px, $designWidth) * 100vw; }  // 字体

  // 2、 styles/index.scss   中使用
  .element {width: vw(100);height: vh(100);font-size: px2font(16);}

  // 3、 在配置文件需要引入全局css   vite.config.js
  export default defineConfig(({ command, mode }) => {
      return {
        css: {loaderOptions: {sass: {prependData: `@import "@/assets/styles/computed.scss"`,},},},
      }
  })

  // 4、 还需要注意一点是，css是动态生成的dom上，需要定义js方法  src/utils/styleUtil.js
  const designWidth = 5200;      // 定义设计稿尺寸
  const designHeight = 1976;     // 定义设计稿尺寸
  let styleUtil = {              // px 转vw vh 换算
    px2vw:function(_px){return (_px * 100.0) / designWidth + 'vw'},
    px2vh:function(_px){return (_px * 100.0) / designHeight + 'vh'},
    px2font:function(_px){return (_px * 100.0) / designWidth + 'vw'}
  }
  export default styleUtil;      // 默认导出

  // 5、 如果是动态创建使用时，需要单独设置宽高等属性
  import styleUtil from "@/src/utils/styleUtil.js"
  let element = document.createElement("div")
  element.style.width = styleUtil.px2vw(300)
  element.style.height = styleUtil.px2vh(100)
  element.style.fontSize = styleUtil.px2font(16)

  // 5.1、 当屏幕发生变化后，需要手动刷新下才能自适应调整

  // 6、 关于EChart  图标，也需要自定义函数处理
  // src/utils/dataUtil.js
  export const fitChartSizeVh = (size, defaultHeight = 1920) =>{
    let clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    if(!clientHeight) return size / 2
    let scale = clientHeight / defaultHeight;
    return Number(((size / 2 ) * scale ).toFixed(3));
  }

  // 6.1、 使用
  import {fitChartSizeVh} from "@/utils/dataUtil"
  const legend ={
      orient: "vertical",
      textStyle:{fontSize: fitChartSizeVh(28)}
  }

  // 7、 第二种方案也可以使用插件  转成vm rem
  // 8、 使用第三方库npmjs比如 postcss-plugin-px2rem</code></pre>
        <p>使用 vant UI 库 (移动端的)</p>
        <ul>
          <li>
            1. Vant是一个轻量、可靠的移动端Vue组件库，适用于开发移动端应用
          </li>
          <li>2. 官网http://mui.ucmed.cn/#/zh-CN/intro</li>
          <li>
            3. Element UI是一个为开发电脑浏览器页面的组件库，适用于桌面应用开发
          </li>
          <li>4. 安装: pnpm add vant</li>
        </ul>
        <p>使用vite 按需加载vant组件</p>
        <pre><code class="language-js line-numbers">  // 1. 操作（演示）
  // src/main.ts  注册全局组件
  import { Tabbar, TabbarItem } from 'vant';
  import 'vant/lib/index.css';
  const app = createApp(App);

  // 使用的话 组件前缀需要加Van  例如
  // 原先：
    &lt;Tabbar v-model="active"&gt;&lt;/Tabbar&gt;

  // 现在：
    &lt;VanTabbar v-model="active"&gt;
      &lt;VanTabbarItem name="home" icon="home-o"&gt;
        首页
      &lt;/VanTabbarItem&gt;
    &lt;/VanTabbar&gt;

  // 2. 使用插件，注册全局组件
  // 安装插件
  pnpm i unplugin-vue-components -D

  // vite.config.ts 配置插件
  import { VantResolver } from 'unplugin-vue-components/resolvers';
  import Components from 'unplugin-vue-components/vite';
  export default defineConfig({
    plugins: [vue(), Components({
      resolvers: [VantResolver()]
    })],
  });

  // 运行dev 后项目下会出现一个components.d.ts文件</code></pre>
        <p>post-css 移动端适配，这个方法只适用于移动端（推荐使用）</p>
        <ul>
          <li>
            常用适配方案
            <ul>
              <li>不同端使用不同代码，比如 PC端一套代码，移动端一套代码</li>
              <li>不同端使用同一套代码，一般使用 CSS 样式来控制。@media</li>
              <li>
                移动端屏幕适配
                <ul>
                  <li>利用 rem 根节点 的字体大小来缩放</li>
                  <li>利用vh/vw按屏幕高度和宽度来缩放</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            post-css 是一个css转换工具
            <ul>
              <li>原理： css => AST => 插件 => css</li>
              <li>autoprefixer:自动管理 CSS 属性的浏览器前缀</li>
              <li>postcss-pxtotem : px 转换为rem</li>
            </ul>
          </li>
          <li>
            配置 https://postcss.org/
            <pre><code class="language-js line-numbers">  ## 安装
  pnpm i postcss autoprefixer postcss-pxtorem -D

  ## 项目根目录创建 postcss.config.cjs
  module.exports = {
    plugins: {
      'autoprefixer': {
        overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
      },
      'postcss-pxtorem': {
        rootValue: 16, // 根节点的fontSize值
        propList: ['*'], // 需要转换的属性
        selectorBlackList: [':root'] // 不需要转换的类名
      }
    }
  };

  ## src/main.ts
  const rootValue = 16;
  const rootWidth = 390;
  const deviceWidth = document.documentElement.clientWidth;
  document.documentElement.style.fontSize = `${(rootValue * deviceWidth) / rootWidth}px`;</code></pre>
          </li>
        </ul>
        <p>rem适配方案（推荐组合 amfe-flexible + postcss-pxtorem）</p>
        <pre><code class="language-js line-numbers">  // amfe-flexible：动态计算根元素font-size
  // amfe-flexiable.js的源码 以2.2.1版本为例
  (function flexible (window, document) {
    var docEl = document.documentElement
    var dpr = window.devicePixelRatio || 1
    // adjust body font size
    function setBodyFontSize () {
      if (document.body) {
        document.body.style.fontSize = (12 * dpr) + 'px'
      }
      else {
        document.addEventListener('DOMContentLoaded', setBodyFontSize)
      }
    }
    setBodyFontSize();
    // set 1rem = viewWidth / 10
    function setRemUnit () {
      var rem = docEl.clientWidth / 10
      docEl.style.fontSize = rem + 'px'
    }
    setRemUnit()
    // reset rem unit on page resize
    window.addEventListener('resize', setRemUnit)
    window.addEventListener('pageshow', function (e) {
      if (e.persisted) {
        setRemUnit()
      }
    })
    // detect 0.5px supports
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
  }(window, document))

  // postcss-pxtorem：将px转换为rem 注意事项：
  /* 1. 不能使用行内样式：对于行内样式，阿里手淘并不能将px转rem，所以对于需要自适应的样式，如font-size、width、
  height等请不要写在行内。同理，对于不需要转化的样式可以写在行内，或者使用PX（大写）作为单位。
     2. 字号不使用rem： 我们都知道chrome的最小显示的字体是12px，如果字体用rem，计算出来小于12px，那么就也会以12px显示，
     而且我们不希望出现13px或者15px这样的奇葩尺寸，所以字体最好是用PX（大写）来表示，至于适应，我们可以写媒体查询。 */

  // 移动端
  .item {
      border-bottom: 1PX #8d8d8d dashed;
      font-size: 12PX;
      line-height: 16PX;
      @media screen and (min-width: 576PX) {
          font-size: 14PX;
          line-height: 18PX;
      }
      @media screen and (min-width: 768PX) {
          font-size: 16PX;
          line-height: 28PX;
      }
      @media screen and (min-width: 992PX) {
          font-size: 16PX;
          line-height: 32PX;
      }
      @media screen and (min-width: 1200PX) {
          font-size: 18PX;
          line-height: 64PX;
      }
  }
  // PC端响应式媒体断点： 记得用大写的PX common.scss
      @media (min-width: 1024px){ body{ font-size: 18px} }
      @media (min-width: 1100px) { body{font-size: 20px} }
      @media (min-width: 1280px) { body{font-size: 22px;} }
      @media (min-width: 1366px) { body{font-size: 24px;} }
      @media (min-width: 1440px) { body{font-size: 25px !important;} }
      @media (min-width: 1680px) { body{font-size: 28px;} }
      @media (min-width: 1920px) { body{font-size: 33px;} }

  /* amfe-flexible不是已经给html自动设置了font-size，为什么还需要它通过pxtorem设置rootValue?
  pxtorem是将代码中的px转为rem，转换比例就是根据rootValue来计算的（1rem = rootValue的值+‘px’）
  这样可以根据设计图量的的尺寸px，直接写到代码中，而不需要计算并手动折算成rem。

  比如设计图宽度是750px，那么rootValue=75，即按照75px=1rem，在编译的时候，将px转为rem单位，保证尺寸大小
  是个相对值渲染到页面上时，需要再将编译后的rem值转为px，这时候的转换比例就是1rem = 实际展示容器html的font-size值。

  简言之：pxtorem是方便我们"按照相对值复刻"设计图上的尺寸，即把px绝对值转为相对值rem（转换比例就是rootValue），
  保证比例不失真，渲染时需要再将相对值rem转为绝对值px（转换比例就是amfe-flexible自动设置的html的font-size） */

  // 插件使用
      // 安装和使用
      pnpm install amfe-flexible postcss-pxtorem -D

      // main.ts 中引入amfe-flexible
      import 'amfe-flexible'

      // vite.config.ts
      import postCssPxToRem from 'postcss-pxtorem'
      export default defineConfig(() => {
          return {
            ...,
            css: {
              preprocessorOptions: {
                scss: {
                  additionalData: `@use "@/assets/styles/variable.scss" as *;`
                }
              },
              postcss: {
                plugins: [
                  postCssPxToRem({
                    // 配置在将px转化为rem时 1rem等于多少px(因为我们搭配使用了amfe-flexible插件 此处我们需要设置的值应是UI设计稿全屏基准宽度的十分之一)
                    // 当UI设计稿的全屏基准宽度是1920px时 此处设置的值为192
                    rootValue: 75,  // 设计稿宽度 / 10  例如1920设计稿设为192
                    // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
                    // vant默认是37.5，如果是使用了vant的话可以像下面这样写
                    // rootValue(res) {
                    //   return res.file.indexOf("vant") !== -1 ? 37.5 : 75;
                    // },
                    // 除 border和font-size外 所有px均转化为rem
                    // propList: ["*", "!border","!font*"], 排除字体 边框相关属性
                    propList: ['*', '!font-size'],
                    // selectorBlackList: ['.norem','van-'],  忽略.norem开头的类名
                    // 过滤掉-nopx结尾的class 不进行转换
                    selectorBlackList: ['-nopx'],
                    mediaQuery: false, // 是否在媒体查询中转换 px
                    minPixelValue: 2,  // 最小的转换数值
                    // 忽略node_modules
                    exclude: /node_modules/i
                    // replace: true, 强制覆盖原单位
                  })
                ]
              }
            },
          }
      })

      /* 官方说明文档
          rootValue（数字 |函数）表示根元素字体大小或根据输入参数返回根元素字体大小
          unitPrecision（数字）允许 REM 单位增长到的十进制数。
          propList（数组）可以从 px 更改为 rem 的属性。
          值需要完全匹配。
          使用通配符启用所有属性。例：*['*']
          在单词的开头或结尾使用。( 将匹配*['*position*']background-position-y)
          用于不匹配属性。例：!['*', '!letter-spacing']
          将 “not” 前缀与其他前缀组合。例：['*', '!font*']
          selectorBlackList（数组）要忽略并保留为 px 的选择器。
          如果 value 是 string，它会检查 selector 是否包含字符串。
          ['body']将匹配.body-class
          如果 value 是 regexp，它会检查 selector 是否与 regexp 匹配。
          [/^body$/]将匹配，但不匹配body.body
          replace（布尔值）替换包含 rems 的规则，而不是添加回退。
          mediaQuery（布尔值）允许在媒体查询中转换 px。
          minPixelValue（数字）设置要替换的最小像素值。
          exclude（字符串、正则表达式、函数）要忽略并保留为 px 的文件路径。
          如果 value 是 string，它会检查文件路径是否包含字符串。
          'exclude'将匹配\project\postcss-pxtorem\exclude\path
          如果 value 为 regexp，则检查文件路径是否与 regexp 匹配。
          unit（字符串）设置要转换的默认单位，默认为 。px
          /exclude/i将匹配\project\postcss-pxtorem\exclude\path
          如果 value 是 function，则可以使用 exclude 函数返回 true，并且该文件将被忽略。
          回调会将文件路径作为参数传递，它应该返回一个布尔值结果。
          function (file) { return file.indexOf('exclude') !== -1; }
          忽略单个文件例如：
              exclude: 'src/assets/styles/common.scss'
              exclude: /^src\/styles\/common\.scss$/
              exclude: function (file) {
                return file === 'src/styles/common.scss';
              }

          忽略目录例如：
              exclude: /^src\/styles\/.*/
              exclude: /^(src\/styles\/common\.scss|src\/styles\/reset\.scss)$/
              exclude: function (file) {
                return file.startsWith('src/styles/');
              }
          忽略多个文件：
              exclude: /(node_modules|src\/assets)/i

          */

          // index.html
          &lt;meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"&gt;

          // 目前在用，pc端大于750px 固定root字体大小 因为是换分了10份
          @media screen and (min-width:750px) {
              html {font-size: 75px!important;}
          }

          // 使用方式
          .box {width: 375px; /* 转换为10rem（rootValue=37.5时） */}

          // 忽略转换的样式 添加.norem前缀或注释：
          .norem-box {width: 100px; /* 不转换 */}
          /* postcss-pxtorem-disable-next-line */
          .fixed-box {width: 100px; /* 不转换 */}
          // TypeScript类型支持 若出现amfe-flexible类型报错，在src/env.d.ts中添加：
          declare module 'amfe-flexible'
          // vite提示 import postCssPxToRem from 'postcss-pxtorem'; 无法找到模块
          pnpm install @types/postcss-pxtorem -D
          // 当项目内引入了vantUI组件库，vant的UI设计稿基准宽度是375px，如果与我们开发时UI给出的设计稿基准宽度不同，使用下述配置方法（移动端有时会引入vant组件库）
          // 当UI设计稿的全屏基准宽度是750px时 此处设置的值为75 但项目中使用了vant组件库 vant的设计稿总宽度是375px 其十分之一应是37.5(需要区分设置)
          rootValue ({ file }) {
              return file.indexOf('vant') !== -1 ? 37.5 : 75
          },
          // 设计稿适配
          移动：设计稿375px → rootValue: 37.536
          PC：设计稿1920px → rootValue: 19
          // rem单位的特点，是1rem对应的px值等于html的font-size值。也就是说，当html的font-size值变化时，1rem的值会跟随着动态变化。比如：有一个div，他的高度设置为1rem，当页面内html的font-size为16px时，这个div的高度就是16px；当页面内html的font-size为32px时，这个div的高度就是32px。html自由飞，rem永相随！
          // postcss-pxtorem插件会将我们写在样式中的px根据我们在vite.config.ts中设置的rootValue值，按比例转化为rem。（要注意哦，行内样式中的px不会被转化为rem）
          // amfe-flexible插件会根据当前可展示区域的实际宽度，动态设置的font-size为可展示区域宽度的十分之一。（这也就是为什么我们在vite.config.ts中设置rootValue值时需要设置为UI设计稿的十分之一，是为了与此插件对font-size的设置相对应）</code></pre>
        <p>vw适配方案(适合移动端)</p>
        <ul>
          <li>
            postcss-px-to-viewport
            <ul>
              <li>直接转换px为vw单位112</li>
              <li>可配置viewportWidth等参数12</li>
              <li>支持排除特定文件</li>
            </ul>
          </li>
        </ul>
        <p>自适应 flexible.js (用以上插件适配)</p>
        <pre><code class="language-js line-numbers">  // 1. 全局引入  main.ts

// 2. 项目地址：https://github.com/amfe/lib-flexible

// 3. 代码
  // 1. 设计稿750px
  &lt;meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"&gt;
  &lt;script&gt; src="./node_modules/amfe-flexible/index.js"&gt;&lt;/script&gt;
  &lt;style&gt;&gt;
      body{
        min-width: 320px;
        max-width: 750px;
        width: 10rem;
        margin: 0 auto;
        line-height: 1.5;
        font-family: Arial, Helvetica, sans-serif;
        background: #f2f2f2;
      }
  &lt;/style&gt;

  // 2. 使用插件转换rem : px to rem& rpx vw   默认插件会将html定义为16px
  1rem 应该是75px  所以要设置里修改root font-size
  设置 &gt; setting &gt; root font size  &gt; 修改成 设计稿尺寸/10
  例如： 1920/10=192   750/10=75    375/10=37.5

  如果flexible.js 是划分20等份的，那就 设计稿 / 20
  例如： 1920/20=96  750/20=37.5   375/10=18.75

  超过的像素用媒体查询限定
  @media screen and (min-width: 750px){
    html{
       font-size: 75px!important;  // 如果是划分成20等份，要写成37.5
    }
  } </code></pre>
        <p>api</p>
        <ul>
          <li>
            狗狗接口：https://dog.ceo/api/breed/pembroke/images/random
            返回img地址
          </li>
          <li>
            土味情话：https://api.uomg.com/api/rand.qinghua?format=json
            返回message
          </li>
        </ul>
        <p>nanoid</p>
        <pre><code class="language-js line-numbers">  // 1. 安装(也可以使用uuid)
  npm i nanoid

  // 2. 使用
  import {nanoid} from ‘nanoid’
  let obj = {id:nanoid() ,title: xxxx}</code></pre>
        <p>nginx 配置</p>
        <pre><code class="language-js line-numbers">  // nginx官方文档 http://nginx.org
  // 下载地址（稳定版本 Stable version） http://nginx.org/en/download.html
  // 解压 nginx-1.26.2
  conf
  contrib
  docs
  html
  logs
  temp
  nginx.exe

  // 打包自己的项目，得到dist文件夹
  pnpm run build

  // 把打包好的dist 复制到 nginx/html

  // 进入nginx-1.26.2/conf/nginx.conf 配置
  server {
    listen  80;                            // 端口号
    server_name  localhost dev.local.com;  // 定义域名，dev..演示用

    location / {                           // 定义资源的访问目录
        root   D://Document/Study/Study_programming/Prom_Nginx/nginx-1.26.2/html/dist;
        index  index.html index.htm;       // 只留一个就行
    }
  }

  // 双击目录下 nginx.exe 启动服务，右键资源管理看见两个nginx.exe(32位)则服务启动成功，
  // 如果没有看到,则到根目录nginx-1.26.2/logs/error.log，查看报错原因并修复

  // 在浏览器上，直接访问，在地址栏输入localhost即可，就可以看到项目部署成功了
  server_name  localhost dev.local.com;
  // 同时，如果配置了虚拟域名，在浏览器上输入虚拟域名也可以直接访问
  // 不能访问时，配置hosts文件 C:\Windows\System32\drivers\etc\hosts 文件
  // 127.0.0.1  dev.local.com

  // nginx常用命令
  # nginx安装目录/usr/local/nginx/sbin 下执行
  # 启动
  ./nginx
  # 热重载
  ./nginx -s reload
  # 停止
  ./nginx -s stop

  // finalShell 安装 ，官网https://www.hostbuf.com/
  // 注册：XIONGBAB 密码：qwer1031，邮箱：2770949518@qq.com
  // 下载对应系统后，默认安装
  // 快捷键
  alt 命令历史
  ctrl 切换到命令输入框

  命令输入框:
  alt 命令历史
  tab 补全
  ctrl 切换到终端

  列表窗口:
  alt/tab/esc 关闭窗口
  上下箭头 选择行

  // 创建虚拟机
  1. 点击文件夹，[连接管理器]，点 文件夹 图标添加 > SSH连接(linux)
  2. 填写信息：
        名称: 随意
        主机: 云主机ip地址
        端口: 云主机端口
        用户名:  root
        密码: 云主机登录密码
  3. 确定 > 右键创建好的虚拟机 >  链接

  // 注册云主机 https://host.fuxsto.cn/（此方法不通，但是得到一个虚拟主机）
  QQ2770949518
  qwer17181910

  账号:9w7cwycp4m
  密码:v2pgwl8i03lwrt4
  到期:2024-11-30

  名称: 随意
  主机: 38.55.233.203
  端口: 21
  用户名: 9w7cwycp4m
  密码: v2pgwl8i03lwrt4

  数据库地址：localhost
  数据库端口：3306
  数据库名：9w7cwycp4m
  数据库用户名：9w7cwycp4m  // 初始密码同FTP密码
  密码: v2pgwl8i03lwrt4

  修改FTP密码：root1031
  修改数据库密码：1031

  // 注册免费liunx服务器 （用此方法）
  // https://linuxone.cloud.marist.edu/#/register?flag=VM
  // 登录：https://linuxone.cloud.marist.edu/#/login
  // 登录后，点击home 旁边的vitual servers 创建实例
  // 1. 点击create
  // 2. instance name : server
  // 3. Select an Image : 选择4个系统  乌班图
  // 4. Select a Flavor : 选配置
  // 5. Select a SSH Key Pair : 秘钥自己创建 ，名称随意，然后会下载秘钥
  // 6. 点击创建
  // 7. 等待3-5分钟，后可以点开配置进行连接
  /*
  1.无法登录
  解决方法：登录名linux1，密码：密钥文件
  2.用户无权限
  解决方法：sudo su
  3.sftp无权限
  解决方法：#给用户linux1授权目录/var/www/html
  chown linux1 /var/www/html
  4.外网无法访问端口
  解决方法：sudo iptables -I INPUT -p tcp --dport &lt;port#&gt; -j ACCEPT
  */

  邮箱：xiongbab95@icloud.com
  密码：Qwer1031
  root 密码 qwer1031
  first name:xiong
  last name:bab

  // 或者 linux 上安装centOS7</code></pre>
        <p>VM + centOS7 安装</p>
        <pre><code class="language-js line-numbers">  // 1. 百度网盘下载安装vm17.5，许可证：MC60H-DWHD5-H80U9-6V85M-8280D，帮助查看注册
  // 2. 进入centOS阿里镜像下载 4.4G的iso文件，用IDE下载 https://mirrors.aliyun.com/centos/7/isos/x86_64/
  // 3. 百度搜索怎么安装centos：https://blog.csdn.net/2401_87299120/article/details/142420961
  // 4. 防火墙配置（一定要配置，不然访问不到）https://www.cnblogs.com/xluoc/p/17511664.html
  // 检查nginx是否启动成功，如图所示则是启动成功
  ps aux|grep nginx
  //查看80-端口是否被分配给了Nginx
  netstat -ntlp

  // 对80端口进行防火墙配置
  firewall-cmd --zone=public --add-port=80/tcp --permanent
  // 重启防火墙服务
  systemctl restart firewalld.service、

  //完结浏览器输入ip即可显示
  ip addr    查看ip
  用finalShell连接
  root 用户名，密码0

  // 解决方案(Cannot find a valid baseurl for repo: base/7/x86_64)
  手动指定镜像源：
  由于 CentOS 7 已经停止官方支持，官方镜像可能不再可用。您可以尝试将 yum 仓库配置更改为一个仍然提供 CentOS 7 包的镜像源。编辑 /etc/yum.repos.d/CentOS-Base.repo 文件，将 mirrorlist URL 替换为一个具体的镜像 URL。例如，使用阿里云的镜像：
  ini
  [base]
  name=CentOS-$releasever - Base - mirrors.aliyun.com
  baseurl=http://mirrors.aliyun.com/centos/$releasever/os/$basearch/
  gpgcheck=1
  gpgkey=http://mirrors.aliyun.com/centos/RPM-GPG-KEY-CentOS-7

  #released updates
  [updates]
  name=CentOS-$releasever - Updates - mirrors.aliyun.com
  baseurl=http://mirrors.aliyun.com/centos/$releasever/updates/$basearch/
  gpgcheck=1
  gpgkey=http://mirrors.aliyun.com/centos/RPM-GPG-KEY-CentOS-7

  #additional packages that may be useful
  [extras]
  name=CentOS-$releasever - Extras - mirrors.aliyun.com
  baseurl=http://mirrors.aliyun.com/centos/$releasever/extras/$basearch/
  gpgcheck=1
  gpgkey=http://mirrors.aliyun.com/centos/RPM-GPG-KEY-CentOS-7
  清理和更新 yum 缓存：
  在修改完仓库配置后，运行以下命令来清理和更新 yum 缓存：
  bash
  yum clean all
  yum makecache
  再次尝试安装：
  使用修改后的配置，再次尝试安装 pcre 和 pcre-devel：
  bash
  yum install -y pcre pcre-devel</code></pre>
        <p>Vscode 左侧文件嵌套折叠 插件（File Nesting Updater）</p>
        <pre><code class="language-js line-numbers">  // 1. 打开vscode，setting.json，将下面配置文件粘贴即可
  // 2. 自己配置,也可以参考官网
  // 这行代码的意思是启用文件嵌套显示功能。
  "explorer.fileNesting.enabled": true,
  // 启用文件嵌套显示功能的同时，保持文件夹默认是折叠的状态。
  "explorer.fileNesting.expand": false,
  "explorer.fileNesting.patterns": {
      "vite.config.ts": "*.json,*.yaml,*.js,*.html,*.ts,*.cjs,*ignore,*.md"
  }

  // 官网配置
  // updated 2024-10-28 14:43
  // https://github.com/antfu/vscode-file-nesting-config </code></pre>
        <p>影藏input 搜索框的清除按钮</p>
        <pre><code class="language-js line-numbers">  input[type='search']::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
  input[type='search'] {
    -moz-appearance: textfield;
  }
  input[type='search']::-moz-search-cancel-button {
    display: none;
  }</code></pre>
        <p>网站制作参考</p>
        <ul>
          <li>
            https://demo.downdemo.com/e09193d4eb874058a806164c7090b9f1/fd71eb7d9941461da4a48c82f7f1fcfc/page-login.html
          </li>
          <li>
            https://demo.downdemo.com/4f3981d0989b4d2e8c59a96e1f861006/349fa3000db44387a91eb90534084793/#index
          </li>
          <li>
            https://demo.downdemo.com/4182e054b79941388df2652621e159f3/e10fdb50973a4369aab9d55bb63e58dc/
          </li>
          <li>
            https://demo.downdemo.com/7a09ed6bf7a14c4b93fb8b6f2aa357f5/c624937277c2421d9eac8df947cd674e/
          </li>
          <li>https://sqliteonline.com/</li>
          <li>
            https://demo.downdemo.com/a7e96be0a55748b8b01f71d32ea549b3/375956306f5c43f99fbef2015089723c/
          </li>
          <li>
            https://demo.downdemo.com/39f7d39aba6d4c9db3b6f3efa003f002/c645721f015c4a76aa742217715c4902/index.html
          </li>
          <li>
            https://demo.downdemo.com/3131d99fb9b7498bb9fcb981dcffff8d/221b757ecf604da9a68cbbc234dbd087/
          </li>
        </ul>
        <p>使用prismjs</p>
        <pre><code class="language-js line-numbers">
  pnpm install prismjs -S
  pnpm install vite-plugin-prismjs -D
  pnpm install --save-dev @types/prismjs

  // vite.config.ts
  import { prismjsPlugin } from 'vite-plugin-prismjs'
  export default defineConfig({
    plugins: [
        prismjsPlugin({
          languages: 'all',
          plugins: ['line-numbers', 'show-language', 'copy-to-clipboard', 'inline-color'],
          theme: 'Tomorrow',
          css: true,
        }),
    ]
  })

  // 组件
  &lt;template&gt;
    &lt;pre&gt;&lt;code :class="`language-${language} line-numbers`"&gt;｛｛ code ｝｝&lt;/code&gt;&lt;/pre&gt;
  &lt;/template&gt;

  &lt;script setup lang="ts"&gt;
  import { onMounted } from 'vue'
  import Prism from 'prismjs'

  const props = defineProps&lt;{
    code: string
    language: string
  }&gt;()

  onMounted(() =&gt; {
    Prism.highlightAll()
  })

  onUpdated(() =&gt; Prism.highlightAll())
  &lt;/script&gt;

  // mac 定制 css样式
  pre:not(.pre) {
    font-size: 16px;
    border-radius: 6px;

    code { display: inline-block; padding-bottom: 20px; position: relative; top: 16px;}

    &::before {
      content: ''; position: absolute; background: red; width: 10px; height: 10px;
      border-radius: 50%; top: 10px; left: 15px; transform: translate(-50%);
    }

    &::after {
      content: ''; position: absolute; background: sandybrown; width: 10px; height: 10px;
      border-radius: 50%; top: 10px; left: 30px; transform: translate(-50%);
    }

    code:first-child {
      &::after {
        content: ''; position: absolute; background: limegreen; width: 10px; height: 10px;
        border-radius: 50%; top: -22px; left: -15px;transform: translate(-50%);
      }
    }
  }</code></pre>
        <p>组件动画时</p>
        <pre><code class="language-js line-numbers">  // mode="out-in" 可以保证先销毁旧组件再渲染新组件，避免并排。
  &lt;transition name="fade" mode="out-in"&gt;
    &lt;component&gt; :is="currentComponent"&gt;&lt;/component&gt;
  &lt;/transition&gt;</code></pre>
      </el-card>
      <el-card id="part13" shadow="hover">
        <h2>忽略配置</h2>
        <p>配置语法检查 eslint （可忽略）</p>
        <pre><code class="language-js line-numbers">  // 看官方文档配置https://zh-hans.eslint.org/ || https://eslint.org/
  // 推荐使用固定版本
  pnpm install eslint@8.22.0 -D
  pnpm install eslint-plugin-vue@8.6.0 -D
  pnpm install eslint-config-prettier@8.5.0 -D
  pnpm install eslint-plugin-prettier@4.0.0 -D
  pnpm install prettier@2.6.2 -D

  // 创建.eslintrc.js 文件
  module.exports = {
    // 指定环境
    env: {
      // 可以使用浏览器的全局变量
      browser: true,
      // 添加所有 ECMAScript 2021 的全局变量，并自动将解析器选项 ecmaVersion 设置为 12
      es2021: true,
      // 添加node全局变量
      node: true
    },
    // 自定义全局变量
    globals: {
      defineProps: 'readonly',
      defineEmits: 'readonly',
      defineExpose: 'readonly',
      $confirm: 'readonly',
      $message: 'readonly',
      $notify: 'readonly',
      $alert: 'readonly',
      $storage: 'readonly',   // 使用这个代替 localStorage
      $loading: 'readonly',
      // localStorage: 'off',   // 禁用原生  不是必须
      // sessionStorage: 'off'
    },
    // vue文件解析器
    parser: 'vue-eslint-parser',
    parserOptions: {
      // es 语法的版本
      ecmaVersion: 'latest',
      // 代码类型
      sourceType: 'module'
    },
    extends: [
      // 全部规则默认是关闭的,这个配置项开启推荐规则,推荐规则参照文档
      // 比如:函数不能重名、对象不能出现重复key
      './.eslintrc-auto-import.json',
      // https://zh-hans.eslint.org/docs/latest/rules/ 推荐配置
      'eslint:recommended',
      // https://eslint.vuejs.org/
      // vue3语法规则
      'plugin:vue/vue3-essential',
      'plugin:vue/vue3-strongly-recommended',
      // https://github.com/prettier/eslint-plugin-prettier
      'plugin:prettier/recommended',
    ],
    // 要为特定类型的文件指定处理器
    "overrides": [
    ],
    plugins: ['vue', 'prettier'],
    rules: {
      // eslint（https://eslint.bootcss.com/docs/rules/）
      'prettier/prettier': 'warn',   // 校验prettier规则 只给警告，不给报错
      'no-var': 'error', // 要求使用 let 或 const 而不是 var
      'arrow-body-style': 'off',   // 箭头函数规范
      'prefer-arrow-callback': 'off',// 使用箭头函数作为参数传递
      'no-debugger': 'off',    // debugger
      'no-empty': 'off',   // 为空的代码块
      'no-unused-vars': 'off',    // 未使用的变量
      eqeqeq: ['error', 'always'],    // 强制使用===
      'vue/multi-word-component-names': 'off',    // 组件命名格式
      'vue/no-unused-components': 'off',
      'vue/no-unused-vars': 'off',
      'vue/max-attributes-per-line': 'off',    // 组件参数格式
      'vue/singleline-html-element-content-newline':'off'//单个标签内容格式
    }
  }

  // 创建.eslintignore 文件
  dist
  node_modules
  package.json

  // 在vscode 插件搜索 Eslint ，并右键设置，进入setting.json文件，添加规则
  "eslint.codeActionsOnSave.rules": null,
  "eslint.validate": ["javascript",  "vue", "html"],

  // 1. 以下是硅谷项目 eslint 配置（推荐）
  pnpm i eslint -D             // 安装

  npx eslint --init            // 生成配置文件
    > to check .. and find...
    > javascript modules
    > vuejs
    > yes
    > browser   // 如果后续有用到node可以按住空格把node选择上后回车
      node
    > yes
    > pnpm

  // 2. 执行 (按需安装)
  // vue3环境代码校验插件
  # 让所有与prettier规则存在冲突的Eslint rules失效，并使用prettier进行代码检查
  "eslint-config-prettier": "^8.6.0",
  "eslint-plugin-import": "^2.27.5",
  "eslint-plugin-node": "^11.1.0",
  # 运行更漂亮的Eslint，使prettier规则优先级更高，Eslint优先级低
  "eslint-plugin-prettier": "^4.2.1",
  # vue.js的Eslint插件（查找vue语法错误，发现错误指令，查找违规风格指南
  "eslint-plugin-vue": "^9.9.0",
  # 该解析器允许使用Eslint校验所有babel code
  "@babel/eslint-parser": "^7.19.1",
  // 安装
  pnpm install -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier
  eslint-config-prettier eslint-plugin-node @babel/eslint-parser

  // 3. 添加 .eslintignore 忽略文件
  dist
  node_modules
  package.json

  // 最新语法需要到eslint.config.js 中配置
  export default [
    {ignores: ["**/temp.js", "config/*"]}
  ];

  // 4. 运行脚本  packjson.js 添加两行
  "scripts": {
      "lint": "eslint src",         // 检查src下的语法
      "fix": "eslint src --fix"     // 检查语法后，可执行修复
  },
  > pnpm run fix              // 终端执行后会修复出错的代码

  // 5. 配置规则 eslint.config.js
  export default [
    {rules: {
     // eslint（https://eslint.bootcss.com/docs/rules/）
     // v9.13.0版本https://eslint.org/docs/latest/use/configure/rules

      'no-var': 'error', // 要求使用 let 或 const 而不是 var
      'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
      // 无控制台
      'no-console':process.env.NODE_ENV==='production'?'error':'off',
      // 无调试器
      'no-debugger':process.env.NODE_ENV==='production'?'error':'off',
      'no-unexpected-multiline': 'error', // 禁止空余的多行
      'no-useless-escape': 'off', // 禁止不必要的转义字符

      '@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
       // 禁止使用 @ts-ignore
      '@typescript-eslint/prefer-ts-expect-error': 'error',
      '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
      // 无等式为空 例如if (foo == null) {bar();}
      '@typescript-eslint/no-non-null-assertion': 'off',
      // 禁止使用自定义 TypeScript 模块和命名空间。
      '@typescript-eslint/no-namespace': 'off',
      // JavaScript 允许在表达式和结束分号之间放置不必要的空格。
      '@typescript-eslint/semi': 'off',

      // 要求组件名称始终为 “-” 链接的单词
      'vue/multi-word-component-names': 'off',
      // 防止&lt;script setup&gt;使用的变量&lt;template&gt;被标记为未使用
      'vue/script-setup-uses-vars': 'error',
      // 不允许组件 prop的改变
      'vue/no-mutating-props': 'off',
      // 对模板中的自定义组件强制执行属性命名样式
      'vue/attribute-hyphenation': 'off',
      // 允许使用 any类型,不允许可以删除或者用true
      "noImplicitAny": false,
      // 关闭已声明但未使用变量的检查
      "noUnusedLocals": false
      },}
    // 配置忽略文件
    {ignores: ['dist', 'node_modules'],},
  ];</code></pre>
        <p>配置prettier（可忽略）</p>
        <pre><code class="language-js line-numbers">  // 用了antfu作者的eslint包时可以省略这步，且可卸载prettier和相关配置参数
  // 1. 安装
  pnpm install -D eslint-plugin-prettier prettier eslint-config-prettier
  // 如果使用固定版本的eslint 则执行以下prettier 安装
  pnpm install prettier -D
  // 且配置 .prettierrc 参考下面 第2项里的配置

  // 2. 配置 -- 创建 .prettierrc.json文件 添加规则
  {
      "singleQuote": true,              // 字符串都是单引号
      "semi": true,                     // 分号不是必须的
      "bracketSpacing": true,           // 对象大括号带空格
      // 确保HTML标签之间的空格不会被不必要地删除或添加
      "htmlWhitespaceSensitivity": "ignore",
      "endOfLine": "auto",              // 换行符lf  window是crlf
      "trailingComma": "all",           // 对象末尾始终逗号
      "tabWidth": 2,                    // 缩进
      "useTabs":false,                  // 是否使用制表符Tab键来代替空格缩进
      "printWidth": 800,                // 超过多少字符才换行
      "arrowParens":"always"            // 箭头符号参数始终带括号
  }

  // 3. 创建.prettierignore添加忽略文件
  /dist/*
  /html/*
  .local
  /node_modules/**
  **/*.svg
  **/*.sh
  /public/*

  /.eslintignore
  /.prettierignore
  /.eslintrc.js
  /.prettierrc.js

  // 4. 检查及修复
  pnpm run lint
  pnpm run fix </code></pre>
        <p>集成sass（不推荐 但可以使用全局变量）</p>
        <pre><code class="language-js line-numbers">  // 1. 如果提示sass not found则需要 安装sass。如果未提示则忽略
  pnpm i sass -D

  // 2. 简单 用法
  // src/styles/define.scss
  $color: blue;

  // src/views/home/index.html
  &lt;style&gt; scoped lang="scss"&gt;
    @import '@/styles/define.scss'
    .box{ color:$color; }
  &lt;/style&gt;

  // 3. 组件内部已经可以使用scss样式，引入
  &lt;style scoped lang="scss"&gt;&lt;/style&gt;

  // 4. 在根目录下index.html配置全局变量
  &lt;head&gt;
      &lt;style&gt;&gt;
        :root{
          --el-color:#ccc;
        }
      &lt;/style&gt;
  &lt;/head&gt;

  &lt;!-- 其他组件下 --&gt;
  &lt;style&gt; scoped lang="scss"&gt;
      .box {
          background: var(--el-color);
      }
  &lt;/style&gt;

  // 5. 全局用法  入口文件 main.ts 引入
  import '@/styles/index.scss'
  // 去npm 找到 reset.scss 拷贝清除样式css，网址https://www.npmjs.com/package/scss-reset
  /**
   * ENGINE
   * v0.2 | 20150615
   * License: none (public domain)
   */
  ......
  // src/styles/index.scss 创建后引入reset.scss
  @import './reset.scss';
  // src/style/variable.scss 创建 全局变量
  $color: #cccccc;
  // 如果不能引用scss中的变量，则需要在 vite.config.ts 中配置
  export default defineConfig((config)=>{
    plugins:[],
    ...
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,  // 开启了代表能在scss用js表达式
          additionalData:`
            @import "./src/styles/variable.scss";
            @import "xxxxx.scss"   // 可以引入多个全局演示
          `,
        },
      },
    },
  })
  // 例如 根据一个 JavaScript 变量来动态设置背景颜色：
  $bg-color: #{`#${Math.floor(Math.random()*16777215).toString(16)}`};

  // 报错解决
  // Deprecation Warning: The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0.
  pnpm uninstalll sass -D
  pnpm install sass@1.78 -D

  // 全局 mixin.scss和全局变量一样
  // vite.config.js
  additionalData:`
            @import "./src/styles/variable.scss";
            @import "./src/scss/mixin.scss"; `,

  // mixin.scss
  @mixin ellipsis(){
      text-overflow:ellipsis;
      overflow:hidden;
      white-space:nowrap;
  }

  // App.vue
  &lt;style scoped lang="scss"&gt;
      @include ellipsis()
      width:$--el-width;
  &lt;/style&gt; </code></pre>
        <p>mock数据 （用mock-server方法更好）</p>
        <pre><code class="language-js line-numbers">  // 1. mock造假的信息，开发中会有真实数据，只在开发阶段使用
  // 2. 参考及安装依赖:https://www.npmjs.com/package/vite-plugin-mock
  pnpm install -D vite-plugin-mock mockjs
  // 3. 在 vite.config.js 配置文件启用插件。
  import { viteMockServe } from 'vite-plugin-mock';
  export default ({ command }) => {
    return {
      plugins: [
        vue(),
        viteMockServe({
          /*
            localEnabled: command === 'serve',  // 案例中使用
          */
          mockPath: 'mock', // 官方默认配置
          enable: true, // 官方默认配置
        }),
      ],
    };
  };
  // 以上写法结构
  export default defineConfig((参数command会检测环境，只在开发中使用)=>{
      retun  {之前写的配置对象}
  })
  // 4. 在根目录创建mock文件夹，去创建我们需要mock数据与接口，mock/user.ts
  // 此函数执行会返回一个数组,数组里面包含两个用户信息，假接口
  function createUserList() {
    return [
      {
        userId: 1,
        avatar:
          'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        username: 'admin',
        password: '111111',
        desc: '平台管理员',
        roles: ['平台管理员'],
        buttons: ['cuser.detail'],
        routes: ['home'],
        token: 'Admin Token',
      },
      {
        userId: 2,
        avatar:
          'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        username: 'system',
        password: '111111',
        desc: '系统管理员',
        roles: ['系统管理员'],
        buttons: ['cuser.detail', 'cuser.user'],
        routes: ['home'],
        token: 'System Token',
      },
    ];
  }

  // 对外暴露一个数组，数组里面包含登录和获取用户信息接口。官网写法
  export default [
    // 用户登录接口
    {
      url: '/api/user/login', //请求地址
      method: 'post', //请求方式
      response: ({ body }) => {
        //获取请求体携带过来的用户名与密码
        const { username, password } = body;
        //调用获取用户信息函数,用于判断是否有此用户
        const checkUser = createUserList().find(
          (item) => item.username === username && item.password === password,
        );
        //没有用户返回失败信息
        if (!checkUser) {
          return { code: 201, data: { message: '账号或者密码不正确' } };
        }
        //如果有返回成功信息
        const { token } = checkUser;
        return { code: 200, data: { token } };
      },
    },
    // 获取用户信息
    {
      url: '/api/user/info',
      method: 'get',
      response: (request) => {
        //获取请求头携带token
        const token = request.headers.token;
        //查看用户信息是否包含有次token用户
        const checkUser = createUserList().find(
          (item) => item.token === token,
        );
        //没有返回失败的信息
        if (!checkUser) {
          return { code: 201, data: { message: '获取用户信息失败' } };
        }
        //如果有返回成功信息
        return { code: 200, data: { checkUser } };
      },
    },
  ];
  // 5. 注意，这个mock数据是在开发阶段测试用的，生产环境要用真实数据</code></pre>
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
  { id: 11, h2: "项目配置参数" },
  { id: 12, h2: "其他配置" },
  { id: 13, h2: "忽略配置" },
]);
</script>

<style scoped lang="scss"></style>
