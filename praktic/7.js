// Напишите упрощенную версию для нативного типа данных Set, MySet. 
// Ваша реализация должна предоставлять методы add, has, delete, clear и свойство size. 
// При создании MySet принимает только массив, если передать другое значение, то необходимо выдавать ошибку, 
// что переданное значение не поддерживается. Способы реализации методов произвольные. Пример работы MySet

// const mySet = new MySet([ 0, 1, 2, 3]);

// console.log(mySet); // { 0, 1, 2, 3, size: 4 }
// console.log(mySet.size); // 4
// console.log(mySet.has(6)); // false

// mySet.add(4);
// console.log(mySet); // { 0, 1, 2, 3, 4, size: 5 }

// mySet.delete(2);
// console.log(mySet); // { 0, 1, 2: 3, 3: 4, size: 4 }

// mySet.clear();
// console.log(mySet); // { size: 0 }


function MySet(arr){
    let set = [];

    if(Array.isArray(arr)){
        set = arr.filter((value, index, array) => array.indexOf(value) === index)
        this.size = set.length;
    }else{
        throw new TypeError("Must be array");
    }

    this.add = function(el){
        if(!set.includes(el)){
            set.push(el)
            this.size = set.length
        }
    }

    this.has = function(el){
        if(set.includes(el)){
            return true;
        }
        return false
    }

    this.delete = function(el){
        let index = set.indexOf(el)
        if(set.includes(el) && index !== -1){
            set.splice(index, 1);
            this.size = set.length
        }else{
            throw new Error("Element not found")
        }
    }

    this.clear = function(){
        set = [];
        this.size = 0;
    }

    this.toString = function(){
        if(this.size === 0){
            return `{ size : ${this.size} }`
        }
        return `{ ${set.join(', ')}, size : ${this.size} }`;

    }
}

let set = new MySet([0, 1, 2, 3, 4]);
console.log(`${set}`);
set.add(5);
console.log(set.toString());
console.log(set.has(7))
set.delete(3);
console.log(set.toString());
set.clear();
console.log(set.toString());