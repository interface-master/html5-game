var PlayerPiece = function( obj ) {
  this.div = obj;
  this.node = null;
  this.animLength = 1000;
  this.coins = 0;
  this.stars = 0;

  this.initialize();
}

PlayerPiece.prototype.initialize = function () {
  this.div = document.createElement('div');
  this.div.className = 'piece';
  document.querySelector('#pieces').appendChild( this.div );
};

PlayerPiece.prototype.appear = function ( node ) {
  // occupy node
  this.node = node;
  node.occupy();
  this.moveTo( this.node.coordinates[0], this.node.coordinates[1] );
}

PlayerPiece.prototype.place = function ( node ) {
  // occupy node
  this.node = node;
  node.occupy();
  // move to node
  this.animate();
  this.moveTo( this.node.coordinates[0], this.node.coordinates[1] );
  // ask question
  setTimeout( this.askMathQuestion, this.animLength );
};

PlayerPiece.prototype.moveTo = function ( x, y ) {
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
  }, this.animLength );
};

PlayerPiece.prototype.askMathQuestion = function () {
  // random question
  var base = 9;
  var x = Math.floor( Math.random() * base );
  var y = Math.round( Math.random() * (base-x) );
  var question = new Question({
    question: "WHAT IS ",
    problem: x + " + " + y + " = ",
    options: "1|2|3|4|5|6|7|8|9|0",
    answer: x+y
  });

};
