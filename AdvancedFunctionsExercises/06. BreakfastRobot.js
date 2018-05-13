let solution = (function solve(){

    let robot = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    function restock(microelements, quantity){
        robot[microelements] += Number(quantity);
        console.log("Success");
    }
    function report(string){
       console.log(`protein=${robot['protein']} carbohydrate=${robot['carbohydrate']} fat=${robot['fat']} flavour=${robot['flavour']}`)
    }
    function prepare(recipe, quantity){
        quantity = Number(quantity);
        let apple = {
            carbohydrate: 1,
            flavour: 2
        };
        let coke = {
            carbohydrate: 10,
            flavour: 20
        };
        let burger = {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        };
        let omelet = {
            protein: 5,
            fat: 1,
            flavour: 1
        };
        let cheverme = {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        };

        if(recipe === 'apple') {
            for (let element in apple) {
                if (robot[element] < (apple[element] * quantity)) {
                    console.log((`Error: not enough ${element} in stock`));
                    break;
                } else {
                    robot[element] -= (apple[element] * quantity);
                }
            }
            return "Success"

        }else if( recipe === 'coke'){
            for (let element in coke) {
                if(robot[element] < (coke[element] * quantity)){
                    console.log((`Error: not enough ${element} in stock`));
                    break;
                }else{
                    robot[element] -= (coke[element] * quantity);
                }
            }
            return "Success";

        }else if( recipe === 'burger'){
                for (let element in burger) {
                    if(robot[element] < (burger[element] * quantity)){
                        console.log((`Error: not enough ${element} in stock`));
                        break;
                    }else{
                        robot[element] -= (burger[element] * quantity);
                    }
                }
           return "Success";

        }else if(recipe === 'omelet'){
                for (let element in omelet) {
                    if(robot[element] < (omelet[element] * quantity)){
                        console.log((`Error: not enough ${element} in stock`));
                        break;
                    }else{
                        robot[element] -= (omelet[element] * quantity);
                    }                }
            return "Success";

        }else if(recipe === 'cheverme'){
                for (let element in cheverme) {
                    if(robot[element] < (cheverme[element] * quantity)){
                        console.log(`Error: not enough ${element} in stock`);
                        break;
                    }else{
                        robot[element] -= (cheverme[element] * quantity);
                    }
                }
            return "Success";
        }
    }
    return function management(input){
        let commands = input.split(' ');
        let command = commands[0];
       if(command === 'restock'){
           return restock(commands[1], commands[2]);
       }else if(command === 'report'){
           return report()
       }else if(command === 'prepare'){
           return prepare(commands[1], commands[2])
       }
    }

})();
solution('restock protein 100')
solution('restock carbohydrate 100')
solution('restock fat 100')
solution('restock flavour 100')
solution('report')
solution('prepare omelet 2')
solution('report')