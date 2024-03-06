console.log("tutto ok");

const listZucc = [
    {
        varietà: "zucchina 1",
        peso: 10,
        lunghezza: "10cm"
    },
     {
        varietà: "zucchina 2",
        peso: 11,
        lunghezza: "10cm"
    },
     {
        varietà: "zucchina 3",
        peso: 15,
        lunghezza: "10cm"
    },
     {
        varietà: "zucchina 4",
        peso: 20,
        lunghezza: "10cm"
    },
     {
        varietà: "zucchina 5",
        peso: 100,
        lunghezza: "10cm"
    },
     {
        varietà: "zucchina 6",
        peso: 8,
        lunghezza: "10cm"
    }, 
    {
        varietà: "zucchina 7",
        peso: 6,
        lunghezza: "10cm"
    }, 
    {
        varietà: "zucchina 8",
        peso: 70,
        lunghezza: "10cm"
    }, 
    {
        varietà: "zucchina 9",
        peso: 3,
        lunghezza: "10cm"
    }, 
    {
        varietà: "zucchina 10",
        peso: 20,
        lunghezza: "10cm"
    },   
]

console.log(listZucc);

let sum = 0;

listZucc.forEach((zucchina) =>{
    console.log(zucchina);
    sum = sum + zucchina.peso;
})

console.log(sum);


const palla ={
    grandezza:10,
    costo : 2,
}

console.log(palla);

const newPalla = {...palla, creatore:"Luca"};
console.log(newPalla);