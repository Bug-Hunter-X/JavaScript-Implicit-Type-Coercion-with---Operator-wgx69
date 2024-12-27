function foo(a, b) {
  // Explicit type conversion to numbers
  return Number(a) + Number(b);
}
console.log(foo(1, 2)); // 3
console.log(foo(1, "2")); // 3
console.log(foo(1, [2])); // NaN //Note: Adding a number and an array is still not directly supported and yields NaN