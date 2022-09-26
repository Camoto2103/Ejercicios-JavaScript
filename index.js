
/*1 Un número primo es una cantidad entera positiva únicamente divisible 
por uno o por sí mismo. Calcular y tabular los n primeros números primos.*/


function primo(){
    
    let num;
    let primos = [];
    
    num = Number(prompt("Ingrese un número"));
       
    if(num != Number && !Number.isInteger(num)){
        alert('El valor debe ser un numero entero')
    }


        /*if(isNaN(num) == false)

        if(num != undefined && num >0){
            for(let i = 1; i <= num; i++){
                primos = i % 2;
                if(primos === 1){
                    respuesta.push(i)
                }
            }
        }else{
            alert("Elija un número mayor a 0")
        }*/
        
  

}
