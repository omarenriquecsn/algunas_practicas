var pantalla = [];
var pantalla2 = 0;
var multi = 1;
console.log(pantalla);

var numeros = ['0','1','2','3','4','5','6','7','8','9',];
var chart = ['+','-','*','/'];


document.addEventListener('click',(event)=>{
    event.preventDefault();
    
    let signos = event.target.textContent === "=";
    let laPantalla1 = document.getElementById('pantalla');
    let laPantalla2 = document.getElementById('pantalla2');
    let numero = event.target.textContent
    
    if(numeros.includes(numero)){
        pantalla.push(numero);
        laPantalla1.textContent = Number(pantalla.join(""))  
    }
    else if(numero === "+"){
            pantalla2 += Number(pantalla.join(""));
            pantalla = [];
            laPantalla2.textContent = pantalla2;
            laPantalla1.textContent = pantalla;        
            
          
        }
        else if(numero === "-"){
            
            pantalla2 -= Number(pantalla.join(""));
            pantalla = [];
            laPantalla2.textContent = pantalla2;
            laPantalla1.textContent = pantalla;        
            }
            else if(numero === "*"){
                if(pantalla2 === 0){
                    pantalla2 = Number(pantalla.join(""));}
                    else if(pantalla.length == 0){}
                    else{
                        pantalla2 = Number(pantalla.join(""))*pantalla2
                    }
                pantalla = [];
                laPantalla2.textContent = pantalla2;
                laPantalla1.textContent = pantalla;        
                }
                else if(numero === "/"){
                    if(pantalla2 === 0){
                        pantalla2 = Number(pantalla.join(""));}
                        else if(pantalla.length== 0){}
                        else{
                            pantalla2 = pantalla2/Number(pantalla.join(""))
                        }
                    pantalla = [];
                    laPantalla2.textContent = pantalla2;
                    laPantalla1.textContent = pantalla;        
                    }
                    else if(numero == 'AC'){
                        pantalla =[];
                        laPantalla1.textContent = pantalla

                    }
                    else if(numero == 'ACC'){
                        pantalla =[];
                        laPantalla1.textContent = pantalla
                        pantalla2 = 0;
                        laPantalla2.textContent = pantalla2

                    }
                    

})



