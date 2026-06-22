import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// 1. CONFIGURAÇÃO DO FIREBASE (Use as mesmas credenciais do Cadastro)
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
const email = document.getElementById("email").value;
const senha = document.getElementById("password").value;

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const emailDigitado = emailInput.value;
    const senhaDigitada = senhaInput.value;
   

    if (emailDigitado === "AdmRover" && senhaDigitada === "1234") {
        window.location.href = "../../servicePage/HTML/servicePage.html";
        return; // Interrompe a execução aqui para não rodar o resto
    }
});
try {
    // Criamos uma busca na coleção "usuarios" onde o campo "email" seja igual ao digitado
    const usuariosRef = collection(db, "usuarios");
    const q = query(usuariosRef, where("email", "==", emailDigitado));
    
    const querySnapshot = await getDocs(q);

    // Se a busca voltar vazia, o e-mail não existe no banco
    if (querySnapshot.empty) {
        alert("E-mail não encontrado ou inválido!");
        return;
    }

    let loginSucesso = false;

    // Comparamos a senha salva com a digitada
    querySnapshot.forEach((doc) => {
        const dadosUsuario = doc.data();
        if (dadosUsuario.senha === senhaDigitada) {
            loginSucesso = true;
        }
    });

    if (loginSucesso) {
        alert("Login realizado com sucesso!");
        // Redireciona para a página principal ou área de serviços
        window.location.href = "../../servicePage/HTML/servicePage.html";
    } else {
        alert("Senha incorreta!");
    }

} catch (error) {
    console.error("Erro ao conectar ao banco de dados: ", error);
    alert("Erro técnico ao tentar logar. Verifique o console.");
}