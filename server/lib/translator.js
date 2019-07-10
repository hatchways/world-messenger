const key = process.env.key;
const projectId = process.env.projectId;
const { Translate } = require("@google-cloud/translate");

const translate = new Translate({
  projectId,
  key
});

async function translateService(target, text) {
  // Instantiates a client
  try {
    const [translation] = await translate.translate(text, target);
    //Print text
    console.log(`Text: ${text}`);
    //Print translation
    console.log(`Translation: ${translation}`);
    return translation;
  } catch (err) {
    alert(err);
  }
}

module.exports = translateService;
