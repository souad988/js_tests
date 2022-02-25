const Calculator = require('./calculator');

const myColculator=new Calculator();

// tests for addition
describe('missing arguments', () => {
    test('empty to throw error', () => {
        expect(
        () => myColculator.substruct()).toThrow("need two numbers for substruction");
    });

    test('empty to throw error', () => {
        expect(
        () => myColculator.add()).toThrow("need two numbers for addition");
    }); 
    test('empty to throw error', () => {
        expect(
          () => myColculator.multiply()).toThrow("need two numbers for multiplication");
      });  

      test('empty to throw error', () => {
        expect(
          () => myColculator.devide()).toThrow("need two numbers for division");
      });  
});  
 
describe('return correct value', () => {
 test('2+3 to equal 5', () => {
        expect(myColculator.add(2,3)).toBe(5);
    });

// tests for substruction
test('2-3 to equal -1', () => {
    expect(myColculator.substruct(2,3)).toBe(-1);
  });
 

// tests for multiplication
test('2*3 to equal 6', () => {
    expect(myColculator.multiply(2,3)).toBe(6);
  });
  
  
// tests for division
test('10/2 to equal 5', () => {
    expect(myColculator.devide(10,2)).toBe(5);
  });
  
});  
  
  
test('divide by 0 to throw can\'t devide by 0', () => {
    expect(
      () => myColculator.devide(3,0)).toThrow("can't devide by 0");
  });    