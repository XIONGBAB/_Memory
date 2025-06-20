<template>
  <div class="card-container">
    <div class="card-container-text">
      <div class="card-container-information">
        <div class="card-container-logo">
          <svg
            width="45"
            height="45"
            t="1699148091125"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3528"
          >
            <path
              d="M116.7 63.8l71.9 806.9 322.8 89.6 323.7-89.8 72.1-806.7H116.7z m634 263.9H372l9 101.3h360.7l-27.2 303.8-203 56.3-202.7-56.3-13.9-155.4h99.4l7.1 79 110.2 29.7 0.3-0.1L622 656.3 633.5 528h-343l-26.7-299.2h495.7l-8.8 98.9z"
              fill="#E44D26"
              p-id="3529"
            />
          </svg>
          <div class="card-container-title">
            Html
          </div>
        </div>
        <div class="card-container-introduce">
          <p>
            HTML（HyperText Markup
            Language）全称为超文本标记语言，是一种用于创建和组织网页结构及内容的描述性标记语言。HTML不是一种编程语言，它使用标签来描述网页中的元素，如文本、图片、链接、表格等，并定义这些元素的显示方式。
          </p>
        </div>
      </div>
      <div ref="containerRef" class="card-container-main">
        <el-card id="part1" shadow="hover">
          <dlv class="card-container-style">
            <i style="--i: 20px; --color: #ff0000"></i>
            <i style="--i: 35px; --color: #32cd32"></i>
            <i style="--i: 50px; --color: #ffa500"></i>
          </dlv>
          <div class="card-container-content">
            <h2 class="c-content-h2">
              制作项目
            </h2>
            <div class="c-content-box">
              <p>一、创建好对应的文件夹</p>
              <ul>
                <li>主页 index.html</li>
                <li>样式 css</li>
                <li>文件 js</li>
                <li>图片 images</li>
                <li>视频 videos</li>
                <li>插件 libs</li>
              </ul>
              <p>二、引入相关js css libs(库文件)</p>
              <ul>
                <li>书写规范代码, 初始化css, load加载js</li>
                <li>二倍图使用Fireworks制作精灵图, Ps插件cutterman切图</li>
                <li>规划好布局思路, 然后再书写代码</li>
              </ul>
              <p>
                兼容性网站查询：
                <el-link type="primary" icon="Link" target="_blank" href="https://developer.mozilla.org/zh-CN/">
                  https://developer.mozilla.org/zh-CN/
                </el-link>
              </p>
            </div>
          </div>
        </el-card>
        <el-card id="part2" shadow="hover">
          <dlv class="card-container-style">
            <i style="--i: 20px; --color: #ff0000"></i>
            <i style="--i: 35px; --color: #32cd32"></i>
            <i style="--i: 50px; --color: #ffa500"></i>
          </dlv>
          <div class="card-container-content">
            <h2 class="c-content-h2">
              WEB服务器
            </h2>
            <div class="c-content-box">
              <p>什么是web服务器?</p>
              <ul>
                <li>服务器（我们也会称之为主机）是提供计算服务的设备，它也是一台计算机。在网络环境下，根据服务器提供的服务类型不同，服务器又分为文件服务器、数据库服务器、应用程序服务器、Web服务器等。</li>
                <li>Web服务器一般指网站服务器，是指驻留于因特网上某种类型计算机的程序，可以向浏览器等Web客户端提供文档，也可以放置网站文件， 让全世界浏览；可以放置数据文件，让全世界下载。</li>
                <li>以下服务器我们主要指的是Web服务器。根据服务器在网络中所在的位置不同，又可分为 本地服务器 和 远程服务器 。</li>
                <li>本地服务器 主要在局域网中访问，如果想要在互联网中访问，可以把品优购网站上传到为远程服务器</li>
                <li>远程服务器。是通常是别的公司为我们提供的一台电脑（主机），我们只要把网站项目上传到这台电脑上，任何人都可以利用域名访问我们的网站了。</li>
                <li>
                  将自己的网站上传到远程服务器。注意：一般稳定的服务器都是需要收费的。比如：阿里云这里给大家推荐一个免费的远程服务器（免费空间）
                  <ul>
                    <li>
                      https://free.3v.do/
                    </li>
                    <li>去免费空间网站注册账号。百度搜索</li>
                    <li>记录下主机名、用户名、密码、域名。</li>
                    <li>利用CutFtp软件上传网站到远程服务器。</li>
                    <li>在浏览器中输入域名，即可访问我们的品优购网站了。 以上做法要认证要10元，Github 免费</li>
                  </ul>
                </li>
                <li>
                  . 全球有13个根（root）服务器。10台在美国，另外3台分别在英国 瑞士 日本。DNS根域下面是顶级域，也由Internet 域名注册授权机构管理。共有3种类型的顶级域。
                  <ul>
                    <li>
                      组织域：
                      <ul>
                        <li>
                          采用3个字符的代号，表示DNS域中所包含的组织的主要功能或活动。比如
                          <ul>
                            <li>com 为商业机构组织</li>
                            <li>edu 为教育机构组织</li>
                            <li>gov 为政府机构组织</li>
                            <li>mil 为军事机构组织</li>
                            <li>net 为网络机构组织</li>
                            <li>org 为非营利机构组织</li>
                            <li>int 为国际机构组织</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      地址域：
                      <ul>
                        <li>
                          采用两个字符的国家或地区代号。如
                          <ul>
                            <li>cn 为中国</li>
                            <li>kr 为韩国</li>
                            <li>us 为美国</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      反向域：
                      <ul>
                        <li>这是个特殊域，名字为in-addr.arpa，用于将IP地址映射到名字（反向查询）</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  架构
                  <ul>
                    <li>B/S架构 browser server</li>
                    <li>C/S 架构 client server</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </el-card>
        <el-card id="part3" shadow="hover">
          <dlv class="card-container-style">
            <i style="--i: 20px; --color: #ff0000"></i>
            <i style="--i: 35px; --color: #32cd32"></i>
            <i style="--i: 50px; --color: #ffa500"></i>
          </dlv>
          <div class="card-container-content">
            <h2 class="c-content-h2">
              WEB服务器
            </h2>
            <div class="c-content-box">
              <p>什么是web服务器?</p>
              <ul>
                <li>服务器（我们也会称之为主机）是提供计算服务的设备，它也是一台计算机。在网络环境下，根据服务器提供的服务类型不同，服务器又分为文件服务器、数据库服务器、应用程序服务器、Web服务器等。</li>
                <li>Web服务器一般指网站服务器，是指驻留于因特网上某种类型计算机的程序，可以向浏览器等Web客户端提供文档，也可以放置网站文件， 让全世界浏览；可以放置数据文件，让全世界下载。</li>
                <li>以下服务器我们主要指的是Web服务器。根据服务器在网络中所在的位置不同，又可分为 本地服务器 和 远程服务器 。</li>
                <li>本地服务器 主要在局域网中访问，如果想要在互联网中访问，可以把品优购网站上传到为远程服务器</li>
                <li>远程服务器。是通常是别的公司为我们提供的一台电脑（主机），我们只要把网站项目上传到这台电脑上，任何人都可以利用域名访问我们的网站了。</li>
                <li>
                  将自己的网站上传到远程服务器。注意：一般稳定的服务器都是需要收费的。比如：阿里云这里给大家推荐一个免费的远程服务器（免费空间）
                  <ul>
                    <li>
                      https://free.3v.do/
                    </li>
                    <li>去免费空间网站注册账号。百度搜索</li>
                    <li>记录下主机名、用户名、密码、域名。</li>
                    <li>利用CutFtp软件上传网站到远程服务器。</li>
                    <li>在浏览器中输入域名，即可访问我们的品优购网站了。 以上做法要认证要10元，Github 免费</li>
                  </ul>
                </li>
                <li>
                  . 全球有13个根（root）服务器。10台在美国，另外3台分别在英国 瑞士 日本。DNS根域下面是顶级域，也由Internet 域名注册授权机构管理。共有3种类型的顶级域。
                  <ul>
                    <li>
                      组织域：
                      <ul>
                        <li>
                          采用3个字符的代号，表示DNS域中所包含的组织的主要功能或活动。比如
                          <ul>
                            <li>com 为商业机构组织</li>
                            <li>edu 为教育机构组织</li>
                            <li>gov 为政府机构组织</li>
                            <li>mil 为军事机构组织</li>
                            <li>net 为网络机构组织</li>
                            <li>org 为非营利机构组织</li>
                            <li>int 为国际机构组织</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      地址域：
                      <ul>
                        <li>
                          采用两个字符的国家或地区代号。如
                          <ul>
                            <li>cn 为中国</li>
                            <li>kr 为韩国</li>
                            <li>us 为美国</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      反向域：
                      <ul>
                        <li>这是个特殊域，名字为in-addr.arpa，用于将IP地址映射到名字（反向查询）</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  架构
                  <ul>
                    <li>B/S架构 browser server</li>
                    <li>C/S 架构 client server</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </el-card>
        <el-card id="part4" shadow="hover">
          <dlv class="card-container-style">
            <i style="--i: 20px; --color: #ff0000"></i>
            <i style="--i: 35px; --color: #32cd32"></i>
            <i style="--i: 50px; --color: #ffa500"></i>
          </dlv>
          <div class="card-container-content">
            <h2 class="c-content-h2">
              WEB服务器
            </h2>
            <div class="c-content-box">
              <p>什么是web服务器?</p>
              <ul>
                <li>服务器（我们也会称之为主机）是提供计算服务的设备，它也是一台计算机。在网络环境下，根据服务器提供的服务类型不同，服务器又分为文件服务器、数据库服务器、应用程序服务器、Web服务器等。</li>
                <li>Web服务器一般指网站服务器，是指驻留于因特网上某种类型计算机的程序，可以向浏览器等Web客户端提供文档，也可以放置网站文件， 让全世界浏览；可以放置数据文件，让全世界下载。</li>
                <li>以下服务器我们主要指的是Web服务器。根据服务器在网络中所在的位置不同，又可分为 本地服务器 和 远程服务器 。</li>
                <li>本地服务器 主要在局域网中访问，如果想要在互联网中访问，可以把品优购网站上传到为远程服务器</li>
                <li>远程服务器。是通常是别的公司为我们提供的一台电脑（主机），我们只要把网站项目上传到这台电脑上，任何人都可以利用域名访问我们的网站了。</li>
                <li>
                  将自己的网站上传到远程服务器。注意：一般稳定的服务器都是需要收费的。比如：阿里云这里给大家推荐一个免费的远程服务器（免费空间）
                  <ul>
                    <li>
                      https://free.3v.do/
                    </li>
                    <li>去免费空间网站注册账号。百度搜索</li>
                    <li>记录下主机名、用户名、密码、域名。</li>
                    <li>利用CutFtp软件上传网站到远程服务器。</li>
                    <li>在浏览器中输入域名，即可访问我们的品优购网站了。 以上做法要认证要10元，Github 免费</li>
                  </ul>
                </li>
                <li>
                  . 全球有13个根（root）服务器。10台在美国，另外3台分别在英国 瑞士 日本。DNS根域下面是顶级域，也由Internet 域名注册授权机构管理。共有3种类型的顶级域。
                  <ul>
                    <li>
                      组织域：
                      <ul>
                        <li>
                          采用3个字符的代号，表示DNS域中所包含的组织的主要功能或活动。比如
                          <ul>
                            <li>com 为商业机构组织</li>
                            <li>edu 为教育机构组织</li>
                            <li>gov 为政府机构组织</li>
                            <li>mil 为军事机构组织</li>
                            <li>net 为网络机构组织</li>
                            <li>org 为非营利机构组织</li>
                            <li>int 为国际机构组织</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      地址域：
                      <ul>
                        <li>
                          采用两个字符的国家或地区代号。如
                          <ul>
                            <li>cn 为中国</li>
                            <li>kr 为韩国</li>
                            <li>us 为美国</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      反向域：
                      <ul>
                        <li>这是个特殊域，名字为in-addr.arpa，用于将IP地址映射到名字（反向查询）</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  架构
                  <ul>
                    <li>B/S架构 browser server</li>
                    <li>C/S 架构 client server</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </el-card>
        <el-card id="part5" shadow="hover">
          <dlv class="card-container-style">
            <i style="--i: 20px; --color: #ff0000"></i>
            <i style="--i: 35px; --color: #32cd32"></i>
            <i style="--i: 50px; --color: #ffa500"></i>
          </dlv>
          <div class="card-container-content">
            <h2 class="c-content-h2">
              WEB服务器
            </h2>
            <div class="c-content-box">
              <p>什么是web服务器?</p>
              <ul>
                <li>服务器（我们也会称之为主机）是提供计算服务的设备，它也是一台计算机。在网络环境下，根据服务器提供的服务类型不同，服务器又分为文件服务器、数据库服务器、应用程序服务器、Web服务器等。</li>
                <li>Web服务器一般指网站服务器，是指驻留于因特网上某种类型计算机的程序，可以向浏览器等Web客户端提供文档，也可以放置网站文件， 让全世界浏览；可以放置数据文件，让全世界下载。</li>
                <li>以下服务器我们主要指的是Web服务器。根据服务器在网络中所在的位置不同，又可分为 本地服务器 和 远程服务器 。</li>
                <li>本地服务器 主要在局域网中访问，如果想要在互联网中访问，可以把品优购网站上传到为远程服务器</li>
                <li>远程服务器。是通常是别的公司为我们提供的一台电脑（主机），我们只要把网站项目上传到这台电脑上，任何人都可以利用域名访问我们的网站了。</li>
                <li>
                  将自己的网站上传到远程服务器。注意：一般稳定的服务器都是需要收费的。比如：阿里云这里给大家推荐一个免费的远程服务器（免费空间）
                  <ul>
                    <li>
                      https://free.3v.do/
                    </li>
                    <li>去免费空间网站注册账号。百度搜索</li>
                    <li>记录下主机名、用户名、密码、域名。</li>
                    <li>利用CutFtp软件上传网站到远程服务器。</li>
                    <li>在浏览器中输入域名，即可访问我们的品优购网站了。 以上做法要认证要10元，Github 免费</li>
                  </ul>
                </li>
                <li>
                  . 全球有13个根（root）服务器。10台在美国，另外3台分别在英国 瑞士 日本。DNS根域下面是顶级域，也由Internet 域名注册授权机构管理。共有3种类型的顶级域。
                  <ul>
                    <li>
                      组织域：
                      <ul>
                        <li>
                          采用3个字符的代号，表示DNS域中所包含的组织的主要功能或活动。比如
                          <ul>
                            <li>com 为商业机构组织</li>
                            <li>edu 为教育机构组织</li>
                            <li>gov 为政府机构组织</li>
                            <li>mil 为军事机构组织</li>
                            <li>net 为网络机构组织</li>
                            <li>org 为非营利机构组织</li>
                            <li>int 为国际机构组织</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      地址域：
                      <ul>
                        <li>
                          采用两个字符的国家或地区代号。如
                          <ul>
                            <li>cn 为中国</li>
                            <li>kr 为韩国</li>
                            <li>us 为美国</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      反向域：
                      <ul>
                        <li>这是个特殊域，名字为in-addr.arpa，用于将IP地址映射到名字（反向查询）</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  架构
                  <ul>
                    <li>B/S架构 browser server</li>
                    <li>C/S 架构 client server</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </el-card>
        <el-card id="part6" shadow="hover">
          <dlv class="card-container-style">
            <i style="--i: 20px; --color: #ff0000"></i>
            <i style="--i: 35px; --color: #32cd32"></i>
            <i style="--i: 50px; --color: #ffa500"></i>
          </dlv>
          <div class="card-container-content">
            <h2 class="c-content-h2">
              WEB服务器
            </h2>
            <div class="c-content-box">
              <p>什么是web服务器?</p>
              <ul>
                <li>服务器（我们也会称之为主机）是提供计算服务的设备，它也是一台计算机。在网络环境下，根据服务器提供的服务类型不同，服务器又分为文件服务器、数据库服务器、应用程序服务器、Web服务器等。</li>
                <li>Web服务器一般指网站服务器，是指驻留于因特网上某种类型计算机的程序，可以向浏览器等Web客户端提供文档，也可以放置网站文件， 让全世界浏览；可以放置数据文件，让全世界下载。</li>
                <li>以下服务器我们主要指的是Web服务器。根据服务器在网络中所在的位置不同，又可分为 本地服务器 和 远程服务器 。</li>
                <li>本地服务器 主要在局域网中访问，如果想要在互联网中访问，可以把品优购网站上传到为远程服务器</li>
                <li>远程服务器。是通常是别的公司为我们提供的一台电脑（主机），我们只要把网站项目上传到这台电脑上，任何人都可以利用域名访问我们的网站了。</li>
                <li>
                  将自己的网站上传到远程服务器。注意：一般稳定的服务器都是需要收费的。比如：阿里云这里给大家推荐一个免费的远程服务器（免费空间）
                  <ul>
                    <li>
                      https://free.3v.do/
                    </li>
                    <li>去免费空间网站注册账号。百度搜索</li>
                    <li>记录下主机名、用户名、密码、域名。</li>
                    <li>利用CutFtp软件上传网站到远程服务器。</li>
                    <li>在浏览器中输入域名，即可访问我们的品优购网站了。 以上做法要认证要10元，Github 免费</li>
                  </ul>
                </li>
                <li>
                  . 全球有13个根（root）服务器。10台在美国，另外3台分别在英国 瑞士 日本。DNS根域下面是顶级域，也由Internet 域名注册授权机构管理。共有3种类型的顶级域。
                  <ul>
                    <li>
                      组织域：
                      <ul>
                        <li>
                          采用3个字符的代号，表示DNS域中所包含的组织的主要功能或活动。比如
                          <ul>
                            <li>com 为商业机构组织</li>
                            <li>edu 为教育机构组织</li>
                            <li>gov 为政府机构组织</li>
                            <li>mil 为军事机构组织</li>
                            <li>net 为网络机构组织</li>
                            <li>org 为非营利机构组织</li>
                            <li>int 为国际机构组织</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      地址域：
                      <ul>
                        <li>
                          采用两个字符的国家或地区代号。如
                          <ul>
                            <li>cn 为中国</li>
                            <li>kr 为韩国</li>
                            <li>us 为美国</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      反向域：
                      <ul>
                        <li>这是个特殊域，名字为in-addr.arpa，用于将IP地址映射到名字（反向查询）</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  架构
                  <ul>
                    <li>B/S架构 browser server</li>
                    <li>C/S 架构 client server</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </el-card>
      </div>
      <div class="card-container-empty"></div>
    </div>
    <div class="card-container-anchor" @click="handleClick">
      <el-anchor type="underline">
        <el-anchor-link v-for="link in data" :key="link.id" :href="`#part${link.id}`">
          {{ link.h2 }}
        </el-anchor-link>
      </el-anchor>
    </div>
  </div>
</template>

<script setup lang="ts" name="CardContainer">
import { ref } from 'vue';

const containerRef = ref<HTMLElement | null>(null);

function handleClick(e: MouseEvent) {
  e.preventDefault();
}

const data = ref([
  {
    id: 1,
    h2: '制作项目步骤'
  },
  {
    id: 2,
    h2: 'web服务器'
  },
  {
    id: 3,
    h2: 'HTML'
  },
  {
    id: 4,
    h2: '内核'
  },
  {
    id: 5,
    h2: 'Web标准的构成'
  },
  {
    id: 6,
    h2: 'html的文档结构'
  },
  {
    id: 7,
    h2: '常用标签'
  },
  {
    id: 8,
    h2: 'img标签'
  },
  {
    id: 9,
    h2: '滚动标记'
  },
  {
    id: 10,
    h2: '多媒体标记'
  },
  {
    id: 11,
    h2: '超链接标签与锚点链接'
  },
  {
    id: 12,
    h2: '表格'
  },
  {
    id: 13,
    h2: '普通框架(已废弃)'
  },
  {
    id: 14,
    h2: '列表'
  },
  {
    id: 15,
    h2: '表单'
  },
  {
    id: 16,
    h2: '小结'
  },
  {
    id: 17,
    h2: 'HTML5新增语义化标签'
  },
  {
    id: 18,
    h2: 'HTML5新增多媒体标签'
  },
  {
    id: 19,
    h2: 'HTML5新增input类型'
  },
  {
    id: 20,
    h2: '插件地址'
  }
]);
</script>

<style scoped lang="scss">
.card-container {
  display: flex;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .card-container-text {
    flex: 1;
    min-width: 750px;
  }

  .card-container-anchor {
    flex: 0 0 240px;
    margin-left: 60px;
    position: sticky;
    top: 0;
    right: 0;
    padding-bottom: 30px;
    overflow-y: auto;
    & {
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE/Edge */
    }
    &::-webkit-scrollbar {
      display: none; /* Chrome/Safari */
    }
  }
}
.card-container-information {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
  .card-container-logo {
    display: flex;
    font-size: 40px;
    font-weight: 700;
    align-items: center;
    color: $text-primary;
    .card-container-title {
      margin-left: 10px;
    }
  }
  .card-container-introduce {
    color: $text-color-p;
    font-size: 14px;
    width: 100%;
    min-width: 750px;
    text-indent: 2em;
    text-align: justify;
    @include ellipsis-more;
  }
}
.card-container-main {
  position: relative;
  [id^='part'] {
    margin-bottom: 45px;
  }
  .card-container-style {
    i {
      position: absolute;
      top: 10px;
      left: var(--i);
      width: 10px;
      height: 10px;
      border-radius: $bd-radius-circle;
      background-color: var(--color);
    }
  }
  .card-container-content {
    margin-top: 20px;
    font-size: 16px;
    line-height: 2em;
  }
}
// #region  main cardContainerContent text style
.c-content-box {
  margin-left: 20px;
  font-family: $font-family-pla;
  color: $text-card;
  .c-content-h2 {
    position: relative;
    font-size: 24px;
    padding-left: 20px;

    &::before {
      position: absolute;
      top: 6px;
      left: 0;
      content: '';
      display: block;
      width: 4px;
      height: 24px;
      background-color: $text-placeholder;
    }
  }
  p {
    margin-bottom: 10px;
    color: $text-primary;
  }
  ul {
    margin-top: 0;
    margin-bottom: 30px;
    padding-left: 20px;
  }
}

// #endregion main cardContainerContent text style

.card-container-empty {
  width: 100%;
  height: 50px;
}
</style>
