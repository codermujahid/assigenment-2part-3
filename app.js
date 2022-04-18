// let golap = true ;

// let joynal = golap == false ? 'tumoi hashi muke kota bolba' : 'tumi feerao takabana';

// console.log(joynal); 


//bazar mot
// ---------------

// let alo = prompt('Alo');
// let potol = prompt('potol');
// let lao = prompt('lao');
// let kumra = prompt('kumra');

// let mot = +alo + +potol + +lao + +kumra;

// console.log(`
//     Alo          = ${alo}
//     Ptotl        = ${potol}
//     Lao          = ${lao}
//     Kumra        = ${kumra}
// -----------------------------
// Sorbo mokt bazar = ${ mot }


//  `); 



// dolor currencee to bdt with currencee convator........... 
// ========================

//  let amount = prompt('Amount');
//  let  curence =  prompt('Curence')

//  let rate = 0;

//  if ( curence == 'USD' ) {
     
//  }else if ( curence == 'USD' ){
//      rate = 86;
//  } else if ( curence == 'CAD' ){
//      rate = 68;
//  } else if ( curence == 'Pound' ){
//      rate = 114;
//  }  else if ( curence == 'korian' ){
//      rate = 34;
//  }  else if ( curence == 'japan' ){
//      rate = 104;
//  }

//  let bdt = parseInt(amount)  *  rate;
 
//  let bdt   = +amount * 64;
//  let bdt   = parseInt(amount)  * 64;


//  console.log(`
 
//     ${amount} ${curence} = ${bdt} BDT

//  `);





//Beya shadi er application
//===================

let  name  = prompt('name');
let  age  = prompt('age');
let  gender= prompt('Gender');


let beya_age = 0; 
let somman = ''; 

switch (gender) {
    case 'Male':
        beya_age = 21; 
        somman = 'vaiaaaaaaaaaa';
        break;
        
    case 'Female':
        beya_age = 18; 
        somman = 'apuuuuuuuuu';
        break;

}

// if( gender == 'Male') {
//     beya_age = 21; 
//     somman = 'vaiaaaaaaaaaa';
// }else if( gender == 'Femal') {
//     beya_age = 18;
//     somman = 'apuuuuuuuuu';
// }


// if (age  >= beya_age ) {
//     console.log(`
    
//     Hi ${name} ${somman}, Apni beya er jonno prostut hon.

//     `);
// }else{
//     console.log(`
    
//     Hi ${name} ${somman}, Apni beya er jonno wait koren.

//     `);
// }




// let name = prompt('Name');
// let age = prompt('Age');
// let gender = prompt('Gender');
 
 
// let beyar_age = 0;
// let somman = '';

// if( gender == 'Male' ){
//     beyar_age = 21;
//     somman = 'Vaiyaaaa';
// }else if( gender == 'Female' ){
//     beyar_age = 18;
//     somman = 'Apuuuuuuu';

// } 



// if( age >= beyar_age ){
//     console.log(`
//         Hi ${ name } ${ somman }, Apni beyar jono prostot hon
//     `);

// }else{

//     console.log(`
//         Hi ${ name } ${ somman }, Apni wait koren 
//     `);

// }