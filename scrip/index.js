
document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.boton');
    const planetas = document.querySelectorAll('.planeta');
    
    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            const planetaId = boton.textContent.toLowerCase();
            console.log(`Botón clicado: ${planetaId}`);
            mostrarPlaneta(planetaId);
        });
    });
    
    const mostrarPlaneta = (planetaId) => {
        planetas.forEach(planeta => {
            if (planeta.id === planetaId) {
                console.log(`Mostrando planeta: ${planetaId}`);
                planeta.style.display = 'block';
            } else {
                planeta.style.display = 'none';
            }
        });
    }
});