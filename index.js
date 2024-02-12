function calculateMoney(ticketSale) {
  const gateMamBill = 500;
  const stafsLunchBill = 8 * 50;
  const ticketsBill = ticketSale * 120;
  if (typeof ticketSale !== "number" || ticketSale < 0) {
    return "Provide a valid ticket number";
  } else {
    const profit = ticketsBill - (gateMamBill + stafsLunchBill);
    return profit;
  }
}

function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }
  const lastCharacter = name[name.length - 1].toLowerCase();
  switch (lastCharacter) {
    case "a":
    case "y":
    case "i":
    case "e":
    case "o":
    case "u":
    case "w":
      return "Good Name";
    default:
      return "Bad Name";
  }
}

function deleteInvalids(array) {
  let result = [];
  if (Array.isArray(array) === false) {
    return "Invalid Array";
  }
  for (let element of array) {
    if (typeof element === "number" && isNaN(element) !== isNaN(NaN)) {
      result.push(element);
    }
  }
  return result;
}

function password(obj) {
  if (typeof obj !== "object" || obj.birthYear.toString().length !== 4) {
    return "invalid";
  }
  const firstCharacterOfSiteName = obj.siteName
    ? obj.siteName[0].toUpperCase()
    : "invalid";

  const restCharacterOfSiteName = obj.siteName
    ? obj.siteName.split("").slice(1).join("")
    : "invalid";

  const nameOfSite =
    firstCharacterOfSiteName === "invalid" ||
    restCharacterOfSiteName === "invalid"
      ? "invalid"
      : firstCharacterOfSiteName + restCharacterOfSiteName;

  let result = `${nameOfSite ? nameOfSite : "invalid"}#${obj.name}@${
    obj.birthYear
  }`;

  if (
    nameOfSite === "invalid" ||
    obj.name === undefined ||
    obj.birthYear === undefined
  ) {
    return "invalid";
  } else {
    return result;
  }
}

function monthlySavings(arr, livingCost) {
  if (Array.isArray(arr) === false || typeof livingCost !== "number") {
    return "invalid input";
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
    return savings;
  } else {
    return "earn more";
  }
}