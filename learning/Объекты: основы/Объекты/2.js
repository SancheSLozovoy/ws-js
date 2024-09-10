// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false


function isEmpty(obj){
    if(Object.keys(obj).length === 0){
        return true
    }
    else{
        return false
    }
}

console.log(isEmpty({}))