function attachEventsListeners(){
    let button = document.getElementById('convert');
    button.addEventListener('click', conversion);


    let rates = {
       'km': 1000,
       'm': 1,
       'cm': 0.01,
       'mm': 0.001,
       'mi': 1609.34,
       'yrd': 0.9144,
       'ft':0.3048,
       'in': 0.0254,
    };

    function conversion(){
        let amount = Number(document.getElementById('inputDistance').value);
        let convertFrom = document.getElementById('inputUnits').value;
        let convertTo = document.getElementById('outputUnits').value;
        let result = amount * (rates[convertFrom] / rates[convertTo]);
        document.getElementById('outputDistance').value = result;
    }
}