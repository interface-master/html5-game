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
  this.unlocked = [];
  this.nodes = [];
}

Map.prototype.initialize = function() {
  // initialize map location pieces
  this.pieces.push( new MapPiece( document.querySelector('#map_A') ) );
  this.pieces.push( new MapPiece( document.querySelector('#map_B') ) );
  this.pieces.push( new MapPiece( document.querySelector('#map_C') ) );
  this.pieces.push( new MapPiece( document.querySelector('#map_D') ) );
  this.pieces.push( new MapPiece( document.querySelector('#map_E') ) );
  this.pieces.push( new MapPiece( document.querySelector('#map_F') ) );
  this.pieces.push( new MapPiece( document.querySelector('#map_G') ) );
  this.pieces.push( new MapPiece( document.querySelector('#map_H') ) );
  this.pieces.push( new MapPiece( document.querySelector('#map_I') ) );

  // initialize map nodes
  //// left
  this.nodes.push( new MapNode(  253, 782 ) );
  this.nodes.push( new MapNode(  281, 874 ) );
  this.nodes.push( new MapNode(  364, 830 ) );
  this.nodes.push( new MapNode(  359, 741 ) );
  this.nodes.push( new MapNode(  297, 673 ) );
  this.nodes.push( new MapNode(  242, 596 ) );
  this.nodes.push( new MapNode(  194, 526 ) );
  this.nodes.push( new MapNode(  117, 486 ) );
  this.nodes.push( new MapNode(   67, 412 ) );
  this.nodes.push( new MapNode(  117, 339 ) );
  this.nodes.push( new MapNode(  190, 287 ) );
  this.nodes.push( new MapNode(  274, 252 ) );
  this.nodes.push( new MapNode(  360, 292 ) );
  this.nodes.push( new MapNode(  404, 219 ) );
  //// middle
  this.nodes.push( new MapNode(  304, 541 ) );
  this.nodes.push( new MapNode(  388, 503 ) );
  this.nodes.push( new MapNode(  475, 483 ) );
  this.nodes.push( new MapNode(  556, 473 ) );
  this.nodes.push( new MapNode(  646, 477 ) );
  this.nodes.push( new MapNode(  736, 487 ) );
  this.nodes.push( new MapNode(  828, 509 ) );
  this.nodes.push( new MapNode(  912, 547 ) );
  this.nodes.push( new MapNode(  397, 396 ) );
  this.nodes.push( new MapNode(  718, 396 ) );
  this.nodes.push( new MapNode(  768, 289 ) );
  //// top
  this.nodes.push( new MapNode(  514, 209 ) );
  this.nodes.push( new MapNode(  622, 206 ) );
  this.nodes.push( new MapNode(  729, 220 ) );
  //// bottom
  this.nodes.push( new MapNode(  472, 773 ) );
  this.nodes.push( new MapNode(  618, 767 ) );
  this.nodes.push( new MapNode(  774, 781 ) );
  //// right
  this.nodes.push( new MapNode(  842,  68 ) );
  this.nodes.push( new MapNode(  803, 135 ) );
  this.nodes.push( new MapNode(  839, 238 ) );
  this.nodes.push( new MapNode(  942, 284 ) );
  this.nodes.push( new MapNode( 1028, 344 ) );
  this.nodes.push( new MapNode( 1060, 426 ) );
  this.nodes.push( new MapNode( 1017, 516 ) );
  this.nodes.push( new MapNode(  999, 611 ) );
  this.nodes.push( new MapNode(  948, 687 ) );
  this.nodes.push( new MapNode(  899, 773 ) );
  this.nodes.push( new MapNode(  954, 869 ) );

  // link the nodes
  this.linkNodes( 0, 1 );
  this.linkNodes( 1, 2 );
  this.linkNodes( 2, 3 );
  this.linkNodes( 2, 28 );
  this.linkNodes( 3, 28 );
  this.linkNodes( 3, 4 );
  this.linkNodes( 4, 5 );
  this.linkNodes( 5, 6 );
  this.linkNodes( 5, 14 );
  this.linkNodes( 6, 7 );
  this.linkNodes( 6, 14 );
  this.linkNodes( 7, 8 );
  this.linkNodes( 8, 9 );
  this.linkNodes( 9, 10 );
  this.linkNodes( 10, 11 );
  this.linkNodes( 11, 12 );
  this.linkNodes( 11, 13 );
  this.linkNodes( 12, 13 );
  this.linkNodes( 12, 22 );
  this.linkNodes( 13, 25 );
  this.linkNodes( 14, 15 );
  this.linkNodes( 15, 22 );
  this.linkNodes( 15, 16 );
  this.linkNodes( 16, 17 );
  this.linkNodes( 16, 22 );
  this.linkNodes( 17, 18 );
  this.linkNodes( 18, 19 );
  this.linkNodes( 18, 23 );
  this.linkNodes( 19, 23 );
  this.linkNodes( 19, 20 );
  this.linkNodes( 20, 21 );
  this.linkNodes( 21, 37 );
  this.linkNodes( 21, 38 );
  this.linkNodes( 23, 24 );
  this.linkNodes( 24, 27 );
  this.linkNodes( 24, 33 );
  this.linkNodes( 25, 26 );
  this.linkNodes( 26, 27 );
  this.linkNodes( 27, 32 );
  this.linkNodes( 27, 33 );
  this.linkNodes( 28, 29 );
  this.linkNodes( 29, 30 );
  this.linkNodes( 30, 40 );
  this.linkNodes( 31, 32 );
  this.linkNodes( 32, 33 );
  this.linkNodes( 33, 34 );
  this.linkNodes( 34, 35 );
  this.linkNodes( 35, 36 );
  this.linkNodes( 36, 37 );
  this.linkNodes( 37, 38 );
  this.linkNodes( 38, 39 );
  this.linkNodes( 39, 40 );
  this.linkNodes( 40, 41 );

  // activate locations
  var cafe = new DestinationNode( 290, 434 );
  cafe.setTitle( TEXT.location.cafe );
  cafe.setVocab( TEXT.vocab.cafe.lvl1 );
  this.nodes.push( cafe );
  this.linkNodes( 42, 14 );
  this.linkNodes( 42, 15 );
  this.unlock({ piece: this.pieces[3], node: this.nodes[42] });

  var lookout = new DestinationNode( 110, 824 );
  lookout.hide();
  lookout.setTitle( TEXT.location.base );
  lookout.setVocab( TEXT.vocab.base.lvl1 );
  this.nodes.push( lookout );
  this.linkNodes( 43, 0 );
  this.unlock({ piece: this.pieces[7], node: this.nodes[43] });
};

Map.prototype.linkNodes = function( a, b ) {
  this.nodes[a].link( this.nodes[b] );
  this.nodes[b].link( this.nodes[a] );
}

Map.prototype.unlock = function ( node ) {
  this.unlocked.push( node );
  node.piece.turnOn();
};

Map.prototype.discover = function( stars ) {
  if( stars >= 3 ) {
    // farm is piece 0
    if( !window.map.pieces[0].on ) {
      var farm = new DestinationNode( 177, 207 );
      farm.hide();
      farm.setTitle( TEXT.location.farm );
      farm.setVocab( TEXT.vocab.farm.lvl1 );
      this.nodes.push( farm );
      this.linkNodes( 44, 10 );
      this.linkNodes( 44, 11 );
      this.unlock({ piece: this.pieces[0], node: this.nodes[44] });
    }
  }
  if( stars >= 3 ) {
    // farm is piece 0
    if( !window.map.pieces[8].on ) {
      var beach = new DestinationNode( 177, 207 );
      beach.hide();
      beach.setTitle( TEXT.location.farm );
      beach.setVocab( TEXT.vocab.farm.lvl1 );
      this.nodes.push( beach );
      this.linkNodes( 45, 10 );
      this.linkNodes( 45, 11 );
      this.unlock({ piece: this.pieces[8], node: this.nodes[45] });
    }
  }

}
