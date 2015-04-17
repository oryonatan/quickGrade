/**
 * Created by yonatan on 3/9/2015.
 */
var retry = setInterval(function(){
    $('div').find('a:contains("Launch PDF editor...")')[0].click();
    var pageheader = $('div').find('.pageheader')[0];
    var navigationSearch = $('div').find('.navigation-search')[0];
    var felement = $('div').find('.felement')[0];
    var submit_form = document.createElement( 'form' );
    submit_form.innerHTML='\
    <div id="ext_userID">ID here</div>\
    <input type="text" id="ext_grade">\
    <input text ="Submit and show next" type="submit" id="ext_submit"/>'

    submit_form.onsubmit = function(){
        var ext_entredGrade = $("#ext_grade")[0].value;
        if (ext_entredGrade<= 100 && ext_entredGrade>= 0) {
            $(".yui3-button")[0].click();
            felement.childNodes[0].value =ext_entredGrade;
            $('#id_saveandshownext').click();
        }else
        {
            alert("Illegal grade");
        }
        return false;
    };
    ;

    pageheader.insertBefore(submit_form, navigationSearch);
    $("#ext_userID")[0].innerHTML = $(".usersummary")[0].childNodes[0].childNodes[2].innerHTML;
    var pdfImage = $(".drawingcanvas")[0];
    var boxSize = $(".yui3-widget")[0].style.width;
    pdfImage.style.backgroundSize=boxSize+",auto"
    $("#ext_grade")[0].value = felement.childNodes[0].value;
    $("#ext_grade")[0].focus();
    $("#ext_grade").select();
    if(pageheader!=null) clearInterval(retry);
},50);
