window.addEventListener('load', function () {
    var change = document.querySelector('.change');
    var bgi = document.querySelector('.bgi');
    // 鼠标悬停和离开背景
    change.addEventListener('mouseenter', function () {
        bgi.style.display = "block";
    })
    bgi.addEventListener('mouseenter', function () {
        bgi.style.display = "block";

    })
    change.addEventListener('mouseleave', function () {
        bgi.style.display = "none";
    })
    bgi.addEventListener('mouseleave', function () {
        bgi.style.display = "none";
    })

    var img = document.querySelector('.bgi').querySelectorAll('img');
    for (var i = 0; i < img.length; i++) {
        img[i].onclick = function () {
            document.body.style.backgroundImage = 'url(' + this.src + ')';
        }
    }

})