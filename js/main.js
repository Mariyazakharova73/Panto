const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

const tabsProducts = document.querySelectorAll('[data-tab-value]');

for (let btn of infoBtns) {
	btn.addEventListener('click', showHint);
}

function showHint(e) {
	e.stopPropagation();

	// Закрыть все тултипы
	for (let hint of infoHints) {
		hint.classList.add('none');
	}
	// Показать/скрыть текущий тултип
	this.parentNode.querySelector('.info-hint').classList.toggle('none');
}

function closeHint() {
	for (let hint of infoHints) {
		hint.classList.add('none');
	}
}

document.addEventListener('click', closeHint);

// запрещаем всплытие события при клике на подсказки
for (let hint of infoHints) {
	hint.addEventListener('click', e => e.stopPropagation());
}

const swiper = new Swiper('.swiper', {
	// loop: true,
	slidesPerView: 4,
	spaceBetween: 42,
	breakpoints: {
		// 	600: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 20,
		// 	},
		// 	768: {
		// 		slidesPerView: 4,
		// 		spaceBetween: 40,
		// 	},
		// 	1024: {
		// 		slidesPerView: 5,
		// 		spaceBetween: 50,
		// 	},
		// },
		1440: {
			slidesPerView: 4,
			spaceBetween: 50,
		},
	},
	// freeMode: true,
	navigation: {
		nextEl: '#sliderNext',
		prevEl: '#sliderPrev',
	},
});

// tabs
//
const tabsBtns = document.querySelectorAll('[data-tab]');

for (let btn of tabsBtns) {
	btn.addEventListener('click', function () {
		// Убираем активные классы у всех кнопок
		for (let btn of tabsBtns) {
			btn.classList.remove('tab-controls__bth--active');
		}
		// Добавляем активный класс к текущей кнопке
		this.classList.add('tab-controls__bth--active');

		// Скрыть лишние все товары
		for (let product of tabsProducts) {
			if (this.dataset.tab === 'all') {
				product.classList.remove('none');
			} else {
				if (product.dataset.tabValue === this.dataset.tab) {
					product.classList.remove('none');
				} else {
					product.classList.add('none');
				}
			}
		}

		swiper.update();
	});
}

// Mobile nav mobile-nav-wrapper--open

const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');

const mobileNav = document.querySelector('#mobile-nav');

mobileNavOpenBtn.onclick = function () {
	mobileNav.classList.add('mobile-nav-wrapper--open');
};

mobileNavCloseBtn.onclick = function () {
	mobileNav.classList.remove('mobile-nav-wrapper--open');
};
