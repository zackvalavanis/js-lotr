console.log("Linked.");

var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var friends = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');

function createLandArticle(landName, parentElement) {
  var land = document.createElement('article');
  land.innerHTML = '<h1>' + landName + '</h1>';
  parentElement.appendChild(land);
}

function makeMiddleEarth() {
  // creates a section tag with an id of middle-earth
  var middleEarth = document.createElement('section');

  // Loops through the lands array and calls the createLandArticle function for each land.
  for(var i = 0, len = lands.length; i < len; i++){
    createLandArticle(lands[i], middleEarth);
  }

  // appends middle-earth to the document body
  body.appendChild(middleEarth);
}

// makeMiddleEarth();

// creates a function to target each land
function theShire() {
  return body.querySelectorAll('article')[0];
}
function rivendell() {
  return body.querySelectorAll('article')[1];
}
function mordor() {
  return body.querySelectorAll('article')[2];
}

// Part 2

function giveHobbitClass(hobbitName, parentElement) {
  var hobbit = document.createElement('li');
  hobbit.className = 'hobbit';
  hobbit.innerText = hobbitName;
  parentElement.appendChild(hobbit);
}

function makeHobbits() {
  // creates an unordered list for hobbits
  var hobbitList = document.createElement('ul');

  // Loops through the hobbits array and call the giveHobbitClass function for each hobbit. 
  hobbits.forEach(hobbit => {
    giveHobbitClass(hobbit, hobbitList);
  });

  // appends the hobbitList to the shire
  theShire().appendChild(hobbitList);
}
// makeHobbits();

// creates a function to return frodo
function frodo() {
  return body.querySelectorAll('li')[0];
}

// Part 3

function keepItSecretKeepItSafe() {
  // creates a div for 'the-ring'
  var theRing = document.createElement('div');
  theRing.setAttribute('id', 'the-ring');
  // give the div a class of 'magic-imbued-jewelry'
  theRing.setAttribute('class', 'magic-imbued-jewelry');
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  theRing.addEventListener('click', nazgulScreech);
  // add the ring as a child of Frodo
  frodo().appendChild(theRing);
}

// keepItSecretKeepItSafe();


// Part 4

function addFriendToParty(friendName, parentElement) {
  var friend = document.createElement('li');
  friend.textContent = friendName;
  parentElement.appendChild(friend);
}


function makefriends() {
  // creates an aside tag
  var aside = document.createElement('aside');
  // creates friendList
  var friendList = document.createElement('ul');
  // Loops through the friends array and call the addFriendToParty function for each friend.
  friends.forEach(friend => {
    addFriendToParty(friend, friendList);
  });
  // insert your aside as a child element of rivendell
  aside.appendChild(friendList);
  rivendell().appendChild(aside);
}

// makefriends();

// creates function to target strider
function strider() {
  return rivendell().querySelectorAll('li')[3];
}

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  strider().textContent = 'Aragorn';
}

// when clicked strider becomes Aragorn
function clickableStrider() {
  strider().addEventListener('click', beautifulStranger);
}

// Part 6

// creates a target for the hobbits
function returnHobbits() {
  return theShire().querySelector('ul');
}

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  rivendell().appendChild(returnHobbits());
}
// leaveTheShire();


// Part 7
// create a target for the fellowship
function fellowshipMembers() {
  return rivendell().querySelectorAll('li');
}

function addToFellowship(member, parentElement) {
  parentElement.appendChild(member);
  // after each character is added, alert that they have joined the party
  // alert(member.textContent + ' has joined the fellowship!');
}

function forgeTheFellowShip() {
  // creates a new div called 'the-fellowship' within rivendell
  var theFellowship = document.createElement('div');
  theFellowship.setAttribute('id', 'the-fellowship');
  // add each hobbit and friend one at a time to 'the-fellowship'
  fellowshipMembers().forEach(member => {
    addToFellowship(member, theFellowship);
  });
  rivendell().appendChild(theFellowship);
}
// forgeTheFellowShip();

// Part 8
// creates function to target gandalf
function gandalf() {
  return fellowshipMembers()[0];
}

function theBalrog() {
  // changes the 'Gandalf' textNode to 'Gandalf the White'
  gandalf().textContent = 'Gandalf the White';
}
// theBalrog();

// Part 9
// creates a function to target boromir
function boromir() {
  return fellowshipMembers()[4];
}

function hornOfGondor() {
  alert('the horn of gondor has blown');
  // pops up an alert that the horn of gondor has been blown
  boromir().style.textDecoration = 'line-through';
  // Boromir's been killed by the Uruk-hai!
  // Removes Boromir from the Fellowship
  // boromir.parentNode.removeChild(boromir);
}
// hornOfGondor();

// Part 10
// creates a function to target sam
function sam() {
  return fellowshipMembers()[0];
}

function itsDangerousToGoAlone(){
  // takes Frodo and Sam out of the fellowship and moves them to Mordor
  mordor().appendChild(frodo());
  mordor().appendChild(sam());
  // adds a div with an id of 'mount-doom' to Mordor
  var mountDoom = document.createElement('div');
  mountDoom.setAttribute('id', 'mount-doom');
  mordor().appendChild(mountDoom);
}
// itsDangerousToGoAlone();


// Part 11
// create variables for gollum and the ring
var gollum, theRing;

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  gollum = document.createElement('div');
  gollum.setAttribute('id', 'gollum');
  // Remove the ring from Frodo and give it to Gollum
  theRing = frodo().querySelector('#the-ring');
  gollum.appendChild(theRing);
  // Move Gollum into Mount Doom
  var mountDoom = mordor().querySelector('#mount-doom');
  mountDoom.appendChild(gollum);
}
// weWantsIt();

// Part 12

function thereAndBackAgain() {
  // removes Gollum and the Ring from the document
  gollum.parentElement.removeChild(gollum);
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
// thereAndBackAgain();



// TESTING
function testSayHello(){
  if(typeof sayHello === "function"){
    if (sayHello() === "Hello Middle Earth!") {
      makeMiddleEarth();
    } else {
      console.log("Your sayHello function is returning the wrong value");
    }
  } else {
    console.log("You need a sayHello function!");
  }
}

function testTakeAttendance() {
  if(typeof takeAttendance === "function"){
    if (takeAttendance() === 4) {
      makeHobbits();
    } else {
      console.log("Your takeAttendance function is returning the wrong value");
    }
  } else {
    console.log("You need a takeAttendance function!");
  }
}

function testKeepSecret() {
  if(typeof keepSecret === "function"){
    if (keepSecret("FRODO") === "frodo" && keepSecret("THE RING") === "the ring") {
      keepItSecretKeepItSafe();
    } else {
      console.log("Your keepSecret function is returning the wrong value");
    }
  } else {
    console.log("You need a keepSecret function!");
  }
}

function testDoubleParty() {
  if(typeof doubleParty === "function"){
    if (doubleParty() === 8) {
      makefriends();
      clickableStrider();
    } else {
      console.log("Your doubleParty function is returning the wrong value");
    }
  } else {
    console.log("You need a doubleParty function!");
  }
}

function testDeclareAllegiance() {
  if(typeof declareAllegiance === "function"){
    if (declareAllegiance('Frodo') === "I, Frodo, am part of the fellowship!") {
      leaveTheShire();
      forgeTheFellowShip();
    } else {
      console.log("Your declareAllegiance function is returning the wrong value");
    }
  } else {
    console.log("You need a declareAllegiance function!");
  }
}