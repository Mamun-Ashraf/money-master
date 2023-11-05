function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    return inputFieldValue;
}

document.getElementById('btn-calculate').addEventListener('click', function () {

    const income = getInputValue('income');
    const food = getInputValue('food');
    const rent = getInputValue('rent');
    const clothes = getInputValue('clothes');

    const totalExpense = food + rent + clothes;
    const balance = income - totalExpense;

    if (!income || !food || !rent || !clothes) {
        alert('Income, Food, Rent and Colthes should be Valid number')
    }
    else if (income < 0 || food < 0 || rent < 0 || clothes < 0) {
        alert('Income, Food, Rent and Colthes should be positive number')
    }
    else if (totalExpense >= 0 && totalExpense <= income) {

        const totalExpenseField = document.getElementById('total-expense');
        totalExpenseField.innerText = totalExpense;

        const balanceField = document.getElementById('balance');
        balanceField.innerText = balance;
    }
    else {
        alert('Total expense can not be more than income')
    }

});

document.getElementById('btn-save').addEventListener('click', function () {

    const income = getInputValue('income');
    const food = getInputValue('food');
    const rent = getInputValue('rent');
    const clothes = getInputValue('clothes');
    const save = getInputValue('save-percentage');

    const totalExpense = food + rent + clothes;
    const balance = income - totalExpense;

    const savingAmount = (income * save) / 100;
    const remainingBalance = balance - savingAmount;

    if (!income || !food || !rent || !clothes || !save) {
        alert('Income, Food, Rent, Colthes and save should be Valid number')
    }
    else if (income < 0 || food < 0 || rent < 0 || clothes < 0 || save < 0) {
        alert('Income, Food, Rent Colthes and save should be positive number')
    }
    else if (totalExpense >= 0 && (totalExpense + savingAmount) <= income) {

        const savingAmountField = document.getElementById('saving-amount');
        savingAmountField.innerText = savingAmount;

        const remainingBalanceField = document.getElementById('remaining-balance');
        remainingBalanceField.innerText = remainingBalance;

    }
    else {
        alert('Total expense+savingAmount can not be more than income')
    }

})