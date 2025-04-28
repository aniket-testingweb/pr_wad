import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import {
    getDatabase,
    set,
    ref,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCDziB521D7LR0PpkKQ-lUyEIFhf4E8Aa0",
    authDomain: "practical-demo-c1169.firebaseapp.com",
    databaseURL: "https://practical-demo-c1169-default-rtdb.firebaseio.com",
    projectId: "practical-demo-c1169",
    storageBucket: "practical-demo-c1169.firebasestorage.app",
    messagingSenderId: "397920236116",
    appId: "1:397920236116:web:5b9ad51d819517d38db3c1",
    measurementId: "G-4ZJMYHL290",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

function signUp() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            let user = cred.user;
            set(ref(database, "users/" + user.uid), {
                email: email,
                password: password,
            });
            alert("User Created");
        })
        .catch((err) => {
            alert(err.message);
        });
}

function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            alert("User Logged In");
            localStorage.setItem(
                "user",
                JSON.stringify({
                    email: cred.user.email,
                })
            );
            window.location.href = "./index.html";
        })
        .catch((err) => {
            alert(err.message);
        });
}

function logout() {
    localStorage.removeItem("user");
    window.location.href = "./login.html";
}

let signupButton = document.getElementById("signup");
let loginButton = document.getElementById("loginBtn");
let Logout = document.getElementById("Logout");

if (signupButton) {
    signupButton.addEventListener("click", signUp);
}

if (loginButton) {
    loginButton.addEventListener("click", login);
}

if (Logout) {
    Logout.addEventListener("click", logout);
}
