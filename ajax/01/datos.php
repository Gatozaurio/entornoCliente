<?php
    $edad = $_GET["edad"];
    $trabajo = $_GET["trabajo"];
    // retrasamos 2 segundos la ejecución de esta página PHP.
    sleep(2);
    // Mostramos la fecha y hora del servidor web.
    echo ("José Alberto Távora Romero y mi edad es ".$edad. " trabajo: ".$trabajo);
?>