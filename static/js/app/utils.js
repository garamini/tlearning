var ramisoft = ramisoft || {};

ramisoft.util = ramisoft.util || {};

var u =  ramisoft.util;


u.shuffle = function(collection) {
    
    var letterIndex = Object.keys(collection);
    

    var ctr = letterIndex.length, temp, index;
    
    // While there are elements in the array
    while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = letterIndex[ctr];
        letterIndex[ctr] = letterIndex[index];
        letterIndex[index] = temp;
    }
    console.log('collection', collection);
    console.log('collection shuffle index', letterIndex);
    return letterIndex;

}

u.init = function(callback) {
    callback();
}

u.buttionEnableDisable = function( id, EorD){
    $('#' + id).button( EorD );
}
