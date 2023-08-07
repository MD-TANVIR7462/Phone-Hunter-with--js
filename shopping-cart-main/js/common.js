
// ----------------iphone part function-----------


function sun(perameter) {

   //   get inputvalue of input
   const x = document.getElementById("iphoneInput")
   const z = x.value;
   const y = parseFloat(z);

   //   get inputvalue of span or text
   const t = document.getElementById("span-2");
   const n = t.innerText;
   const a = parseInt(n)

   // get subtotal amount ------



   if (perameter === true) {
      x.value = y + 1;
      const totalPrice = x.value * 1219
      t.innerText = totalPrice





   }
   else {
      x.value = y - 1
      const totalPrice = x.value * 1219
      t.innerText = totalPrice
   }

}


// --------------------iphone-Cover- part function-----------

function cover(perameter) {
   const x = document.getElementById("cover-input")
   const z = x.value;
   const y = parseFloat(z);

   const t = document.getElementById("newvalue");
   const n = t.innerText;
   const a = parseInt(n)


   if (perameter === true) {
      x.value = y + 1;
      const totalPrice = x.value * 59
      t.innerText = totalPrice

   }
   else {
      x.value = y - 1
      const totalPrice = x.value * 59
      t.innerText = totalPrice

   }

}

// subtotal function------------

function subtotals(meter) {
   const x = document.getElementById(meter);
   const y = x.innerText;
   const z = parseInt(y);
   return z


}


