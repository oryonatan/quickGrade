/**
 * Created by yonatan on 4/17/2015.
 */
var concurrentOpens = 1;
var counter = 1;
var shouldOpenInterval;
function openInBg(request){
    var exID = request[0];
    for (var i=0; i<concurrentOpens;i++) {
        try {
            var rowID = request[counter + i];
            if (typeof rowID == 'undefined' ) {
                clearInterval(shouldOpenInterval);
                return;
            }
            var urlOfEdit =
                "http://moodle2.cs.huji.ac.il/nu14/mod/assign/view.php?id=" + exID + "&rownum=" + rowID + "&action=grade";
            chrome.tabs.create({url: urlOfEdit},function(tab){
                setTimeout(function () {
                    chrome.tabs.remove(tab.id);
                },20000);
            });
        }
        catch (err) {
            break;
        }
    }
    counter += concurrentOpens;

    //var ifrm = document.createElement("IFRAME");
    //ifrm.setAttribute("src",
    //    "http://moodle2.cs.huji.ac.il/nu14/mod/assign/view.php?id="+ exID +"&rownum="+ rowID+"&action=grade");
    //document.body.appendChild(ifrm);
}


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        shouldOpenInterval = setInterval(openInBg,1000,request);
    }
);

