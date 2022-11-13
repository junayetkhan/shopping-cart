document.getElementById('quantity-plus-btn').addEventListener("click",function(){
    const quantityField = document.getElementById('quantity-input');
    const getquantityAmmount = quantityField.value;
    const quantityAmmount = parseInt(getquantityAmmount);
    // console.log(typeof quantityAmmount);
    const totallAmmount =  quantityAmmount +1;
    quantityField.value = totallAmmount;
})
document.getElementById('quantity-less-btn').addEventListener("click",function(){
    const quantityField = document.getElementById('quantity-input');
    const getquantityAmmount = quantityField.value;
    const quantityAmmount = parseInt(getquantityAmmount);
    const totallAmmount =  quantityAmmount -1;
    quantityField.value = totallAmmount;

});