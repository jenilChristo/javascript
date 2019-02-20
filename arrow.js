
let obj = {
    val:"white",
}
 obj.myCar= function (brand,color){
    this.brand = brand;
    this.color = color;
    
    const greetCar = (function () {
        console.log(`The ${this.val} car with ${this.color} is beautiful`);
        return "Success";
    }).bind(this);

    greetCar();
}


obj.myCar("Swift","blue");


//arrow functions binds all the parent context.so no need to use workoaround for this
this.name = "jenil";
this.outerContext = "node"
let newObj = {
    val:"white",
}
 newObj.myCar= (brand,color) => {
    this.brand = brand;
    this.color = color;
    
    const greetCar = () => {
        console.log("printing this"+JSON.stringify(this));
        console.log(`I'm running on ${this.outerContext}`)
        console.log(`The ${this.val} car with ${this.color} is beautiful`);
        return "Success";
    };

    greetCar();
}


newObj.myCar("Swift","blue");