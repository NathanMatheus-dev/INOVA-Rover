// Dados dos serviços
const services = [
    {
        icon: "💒",
        title: "Fotografia de Casamento",
        desc: "Registros emocionais e cinematográficos do seu dia mais especial."
    },
    {
        icon: "👔",
        title: "Ensaios Corporativos",
        desc: "Imagens profissionais que fortalecem sua marca pessoal."
    },
    {
        icon: "🎉",
        title: "Eventos Corporativos",
        desc: "Cobertura completa de congressos, lançamentos e celebrações."
    },
    {
        icon: "📦",
        title: "Fotografia de Produtos",
        desc: "Imagens comerciais de alto padrão para e-commerce e catálogos."
    },
    {
        icon: "👨‍👩‍👧",
        title: "Ensaios Familiares",
        desc: "Momentos genuínos entre gerações com beleza atemporal."
    },
    {
        icon: "🏠",
        title: "Fotografia Imobiliária",
        desc: "Imagens que valorizam propriedades e aceleram vendas."
    }
];

// Renderizar cards
function renderServices() {
    const grid = document.getElementById('servicesGrid');
    
    services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <div class="service-icon">${service.icon}</div>
            <h3>${service.title}</h3>
            <p>${service.desc}</p>
            <a href="#" class="btn-circle">→</a>
        `;
        grid.appendChild(card);
    });
}

// Mobile Menu
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
    // Aqui você pode expandir para um menu mobile completo se desejar
    alert("Menu mobile - Em produção (pode expandir com um drawer)");
});

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