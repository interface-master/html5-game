var MapPiece = function( obj ) {
  this.on = false;
  this.div = obj;
}

MapPiece.prototype.turnOn = function() {
  this.on = true;
  this.div.style.display = 'block';
}

MapPiece.prototype.turnOff = function() {
  this.on = false;
  this.div.style.display = 'none';
}

MapPiece.prototype.toggle = function() {
  if( this.on ) {
    this.turnOff();
  } else {
    this.turnOn();
  }
}

var Map = function() {
  this.pieces = [];
}

Map.prototype.initialize = function() {
  this.pieces.push( new MapPiece( document.querySelector('#map_A') ) );
  this.pieces.push( new MapPiece( document.querySelector('#map_B') ) );
  this.pieces.push( new MapPiece( document.querySelector('#map_C') ) );
  this.pieces.push( new MapPiece( document.querySelector('#map_D') ) );
  this.pieces.push( new MapPiece( document.querySelector('#map_E') ) );
  this.pieces.push( new MapPiece( document.querySelector('#map_F') ) );
  this.pieces.push( new MapPiece( document.querySelector('#map_G') ) );
  this.pieces.push( new MapPiece( document.querySelector('#map_H') ) );
  this.pieces.push( new MapPiece( document.querySelector('#map_I') ) );
  console.log( this.pieces );
};
