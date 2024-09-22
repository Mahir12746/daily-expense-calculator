const income = parseFloat(document.getElementById("income").value);
const software = parseFloat(document.getElementById("software").value);
const courses = parseFloat(document.getElementById("courses").value);
const internet = parseFloat(document.getElementById("internet").value);

const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener('click', function(){

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.innerText = totalExpenses.toFixed(2);

    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = balance.toFixed(2);

    const result = document.getElementById('results');
    result.classList.remove('hidden');
});

const calculateSavingsButton = document.getElementById('calculate-savings');
calculateSavingsButton.addEventListener('click', function() {
    const savingPercentage = parseFloat(document.getElementById('savings').value);

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const savingAmount = balance * savingPercentage / 100;

    const remainingBalance = balance - savingAmount;
    const remainingBalanceElement = document.getElementById('remaining-balance');
    remainingBalanceElement.innerText = remainingBalance.toFixed(2);

    const savingElement = document.getElementById('savings-amount');
    savingElement.innerText = savingAmount.toFixed(2);
})