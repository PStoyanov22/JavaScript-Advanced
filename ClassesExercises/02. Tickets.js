function solution(arr, str){
    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }

    }
    let result = [];

    for (let str of arr) {
        str = str.split('|');
        let ticket = new Ticket(str[0], str[1], str[2]);
        result.push(ticket);
    }

    let sorted = result.sort(compare);
    return sorted;

    function compare(a, b){
        if(str === 'destination'){
            return a.destination.localeCompare(b.destination)
        }else if(str === 'price'){
            return a.price - b.price;
        }else if(str === 'status'){
            return a.status.localeCompare(b.status);
        }
    }
}

console.log(solution(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'));;