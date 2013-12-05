// DOM GETTING ELEMENTS
// GET IMG
// var images = document.getElementsByTagName('img');

// for(var i = 0; i < images.length; i++) {
//   var image = images[i];
//   image.onclick=function(){
//     $.post("http://localhost:3000/bookmarks", { url: this.src } ).done(function( data ) {
//       alert( "Catchframe: Lookmarked!");
//     });
//   };
// }

// for(var i = 0; i < images.length; i++) {
//   var image = images[i];
//   image.setAttribute('style', 'border-radius: 20px');
// }


$(function(){
    //BOOKMARK CLICKED CSS CHANGES
    $( 'img' ).animate({ borderRadius:'30px' }, 150);

    //IMG CLICKED POST
    $( 'img' ).click(function() {

        $.post("http://localhost:3000/bookmarks", { url: this.src } ).done(function( data ) {
            alert( "Catchframe: Lookmarked!");
        });

    });
    







});