// ADD EXTERNAL STYLESHEET bookmark.css    
$('<link>')
    .appendTo($('head'))
    .attr({type : 'text/css', rel : 'stylesheet'})
    .attr('href', 'bookmark.css');    


// FINISHED ADDING ELEMENTS TO DOM ******************************************************************  





// BOOKMARK CLICKED - CSS CHANGES
$( 'img' ).animate({ borderRadius:'10px' }, 0);

$( 'body' ).prepend( "<div class='Catchframe123'></div>" );
$( '.Catchframe123' ).prepend( "<div class='CatchframeHeader123'><p>Catchframe</p></div>" );



// newdiv2, newdiv3, $('img')
    




// IMG CLICKED - POST
$( 'img' ).click(function() {

    $.post("http://localhost:3000/bookmarks", { url: this.src } ).done(function( data ) {
        alert( "Catchframe: Lookmarked!");
    });

});



