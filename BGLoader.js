/**
 * Created by yonatan on 4/17/2015.
 */

counter = 1;
function openInBg(request){
    var exID = request[0];
    var rowID = request[counter];
    counter++;
    var urlOfEdit =
        "http://moodle2.cs.huji.ac.il/nu14/mod/assign/view.php?id="+ exID +"&rownum="+ rowID+"&action=grade";
    chrome.tabs.create({ url: urlOfEdit });
    //var ifrm = document.createElement("IFRAME");
    //ifrm.setAttribute("src",
    //    "http://moodle2.cs.huji.ac.il/nu14/mod/assign/view.php?id="+ exID +"&rownum="+ rowID+"&action=grade");
    //document.body.appendChild(ifrm);
}


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        openInBg(request);
     //setInterval(openInBg(request),5000);
    }
);

