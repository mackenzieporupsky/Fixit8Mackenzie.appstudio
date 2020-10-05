 
//user's name 
inptCalcName

//multiplication function
function multiplyNums(x,y) {
  return x * y
}  

//addition function
function addNums(x,y) {
  return Number(x) + Number(y) 
}  

//call multiply function
btnMultiply.onclick=function(){
  lblAnswer.value = 'Hello ' + inptCalcName.value + ', your answer is: ' + multiplyNums(inptNum1.value, inptNum2.value)
}

//call addition function
btnAdd.onclick=function(){
  lblAnswer.value = 'Hello ' +  inptCalcName.value + ', your answer is: ' + addNums(inptNum1.value, inptNum2.value)
}

//call reset function
btnReset.onclick=function(){
  inptNum1.value = ""
  inptNum2.value = ""
  inptCalcName = " " 
  lblAnswer.value = ""
}