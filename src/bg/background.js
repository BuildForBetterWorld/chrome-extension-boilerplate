console.log('Background initiated....')
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {


    chrome.storage.local.get(['id', 'token'], function(items) {
        console.log('Storage retrieved', items);
        if(items.token){
            console.log("User is logged in")
            sendResponse({uid: items.id})
        }
        else{
            return null

        }

    });

    chrome.cookies.get({"url": 'http://localhost:3000/',name: 'ajs_user_id'}, function(cookie) {
        if (cookie.value) {
            console.log("COOOOOOOOOOOOOOOOOOOOOOOOKIEEEEEE",cookie.value)
            var user_id_cookie = JSON.parse(decodeURIComponent(cookie.value));
            sendResponse({uid: user_id_cookie});


        }})
    chrome.tabs.create({
        active: false,
        url: 'http://example.com/posts'
    }, function(tab) {



        // chrome.cookies.getAll({"url":tab.url},function (cookie){
        //             console.log("cookie.length",cookie.length);
        //             var user_id_cookie = "";
        //             for(i=0;i<cookie.length;i++){
        //                 if (cookie[i].name == 'ajs_user_id') {
        //                     user_id_cookie = JSON.parse(decodeURIComponent(cookie[i].value));
        //                     console.log("lllllllllllllll",user_id_cookie);
        //                 }
        //             }
        //
        //             if (user_id_cookie) {
        //                   sendResponse({uid: user_id_cookie});
        //             }
        //
        //         });

        return true;

        /*chrome.tabs.executeScript(tab.id, {
            code: 'localStorage.setItem("key", "value");'
        }, function() {
            chrome.tabs.remove(tab.id);
        });*/
    });


    return true;

});







/*chrome.tabs.query({
    active: true,
    currentWindow: true
}, function(tabs) {
    var tabURL = tabs[0].url;
    console.log(tabURL);
});

chrome.tabs.query({
  'url' : 'http://dev.housefolios.com'
});

chrome.tabs.executeScript({
    code: 'sessionStorage.clear()'
  });
*/


/*chrome.windows.create({
    type : 'popup',
    url : "http://dev.housefolios.com",
    type: "popup"
}, function(newWindow) {

});*/


// chrome.storage.sync.get(['foo', 'bar'], function(items) {
//     console.log('Settings retrieved', items);
// });


// *******************DDP requests below************************
// var ddp = new MeteorDdp("wss://dev.housefolios.com/websocket");
//
// var publicParties = 0;
//
// ddp.connect().then(function () {
//     ddp.subscribe('propertsss').fail(function(err) {
// 	  console.log('We actually wanted to subscribe to players not plyers...');
// 	});
//
//     console.log(":-----:",ddp);
//
//     ddp.watch("properties", function (changedDoc, message) {
//     	// ddp.call('counter.increment',changedDoc._id)
//
//     	if (publicParties == 1) {
//     		// ddp.call('counter.increment', [changedDoc._id]);
//     	}
//
//
//         if (message === "added")
//             publicParties++;
//         if (message === "removed")
//             publicParties--;
//         chrome.browserAction.setBadgeText({text: publicParties.toString()});
//     });
// });

