 // Função para mostrar/ocultar a barra lateral
 document.getElementById('menu_icon').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
    this.classList.toggle('open'); // Adiciona classe 'open' para animar o ícone
});

// Validação do formulário de login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simulação de autenticação (substitua por sua lógica real de autenticação)
    if (username === 'usuario' && password === 'senha') {
        // Sucesso, redirecionar ou mostrar mensagem de sucesso
        window.location.href = 'dashboard.html'; // Redirecionar para o painel do usuário
    } else {
        // Exibir mensagem de erro
        document.getElementById('error-message').style.display = 'block';
    }
});

