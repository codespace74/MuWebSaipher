$( document ).on( 'mousemove', function( e ) {
            var amountMovedX = 200 - 30 * ( (e.pageX + 1) / $( document ).width() );
            var amountMovedY = 200 - 30 * ( (e.pageY + 1) / $( window ).height() );

            $( '#move-object' ).css( {'margin-right': '-' + amountMovedX + 'px', 'margin-top' : '-' + amountMovedY + 'px' });
} );

$(".buttonDrop").click(function(){
  $("."+$(this).attr("data-class")).toggleClass("active");
  $(this).toggleClass("active");
});