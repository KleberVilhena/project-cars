// ============= ARQUIVO JAVASCRIPT =============
document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const container = document.querySelector('.container');
    const items = document.querySelectorAll('.list .item');
    
    if (!prevBtn || !nextBtn || items.length === 0) {
        console.error("ERRO: Botões ou itens do slider não encontrados.");
        return;
    }

    let active = 0;
    const lastPosition = items.length - 1;

    const setSlider = () => {
        items.forEach(item => item.classList.remove('active'));
        items[active].classList.add('active');
        
        const dots = document.querySelectorAll('.indicators ul li');
        if (dots.length > 0) {
            dots.forEach(dot => dot.classList.remove('active'));
            dots[active].classList.add('active');
        }
        
        const number = document.querySelector('.indicators .number');
        if (number) {
            number.innerHTML = '0' + (active + 1);
        }
    };

    nextBtn.addEventListener('click', () => {
        active = active === lastPosition ? 0 : active + 1;
        container.style.setProperty('--calculation', 1);
        setSlider();
    });

    prevBtn.addEventListener('click', () => {
        active = active === 0 ? lastPosition : active - 1;
        container.style.setProperty('--calculation', -1);
        setSlider();
    });

    setSlider();
    console.log("Slider final inicializado com sucesso.");
});