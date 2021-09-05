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
  this.div.querySelector('.problemText').textContent = this.q.problem;
  // render options
  var opt_container = this.div.querySelector('.options');
  var options = this.q.options.split('|');
  for( i = 0; i < options.length; i++ ) {
    var li = document.createElement('li');
    li.className = 'option';
    li.textContent = options[i];
    li.addEventListener( 'touchend', function( e ){
      var x = parseInt( e.currentTarget.textContent );
      var y = parseInt( self.q.answer );
      if( x == y ) {
        self.done();
      } else {
        e.currentTarget.classList.add( 'wrong' );
      }
    } );
    opt_container.appendChild( li );
  }
};

Question.prototype.done = function () {
  // hide popup
  this.div.style.display = 'none';
  // clear
  this.div.querySelector('.questionText').textContent = '';
  this.div.querySelector('.problemText').textContent = '';
  this.div.querySelector('.options').textContent = '';
  // award points
  window.currentPlayer.coins += 1;
};
