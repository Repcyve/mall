<template>
    <div class="con">
        <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
    </div>
  
</template>

<script lang="ts" setup>
const tableData:object = []
</script>

<style>

</style>   