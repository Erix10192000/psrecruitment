
$(function(){
    var navPos = $('nav').offset().top;
    $(window).scroll(function(){
        if($(window).scrollTop()>navPos){
            $("nav").css("position","fixed",);
            $("nav").css("background","#082f43",);
        } else {
            $("nav").css("position","static",);
        }
    });
});

$(function(){
    $('#BackTop').click(function(){
        $('html,body').animate({scrollTop:0}, 333);
    });
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300){
            $('#BackTop').fadeIn(222);
        } else {
            $('#BackTop').stop().fadeOut(222);
        }
    }).scroll();
});

$(function() {
    $('#search-box').hide();

    if ($('#search-btn').mouseover(function(){
        $('#search-box').show("slow");
        })
    );

    if ($('button').click(function(){
        $('#search-box').hide("slow");
        })
    );
});

