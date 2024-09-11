// Сумма свойств объекта
// важность: 5

// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.

// Например:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// alert( sumSalaries(salaries) ); // 650



function sumSalaries(salaries){
    let summ = 0;
    if(Object.entries(salaries).length === 0) return 0
    for(let zp of Object.values(salaries)){
        summ += zp;
    }
    return summ
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};


console.log(sumSalaries(salaries))