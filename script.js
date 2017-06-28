function random_color() {
    var rgb = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
    color = '#'  //this is what we'll return!
    for(var i = 0; i < 6; i++) {
        x = Math.floor((Math.random()*16))
        color += rgb[x]; 
    }
    return color;
}

$(document).ready(function() {

    var $large = $("#large_box");
    var $side = $(".side_box");
    var $middle = $(".middle_box");

    $large.click(function() {
        $large.css("background", random_color());
        $side.css("background", random_color());
        $middle.css("background", random_color());
    });

    $('.middle_box').click(function(event){
        event.stopPropagation();
        $large.css("background", random_color());
    });

    $('.side_box').click(function(event){
        event.stopPropagation();
        $(this).siblings().css("background", random_color());
    });

});