<template>
  <div class="common-layout">
    <el-container>
        <AppAside/>
      <el-container id="head-main">
        <AppHead/>
        <el-main>
          <RouterView/>
          <!-- <el-scrollbar>
            <RouterView/>
          </el-scrollbar> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import AppAside from "./AppAside.vue"
import AppHead from "./AppHead.vue";
</script>

<style lang="scss" scoped>
#head-main{
  height: 100vh;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
}
.el-main{
  margin: 0px;
  padding: 0px;
}
</style>