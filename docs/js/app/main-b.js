var ramisoft = ramisoft || {};

ramisoft.learn = ramisoft.learn || {};

var l =  ramisoft.learn;
var u = ramisoft.util;

l.labels = [
    {label :'అక్షరాలూ',value :'aksharalu'},
    {label :'గుణింతాలు', value :'gunintalu'},
    {label :'వొత్తులు', value : 'vattulu'},
    {label :'Lower Case', value : 'lowerLetters'},
    {label :'Upper Case', value : 'english'}
]

l.alphabets = {
    english :  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
                'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    lowerLetters : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
                    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    aksharalu : ['అ', 'ఆ', 'ఇ', 'ఈ', 'ఉ', 'ఊ', 'ఋ', 'ౠ', 'ఏ', 'ఐ', 'ఒ', 'ఓ', 'ఔ', 'అం', 'అః',
                 'క','ఖ','గ','ఘ','ఙ','చ','ఛ','జ','ఝ','ఞ','ట','ఠ','డ','ఢ',
                 'ణ','త','థ','ద','ధ','న','ప','ఫ','బ','భ','మ','య','ర','ల',
                 'వ','శ','ష','స','హ','ళ','క్ష','ఱ'],
    gunintalu :['ా', 'ి', 'ీ', 'ు', 'ూ', 'ృ', 'ౄ', 'ె', 'ే', 'ై', 'ొ', 'ో', 'ౌ', 'ం', 'ః'],
    vattulu : ['్క', '్ఖ', '్గ', '్ఘ', '్ఙ', '్చ', '్ఛ', '్జ', '్ఝ', '్ఞ', '్ట', '్ఠ', '్డ', '్ఢ', '్ణ', '్త', '్థ', 
                '్ద', '్ధ', '్న', '్ప', '్ఫ', '్బ', '్భ', '్మ', '్య', '్ర', '్ల', '్వ', '్శ', '్ష', '్స', '్హ', '్ళ', '్ఱ'],
    test :  [' ై'],
}


l.selectedOption=l.labels[0];

l.lettersCollection =  l.alphabets[l.labels[0].value];
l.maxLetters = l.lettersCollection.length- 1;

l.reset = function(){
    l.shuffedIndex = u.shuffle(l.lettersCollection);
    l.seek = 0;
    l.checkPreNext();
    l.renderLetter();
    l.setHeadings(l.selectedOption.label);
};

l.init = function() {
    l.reset();
};

l.checkPreNext = function(){
    l.enablePre();
    l.enableNext();
};

l.enablePre = function(){
    (l.seek != 0 ) ?  $('#previous').button( "enable" ) 
        : $('#previous').button("disable" );
};

l.enableNext = function(){
    (l.seek < l.maxLetters) ? $('#next').button( "enable" )
        : $('#next').button( "disable" ) ;    
};

l.addLetter = function (ele, l){
    ele.append(l);
}
l.renderLetter = function(){
    var letterToshow = l.shuffedIndex[l.seek];
    $("#letter").text(l.lettersCollection[letterToshow]);
};
l.navi = function(moveTo){
    l.seek = moveTo;
    l.renderLetter();
    l.checkPreNext();

};

l.previousLetter = function(){
    l.navi(l.seek - 1); 
};

l.nextLetter = function(){
    l.navi(l.seek + 1); 
};

l.first = function(){
    l.navi(0); 
};

l.last = function(){
    l.navi(l.maxLetters - 1 ); 
};
l.setHeadings = function(t){
    $('#heading').text(t);
}

l.setLetterCollection = function(selection){
    l.selectedOption = selection;
    l.lettersCollection = l.alphabets[selection];
    l.maxLetters = l.lettersCollection.length- 1;
    l.reset();
}

l.viewInit = function(){
    var l =  ramisoft.learn;
    var u =  ramisoft.util;
    //$( "tabs" ).show('tab-1'); //FIX
    $('#previous').button();
    $('#next').button();
    $('#shuffle').button();

    //$( "#selectmenu" ).selectmenu(); FIX
    //$('#selectmenu').selectmenu("option", "width", 200 );//FIX
    //Fix Populattion of dripdown.


    //$( "#gSelect" ).selectmenu();
    
    
    $('#previous').bind('click', function(){
        l.previousLetter();
    });
    $('#next').bind('click', function(){
        l.nextLetter();
    });
    $('#shuffle').bind('click', function(){
        l.reset();
    });
    //$('#selectmenu').prop("selectedIndex",0).selectmenu('refresh');
    l.reset();
}