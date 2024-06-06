function validateForm() {
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var isbn = document.getElementById('isbn').value;

    if (title === '' || author === '' || isbn === '') {
      alert('Por favor, preencha todos os campos.');
      return false;
    }
    return true;
  }