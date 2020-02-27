<template>
  <body>
    <header-bar></header-bar>
    <div class="container">
      <el-card>
        <div class="head">
          <span>请登录</span>
        </div>
        <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="form">
          <el-form-item label="账户" prop="username">
            <el-input v-model="form.username" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="form.password" auto-complete="off" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox id="checkRemember" />记住密码
          </el-form-item>
          <el-form-item class="button-container">
            <el-button type="primary" :loading="loginButtonLoading" @click="submit">登陆</el-button>
            <el-button type="default" @click="goregister">注册</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </body>
</template>

<script>
import { setCookie } from "../../../js/setcookie.js";
import axios from "axios";
//import footerInfo from "@/components/common/FooterInfo";
import headerBar from "@/components/common/HeaderBar";
export default {
  name: "Login",
  data() {
    return {
      loginButtonLoading: false,
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" }
        ]
      }
    };
  },
  components: {
    //footerInfo,
    headerBar
  },
  methods: {
    submit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.requestlogin();
        } else {
          return false;
        }
      });
    },
    requestlogin() {
      this.loginButtonLoading = true;
      var username = this.form.username;
      var password = this.form.password;
      axios
        .post("api/user/login", {
          username: username,
          password: password
        })
        .then(res => {
          this.loginButtonLoading = false;
            if (0 == res.data) {
              // var cookie_name = unescape(setCookie.setInfo().username);
              if (
                (cookie_name != name && name != "" && cookie_name != "") ||
                cookie_name == ""
              ) {
                setCookie.getInfo(self.username, self.password);
                setCookie.rememberPass();
                this.$message("登陆成功");
                //this.$refs.headerBar.showName = false;
                this.$router.push({ name: "Home" });
                //localStorage.setItem('token',res.data.token);
                //this.handleUsername()
                //this.$store.commit('handleUsername',username);
              } else if (
                cookie_name == name &&
                name != "" &&
                cookie_name != ""
              ) {
                self.$message("登陆成功");
              }
            } else if(1 == res.data || 2 == res.data){
              this.showName = true;
              this.$message("用户不存在或者密码错误");
            } 
        })
        .catch(err => {
          console.log(err);
        });
    },
    goregister() {
      this.$router.push({ name: "Registr" });
    }
  }
};
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
  color: #409eff;
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
