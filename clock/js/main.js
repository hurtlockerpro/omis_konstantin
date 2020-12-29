
let hour = document.getElementById('hr');
let minute = document.getElementById('mn');
let second = document.getElementById('sc');



setInterval( function(){ 
    
    let date = new Date();

    console.log ('hour:', date.getHours(), '| minute:', date.getMinutes(), '| seconds: ', date.getSeconds());
    //console.log ('hour:' + date.getHours() + ', minute:' + date.getMinutes() + 'seconds: ' + date.getSeconds());

    let sec = date.getSeconds() * 360 / 60;
    let min = date.getMinutes() * 360 / 60 + sec / 60;
    let h = date.getHours() * 360 / 12 + min / 12;

    second.style.transform = `rotateZ(${sec}deg)`;
    minute.style.transform = `rotateZ(${min}deg)`;
    hour.style.transform = `rotateZ(${h}deg)`;
    //second.style.transform = 'rotateZ(' + sec +'deg)';



}, 1000); // 1000 msec = 1 sec





















let btnRed = document.getElementById('btnRed');
let btnBlue = document.getElementById('btnBlue');

btnRed.addEventListener('click', function(){
    console.log('clicked red');

    //document.body.style.backgroundColor = 'red'; // <----
    document.body.classList.remove('newBlue');
    document.body.classList.add('newRed');
})

btnBlue.addEventListener('click', function(){
    console.log('clicked blue');

    //document.body.style.backgroundColor = 'blue'; // <----
    document.body.classList.remove('newRed');
    document.body.classList.add('newBlue');
})
