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

let pages = document.querySelectorAll(".main .card");

function remove() {
    pages.forEach((item,index) => {
        item.classList.remove("active");
    });
}

function addactive(value){
    pages.forEach((item,index) => {
        if(value == index){
            item.classList.add("active")
        }
    });
}

pages.forEach((item,index)=>{
    console.log(index);
})

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
    //!Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 1,
    //!Autoplay
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
      },
});

//* menu-button script *//

let menu = document.querySelectorAll(".change-menu div")

menu.forEach((item,index) => {
    item.addEventListener('click', () => {
        menuclassremove()
        item.classList.add("active")
    })
})

function menuclassremove() {
    menu.forEach((item) => {
        item.classList.remove("active")
    })
}