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
                obj.style.left = obj.offsetLeft - 53 + "px";
            }
        }, 1)
    }

    // 动态生成小圆圈

    var num = 0;
    var cir = 0;

    for (var i = 0; i < ul.children.length; i++) {

        var li = document.createElement('li');
        // 创建的同时设置索引号index
        li.setAttribute('index', i);
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
            console.log("cir = index ==" + index);
            annimate(ul, -index * 530
            );
        })




    }
    ol.children[0].className = "current";

    // 克隆一个图片 现在图片有6个 点有5个
    var li = ul.children[0].cloneNode(true);
    ul.appendChild(li);
    // 右侧按钮 左侧按钮

    var arrowR = document.querySelector(".arrowR");
    var arrowL = document.querySelector(".arrowL");


    arrowR.addEventListener('click', function () {

        if (num == ol.children.length) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        annimate(ul, -num * 530, function () {
            flag = true;
        });
        // 小圆圈跟随着右边按钮跑
        cir++;

        if (cir == ol.children.length) {
            cir = 0;
        }
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
            console.log(" ol.children[i].className = " + ol.children[i].className);

        }

        ol.children[cir].className = "current";
    })
    arrowL.addEventListener('click', function () {

        if (num == 0) {
            num = 5;
            ul.style.left = -num * 530 + 'px';

        }
        num--;
        annimate(ul, -num * 530, function () {
            flag = true;
        });
        cir--;
        if (cir == 0) {
            cir = ol.children.length - 1;
        }
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }

        ol.children[cir].className = "current";
    })
})
