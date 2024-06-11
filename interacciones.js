/* MENU DESPLEGABLE VERSION MOVIL: FUNCIONALIDAD */
const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menudesp");
btnMenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
});

/* FUNCIONALIDAD FORMULARIO DE CONTACTO */

window.onload = paginaCargada;

function paginaCargada()
{
    // Evento que captura el envio del formulario
    var boton = document.getElementById("enviodato");
    boton.onclick = validarFormulario;
};

// Función para validar el formulario.
function validarFormulario()
{    
    var nombre = document.getElementById("nombre");
    if(nombre.value == "")
    {
      alert("¡Debe completar todos los datos!");
      return;
    }

    var apellido = document.getElementById("apellido");
    if(apellido.value == "")
    {
        alert("¡Debe completar todos los datos!");
        return;
    }

    var email = document.getElementById("email");
    if(email.value == "")
    {
        alert("¡Debe completar todos los datos!");
        return;
    }

    var telefono = document.getElementById("telefono");
    if(telefono.value == "")
    {
        alert("¡Debe completar todos los datos!");
        return;
    }
    
    var mensaje = document.getElementById("mensaje");
    if(mensaje.value == "")
    {
        alert("¡Debe completar todos los datos!");
        return;
    }

    var checkbox = document.getElementById("verif1");
    if(checkbox.checked == false)
    {
        alert("Para comprobar que seas un humano, por favor verifica el checkbox.");
        return;
    }
    else{
        alert("¡El mensaje se ha enviado con éxito!")
    }
    
    var formulario = document.getElementById("respuesta");
    formulario.onsubmit();
}