/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

	/*Concatenación
	parseInt (NumeroB)
	parseInt (Numero A)
	*/

	TotalNumero = NumeroA + NumeroB ;

	//Alerta con texto que me dice el resultado
	alert("La suma es "+ TotalNumero + ".");
}

