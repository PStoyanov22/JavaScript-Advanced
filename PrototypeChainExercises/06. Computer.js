function result(){
    class Hardware {
        constructor(manufacturer) {
            if (new.target === Hardware) {
                throw new Error('Abstract class cannot be instantiated directly');
            }
            this.manufacturer = manufacturer;
        }
    }

    class Battery extends Hardware{
        constructor(manufacturer, expectedLife){
            super(manufacturer);
            this.expectedLife = Number(expectedLife);
        }
    }
    class Keyboard extends Hardware{
        constructor(manufacturer, responseTime){
            super(manufacturer);
            this.responseTime = Number(responseTime);
        }
    }
    class Monitor extends Hardware{
        constructor(manufacturer, width, height){
            super(manufacturer);
            this.width = Number(width);
            this.height = height;
        }
    }

    class Computer extends Hardware{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace ) {
            if (new.target === Computer) {
                throw new Error('Abstract class cannot be instantiated directly');
            }
            super(manufacturer);
            this.processorSpeed = Number(processorSpeed);
            this.ram = Number(ram);
            this.hardDiskSpace = Number(hardDiskSpace);

        }
    }

    class Laptop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = Number(weight);
            this.color = color;
            this.battery = battery;
        }
        get battery(){
            return this._battery
        }

        set battery(battery){
            if(battery instanceof Battery){
                this._battery = battery;
            }else{
                throw new TypeError;
            }

        }
    }

    class Desktop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }
        get keyboard(){
            return this._keyboard
        }

        set keyboard(keyboard){
            if(keyboard instanceof Keyboard){
                this._keyboard = keyboard;
            }else{
                throw new TypeError;
            }

        }

        get monitor(){
            return this._monitor;
        }

        set monitor(monitor){
            if(monitor instanceof Monitor){
                this._monitor = monitor;
            }else{
                throw new TypeError;
            }

        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}
let classes = result();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery('Energy',3);
let laptop = new Laptop("Hewlett Packard",2.4,4,0.5,3.12,"Silver",battery);
console.log(laptop.manufacturer)
console.log(laptop.processorSpeed)
console.log(laptop.ram)
console.log(laptop.hardDiskSpace)
console.log(laptop.weight)
console.log(laptop.color)
