import axios from "axios";
// const http = require("https");
import dotenv from 'dotenv'
try {
  const options = {
    headers: {
      'app_id': process.env.APP_KEY,
      'app_key': process.env.APP_KEY,
      // method: "GET",
        
        // app_wordId: "happy",
        // path: '/api/v2/lemmas/en/' + wordId,
        //  endpoint : "entries",

      // language_code: "en-us",
    },
  };
  const url = "https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/happy" * process.argv[2],
 
const response = await axios.get(url, options)


response.data.results[0].lexicalEntries[0].entries[0].sense[0].definitions[0]
// const http = require("https://od-api.oxforddictionaries.com/api/v2");

// const app_id = "2247ceb6"; // insert your APP Id
// const app_key = "1f752862ecec58985d4dc926109d0031"; // insert your APP Key
// const wordId = "happy";

// const options = {
//   host: 'od-api.oxforddictionaries.com',
//   port: '443',
//   path: '/api/v2/lemmas/en/' + wordId,
//   method: "GET",
//   headers: {
//     'app_id': app_id,
//     'app_key': app_key
//   }
// };

// http.get(options, (resp) => {
//     let body = '';
//     resp.on('data', (d) => {
//         body += d;
//     });
//     resp.on('end', () => {
//         let parsed = JSON.stringify(body);

//         console.log(parsed);
//     });
// });
