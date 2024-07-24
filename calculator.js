let input=document.getElementById('show');
let output=document.getElementById('showans');
let ans;
function inputadd(element){
    try{
        input.value+=element;
        ans=output.value;
        output.value=eval(input.value);
    }
    catch(error){
        output.value=ans;
    }
}
function clearit(){
    input.value="";
    output.value="";
}
function clearone(){
    input.value=input.value.slice(0,-1);
}
function calculate(){
    try{
        output.value=eval(input.value);
        console.log(output.value);
    }
    catch(error){
        output.value="syntax Error";
    }
}
