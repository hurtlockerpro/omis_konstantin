
// $('') - selector
// =
// document.getElementBy('')

$(document).ready(function(){

    console.log('jQuery work fine!');

    let text = $('#test').text();
    //$('.test')
    console.log(text);

    // $('#test').html('<b>NEW TEST</b>');


    $('#test')
        .html(getSomeText())
        .addClass('redText')
        .css('background-color', 'yellow');

    // $('input[name=firstname]').val('Vladimir');


    $('input[type=button]:not(#btnEffect):not(#btnRestore)')
        .on('click', function(event){

            console.log('button clicked');

           // $('input[name=firstname]').val('Vladimir');
            // $('input[name=lastname]').val('Kjahrenov');

            console.log(this);

            let width = $(this).width();
            console.log(width);
            $(this).css('width', width + 100);

        })
        .on('dblclick', function(event){

            console.log('button DBL clicked');

            //$('.myList :last-child').css('color', 'red');
            //$('.myList :first-child').css('color', 'red');
            let nth = $('#nthChild').val();
            $('.myList :nth-child(' +  nth + ')').css('color', 'red');

            console.log(event);

        });

        

        $('#btnEffect').on('click', function(){

            //$('#effect').hide();
            /*
            $('#effect').fadeOut(3000, function(){
                console.log('effect has finished job');
            });
            */
           let x = 10;
           x++; // increment
           x += 1;
           $('#effect').animate(
               {
                left:"+=50px",
                width: '+=25px',
                height: '+=25px'
           }
           );

        })


        $('#btnGetContent').on('click', function(){

            $.ajax({
                url: 'https://opensource.com/sites/default/files/uploads/xml_modified-menu.png',
                success: function( result ) {

                    $('#newContent').html(result);

                    console.log("everything is ok!");
                }
            });

        });


});

/*
document.querySelector('input[type=button]').addEventListener('click', function(){
    // logic
})
*/

    
function getSomeText(){
    return "Some text";
}



