$(function(){

	$("#boton").click(function(){
		// Hacer la petición
		$.ajax({
			url:"/05/datos.php",
			method:'POST',
			type:"JSON",
			beforeSend:function(){
				$("#spinner").show();
			}
		})
		// Controlar la petición
		// Cuando termina la petición lanza el alert y muestra la respuesta
		.done(function(datosRespuesta){
			console.log(datosRespuesta);
			for (objeto of datosRespuesta){
				$("#resultado").append(
					`<div>${objeto.nombre} - ${objeto.genero}</div>`
				);
			}

			alert("YA SE HAN OBTENIDO LOS DATOS");
		})
		// Si la petición falla lanza el alert de error
		.fail(function(){
			alert("HA OCURRIDO UN ERROR EN LA PETICIÓN");
		})
		// Al terminar siempre se esconde el spinner
		.always(function(){
			$("#spinner").hide();
		})
	});

});
