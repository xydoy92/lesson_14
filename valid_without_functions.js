// Validation task with *
	// Первоначальный вариант без функций.
	// Поскольку тут много повторяющегося кода, попробовал ниже переделать через функции.

	// Массив с ранее зарегистрированными пользователями
let users = [
	{ login: "Kolya", password: "123456", },
	{ login: "Vasya", password: "654321", },
	{ login: "Petya", password: "abcdef", },
];
	// Переменная для выхода в любой момент
let cancel = false;
	// Переменная для цикла валидации
let validation = false;
let login = prompt("Зарегистрируйтесь, пожалуйста. Придумайте логин");
let password;
	// Переменная для удаления пользователя из массива, если отказался регистрироваться
let deleteUser = false;
	// Цикл валидации
while (validation === false && cancel === false) {
	// Возможность для пользователся выйти
	foundMatch:
	if (login === null) {
		cancel = true;
	// Если просто нажал ОК
	} else if (login === "") {
		login = prompt("Вы не ввели логин. Попробуйте ещё раз");
	// Валидация длины строки
	} else if (login.length < 3 || login.length > 10) {
		login = prompt("Логин должен содержать от 3 до 10 символов. Попробуйте ещё раз");
	// Валидация на символы
	} else if (login.match(/\W/gu)) {
		login = prompt("Логин может состоять только из латиницы любого регистра, цифр и нижнего подчёркивания. Попробуйте ещё раз");
	// Сверка с уже зарегистрированными
	} else {
		for (let i = 0; i < users.length; i++) {
			if (login === users[i]["login"]) {
				login = prompt("Такой логин уже есть. Попробуйте ещё раз");
				break foundMatch;
			}
		}
		validation = true;
		users.push({});
		users[users.length - 1]["login"] = login;
	}
}

if (cancel === false) {
	validation = false;
	password = prompt("Придумайте пароль");
}

while (validation === false && cancel === false) {
	if (password === null) {
		cancel = true;
		deleteUser = true;
	} else if (password === "") {
		password = prompt("Вы не ввели пароль. Попробуйте ещё раз");
	} else if (password.length < 6 || password.length > 16) {
		password = prompt("Пароль должен содержать от 6 до 16 символов. Попробуйте ещё раз");
	} else if (password.match(/\W/gu)) {
		password = prompt("Пароль может состоять только из латиницы любого регистра, цифр и нижнего подчёркивания. Попробуйте ещё раз");
	} else {
		// Проверка запоминания пароля
		let passwordCheck = prompt("Повторите пароль");
		while (password !== passwordCheck && passwordCheck !== null) {
			passwordCheck = prompt("Пароли не совпадают. Попробуйте ещё раз");
		}
		if (passwordCheck === null) {
			cancel = true;
		} else {
			validation = true;
			users[users.length - 1]["password"] = password;
			alert("Ура! Вы зарегистрировались. Теперь вы можете войти на сайт, используя свой логин и пароль");
		}
	}
}

if (cancel === false) {
	validation = false;
	login = prompt("Введите свой логин");
}
	// Переменная для хранения соответствия логин-пароль
let userArrayNumber;

foundMatch:
while (validation === false && cancel === false) {
	for (let i = 0; i < users.length; i++) {
		if (login === users[i]["login"]) {
			validation = true;
			userArrayNumber = i;
			break foundMatch;
		}
	}
	if (login === null) {
		cancel = true;
	} else {
		login = prompt("Такого пользователя нет. Попробуйте ещё раз");
	}
}

if (cancel === false) {
	validation = false;
	password = prompt("Введите свой пароль");
}

while (validation === false && cancel === false) {
	if (users[userArrayNumber]["password"] === password) {
		alert("Ура! Вы вошли на сайт, где ничего нет)");
		validation = true;
	} else if (password === null) {
		cancel = true;
	} else {
		password = prompt("Пароль неверный. Попробуйте ещё раз");
	}
}

if (cancel) {
	alert("Как хотите");
}

if (deleteUser) {
	users.pop();
}