// este en mi primer script 
//alert("Hola mundo 4");

/*
mensaje en 
console.log();
para saber por donde pasa el codigo y en que orden
*/
console.log("Hola mundo desde el console.log");
console.log("chao");

/** variables**/
//El tipo de variable, depende de su contenido o valor;
//var nombre_variable = valor;

var uno_numerico = 1;
var uno_literal = "1";//o caracter
var uno_string = "uno";

// 
var nombre = "Juan";//asignar valor
nombre == "Juan";//comparacion
nombre === "Juan";//comparacion extricta

true == true
/*
//(%)residuo o modulo o resto de la división
4 / 2=2
0 //resto  

5 / 2=2
1 //resto

5 / 3 =1
2 //resto

4 % 2 //cuanto es es resto de dividir 4/2, respt=0
4 % 2 == 0 //true o false
5 % 3 == 0//
 /**par es aquel que al dividir por 2 el residuo es cero */
/*
5 % 2 != 0//el resto de dividir 5/2 es distinto a cero Verdadero
5 % 2 == 1 //Verdadero 5 es impar
-5 %2 == -1
*/

/*suma de string( CONCATENANDO), 
el resultado siempre sera un string */

nombre = "Juan";
var apellido = "Aguilera";
//imprimeme la suma de los contenidos
console.log(nombre + apellido);//JuanAguilera
console.log(nombre + " " + apellido);//Juan Aguilera
/*string + numero= un string concatenado */
console.log(nombre + 43);//Juan43
console.log(43 + apellido);//43Aguilera

console.log(43 + 1 + nombre);//44Juan
console.log( nombre+ 43 + 1);//Juan431
console.log(nombre + (43 + 1));//Juan44

/* imprimir mas de un valor*/
console.log(nombre, (43 + 1));
console.log(nombre + " " +(43 + 1));