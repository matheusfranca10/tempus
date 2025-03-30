// Função para adicionar a classe 'active' ao link correto com base na URL atual
function setActiveLink() {
    const links = document.querySelectorAll('nav a'); // Seleciona todos os links do menu
    const currentURL = window.location.pathname; // Obtém o caminho da URL (sem o domínio)

    links.forEach(link => {
        // Verifica se o link corresponde ao caminho da URL
        if (link.pathname === currentURL) {
            link.classList.add('active'); // Adiciona a classe 'active'
        } else {
            link.classList.remove('active'); // Remove a classe 'active' dos outros links
        }
    });
}

// Alterna o menu (para dispositivos móveis)
function menuShow() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Executa a função ao carregar a página
window.addEventListener('DOMContentLoaded', setActiveLink);




// Função para mover as informações de contato para o final da página
function moveContato() {
    const informacoesContato = document.querySelector('.informacoes-contato');
    const main = document.querySelector('main');
    const esquerda = document.querySelector('.esquerda');
    
    if (window.innerWidth <= 992) {
        // Mover a div .informacoes-contato para o final do main
        if (informacoesContato.parentElement !== main) {
            main.appendChild(informacoesContato);
        }
    } else {
        // Mover a div .informacoes-contato de volta para dentro de .esquerda
        if (informacoesContato.parentElement !== esquerda) {
            esquerda.appendChild(informacoesContato);
        }
    }
}

// Chama a função para aplicar o comportamento inicialmente e a cada resize
window.addEventListener('load', moveContato); // Quando a página carrega
window.addEventListener('resize', moveContato); // Quando o tamanho da janela muda

