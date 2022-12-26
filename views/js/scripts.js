/*!
* Start Bootstrap - Bare v5.0.8 (https://startbootstrap.com/template/bare)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

var gEntreeCount = 0;


// Add items to Cart
function addItemsToCart(tableId, cartTableId){
    //cart value
    var cartTotal = 0.0;
    // all selected elements
    var checkedElements = [];
    // find the table tag
    let table = document.getElementById(tableId);
    // find all inputs in table
    let inputElements = table.getElementsByTagName('INPUT');    
    for (i = 0; i < inputElements.length; i++) {
        // is this menu item selected? it is if the checkbox is checked
        if (inputElements[i].checked) {
            // get checked element data
            let currentElement = getElementData(inputElements[i]);
            // calculate current value of the cart items by adding together value of each item
            cartTotal += currentElement.price;
            // add it to array of checked elements
            checkedElements.push(currentElement);
        };
    };
    // create rows to display as cart items
    let cartTableHTML = createCartTableRows(checkedElements);
    // find cart element
    let cartTableBody = document.getElementById(cartTableId);
    // remove all current elements
    $('#cartTableBody').empty();
    cartTableBody.innerHTML = '';
    //add new cart html as inner html
    cartTableBody.innerHTML = cartTableHTML;

    // find total price element
    let totalPrice = document.getElementById('totalPriceId');
    // add price as string value as inner html of element
    // use toFix to round it to 2 decimals. Reference: https://stackoverflow.com/questions/3163070/javascript-displaying-a-float-to-2-decimal-places
    totalPrice.innerHTML = cartTotal.toFixed(2).toString();

}

/**
 * Get all data relevant for element
 * @param {*} inputElement - element value will be returned for
 * @returns js object containing name, price and quantity
 */
function getElementData(inputElement){
    // get the checkbox' parent table row
    let parentTag = getParentTag(inputElement, 'TR');
    // retrieve the name of product which is the second column in the table
    let itemName = parentTag.getElementsByTagName('TD')[1];
    // retrieve the price from the price column, which is the third column in the table
    let itemPrice = parentTag.getElementsByTagName('TD')[2];
    // return item with name and price as JS object
    return{
        name: itemName.firstChild.data,
        price: parseFloat(itemPrice.firstChild.data),
        quantity: 1
    }

}

/**
 * Create a html table rows for cart elements 
 * @param {*} elements 
 */
function createCartTableRows(elements){
    let rows = '';
    // for each element create a table row
    for(i=0; i<elements.length; i++){
        rows += `<tr id="element-row-${i}">
                    <td> ${elements[i].name}<td>
                    <td>
                        <button class="btn btn-sm btn-primary" onclick="add(${i})">+</button> 
                        <span id="quantity-${i}">${elements[i].quantity}</span>
                        <button class="btn btn-sm btn-primary" onclick="remove(${i})">-</button>
                    <td>
                    <td id="price-${i}"> ${elements[i].price}<td>
                    <td><button type="button" class="btn btn-danger btn-sm" onclick="removeItemFromCart(${i})">Remove</button></td>
                </tr>`;
    }
    return rows;
}

function add(index){
    // get element and value
    let elementData = getQuantityElementValue(index);
    // increase value by one
    elementData.quantity = elementData.quantity + 1;
    // update element on html
    updateElementHTML(elementData.id, elementData.quantity);
    // update total value by adding price of added element
    updateTotalValue(elementData.price, true)
}

function remove(index){
     // get element and value
    let elementData = getQuantityElementValue(index);
    // if value is 0 prevent decreasing value
    if(elementData.quantity > 0){
        // decrease value by one
        elementData.quantity = elementData.quantity - 1;
    }

    // if we removed last element remove it from basket
    if(elementData.quantity === 0){
        removeWholeRow(index);
    }

    // update element on html
    updateElementHTML(elementData.id, elementData.quantity);
    // update total value by removing price of removed element
    updateTotalValue(elementData.price, false);

}

function updateElementHTML(id, quantity){
    // empty current value
    $(id).empty();
    // add new value as html
    $(id).html(quantity);
}

function getQuantityElementValue(index){
    // get id name based on table row (index in array)
    let id = `#quantity-${index}`;
    // get value from span 
    // Reference: https://stackoverflow.com/questions/1921342/how-do-i-get-the-content-of-a-span-using-jquery
    let quantity = $(id).text();
    // set value as integer
    // Reference: https://www.w3schools.com/jsref/jsref_parseint.asp
    quantity = parseInt(quantity);

    // do same with price
    let priceId = `#price-${index}`;
    let price = $(priceId).text();
    price = parseFloat(price);
    return{
        id: id,
        quantity: quantity,
        price: price
    }
}

function updateTotalValue(valueToAdd, isAdd){
    // find value of current total
    let currentTotal = $('#totalPriceId').text();
    // parse text to float
    currentTotal = parseFloat(currentTotal);
    // increase with new value
    if(isAdd){
        currentTotal += valueToAdd;     
    }else{
        currentTotal -= valueToAdd;
    }
    currentTotal = currentTotal.toFixed(2).toString();
    updateElementHTML('#totalPriceId', currentTotal);
}

function removeWholeRow(index){
    // get id name based on table row (index in array)
    let id = `#element-row-${index}`;
    // remove element by id
    // Reference: https://api.jquery.com/remove/
    $(id).remove();
}

/**
 * Removes item from cart
 * @param {*} index - position of item (row in table)
 */
function removeItemFromCart(index){
    // get element and value
    let elementData = getQuantityElementValue(index);
    //remove whole row
    removeWholeRow(index);
    let valueToRemove = elementData.price * elementData.quantity;
    // update total value by removing price of removed element
    updateTotalValue(valueToRemove, false);
}

// Utility function for getting the parent tag of a given tag
// but only of a certain type (i.e. a TR, a TABLE, etc.)
function getParentTag(oNode, sParentType) {
    var oParent = oNode.parentNode;
    while (oParent) {
        if (oParent.nodeName == sParentType)
            return oParent;
        oParent = oParent.parentNode;
    };
    return oParent;
};

