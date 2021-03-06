let Record = (function(){
    let currentId = 0;
    return class Record {
        constructor(temperature, humidity, pressure, windSpeed){
            this.temperature = temperature;
            this.humidity = humidity;
            this.pressure = pressure;
            this.windSpeed = windSpeed;
            this.id = currentId++;
        }

        get status(){
            if(this.temperature < 20 && (this.pressure < 700 || this.pressure > 900)
            && this.windSpeed > 25){
                return 'Stormy';
            }
            return 'Not stormy';
        }

        toString(){
           return  `Reading ID: ${this.id}
Temperature: ${this.temperature}*C
Relative Humidity: ${this.humidity}%
Pressure: ${this.pressure}hpa
Wind Speed: ${this.windSpeed}m/s
Weather: ${this.status}`;

        }
    }
})();
let record1 = new Record(32, 66, 760, 12);
console.log(record1.toString());