// Check if number is prime numbers

function checkPrime(numToCheck) {
    if (numToCheck < 2) return false; 
    for (let i = 2; numToCheck >= i * i; i++) {
        if (numToCheck % i === 0) return false; 
    }
    return true; 
}

function findPrimeNumbers(numbers) { 
    return numbers.filter(checkPrime);

}

// the below code is my test cases
let myTestCases = [10, 12, 13] 

let response = findPrimeNumbers(myTestCases) 
document.write('prime numbers are: ',response)
