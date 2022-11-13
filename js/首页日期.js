window.addEventListener("DOMContentLoaded", function (){

    var time = "2022-11-14 00:00:00";
    var putTime = +new Date(time);
    var hour = document.querySelector(".hour");
    var minute = document.querySelector(".minute");
    var second = document.querySelector(".second");



    countDown();
    setInterval(countDown, 1000);
    function countDown() {
        var nowTime = +new Date();


        var times = (putTime - nowTime) / 1000;//获得的秒数

        var h = parseInt(times / 60 / 60 % 24);
        h = h < 10 ? '0' + h : h;
        hour.innerHTML = h;
        var m = parseInt(times / 60 % 60);
        m = m < 10 ? '0' + m : m;
        minute.innerHTML = m;
        var s = parseInt(times % 60);
        s = s < 10 ? '0' + s : s;
        second.innerHTML = s;

        console.log(second.innerHTML);

    }
})
