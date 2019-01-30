function objetoXHR(){
    if (window.XMLHttpRequest){// El navegador implementa la interfaz XHR de forma nativa
        return new XMLHttpRequest();
    }else if (window.ActiveXObject){ // El navegador no implementa la interfaz XHR de forma nativa
                                     // Por ejemplo: Internet explorer.
        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++){
            try{
                /* Se intenta crear el objeto en Internet Explorer comenzando
                en la versión más moderna del objeto hasta la primera versión.
                En el momento que se consiga crear el objeto, saldrá del bucle
                devolviendo el nuevo objeto creado. */

                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {}//Capturamos el error,
        }
    }
    /* Si llegamos aquí es porque el navegador no posee ninguna forma de crear el objeto.
     Emitimos un mensaje de error usando el objeto Error.
     Más información sobre gestión de errores en:
     HTTP://www.javascriptkit.com/javatutors/trycatch2.sHTML
     */
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}

document.addEventListener('DOMContentLoaded', function(){
    let boton = document.getElementById('boton');
    boton.addEventListener('click', function(){
        xhr = new objetoXHR();
        xhr.open('POST', '/02/datos.php', true);
        xhr.onreadystatechange = comprobarEstadoPeticion;
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send('edad=20');
    });
});

function comprobarEstadoPeticion(){
     switch(this.readyState){
     // Evaluamos el estado de la petición AJAX
     // Vamos mostrando el valor actual de readyState en cada llamada.
         case 0:
             break;
         case 1:
             break;
         case 2:
             break;
         case 3:
             break;
         case 4:
             if (this.status == 200){
             // Si el servidor ha devuelto un OK
             // Escribimos la respuesta recibida de la petición AJAX en el objeto DIV
             let respuesta = this.responseText;
             let div = document.getElementById('resultado');
             div.appendChild(document.createTextNode(respuesta) );
             }
             break;
            }
}
