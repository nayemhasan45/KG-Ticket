function chooseSeat() {
    document.getElementById('chooseSeat').scrollIntoView();
}
function catchElementById(element) {
    const text = document.getElementById(element);
    return text;
}
function checkColor(element) {
    const find = document.getElementById(element);
    const check = find.classList.contains('bg-[#1DD100]');
    if (check) {
        find.classList.remove('bg-[#1DD100]');
        const seatRemaining = parseInt(catchElementById('reamingSeat').innerText) + 1;
        const totalSeat = parseInt(catchElementById('totalSeat').innerText) - 1;
        // remove li 
        const targetList = catchElementById('seatName');
        targetList.removeChild(targetList.lastElementChild);

        // total Amount
        const totalAmount = catchElementById('totalPrice');
        totalAmount.innerText = parseInt(totalAmount.innerText - 550);

        // grand total 
        const grandTotal = catchElementById('grandTotal');
        grandTotal.innerText = parseInt(grandTotal.innerText - 550);

        catchElementById('reamingSeat').innerText = seatRemaining;
        catchElementById('totalSeat').innerText = totalSeat;
    } else {
        find.classList.add('bg-[#1DD100]');
        const seatRemaining = parseInt(catchElementById('reamingSeat').innerText) - 1;
        const totalSeat = parseInt(catchElementById('totalSeat').innerText) + 1;
        // create li and append
        const appendChild = catchElementById('seatName');
        const li = document.createElement('li');
        li.textContent = element;
        appendChild.appendChild(li);

        // total amount 
        const totalAmount = catchElementById('totalPrice');
        totalAmount.innerText = parseInt(totalSeat * 550);
        // grand total 
        const grandTotal = catchElementById('grandTotal');
        grandTotal.innerText = parseInt(totalSeat * 550);

        catchElementById('reamingSeat').innerText = seatRemaining;
        catchElementById('totalSeat').innerText = totalSeat;
    }
}