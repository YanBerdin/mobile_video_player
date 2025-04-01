import 'dotenv/config'; // Charge les variables d'environnement depuis un fichier .env
import appJson from './app.json'; // Importe le contenu de app.json

export default {
  ...appJson, // Étend app.json
  expo: {
    ...appJson.expo, // Étend la config Expo
    extra: {
      RAPIDAPI_KEY: process.env.RAPIDAPI_KEY || '33a38a48e2msh345936a2215c570p1a003cjsn277d5a16ce04',
      RAPIDAPI_HOST: process.env.RAPIDAPI_HOST
    },
  },
};