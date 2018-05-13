function solution(obj) {
    let myObj = {
        __proto__: {},
        extend: function (template) {
            for (let key in template) {
                if (template.hasOwnProperty(key)){
                    if (typeof template[key] === 'function') {
                        myObj.__proto__[key] = template[key];
                    }else{
                        myObj[key] = template[key];
                    }
                }

            }
        }
    };
    return myObj;

}
let myObj = solution();
let template = {
    extensionMethod: function () {
        console.log('gjfhg')
    },
    extensionProperty: 'someString'

};
myObj.extend(template);
console.log(myObj);