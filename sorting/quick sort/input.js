var i = 0;
var arr = Array();

function Add(){
    // document.getElementById("Display").innerHTML="The given Array   : ";
    // arr[i] = document.getElementById("input").value;
    // i++;
    // document.getElementById("input").value="";

    // var div = document.createElement("div");
    // div.setAttribute("class","algo-container");
    // div.setAttribute("width","1000px !important");
    // var p = document.createElement("p");
    // p.setAttribute("id","Display");
    // div.appendChild(p);
    // document.body.appendChild(div);

    const inputArray = document.getElementById("input").value;
    arr = inputArray.split(",").map(Number);
    document.getElementById("Display").innerHTML+="The given Array :    ";
    document.getElementById("Display").innerHTML+=arr;
    console.log(arr);
}