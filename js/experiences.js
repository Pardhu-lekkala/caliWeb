
$(document).ready(function(){
    var path = window.location.href; // window.location.pathname;
    //path = path.replace(/\/$/, "");
    //path = decodeURIComponent(path);
    var doscroll = false;
    if(path.includes('#boat'))
    {
        $('.tabboat').trigger('click');
        doscroll=true;
    }
    else if(path.includes('#helicopter'))
    {
        $('.tabhelicopter').trigger('click');
        doscroll=true;
    }
    else if(path.includes('#tour'))
    {
        $('.tabtour').trigger('click');
        doscroll=true;
    }
    else if(path.includes('#sports'))
    {
        $('.tabsports').trigger('click');
        doscroll=true;
    }
    else if(path.includes('#food'))
    {
        $('.tabfood').trigger('click');
        doscroll=true;
    }
    else if(path.includes('#shopping'))
    {
        $('.tabshopping').trigger('click');
        doscroll=true;
    }
    if(doscroll == true){
    $('html,body').animate({
        scrollTop: $('.tabboat').offset().top-100
      }, 1000);
    }
   
});
