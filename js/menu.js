const hamb = document.querySelector('#burger');
const popup = document.querySelector('#popup');

const menu = document.querySelector('#menu').cloneNode(1);
const body = document.body;

hamb.addEventListener('click', hambHandler);

let counter=0;

function hambHandler(e) {
	popup.classList.toggle('open');
	renderPopup();
	body.classList.toggle('noscroll');
	counter += 1;
	if (isEven(counter)) {
		hamb.classList.remove('close');
	}
	else {hamb.classList.add('close');}
	
}

function isEven(counter) {
	return counter % 2 === 0;
}

function renderPopup() {
	popup.appendChild(menu);
}