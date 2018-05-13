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


    function createMixins() {
        function computerQualityMixin(classToExtend) {
            classToExtend.prototype.getQuality = function () {
                return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
            };

            classToExtend.prototype.isFast = function () {
                return (this.processorSpeed > (this.ram / 4))
            };
            classToExtend.prototype.isRoomy = function () {
                return (this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed))
            };
        }

        function styleMixin(classToExtend) {
            classToExtend.prototype.isFullSet = function () {

                return this.manufacturer === this.keyboard.manufacturer &&
                    this.manufacturer === this.monitor.manufacturer

            };
            classToExtend.prototype.isClassy = function () {
                return this.battery.expectedLife >= 3
                    && (this.color === 'Silver' || this.color === 'Black')
                    && this.weight < 3;
            }
        }

        return {
            computerQualityMixin,
            styleMixin
        }
    }
}

let mixins = result();
let computerQualityMixin = mixins.computerQualityMixin;
let styleMixin = mixins.styleMixin;

computerQualityMixin(Desktop);
styleMixin(Desktop);
computerQualityMixin(Laptop);
styleMixin(Laptop);

let keyboard = new Keyboard('Logitech',70);
let keyboard2 = new Keyboard('A-4',70);
let monitor = new Monitor('Logitech',28,18);
let battery = new Battery('Energy',3);
let laptop = new Laptop("Hewlett Packard",2.4,4,0.5,2.99,"Silver",battery);
let desktop = new Desktop("Logitech",3.3,8,1,keyboard,monitor);

expect(desktop.getQuality).to.exist;
expect(laptop.getQuality).to.exist;
expect(desktop.getQuality()).to.be.closeTo(4.1,0.01,"Expected quaity did not match");
expect(laptop.getQuality()).to.be.closeTo(2.3,0.01,"Expected quaity did not match");