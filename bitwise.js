function bitWise(arr){
    let result = arr.reduce(function(a, b) {
      return a & b;
    });
    return result;
}
    function main(input) {
        let getInput = input.split("\n");
        
        let keys = getInput[0].split(" ");
        let n = keys[0];
        let k = keys[1];
        
        let i = 1;
        let arr = []; 
        while(i < getInput.length){
            arr.push(getInput[i]);
            i++;
        }
         const allSubsets = (theArray) => theArray.reduce((subsets, value) => subsets.concat(subsets.map(set => [value,...set]) ),[[]]);
         let getSubs = allSubsets(arr);
         let neededSubset = getSubs.filter((el) => el.length == k );
         let j = 0;
         let result = 0;
         while(j < neededSubset.length){
             let comb = neededSubset[j];
             result = result + bitWise(comb);
             j++;
         }
         console.log(result.toString())
        //process.stdout.write(result.toString());       // Writing output to STDOUT
    }
    
    

main(`5 2
1
2
3
4
5`);

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});
function bitWise(arr){
    let ans = arr[0];
   for (let i = 0; i < arr.length; ++i)  {
     ans &= arr[i]; 
   }
    return ans; 
}
function k_combinations(set, k) {
	var i, j, combs, head, tailcombs;
	
	// There is no way to take e.g. sets of 5 elements from
	// a set of 4.
	if (k > set.length || k <= 0) {
		return [];
	}
	
	// K-sized set has only one K-sized subset.
	if (k == set.length) {
		return [set];
	}
	
	// There is N 1-sized subsets in a N-sized set.
	if (k == 1) {
		combs = [];
		for (i = 0; i < set.length; i++) {
			combs.push([set[i]]);
		}
		return combs;
	}
	combs = [];
	for (i = 0; i < set.length - k + 1; i++) {
		// head is a list that includes only our current element.
		head = set.slice(i, i + 1);
		// We take smaller combinations from the subsequent elements
		tailcombs = k_combinations(set.slice(i + 1), k - 1);
		// For each (k-1)-combination we join it with the current
		// and store it to the set of k-combinations.
		for (j = 0; j < tailcombs.length; j++) {
			combs.push(head.concat(tailcombs[j]));
		}
	}
	return combs;
}
function main(input) {
    let getInput = input.split("\n");
    
    let keys = getInput[0].split(" ");
    let n = keys[0];
    let k = keys[1];
    
    let i = 1;
    let arr = getInput.slice(1, getInput.length);
    //  const allSubsets = (theArray) => theArray.reduce((subsets, value) => subsets.concat(subsets.map(set => [value,...set]) ),[[]]);
    //  let getSubs = allSubsets(arr);
    //  let neededSubset = getSubs.filter((el) => el.length == k );
    
     let neededSubset = k_combinations(arr, k);
     let j = 0;
     let result = 0;
     while(j < neededSubset.length){
         let comb = neededSubset[j];
         result = result + bitWise(comb);
         j++;
     }
     result = result % 1000000007;
    process.stdout.write(result.toString());       // Writing output to STDOUT
}

