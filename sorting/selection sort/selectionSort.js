function sleep(ms){ 
        return new Promise(resolve => setTimeout(resolve, ms)); 
}
async function selectionSort(ar) 
{ 

    var tbl = document.getElementById('tbl');

    var i, j, min_index, temp ;
  
    for (i = 0; i < ar.length-1; i++)
    {
        min_index = i;
        for (j = i + 1; j < ar.length; j++){

            if (ar[j] < ar[min_index])
                min_index = j;

            var cell = tbl.rows[0].cells[j]; 
            cell.setAttribute("bgcolor","yellow");

            await sleep(500);

            cell.setAttribute("bgcolor","");
        
        }
        
        var cel = tbl.rows[0].cells[min_index]; 
        cel.setAttribute("bgcolor","orange");
        var cel = tbl.rows[0].cells[i]; 
        cel.setAttribute("bgcolor","orange");

        await sleep(1000);

        var cel = tbl.rows[0].cells[min_index]; 
        cel.setAttribute("bgcolor","");

        temp=ar[min_index];
        ar[min_index]=ar[i];
        ar[i]=temp;

        //console.log(ar);

        tbl.rows[0].cells[min_index].innerHTML = ar[min_index];
        tbl.rows[0].cells[i].innerHTML = ar[i];

        var cel = tbl.rows[0].cells[i]; 
        cel.setAttribute("bgcolor","rgb(99,158,74)");

        await sleep(2000);
        
    }
    var cel = tbl.rows[0].cells[i]; 
    cel.setAttribute("bgcolor","rgb(99,158,74)");
}