function conversor() {
    let celsius = parseFloat(document.getElementById('celsius').value);
    let fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    let kelvin = parseFloat(document.getElementById('kelvin').value);

    if (!isNaN(celsius)) {
        // Converte Celsius para Fahrenheit e Kelvin
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
        document.getElementById('kelvin').value = kelvin.toFixed(2);
    } else if (!isNaN(fahrenheit)) {
        // Converte Fahrenheit para Celsius e Kelvin
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = celsius + 273.15;
        document.getElementById('celsius').value = celsius.toFixed(2);
        document.getElementById('kelvin').value = kelvin.toFixed(2);
    } else if (!isNaN(kelvin)) {
        // Converte Kelvin para Celsius e Fahrenheit
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('celsius').value = celsius.toFixed(2);
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    } else {
        alert("Por favor, insira um valor em um dos campos para converter.");
    }
}
