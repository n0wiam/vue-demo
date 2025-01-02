import { defineStore } from 'pinia'

export const tokenStore = defineStore('mytoken', () => {
  const tokenData= ref("")
  const token=computed(()=>{
    try{
        return tokenData.value||window.localStorage.getItem("tokenInfo")
    }catch(err){
        ElMessage.error("登录出错:token-error")
        window.localStorage.removeItem("tokenInfo")
        throw err
    }
  })
  function saveToken(data:string){
    tokenData.value=data
    window.localStorage.setItem("tokenInfo",data)
  }
  return {token,saveToken}
})