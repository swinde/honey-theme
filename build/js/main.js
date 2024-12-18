/**
 * This file is part of O3-Shop.
 *
 * O3-Shop is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, version 3.
 *
 * O3-Shop is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with O3-Shop.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @copyright  Copyright (c) 2022 OXID eSales AG (https://www.oxid-esales.com)
 * @copyright  Copyright (c) 2022 O3-Shop (https://www.o3-shop.com)
 * @license    https://www.gnu.org/licenses/gpl-3.0  GNU General Public License 3 (GPLv3)
 */
/* Windows Phone viewport fix */
(function () {
    if ("-ms-user-select" in document.documentElement.style && navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(
            document.createTextNode("@-ms-viewport{width:auto!important}")
        );
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
    }
})();

Wave = {};

// Short-Handle for document.ready
$(function () {
        var $window = $(window),
            $oBody = $('body'),
            $oHeader = $('#header'),
            $oBasketList = $('#basket_list'),
            $oToTop = $('#jumptotop'),
            $oRecommendations = $('#econdaRecommendations'),
            $oChangeEmail = $('input.oxValidate_enterPass'),
            $oSearchInput = $('#searchParam'),
            iHeaderWrapperHeight = parseInt($oHeader.height()),
            blIsCheckout = $oBody.hasClass('is-checkout'),
            $oContentWrapper = $("#content");

        // Mobile detection
        window.isMobileDevice = function () {
            var check = false;
            (function (a) {
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
                    check = true;
                }
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        };

        // Scrolling header
        $window.on('scroll', function (e) {
                var $this = $(this);
                var $mainNav = $('#mainnav');

                if (!blIsCheckout && !(isMobileDevice() && $oSearchInput.is(':focus'))) {
                    if ($this.scrollTop() > iHeaderWrapperHeight) {
                        if (!$oBody.hasClass('fixed-header')) {
                            $oBody.addClass('fixed-header');

                            this.setTimeout(function () {
                                    $mainNav.addClass('fadeIn');
                                },
                                100
                            );
                        }
                    }
                    else {
                        if ($oBody.hasClass('fixed-header')) {
                            $oBody.removeClass('fixed-header');
                            $mainNav.removeClass('fadeIn');
                        }
                    }
                }

                $oToTop.toggleClass('show', $this.scrollTop() >= 300);
            }
        ).trigger('scroll');
        // Search Toggle
        $('.search-toggle').click(function (e) {
                e.preventDefault();

                $('html, body').animate(
                    {
                        scrollTop: ($oSearchInput.position().top - 10 || 0)
                    },
                    300,
                    function () {
                        $oSearchInput.focus();
                    }
                );
            }
        );

        // leere Suche verhindern
        $('#searchSubmit').click(function (e) {
            $('#searchParam').val($('#searchParam').val().trim());
            if ($('#searchParam').val().length > 0) {
                $('#searchForm').submit();
            }
        });
        $('#searchParam').keydown(function (e) {
            if (e.keyCode === 13) {
                $('#searchParam').val($('#searchParam').val().trim());
                if ($('#searchParam').val().length === 0) {
                    e.preventDefault();
                }
            }
        });

        // Unveil beim Wechsel eines Tabs durchführen
        $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
                $(this.getAttribute('href')).find('img').unveil();
            }
        );

        $oToTop.click(function () {
                $('html, body').animate(
                    {
                        scrollTop: 0
                    },
                    300
                );
            }
        );

        // Fix um Eingabefelder in Bootstrap Dropdown-Menüs fokussieren zu können.
        $('#header .dropdown-menu input, #header .dropdown-menu label, #header .dropdown-menu button, #header .dropdown-menu').click(function (e) {
                e.stopPropagation();
            }
        );

        $('.nav').on('mouseenter', '.nav-item.dropdown', function (e) {
                if ($window.width() >= 760) {
                    $(e).addClass('show');
                    $(this).children('.dropdown-menu').addClass('show');
                    var $elRight = ($(this).children('.dropdown-menu').offset().left + $(this).children('.dropdown-menu').width());
                    var $winWidth = $(window).outerWidth();
                    if ($elRight > $winWidth) {
                        $(this).children('.dropdown-menu').css({
                            'left': $winWidth - $elRight - 15,
                        });
                    }
                }
            }
        ).on('mouseleave', '.nav-item.dropdown', function (e) {
                if ($window.width() >= 760) {
                    $(e).removeClass('show');
                    $(this).children('.dropdown-menu').removeClass('show');
                }
            }
        ).on('click', 'li.dropdown', function (e) {
                if ($window.width() >= 760) {
                    e.stopPropagation();
                }
            }
        );


        $oHeader.find('.menu-dropdowns button[data-bs-href]').click(function (e) {
                var $this = $(this);

                if ($(window).width() <= 767) {
                    e.stopPropagation();
                    document.location.href = $this.attr('data-bs-href');
                }
            }
        );


        if ($oRecommendations.length) {
            $.get(window.sBaseUrl + 'cl=tpl&tpl=ajax_econda_recommendations.tpl&actcl=' + sActCl + '', function (oData, sStatus, oXhr) {
                    $oRecommendations.html(oData);
                    $oRecommendations.find('img').unveil();
                }
            );
        }

        /* *********************************
         * List filter
         * *********************************/
        var $oFilterList = $('#filterList');

        if ($oFilterList.length) {
            $oFilterList.find('.dropdown-menu li').click(function () {
                    var $this = $(this);
                    $this.parent().prev().val($this.children().first().data('selection-id'));
                    $this.closest('form').submit();
                }
            );
        }

        var $oSidebar = $('#sidebar'),
            $oCategoryBox = $oSidebar.find('.box.categorytree');
        if ($oCategoryBox.length) {
            $oCategoryBox.find('.toggleTree').on('click touch', function () {
                    var $this = $(this),
                        $oCategoryTreeBox = $this.parents('.categorytree').find('.categoryBox');

                    if ($this.hasClass('fa-caret-down')) {
                        $this.removeClass('fa-caret-down');
                        $this.attr('class', 'fa-caret-up ' + $this.attr('class'));
                        $oCategoryTreeBox.attr('style', 'display:block!important');
                    }
                    else {
                        $this.removeClass('fa-caret-up');
                        $this.attr('class', 'fa-caret-down ' + $this.attr('class'));
                        $oCategoryTreeBox.removeAttr('style');
                    }
                }
            );
        }

        /* *********************************
         * Variant selection in lists
         * *********************************/
        var $oSelectionLists = $('.listDetails .selectorsBox');

        if ($oSelectionLists.length) {
            $oSelectionLists.find('.dropdown-menu li').click(function (e) {
                    e.preventDefault();
                    var $this = $(this);
                    $this.parent().prev().val($this.children().first().data('selection-id'));
                    $this.closest('form').submit();
                }
            );
        }


        /* *********************************
         * Details page
         * *********************************/
        Wave.initEvents = function () {
            // Lazy Loading für Bilder
            $("img").unveil();

            // Globale Tooltip-Klasse
            $('.hasTooltip').tooltip({container: 'body'});

            // Globale PopOver-Klasse
            $('.hasPopover').popover();

            // Selectlisten Detail
            var $oSelectionLists = $('#detailsMain .selectorsBox');

            if ($oSelectionLists.length) {
                $oSelectionLists.find('.dropdown-menu li').click(function (e) {
                        e.preventDefault();
                        var $this = $(this),
                            $a = $this.children().first(),
                            $ul = $this.parent();

                        $ul.prev().val($a.data('selection-id'));

                        // classes
                        $ul.find('a.active').removeClass('active');
                        $a.addClass('active');

                        // label
                        $ul.prev().prev().find('span').first().text($a.text());
                    }
                );
            }
        };
        Wave.initEvents();

        function reRenderMainNav() {
            var $oMainNav = $('#mainnav').find('.navbar-collapse'),
                $oNavList = $('#navigation'),
                $oMoreLinks = $oNavList.find('.moreLinks');

            // Abbrechen, wenn Fensterbreite <= 767
            if ($window.width() <= 755) {
                $oMoreLinks.before($oMoreLinks.find('> ul > li'));
                $oMoreLinks.remove();
                return;
            }

            if ($oMoreLinks.length) {
                $oMoreLinks.before($oMoreLinks.find('> ul > li'));
            }
            else {
                var oMoreLinkElem = document.createElement('li'),
                    oMoreLinkAElem = document.createElement('a'),
                    oMoreLinkUlElem = document.createElement('ul');

                oMoreLinkElem.className = 'dropdown moreLinks nav-item';

                oMoreLinkAElem.className = 'dropdown-toggle nav-link';
                oMoreLinkAElem.innerHTML = oWave.i18n.NAV_MORE + ' <i class="fa fa-angle-down"></i>';
                oMoreLinkAElem.setAttribute('data-bs-toggle', 'dropdown');

                oMoreLinkUlElem.className = 'dropdown-menu';
                oMoreLinkUlElem.setAttribute('role', 'menu');

                oMoreLinkElem.appendChild(oMoreLinkAElem);
                oMoreLinkElem.appendChild(oMoreLinkUlElem);

                $oNavList.append(oMoreLinkElem);
                $oMoreLinks = $(oMoreLinkElem);
            }

            var iMainNavWidth = $oMainNav.width() - $('#navbarSupportedContent > .fixed-header-actions').width(),
                $oNavItems = $oNavList.find('> li').not('.moreLinks'),
                iNavItemsWidth = 0,
                aMoreLinkElems = [];

            iMainNavWidth -= $oMoreLinks.width();

            $oNavItems.each(function () {
                    var $this = $(this);
                    iNavItemsWidth += $this.outerWidth();

                    if (iNavItemsWidth > iMainNavWidth) {
                        $this.attr('class', 'dropdown-item');
                        $this.find('.nav-link').attr('class', 'dropdown-link');
                        aMoreLinkElems.push($this);
                    }
                }
            );

            if (aMoreLinkElems.length) {
                $oMoreLinks.find('> ul').append(aMoreLinkElems);
            }
            else {
                $oMoreLinks.remove();
            }
        }

        reRenderMainNav();
        $window.resize(function () {
            reRenderMainNav();
        });

        /* *********************************
         * Warenkorb
         * *********************************/
        if ($oBasketList.length) {
            $('#basket_form').on('submit', function (e) {
                    var $this = $(this),
                        $oHiddenXs = $this.find('.hidden-xs'),
                        $oVisibleXs = $this.find('.visible-xs');

                    if ($oHiddenXs.is(':hidden')) {
                        $oHiddenXs.remove();
                    }

                    if ($oVisibleXs.is(':hidden')) {
                        $oVisibleXs.remove();
                    }

                    //e.target.submit();
                }
            );

            if ($window.width() <= 996) {
                $oBasketList.find('.toggle-actions').click(function (e) {
                        e.preventDefault();
                        var $this = $(this),
                            $oToggable = $this.parents('li').first().find('.row.collapse');
                        $this.find('i').attr('class', ($oToggable.hasClass('.show') ? 'fa fa-chevron-up' : 'fa fa-chevron-down'));
                    }
                );
            } else {

            }
        }

        // Auswahllisten im Warenkorb
        $('.basketItemDesc .selectorsBox .dropdown-menu li a', $oContentWrapper).click(function (e) {
                e.preventDefault();
                var $this = $(this);
                $this.closest('.selectbox').removeClass('open');
                $this.parent().parent().prev().val($this.attr('data-bs-selection-id'));
                $this.parent().parent().prev().siblings('button').find('span').first().text($this.text());
            }
        );

        /* *********************************
         * Mein Konto
         * *********************************/
        if ($oChangeEmail.length) {
            var sOldMail = $oChangeEmail.val(),
                $oPasswordElem = $('.oxValidate_pwd');
            $oChangeEmail.keyup(function (e) {
                    if ($oPasswordElem.length) {
                        if (sOldMail != e.target.value) {
                            $oPasswordElem.slideDown('fast');
                        }
                        else {
                            if ($oPasswordElem.is(':visible')) {
                                $oPasswordElem.slideUp('fast');
                            }
                        }
                    }
                }
            );
        }

        /* *********************************
         * Private Sales Login
         * *********************************/
        $('#private-sales-login input.agb-check').click(function () {
            if ((this).checked) {
                $('#private-sales-login button.submitButton').removeAttr('disabled');
            } else {
                $('#private-sales-login button.submitButton').attr("disabled", "disabled");
            }
        });

        /* *********************************
         * Fix for form validation
         * *********************************/
        $('input.form-control, textarea.form-control, select.form-control').each(function() {
            $(this).unbind(["keyup", "focus", "blur", "click"].join(".validation ") + ".validation");
        });

    }
);

$(window).on('load', function () {
        // Bugfix für das Nachladen von Bildern, wenn man die
        // Seite aktualisiert und dadurch nicht auf scrollTop 0 ist.
        window.setTimeout(function () {
            $("img").unveil();
        }, 500);
    }
);
