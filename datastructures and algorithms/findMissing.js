// Function to find smallest positive
// missing number.
function findMissingNo(arr,  n)
{
    // to store current array element
    var val;
 
    // to store next array element in
    // current traversal
    var nextval;
 
    for (var i = 0; i < n; i++) {
 
        // if value is negative or greater
        // than array size, then it cannot
        // be marked in array. So move to
        // next element.
        if (arr[i] <= 0 || arr[i] > n)
            continue;
 
        val = arr[i];
 
        // traverse the array until we
        // reach at an element which
        // is already marked or which
        // could not be marked.
        while (arr[val - 1] != val) {
            nextval = arr[val - 1];
            arr[val - 1] = val;
            val = nextval;
            if (val <= 0 || val > n)
                break;
        }
    }
 
    // find first array index which is
    // not marked which is also the
    // smallest positive missing
    // number.
    for (var i = 0; i < n; i++) {
        if (arr[i] != i + 1) {
            return i + 1;
        }
    }
 
    // if all indices are marked, then
    // smallest missing positive
    // number is array_size + 1.
    return n + 1;
}
 

    var arr = [2, 3, 7, 6, 8, -1, -10, 15 ];
    var arr_size = arr.length;
    var missing = findMissingNo(arr, arr_size);

    console.log(missing)

