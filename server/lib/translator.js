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

    return translation;
  } catch (err) {
    console.log(err);
  }
}

module.exports = translateService;
