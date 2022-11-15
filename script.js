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

function CalculateSubtotal() {
    const getIphoneId = document.getElementById('iphone-price');
    const getCoverId = document.getElementById('cover-price');

    const calculatesubtotalAmmount = getIphoneId + getCoverId;

    const getSubtotallAmmount = document.getElementById('subtotal');
    getSubtotallAmmount.innerText = calculatesubtotalAmmount;

}

document.getElementById('quantity-plus-btn').addEventListener("click",function(){

    const newcasenumber = getplusbtn(true);
    updateprice(newcasenumber);
    

})
document.getElementById('quantity-less-btn').addEventListener("click",function(){
    const newcasenumber = getplusbtn(false);
    updateprice(newcasenumber);
   
    

})
document.getElementById('cover-plus-btn').addEventListener("click",function(){
    const newcasenumber = getlessbtn(true);
    updatepricecover(newcasenumber);
})
document.getElementById('cover-less-btn').addEventListener("click",function(){
    const newcasenumber = getlessbtn(false);
    updatepricecover(newcasenumber);
})