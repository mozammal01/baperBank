/* 
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2.5 also make sure to convert the input into a number using parseFloat
3. get previous withdraw total 
4. calculate total withdraw amount 
4.5 set total withdraw amount
5. get the previous balance total
6. calclulate new balance total
6.5 set the new balance total
7. clear the input field  
*/


// Step 1.
document.getElementById('btn-withdraw').addEventListener('click', function () {
  // Step 2.
  const withdrawAmount = document.getElementById('withdraw-amount')
  const newWithdrawFieldString = withdrawAmount.value
  const newWithdrawField = parseFloat(newWithdrawFieldString);
  
  // Step 7.
  withdrawAmount.value = '';
  
  if(isNaN(newWithdrawField)){
    alert('Enter a valid number')
    return
  }

  // Step 3.
  const withdrawTotalElement = document.getElementById('withdraw-total');
  const previousWithdrawTotalString = withdrawTotalElement.innerText
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


  // Step 5.
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  if (newWithdrawField > previousBalanceTotal) {
    alert('Tor bap ki brilgates naki je ato tk chaitasot')
    return;
  }

  // Step 4.
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawField;

  withdrawTotalElement.innerText = currentWithdrawTotal;

  // Step 6.

  const newBalanceTotal = previousBalanceTotal - newWithdrawField;
  balanceTotalElement.innerText = newBalanceTotal
})