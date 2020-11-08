function validation(){
var name=document.getElementById("Name").value;
var subject=document.getElementById("Subject").value;
var phone=document.getElementById("Phone").value;
var email=document.getElementById("Email").value;
var message=document.getElementById("Message").value;

var error_message=document.getElementById("error_message");
var text;
error_message.style.padding="10px";
if(name.length<5){
	text="Please Enter the valid Name";
	error_message.innerHTML=text;
	return false;
}
 if(subject.length<5){
	text="Please Enter the valid Subject";
	error_message.innerHTML=text;
	return false;
}
if(isNaN(phone) || phone.length!=10){
	text="Please Enter the valid Phone Number";
	error_message.innerHTML=text;
	return false;
}
 if(email.indexOf("@")==-1 || email.length<6){
	text="Please Enter the valid Email";
	error_message.innerHTML=text;
	return false;
}

 if(message.length<=120){
	text="Please Enter the more than 120 characters";
	error_message.innerHTML=text;
	return false;
}

	alert("Form Submitted successfully");
return true;


}