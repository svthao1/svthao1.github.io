$(document).ready(function(){

    $.getJSON("google-books-search.json", function(data){
            $(".title").html(data.title);
            $(".authors").html(data.authors);
    })

})