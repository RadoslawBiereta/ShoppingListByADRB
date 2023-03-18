    //add item to local storage
    showitem();
    let additem = document.getElementById("additem");
    additem.addEventListener("click", function (e) {
        let itemName = document.getElementById("itemName");
        let quantity = document.getElementById("quantity");
        let quantityName = document.getElementById("quantityName");
        let item = localStorage.getItem("item");
        if (item == null) {
            itemObj = [];
        }
        else {
            itemObj = JSON.parse(item, quantity);
        }
        let myobj = {
            name: itemName.value,
            quantity: quantity.value,
            quantityName: quantityName.value
        }
        itemObj.push(myobj);
        localStorage.setItem("item", JSON.stringify(itemObj));
        itemName.value = "";
        quantity.value = "";
        quantityName.value = "pcs";
        console.log(itemObj);
        showitem();
    })
    function showitem() {
        let item = localStorage.getItem("item");
        if (item == null) {
            itemObj = [];
        }
        else {
            itemObj = JSON.parse(item);
        }
        let html = "";
        itemObj.forEach(function (element, index) {
            html += `<div class="showitem"> 
            <p>Produkt Nr: ${index +1}</p> 
            <span>Nazwa produktu: ${element.name}</span> 
            <span>Ilość: ${element.quantity} ${element.quantityName} </span>
            <button id="${index}" class="delitem" onclick="deleteitem(this.id)">Usuń produkt z listy</button>
            </div>`;

        });
        let itemElm = document.getElementById("showlist");
        if (itemObj.lenght != 0) {
            itemElm.innerHTML = html;
        } else {
            itemElm.innerHTML = 'Noting is show! use "Add list" section above to add items in list';
        }
    }
    //delete items
    function deleteitem(index){
        let item = localStorage.getItem("item");
        if (item == null) {
            itemObj = [];
        }
        else {
            itemObj = JSON.parse(item);
        }
        itemObj.splice(index, 1);
        localStorage.setItem("item", JSON.stringify(itemObj));
        showitem();
    }