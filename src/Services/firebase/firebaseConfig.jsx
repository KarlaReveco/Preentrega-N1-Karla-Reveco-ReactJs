import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCFvqQv04lfbi9AA4xV_f1dbtJSEgBpij0",
    authDomain: "miappecommerce.firebaseapp.com",
    projectId: "miappecommerce",
    storageBucket: "miappecommerce.appspot.com",
    messagingSenderId: "207640923973",
    appId: "1:207640923973:web:3f413c6d3b858b5835f82c",
    measurementId: "G-K0P4GH6LBD"
  }

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app)





