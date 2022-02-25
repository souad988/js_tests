class Calculator {
    constructor() {
      
    }
  
    add(a,b) {
        
        if(a===undefined || b===undefined){
            throw "need two numbers for addition";
        }else {
        return a+b;
        }
        
    }
  
    substruct(a,b){
        if(a===undefined || b===undefined){
            throw "need two numbers for substruction";
        }else {
        return a-b;
        }
    }
  
    multiply(a,b){
        if(a===undefined || b===undefined){
            throw "need two numbers for multiplication";
        }else {
        return a*b;
        }
    }
  
    devide(a,b) {
        if(a===undefined || b===undefined){
            throw "need two numbers for division";
        }else {
            if(b===0){
                throw "can't devide by 0";
            }else{
                return a/b;
            }
        
        }
    }
  
  }

  module.exports=Calculator;