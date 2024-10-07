const burgerMenu = document.getElementById('burger-menu');
const mainNav = document.getElementById('main-nav');
const burgerEffect = document.getElementById('burger-effect');
const exitBtn = document.getElementById('exit-btn');

burgerMenu.addEventListener('click', () => {
	if (mainNav.style.display === 'flex') {
		mainNav.style.display = 'none';
		exitBtn.style.display = 'none';
		// document.body.style.overflowY = 'auto';
		// document.documentElement.style.overflowY = 'auto';
		// document.documentElement.style.height = 'auto';
	} else {
		mainNav.style.display = 'flex';
		exitBtn.style.display = 'block';
		burgerEffect.style.display = 'block';
		// document.body.style.overflowY = 'hidden';
		// document.documentElement.style.overflowY = 'hidden';
		// document.body.style.height = '100vh';
	};
});

function exit() {
	mainNav.style.display = 'none';
	burgerEffect.style.display = 'none';
}