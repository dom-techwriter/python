const team = {
    _players: [
        {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
        },
        {
        firstName: 'Paul',
        lastName: 'Migi',
        age: 12
      },
      {
        firstName: 'Ryan',
        lastName: 'Jones',
        age: 13
      }
    ],
    _games: [
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Hounds',
            teamPoints: 33,
            opponentPoints: 21
        },
        {
            opponent: 'Parrots',
            teamPoints: 66,
            opponentPoints: 43
        }
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age,
        }
        return this._players.push(player);
    },
    addGame(opponentName, teamPoints, opponentPoints) {
        const game = {
            opponent: opponentName,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        }
        return this._games.push(game);

    }

};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Kangaroos', 45, 32)

console.log(team.players)
console.log(team.games)