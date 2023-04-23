
const menuClose = document.getElementById('menuClose')
const menu = document.getElementById('main-menu')
const menuBurger= document.getElementById('menuBurger')

if(menuBurger){
	menuBurger.addEventListener('click', menu_open())
}

if(menuClose){
	menuClose.addEventListener('click', menu_close())
}

function menu_open() {
	menu.classList.add('open');
}

function menu_close() {
	menu.classList.remove('open');
}
