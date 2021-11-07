const userinput=document.getElementById("user-input");
let expression='';

function press(num){
    expression=expression + num;
    userinput.value=expression;
}
function equal(){
    userinput.value=eval(expression);
    expression='';
   
    
}

function erase(){
   expression='';
   userinput.value=expression;
}