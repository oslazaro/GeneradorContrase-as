//#,&- ( < [ %^*

    var app = document.getElementById("app");
    var mas = document.getElementById("btn-mas-uno");
    var numeroC = document.getElementById("numero-caracteres");
    var numero = parseInt(numeroC.value);
    var menos = document.getElementById("btn-menos-uno");
    var btnSimbolos = document.getElementById("btn-simbolos");
    var btnNumeros = document.getElementById("btn-numeros");
var btnMayusculas = document.getElementById("btn-mayusculas");
var generar = document.getElementById("btn-generar");
var caracteres = {
    numeros: '0 1 2 3 4 5 6 7 8 9',
    simbolos: '[ @ # ^ & / ( ) = ? ! · * { } - . , < >',
    mayusculas: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
    minusculas: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
}
var configuraciones =
{
    caracteres: numero,
    simbolos: true,
    numeros:true,
    mayusculas: true,
    minusculas:true
}
    //para no cargar la pagina cada vez que damos a un boton
    app.addEventListener('submit', function (e) {
        e.preventDefault();
    });
    menos.addEventListener("click", function () {
    if (numero > 5) {
        numero--;
        numeroC.value = numero;
    }
    })
    mas.addEventListener("click", function () {
    if (numero < 15) {
        numero++;
         numeroC.value = numero;
    }
        
})


    btnSimbolos.addEventListener("click", function () {
        btnCambiar(this);
        configuraciones.simbolos = !configuraciones.simbolos;
        
})
    btnNumeros.addEventListener("click", function () {
        btnCambiar(this);
        configuraciones.numeros = !configuraciones.numeros;
})
    btnMayusculas.addEventListener("click", function () {
        btnCambiar(this);
        configuraciones.mayusculas = !configuraciones.mayusculas;
})
    function btnCambiar(elemento) {
    elemento.classList.toggle('false');
    var dd = elemento.firstChild.getAttribute("class").value;
    if (elemento.firstChild.getAttribute("class") == "fas fa-check") {
        elemento.firstChild.setAttribute("class", "fas fa-times");

    }
    else {
        elemento.firstChild.setAttribute("class", "fas fa-check");
    }
}
generar.addEventListener("click", function () {
    generarPassword();
})
function generarPassword() {
    document.getElementById("input-password").value = '';
    var caracteresFinales = '';
    var password = '';

    for (propiedad in configuraciones) {
        if (configuraciones[propiedad]) {
            caracteresFinales += caracteres[propiedad]+' ';
            

        }
    }
    caracteresFinales = caracteresFinales.trim();
    caracteresFinales = caracteresFinales.split(' ');
    for (var i = 0; i < numero; i++) {
        password =password+ caracteresFinales[Math.floor(Math.random() * caracteresFinales.length)];
    }
    document.getElementById("input-password").value = password;
    password = "";
}
generarPassword()