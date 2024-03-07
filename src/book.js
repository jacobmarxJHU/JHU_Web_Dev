decrementTimer();
setInterval("decrementTimer()", 1000);

function decrementTimer() {

    var minute = document.getElementById("minuteLeft").innerHTML;
    var second = document.getElementById("secondLeft").innerHTML;

    second--;

    if (second < 0) {
        second = 59;
        minute--;
    } 

    if (minute >= 0) {
        document.getElementById("minuteLeft").innerHTML = minute;
        document.getElementById("secondLeft").innerHTML = second;
    }

}