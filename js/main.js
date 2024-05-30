$(window).on("load", function () {
    function preloader() {
        if ($("#preloader").length) {
            $("#preloader").delay(2000).fadeOut("slow", function () {
                $(this).remove();
            });
        }
    }
    preloader();
});

$(document).ready(function () {
    const menu = $(".davnavbarmenu");
    const closeBtn = $(".davnavbarclose");
    const hamburgerBtn = $(".davnavbarhamburger");
    const davnavbaritem = $(".davnavbaritem");
    const davnavbarlinks = $(".davnavbarlink");
    const davnavbarsocialicon = $(".davnavbarsocialicon");

    if (hamburgerBtn.length) {
        hamburgerBtn.on("click", function () {
            menu.css("left", "0px");
            davnavbaritem.css({
                "transform": "translateX(0px)",
                "visibility": "visible"
            });
            davnavbarsocialicon.css({
                "transform": "translateX(0px)",
                "visibility": "visible"
            });
        });
    }

    if (closeBtn.length) {
        closeBtn.on("click", function () {
            menu.css("left", "-100%");
            davnavbaritem.css({
                "transform": "translateX(-150px)",
                "visibility": "hidden"
            });
            davnavbarsocialicon.css({
                "transform": "translateX(-150px)",
                "visibility": "hidden"
            });
        });
    }

    // for each navbarlink clicked
    davnavbarlinks.each(function () {
        $(this).on("click", function () {
            $(this).addClass("davnavbaractivelink");
            davnavbarlinks.not(this).removeClass("davnavbaractivelink");
        });
    });

});
