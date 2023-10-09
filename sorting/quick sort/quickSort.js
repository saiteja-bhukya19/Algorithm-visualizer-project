function sleep(ms){ 
    return new Promise(resolve => setTimeout(resolve, ms)); 
}

async function partition(arr, low, high){

    var tbl = document.getElementById('tbl');

    let pivot = arr[high];

    var cel = tbl.rows[0].cells[high]; 
    cel.setAttribute("bgcolor","green");
    await sleep(500);

    var cel = tbl.rows[0].cells[high]; 
    cel.setAttribute("bgcolor","");

    let i = low -1;

    for(let j = low; j <= high; j++){
        if(arr[j] < pivot){
            i++;

            var cel = tbl.rows[0].cells[i]; 
            cel.setAttribute("bgcolor","yellow");
            var cel = tbl.rows[0].cells[j]; 
            cel.setAttribute("bgcolor","yellow");
            await sleep(500);

            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

            tbl.rows[0].cells[i].innerHTML = arr[i];
            tbl.rows[0].cells[j].innerHTML = arr[j];

            await sleep(500);
            var cel = tbl.rows[0].cells[i]; 
            cel.setAttribute("bgcolor","");
            var cel = tbl.rows[0].cells[j]; 
            cel.setAttribute("bgcolor","");
            

        }
    }

    var cel = tbl.rows[0].cells[i+1]; 
    cel.setAttribute("bgcolor","orange");
    var cel = tbl.rows[0].cells[high]; 
    cel.setAttribute("bgcolor","orange");
    await sleep(500);

    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    tbl.rows[0].cells[i+1].innerHTML = arr[i+1];
    tbl.rows[0].cells[high].innerHTML = arr[high];

    await sleep(500);
    var cel = tbl.rows[0].cells[i+1]; 
    cel.setAttribute("bgcolor","");
    var cel = tbl.rows[0].cells[high]; 
    cel.setAttribute("bgcolor","");    

    var cel = tbl.rows[0].cells[i+1]; 
    cel.setAttribute("bgcolor","green");

    await sleep(750);

    var cel = tbl.rows[0].cells[i+1]; 
    cel.setAttribute("bgcolor","");

    return (i+1);
}
async function quickSort(arr, low, high){

    var tbl = document.getElementById('tbl');

    if(low > high){
        return;
    }

    var pivot = await partition(arr, low, high);

    for(let i = low; i <= pivot-1; i++){
        var cel = tbl.rows[0].cells[i]; 
        cel.setAttribute("bgcolor","grey");
    }

    await sleep(500);

    for(let i = low; i <= pivot-1; i++){
        var cel = tbl.rows[0].cells[i]; 
        cel.setAttribute("bgcolor","");
    }

    await quickSort(arr, low, pivot - 1);

    for(let i = pivot+1; i <= high; i++){
        var cel = tbl.rows[0].cells[i]; 
        cel.setAttribute("bgcolor","grey");
    }

    await sleep(500);

    for(let i = pivot+1; i <= high; i++){
        var cel = tbl.rows[0].cells[i]; 
        cel.setAttribute("bgcolor","");
    }

    await quickSort(arr, pivot + 1, high);

}