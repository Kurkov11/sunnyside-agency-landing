let mobileMenuShown = false;

document.querySelector('#hamburger').onclick = function(){
    if(mobileMenuShown){
        document.querySelector('#mobile-menu').style.display = 'none';
        document.querySelector('#triangle').style.display = 'none';
        mobileMenuShown = false;
        document.querySelector('#arrow-down').style.visibility = 'visible';
    }else{
        document.querySelector('#mobile-menu').style.display = 'block';
        document.querySelector('#triangle').style.display = 'block';
        mobileMenuShown = true;
        document.querySelector('#arrow-down').style.visibility = 'hidden';
    }
    
}