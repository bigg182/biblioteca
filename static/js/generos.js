document.addEventListener('DOMContentLoaded', function () {
    var genreButtons = document.querySelectorAll('.genreButton');
    var livrosContainer = document.getElementById('livrosContainer');
    var livrosLista = document.getElementById('livrosLista');

    // Objeto que mapeia os gêneros aos livros associados
    var livrosPorGenero = {
      "poemas": ["The Raven", "Ode on a Grecian Urn", "soneto de Fidelidade",],
      "infantojuvenil": ["O Pequeno Príncipe", "Harry Potter e a Pedra Filosofal", "A Bolsa Amarela"],
      "contos": ["A Metamorfose", "O Gato Preto", "A Hora e a Vez de Augusto Matraga"],
      "ficcao": ["1984", "Admirável Mundo Novo", "Fundação"],
      "classicos": ["Orgulho e Preconceito", "Crime e Castigo", "Dom Quixote"],
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

  document.getElementById('homeButton').addEventListener('click', function() {
    window.location.href = 'index.html'; 
});