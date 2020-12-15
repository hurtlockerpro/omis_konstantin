
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

let inputFirtname = document.querySelector('input[name="firtsname"]');
inputFirtname.addEventListener('focusout', (event) => {
    //event.target.style.background = '';  
    checkInput(event.target, 'Введите своё имя');
});
inputFirtname.addEventListener('keyup', (event) => {
    //event.target.style.background = '';  
    checkInput(event.target, 'Введите свой е-маил');
});


let inputEmail = document.querySelector('input[name="email"]');
inputEmail.addEventListener('focusout', (event) => {
    //event.target.style.background = '';  
    checkInput(event.target, 'Введите свой емаил');
});

// все что ниже не нужно больше менять

function checkInput(input, message)
{
    //    console.log(input)
    if (input.value.toString().trim().length == 0){
        // error
        console.log('error');
        input.classList.add('error');

        // add text error 
        input.perentNode.insertBefore(showError(message), input.nextSibling);

    } else {
        input.classList.remove('error');
    }
}

function showError(message)
{
    let div = document.createElement('div');
    div.innerText = message;
    div.classList.add('error');
    div.classList.add('text-danger');

    return div;
}


// form submit disable
let form = document.getElementById('contactForm');
form.addEventListener('submit', (event) => {
    
    event.preventDefault();

    console.log('Do your submit by javascript');

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange  = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('formSubmitResult').innerHTML = this.responseText;
        }
    };
    ajax.open("GET", "ajax.html", false); // https://google.com
    ajax.send();
    
    //console.log(document.getElementById('time'));
});

// animation effects
new WOW().init();

// slides 
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: false,
    },
    autoplay: {
        delay: 1000,
      },
    /*
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    */
  });