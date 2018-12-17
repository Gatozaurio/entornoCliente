$(document).ready( // document es la página
    function(){
        botonBorrarPares();
        botonBorrarImpares();
        cambiarHermanos();
        crearDivs();
    }
);

function crearDivs(){
    for(let i=1; i<=10; i++){
        let div = $(`<div></div>`);
        let h1 = $(`<h1></h1>`);
        h1.text(`Div Nº${i}`);
        div.append(h1); // Mete el h1 en el div
        $(document.body).append(div);
        for(let j=1; j<=i; j++){
            let input = $(`<input />`);
            input.attr("id",`${i}-${i}`);
            input.val(`${i}.${j}`);
            if(j%2==0){
                input.addClass("par");
            }else{
                input.addClass("impar");
            }
            div.append(input);
        }
    }
}

function botonBorrarPares(){
    let boton = $(`<button></button>`);
    boton.attr("type", "button");
    boton.text("Borrar pares");
    boton.click(function(event){
        $(".par").remove();
    });
    $(document.body).append(boton);
}

function botonBorrarImpares(){
    let boton = $(`<button></button>`);
    boton.attr("type", "button");
    boton.text("Borrar impares");
    boton.click(function(event){
        let divs = $("div");
        for(let i=0; i<=divs.length; i++){
            if(i%2==0){
                $(divs[i]).find("input").remove();
            }
        }
    });
    $(document.body).append(boton);
}

function cambiarHermanos(){
    let div = $(`<div></div>`);
    let etiqueta = $("<label></label>");
    etiqueta.text("Nº Input: ");
    let boton = $(`<button></button>`);
    boton.attr("type", "button");
    boton.text("Cambiar hermanos");
    boton.click(function(event){
        
    });
    div.append(etiqueta);  
    div.append(boton);
    $(document.body).append(div);
    
}