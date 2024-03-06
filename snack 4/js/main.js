console.log("it works");

const listPeople = [
    {
        name: "Antonio Franco",
        surname: "De Nigris",
        age: 25
    },
    {
        name: "Francesco Franco",
        surname: "De Nigris",
        age: 25
    },
    {
        name: "Angelo Franco ",
        surname: "Carola",
        age: 12
    },
    {
        name: "Giovanni Franco",
        surname: "Bertolini",
        age: 10
    },
    {
        name: "Stefano Franco",
        surname: "Modica",
        age: 27
    },

]

console.log(listPeople);

const newList = listPeople.map((element) => {

    if (element.age >= 18) {
        return (element.name + " può guidare");
    } else {
        return (element.name + " non può guidare");
    }

})

console.log(newList);


const list2 = listPeople.map((element) => {

    const str = element.name.split(" ");
    console.log(str[0].toLocaleUpperCase() + " " + str[1].toLowerCase());
})

listPeople.forEach(element => {

    //console.log( element.age)
    console.log(element["surname"]);
});


const listPeoplPalla = [{
    nome: "pallina",
    grandezza: 10,
    costo: 1000,
},
{
    nome: "pallone",
    grandezza: 500,
    costo: 3000,
},

]

listPeoplPalla.forEach(palla => {
    
    for (const key in palla) {
        console.log(palla[key])
    }
    console.log(" ")
});




const arrayNumb = [1,2,3,4,5,6,];

const newArrayNumb = arrayNumb.filter((number) => {

    if(number % 2 === 0){
        return number;
    }

})

console.log(newArrayNumb);