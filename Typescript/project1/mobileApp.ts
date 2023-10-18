let mobileName:string = "Samsung Galaxy Note 7";
let price:number = 699;
let Status:string = "Available";
enum MobilePrice{GoldPlatinum = 699,PinkGold = 650,SilverTitanium = 712};
const discount:number = 15;

function displayProductDetails(){
    document.getElementById("pName").textContent = mobileName;
    document.getElementById("pPrice").textContent = price.toString();
    document.getElementById("pAvailable").textContent = Status;
    document.getElementById("gold").textContent = MobilePrice.GoldPlatinum.toString();
    document.getElementById("pinkgold").textContent = MobilePrice.PinkGold.toString();
    document.getElementById("silver").textContent = MobilePrice.SilverTitanium.toString();
    document.getElementById("pDiscount").textContent = discount.toString();
}

window.onload = () => {
    displayProductDetails();
};