
const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', ()=>{
    menuMobile.classList.toggle('menu-open');
})

const swiperOne = new Swiper('.feedback__slider', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  
   
  });

  const swiperTwo = new Swiper('.certificates__slider', {
    loop: true,
    slidesPerView: "3",
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
        },
      480: {
        slidesPerView: 2,
        },
        360: {
          slidesPerView: 1,
          },
    },
  });

  const acordeon = document.querySelector('.acordeon');
  const acordeonTitles = document.querySelectorAll('.acordeon__title');

  acordeonTitles.forEach.call(acordeonTitles, function (acordeonTitle){
    acordeonTitle.addEventListener('click' , function() {
     const currentText =acordeonTitle.parentElement.querySelector('.acordeon__text');
      
     acordeonTitle.classList.toggle('acordeon__title--active');
     currentText.classList.toggle('acordeon__text--visible');
      
     if(currentText.classList.contains('acordeon__text--visible')){
      currentText.style.maxHeigh = currentText.scrollHeigh+'px'
     }
     else{
      currentText.style.maxHeigh = null;
     }
    

    })
  })