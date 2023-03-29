 // $(document).ready(function() {
 //     $('.modal').modal({
 //         backdrop: 'static',
 //     });
 // });
 $(document).ready(function() {
     $("#myShow").click(function() {
         $(".modal").modal('show');
     });


     $("#myHide").click(function() {
         $(".modal").modal('hide');
     });


     $('#myBtn').click(function() {
         $('#myCon').css({
             'background-color': 'red'
         });
     });


     $('#myBtn1').click(function() {
         $('#myCon').css({
             'background-color': 'green'
         });
     });

     $('#myAdd').click(function() {
         $("#myPra").append("<b>append text.</b>");
     });

     $('#myRemove').click(function() {
         $('#myPra').remove();
     });

     $('#myRemove1').click(function() {
         $('#myPra').empty();
     });

     $('#myCount').click(function() {
         var a = $('#myTag').find('*').length;
         $('#c').append('Count is :' + ' ' + a);
     });

     $('#myAd').click(function() {
         $("#myTag").append("<h6>append text.</h6>");
     });

     $('#myIn').click(function() {
         $('#div1').fadeIn();
         $('#div2').fadeIn('slow');
         $('#div3').fadeIn(3000);
     });

     $('#myOut').click(function() {
         $('#div1').fadeOut();
         $('#div2').fadeOut('slow');
         $('#div3').fadeOut(3000);
     });

     $('#myTog').click(function() {
         $('#div1').fadeToggle();
         $('#div2').fadeToggle('slow');
         $('#div3').fadeToggle(3000);
     });

     $('#myTo').click(function() {
         $("#div1").fadeTo("slow", 0.15);
         $("#div2").fadeTo("slow", 0.4);
         $("#div3").fadeTo("slow", 0.7);
     });

     $("#flip").click(function() {
         $("#panel").slideUp("slow");
     });

     $("#f").click(function() {
         $("#p").slideDown("slow");
     });

     $("#fl").click(function() {
         $("#pl").slideToggle("slow");
     });

     $("#myAni").click(function() {
         $("#mySlide").animate({
             left: '1000px'
         });
     });

     $("#myAni1").click(function() {
         $("#mySlide").animate({
             left: '250px',
             opacity: '0.5',
             height: '150px',
             width: '150px',
         });
     });

     $("#myAni2").click(function() {
         $("#mySlide").animate({
             left: '250px',
             height: '+=150px',
             width: '+=150px'
         });
     });

     $("#myAni3").click(function() {
         $("#mySlide").animate({
             height: 'toggle'
         });
     });

     $("#myAni4").click(function() {
         var div = $("#mySlide");
         div.animate({ height: '300px', opacity: '0.4' }, "slow");
         div.animate({ width: '300px', opacity: '0.8' }, "slow");
         div.animate({ height: '100px', opacity: '0.4' }, "slow");
         div.animate({ width: '100px', opacity: '0.8' }, "slow");
     });

     $("#myAni5").click(function() {
         var div = $("#mySlide");
         div.animate({ left: '100px' }, "slow");
         div.animate({ fontSize: '3em' }, "slow");
     });

 });