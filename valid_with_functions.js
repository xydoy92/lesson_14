// Вариант с функциями, (лучше б я его не делал, но хотелось попробовать) только длиннее и запутанней((
// Если будет несложно, посмотри, покритикуй, подскажи

	// Массив с ранее зарегистрированными пользователями
let users = [
	{ login: "Kolya", password: "123456", },
	{ login: "Vasya", password: "654321", },
	{ login: "Petya", password: "abcdef", },
];
	// В разделе про функции говорится, что в них лучше не работать с глобальными переменными,
	// но я не знаю, как без него сохранить номер элемента массива, где пароль, соответствующий логину.
let userArrayNumber;
	// Функция валидации
function validate(validProp, validType, dataType) {
	// Флаг, говорящий, когда выходить из цикла валидации
	let validation = false;
	while (validation === false) {
		let repeatAgain = " Попробуйте ещё раз";
		let minLength;
		let maxLength;
		let translate;
		switch (dataType) {
			case "login":
				minLength = 3;
				maxLength = 10;
				translate = "логин";
				break;
			case "password":
				minLength = 6;
				maxLength = 16;
				translate = "пароль";
				break;
		}
		// Возможность для пользователя выйти
		if (validProp === null) {
			return true;
		// Если просто нажал ОК
		} else if (validProp === "") {
			validProp = prompt(`Вы не ввели ${translate}.${repeatAgain}`);
		// Валидация длины строки
		} else if (validProp.length < minLength || validProp.length > maxLength) {
			validProp = prompt(`${translate[0].toUpperCase() + translate.slice(1)} должен содержать от ${minLength} до ${maxLength} символов.${repeatAgain}`);
		// Валидация допустимых символов
		} else if (validProp.match(/\W/gu)) {
			validProp = prompt(`${translate[0].toUpperCase() + translate.slice(1)} может состоять только из латиницы любого регистра, цифр и нижнего подчёркивания.${repeatAgain}`);
		// Особая валидация
		} else {
			let functionForType;
			// Валидация на уже занятые логины при регистрации
			function validPrevUser() {
				for (let i = 0; i < users.length; i++) {
					if (validProp === users[i]["login"]) {
						validProp = prompt(`Такой ${translate} уже есть.${repeatAgain}`);
						return;
					}
				}
				users.push({});
				users[users.length - 1]["login"] = validProp;
				validation = true;
			}
			// Валидация пароля повторением при регистрации
			function repeatPassword() {
				let passwordCheck = prompt(`Повторите ${translate}`);
				while (validProp !== passwordCheck && passwordCheck !== null) {
					passwordCheck = prompt(`Пароли не совпадают.${repeatAgain}`);
				}
				if (passwordCheck === null) {
					return validProp = null;
				} else {
					validation = true;
					users[users.length - 1]["password"] = validProp;
					alert("Ура! Вы зарегистрировались. Теперь вы можете войти на сайт, используя свой логин и пароль");
				}
			}
			// Поиск логина при входе
			function matchLogin() {
				for (let i = 0; i < users.length; i++) {
					if (validProp === users[i]["login"]) {
						validation = true;
						userArrayNumber = i;
						return;
					}
				}
				validProp = prompt(`Такого пользователя нет.${repeatAgain}`);
			}
			// Валидация соответствия пароля логину при входе
			function matchPassword() {
				if (users[userArrayNumber]["password"] !== validProp) {
					validProp = prompt(`Пароль неверный.${repeatAgain}`);
				} else {
					validation = true;
					alert("Ура! Вы вошли на сайт, где ничего нет)");
				}
			}
			
			switch (validType + dataType) {
				case "reglogin":
					functionForType = validPrevUser();
					break;
				case "regpassword":
					functionForType = repeatPassword();
					break;
				case "enterlogin":
					functionForType = matchLogin();
					break;
				case "enterpassword":
					functionForType = matchPassword();
					break;
			}
		}
	}
}
	// Переменная для выхода в любой момент
let cancel = false;
	// Флаги валидации
let validType = "reg";
let dataType = "login";
let login = prompt("Зарегистрируйтесь, пожалуйста. Придумайте логин");
cancel = validate(login, validType, dataType);
let password;
	// Переменная для удаления пользователя из массива, если отказался от регистрации
let deleteUser = false;

if (!cancel) {
	dataType = "password";
	password = prompt("Придумайте пароль");
	cancel = validate(password, validType, dataType);
	deleteUser = cancel;
}

if (!cancel) {
	validType = "enter";
	dataType = "login";
	login = prompt("Введите свой логин");
	cancel = validate(login, validType, dataType);
}


if (!cancel) {
	dataType = "password";
	password = prompt("Введите свой пароль");
	cancel = validate(password, validType, dataType);
}

if (deleteUser) {
	users.pop();
}
	
if (cancel) {
	alert("Как хотите");
}