// adultPeopleAndTheirChildren task
let persons = [
	{ id: 10, name: 'Vasya', age: 28 },
	{ id: 11, name: 'Kolya', age: 16, parentId: 14 },
	{ id: 12, name: 'Anna', age: 37 },
	{ id: 13, name: 'Zoya', age: 9, parentId: 12 },
	{ id: 14, name: 'Arkadiy', age: 45 },
];
let adultList = [];
let childList = [];

for (let i = 0; i < persons.length; i++) {
	if (persons[i].age >= 18) {
		adultList.push(persons[i]);
		// Узнаём профессию
		persons[i].job = prompt(`Кем вы работаете, ${persons[i].name}?`);
	} else {
		childList.push(persons[i]);
	}
}

for (let i = 0; i < adultList.length; i++) {
	for (let j = 0; j < childList.length; j++) {
		if (childList[j].parentId === adultList[i].id) {
			adultList[i].childId = childList[j].id;
		}
	}
}
	// Проверка, что всё сработало
console.log(persons);
console.log(adultList);
console.log(childList);