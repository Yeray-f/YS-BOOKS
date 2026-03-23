#  YS Books — Aplicación Web Modularizada

> Proyecto para el Primer Parcial — Desarrollo Web  
> Tema de negocio: **Tienda de libros**
_____________________________________________________________________________________________________


## Estructura del proyecto (Carpetas)
```bash
libreria/
├── index.html              # Página principal
├── login.html              # Página de inicio de sesión
├── README.md               # Documentación
│
├── components/             # Fragmentos reutilizables
│   ├── header.html         # Encabezado
│   ├── sidebar.html        # Barra lateral
│   └── footer.html         # Pie de página
│
├── css/
│   └── styles.css          # Estilos globales
│
├── js/
│   ├── login.js            # Lógica de autenticación
│   └── main.js             # Lógica principal (fetch, templates, components)
│
└── data/
    └── products.json       # Base de datos de libros
```
_____________________________________________________________________________________________________

## ¿Qué es la Modularización?

La modularización es el proceso de dividir un programa grande en partes más pequeñas, independientes y reutilizables llamadas módulos.

**Importancia**

- 1. Mantenibilidad: Es más fácil encontrar y corregir errores
- 2. Reutilización: Un componente creado una vez se usa en muchos lugares
- 3. Trabajo en equipo: Varios desarrolladores trabajan en distintos módulos sin conflictos
- 4. Escalabilidad: El proyecto crece ordenadamente
- 5. Legibilidad: Cada archivo tiene una responsabilidad clara

En este proyecto, la modularización se aplica en tres niveles:
1. Archivos separados: HTML, CSS, JS y datos en carpetas distintas
2. Fragmentos HTML: header, sidebar y footer como archivos independientes
3. Responsabilidades en JS: `login.js` solo maneja el login, `main.js` maneja la lógica del app

_____________________________________________________________________________________________________

## ¿Qué son los Fragmentos?

Un fragmento es un archivo HTML parcial (sin <html>, <head> ni <body>) que contiene solo un pedazo de la interfaz.

En este proyecto tenemos tres:
- **components/header.html** → Solo el encabezado
- **components/sidebar.html** → Solo la barra lateral
- **components/footer.html** → Solo el pie de página

Se cargan dinámicamente desde `main.js` usando `fetch()`:

```javascript
async function cargarFragmento(url, contenedorId) {
  const respuesta = await fetch(url);
  const html = await respuesta.text();
  document.getElementById(contenedorId).innerHTML = html;
}
```
_____________________________________________________________________________________________________


## ¿Qué son las Plantillas **(<template>)**?

El elemento `<template>` es una etiqueta HTML especial que:
- El navegador la parsea (entiende) pero no la muestra
- Su contenido está "inactivo" hasta que JavaScript lo activa
- Se clona para crear múltiples copias con datos diferentes

En este proyecto la usamos para las tarjetas de libros:

```javascript
const template = document.getElementById("template-libro");
const clone = template.content.cloneNode(true); // Clonar
clone.querySelector(".book-title").textContent = libro.titulo; // Llenar
contenedor.appendChild(clone); // Insertar en la página
```
_____________________________________________________________________________________________________


## ¿Qué son los Web Components?

Un Web Component es un elemento HTML personalizado con comportamiento propio. Está compuesto por:

1. Custom Element: Definimos una clase que extiende **HTMLElement**
2. Shadow DOM: Un DOM encapsulado — sus estilos no se mezclan con el resto
3. Ciclo de vida: Métodos como **connectedCallback()** y **attributeChangedCallback()**

En este proyecto definimos **<tarjeta-libro-destacado>**:

```javascript
class TarjetaLibroDestacado extends HTMLElement {
  connectedCallback() {
    this.render(); // Se ejecuta al entrar al DOM
  }
  render() {
    this.shadow.innerHTML = `<style>...</style><div>...</div>`;
  }
}
customElements.define("tarjeta-libro-destacado", TarjetaLibroDestacado);
```

Uso en HTML o JS:
```html
<tarjeta-libro-destacado titulo="Don Quijote" precio="45000"></tarjeta-libro-destacado>
```

_____________________________________________________________________________________________________


##  Formulario de inicio de sesión

**ADVERTENCIA: Solo con fines educativos**

Las credenciales están "quemadas" (hardcodeadas) en el archivo `js/login.js`. **ESTO NO ES SEGURO en aplicaciones reales**. En producción siempre se deben usar:
- Contraseñas hasheadas en el servidor (bcrypt)
- HTTPS para encriptar la comunicación
- Tokens JWT o sesiones del servidor
- Nunca enviar contraseñas en texto plano

**Credenciales para la demo:**
```
Usuario:    admin
Contraseña: libreria2024
```

**Flujo del login:**
1. Usuario escribe credenciales
2. **login.js** compara con las constantes hardcodeadas
3. Si son correctas → guarda **autenticado: true** en **sessionStorage** → redirige a **index.html**
4. Si son incorrectas → muestra mensaje de error en rojo

_____________________________________________________________________________________________________


## Buenas Prácticas Aplicadas

----------------------------------------------------------------------------------------------------------
|             Práctica                |                          Aplicación                              |
|-------------------------------------|------------------------------------------------------------------|
| **camelCase** en JS                 | `cargarFragmento`, `todosLosLibros`, `iniciarSesion`             |
| **kebab-case** en CSS               | `.book-card`, `.main-header`, `.nav-link`                        |
| **Comentarios**                     | Todos los archivos tienen comentarios explicativos               |
| **Separación de responsabilidades** | `login.js` solo login, `main.js` solo lógica principal           |
| **CSS Variables**                   | Colores y medidas centralizadas en `:root`                       |
| **Semántica HTML**                  | `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`             |
| **Accesibilidad**                   | `alt` en imágenes, `title` en botones, `role="alert"` en errores |
| **Indentación**                     | 2 espacios consistentes en todo el código                        |
----------------------------------------------------------------------------------------------------------


_____________________________________________________________________________________________________


*Proyecto educativo — Primer Parcial Desarrollo Web*
