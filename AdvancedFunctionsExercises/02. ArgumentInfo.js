function solution(){
    let result = new Map();

    let strings = arguments;
    for (let str of strings) {
        let obj = str;
        let type = typeof obj;

        if(!result.has(type)){
            result.set(type, 1);
        }else{
            let count = result.get(type);
            result.set(type, count +  1);
        }
        console.log(type + ": " + obj)
    }

    let sorted = [...result].sort(sortResult);
    for (let arr of sorted) {
        console.log(`${arr[0]} = ${arr[1]}`)
    }
    function sortResult(s1, s2) {
        if(s1[1] !== s2[1]) {
            return result.get(s2[0]) - result.get(s1[0]);
        }
    }
}
solution(34, 'cat', 42, function () { console.log('Hello world!'); }, "dog", "mouse");