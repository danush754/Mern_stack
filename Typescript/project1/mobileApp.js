var mobileName = "Samsung Galaxy Note 7";
var price = 699;
var Status = "Available";
var MobilePrice;
(function (MobilePrice) {
    MobilePrice[MobilePrice["GoldPlatinum"] = 699] = "GoldPlatinum";
    MobilePrice[MobilePrice["PinkGold"] = 650] = "PinkGold";
    MobilePrice[MobilePrice["SilverTitanium"] = 712] = "SilverTitanium";
})(MobilePrice || (MobilePrice = {}));
;
var discount = 15;
function displayProductDetails() {
    document.getElementById("pName").textContent = mobileName;
    document.getElementById("pPrice").textContent = price.toString();
    document.getElementById("pAvailable").textContent = Status;
    document.getElementById("gold").textContent = MobilePrice.GoldPlatinum.toString();
    document.getElementById("pinkgold").textContent = MobilePrice.PinkGold.toString();
    document.getElementById("silver").textContent = MobilePrice.SilverTitanium.toString();
    document.getElementById("pDiscount").textContent = discount.toString();
}
window.onload = function () {
    displayProductDetails();
};
