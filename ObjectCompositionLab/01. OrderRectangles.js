function sortRectangles(arr){

    function createRectangle(width, height){
        let rectangle = {
            width: width,
            height: height,
            area: () => rectangle.width * rectangle.height,
            compareTo: function(other){
                let result = other.area() - rectangle.area();
                return result || (other.width - rectangle.width);
            }
        };

        return rectangle;


    }
    let result = [];
    for (let [width, height] of arr) {
        let rectangle = createRectangle(width, height);
        result.push(rectangle);
    }
    result.sort((a, b) => a.compareTo(b));
    return (result);

}
sortRectangles([[10,5], [3,20], [5,12]]);