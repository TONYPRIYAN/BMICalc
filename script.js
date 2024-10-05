function calculateBMI() {
    // Get the weight and height input values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    // Check if inputs are valid
    if (isNaN(weight) || isNaN(height) || height === 0) {
        alert('Please enter valid weight and height values.');
        return;
    }

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(2);

    // Display the result
    document.getElementById('bmi-value').textContent = bmi;

    // Determine BMI status
    let status = '';
    if (bmi < 18.5) {
        status = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        status = 'Overweight';
    } else {
        status = 'Obesity';
    }

    // Display the BMI status
    document.getElementById('status-value').textContent = status;
}
