// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
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
const analytics=getAnalytics(app);
const auth= getAuth();
  var email=document.getElementById("email");
  var pass=document.getElementById("pass");


window.login=function(e){
    e.preventDefault();
    var obj={
        email:email.value,
        pass: pass.value,
    }

    signInWithEmailAndPassword (auth, obj.email,obj.pass)
    .then(function(success){
        alert("Welcome cat enthusiast!");
        window.location.href="cat.html";
    })
    .catch(function(err){
        window.location.replace("index.html");
        alert("error!"+err)
    })
    console.log(obj);
};