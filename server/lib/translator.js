// Allows to access env variables
const dotenv = require("dotenv").config();
console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS);

async function quickStart(
  projectId = "chatapp-1562205074869" // Your GCP Project Id
) {
  // Imports the Google Cloud client library
  const { Translate } = require("@google-cloud/translate");

  // Instantiates a client
  const translate = new Translate({ projectId });

  // The text to translate
  const text = "Hello, world!";

  // The target language, we choose Russian as an example
  const target = "ru";

  // Translates some text into Russian
  const [translation] = await translate.translate(text, target);

  console.log(`Text: ${text}`);

  console.log(`Translation: ${translation}`);
}

//Now remember to run this function
quickStart();
