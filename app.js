let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let com = ('.com');
let domain = ' ';
let space = ' ';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
// console.log(pronoun[getRandomInt(pronoun.length)]);
// console.log(adj[getRandomInt(adj.length)]);
// console.log(noun[getRandomInt(noun.length)]);
// console.log(com)

    
for (let i = 0; i < 5; i++){

    for (let p = 0; p < pronoun.length-1; p++){
        domain = domain.concat(pronoun[getRandomInt(2)]);
        }
    for (let f = 0; f < adj.length-1; f++){
        domain = domain.concat(adj[getRandomInt(2)]);
         }
    for (let n = 0; n < noun.length-1; n++){
        domain = domain.concat(noun[getRandomInt(2)])
    }
    domain = domain.concat(com);
    domain = domain.concat(space);
}
    console.log(domain);
    

//Goal: 
//thegreatjogger.com
// thegreatracoon.com
// ourgreatjogger.com
// ourgreatracoon.com
// thebigjogger.com
// thebigracoon.com
// ourbigjogger.com
// ourbigracoon.com