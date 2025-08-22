// ============= ARQUIVO JAVASCRIPT =============

// A função document.addEventListener é usada para executar o código somente após o carregamento completo do conteúdo HTML da página.
document.addEventListener('DOMContentLoaded', () => {
    // Definindo variáveis que armazenam referências aos elementos HTML importantes.
    const prevBtn = document.getElementById('prev'); // Referência ao botão "anterior" usando o ID "prev"
    const nextBtn = document.getElementById('next'); // Referência ao botão "próximo" usando o ID "next"
    const container = document.querySelector('.container'); // Referência ao contêiner geral que contém os itens do slider
    const items = document.querySelectorAll('.list .item'); // Seleciona todos os itens dentro da lista, com a classe "item"
    
    // Verifica se os elementos necessários foram encontrados na página, se não, exibe um erro no console e retorna (interrompe a execução do script).
    if (!prevBtn || !nextBtn || items.length === 0) {
        console.error("ERRO: Botões ou itens do slider não encontrados.");
        return;
    }

    // Inicializa a variável "active" com o valor 0, indicando o primeiro item ativo (ou visível) na lista.
    let active = 0;
    const lastPosition = items.length - 1; // Calcula a última posição, baseado no número de itens

    // Função que atualiza o slider para exibir o item ativo e os indicadores correspondentes.
    const setSlider = () => {
        // Remove a classe "active" de todos os itens e a adiciona somente ao item ativo
        items.forEach(item => item.classList.remove('active'));
        items[active].classList.add('active');
        
        // Atualiza os indicadores, removendo a classe "active" de todos os dots e adicionando ao dot correspondente ao item ativo
        const dots = document.querySelectorAll('.indicators ul li');
        if (dots.length > 0) {
            dots.forEach(dot => dot.classList.remove('active'));
            dots[active].classList.add('active');
        }
        
        // Atualiza o número do indicador, mostrando o número do item ativo, como "01", "02", "03", etc.
        const number = document.querySelector('.indicators .number');
        if (number) {
            number.innerHTML = '0' + (active + 1); // Adiciona um "0" à frente do número do item ativo
        }
    };

    // Adiciona um evento de clique no botão "próximo", que avança para o próximo item do slider.
    nextBtn.addEventListener('click', () => {
        // Se o item ativo for o último, volta para o primeiro item (criação de loop)
        active = active === lastPosition ? 0 : active + 1;
        container.style.setProperty('--calculation', 1); // Muda a direção da animação (não implementada, mas pode ser usada no CSS)
        setSlider(); // Atualiza o slider para refletir a mudança
    });

    // Adiciona um evento de clique no botão "anterior", que retorna para o item anterior.
    prevBtn.addEventListener('click', () => {
        // Se o item ativo for o primeiro, vai para o último item (criação de loop)
        active = active === 0 ? lastPosition : active - 1;
        container.style.setProperty('--calculation', -1); // Muda a direção da animação (não implementada, mas pode ser usada no CSS)
        setSlider(); // Atualiza o slider para refletir a mudança
    });

    // Inicializa o slider definindo o primeiro item como ativo.
    setSlider();

    // Exibe uma mensagem no console indicando que o slider foi inicializado com sucesso.
    console.log("Slider final inicializado com sucesso.");
});
