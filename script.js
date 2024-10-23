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


const movies = [

    { title: "The Fast and the Furious", year: 2001, rating: 4.2  },
    
    { title: "Fast & Furious 6", year: 2013, rating: 5.0 },
    
    { title: "Fast & Furious 7", year: 2015, rating: 3 },
    
    { title: "Fast & Furious 9", year: 2021, rating: 5 },
    
    ];

// LINQ

    // ta fram alla filmer som har minst 4.5 i betyg
    const braMovies = movies.filter(m=>m.rating > 4.5)
    console.log(braMovies)

    // ta fram title (ska heta namn) och age (2024-year) för  alla filmer som har minst 4 i betyg
    const braMovies2 = movies.filter(m=>m.rating > 4).map(m=>{   return { namn:m.title, age:2024-m.year }      })
    console.log(braMovies2)











