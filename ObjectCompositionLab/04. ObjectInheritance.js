function solution(arr){

    let processor = (function (){
        let objects = new Map();
        function create(name) {
            objects.set(name, {})
        }
        function inherit(name, parent) {
            objects.set(name, Object.create(objects.get(parent)));
        }
        function set(name, key, value){
            objects.get(name)[key] = value;
        }


        function print(name){
          let result = [];
          let objToPrint = objects.get(name);
            for (let key in objToPrint) {
                let kvp = `${key}:${objToPrint[key]}`;
                result.push(kvp);
            }
            console.log(result.join(', '));

        }

        return function(commands){
           let tokens = commands.split(' ');
           let command = tokens[0];
           switch (command){
               case "create":
                   if(tokens.length > 2){
                       inherit(tokens[1], tokens[3])
                   }else{
                       create(tokens[1])
                   }
                   break;
               case "set":
                   set(tokens[1], tokens[2], tokens[3]);
                   break;
               case "print":
                   print(tokens[1]);
                   break;

           }
        }
    })();


    arr.forEach(processor);
}
solution(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);