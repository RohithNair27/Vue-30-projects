export const IncomeModal = {
  header: "Add Income",
  headerInfo:"Add the money spent and select the category closest to the item",
  inputFields: [
    {
      type: "input",
      id: "amount-input",
      label: "Enter amount",
      placeholder: "$20",
      value:'',
    },
    {
      type: "input",
      id: "Reason-input",
      label: "Reason",
      placeholder: "Pizza",
      value:'',
    },
  ],
  dropDown: [
    { value: "1", label: "Salary" },
    { value: "2", label: "Business" },
    { value: "3", label: "Investments" },
    { value: "4", label: "Passive Income" },
    { value: "5", label: "Government Benefits" },
    { value: "6", label: "Other" },
  ],
  submitButton: { id: 1, placeholder: "Add to the current balance" },
};
export const AddInitalIncomeModal = {
  header: "Welcome to money app 🤑",
  headerInfo:"This app helps you track your day to day expenses. It stores all the data in browser",
  inputFields: [

    {
      type: "input",
      id: "amount-input",
      label: "Current balance",
      placeholder: "$2000.00",
    },
    {
      type: "input",
      id: "Reason-input",
      label: "Saving goals",
      placeholder: "Should be about 20% of your paycheck",
    },
  ],
  dropDown: [
    {value:"0",label: "Select the type of income"},
    { value: "1", label: "Salary" },
    { value: "2", label: "Business" },
    { value: "3", label: "Investments" },
    { value: "4", label: "Passive Income" },
    { value: "5", label: "Government Benefits" },
    { value: "6", label: "Other" },
  ],

  submitButton: {
    type: "button",
    component: "Button",
    placeholder: "Add to the balance",
  },
};
export const AddExpenseModal = {
  header: "Track Your Expenses",
  headerInfo: "Please enter the details of your recent expenses",
  inputFields: [
    {
      type: "input",
      id: "amount-input",
      label: "Expense Amount",
      placeholder: "$150.00",
    },
    {
      type: "input",
      id: "description-input",
      label: "Expense Description",
      placeholder: "E.g., Groceries, Rent, Utilities",
    },
  ],
  dropDown: [

    { value: "1", label: "Food" },
    { value: "2", label: "Rent" },
    { value: "3", label: "Utilities" },
    { value: "4", label: "Entertainment" },
    { value: "5", label: "Transportation" },
    { value: "6", label: "Healthcare" },
    { value: "7", label: "Other" },
  ],

  submitButton: {
    type: "button",
    component: "Button",
    placeholder: "Add Expense",
  },
};
export const UpdateSavingGoalModal = {
  header: "Update Your Saving Goal",
  headerInfo: "Please enter your updated saving goal amount",
  inputFields: [
    {
      type: "input",
      id: "goal-amount-input",
      label: "New Saving Goal",
      placeholder: "$5000.00", // Default placeholder for the amount
    },
  ],
  submitButton: {
    type: "button",
    component: "Button",
    placeholder: "Update Goal",
  },
};
