const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Verifica o tema salvo no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
}

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');  // Alterna a classe para dark-mode

    // Salva o tema atual no localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.setItem('theme', ''); // Limpa o tema para o padrão claro
    }
});
