$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('#myheader').addClass('newClass');
       $('#myfooter').addClass('newClass2');
    } else {
       $('#myheader').removeClass('newClass');
       $('#myfooter').removeClass('newClass2');
    }
});