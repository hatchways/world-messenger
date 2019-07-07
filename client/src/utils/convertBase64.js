//Taken from https://stackoverflow.com/a/9458996
const convertBase64 = (buffer, contentType) => {
  let binary = '';
  let bytes = new Uint8Array(buffer);
  let len = bytes.byteLength;
  let base64flag = `data:${contentType};base64,`;

  for(let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  return base64flag + window.btoa(binary);
};

export default convertBase64;