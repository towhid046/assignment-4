// Problem-01 : Help The Zoo Manager:

function calculateMoney(ticketSale) {
  const gateMamBill = 500;
  const stafsLunchBill = 8 * 50;
  const ticketsBill = ticketSale * 120;
  if (typeof ticketSale !== "number" || ticketSale < 0) {
    return "Provide a valid ticket number";
  } else {
    const profit = ticketsBill - (gateMamBill + stafsLunchBill);
    return `Profit: ${profit}`;
  }
}
