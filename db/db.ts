import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzX9xDi2_dAbNQijuHqZ8MEm-V_-HhYgA",
  authDomain: "sports-day-db.firebaseapp.com",
  projectId: "sports-day-db",
  storageBucket: "sports-day-db.appspot.com",
  messagingSenderId: "828947112094",
  appId: "1:828947112094:web:b3bfe118938080a758db8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
