import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBn73gBtXlOnWSN0whfmQ8sxxB13lcx6tE",
  authDomain: "opinion-review.firebaseapp.com",
  databaseURL: "https://opinion-review-default-rtdb.firebaseio.com",
  projectId: "opinion-review",
  storageBucket: "opinion-review.appspot.com",
  messagingSenderId: "717141189665",
  appId: "1:717141189665:web:11cd637761f8443f1aaf60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imgsDB = getStorage(app)