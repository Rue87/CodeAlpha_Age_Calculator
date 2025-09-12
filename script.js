// Function that runs when user clicks the "Calculate Age" button
function calculateAge() {
  // Get values from inputs
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

   // References for error message and result display
  const error = document.getElementById("error");
  const result = document.getElementById("result");

   // Clear old messages
  error.textContent = "";
  result.textContent = "";

   // Input validation: check if user entered something
  if (!day || !month || !year) {
    error.textContent = "⚠️ Please enter valid date values.";
    return;
  }
  // Check if year is in a sensible range (1900 - current year)
  const currentYear = new Date().getFullYear();
  if (year < 1900 || year > currentYear) {
    error.textContent = `⚠️ Year must be between 1900 and ${currentYear}.`;
    return;
  }

  // Check if day is valid for the given month
  // Example: no 31st of February
  const daysInMonth = new Date(year, month, 0).getDate(); // last day of that month
  if (day > daysInMonth) {
    error.textContent = `⚠️ Invalid day. ${month}/${year} only has ${daysInMonth} days.`;
    return;
  }

   // Create Date object from user input
  const dob = new Date(year, month - 1, day); // month - 1 (because JS months start from 0)
  const today = new Date(); // Current date

   // Check if date is in the future
  if (dob > today) {
    error.textContent = "⚠️ Date of Birth cannot be in the future!";
    return;
  }

