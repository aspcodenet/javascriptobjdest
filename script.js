// function importantList(iWant, iDontWant, iNeed, iDontNeed) {
//      return `${iWant} is what I want!  Dont give me: ${iDontWant} . Sadly I need  ${iNeed}`;
// }

// const txt = importantList("PS5", "strumpor", "kaffe", "dsdsad") // 17 olika parametrar

// function importantList(list) {
//     // 1000 rader kod
//     //
//      return `${list.iWant} is what I want!  Dont give me: ${list.iDontWant} . Sadly I need  ${list.iNeed}`;
// }



function importantList({iWant,iDontWant,iNeed}) {
    // 1000 rader kod
    //
     return `${iWant} is what I want!  Dont give me: ${iDontWant} . Sadly I need  ${iNeed}`;
}




//let o = ;
const txt = importantList({
    iWant:'PS5',
    iDontWant:'Kläder',
    iNeed:'Sockor',
}) 


//  objekt med properties ->  separata variabler  SAME NAMN
let o = {
    iWant:'PS5',
    iDontWant:'Kläder',
    iNeed:'Sockor',
};
// const iWant = o.iWant
// const iDontWant = o.iDontWant
// const iNeed = o.iNeed;
const {iWant,iDontWant,iNeed} = o
console.log(iWant)


function test() {
    return [52,"Stefan", "Hej"]
}


//const a = test()
// let age = a[0]
// let namn = a[1]
let [age,namn,frase] = test()
console.log("Ålder " + age)
console.log("Namn  " + namn)









