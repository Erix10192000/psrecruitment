var dataurl = 'https://spreadsheets.google.com/feeds/list/18PqjvE5_hjhXm3h-OjXEXaTgrPlWrDm1O1FwwDt3mYg/2/public/values?alt=json-in-script&callback=?';
    
$.getJSON(dataurl,
    function(json) {
        var e = json.feed.entry,
            n = e.length;

    $(e).each(function() {
    $('.results').append('<li class='+ this.gsx$status.$t +' data-name="' + this.gsx$depart.$t + '"><div class="media1"><div class="dtag">' + this.gsx$time.$t +'</div>'
    + '<span class="status">' + this.gsx$status.$t + '</span>'
    + '<span class="title">' + this.gsx$depart.$t + ' | ' + this.gsx$job.$t + '</span><br>'
    + '<span><label>技能</label>' + this.gsx$tool.$t + '</span>'
    + '<span><label>資歷</label>' + this.gsx$exp.$t + '</span>'
    + '<span><label>測驗</label>' + this.gsx$test.$t + '</span>'
    + '<spanS><label>Contact</label>' + this.gsx$contact.$t + '</span>'
    + '<span><label>HR</label>' + this.gsx$hr.$t + '</span>'
    + '<a class="dlink" target="_blank" href="https://script.google.com/macros/s/AKfycbytdaa_yoZtxqMa5Z9v4w_DI5CeYwFiDS8hEYba42K7JfVGHS3q/exec?id='
    + this.gsx$jid.$t + '"><i class="material-icons">search</i></a></div>');
    })
    
});

$(function(){
    $("button").click(function(){
        var target = $(this).attr("value");
        $("#list li").each(function(){
            $(this).animate({"opacity" : 0}, 300, function(){
                $(this).hide();

                if($(this).hasClass(target) || target == "all"){
                    $(this).show();
                    $(this).animate({"opacity" : 1}, 300);
                }
            });
        });
    });
});

$(function(){
    $("form").submit(function(){
        var target = $("select").first().val();
        $("#list li").each(function(){
            $(this).animate({"opacity" : 0}, 300, function(){
                $(this).hide();

                if($(this).attr('data-name') == target){
                    $(this).show();
                    $(this).animate({"opacity" : 1}, 300);
                } else {

                }
            });
        });
    });
});

$(function(){
	// 點按小圖時
	$("#add-btn").click(function(){
    
        // 在body元素的最後加上div#bg. div#content
        $("body").append('<div id="bg">');
        $("body").append('<div id="content">');  

        // 隱藏圖片預覽器的每個部份
        $("#bg").hide();
        $("#content").hide();

        // 在#content中追加iframe元素
        $("#content").html("<iframe>");
            
        // 設定img元素的src屬性值
        $("#content iframe").attr("src", "form2.htm");
        
        // 設定img元素的width、height、alt屬性
        $("#content iframe").attr("width", 800);
        $("#content iframe").attr("height", 600);

        // 淡入顯示#bg與#photo
        $("#bg").fadeIn();
        $("#content").fadeIn();
        
        // 點按背景區時   
        $("#bg").click(function(){
            // 淡出隱藏背景（自己本身），結束後刪除元素
            $(this).fadeOut(function(){
                $(this).remove();
            });
            
            // 淡出隱藏預覽大圖，結束後刪除元素
            $("#content").fadeOut(function(){
                $(this).remove();
            });    
        });
        return false;
    });
})
