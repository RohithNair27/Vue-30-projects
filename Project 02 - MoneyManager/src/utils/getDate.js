export function getTodaysData() {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const newDate = new Date();
  let date = newDate.getDate();
  let month = months[newDate.getMonth()];
  let year = newDate.getFullYear();
  return `${month} ${date}, ${year}`;
}
