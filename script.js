// ===================================================================================
// VERSÃO SIMPLIFICADA E ROBUSTA DO SLIDER
// Foco: Fazer os botões de clique funcionarem sem falhas.
// ===================================================================================

// Passo 1: Esperar o HTML carregar completamente antes de rodar o JavaScript.
// Isso evita que o script tente encontrar elementos que ainda não existem.
document.addEventListener('DOMContentLoaded', () => {

    // Passo 2: Selecionar todos os elementos essenciais.
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const container = document.querySelector('.container');
    const items = document.querySelectorAll('.list .item');
    const dots = document.querySelectorAll('.indicators ul li');
    const number = document.querySelector('.indicators .number');

    // Passo 3: Verificação rigorosa para garantir que todos os elementos foram encontrados.
    if (!prevBtn || !nextBtn || !container || items.length === 0) {
        console.error("ERRO CRÍTICO: Um ou mais elementos essenciais para o slider não foram encontrados no HTML. Verifique os IDs '#prev', '#next' e as classes '.container', '.list .item'.");
        return; // Para a execução do script se algo estiver faltando.
    }

    // Variáveis de controle do estado do slider
    let active = 0;
    const lastPosition = items.length - 1;

    // Função principal que atualiza a interface (qual slide está visível)
    const setSlider = () => {
        // Primeiro, remove a classe 'active' de qualquer item que a tenha.
        items.forEach(item => item.classList.remove('active'));

        // Depois, adiciona a classe 'active' apenas ao item correto.
        items[active].classList.add('active');

        // Atualiza os indicadores (pontos e número)
        if (dots.length > 0) {
            dots.forEach(dot => dot.classList.remove('active'));
            dots[active].classList.add('active');
        }
        if (number) {
            number.innerHTML = '0' + (active + 1);
        }
    };

    // Passo 4: Adicionar os eventos de clique usando 'addEventListener', que é mais moderno.
    nextBtn.addEventListener('click', () => {
        console.log("Botão NEXT clicado!");
        
        // Calcula a posição do próximo slide
        active = active === lastPosition ? 0 : active + 1;
        
        // Define a direção da animação e atualiza o slider
        container.style.setProperty('--calculation', 1);
        setSlider();
    });

    prevBtn.addEventListener('click', () => {
        console.log("Botão PREV clicado!");

        // Calcula a posição do slide anterior
        active = active === 0 ? lastPosition : active - 1;

        // Define a direção da animação e atualiza o slider
        container.style.setProperty('--calculation', -1);
        setSlider();
    });

    // Passo 5: Inicializa o slider para mostrar o primeiro item quando a página carrega.
    setSlider();
    console.log("Slider inicializado com sucesso. Pronto para cliques.");

});