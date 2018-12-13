var girls = [1,3,5],
    boys = [2,4,6,7,8,9],
    girlsIndex = 0,
    boysIndex = 0,
    result = [];
while(boysIndex < boys.length && girlsIndex < girls.length){
    if(boys[boysIndex] < girls[girlsIndex]){
        result.push(boys[boysIndex]);
        boysIndex ++;
    }
    else{
        result.push(girls[girlsIndex]);
        girlsIndex ++;
    }

}
while(girlsIndex < girls.length){
    result.push(girls[girlsIndex]);
    girlsIndex++;
}

while(boysIndex < boys.length){
    result.push(boys[boysIndex]);
    boysIndex++;
}
console.log(result.toString())