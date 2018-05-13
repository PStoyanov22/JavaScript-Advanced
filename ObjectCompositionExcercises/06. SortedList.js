function sortedList(){
    return {
        list: [],
        size: 0,

        add: function(num){
           this.list.push(num);
           this.size++;
           this.list = this.list.sort((a, b) => a - b);
        },
        remove: function (index) {
            let arr = this.list;
          if(index >= 0 && index < arr.length){
              arr.splice(index, 1);
              this.size--;
          }

        },
        get: function (index) {
            let arr = this.list;
            if(index >= 0 && index <= arr.length - 1){
                return arr[index];
            }
        },
    }
}
let collection = sortedList();
collection.add(0)
collection.add(2)
collection.add(106)
collection.add(0)
collection.remove(2)
console.log(collection.get(2))
console.log(collection.size)