const nombres = [];
const contraseñas = [];



function registro(nombre,contraseña) {
	nombre = document.getElementById('nombre').value;
	contraseña = document.getElementById('contraseña').value;


	if(nombre && contraseña !== ""){
	     nombres.push(nombre);
	     contraseñas.push(contraseña);
	     document.getElementById('nombre').value = "";
	     document.getElementById('contraseña').value = "";
	     document.getElementById('resultados').innerHTML = "Usuarios: " + nombres + "<br>" + "Contraseñas: " + contraseñas;
   }else{
   		 alert("por favor completa todos los campos");
   		 document.getElementById('nombre').value = "";
	     document.getElementById('contraseña').value = "";
}
}


function ingreso(nombre2,contraseña2) {
	nombre2 = document.getElementById('nombre2').value;
	contraseña2 = document.getElementById('contraseña2').value;

	for( i = 0, a = 0; i < nombres.length, a < contraseñas.length; i++, a++){
			if(nombre2 == nombres[i] && contraseña2 == contraseñas[a]){
			document.getElementById('nombre2').value = "";
	        document.getElementById('contraseña2').value = "";
			alert("Acceso Correcto hola " + nombres[i]);
			}else{
				document.getElementById('nombre2').value = "";
	            document.getElementById('contraseña2').value = "";
			}
	}
}