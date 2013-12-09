
// ADD EXTERNAL STYLESHEET bookmark.css    
$('head').append("<link rel='stylesheet', type='text/css', href='bookmark.css'>");


// ADD GUI ELEMENTS TO HOST PAGE
$( 'body' ).prepend( "<div class='Catchframe123'></div>" );
$( '.Catchframe123' ).prepend( "<div class='CatchframeHeader123'><p>Catchframe</p></div>" );

// CLONE ALL IMAGES INTO GUI
$( 'img' ).clone().appendTo( '.Catchframe123' );

// SLIDE IN FROM RIGHT
$( '.Catchframe123' ).delay( .01 ).animate({ opacity:'1.0', width:'150px' }, 400);



// FINISHED ADDING ELEMENTS TO DOM ******************************************************************



    


// IMG CLICKED - POST
$( 'img' ).click(function() {

    $.post( "http://localhost:3000/bookmarks", { url:  window.location.href, src: this.src, name: this.title }).done(function( data ) {
    alert( "Data Loaded: " + data );
  });

});



