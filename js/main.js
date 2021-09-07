// initialize the map
var map = new Map();
map.initialize();

// initialize the player
window.currentPlayer = null;
var player1 = new PlayerPiece();
// var player2 = new PlayerPiece();

currentPlayer = player1;

// position player at lookout
player1.appear( map.nodes[14] );

// assign mission
window.game = new Game();
window.game.newMission( map.nodes[42] );
