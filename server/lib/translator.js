// Allows to access env variables
// const dotenv = require("dotenv").config(); // check if this has

// Google project_id for google translate api
const projectId = "chatapp-1562205074869";
// Google api key for google translate api
const key = "AIzaSyB1uXN8xUHZrdHhRm6hxIG0zLYHuZGDDxk";
// The text to translate
const text = "Hello, world!";
// The target language, we choose Russian as an example
// language documentation: https://cloud.google.com/translate/docs/languages
const target = "ru";

async function quickStart(projectId, key, target, text) {
  // Imports the Google Cloud client library
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
}

//Now remember to run this function
quickStart(projectId, key, target, text);

module.exports = quickStart;

// quickStart=
