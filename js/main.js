const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

for (let btn of infoBtns) {
	btn.addEventListener('click', showHint);
}

function showHint(e) {
	e.stopPropagation();
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
	loop: true,
	slidesPerView: 4,
	spaceBetween: 42,
	// breakpoints: {
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
	freeMode: true,
	navigation: {
		nextEl: '#sliderNext',
		prevEl: '#sliderPrev',
	},
});
