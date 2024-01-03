var usr = [{username: "hoda",password:"Password@1"},
{username: "hoda2",password:"Password@2"},
{username: "hoda3",password:"Password@3"},
{username: "hoda5",password:"Password@5"}]
function forget(){
var username = document.getElementById('inpuser').value;
var password = document.getElementById('updatepass').value;
for(var i = 0; i < usr.length ; i++){
  if(usr[i].username == username){
    usr[i].password = password
    alert("updated successfuly")
    console.log(usr);
    return true
  }
}
alert("username not found")
return false;
}
  function addValue() {
    var regax = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()|]).{8,16}$/
    var username = document.getElementById('Sign_up_text').value;
    var Password = document.getElementById('Sign_up_Pass').value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phonenum").value;
    var email = document.getElementById("email").value;
    if (username !== "" && Password !== "") {
     if(regax.test(Password)&& Password.length>=8)
     {
     var user = {
       username: username,
       password: Password,
      }
      usr.push(user);
      console.log(usr);
      alert('Data saved');
     }
     else
     {
       alert('Password not strong');
       
     }
     
    } else {
      alert('Fill in all data');
      
    }

   }
  function getValue() {
    var username = document.getElementById('Sign_in_text').value;
    var password = document.getElementById('Sign_in_Pass').value;
    for(var i = 0 ; i < usr.length ; i++){
    if (username === usr[i].username && password === usr[i].password ) {
      alert('Login completed');
      return true;
    }
  }
  alert('Invalid password or username');
  return false;
  }