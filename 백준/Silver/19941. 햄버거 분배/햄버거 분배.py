import sys

input = sys.stdin.readline


def check(x, k):
    global result
    for i in range(x - k, x):
        if i >= 0 and table[x] - table[i] == 1:
            table[i] = 2
            result += 1
            return
    for i in range(x + 1, x + k + 1):
        if i == len(table):
            return
        if table[x] - table[i] == 1:
            table[i] = 2
            result += 1
            return


N, K = map(int, input().split())
s = input().rstrip()
table = []
result = 0

for i in s:
    if i == 'H':
        table.append(0)
    else:
        table.append(1)

for i in range(N):
    if table[i] == 1:
        check(i, K)

print(result)