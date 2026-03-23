
# YS Books — Aplicación Web Modularizada

Proyecto para el Primer Parcial — Desarrollo Web  
Tema de negocio: Tienda de libros

---

## Estructura del proyecto (carpetas)

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

---

## ¿Qué es la modularización?

La modularización es el proceso de dividir un programa grande en partes más pequeñas, independientes y reutilizables llamadas módulos.

Importancia

1. Mantenibilidad: Es más fácil encontrar y corregir errores  
2. Reutilización: Un componente creado una vez se usa en muchos lugares  
3. Trabajo en equipo: Varios desarrolladores trabajan en distintos módulos sin conflictos  
4. Escalabilidad: El proyecto crece ordenadamente  
5. Legibilidad: Cada archivo tiene una responsabilidad clara  

En este proyecto, la modularización se aplica en tres niveles:

1. Archivos separados: HTML, CSS, JS y datos en carpetas distintas  
2. Fragmentos HTML: header, sidebar y footer como archivos independientes  
3. Responsabilidades en JS: `login.js` solo maneja el login, `main.js` maneja la lógica de la aplicación  

---

## ¿Qué son los fragmentos?

Un fragmento es un archivo HTML parcial (sin <html>, <head> ni <body>) que contiene solo un pedazo de la interfaz.

En este proyecto se utilizan tres:

- components/header.html  
- components/sidebar.html  
- components/footer.html  

Se cargan dinámicamente desde `main.js` usando `fetch()`:

```javascript
async function cargarFragmento(url, contenedorId) {
  const respuesta = await fetch(url);
  const html = await respuesta.text();
  document.getElementById(contenedorId).innerHTML = html;
}
```

---

## ¿Qué son las plantillas (`<template>`)?

El elemento `<template>` es una etiqueta HTML especial que:

- El navegador la interpreta pero no la muestra  
- Su contenido permanece inactivo hasta que JavaScript lo utiliza  
- Permite crear múltiples copias con datos distintos  

En este proyecto se usa para las tarjetas de libros:

```javascript
const template = document.getElementById("template-libro");
const clone = template.content.cloneNode(true);

clone.querySelector(".book-title").textContent = libro.titulo;
contenedor.appendChild(clone);
```

---

## ¿Qué son los web components?

Un web component es un elemento HTML personalizado con comportamiento propio. Está compuesto por:

1. Custom element: Clase que extiende `HTMLElement`  
2. Shadow DOM: Encapsulación de estructura y estilos  
3. Ciclo de vida: Métodos como `connectedCallback()`  

En este proyecto se define `<tarjeta-libro-destacado>`:

```javascript
class TarjetaLibroDestacado extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `<style>...</style><div>...</div>`;
  }
}

customElements.define("tarjeta-libro-destacado", TarjetaLibroDestacado);
```

Uso:

```html
<tarjeta-libro-destacado titulo="Don Quijote" precio="45000"></tarjeta-libro-destacado>
```

---

## Formulario de inicio de sesión

Advertencia: Solo con fines educativos.

Las credenciales están definidas en `js/login.js` y no son seguras en aplicaciones reales.

Credenciales:

Usuario: admin  
Contraseña: libreria2024  

Flujo del login:

1. Usuario escribe credenciales  
2. `login.js` valida la información  
3. Si son correctas: guarda en `sessionStorage` y redirige  
4. Si son incorrectas: muestra mensaje de error  

Buenas prácticas reales:

- Contraseñas hasheadas  
- Uso de HTTPS  
- Tokens o sesiones  
- No enviar datos en texto plano  

---

## Buenas prácticas aplicadas

| Práctica                            | Aplicación |
|----------|-----------|
| camelCase en JS | cargarFragmento, todosLosLibros, iniciarSesion |
| kebab-case en CSS | .book-card, .main-header, .nav-link |
| Comentarios | Archivos documentados |
| Separación de responsabilidades | login.js y main.js |
| CSS variables | Uso de :root |
| HTML semántico | header, nav, main, aside, footer |
| Accesibilidad | alt, title, role |
| Indentación | 2 espacios |

---
## Autoras
 1. Yeray Alvarez
 2. Skarik Barbosa

---

 Proyecto educativo — Primer parcial de Desarrollo Web