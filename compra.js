// Defino valor de curso
const valorCurso = 200;

// Defino porcentajes de descuento según categoría
let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;

// Elementos en variables
let nombre          = document.getElementById("nombre");
let apellido        = document.getElementById("apellido");
let mail            = document.getElementById("mail");
let cantidadCursos = document.getElementById("cantidadCursos");
let categoria       = document.getElementById("categoriaSelect");

// Función para quitar el estilo de error a los elementos del form
function quitarClaseError() {
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('is-invalid');
    }
}

// Cálculo total a pagar
function total_a_pagar() {

    // Ejecuto función para que quite todos los estilos de error en los campos que los tuvieran
    quitarClaseError();

    // Verifico si lleno los siguientes campos, sino que aplique un estilo de error, haga foco en el campo y se detenga
    if (nombre.value === "") {
        alert("Por favor, escribí tu nombre.");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }

    if (apellido.value === "" ) {
        alert("Por favor, escribí tu apellido.");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if (mail.value === "") {
        alert("Por favor, escribí tu email.");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    // Para determinar si el correo electrónico es válido o no
    const emailValido = mail => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }

    if (!emailValido(mail.value)) {
        alert("Por favor, escribí un correo electrónico válido.");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    // Verifico si está ingresado al menos 1 ticket, sino que aplique un estilo de error, haga foco en el campo y se detenga
    if ( (cantidadCursos.value == 0) || (isNaN(cantidadCursos.value)) ) {
        alert("Por favor, ingresá correctamente cantidad de cursos.");
        cantidadCursos.classList.add("is-invalid");
        cantidadCursos.focus();
        return;
    }

    // Verifico que haya seleccionado una categoría, sino que aplique un estilo de error, haga foco en el campo y se detenga
    if (categoria.value == "") {
        alert("Por favor, seleccioná una categoría.");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
    }

    // Multiplico cantidad de cursos por el valor
    let totalValorCursos = (cantidadCursos.value) * valorCurso;

    // Aplico descuentos según categoría
    if (categoria.value == 0) {
        totalValorCursos = totalValorCursos ;
    }
    if (categoria.value == 1) {
        totalValorCursos = totalValorCursos - (descuentoEstudiante / 100 * totalValorCursos);
    }
    if (categoria.value == 2) {
        totalValorCursos = totalValorCursos - (descuentoTrainee / 100 * totalValorCursos);
    }
    if (categoria.value == 3) {
        totalValorCursos = totalValorCursos - (descuentoJunior / 100 * totalValorCursos);
    }

    // Inserto el valor en el HTML
    totalPago.innerHTML = totalValorCursos;
}

// Botón Resumen recibe un escuchador y la funcion del cálculo
btnResumen.addEventListener('click', total_a_pagar);

// Función para el botón Borrar para que borre el valor
function reset_total_a_pagar() {
    quitarClaseError();
    totalPago.innerHTML = "";
}
btnBorrar.addEventListener('click', reset_total_a_pagar);