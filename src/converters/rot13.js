export const rot13Encode = (plaintext) => {
  const original = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const after = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  return plaintext.replace(/[a-zA-Z]/g, char => after[original.indexOf(char)]);
};

export const rot13Decode = plaintext => rot13Encode(plaintext);