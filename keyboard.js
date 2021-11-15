


window.addEventListener('keydown', function (event) {
	console.log(event);	
	if (event.keyCode !== 16 && event.keyCode !== 13 && event.keyCode !== 9 && event.keyCode !== 8 && event.keyCode !== 20) {
		styleKeyDown(event.key, 'down');
		printLetter(event.key)
	}
	if (event.key == 'Backspace') {
		event.preventDefault()
		document.querySelector('#area').textContent = document.querySelector('#area').textContent.slice(0, -1);
		document.querySelector('.backspace').classList.add('active');
	}
	if (event.key == 'CapsLock') {
		event.preventDefault()
		document.querySelector('#area').textContent.toUpperCase;
		document.querySelector('.capslock').classList.add('active');
	}
	if (event.key == 'Tab') {
		event.preventDefault()
		document.querySelector('#area').textContent+= '\t';
		document.querySelector('.tab').classList.add('active');
	}
	if (event.key == 'Enter') {
		event.preventDefault()
		document.querySelector('#area').textContent+= '\n';
		document.querySelector('.enter').classList.add('active');
	}
	if (event.key == 'ShiftLeft') {
		event.preventDefault()
		document.querySelector('#area').textContent.toUpperCase;
		document.querySelector('.shiftLeft').classList.add('active');
	}
	if (event.key == 'ShiftRight') {
		event.preventDefault()
		document.querySelector('#area').textContent.toUpperCase;
		document.querySelector('.shiftRight').classList.add('active');
	}
})

window.addEventListener('keyup', function (event) {
	if (event.key == 'Enter') {
		document.querySelector('.enter').classList.remove('active');
	}
	if (event.key == 'Backspace') {
		document.querySelector('.backspace').classList.remove('active');
	}
	if (event.key == 'CapsLock') {
		document.querySelector('.capslock').classList.remove('active');
	}
	if (event.key == 'Tab') {
		document.querySelector('.tab').classList.remove('active');
	}
	if (event.code == 'Space') {
		document.querySelector('.space').classList.remove('active');
	}
	if (event.code == 'ShiftLeft') {
		document.querySelector('.shiftLeft').classList.remove('active');

	}
	if (event.code == 'ShiftRight') {
		document.querySelector('.shiftRight').classList.remove('active');

	}
	styleKeyDown(event.key, 'up');
})




function styleKeyDown(key, status) {
	let letter = document.querySelectorAll('.letter');
	for (let i = 0; i < letter.length; i++) {
		if (letter[i].textContent === key) {
			if (status === 'down') {
				letter[i].classList.add('active')
			}
			else if (status === 'up') {
				letter[i].classList.remove('active')
			}
		}
	}
}

function printLetter(letter) {
	const area = document.querySelector('#area');
	area.textContent += letter
}




