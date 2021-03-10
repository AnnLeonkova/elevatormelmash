
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
                  


//class="header-search поиск по сайту
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
 
 
 
 //слайдер
 
  var swiper = new Swiper('.swiper-container', {
     spaceBetween: 30,
     //effect: 'fade',
     centeredSlides: true,
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
 