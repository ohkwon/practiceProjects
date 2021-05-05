var inorderTraversal = function(root) {
  const traverse = (node, arr) => {
    if (node.left) traverse(node.left, arr);
    arr.push(node.val);
    if (node.right) traverse(node.right, arr);
  }

  const output = [];
  if (root) traverse(root, output);
  return output;
}
