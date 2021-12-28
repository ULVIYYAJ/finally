
$(document).ready(function () {


    $(".button1").click(function () {
        var email = $(".email").val();
        var password = $(".pass").val();
        // Checking for blank fields.
        if (email == '' || password == '') {
            $('input[type="text"],input[type="password"]');
            $('input[type="text"],input[type="password"]');
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Yanlışlıq var',
                footer: '<a href="">Why do I have this issue?</a>'
            })
            $(".email").val("");
            $(".pass").val("");
        } else if (password == "password") {
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
            )
        }
        else if (password.length < 4) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '4-den azdir',
                footer: '<a href="">Why do I have this issue?</a>'
            })
            $(".email").val("");
            $(".pass").val("");
        }
    });

    $("#enterBtn").click(function () {
        var email = $(".email").val();
        var password = $(".pass").val();
        var name = $(".name").val();
        var repeat = $("#repeat").val();

        if (email == '' || password == '' || name == '' || repeat == '') {
            $('input[type="text"],input[type="password"]');
            $('input[type="text"],input[type="password"]');
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
            $(".email").val("");
            $(".pass").val("");
            $(".name").val("");
            $("#repeat").val("");
        } else if (password == "password") {
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
            )
        }
        else if (password.length < 4) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '4-den azdir',
                footer: '<a href="">Why do I have this issue?</a>'
            })
            $(".email").val("");
            $(".pass").val("");
            $(".name").val("");
            $("#repeat").val("");
        }
        else if (password != repeat) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'eyni deyil',
                footer: '<a href="">Why do I have this issue?</a>'
            })
            $(".email").val("");
            $(".pass").val("");
            $(".name").val("");
            $("#repeat").val("");
        }
        else {
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
            )
        }
    });


    $(".menu-btn").click(
        function () {
            $(".menu-btn").toggleClass("disBtn");

            $(".cross-btn").toggleClass("enCross");

            $('.menu-panel').toggleClass('showPanel');
        }
    );
    

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplay: true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:false
            }
        }
    })  
});




