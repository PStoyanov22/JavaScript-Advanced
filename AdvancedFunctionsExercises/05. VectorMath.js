let solution = (function () {
    return {
        add: function (vec1, vec2) {
            return [vec1[0] + vec2[0], vec1[1] + vec2[1]]
        },
        multiply: function (vec, scal) {
            return [vec[0] * scal, vec[1] * scal]
        },

        length: function (vec) {
            return Math.sqrt(Math.pow(vec[0], 2) + Math.pow(vec[1], 2));
        },

        dot: function (vec1, vec2) {
            return (vec1[0] * vec2[0]) + (vec1[1] * vec2[1])

        },

        cross: function (vec1, vec2) {
            return (vec1[0] * vec2[1]) - (vec1[1] * vec2[0])

        }
    };

})();
console.log(solution.add([1, 1], [1, 0]));;