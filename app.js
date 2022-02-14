


function updateproducNumber(product, totalPrice, isIncress, singlePrice){
    const productInput = document.getElementById(product);
    let producNumber = productInput.value;
    if(isIncress == true){
        producNumber = parseInt(producNumber) + 1;
    }else if(producNumber> 0){
        producNumber = parseInt(producNumber) - 1;
    }
    productInput.value= producNumber;

     const totalAmount = document.getElementById(totalPrice);
     totalAmount.innerText = producNumber * singlePrice;

      calculateTotal ();

}
// case incress decress events
document.getElementById('case-plus').addEventListener('click', function(){
    updateproducNumber( 'case-input','case-price', true ,59)
});

document.getElementById('case-minus').addEventListener('click', function(){
    updateproducNumber('case-input' , 'case-price', false, 59)
})

// phone incress decress events

document.getElementById('phone-plus').addEventListener('click',function(){
    updateproducNumber('phone-input','phone-price', true, 1219);
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateproducNumber('phone-input', 'phone-price', false, 1219);
})

// sub-total and tax and total price
function getInputValue(product){
    const productSubInput = document.getElementById( product + '-input')
    const producSubtNumber =parseInt(productSubInput.value);
    return producSubtNumber;
}

function calculateTotal (){
   const phoneTotal = getInputValue('phone') * 1219;
   const caseTotal = getInputValue('case') * 59;
   const subTotal = phoneTotal + caseTotal ;
   const tax = subTotal/ 10 ;
   const finalPrice = subTotal + tax;

   document.getElementById('sub-total').innerText= subTotal;
   document.getElementById('tax-amount').innerText=Math.round(tax); 
   document.getElementById('final-price').innerText=Math.round(finalPrice);
}

