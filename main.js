const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuhamburgicon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingcart = document.querySelector('.navbar-shopping-cart');
const productdetail = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuhamburgicon.addEventListener('click', togglemobilemenu);
shoppingcart.addEventListener('click', toggleshoppingcart)

function toggleDesktopMenu() {
    const detailprodc = productdetail.classList.contains('inactive');
    
    if(!detailprodc){
        productdetail.classList.add("inactive");

    }
    
    
    desktopMenu.classList.toggle('inactive');
}

function togglemobilemenu() {
    const detailprodc = productdetail.classList.contains('inactive');
    
    if(!detailprodc){
        productdetail.classList.add("inactive");

    }
    
    mobileMenu.classList.toggle('inactive');
}

function toggleshoppingcart() {
    const menumovil = mobileMenu.classList.contains('inactive');
    const menudesktop = desktopMenu.classList.contains('inactive');
    if(!menumovil){
        mobileMenu.classList.add("inactive");

    }
    
    productdetail.classList.toggle('inactive');
}