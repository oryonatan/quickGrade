/**
 * Created by yonatan on 4/17/2015.
 */
all_submitted_rows = new Array();
var rowFinder =new RegExp();
rowFinder.compile(/mod_assign_grading_r(.*)_/g);
var exID = $(".submissionstatussubmitted")[0].parentNode.baseURI.match(/\?id=(.*)&/)[1];

all_submitted_rows.push(exID);
$.each($(".submissionstatussubmitted"),function (index,item){
    rowFinder.lastIndex = 0;
    var match = rowFinder.exec(item.parentNode.id);
    all_submitted_rows.push(match[1]);
});

chrome.runtime.sendMessage(all_submitted_rows,null);