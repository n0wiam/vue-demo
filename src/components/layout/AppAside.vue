<template>
    <el-aside id="aside">
        <el-menu id="menu" router unique-opened col :collapse="iscollapse">
        <a href="/" class="logo">
            <img src="@/assets/logo.svg" alt="">
            <h1>Nowiam</h1>
        </a>
        <el-sub-menu index="1">

            <template #title>
            <el-icon><TurnOff /></el-icon>
            <span>功能一</span>
            </template>

            <el-menu-item index="/tem"><el-icon><ChatLineRound /></el-icon><span>测试1</span></el-menu-item>
        </el-sub-menu>

        <el-menu-item index="/exit"><el-icon><ChatLineRound /></el-icon><span>测试2</span></el-menu-item>

        <el-sub-menu index="2">

            <template #title>
            <el-icon><TurnOff /></el-icon>
            <span>功能二</span>
            </template>

            <el-menu-item class="items"><el-icon><ChatLineRound /></el-icon><span>测试1</span></el-menu-item>
        </el-sub-menu>
      </el-menu>
      <div style="background-color:rgb(177.3, 179.4, 183.6);height: 10%; width: auto;"></div>
    </el-aside>
</template>

<script lang="ts" setup>
import { iscollapse } from './iscollapse';
</script>

<style lang="scss" scoped>
#aside{
    width: auto;
    height: 100vh;
    background-color: #eee;
}
#menu{
    width: 250px;
    height: 90%;
    background-color: #eee;
    border-right: 0;
    &.el-menu--collapse{
        width: 60px;
        h1{
            display: none;
        }
    }
.el-sub-menu{
    background-color: #eee;
}
.el-icon{
    font-size: 50px;
}
.logo{
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: black;
    font-size: larger;
    img{
        width: 50px;
        height: 50px;
    }
}
}
</style>