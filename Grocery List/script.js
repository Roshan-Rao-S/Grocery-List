var pencilsize=document.getElementById('pencilsize');
var inputlist =document.getElementById('userinput');
var valuesOFlist=document.getElementById('valuesOFlist');
var abc=document.createElement('abc');

pencilsize.addEventListener("click",function(){
    inputlist.value="";
    valuesOFlist.innerHTML="";
    
})

inputlist.addEventListener("keydown",function (event) {
    if (event.key=="Enter") {
        addvalue();
    }
})
function addvalue(){
    var h2=document.createElement('h2');
    h2.innerHTML="- "+inputlist.value;
    h2.addEventListener("click",function(){
        h2.style.textDecoration="line-through"
    });
    valuesOFlist.appendChild(h2);  // Append the h2 element to the valuesOFlist container
    inputlist.value = "";
}