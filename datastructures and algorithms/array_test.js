let n=5;
while (n > 0) {
    try {
     
      console.log(n)
      n--;
      if (1===2) {
        break;
      } else {
        continue;
      }


    }
    catch (e) {
      //ignore exception
    }
  }
var hasDigit = function(n){

  var arr = n.toString().split('');
  if(arr.indexOf('1') > -1 && arr.indexOf('2')>-1 ){
      return true;
  }else{
      return false;
  }
  }
  
  var main = function(n, digit){
      if( n%digit==0 && hasDigit(n)){
          return "The streak is broken!"
      }else{
          return "The streak lives still in our heart!";
      }
  }
  console.log(main(120,21));
  console.log(main(121,21));
  console.log(main(231,21));
const main = function(n, gals, boys){
  let sortedGals = gals.sort((a, b) => a - b); 
  let sortedBoys = boys.sort((a, b) => b - a);
  console.log(sortedBoys);
  console.log(sortedGals);
  let i=0,match=0;
  while(i<=n){
      if(sortedGals[i]%sortedBoys[i] == 0 || sortedBoys[i]%sortedGals[i]==0){
          match++;
      }
      i++;
  }
  return match;
 }
 console.log(main(4, [0,6,9,12],[4,12,3,9]));
 console.log(main(4,[2,2,2,2],[2,2,2,2]));
