 function convertTemp() {
      const temp = parseFloat(document.getElementById('temperature').value);
      const unit = document.querySelector('input[name="unit"]:checked').value;
      const resultBox = document.getElementById('result');

      if (isNaN(temp)) {
        resultBox.innerText = "Please enter a valid number!";
        return;
      }

      let converted, resultText;

      if (unit === 'C') {
        converted = (temp * 9/5) + 32;
        resultText = `${temp}°C = ${converted.toFixed(2)}°F`;
      } else {
        converted = (temp - 32) * 5/9;
        resultText = `${temp}°F = ${converted.toFixed(2)}°C`;
      }

      resultBox.innerText = resultText;
    }