class Rectangle {
    constructor(width, height, color) {
        this.width = Number(width);
        this.height = Number(height);
        this.color = color;
    }

    calcArea() {
        return this.width * this.height;
    }
}
let rect = new Rectangle(3, 4, 'blue');
console.log(rect);