var Game = function() {

}

Game.prototype.completeMission = function () {
  currentPlayer.mission.destination.hide();
  this.newMission( null );
};

Game.prototype.newMission = function ( dest ) {
  var newMission = new Mission();
  if( dest != null ) {
    newMission.setDestination( dest );
  } else {
    // create a random destination out of available/unlocked ones
    // get random location that's not this one
    var available = [];
    for( i = 0; i < map.unlocked.length; i++ ) {
      if( !currentPlayer.mission || ( currentPlayer.mission.destination != map.unlocked[i].node ) ) {
        available.push( map.unlocked[i] );
      }
    }
    random = Math.floor( Math.random() * available.length );
    randomNode = available[ random ];
    newMission.setDestination( randomNode.node );
  }
  window.currentPlayer.setMission( newMission );
  currentPlayer.mission.destination.show();
};
