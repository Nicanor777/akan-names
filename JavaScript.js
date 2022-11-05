function getDayOfWeek() {
        cob = document.getElementById("cob").ariaValueMax;
        yob = document.getElementById("yob").ariaValueMax;
        mob = document.getElementById("mob").ariaValueMax;
        dob = document.getElementById("dob").ariaValueMax;
        fSex = document.getElementById("female").ariaValueMax;
        mSex = document.getElementById("male").ariaValueMax;

        document.getElementById("DayOfWeek").innerHTML = (((cob/4) - 2 * cob - 1) + ((5 * yob / 4)) + ((26 * (mob + 1) / 10)) + dob ) % 7;

        if (mSex == true) {
            if (DayOfWeek == Monday) {
                console.log
            } else if (DayOfWeek == Tuesday) {
                console.log
            } else if (DayOfWeek == Wednesday) {
                console.log
            } else if (DayOfWeek == Thursday) {
                console.log
            }
            else if (DayOfWeek == Friday) {
                console.log
            }
            else if (DayOfWeek == Saturday) {
                console.log
            }
            else if (DayOfWeek == Sunday) {
                console.log
            }
        } else {
            if (DayOfWeek == Monday) {
                console.log
            } else if (DayOfWeek == Tuesday) {
                console.log
            } else if (DayOfWeek == Wednesday) {
                console.log
            } else if (DayOfWeek == Thursday) {
                console.log
            }
            else if (DayOfWeek == Friday) {
                console.log
            }
            else if (DayOfWeek == Saturday) {
                console.log
            }
            else if (DayOfWeek == Sunday) {
                console.log
            }
        }
        console.log(DayOfWeek);
}