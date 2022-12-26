/*!
* Make seperate javascript files for each page
* Reference: https://medium.com/altcampus/implementing-simple-spa-routing-using-vanilla-javascript-53abe399bf3c
* here goes shop manager page content- variable need to be called as route path!
*/
const manager =`
<!-- Page content-->
    
<div class="row margin-top-60 margin-bottom-120">
        <h1 class="fw-normal margin-bottom-35 text-center">Welcome to store manager</h1>
        <div id="menu" class="col-lg-4 mb-5 order-1">
            <p class="lead margin-bottom-35">Add new products to store by selecting product category and typing new product name and price. Or remove existing product from shop by selecting product and clicking on delete button. </p>
            <form enctype="application/json" action="/post/json" method="post">
                <div class="form-group">
                    <select class="form-select" name="sec_n">
                        <option value="0">Food</option>
                        <option value="1">Toys and Trees</option>
                        <option value="2">Litter</option>
                        <option value="3">Hygene products</option>
                    </select>
                    <input class="form-control mt-3" type="text" name="listing" placeholder="Product">
                    <input class="form-control mt-3" type="text" name="price" placeholder="Price">
                    <div class="d-grid gap-2 mt-3">
                        <button type="submit" class="btn btn-success btn-block">Add to Shop</button>
                    </div>
                </div>
            </form>
            <div class="d-grid gap-2">
                <button id="delete" class="btn btn-danger btn-block mt-3">Remove from shop</button>
            </div>
        </div>
        <div id="results" class="col-lg-8 mb-5 order-2"></div>
    </div>
`;