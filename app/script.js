function calculateBudget() {
  const income = Number(document.getElementById("income").value) || 0;
  const rent = Number(document.getElementById("rent").value) || 0;
  const food = Number(document.getElementById("food").value) || 0;
  const transport = Number(document.getElementById("transport").value) || 0;
  const phone = Number(document.getElementById("phone").value) || 0;
  const other = Number(document.getElementById("other").value) || 0;

  const totalExpenses = rent + food + transport + phone + other;
  const remaining = income - totalExpenses;
  const savingsRate = income > 0 ? ((remaining / income) * 100).toFixed(1) : 0;

  let recommendation = "";

if (savingsRate < 10) {
  recommendation = "Try reducing expenses before investing.";
} else if (savingsRate >= 10 && savingsRate < 20) {
  recommendation = "Build an emergency fund before investing.";
} else {
  recommendation = "You may consider saving or investing extra money.";
}

document.getElementById("result").innerHTML = `
  <h2>Your Results</h2>
  <p>Total Expenses: $${totalExpenses.toFixed(2)}</p>
  <p>Remaining Balance: $${remaining.toFixed(2)}</p>
  <p>Savings Rate: ${savingsRate}%</p>
  <p><strong>Recommendation:</strong> ${recommendation}</p>
`;
}
