catchElementById('seat').addEventListener("click", function handleSeatClicked(event) {
    const target = event.target.innerText;
    const bgColor = checkColor(target);

    const myButton = document.getElementById('modalBtn');
    const phoneNum = document.getElementById('phoneNum');
    const seat = parseInt(document.getElementById('totalSeat').innerText);
    // console.log(seat);
    phoneNum.addEventListener('input', function () {
        const inputValue = phoneNum.value.trim();
        if (inputValue && seat > 0) {
            myButton.removeAttribute('disabled');
        }else{
            console.log(seat);
        }
    });
});
