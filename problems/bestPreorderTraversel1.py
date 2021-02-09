# https://www.geeksforgeeks.org/construct-bst-from-given-preorder-traversa/

class Node:
    def __init__(self, val):
        self.val   = val
        self.left  = None
        self.right = None

def run(arr):
    head = Node(arr[0])

    print(head)

    for i in range(1, len(arr)):
        nextNode = head
        currNode = None
        isLeft   = True

        while nextNode:
            currNode = nextNode

            if arr[i] < currNode.val:
                isLeft   = True
                nextNode = currNode.left
            elif arr[i] == currNode.val:
                break #this is invalid, cannot have repeat in BST
            else:
                isLeft   = False
                nextNode = currNode.right

        if isLeft:
            currNode.left  = Node(arr[i])
        else:
            currNode.right = Node(arr[i])

    return head

def printBst(head):
    queue = [head]

    while len(queue) > 0:
        newQueue = []
        newQueueTrue = False
        output       = ''

        for i in range(len(queue)):
            if isinstance(queue[i], Node):
                output += str(queue[i].val) + '  '

                if queue[i].left:
                    newQueueTrue = True
                    newQueue.append(queue[i].left)
                else:
                    newQueue.append('X')

                if queue[i].right:
                    newQueueTrue = True
                    newQueue.append(queue[i].right)
                else:
                    newQueue.append('X')
            else:
                output += queue[i] + '  '

                newQueue.append('X')
                newQueue.append('X')

        if newQueueTrue:
            queue = newQueue
        else:
            queue = []

        print(output)


test = run([10, 5, 1, 7, 40, 50])

printBst(test)