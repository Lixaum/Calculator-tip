
function update() {
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = Number(document.getElementById('splitInput').value)
    
    document.getElementById('tipPercent').innerHTML = tipPercent +'%'

    let tip = bill / 100 * tipPercent
    document.getElementById('tipValue').innerHTML = '$' + tip.toFixed(2)

    let tipTotal = tip + bill
    document.getElementById('totalWithTip').innerHTML = '$' + tipTotal.toFixed(2)
    
    document.getElementById('splitValue').innerHTML = split

    let billEach = tipTotal / split
    document.getElementById('billEach').innerHTML = '$' + billEach.toFixed(2)

    
}
