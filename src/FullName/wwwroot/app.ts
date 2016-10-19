let greetBtn = (<HTMLButtonElement>document.getElementById("greetMe"));
greetBtn.addEventListener('click', function () {
    // var fname = prompt("What is your first name?");
    // var lname = prompt("What is your last name?");
    let fname:string = (<HTMLInputElement>document.getElementById("fname")).value;
    let lname:string = (<HTMLInputElement>document.getElementById("lname")).value;
    alert("Welcome to my page, " + fname + " " + lname);
});


