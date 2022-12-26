/*!
* Make seperate javascript files for each page
* Reference: https://medium.com/altcampus/implementing-simple-spa-routing-using-vanilla-javascript-53abe399bf3c
* here goes cart shop content - variable need to be called as route path!
*/
const shop =`
    <!-- Page content-->
    <div class="row margin-top-60 margin-bottom-120">
        <div class="col-12">
            <h1 class="fw-normal margin-bottom-35">Welcome to store</h1>
            <p class="lead margin-bottom-35">Please select products to buy</p>
            <div id="results"></div>
        </div>
        <div id="cart" class="col-lg-8 mb-5">
            <h3 class="fw-normal margin-bottom-35">Cart</h1>
            <button type="button" onclick="addItemsToCart('menuTable','cartTableBody')" class="btn btn-success btn-block">Add to Cart</button>
            <button type="button" class="btn btn-danger btn-block">Remove from Cart</button>
            <div id="cartId">
                <table id="cartTable" border="0" class="indent table table-striped table-borderless">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody id="cartTableBody">
                        <!-- Add rows here -->
                    </tbody>
                    <tfoot>
                        <tr>
                            <td><strong>Total Price</strong></td>
                            <td></td>
                            <td id="totalPriceId"></td>
                        </tr>
                    </tfoot>
                </table>
                <div>
            </div>
        </div>
    </div>
        
`;