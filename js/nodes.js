var MapNode = function( x, y ) {
  this.coordinates = []; // x,y
  this.nodes = []; // MapNode[]
  this.div = null; //

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
