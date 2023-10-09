function generateTable(arr){

    // console.log(arr);

    var div = document.createElement("div");
    div.setAttribute("class","algo-container");

    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    tbl.setAttribute("class","table");

    var row = document.createElement("tr");

    for(let j = 0; j < arr.length; j++){

       // console.log(arr[j]);

        const cell = document.createElement("td");
        const cellText = document.createTextNode(arr[j]);
        cell.appendChild(cellText);
        cell.setAttribute("height","100px");
        cell.setAttribute("width","100px");
        cell.setAttribute("text-align","centre");
        cell.setAttribute("vertical-align","middle");
        cell.setAttribute("font-size","100px");
        row.appendChild(cell);
    }

    tblBody.appendChild(row);

    tbl.appendChild(tblBody);

    document.body.appendChild(tbl);

    tbl.setAttribute("border", "2");
    tbl.setAttribute("id","tbl");

    quickSort(arr, 0, arr.length - 1);
    
}