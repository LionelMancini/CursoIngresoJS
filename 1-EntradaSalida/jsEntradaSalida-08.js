/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var NumeroA;
	var NumeroB;
	var Resultado;

	NumeroA = parseInt (document.getElementById("txtIdNumeroDividendo").value);
	
	NumeroB = parseInt (document.getElementById("txtIdNumeroDivisor").value);

	Resultado = NumeroA % NumeroB 

	alert ("La divison de "+ NumeroA +" divido "+ NumeroB +" da un total de " +Resultado+ ".")
	
}
