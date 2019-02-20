var fs = require('fs');
var path = require('path'); 
var array = fs.readFileSync(path.resolve(__dirname, 'message.txt'), 'utf8');

function binarySearch(number){
    let mid = Math.floor(array.length/2);
    let start = 0,end = array.length-1;

    if(array[mid] == number){
        return "Found in "+ mid+ "position";
    }else{
        if(number > array[mid]){
            binarySearch(array.slice(mid+1));
        }
        else{
            binarySearch(array.slice(0,mid-1));
        }
    }
}
console.log(binarySearch(array));

// function BST(){
//     this.root = null;
//     this.insert = insert;
//    // this.sortAscending = inOrderTraversal; 
// }
// function Node(data,left,right){
//     this.data = data;
//     this.left = left;
//     this.right = right;
// }
// function insert(data){
// let n = new Node(data,null,null);
// if(this.root == null){
//     this.root = n;
//     return;
// }
// else{
    
//     while(true){
//         if(data < this.root.data && this.left == null){
//             this.left = n;
//             break;
//         }
//         else if(data > this.root.data && this.right == null){
//             this.right = n;
//             break;
//         }
//     }

// }
// }
// var bst = new BST();
// bst.insert(5);
// bst.insert(2);
// bst.insert(10);

// console.log(this.root)

