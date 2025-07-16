<template>
  <div>{{ $t("button.save") }}</div>
  <button @click="toggleDark()">切换</button>
  <button :disabled="locale === 'zh'" @click="handleCommand('zh')">中文</button>
  <button :disabled="locale === 'en'" @click="handleCommand('en')">英文</button>
</template>

<script setup lang="ts" name="HomePage">
import { useDark, useToggle } from "@vueuse/core";
import { ElMessage } from "element-plus";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const isDark = useDark();
const toggleDark = useToggle(isDark);
function handleCommand(lang: string) {
  locale.value = lang;
  localStorage.setItem("lang", lang);
  ElMessage.success({
    message: lang === "zh" ? "语言切换成功" : "Language switched successfully",
    duration: 1500,
  });
}
</script>

<style scoped lang="scss"></style>
