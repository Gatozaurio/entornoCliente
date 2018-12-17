$(document).ready(
    function(){
        createForm();
    }
);

function createForm(){
    let formulario = $("<form></form>");

    let nombreInput = $('<input>');
    nombreInput.attr("type", "text");
    nombreInput.attr("id", "nombre");
    nombreInput.attr("placeholder", "Introduzca su nombre");

    let temaSelect = $('<select></select>');
    let temaOpciones = [
        {opcion: 1, texto: 'Música'},
        {opcion: 2, texto: 'Videojuegos'},
        {opcion: 1, texto: 'Deportes'}
    ];
    $(temaOpciones).each(function() {
        temaSelect.append($("<option>").attr('value',this.opcion).text(this.texto));
    });

    let lenguajeInput = $('<input>');
    lenguajeInput.attr("type", "text");
    lenguajeInput.attr("id", "lenguaje");
    lenguajeInput.attr("placeholder", "Lenguaje utilizado");

    let apellidosInput = $('<input>');
    apellidosInput.attr("type", "text");
    apellidosInput.attr("id", "apellidos");
    apellidosInput.attr("placeholder", "Apellidos");

    let dniInput = $('<input>');
    dniInput.attr("type", "text");
    dniInput.attr("id", "dni");
    dniInput.attr("placeholder", "Introduzca su DNI");

    let codigoInput = $('<input>');
    codigoInput.attr("type", "text");
    codigoInput.attr("id", "codigo");
    codigoInput.attr("placeholder", "Código de proyecto");
    codigoInput.attr("disabled", "");

    let validacionesLabel = $('<label></label>');
    validacionesLabel.text("Validar formulario");
    let validacionesCheckbox = $('<input></input>');
    validacionesCheckbox.attr("type", "checkbox");
    validacionesCheckbox.attr("id", "validaciones");
    validacionesLabel.append(validacionesCheckbox);

    let js = $('<script></script>');
    js.attr("src", "validaciones.js");
    js.attr("cache", "false");


    formulario.append(nombreInput);
    formulario.append(temaSelect);
    formulario.append(lenguajeInput);
    formulario.append(apellidosInput);
    formulario.append(dniInput);
    formulario.append(codigoInput);
    formulario.append(validacionesLabel);
    formulario.append(js);
    
    $(".divFormulario").append(formulario);

    
}
