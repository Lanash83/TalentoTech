//Punto 1

/*let nombre = "Nazly";
let edad = 40;

document.write("Tu nombre es: " + nombre + "y tú edad es: " + edad + "<br>");
*/
//Punto 2
/*let esEstudiante = true;
let altura = 160;

document.write("Es estudiante es tipo: " + typeof esEstudiante+ " y altura es tipo: " + typeof altura + "<br>");
*/
//Punto 3
/*const PI = 3.14159;
PI = 3.1416;
document.write(PI);*/

//Punto 4
/*let a = 1;
let b = 2;

alert("Suma: " + (a + b));
alert("Resta: " + (a - b));
alert("Multiplicación: " + (a*b));
alert("División: " + (a/b));
alert("Modulo: " + (a%b));
*/

//Punto 5 
/*let x = 10;

x += 1;
x -= 2;
x *= 3;
x /= 4;
x %= 5;

document.write("El valor final de x = " + x);*/

//Punto 6
let contador = 0;

contador++;
alert("El contador a aumentado a: " + contador);

//Punto 7
/*let a = 5;
let b = 10;

alert("¿a es mayor a b? \n" + (a > b));
alert("¿a es menor a b? \n" + (a < b));
alert("¿a es mayor o igual a b? \n" + (a >= b));
alert("¿a es menor o igual a b? \n" + (a <= b));
alert("¿a es igual a b? \n" + (a == b));
alert("¿a es exactamente igual a b? \n" + (a === b));
*/
//Punto 8
/*let x = true;
let y = false;
let z = true;

alert("Verdadero && falso es igual a: " + (x && y));
alert("Verdadero && verdadero es igual a: " + (x && z));
alert("Falso && falso es igual a: " + (y && y));
alert("Verdadero || falso es igual a: " + (x || y));
alert("Verdadero || verdadero es igual a: " + (x || z));
alert("Falso || falso es igual a: " + (y || y));
alert("Negación de verdadero es igual a: " + (!x));
alert("Negación de falso es igual a: " + (!y));
*/

//Punto 9
let nombre = "Nazly";
let apellido = "Uzcategui";

alert("Nombre completo: " + nombre + " " + apellido);

//Punto 10
let numero = 5;
let unString = numero.toString(numero);
alert("De numero a String \n" + unString);

//Punto 11
let distanciaKm = 10;

alert("De kilometros a metros: " + (distanciaKm*1000));
alert("De kilometros a centímetros: " + (distanciaKm*100000));
alert("De kilometros a millas: " + (distanciaKm/1.609));

//Punto 12
let base = 2;
let altura = 4;

alert("Area de un rectangulo: " + (2 * 4));
alert("Perimetro del rectangulo: " + (2*2 + 2*4));

//Punto 13
let calificacion1 = 4.5;
let calificacion2 = 4.0;
let calificacion3 = 3.6;

alert("Promedio: " + ((calificacion1+calificacion2+calificacion3)/3));

//Punto 14
let precioOriginal = 100;
alert("Precio original: " + precioOriginal);
alert("Descuento: " + (precioOriginal*0.15));
alert("Precio con descuento: " + (precioOriginal-(precioOriginal*0.15)));

//Punto 15
let dolares = 4;
alert("4 dolares a euros: " + (dolares*0.93));
alert("4 dolares a libras esterlinas" + (dolares*0.78));
alert("4 dolares a yenes japoneses: " + (dolares*161.35));
