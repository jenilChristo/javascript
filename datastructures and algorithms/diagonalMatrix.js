let matrix = [
    [0,1,2,74],
    [3,4,5,43],
    [6,7,8,45],
    [6,7,8,45]
  ];
printMat = (matrix,rows,cols) => {
let i,j,k;
for(k=0;k<rows;k++){
    i = k,j=0;
    while(i>=0){
        i=i-1;
        j=j+1;
        console.log(matrix[i][j]+"\n")
    }

}
}
printMat(matrix,4,4);


