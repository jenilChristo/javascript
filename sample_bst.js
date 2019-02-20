function Node(data,left,right){
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = function(){
        return this.data;
    }
}
function BST(){
    this.root = null;
    this.insert = insert;
}

function insert(data){
    let newNode = new Node(data,null,null);
    if(this.root == null){
        this.root = newNode;
        return;
    }
    else{
        let current = this.root;
        let parent;
        parent = current;
        while(true){
            if(data < current.data){
                current = current.left;
                if(current == null){parent = newNode;break;}
            }else{
                current = current.right;
                if(current == null){parent = newNode;break;}
            }
        }

    }
}
let bst = new BST();
bst.insert(2);
bst.insert(5);
console.log(bst)