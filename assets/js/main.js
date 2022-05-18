// ----lvl1_1
// Arrays : Erstelle arrays 


let adresse = ['Birkenstraße', '72144', 'Dußlingen', 'Baden-Württemberg'];
// console.log(adresse);
// console.log(adresse[0])


let besteFreunde = ['Alex', 'Simon', 'Marc', 'Toni'];
// console.log(besteFreunde);

let person = [['Ciprian', 'Vlad', 'Cipi', '38', 'Golfen', 'Copsa Mica', 'SuperCode'], ['Alex', 'Simon', 'Marc', 'Toni'], ['Birkenstraße', '72144', 'Dußlingen', 'Baden-Württemberg']];
// console.log(person);
// console.log(person[0]);
// console.log(person[0][0]);
// console.log(person[1][1]);
// console.log(person[2][2])


// ----lev1_1_2: Arrays length
// console.log(person.length);
// console.log(adresse.length);
// console.log(besteFreunde.length);


// lev1_2: Arrays 3 Möglichkeiten

let meineTrainer1 = ['Max', 'Steffen', 'Simon', 'Ahmed'];
// console.log(meineTrainer1);

let meineTrainer2 = new Array("Max", "Steffen", "Simon", "Ahmed");
// console.log(meineTrainer2);

let meineTrainer3 = new Array();
meineTrainer3[0] = "Max";
meineTrainer3[1] = "Steffen";
meineTrainer3[2] = "Simon";
meineTrainer3[3] = "Ahmed";
// console.log(meineTrainer3);


// lev1_3: Arrays index

let numberArray = [5, 6, 7, 8, 9, 10];
// console.log(numberArray);
// console.log(numberArray[4]);
// console.log(numberArray[0]);
// console.log(numberArray[5])
// console.log(numberArray[numberArray.length - 1]); //ruft die letzte auf


// lev1_4: Arrays Split()


let meinText1 = 'Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag.'
// console.log(meinText1);
let meinText2 = 'Wie geht es dir heute?';
// console.log(meinText2);
let meinText3 = 'Heute ist ein großer Tag für uns.';
// console.log(meinText3);

// let split1 = meinText1.split();
// console.log(split1);
// let split2 = meinText1.split("");
// console.log(split2);
// let split3 = meinText1.split(" ");
// console.log(split3);

// let split4 = meinText2.split();
// console.log(split4);
// let split5 = meinText2.split("");
// console.log(split5);
// let split6 = meinText2.split(" ");
// console.log(split6);

// let split7 = meinText3.split();
// console.log(split7);
// let split8 = meinText3.split("");
// console.log(split8);
// let split9 = meinText3.split(" ");
// console.log(split9);



// lev1_5: Arrays push()

let songs = ["Bohemian Rhapsody", "Stiarway to Heaven", "Hotel California"];

let totalSongs = songs.push("Sweet Child O'Mine");
// console.log(totalSongs);
// console.log(songs);

let besteFussballerAllerZeiten = ["CR7", "Messi", "Pele", "Maradonna", "Zidane"];
// console.log(besteFussballerAllerZeiten);
let besteFussballerEver = besteFussballerAllerZeiten.push("Kahn", "Casillas", "Koepke");
// console.log(besteFussballerEver);


// lev1_5_2: push() arrays in array
