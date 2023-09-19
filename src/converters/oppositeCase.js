export const oppositeCaseEncode = (plaintext) => {
  const original = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const after = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return plaintext.replace(/[a-zA-Z]/g, char => after[original.indexOf(char)]);
};

export const oppositeCaseDecode = plaintext => oppositeCaseEncode(plaintext);