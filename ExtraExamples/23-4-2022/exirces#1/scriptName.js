wrapper = document.getElementById('wrapper');
let topLayer = wrapper.querySelector('.top');
let handle = wrapper.querySelector('.handle');

document.addEventListener('mousemove' , function(e){
    
    delta = (e.clientX - window.innerWidth / 2);
    
    handle.style.left = e.clientX + delta + 'px';

    console.log(delta);
    topLayer.style.width= e.clientX  + 1000+ delta + 'px';
});