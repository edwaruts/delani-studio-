$(document).ready(function() {
    $(".button1").click(function() {
        $(".here1").toggle();
    });
});
$(document).ready(function() {
    $(".button2").click(function() {
        $(".here2").toggle();
    });
});
$(document).ready(function() {
    $(".button3").click(function() {
        $(".here3").toggle();
    });
});
$(document).ready(function() {
    $(".text").hide();
    $("#div1").animate({
        opacity: 1
    });

    $("#div1").hover(
        function() {
            $(this)
                .stop()
                .animate({ opacity: 0.4 }, 200);
            $(".text").fadeIn();
        },
        function() {
            $(this)
                .stop()
                .animate({ opacity: 1 }, 500);
            $(".text").fadeOut();
        }
    );
});
$(document).ready(function() {
    $(".text2").hide();
    $("#div2").animate({
        opacity: 1
    });

    $("#div2").hover(
        function() {
            $(this)
                .stop()
                .animate({ opacity: 0.4 }, 200);
            $(".text2").fadeIn();
        },
        function() {
            $(this)
                .stop()
                .animate({ opacity: 0.2 }, 500);
            $(".text2").fadeOut();
        }
    );
});
$(document).ready(function() {
    $(".text3").hide();
    $("#div3").animate({
        opacity: 1
    });

    $("#div3").hover(
        function() {
            $(this)
                .stop()
                .animate({ opacity: 0.4 }, 200);
            $(".text3").fadeIn();
        },
        function() {
            $(this)
                .stop()
                .animate({ opacity: 1 }, 500);
            $(".text3").fadeOut();
        }
    );
});
$(document).ready(function() {
    $(".text4").hide();
    $("#div4").animate({
        opacity: 1
    });

    $("#div4").hover(
        function() {
            $(this)
                .stop()
                .animate({ opacity: 0.4 }, 200);
            $(".text4").fadeIn();
        },
        function() {
            $(this)
                .stop()
                .animate({ opacity: 1 }, 500);
            $(".text4").fadeOut();
        }
    );
});
$(document).ready(function() {
    $(".text5").hide();
    $("#div5").animate({
        opacity: 1
    });

    $("#div5").hover(
        function() {
            $(this)
                .stop()
                .animate({ opacity: 0.4 }, 200);
            $(".text5").fadeIn();
        },
        function() {
            $(this)
                .stop()
                .animate({ opacity: 1 }, 500);
            $(".text").fadeOut();
        }
    );
});
$(document).ready(function() {
    $(".text6").hover();
    $("#div6").animate({
        opacity: 1
    });

    $("#div6").hover(
        function() {
            $(this)
                .stop()
                .animate({ opacity: 0.4 }, 200);
            $(".text6").fadeIn();
        },
        function() {
            $(this)
                .stop()
                .animate({ opacity: 1 }, 500);
            $(".text6").fadeOut();
        }
    );
});
$(document).ready(function() {
    $(".text7").hide();
    $("#div7").animate({
        opacity: 1
    });

    $("#div7").hover(
        function() {
            $(this)
                .stop()
                .animate({ opacity: 0.4 }, 200);
            $(".text7").fadeIn();
        },
        function() {
            $(this)
                .stop()
                .animate({ opacity: 1 }, 500);
            $(".text7").fadeOut();
        }
    );
});
$(document).ready(function() {
    $(".text8").hide();
    $("#div8").animate({
        opacity: 1
    });

    $("#div8").hover(
        function() {
            $(this)
                .stop()
                .animate({ opacity: 1 }, 300);
            $(".text8").fadeIn();
        },
        function() {
            $(this)
                .stop()
                .animate({ opacity: 1 }, 700);
            $(".text8").fadeOut();
        }
    );
});

function myFunction() {
    document.getElementById("demo").innerHTML =
        "we have received your message,we shall get back to you shortly thank you";
}