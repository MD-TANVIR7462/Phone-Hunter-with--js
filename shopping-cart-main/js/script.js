// ------------------------iphone part-----------------

document.getElementById("pluse-btn-2").addEventListener('click', function () {

   sun(true)
   const phoneBattonSub = subtotals("span-2")
   const coverBattonSub = subtotals("newvalue")
   const phnCoverTotal = phoneBattonSub + coverBattonSub;
   const subelem = document.getElementById("subtotal");
   subelem.innerText = phnCoverTotal
  

 const bb= document.getElementById("tax")
 const newtax = bb.innerText;
 bb.innerText = (phnCoverTotal*0.1 ).toFixed(2);
 const bbb= parseFloat(bb.innerText)
 


 const ttt = document.getElementById("tota");
 ttt.innerText = phnCoverTotal + bbb 



 
  

   




})
document.getElementById("minus-btn-2").addEventListener('click', function () {

   sun(false)

   const phoneBattonSub = subtotals("span-2")
   const coverBattonSub = subtotals("newvalue")
   const phnCoverTotal = phoneBattonSub + coverBattonSub;
   const subelem = document.getElementById("subtotal");
   subelem.innerText = phnCoverTotal


   const bb= document.getElementById("tax")
   const newtax = bb.innerText;
   bb.innerText = (phnCoverTotal*0.1 ).toFixed(2);
   const bbb= parseFloat(bb.innerText)

   const ttt = document.getElementById("tota");
 ttt.innerText = phnCoverTotal + bbb 
    
})

// iphone cover part-----------------
document.getElementById("plus-btn").addEventListener('click', function () {
   const u = cover(true)
   const phoneBattonSub = subtotals("span-2")
   const coverBattonSub = subtotals("newvalue")
   const phnCoverTotal = phoneBattonSub + coverBattonSub;
   const subelem = document.getElementById("subtotal");
   subelem.innerText = phnCoverTotal

   const bb= document.getElementById("tax")
   const newtax = bb.innerText;
   bb.innerText = (phnCoverTotal*0.1 ).toFixed(2);
   const bbb= parseFloat(bb.innerText)

   const ttt = document.getElementById("tota");
 ttt.innerText = phnCoverTotal + bbb 


    

})
document.getElementById("minus-btn").addEventListener('click', function () {
   cover()
   const phoneBattonSub = subtotals("span-2")
   const coverBattonSub = subtotals("newvalue")
   const phnCoverTotal = phoneBattonSub + coverBattonSub;
   const subelem = document.getElementById("subtotal");
   subelem.innerText = phnCoverTotal


   const bb= document.getElementById("tax")
   const newtax = bb.innerText;
   bb.innerText = (phnCoverTotal*0.1 ).toFixed(2);
   const bbb= parseFloat(bb.innerText)
   const ttt = document.getElementById("tota");
 ttt.innerText = phnCoverTotal + bbb 
    

})
