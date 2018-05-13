function calendar(arr){

    let date = new Date(arr[2], arr[1], 0);
    let month = arr[1];
    let year = arr[2];
    let monthDays = date.getDate();
    date.setDate(1);

    let startingDay = date.getDay();

    if(startingDay === 0){
        startingDay = 7;
    }
    console.log(date);
    console.log(monthDays);
    console.log(startingDay);
    let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    let content = $('#content');
    let table = $(`<table><tr><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></tr></table>`);
    table.append($(`<caption>${monthNames[month - 1]} ${year}</caption>`));

    let currentDay = 1 - startingDay;
    let finished = false;

    while(!finished){
        let row = $('<tr>');
        for (let i = 0; i < 7; i++) {
            let currentCol;
            currentDay++;

            if (currentDay > 0 && currentDay <= monthDays) {
                currentCol = $('<td>' + currentDay + '</td>');
                if (currentDay === arr[0]) {
                    currentCol.addClass('today');
                }
            }else{
                currentCol = $('<td>');
            }
            currentCol.appendTo(row);
            if(currentDay === monthDays){
                finished = true;
            }

        }
        row.appendTo(table);
    }
    table.appendTo(content);

}
