<template>
  <ParentLayout>
    <template #page-content-bottom>
      
    </template>
    <template #page-bottom>
      <CommentService :darkmode="isDarkMode" />
    </template>
    <!-- <template #page>
      123
    </template> -->
  </ParentLayout>
</template>
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";

const isDarkMode = ref(false);

let observer;

onMounted(() => {
  console.log(123)
  const html = document.querySelector("html") as HTMLElement;

  isDarkMode.value = html.classList.contains("dark");

  // watch theme change
  observer = new MutationObserver(() => {
    isDarkMode.value = html.classList.contains("dark");
  });

  observer.observe(html, {
    attributeFilter: ["class"],
    attributes: true,
  });
});

onBeforeUnmount(() => {
  observer.disconnect();
});
</script>
