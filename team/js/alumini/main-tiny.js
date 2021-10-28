/*---------------------------------------------------------------------------------
/*
/* Main-mini JS (to be used in every page)
/* includes configs for navbar, preloader only
/* if want all feature use main.js
-----------------------------------------------------------------------------------*/

(function($) {
    "use strict";

    /*---------------------------------------------------- */
    /* Preloader
    ------------------------------------------------------ */
    $(window).load(function() {
        // will first fade out the loading animation
        $("#loader").fadeOut("slow", function() {
            // will fade out the whole DIV that covers the website.
            $("#preloader")
                .delay(300)
                .fadeOut("slow");
        });
    });

    /*----------------------------------------------------*/
    /* Lazy load
    /*----------------------------------------------------*/
    $(window).load(function() {
        new LazyLoad({
            elements_selector: ".lazyload"
        });
    });

    /*----------------------------------------------------*/
    /* Adjust Primary Navigation Background Opacity
    ------------------------------------------------------*/
    $(window).on("scroll", function() {
        var h = $("header").height();
        var y = $(window).scrollTop();
        var header = $("#main-header");

        if (y > h + 30 && $(window).outerWidth() > 768) {
            header.addClass("opaque");
        } else {
            if (y < h + 30) {
                header.removeClass("opaque");
            } else {
                header.addClass("opaque");
            }
        }
    });

    /*----------------------------------------------------*/
    /* Highlight the current section in the navigation bar
    ------------------------------------------------------*/
    var sections = $("section"),
        navigation_links = $("#nav-wrap a");

    sections.waypoint({
        handler: function(direction) {
            var active_section;

            active_section = $("section#" + this.element.id);

            if (direction === "up") active_section = active_section.prev();

            var active_link = $(
                '#nav-wrap a[href="#' + active_section.attr("id") + '"]'
            );

            navigation_links.parent().removeClass("current");
            active_link.parent().addClass("current");
        },

        offset: "25%"
    });


    /*-----------------------------------------------------*/
    /* Mobile Menu
    ------------------------------------------------------ */
    var menu_icon = $("<span class='menu-icon'>Menu</span>");
    var toggle_button = $("<a>", {
        id: "toggle-btn",
        html: "",
        title: "Menu",
        href: "#"
    });
    var nav_wrap = $("nav#nav-wrap");
    var nav = $("ul#nav");

    /* if JS is enabled, remove the two a.mobile-btns
          and dynamically prepend a.toggle-btn to #nav-wrap */
    nav_wrap.find("a.mobile-btn").remove();
    toggle_button.append(menu_icon);
    nav_wrap.prepend(toggle_button);

    toggle_button.on("click", function(e) {
        e.preventDefault();
        nav.slideToggle("fast");
    });

    if (toggle_button.is(":visible")) nav.addClass("mobile");
    $(window).resize(function() {
        if (toggle_button.is(":visible")) nav.addClass("mobile");
        else nav.removeClass("mobile");
    });

    $("ul#nav li a").on("click", function() {
        if (nav.hasClass("mobile")) nav.fadeOut("fast");
    });

})(jQuery);