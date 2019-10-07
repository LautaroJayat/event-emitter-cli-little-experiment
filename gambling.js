#!/usr/bin/env node

//  Requiring the arguments of the command line
const cmds = process.argv;

//  Requiring events in order to extend the class
const event = require('events');

//  Requiring the functions of the game
const { play, addEmiters, validate } = require('./fun');

//  Validating the arguments that where provided
validate(cmds);

//  Its seems that everithing went ok, so now we can do something with the args
const arg1 = cmds[2];
const argP1 = cmds[3]

const arg2 = cmds[4];
const argP2 = cmds[5];

const arg3 = cmds[6];
const argP3 = cmds[7];

//  Adding some emiters to the Humans
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


//  For now, only 3 people are going to play
const person1 = new Person(arg1, argP1);
const person2 = new Person(arg2, argP2);
const person3 = new Person(arg3, argP3);
const people = [person1, person2, person3];
var winner = "";
var max = 0;

// Time to add emitters to every person in the array
addEmiters(people);

// Time to Play
play(people, winner, max);