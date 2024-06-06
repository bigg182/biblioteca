// No arquivo pagina-adm.js

document.addEventListener('DOMContentLoaded', function() {
    // Fazer uma solicitação AJAX para obter os dados dos livros
    fetch('/livros')
    .then(response => response.json())
    .then(data => {
        // Preencher a lista de livros com os dados obtidos
        const livrosList = document.getElementById('livros-list');
        data.forEach(livro => {
            const li = document.createElement('li');
            li.textContent = `${livro[1]} - ${livro[2]}`; // Aqui você pode ajustar conforme a estrutura da tabela de livros
            livrosList.appendChild(li);
        });
    })
    .catch(error => {
        console.error('Erro ao obter dados dos livros:', error);
        // Tratar o erro aqui, se necessário
    });
});
