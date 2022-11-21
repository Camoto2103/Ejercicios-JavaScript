
/* Un número primo es una cantidad entera positiva únicamente divisible 
por uno o por sí mismo. Calcular y tabular los n primeros números primos.*/

function ejercicio1(){
    
    let num
    let respuesta = [];

    num = Number(prompt("Ingrese un número"));
    
    if(num != Number && !Number.isInteger(num)){
        alert('El valor debe ser un numero entero positivo')
    }else{
        let controlador = 0
        for(a = 2; a <= num; a++){
            for(i = a; i > 0 ; i--){
                if(a % i === 0){
                    controlador++    
                }
            }
            if(controlador <= 2){
                respuesta.push(a)     
            }
            controlador = 0
        }
    }
    alert(`Los numeros primos hasta ${num} son: ${respuesta}.`) 
}

/*Escriba un programa que lea un valor entero positivo y determine:
    a) Si el entero es un número primo.
    b) Si el entero es un número de Fibonacci.
    (Los números de Fibonacci forman una secuencia en la cual cada 
    número es igual a la suma de los dos anteriores, siendo los 
    dos primeros números iguales a 1)*/

function ejercicio2(){
    let primo
    let fibIni = 0
    let fibFin = 1
    let fibSalto = 0
    let controlador = 0
    
    num = Number(prompt("Ingrese un número"));

    if(num != Number && !Number.isInteger(num) && num > 0){
        alert('El valor debe ser un numero entero positivo')
    }else{
        for(i = num; i > 0 ; i--){
            if(num % i === 0){
                controlador++    
            }
        }
      
        controlador <= 2 
                ? primo = `${num} Es un numero primo`
                :primo = `${num} No es un numero primo`

        controlador = 0

        while(fibIni <= num){
            fibSalto = fibIni + fibFin
            fibIni = fibFin
            fibFin = fibSalto

            if(fibIni === num){
                controlador++
            }
        }
     
        controlador > 0 
            ? primo = `${primo} y ${num} Es un fibonacci`
            :primo =  `${primo} y ${num} No es un fibonacci`

        alert(primo)
    }
}

/* Un entrenador le ha propuesto a un atleta recorrer una ruta de cinco kilómetros durante
10 días, para determinar si es apto para la prueba de 5 Kilómetros o debe buscar 
otra especialidad. Para considerarlo apto debe cumplir por lo menos una de las 
siguientes condiciones:
- Que en ninguna de las pruebas haga un tiempo mayor a 16 minutos.
- Que al menos en una de las pruebas realice un tiempo mayor a 16 minutos.
- Que su promedio de tiempos sea menor o igual a 15 minutos.*/

function ejercicio3(){

    let tiempo = []
    let contador = 0
    let suma = 0
    let promedio

    for( i = 1; i <= 10; i++){
        tiempo = Number(prompt("Ingrese el tiempo recorrido durante los 10 días. Día" + i))
        if(tiempo > 16){
            contador = contador + 1
        }
        suma = suma + tiempo      
    }
    
    promedio = suma/10
    
    alert(`El promedio de tiempo es: ${promedio} minutos`)
    alert(`Tiempos mayores a 16 minutos: ${contador}`)

    if(contador == 0 || contador == 1 || promedio <= 15 ){
        alert('El atleta es apto')
        }else{
        alert('El atleta no es apto')   
        }
}

//Obtener el promedio de calificaciones de un grupo de n alumnos

function ejercicio4(){

    let suma = 0
    let promedio
    let notas

    cant = Number(prompt("Ingrese la cantidad de notas que desea calcular"));
    
    if(cant != Number && !Number(cant)){
        alert('El valor ingresado debe ser un número')
    }else{
        for( i = 0; i < cant; i++){
            
        notas = Number(prompt("Ingrese la nota" + i))
        suma = suma + notas
        promedio = suma/cant
        } 
    }
    alert(`El promedio del grupo es ${promedio}`)
}


/* Se desea obtener el promedio de g grupos que están en un mismo año escolar;
siendo que cada grupo puede tener n alumnos que cada alumno puede llevar  m
materias y que en todas las materias se promedian tres calificaciones para 
obtener el promedio de la materia. Lo que se desea desplegar es el promedio
de los grupos, el promedio de cada grupo y el promedio de cada alumno.*/ 


function ejercicio5() {

    let g
    let n
    let m
    let proma = 0
    let prom
    let cal1, cal2, cal3

    g = Number(prompt("Ingrese la cantidad de grupos:" ))

    for(let i=1;i<=g;i++){
        n = prompt("Ingrese la cantidad de alumnos del grupo " + i + ": ")

        for(let j=1;j<=n;j++){
            m = Number(prompt("Ingrese la cantidad de materias del estudiante " + j + ": " ))

            for(let x=1;x<=m;x++){
        
                cal1 = Number(prompt ("Ingrese la calificación 1: "))
                cal2 = Number(prompt ("Ingrese la calificación 2: "))
                cal3 = Number(prompt ("Ingrese la calificación 3: "))
                prom = (cal1+cal2+cal3)/3
                
                alert ("Promedio de la materia es: "+ prom)
                proma = proma + prom;
            }
        alert("Promedio del alumno es: " + (proma)/m)
        }
    }
    alert("Elprmedio del grupo es:" + (proma)/n)
}

/*Una persona que va de compras a la tienda “la rebaja.”, decide llevar un control 
sobre lo que va comprando, para saber la cantidad de dinero que tendrá que pagar al 
llegar a la caja. La tienda tiene una promoción del 20% de descuento sobre aquellos
artículos cuya etiqueta sea roja. 
Determinar la cantidad de dinero que esta persona deberá pagar. */

function ejercicio6(){

    let precio
    let etiqueta 
    let descuento = 0
    let total = 0
    let x = 1

   do{

    precio = Number(prompt("Ingrese el precio del articulo"))
    etiqueta = Number(prompt('Si el articulo tiene etiqueta roja escribe 1, sino escribe otro número'))

        if(etiqueta == 1){
            descuento = descuento +(precio * 0.20)
            precio = precio - descuento
        }
    total = total + precio

    alert(`Llevas un total de: $ ${total}`)

    x = parseInt(prompt('Si deseas continuar comprando escribre 1, sino escribe otro numero'))

   }while(x==1) 
    alert(`El total a pagar es de: $ ${total} y el descuento total es de: $ ${descuento}`)
}

/*Calcular la suma siguiente: 100 + 98 + 96 + 94 + . . . + 0 en este orden*/

function ejercicio7(){

    let x = 100
    let suma = 0
    
   for(i = x; i > 0 ; i--){
      suma = suma + i
       i = i-1 
    }
    alert(`La suma de los numeros 100 + 98 + 96 + 94 hasta llegar a 0 es: ${suma}`)
}


/*Suponga que tiene usted una tienda y desea registrar las ventas en su computadora.
Diseñe un algoritmo que lea por cada cliente, el monto total de su compra.
Al final del día que escriba la cantidad total de ventas y el número de clientes atendidos.*/
    
         
function ejercicio8(){

    let venta
    let suma = 0
    let contador = 0
    let registro

    do{
        venta = Number(prompt("Ingrese el total de la compra del cliente"))
        suma = suma + venta
        contador = contador + 1

        registro = Number(prompt("¿Desea ingresar la compra de otro cliente? Digite 1 para SI u otro número para NO"))
    }while(registro == 1)

    alert(`El total a compras es de: $ ${suma} y el numero de clientes atendidos: ${contador}`)
}

/* Un jefe de casilla desea determinar cuántas personas de cada una de las secciones 
que componen su zona asisten el día de las votaciones. Las secciones son: norte, 
sur y centro. También desea determinar cuál es la sección con mayor número de votantes.*/

function ejercicio9(){

    let seccion
    let asistencia
    let norte = 0
    let centro = 0
    let sur = 0
    let total
    
    do{
        seccion = Number(prompt("Ingrese el número de la sección según como corresponda: 1(Norte), 2(Centro) o 3(sur) "))
        
        /*if(seccion == 1){
            norte = norte + 1
        }else if( seccion == 2){
            centro = centro + 1
        }else if(seccion == 3){
            sur=sur+1
        }else{
            alert("valor incorrecto")
        }*/
        
        switch (seccion) {
            case 1:
                norte = norte +1
                break;

            case 2:
                centro = centro +1          
                break;

            case 3:
                sur = sur +1
                    
                break;
            default: alert('El número ingresado no corresponde a una sección')
                break;
        }
        total = norte + centro + sur 

        asistencia = Number(prompt("¿Desea continuar? Digite 1 para SI u otro número para NO"))

    }while(asistencia == 1)

    alert(`Cantidad de votantes en la sección norte: ${norte}\nCantidad de votante en la seccion centro: ${centro}\nCantidad de votante en la sección sur: ${sur}\n 
            Total de votantes: ${total}`)
 
    if(norte>centro && norte>sur){
        alert(`La sección con la mayor cantidad de votantes es Norte`)
    }else if(centro>norte && centro>sur){
        alert(`La sección con la mayor cantidad de votantes es Centro`)
    }else if(sur>norte && sur>centro){
        alert(`La sección con la mayor cantidad de votantes es Sur`)
    }else(alert("Las secciones tienen la misma cantidad de votantes"))
}
    

/*Leer dos números y ver en la pantalla si están en orden crecientes o decrecientes */

function ejercicio10(){

    let num1
    let num2

    num1 = Number(prompt("Ingrese un número"))
    num2 = Number(prompt("Ingrese otro número"))

    if(num1<num2){
        alert(`Los numeros ${num1} y ${num2} estan en orden creciente`)
    
    }else if(num1>num2){
        alert(`Los numeros ${num1} y ${num2} estan en orden decreciente`)
    }else{
        alert("los numeros son iguales")  
    }
}






