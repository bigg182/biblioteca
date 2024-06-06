document.addEventListener('DOMContentLoaded', function () {
    const monitores = document.querySelectorAll('.monitores');

    monitores.forEach(botao => {
        botao.addEventListener('mouseover', function (event) {
            const horarios = event.target.dataset.horarios;
            mostrarTooltip(event.target, horarios);
        });

        botao.addEventListener('mouseout', function () {
            esconderTooltip();
        });
    });

    function mostrarTooltip(elemento, conteudo) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = conteudo;
        elemento.appendChild(tooltip);
    }

    function esconderTooltip() {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    }
});
