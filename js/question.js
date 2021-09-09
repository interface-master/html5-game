var Question = function( obj ) {
  this.div = document.querySelector('#question');
  this.q = obj;

  this.ask();
}

Question.prototype.ask = function () {
  var self = this;
  // show popup
  this.div.className = '';
  this.div.style.display = 'block';
  // render text
  this.div.querySelector('.questionText').textContent = this.q.question;
  //// mission
  if( this.q.type == 'mission' ) {
    this.div.classList.add('mission');
    this.div.querySelector('.problemText').textContent = this.q.problem;
    this.div.querySelector('.buttons').style.display = 'flex';
  //// math
  } else if( this.q.type == 'math' ) {
    this.div.querySelector('.problemText').textContent = this.q.problem;
  //// find a word
  } else if ( this.q.type == 'reading' ) {
    this.div.classList.add('reading');
    var pic = document.createElement('div');
    pic.className = 'option reading ' + this.q.problem;
    this.div.querySelector('.problemText').appendChild( pic );
  } else if ( this.q.type == '' ) {

  }
  // render options
  var opt_container = this.div.querySelector('.options');
  var options = this.q.options.split('|');
  if( this.q.classes != null ) var classes = this.q.classes.split('|');

  if( this.q.type == 'reading' ) {
    shuffle(options);
  }

  for( i = 0; i < options.length; i++ ) {
    var li = document.createElement('li');
    li.className = 'option';
    if( this.q.type == 'mission' ) {
      li.className += ' ' + 'reading '  + classes[i];
    } else if( this.q.type == 'math' ) {
      li.textContent = options[i];
    } else if( this.q.type == 'reading' ) {
      li.textContent = options[i];
      li.className += ' ' + 'reading '  + classes[i];
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
  }
  if( this.q.type == 'mission' ) {
    // dismiss button
    var button = document.createElement('div');
    button.className = 'button';
    button.textContent = TEXT.ok;
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
  this.div.querySelector('.buttons').style.display = 'none';
  // award points
  if( this.q.type == 'math' ) {
    window.currentPlayer.coins += 1;
  } else if( this.q.type == 'reading' ) {
    window.currentPlayer.stars += 1;
    // unlock new location
    window.map.discover( window.currentPlayer.stars );
    // complete mission
    window.game.completeMission();
  }
};

function shuffle( array ) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
