// Função para mostrar/ocultar a barra lateral
document.getElementById('menu_icon').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
    this.classList.toggle('open'); // Adiciona classe 'open' para animar o ícone
});

// Validação e envio do formulário
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simulação de autenticação (substitua por sua lógica real de autenticação)
    if (username === '123123' && password === '123123') {
        // Sucesso para usuário comum, redirecionar
        window.location.href = 'dashboard.html'; // Redirecionar para o painel do usuário
    } else if (username === '321321' && password === '321321') {
        // Sucesso para usuário administrador, redirecionar
        window.location.href = 'pagina-adm.html';
    } else {
        // Exibir mensagem de erro
        document.getElementById('error-message').style.display = 'block';
        return; // Evitar envio do formulário se a autenticação falhar
    }

    // Envio do formulário para API
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    fetch("https://reqres.in/api/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erro ao enviar formulário para API:', error));
});
