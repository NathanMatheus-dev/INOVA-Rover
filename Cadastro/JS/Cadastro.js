import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


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


const form = document.getElementById('custom-form');
const campos = document.querySelectorAll('.inputs-required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 3. EVENTO DE SUBMIT (VALIDAÇÃO E ENVIO UNIFICADOS)
form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Impede o recarregamento automático da página

    // Executa todas as validações visuais
    nameValidate();
    emailValidate();
    passwordValidate();
    comparePassword();

    // Verifica se existe alguma validação falhando (borda vermelha ativa)
    const existeErro = Array.from(campos).some(campo => campo.style.border.includes('rgb(230, 54, 54)') || campo.style.border.includes('#e63636'));
    
    // Se houver erros ou campos vazios, interrompe o envio
    if (existeErro || campos[0].value === "" || campos[1].value === "" || campos[2].value === "") {
        alert("Por favor, preencha todos os campos corretamente antes de enviar.");
        return; 
    }

    // Se passou na validação, pega os valores para salvar
    const nomeCompleto = campos[0].value;
    const email = campos[1].value;
    const senha = campos[2].value;

    try {
        // Envia para a coleção "usuarios" no Firestore
        const docRef = await addDoc(collection(db, "usuarios"), {
            nome: nomeCompleto,
            email: email,
            senha: senha, // Nota de segurança: Ideal usar Firebase Auth futuramente
            criadoEm: new Date()
        });

        alert("Cadastro realizado com sucesso! ID: " + docRef.id);
        window.location.href = "../../servicePage/HTML/servicePage.html";
        

    } catch (error) {
        console.error("Erro ao salvar no banco de dados: ", error);
        alert("Erro ao realizar cadastro. Verifique o console.");
    }
});

// 4. FUNÇÕES DE AUXÍLIO VISUAL (Auxiliares de Erro)
function setError(index) {
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

// 5. FUNÇÕES DE VALIDAÇÃO (Expostas para o HTML via objeto window)
window.nameValidate = function() {
    if (campos[0].value.length < 3) {
        setError(0);
    } else {
        removeError(0);
    }
}

window.emailValidate = function() {
    if (!emailRegex.test(campos[1].value)) {
        setError(1);
    } else {
        removeError(1);
    }
}

window.passwordValidate = function() {
    if (campos[2].value.length < 8) {
        setError(2);
    } else {
        removeError(2);
        comparePassword();
    }
}

window.comparePassword = function() {
    if (campos[2].value === campos[3].value && campos[3].value.length >= 8) {
        removeError(3);
    } else {
        setError(3);
    }
}