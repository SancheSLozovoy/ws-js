// Напишите функцию, которая будет устанавливать значение в объекте, по переданному пути. Сигнатура функции должна быть следующей function ([“user”, “name”], “Sam”, obj). 
// После вызова функции, для поля obj.user.name должно быть установлено значение “Sam”.



//необходимо получить элемент списка, после сравнить его с ключами в объекте, при нахождении сходства, заменить значение
function replace(arr, value, obj) {
    let newObj = obj;

    for (let i = 0; i < arr.length - 1; i++) {
        let key = arr[i];
        if (typeof newObj[key] !== "object" || newObj[key] === null) {
            newObj[key] = {};
        }
        newObj = newObj[key];
    }
    newObj[arr[arr.length - 1]] = value;
    return obj;
}


const obj = {
    user: { 
        name: 'Sasha' 
    } 
};

console.log(replace(["user", "name"], "Sam", obj)); 
