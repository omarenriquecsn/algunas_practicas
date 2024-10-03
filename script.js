var pantalla = [];
var pantalla2 = 0;
var multi = 1;
var signos = '';
var numeros = [0,1,2,3,4,5,6,7,8,9,];
var chart = ['+','-','*','/'];
document.querySelector('boton');
this.addEventListener('click', function(event){
   if(numeros.includes(Number(event.target.textContent))){pantalla.push(event.target.textContent)}
   if(chart.includes(event.target.textContent)){signos = (event.target.textContent)}
    this.document.getElementById('pantalla').textContent = Number(pantalla.join(''))
    
})

    document.querySelector('botons');
    this.addEventListener("click", function(event){
        if(event.target.textContent == "+"){
            pantalla2 = Number(pantalla.join(''))+pantalla2;
        this.document.getElementById('pantalla2').textContent = pantalla2;
        this.document.getElementById('pantalla').textContent = 0;
        pantalla = [];}
        else if(signos === '+'&& event.target.textContent == '='){
            this.document.getElementById('pantalla2').textContent = Number(pantalla.join(''))+pantalla2;
            this.document.getElementById('pantalla').textContent = 0;
            pantalla = []
        }

    })
    document.querySelector('botonme');
    this.addEventListener("click", function(event){
        if(event.target.textContent == "-"){
            pantalla2 = Math.abs(Number(pantalla.filter((x)=>x!== '-').join(''))-pantalla2)
        this.document.getElementById('pantalla2').textContent = pantalla2;
        this.document.getElementById('pantalla').textContent = 0;
        pantalla = [];}
        else if(signos === '-'&& event.target.textContent == '='){
            this.document.getElementById('pantalla2').textContent = Math.abs(Number(pantalla.filter((x)=>x!== '-').join(''))-pantalla2);
            this.document.getElementById('pantalla').textContent = 0;
            pantalla = []
        }

    })
  
    document.querySelector('botonmu');
    this.addEventListener("click", function(event){
        if(event.target.textContent == "*"){
            pantalla2 = Number(pantalla.join(''))*pantalla2;
            multi = pantalla2
        this.document.getElementById('pantalla2').textContent = pantalla2;
        this.document.getElementById('pantalla').textContent = 0;
        pantalla = [];}
        else if(signos === '*'&& event.target.textContent == '='){
            this.document.getElementById('pantalla2').textContent = Number(pantalla.filter((x)=>x!== '*').join(''))*multi;
            this.document.getElementById('pantalla').textContent = 0;
            pantalla = [];
            multi = 1;
        }
    })
    document.querySelector('botons');
    this.addEventListener("click", function(event){
        if(event.target.textContent == "/"){
            pantalla2 = Number(pantalla.join(''))/pantalla2;
            multi = pantalla2
        this.document.getElementById('pantalla2').textContent = pantalla2;
        this.document.getElementById('pantalla').textContent = 0;
        pantalla = [];}
        else if(signos === '/'&& event.target.textContent == '='){
            this.document.getElementById('pantalla2').textContent = pantalla2/Number(pantalla.join(''));
            this.document.getElementById('pantalla').textContent = 0;
            pantalla = []
            multi = 1;
        }

    })


