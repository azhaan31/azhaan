function showSignup(){
    document.getElementById("signUp").style.display = "flex";
    document.getElementById("login").style.display = "none";
    document.getElementById("btns2").style.backgroundColor = "#e6aa3a";
    var btnElement = document.getElementById("btns1");
    btnElement.style.backgroundColor = "white";
    btnElement.style.color = "black";
}
function showLogin(){
    document.getElementById("signUp").style.display = "none";
    document.getElementById("login").style.display = "flex";
    document.getElementById("btns1").style.backgroundColor = "#033a37";
    var btnElement = document.getElementById("btns2");
    btnElement.style.backgroundColor = "white";
    btnElement.style.color = "black";
}
