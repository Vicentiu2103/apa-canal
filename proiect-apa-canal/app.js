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

const auth = firebase.auth();

// Gestionare Login cu Email și Parolă
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            document.getElementById('message').textContent = 'Logare reușită!';
        })
        .catch((error) => {
            document.getElementById('message').textContent = 'Eroare la logare: ' + error.message;
        });
});

// Gestionare Login cu Google
document.getElementById('google-login').addEventListener('click', function() {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
        .then((result) => {
            document.getElementById('message').textContent = 'Logare cu Google reușită!';
        })
        .catch((error) => {
            document.getElementById('message').textContent = 'Eroare la logare cu Google: ' + error.message;
        });
});