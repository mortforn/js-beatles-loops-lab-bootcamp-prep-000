// add solution here
// const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
// const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i = 0; i < 4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;  
}

// let facts = [
//   "He was the last Beatle to learn to drive",
//   "He was never a vegetarian",
//   "He was a choir boy and boy scout",
//   "He hated the sound of his own voice"
// ];

function johnLennonFacts(facts) {
  var n = 0;
  while (n < facts.length) {
    facts[n] = facts[n] + "!!!";
    n++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    //increment the number passed in as a parameter
    array.push('I love the Beatles!');
    n++;
    } while (n < 15);
    return array;
}

