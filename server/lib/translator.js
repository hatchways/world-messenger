// Allows to access env variables

// const dotenv = require("dotenv").config();

// // Add in local .env file
// // Google project_id for google translate api
//projectId=""
//// Imports the Google Cloud client library
//key=""

async function quickStart(target, text) {
  const projectId = process.env.projectId;

  const key = process.env.key;
  const { Translate } = require("@google-cloud/translate");

  // Instantiates a client
  const translate = new Translate({
    projectId,
    key
  });

  const [translation] = await translate.translate(text, target);

  //Print text
  console.log(`Text: ${text}`);

  //Print translation
  console.log(`Translation: ${translation}`);
  return translation;
}

module.exports = quickStart;
