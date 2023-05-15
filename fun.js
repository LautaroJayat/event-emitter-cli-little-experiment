//  Just a validation function,
var validate = function (cmds) {
    if (cmds.length < 8) {
        console.log('\nHey! Its seems that you dont know how to use this wonderful game\n\nJust type "node app [p1] [kind/super-kind] [p2] [kind/super-kind] [p3] [kind/super-kind]" \n\nWhere [p1] [p2] and [p3] are the names of the players and the others fields says something about them');
        process.exit();
    }

    if (cmds[3] !== 'super-kind' && cmds[3] !== 'kind') {
        console.log('hey, you better check out the rules!');
        console.log('you put ' + cmds[3] + ' where you should put "super-kind" or "kind"');
        process.exit();
    }
    else if (cmds[5] !== 'super-kind' && cmds[5] !== 'kind') {
        console.log('hey, you better check out the rules!');
        console.log('you put ' + cmds[5] + ' where you should put "super-kind" or "kind"');
        process.exit();
    }

    else if (cmds[7] !== 'super-kind' && cmds[7] !== 'kind') {
        console.log('hey, you better check out the rules!');
        console.log('you put ' + cmds[7] + ' where you should put "super-kind" or "kind"');
        process.exit();
    }
}

//  The rules of the game and a little introduction
var play = function (players, win, num) {
    console.log("And now! lets begin the Bigger Number Show!! \nThe players are rolling the dices and.....")
    for (let i = 0; i < players.length; i++) {
        if (players[i].number > num) {
            num = players[i].number;
            win = players[i].name;
        }
    }

    players.forEach(player => {
        if (player.name === win) {
            player.win()
        } else {
            player.loose()
        }
    });
    process.exit();
}

//  Adding emitters depending on if they are kind or just super-kind
var addEmiters = function (arr) {
    arr.forEach((person) => {
        person.on('win', () => {
            console.log("\n" + person.name + ' says: yes! I win! My number was ' + person.number + "\n")
        });
        if (person.personality === 'super-kind') {
            person.on('loose', () => {
                console.log("\n" + person.name + ' says: ooh fuck! I loose. My number was ' + person.number + "\n")
            })
        } else if (person.personality === 'kind') {
            person.on('loose', () => {
                console.log("\n" + person.name + ' says: well, I guess I loose. My number was ' + person.number + "\n")
            })
        }
    });
}

//  Exporting everithing
module.exports.play = play;
module.exports.addEmiters = addEmiters;
module.exports.validate = validate;
