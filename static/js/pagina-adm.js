document.getElementById('menu_icon').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
    this.classList.toggle('open'); // Adiciona classe 'open' para animar o ícone
});
