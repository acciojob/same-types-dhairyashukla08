function isSameType(value1, value2) {
	 const v1NaN = Number.isNaN(value1);
	const v2NaN = Number.isNaN(value2); 
	if (v1NaN && v2NaN) return true;
  if (v1NaN || v2NaN) return false;
return typeof value1 === typeof value2;
}
 
// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
