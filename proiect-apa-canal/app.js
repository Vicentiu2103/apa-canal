// Configurarea Firebase - înlocuiește valorile cu cele obținute din Firebase Console
const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "PROJECT_ID.firebaseapp.com",
    projectId: "PROJECT_ID",
    storageBucket: "PROJECT_ID.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID"
};

// Inițializează Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Gestionare Login
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