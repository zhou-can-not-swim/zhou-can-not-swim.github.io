window.addEventListener('load', function () {

    var ul = document.querySelector('ul');
    var ol = document.querySelector('ol');

    function annimate(obj, target) {
        obj.timer = setInterval(function () {

            if (obj.offsetLeft == target) {
                clearInterval(obj.timer);
            } else if (obj.offsetLeft < target) {
                obj.style.left = obj.offsetLeft + 53 + "px";
            } else if (obj.offsetLeft > target) {
                obj.style.left = obj.offsetLeft - 53 +"px";
            }
        }, 1)
    }

    // 动态生成小圆圈
    var num = 0;
    var cir = 0;

    //五张图片ul中5个li
    // console.log(ul.children.length);5
    for (var i = 0; i < ul.children.length; i++) {

        var li = document.createElement('li');
        // 创建的同时设置索引号index
        li.setAttribute('index', i);
        // index从0到4，是ol中的
        ol.appendChild(li);

        // 点击小圆圈变色
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = "current";
            var index = this.getAttribute('index');
            // console.log(index);
            //    点击小圆圈滚动图片
            // console.log(index);
            num = index;
            cir = index;

            annimate(ul, -index * 530
            );
        })

    }
    ol.children[0].className = "current";
    // console.log(ol.children.length);5·
    // 克隆一个图片 现在图片有6个 点有5个
    var li = ul.children[0].cloneNode(true);

    ul.appendChild(li);
    // 右侧按钮 左侧按钮
    // console.log(li);克隆了第一张图片，放在了第五张后面


    var arrowR = document.querySelector(".arrowR");
    var arrowL = document.querySelector(".arrowL");


    arrowR.addEventListener('click', function () {
        if (num == 5) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        if (num == 5) {
            cir = -1;
        }
        cir++;

        annimate(ul, -num * 530);
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[cir].className = "current"
    })
    arrowL.addEventListener('click', function () {
        if (num == 0) {
            ul.style.left = -5 * 530 + 'px';
            num=5;
        }
        num--;
      if(num==4){
        cir=5;
      }
        cir--;

        annimate(ul, -num * 530);
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[cir].className = "current"

    })
    //自动播放功能
    // var timer = setInterval(function(){
    //     arrowR.click();
        
    // },3000)
    // var top = document.querySelector('.top');
    // top.addEventListener('mouseenter',function(){
    //     clearInterval(timer);
    // })
    // top.addEventListener('mouseleave',function(){
    //     timer = setInterval(function(){
    //         arrowR.click();
    //     },3000)
    // })
})


