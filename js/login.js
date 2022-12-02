window.addEventListener('load', function () {
this.alert("用户名：zqy,密码123456");
    var button = document.querySelector('button');
    var inputs = document.querySelectorAll('input');
    var p = document.querySelector('p');
    var div = document.querySelectorAll('div');
    var timer = null;
    var time = 3;
  
    function cutDown() {
    
        p.innerHTML = time + "秒钟之后实行跳转......";
        time--;
        if (time == -1) {
            clearInterval(timer);
            location.href = "HTML/首页.html";
        }
    }
    cutDown();
    button.addEventListener('click', function () {
        if (inputs[0].value == "zqy" && inputs[1].value == "123456") {
           div[1].style.display='none';
           p.style.display="block";
            timer = setInterval(cutDown, 1000);
           
        } else {
            alert("用户名或者密码错误");
        }
    })


})