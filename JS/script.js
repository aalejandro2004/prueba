function enviar() {
    event.preventDefault();
    let nombres = document.getElementById('nombres').value;
    let apellidos = document.getElementById('apellidos').value;
    let correo = document.getElementById('correo').value;
    let numero = document.getElementById('numero').value;
    let mensajeTexto = document.getElementById('mensaje').value;
    let campos = nombres + apellidos + correo + numero + mensajeTexto;

    let expNombre = /^[A-Za-zÀ-ÿ\s]{3,20}$/;
    let expApellidos = /^[A-Za-zÀ-ÿ\s]{3,20}$/;
    let expCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let expNumero = /^[0-9]{9}$/;
    let expMensaje = /^[A-Za-z0-9\s\.,;:¡!¿?"()\-']{5,500}$/;

    // Validación
    if (campos == "") {
        mensajeError("Todos los campos son obligatorios");
    }
    else if (nombres == "") {
        mensajeError("Por favor ingresa tus nombres");
    } 
    else if (expNombre.test(nombres) == false) {
        mensajeError("El nombre solo debe contener letras (mín: 3, máx: 20)");
    }  
    else if (apellidos == "") {
        mensajeError("El campo apellido es obligatorio");
    }
    else if (expApellidos.test(apellidos) == false) {
        mensajeError("El apellido solo debe contener letras (mín: 3, máx: 20)");
    }
    else if (correo == "") {
        mensajeError("El campo correo es obligatorio");
    }
    else if (expCorreo.test(correo) == false) {
        mensajeError("El formato de correo no es correcto");
    }
    else if (numero == "") {
        mensajeError("El campo número es obligatorio");
    }
    else if (expNumero.test(numero) == false) {
        mensajeError("El número debe tener exactamente 9 dígitos");
    }
    else if (mensajeTexto.length < 5) {
        mensajeError("El mensaje debe tener al menos 5 caracteres");
    }
    else if (mensajeTexto.length > 500) {
        mensajeError("El mensaje no puede superar los 500 caracteres");
    }
    else {
        mensajeExito();
    }
}

function mensajeError(msj) {
    Swal.fire({
        title: '¡Error!',
        text: msj,
        icon: 'error',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#d33',
        background: '#fff',
        backdrop: `
            rgba(0,0,0,0.4)
        `
    });
}

function mensajeExito() {
    Swal.fire({
        title: '¡Éxito!',
        text: 'Tu formulario ha sido enviado correctamente',
        icon: 'success',
        confirmButtonText: 'Genial',
        confirmButtonColor: '#28a745',
        background: '#fff',
        timer: 3000,
        timerProgressBar: true,
        backdrop: `
            rgba(0,123,255,0.4)
        `
    }).then((result) => {
        // Aquí puedes limpiar el formulario si lo deseas
        if (result.isConfirmed || result.isDismissed) {
            document.getElementById('nombres').value = '';
            document.getElementById('apellidos').value = '';
            document.getElementById('correo').value = '';
            document.getElementById('numero').value = '';
            document.getElementById('mensaje').value = '';
        }
    });
}