
console.log('hello');

$(document).ready(function(){ // anonumous / callback

    /*
    $('.container-fluid')
    .html('Hello <b>Vladimir</b> !!! ')
    .addClass('red');
    */
/*
    $('input[name="firtsname"]').focusout(function(){
        
    });
*/

});

let input = document.querySelector('input[name="firtsname"]');
input.addEventListener('focusout', (event) => {
    //event.target.style.background = '';  
    checkInput(event.target);
});
input.addEventListener('keyup', (event) => {
    //event.target.style.background = '';  
    checkInput(event.target);
});


function checkInput(input){
    if (input.value.toString().trim().length == 0){
        // error
        console.log('error');
        input.classList.add('error');
    } else {
        input.classList.remove('error');
    }
}