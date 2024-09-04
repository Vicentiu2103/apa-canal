// Configurarea Firebase - înlocuiește valorile cu cele din Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyALy5H_NQ4G5tEgiGJIJzNMSweftZf8kCw",
    authDomain: "evidenta-apa-canal.firebaseapp.com",
    projectId: "evidenta-apa-canal",
    storageBucket: "evidenta-apa-canal.appspot.com",
    messagingSenderId: "818090004727",
    appId: "1:818090004727:web:b9f9589149fd8b084083f2"
  };

// Inițializează Firebase
firebase.initializeApp(firebaseConfig);

// Accesează serviciul de autentificare
const auth = firebase.auth();

// Verifică dacă utilizatorul este autentificat
auth.onAuthStateChanged((user) => {
    if (user) {
        // Afișează mesajul de bun venit
        document.getElementById('welcome-message').textContent = `Hello, ${user.email}!`;
    } else {
        // Redirecționează la pagina de login dacă utilizatorul nu este autentificat
        window.location.href = 'index.html';
    }
});

// Adăugăm funcționalitatea de logout
document.getElementById('logout').addEventListener('click', () => {
    auth.signOut().then(() => {
        // Redirecționează la pagina de login după deconectare
        window.location.href = 'index.html';
    }).catch((error) => {
        console.error('Error during sign out:', error);
    });
});