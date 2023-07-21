const arr = [1, 2, 3, 2, 4];
var result

const all = (arr, callbackFunction) => {
    arr.sort((a, b)=> a-b)
    arr.map((x) => {
        result = !callbackFunction(x) ? false : true
        return result
    })
    console.log(result);
}

const callbackFunction = (x) => {
    const lessThanSeven = x < 7 ? true : false
    return lessThanSeven
}

all(arr, callbackFunction);