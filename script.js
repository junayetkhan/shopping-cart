document.getElementById('quantity-plus-btn').addEventListener("click",function(){
    const quantityField = document.getElementById('quantity-input');
    const getquantityAmmount = quantityField.value;
    const quantityAmmount = parseFloat(getquantityAmmount);
    const totallAmmount =  quantityAmmount +1;
    quantityField.value = totallAmmount;

   const iphonepriceField = document.getElementById('iphone-price');
   const getiphonepriceField = iphonepriceField.innerText;
   const totalliphoneprice = totallAmmount * 1219;
   iphonepriceField.innerText = totalliphoneprice;
    
});
document.getElementById('quantity-less-btn').addEventListener("click",function(){
    const quantityField = document.getElementById('quantity-input');
    const getquantityAmmount = quantityField.value;
    const quantityAmmount = parseFloat(getquantityAmmount);
    const totallAmmount =  quantityAmmount -1;
    quantityField.value = totallAmmount;
    const iphonepriceField = document.getElementById('iphone-price');
   const getiphonepriceField = iphonepriceField.innerText;
   const totalliphoneprice = totallAmmount * 1219;
   iphonepriceField.innerText = totalliphoneprice;
    
    
});

document.getElementById('cover-plus-btn').addEventListener("click",function(){
    const quantityField = document.getElementById('cover-quantity-input');
    const getquantityAmmount = quantityField.value;
    const quantityAmmount = parseFloat(getquantityAmmount);
    const totallAmmount =  quantityAmmount +1;
    quantityField.value = totallAmmount;

   const iphonepriceField = document.getElementById('cover-price');
   const getiphonepriceField = iphonepriceField.innerText;
   const totalliphoneprice = totallAmmount * 59;
   iphonepriceField.innerText = totalliphoneprice;
    
});
document.getElementById('cover-less-btn').addEventListener("click",function(){
    const quantityField = document.getElementById('cover-quantity-input');
    const getquantityAmmount = quantityField.value;
    const quantityAmmount = parseFloat(getquantityAmmount);
    const totallAmmount =  quantityAmmount -1;
    quantityField.value = totallAmmount;
    const iphonepriceField = document.getElementById('cover-price');
   const getiphonepriceField = iphonepriceField.innerText;
   const totalliphoneprice = totallAmmount * 59;
   iphonepriceField.innerText = totalliphoneprice;
    
    
});