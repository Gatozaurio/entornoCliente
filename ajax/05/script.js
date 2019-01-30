var procesos = [];
let numero1Correcto = false;
let numero2Correcto = false;

$(function(){

	$("#numero1").change(function(){
		validarNumero($("#numero1"));
	});

	$("#numero2").change(function(){
		validarNumero($("#numero2"));
	});

	$("#formulario").submit(function(event){
		event.preventDefault();
		validarFormulario();
	});

});

// Petición por post donde se pasa la variable y para validarla en servidor
function validarNumero(input){
	let datosPost = {};
	datosPost[input.attr("name")] = input.val();
	realizarValidacion(datosPost, null);
	// Se realiza la petición ajax

}
function validarFormulario(){
	// Serialize coge todos los campos del formulario
	let datosPost = $("#formulario").serialize();
	realizarValidacion(datosPost, function(){
		sumarNumeros(datosPost);
	});
}

function realizarValidacion(datosPost, funcionCallback) {
	$.ajax({
		url:"/05/datos.php",
		method:'POST',
		data:datosPost,
		type:"JSON",
		beforeSend:function(){
			$("#spinner").show();
		}
	})
	// Se trata la respuesta
		.done(function(errores){
			let todoCorrecto = true;

			for(inputName in errores){
				let erroresInput = errores[inputName];
				let divErrores = $(`#${inputName}`).next("div");
				divErrores.html("");
				if(!$.isEmptyObject(erroresInput)){
					for(tipoError in erroresInput){
						divErrores.append(`<div>${erroresInput[tipoError]}</div>`);
					}
					todoCorrecto = false;
				}
			}

			if(todoCorrecto && funcionCallback !== null){
				funcionCallback();
			}

		})

		// Si la petición falla lanza el alert de error
		.fail(function(){
			alert("HA OCURRIDO UN ERROR EN LA PETICIÓN");
		})
		// Al terminar siempre se esconde el spinner
		.always(function(){
			procesos.pop();
			if(procesos.length === 0){
				$("#spinner").hide();
			}
		})
}

function sumarNumeros(datosPost){
	$.ajax({
		url:"/05/sumar.php",
		method:'POST',
		data:datosPost,
		type:"JSON",
		beforeSend:function(){
			$("#spinner").show();
		}
	})
	.done(function(resultado){
		$("#resultado").html(resultado);
	})

	// Si la petición falla lanza el alert de error
	.fail(function(){
		alert("HA OCURRIDO UN ERROR EN LA PETICIÓN");
	})
	// Al terminar siempre se esconde el spinner
	.always(function(){
		procesos.pop();
		if(procesos.length === 0){
			$("#spinner").hide();
		}
	})
}
