var i = 0;
var arr = Array();

function Add(){
    // document.getElementById("Display").innerHTML="The given Array   : ";
    // arr[i] = document.getElementById("input").value;
    // i++;
    // document.getElementById("input").value="";

    const inputArray = document.getElementById("input").value;
    arr = inputArray.split(",").map(Number);
    document.getElementById("Display").innerHTML+="The given Array :    ";
    document.getElementById("Display").innerHTML+=arr;
    console.log(arr);
}