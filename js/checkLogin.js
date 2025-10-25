function check(){
            var password = "666";
            var temPassword = login_form.lpasswd.value;

            if(password==temPassword){
                window.location.href="lanqiao.html";
                alert("登录成功!");
                window.event.returnValue=false;
                // window.location.href="lanqiao.html";
                // location.href="lanqiao.html"
            }else{
                alert("用户名或密码错误!");
             }
        }  