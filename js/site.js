function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    let y = document.forms["myForm"]["lname"].value;
    let z = document.forms["myForm"]["email"].value;
    if (x == "" && y == "" && z == "") {
        alert("All fields must be filled out");
        return false;
    }
    else if (x == "") {
        alert("First name field must be filled out");
        return false;
    }
    else if (y == "") {
        alert("Last name field must be filled out");
        return false;
    }
    else if (z == "") {
        alert("Email field must be filled out");
        return false;
    }
}


const x = { name: 'joe' };

let y = x;

y.name = 'bob';

console.log(x.name);
document.write();