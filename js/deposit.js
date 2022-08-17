document.getElementById("btn-deposit").addEventListener("click", function () {
    const depositField = document.getElementById("deposit-field");
    const depositFieldAmount = parseFloat(depositField.value);

    depositField.value = "";

    if (isNaN(depositFieldAmount)) {
        alert("INPUT NUMBER PARAMETER.")
        return;
    }
    const previousDepositTotal = document.getElementById("deposit-total");
    const previousDepositAmount = parseFloat(previousDepositTotal.innerText);
    previousDepositTotal.innerText = depositFieldAmount + previousDepositAmount;

    const totalBalance = document.getElementById("balance-total");
    const totalBalanceAmount = parseFloat(totalBalance.innerText);
    totalBalance.innerText = depositFieldAmount + totalBalanceAmount;


})