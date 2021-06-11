function findMaxPath(matrix){
    let N = matrix.length;
    let M = matrix[0].length;
    let result = -1;
    result = Math.max(result, ...matrix[0]);
    for(let i = 1; i < N; i++)
    {
        result = -1;
        for(let j = 0; j < M; j++)
        {
            if (j > 0 && j < M - 1)
                matrix[i][j] += Math.max(matrix[i - 1][j],
                             Math.max(matrix[i - 1][j - 1],
                                      matrix[i - 1][j + 1]));
            else if (j > 0)
                matrix[i][j] += Math.max(matrix[i - 1][j],
                                      matrix[i - 1][j - 1]);
            else if (j < M - 1)
                matrix[i][j] += Math.max(matrix[i - 1][j],
                                      matrix[i - 1][j + 1]);
            result = Math.max(matrix[i][j], result);
        }
    }
    return result;
}

let mat = [ [ 10, 10, 2, 0, 20, 4 ],
            [ 1, 0, 0, 30, 2, 5 ],
            [ 0, 10, 4, 0, 2, 0 ],
            [ 1, 0, 2, 20, 0, 4 ] ];
console.log(findMaxPath(mat));