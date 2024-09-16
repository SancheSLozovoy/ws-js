// Напишите две функции для преобразования приведенного массива в указанный объект и для преобразования полученного объекта в исходный массив. 
// Интерфейс объекта в массиве следующий: { name: string, value: number }.

// [
//   { name: "width", value: 100 },
//   { name: "height", value: 50 },
// ]



function toObj(arr){
    return arr.reduce((obj, item) => {
        obj[item.name] = item.value;
        return obj
    }, {})
}

function toArr(obj){
    return Object.keys(obj).map(key=> ({
        name : key,
        value : obj[key]
    }))
}

let arr1 = [
  { name: "width", value: 100 },
  { name: "height", value: 50 },
]

console.log(toObj(arr1))

let obj1 = { width: 200, height: 50 }

console.log(toArr(obj1))