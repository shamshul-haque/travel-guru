import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const secret = import.meta.env;
const firebaseConfig = {
  apiKey: secret.VITE_apiKey,
  authDomain: secret.VITE_authDomain,
  projectId: secret.VITE_projectId,
  storageBucket: secret.VITE_storageBucket,
  messagingSenderId: secret.VITE_messagingSenderId,
  appId: secret.VITE_appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
