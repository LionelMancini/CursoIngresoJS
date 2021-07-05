/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var Sueldo;
	var Descuento;
	var Resultado;
	var SueldoDescuento;

	Sueldo = parseFloat (document.getElementById("txtIdImporte").value);

	Descuento = 0.25

	SueldoDescuento = Sueldo * Descuento

	Resultado = Sueldo - SueldoDescuento

	document.getElementById("txtIdResultado").value = ("El sueldo con Descuento es en total  " +Resultado+ ".")
}
