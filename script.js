let a = 1;

let lesson = function (x){
    let b = 2;
    console.log(x + b);
    
}




function whodat(){
    let name = prompt("what is your name?")
    //let name = console.Readline();
    if (name != 'DJ'){
        alert("ERROR");
    } 

   
}

function validatePass() {
    
    let password = document.getElementById("RegPass").value;
    alert(password.length);
    //while (password.length <5 || password.length > 15) {
        if (password.length > 4){
            alert("Password not valid");

        }
        if (password.length < 15){
            alert("Invalid Password");
        }

        if (username.length > 2){
            alert("Invalid Name")
        }
        //alert("Hello! I am an alert box!");
   // }
}
function greet(name) {
    return "Hello, " + name;
  }
  greet("Grace Hopper");
//console.log(b);