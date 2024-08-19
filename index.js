const additionTest = [{valOne: 1, valTwo: 1, answer: 2},{valOne: 77, valTwo: 77, answer: 154}, {valOne: 123, valTwo: 567, answer: 690}]
const subtractionTest = [{valOne: 1, valTwo: 1, answer: 0},{valOne: 77, valTwo: 77, answer: 0}, {valOne: 123, valTwo: 567, answer: -440}]
const multiplicationTest = [{valOne: 1, valTwo: 1, answer: 1},{valOne: 77, valTwo: 77, answer: 5929}, {valOne: 123, valTwo: 567, answer: 69741}]
const divisionTest = [{valOne: 1, valTwo: 1, answer: 1},{valOne: 77, valTwo: 77, answer: 1}, {valOne: 123, valTwo: 567, answer: .2169312169312169}]

function add(valOne, valTwo) {
    return valOne + valTwo;
}

function subtraction(valOne, valTwo) {
    return valOne + valTwo;
}

function multiplication(valOne, valTwo) {
    return valOne * valTwo;
}

function division(valOne, valTwo) {
    if (valTwo === 0) {
        throw new Error("You dumb or what?")
    }
    return valOne / valTwo;
}


additionTest.map((test) => {
    const result = add(test.valOne, test.valTwo)
    if (result != test.answer) throw new Exception(`Addition for ${test.valOne} + ${test.valTwo} recieved ${result} expected ${test.answer}`)
})

subtractionTest.map((test) => {
    const result = subtraction(test.valOne, test.valTwo)
    if (result != test.answer) throw new Exception(`Addition for ${test.valOne} - ${test.valTwo} recieved ${result} expected ${test.answer}`)
})

multiplicationTest.map((test) => {
    const result = multiplication(test.valOne, test.valTwo)
    if (result != test.answer) throw new Exception(`Addition for ${test.valOne} * ${test.valTwo} recieved ${result} expected ${test.answer}`)
})

divisionTest.map((test) => {
    const result = division(test.valOne, test.valTwo)
    if (result != test.answer) throw new Exception(`Addition for ${test.valOne} / ${test.valTwo} recieved ${result} expected ${test.answer}`)
})


