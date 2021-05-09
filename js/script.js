$(document).ready(function () {
    $(window).scroll(function (event) { 
        var pos_body = $('html,body').scrollTop();
        //console.log(pos_body);
        if(pos_body>20){
            $('#nav').addClass('co-dinh-menu');
        }
        else {
            $('#nav').removeClass('co-dinh-menu');
        }
    });
});
