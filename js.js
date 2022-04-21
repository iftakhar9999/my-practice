// templect string.........
const str1 = 'raja ';
const str2 = 'mouli';
// console.log(`${str1} ${str2}`);
// ( 2 ta element k ek sathe + korte templect string use kora hoy)


// spread oparator...........
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const numbers2 = [9, 10];
// console.log(...numbers, ...numbers2);
// (2 ta alada element k jodi ektar moddhe arekta / por por jog korte hoy tahole spread oparator use korte hoy)


// Destructuring...........
let animal = {
    name: 'judo',
    color: 'brown',
    age: 3,
};
const { name, age, ...rest } = animal;
// console.log(rest);

// Condition............
let resultMarks = 79;

if (resultMarks > 80) {
    // console.log('A+');
}
else {
    // console.log('A')
};
// ...........another example...........

const weather = 'shining';

if (weather === 'cloudy') {
    // console.log('Dont go out side')
}
else {
    // console.log('we have to go now')
}
// ............another example...........
const travel = 'sajek'
if (travel === 'sajek') {
    // console.log('we have to think')
}

else {
    // console.log('vai toder kothaw jawa lagbe h ....samne xm ')
}
// we need more and more practice to learn all this condition
let hour = 7;

if (hour >= 6 && hour <= 12)
    console.log(' good moring')

else if (hour >= 12 && hour <= 18)
    console.log('good afternoon')

else
    console.log('good evening');
