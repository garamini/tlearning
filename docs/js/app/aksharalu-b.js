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

a.setCollection = function(label, value) {
    a.collection = l.alphabets[value];
    a.setHeadings(label);
}

a.handleChange = function (label, value) {
    a.setCollection(label, value);
    a.seek = 0;
    a.renderLetter();
    a.checkPreNext();
    var dropdown = $('#selectmenu');
    dropdown.html(label);
}

a.init = function() {
    a.collection = l.alphabets[a.labels[0].value];
    //FIXIT
    //$('#lSelect').prop("selectedIndex",0).selectmenu('refresh');

    var dropdown = $('#selectmenu');
    a.populateDropDown(dropdown, a.labels);

    a.setHeadings(a.labels[0].label);
    a.renderLetter();
    a.checkPreNext();
};

a.populateDropDown = function( ele, collection) {
    var drowDownMenu = ele.parent('.btn-group').find('.dropdown-menu');
    $.each(collection, function(i, v){
        drowDownMenu.append('<a class="dropdown-item" href="javascript:a.handleChange(\'' + v.label + '\',\''+ v.value + '\' ); ">' + v.label + '</a>');
    });
}
a.checkPreNext = function(){
    a.enablePre();
    a.enableNext();
};

a.enablePre = function(){
    (a.seek == 0 ) ?  $('#lPrev').addClass('disabled')
        : $('#lPrev').removeClass('disabled');
        
};

a.enableNext = function(){
    (a.seek < a.collection.length -1) ? $('#lNext').removeClass( "disabled" )
        : $('#lNext').addClass( "disabled" ) ;    
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
a.langChange = function( label, value ) {
    a.setCollection(label, value );
    a.seek = 0;
    a.renderLetter();
    a.checkPreNext();
}

a.viewInit = function(){

    //FIXIT
    //$('#lSelect').selectmenu("option", "width", 170 );

    //$( "#gSelect" ).selectmenu();

    //FIXIT
    /* $('#lSelect').selectmenu({
        select: function( event, ui ) {
            a.setCollection(ui.item);
            a.seek = 0;
            a.renderLetter();
            a.checkPreNext();
        }
    }); */
    
    $('#lPrev').bind('click', function(){
        a.previousLetter();
    });
    $('#lNext').bind('click', function(){
        a.nextLetter();
    });
    a.init();
}