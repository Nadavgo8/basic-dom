function validateForm() {
  const name = document.getElementById("name").value.trim();
  const salary = parseInt(document.getElementById("salary").value);
  const birthday = document.getElementById("birthday").value;
  const phone = document.getElementById("phone").value.trim();
  const result = document.getElementById("result");

  if (name.length <= 2) {
    result.innerText = "❌ Name must be longer than 2 characters.";
    return;
  }

  if (salary <= 10000 || salary >= 16000 || isNaN(salary)) {
    result.innerText = "❌ Salary must be between 10,000 and 16,000.";
    return;
  }

  if (!birthday) {
    result.innerText = "❌ Birthday cannot be empty.";
    return;
  }

  if (!/^\d{10}$/.test(phone)) {
    result.innerText = "❌ Phone must be exactly 10 digits.";
    return;
  }

  result.innerText = "✅ Form submitted successfully!";
}
