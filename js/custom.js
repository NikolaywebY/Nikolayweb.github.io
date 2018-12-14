    $('.carousel').carousel({
        interval: false
    })

   $(".navbar-nav,.navbar-header,.footer-top").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
     if(id=='#main'){$('body,html').animate({scrollTop: 0}, 800);}else{$('body,html').animate({scrollTop: top}, 800);}
	});