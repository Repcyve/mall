<script setup lang="ts">
import { ref } from "vue";  
const isativ=ref(1)
</script>
<template>
  <div class="body">
    <div class="nav">
      <router-link to="/"><div :class="['li', isativ == 1 ? 'activ' : '']" @click="isativ=1">
        <span>促销管理</span>
      </div></router-link>
      <router-link to="/indexb"> <div :class="['li', isativ == 2 ? 'activ' : '']" @click="isativ=2">
        <span>促销历史记录</span>
      </div></router-link>
       <router-link to="/indexc"><div :class="['li', isativ == 3 ? 'activ' : '']" @click="isativ=3">
        <span>促销商品</span>
      </div></router-link>
      <router-link to="/indexd"> <div :class="['li', isativ == 4 ? 'activ' : '']" @click="isativ=4">
        <span>促销产品分类</span>
      </div></router-link>
    </div>
  </div>
</template>

<style scoped>
.body {
  width: 100vw;
}
.read-the-docs {
  color: #888;
}

.nav {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(93, 114, 251, 0.881);
}

.nav .li {
  margin-left: 10px;
  color: #fff;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
}

.activ {
  font-size: 18px;
  font-weight: bold;
}

.cont {
  width: 100vw;
}
</style>
