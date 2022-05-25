 $(document).ready(function() {
     if (!window.matchMedia) return;
     var current = $('head > link[rel="icon"][media]');
     $.each(current, function(i, icon) {
         var match = window.matchMedia(icon.media);

         function swap() {
             if (match.matches) {
                 current.remove();
                 current = $(icon).appendTo('head');
             }
         }
         match.addListener(swap);
         swap();
     });
 });

 $(document).ready(function() {
     
    // $('#navheader').load('components/navheader.html', function(){
    //     setNavigation();
    //     $('[data-toggle="tooltip"]').tooltip();
    // });
    $('#navfooter1').load('components/navfooter.html', function(){
        $('#anccookiesettings').click(function(){$('.cky-btn-customize').trigger('click');});
        registerSubscribeEvent();
    });
    growShrinkLogo();

     $('.check_avail').click(function() {
         var $this = jQuery(this);
         var arrivalDate = jQuery.datepicker.formatDate('dd/mm/yy', $("#datepicker").datepicker("getDate"));
         var departureDate = jQuery.datepicker.formatDate('dd/mm/yy', $("#datepicker1").datepicker("getDate"));
         var guestcnt = $('.input-number').val();
         var bkurl = "https://calimykonos.book-onlinenow.net/index.aspx?Page=19&arrival=" + arrivalDate + "&departure=" + departureDate + "&adults=" + guestcnt + "&kids=0&kid1=-1&kid2=1&kid3=-1";
         window.open(bkurl, "_blank");
     });
     var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

     function isEmailAddress(str) {
         return str.match(pattern);
     }

     function validateEmail() {
         var emailadd = document.getElementsByClassName("sub_in")[0].value;
         if (isEmailAddress(emailadd)) {
             document.getElementById("emailMsg").style.display = "none";
             document.getElementById("btnSubmitEmail").disabled = false;
         } else {
             document.getElementById("emailMsg").style.display = "";
             document.getElementById("btnSubmitEmail").disabled = true;
         }

     }

     function registerSubscribeEvent(){
     $('.sub_btn').click(function() {
         var emailadd = document.getElementsByClassName("sub_in")[0].value;
         if (isEmailAddress(emailadd)) {
             $('.sub_btn').text('Subscribing...');
             $('.sub_btn').prop('disabled', true);
             fetch('https://api.calimykonos.com/mail/send?EmailAddress=' + emailadd, {
                     method: "POST"

                 })
                 .then(response => {
                     alert("Your request has been sent successfully!")
                     $('.sub_btn').prop('disabled', false);
                     $('.sub_btn').text('Subscribe');
                     document.getElementsByClassName("sub_in")[0].value = "";
                     $('#largeModal').modal('hide');
                 })
                 // .then(json => console.log(json));
                 .catch((err) => { alert('Oops! something went wrong. Please try again.');
                 $('.sub_btn').prop('disabled', false);
                     $('.sub_btn').text('Subscribe');
                });



         } else {
             alert('Please enter valid email address.');
         }
     });
    }


     $(".scroll").click(function() {
         $("html,body").animate({
             scrollTop: $(".top").offset().top
         }, "1000");
         return false
     })


     $(window).scroll(function() {
         if ($(this).scrollTop() > 50) {
             $('.scrolltop:hidden').stop(true, true).fadeIn();
         } else {
             $('.scrolltop').stop(true, true).fadeOut();
         }
     });


     $(".close_pop").click(function() {
         $(".close_pop1").hide();

     });
     const myInterval = setInterval(myTimer, 100);

     function myTimer() {
         const data = Array.from(document.getElementsByClassName('cky-notice-des'));
         data.forEach(a => {
             a.innerHTML = `We use cookies to improve your online experience. By continuing to use our 
            website and/or clicking accept, you agree to our use of cookies in accordance with our 
            <br><a href="privacy.html" style="color:#222D48;text-decoration: underline;">Privacy Policy.</a> `;
         });
         if (data && data.length > 0) {
             clearInterval(myInterval);
         }

     }
     const acceptbtn = setInterval(acceptCookies, 100);

     function acceptCookies() {
         const data = Array.from(document.getElementsByClassName('cky-btn-accept'));
         data.forEach(a => {
             a.innerHTML = `Accept All Cookies `;
         });
         if (data && data.length > 0) {
             clearInterval(acceptbtn);
         }

     }

     const rejectbtn = setInterval(rejectcookies, 100);

     function rejectcookies() {
         const data = Array.from(document.getElementsByClassName('cky-btn-customize'));
         data.forEach(a => {
             a.innerHTML = `Cookies Settings  `;
         });
         if (data && data.length > 0) {
             clearInterval(rejectbtn);
         }

     }



     $('.btnfloorplan').click(function() {

         $('#imgfloorplanpopup').prop('src', $(this).data('imgurl'));

     });




 });

 //  $(document).ready(function() {
 //      $(".accomadation_togg").hover(function() {
 //          $(".accomod_li").toggle();
 //      });
 //  });

 //plugin bootstrap minus and plus
 //http://jsfiddle.net/laelitenetwork/puJ6G/
 $('.btn-number').click(function(e) {
     e.preventDefault();

     fieldName = $(this).attr('data-field');
     type = $(this).attr('data-type');
     var input = $("input[name='" + fieldName + "']");
     var currentVal = parseInt(input.val());
     if (!isNaN(currentVal)) {
         if (type == 'minus') {

             if (currentVal > input.attr('min')) {
                 input.val(currentVal - 1).change();
             }
             if (parseInt(input.val()) == input.attr('min')) {
                 $(this).attr('disabled', true);
             }

         } else if (type == 'plus') {

             if (currentVal < input.attr('max')) {
                 input.val(currentVal + 1).change();
             }
             if (parseInt(input.val()) == input.attr('max')) {
                 $(this).attr('disabled', true);
             }

         }
     } else {
         input.val(0);
     }
 });
 $('.input-number').focusin(function() {
     $(this).data('oldValue', $(this).val());
 });
 $('.input-number').change(function() {

     minValue = parseInt($(this).attr('min'));
     maxValue = parseInt($(this).attr('max'));
     valueCurrent = parseInt($(this).val());

     name = $(this).attr('name');
     if (valueCurrent >= minValue) {
         $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
     } else {
         alert('Sorry, the minimum value was reached');
         $(this).val($(this).data('oldValue'));
     }
     if (valueCurrent <= maxValue) {
         $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
     } else {
         alert('Sorry, the maximum value was reached');
         $(this).val($(this).data('oldValue'));
     }


 });
 $(".input-number").keydown(function(e) {
     // Allow: backspace, delete, tab, escape, enter and .
     if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
         // Allow: Ctrl+A
         (e.keyCode == 65 && e.ctrlKey === true) ||
         // Allow: home, end, left, right
         (e.keyCode >= 35 && e.keyCode <= 39)) {
         // let it happen, don't do anything
         return;
     }
     // Ensure that it is a number and stop the keypress
     if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
         e.preventDefault();
     }
 });

 $(".show_div").click(function() {

     $(this).parents('.roomcontainer').find(".dis_popupnone").hide();
     $(this).parents('.roomcontainer').find(".dis_popupblock").show();
 });
 $(".read_less").click(function() {
     $(this).parents('.roomcontainer').find(".dis_popupnone").show();
     $(this).parents('.roomcontainer').find(".dis_popupblock").hide();

 });

 $("#show").click(function() {
     $("p").show();
 });

 window.onscroll = function() {
     growShrinkLogo()
         // header_redus()
 };

 function growShrinkLogo() {
     var Logo = document.getElementById("Logo")
     if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
         $('#Logo').css({ width: "6vw" });
         //Logo.style.width = '100px';
     } else {
         $('#Logo').css({ width: "11vw" });
         //Logo.style.width = '11vw';
     }
 }

 //  function header_redus() {
 //      var Logo = document.getElementById("header_redu")
 //      if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
 //          header_redu.style.padding = '1% 0%';
 //      } else {
 //          header_redu.style.padding = '2% 0% 3% 0%';
 //      }
 //  }

 function setNavigation() {
     var path = window.location.pathname;
     path = path.replace(/\/$/, "");
     path = decodeURIComponent(path);

     $(".nav a").each(function() {
         var href = $(this).attr('href');
         // if (path.substring(0, href.length) === href) {
         if (path.includes(href)) {
             $(this).closest('li').addClass('menu_border');
             $(this).next().remove();
         }
     });
 }



 //  $(document).ready(function() {
 //      $(".left").on('click', function(e) {
 //          e.stopPropagation();
 //          e.preventDefault();
 //          $('.left').hide("slide", { direction: "left" }, 500, function() {
 //              $('.right').show("slide", { direction: "right" }, 500);
 //          });
 //      });
 //      $(".right").on('click', function(e) {
 //          e.stopPropagation();
 //          e.preventDefault();
 //          $('.right').hide("slide", { direction: "right" }, 500, function() {
 //              $('.left').show("slide", { direction: "left" }, 500);
 //          });
 //      });

 //  })