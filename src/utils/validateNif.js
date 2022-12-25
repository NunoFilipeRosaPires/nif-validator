export const validateNif = (nif) => {
  if (nif.length !== 9) return `O nif tem que conter 9 números. O valor ${nif} inserido contém ${nif.length} números`;
  return "TODO";
}