
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}


var bstFromPreorder = function(preorder) {
  this.preorder = preorder;
  this.i = 0;
  
  const head = new TreeNode(preorder[this.i]);
  this.i++;
  
  const populateChildren = (node, min = null, max = null) => {
    if (this.i >= this.preorder.length) return;

    if (this.preorder[this.i] < node.val && (min === null || this.preorder[this.i] > min)) {
      node.left = new TreeNode(this.preorder[this.i]);
      this.i++;
      populateChildren(node.left, min, node.val);
    }
  
    if (this.preorder[this.i] > node.val && (max === null || this.preorder[this.i] < max)) {
      node.right = new TreeNode(this.preorder[this.i]);
      this.i++;
      populateChildren(node.right, node.val, max);
    }
  }
  
  populateChildren(head);

  return head;
};

console.log(bstFromPreorder([8,5,1,7,10,12]));