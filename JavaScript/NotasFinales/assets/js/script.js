var nombre = document.getElementById("nombre");
var carrera = document.getElementById("carrera");

/**insercion directa en la pagina */
nombre.innerHTML=prompt("Ingresa tu nombre","");
carrera.innerHTML=prompt("Ingresa tu carrera","");

/**NOTAS HTML**/
var nota1HTML = document.getElementById("nota1HTML");
var nota2HTML = document.getElementById("nota2HTML");
var nota3HTML = document.getElementById("nota3HTML");

/**solo captura de notas* */
var html1 = +prompt("Ingrese nota 1 [HTML]","");
var html2 = +prompt("Ingrese nota 2 [HTML]","");
var html3 = +prompt("Ingrese nota 3 [HTML]", "");
/**calculo del promedio */
var promHTML = (html1 + html2 + html3) / 3;

/**Insercion en etiqueta html */
nota1HTML.innerHTML = html1; 
nota2HTML.innerHTML = html2; 
nota3HTML.innerHTML = html3; 
document.getElementById("promedioHTML").innerHTML = promHTML;

/**NOTAS CSS**/
var nota1CSS = document.getElementById("nota1CSS");
var nota2CSS = document.getElementById("nota2CSS");
var nota3CSS = document.getElementById("nota3CSS");

/**solo captura de notas* */
var css1 = +prompt("Ingrese nota 1 [CSS]","");
var css2 = +prompt("Ingrese nota 2 [CSS]","");
var css3 = +prompt("Ingrese nota 3 [CSS]", "");
/**calculo del promedio */
var promCSS = (css1 + css2 + css3) / 3;

/**Insercion en etiqueta html */
nota1CSS.innerHTML = css1; 
nota2CSS.innerHTML = css2; 
nota3CSS.innerHTML = css3; 
document.getElementById("promedioCSS").innerHTML = promCSS;

/**NOTAS JS**/
var nota1JS = document.getElementById("nota1JS");
var nota2JS = document.getElementById("nota2JS");
var nota3JS = document.getElementById("nota3JS");

/**solo captura de notas* */
var js1 = +prompt("Ingrese nota 1 [JS]","");
var js2 = +prompt("Ingrese nota 2 [JS]","");
var js3 = +prompt("Ingrese nota 3 [JS]", "");
/**calculo del promedio */
var promJS = (js1 + js2 + js3) / 3;

/**Insercion en etiqueta html */
nota1JS.innerHTML = js1; 
nota2JS.innerHTML = js2; 
nota3JS.innerHTML = js3; 
document.getElementById("promedioJS").innerHTML = promJS;


var promFinal = (promHTML + promCSS + promJS) / 3;

document.getElementById("promFinal").innerHTML = promFinal;
