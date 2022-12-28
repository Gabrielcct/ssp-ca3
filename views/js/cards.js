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

function getEditCards(){
    $("#cards-edit").empty();
    $.getJSONuncached = function(url){
        return $.ajax(
        {
            url: url,
            type: 'GET',
            cache: false,
            success: function(html){
                console.log(html)
                $("#cards-edit").append(html);
                select_row();
            }
        });
    };
    $.getJSONuncached("/get/editcards")
};

function editCard(el){
    let position = $(el).attr("data-position");
    let title = $(`#card-title-input-${position}`).val();
    let text = $(`#card-text-input-${position}`).val();
    let value = {
        position: position-1,
        title: title,
        text:text
    };
    postCard("/post/editCard", value);
}


function removeCard(el){
    let position = $(el).attr("data-position");
    let value = {
        position: position-1
    };
    postCard("/post/deleteCard", value);
}

function addNewCard(){
    let value = {
        title: $("#newCardTitle").val(),
        text: $("#newCardText").val()
    };
    postCard("/post/addCard", value);
}

function postCard(url, value){
    $.ajax({
        url: url,
        type: "POST",
        data: value,
        cache: false,
        success: function(res){
            setTimeout(getEditCards(), 100)
        } 
    });
}

// A $( document ).ready() block.
$( document ).ready(function() {
    getCards();
});