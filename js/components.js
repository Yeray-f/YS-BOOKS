class ProductCard extends HTMLElement{
constructor(){super();this.attachShadow({mode:"open"});}
connectedCallback(){
this.shadowRoot.innerHTML=`
<link rel="stylesheet" href="css/estilos.css">
<div>${this.getAttribute("name")}</div>`;
}}
customElements.define("product-card",ProductCard);