var isHoverinInFacebook = false;
var isHoverinInInstagram = false;

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
            setTimeout(function(){
                if(!isHoverinInFacebook){
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
            setTimeout(function(){
                if(!isHoverinInInstagram){
                    $("#igIconOverlay").css("display", "none");
                }
            }, 1000);
        }
    );

});
