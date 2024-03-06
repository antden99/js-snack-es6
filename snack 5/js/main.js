console.log("Funziona");


const bikes = [
    {
        nome: "Bike 1",
        peso: 10,
    },
    {
        nome: "Bike 2",
        peso: 15,
    },
    {
        nome: "Bike 3",
        peso: 2,
    },
    {
        nome: "Bike 4",
        peso: 30,
    },
    {
        nome: "Bike 5",
        peso: 10,
    },
    {
        nome: "Bike 6",
        peso: 10,
    },
]
console.log(bikes);

let minPeso = bikes[0].peso;
//console.log(bikes[0].peso);

let count = 0

bikes.forEach((bike) => {
    const { peso } = bike;

    if (peso < minPeso) {
        minPeso = peso;
    }
    console.log(minPeso)
})

bikes.forEach((bike) => {
    const {peso} = bike;
    if (minPeso == peso) {
        console.log(`la bici ${bike.nome} ha il peso minore di ${minPeso} kg`)
        const h1El = document.querySelector(".stampa");
        h1El.innerHTML = `la bici ${bike.nome} ha il peso minore di ${minPeso} kg`
    }

})


