
let cars = ['Раздел', 'Типы данных', 'Навигация по уроку', 'Кавычки', 'Спецсимволы']; // 0 = audi , 1 = bmw, 2 = citroen 


//alert('Hello World!');
// debug отладка

console.log('Hello World Vladimir !')

var x = 10;

let number = 20;
let text = 'text';
let boolean = true;
let undef;
let float = 1.4444;
let obj = {};
let arr = [];

console.log( 
   'number:', typeof number, '\n',
   'text', typeof text,'\n',
   'boolean', typeof boolean,'\n',
   'undef', typeof undef,'\n',
   'float', typeof float,'\n',
   'obj', typeof obj,'\n',
   'arr', typeof arr
   );

 number = 'text text';
 console.log('number:', typeof number)

//console.log(`my name  ${ getName() }`);

document.writeln(`${ new Date().getHours() } : ${ new Date().getMinutes() } : ${ number } <br>`);

/*
' hn dfn h n   ' 
" sdfgsd fbsfd bfdbv "
' "" '
" '' "

" <table border=\"...\"></table> "
' \' \' ' 

\\
*/

let cars = ['audi', 'bmw', 'citroen']; // 0 = audi , 1 = bmw, 2 = citroen 

console.log( cars[1] );