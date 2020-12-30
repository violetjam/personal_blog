
// 地址栏hash值改变
function display_page(url){
    var s="data"+url+".json";

    $.get(s,function(result){
        $.each(result,function(index,obj){
            var html=template("template",obj);
            console.log("display");
            $("#main_template_list").append(html);
        });
    });
}
$(function(){
    var hash=window.location.hash;
    var path = hash.substring(1);
    switch (path) {
        case '/log':
            $("#main_template_list").empty();
            display_page(path);
            $("#writeArticle").show();
            $("#em_log").css("color","#18CFA9");
            $("#em_painter").css("color","#8a8a8a");
            $("#svg_log").css("fill","#18CFA9");
            $("#svg_painter").css("fill","#8a8a8a");
            break;
        case '/painter':    
            $("#main_template_list").empty();
            display_page(path);
            $("#writeArticle").hide();
            $("#em_log").css("color","#8a8a8a");
            $("#em_painter").css("color","#18CFA9");
            $("#svg_painter").css("fill","#18CFA9");
            $("#svg_log").css("fill","#8a8a8a");
            break;
        case '':
            $("#main_template_list").empty();
            path="/log";
            display_page(path);
            $("#writeArticle").show();
            $("#em_log").css("color","#18CFA9");
            $("#em_painter").css("color","#8a8a8a");
            $("#svg_log").css("fill","#18CFA9");
            $("#svg_painter").css("fill","#8a8a8a");
            break;    
      }
});
window.onhashchange = function() {
    var hash = window.location.hash;
    var path = hash.substring(1);
    switch (path) {
        case '/log':
            $("#main_template_list").empty();
            display_page(path);
            $("#writeArticle").show();
            $("#em_log").css("color","#18CFA9");
            $("#em_painter").css("color","#8a8a8a");
            $("#svg_log").css("fill","#18CFA9");
            $("#svg_painter").css("fill","#8a8a8a");
            break;
        case '/painter':    
            $("#main_template_list").empty();
            display_page(path);
            $("#writeArticle").hide();
            $("#em_log").css("color","#8a8a8a");
            $("#em_painter").css("color","#18CFA9");
            $("#svg_painter").css("fill","#18CFA9");
            $("#svg_log").css("fill","#8a8a8a");
            break;
        case '':
            $("#main_template_list").empty();
            path="/log";
            display_page(path);
            $("#writeArticle").show();
            $("#em_log").css("color","#18CFA9");
            $("#em_painter").css("color","#8a8a8a");
            $("#svg_log").css("fill","#18CFA9");
            $("#svg_painter").css("fill","#8a8a8a");
            break;    
      }
};