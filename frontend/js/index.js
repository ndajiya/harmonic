(function() {
    "use strict";

    $(document).ready(function() {
        $("#fb").hide().delay(200).fadeIn("slow");
        $("#fb").click(login);
        $("#fb").hover(
            function() {
                $(this).stop().animate({"opacity": "0.65"}, "slow");
            },
            function() {
                $(this).stop().animate({"opacity": "1"}, "slow");
            }
        );

        $(".song-name").hide();
        $(".bar-item").hover(
            function() {
                $(this).children().stop();
                $(this).find(".album-photo").animate({
                    bottom: "120px"
                }, 700, function() {
                    $(this).parent().find(".song-name").fadeIn(300);
                });
            },
            function() {
                $(this).children().stop();
                $(this).find(".song-name").fadeOut(300);
                $(this).find(".album-photo").animate({
                    bottom: "35px"
                }, 700);
            }
        );
    });


    var login = function() {
        // Login Stuff goes here
    };
})();