    document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();


    LimpiarMensajesError();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();

    let validar = true;
    //NOMBRE
    if (nombre === '') {
        mensajeError('nombreError', 'Por favor, introduce tu nombre.');
        validar = false;
    }
    if (!validarNombre(nombre)) {
        mensajeError('nombreError', 'El campo contiene numeros.');
        validar = false;
    }
    //EMAIL
    if (!validarEmail(email)) {
        mensajeError('emailError', 'Por favor, introduce un correo electrónico válido.');
        validar = false;
    }

    //TELEFONO
    if (!validarTelefono(telefono)) {
        mensajeError('telefonoError', 'Por favor, introduce un número de teléfono válido.');
        validar = false;
    }

    //MOSTRAR 
    if (validar) {
        const contactResponse = document.getElementById('contactMostrar');
        contactResponse.innerHTML = '';

        const mensajeEnviado = document.createElement('p');
        mensajeEnviado.textContent = 'Mensaje enviado';
        mensajeEnviado.style.color = 'green';
        contactResponse.appendChild(mensajeEnviado);
        
        const mensaje = document.createElement('p');
        mensaje.textContent = 'Nombre: ' + nombre + ', Correo Electrónico: ' + email + ', Teléfono: ' + telefono;
        contactResponse.appendChild(mensaje);

        document.getElementById('contactForm').reset();
    }

    return false;
});

function LimpiarMensajesError() {
    document.querySelectorAll('.MensajeError ').forEach(function(element) {
        element.textContent = '';
    });
}

function mensajeError(id, message) {
    document.getElementById(id).textContent = message;
}
function validarNombre(nombre){
    var re = /^[a-z]{0,11}(?: [a-z]{0,11})*$/i;
    return re.test(nombre);
}
function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function validarTelefono(telefono) {
    var re = /^\d{10}$/;
    return re.test(telefono);
}

