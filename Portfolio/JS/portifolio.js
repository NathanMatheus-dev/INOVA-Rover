// Newsletter
const newsletterForm = document.getElementById('newsletterForm');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    
    if (email) {
        alert(`Obrigado! Email ${email} cadastrado com sucesso.`);
        e.target.reset();
    }
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
});