/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var Sueldo;
	var Aumento;
	var Resultado;

	Sueldo = parseFloat (document.getElementById("txtIdSueldo").value);

	Aumento = 1.1

	Resultado = Sueldo * Aumento 

	document.getElementById("txtIdResultado").value = ("El nuevo sueldo es de " +Resultado+ ".")
	
}
