/*!
* Used to route to different pages
* Used this guide: Praveen Kumar Saini : "Implementing Simple SPA Routing Using Vanilla JavaScript"
* Url: https://medium.com/altcampus/implementing-simple-spa-routing-using-vanilla-javascript-53abe399bf3c
* Page accessed at 25/12/2022.
*/

// Dclaring our pages and path
const routes = {
    '/' : home,
    '/shop' : shop,
    '/cart' : cart
 };
// use jQuery to get div element with id root
const rootDiv = document.getElementById('root');
// attach as inner html proper file
rootDiv.innerHTML = routes[window.location.pathname];

// on link click we will use this method
// reference : https://medium.com/altcampus/implementing-simple-spa-routing-using-vanilla-javascript-53abe399bf3c
const onNavigate = (pathName) =>{
    
    window.history.pushState(
        pathName,
        window.location.origin + pathName
    )
    rootDiv.innerHTML = routes[pathName];
}

/**
 * when the browser call’s it’s pushState() method 
 * another method is also called i.e window.onpopstate.
 * Whenever the pushState is called we are going to render our section. For that all we need to apply this.
 * reference : https://medium.com/altcampus/implementing-simple-spa-routing-using-vanilla-javascript-53abe399bf3c
 */
window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname]
}