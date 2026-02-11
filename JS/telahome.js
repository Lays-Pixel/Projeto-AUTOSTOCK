const buttons = document.querySelectorAll(".buttons button");
const deliverySection = document.querySelector(".delivery-section");

const deliveryList = document.createElement("ul");
deliveryList.classList.add("delivery-list");
deliverySection.appendChild(deliveryList);


let deliveries = [
    "15/02/2026 - Entrega Fornecedor A",
    "18/02/2026 - Entrega Fornecedor B",
    "22/02/2026 - Reposição Estoque"
];

function loadDeliveries() {
    deliveryList.innerHTML = "";
    deliveries.forEach(delivery => {
        const li = document.createElement("li");
        li.textContent = delivery;
        deliveryList.appendChild(li);
    });
}

buttons[0].addEventListener("click", () => {
    alert("Redirecionando para cadastro de produtos...");
});

buttons[1].addEventListener("click", () => {
    alert("Redirecionando para cadastro de prateleiras...");
});

buttons[2].addEventListener("click", () => {
    alert("Mostrando status das prateleiras...");
});

window.onload = loadDeliveries;
