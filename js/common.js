$(document).ready(function(){
    /*GNB*/
    var nav_li = $(".gnb>ul>li");
    var nav_ul = $(".gnb>ul>li>ul");
    var nav_a = $(".gnb > ul > li > a");
    nav_li.on("mouseenter focusin", function(){
        $(this).find(nav_ul).show();
        $(this).find(nav_a).addClass("on");
    });
    nav_li.on("mouseleave focusout", function(){
        $(this).find(nav_ul).hide();
        $(this).find(nav_a).removeClass("on");
    });
    
    /*Top으로 이동*/
    $(".moveup").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });
});
