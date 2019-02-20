let input = "{[a][e](2)()}".trim().split('');
let open_parantheses = ["{","(","["],close_parantheses = ["}",")","]"],parantheses = open_parantheses.concat(close_parantheses);
let stack = [];
for(i=0;i<input.length;i++){
    //base case
if(input.length % 2 != 0){
    console.log("doesnt match");
    break;
} 

if(parantheses.includes(input[i])){
    if(open_parantheses.includes(input[i])){
        //push to stack if the symbol belongs to open parantheses family
        stack.push(input[i]);
    }
        //if symbol does not belongs to the open parantheses family, 
        //check if the stack is not empty
        //check for the last element in the stack
        //get the index of the closing parantheses family

        //if the last element in stack is equal to the corresponding open parantheses 
        //pop it out

    else if(stack.length>0 && stack[stack.length-1] == open_parantheses[close_parantheses.indexOf(input[i])]){
        stack.pop();
    }
}
}

stack.length == 0 ? console.log("Matches"):console.log("not matches");
console.log(input)


