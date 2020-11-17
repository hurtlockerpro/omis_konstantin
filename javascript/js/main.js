
// let menus = ['Раздел', 'Типы данных', 'Навигация по уроку', 'Кавычки', 'Спецсимволы']; // 0 = audi , 1 = bmw, 2 = citroen 


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

//document.writeln(`${ new Date().getHours() } : ${ new Date().getMinutes() } : ${ number } <br>`);

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

let carsObj = {
    car1:'audi', 
    car2:'bmw', 
    car3:'citroen',
    carWheels: 4, // true false
    cars: {
        car: 'abc'
    }
  };
/*
console.log('car bmw:', cars[1] );
cars[1] = 'porsche';
console.log('car ? :', cars[1] );

console.log('car items total:', cars.length );

cars.push('volvo');

console.log('car items total:', cars.length, ' last car: ', cars[cars.length - 1] );
*/

function showAllert(msg){
  let msgText = 'Your message = ' + msg;  //  a + b => ab , 5 + 6 => 11, 5 + a => 5a
  console.log( msgText );
  //alert( msgText );

} // end of showAllert


//showAllert('Hello bla bla bla bla bla bla');

let menus = ['home', 'Code', 'Video', 'Audio'];
let resultMenu = '';

function addMenu() // camel case
{

    let title = document.getElementById('newMenu').value;
      console.log('you inserted: ' + title);

    // new item added to the array
    menus.push(title);

    // show array
    showMenu();
}

function showMenu(){
  resultMenu = '';
  for (
    let index = menus.length - 1; 
    index >= 0;// true  // ==  =>  <= != 
    index-- // increment ++ decrement --
    )
  {
    //console.log(menus[index]);
    // generate A tag for html 
    resultMenu += generateHtmlTagA(menus[index]);
  }
  //console.log(resultMenu);
  // insert html tags into div
  document.getElementById('menus').innerHTML = resultMenu;
}

function generateHtmlTagA(title, href = "#")
{
  return '[<a href="' + href + '">'  + title +  '</a>] ';
}

showMenu();


