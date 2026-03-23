/* ================================================================
   js/login.js — YS Books
   Lógica de autenticación del formulario de inicio de sesión.

   NOTA EDUCATIVA:
   Credenciales hardcodeadas solo para fines académicos.
   En producción siempre usa un backend + contraseñas encriptadas.
================================================================ */

const USUARIO_VALIDO = 'admin';
const PASSWORD_VALIDA = 'libreria2024';

/**
 * togglePasswordVisibility — alterna entre mostrar y ocultar la contraseña.
 * Cambia el tipo del input y el ícono del botón.
 */
function togglePasswordVisibility() {
    const input = document.getElementById('password');
    const eyeOpen = document.getElementById('eyeOpen');
    const eyeClosed = document.getElementById('eyeClosed');
    const isHidden = input.type === 'password';

    input.type = isHidden ? 'text' : 'password';
    eyeOpen.style.display = isHidden ? 'none' : '';
    eyeClosed.style.display = isHidden ? '' : 'none';
}

/**
 * iniciarSesion — valida credenciales y redirige al índice.
 * @param {Event} event — Submit del formulario.
 */
function iniciarSesion(event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value.trim();
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');

    // Validar campos vacíos
    if (!usuario || !password) {
        mostrarError(errorMsg, 'Por favor completa todos los campos.');
        return;
    }

    // Validar credenciales
    if (usuario === USUARIO_VALIDO && password === PASSWORD_VALIDA) {
        // Guardar sesión
        sessionStorage.setItem('autenticado', 'true');
        sessionStorage.setItem('nombreUsuario', usuario);

        // Feedback visual antes de redirigir
        const btn = document.getElementById('btn-login');
        btn.querySelector('span').textContent = 'Entrando…';
        btn.disabled = true;

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 600);
    } else {
        mostrarError(errorMsg, 'Usuario o contraseña incorrectos. Inténtalo de nuevo.');
        document.getElementById('password').value = '';
        document.getElementById('password').focus();
    }
}

/**
 * mostrarError — muestra un mensaje de error temporalmente.
 * @param {HTMLElement} elemento
 * @param {string} mensaje
 */
function mostrarError(elemento, mensaje) {
    elemento.textContent = mensaje;
    elemento.classList.add('visible');
    setTimeout(() => elemento.classList.remove('visible'), 4000);
}

// Si ya está autenticado, redirigir al índice automáticamente
document.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem('autenticado') === 'true') {
        window.location.href = 'index.html';
    }
});