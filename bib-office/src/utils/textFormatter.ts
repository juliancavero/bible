const replaceNumbersForSuperscript = (text: string) => {
  return text.replace(/(\d+)/g, "^$1^");
};

const replaceNextLineForTwoSpaces = (text: string) => {
  return text.replace(/\.\n/g, ".\n\n");
};

export { replaceNextLineForTwoSpaces, replaceNumbersForSuperscript };
