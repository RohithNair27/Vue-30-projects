
export function storeTransactionDetails(details) {
    let newArray = JSON.stringify(details);
    localStorage.setItem("financialRecords", newArray);
  }

export function getAllMoneyDetails() {
  try {
    console.log(JSON.parse(localStorage.getItem("financialRecords")));
    return JSON.parse(localStorage.getItem("financialRecords")) || [];
  } catch (error) {
    console.log(error);
  }
}

export function deleteAllTransactions(){
  localStorage.clear()
}