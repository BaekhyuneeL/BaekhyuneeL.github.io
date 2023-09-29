/*
Name: William Le
File: homework3.js
Date Created: 2023/06/17
Date Updated: 2023/07/01

This is a Javascript File that connects with my homework 2 in order to program my website
*/ 

function updateSliderValue() {
    var slider = document.getElementById("slidehour");
    var value = document.getElementById("slidevalue");
    value.textContent = slider.value;
}

function getdata() {
    var formSignUp = document.getElementById("signup");
    var reviewoutput = "<table class='review'><th>Data Name</th><th>Data Type</th><th>User Input</th>";
    var dataName;

    for(x = 0; x < formSignUp.length; ++x) {
        console.log("item " + x + "" + formSignUp.elements[x].name + " = " + formSignUp.elements[x].value);

        if(formSignUp.elements[x].value !== "") {
            var dataName = formSignUp[x].type;

            switch(dataName) {
                case "checkbox":
                    if(formSignUp.elements[x].checked) {
                        reviewoutput += "<tr><td>" + formSignUp.elements[x].name + "</td>";
                        reviewoutput += "<td>" + dataName + "</td>";
                        reviewoutput += "<td class= 'outputdata'>Chceked</td></tr>";
                    }
                    break;
                case "radio":
                    if(formSignUp.elements[x].checked) {
                        reviewoutput += "<tr><td>" + formSignUp.elements[x].name + "</td>";
                        reviewoutput += "<td>" + dataName + "</td>";
                        reviewoutput += "<td class= 'outputdata'>" + formSignUp.elements[x].value + "</td></tr>";
                    }
                    break;
                case "button":
                case "submit":
                case "reset":
                    break;
                default:
                    reviewoutput += "<tr><td>" + formSignUp.elements[x].name + "</td>";
                    reviewoutput += "<td>" + dataName + "</td>";
                    reviewoutput += "<td class='outputdata'>" + formSignUp.elements[x].value + "</td></tr>";
            }
        }

    }
    reviewoutput += "</table>";
    openPopupWindow(reviewoutput);
}

function openPopupWindow(reviewoutput) {
    var popup = window.open("", "Form Data", "width=500,height=500");
    popup.document.write(
        "<html><head><title> SKT T1 Review Data</title><link rel = 'stylesheet' href = 'homework3reviewtable.css'></head><body id = 'reviewoutput'>"
            + 
                reviewoutput + "</body></html>");
    popup.document.close();
}

function checkfname() {
    x = document.getElementById("fname").value;
    if(x.length < 2) {
        document.getElementById("error_Input").innerHTML = "First Name Is Too Short!";
        e_flag = 1;
    }
    else {
    
        if(x.match(/^[A-Z][a-zA-Z\s-/']+$/)) {
            document.getElementById("error_Input").innerHTML = "";
        }
            else {
            document.getElementById("error_Input").innerHTML = "Illegal Characters in First Name or First Character Lowercase";
            e_flag = 1;
        }
    }
}

function checkmiddle() {
    x = document.getElementById("mname").value
    if(x.length < 1) {
        document.getElementById("error_Input").innerHTML = ""
        e_flag = 0 
    }
    else {
        if(x.match(/[A-Z]/)) {
        document.getElementById("error_Input").innerHTML = "";
        }
        else {
        document.getElementById("error_Input").innerHTML = "Illegal Characters in Middle Initals Or First Character Lowercase";
        e_flag = 1;
        }
        }
    }

function checklname() {
    x = document.getElementById("lname").value;
    if(x.length < 1) {
        document.getElementById("error_Input").innerHTML = "Last Name Is Too Short!";
        e_flag = 1;
    }
    else {
    
        if(x.match(/^[A-Z][a-zA-Z2-9\s-/']*$/)) {
            document.getElementById("error_Input").innerHTML = "";
        }
            else {
            document.getElementById("error_Input").innerHTML = "Illegal Characters in Last Name or First Character Lowercase";
            e_flag = 1;
        }
    }
}

function checkpaddress() {
    x = document.getElementById("paddress").value
    if(x.match(/^[a-zA-Z0-9\s\.,#'-]+$/)) {
        document.getElementById("error_Input2").innerHTML = ""
    }
    else {
        document.getElementById("error_Input2").innerHTML = "You Entered an Invalid Address Format"
        e_flag = 1;
    }
}
function checkaccid() {
    x = document.getElementById("accid").value
    if(x.length < 9 ) {
        document.getElementById("error_Input2").innerHTML = "Please Enter AT Least 9 Numbers"
        e_flag = 1;
    }
    else {
        if(x.match(/^[0-9][0-9]*$/)) {
            document.getElementById("error_Input2").innerHTML = ""
        }
        else {
            document.getElementById("error_Input2").innerHTML = "Please Only Enter Numbers"
            e_flag = 1;
        }
    }
}

function checksaddress() {
    x = document.getElementById("saddress").value
    if(x.length < 1) {
        document.getElementById("error_Inputs").innerHTML = ""
        e_flag = 0
    }
    else {
        if(x.match(/^[a-zA-Z0-9\s.,#'-]+$/)) {
        document.getElementById("error_Inputs").innerHTML = ""
        }
        else {
        document.getElementById("error_Inputs").innerHTML = "You Entered an Invalid Address Format"
        e_flag = 1;
         }
    }
}      

function checkcity() {
    x = document.getElementById("city").value
    if(x.match(/^[A-Z][a-zA-Z\s\.,-]*$/)) {
        document.getElementById("error_Input3").innerHTML = ""
    }
    else {
        document.getElementById("error_Input3").innerHTML = "Cities MUST Start with an Uppercase And Have No Illegal Characters"
        e_flag = 1;
    }
}

function checkzip() {
    x = document.getElementById("zipcode").value
    if(x.length < 5 ) {
        document.getElementById("error_Input3").innerHTML = "Please Enter At Least 5 Numbers"
        e_flag = 1;
    }
    else {

        if(x.match(/^[0-9][0-9\-]+$/)) {
            document.getElementById("error_Input3").innerHTML = ""
        }
        else {
            document.getElementById("error_Input3").innerHTML = "Please Only Input Numbers and ' - ' (Dashes)"
            e_flag = 1;
        }
    }
}

function checkemail() {
    x = document.getElementById("emailaddress").value
    if(x.match(/^[A-Za-z0-9]+[A-Za-z0-9._-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        document.getElementById("error_Input4").innerHTML = ""
    }
    else {
        document.getElementById("error_Input4").innerHTML = "Invalid Email Address Format"
        e_flag = 1;
    }
}

function checkphone() {
    x = document.getElementById("phonenumberinput").value
    if(x.match(/^(\d{3}-\d{3}-\d{4}|\d{10})$/)) {
        document.getElementById("error_Input4").innerHTML = ""
    }
    else {
        document.getElementById("error_Input4").innerHTML = "Invalid Phone Number Format Please Only allow ' - ' as the only special character"
        e_flag = 1;
    }
}

function checkuserid() {
    x = document.getElementById("userid").value
    if(x.match(/^[A-Za-z][A-Za-z0-9._-]*$/)) {
        document.getElementById("error_Input5").innerHTML = ""
    }
    else {
        document.getElementById("error_Input5").innerHTML = "Invalid User ID First Character Must be a Letter Afterwards Only Use Letters, Numbers, ' - ' ' _ '"
        e_flag = 1;
    }

}

function showpassword() {
    x = document.getElementById("dpassword")
    if(x.type === "password") {
        x.type = "text"
    }
    else {
        x.type = "password"
    }
}

document.addEventListener('DOMContentLoaded', function() {
    passwordchecklist()
}) 

function passwordchecklist() {
    var input = document.getElementById("dpassword");
    var Letter = document.getElementById("Letter");
    var Lower = document.getElementById("Lower");
    var sc = document.getElementById("Scharacter");
    var num = document.getElementById("Number");
    var len = document.getElementById("Length");

    input.onfocus = function () {
        document.getElementById("message").style.display = "block"
    }

    input.onblur = function () {
        document.getElementById("message").style.display = "none"
    }

    input.onkeyup = function () {
        var lowercaseletters = /[a-z]/g
        var uppercaseletters = /[A-Z]/g
        var number = /[0-9]/g
        var scc = /[!@#%^&*()\[\]\-_=\\\/><.,`~'\\]/g
        var password = input.value

        if (password.match(lowercaseletters)) {
            Lower.classList.remove("invalid")
            Lower.classList.add("valid")
        }
        else {
            Lower.classList.add("invalid")
            Lower.classList.remove("valid")
            e_flag = 1;
        }

        if (password.match(uppercaseletters)) {
            Letter.classList.remove("invalid")
            Letter.classList.add("valid")
        } 
        else {
            Letter.classList.add("invalid")
            Letter.classList.remove("valid")
            e_flag = 1;
        }

        if (password.match(number)) {
            num.classList.remove("invalid")
            num.classList.add("valid")
        } 
        else {
            num.classList.add("invalid")
            num.classList.remove("valid")
            e_flag = 1;
        }

        if (password.length >= 8) {
            len.classList.remove("invalid")
            len.classList.add("valid")
        } 
        else {
            len.classList.add("invalid")
            len.classList.remove("valid")
            e_flag = 1;
        }

        if (password.match(scc)) {
            sc.classList.remove("invalid")
            sc.classList.add("valid")
        } 
        else {
            sc.classList.add("invalid")
            sc.classList.remove("valid")
            e_flag = 1;
        }
    }
}

function passwordmatch() {
    x = document.getElementById("dpassword").value
    y = document.getElementById("cpassword").value

    if(x==y) {
        document.getElementById("passwordmatch").innerHTML = "Password Matches!"
        document.getElementById("passwordmatch").style.color = "#66ff00"
    }
    else {
        document.getElementById("passwordmatch").innerHTML = "Passwords DO NOT Match!"
        e_flag = 1;
        document.getElementById("passwordmatch").style.color = "#EE4B2B"
    }
}

function showpassword2() {
    x = document.getElementById("cpassword")
    if(x.type === "password") {
        x.type = "text"
    }
    else {
        x.type = "password"
    }
}

/* Experiment (Did Not Like How It Looked On My Form)

function showaccid() {
    x = document.getElementById("accid")
    if(x.type === "password") {
        x.type = "text"
    }
    else {
        x.type = "password"
    }
}

*/

function checkerror() {
    e_flag = "0"
    checkfname()
    checkmiddle()
    checklname()
    checkpaddress()
    checksaddress()
    checkaccid()
    checkcity()
    checkzip()
    checkemail()
    checkphone()
    checkuserid()
    passwordmatch()
    passwordchecklist()

    if(e_flag == "1") {
        alert("Please Fix The Errors Shown On The Screen. Error Messages Can Be SEEN when you Maximize Window")
    }
    else {
        alert("Everything Looks Fine, You may submit your form!")
        document.getElementById("submit").disabled = false;
    }
}

function setCookie(cookiename, cookievalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 48 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cookiename + "=" + cookievalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cookiename) {
    let name = cookiename + "=";
    let ca = document.cookie.split(";");
  
    for (let x = 0; x < ca.length; x++) {
      let c = ca[x];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user !== "") {
      alert("Welcome back " + user);
      document.getElementById("fname").value = user;
      document.getElementById("welcome").textContent = "Welcome " + user + "!";
  
      document.getElementById("notMeText").addEventListener("click", function () {
        document.getElementById("fname").value = "";
        removeCookie("username");
        document.getElementById("welcome").textContent = ""
        alert("Cookie removed. You can now start as a new user.");

      });
    } 
    else {
      user = prompt("Hello New User, Please Enter Your First Name:", "");
      if (user !== "" && user !== null) {
        setCookie("username", user, 48);
        document.getElementById("fname").value = user;
        document.getElementById("welcome").textContent = "Welcome " + user + "!";
      }
    }
  }
  
  function removeCookie(cookiename) {
    document.cookie = cookiename + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    checkCookie();
    document.getElementById("welcome").textContent = "Welcome " + user + "!";
  }
  
  