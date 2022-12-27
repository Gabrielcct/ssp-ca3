/*!
* Make seperate javascript files for each page
* Reference: https://medium.com/altcampus/implementing-simple-spa-routing-using-vanilla-javascript-53abe399bf3c
* here goes cart shop content - variable need to be called as route path!
*/
const shop =`
    <!-- Page content-->
    <div class="row margin-top-60 margin-bottom-120">
        <div class="col-lg-8 mb-5">
            <h1 class="fw-normal margin-bottom-35">Welcome to store</h1>
            <p class="lead margin-bottom-35">Please select products to buy</p>
            <div id="results" class="shop-table-wrapper"></div>
        </div>
        <div id="cart" class="cart col-lg-4 mb-5">
            <h5 class="fw-normal margin-bottom-35 cart-title"><i class="fa-solid fa-cart-shopping cart-icon"></i> Cart</h5>
            <button type="button" onclick="addItemsToCart('menuTable','cartTableBody')" class="btn btn-primary btn-block w-100">Add to Cart</button>
            <div id="cartId" class="cart-content">
                <!-- Empty cart -->
                <div id="empty-cart" class="text-center"> Cart is empty</div>
                <!-- Cart with data -->
                <table id="cartTable" border="0" class="indent table table-light table-striped table-borderless">
                    
                </table>
                <button id="buy-button" type="button" onclick="buy()" class="btn btn-success btn-block w-100">Buy</button>
            </div>
        </div>
    </div>
        
`;
