<template>
    <div class="box">
        <div class="content">
            <el-button @click="fun">Default</el-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import request from '@/utils/request';
function fun(){
    const data={name:"nowiam",password:"030321"}
    request.post('/api/user/login',data).then(res=>{
        alert(res.data.data);
    })
}
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    // background-image: url(/src/assets/1.jpg)
    background-color: #eee;
}
.content{
    width: 70%;
    height: 100%;
    background-color: aqua;
}
</style>