// Реализуйте функцию pipe. Она должна принимать неопределенное количество функций-обработчиков и возвращать функцию, 
// которая будет прогонять принимаемый параметр через все обработчики, а на выходе вернет результат работы. 
// Функции-обработчики должны вызываться справа налево.

// const fillUser = pipe (
//   (user) => ({ ...user, lastName: "Pass" }),
//   (user) => ({ ...user, age: 29 }),
//   (user) => ({ ...user, city: "Boston" }),
// );

function pipe(...functions){
    return function(input){
        return functions.reduceRight((arg, func) => func(arg), input)
    }
}

const fillUser = pipe (
  (user) => ({ ...user, lastName: "Pass" }),
  (user) => ({ ...user, age: 29 }),
  (user) => ({ ...user, city: "Boston" }),
);

console.log(fillUser())