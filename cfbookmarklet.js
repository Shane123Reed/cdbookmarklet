
    
$('<link>')
    .appendTo($('head'))
    .attr({type : 'text/css', rel : 'stylesheet'})
    .attr('href', 'bookmark.css');    


// PLACE ALL IMAGES INSIDE DIVS IN THEIR SAME LOCATION
$( 'img' ).wrap( "<div class='floatwrapper'><div class='floating'></div></div>" );


//********************************************************************************************  
// FINISHED ADDING ELEMENT TO DOM




// BOOKMARK CLICKED - CSS CHANGES
$( 'img' ).animate({ borderRadius:'30px' }, 150);


// IMG CLICKED - POST
$( 'img' ).click(function() {

    $.post("http://localhost:3000/bookmarks", { url: this.src } ).done(function( data ) {
        alert( "Catchframe: Lookmarked!");
    });

});



    


