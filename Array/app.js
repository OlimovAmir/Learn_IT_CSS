
let numbers = [25, 21, 45, 78, 96, 56];


if (numbers.length < 10 && numbers.length >1) {
    console.log('Массив в пределах диапазона')
}else{
    console.log('Длинна массива хвотает')
}


console.log(numbers);  // Получаем сам массив
console.log(numbers[5]);  // получаем элемент массива по индексу
console.log(numbers.length); // получаем длину массива

let citys = ["Russia", "Uzbikistan", "Tajikistan"];

console.log(citys[2])

let arrMiks = [25, "Tom", 63, "li", true];

let person = {
    age: 25,
    lastName: "Roy",

}

console.log(person);

let car = 
    {
        model: "BMW",
        motors: 1.6,
        color: "blue",
        number: 123456
    }


console.log(car)

let isValide = true;

let Cars = [
    {
        model: "BMW",
        motors: 2.6,
        color: "blue",
        number: 123456
    },
    {
        model: "Opel",
        motors: 1.6,
        color: "Black",
        number: 654321
    },
    {
        model: "Lexus",
        motors: 3,
        color: "White",
        number: 852963
    },

]

console.log(Cars)
console.log(Cars[1].color)