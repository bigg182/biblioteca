document.addEventListener('DOMContentLoaded', function () {
    var genreButtons = document.querySelectorAll('.genreButton');
    var livrosContainer = document.getElementById('livrosContainer');
    var livrosLista = document.getElementById('livrosLista');

    // Objeto que mapeia os gêneros aos livros associados
    var livrosPorGenero = {
      "poemas": ["Poema 1", "Poema 2", "Poema 3"],
      "infantojuvenil": ["Livro Infantil 1", "Livro Infantil 2", "Livro Infantil 3"],
      "contos": ["Conto 1", "Conto 2", "Conto 3"],
      "ficcao": ["Ficção 1", "Ficção 2", "Ficção 3"],
      "classicos": ["Clássico 1", "Clássico 2", "Clássico 3"]
    };

    genreButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var genre = this.id;
        mostrarLivros(genre);
      });
    });

    function mostrarLivros(genre) {
      var livros = livrosPorGenero[genre];

      livrosLista.innerHTML = '';

      livros.forEach(function(livro) {
        var li = document.createElement('li');
        li.textContent = livro;
        livrosLista.appendChild(li);
      });

      livrosContainer.style.display = 'block';
    }
  });