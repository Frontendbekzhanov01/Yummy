let btns = document.querySelectorAll(".menu button");

btns.forEach((item, index) => {
    item.addEventListener('click', () => {
        removeclass();
        remove();
        addactive(index);
        item.classList.add("active");
    });
});

function removeclass(){
    btns.forEach((item) => {
        item.classList.remove("active");
    });
}

let pages = document.querySelectorAll(".main div");

function remove() {
    pages.forEach((item,index) => {
        item.classList.remove("active");
    });
}

function addactive(value){
    pages.forEach((item,index) => {
        if(value == index){
            item.classList.add("active");
        }
    });
}

let formenu = document.querySelectorAll(".foods div");

formenu.forEach((item, index) => {
    item.addEventListener('click', () => {
        removechangecol();
        item.classList.add("changecol");
    });
});

function removechangecol(){
    formenu.forEach((item) => {
        item.classList.remove("changecol");
    });
}

//* swiper-js slider script *//

const swiper = new Swiper('.swiper', {
    direction: 'horizantal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
    },
});