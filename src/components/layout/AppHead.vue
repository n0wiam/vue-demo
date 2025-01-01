<template>
    <el-header>
        <el-icon>
            <DArrowRight  v-show="iscollapse" @click="iscollapse=!iscollapse"/>
            <DArrowLeft v-show="!iscollapse" @click="iscollapse=!iscollapse"/>
        </el-icon>
        <el-dropdown>
        <el-avatar :size="50" :src="myhead"/>
        <template #dropdown>
                <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item divided>Action 5</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </el-header>
</template>

<script lang="ts" setup>
import { iscollapse } from './iscollapse';
const myhead=ref('/src/assets/1.jpg')
</script>

<style lang="scss" scoped>
.el-icon{
    font-size: 40px;
    color: aqua;
}
.el-header{
    display: flex;
    align-items: center;
    background-color: rgb(216.8, 235.6, 255);
}
.el-dropdown{
    margin-left: auto;
}
</style>