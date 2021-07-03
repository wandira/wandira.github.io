const calc = {
    operandA: '',
    operandB: '',
    operator: '',
    total: '',
    isCommaClicked: false,
}
function add (){
    return parseFloat(calc.operandA)+parseFloat(calc.operandB)
}
function subtract (){
    return parseFloat(calc.operandA)-parseFloat(calc.operandB)
}
function multiply (){
    return parseFloat(calc.operandA)*parseFloat(calc.operandB)
}
function divide (){
    return parseFloat(calc.operandA)/parseFloat(calc.operandB)
}

let input = document.getElementById('input')

function handleOperandClick (target){
    console.log(target.value)
    let number = target.value
    if(calc.total) {
        if(number === '.'){
            number = '0.'
        }
        calc.operandA = number
        calc.total = ''
    }else
    if(!calc.operator){
        console.log(number == '.')
        console.log(!calc.operandA)
        if(number === '.' && !calc.operandA){
            number = '0.'
        }
        calc.operandA = calc.operandA.concat(number)
    } else{
        if(number == '.' && !calc.operandB){
            number = '0.'
        }
        calc.operandB = calc.operandB.concat(number)
    }
    render()
}

function handleInputChange (target) {
    let number = target.value
    if(isNaN(number)){
        number = ''
    }
    if(calc.total) {
        calc.operandA = number
        calc.total = ''
    }
    if(!calc.operator){
        calc.operandA = number
    } else{
        calc.operandB = number
    }
    render()
}


function render () {
    const currentInput = calc.total || calc.operandB || calc.operandA
    input.value = currentInput
}

function handleOperatorClick (target) {
    console.log("click operator")
    const choice = target.value
    calc.isCommaClicked = false
    if(calc.total){
        calc.operandA = calc.total
        calc.total = ''
    }
    if(!calc.operandA){
        return
    }
    if(calc.operandB){
        calc.operandA = calc.operator()
        calc.operandB = ''
    }
    switch (choice) {
        case '+':
            calc.operator = add
            break;
        case '-':
            calc.operator = subtract
            break;
        case 'x':
            calc.operator = multiply
            break;
        case '/':
            calc.operator = divide
            break;
        default:
            break;
    }
    render()
}

function handleEqualClick () {
    if(!calc.operandB){
        return
    }
    calc.total = calc.operator() || "0"
    calc.operandA = ''
    calc.operandB = ''
    calc.operator = ''
    render()
}

function handleCommaClick (target) {
    if(calc.isCommaClicked){
        return
    }
    calc.isCommaClicked = !calc.isCommaClicked
    handleOperandClick(target)
}

function handleClear(){
    calc.total = ''
    calc.operandA = ''
    calc.operandB = ''
    calc.operator = ''
    render()
}