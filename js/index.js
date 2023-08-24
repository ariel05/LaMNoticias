
document.getElementById("descripcion-1").innerHTML = "El liberal ganó como candidato más votado y como partido más votado, con un 31% a nivel nacional.";
document.getElementById("descripcion-2").innerHTML = "Con trés goles, dos de remate y uno de tiro libre, logró posicionar al Inter de Miami en el primer puesto de la tabla.";
document.getElementById("descripcion-3").innerHTML = "Ante la ola de saqueos en el conurbano, Lucas fue detenido en medio de un altercado con el dueño del local.";
function cambiarFrase1(){
    document.getElementById("modal-titulo").innerHTML = "Gano Milei";
    document.getElementById("descripcion-informacion").innerHTML = "El liberal ganó con el 31% de los votos, pero sigue sin clarificarse las denuncias por venta de candidaturas";

    document.getElementById("cuerpo-modal").innerHTML = "estoy usando la clase";
}
/*
function cambiarFrase1(){
    alert("Esto es una alerta");
}*/

function cambiarFrase1(){
        document.getElementById("modal-titulo").innerHTML = "Gano Milei";
        document.getElementById("descripcion-informacion").innerHTML = "El liberal ganó con el 31% de los votos, pero sigue sin clarificarse las denuncias por venta de candidaturas";

        document.getElementById("cuerpo-modal").innerHTML = "estoy usando la clase";
}

function cambiarFrase2(){
    document.getElementById("modal-titulo").innerHTML = "Messi Goleó";
    document.getElementById("descripcion-informacion").innerHTML = "Con trés goles, dos de remate y uno de tiro libre, Messi logró ganar contra los muertos del Inter del sur.";
}

function cambiarFrase3(){
    document.getElementById("modal-titulo").innerHTML = "Lucas procesado por robo";
        document.getElementById("descripcion-informacion").innerHTML = "Ante la ola de saqueos en la matanza, Lucas fue detenido en medio de un altercado con el dueño del local, por hacerse el piola";
}