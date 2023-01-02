export const validateNif = (nif) => {
const length = nif.length;
  if (length !== 9) return `O nif deve conter 9 algarismos. O valor inserido contém ${length} ${length === 1 ? "algarismo" : "algarismos"}!`;
  
  let a = 0;
  for (let i = 0; i < nif.length - 1; i++) 
    a += nif[i] * (nif.length - i);
  
  const b = a % 11;
  
  let controlDigit = 0
  if (b > 2) controlDigit = 11 - b;
  
  //return a + " " + b + " " + controlDigit + " " + nif[nif.length - 1];
  
  if (controlDigit == nif[nif.length - 1])
    return "O nif é válido!";
  return "O nif é inválido!";
}