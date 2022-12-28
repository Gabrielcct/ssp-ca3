/*!
* Make seperate javascript files for each page
* Reference: https://medium.com/altcampus/implementing-simple-spa-routing-using-vanilla-javascript-53abe399bf3c
* here goes shop manager page content- variable need to be called as route path!
*/
const manager =`
    <!-- Page content-->
    <div class="row margin-top-60 margin-bottom-120">
        <!-- TITLE -->
        <h1 class="fw-normal margin-bottom-35 text-center">Welcome to store manager</h1>
        <!-- BOOTSTRAP TABS -->
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <!-- SHOP MANAGER TAB NAV-->
            <li class="nav-item" role="presentation">
                <button class="active nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Shop Manager</button>
            </li>
            <!-- HOME PAGE MANAGER TAB NAV -->
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Home Page Manager</button>
            </li>
        </ul>
        <!-- TAB CONTENT -->
        <div class="tab-content" id="myTabContent">
            <!-- SHOP MANAGER TAB CONTENT -->
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div class="row mt-5">
                    <!-- MENU TO EDIT SHOP -->
                    <div id="menu" class="col-lg-4 mb-5 order-1">
                        <p class="lead margin-bottom-35">Add new products to store by selecting product category and typing new product name and price. Or remove existing product from shop by selecting product and clicking on delete button. </p>
                        <form enctype="application/json" action="/post/json" method="post" class="was-validated" id="shopForm">
                                <div class="form-group">
                                    <select class="form-select" name="sec_n">
                                        <option value="0">Food</option>
                                        <option value="1">Toys and Trees</option>
                                        <option value="2">Litter</option>
                                        <option value="3">Hygene products</option>
                                    </select>
                                    <div class="input-group">
                                        <input class="form-control mt-3" type="text" name="listing" placeholder="Product" required>
                                        <div class="valid-feedback">Valid.</div>
                                        <div class="invalid-feedback">Please fill out this field.</div>
                                    </div>
                                    <div class="input-group">
                                        <input class="form-control mt-3" type="number" step="0.01" name="price" placeholder="Price" required>
                                        <div class="valid-feedback">Valid.</div>
                                        <div class="invalid-feedback">Please fill out this field.</div>
                                    </div>
                                    <div class="d-grid gap-2 mt-3">
                                        <button type="submit" class="btn btn-success btn-block">Add to Shop</button>
                                    </div>
                                </div>
                        </form>
                        <div class="d-grid gap-2">
                            <button id="delete" class="btn btn-danger btn-block mt-3">Remove from shop</button>
                        </div>
                    </div>
                    <!-- APPEND HTML FOR SHOP HERE -->
                    <div id="results" class="col-lg-8 mb-5 order-2"></div>
                </div>
            </div>
            <!-- HOME PAGE MANAGER TAB CONTENT -->
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div class="bottom row margin-top-60 margin-bottom-60">
                    <!-- BOTTOM TOP DIV -->
                    <div class="bottom-top col-12 text-center">
                            <!-- Main text -->
                            <h4 class="fw-normal text-uppercase"> Edit or add Cards</h4>  
                            <!-- text -->
                            <p class="margin-top-25 margin-bottom-60">Select a card to edit or add new cards below</p>
                    </div>
                    <!-- BOTTOM BOTTOM DIV - hold cards -->
                    <div class="bottom-bottom row" id="cards-edit">
                    </div>
                </div>

                <div class="add-cards-container text-left">
                    <h4 class="fw-normal text-uppercase mb-3">Add Cards</h4>
                    <div class="row">
                        <form class="was-validated" id="cardForm">
                            <div class="input-group mb-3">
                                <label class="input-group-text" for="newCardTitle">New Card Title</label>
                                <input type="text" class="form-control" id="newCardTitle" required>
                                <div class="invalid-feedback">Please fill out this field.</div>
                            </div>
                    
                            <div class="input-group mb-3">
                                <label class="input-group-text" for="newCardText">Enter new card text</label>
                                <textarea class="form-control" id="newCardText" rows="20" required></textarea>
                                <div class="invalid-feedback">Please fill out this field.</div>
                            </div>
                            <div class="d-grid gap-2 mt-3">
                                <button type="submit" class="btn btn-success btn-block" onClick="addNewCard()">Add Card</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
`;


