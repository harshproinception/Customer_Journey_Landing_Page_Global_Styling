$(document).ready(function () {
    $('html, body, #form1, .runtime-content, .runtime-form').css({
        'background-color': '#F8F5F2',
        'background': '#F8F5F2'
    });

    var $sidebarRow = $('.form .row:has(a[name="Home btn"])');
    var $buttons = $sidebarRow.find('a.SourceCode-Forms-Controls-Web-Button');

    if ($buttons.length && !$buttons.filter('.active-nav').length) {
        $sidebarRow.find('a[name="Add custm btn"]').addClass('active-nav');
    }

    $(document).on('click', '.form .row:has(a[name="Home btn"]) a.SourceCode-Forms-Controls-Web-Button', function () {
        $('.form .row:has(a[name="Home btn"]) a.SourceCode-Forms-Controls-Web-Button').removeClass('active-nav');
        $(this).addClass('active-nav');
    });
});