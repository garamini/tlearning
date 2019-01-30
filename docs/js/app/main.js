var ramisoft = ramisoft || {};

ramisoft.learn = ramisoft.learn || {};

var l =  ramisoft.learn;
var u = ramisoft.util;

l.labels = [
    {label :'అక్షరాలూ',value :'aksharalu'},
    {label :'గుణింతాలు', value :'gunintalu'},
    {label :'వొత్తులు', value : 'vattulu'},
    {label :'Upper Letters', value : 'english'},
    {label :'Lower Letters', value : 'lowerLetters'},
]

l.alphabets = {
    english :  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
                'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    lowerLetters : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
                    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    aksharalu : ['అ', 'ఆ', 'ఇ', 'ఈ', 'ఉ', 'ఊ', 'ఋ', 'ౠ', 'ఏ', 'ఐ', 'ఒ', 'ఓ', 'ఔ', 'ం', 'ః',
                 'క','ఖ','గ','ఘ','ఙ','చ','ఛ','జ','ఝ','ఞ','ట','ఠ','డ','ఢ',
                 'ణ','త','థ','ద','ధ','న','ప','ఫ','బ','భ','మ','య','ర','ల',
                 'వ','శ','ష','స','హ','ళ','క్ష','ఱ'],
    guninthalu :['ా', 'ి', 'ీ', 'ు', 'ూ', 'ృ', 'ౄ', 'ె', 'ే', 'ై', 'ొ', 'ో', 'ౌ', 'ం', 'ః'],
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
    if (selection.value === 'aksharalu') {
        l.lettersCollection = l.alphabets.aksharalu;
    } else if(selection.value === 'gunintalu'){
        l.lettersCollection = l.alphabets.guninthalu;
    } else if(selection.value === 'vattulu'){
        l.lettersCollection = l.alphabets.vattulu;
    } else if(selection.value === 'lowerLetters'){
        l.lettersCollection = l.alphabets.lowerLetters;
    } else {
        l.lettersCollection = l.alphabets.english;    
    }
    l.maxLetters = l.lettersCollection.length- 1;
    l.reset();
}

l.viewInit = function(){
    var l =  ramisoft.learn;
    var u =  ramisoft.util;
    $( "#tabs" ).tabs({
            active: 0
    });
    $('#previous').button();
    $('#next').button();
    $('#shuffle').button();
    $( "#selectmenu" ).selectmenu();
    $('#selectmenu').selectmenu("option", "width", 200 );
    $.each(l.labels, function(i, v){
        var opt = '<option value="'+ v.value +'">'+v.label+'</option>';
        $('#selectmenu').append(opt);
    });

    //$( "#gSelect" ).selectmenu();

    $('#selectmenu').selectmenu({
        select: function( event, ui ) {
            l.setLetterCollection(ui.item);
        }
    });
    
    $('#previous').bind('click', function(){
        l.previousLetter();
    });
    $('#next').bind('click', function(){
        l.nextLetter();
    });
    $('#shuffle').bind('click', function(){
        l.reset();
    });
    $('#selectmenu').prop("selectedIndex",0).selectmenu('refresh');
    l.reset();
}