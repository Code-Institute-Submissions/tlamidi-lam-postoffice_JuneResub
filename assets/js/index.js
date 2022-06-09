document.addEventListener("DOMContentLoaded", function () {
    function showTime() {      //function to determine settings, from day to seconds.
        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        let period = 'AM';
        // An if statement determining first 12 hour count as AM
        if (h == 0) {
            h = 12;
        }
        // An if statement for another 12 hour count as PM
        if (h > 12) {
            h = h - 12;
            period = "PM";
        }
        // format for the clock display at the terminal
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
        let time = h + ":" + m + ":" + s + "" + period;

        document.getElementById("MyClockDisplay").innerText =
            time;
        document.getElementById("MyClockDisplay").textContent =
            time;

        setTimeout(showTime, 1000);

    }
    // calling the showtime function
    showTime();
})

function  myClockDisplay() {
    if (body.style.backgroundColor = "orange") {
        body.style.backgroundColor =  "green";
    }else {
        body.style.backgroundColor = "orange";
    }
}
