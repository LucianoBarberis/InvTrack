const nameProduct = document.getElementById("name");
const id = document.getElementById("id");
const price = document.getElementById("price");
const stock = document.getElementById("stock");
const formulario = document.getElementById("formulario");
const tbody = document.getElementById("tbody");

let inventario = [];

// Función para simular una operación asincrónica
function asyncOperation(callback) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(callback());
        }, 100); // Simulando un retraso de 0,1 ms
    });
}

// Cargar inventario desde localStorage al iniciar la página
document.addEventListener("DOMContentLoaded", function() {
    const storedInventory = localStorage.getItem("inventario");
    if (storedInventory) {
        inventario = JSON.parse(storedInventory);
        renderInventario();
    }
});

formulario.addEventListener("submit", async function(evento) {
    evento.preventDefault();
    await asyncOperation(addArticle);
});

async function addArticle() {
    let nameVal = nameProduct.value;
    let idVal = id.value;
    let priceVal = price.value;
    let stockVal = stock.value;

    let priceNumber = parseFloat(priceVal);
    let stockNumber = parseInt(stockVal, 10);
    let total = stockNumber * priceNumber;
    let formattedPrice = priceNumber.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    let formattedTotal = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    let article = {
        name: nameVal,
        id: idVal,
        price: priceNumber,
        stock: stockNumber,
        total: total,
        formattedPrice: formattedPrice,
        formattedTotal: formattedTotal
    };

    inventario.push(article);
    await asyncOperation(saveToLocalStorage);
    renderInventario();
    formulario.reset();
}

async function editArticle(index) {
    let article = inventario[index];
    nameProduct.value = article.name;
    id.value = article.id;
    price.value = article.price;
    stock.value = article.stock;

    const submitButton = document.getElementById("btn-smt");
    submitButton.textContent = "Actualizar";
    submitButton.onclick = async function(evento) {
        evento.preventDefault();
        await asyncOperation(() => updateArticle(index));
    };
}

async function updateArticle(index) {
    let nameVal = nameProduct.value;
    let idVal = id.value;
    let priceVal = price.value;
    let stockVal = stock.value;
    let priceNumber = parseFloat(priceVal);
    let stockNumber = parseInt(stockVal, 10);
    let total = stockNumber * priceNumber;
    let formattedPrice = priceNumber.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    let formattedTotal = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    inventario[index] = {
        name: nameVal,
        id: idVal,
        price: priceNumber,
        stock: stockNumber,
        total: total,
        formattedPrice: formattedPrice,
        formattedTotal: formattedTotal
    };

    await asyncOperation(saveToLocalStorage);
    renderInventario();
    formulario.reset();

    const submitButton = document.getElementById("btn-smt");
    submitButton.textContent = "Hecho";
    submitButton.onclick = function(evento) {
        evento.preventDefault();
        asyncOperation(addArticle);
    };
}

async function deleteArticle(index) {
    inventario.splice(index, 1);
    await asyncOperation(saveToLocalStorage);
    renderInventario();
    Toastify({
        text: "Articulo eliminado",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to left, #e65151, #e75171)",
        },
        onClick: function(){}
    }).showToast();
}

function saveToLocalStorage() {
    localStorage.setItem("inventario", JSON.stringify(inventario));
}

function renderInventario() {
    tbody.innerHTML = "";
    inventario.forEach((article, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${article.name}</td>
                <td id="${article.id}">${article.id}</td>
                <td>${article.formattedPrice}</td>
                <td>${article.stock}</td>
                <td>${article.formattedTotal}</td>
                <td>
                    <button class="btnEdit" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editArticle(${index})">Editar</button>
                    <button class="btnDelete" onclick="deleteArticle(${index})">Eliminar</button>
                </td>
            </tr>
        `;
    });
}