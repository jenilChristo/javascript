let matrix = [
              [0,1,2,74],
              [3,4,5,43],
              [64,5,6,7],
              [7,8,45,12]
            ];
printMat = (matrix,rows,cols) => {
let k=0,l=0,c=0;
while(k<rows && l<cols ){

    for(i=k;i<cols;i++){
        console.log(matrix[k][i]);
        c++;
    }
    k++
    for(i=k;i<rows;i++){
        console.log(matrix[i][cols-1]);
        c++;
    }
    cols--;

    if(k<rows){
        for(i=cols-1;i>=l;i--){
            console.log(matrix[rows-1][i])
            c++;
        }
        rows--;
    }
    if(l<cols){
        for(i=rows-1;i>=k;i--){
            console.log(matrix[i][l]);
            c++;
        }
        l++;
    }
}
console.log(c);
}
printMat(matrix,4,4);



