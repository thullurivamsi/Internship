let data=[
    'INDIAN RUPEE',
    'AMERICAN DOLLAR',
    'EURO',
    'JAPANESE YEN',
    'BRITISH POUND',
    'AUSTRALIAN DOLLAR',
    'CANADIAN DOLLAR',
    'SWISS FRANC',
    'CHINESE YUAN',
    'SWEDISH KRONA',
    'MEXICAN PESO'
];

const sym=[
    'INR','USD','EUR','JPY','GBP','AUD','CAD','CHF','CNY','SEK','MXN'
];
const selectfromcurr=document.getElementById('selectfromcurr');
const selecttocurr=document.getElementById('selecttocurr');
const tocurr=document.getElementById('tocurr');
const fromcurr=document.getElementById('fromcurr');
const tovalue=document.getElementById('tovalue');
const fromvalue=document.getElementById('fromvalue');

let currbit=0;

/*
sym.forEach(element => {
    const opt=document.createElement('option');
    opt.value=element;
    tocurr.appendChild(opt);
});

sym.forEach(element => {
    const opt=document.createElement('option');
    opt.value=element;
    fromcurr.appendChild(opt);
});*/

for(let i=0;i<sym.length;i++){
    const opt=document.createElement("option");
    opt.value=sym[i];
    opt.textContent=data[i];
    fromcurr.appendChild(opt);
}

for(let i=0;i<sym.length;i++){
    const opt=document.createElement("option");
    opt.value=sym[i];
    opt.textContent=data[i];
    tocurr.appendChild(opt);
}

selectfromcurr.addEventListener("input",()=>{
    currbit=0;
    fromselect=fromcurr.value;
});

selecttocurr.addEventListener("input",()=>{
    currbit=1;
    toselect=tocurr.value;
});

fromvalue.addEventListener("click",()=>{
    currbit=0;
});

tovalue.addEventListener("click",()=>{
    currbit=1;
});

function inputadd(input){
    let fromselect=selectfromcurr.value;
    let toselect=selecttocurr.value;
    if(currbit==0){
        if(fromvalue.value==0){
            fromvalue.value=input;
            tovalue.value=calvalue(fromvalue.value,fromselect,toselect);
        }
        else{
            fromvalue.value+=input;
            tovalue.value=calvalue(fromvalue.value,fromselect,toselect);
        }
    }
    else{
        if(tovalue.value==0){
            tovalue.value=input;
            fromvalue.value=calvalue(tovalue.value,toselect,fromselect);
        }
        else{
            tovalue.value+=input;
            fromvalue.value=calvalue(tovalue.value,toselect,fromselect);
        }
    }
}

function clearit(){
    fromvalue.value=0;
    tovalue.value=0;
}

function clearone(){
    if(currbit==0){
        if(fromvalue.value!=0){
            fromvalue.value=fromvalue.value.slice(0,-1);
            tovalue.value=calvalue(fromvalue.value,fromselect,toselect);
        }
    }
    else{
        if(tovalue.value!=0){
            tovalue.value=tovalue.value.slice(0,-1);
            fromvalue.value=calvalue(tovalue.value,toselect,fromselect);
        }
    }
}

function calvalue(value,fromcurr,tocurr){
    switch(fromcurr){
        case "INR": switch(tocurr){
            case "INR": return value;
                        break;
            case "USD": return inrtousd(value);
                        break;
            case "EUR": return usdtoeur(inrtousd(value));
                        break;
            case "JPY": return usdtoyen(inrtousd(value));
                        break;
            case "GBP": return usdtogbp(inrtousd(value));
                        break;
            case "AUD": return usdtoaud(inrtousd(value));
                        break;
            case "CAD": return usdtocad(inrtousd(value));
                        break;
            case "CHF": return usdtochf(inrtousd(value));
                        break;
            case "CNY": return usdtocny(inrtousd(value));
                        break;
            case "SEK": return usdtosek(inrtousd(value));
                        break;
            case "MXN": return usdtomxn(inrtousd(value));
                        break;
        }
        case "USD": switch(tocurr){
            case "INR": return usdtoinr(value);
                        break;
            case "USD": return value;
                        break;
            case "EUR": return usdtoeur(value);
                        break;
            case "JPY": return usdtoyen(value);
                        break;
            case "GBP": return usdtogbp(value);
                        break;
            case "AUD": return usdtoaud(value);
                        break;
            case "CAD": return usdtocad(value);
                        break;
            case "CHF": return usdtochf(value);
                        break;
            case "CNY": return usdtocny(value);
                        break;
            case "SEK": return usdtosek(value);
                        break;
            case "MXN": return usdtomxn(value);
                        break;
        }
        case "EUR": switch(tocurr){
            case "INR": return usdtoinr(eurtousd(value));
                        break;
            case "USD": return eurtousd(value);
                        break;
            case "EUR": return value;
                        break;
            case "JPY": return usdtoyen(eurtousd(value));
                        break;
            case "GBP": return usdtogbp(eurtousd(value));
                        break;
            case "AUD": return usdtoaud(eurtousd(value));
                        break;
            case "CAD": return usdtocad(eurtousd(value));
                        break;
            case "CHF": return usdtochf(eurtousd(value));
                        break;
            case "CNY": return usdtocny(eurtousd(value));
                        break;
            case "SEK": return usdtosek(eurtousd(value));
                        break;
            case "MXN": return usdtomxn(eurtousd(value));
                        break;
        }        
        case "JPY": switch(tocurr){
            case "INR": return usdtoinr(yentousd(value));
                        break;
            case "USD": return yentousd(value);
                        break;
            case "EUR": return usdtoeur(yentousd(value));
                        break;
            case "JPY": return value;
                        break;
            case "GBP": return usdtogbp(yentousd(value));
                        break;
            case "AUD": return usdtoaud(yentousd(value));
                        break;
            case "CAD": return usdtocad(yentousd(value));
                        break;
            case "CHF": return usdtochf(yentousd(value));
                        break;
            case "CNY": return usdtocny(yentousd(value));
                        break;
            case "SEK": return usdtosek(yentousd(value));
                        break;
            case "MXN": return usdtomxn(yentousd(value));
                        break;
        }        
        case "GBP": switch(tocurr){
            case "INR": return usdtoinr(gbptousd(value));
                        break;
            case "USD": return gbptousd(value);
                        break;
            case "EUR": return usdtoeur(gbptousd(value));
                        break;
            case "JPY": return usdtoyen(gbptousd(value));
                        break;
            case "GBP": return value;
                        break;
            case "AUD": return usdtoaud(gbptousd(value));
                        break;
            case "CAD": return usdtocad(gbptousd(value));
                        break;
            case "CHF": return usdtochf(gbptousd(value));
                        break;
            case "CNY": return usdtocny(gbptousd(value));
                        break;
            case "SEK": return usdtosek(gbptousd(value));
                        break;
            case "MXN": return usdtomxn(gbptousd(value));
                        break;
        }        
        case "AUD": switch(tocurr){
            case "INR": return usdtoinr(audtousd(value));
                        break;
            case "USD": return audtousd(value);
                        break;
            case "EUR": return usdtoeur(audtousd(value));
                        break;
            case "JPY": return usdtoyen(audtousd(value));
                        break;
            case "GBP": return usdtogbp(audtousd(value));
                        break;
            case "AUD": return value;
                        break;
            case "CAD": return usdtocad(audtousd(value));
                        break;
            case "CHF": return usdtochf(audtousd(value));
                        break;
            case "CNY": return usdtocny(audtousd(value));
                        break;
            case "SEK": return usdtosek(audtousd(value));
                        break;
            case "MXN": return usdtomxn(audtousd(value));
                        break;
        }        
        case "CAD": switch(tocurr){
            case "INR": return usdtoinr(cadtousd(value));
                        break;
            case "USD": return cadtousd(value);
                        break;
            case "EUR": return usdtoeur(cadtousd(value));
                        break;
            case "JPY": return usdtoyen(cadtousd(value));
                        break;
            case "GBP": return usdtogbp(cadtousd(value));
                        break;
            case "AUD": return usdtoaud(cadtousd(value));
                        break;
            case "CAD": return value;
                        break;
            case "CHF": return usdtochf(cadtousd(value));
                        break;
            case "CNY": return usdtocny(cadtousd(value));
                        break;
            case "SEK": return usdtosek(cadtousd(value));
                        break;
            case "MXN": return usdtomxn(cadtousd(value));
                        break;
        }        
        case "CHF": switch(tocurr){
            case "INR": return usdtoinr(chftousd(value));
                        break;
            case "USD": return chftousd(value);
                        break;
            case "EUR": return usdtoeur(chftousd(value));
                        break;
            case "JPY": return usdtoyen(chftousd(value));
                        break;
            case "GBP": return usdtogbp(chftousd(value));
                        break;
            case "AUD": return usdtoaud(chftousd(value));
                        break;
            case "CAD": return usdtocad(chftousd(value));
                        break;
            case "CHF": return value;
                        break;
            case "CNY": return usdtocny(chftousd(value));
                        break;
            case "SEK": return usdtosek(chftousd(value));
                        break;
            case "MXN": return usdtomxn(chftousd(value));
                        break;
        }        
        case "CNY": switch(tocurr){
            case "INR": return usdtoinr(cnytousd(value));
                        break;
            case "USD": return cnytousd(value);
                        break;
            case "EUR": return usdtoeur(cnytousd(value));
                        break;
            case "JPY": return usdtoyen(cnytousd(value));
                        break;
            case "GBP": return usdtogbp(cnytousd(value));
                        break;
            case "AUD": return usdtoaud(cnytousd(value));
                        break;
            case "CAD": return usdtocad(cnytousd(value));
                        break;
            case "CHF": return usdtochf(cnytousd(value));
                        break;
            case "CNY": return value;
                        break;
            case "SEK": return usdtosek(cnytousd(value));
                        break;
            case "MXN": return usdtomxn(cnytousd(value));
                        break;
        }        
        case "SEK": switch(tocurr){
            case "INR": return usdtoinr(sektousd(value));
                        break;
            case "USD": return sektousd(value);
                        break;
            case "EUR": return usdtoeur(sektousd(value));
                        break;
            case "JPY": return usdtoyen(sektousd(value));
                        break;
            case "GBP": return usdtogbp(sektousd(value));
                        break;
            case "AUD": return usdtoaud(sektousd(value));
                        break;
            case "CAD": return usdtocad(sektousd(value));
                        break;
            case "CHF": return usdtochf(sektousd(value));
                        break;
            case "CNY": return usdtocny(sektousd(value));
                        break;
            case "SEK": return value;
                        break;
            case "MXN": return usdtomxn(sektousd(value));
                        break;
        }        
        case "MXN": switch(tocurr){
            case "INR": return usdtoinr(mxntousd(value));
                        break;
            case "USD": return mxntousd(value);
                        break;
            case "EUR": return usdtoeur(mxntousd(value));
                        break;
            case "JPY": return usdtoyen(mxntousd(value));
                        break;
            case "GBP": return usdtogbp(mxntousd(value));
                        break;
            case "AUD": return usdtoaud(mxntousd(value));
                        break;
            case "CAD": return usdtocad(mxntousd(value));
                        break;
            case "CHF": return usdtochf(mxntousd(value));
                        break;
            case "CNY": return usdtocny(mxntousd(value));
                        break;
            case "SEK": return usdtosek(mxntousd(value));
                        break;
            case "MXN": return value;
                        break;
        }
    }
}

function usdtoinr(value){
    return parseFloat(value)*83.729;
}

function usdtoeur(value){
    return parseFloat(value)*0.9192;
}

function usdtoyen(value){
    return parseFloat(value)*157.1;
}

function usdtogbp(value){
    return parseFloat(value)*0.774;
}

function usdtoaud(value){
    return parseFloat(value)*1.1505;
}

function usdtocad(value){
    return parseFloat(value)*1.3753;
}

function usdtochf(value){
    return parseFloat(value)*0.8896;

}
function usdtocny(value){
    return parseFloat(value)*7.2737;
}

function usdtosek(value){
    return parseFloat(value)*10.7247;
}

function usdtomxn(value){
    return parseFloat(value)*17.906;
}

function inrtousd(value){
    return parseFloat(value)*0.0119;
}

function eurtousd(value){
    return parseFloat(value)*1.0879;
}

function yentousd(value){
    return parseFloat(value)*0.0064;
}

function gbptousd(value){
    return parseFloat(value)*1.2916;
}

function audtousd(value){
    return parseFloat(value)*0.6638;
}

function cadtousd(value){
    return parseFloat(value)*0.7272;
}

function chftousd(value){
    return parseFloat(value)*1.1239;
}

function cnytousd(value){
    return parseFloat(value)*0.1375;
}

function sektousd(value){
    return parseFloat(value)*0.0932;
}

function mxntousd(value){
    return parseFloat(value)*0.0558;
}
