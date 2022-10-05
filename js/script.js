//TAREA 1 JAVASCRIPT


//Calcula el area de rectagunlo
const messageRectangle = confirm("Deseas Cacular el Area de un Rectangulo");
let rectangleLength = prompt("Cual es el largo del rectangulo a calcular");
let rectangleWidth = prompt("Cual es el ancho del rectangulo a calcular");

let rectangleArea = rectangleLength * rectangleWidth;

alert("El área del rectangulo es: " + rectangleArea);

//Calcula el area de triangulo
const messageTriangle = confirm("Deseas Cacular el Area de un Triangulo");
let triangleBase = prompt("Cual es el la base del triangulo a calcular");
let triangleheight = prompt("Cual es la altura del triangulo a calcular");

let triangleArea = ((triangleBase * triangleheight)/2);

alert("El área del triangulo es: " + triangleArea);

//Calcula el area de hexagono
const messageHexagon = confirm("Deseas Cacular el Area de un Hexagono");
let hexagonPerimeter = prompt("Cual es el perimetro del hexagono a calcular");
let hexagonApothem = prompt("Cual es la apotema del hexagono a calcular");

let hexagonArea = ((hexagonPerimeter * hexagonApothem)/2);

alert("El área del hexagono es: " + hexagonArea);

//Calcula el area de trapezoide
const messageTrapezoid = confirm("Deseas Cacular el Area de un Trapezoide");
let trapezoidBase = prompt("Cual es la base del triangulo a calcular");
let trapezoidHeightABD = prompt("Cual es la altura del triangulo ABD a calcular");
let trapezoidHeightBCD = prompt("Cual es la altura del triangulo BCD a calcular");

let trapezoidArea = (((trapezoidBase * trapezoidHeightABD)/2)+((trapezoidBase * trapezoidHeightBCD)/2));

alert("El área del trapezoide es: " + trapezoidArea);








