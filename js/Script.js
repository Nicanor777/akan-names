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
                alert("Your Akan Name Is: Kwadwo");
            } else if (DayOfWeek == 2) {
                alert("Your Akan Name Is: Kwabena");
            } else if (DayOfWeek == 3) {
                alert("Your Akan Name Is: Kwaku");
            } else if (DayOfWeek == 4) {
                alert("Your Akan Name Is: Yaw");
            }
            else if (DayOfWeek == 5) {
                alert("Your Akan Name Is: Kofi");
            }
            else if (DayOfWeek == 6) {
                alert("Your Akan Name Is: Kwame");
            }
            else if (DayOfWeek == 7) {
                alert("Your Akan Name Is: Kwasi");
            }
        } else {
            if (DayOfWeek == 1) {
                alert("Your Akan Name Is: Adwoa");
            } else if (DayOfWeek == 2) {
                alert("Your Akan Name Is: Abenaa");
            } else if (DayOfWeek == 3) {
                alert("Akua");
            } else if (DayOfWeek == 4) {
                alert("Your Akan Name Is: Yaa");
            }
            else if (DayOfWeek == 5) {
                alert("Your Akan Name Is: Afua");
            }
            else if (DayOfWeek == 6) {
                alert("Your Akan Name Is: Ama");
            }
            else if (DayOfWeek == 7) {
                alert("Your Akan Name Is: Akosua");
            }
        }
        return "Invalid Day Of Week";
}