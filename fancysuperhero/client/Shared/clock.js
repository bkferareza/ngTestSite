function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    document.getElementById('time').innerHTML = Date.parse('now');//.toString("dddd, MMMM dd yyyy | hh:mm:ss tt");
    var t = setTimeout(startTime, 500);
}

$(startTime);