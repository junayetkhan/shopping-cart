function getplusbtn(increase) {
    const getInputField = document.getElementById(increase);
    const getinputAmmount =getInputField.value; 
    const getstringtonum = parseInt(getinputAmmount);
    let totallAmmount = getstringtonum+1;
    getInputField.value = totallAmmount;
    return totallAmmount;
}
function getlessbtn(dicrease) {
    const getInputField = document.getElementById(dicrease);
    const getinputAmmount =getInputField.value; 
    const getstringtonum = parseInt(getinputAmmount);
    let totallAmmount = getstringtonum-1;
    getInputField.value = totallAmmount;
    return totallAmmount;
}
document.getElementById('quantity-plus-btn').addEventListener("click",function(){
    const plussButton = getplusbtn("quantity-input");
    const iphonePriceNow = document.getElementById('iphone-price');
    const getiphonePrice = iphonePriceNow.innerText;
    const currentiphonePrice = parseInt(getiphonePrice);
    const calculateIphonePriceAmmount = plussButton * 1219;
    iphonePriceNow.innerText = calculateIphonePriceAmmount;

    const getSubtotalAmmount = document.getElementById("subtotal");
    const convertsTonum = getSubtotalAmmount.innerText;
    const currentSubtotalAmmount = parseInt(convertsTonum);
    const calculateSubtotalAmmount =  currentSubtotalAmmount + calculateIphonePriceAmmount;
    getSubtotalAmmount.innerText = calculateIphonePriceAmmount;


    // console.log(typeof currentSubtotalAmmount);
    
})
document.getElementById('quantity-less-btn').addEventListener("click",function(){
    getlessbtn("quantity-input");
    const iphonePriceNow = document.getElementById('iphone-price');
    const getiphonePrice = iphonePriceNow.innerText;
    const currentiphonePrice = parseInt(getiphonePrice);
    const calculateIphonePriceAmmount = currentiphonePrice - 1219;
    iphonePriceNow.innerText = calculateIphonePriceAmmount;

    const getSubtotalAmmount = document.getElementById("subtotal");
    const convertsTonum = getSubtotalAmmount.innerText;
    const currentSubtotalAmmount = parseInt(convertsTonum);
    const calculateSubtotalAmmount =  currentSubtotalAmmount + calculateIphonePriceAmmount;
    getSubtotalAmmount.innerText = calculateIphonePriceAmmount;
})
document.getElementById('cover-plus-btn').addEventListener("click",function(){
    const plussButton = getplusbtn("cover-quantity-input");
    const iphonePriceNow = document.getElementById('cover-price');
    const getiphonePrice = iphonePriceNow.innerText;
    const currentiphonePrice = parseInt(getiphonePrice);
    const calculateIphonePriceAmmount = plussButton * 59;
    iphonePriceNow.innerText = calculateIphonePriceAmmount;

    const getSubtotalAmmount = document.getElementById("subtotal");
    const convertsTonum = getSubtotalAmmount.innerText;
    const currentSubtotalAmmount = parseInt(convertsTonum);
    const calculateSubtotalAmmount =  currentSubtotalAmmount + calculateIphonePriceAmmount;
    getSubtotalAmmount.innerText = calculateIphonePriceAmmount;

})
document.getElementById('cover-less-btn').addEventListener("click",function(){
    getlessbtn("cover-quantity-input");
    const iphonePriceNow = document.getElementById('cover-price');
    const getiphonePrice = iphonePriceNow.innerText;
    const currentiphonePrice = parseInt(getiphonePrice);
    const calculateIphonePriceAmmount = currentiphonePrice - 59;
    iphonePriceNow.innerText = calculateIphonePriceAmmount;

    const getSubtotalAmmount = document.getElementById("subtotal");
    const convertsTonum = getSubtotalAmmount.innerText;
    const currentSubtotalAmmount = parseInt(convertsTonum);
    const calculateSubtotalAmmount =  currentSubtotalAmmount + calculateIphonePriceAmmount;
    getSubtotalAmmount.innerText = calculateIphonePriceAmmount;
})