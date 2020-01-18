var setCookie = {
  username: '',
  password: '',
  getInfo: function (name, password) {
    this.username = name
    this.password = password
  },
  addCookie: function (name, value, days, path) {
    var name = escape(name);
    var value = escape(value);
    var expires = new Date();
    expires.setTime(expires.getTime()+days*3600000*24);
    path = path ==''?'':';path='+path;
    var _expires =(typeof days)=="string"?"":";expires="+expires.toUTCString();
    document.cookie=name+'='+value+_expires+path;
  },
  getCookieValue: function (name) {
    var name=escape(name);
    var allcookies=document.cookie;
    name+='=';
    var pos=allcookies.indexOf(name);

    if (pos!=-1) {
      var start=pos+name.length;
      var end=allcookies.indexOf(';',start);
        if(end==-1) end =allcookies.length;
            var value = allcookies.substring(start,end);
            return (value);
        }else{
            return ''
        }
    },
    deleteCookie:function(name,path){
        var name=escape(name);
        var expires=new Date(0);
        path=path==''?'':';path='+path;
        document.cookie=name+'='+';expires='+expires.toUTCString()+path;
    },
    setInfo:function(){
        var usernamevalue=this.getCookieValue('username');
        var passwordvalue=this.getCookieValue('password');
        return{
            username:usernamevalue,
            password:passwordvalue
        }
    },
    rememberPass:function(){
        var username = this.username;
        var password = this.password;
        var objChk=document.getElementById('checkRemember');
        if(objChk.checked){
            this.addCookie('username',username,7,'/');
            this.addCookie('password',password,7,'/');
        }
    }
}
export {
    setCookie
}