const amount = parseInt(document.getElementById("txnAmount").value);

if (location && amount >= 1 && amount <= 1000000000) {
  transactions.push({
    location,
    amount,
    date: new Date().toLocaleDateString()
  });

  localStorage.setItem("transactions", JSON.stringify(transactions));
  document.getElementById("txnLocation").value = "";
  document.getElementById("txnAmount").value = "";
  loadTransactions();
} else {
  alert("Amount must be between ₹1 and ₹1,000,000,000");
}
function addTransaction(event) {
  event.preventDefault();
  const location = document.getElementById("txnLocation").value.trim();
  const amountStr = document.getElementById("txnAmount").value.trim();
  const amount = parseInt(amountStr);

  if (location && /^[1-9][0-9]{0,9}$/.test(amountStr) && amount <= 1000000000) {
    const transactions = JSON.parse(localStorage.getItem("transactions") || "[]");

    transactions.push({
      location,
      amount,
      date: new Date().toLocaleDateString()
    });

    localStorage.setItem("transactions", JSON.stringify(transactions));
    document.getElementById("txnLocation").value = "";
    document.getElementById("txnAmount").value = "";
    loadTransactions();
  } else {
    alert("Please enter a valid amount between ₹1 and ₹1,000,000,000");
  }
}
