
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBwyHuvd9xvHPGcVAgEOZsKENz_yxveR8",
  authDomain: "nedimfirebase.firebaseapp.com",
  projectId: "nedimfirebase",
  storageBucket: "nedimfirebase.appspot.com",
  messagingSenderId: "990518987521",
  appId: "1:990518987521:web:223df45c3d78c84ccce900"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  const auth= getAuth();

  var firstName=document.getElementById("firstname");
  var lastName=document.getElementById("lastname");
  var email=document.getElementById("email");
  var pass=document.getElementById("pass");

window.signup=function(e){
    e.preventDefault();
    var obj={
        firstName: firstName.value,
        lastName: lastName.value,
        email:email.value,
        pass: pass.value,
    }

    createUserWithEmailAndPassword (auth, obj.email,obj.pass)
    .then(function(success){
        alert("Sign up successful")
    })
    .catch(function(err){
        alert("error"+err)
    })
    console.log(obj);
};