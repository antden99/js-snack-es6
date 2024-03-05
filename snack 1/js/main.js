console.log("tutto funziona");


const listCars =[

    {
        marca : "Fiat",
        modello : "Panda",
        alimentazione : "Benzina"
    },

    {
        marca : "Audi",
        modello : "A-1",
        alimentazione :"Diesel"
    },
    {
        marca : "Ferrari",
        modello : "409",
        alimentazione : "Benzina"
    },

    {
        marca : "Mercedes",
        modello : "Classe E",
        alimentazione :"Elettrico"
    },
    {
        marca : "Fiat",
        modello : "500 X",
        alimentazione : "Metano"
    },

    {
        marca : "Tesla",
        modello : "Model-X",
        alimentazione :"Elettrico"
    },
    {
        marca : "Bugatti",
        modello : "1000",
        alimentazione : "Benzina"
    },

    {
        marca : "Audi",
        modello : "A-3",
        alimentazione :"Metano"
    },
    {
        marca : "Mercedes",
        modello : "C-Coupe",
        alimentazione : "Elettrico"
    },

    {
        marca : "Audi",
        modello : "A-5",
        alimentazione :"Diesel"
    },

];

listCars.forEach((Car,index,listCars) =>{

    console.log(`${Car.marca} con modello ${Car.modello} è una macchina alimentata a ${Car.alimentazione}`);  
})

const listBenzinaCars = listCars.filter((Car) => {

    return Car.alimentazione == "Benzina";
})

console.log(listBenzinaCars);

const listDieselCars = listCars.filter((Car) => {

    return Car.alimentazione == "Diesel";
})
console.log(listDieselCars);

const otherCars = listCars.filter((Car) => {

   return Car.alimentazione!== "Benzina" && Car.alimentazione!== "Diesel";
}) 
console.log(otherCars);
