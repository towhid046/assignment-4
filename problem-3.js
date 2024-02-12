// Problem 03 : Virus in my Array:

function deleteInvalids(array){
    let result = [];
    if(Array.isArray(array) === false){
        return 'Invalid Array'
    }
    for(let element of array){
        if(typeof element === 'number' && isNaN(element) !== isNaN(NaN)){
            result.push(element)
        }
    }
    return result;
}
