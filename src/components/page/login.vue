<template>
    <div class="login">
        <el-form :model="form" label-position="top" size="large">
            <div class="item">
                <h1>登录</h1>
            </div>
            <el-form-item label="账户名">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password" />
            </el-form-item>
            <div class="item">
                <el-button type="primary" @click="onSubmit" :loading="isLoading">登录</el-button>
                <a style="margin-left: 10px;color: rgb(121.3, 187.1, 255); font-size: small;" href="/">注册新用户</a>
            </div>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import request from '@/utils/request';
import {tokenStore}  from '@/stores/token';
import { useRouter } from 'vue-router';
const router=useRouter()
const isLoading =ref(false)
const store=tokenStore()
const form =reactive({
    name:"",
    password:"",
})

const onSubmit= () => {
   isLoading.value=true
   request.post('/api/user/login',form).then(res=>{
    if(res.data.code==200){
        store.saveToken(res.data.data)
        ElMessage.success("登录成功")
        console.log(store.token)
        router.push("/")
    }
    else{
        ElMessage.error(res.data.errorMessage)
    }
   }).finally(()=>{
    isLoading.value=false
   })
}
</script>

<style lang="scss" scoped>
.login{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ccc;
}
.el-form{
    width: 400px;
    padding: 20px;
    background-color: #eee;
    border-radius: 5px;
}
.item{
    display: flex;
    align-items:end;
    justify-content: center;
}
.el-form-item{
    margin-top: 10px;
}
.el-button{
    width: 300px;
}
</style>