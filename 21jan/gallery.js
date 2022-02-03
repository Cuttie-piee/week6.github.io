var shape=document.getElementById("shape");
var large=document.getElementById("large");

function openFullImg(pic){
  shape.style.display="flex";
  large.src=pic;
}
function closeFullImg(){
  shape.style.display="none";  
}