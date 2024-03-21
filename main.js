//Кавычки
console.log("Dracarys!");  

// Экранируется только ", так как в этой ситуации
// двойные кавычки имеют специальное значение
console.log("Dragon's mother said \"No\"");
// => Dragon's mother said "No" 

// Обратный слеш `\` не выводится, если после него идет обычный символ,
// а не специальный
console.log("Death is \so terribly final, while life is full of possibilities");
// => Death is so terribly final, while life is full of possibilities 

console.log("\\ \\ \\\\ \\\ \'\"");

//Экранирующие последовательности
console.log('- Are you hungry?\n- Aaaarrrgh!'); 

console.log('Gregor Clegane\nDunsen\nPolliver\nChiswyck'); 
/* Gregor Clegane
Dunsen
Polliver
Chiswyck */ 

console.log('\n');
console.log('Dunsen'); 

console.log('Polliver');
console.log('Gregor Clegane');
console.log();
console.log('Chiswyck');
console.log('\n');
console.log('Dunsen'); 

console.log('Joffrey loves using \\n'); 

//Конкатенация
console.log('Dragon' + 'stone');

console.log("King's" + 'Landing'); // => King'sLanding
console.log("King's " + 'Landing'); //  => King's Landing
console.log("King's  " + '  Landing'); // => King's    Landing