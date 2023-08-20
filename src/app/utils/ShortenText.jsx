export const ShortenText = (text) => {
  const splitedtext = [...text];
  splitedtext.length = 50;
  const shortentext = splitedtext.join("");
  return shortentext + "...";
};
