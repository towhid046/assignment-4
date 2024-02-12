// Problem 05 : Monthly Savings of a Freelancer:

function monthlySavings(arr, livingCost) {
    if(Array.isArray(arr) === false || typeof livingCost !== 'number'){
        return 'invalid input'
    }

  let incomeWithoutTax = 0;
  let incomeWithTaxes = [];
  let incomWithTax = 0;

  for (let element of arr) {
    if (element >= 3000) {
      incomeWithTaxes.push(element);
    } else {
      incomeWithoutTax += element;
    }
  }

  for (let number of incomeWithTaxes) {
    incomWithTax += number;
  }
  const incomeAfterPayingTax = incomWithTax - (incomWithTax * 20) / 100;

  incomeWithoutTax += incomeAfterPayingTax;

  let savings = incomeWithoutTax - livingCost;

  if (savings >= 0) {
    return `Total Savings: ${savings}`;
  } else {
    return "earn more...";
  }
}