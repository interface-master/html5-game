var Question = function( obj ) {
  this.div = document.querySelector('#question');
  this.q = obj;

  this.ask();
}

Question.prototype.ask = function () {
  var self = this;
  // show popup
  this.div.style.display = 'block';
  // render text
  this.div.querySelector('.questionText').textContent = this.q.question;
  if( this.q.type == 'math' || this.q.type == 'mission' ) {
    this.div.querySelector('.problemText').textContent = this.q.problem;
  } else if ( this.q.type == 'reading' ) {
    var pic = document.createElement('div');
    pic.className = 'option food ' + this.q.problem;
    this.div.querySelector('.problemText').appendChild( pic );
  }
  // render options
  var opt_container = this.div.querySelector('.options');
  var options = this.q.options.split('|');
  for( i = 0; i < options.length; i++ ) {
    var li = document.createElement('li');
    li.className = 'option';
    if( this.q.type == 'mission' ) {
      li.className += ' ' + 'food '  + options[i];
    } else if( this.q.type == 'math' ) {
      li.textContent = options[i];
    } else if( this.q.type == 'reading' ) {
      li.textContent = options[i];
      li.className += ' ' + 'reading '  + options[i];
    }
    li.addEventListener( 'touchend', function( e ){
      var x = e.currentTarget.textContent;
      var y = self.q.answer;
      if( self.q.type == 'math' ) {
        x = parseInt( x );
        y = parseInt( y );
      }
      if( x == y ) {
        self.done();
      } else {
        e.currentTarget.classList.add( 'wrong' );
      }
    } );
    opt_container.appendChild( li );
    // dismiss button
    var button = document.createElement('div');
    button.className = 'button';
    button.textContent = 'OK';
    this.div.querySelector('.buttons').appendChild( button );
    button.addEventListener( 'touchend', function(){
      self.done();
    });
  }
};

Question.prototype.done = function () {
  // hide popup
  this.div.style.display = 'none';
  // clear
  this.div.querySelector('.questionText').textContent = '';
  this.div.querySelector('.problemText').textContent = '';
  this.div.querySelector('.options').textContent = '';
  this.div.querySelector('.buttons').textContent = '';
  // award points
  if( this.q.type == 'math' ) {
    window.currentPlayer.coins += 1;
  } else if( this.q.type == 'reading' ) {
    window.currentPlayer.stars += 1;
    // get random location that's not this one
    var available = [];
    for( i = 0; i < map.unlocked.length; i++ ) {
      if( map.unlocked[i].node != currentPlayer.mission.destination ) {
        available.push( map.unlocked[i] );
      }
    }
    random = Math.floor( Math.random() * available.length );
    randomNode = available[ random ];
    // complete mission and assign new one
    window.game.completeMission();
    window.game.newMission( randomNode.node );
  }
};
