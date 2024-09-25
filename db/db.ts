import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIWXWl1Y7LFf9gXjvyI_WaCGJiwg2Vuuk",
  authDomain: "raps-points-db.firebaseapp.com",
  projectId: "raps-points-db",
  storageBucket: "raps-points-db.appspot.com",
  messagingSenderId: "39755402475",
  appId: "1:39755402475:web:88c1d437e46f3b6525c2ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
