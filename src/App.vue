<script setup lang="ts">
import honeNav from "@/components/home.vue";
</script>
<template>
  <!-- <router-view /> -->
  <el-container v-if="$route.meta.keepAlive">
    <el-header>
      <hone-nav></hone-nav>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<style scoped>
.el-main {
  padding: 0;
}
</style>
