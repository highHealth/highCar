<template>
    <body>
        <header-bar></header-bar>
        <div class="container">
            <el-card>
                <div class="head">
                    <span>创建您的账户</span>
                </div>
                <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="form">
                    <el-form-item label="账号" prop="username">
                        <el-input v-model="form.username" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="form.password" auto-complete="off" type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="password2">
                        <el-input v-model="form.password2" auto-complete="off" type="password"></el-input>
                    </el-form-item>
                    <el-form-item class="button-container">
                        <el-button type="primary" :loading="regButtonLoading" @click="submit">注册</el-button>
                        <el-button type="default" @click="backlogin">返回登陆</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </div>
    </body>
</template>

<script>
import {setCookie} from '../../../js/setcookie.js'
import axios from 'axios'
import headerBar from "@/components/common/HeaderBar";
export default {
  name:"Registr",
  data(){
      return{
          regButtonLoading:false,
          form:{
              username:'',
              password:'',
              password2:'',
          },
          rules:{
              username:[
                  {required:true,trigger:'blur',validator:(rule,value,callback)=>{
                      if(value==''){
                          callback(new Error('请输入用户名'))
                      }else if(value.length<=4){
                          callback(new Error('用户名大于4个字符'))
                      }
                      callback()
                  }}
              ],
              password:[
                  {required:true,trigger:'blur',validator:(rule,value,callback)=>{
                      if(value==''){
                          callback(new Error('请输入密码'))
                      }else if(value.length<=5){
                          callback(new Error('密码必须大于5个字符'))
                      }
                      callback()
                  }}
              ],
              password2:[
                  {required:true,trigger:'blur',validator:(rule,value,callback)=>{
                      if(value==''){
                          callback(new Error('请输入密码'))
                      }else if(value.length<=5){
                          callback(new Error('密码必须大于5个字符'))
                      }else if(value!=this.form.password){
                          callback(new Error('两次输入密码不一样'))
                      }
                      callback()
                  }}
              ]
          }
      }
      },
      components: {
            headerBar
        },
      methods:{
          submit(){
              this.$refs['form'].validate((valid)=>{
                  if(valid){
                      this.requestReg()
                  }else{
                      return false;
                  }
              })
          },
          requestReg(){
              this.regButtonLoading=true;
              var username=this.form.username;
              var password=this.form.password;
              axios.post('api/user/regist',{
                  username:username,
                  password:password,
              }).then((res)=>{
                  this.regButtonLoading=false;
                    if(1 == res.data){
                        this.$message('用户名已经存在！');
                    }else{
                        this.$message('注册成功！')
                        this.backlogin()
                        }
                    })
            },
          backlogin(){
              this.$router.push({name:'Login'})
          }
      }
}
</script>

<style scoped>
  div.container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin-top: 120px;
  }
  .head {
    display: flex;
    justify-content: center;
  }
  .head span {
    height: 60px;
    line-height: 60px;
    color: #409EFF;
    font-size: 24px;
    font-weight: 700;
  }
  .form {
    width: 400px;
    padding: 20px 50px 20px 0;
  }
  .button-container {
    display: flex;
  }
</style>
