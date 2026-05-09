// CONFIGURAZIONE FIREBASE

const firebaseConfig = {
  apiKey: "AIzaSyDAa4U6cum4zGVo3aq5MWUlrXnvbsbSirA",
  authDomain: "fitness-app-4c23a.firebaseapp.com",
  projectId: "fitness-app-4c23a",
  storageBucket: "fitness-app-4c23a.firebasestorage.app",
  messagingSenderId: "328088204793",
  appId: "1:328088204793:web:5150d77c9c9fa97603f928"
};

// INIZIALIZZA FIREBASE
firebase.initializeApp(firebaseConfig);

// CREA DATABASE
const db = firebase.firestore();

// Rendi il database globale per tutte le pagine
window.db = firebase.firestore();

// DEBUG (opzionale)
console.log("Firebase inizializzato correttamente");(firebaseConfig);

// Rendi db globale per tutti i file HTML
window.db = firebase.firestore();