# string-calculator-with-js
a string calculator which calculates the result based on the operator and operands

a given string array will passed to calculate method which calculates the result based on the pre defined operand. 

Rule: The first element is always operator.

operands will be calculated based on the prefixed operator

examples

["*", "2", "5", "3"] 
main operation is *
<p style="color:blue"> 2*5*3 </p>

["-", "2", "-5", "3"]
main operation is -
<p style="color:blue">2-(-5)-3</p>

["+", "5", "2", "4", "*", "5", "4"]
main operation is +
<p style="color:blue">(5+2+4)+(5*4)</p>

["+", "-", "5", "2", "4", "*", "5", "4"]
main operation is -
<p style="color:blue"> (5-2-4) + (5*4)</p>








