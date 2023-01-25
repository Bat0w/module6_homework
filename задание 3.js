
/*Задание 3.

Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.*/
function isFirstNum(a){
    
    return function isSecondNum(b){
        
        let sum = a + b
        console.log(sum);
    }
    isSecondNum()
    }
isFirstNum(5)(6);