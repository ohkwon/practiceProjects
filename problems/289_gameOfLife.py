class Solution:
    def gameOfLife(self, board: List[List[int]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        for y in range(len(board)):
            for x in range(len(board[0])):
                if board[y][x] > 0:
                    for ny in range(y - 1, y + 2):
                        for nx in range(x - 1, x + 2):
                            if ny >= 0 and ny < len(board) and nx >= 0 and nx < len(board[0]) and (ny != y or nx != x):
                                add = 1

                                if board[ny][nx] < 1:
                                    add = -1

                                board[ny][nx] += add

        for y in range(len(board)):
            for x in range(len(board[0])):
                if board[y][x] < -3:
                    board[y][x] = 0
                elif board[y][x] == -3:
                    board[y][x] = 1
                elif board[y][x] > -3 and board[y][x] < 3:
                    board[y][x] = 0
                elif board[y][x] >= 3 and board[y][x] <= 4:
                    board[y][x] = 1
                elif board[y][x] > 4:
                    board[y][x] = 0