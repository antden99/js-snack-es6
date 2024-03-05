console.log("it works");

const listPeople = [
    {
        name : "Antonio",
        surname : "De Nigris",
        age : 25
    },
    {
        name : "Francesco",
        surname : "De Nigris",
        age : 25
    },
    {
        name : "Angelo",
        surname : "Carola",
        age : 12
    },
    {
        name : "Giovanni",
        surname : "Bertolini",
        age : 10
    },
    {
        name : "Stefano",
        surname : "Modica",
        age : 27
    },

]

console.log(listPeople);

const newList = listPeople.map((element) => {

    if (element.age >= 18){
        return (element.name + " può guidare");
    } else {
        return (element.name + " non può guidare");
    }

})

console.log(newList);