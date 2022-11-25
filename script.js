
var check = function() {
    if (document.getElementById("password").value == document.getElementById("confirm_password").value) {
        document.getElementById("label_confirm").style.color = "#ff3fe7"
        document.getElementById("label_pass").style.color = "#ff3fe7"
    } else {
        document.getElementById("label_confirm").style.color = "red"
        document.getElementById("label_pass").style.color = "red"
    }
}

const sumbitBtn = document.querySelector(".create_acc")

sumbitBtn.addEventListener("click", passCheck);

function passCheck() {
    if (document.getElementById("password").value !=
    document.getElementById("confirm_password").value) {
        alert("Password Doesn't Match")
    }
}
