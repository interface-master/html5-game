var Game = function() {

}

Game.prototype.completeMission = function () {
  currentPlayer.mission.destination.hide();
  window.currentPlayer.setMission( null );
};

Game.prototype.newMission = function ( dest ) {
  var newMission = new Mission();
  if( dest != null ) {
    newMission.setDestination( dest );
  } else {
    // create a random destination out of available/unlocked ones
  }
  window.currentPlayer.setMission( newMission );
};
