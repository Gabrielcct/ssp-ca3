/*!
* Used to route to different pages
* Used this guide: Praveen Kumar Saini : "Implementing Simple SPA Routing Using Vanilla JavaScript"
* Url: https://medium.com/altcampus/implementing-simple-spa-routing-using-vanilla-javascript-53abe399bf3c
* Page accessed at 25/12/2022.
*/


// setting paths and connecting them to variables 
const routes = {
    '/' : home,
    '/shop' : shop,
    '/manager' : manager
 };

// use jQuery to get div element with id root
const rootDiv = document.getElementById('root');

// attach as inner html proper file. Set initially a home 
rootDiv.innerHTML = routes['/'];

// on link click we will use this method
// https://medium.com/altcampus/implementing-simple-spa-routing-using-vanilla-javascript-53abe399bf3c
const onNavigate = (pathName, elId) =>{
    window.history.pushState(
        pathName,
        window.location.origin + pathName
    )
    rootDiv.innerHTML = routes[pathName];
    // draw table only on shop and shop manager 
    if(pathName === '/shop'){
        drawTable();
    }else if(pathName === '/manager'){
        getEditCards();
        getEditShopTable();
      
    }else{
        // on home page get cards
        getCards();
    }
    
    //on clicking navigation button 
    // remove first active class
    $(".top-nav").removeClass("active"); 
    // and then attach it to currently clicked link by jQuery
    $(`#${elId}`).addClass("active");
}

/**
 * when the browser call’s it’s pushState() method 
 * another method is also called i.e window.onpopstate.
 * Whenever the pushState is called we are going to render our section. For that all we need to apply this.
 * https://medium.com/altcampus/implementing-simple-spa-routing-using-vanilla-javascript-53abe399bf3c
 */
window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname];
}

