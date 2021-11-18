var c = 0;
function func() {
  var b = document.getElementsByClassName("btncart");
  b[0].innerHTML = "Item Added to cart";
  c = c+1;
  console.log(c);
}
var index = 0;
myFunction();

function myFunction() {
  var i;
  var img = document.getElementsByClassName("slideimages");
  for (i = 0; i < img.length; i++) {
    img[i].style.display = "none";  
  }
  index++;
  if (index > img.length) {
    index = 1
  }    
  img[index-1].style.display = "block";  
  setTimeout(myFunction, 1800); 
}

function validateForm()
{
  var mail = document.forms["forml"]["email"].value;
  if (mail == "") {
    alert("Email must be filled out");
    return false;
  }
  var password = document.forms["forml"]["password"].value;
  if (password < 999999) {
    alert("Password must contain minimum of 6 characters");
    return false;
  }
}

function validateForm1()
{
 
  var name = document.forms["formsi"]["name"].value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  var num = document.forms["formsi"]["number"].value;
  if (num == "") {
    alert("Number must be filled out");
    return false;
  }
  if (isNaN(num) ||num < 1000000000 || num > 9999999999 ) {
    alert("Please enter the correct number");
    return false;
  }
  var mail = document.forms["formsi"]["email"].value;
  if (mail == "") {
    alert("Email must be filled out");
    return false;
  }
  var password = document.forms["formsi"]["password"].value;
  if (password == "") {
    alert("Password must be filled");
    return false;
  }
  if (password < 100000) {
    alert("Password must contain minimum of 6 characters");
    return false;
  }
  var rpassword = document.forms["formsi"]["rpassword"].value;  
  if (password != rpassword) {
    alert("Password must match");
    return false;
  }
}

function validateForm2()
{
   var name = document.forms["formct"]["name"].value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  var num = document.forms["formct"]["number"].value;
  if (num == "") {
    alert("Number must be filled out");
    return false;
  }
  if (isNaN(num) ||num < 1000000000 || num > 9999999999 ) {
    alert("Please enter the correct number");
    return false;
  }
  var mail = document.forms["formct"]["email"].value;
  if (mail == "") {
    alert("Email must be filled out");
    return false;
  }
  var query = document.forms["formct"]["query"].value;
  if (query == "") {
    alert("Please write your query ");
    return false;
  }
  
}