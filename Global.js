$(document).ready(function () {
    $('html, body, #form1, .runtime-content, .runtime-form').css({
        'background-color': '#F8F5F2',
        'background': '#F8F5F2'
    });

    var $sidebarRow = $('.form .row:has(a[name="Home btn"])');
    var $buttons = $sidebarRow.find('a.SourceCode-Forms-Controls-Web-Button');

    var icons = {
        "Home btn": '<svg class="sidebar-icon" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
        "Add custm btn": '<svg class="sidebar-icon" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>',
        "My custm btn": '<svg class="sidebar-icon" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
        "Project btn": '<svg class="sidebar-icon" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>'
    };

    $buttons.each(function () {
        var btnName = $(this).attr('name');
        if (icons[btnName] && $(this).find('svg.sidebar-icon').length === 0) {
            $(this).prepend(icons[btnName]);
        }
    });

    if ($buttons.length && !$buttons.filter('.active-nav').length) {
        $sidebarRow.find('a[name="Add custm btn"]').addClass('active-nav');
    }

    $(document).on('click', '.form .row:has(a[name="Home btn"]) a.SourceCode-Forms-Controls-Web-Button', function () {
        $('.form .row:has(a[name="Home btn"]) a.SourceCode-Forms-Controls-Web-Button').removeClass('active-nav');
        $(this).addClass('active-nav');
    });

    function formatViewElements() {
        var bannerCell = $('[name="Cell notification"]');
        if (bannerCell.length && !bannerCell.hasClass('custom-banner-container')) {
            bannerCell.addClass('custom-banner-container');
            var welcomeLbl = $('[name="Label_welcome"]');
            var nameLbl = $('[name="Notification_name dlb"]');
            var descLbl = $('[name="NotificationDesc_label"]');
            var btn = $('[name="addcustomer_Btn"]');
            bannerCell.contents().filter(function () { return this.nodeType === 3; }).remove();
            bannerCell.find('span:not([id])').remove();
            var iconHtml = '<div class="banner-icon-wrapper"><svg viewBox="0 0 24 24" width="24" height="24" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg></div>';
            var textWrapper = $('<div class="banner-text-wrapper"></div>');
            var titleWrapper = $('<div class="banner-title"></div>').append(welcomeLbl).append("&nbsp;").append(nameLbl);
            textWrapper.append(titleWrapper).append(descLbl);
            var leftGroup = $('<div class="banner-left-group"></div>').append(iconHtml).append(textWrapper);
            btn.html('<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg><span>Add a customer</span>');
            btn.addClass('custom-btn').removeClass('SFC SourceCode-Forms-Controls-Web-Button');
            bannerCell.empty().append(leftGroup).append(btn);
        }

        var cardsTable = $('[name="Table cards"]');
        if (cardsTable.length && !cardsTable.hasClass('custom-cards-table')) {
            cardsTable.addClass('custom-cards-table');
            function formatCard(cellName, iconSvg, iconBgClass) {
                var cell = $('[name="' + cellName + '"]');
                if (cell.length && !cell.hasClass('custom-card')) {
                    cell.addClass('custom-card');
                    var num = cell.find('.SourceCode-Forms-Controls-Web-DataLabel');
                    var lbl = cell.find('.SourceCode-Forms-Controls-Web-Label');
                    num.addClass('card-number').removeClass('SFC SourceCode-Forms-Controls-Web-DataLabel');
                    lbl.addClass('card-label').removeClass('SFC SourceCode-Forms-Controls-Web-Label');
                    var iconHtml = '<div class="card-icon-wrapper ' + iconBgClass + '">' + iconSvg + '</div>';
                    cell.empty().append(iconHtml).append(num).append(lbl);
                }
            }
            var card1Svg = '<svg viewBox="0 0 24 24" width="20" height="20" stroke="#7A7A7A" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>';
            var card2Svg = '<svg viewBox="0 0 24 24" width="20" height="20" stroke="#B87B41" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>';
            var card3Svg = '<svg viewBox="0 0 24 24" width="20" height="20" stroke="#50935A" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
            formatCard('Cell card1', card1Svg, 'bg-gray');
            formatCard('Cell card2', card2Svg, 'bg-orange');
            formatCard('Cell card3', card3Svg, 'bg-green');
        }
    }

    formatViewElements();
    $(document).ajaxComplete(function () {
        formatViewElements();
    });
});