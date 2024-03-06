console.log("it works");


const listSquadre = [
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Lazio",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Atalanta",
        puntiFatti: 0,
        falliSubiti: 0,
    },
]

//console.log(listSquadre);
const newListSquadre = []
listSquadre.forEach((squadra) => {

    squadra.puntiFatti = Math.floor((Math.random() * 100) + 1);
    squadra.falliSubiti = Math.floor((Math.random() * 100) + 1);

    const { nome } = squadra;
    const { falliSubiti } = squadra;

    const newObject = { nome, falliSubiti };
    //console.log(newObject);

    newListSquadre.push(newObject);
    const leftEl = document.querySelector(".left");
    leftEl.innerHTML += `<div class="El_left">${nome}</div>`;

    const rightEl = document.querySelector(".right");
    rightEl.innerHTML += `<div class="El_right">Falli subiti da questa squadra : ${falliSubiti}</div>`;
})

console.log(newListSquadre);


