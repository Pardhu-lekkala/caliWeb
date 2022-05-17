
$(document).ready(function(){
    var path = window.location.href; // window.location.pathname;
    //path = path.replace(/\/$/, "");
    //path = decodeURIComponent(path);
    var doscroll = false;
    if(path.includes('#Suites'))
    {
        $('.tabsuites').trigger('click');
        doscroll=true;
    }
    else if(path.includes('#Villas'))
    {
        $('.tabvillas').trigger('click');
        doscroll=true;
    }
    else if(path.includes('#CaliCollection'))
    {
        $('.tabcalicollections').trigger('click');
        doscroll=true;
    }
    else if(path.includes('#Overview')) 
    {
        $('.taboverview').trigger('click');
        doscroll=true;
    }
    if(doscroll == true){
    $('html,body').animate({
        scrollTop: $('.tabsuites').offset().top-100
      }, 1000);
    }
});



