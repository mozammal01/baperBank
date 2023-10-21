// Step 1. add event listener to the deposit button

document.getElementById('btn-deposit').addEventListener('click', function () {
  // Step 2. get the deposit amount from the deposit input field
  // for input field use .value to the value inside the input field

  const depositAmount = document.getElementById('deposit-amount')
  const newDepositFieldString = depositAmount.value
  const newDepositField = parseFloat(newDepositFieldString);

  // Step 3. get the current deposit total 
  // for non-input (elemnt other than input, textarea) use innerText to get the text
  const depositTotalElement = document.getElementById('deposit-total');
  const previousDepositTotalString = depositTotalElement.innerText
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  // Step 4. add numbers to set the total deposit

  const currentDepositTotal = previousDepositTotal + newDepositField;

  depositTotalElement.innerText = currentDepositTotal;

  // Step 5. 

  const balanceTotalElement = document.getElementById('balance-total');
  const balanceTotalString = balanceTotalElement.innerText;
  const balanceTotal = parseFloat(balanceTotalString);
  balanceTotalElement.innerText = newDepositField + balanceTotal;

  // Step 6. 

  // Step 7. 
  depositAmount.value = '';
})







// 

document.getElementById('btn-withdraw').addEventListener('click', function () {
  const withdrawAmount = document.getElementById('withdraw-amount')
  const newWithdrawFieldString = withdrawAmount.value
  console.log(newWithdrawFieldString)
  const newWithdrawField = parseFloat(newWithdrawFieldString);


  const withdrawTotalElement = document.getElementById('withdraw-total');
  const previousWithdrawTotalString = withdrawTotalElement.innerText
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawField;

  withdrawTotalElement.innerText = currentWithdrawTotal;


  // 
  withdrawAmount.value = '';
})