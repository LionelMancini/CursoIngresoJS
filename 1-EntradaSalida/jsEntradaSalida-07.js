/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//Defino variables
	var NumeroA;
	var NumeroB;
	var TotalNumero;

	//Establezco de donde va a tomar el valor cada varible 

	/* Suma */
	NumeroA = parseInt (document.getElementById("txtIdNumeroUno").value)

	NumeroB = parseInt ( document.getElementById("txtIdNumeroDos").value);
	
	TotalNumero = NumeroA + NumeroB ;

	//Alerta con texto que me dice el resultado
	alert("La suma es "+ TotalNumero + ".");

}

function restar()
{
	//Defino variables
	var NumeroA;
	var NumeroB;
	var TotalNumero;

	//Establezco de donde va a tomar el valor cada varible 

	/* Resta */
	NumeroA = parseInt (document.getElementById("txtIdNumeroUno").value)

	NumeroB = parseInt ( document.getElementById("txtIdNumeroDos").value);
	
	TotalNumero = NumeroA - NumeroB ;

	//Alerta con texto que me dice el resultado
	alert("La resta es "+ TotalNumero + ".");

}

function multiplicar()
{ 
	//Defino variables
	var NumeroA;
	var NumeroB;
	var TotalNumero;

	//Establezco de donde va a tomar el valor cada varible 

	/* Multiplicación */
	NumeroA = parseInt (document.getElementById("txtIdNumeroUno").value)

	NumeroB = parseInt ( document.getElementById("txtIdNumeroDos").value);
	
	TotalNumero = NumeroA * NumeroB ;

	//Alerta con texto que me dice el resultado
	alert("La multiplicación es "+ TotalNumero + ".");

}

function dividir()
{
	var NumeroA;
	var NumeroB;
	var Resultado;

	NumeroA = parseInt (document.getElementById("txtIdNumeroUno").value);
	
	NumeroB = parseInt (document.getElementById("txtIdNumeroDos").value);

	Resultado = NumeroA / NumeroB 

	alert ("La divison de "+ NumeroA +" divido "+ NumeroB +" da un total de " +Resultado+ ".")
}

