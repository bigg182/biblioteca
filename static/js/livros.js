const books = [
  { title: 'O Nome do Vento', author: 'Patrick Rothfuss', isbn: '978-8578270698' },
  { title: 'A Guerra dos Tronos', author: 'George R. R. Martin', isbn: '978-8556510051' },
  { title: 'A iliada', author: 'Homero', isbn: '9780405114137'},
  { title: 'A odisséia', author: 'Homero', isbn: '9781509431168'},
  // Adicione mais livros aqui
];

function searchBooks() {
  const query = document.getElementById('searchQuery').value.toLowerCase();
  const results = books.filter(book => 
      book.title.toLowerCase().includes(query) || 
      book.author.toLowerCase().includes(query) || 
      book.isbn.includes(query)
  );

  displayResults(results);
  return false;
}

function displayResults(results) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  if (results.length === 0) {
      resultsDiv.innerHTML = '<p>Nenhum livro encontrado.</p>';
      return;
  }

  const ul = document.createElement('ul');
  results.forEach(book => {
      const li = document.createElement('li');
      li.textContent = `${book.title} - ${book.author} (ISBN: ${book.isbn})`;
      ul.appendChild(li);
  });
  resultsDiv.appendChild(ul);
}
