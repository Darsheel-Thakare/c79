var abcd=[];
function submit(){
    var name1=document.getElementById("nameofthystudent").value;
    var name2=document.getElementById("nameofthatstudent").value;
    var name3=document.getElementById("nameofyourstudent").value;
    var name4=document.getElementById("nameofmystudent").value;
    abcd.push(name1);
    abcd.push(name2);
    abcd.push(name3);
    abcd.push(name4);
    document.getElementById("displayname").innerHTML=abcd;
    document.getElementById("submitbuton").style.display="none";
    document.getElementById("strowbuton").style.display="inline-block";
}
function sortingw(){
abcd.sort();
document.getElementById("displayname").innerHTML=abcd;

}
