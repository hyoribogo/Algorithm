import sys, heapq

input = sys.stdin.readline

N, K = map(int, input().split())
jewel = [list(map(int, input().split())) for i in range(N)]
bag = [int(input()) for i in range(K)]

jewel.sort(key=lambda x: -x[0])
bag.sort()

heap = []
result = 0

for i in range(K):
    while jewel and jewel[-1][0] <= bag[i]:
        heapq.heappush(heap, -jewel.pop()[1])
    if heap:
        result -= heapq.heappop(heap)

print(result)