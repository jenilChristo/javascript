module.exports = BSTree;

/**
 * Functions for binary search tree
 */

/**
 * Constructor for binary search tree.
 * @param compareFunc  compareFunction to use for determining where/how to place values
 */
function BSTree(compareFunc) {
    this.root = undefined;
    this.numElem = 0;
    this.compare = compareFunc || this.defaultCompare;
};

/**
 * Default compare method using javascript's < and >.
 * @param a  first value
 * @param b  second value
 * @return -1  if a < b, 0 if a === b, and 1 if a > b
 */
BSTree.prototype.defaultCompare = function defaultCompare(a, b) {
    if (a.value < b.value) {
        return -1; // less than
    } else if (a.value === b.value) {
        return 0; // equal
    } else {
        return 1; // greater
    }
};

/**
 * Determines if two BSTrees are equal based off of their in order and post order traversals
 * @param tree  tree to be compared to this
 * @return true  if trees are the same (have same in order and post order traversal)
 */
BSTree.prototype.equals = function equals(tree) {
    var values = [];
    var addElem = function(elem) {
        values.push(elem);
    };
    this.inOrderTraversal(addElem);
    var inOrderThis = values;
    values = [];
    tree.inOrderTraversal(addElem);
    var inOrderTree = values;
    if (!inOrderThis.equals(inOrderTree)) {
        return false;
    }
    values = [];
    this.postOrderTraversal(addElem);
    var postOrderThis = values;
    values = [];
    tree.postOrderTraversal(addElem);
    var postOrderTree = values;
    return postOrderThis.equals(postOrderTree);
};

/**
 * Adds element to tree.
 * @param elem  element to add to tree
 * @return true  if successful
 */
BSTree.prototype.add = function add(elem) {
    if (this.insertNode(this.createNode(elem))) { // if insertion was successful
        ++this.numElem;
        return true;
    }
    return false;
};

/**
 * Creates a node from given element
 * @param elem  value for node object
 * @return node  node to be used in tree.
 */
BSTree.prototype.createNode = function createNode(elem) {
    return {
        value: elem,
            leftChild: undefined,
            rightChild: undefined,
            parentNode: undefined
    };
};

/**
 * Does the insertion of the node into the tree. Used in combination with add.
 * @param node  node to be added to tree
 * @return true  if successful
 */
BSTree.prototype.insertNode = function insertNode(node) {
    if (node.value === undefined || node.value === null) {
        return false;
    }
    if (this.isEmpty()) {
        this.root = node;
    } else {
        var currentNode = this.root;
        var parentNode;
        var compareValue;
        while (currentNode !== undefined) {
            compareValue = this.compare(node, currentNode);
            if (compareValue === 0) {
                return false;
            }
            else if (compareValue < 0) {
                parentNode = currentNode;   
                currentNode = currentNode.leftChild;
            } else {
                parentNode = currentNode;
                currentNode = currentNode.rightChild;
            }
        }
        node.parentNode = parentNode;
        compareValue = this.compare(node, parentNode);
        if (compareValue < 0) {
            parentNode.leftChild = node;
        } else { // duplicates go to right
            parentNode.rightChild = node;
        }
    }
    return true;
};

/**
 * Determines if element is inside a tree. Uses compare method that was given when constructing tree
 * @param elem  elem to determine existence in tree
 * @return true  if elem exists in tree
 */
BSTree.prototype.inTree = function inTree(elem) {
    var compareValue;
    var node =  this.root;
    var newNode = this.createNode(elem);
    while (node !== undefined) {
        compareValue = this.compare(newNode, node);
        if (compareValue < 0) { // traverse left child if elem is less than current node
            node = node.leftChild;
        } else if (compareValue > 0) { // traverse right child if elem is greater
            node = node.rightChild;
        } else {
            return true; // found elem in tree.
        }
    }
    return false;
};

/**
 * Completes an inorder traversal of the tree and writes elements to array.
 * @return array  elements of tree from inorder traversal
 */
BSTree.prototype.toArray = function toArray() {
    var values = [];
    this.inOrderTraversal(function(elem) {
        values.push(elem);
    });
    return values;
};

/**
 * Override toString method for BSTree
 * @return  string representation of tree. Flipped sideways.
 */
BSTree.prototype.toString = function toString() {
    function toStringHelper(node, indent) {
        var tree = "";   
        if (node.rightChild !== undefined) {
            tree += toStringHelper(node.rightChild, indent + " ");
        }
        tree += indent + node.value + "\n";
        if (node.leftChild !== undefined) {
            tree += toStringHelper(node.leftChild, indent + " ");
        }
        return tree;
    }
    return toStringHelper(this.root, " ");
};

/**
 * Completes inorder traversal of tree
 * @param callback  function to use on each element
 */
BSTree.prototype.inOrderTraversal = function inOrderTraversal(callback) {
    this.inOrderTraversalIter(this.root, callback);
};


/**
 * Helper function for inorder traversal
 * @param node  node currently visiting
 * @param callback  function to apply to node
 */
BSTree.prototype.inOrderTraversalIter = function inOrderTraversalIter(node, callback) {
    if (node === undefined) {
        return;
    }
    if (node.leftChild !== undefined) {
        this.inOrderTraversalIter(node.leftChild, callback);
    }
    callback(node.value);
    if (node.rightChild !== undefined) {
        this.inOrderTraversalIter(node.rightChild, callback);
    }
};

/**
 * Completes post order traversal of tree
 * @param callback  function to use on each element
 */
BSTree.prototype.postOrderTraversal = function postOrderTraversal(callback) {
    this.postOrderTraversalIter(this.root, callback);
};

/**
 * Helper function for post order traversal
 * @param node  node currently vising
 * @param callback  function to apply to node
 */
BSTree.prototype.postOrderTraversalIter = function postOrderTraversal(node, callback) {
    if (node === undefined) {
        return;
    }
    if (node.leftChild !== undefined) {
        this.postOrderTraversalIter(node.leftChild, callback);
    }
    if (node.rightChild !== undefined) {
        this.postOrderTraversalIter(node.rightChild, callback);
    }
    callback(node.value);
};

/**
 * Number of elements in tree
 * @return this.numElem  number of elements in tree
 */
BSTree.prototype.size = function size() {
    return this.numElem;
};

/**
 * Checks if tree is empty
 * @return true  if tree is empty/has no values
 */
BSTree.prototype.isEmpty = function isEmpty() {
    return this.numElem === 0;
};

/**
 * Clears the tree elements. Keeps the default compare function.
 */
BSTree.prototype.clear = function clear() {
    this.root = undefined;
    this.numElem = 0;
};

/**
 * Way to add values from an arr. Will add to tree according to order of array.
 * @param arr  array of values to add to tree.
 */
BSTree.prototype.addValues = function addValues(arr) {
    var i;
    for (i = 0; i < arr.length; ++i) {
        this.add(arr[i]);
    }
};