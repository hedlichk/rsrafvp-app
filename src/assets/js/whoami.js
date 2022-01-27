window.onload = function whoAmI() {
    if (localStorage.userName == null || localStorage.userName == "") {
        localStorage.userName = "Guest";
    }
    document.getElementById("fldWhoAmI").innerHTML = localStorage.userName;
};

