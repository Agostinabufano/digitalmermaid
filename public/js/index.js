var isHoverinInFacebook = false;
var isHoverinInInstagram = false;
var isHoverinInGitHub = false;
var isHoverinInLinkedin = false;

$(function () {

    // ---------------------------------------------- //
    // Navbar
    // ---------------------------------------------- //

    $(document).scroll(function () {
        if ($(window).scrollTop() >= $('header').offset().top) {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });

    // ---------------------------------------------- //
    // Scroll Spy
    // ---------------------------------------------- //

    $('body').scrollspy({
        target: '.navbar',
        offset: 80
    });

    // ---------------------------------------------- //
    // Preventing URL update on navigation link click
    // ---------------------------------------------- //

    $('.navbar-nav a, #scroll-down').bind('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });

    $('#submitContactForm').on("click", function (e) {
        toastr.success('Thank you for writing', 'Yay!')
    });

    $("#fbIcon").hover(
        function () {
            $("#fbIconOverlay").css("display", "block");
            $("#fbIconOverlay").css("background", "rgba(139, 157, 195, 0.5)");
            $("#fbIconOverlay").addClass("hoverInFb")
            $("#fbIconOverlay").removeClass("hoverOutFb")
            isHoverinInFacebook = true;
        }, function () {
            $("#fbIconOverlay").removeClass("hoverInFb")
            $("#fbIconOverlay").addClass("hoverOutFb")
            isHoverinInFacebook = false;
            setTimeout(function () {
                if (!isHoverinInFacebook) {
                    $("#fbIconOverlay").css("display", "none");
                }
            }, 1000);
        }
    );

    $("#igIcon").hover(
        function () {
            $("#igIconOverlay").css("display", "block");
            $("#igIconOverlay").css("background", "rgb(214, 36, 159, 0.2)");
            $("#igIconOverlay").addClass("hoverInIg")
            $("#igIconOverlay").removeClass("hoverOutIg")
            isHoverinInInstagram = true;
        }, function () {
            $("#igIconOverlay").removeClass("hoverInIg")
            $("#igIconOverlay").addClass("hoverOutIg")
            isHoverinInInstagram = false;
            setTimeout(function () {
                if (!isHoverinInInstagram) {
                    $("#igIconOverlay").css("display", "none");
                }
            }, 1000);
        }
    );

    $("#gitIcon").hover(
        function () {
            $("#gitIconOverlay").css("display", "block");
            $("#igIconOverlay").addClass("hoverInIg")
            $("#gitIconOverlay").css("background", "rgba(43, 49, 55, 0.5)");
            $("#gitIconOverlay").addClass("hoverInGit")
            $("#gitIconOverlay").removeClass("hoverOutGit")
            isHoverinInGitHub = true;
        }, function () {
            $("#gitIconOverlay").removeClass("hoverInGit")
            $("#gitIconOverlay").addClass("hoverOutGit")
            isHoverinInGitHub = false;
            setTimeout(function () {
                if (!isHoverinInGitHub) {
                    $("#gitIconOverlay").css("display", "none");
                }
            }, 1000);
        }
    );

    $("#linIcon").hover(
        function () {
            $("#linIconOverlay").css("display", "block");
            $("#igIconOverlay").addClass("hoverInIg")
            $("#linIconOverlay").css("background", "rgba(40, 62, 74, 0.5)");
            $("#linIconOverlay").addClass("hoverInLin")
            $("#linIconOverlay").removeClass("hoverOutLin")
            isHoverinInLinkedin = true;
        }, function () {
            $("#linIconOverlay").removeClass("hoverInLin")
            $("#linIconOverlay").addClass("hoverOutLin")
            isHoverinInLinkedin = false;
            setTimeout(function () {
                if (!isHoverinInLinkedin) {
                    $("#linIconOverlay").css("display", "none");
                }
            }, 1000);
        }
    );
});
