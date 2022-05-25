
function setNavigation() {
    var path = window.location.pathname;
    path = path.replace(/\/$/, "");
    path = decodeURIComponent(path);

    $(".nav a").each(function() {
        var href = $(this).attr('href');
        // if (path.substring(0, href.length) === href) {
        if (path.includes(href)) {
            $(this).closest('li').addClass('menu_border');
            $(this).next().remove();
        }
    });
}

$('#navheader').load('navheader.html', function(){
    setNavigation();
    $('[data-toggle="tooltip"]').tooltip();
});
$('#navfooter').load('navfooter.html', function(){
    $('#anccookiesettings').click(function(){$('.cky-btn-customize').trigger('click');});
    registerSubscribeEvent();
});