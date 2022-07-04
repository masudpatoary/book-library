// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC82obSsiv64nvQloZ2oSOfb78M0_haXy0",
  authDomain: "islamialo.firebaseapp.com",
  projectId: "islamialo",
  storageBucket: "islamialo.appspot.com",
  messagingSenderId: "259272180224",
  appId: "1:259272180224:web:406dca6ba1afd57a400ee5",
  measurementId: "G-EH43JE5GM7"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)

export default auth