// Initialize Firebase
var config = {
  apiKey: "AIzaSyCKgKqARF0oDitqOAPNPQ2fo-TqjnRDZK8",
  authDomain: "login-11c36.firebaseapp.com",
  projectId: "login-11c36",
  storageBucket: "login-11c36.appspot.com",
  messagingSenderId: "823780681599",
  appId: "1:823780681599:web:f8164e1c186e4c32b9dc4a",
  measurementId: "G-5YQKTG1RLX",
};
firebase.initializeApp(config);

// Get elements
const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");
const btnLogout = document.getElementById("btnLogout");

// Add login event
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  // Get email and pass
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();

  // Sign in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch((e) => {
    console.log(e.message);
    btnLogout.classList.add("hide");
  });
});

// Add signup event
btnSignUp.addEventListener("click", (e) => {
  e.preventDefault();
  // Get email and pass
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();

  // Sign in
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch((e) => console.log(e.message));
});

// Add a realtime listener
firebase.auth().onAuthStateChanged((firebaseUser) => {
  if (firebaseUser) {
    const response = JSON.stringify(firebaseUser);
    const access_token = JSON.parse(response).stsTokenManager.accessToken;
    console.log("access_token", access_token);
    btnLogout.classList.remove("hide");
  } else {
    console.log("not logged in");
    btnLogout.classList.add("hide");
  }
});

// Add logout event
btnLogout.addEventListener("click", (e) => {
  firebase.auth().signOut();
});
