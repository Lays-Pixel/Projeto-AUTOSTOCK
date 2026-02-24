const buttons = document.querySelectorAll(".buttons button");
const deliverySection = document.querySelector(".delivery-section");

const deliveryList = document.createElement("ul");
deliveryList.classList.add("delivery-list");
deliverySection.appendChild(deliveryList);

async function loadUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET"
        });

        const users = await response.json();

        deliveryList.innerHTML = "";

        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `${user.name} (${user.email})`;
            deliveryList.appendChild(li);
        });

    } catch (error) {
        console.error(error);
    }
}

async function addUser(newUser) {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        });

        await response.json();
        loadUsers();

    } catch (error) {
        console.error(error);
    }
}

async function updateUser(id, updatedUser) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedUser)
        });

        await response.json();
        loadUsers();

    } catch (error) {
        console.error(error);
    }
}

async function deleteUser(id) {
    try {
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "DELETE"
        });

        loadUsers();

    } catch (error) {
        console.error(error);
    }
}

buttons[0].addEventListener("click", () => {
    addUser({
        name: "Usuário Teste",
        username: "teste",
        email: "teste@email.com"
    });
});

buttons[1].addEventListener("click", () => {
    updateUser(1, {
        name: "Usuário Atualizado",
        username: "atualizado",
        email: "atualizado@email.com"
    });
});

buttons[2].addEventListener("click", () => {
    deleteUser(1);
});

window.onload = loadUsers;