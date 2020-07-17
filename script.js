// adultPeopleAndTheirChildren task
var persons = [
	{ id: 10, name: 'Vasya', age: 28 },
	{ id: 11, name: 'Kolya', age: 16, parentId: 14 },
	{ id: 12, name: 'Anna', age: 37 },
	{ id: 13, name: 'Zoya', age: 9, parentId: 12 },
	{ id: 14, name: 'Arkadiy', age: 45 },
];

for (let i = 0; i < persons.length; i++) {
	if (persons[i]["age"] >= 18) {
		persons[i]["adult"] = true;
		// Узнаём профессию
		persons[i]["job"] = prompt(`Кем вы работаете, ${persons[i]["name"]}?`);
	} else {
		persons[i]["adult"] = false;
		// Прописываем родителю ребёнка
		for (let j = 0; j < persons.length; j++) {
			if (persons[i]["parentId"] === persons[j]["id"]) {
				persons[j]["childId"] = persons[i]["id"];
			}
		}
	}
}
// Проверка, что всё сработало
console.log(persons);