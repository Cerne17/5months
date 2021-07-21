const btnEl = document.getElementById('btn');

textos = [
    "Meu amor, eu preciso te falar uma coisa",
    "Hoje, dia 21/07/21, completamos 5 meses",
    "Ou 23 semanas (mais ou menos)",
    "Ou ainda, 150 dias",
    "Tem gente que até falaria em horas",
    "Nesse caso são mais ou menos: 3600",
    "216000 minutos tb...",
    "Ainda tem como colocar 12960000 segundos",
    "E assim por diante...",
    "Acho que já deu pra pegar a ideia neh :)",
    "Nessa altura do campeonato vc deve estar com medo do q vem por ai",
    "Mas relaxa",
    "Não é nada ruim não kakakakakakka",
    "Fiz esse suspense todo de sacanagem mesmo",
    "Eu fiz esse sitezinho aqui de ultima hora então me perdoa se n estiver lá essas coisas...",
    "Mas juro que foi de 🤍",
    "Eu só queria comemorar nossos 5 meses de um jeito diferente 🥳🎉🥳🎉",
    "Afinal de contas, tinha muita gnt torcendo contra nós dois e que diziam que n ia longe... Pelo menos do meu lado 🖐😞",
    "A gnt ta aqui pra esfregar na cara deles que estavam errados 😳😳",
    "Favela VENCEU!! 😎🌞",
    "E vão continuar errados",
    "PRA SEMPREEEE",
    "Neh dona RENAA_RAMOS???? 😜😉",
    "ENFIMMMMMM",
    "Vamo Lá",
    "Muito obrigado, meu amor",
    "Amor da Minha vida",
    "de 2021 pro resto da vida",
    "uma das únicas coisas boas que essa pandemia me trouxe kakakakkaka",
    "MAS TB",
    "A MELHOR COISA DA MINHA VIDAAAAA!!!!",
    "By Faaaaaaaar",
    "Muito obrigado pelas borboletas na barriga (quando estou e n estou c vc, inclusive enquanto escrevo esse textinho hihihihi)",
    "Muuuuito obrigado pelas risadas fora de hora",
    "Muito obrigado por colocar um sorrisão na minha cara até nos dias mais dificeis",
    "Muito obrigado por me aturar nos meus dias mais complicados",
    "Muito obrigado por me amar e aceitar do jeitinho que eu sou, sem nunca cobrar nada que eu n conseguisse fazer por vc",
    "Muuito obrigado por despertar o melhor em mim",
    "Alem disso tudo",
    "Muito obrigado por entrar em todas minhas palhaçadas, desde a nossa primeira call juntos, lembra?? 😂🤣😅😅😛",
    "Muito obrigado por cada momento mais fofinho que tivemos juntos 🥰🥰🥰",
    "Muito obrigado tb por cada momento nem tão fofinho assim hehehehe... 🙈🙈🙈🙈🙈",
    "B A S I C A M E N T E",
    "MUITO MAIS QUE OBRIGADO POR VC TER ENTRADO NA MINHA VIDA!!!",
    "Muito obrigado por ser essa pessoa INCRÍVEEEEL q eu e muuuuitos outros amamos de coração",
    "EU TE AMOOOOOO 🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍",
    "Renata de Araujo Ramos",
    "E vai ser sempre assim",
    "Eu e Vc 💏",
    "E eventualmente...",
    "uns cabeçudinhos... 👨‍👩‍👧‍👦",
    "Eu e vc, desde 2021, até o fim",
    "Mais uma vez: EU TE AMOOOOOOOOOOOOOOO 🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍",
    "FELIZ CINCO MESESSSSSS!!!! 🥳🎉🥳🎉🤍🤍🤍🥳🎉🥳🎉🤍🤍🤍🥳🎉🥳🎉🤍🤍🤍",
    "Espero q vc tenha gostado e n parado no meio",
    "n ta do jeitinho q eu queria, mas vou melhorando com o tempo 😉"
]

function clearText(){
    const textoEl = document.querySelector('h1');
    textoEl.innerText= ''
}

function updateText(index) {
    const textoEl = document.querySelector('h1');
    textoEl.innerText= textos[index]
}

// function updateBgColor() {
//     function makeRandomColor(){
//         var c = '';
//         while (c.length < 7) {
//           c += (Math.random()).toString(16).substr(-6).substr(-1)
//         }
//         return '#' + c;
//       }
//     let randomColor = makeRandomColor();
//     document.body.style.backgroundColor = randomColor;
// }

// function updateEggColor(){
//     let egg = btnEl;

// }

let i = 0

btnEl.addEventListener('click', () => {
    const textoEl = document.querySelector('h1');
    i++;
    //updateBgColor();
    //updateEggColor();
    clearText(textoEl);
    updateText(i);
})
