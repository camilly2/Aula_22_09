// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// incluir as configurações obtidas no firebase console 
//
const firebaseConfig = {
    apiKey: "AIzaSyCHea48DpK8E6xP9nhUfyfuok0H3pKokyg",
    authDomain: "usabilidademooca.firebaseapp.com",
    databaseURL: "https://usabilidademooca-default-rtdb.firebaseio.com",
    projectId: "usabilidademooca",
    storageBucket: "usabilidademooca.appspot.com",
    messagingSenderId: "674885555726",
    appId: "1:674885555726:web:fd1bb07bf023b686478e5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database
