totalBaddies = (number1, number2, number3) => {
    return number1 + number2 + number3
}

document.getElementById('totalBtn').addEventListener('click', (event) => {
    event.preventDefault()
    const goombaTotal = (parseInt(document.getElementById('goombas').value) * 5)
    const bobombTotal = (parseInt(document.getElementById('bobombs').value) * 7)
    const cheepsTotal = (parseInt(document.getElementById('cheeps').value) * 11)

    const baddieResult = totalBaddies(goombaTotal, bobombTotal, cheepsTotal);
    
    document.getElementById("baddieTotal").innerHTML = (baddieResult + " is your total.")

    console.log(baddieResult)
});
