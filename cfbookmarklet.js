
// ADD EXTERNAL STYLESHEET bookmark.css    
$('head').append("<link rel='stylesheet', type='text/css', href='bookmark.css'>");


// ADD GUI ELEMENTS TO HOST PAGE
$( 'body' ).prepend( "<div class='Catchframe123'></div>" );
$( '.Catchframe123' ).prepend( "<div class='CatchframeHeader123'><p>Catchframe</p></div>" );
$( 'body' ).prepend( "<div class='CatchframeDark123'></div>" );

// CLONE ALL IMAGES (bigger than height:150px) INTO GUI
$( 'img' ).each(function() {

    if ( $( this ).css("height") >= '150px') {
        $( this ).clone().appendTo( '.Catchframe123' );
    }

});

// SLIDE IN FROM RIGHT
$( '.Catchframe123' ).delay( .01 ).animate({ opacity:'1.0', width:'150px' }, 400);
$( '.CatchframeDark123' ).delay( .01 ).animate({ opacity:'1.0' }, 400);



// FINISHED ADDING ELEMENTS TO DOM ******************************************************************

// IMG CLICKED - POST
$( 'img' ).click(function() {

    $.post( "http://localhost:3000/bookmarks", { url:  window.location.href, src: this.src, name: this.title }).done(function( data ) {
    alert( "Data Loaded: " + data );
  });

});

// LARGER IMAGE TO LEFT ON HOVER
// Hover over size change
    $('.Catchframe123 img').on('mouseenter',function () {
        $( 'body' ).prepend( "<div class='CatchframeLargerImage123'></div>" );
        $( this ).clone().appendTo( '.CatchframeLargerImage123' );

        $( this ).on('mouseleave',function () {
            $( '.CatchframeLargerImage123' ).delay( 1 ).remove();
        });
    });

// CLEAR ALL WHEN CLICKED OUTSIDE OF FOCUS
$( ".CatchframeDark123" ).click(function() { 

    $( '.CatchframeDark123' ).animate({ opacity:'0.0' }, 400);
    $( '.CatchframeLargerImage123' ).remove();
    $( '.Catchframe123' ).remove();
    $( "<link rel='stylesheet', type='text/css', href='bookmark.css'>" ).remove();

});









