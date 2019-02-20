
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});


function main(input) {
    let getInput = input.split("\n");
    let q = getInput[0];
    let s  = getInput[1];
    
    let i = 2, track = [];
    while(i < getInput.length){
        let input = getInput[i].split(" ");

        let l = input[0];
        let r = input[1];
        let k = input[2];
        
        let track = [];
        let result = 0;
        
        for(let j = l;j<=r;j++){
            
           var binary = parseInt(j).toString(2);  
           var stack = binary.split("").reverse();
        //  process.stdout.write(j.toString()+" - "+stack.toString()+" - " +k.toString()+"\n");
           if(stack[k-1] == 1){
               result++;
           }
        }
        track.push(result);
        i++;
        process.stdout.write(track.toString().replace(""," "));

    }
}

