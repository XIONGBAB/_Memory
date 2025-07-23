<template>
  <div class="container">
    <div class="bg-gray">
      <div class="home-box">
        <template v-for="item in items" :key="item.id">
          <div :class="item.class">
            <template v-if="item.children">
              <template v-for="child in item.children" :key="child.id">
                <div :class="child.class">
                  <template v-if="child.children">
                    <template v-for="c in child.children" :key="c.id">
                      <div
                        v-if="c.class === 'home-item-avatar'"
                        :class="c.class"
                      ></div>
                      <h1 v-if="c.class === 'home-item-h1'" @click="goToHome">
                        {{ $t(c.content || "") }}
                      </h1>
                      <p v-if="c.class === 'home-item-h2'">
                        {{ $t(c.content || "") }}
                      </p>
                    </template>
                  </template>
                </div>
              </template>
            </template>
          </div>
        </template>
        <div class="home-item-b9">
          <div class="home-item-dev">
            <i></i>
            <p>
              {{ $t("home.time") }}
            </p>
          </div>
          <div class="home-item-translate" @click="toggleLang">
            <svg
              t="1752840639519"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6708"
              width="32"
              height="32"
            >
              <path
                d="M863.288889 861.866667c22.755556 0 38.4-24.177778 29.866667-45.511111L743.822222 465.066667c-14.222222-34.133333-64-34.133333-78.222222 0L516.266667 816.355556c-8.533333 21.333333 7.111111 45.511111 29.866666 45.511111 12.8 0 25.6-8.533333 29.866667-19.911111l38.4-96.711112h179.2l38.4 96.711112c5.688889 11.377778 17.066667 19.911111 31.288889 19.911111zM637.155556 686.933333l66.844444-169.244444 66.844444 169.244444h-133.688888zM583.111111 291.555556h85.333333c15.644444 0 28.444444-12.8 28.444445-28.444445s-12.8-28.444444-28.444445-28.444444H440.888889v-44.088889c0-15.644444-12.8-28.444444-28.444445-28.444445s-28.444444 12.8-28.444444 28.444445v44.088889H156.444444c-15.644444 0-28.444444 12.8-28.444444 28.444444s12.8 28.444444 28.444444 28.444445h366.933334c-9.955556 32.711111-22.755556 64-38.4 95.288888-19.911111 38.4-45.511111 72.533333-73.955556 103.822223h-5.688889c-9.955556-11.377778-29.866667-31.288889-51.2-62.577778-8.533333-12.8-17.066667-25.6-24.177777-39.822222-5.688889-9.955556-14.222222-15.644444-25.6-15.644445-21.333333 0-35.555556 22.755556-25.6 42.666667 8.533333 15.644444 17.066667 31.288889 27.022222 45.511111 19.911111 29.866667 38.4 49.777778 52.622222 65.422222l8.533333 8.533334-157.866666 159.288888c-11.377778 11.377778-11.377778 28.444444 0 39.822223 11.377778 11.377778 28.444444 11.377778 39.822222 0l157.866667-157.866667c24.177778 25.6 51.2 52.622222 79.644444 79.644444 14.222222 14.222222 39.822222 8.533333 46.933333-9.955555 4.266667-9.955556 1.422222-22.755556-7.111111-31.288889-28.444444-27.022222-54.044444-54.044444-78.222222-79.644444 34.133333-36.977778 64-78.222222 88.177778-122.311112 19.911111-38.4 35.555556-78.222222 46.933333-120.888888z"
                p-id="6709"
                fill="#B2B2B2"
              />
            </svg>
          </div>
          <div class="home-item-switch" @click="toggleDark()">
            <el-switch
              v-model="value2"
              inline-prompt
              style="
                --el-switch-on-color: rgba(218, 218, 218, 0.4);
                --el-switch-off-color: rgba(77, 77, 77, 0.4);
              "
              active-icon="Sunny"
              inactive-icon="Moon"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="HomePage">
import { useDark, useToggle } from '@vueuse/core';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

// change button
const value2 = ref(false);

// toggle theme
const isDark = useDark();
const toggleDark = useToggle(isDark);
const changeTheme = computed(() =>
  isDark.value ? 'var(--bg-black)' : 'var(--bg-white)'
);
const changeColor = computed(() =>
  isDark.value ? 'var(--text-white)' : 'var(--text-black)'
);
const bgColor = computed(() =>
  isDark.value ? 'var(--bg-transparent)' : 'var(--bg-gray)'
);

// link router
const router = useRouter();
function goToHome() {
  router.push('/doc');
}

// toggle language
const { locale } = useI18n();
const targetLang = computed(() => (locale.value === 'en' ? 'zh' : 'en'));

function toggleLang() {
  const newLang = targetLang.value;
  locale.value = newLang;
  localStorage.setItem('lang', newLang);
}

interface Item {
  id: number;
  class: string;
  content?: string;
  children?: Item[];
}
// forEach item
const items = ref<Item[]>([
  { id: 1, class: 'home-item-b1' },
  { id: 2, class: 'home-item-b2 home-item-circle' },
  { id: 3, class: 'home-item-b3' },
  { id: 4, class: 'home-item-b4' },
  {
    id: 5,
    class: 'home-item-b5 home-item-circle',
    children: [
      { id: 1, class: 'home-item-b5-1' },
      {
        id: 2,
        class: 'home-item-b5-2',
        children: [{ id: 1, class: 'home-item-avatar' }]
      },
      { id: 3, class: 'home-item-b5-3' },
      {
        id: 4,
        class: 'home-item-b5-4',
        children: [
          {
            id: 1,
            class: 'home-item-h1',
            content: 'home.title'
          },
          {
            id: 2,
            class: 'home-item-h2',
            content: 'home.introduce'
          }
        ]
      }
    ]
  },
  { id: 6, class: 'home-item-b6' },
  { id: 7, class: 'home-item-b7' },
  { id: 8, class: 'home-item-b8' }
]);
</script>

<style scoped lang="scss">
.bg-gray {
  width: inherit;
  height: inherit;
  background: v-bind(bgColor);
  border-radius: $bd-radius-xl;
  padding: $spacing-2xl;
  transition: all 0.3s ease-in-out;
}
.home-box {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(24, 1fr);
  background-color: v-bind(changeTheme);
  border-radius: $bd-radius-xl;
}
.home-item-circle {
  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(-58%, 58%);
    width: 8px;
    height: 8px;
    background: $bd-gray;
    border-radius: $bd-radius-circle;
    box-shadow: $box-shadow-white;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(58%, 58%);
    width: 8px;
    height: 8px;
    background: $bd-gray;
    border-radius: $bd-radius-circle;
    box-shadow: $box-shadow-white;
    z-index: 1;
  }
}
.home-item-b1,
.home-item-b2,
.home-item-b3 {
  grid-row: span 2;
  border-right: 1px dashed $bd-line;
  border-bottom: 1px dashed $bd-line;
  grid-column: span 4;
}
.home-item-b2 {
  position: relative;
  grid-column: span 16;
}
.home-item-b3 {
  border-right: none;
}

.home-item-b4,
.home-item-b5,
.home-item-b6 {
  grid-row: span 16;
  border-right: 1px dashed $bd-line;
  grid-column: span 4;
}
.home-item-b5 {
  position: relative;
  grid-column: span 16;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);

  .home-item-b5-1,
  .home-item-b5-2,
  .home-item-b5-3 {
    grid-row: span 6;
    grid-column: span 4;
  }

  .home-item-b5-1 {
    border-right: 1px dashed $bd-line;
    border-bottom: 1px dashed $bd-line;
    border-radius: 0 0 $bd-radius-xl 0;
  }

  .home-item-b5-2 {
    grid-column: span 4;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .home-item-b5-3 {
    border-left: 1px dashed $bd-line;
    border-bottom: 1px dashed $bd-line;
    border-radius: 0 0 0 $bd-radius-xl;
  }

  .home-item-b5-4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-row: span 6;
    grid-column: span 12;
    overflow: hidden;
    h1 {
      font-size: 96px;
      font-family: $font-family-mer;
      color: v-bind(changeColor);
      margin: 0;
      font-weight: 400;
      cursor: pointer;
      transition: all $transition-base;
    }
    p {
      font-size: 24px;
      font-family: $font-family-sha;
      color: $text-placeholder;
      width: 60%;
      text-align: center;
      line-height: 1.2em;
    }
  }
}
.home-item-b6 {
  border-right: none;
}
.home-item-avatar {
  position: relative;
  min-width: 140px;
  width: 140px;
  height: 140px;
  background: url('@/assets/images/avatar.png') no-repeat center center;
  background-size: 85%;
  border-radius: $bd-radius-circle;
  box-shadow: 0 0 0 2px $bd-white;
  transition: all $transition-base;
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid $bd-light;
    border-radius: $bd-radius-circle;
  }
}
.home-item-b7 {
  grid-row: span 2;
  grid-column: span 24;
  border-top: 1px dashed $bd-line;
  border-bottom: 1px dashed $bd-line;
}
.home-item-b8,
.home-item-b9 {
  grid-row: span 4;
  grid-column: span 12;
}
.home-item-b8 {
  position: relative;
  border-right: 1px dashed $bd-line;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(58%, -58%);
    width: 8px;
    height: 8px;
    background: $bd-gray;
    border-radius: $bd-radius-circle;
    box-shadow: $box-shadow-white;
  }
}
.home-item-b9 {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 20px;
  color: $text-placeholder;
  font-size: $text-base;
  text-transform: uppercase;
  overflow: hidden;
}
.home-item-dev {
  display: flex;
  align-items: center;
  white-space: nowrap;
  transition: all $transition-base;
  i {
    width: 60px;
    border-bottom: 1px solid $bd-line;
    margin-right: 20px;
  }
}
.home-item-translate {
  margin: 0 20px 12px 20px;
  cursor: pointer;
  transition: all $transition-base;
  &:hover {
    background: v-bind(changeColor);
    border-radius: $bd-radius-circle;
    overflow: hidden;
  }
}
.home-item-switch {
  width: 100px;
  margin-bottom: 12px;
}

// media screen
@media (max-width: 767px) {
  .container {
    .home-box {
      .home-item-b5-3,
      .home-item-b5-1 {
        grid-row: span 1;
        grid-column: span 1;
        opacity: 0;
      }
      .home-item-b5-2 {
        grid-row: span 4;
        grid-column: span 12;
        .home-item-avatar {
          transform: scale(1.5);
        }
      }
      .home-item-b5-4 {
        grid-row: span 4;
        p {
          width: 80%;
        }
        h1 {
          font-size: $text-4xl;
        }
      }
      .home-item-b9 {
        .home-item-dev {
          display: none;
        }
      }
    }
  }
}
@media (min-width: 576px) {
  .container {
    .home-box {
      .home-item-b5-4 {
        grid-row: span 6;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .container {
    .home-box {
      .home-item-b5-4 {
        grid-row: span 6;
        p {
          width: 80%;
        }
        h1 {
          font-size: $text-4xl;
        }
      }
      .home-item-b9 {
        .home-item-dev {
          overflow: hidden;
          opacity: 0;
        }
      }
    }
  }
}
@media screen and (min-width: 992px) {
  .container {
    .home-box {
      .home-item-b5-4 {
        h1 {
          font-size: 64px;
        }
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  .container {
    .home-box {
      .home-item-b9 {
        .home-item-dev {
          overflow: visible;
          opacity: 1;
        }
      }
    }
  }
}
@media screen and (min-width: 1400px) {
  .container {
    .home-box {
      .home-item-b5-4 {
        p {
          width: 60%;
        }
        h1 {
          font-size: 96px;
        }
      }
    }
  }
}
</style>
