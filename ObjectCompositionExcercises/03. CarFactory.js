function solution(obj) {
    let car = {
        model: obj.model,
        engine: '',
        carriage: '',
        wheels: []
    };
    if (obj.power <= 90) {
        car.engine = {
            power: 90,
            volume: 1800
        };
    } else if (obj.power <= 120) {
        car.engine = {
            power: 120,
            volume: 2400
        };

    } else {
        car.engine = {
            power: 200,
            volume: 3500
        };

    }
    if (obj.carriage === 'hatchback') {
        car.carriage = {
            type: 'hatchback',
            color: obj.color
        }
    } else {
        car.carriage = {
            type: 'coupe',
            color: obj.color
        };

    }
    for (let i = 0; i < 4; i++) {
        if(obj.wheelsize % 2 !== 0){
            car.wheels.push(obj.wheelsize);
        }else{
            car.wheels.push(obj.wheelsize - 1)
        }
    }
    return car;
}


console.log(solution({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));;