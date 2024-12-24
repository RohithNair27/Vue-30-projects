export function storeMoneyDetails(details) {
  const existingDetails = localStorage.getItem("financialRecords");
  if (existingDetails !== null) {
    let newArray = JSON.stringify([...existingDetails, details]);
    localStorage.setItem("financialRecords", newArray);
  } else {
    localStorage.setItem("financialRecords", [details]);
  }
}
function deleteMoneyDetails(id) {}
function editMoneyDetails(id, updatedDetails) {
  // Implementation here
}
export function getAllMoneyDetails() {
  try {
    console.log(JSON.parse(localStorage.getItem("financialRecords")));
    return JSON.parse(localStorage.getItem("financialRecords")) || [];
  } catch (error) {
    console.log(error);
  }
}
