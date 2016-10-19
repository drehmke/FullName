let greetBtn = (<HTMLButtonElement>document.getElementById("greetMe"));
greetBtn.addEventListener('click', function () {
    // var fname = prompt("What is your first name?");
    // var lname = prompt("What is your last name?");
    var fname:string = (<HTMLInputElement>document.getElementById("fname")).value;
    var lname:string = (<HTMLInputElement>document.getElementById("lname")).value;
    alert("Welcome to my page, " + fname + " " + lname);
});


