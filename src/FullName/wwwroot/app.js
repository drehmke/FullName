var greetBtn = document.getElementById("greetMe");
greetBtn.addEventListener('click', function () {
    // var fname = prompt("What is your first name?");
    // var lname = prompt("What is your last name?");
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    alert("Welcome to my page, " + fname + " " + lname);
});
//# sourceMappingURL=app.js.map