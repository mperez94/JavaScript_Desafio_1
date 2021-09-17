//Simulacion de app calculacion promedio para profesores

alert ('Bievenido a Promedio App')

var nombreUsuario = prompt ('Ingrese su Usuario');
var password = prompt ('Ingrese su Contraseña');

alert ('Bienvenido Profesor/a ' + nombreUsuario );

//Ingeso de valores

var nombreAlumno = prompt ('Ingrese nombre del Alumno/a');

var notaAlumno1 = prompt ('Valor nota parcial 1');

var notaAlumno2 = prompt ('Valor nota parcial 2');

var notaAlumno3 = prompt ('Valor nota parcial 3');

//Formula Promedio

var promedio = (parseFloat (notaAlumno1) + parseFloat (notaAlumno2) + parseFloat (notaAlumno3)) / 3;

alert ('El promedio del alumno ' + nombreAlumno + ' es de: ' + promedio);

