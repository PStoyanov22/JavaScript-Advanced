function result(){
    class Melon{
        constructor(weight, melonSort){
            if(new.target === Melon){
                throw new Error('Abstract class cannot be instantiated directly')
            }
            this.weight = Number(weight);
            this.melonSort = melonSort;
            this._elementIndex = weight * melonSort.length;
            this.element = '';
        }

        get elementIndex(){
            return this._elementIndex;
        }

        toString(){
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

    class Watermelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = 'Water'
        }
    }

    class Firemelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = 'Fire'
        }

    }

    class Earthmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = 'Earth'
        }
    }

    class Airmelon extends  Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = 'Air'
        }
    }


    class Melolemonmelon extends Watermelon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = 'Water';
            this.elements = ['Fire','Earth', 'Air', 'Water'];
            this.index = 0;
        }

        morph(){
            this.element = this.elements[this.index++ % 4];
        }
    }

    return {
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melolemonmelon
    }
}

let classes = result();

let test = new classes.Melolemonmelon(150, "Melo");

console.log(test.toString());
"Element: Water\n" +
    "Sort: Melo\n" +
    "Element Index: 600",
    "'Melolemonmelon initial element' was not correctly set";