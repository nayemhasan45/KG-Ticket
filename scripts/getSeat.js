catchElementById('seat').addEventListener("click", function handleSeatClicked(event) {
    const target = event.target.innerText;
    const bgColor = checkColor(target);

    const myButton = document.getElementById('modalBtn');
    const phoneNum = document.getElementById('phoneNum');
    const seat = parseInt(document.getElementById('totalSeat').innerText);
    phoneNum.addEventListener('input', function () {
        const inputValue = phoneNum.value.trim();
        if (inputValue && seat > 0) {
            myButton.removeAttribute('disabled');
        }
    });
});
// apply cuppon 
function applyCuppon(){
    const cuppon = document.getElementById('cupponValue').value;
    if(cuppon==='NEW15'){
        const grandTotal = parseInt(document.getElementById('grandTotal').innerText);
        const discount =grandTotal- ((grandTotal*15)/100);
        document.getElementById('grandTotal').innerText=discount;
        const div = document.getElementById('cuppon');
        div.classList.add('hidden');
    }else if(cuppon==='Couple 20'){
        const grandTotal = parseInt(document.getElementById('grandTotal').innerText);
        const discount =grandTotal- ((grandTotal*20)/100);
        document.getElementById('grandTotal').innerText=discount;
        const div = document.getElementById('cuppon');
        div.classList.add('hidden');
    }else{
        alert("Cuppon Not Matched.. Please Try Again !");
    }
}