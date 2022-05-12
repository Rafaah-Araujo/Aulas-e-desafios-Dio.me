// declarando as variaveis

// - var increment 

var currentNumberWrapper = document.getElementById('currentNumber')
var count = 0
var increment = document.getElementById('increment')
var decrement = document.getElementById('decrement')

// limitação do contador de 0 a 10 fica verde 


increment.addEventListener("click",
    function increment(){
        count++;
        if(count <= 10){
            currentNumberWrapper.innerHTML = count;
        }
        if(count >= 0){
            currentNumberWrapper.style = "color: green;"
        }

    }
)

// limitação do contador de -10 a - 1 fica vermelho 

decrement.addEventListener("click",
    function decrement(){
        count--;
        if(count >= -10 ){
            currentNumberWrapper.innerHTML = count;
        }

        if(count < 0){
            currentNumberWrapper.style = "color: red;"
        }
    }
)