var modal = document.getElementById("modal");
var buyButtons = document.querySelectorAll("[id^='buyButton']");
var buyButton = document.getElementById("buyButton");
// var buyButtonAll = document.querySelectorAll("buybtn");
var quantityInput = document.getElementById("quantity");
var productInput = document.getElementById("textproduct");
var cartTable = document.getElementById("cartTable");
// buyButton.addEventListener("click", openModal);
buyButtons.forEach(button => {
    button.addEventListener("click", openModal);
});

function openModal(event) {
    event.preventDefault();
    modal.style.display = "block";
    document.getElementById("cartTable").style.display = "block";
}

var data = [];

function addToCart() {
    var item = { 
        Number: quantityInput.value,
        Name: productInput.value
    };

    let index = data.findIndex((c)=>c.Number==quantityInput.value);
    if(index >= 0){
        data.splice(index,1,item) 
    } else{
        data.push(item);
    }


    render();
    clear();
}

function render() {
    var table = `<tr>
        <th>Product</th>
        <th>number</th>
        <th>Actions</th>
    </tr>`;
    
    for (let i = 0; i < data.length; i++) {
        table += `<tr>
            <td>${data[i].Name}</td>
            <td>${data[i].Number}</td>
            <td>
                <button onclick="deleteItem(${data[i].Number})">Delete</button>
                <button onclick="editItem(${data[i].Number})">Edit</button>
                </td>
        </tr>`;
    }
    
    cartTable.innerHTML = table;
}
function clear() {
    quantityInput.value = ""; 
    productInput.value = "";
}


function deleteItem(x) {
    for(let i = 0;i<data.length;i++){
        if(data[i].Number==x){
            data.splice(i,1);

            render();
        }
    }
   
}

function editItem(x) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].Number == x) {
            quantityInput.value = data[i].Number; 
            productInput.value = data[i].Name;
            break; 
        }
    }
}
