// Максимальная зарплата
// важность: 5

// У нас есть объект salaries с зарплатами:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

//     Если объект salaries пустой, то нужно вернуть null.
//     Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.

// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.




function topSalary(salaries){
    let maxZp = 0;
    let key = ""
    if(Object.entries(salaries).length === 0){
        return null;
    }
    for(let [name, zp] of Object.entries(salaries)){
        if(maxZp < zp){
            maxZp = zp;
            key = name;
        }
    }
    return key;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries))