class Node:   
    def __init__(self, data = 0): 
        self.data = data 
        self.left = None
        self.right = None
  
class BinaryTree : 
    def constructTree(self, pre, size):  
        root = Node(pre[0]) 
        s    = [] 
   
        s.append(root) 
  
        i = 1

        while ( i < size):  
            temp = None

            while (len(s) > 0 and pre[i] > s[-1].data):  
                temp = s.pop() 
              
            if (temp != None):  
                temp.right = Node(pre[i]) 
                s.append(temp.right) 
            else : 
                temp = s[-1] 
                temp.left = Node(pre[i]) 
                s.append(temp.left) 

            i = i + 1
          
        return root 
    
    def printInorder(self,node):  
        if (node == None):  
            return
          
        self.printInorder(node.left) 
        print(node.data, end = " ") 
        self.printInorder(node.right) 
  
# Driver code 
tree = BinaryTree() 
pre = [10, 15, 5] 
size = len(pre) 
root = tree.constructTree(pre, size) 

print(root.data);
print(root.right.data);
print(root.right.left.data);