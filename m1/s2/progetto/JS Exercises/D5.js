/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse();
console.log(pets);
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const primoPet = pets.shift();
pets.push(primoPet);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "12AB2" + i;
}
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const pandina = {
  brand: "Fiat",
  model: "Panda",
  color: "white",
  trims: ["xl", "vecchietto", "cappello"],
  licensePlate: "23ER12",
};
cars.push(pandina);
for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  const primaLettera = car.color.charAt(0);
  if (primaLettera === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let i = 0;
while (numericArray[i] <= 32) {
  console.log(numericArray[i]);
  i++;
}
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const alfabeto = "abcdefghilmnopqrstuvz";
const posizioneLettera = [];

for (let i = 0; i < charactersArray.length; i++) {
  const lettera = charactersArray[i];
  let posizione;

  switch (lettera) {
    case "a":
      posizione = alfabeto.indexOf(lettera) + 1;
      break;
    case "b":
      posizione = alfabeto.indexOf(lettera) + 1;
      break;
    case "c":
      posizione = alfabeto.indexOf(lettera) + 1;
      break;
    case "d":
      posizione = alfabeto.indexOf(lettera) + 1;
      break;
    case "e":
      posizione = alfabeto.indexOf(lettera) + 1;
      break;
    case "f":
      posizione = alfabeto.indexOf(lettera) + 1;
      break;
    case "g":
      posizione = alfabeto.indexOf(lettera) + 1;
      break;
    case "h":
      posizione = alfabeto.indexOf(lettera) + 1;
      break;
    case "i":
      posizione = alfabeto.indexOf(lettera) + 1;
      break;
    case "l":
      posizione = alfabeto.indexOf(lettera) + 1;
      break;
    case "m":
      posizione = alfabeto.indexOf(lettera) + 1;
      break;
    case "n":
      posizione = alfabeto.indexOf(lettera) + 1;
      break;
    case "o":
      posizione = alfabeto.indexOf(lettera) + 1;
      break;
    case "p":
      posizione = alfabeto.indexOf(lettera) + 1;
      break;
    case "q":
      posizione = alfabeto.indexOf(lettera) + 1;
      break;
    case "r":
      posizione = alfabeto.indexOf(lettera) + 1;
      break;
    case "s":
      posizione = alfabeto.indexOf(lettera) + 1;
      break;
    case "t":
      posizione = alfabeto.indexOf(lettera) + 1;
      break;
    case "u":
      posizione = alfabeto.indexOf(lettera) + 1;
      break;
    case "v":
      posizione = alfabeto.indexOf(lettera) + 1;
      break;
    case "z":
      posizione = alfabeto.indexOf(lettera) + 1;
      break;
  }

  posizioneLettera.push(posizione);
}

console.log(posizioneLettera);
