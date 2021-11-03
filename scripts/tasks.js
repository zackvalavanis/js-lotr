// Task 1: Make middle earth
// To make middle earth, write a function called sayHello that returns the string "Hello Middle Earth!"

// write function below this line
function sayHello() {
  return "Hello Middle Earth!";
}

// testing
testSayHello();

// Task 2: Put hobbits on the map
// To add the hobbits, write a function called takeAttendance that returns the length of the 'hobbits' array (provided)

// write function below this line
function takeAttendance() {
  return hobbits.length;
}

// testing
testTakeAttendance();

// Task 3: Give Frodo the ring 
// To give Frodo the ring, write a function called keepSecret that takes in a string and returns that string in all lower case

// write function below this line
function keepSecret(string) {
  return string.toLowerCase();
}

// testing
testKeepSecret();

// try clicking on the ring to hear something earsplitting

// Task 4: Make friends
// To add some friends to the party, write a function called doubleParty that increases the partySize variable (provided) 4 times using the increment operator, and then returns the incremented partySize varible. 
// Example: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
var partySize = 4;

// write function below this line
function doubleParty() {
  partySize++;
  partySize++;
  partySize++;
  partySize++;
  return partySize;
}

// testing
testDoubleParty();

// click on strider to see a transformation

// Task 5: Forge the fellowship
// To move the hobbits to Rivendell and forge the fellowship, write a function called declareAllegiance that takes in a member (a string, such as 'Sam') and concatenates it into a string to return "I, Sam, am part of the fellowship!"

// write function below this line
function declareAllegiance(member) {
  return "I, " + member + ", am part of the fellowship!";
}

// testing
testDeclareAllegiance();

// Task 6: Fight the Balrog and blow the Horn of Gondor
// To fight the balrog, 

