 function carregarFotos() {
            const gallery = document.getElementById('gallery');
            gallery.innerHTML = ''; // Limpa a galeria atual

            
            for (let i = 0; i < 12; i++) {
                const card = document.createElement('div');
                card.className = 'photo-card';

                // Usamos o timestamp (Date.now) + o index para garantir que a API traga fotos diferentes na mesma requisição
                const randomId = Math.floor(Math.random() * 1000) + i;
                const imgUrl = `https://picsum.photos/400/300?random=${randomId}`;

                card.innerHTML = `<img src="${imgUrl}" alt="Foto Aleatória">`;
                gallery.appendChild(card);
            }
        }

        // Executa automaticamente quando a página abre
        window.onload = carregarFotos;