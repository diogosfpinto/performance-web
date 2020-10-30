var jarodei = false;

var imgs = document.querySelectorAll('img[data-src]');

var heightPage = window.innerHeight;

window.onscroll = function(){

    // throttle
    if (jarodei) return;
    jarodei = true;
    setTimeout(function(){
        jarodei = false;
    }, 100);
    
    for (var i = 0 ; i < imgs.length ; i++ ){

        if (imgs[i].getBoundingClientRect().top < heightPage + 200){
            imgs[i].src = imgs[i].getAttribute('data-src');
        }        
    }

}