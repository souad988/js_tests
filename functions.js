const stringLength=(string) =>{
    if(string.length<1 || string.length>10){
        throw "not between 1 and 10";
    }else {
    return string.length;
    }
}
const reverseString=(string)=>{
    return string.split('').reverse().join('');
}
module.exports={stringLength,reverseString}; 