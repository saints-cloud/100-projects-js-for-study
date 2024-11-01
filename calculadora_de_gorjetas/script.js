/*function calculateTip() {
    const billAmount = document.getElementById('bill').value;
    const tipPercentage = document.getElementById('tip').value;
    const tipAmount = billAmount * tipPercentage
    document.getElementById('result').innerText=`Gorjeta: R$ ${tipAmount.toFixed(2)}`
    const divcontAmount = document.getElementById('divcont').value;
    const totalconta = tipAmount / divcontAmount
    document.getElementById('totalconta').innerText=`Total da Conta: R$ ${totalconta.toFixed(2)}`
}*/

function calculateTip() {
    const billAmount = parseFloat(document.getElementById('bill').value);
    const tipPercentage = parseFloat(document.getElementById('tip').value);
    
    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        document.getElementById('result').innerText = "Por favor, insira valores válidos.";
        return;
    }

    const tipAmount = billAmount * (tipPercentage);
    document.getElementById('result').innerText = `Gorjeta: R$ ${tipAmount.toFixed(2)}`;

    const divcontAmount = parseFloat(document.getElementById('divcont').value);

    if (isNaN(divcontAmount) || divcontAmount === 0) {
        document.getElementById('totalconta').innerText = "Insira um número de pessoas válido.";
        return;
    }

    const totalConta = (billAmount + tipAmount) / divcontAmount;
    document.getElementById('totalconta').innerText = `Total por Pessoa: R$ ${totalConta.toFixed(2)}`;
}
