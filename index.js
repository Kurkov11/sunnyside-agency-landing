let mobileMenuShown = false;

document.querySelector('#hamburger').onclick = function(){
    if(mobileMenuShown){
        document.querySelector('#mobile-menu').style.display = 'none';
        document.querySelector('#triangle').style.display = 'none';
        mobileMenuShown = false;
        document.querySelector('#arrow-down').style.visibility = 'visible';
        document.querySelector('#mainHeading').style.visibility = 'visible';
    }else{
        document.querySelector('#mobile-menu').style.display = 'block';
        document.querySelector('#triangle').style.display = 'block';
        mobileMenuShown = true;
        document.querySelector('#arrow-down').style.visibility = 'hidden';
        document.querySelector('#mainHeading').style.visibility = 'hidden';
    }
    
}

document.querySelector('#yellow-learn-more-text').onmouseover = function(){
    document.querySelector('#yellow-learn-more-underline').style.height = "0.65rem";
    document.querySelector('#yellow-learn-more-underline').style.backgroundColor = 'hsl(51, 100%, 49%)';
}
document.querySelector('#yellow-learn-more-text').onmouseout = function(){
    document.querySelector('#yellow-learn-more-underline').style.height = "0.5rem";
    document.querySelector('#yellow-learn-more-underline').style.backgroundColor = 'hsla(51, 100%, 49%, 0.3)'
}


document.querySelector('#red-learn-more-text').onmouseover = function(){
    document.querySelector('#red-learn-more-underline').style.height = "0.65rem";
    document.querySelector('#red-learn-more-underline').style.backgroundColor = 'hsl(7, 99%, 70%)';
}
document.querySelector('#red-learn-more-text').onmouseout = function(){
    document.querySelector('#red-learn-more-underline').style.height = "0.5rem";
    document.querySelector('#red-learn-more-underline').style.backgroundColor = 'hsla(7, 99%, 70%, 0.3)';
}