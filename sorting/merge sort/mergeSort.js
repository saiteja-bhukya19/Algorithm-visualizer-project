function sleep(ms){ 
    return new Promise(resolve => setTimeout(resolve, ms)); 
}

async function merge(arr, l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;
 
    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);

    var tbl = document.getElementById('tbl');
 
    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
 
    // Merge the temp arrays back into arr[l..r]
 
    // Initial index of first subarray
    var i = 0;
 
    // Initial index of second subarray
    var j = 0;
 
    // Initial index of merged subarray
    var k = l;
 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            tbl.rows[0].cells[k].innerHTML = arr[k];
            var cel = tbl.rows[0].cells[k]; 
            cel.setAttribute("bgcolor","green");
            await sleep(500);
            i++;
        }
        else {
            arr[k] = R[j];
            tbl.rows[0].cells[k].innerHTML = arr[k];
            var cel = tbl.rows[0].cells[k]; 
            cel.setAttribute("bgcolor","green");
            await sleep(500);
            j++;
        }
        k++;
    }
 
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        tbl.rows[0].cells[k].innerHTML = arr[k];
        var cel = tbl.rows[0].cells[k]; 
        cel.setAttribute("bgcolor","green");
        await sleep(500);
        i++;
        k++;
    }
 
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        tbl.rows[0].cells[k].innerHTML = arr[k];
        var cel = tbl.rows[0].cells[k]; 
        cel.setAttribute("bgcolor","green");
        await sleep(500);
        j++;
        k++;
    }
}
 
// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
async function mergeSort(arr,l, r){

    var tbl = document.getElementById('tbl');

    if(l>=r){
        return;//returns recursively
    }
    var m =l+ parseInt((r-l)/2);

    for(let i = l; i <= m; i++){
        var cel = tbl.rows[0].cells[i]; 
        cel.setAttribute("bgcolor","grey");
    }

    await sleep(500);

    for(let i = l; i <= m; i++){
        var cel = tbl.rows[0].cells[i]; 
        cel.setAttribute("bgcolor","");
    }
    await mergeSort(arr,l,m);

    for(let i = m+1; i <= r; i++){
        var cel = tbl.rows[0].cells[i]; 
        cel.setAttribute("bgcolor","grey");
    }

    await sleep(750);

    for(let i = m+1; i <= r; i++){
        var cel = tbl.rows[0].cells[i]; 
        cel.setAttribute("bgcolor","");
    }
    
    await mergeSort(arr,m+1,r);

    for(let i = l; i <= m; i++){
        var cel = tbl.rows[0].cells[i]; 
        cel.setAttribute("bgcolor","orange");
    }

    for(let i = m+1; i <= r; i++){
        var cel = tbl.rows[0].cells[i]; 
        cel.setAttribute("bgcolor","yellow");
    }

    await sleep(500);
    await merge(arr,l,m,r);
    for(let i = l; i <= r; i++){
        var cel = tbl.rows[0].cells[i]; 
        cel.setAttribute("bgcolor","");
    }
}

function printArray( A, size)
{
    //for (var i = 0; i < size; i++)
       console.log(A);
}
 
 
var arr = [ 12, 11, 13, 5, 6, 7 ];
    var arr_size = arr.length;
 
   // document.write(  "Given array is <br>");
    printArray(arr, arr_size);
 
    mergeSort(arr, 0, arr_size - 1);
 
  //  document.write( "<br>Sorted array is <br>");
    printArray(arr, arr_size);