const buttons = document.querySelectorAll("button")
const displayNum = document.querySelector('#displayNum')


let calculation = [];
let total;

function calculate(button){
    const value = button.textContent
    
    if(value === 'AC'){
        calculation = []
        displayNum.textContent = '0'
    }else if(value === "="){
       displayNum.textContent = eval(total)
    }else if(value === '.' && displayNum.textContent.includes('.')){
        return
    } else if (
        ['/', '*', '+', '-'].includes(value) &&
        ['/', '*', '+', '-'].includes(displayNum.textContent.slice(-1))
      ) {
        displayNum.textContent = displayNum.textContent.slice(0, -1) + value;
      }
    else{
         calculation.push(value)
         total = calculation.join('')
         displayNum.textContent = total
    }

   
};

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))
