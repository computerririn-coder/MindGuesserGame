



export function Validation(value) {
  if (!value) return "Input cannot be empty";
  if (/[!@#$]/.test(value)) return "No !@#$ symbols allowed";
  if (/[^0-9]/.test(value)) return "Input must be a number";
  return "";
}

