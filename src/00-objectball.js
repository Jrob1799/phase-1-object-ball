function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }

  function numPointsScored(playerName) {
    const teams = Object.values(gameObject());
    for (let i = 0; i < teams.length; i++) {
      const players = Object.keys(teams[i].players);
      for (let j = 0; j < players.length; j++) {
        if (players[j] === playerName) {
          return teams[i].players[playerName].points;
        }
      }
    }
    return "Player not found";
  }

  function shoeSize(playerName) {
    for (let team in gameObj) {
      const players = gameObj[team].players;
      for (let player in players) {
        if (player === playerName) {
          return players[player].shoe;
        }
      }
    }
    return "Player not found";
  }

  // teamColors function
function teamColors(teamName) {
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
  }
  
  // teamNames function
  function teamNames() {
    let teams = [];
    for (let team in game) {
      teams.push(game[team].teamName);
    }
    return teams;
  }
  
  // playerNumbers function
  function playerNumbers(teamName) {
    let numbers = [];
    for (let team in game) {
      if (game[team].teamName === teamName) {
        for (let player in game[team].players) {
          numbers.push(game[team].players[player].number);
        }
      }
    }
    return numbers;
  }
  
  // playerStats function
  function playerStats(playerName) {
    for (let team in game) {
      for (let player in game[team].players) {
        if (playerName === player) {
          return game[team].players[player];
        }
      }
    }
  }

  // Which player has the most points?
function mostPointsScored(gameObj) {
    let mostPoints = 0;
    let playerWithMostPoints = '';
    for (const team in gameObj) {
      for (const player in gameObj[team].players) {
        if (gameObj[team].players[player].points > mostPoints) {
          mostPoints = gameObj[team].players[player].points;
          playerWithMostPoints = player;
        }
      }
    }
    return playerWithMostPoints;
  }
  
  // Which team has the most points?
  function winningTeam(gameObj) {
    let highestScore = 0;
    let teamWithHighestScore = '';
    for (const team in gameObj) {
      let teamScore = 0;
      for (const player in gameObj[team].players) {
        teamScore += gameObj[team].players[player].points;
      }
      if (teamScore > highestScore) {
        highestScore = teamScore;
        teamWithHighestScore = gameObj[team].teamName;
      }
    }
    return teamWithHighestScore;
  }
  
  // Which player has the longest name?
  function playerWithLongestName(gameObj) {
    let longestName = '';
    for (const team in gameObj) {
      for (const player in gameObj[team].players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
    return longestName;
  }
  
  // Super Bonus: Does player with longest name steal a ton?
  function doesLongNameStealATon(gameObj) {
    let longestName = playerWithLongestName(gameObj);
    let stealsForLongestNamePlayer = gameObj.home.players[longestName].steals;
    for (const team in gameObj) {
      for (const player in gameObj[team].players) {
        if (gameObj[team].players[player].steals > stealsForLongestNamePlayer) {
          return false;
        }
      }
    }
    return true;
  }