console.log("Funziona");

const listStrings = ["pippo", "PLUTO", "Paperino"];

const newList = listStrings.map((string) => {

    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
})

console.log(newList);