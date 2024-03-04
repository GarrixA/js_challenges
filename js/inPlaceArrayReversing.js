function inplaceReverse(array) { 
    const length = arr.length; 
    for (let i = length - 1; i >= 0; i--) {
        arr.push(array[i]); 
    }
    arr.splice(0, length); 
    return arr
}


let myTestCases = ['mt', 'ft', 'ht', 'gt']
let results = inplaceReverse(myTestCases)

document.write('inplace reverse: ',results)