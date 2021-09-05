var PlayerPiece = function( obj ) {
  this.div = obj;
  this.node = null;

  this.initialize();
}

PlayerPiece.prototype.initialize = function () {
  var div = document.createElement('div');
  div.className = 'piece';
  document.querySelector('#pieces').appendChild( div );
};

PlayerPiece.prototype.place = function ( node ) {
  this.node = node;
  node.occupy();
};
