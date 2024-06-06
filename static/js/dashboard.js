document.getElementById('menu_icon').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
    this.classList.toggle('open'); // Adiciona classe 'open' para animar o ícone
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-cadastro').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que o formulário seja submetido normalmente
        
        // Criar um objeto FormData contendo os dados do formulário
        const formData = new FormData(this);
        
        // Fazer uma requisição POST para a rota de submissão com os dados do formulário
        fetch('/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log(data); // Mostrar a resposta do servidor no console
            // Se necessário, faça algo com a resposta do servidor aqui
        })
        .catch(error => {
            console.error('Erro ao enviar formulário:', error);
            // Tratar o erro aqui, se necessário
        });
    });
});
