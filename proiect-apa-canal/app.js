// Configurarea Firebase - înlocuiește valorile cu cele obținute din Firebase Console
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

// Adăugăm funcționalitatea de autentificare prin email și parolă
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Previne reîncărcarea paginii

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Redirecționează la pagina home.html după autentificare reușită
            window.location.href = 'home.html';
        })
        .catch((error) => {
            // Gestionează erorile
            document.getElementById('message').textContent = 'Eroare la autentificare: ' + error.message;
            console.error('Error during email login:', error);
        });
});