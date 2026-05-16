function calculateBudget() {
  const income = Number(document.getElementById("income").value) || 0;
  const rent = Number(document.getElementById("rent").value) || 0;
  const savingsGoal = Number(document.getElementById("savingsGoal").value) || 0;
  const transport = Number(document.getElementById("transport").value) || 0;
  const phone = Number(document.getElementById("phone").value) || 0;
  const other = Number(document.getElementById("other").value) || 0;

  const targetSavings = income * (savingsGoal / 100);
  const totalExpenses = rent + transport + phone + other;
  const remainingAfterExpenses = income - totalExpenses;
  const remainingAfterSavings = remainingAfterExpenses - targetSavings;

  let recommendation = "";

  if (remainingAfterSavings < 0) {
    recommendation = "Your savings goal may be too high. Lower expenses or adjust your goal.";
  } else if (savingsGoal < 10) {
    recommendation = "Try increasing your savings goal before investing.";
  } else if (savingsGoal >= 10 && savingsGoal < 20) {
    recommendation = "Good start. Focus on building an emergency fund.";
  } else {
    recommendation = "Strong savings goal. You may consider putting extra money toward stocks, ETFs, or long-term investments.";
  }

  document.getElementById("result").innerHTML = `
    <h2>Your Results</h2>
    <p>Target Savings: $${targetSavings.toFixed(2)}</p>
    <p>Total Expenses: $${totalExpenses.toFixed(2)}</p>
    <p>Remaining After Savings: $${remainingAfterSavings.toFixed(2)}</p>
    <p><strong>Suggested Action:</strong> ${recommendation}</p>
  `;
}