// et userForm = document.getElementById("form");

// // console.log(century);

// userForm.addEventListener('submit', (e)=>{

//     e.preventDefault();

//     let century = document.getElementById("century").value;

//     let year = document.getElementById("year").value;

//     let month = document.getElementById("month").value;

//     let day = document.getElementById("day").value;

//     console.log(century +" " +year +" " +month +" "+day );
//     alert(century);
//     // document.getElementById("akan").innerHTML = century    
// });

// let submitData = () => {
// };

// submitData();





function getDayOfWeek() {
        let cob = document.getElementById("cob").value;
        let yob = document.getElementById("yob").value;
        let mob = document.getElementById("mob").value;
        let dob = document.getElementById("dob").value;
        let fSex = document.getElementById("female").value;
        let mSex = document.getElementById("male").checked;

        let d = (((cob/4) - 2 * cob - 1) + ((5 * yob / 4)) + ((26 * (mob + 1) / 10)) + dob ) % 7;
        let DayOfWeek = (Math.floor(d));

        if (mSex == true) {
            if (DayOfWeek == 1) {
                alert("Kwadwo");
            } else if (DayOfWeek == 2) {
                alert("Kwabena");
            } else if (DayOfWeek == 3) {
                alert("Kwaku");
            } else if (DayOfWeek == 4) {
                alert("Yaw");
            }
            else if (DayOfWeek == 5) {
                alert("Kofi");
            }
            else if (DayOfWeek == 6) {
                alert("Kwame");
            }
            else if (DayOfWeek == 7) {
                alert("Kwasi");
            }
        } else {
            if (DayOfWeek == 1) {
                alert("Adwoa");
            } else if (DayOfWeek == 2) {
                alert("Abenaa");
            } else if (DayOfWeek == 3) {
                alert("Akua");
            } else if (DayOfWeek == 4) {
                alert("Yaa");
            }
            else if (DayOfWeek == 5) {
                alert("Afua");
            }
            else if (DayOfWeek == 6) {
                alert("Ama");
            }
            else if (DayOfWeek == 7) {
                alert("Akosua");
            }
        }
        return "Invalid Day Of Week";
}