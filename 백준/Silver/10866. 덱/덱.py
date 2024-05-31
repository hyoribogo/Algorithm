import sys

stack = []

for i in range(int(sys.stdin.readline())):
    word = sys.stdin.readline().split()
    order = word[0]
    if order == 'push_front':
        stack.insert(0, int(word[1]))
    elif order == 'push_back':
        stack.append(int(word[1]))
    elif order == 'size':
        print(len(stack))
    elif order == 'pop_front':
        print(stack.pop(0) if stack else -1)
    elif order == 'pop_back':
        print(stack.pop(-1) if stack else -1)
    elif order == 'empty':
        print(0 if stack else 1)
    elif order == 'front':
        print(stack[0] if stack else -1)
    elif order == 'back':
        print(stack[-1] if stack else -1)