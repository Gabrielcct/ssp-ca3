/*!
* Make seperate javascript files for each page
* Reference: https://medium.com/altcampus/implementing-simple-spa-routing-using-vanilla-javascript-53abe399bf3c
* here goes home page content - variable need to be called as route path!
*/
const home =`
        <!-- TOP DIV -->
        <div class="top row margin-top-120 margin-bottom-120 position-relative">
                <!-- Background icon -->
                <i class="fa-solid fa-paw position-absolute opacity-25 app-color paw-icon"></i>
                <!-- TOP LEFT DIV -->
                <div class="top-left col-6">
                        <!-- Main text -->
                        <h1 class="fw-normal margin-bottom-35"> Your cat is part of your family!</h1>
                        <!-- text -->
                        <p class="margin-top-25 margin-bottom-35">Give your cat best product it deserves. Find on our web shop</p>
                        <!-- button -->
                        <button class="btn btn-primary">Shop</button>
                </div>
                <!-- TOP RIGHT  DIV -->
                <div class="top-right col-6">
                        <!-- image -->
                        <img src="./assets/kitten.jpg" width="auto" height="100%">
                </div>
        </div>

        <!-- BOTTOM DIV -->
        <div class="bottom row margin-top-120 margin-bottom-120">
                <!-- BOTTOM TOP DIV -->
                <div class="bottom-top col-12 text-center">
                        <!-- Main text -->
                        <h1 class="fw-normal"> What We Can Do</h1>  
                        <!-- text -->
                        <p class="margin-top-25 margin-bottom-60">We took care of your family. See list of our services</p>
                </div>
                <!-- BOTTOM BOTTOM DIV - hold cards -->
                <div class="bottom-bottom row">
                        <!-- CARD HOLDER -->
                        <div class="col-md-3 col-sm-12" >
                                <!-- CARD -->
                                <div class="card">
                                        <!-- bootstrap 5 card body -->
                                        <div class="card-body text-center">
                                                <!-- circle wiyh icon -->
                                                <div class="img-crcle img-circle-blue position-relative">
                                                        <i class="fa-solid fa-bowl-food position-absolute fs-1 img-circle-icon"></i>
                                                </div>    
                                                <!-- card title -->    
                                                <h5 class="card-title">Royal Canin food</h5>
                                                <!-- card text -->   
                                                <p class="card-text">Royal Canin's mission has always been to promote nutrition and health. This is characterised by an exact balance of fifty different nutrients (proteins, fats, carbohydrates, amino acids, fatty acids, mineral salts, vitamins and essential elements). The formulation of their food is made up of a complex blend that guarantees a consistent nutrition... </p>
                                        </div>
                                </div>
                        </div>        
                        <!-- CARD HOLDER -->
                        <div class="col-md-3 col-sm-12" >
                                <!-- CARD -->
                                <div class="card">
                                        <!-- bootstrap 5 card body -->
                                        <div class="card-body text-center">
                                                <!-- circle wiyh icon -->
                                                <div class="img-crcle img-circle-orange position-relative">
                                                        <i class="fa-solid fa-volleyball position-absolute fs-1 img-circle-icon"></i>
                                                </div>    
                                                <!-- card title -->    
                                                <h5 class="card-title">Cat Toys and towers</h5>
                                                <!-- card text -->   
                                                <p class="card-text">Royal Canin's mission has always been to promote nutrition and health. This is characterised by an exact balance of fifty different nutrients (proteins, fats, carbohydrates, amino acids, fatty acids, mineral salts, vitamins and essential elements). The formulation of their food is made up of a complex blend that guarantees a consistent nutrition... </p>
                                        </div>
                                </div>
                        </div>       
                        <!-- CARD HOLDER -->
                        <div class="col-md-3 col-sm-12" >
                                <!-- CARD -->
                                <div class="card">
                                        <!-- bootstrap 5 card body -->
                                        <div class="card-body text-center">
                                                <!-- circle wiyh icon -->
                                                <div class="img-crcle img-circle-green position-relative">
                                                        <i class="fa-solid fa-chart-column position-absolute fs-1 img-circle-icon"></i>
                                                </div>    
                                                <!-- card title -->    
                                                <h5 class="card-title">Cat litter</h5>
                                                <!-- card text -->   
                                                <p class="card-text">Royal Canin's mission has always been to promote nutrition and health. This is characterised by an exact balance of fifty different nutrients (proteins, fats, carbohydrates, amino acids, fatty acids, mineral salts, vitamins and essential elements). The formulation of their food is made up of a complex blend that guarantees a consistent nutrition... </p>
                                        </div>
                                </div>
                        </div>       
                        <!-- CARD HOLDER -->
                        <div class="col-md-3 col-sm-12" >
                                <!-- CARD -->
                                <div class="card">
                                        <!-- bootstrap 5 card body -->
                                        <div class="card-body text-center">
                                                <!-- circle wiyh icon -->
                                                <div class="img-crcle img-circle-red position-relative">
                                                        <i class="fa-solid fa-pump-medical position-absolute fs-1 img-circle-icon"></i>
                                                </div>    
                                                <!-- card title -->    
                                                <h5 class="card-title">Hygene products</h5>
                                                <!-- card text -->   
                                                <p class="card-text">Royal Canin's mission has always been to promote nutrition and health. This is characterised by an exact balance of fifty different nutrients (proteins, fats, carbohydrates, amino acids, fatty acids, mineral salts, vitamins and essential elements). The formulation of their food is made up of a complex blend that guarantees a consistent nutrition... </p>
                                        </div>
                                </div>
                        </div>       
                </div>
        </div>
`;
