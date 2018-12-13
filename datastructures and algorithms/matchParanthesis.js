let input = "{[a][e](2)()}".trim().split('');
let open_parantheses = ["{","(","["],close_parantheses = ["}",")","]"],parantheses = open_parantheses.concat(close_parantheses);
let stack = [];
for(i=0;i<input.length;i++){
    //base case
if(input.length % 2 != 0){console.log("doesnt match");break;} 
if(parantheses.includes(input[i])){
    if(open_parantheses.includes(input[i])){
        stack.push(input[i]);
    }
    else if(stack.length>0 && stack[stack.length-1] == open_parantheses[close_parantheses.indexOf(input[i])]){
        stack.pop();
    }
}
}

stack.length == 0 ? console.log("Matches"):console.log("not matches");
console.log(input)


