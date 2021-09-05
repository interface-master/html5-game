var PlayerPiece = function( obj ) {
  this.div = obj;
  this.node = null;

  this.initialize();
}

PlayerPiece.prototype.initialize = function () {
  this.div = document.createElement('div');
  this.div.className = 'piece';
  document.querySelector('#pieces').appendChild( this.div );
};

PlayerPiece.prototype.place = function ( node ) {
  // occupy node
  this.node = node;
  node.occupy();
  // move to node
  this.moveTo( this.node.coordinates[0], this.node.coordinates[1] );
};

PlayerPiece.prototype.moveTo = function ( x, y ) {
  this.animate();
  var pieceWidth = this.div.offsetWidth;
  var nodeWidth = this.node.div.offsetWidth;
  var pieceHeight = this.div.offsetHeight;
  var nodeHeight = this.node.div.offsetHeight;
  this.div.style.left = (x - pieceWidth/2 + nodeWidth/2)+'px';
  this.div.style.top = (y - nodeHeight/2)+'px';
};

PlayerPiece.prototype.animate = function () {
  var x = 0;
  var piece = this.div;
  var timer = setInterval( function(){
    if( x ) {
      x = 0;
      piece.style.backgroundPositionX = -200+'px';
    } else {
      x = 1;
      piece.style.backgroundPositionX = -100+'px';
    }
  }, 250 );
  setTimeout( function(){
    clearInterval( timer );
    piece.style.backgroundPositionX = -300+'px';
  }, 1000 );
};
