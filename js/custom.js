
console.log(":===-----===:");

// chrome.browserAction.onClicked.addListener(function(tab) {
//     console.log(":===-----===:",tab);
// });

console.log(":===-----===:");

$(document).ready(function () {
    console.log("working yes");



    chrome.storage.onChanged.addListener(function(changes, namespace) {
        for (key in changes) {
            var storageChange = changes[key];
            console.log('Storage key "%s" in namespace "%s" changed. ' +
                'Old value was "%s", new value is "%s".',
                key,
                namespace,
                storageChange.oldValue,
                storageChange.newValue);



        }
    });
    $("#logout-user").click(function (e) {
        e.preventDefault()
        chrome.storage.local.clear()
        $(".login-sec").show()
        $("#logout-user").hide()
        $(".loader").hide()
    })








    $('#login-auth').on("submit",function(e){
        e.preventDefault()
        var email= this.elements.email
        var pwd= this.elements.pwd
        if(!email.value){
            throwError('Please enter an email',email.id);
        } else if (!pwd.value){
            throwError('Please enter your password',pwd.id);
        } else {

            chrome.storage.local.set({'token': Math.random().toString(18).replace(".", ''), 'id': Math.random().toString(18).replace(".", '')}, function() {
                console.log('Settings saved');
            });


            chrome.storage.local.get(['id', 'token'], function(items) {
                console.log('Settings retrieved', items);
                debugger
                if(items.token){
                    console.log("User is logggggggggggggggggggggggggggggggggggggggggggeeeeeeeeeeeeddddddddddd in")
                    $("#logout-user").show()
                    $(".prop-sec").show()
                    $(".login-sec").hide()
                    $(".loader").show()
                }
                else{
                    $(".login-sec").show()
                    $("#logout-user").hide()

                }

            });

            console.log('user info saved');
            $("#logout-user").show()








        }

    })
    function throwError(error,id){
        $(".error-notifier").remove()
        $('<div class="error-notifier" id="errors-'+ id + '"> <p>' + error + '</p></div>').insertAfter($("#"+id))
        return false;
    }



});
