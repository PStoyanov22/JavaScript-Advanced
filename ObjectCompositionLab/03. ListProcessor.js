function processor(arr){
    let commandProcessor = (function(){
        let arr = [];

        return {
            add: function (str) {
                arr.push(str);
            },
            remove: function (str) {
                arr = arr.filter(w => w !== str);
            },
            print: function () {

                console.log("" + arr)
            }

        };
    })();
    for (let ar of arr) {
        let [command, word] = ar.split(' ');
        commandProcessor[command](word);
    }
}
processor(['add hello', 'add again', 'remove hello', 'add again', 'print']);