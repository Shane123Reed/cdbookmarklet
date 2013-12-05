javascript:(function(){
    var newScript = document.createElement('script');
    newScript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    document.body.appendChild(newScript);

    newScript = document.createElement('script');
    newScript.src = 'cfbookmarklet.js?dummy='
                     + Math.random();
    document.body.appendChild(newScript);
})();