    //Importando a biblioteca GSAP e seus plugins.
gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText)

ScrollSmoother.create({
    smooth: 1.5,
    effects: true
})

function animarPagina() {
//Animações Hero

gsap.from(".hero", {
    opacity: 0,
    duration: 1
})

gsap.from("picture:nth-child(2)", {
    y: 200,
    duration: 1
})

gsap.from("picture:nth-child(1)", {
    y: -200,
    duration: 1
})

//Animações Cards

gsap.from(".card", {
    opacity: 0,
    filter: "blur(10px)",
    stagger: 0.2,
    scrollTrigger: {  //Retardando a animação para quando o elemento estiver visível na tela.
        trigger: ".card",
        markers: false, //Marcação para ajuste (Coloque true)
        start: "0% 80%",
        end: "100% 70%",
        scrub: true
    }
})


//Animação seção Obrigado
gsap.from(".secaoObrigado ul li", {
    opacity: 0,
    x: 40,
    filter: "blur(10px)",
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".secaoObrigado ul",
        markers: false,
        end: "100% 70%",
        start: "0% 80%",
        scrub: true //Usado para sincronizar a animação com o scroll, ou seja, a animação acontece conforme o usuário rola a página.
    }
})

//Animação Footer
gsap.from("footer", {
    y: "-30%",
    immediateRender: false, //Evita que a animação seja renderizada imediatamente, permitindo que o ScrollTrigger controle quando a animação deve começar.
    scrollTrigger: {
        trigger: "footer",
        scrub: true,
        invalidateOnRefresh: true, //Recalcula as posições dos gatilhos e elementos quando a página é atualizada ou redimensionada, garantindo que as animações continuem funcionando corretamente mesmo após mudanças na estrutura da página.
        end: "100% 100%"
    }
})

//Animação Letras
//Selecione todos os Elementos da sua pagina q tem a classe .textoSplit
const grupoTextoSplit = document.querySelectorAll(".textoSplit");


//Anime de forma independente
grupoTextoSplit.forEach(textoUnicoSplit => {
    const split = SplitText.create(textoUnicoSplit, {
        type: "lines, words, chars",
        mark:"lines"
    });

    gsap.from(split.chars, {
        y: 40,
        opacity: 0,
        duration: .3,
        stagger:0.03,
        scrollTrigger: {
            trigger: textoUnicoSplit
        }
    });
});

}
//Preload -> Criar Timeline

const tl = gsap.timeline({
    onComplete() {
        animarPagina();
        gsap.to("#preload", {
            opacity: 0,
            display: "none"
        });
    }
});

tl.to ("#preload path", {
    duration: 1,
    strokeDashoffset: 0,
})

tl.to ("#preload path", {
    fill: "rgb(168, 19, 19)",
    duration: .5,
    strokeDashoffset: 0,
})
