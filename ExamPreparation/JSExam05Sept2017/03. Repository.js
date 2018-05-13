class Repository {
    constructor(obj){
        this.obj = obj;
        this.data = new Map();
        this.id = 0;
    }

    get count(){
        return this.data.size;
    }

    get(id){
        this._validateId(id);
        return this.data.get(id);
    }


    add(entity){
       this._validation(entity);
       this.data.set(this.id, entity);
       return this.id++;
    }

    update(id, entity){
       this._validateId(id);
       this.data.set(id, entity);
    }

    del(id){
        this._validateId(id);
        this.data.delete(id);
    }

    _validation(entity){
        for (let key in this.obj) {
            if(!entity.hasOwnProperty(key)){
                throw new Error(`Property ${key} is missing from the entity!`)
            }
            if(this.obj[key] !== typeof entity[key]){
                throw new TypeError(`Property ${entity[key]} is of incorrect type!`)
            }
        }
    }

    _validateId(id){
        if(!this.data.has(id)){
            throw new Error(`Entity with id: ${id} does not exist!"`)
        }
    }

}

// Initialize props object
let properties = {
    name: "string",
    age: "number",
    birthday: "object"
};
//Initialize the repository
let repository = new Repository(properties);
// Add two entities
let anotherEntity = {
    name1: 'Nakov',
    age: 26,
    birthday: new Date(1991, 0, 21)
};
repository.add(anotherEntity);