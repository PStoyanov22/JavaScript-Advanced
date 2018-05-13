function solve(arr) {

    let processor = (function () {
        let text = "";

        return function process(commands) {
            let commandStr = commands.split(' ');
            let operation = commandStr[0];
            let currText = commandStr[1];

            switch (operation) {
                case "append":
                    text += currText;
                    break;
                case "removeStart":
                    text = text.slice(Number(currText));
                    break;
                case "removeEnd":
                    text = text.slice(0, text.length - Number(currText));
                    break;
                case "print":
                    console.log(text);
                    break;

            }
        }

    })();

    for (let row of arr) {
        processor(row);
    }
}

solve(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']);