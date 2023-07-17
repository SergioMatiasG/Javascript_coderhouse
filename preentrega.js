// Primer preentrega JavaScript
// Cada uno de estos ejercicios contiene todos los requerimientos necesarios como para aprobar la primer preentrega.
// Como obligación, solo deben entregar uno.  
// Como recomendación, si pueden hacer todos, van a poder tener más seguridad acerca de estos temas vistos.

// TESTEEN CON DIFERENTES CASOS DE USO
// 2 casos positivos, 2 casos negativos, 2 casos incorrectos

// 1) Se precisa un algoritmo que reciba por prompt el mail del usuario y que valide si este mail contiene un "@". Para ello se precisará un bucle que pueda recorrer cada caracter de este valor y que en base a una condición, refleje como alerta si "Es un mail válido" o "Es un mail inválido", en el caso de que no contenga "@".

//       RESOLUCION ---------------------------------

const email = prompt("Ingrese email")

function validarEmail (email){
    for (let i = 0; i < email.length; i++){

        if (email[i] === "@") return true;
    } 
    return false;
}


if (validarEmail(email)) 
    alert ("El email es valido")
else  
    alert ("El email no es valido")

//--------------------------------------------------

// 2) Se precisa un algoritmo que pida a través de un prompt el teléfono celular del usuario (ej: 1123456789 ) y que verifique, mediante un bucle, si este contiene 10 caracteres. Se necesitará una variable acumuladora que sume 1 cada vez que el bucle recorra cada uno de los valores de este dato. Luego de utilizar este valor, se deberá realizar una estructura que valide si el teléfono del usuario tiene 10 caracteres, si es así, se deberá mostrar una alerta que diga: "Su teléfono ingresado es válido", en caso contrario, se deberá mostrar una alerta que diga: "Su teléfono ingresado es inválido".

//       RESOLUCION ----------------------------

const ingreseNumero = (prompt ("Ingrese su numero celular"))
let acc = 0
for(let i = 0; i < ingreseNumero.length; i++){
    acc ++
}
if(acc !== 10){
    alert("Su telefono ingresado es ivalido, revise bien su numero")
}else {
    alert("Su telefono ingresado es valido")
}
//--------------------------------------------------

// 3) Se precisa un algoritmo que pida al usuario, a través de prompts, dos valores: El primero un numero mínimo y el segundo un número máximo. Luego se deberán convertir estos valores en numbers e iterar sobre ese rango de valores con un bucle. Una estructura condicional debe evaluar si el número es par o impar. Para el caso par, se deberán sumar todos sus valores en una variable acumuladora, para el caso impar, se deberan sumar todos los valores en otra variable acumuladora. Luego se deberán mostrar dos alertas, para el caso par: "La suma de todos los números pares da x número" y para el caso impar: "La suma de todos los números impares da x número".
//método sugeridos Number(), uso de acumuladoras, uso de variables, for, if, resto %

//       RESOLUCION --------------------------

const numeroMinimo = Number(prompt ("Ingrese numero Minimo"))
const numeroMaximo = Number(prompt ("Ingrese numero Maximo"))
let accPar = 0
let accImpar = 0
for (let i = numeroMinimo; i <= numeroMaximo ; i++ ){
    if( i % 2 === 0){
        accPar = accPar + i    
    } else if ( i % 2 !== 0){
        accImpar = accImpar + i
    }
}
alert (`La suma de todos los numeros pares da ${accPar} numero`)
alert (`La suma de todos los numeros impares da ${accImpar} numero`)  

//--------------------------------------------------

// 4) Se precisan de un bucle que se inicialice en 100 e itere hasta 250. Este debe contener una estructura condicional que verifique si el número es par o impar. Para el caso par, se deberá visualizar en consola la raíz cuadrada del valor, para ello usar el método Math.sqrt() para el caso impar, se deberá visualizar en consola la potencia de esos valores, para ello usar el método Math.pow() ej: Math.pow(valorAPotenciar, 2) = x^2

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/pow

//       RESOLUCION ----------------------------------------

for(let i = 100; i <= 250; i++){
    if(i % 2 === 0){
        let valorRaiz = Math.sqrt(i);
        console.log(`La raiz cuadrada de ${i} es ${valorRaiz}`)
    } else if (i % 2 !== 0){
        let valorPotencia = Math.pow(i, 2);
        console.log(`La potencia de ${i} es ${valorPotencia}`)
        
    }
}
//--------------------------------------------------