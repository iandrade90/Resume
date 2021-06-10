function FormularioValido(){
    var nombrevalido = document.forms["formulario"]["Nombre"].value;
    var emailvalido = document.forms["formulario"]["Email"].value;
    var formatoEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var mensajevalido = document.getElementById('mensaje').value;

    if (nombrevalido == ""){
    	alert("Por favor ingrese su nombre");
	return false;
    }

    if (emailvalido.match(formatoEmail)) {
	return true;
    }else {
	alert("Por favor ingrese un email valido");
    	return false;
    }

    if (mensajevalido == ""){
    	alert("Por favor ingrese su mensaje");
	return false;
    }
}
