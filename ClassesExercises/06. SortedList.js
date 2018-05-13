class SortedList{
    constructor(){
        this.size = 0;
        this.list = [];
    }


    add(num){
        this.list.push(num);
        this.size++;
        this.list = this.list.sort((a, b) => a - b);
    }
    remove(index) {
        let arr = this.list;
        if(index >= 0 && index < arr.length){
            arr.splice(index, 1);
            this.size--;
        }

    }
    get(index) {
        let arr = this.list;
        if(index >= 0 && index <= arr.length - 1){
            return arr[index];
        }
    }
}
let pist = new SortedList();
(pist.add(5));
console.log(pist.list);
(pist.add(2));
console.log(pist.list);
pist.remove(1);
console.log(pist.list);
console.log(pist.size);
