var dataurl = 'https://spreadsheets.google.com/feeds/list/18PqjvE5_hjhXm3h-OjXEXaTgrPlWrDm1O1FwwDt3mYg/1/public/values?alt=json-in-script&callback=?';

$.getJSON(dataurl,
    function(json) {
        var e = json.feed.entry,
            n = e.length;

        $(e).each(function() {
            $('.results').append('<li class='+ this.gsx$status.$t +' data-name="' + this.gsx$name.$t + '" data-phone="' + this.gsx$phone.$t + '" data-mail="' + this.gsx$email.$t +'"><div class="media"><div class="media-left"><img src=' 
            + this.gsx$photo.$t + '></img></div><div class="media-body"><h2>' + this.gsx$name.$t +'</h2><p>' +  this.gsx$depart.$t + '  |  ' + this.gsx$job.$t 
            + '</p><p>面試日期:' + this.gsx$date.$t + this.gsx$time.$t + '</p><span class="dtag">' + this.gsx$createtime.$t + '</span><a class="dlink" target="_blank" href="https://script.google.com/macros/s/AKfycbwJ2MWWAquVH-XwEuQTrwubgfw-Jz8BDHUO7LDyfDU/dev?id=' 
            + this.gsx$id.$t+ '"> <i class= material-icons >search</i> </a></div></div></li>');
        });
    }
);

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
        var target = $("input").first().val();
        $("#list li").each(function(){
            $(this).animate({"opacity" : 0}, 300, function(){
                $(this).hide();

                if($(this).attr('data-name') == target || $(this).attr('data-phone') == target || $(this).attr('data-mail') == target){
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
        $("#content iframe").attr("src", "form.htm");
        
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



