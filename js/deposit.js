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
