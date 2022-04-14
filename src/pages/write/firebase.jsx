import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCZqQ2IlLbfC2Y9Usmesazg_6rvONKqWw0",
    authDomain: "bcm-team-4-upload.firebaseapp.com",
    projectId: "bcm-team-4-upload",
    storageBucket: "bcm-team-4-upload.appspot.com",
    messagingSenderId: "518613353846",
    appId: "1:518613353846:web:7002fc8c916aa1cd012657",
    measurementId: "G-Q1JHY2Q3V2"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };