//validation for componentA (userInput)



export function Validation(value) {
  if (!value) return "Input cannot be empty";
  if (/[^0-9]/.test(value)) return "Input must be a number";
  if (/[^a-zA-Z0-9\s]/.test(value)) return "Input cannot contain any symbol";
}

