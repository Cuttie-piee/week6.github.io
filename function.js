var num = parseInt(prompt("Enter the number"))
function arr(n,callback1,callback2){
  var add = callback1(n);
  var multiply = callback2(n);
  return [add , multiply] ;
}
function add9(x){
  return x+9;
}
function mulBy4(x){
  return x*4;
}
var  output = arr(num,add9,mulBy4);
document.write('The addition and multiplication are ',output);