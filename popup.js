const sendMessageButton = document.getElementById('changeColor');
let array = document.getElementsByName("eval");
var rvalue;
sendMessageButton.onclick = async function (e) {

    for (i = 0; i < array.length; i++) {
        if (array[i].checked) {
            rvalue = array[i].value;
        }
    }
    let queryOptions = { active: true, currentWindow: true };
    let tab = await chrome.tabs.query(queryOptions);

    chrome.tabs.sendMessage(tab[0].id, { value: rvalue }, function (response) {
        console.log(response.status);
    });
}