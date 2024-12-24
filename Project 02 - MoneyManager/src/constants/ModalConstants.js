export const IncomeModal = {
  header: "Add Income",
  inputFields: [
    {
      type: "input",
      id: "amount-input",
      label: "Enter amount",
      placeholder: "$20",
    },
    {
      type: "input",
      id: "Reason-input",
      label: "Reason",
      placeholder: "Pizza",
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

  submitButton: {
    type: "button",
    component: "Button",
    placeholder: "Add",
  },
};
export const AddInitalIncomeModal = {
  header: "Welcome!",
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
    placeholder: "Add",
  },
};
