function validate(){
    var name=document.getElementById('name').value;
    var password=document.getElementById('password').value;
    //var email=document.getElementById('email').value;
    var phone=document.getElementById('phone').value;

    var nameList=['Saubhagya','AKD','Sri Priya'];
    
    var nameLength=name.length;
    var passwordLength=password.length;
    var phoneLength=phone.length;
    var special = /^[A-Za-z]+$/;

   

    if(!(name.match(special)) || nameLength<5 || nameLength>15)
    {
        alert("invalid name");
        document.getElementById('name').focus();
    }
    else if (password ==""||password.length<5){
alert("enter valid password");
document.myform.pass.value="";

}
else if (!password.match(/[1-9]/)){
alert("your password must have a number");
document.myform.pass.value="";

}
else if (!password.match(/[A-Z]/)){
alert("uppercase missing in password");
document.myform.pass.value="";

}
else if (!password.match(/[a-z]/)){
alert("lowercase missing in password");
document.myform.pass.value="";

}
else if (!password.match(/[!@#$%^&*]/)){
alert("special character missing in password");
document.myform.pass.value="";

}
    else if(isNaN(phone) || phoneLength!=10 )
    {
        alert("Incorrect Number");
        document.getElementById('phone').focus();
    }
 
    else if(nameList.indexOf(name) !== -1 )
    {
        alert('user name exists');
        document.getElementById('name').focus();
    }
    
    else
    {
        document.getElementById("print").innerHTML="<br/>Registation Done"
        alert('User Registered');
        document.getElementById("print").innerHTML="Registation Done";
    }
    
}