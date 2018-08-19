$(document).ready(function() {
    
        //NAVBAR
        $(window).scroll(function() {
            var mask = $(".mask");
            if ($(this).scrollTop() > 1) {
                $('header').addClass("sticky");
                $(".nav-wrapper").addClass("mask");
            } else {
                $('header').removeClass("sticky");
                $(".nav-wrapper").removeClass("mask");
            }
        });
    
        // NAVIGATION MOBILE
        $("#nav-mobile").html($("#nav-main").html());
        $("#nav-trigger span").click(function() {
            if ($("nav#nav-mobile ul").hasClass("expanded")) {
                $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
                $(this).removeClass("open");
            } else {
                $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
                $(this).addClass("open");
            }
        });
    
        $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function() {
            $(this).toggleClass('open');
        });
    
        // SWITCH BUTTON
        $(".switch").on("click", function() {
            $(".navigation").slideToggle();
            $(this).toggleClass("active");
        });
        $('.navigation li a').on("click", function() {
            $('#menu').slideUp();
        });

        $("a[href='#contact']").click(function() {
            $("html, body").animate({ scrollTop: $(document).height() }, 2000);
            return false;
          });

          $("a[href='#trainings-button']").click(function() {
            $("html, body").animate({ scrollTop: $("#trainings-hook").offset().top }, 2000);
            return false;
          });


        // $('#owl-trainings').owlCarousel({
        //     animateOut: 'fadeOut'
        //     items:1,
        //     margin:30,
        //     stagePadding:30,
        //     smartSpeed:450
        // });

        // $("#owl-demo").owlCarousel({
        //     navigation : true,
        //     singleItem : true,
        //     transitionStyle : "fade"
        //   });
    
        // OWL CAROUSEL
        $("#owl-trainings").owlCarousel({
    
            // autoPlay: 5000, //Set AutoPlay to 3 seconds
            // navigation: false, // Show next and prev buttons
            // navigationText: [
            //     "<i class='icon-chevron-left icon-white'></i>",
            //     "<i class='icon-chevron-right icon-white'></i>"
            // ],
            //animateOut: 'fadeOut',
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            loop: true,
            dots: false,

            
            //transitionStyle : "fade"
    
            // "singleItem:true" is a shortcut for:
            // items : 1, 
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false
    
        });


        function removeActive(el) {
            Array.from(el).forEach(item => {
                // console.log(item)
                item.classList.remove('five-step__block--active')
            });
        }
        

        const fiveStepsBlocks = document.querySelectorAll('.js-block');
        const texts = document.querySelectorAll('.bottom_space');
        console.log(texts)
        const slider = document.querySelector('.main_slider');
        // const block = document.querySelector('.js-block');

        const compare = (e) => {
            // e.forEach( item,index => {
                if (item.target.id === 'text'[index]) {
                    texts[index].classList.add('show');
                }
            // })
        }

        const changeClass = () => {

            let id = null;
            slider.addEventListener('click', (e) => {
                // console.log(e.target)
                if ( e.target.classList.contains('five-step__block' )) {
                    removeActive(fiveStepsBlocks);
                    e.target.classList.add('five-step__block--active')
                    id = e.target.id
                    console.log(id)
                    // console.log(texts[0])
                    // texts[0].classList.add('test')
                    
                } else if ( e.target.classList.contains('five-step__svg' )) {
                    removeActive(fiveStepsBlocks);
                    e.target.parentElement.classList.add('five-step__block--active')
                } else if ( e.target.classList.contains('five-step__caption' )) {
                    removeActive(fiveStepsBlocks);
                    e.target.parentElement.classList.add('five-step__block--active')
                }
            });
        }
        changeClass()         

        // const removeActive = () => {
        //     fiveStepsBlocks.forEach(item => {
        //         item.classList.remove('five-step__block--active');
        //     });
        // }
        // removeActive()
            
    });