var ramisoft = ramisoft || {};
ramisoft.learn = ramisoft.learn || {};
ramisoft.learn.a  = ramisoft.learn.a || {};

var l =ramisoft.learn;
var a = ramisoft.learn.a;
a.seek = 0;

                                                                                           

a.labels = [
    {label :'అక్షరాలు',value :'aksharalu'},
    {label :'Lower Case', value : 'lowerLetters'},
    {label :'Upper Case', value : 'english'}
]

a.setCollection = function(i) {
    a.collection = l.alphabets[i.value];
    a.setHeadings(i.label);
}

a.init = function() {
    a.collection = l.alphabets[a.labels[0].value];
    $('#lSelect').prop("selectedIndex",0).selectmenu('refresh');
    a.setHeadings(a.labels[0].label);
    a.renderLetter();
    a.checkPreNext();
};

a.checkPreNext = function(){
    a.enablePre();
    a.enableNext();
};

a.enablePre = function(){
    (a.seek != 0 ) ?  $('#lPrev').button( "enable" ) 
        : $('#lPrev').button("disable" );
};

a.enableNext = function(){
    (a.seek < a.collection.length) ? $('#lNext').button( "enable" )
        : $('#lNext').button( "disable" ) ;    
};


a.renderLetter = function(){
    $("#jLetter").text(a.collection[a.seek]);
};

a.navi = function(moveTo){
    a.seek = moveTo;
    a.renderLetter();
    a.checkPreNext();

};

a.previousLetter = function(){
    a.navi(a.seek - 1); 
};

a.nextLetter = function(){
    a.navi(a.seek + 1); 
};

a.setHeadings = function(t){
    $('#jLHeading').text(t);
}

a.viewInit = function(){

    $('#lSelect').selectmenu("option", "width", 170 );
    
    $.each(a.labels, function(i, v){
        var opt = '<option value="'+ v.value +'" style="font-size:23px">'+v.label+'</option>';
        $('#lSelect').append(opt);
    });

    //$( "#gSelect" ).selectmenu();

    $('#lSelect').selectmenu({
        select: function( event, ui ) {
            a.setCollection(ui.item);
            a.seek = 0;
            a.renderLetter();
            a.checkPreNext();
        }
    });
    
    $('#lPrev').bind('click', function(){
        a.previousLetter();
    });
    $('#lNext').bind('click', function(){
        a.nextLetter();
    });
    a.init();
}
