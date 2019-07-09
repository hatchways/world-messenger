const translator = require("./translator");

const text = "Hey";
// The target language, we choose Russian as an example
// language documentation: https://cloud.google.com/translate/docs/languages
const target = "ru";

const translation = translator(target, text);

console.log(translation);
