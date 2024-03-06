console.log("it works");


const listSquadre = [
    {
        nome: "inter",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "juventus",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "milan",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "roma",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "lazio",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "atalanta",
        puntiFatti: 0,
        falliSubiti: 0,
    },
]

//console.log(listSquadre);
const newListSquadre = []
listSquadre.forEach((squadra) => {

  squadra.puntiFatti= Math.floor((Math.random() * 100) + 1);
  squadra.falliSubiti= Math.floor((Math.random() * 100) + 1);

  const {nome} = squadra;
  const {falliSubiti} = squadra;

  const newObject = {nome,falliSubiti};
  //console.log(newObject);

    newListSquadre.push(newObject);
})

console.log(newListSquadre);


