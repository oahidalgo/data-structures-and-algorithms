// Node class representing each node in the tree
class Node {
  constructor(value) {
    this.left = null; // Left child
    this.right = null; // Right child
    this.value = value; // Node value
  }
}

// BinarySearchTree class
class BinarySearchTree {
  constructor() {
    this.root = null; // Root node of the tree
  }

  // Insert method to add a value to the tree
  insert(value) {
    // Create the new node
    const newNode = new Node(value);

    // If the tree is empty, set the new node as root
    if (!this.root) {
      this.root = newNode;
      return;
    }

    // Start traversal from the root
    let currNode = this.root;
    while (true) {
      // Check if value is greater; move to the right
      if (value > currNode.value) {
        if (!currNode.right) {
          currNode.right = newNode; // Insert at the right
          return;
        }
        currNode = currNode.right;
      }
      // Otherwise, move to the left
      else {
        if (!currNode.left) {
          currNode.left = newNode; // Insert at the left
          return;
        }
        currNode = currNode.left;
      }
    }
  }

  // Lookup method to find a value and its parent
  lookup(value) {
    if (!this.root) return null;

    let currNode = this.root;
    let parentNode = null;

    while (currNode) {
      if (currNode.value === value) return { currNode, parentNode }; // Value found
      parentNode = currNode;
      currNode = value > currNode.value ? currNode.right : currNode.left; // Move accordingly
    }

    return null; // Value not found
  }

  // Remove method to delete a node from the tree
  remove(value) {
    if (!this.root) return null;

    // Get the node to remove and its parent
    const { currNode: nodeToRemove, parentNode } = this.lookup(value) || {};
    if (!nodeToRemove) return 'Not found';

    // Case 1: Node to remove is a leaf (no children)
    if (!nodeToRemove.left && !nodeToRemove.right) {
      if (parentNode) {
        if (parentNode.left === nodeToRemove)
          parentNode.left = null; // Remove leaf
        else parentNode.right = null;
      } else {
        this.root = null; // Tree becomes empty
      }
    }
    // Case 2: Node to remove has one child
    else if (!nodeToRemove.left || !nodeToRemove.right) {
      const child = nodeToRemove.left || nodeToRemove.right; // Get the single child

      if (parentNode) {
        if (parentNode.left === nodeToRemove)
          parentNode.left = child; // Reconnect parent
        else parentNode.right = child;
      } else {
        this.root = child; // Update root if removing root node
      }
    }
    // Case 3: Node to remove has two children
    else {
      let successorParent = nodeToRemove;
      let successor = nodeToRemove.right;

      // Find the in-order successor (leftmost node in the right subtree)
      while (successor.left) {
        successorParent = successor;
        successor = successor.left;
      }

      // Replace the value of the node to remove with the successor's value
      nodeToRemove.value = successor.value;

      // Remove the successor node
      if (successorParent.left === successor) {
        successorParent.left = successor.right; // Update successor's parent's left
      } else {
        successorParent.right = successor.right; // Update successor's parent's right
      }
    }
  }
}

// Helper function to visualize the tree
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

// Test the BinarySearchTree implementation
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

// Remove a value
tree.remove(4);
console.log(JSON.stringify(traverse(tree.root), null, 2));

// Test lookup and verify the tree structure
console.log(tree.lookup(20));
