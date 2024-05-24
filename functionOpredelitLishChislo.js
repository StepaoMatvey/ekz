const fs = require('fs');

function opredelitLishChislo(arr){

    if(arr.length < 3){
        return "Массив должен содержать не менее 3х элементов";
    }

    let kolvo_chet = 0;
    let kolvo_nechet = 0;
    let lishChislo;

    for(let i = 0; i < arr.length; i++ ){
        if(arr[i] % 2 === 0){
            kolvo_chet++;
            kolvo_chet = arr[i];
        } else {
            kolvo_nechet++;
            kolvo_nechet = arr[i];
        }
    }

    if (kolvo_chet === 1){
        lishChislo = kolvo_chet;
    } else {
        lishChislo = kolvo_nechet;
    }
    return lishChislo;
}

const array = [2, 4, 6, 8, 10, 11];
const lishChislo = opredelitLishChislo(array);

console.log("Лишнее число:" , lishChislo);

fs.writeFileSync('result.txt', lishChislo.toString());