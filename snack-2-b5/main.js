console.log("tutto ok funziona");


const listZucc = [
    {
        varietà: "zucchina 1",
        peso: 10,
        lunghezza: 10
    },
     {
        varietà: "zucchina 2",
        peso: 11,
        lunghezza: 20
    },
     {
        varietà: "zucchina 3",
        peso: 15,
        lunghezza: 8
    },
     {
        varietà: "zucchina 4",
        peso: 20,
        lunghezza: 5
    },
     {
        varietà: "zucchina 5",
        peso: 100,
        lunghezza: 25
    },
     {
        varietà: "zucchina 6",
        peso: 8,
        lunghezza: 30
    }, 
    {
        varietà: "zucchina 7",
        peso: 6,
        lunghezza: 31
    }, 
    {
        varietà: "zucchina 8",
        peso: 70,
        lunghezza: 5
    }, 
    {
        varietà: "zucchina 9",
        peso: 3,
        lunghezza: 8
    }, 
    {
        varietà: "zucchina 10",
        peso: 20,
        lunghezza: 16
    },   
]

const listZuccOver15 = []
const listZuccUnder15 = listZucc.filter((zucchina) => {

    if (zucchina.lunghezza < 15){
        return zucchina;
    } else {
         listZuccOver15.push(zucchina);
    }

})

console.log(listZuccUnder15);
console.log(listZuccOver15);

let sum = 0;

listZuccOver15.forEach((zucchina) => {

    sum += zucchina.peso
})
console.log(`il peso delle zucchine più lunghe di 15cm è uguale a: ${sum}`);

sum = 0;

listZuccUnder15.forEach((zucchina) => {

    sum += zucchina.peso
})
console.log(`il peso delle zucchine lunghe fino a 15cm è uguale a: ${sum}`);
