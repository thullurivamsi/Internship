let display=document.getElementById('show');
let ans=document.getElementById('showans');
function inputadd(input){
    display.value+=input;
}
function clearit(){
    display.value="";
    ans.value="";
}
function clearone(){
    display.value=display.value.slice(0,-1);
}
function calculate(){
    try{
        ans.value=eval(display.value);
    }
    catch(error){
        ans.value="syntax Error";
    }
}
