function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    let result;

    if (inputUnit === outputUnit) {
        result = inputValue;
    } else if (inputUnit === 'celsius') {
        if (outputUnit === 'fahrenheit') {
            result = (inputValue * 9/5) + 32;
        } else if (outputUnit === 'kelvin') {
            result = inputValue + 273.15;
        }
    } else if (inputUnit === 'fahrenheit') {
        if (outputUnit === 'celsius') {
            result = (inputValue - 32) * 5/9;
        } else if (outputUnit === 'kelvin') {
            result = ((inputValue - 32) * 5/9) + 273.15;
        }
    } else if (inputUnit === 'kelvin') {
        if (outputUnit === 'celsius') {
            result = inputValue - 273.15;
        } else if (outputUnit === 'fahrenheit') {
            result = ((inputValue - 273.15) * 9/5) + 32;
        }
    }

    document.getElementById('result').innerText = `Result: ${result.toFixed(2)} ${outputUnit.charAt(0).toUpperCase() + outputUnit.slice(1)}`;
}
