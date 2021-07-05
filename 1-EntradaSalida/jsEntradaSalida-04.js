/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	// Defino la variable del nombre
	var nombreIngresado;

	//Guardo en la variable el nombre que escribio el usuario
	nombreIngresado = prompt("Ingrese su nombre");

	//Copio su nombre en la variable
	document.getElementById("txtIdNombre").value = nombreIngresado;

}

