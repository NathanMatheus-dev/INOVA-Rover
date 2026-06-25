import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDpisG9yvcqyNEHIBaxR9UzB3I22sa7T6g",
    authDomain: "hashtech-a08a8.firebaseapp.com",
    projectId: "hashtech-a08a8",
    storageBucket: "hashtech-a08a8.firebasestorage.app",
    messagingSenderId: "101430185858",
    appId: "1:101430185858:web:b800de49969e315166099b",
    measurementId: "G-4DEJRWC20G"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const formulario = document.querySelector(".login-form");

formulario.addEventListener("submit", async function(event) {
    event.preventDefault();
    
    // Captura os valores de dentro dos inputs no momento do clique
    const emailDigitado = document.getElementById("email").value;
    const senhaDigitada = document.getElementById("password").value;

    // Login Admin de teste
    if (emailDigitado === "AdmRover" && senhaDigitada === "1234") {
        window.location.href = "../../Conta/HTML/Conta.html"; 
        return; 
    }

    try {
        const usuariosRef = collection(db, "usuarios");
        const q = query(usuariosRef, where("email", "==", emailDigitado));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            alert("E-mail não encontrado ou inválido!");
            return;
        }

        let loginSucesso = false;

        querySnapshot.forEach((doc) => {
            const dadosUsuario = doc.data();
            if (dadosUsuario.senha === senhaDigitada) {
                loginSucesso = true;
            }
        });

        if (loginSucesso) {
            alert("Login realizado com sucesso!");
            // Redireciona para a nova página de fotos aleatórias
            window.location.href = "../../Conta/HTML/Conta.html";
        } else {
            alert("Senha incorreta!");
        }

    } catch (error) {
        console.error("Erro ao conectar ao banco de dados: ", error);
        alert("Erro técnico ao tentar logar.");
    }
});