console.log("Script cargado correctamente");

window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.service-card');
    const triggerBottom = window.innerHeight / 5 * 4; // Punto de activación

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < triggerBottom) {
            // Añadimos la clase que las hace visibles
            card.classList.add('show');
        } else {
            // Opcional: quitarlas si quieres que la animación se repita
            card.classList.remove('show');
        }
    });
});