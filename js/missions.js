var Mission = function() {
  this.destination = null;
  this.fetch = null;
  this.class = null;
}

Mission.prototype.setDestination = function ( destination ) {
  this.destination = destination;
  var rand = Math.floor( Math.random() * ( Object.keys( destination.vocab ).length ) );
  this.class = Object.keys( destination.vocab )[ rand ];
  this.fetch = destination.vocab[ this.class ];
};
