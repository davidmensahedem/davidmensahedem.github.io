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

    // Code to be executed when the document is ready
});
