// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


//1 Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// var studente = {
//   "nome" : 'Federica',
//   "cognome": 'Cortese',
//   "eta": '26',
// };
//
// for (var key in studente){
//   console.log(studente[key]);
// }


//2 Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
var studenti =
[
 {
   "nome" : 'Federica',
   "cognome": 'Cortese',
 },
 {
   "nome" : 'Avril',
   "cognome": 'Lavigne',
 },
 {
   "nome" : 'Miley',
   "cognome": 'Cyrus',
 },
 {
   "nome" : 'Lady',
   "cognome": 'Gaga',
 },
];

for (var i = 0; i < studenti.length; i++) {
  // console.log(studenti[i]);
  for (var key in studenti[i]) {
    var classe = studenti[i]
    console.log([key] + ": " + classe[key]);
  }
}
