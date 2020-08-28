$(function(){
    //获取左右按钮
    var $leftBtn = $("#leftBtn");
    var $rightBtn = $("#rightBtn");
    var $cirs = $("#cirs li");
    //获取移动的容器
    var $carousel = $("#carousel");
    var $imgLis = $carousel.children("li");
    var idx = 0;

    $rightBtn.click(function(){

        $imgLis.removeClass("imgActive");

        $imgLis.eq(idx).addClass('imgActive').css("left",0);
        $carousel.css("left",0);
        idx++
        //边界判定
        if (idx >= 6){
            idx = 0;
        }
        //让下一张图到右边去
        $imgLis.eq(idx).addClass('imgActive').css("left",770);
        //向左走770
        $carousel.animate({left:-770},1000);

        change();
    })

    $leftBtn.click(function(){

        $imgLis.removeClass("imgActive");

        $imgLis.eq(idx).addClass('imgActive').css("left",770);
        idx--
        //边界判定
        if (idx < 0){
            idx = 5;
        }
        //让下一张图到左边去
        $imgLis.eq(idx).addClass('imgActive').css("left",0);
        $carousel.css("left",-770);
        //向右走770
        $carousel.animate({left:0},1000)
        change();
    })

        // 给小圆点绑定事件
        $cirs.each(function (index, value) {
        $(value).click(function () {
            //点击同一张则返回
            if (index === idx) {
                return;
            }
            // 判定当前图片和按钮左右
            if (index > idx) {
                //根据图片左右调整
                $imgLis.removeClass("imgActive");
                $imgLis.eq(idx).addClass('imgActive').css("left", 0);
                $carousel.css("left", 0)
                idx = index;
                $imgLis.eq(idx).addClass("imgActive").css("left", 770)
                $carousel.animate({ left: -770 }, 1000)
            } else {
                $imgLis.removeClass("imgActive");
                $imgLis.eq(idx).addClass("imgActive").css("left", 770);
                idx = index;
                $imgLis.eq(idx).addClass("imgActive").css("left", 0);
                $carousel.css("left", -770).animate({ left: 0 }, 1000);
            }
            change();
        });
    });


    function change() {
        $cirs.each(function (index, value) {
            if (index === idx) {
                $(value).addClass("active");
            } else {
                $(value).removeClass("active");
            }
        })
    }
})