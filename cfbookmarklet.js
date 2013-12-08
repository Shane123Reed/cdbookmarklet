
// ADD EXTERNAL STYLESHEET bookmark.css    
$('head').append("<link rel='stylesheet', type='text/css', href='bookmark.css'>");


// ADD GUI ELEMENTS TO HOST PAGE
$( 'body' ).prepend( "<div class='Catchframe123'></div>" );
$( '.Catchframe123' ).prepend( "<div class='CatchframeHeader123'><p>Catchframe</p></div>" );
$( '.Catchframe123' ).append( "<div class='CatchframeImage098'></div>" );
$( '.CatchframeImage098' ).prepend( "<div class='CatchframeImage099'></div>" );
$( 'img' ).clone().appendTo( '.Catchframe123' );


$( '.Catchframe123' ).delay( .01 ).animate({ opacity:'1.0', width:'150px' }, 400);



// FINISHED ADDING ELEMENTS TO DOM ******************************************************************



    


// IMG CLICKED - POST
$( 'img' ).click(function() {

    $.post("http://localhost:3000/bookmarks", { url: this.src } ).done(function( data ) {
        alert( "Catchframe: Lookmarked!");
    });

});



