'use strict'

let num1 = '';
let operator = '';
let num2 = '';
let numsCount = 0;
let firstSymbol = true;
let pointCount = false;

const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operators = ['+', '-', '×', '÷', 'AC', 'x2', '√x', '%', '+/-'];

const numsFieldElement = document.querySelector('.nums__field');

function clearAll() {
	num1 = '';
	operator = '';
	num2 = '';
	numsFieldElement.value = '';
	firstSymbol = true;
	numsCount = 0;
	pointCount = false;
	console.log(num1, operator, num2, '\nПервый символ:', firstSymbol, '\nПробел между цифр:', numsCount, '\nЗапятая у числа:', pointCount);
}

document.querySelector('.delete__btn').onclick = clearAll;
document.querySelector('.clear').onclick = clearAll;

document.querySelector('.calc').onclick = event => {
	const key = event.target.textContent;

	// Проверка нажатия кнопок
	if (!event.target.classList.contains('calc__btn') && !event.target.classList.contains('operators__btn')) {
		return;
	} 

	if (event.target.classList.contains('delete__btn') || event.target.classList.contains('clear')) {
		return;
	}

	// Проверка на переполнение минусами
	if (key === '-' && num1 === '-') {
		return;
	}
	// if (numsFieldElement.value == operators[operators.indexOf(key)]) {
	// 	numsFieldElement.value = '';
	// 	console.log(num1, operator, num2, '\nПервый символ:', firstSymbol, '\nПробел между цифр:', numsCount, '\nЗапятая у числа:', pointCount);
	// }

	//Добавление запятой
	if (key === ',' && !pointCount && numsFieldElement.value.length <= 20) {
		if (num1 === '' || num1 === '+' || num1 === '-') {
			num1 += '0.';
			numsFieldElement.value += '0,';
		}
		else if (pointCount === false) {
			num1 += '.';
			numsFieldElement.value += ',';
		}
		pointCount = true;
		firstSymbol = false;
		numsCount = -Infinity;
		console.log(num1, operator, num2, '\nПервый символ:', firstSymbol, '\nПробел между цифр:', numsCount, '\nЗапятая у числа:', pointCount);
		return;
	}

	// Пробел между цифрами
	if (numsCount === 3 && numsFieldElement.value.length <= 19) {
		numsFieldElement.value += ' ';
		numsCount = 0;
		console.log(num1, operator, num2, '\nПервый символ:', firstSymbol, '\nПробел между цифр:', numsCount, '\nЗапятая у числа:', pointCount);
	}

	// Ограничение ввода нулей
	if (key === '0' && (numsFieldElement.value === '0' || numsFieldElement.value === '-0')) {
		console.log(num1, operator, num2, '\nПервый символ:', firstSymbol, '\nПробел между цифр:', numsCount, '\nЗапятая у числа:', pointCount);
		return;
	}

	// Работа с числами
	if (nums.includes(key) && numsFieldElement.value.length <= 19) {
		if (num2 === '' && operator === '') {
			num1 += key;
		}
		if (firstSymbol && operator !== '') {
			numsFieldElement.value = '';
			num2 += key;
		}
		else if (operator !== '') {
			num2 += key;
		}
		numsFieldElement.value += key;
		firstSymbol = false;
		numsCount++;
		console.log(num1, operator, num2, '\nПервый символ:', firstSymbol, '\nПробел между цифр:', numsCount, '\nЗапятая у числа:', pointCount);
		return;
	}

	// Добавление оператора перед числом
	if (firstSymbol && key === '-') {
		if (num1 === '') {
			num1 = key;
			numsFieldElement.value = num1;
		}
		else if (num1 !== '') {
			num2 = key;
			numsFieldElement.value = num2;
		}
		firstSymbol = false;
		console.log(num1, operator, num2, '\nПервый символ:', firstSymbol, '\nПробел между цифр:', numsCount, '\nЗапятая у числа:', pointCount);
		return;
	}

	//Работа с операторами
	if (operators.includes(key)) {
		if (key === '√x' && num1 >= 0) {
			num1 = Math.sqrt(num1);
			numsFieldElement.value = num1;
			firstSymbol = false;
			return;
		}
		else if (key === '√x') {
			numsFieldElement.value = 'Ошибка';
			num1 = '';
			firstSymbol = true;
			numsCount = 0;
			firstSymbol = false;
			return;
		}
		else if (key === 'x2') {
			num1 = Math.pow(num1, 2);
			numsFieldElement.value = num1;
			firstSymbol = false;
			return;
		}
		else if (key === '%') {
			num1 = num1 / 100;
			numsFieldElement.value = num1;
			firstSymbol = false;
			return;
		}
		else if (key === '+/-') {
			num1 = -num1;
			numsFieldElement.value = num1;
			firstSymbol = false;
			return;
		}
		operator = key;
		firstSymbol = true;
		numsCount = 0;
		pointCount = false;
		numsFieldElement.value = operator;
		console.log(num1, operator, num2, '\nПервый символ:', firstSymbol, '\nПробел между цифр:', numsCount, '\nЗапятая у числа:', pointCount);
		return;
	}

	// Результат
	if (key === '=') {
		switch (operator) {
			case '+':
				num1 = +num1 + +num2;
				break;
			case '-':
				num1 = num1 - num2;
				break;
			case '×':
				num1 = num1 * num2;
				break;
			case '÷':
				if (num2 === '0') {
					numsFieldElement.value = 'Ошибка';
					operator = '';
					num2 = '';
					num1 = '';
					console.log(num1, operator, num2, '\nПервый символ:', firstSymbol, '\nПробел между цифр:', numsCount, '\nЗапятая у числа:', pointCount);
					return;
				}
				num1 = num1 / num2;
				break;
		}
		numsFieldElement.value = num1;
		operator = '';
		num2 = '';
		numsCount = 0;
		numsFieldElement.value = numsFieldElement.value.replace('.', ',');
		console.log(num1, operator, num2, '\nПервый символ:', firstSymbol, '\nПробел между цифр:', numsCount, '\nЗапятая у числа:', pointCount);
		return;
	}
}
