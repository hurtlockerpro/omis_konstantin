
let col = [1,2,3,4,5,6,7,8,9]; // 1 item -> index = 0
let row = [1,2,3,4,5,6,7,8,9];
/*
let row_x = [
    [1,2],
    [3,4],
    [5,6]
];
row_x[1][4];
*/

// length - items count


// ++ increment ->   x = x + 1
// ++x 
// x++ 
/*
let x = 0;
let y = 0; 
*/
let result = 0, td = '', tr = '', table = '', trhead = '';
//let td = `<td>${result}</td>`;
//let tr = `<tr>${td}</tr>`;
//let table = `<table>${tr}</table>`;



for (let index_row = 0; index_row < row.length; index_row++) {
    //const element = array[index];
    //console.log('++x: ', ++x, 'y++: ', y++);
    td = '';
    for (let index_col  = 0; index_col < col.length; index_col++) {

        console.log('col=', col[index_col], ', row=',row[index_row], ', result=', col[index_col] * row[index_row]);
        
        // generate top row -> header
        if (index_row == 0){
            if (index_col == 0) trhead +=  `<td></td>`; 
            trhead +=  `<td>${row[index_col]}</td>`;   
        }

        // generate column
        if (index_col == 0) td += `<td style="background-color:gray;">${col[index_row]}</td>`;

        result = col[index_col] * row[index_row];
        td +=  `<td>${result}</td>`;    
    }
    if (index_row == 0){
        tr += `<tr style="background-color:gray;">${trhead}</tr>`;
    }
    tr += `<tr>${td}</tr>`;
}
table = `<table>${tr}</table>`;

document.getElementById('multiplicationTable').innerHTML = table;