function sleep(ms){ 
    return new Promise(resolve => setTimeout(resolve, ms)); 
}

async function bubbleSort(ar) 
{ 
    var tbl = document.getElementById('tbl');

    let i, j, keys; 
    for (i = 0; i < ar.length; i++)
    { 
          
        for(j = 0; j < ar.length - i - 1; j++)
        {
            var cell = tbl.rows[0].cells[j]; 
            cell.setAttribute("bgcolor","yellow");

            var cell = tbl.rows[0].cells[j+1]; 
            cell.setAttribute("bgcolor","yellow");

            await sleep(500);



            if(ar[j] > ar[j+1])
            {
                var cell = tbl.rows[0].cells[j]; 
                cell.setAttribute("bgcolor","orange");

                var cell = tbl.rows[0].cells[j+1]; 
                cell.setAttribute("bgcolor","orange");
    
                keys = ar[j];
                ar[j] = ar[j+1];
                ar[j+1] = keys;

                tbl.rows[0].cells[j].innerHTML = ar[j];
                tbl.rows[0].cells[j + 1].innerHTML = ar[j + 1];

                await sleep(500);
            }

            var cell = tbl.rows[0].cells[j]; 
            cell.setAttribute("bgcolor","");

            var cell = tbl.rows[0].cells[j+1]; 
            cell.setAttribute("bgcolor","");

        }

        var cell = tbl.rows[0].cells[j]; 
        cell.setAttribute("bgcolor","rgb(99,158,74)");
    }
    var cell = tbl.rows[0].cells[0]; 
    cell.setAttribute("bgcolor","rgb(99,158,74)");

}