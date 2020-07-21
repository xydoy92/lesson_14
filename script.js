// adultPeopleAndTheirChildren task
let persons = [
	{ id: 10, name: 'Vasya', age: 28 },
	{ id: 11, name: 'Kolya', age: 16, parentId: 14 },
	{ id: 12, name: 'Anna', age: 37 },
	{ id: 13, name: 'Zoya', age: 9, parentId: 12 },
	{ id: 14, name: 'Arkadiy', age: 45 },
];
let adult = [];
let notAdult = [];

for (let i = 0; i < persons.length; i++) {
	if (persons[i]["age"] >= 18) {
		adult.push(persons[i]);
		// Узнаём профессию
		persons[i]["job"] = prompt(`Кем вы работаете, ${persons[i]["name"]}?`);
	} else {
		notAdult.push(persons[i]);
		// Прописываем родителю ребёнка
	}
}

for (let i = 0; i < adult.length; i++) {
	for (let j = 0; j < notAdult.length; j++) {
		if (notAdult[j]["parentId"] === adult[i]["id"]) {
			adult[i]["childId"] = notAdult[j]["id"];
		}
	}
}
	// Проверка, что всё сработало
console.log(persons);
console.log(adult);
console.log(notAdult);