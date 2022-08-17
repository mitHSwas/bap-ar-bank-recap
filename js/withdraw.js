document.getElementById("btn-withdraw").addEventListener("click", function () {
    const withdrawField = document.getElementById("withdraw-field");
    const withdrawFieldAmount = parseFloat(withdrawField.value);

    if (isNaN(withdrawFieldAmount)) {
        alert("INPUT NUMBER PARAMETER.")
        return;
    }
    const totalBalance = document.getElementById("balance-total");
    const totalBalanceAmount = parseFloat(totalBalance.innerText);

    withdrawField.value = "";

    if (withdrawFieldAmount > totalBalanceAmount) {
        alert("BAP AR BANK A ATO TAKA NAI.");
        return;
    }

    const previousWithdraw = document.getElementById("withdraw-total");
    const previousWithdrawAmount = parseFloat(previousWithdraw.innerText);

    previousWithdraw.innerText = withdrawFieldAmount + previousWithdrawAmount;
    totalBalance.innerText = totalBalanceAmount - withdrawFieldAmount;

})