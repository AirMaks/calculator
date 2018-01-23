//перемещение калькулятора курсором
$(".draggable").draggable();

var numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operation'),
    decimalBtn = document.getElementById('decimal'),
    display = document.getElementById('display'),
    resultBtn = document.getElementById('result'),
    clears = document.querySelectorAll('.clear'),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = '';





for(var i = 0; i < numbers.length; i++){
  var number = numbers[i];
  number.addEventListener('click',function(e){

  numberPress(e.target.textContent);

  });

  
}



for(var i = 0; i < operations.length; i++){
  var operator = operations[i];
  operator.addEventListener('click', function(e){
    operation(e.target.textContent);


    });

}

for(var i = 0; i < clears.length; i++){
  var clearBtn = clears[i];
  clearBtn.addEventListener('click', function (e) {
    clearAll(e.srcElement.id);
  });

}


 
  decimalBtn.addEventListener('click', decimal);



    

     





function numberPress(number){
  if(MemoryNewNumber){
       display.value = number;
       MemoryNewNumber = false;
  }else{
    if (display.value === '0') {
     display.value = number;

  }else{
    display.value += number;
  }
  
  }
 

}

function operation(op){
   var localOperationMemory = display.value;

    
    if (MemoryNewNumber && MemoryPendingOperation !== '='){
      display.value = MemoryCurrentNumber;
    }else{
      MemoryNewNumber = true;
      if(MemoryPendingOperation === '+'){
        (MemoryCurrentNumber += parseFloat(localOperationMemory)).toFixed(12)*1;
      }else if (MemoryPendingOperation === '-'){
        (MemoryCurrentNumber -= parseFloat(localOperationMemory)).toFixed(12)*1;
      } else if (MemoryPendingOperation === '*') {
        (MemoryCurrentNumber *= parseFloat(localOperationMemory)).toFixed(12)*1;

      }else if (MemoryPendingOperation === '/') {
        (MemoryCurrentNumber /= parseFloat(localOperationMemory)).toFixed(12)*1;

      }else{
        (MemoryCurrentNumber = parseFloat(localOperationMemory)).toFixed(12)*1;
      }
      display.value = (MemoryCurrentNumber).toFixed(12)*1;
      MemoryPendingOperation = op;
    }

}

//функции добавлени десятичной дроби

function decimal(){
var localDecimalMemory = display.value;

if (MemoryNewNumber){
  localDecimalMemory = '0.';
  MemoryNewNumber = false;
}else{
  if (localDecimalMemory.indexOf('.') === -1){
      localDecimalMemory += '.';
  }

}
display.value = localDecimalMemory;

}

//очистка результатов
function clearAll(id){
if(id === 'ce'){
display.value = '0';
MemoryNewNumber = true;

}else if(id === 'c'){
display.value = '0';
MemoryNewNumber = true;
MemoryCurrentNumber = 0;
MemoryPendingOperation = '';

}

} 
//функции расчета процентов
function percent() {


}
