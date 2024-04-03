// function enviarMensaje() {
//     // Obtén los valores del formulario
//     var nombre = document.getElementById('nombre').value;
//     var telefono = document.getElementById('telefono').value;
//     var mensaje = document.getElementById('mensaje').value;

//     // Crea el enlace de WhatsApp con los datos del formulario
//     var url = 'https://api.whatsapp.com/send?phone=' + 50576623177 + '&text=Hola, soy ' + nombre + '. ' + mensaje;

//    
// }



    function enviarMensaje() {
        // Obtener los valores de los campos del formulario
        var nombre = document.getElementById("nombre").value;
        var email = document.getElementById("email").value;
        var telefono = document.getElementById("telefono").value;
        var mensaje = document.getElementById("mensaje").value;

        // Validar que los campos no estén vacíos
        if (nombre === "" || email === "" || telefono === "" || mensaje === "") {
            alert("Por favor, completa todos los campos.");
            return false;
        }

        // Validar el formato del correo electrónico
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, introduce un correo electrónico válido.");
            return false;
        }

        // Validar el formato del número de teléfono (puedes ajustar según tus necesidades)
        var telefonoRegex = /^\d{8}$/; // Este ejemplo asume un número de 8 dígitos
        if (!telefonoRegex.test(telefono)) {
            alert("Por favor, introduce un número de teléfono válido.");
            return false;
        }

        // Si todas las validaciones pasan, el formulario se envía
                 // Crea el enlace de WhatsApp con los datos del formulario
        var url = 'https://api.whatsapp.com/send?phone=' + 5058172-1759 + '&text=Hola, soy ' + nombre + '. ' + mensaje;
         // Redirige a WhatsApp
        window.location.href = url;
        alert("Mensaje enviado correctamente.");
        return true;
    }

