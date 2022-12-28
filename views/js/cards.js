/*!
* To provide cards from api and edit update cards
*/

/** Get cards and append them to cards div */
function getCards(){
    $("#cards").empty();
    $.getJSONuncached = function(url){
        return $.ajax(
        {
            url: url,
            type: 'GET',
            cache: false,
            success: function(html){
                console.log(html)
                $("#cards").append(html);
                select_row();
            }
        });
    };
    $.getJSONuncached("/get/cards")
};

// A $( document ).ready() block.
$( document ).ready(function() {
    getCards();
});