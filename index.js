
function validation(z){
let p=document.querySelector("p");
p.textContent=p.textContent ==="0"?z:p.textContent +z;
}
function clr(){
    p.textContent=0
}
function getresult(){
    p.textContent=eval(p.textContent)
}