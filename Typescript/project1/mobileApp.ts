let mobileName:string = "Samsung Galaxy Note 7";
let price:number = 699;
let Status:string = "Available";

function displayProductDetails(){
    document.getElementById("pName").textContent = mobileName;
    document.getElementById("pPrice").textContent = price.toString();
    document.getElementById("pAvailable").textContent = Status;
}

window.onload = () => {
    displayProductDetails();
};