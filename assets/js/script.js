const sliders=document.querySelectorAll('.slider-component');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
let count = 0;

sliders.forEach((slider,index) => {
    slider.style.left=`${100*index}%`;
});
function SlideImages() {
    sliders.forEach(slider => {
        slider.style.transform=`translateX(-${count*100}%)`
    });
}
leftButton.addEventListener('click',function () {
    if (count>0) {
        count--;
        SlideImages();
    }
})
rightButton.addEventListener('click',function () {
    if (count<sliders.length-1) {
        count++;
        SlideImages();
    }   
})