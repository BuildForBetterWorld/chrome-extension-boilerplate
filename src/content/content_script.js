
$(".login-sec").slideUp()
chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    console.log("response.uid",response);
})


// chrome.tabs.query({active:false}, function(tabs) {
//     var tab = tabs[tabs.length-1];
//     tab_title = tab.title;
//     tab_id=tab.id;
//     chrome.tabs.executeScript(tab.id, {
//         // code: 'document.querySelectorAll("[itemprop=description]")[0].textContent'
//     }, display_h1);
// });
//




