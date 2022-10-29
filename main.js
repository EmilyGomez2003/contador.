const contador =document.getElementById("contar");
const sumar =document.getElementById("incr");
const restar =document.getElementById("decr");
const reset =document.getElementById("reset");

let numero = 0;

sumar.addEventListener("click", ()=>{
    numero++;
    contador.innerHTML = numero;
    contador.style.backgroundColor = 'green';

})

restar.addEventListener("click", ()=>{

    if(numero==-100){}
    else{
        numero--;
        contador.innerHTML = numero;
        contador.style.backgroundColor = 'red';
    }
    
})

reset.addEventListener("click", ()=>{
    
    numero = 0;
    contador.innerHTML = numero;
    
})
contar.textcontent = contador

if(contador>0){
    visualViewport.style.color = 'afff';
}
if(contador<0){
    visualViewport.style.color = '#ba215a';
}