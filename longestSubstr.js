// /**
//  * Given a string, find the longest sub string with non repeating characters
//  */

const longestSubstring = (string) => {
let letters = string.split("");
let map = new Map();
let i = 0;

let temp = '',largestSubStr = '';
while(i < letters.length){
    if(!map.has(letters[i])){
        map.set(letters[i], i);
        temp += letters[i];
    }else{
        i = map.get(letters[i]);
        map.clear();
        temp = "";
    }


    if(temp.length >  largestSubStr.length){
        largestSubStr = temp;
    }
    i++;
}


return largestSubStr;
};

console.log(longestSubstring("geeksforgeeks"));
