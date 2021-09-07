var MapNode = function( x, y ) {
  this.coordinates = []; // x,y
  this.nodes = []; // MapNode[]
  this.div = null; //
  this.title = "";

  this.initialize( x, y );
}

MapNode.prototype.place = function ( x, y ) {
  this.coordinates = [ x, y ];
  this.div.style.left = x+'px';
  this.div.style.top = y+'px';
}

MapNode.prototype.link = function ( node ) {
  this.nodes.push( node );
};

MapNode.prototype.occupy = function () {
  this.div.classList.add( 'occupied' );
  var cleanup = document.querySelectorAll('.vacant');
  for( i = 0; i < cleanup.length; i++ ) {
    cleanup[i].classList.remove( 'vacant' );
  }
  for( i = 0; i < this.nodes.length; i++ ) {
    this.nodes[i].div.classList.add( 'vacant' );
  }
};

MapNode.prototype.show = function () {
  this.div.style.display = 'block';
};

MapNode.prototype.hide = function () {
  this.div.style.display = 'none';
};


MapNode.prototype.initialize = function ( x, y ) {
  // create dom element
  this.div = document.createElement('div');
  this.div.className = 'node';
  // add to field
  document.querySelector('#nodes').appendChild( this.div );
  // position
  this.place( x, y );
  // event handler
  var self = this;
  this.div.addEventListener( 'touchend', function ( event ) {
    if( this.classList.contains( 'vacant' ) ) {
      document.querySelector('.occupied').classList.remove( 'occupied' );
      currentPlayer.place( self );
    }
  } );
};



var DestinationNode = function( x, y ) {
  MapNode.call( this, x, y );
}
DestinationNode.prototype = Object.create( MapNode.prototype );
// DestinationNode.prototype.constructor = DestinationNode;

DestinationNode.prototype.initialize = function( x, y ) {
  MapNode.prototype.initialize.call( this, x, y );
  this.div.className = 'destination node';
}

DestinationNode.prototype.setTitle = function( title ){
  this.title = title;
}

DestinationNode.prototype.setVocab = function( ary ){
  this.vocab = ary;
}
