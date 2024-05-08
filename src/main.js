document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY

        if (posicaoAtual < alturaHero) {
            ocultarElementosHeader()
        } else {
            exibirElementosHeader()
        }
    })

    // seção de atrações, programação das abas
    for (let i = 0; i < buttons.length; i++ ) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondetodasAbas();
            aba.classList.add('shows__list--is-active');
            removeButtonActive()
            botao.target.classList.add('shows__tabs__button--is-active')
            
        })
    }

    //seção FAQ
    for (let i = 0; i < questions.length; i++ ) {
        questions[i].addEventListener('click', abreOuFechaResposta)
    }
})

function ocultarElementosHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibirElementosHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe)
}

function escondetodasAbas() {
    const tabscontainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabscontainer.length; i++ ) {
        tabscontainer[i].classList.remove('shows__list--is-active');
    }
}
function removeButtonActive() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++ ) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}