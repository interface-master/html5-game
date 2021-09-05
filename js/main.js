// initialize the map
var map = new Map();
map.initialize();

// initialize the player
window.currentPlayer = null;
var player1 = new PlayerPiece();
// var player2 = new PlayerPiece();

currentPlayer = player1;

// position player at lookout
player1.place( map.nodes[0] );
