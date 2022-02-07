// const myArray = 'i love you'; // ['hello',2,3,4,5, 'kola'];

// function array() {
//     for(const a of myArray) {
//         console.log(a)  
//      }
       
      

// }
//  var any = array();
// console.log(any);
//anaToVori
 //anaToVori
function anaToVori(ana) {

    if (typeof quantity != 'number') {
        return "Please enter a valid Quantity";
    }
    else if ( quantity < 0
    )
        return "Please enter a valid quantity";

    var vori = ana / 16;
    return vori;

}


console.log(anaToVori(4));