// Напишите функцию для поверхностного сравнения двух объектов. Поверхностное сравнение объектов - это процесс сравнения ключей объекта и их значений, без учета уровня вложенности. То есть значение с типом object, никогда не будет равен точно такому же значению с типом object, т.к. ссылки на эти значения будут отличаться.
// Пример работы функции сравнения:

// shallowEquals({ a: 1, b: "2" }, { a: 1, b: "2" }); // true
// shallowEquals({ a: 0 }, { a: undefined }); // false
// shallowEquals({ a: {} }, { a: {} }); // false
// shallowEquals({ a: [] }, { a: [] }); // false
// shallowEquals({ a: () => {} }, { a: () => {} }); // false

function shallowEquals(obj1, obj2){
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    if(keys1.length !== keys2.length){
        return "different quantities";
    }
    else{
        for(let key of keys1){
            if(obj1[key] !== obj2[key]){
                return false
            }
        }
    }

    return true

}


//my first solution(trash)
// function shallowEquals(obj1, obj2) {
//     let values1 = Object.values(obj1);
//     let values2 = Object.values(obj2);
    
//     let keys1 = Object.keys(obj1);
//     let keys2 = Object.keys(obj2);

//     let str3 = keys1.toString();
//     let str4 = keys2.toString();

//     for (let i = 0; i < values1.length; i++) {
//         if (typeof values1[i] === 'object' || typeof values1[i] === 'function') {
//             if (values1[i] !== values2[i]) {
//                 return false;
//             }
//         } else {
//             if (values1[i] !== values2[i]) {
//                 return false;
//             }
//         }
//     }

//     return true;
// }

console.log(shallowEquals({ a: 1, b: "2"}, { a: 1, b: "2" }));
console.log(shallowEquals({ a: 0 }, { a: undefined })); 
console.log(shallowEquals({ a: {} }, { a: {} })); 
console.log(shallowEquals({ a: [] }, { a: [] })); 
console.log(shallowEquals({ a: () => {} }, { a: () => {} })); 
