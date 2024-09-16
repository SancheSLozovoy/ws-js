// Реализуйте, на выбор, один из методов массива: map, sort, filter. Пример работы:

// [].myMap((item, index, arr) => {});
// [].myFilter((item, index, arr) => {});
// [].mySort((a, b) => {});
// [].mySort();

Array.prototype.myMap = function(callback) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(callback(this[i], i, this));
    }
    return arr;
};

const arr1 = ['hello', 'mir'];
console.log(arr1.myMap((item, index) => {
    return (item.toUpperCase()).split('').join('-_-') + index;
}));


Array.prototype.myFilter = function(callback){
    let arr = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            arr.push(this[i]);
        }
    }
    return arr;
}


const numbers = [1, 2, 3, 4];
console.log(numbers.myFilter(num => num % 2 === 0));


Array.prototype.mySort = function(callback) {
    if (typeof callback !== 'function') {
        callback = (a, b) => (a > b ? 1 : a < b ? -1 : 0);
    }

    let arr = this.slice();
    
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (callback(arr[i], arr[i + 1]) > 0) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    for (let i = 0; i < this.length; i++) {
        this[i] = arr[i];
    }

    return this;
};


const arr3 = [4, 2, 5, 1, 3];
console.log(arr3.mySort((a, b) => a - b));

