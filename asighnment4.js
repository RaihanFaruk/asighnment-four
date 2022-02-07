                        // basic-js-asighnment 

// problem [1]  ana to vori;

function anaToVori(ana) {
  if (typeof ana != 'number') {
      return 'enter valid number'
  }
  else if (ana < 0) {
     return 'enter more then zero' 
  }     
 var vori = ana / 16;
 return vori;
}
console.log(anaToVori(64));

// [2] problem pandaCost

function pandaCost(singara, somouca, jilapi) {

  if (typeof singara != 'number' || typeof somouca != 'number' || typeof jilapi != 'number') {
    return 'Not a valid quantity';
  }
  if (singara <= 0 || somouca <= 0 || jilapi <= 0 ) {
    return 'not a Valid Number';
  } else {
    // solving
    const singaraDam = 7;
    const somucaDam = 10;
    const jilapiDam = 15;

    const sobSinGararDam = singara * singaraDam;
    const sobsamucarDam = somouca * singaraDam;
    const sobJilapirDam = jilapi * singaraDam;

    const allFastFoodPrice = sobSinGararDam + sobsamucarDam + sobJilapirDam;

    return allFastFoodPrice;
  }
}
const allFastFoodPrice = pandaCost(2, 3, 4);
console.log(allFastFoodPrice);



// [3] problem picnicBudget

function picnicBudget(totalPerson) {
  if (typeof totalPerson != 'number') {
    return 'enter valid number'
}
else if (totalPerson < 0) {
   return 'enter more then zero' 
} 
  let spend = 0;
  if (totalPerson <= 100) {
    costing = spending + totalPerson * 5000;
  } else if (totalPerson <= 200) {
    const firstSpending = 100 * 5000;
    const dueSpending = (totalPerson - 100) * 4000;
    costing = firstSpending + dueSpending;
  } else if (totalPerson > 200) {
    const firstSpending = 100 * 5000;
    const secondSpending = 100 * 4000;
    let dueCosting = (totalPerson - 200) * 3000;
    costing = firstSpending + secondSpending + dueCosting;
  }
  return costing;
}
const allPerson = picnicBudget(250);
console.log(allPerson);

// [4] problem odd Friend 

var friendsName = [ "jiddan", "samiul","hasib","nurul","mahbubur",
];


function oddFriend(array) {
  if (typeof array === 'number'){
    return 'enter your friend name'
  }
      
  const friendList = [];
  for (const element of array) {
    if (element.length % 2 != 0) {
      friendList.push(element);
      break;
    }
  }
  return friendList;
}
console.log(oddFriend(friendsName));

/////////end