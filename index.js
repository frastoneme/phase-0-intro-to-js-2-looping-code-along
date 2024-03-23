// Code your solutions in this file
function writeCards( names, events ) {
    let thanks = [];
    for ( let i = 0; i < names.length; i++ ) {
      thanks.push( `Thank you, ${names[i]}, for the wonderful ${events} gift!` )
    }
    return thanks;
  }
  
  function countDown( start) {
    while ( start >= 1 ) {
      console.log( start );
      start= start - 1;
    }
    console.log( start);
  }
