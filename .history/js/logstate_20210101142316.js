function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires;
  }
  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim(); //trim()去除字符串两侧的空白字符
      if (c.indexOf(name) == 0) {
        console.log("index");
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  function delCookie(name)
  {
      var d = new Date();
      d.setTime(d.getTime() - 1);
      var cval=getCookie(name);
      if(cval!=null) {
        document.cookie= name + "="+cval+";expires="+d.toGMTString();
        console.log("3");
      }
  }
  function checkCookies() {
    var user = getCookie("username");
    if (user != "") {
      showuser();
      console.log("1");
    }else{
      console.log("2");
      var user2=document.getElementById("user");
      var option=document.createElement("div");
      option.setAttribute("id","option");
      option.innerHTML="登录  |  注册";
      var sign=document.createElement("a");
      sign.setAttribute("id","sign");
      sign.setAttribute("href","signin.html");
      sign.appendChild(option);
      user2.appendChild(sign);
    }
  }
  function showuser(){
      var user=document.getElementById("user");
      var avatar=document.createElement("div");
      var img=document.createElement("img");
      var option=document.createElement("div");
      var url=window.location.pathname;
      if(url!="./index.html"){
        var nav=document.getElementById("nav_left_list");
        var write=document.createElement("li");
        var a=document.createElement("a");
        var btn=document.createElement("button");
        btn.setAttribute("type","write");
        btn.innerHTML="写博文";
        a.setAttribute("href","write.html");
        a.setAttribute("name","link");
        write.setAttribute("id","write");
        a.appendChild(btn);
        write.appendChild(a);
        nav.appendChild(write);
      }
      option.setAttribute("id","option");
      option.setAttribute("onclick","exit();");
      option.innerHTML="登出";
      avatar.setAttribute("id","avatar");
      img.setAttribute("src","img/avatar.jpg");
      avatar.appendChild(img);
      user.appendChild(avatar);
      user.appendChild(option);
  }
  function exit(){
      var user=document.getElementById("user");
      delCookie("username");
      var url=window.location.pathname;
      if(url!="/index.html"&&url!="/blog/index.html"){
        document.getElementById("write").remove();
      }
      document.getElementById("option").remove();
      document.getElementById("avatar").remove();
      var option=document.createElement("div");
      option.setAttribute("id","option");
      option.innerHTML="登录  |  注册";
      var sign=document.createElement("a");
      sign.setAttribute("id","sign");
      sign.setAttribute("href","signin.html");
      sign.appendChild(option);
      user.appendChild(sign);
  }