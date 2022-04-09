chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        evaluate(request.value);
        sendResponse({ status: "done" });
    }
);

function evaluate(e) {
    let array = [];
    for (i = 1; i <= 15; i++) {
        array.push(document.getElementsByName(`evaluate[${i}]`));
    }
    array.forEach(element => {
        element[e].checked = true;
    });
}