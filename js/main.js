//fPart A- function declaration howdy
function howdy( person, message ) {
    return person + ' says ' + message;
}

var message = howdy( 'Lenny Leithauser', 'hi!' );
console.log( message );

//Part B- function expression numba
function numba(string) {

if ( 7 > string.length ) {
    console.log( 'What a short little word!' );
} else if ( 7 < string.length ) {
    console.log( "I'm sorry, but that's too many to count." );
} else if ( string.length == 7 ) {
    console.log( '7, what a perfect choice!' );
}
};
numba ('7')
numba ('seventy')
numba ('university')

//Part C- function inception.. I CANNOT figure this out
function inception(display, favMovie) {
    display(favMovie);
};
console.log(favMovie + 'is a fantastic movie.')
