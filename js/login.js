window.addEventListener('load', function () {
    this.alert("用户名：zqy 密码：123456");
    var button = document.querySelector('.left').querySelector('button');
    var input = document.querySelector('.left').querySelectorAll("input");
    button.addEventListener('click',function(){
        if(input[0].value=="zqy"&&input[1].value=="123456"){
            location.href="HTML/首页.html";
        }else{
            alert('账户或者密码错误');
        }
    })


})