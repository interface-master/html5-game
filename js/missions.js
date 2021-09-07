var Mission = function() {
  this.destination = null;
  this.fetch = null;
}

Mission.prototype.setDestination = function ( destination ) {
  this.destination = destination;
  this.fetch = destination.vocab[
    Math.floor( Math.random() * (destination.vocab.length) )
  ];
};
