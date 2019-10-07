#!/usr/bin/env node
const cmds = process.argv;
const event = require('events');
if (cmds.length < 8) {
    console.log('\nHey! Its seems that you dont know how to use this wonderful game\n\n Just type "node app [p1] [kind/asshole] [p2] [kind/asshole] [p3] [kind/asshole]" \n\nWhere [p1] [p2] and [p3] are the names of the players and the others fields says something about them');
    process.exit();
}

if (cmds[3] !== 'asshole' && cmds[3] !== 'kind') {
    console.log('hey, you better check out the rules!');
    console.log('you put ' + cmds[3] + ' where you should put "asshole" or "kind"');
    process.exit();
}
else if (cmds[5] !== 'asshole' && cmds[5] !== 'kind') {
    console.log('hey, you better check out the rules!');
    console.log('you put ' + cmds[5] + ' where you should put "asshole" or "kind"');
    process.exit();
}

else if (cmds[7] !== 'asshole' && cmds[7] !== 'kind') {
    console.log('hey, you better check out the rules!');
    console.log('you put ' + cmds[7] + ' where you should put "asshole" or "kind"');
    process.exit();
}


const arg1 = cmds[2];
const argP1 = cmds[3]

const arg2 = cmds[4];
const argP2 = cmds[5];

const arg3 = cmds[6];
const argP3 = cmds[7];


class Person extends event {
    constructor(name, personality) {
        super(name, personality);
        this.personality = personality;
        this.number = Math.random();
        this.name = name
    }

    loose() {
        this.emit('loose')
    }
    win() {
        this.emit('win')
    }
}



const person1 = new Person(arg1, argP1);
const person2 = new Person(arg2, argP2);
const person3 = new Person(arg3, argP3);

const people = [person1, person2, person3];

people.forEach((person) => {
    person.on('win', () => {
        console.log("\n" + person.name + ' says: yes! I win! My number was ' + person.number + "\n")
    });
    if (person.personality === 'asshole') {
        person.on('loose', () => {
            console.log("\n" + person.name + ' says: ooh fuck! I loose. My number was ' + person.number + "\n")
        })
    } else if (person.personality === 'kind') {
        person.on('loose', () => {
            console.log("\n" + person.name + ' says: well, I guess I loose. My number was ' + person.number + "\n")
        })
    }
});

var winner = "";
var max = 0;

function play(players, win, num) {
    console.log("And now! lets begin the Bigger Number Show!! \nThe players are rolling the dices and.....")
    for (let i = 0; i < players.length; i++) {
        if (people[i].number > num) {
            num = people[i].number;
            win = people[i].name;
        }
    }

    players.forEach(player => {
        if (player.name === win) {
            player.win()
        } else {
            player.loose()
        }
    });
}

play(people, winner, max);