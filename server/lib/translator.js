// text sent here,
// 1. tranlated to
// 2. target language - from user database
// 3. output

// Allows to access env variables
const dotenv = require("dotenv").config();
console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS);

async function quickStart(
  // >> TOD0 - import from config
  projectId = "chatapp-1562205074869" // Your GCP Project Id
) {
  // Imports the Google Cloud client library
  const { Translate } = require("@google-cloud/translate");

  // Instantiates a client
  const translate = new Translate(
    // >> json from config
    {
      project_id: "chatapp-1562205074869",
      key: "AIzaSyB1uXN8xUHZrdHhRm6hxIG0zLYHuZGDDxk"
    }
  );

  // The text to translate
  const text = "My name is Abbas";

  // The target language, we choose Russian as an example
  const target = "ru";

  // Translates some text into Russian
  const [translation] = await translate.translate(text, target);

  console.log(`Text: ${text}`);

  console.log(`Translation: ${translation}`);
}

//Now remember to run this function
quickStart();
