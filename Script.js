const maxLenght= 19;
function insert(num) {

    var result = document.getElementById('result').innerHTML;
    var lastChar = result.slice(-1);

    if(result.length>=maxLenght){
        return;
    }
    // Verifica se o último caractere é um operador
    if ((num === '+' || num === '-' || num === '*' || num === '/') &&
        (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/')) {
        return; 
    }

    document.getElementById('result').innerHTML = result + num;
}
function clean()
{
    document.getElementById('result').innerHTML = "";
}
function back()
{
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1);
}
function calculate()
{
    var result = document.getElementById('result').innerHTML;
    if(result)
    {
        document.getElementById('result').innerHTML = eval(result);
    }
    else
    {
        document.getElementById('result').innerHTML = "Nada..."
    }
}
function invert(){
var result= document.getElementById('result').innerHTML;
if(result){
if(result.startsWith("-")){
    document.getElementById('result').innerHTML=result.substring(1);

}
else{
  document.getElementById('result').innerHTML="-"+result;  
}
}
}
function square(){
    var result=document.getElementById('result').innerHTML;
    if(result){
        document.getElementById('result').innerHTML=Math.sqrt(parseFloat(result));
    }
}
function pow(){
    var result = document.getElementById('result').innerHTML;
    if (result) {
        document.getElementById('result').innerHTML = Math.pow(parseFloat(result), 2);
    }

}
function percent(){
    var result = document.getElementById('result').innerHTML;
    if (result) {
        document.getElementById('result').innerHTML = parseFloat(result) / 100;
    }

}
function log10() {
    var result = document.getElementById('result').innerHTML;
    if (result) {
        document.getElementById('result').innerHTML = Math.log10(parseFloat(result));
    }
}

function ln() {
    var result = document.getElementById('result').innerHTML;
    if (result) {
        document.getElementById('result').innerHTML = Math.log(parseFloat(result));
    }
}