function calculateBudget() {
  const income = Number(document.getElementById("income").value) || 0;
  const savingsGoal = Number(document.getElementById("savingsGoal").value) || 0;
  const rent = Number(document.getElementById("rent").value) || 0;
  const food = Number(document.getElementById("food").value) || 0;
  const transport = Number(document.getElementById("transport").value) || 0;
  const phone = Number(document.getElementById("phone").value) || 0;
  const other = Number(document.getElementById("other").value) || 0;

  const targetSavings = income * (savingsGoal / 100);
  const totalExpenses = rent + food + transport + phone + other;
  const remainingAfterExpenses = income - totalExpenses;
  const remainingAfterSavings = remainingAfterExpenses - targetSavings;

  document.getElementById("result").innerHTML = `
    <h2>Your Results</h2>
    <p>Target Savings: $${targetSavings.toFixed(2)}</p>
    <p>Total Expenses: $${totalExpenses.toFixed(2)}</p>
    <p>Remaining After Expenses: $${remainingAfterExpenses.toFixed(2)}</p>
    <p>Remaining After Savings Goal: $${remainingAfterSavings.toFixed(2)}</p>
  `;
}