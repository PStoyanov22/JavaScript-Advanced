function solution(worker){

    if(worker.handsShaking){
    worker.bloodAlcoholLevel += worker.experience * 0.1 * worker.weight;
    worker.handsShaking = false;
    }
    return worker;
}

console.log(solution({
    weight: 45,
    experience: 4,
    bloodAlcoholLevel: 4,
    handsShaking: true
}));;