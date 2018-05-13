function solution(arr, sortMethod) {
    let byAscending = function (a, b) {
        return a - b
    };
    let byDescending = function (a, b) {
        return b - a;
    }

    let sorting = {
        "asc": byAscending,
        "desc": byDescending
    };

    return arr.sort(sorting[sortMethod]);

}

console.log(solution([2, 4, 1, 7, 4], 'asc'));
