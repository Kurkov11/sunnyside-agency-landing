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

document.querySelector('#facebook-container').onmouseover = function(){
    document.querySelector('#fa-white').style.display = 'block';
    document.querySelector('#fa').style.display = 'none';
}
document.querySelector('#facebook-container').onmouseout = function(){
    document.querySelector('#fa-white').style.display = 'none';
    document.querySelector('#fa').style.display = 'block';
}


document.querySelector('#instagram-container').onmouseover = function(){
    document.querySelector('#in-white').style.display = 'block';
    document.querySelector('#in').style.display = 'none';
}
document.querySelector('#instagram-container').onmouseout = function(){
    document.querySelector('#in-white').style.display = 'none';
    document.querySelector('#in').style.display = 'block';
}


document.querySelector('#twitter-container').onmouseover = function(){
    document.querySelector('#tw-white').style.display = 'block';
    document.querySelector('#tw').style.display = 'none';
}
document.querySelector('#twitter-container').onmouseout = function(){
    document.querySelector('#tw-white').style.display = 'none';
    document.querySelector('#tw').style.display = 'block';
}


document.querySelector('#pinterest-container').onmouseover = function(){
    document.querySelector('#pi-white').style.display = 'block';
    document.querySelector('#pi').style.display = 'none';
}
document.querySelector('#pinterest-container').onmouseout = function(){
    document.querySelector('#pi-white').style.display = 'none';
    document.querySelector('#pi').style.display = 'block';
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