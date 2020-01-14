# string-calculator-with-js
a string calculator which calculates the result based on the operator and operands

a given string array will passed to calculate method which calculates the result based on the pre defined operand. 

Rule: The first element is always operator.

operands will be calculated based on the prefixed operator

examples

["*", "2", "5", "3"] 
main operation is *
result___ 2*5*3 ___

["-", "2", "-5", "3"]
main operation is -
result___ 2-(-5)-3___

["+", "5", "2", "4", "*", "5", "4"]
main operation is +
result___ (5+2+4)+(5*4) ___

["+", "-", "5", "2", "4", "*", "5", "4"]
main operation is -
result___ (5-2-4) + (5*4) ___








