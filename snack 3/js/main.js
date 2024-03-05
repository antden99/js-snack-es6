console.log("ok");

const animali = [
    {
        nome: "Cane",
        famiglia: "Canidi",
        classe: "Mammiferi"
    },
    {
        nome: "Gatto",
        famiglia: "Felidi",
        classe: "Mammiferi"
    },
    {
        nome: "Elefante",
        famiglia: "Elefantidi",
        classe: "Mammiferi"
    },
    {
        nome: "Leone",
        famiglia: "Felidi",
        classe: "Mammiferi"
    },
    {
        nome: "Squalo",
        famiglia: "Squaliformi",
        classe: "Pesci"
    },
    {
        nome: "Acquila",
        famiglia: "Accipitridi",
        classe: "Uccelli"
    }
];


const listMammiferi = animali.filter((element) => {

    return element.classe == "Mammiferi";

})

console.log(listMammiferi);