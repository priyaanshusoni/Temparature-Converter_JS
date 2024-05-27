const textbox = document.getElementById('textbox');
const tofahrenhite = document.getElementById('tofahrenhite');
const tocelcius = document.getElementById('tocelsius');
const result = document.getElementById('result');
let temp;

function convert(){
         if(tofahrenhite.checked){
            result.textContent= 'a'
         }
         else if(tocelcius.checked){
            result.textContent= 'b'
         }
         else{
            result.textContent= 'Select a unit'
         }
}