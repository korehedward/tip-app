const button5 = document.getElementById('5percent');
const button10 = document.getElementById('10percent');
const button15 = document.getElementById('15percent');
const button25 = document.getElementById('25percent');
const button50 = document.getElementById('50percent');
const buttonCustom = document.getElementById('customPercent');
const darkMode = document.getElementById('mode');
const mainCalculator = document.getElementById('calculator');







function calculate (tip){

    let billAmount = document.getElementById('bill').value;
    let nrpeople = document.getElementById('nr-people').value;
   let tipAmount = (billAmount * tip)/nrpeople;
   let totalAmount = billAmount/nrpeople + tipAmount;

   document.getElementById('tip-amount').innerHTML=(Math.round(tipAmount*100)/100).toFixed(2);
   document.getElementById('total').innerHTML=(Math.round(totalAmount*100)/100).toFixed(2);

}

button5.addEventListener('click', () =>{
calculate(0.05);
});
button10.addEventListener('click', () =>{
calculate(0.1);
});
button15.addEventListener('click', () =>{
calculate(0.15);
});
button25.addEventListener('click', () =>{
calculate(0.25);
});
button50.addEventListener('click', () =>{
calculate(0.5);
});

// let custom = document.getElementById('custom').value;

// buttonCustom.addEventListener('click', ()=>{
//     let custom = document.getElementById('custom').value;
//     let customToZecimals = custom/100;
//     calculate(customToZecimals);
// })


darkMode.addEventListener('change', ()=>{
  
   if(darkMode.checked == true){
       mainCalculator.style.backgroundColor = "white";
       document.body.style.backgroundColor = "red";
     
   }
   if(darkMode.checked == false){
       mainCalculator.style.backgroundColor = "#001630";
       document.body.style.backgroundColor = "red";
   
   }
})