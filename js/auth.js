/* ================================================================
   js/auth.js — YS Books
   Guard de autenticación para index.html.
   Se carga ANTES de app.js para bloquear acceso sin sesión.
================================================================ */

(function authGuard() {
  // Si no hay sesión activa, redirigir al login inmediatamente
  if (sessionStorage.getItem('autenticado') !== 'true') {
    window.location.replace('login.html');
  }
})();

/**
 * cerrarSesion — elimina la sesión y redirige al login.
 * Disponible globalmente para botones de logout.
 */
function cerrarSesion() {
  sessionStorage.removeItem('autenticado');
  sessionStorage.removeItem('nombreUsuario');
  window.location.href = 'login.html';
}