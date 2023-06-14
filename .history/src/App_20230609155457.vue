<script setup lang="ts">
	
</script>

<template>
  <!-- <router-view /> -->
  <router-view v-wechat-title="$route.meta.title" />
  <div class="Mysql">
    <div v-for="it in new Array "></div>
  </div>
</template>

 
<style scoped>

</style>
