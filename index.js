

//слайдер

var swiper = new Swiper('.swiper-container.swiper-container--hero', {
   spaceBetween: 30,
   effect: 'fade',
   centeredSlides: true,
   loop: true,
   loopFillGroupWithBlank: true,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   autoplay: {
      delay: 4500,
      disableOnInteraction: false,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});






//header-lang выбор языка

$('.select').each(function () {
   const _this = $(this),
      selectOption = _this.find('option'),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(':selected'),
      duration = 450; // длительность анимации 

   _this.hide();
   _this.wrap('<div class="select"></div>');
   $('<div>', {
      class: 'new-select',
      text: _this.children('option:disabled').text()
   }).insertAfter(_this);

   const selectHead = _this.next('.new-select');
   $('<div>', {
      class: 'new-select__list'
   }).insertAfter(selectHead);

   const selectList = selectHead.next('.new-select__list');
   for (let i = 1; i < selectOptionLength; i++) {
      $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
               text: selectOption.eq(i).text()
            })
         })
         .attr('data-value', selectOption.eq(i).val())
         .appendTo(selectList);
   }

   const selectItem = selectList.find('.new-select__item');
   selectList.slideUp(0);
   selectHead.on('click', function () {
      if (!$(this).hasClass('on')) {
         $(this).addClass('on');
         selectList.slideDown(duration);

         selectItem.on('click', function () {
            let chooseItem = $(this).data('value');

            $('select').val(chooseItem).attr('selected', 'selected');
            selectHead.text($(this).find('span').text());

            selectList.slideUp(duration);
            selectHead.removeClass('on');
         });

      } else {
         $(this).removeClass('on');
         selectList.slideUp(duration);
      }
   });
});





// minimalict-search строка поиска
const overlay1 = document.querySelector('.overlay-1');
const overlay2 = document.querySelector('.overlay-2');
const search = document.querySelector('.search');
const input = document.querySelector('.input');
overlay1.addEventListener('click', () => {
   search.classList.toggle('active');
   if (search.classList.contains('active')) {
      setTimeout(() => {
         input.focus();
      }, 200)
   }
})
search.addEventListener('click', () => {
   if (search.classList.contains('active')) {
      setTimeout(() => {
         input.focus();
      }, 200)
   }
})
overlay2.addEventListener('click', (e) => {
   input.value = '';
   input.focus();
   search.classList.remove('searching')
})
document.body.addEventListener('click', (e) => {
   if (!search.contains(e.target) && input.value.length === 0) {
      search.classList.remove('active');
      search.classList.remove('searching');
      input.value = '';
   }
})
input.addEventListener('keyup', (e) => {
   if (e.keyCode === 13) {
      input.blur();
   }
})
input.addEventListener('input', () => {
   if (input.value.length > 0) {
      search.classList.add('searching')
   } else {
      search.classList.remove('searching')
   }
})
input.value = '';
input.blur();




//<!--maskedinput маска телефона

$(document).ready(function () {
   $("#phone").mask("+7 (999) 999-99-99");
});






//<!--formValid проверка формы
var form = $('#form').formValid({
   fields: {
      "name": {
         "required": true,
         "tests": [{
            "type": "null",
            "message": "* Введите ваше Имя"
         }]
      },

      "email": {
         "required": true,
         "tests": [{
               "type": "null",
               "message": "* Введите ваш e-mail"
            },
            {
               "type": "email",
               "message": "* Введите ваш e-mail "
            }
         ]
      },

      "phone": {
         "required": true,
         "tests": [{
            "type": "null",
            "message": "* Введите ваш телефон"
         }]
      }
   }
});

form.keypress(300);

$('button[type="submit"]').click(function () {
   form.test();
   if (form.errors() == 0) {
      alert('Ok');
   }
   return false;
});




// слайдер новости 

var swiper = new Swiper(".swiper-container.swiper-container--news", {
   slidesPerView: 3,
   spaceBetween: 0,
   loop: true,
   loopFillGroupWithBlank: true,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
	 },
	 breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 760px
    760: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 0
    }
  }
});
   
   




//menu burger

(function ($) {
    $(function(){
        $('.icon').on('click', function(){
            $(this).closest('.menu').toggleClass('menu-open');
        });
    });
})(jQuery);




// Отправка данных на сервер
function send(event, php){
console.log("Отправка запроса");
event.preventDefault ? event.preventDefault() : event.returnValue = false;
var req = new XMLHttpRequest();
req.open('POST', php, true);
req.onload = function() {
	if (req.status >= 200 && req.status < 400) {
	json = JSON.parse(this.response); // Ебанный internet explorer 11
    	console.log(json);
        
    	// ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
    	if (json.result == "success") {
    		// Если сообщение отправлено
    		alert("Сообщение отправлено");
    	} else {
    		// Если произошла ошибка
    		alert("Ошибка. Сообщение не отправлено");
    	}
    // Если не удалось связаться с php файлом
    } else {alert("Ошибка сервера. Номер: "+req.status);}}; 

// Если не удалось отправить запрос. Стоит блок на хостинге
req.onerror = function() {alert("Ошибка отправки запроса");};
req.send(new FormData(event.target));
}