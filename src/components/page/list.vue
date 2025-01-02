<template>
    <div class="box">
        <div class="content">
            <!-- <el-button @click="fun">Default</el-button> -->
            <el-scrollbar height="100%">
                <p v-for="item in num" :key="item.name" class="scrollbar-demo-item">
                    <el-card class="car">
                        <el-button>Default</el-button>
                    </el-card>
                </p>
            </el-scrollbar>
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
const num=reactive([{name:"a",age:"b"},{name:"c",age:"d"},{name:"e",age:"b"},{name:"f",age:"b"},{name:"g",age:"b"},])
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    // background-image: url(/src/assets/1.jpg)
    background-color:rgb(180, 180, 180);
}
.content{
    width: 70%;
    height: 100%;
    background-color: #fff;
}
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  //background: var(--el-color-primary-light-9);
  //color: var(--el-color-primary);
}
.car{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>