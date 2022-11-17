function getplusbtn(increase) {
    const getInputField = document.getElementById("quantity-input");
    const getinputAmmount =getInputField.value; 
    const getstringtonum = parseInt(getinputAmmount);

    let totallAmmount;
    if (increase === true) {
        totallAmmount = getstringtonum+1;
    } else {
        totallAmmount= getstringtonum-1;
    }

    getInputField.value = totallAmmount;

    return totallAmmount;
}
function getlessbtn(increase) {
    const getInputField = document.getElementById("cover-quantity-input");
    const getinputAmmount =getInputField.value; 
    const getstringtonum = parseInt(getinputAmmount);

    let totallAmmount;
    if (increase === true) {
        totallAmmount = getstringtonum+1;
    } else {
        totallAmmount= getstringtonum-1;
    }

    getInputField.value = totallAmmount;

    return totallAmmount;
}
function updateprice(newcasenumber) {
    const totallnewcaseNumber =  newcasenumber * 1219;
    const getIphonePrice = document.getElementById('iphone-price');
    getIphonePrice.innerText = totallnewcaseNumber;
}
function updatepricecover(newcasenumber) {
    const totallnewcaseNumber =  newcasenumber * 59;
    const getIphonePrice = document.getElementById('cover-price');
    getIphonePrice.innerText = totallnewcaseNumber;
}

function getelemetbyid(elementid) {
    const getElementText = document.getElementById(elementid);
    const getstringElementText = getElementText.innerText;
    const currnetElementText = parseInt(getstringElementText);
    return currnetElementText;
}

function CalculateSubTotal(){
    const currentIphonePrice = getelemetbyid('iphone-price');
    const currentCoverPrice = getelemetbyid('cover-price');
    const SubTotallAmmount = currentIphonePrice + currentCoverPrice;
    const CurrentSubtotalAmmount = document.getElementById('subtotal');
    CurrentSubtotalAmmount.innerText = SubTotallAmmount;
   
    
}

document.getElementById('quantity-plus-btn').addEventListener("click",function(){

    const newcasenumber = getplusbtn(true);
    const upgradePriceNum = updateprice(newcasenumber);
    CalculateSubTotal();

})
document.getElementById('quantity-less-btn').addEventListener("click",function(){
    const newcasenumber = getplusbtn(false);
    const upgradePriceNum = updateprice(newcasenumber);
    CalculateSubTotal();

})
document.getElementById('cover-plus-btn').addEventListener("click",function(){
    const newcasenumber = getlessbtn(true);
    const upgradePriceNum = updatepricecover(newcasenumber);
    CalculateSubTotal();
})
document.getElementById('cover-less-btn').addEventListener("click",function(){
    const newcasenumber = getlessbtn(false);
    const upgradePriceNum = updatepricecover(newcasenumber);
    CalculateSubTotal();
})