var reduccionrueda,veldivredrued,rpm_primera,rpm_segunda,rpm_tercera,rpm_cuarta,rpm_quinta,reduccion_primera,reduccion_segunda,reduccion_tercera,reduccion_cuarta,reduccion_quinta,reduccion_eje,piñon,corona,perimetro_rueda,velocidad,primaria,primera,segunda,tercera,cuarta,quinta;

var velo = document.getElementById("Velocidad"); 

velo.addEventListener("keyup", handleChange); 

function handleChange(evt) {
    let valor= parseFloat(evt.target.value);
    velocidad = valor;
}   

var per = document.getElementById("per"); 

per.addEventListener("keyup", handleChange2); 

function handleChange2(evt) {
    let valor1= parseFloat(evt.target.value);
    perimetro_rueda = valor1;
}

var piño = document.getElementById("piñon"); 

piño.addEventListener("keyup", handleChange3); 

function handleChange3(evt) {
    let valor2= parseFloat(evt.target.value);
    piñon = valor2;
}

var coro = document.getElementById("corona"); 

coro.addEventListener("keyup", handleChange4); 

function handleChange4(evt) {
    let valor3= parseFloat(evt.target.value);
    corona = valor3;
}

var pri = document.getElementById("primera")
var seg = document.getElementById("segunda")
var ter = document.getElementById("tercera")
var cua = document.getElementById("cuarta")
var qui = document.getElementById("quinta")


function reducciones(){


    reduccionrueda = (perimetro_rueda/100)*60/1000;

    reduccion_eje = piñon/corona

    veldivredrued = velocidad / reduccionrueda

    primaria = 18/73
    primera = 13/36
    segunda = 17/32
    tercera = 20/29
    cuarta = 23/26
    quinta = 25/24

    reduccion_primera = primaria * primera * reduccion_eje
    reduccion_segunda = primaria * segunda * reduccion_eje
    reduccion_tercera = primaria * tercera * reduccion_eje
    reduccion_cuarta = primaria * cuarta * reduccion_eje
    reduccion_quinta = primaria * quinta * reduccion_eje

    rpm_primera = veldivredrued/reduccion_primera
    rpm_segunda = veldivredrued/reduccion_segunda
    rpm_tercera = veldivredrued/reduccion_tercera
    rpm_cuarta = veldivredrued/reduccion_cuarta
    rpm_quinta = veldivredrued/reduccion_quinta
    
    rpm_primera_red = Math.trunc(rpm_primera)
    rpm_segunda_red = Math.trunc(rpm_segunda)
    rpm_tercera_red = Math.trunc(rpm_tercera)
    rpm_cuarta_red = Math.trunc(rpm_cuarta)
    rpm_quinta_red = Math.trunc(rpm_quinta)

    pri.textContent = rpm_primera_red
    seg.textContent = rpm_segunda_red
    ter.textContent = rpm_tercera_red
    cua.textContent = rpm_cuarta_red
    qui.textContent = rpm_quinta_red
}







