document.addEventListener("DOMContentLoaded", () => {
    function loadComponent(path, id) {
        fetch(path)
            .then(res => res.text())
            .then(data => {
                document.getElementById(id).innerHTML = data;
            })
            .catch(err => console.error(err));
    }

    loadComponent("componentes/header/header.html", "header");
    loadComponent("componentes/sidebar/sidebar.html", "sidebar");
    loadComponent("componentes/footer/footer.html", "footer");

    fetch("datos/productos.json")
        .then(res => res.json())
        .then(data => renderProducts(data))
        .catch(err => console.error(err));
});

function renderProducts(products) {
    const container = document.getElementById("main-content");
    const template = document.getElementById("productTemplate");

    products.forEach(product => {
        const clone = template.content.cloneNode(true);

        clone.querySelector(".name").textContent = product.name;
        clone.querySelector(".price").textContent = "$" + product.price;
        clone.querySelector(".image").src = product.image;

        container.appendChild(clone);
    });
}



// 🔥 OVERRIDE FINAL (Web Component integrado)
function renderProducts(products) {
    const container = document.getElementById("main-content");
    container.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("product-card");

        card.setAttribute("name", product.name);
        card.setAttribute("price", product.price);
        card.setAttribute("image", product.image);

        container.appendChild(card);
    });
}