function getDayOfWeek() {
        document.getElementById("DayOfWeek").innerHTML = (((century/4) - 2 * century - 1) + ((26 * (month + 1) / 10)) + date ) % 7
        console.log(DayOfWeek)
}