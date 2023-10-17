var mobileName = "Samsung Galaxy Note 7";
var price = 699;
var Status = "Available";
function displayProductDetails() {
    document.getElementById("pName").textContent = mobileName;
    document.getElementById("pPrice").textContent = price.toString();
    document.getElementById("pAvailable").textContent = Status;
}
window.onload = function () {
    displayProductDetails();
};
