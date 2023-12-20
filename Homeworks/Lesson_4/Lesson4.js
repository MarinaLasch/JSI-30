// Проверяем себя, если не понимаем почему так а не иначе пишем в чат или в ЛС, желательно объяснять почему то или иное решение

// Типы данных

console.log([1, 2, 3] + ' is the answer.'); //  1,2,3 is the answer.- т.к выполняется неявное преобразование массива в строку и затем выполняет конкатенацию строк.
console.log(false || true * 2); // 2 - т.к оператор || найдет и выведет первое правдивое значение
console.log({ valueOf: () => 42 } * 2); // 84 - Метод valueOf() возвращает значение и затем оно умножается на 2.
console.log(parseInt('7.5') + parseFloat('2.5')); // 9.5- сначала 7,5 преобразуется в целое число 7, '2.5' преобразуется в число с плавающей запятой 2.5. Далее происходит сложение.
console.log(!!'Hello' - 1); // 0- Строка преобразуется в булевое значение  true ( т.к непустая) за счет двойного отрицания. true =1. А 1-1 = 0.
console.log(new String('hello') instanceof Object); // true
console.log((true ^ false) === (false ^ true)); // true - Оператор побитового исключающего ИЛИ (^) возвращает true, если биты операндов различны. В данном случае, у true и false разные биты, так что результат будет true и слева и справа. И в процессе сравнения также вернется true.
console.log(true && '5' + 5); // 55- т.к оператор && возвращает последнее истинное значение(если все значения верны), 55 получаается за счет конкатенации строки и числа.
console.log({ valueOf: () => '10', toString: () => '20' } + 5); // 105
console.log((5).toString() === '5'); // true- т. к число 5 преоьразовывыается в строку = "5", а "5"==="5" - верно
console.log(null || false || undefined); // undefined- Все значения false. Поэтому оператор веернет последнее ложное значение  undefined
console.log(0 || 2 || NaN); // 2-  Здесь первым истинным значением является 2

console.log(1 && null && 2); // null -  т. к в этом выравжении оператор && возвращает первое ложное значение

//

function xy() {}

console.log(typeof xy); //Function
console.log(xy instanceof Object); //true

var str1 = String(123);
var str2 = new String(123);

console.log(typeof str1 === typeof str2); // false
console.log(str1 === str2); // false - т.к Переменные str1 и str2 содержат разные типы данных (примитив и объект), поэтому их значения не равны.
console.log(str1 === String(123)); //true - т.к Оба выражения создают примитивные строки и содержат одинаковые значения
console.log(str2 === new String(123)); // false - т.к сравниваются два объекта, и они не идентичны
console.log(str1 === 123); // false - str1 - это строка и содержит строковое представление 123, но  она не равна числу 123
console.log(str1 === '123'); //true - т.к str1 содержит строковое представление числа 123, поэтому результат true
console.log(str1 == str2); //true - При использовании нестрогого равенства str1 и  str2 сравниваются как числа
console.log(str1 == 123); //true При использовании нестрогого равенства str1 и  str2 сравниваются как числа
console.log(str1 == '123'); //true При использовании нестрогого равенства str1 и  str2 сравниваются как числа

var arr = [];
console.log(typeof arr); //Object - т.к Любой массив в js является объектом.

var str3 = '123';
str3[0] = '2';
console.log(str3); // 123 - в строке нельзя менять  отдельные символы напрямую.

var p = 1 + 2 + 3 + '';
var z = '' + 1 + 2 + 3;

console.log(p, typeof p); // 6 String - Сначала происъходит сложение , а затем конкатенация с пустой строкой и  выполняется неявное преобразование числа в строку.
console.log(z, typeof z); // 123 String -первый операнд - это строка, все остальные операнды также преобразуются в строки.

var o = '123x';
console.log(Number(o)); // NaN- т.к значение строки o не может быть корректно преобразовано в число
console.log(parseInt(o, 10)); //123
console.log(+o); //NaN -  т.к значение строки o не может быть корректно преобразовано в число
console.log(typeof +o); // Number -преобразуем значение строки o в число с помощью унарного оператора + и выводим тип значения с помощью typeof. Т.к NaN относится к числовому типу данных  мы получаем Number
console.log(Boolean(String(false))); //true - сначала мы преобразуем булевое значение в строку, а затем строку в булевое значение. Так как строка не пустая, а в JS непустая строка всегда принимает истинное значение, то выводится true

var h = [];
console.log(h ? 1 : 2); // 1 - Пустой массив  приводится к логическому значению true, a true всегда равно 1

// Переменные

let a = a + 1;
console.log(a); // error

//

var b = b + 1;
console.log(b); // NaN - т.к var инициализируется со значением undefined

//

function foo(c) {
  if (c > 0) {
    var c = c + 10;
    return c;
  }
  return c;
}
console.log(foo(15)); // 25 - функция принимает аргумент c и, если c > 0, объявляет новую переменную c внутри блока и присваивает ей значение c + 10. Поэтому при передачи аргумента = 15 в   foo(), условие выполняется, и переменная c внутри блока становится 25.

//

function foo() {
  console.log(d2);
  let d1 = '1';
  return function () {
    console.log(d1);
    console.log(d2);
  };
}

const d2 = '2';
const x = foo();

x();

// 2, 1, 2- Если не ошибаюсь, здесь происходит замыкание. d1 и d2 берутся из лексической области  видимости foo().

function giveMeX(showX) {
  if (showX) {
    let x = 5;
  }
  return x;
}

console.log(giveMeX(false)); // error - Ошибка т.к мы пытаемся вернуть значение переменной x вне блока if , JavaScript выдаст ошибку "ReferenceError", так как переменная x не определена в этой области видимости.
console.log(giveMeX(true)); // error

//

console.log(x); // error

var y = 1;

console.log(y); // 1

function car() {
  if (false) {
    var y = 2;
  }
  console.log(y);
}

car(); // error 
console.log(y); // error

//

var i = 1;
var j = {};

(function () {
  i++;
  j.j = 1;
})();
console.log(i, j); // 2 {j: 1}

(function (i, j) {
  i++;
  j.k = 1;
})(i, j);
console.log(i, j); // 2 {j: 1, k: 1}

//

// Бонус

// Создать объект всеми возможными способами

const obj1 = {};
 const obj2 = { key: 'value' };

//
const obj1 = {};
const obj2 = new Object();
obj2.key = 'value';
//
const obj1 = {};
const obj2 = Object.create(null);
obj2.key = 'value';

//
const obj1 = {};
const obj2 = Object.assign({},obj1)

// Написать функцию глубокого сравнения двух объектов:
// объекты могут быть любыми, и иметь любой уровень вложенности


const firstObj = { here: { is: 'on', other: '3' }, object: 'any' };
const secondObj = { here: { is: 'on', other: '2' }, object: 'any' };

const deepEqual = (firstObj, secondObj) => {
 return JSON.stringify(firstObj) === JSON.stringify(secondObj)
 
};

//

console.log(deepEqual(obj1, obj2)); // true;