function validateForm() {
    var a = document.forms["myForm"]["First_name"].value;
     var b = document.forms["myForm"]["mail"].value;
     var c = document.forms["myForm"]["mobile"].value;
     var d = document.forms["myForm"]["Dob"].value;
    var e = document.forms["myForm"]["country"].value;
    var f = document.forms["myForm"]["Pin_code"].value;
    if (a == ""||b == ""||c == ""||d == ""||e == ""||f == "") 
    {
        window.alert("Fill in the required details");
        return false;
    }
    else{
        var x=confirm("Are you sure to submit");
if(x==true)
{window.alert("Thank you. You will receive a confirmation email within 5 minutes.");
    }
}
}
function abc()
{
    var z=prompt("Enter your Email","");  
    if(z!=="")
    {
    window.alert("You will receive an email with password reset link. Thank You.");    }
    else{window.alert("Please enter your Email");
        }
}
function login()
{
    var s=document.forms["myForm"]["username"].value;
    var t=document.forms["myForm"]["password"].value;
    if(s=="" || t=="")
    {
        window.alert("Please enter the required details");
        return false;
    }
}