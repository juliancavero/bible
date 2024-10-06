const replaceNumbersForSuperscript = (text: string) => {
  return text.replace(/(\d+)/g, "^$1^");
};

const replaceNextLineForTwoSpaces = (text: string) => {
  return text.replace(/\.\n/g, ".\n\n");
};

/* const insertTitles = (text: string) => {
  return text.replace(/(?<=\n\n)(?!(\^(\d+)\^))(.*)/gm, "### $&");
}; */
const insertTitles = (text: string) => {
  return text.replace(/(?<=\n\n)(?!(\^(\d+)\^))(.*)(?=\n\^\d+\^)/gm, "### $&");
};

const insertBeginingTitle = (text: string) => {
  return text.replace(/^(.*)/, "### $1");
};

export {
  insertBeginingTitle,
  insertTitles,
  replaceNextLineForTwoSpaces,
  replaceNumbersForSuperscript,
};
