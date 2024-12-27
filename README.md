# JavaScript Implicit Type Coercion with the + Operator

This example demonstrates a common JavaScript pitfall related to the + operator and implicit type coercion.  Because JavaScript is dynamically typed, the + operator behaves differently based on the operands' types. When one operand is a string, the + operator performs string concatenation rather than numerical addition.

The `bug.js` file shows how this can lead to unexpected results.  The `bugSolution.js` file presents a solution to make the code behave more predictably.

## How to Reproduce

1.  Clone this repository.
2.  Open `bug.js` in your preferred JavaScript environment.
3.  Run the code and observe the output.

## Solution

The solution involves explicitly converting the operands to numbers before performing the addition.  This ensures consistent numerical behavior.