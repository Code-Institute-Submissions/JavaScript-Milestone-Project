function initMap() {    
        latLng = new google.maps.LatLng(1.373333, 32.290276)
        var mapOptions = {
            center: latLng,
            zoom: 6,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var marker = new google.maps.Marker({
            position: latLng,
            visible: true
        });
        marker.setMap(map);
    
        var locations = [
            {lat: 0.347596, lng: 32.582520}
        ];
};    

//slide not displaying us intended images not responsive

// carousel slide

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons

const prevBtn = document.querySelector('#prevBtn');
const nextvBtn = document.querySelector('#nextBtn');

//counter

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button listners

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
}); 

/*

//Failed codes to get a slide. images not responsives 

var i = 0; //start point
var images = [];
var time = 3000;

// Image List

images[0] = 'IMG_2537.png';
images[1] = 'IMG_2784.png';
images[2] = 'IMG_3001.png';
images[3] = 'IMG_3007.png';
images[4] = 'IMG_3050.png';
images[5] = 'IMG_3051.png';
images[6] = 'IMG_3060.png';
images[7] = 'IMG_3110.png';
images[8] = 'IMG_3112.png';
images[9] = 'IMG_3142.png';
images[10] = 'IMG_3274.png';
images[11] = 'IMG_3298.png';
images[12] = 'IMG_3325.png';
images[13] = 'IMG_3328.png';
images[14] = 'IMG_3336.png';
images[15] = 'IMG_3448.png';
images[16] = 'IMG_3467.png';
images[17] = 'IMG_3478.png';
images[18] = 'IMG_3496.png';
images[19] = 'IMG_3502.png';

//Change image

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length -1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;
*/

