const getHelloMessage = () => {
    return new Promise((resolve, reject) => {
        resolve("Hello World!")
    })
}
const getBoredMessage = () => {
    return new Promise((resolve, reject) => {
        resolve("Im bored")
    })
}
async function greet(){
   await Promise.all([getHelloMessage(), getBoredMessage()]);
   return "jenil";
}

greet().then((data) => {
console.log(data)
});