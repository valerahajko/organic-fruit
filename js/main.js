$(document).ready(function () {
    // stars
    // в index.html дописуємо зачення  data-rating="4.5"      приклад: <div class="customer-stars" data-rating="4.5"></div> <!-- вказуємо, який у нас буде відображатись кейтинг по замовчуванню -->
    $(".customer-starts").starRating({ // вказуємо клас, до якого хочемо звернутись
        totalStars:5,   // кількість зірок
        strokeColor: '#F1B90B', 
        ratedColor: '#F1B90B',
        starSize: 23, // розмір зірок
        readOnly: false, // в документації розписано багато параметрів відображення. Якщо ми зазначимо TRUE - не можна буде змінювати рейтинг
        strokeWidth: 20, // товщина рамки   зірок
      });

    //   slider
    $(".customers-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="btn slider-btn slider-prev"></button>',
        nextArrow: '<button class="btn slider-btn slider-next active"></button>',
        responsive: [
            {
                breakpoint: 981, //   завжди вказуємо на 1 піксель більше
                settings: {
                  arrows:false,
                  dots: true,
                }
            },
        ]
    });

    $('.slider-btn').click(function(){          // це умова, щоб активна кнопка слайдеру була з заливкою
        $('.slider-btn').removeClass("active");   // ПРАВИЛО - все, що ми приймаємо, чи відправляємо в html має бути в ковичках - '.slider-btn'
        $(this).addClass("active")  // ПРАВИЛО - коли ми добавляємо, або видаляємо у елемента клас в JS, ми крапку не ставимо, тому "active" без крапки. Ми додаємо крапку тільки тоді, коли хочемо знайти елемент.
    });

    $(".burger").click(function(){  // це умова, щоб змінювати клас burger (для меню при адаптиві)
        $(".burger").toggleClass("active") //
        $(".nav").toggleClass("active") //
        $("body").toggleClass("hidden") // щоб не можна було скролити, коли менюю розкпите

    })
});