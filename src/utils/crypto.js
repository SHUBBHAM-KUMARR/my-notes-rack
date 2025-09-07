import CryptoJS from "crypto-js";

export function encrypt(text, passphrase) {
  return CryptoJS.AES.encrypt(text, passphrase).toString();
}

export function decrypt(ciphertext, passphrase) {
  try {
    const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (e) {
    return "";
  }
}
