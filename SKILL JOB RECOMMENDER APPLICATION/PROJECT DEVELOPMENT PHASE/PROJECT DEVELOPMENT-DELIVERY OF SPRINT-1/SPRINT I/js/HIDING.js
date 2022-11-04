var account = document.getElementById("Accountinfo");
var persondet = document.getElementById("persondet");
var education=document.getElementById("educationdet");
var menu=document.getElementById("menu");
var skills=document.getElementById("skills");
var declaret=document.getElementById("declaration");
var check=document.getElementById("check");
var check2=document.getElementById("check2");
var check3=document.getElementById("check3");
var check4=document.getElementById("check4");


account.style.display = "";
persondet.style.display="none";
education.style.display = "none";
menu.style.display="none"
skills.style.display="none";
declaret.style.display="none";

function persondetFun(){
menu.style.display=""
account.style.display = "none";
persondet.style.display = ""
skills.style.display="none";
check.style.display="none";
check2.style.display="none";
check3.style.display="none";
check4.style.display="none";
education.style.display="none";
declaret.style.display="none";

}


function educationalFun(){
menu.style.display=""
account.style.display = "none";
persondet.style.display = "none"
skills.style.display="none";
check.style.display="";
check2.style.display="none";
check3.style.display="none";
education.style.display="";
declaret.style.display="none";

}

function skillsFun(){
menu.style.display=""
account.style.display = "none";
persondet.style.display = "none"
skills.style.display="";
check.style.display="";
check2.style.display="";
check3.style.display="none";
education.style.display="none";
declaret.style.display="none";

}

function declaretFun(){
menu.style.display=""
account.style.display = "none";
persondet.style.display = "none"
skills.style.display="none";
check.style.display="";
check2.style.display="";
check3.style.display="";
education.style.display="none";
declaret.style.display="";


}