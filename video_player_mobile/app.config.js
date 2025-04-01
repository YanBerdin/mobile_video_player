import 'dotenv/config'; // Charge les variables d'environnement depuis un fichier .env
import appJson from './app.json'; // Importe le contenu de app.json

export default {
  ...appJson, // Étend app.json
  expo: {
    ...appJson.expo, // Étend la config Expo
    extra: {
      RAPIDAPI_KEY: process.env.RAPIDAPI_KEY,
      RAPIDAPI_HOST: process.env.RAPIDAPI_HOST
    },
  },
};