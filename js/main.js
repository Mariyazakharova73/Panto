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
	// Optional parameters
	// direction: 'horizontal',
	// loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '#sliderNext',
		prevEl: '#sliderPrev',
	},
});
