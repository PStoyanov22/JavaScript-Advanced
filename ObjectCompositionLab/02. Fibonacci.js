function solution(){
    let first = 0;
    let sec = 1;
    return function(){
        let next = first + sec;
        first = sec;
        sec = next;
        return first;
    }
}

let fib = solution();
fib();
fib();