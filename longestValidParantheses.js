/**
 * Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

Example 1:

Input: "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()"
 */

// ())(())


function longestParantheses(s){
    let symbols = s.split("");
    let i = 0, result = 0, stack = [];
    stack.push(-1);
    while (i < symbols.length){
        if(symbols[i] == "("){
            stack.push(i);
        }else{
            stack.pop();
            if(stack.length){
                result = Math.max(i-stack[stack.length-1], result);
            }else{
                stack.push(i);
            }
        }

        i++;
    }
    return result;
}
console.log(longestParantheses('()()(()'))
