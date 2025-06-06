document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });

        // Fechar o menu ao clicar em um item de menu (para telas pequenas)
        navMenu.querySelectorAll('a').forEach(item => {
            item.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuToggle.classList.remove('open');
                }
            });
        });
    }

    // Funcionalidade de "Adicionar ao Carrinho" (apenas um exemplo simples)
    const addCartButtons = document.querySelectorAll('.btn-adicionar');
    addCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Produto adicionado ao carrinho! (Funcionalidade completa exige backend)');
            // Aqui você integraria a lógica real de adicionar ao carrinho,
            // como armazenar em um array JavaScript, localStorage, ou enviar para um servidor.
        });
    });
});
