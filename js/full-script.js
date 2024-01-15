/* Загрузка HTML файлов */
async function loadFile(url, section = '.main', attr = {}) {
	try {
		const textHtml = await((await fetch(url)).text());
		document.querySelector(section).innerHTML += textHtml;

		if (url == 'html/landing.html') {
			const swiperCommunity = new Swiper('.community__swiper', {
				slidesPerView: 1,
				spaceBetween: 15,
				centeredSlides: true,
				loop: true,
				pagination: {
					el: ".community__swiper-pagination",
					dynamicBullets: true,
				},
				navigation: {
					nextEl: '.community__swiper-button-next',
					prevEl: '.community__swiper-button-prev',
				},
				breakpoints: {
					768: {
						slidesPerView: 3,
						spaceBetween: 30,
					}
				},
			});

			const questionsPoints = document.querySelectorAll('.questions__point');
			const questionsBtns = document.querySelectorAll('.questions__point-btn');
			questionsBtns.forEach((el, i) => {
				el.addEventListener('click', () => {
					questionsPoints[i].classList.toggle('questions__point_show');
				});
			});
			
			if (attr.page == 'money') {
				const startTitle = document.querySelector('.start__title');
				startTitle.classList.add('start__title_money');

				const differenceContainer = document.querySelector('.difference__container');
				differenceContainer.classList.add('difference__container_bg-3');

				const needImg = document.querySelector('.need__img');
				needImg.setAttribute('src', './images/need-2.jpg');
			}
		}
		else if (url == 'html/comments.html') {
			const swiperComments = new Swiper('.comments__swiper', {
				spaceBetween: 20,
				navigation: {
					nextEl: '.comments__swiper-button-next',
					prevEl: '.comments__swiper-button-prev',
				},
			});
		}
		else if (url == 'pages/drive.html') {
			loadFile('html/landing.html', '.landing');
		}
		else if (url == 'pages/money.html') {
			loadFile('html/landing.html', '.landing', {page: 'money'});
		}

		if (url == 'pages/home.html' || url == 'pages/partner.html'
					|| url == 'pages/about.html') {
			loadFile('html/comments.html', '.comments');
		}

		if (url != 'pages/contact.html') {
			const header = document.querySelector('.header');
			header.classList.add('main-header');
		}
		else if (url == 'pages/contact.html') {
			console.log(url);
			console.log('1');
			const header = document.querySelector('.header');
			header.classList.remove('main-header');
		}
	}
	catch (err) {
		console.log(err);
	}
}

loadFile('pages/home.html');

/* menu */
const menu = document.querySelector('.header__links');
const menuBtn = document.querySelector('.header__btn');

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('header__links_show');
});

const links = document.querySelectorAll('.logo, .menu__link > a');

links.forEach(el => {
	el.addEventListener('click', (evt) => {
		evt.preventDefault();

		const link = el.getAttribute('href');
		if (link != '#') {
			document.querySelector('.main').innerHTML = '';
			loadFile(link);
		}
		menu.classList.remove('header__links_show');
	});
});
