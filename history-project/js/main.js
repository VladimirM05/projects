const burgerButtonElement = document.getElementsByClassName('burger__menu');
const burgerMenuElement = document.getElementsByClassName('burger-menu__list');
const menuItemElement = document.getElementsByClassName('burger-menu__link');

burgerButtonElement[0].addEventListener('click', () => {
	if (burgerMenuElement[0].classList.contains('display') === true) {
		burgerMenuElement[0].classList.remove('display');
	}
	else {
		burgerMenuElement[0].classList.add('display');
	}
})

menuItemElement[0].addEventListener('click', () => {
	burgerMenuElement[0].classList.add('display')
	burgerButtonElement[0].innerHTML = '<ion-icon class="burger__icon" name="menu-outline"></ion-icon>'
})

menuItemElement[1].addEventListener('click', () => {
	burgerMenuElement[0].classList.add('display')
	burgerButtonElement[0].innerHTML = '<ion-icon class="burger__icon" name="menu-outline"></ion-icon>'
})

menuItemElement[2].addEventListener('click', () => {
	burgerMenuElement[0].classList.add('display')
	burgerButtonElement[0].innerHTML = '<ion-icon class="burger__icon" name="menu-outline"></ion-icon>'
})

menuItemElement[3].addEventListener('click', () => {
	burgerMenuElement[0].classList.add('display')
	burgerButtonElement[0].innerHTML = '<ion-icon class="burger__icon" name="menu-outline"></ion-icon>'
})

menuItemElement[4].addEventListener('click', () => {
	burgerMenuElement[0].classList.add('display')
	burgerButtonElement[0].innerHTML = '<ion-icon class="burger__icon" name="menu-outline"></ion-icon>'
})

menuItemElement[5].addEventListener('click', () => {
	burgerMenuElement[0].classList.add('display')
	burgerButtonElement[0].innerHTML = '<ion-icon class="burger__icon" name="menu-outline"></ion-icon>'
})

menuItemElement[6].addEventListener('click', () => {
	burgerMenuElement[0].classList.add('display')
	burgerButtonElement[0].innerHTML = '<ion-icon class="burger__icon" name="menu-outline"></ion-icon>'
})
