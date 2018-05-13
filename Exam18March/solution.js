class PaymentManager {
    constructor(title) {
        this.title = title;
        this.element = this.createElement();
    }

    render(id) {
        let container = $('#' + id);
        container.append(this.element);
    }

    createElement() {
        let table = $('<table>');
        let caption = $(`<caption>${this.title} Payment Manager</caption>`);

        let tableHead = $('<thead>');
        let tableRow = $('<tr>');
        tableRow.append($(`<th class="name">Name</th>`))
            .append($(`<th class="category">Category</th>`))
            .append($(`<th class="price">Price</th>`))
            .append($(`<th>Actions</th>`));
        tableRow.appendTo(tableRow);
        tableRow.appendTo(caption);


        let tableFoot = $('<tfoot class="input-data">');
        let tRow = $('<tr>');
        tRow.append($(`<td>`)
            .append($('<input name="name" type="text">')));
        tRow.append($(`<td>`)
            .append($('<input name="category" type="text">')));
        tRow.append($(`<td>`)
            .append($('<input name="price" type="number">')));


        let button = ($('<button>Add</button>'));
        button.on('click', addInputs);
        tRow.append(button);


        function addInputs() {

            let name = $(tRow.find('input')[0]);
            let nameVal = name.val();
            let cat = $(tRow.find('input')[1]);
            let catVal = cat.val();
            let price = $(tRow.find('input')[2]);
            let priceVal = price.val();

            let tableBody = $('<tbody class="payments">');

            if(nameVal !== '' && catVal !== '' && priceVal !== ''){
                let row = $('<tr>');
                row.append($(`<td>${nameVal}</td>`));
                row.append($(`<td>${catVal}</td>`));
                row.append($(`<td>${priceVal}</td>`));
                let deleteBtn = $('<button>Delete</button>');
                deleteBtn.on('click', () => {
                    $(row).remove()
                });
                row.append(deleteBtn);

                tableBody.append(row);

                name.val('');
                cat.val('');
                price.val('');
            }
            return caption.append(tableBody);
        }
        tableFoot.append(tRow);
        caption.append(tableFoot);
        caption.appendTo(table);

        return table
    }

}


