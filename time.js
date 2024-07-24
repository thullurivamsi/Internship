const sec=document.getElementById("sec");
const min=document.getElementById("min");
const hour=document.getElementById("hour");
const butt=document.getElementsByClassName("butt");
const enter=document.getElementById("enter");
const reset=document.getElementById("reset");
const incre=document.getElementById("incre");
const decre=document.getElementById("decre");
let timebit="sec";
hour.value=0;
min.value=0;
sec.value=0;
let bit=0;

function changeminutes(event){
    timebit="min";
    if(bit%2==0){
        if(event.key=="ArrowUp"){
            min.value++;
            if(min.value>59){
                min.value=0;
                hour.value++;
            }
        }
        if(event.key=="ArrowDown"){
            if(min.value>=0){
                min.value--;
            }
            if(min.value<0 && hour.value>0){
                min.value=59;
                hour.value--;
            }
        }
    }  
}

function changehours(event){
    timebit="hour";
    if(bit%2==0){
        if(event.key=="ArrowUp"){
            hour.value++;
        }
        if(event.key=="ArrowDown"){
            if(hour.value>0){
                hour.value--;
            }
        }
    }
}

function changeseconds(event){
    timebit="sec";
    if(bit%2==0){
        if(event.key=="ArrowUp"){
            sec.value++;
            if(sec.value>59){
                sec.value=0;
                if(min.value<59){
                    min.value++;
                }
                else{
                    sec.value=0;
                    min.value=0;
                    hour.value++;
                };
            }
        }
        if(event.key=="ArrowDown"){
            countdown();
        }
    }
}

function countdown(){
    sec.value--;
    if(sec.value<0){
        if(min.value<=0){
            if(hour.value<0){
                sec.value=0;
            }
            else{
                hour.value--;
                min.value=59;
                sec.value=59;
            }
        }
        else{
            min.value--;
            sec.value=59;
        }
    }
}

enter.addEventListener("click",(event)=>{
    bit++;
    let interval=setInterval(()=>{
        if(bit%2==0){
            enter.style.backgroundColor="orange";
            enter.textContent="START";
            clearInterval(interval);
        }
        else{
            if(hour.value==0 && min.value==0 && sec.value==0){
                enter.style.backgroundColor="orange";
                enter.textContent="START";
                clearInterval(interval);
            }
            else{
                enter.style.backgroundColor="chocolate";
                enter.textContent="STOP";
                countdown();
            }
        }
    },1000);
});

reset.addEventListener("click",()=>{
    bit=0;
    hour.value=0;
    min.value=0;
    sec.value=0;
});

incre.addEventListener("click",(event)=>{
    if(bit%2==0){
        event.key="ArrowUp";
        if(timebit=="sec"){
            changeseconds(event);
        }
        if(timebit=="min"){
            changeminutes(event);
        }
        if(timebit=="hour"){
            changehours(event);
        }
    }
});

decre.addEventListener("click",(event)=>{
    if(bit%2==0){
        event.key="ArrowDown";
        if(timebit=="sec"){
            changeseconds(event);
        }
        if(timebit=="min"){
            changeminutes(event);
        }
        if(timebit=="hour"){
            changehours(event);
        }
    }
});

sec.addEventListener("keydown",(event)=>{changeseconds(event);});

min.addEventListener("keydown",(event)=>{changeminutes(event)});

hour.addEventListener("keydown",(event)=>{changehours(event);});

sec.addEventListener("click",(event)=>{changeseconds(event);});

min.addEventListener("click",(event)=>{changeminutes(event)});

hour.addEventListener("click",(event)=>{changehours(event);});