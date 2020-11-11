
(function(){


    var jarodei = false;

    //pega todas as imagens num array e pré-calcula seu topo;

    var imgs = document.querySelectorAll('img[data-src]');
    var cache = [];
    for (var i = 0; i < imgs.length; i++){
        cache.push({
            topo: imgs[i].getBoundingClientRect().top + pageYOffset,
            elemento: imgs[i]
        });
    }

    console.log(imgs);

    var heightPage = window.innerHeight;

    window.addEventListener('scroll', function scrollListener() {

        // throttle
        if (jarodei) return;
        jarodei = true;
        setTimeout(function(){
            jarodei = false;
        }, 100);
        
        while (cache.length && cache[0].topo < pageYOffset + heightPage + 200){
            var img = cache.shift().elemento;
            img.src = img.getAttribute('data-src');
        }

        if (cache.length == 0){
            window.removeEventListener('scroll', scrollListener);
        }

    });
})();