/*1. Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д. Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в городе %Город% и работаю в компании %Компания%. Мои контактные данные: %Телефон%, %Почта%.».*/

let name = prompt('Ваше имя'),
    age = prompt('Ваш возраст'),
    city = prompt('Ваш город проживания'),
    phone = prompt('Ваш телефон'),
    email = prompt('Ваш email'),
    company = prompt('Ваша компания');

document.write('«Меня зовут ' + name + '. Мне ' + age + ' лет. Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. Мои контактные данные: ' + phone + ', ' + email + '.»');


/*2. Определите по введенному возрасту (исп. значение из задания 1) год рождения. Выведите на экран «%Имя% родился в %Год% году.».*/

let yearBirth = 2021 - age;

document.write('<br> «' + name + ' родился в ' + yearBirth + ' году.»');


/*4. Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.*/

let c = 1;

console.log(c > 0 ? 'Верно' : 'Неверно');

    c = 0;

console.log(c > 0 ? 'Верно' : 'Неверно'); 

    c = -3;

console.log(c > 0 ? 'Верно' : 'Неверно');


/*5. Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение, частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в квадрат.*/

let a = 10,
    b = 2,
    sum = a + b,
    diff = a - b,
    mult = a * b,
    quot = a / b,
    square = sum ** 2;

console.log(sum);
console.log(diff);
console.log(mult);
console.log(quot);

if (sum > 1) console.log(square);


/*6. Если переменная a (из задания 5) больше 2 и меньше 11, или переменная b (из задания 5) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите 'Неверно'.*/

console.log(a > 2 && a < 11 || b >= 6 && b < 14 ? 'Верно' : 'Неверно');


/*7. В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).*/

let n = 33;
let answer = '';

switch(true) {
    case(n > 0 && n <= 15):
        answer = 'Первая четверть часа';
    break;
    case(n > 15 && n <= 30):
        answer = 'Вторая четверть часа';
    break;
    case(n > 15 && n <= 45):
        answer = 'Третья четверть часа';
    break;
    case(n > 45 && n <= 60):
        answer = 'Четвертая четверть часа';
    break;
}

console.log(answer);


/*10. Напишите скрипт, который по введенному дню (исп. значение переменной из 8 задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и т.д.). Скрипт определение поры года написать через switch.*/

let day = 11;
let monthNum = '';
let timeOfTheYear = '';

if (day > 0 && day <= 31) {
    monthNum = 1;
} else if (day > 31 && day <= 59) {
    monthNum = 2;
} else if (day > 59 && day <= 90) {
    monthNum = 3;
} else if (day > 90 && day <= 120) {
    monthNum = 4;
} else if (day > 120 && day <= 151) {
    monthNum = 5;
} else if (day > 151 && day <= 181) {
    monthNum = 6;
} else if (day > 181 && day <= 212) {
    monthNum = 7;
} else if (day > 212 && day <= 243) {
    monthNum = 8;
} else if (day > 243 && day <= 273) {
    monthNum = 9;
} else if (day > 273 && day <= 304) {
    monthNum = 10;
} else if (day > 304 && day <= 334) {
    monthNum = 11;
} else if (day > 334 && day <= 365) {
    monthNum = 12;
}

switch(true) {
    case(monthNum == 12 || monthNum == 1 || monthNum == 2):
    timeOfTheYear = 'Зима';
    break;
    case(monthNum == 3 || monthNum == 4 || monthNum == 5):
    timeOfThYear = 'Весна';
    break;
    case(monthNum == 6 || monthNum == 7 || monthNum == 8):
    timeOfTheYear = 'Лето';
    break;
    case(monthNum == 9 || monthNum == 10 || monthNum == 11):
    timeOfTheYear = 'Осень';
    break;
}

console.log(monthNum + ' месяц');
console.log(timeOfTheYear);