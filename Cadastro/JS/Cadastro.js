// Seleciona o formulário pelo id
const form = document.getElementById('custom-form');

// Seleciona todos os campos que possuem a classe "inputs-required"
const campos = document.querySelectorAll('.inputs-required');

// Seleciona todas as mensagens de erro
const spans = document.querySelectorAll('.span-required');

// Expressão regular para validar e-mails
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// Evento disparado quando o formulário é enviado
form.addEventListener('submit', (event) => {

    // Impede o envio do formulário
    event.preventDefault();

    // Executa todas as validações
    nameValidate();
    emailValidate();
    passwordValidate();
    comparePassword();

});


// Exibe erro no campo correspondente
function setError(index){

    // Adiciona borda vermelha ao campo
    campos[index].style.border = '2px solid #e63636';

    // Mostra a mensagem de erro
    spans[index].style.display = 'block';
}


// Remove erro do campo correspondente
function removeError(index){

    // Remove a borda vermelha
    campos[index].style.border = '';

    // Esconde a mensagem de erro
    spans[index].style.display = 'none';
}


// Valida o campo Nome
function nameValidate() {

    // Verifica se o nome tem menos de 3 caracteres
    if (campos[0].value.length < 3){

        // Mostra erro
        setError(0);
    }
    else{

        // Remove erro
        removeError(0);
    }
}


// Valida o campo E-mail
function emailValidate(){

    // Verifica se o e-mail corresponde ao padrão da regex
    if (!emailRegex.test(campos[1].value)){

        // Mostra erro
        setError(1);
    }
    else{

        // Remove erro
        removeError(1);
    }
}


// Valida a senha principal
function passwordValidate(){

    // Verifica se a senha possui menos de 8 caracteres
    if(campos[2].value.length < 8) {

        // Mostra erro
        setError(2);
    }
    else{

        // Remove erro
        removeError(2);

        // Se a senha estiver válida, compara com a confirmação
        comparePassword();
    }
}


// Compara a senha com a confirmação de senha
function comparePassword(){

    // Verifica se as senhas são iguais
    // e se a confirmação possui pelo menos 8 caracteres
    if(
        campos[2].value == campos[3].value &&
        campos[3].value.length >= 8
    ) {

        // Remove erro
        removeError(3);
    }
    else{

        // Mostra erro
        setError(3);
    }
}