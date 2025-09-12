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

   // Create Date object from user input
  const dob = new Date(year, month - 1, day); // month - 1 (because JS months start from 0)
  const today = new Date(); // Current date